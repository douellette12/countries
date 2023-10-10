import { Component } from '@angular/core';
import { CountryService } from '../country.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  countryData: any

  countrySearchForm = new FormGroup({
    input: new FormControl('', [Validators.required])
  })

  countryFilterForm = new FormGroup({
    selection: new FormControl('Filter by Region', [Validators.required])
  })

  searchCountry: any

  constructor(private service: CountryService) {
    this.service.get(
      {
        'fields': "name,flags,languages,nativeName,population,region,subregion,currencies,tld,capital,borders"
    }).subscribe({
      next: (response: any) => {
        this.countryData = response
        this.searchCountry = this.countryData
      },
      error: (error: HttpErrorResponse) => {
        console.error(error)
      }
    })
  }

  filter() {
    const selection = this.countryFilterForm.value.selection
    if (!selection) {
      this.searchCountry = this.countryData
    }
    this.searchCountry = this.countryData.filter((countryData: any) => {
      return countryData?.region.toLowerCase().includes(selection?.toLowerCase())
    })

  }

  search() {
    const input = this.countrySearchForm.value.input
    if (!input) {
      this.searchCountry = this.countryData
    }
    this.searchCountry = this.countryData.filter((countryData: any) => {
      return countryData?.name.common.toLowerCase().includes(input?.toLowerCase())
    })
  }
  
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent{
  countryData: any
  nativeName: any
  nativeNameKeys: any
  currencies: any
  currenciesKeys: any
  languages: any
  languagesKeys: any

  constructor(private router: Router) {
    this.countryData = this.router.getCurrentNavigation()?.extras.state
    this.nativeName = this.countryData.name.nativeName
    this.currencies = this.countryData.currencies
    this.languages = this.countryData.languages
    console.log(this.countryData)
    this.nativeNameKeys = Object.keys(this.nativeName)
    this.currenciesKeys = Object.keys(this.currencies)
    this.languagesKeys = Object.keys(this.languages)
  }

}

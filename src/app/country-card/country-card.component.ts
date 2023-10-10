import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent{

  @Input() countryData: any
  
}

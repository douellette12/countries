import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends DataService {

  constructor(http: HttpClient) {
    super("https://restcountries.com/v3.1/all", http)
   }
}

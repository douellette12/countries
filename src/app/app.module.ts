import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { CountryService } from './country.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { ColorModeComponent } from './color-mode/color-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CountryCardComponent,
    CountryDetailComponent,
    ColorModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

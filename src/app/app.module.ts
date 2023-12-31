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
import { AuthModule } from '@auth0/auth0-angular';

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
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'countries.us.auth0.com',
      clientId: 'y6uIhnBApWjv7wyPVJriKuPVPI0IPYdZ',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [DataService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

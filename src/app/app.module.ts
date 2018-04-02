import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AuthService } from './service/auth.service';
import { WeatherService } from './service/weather.service';
import { HomeComponent } from './components/home/home.component';
import { BooksDetailsComponent } from './components/books-details/books-details.component';
import { NovelaComponent } from './components/novela/novela.component';
import { TecnicoComponent } from './components/tecnico/tecnico.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksDetailsComponent,
    NovelaComponent,
    TecnicoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AuthService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { AuthService } from './service/auth.service';
import { WeatherService } from './service/weather.service';
import { HomeComponent } from './components/home/home.component';
import { BooksDetailsComponent } from './components/books-details/books-details.component';
import { NovelaComponent } from './components/novela/novela.component';
import { TecnicoComponent } from './components/tecnico/tecnico.component';
import { AnyBooksComponent } from './components/any-books/any-books.component';
import { InMemorydataService } from './service/in-memorydata.service';
import { VerificacionMemoryComponent } from './components/verificacion-memory/verificacion-memory.component';
import { UsersService } from './service/users.service';
import { HttpModule } from '@angular/http';
import { MatematicaComponent } from './components/matematica/matematica.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksDetailsComponent,
    NovelaComponent,
    TecnicoComponent,
    AnyBooksComponent,
    VerificacionMemoryComponent,
    MatematicaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemorydataService
    )
  ],
  providers: [AuthService, WeatherService , UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

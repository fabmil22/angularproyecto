import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { WeatherService } from '../../service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 // providers:[]
})
export class HomeComponent implements OnInit {

  constructor( private  auth: AuthService, private weather: WeatherService) { }

  ngOnInit() {
  }

}

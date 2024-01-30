import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../service/weather.service';
@Component({
  selector: 'app-left-container',
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.css'],
})
export class LeftContainerComponent implements OnInit {
 
  constructor(private api: WeatherService) {}
  //display headlines
  topHeadlinesData: any = [];
  ngOnInit(): void {
    this.api.tcHeadlines().subscribe((result: any) => {
      
      this.topHeadlinesData = result.articles;
    });
  }
}

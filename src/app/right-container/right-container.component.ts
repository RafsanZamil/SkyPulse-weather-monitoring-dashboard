import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css'],
})
export class RightContainerComponent {
  longText = `The Shiba  `;
  //variable to control tabs
  today: boolean = false;
  week: boolean = true;

  //variable to control metrics
  celsius: boolean = true;
  farenheit: boolean = false;
  //functions for tabs
  onTodayClick() {
    this.today = true;
    this.week = false;
  }
  onWeekClick() {
    this.week = true;
    this.today = false;
  }
  //functions for metrics
  onCelsiusClick() {
    this.celsius = true;
    this.farenheit = false;
  }
  onFarenheitClick() {
    this.farenheit = true;
    this.celsius = false;
  }
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check if the user has scrolled down more than a certain amount (adjust as needed)
    this.isScrolled = window.scrollY > 100;
  }
}

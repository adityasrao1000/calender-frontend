import { Component } from '@angular/core';
import { DayComponent } from './day.component';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  years: number[] = [];
  current_year: number = new Date().getFullYear();
  months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

  dates = [{day: 1, events: ['meeting at 10', 'sales enquiry'] },
           {day: 2, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 3, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 4, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 5, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 6, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 7, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 8, events: [] },
           {day: 9, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 10, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 11, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 12, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 13, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 14, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 15, events: [] },
           {day: 16, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 17, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 18, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 19, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 20, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 21, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 22, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 23, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 24, events: [] },
           {day: 25, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 26, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 27, events: ['meeting at 8'] },
           {day: 28, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 29, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 30, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 31, events: ['ring bell', 'lazer event', 'more..'] }
           ];
  constructor(private router: Router) {
    this.years.push(this.current_year - 1);
    this.years.push(this.current_year );
    this.years.push(this.current_year + 1);
  }
  redirect(date: string) {
   this.router.navigate([`details/${date}`]);
  }

  disp(month: string): void {
      if (month === '1') {
       this.dates = [{day: 1, events: ['meeting at 10', 'sales enquiry'] },
           {day: 2, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 3, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 4, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 5, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 6, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 7, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 8, events: [] },
           {day: 9, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 10, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 11, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 12, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 13, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 14, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 15, events: [] },
           {day: 16, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 17, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 18, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 19, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 20, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 21, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 22, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 23, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 24, events: [] },
           {day: 25, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 26, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 27, events: ['meeting at 8'] },
           {day: 28, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 29, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 30, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 31, events: ['ring bell', 'lazer event', 'more..'] }
           ];
      }
      if (month === '2') {
        this.dates = [{day: 1, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 2, events: ['ring bell', 'calender'] },
           {day: 3, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 4, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 5, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 6, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 7, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 8, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 9, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 10, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 11, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 12, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 13, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 14, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 15, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 16, events: ['ring bell', 'show event'] },
           {day: 17, events: [] },
           {day: 18, events: [] },
           {day: 19, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 20, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 21, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 22, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 23, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 24, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 25, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 26, events: ['ring bell', 'lazer event', 'more..'] },
           {day: 28, events: ['ring bell', 'lazer event', 'more..'] }
           ];
      }
    }
}

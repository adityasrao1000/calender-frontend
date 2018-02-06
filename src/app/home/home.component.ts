import { Component } from '@angular/core';
import { DayComponent } from './day.component';
import { DateService } from './date.service';
import { Router } from '@angular/router';
import { Event } from './event';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DateService]
})

export class HomeComponent {

  years: number[] = [];
  current_year: number = new Date().getFullYear();
  months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

  dates: Event[];
  constructor(private router: Router, private dateService: DateService) {
    this.years.push(this.current_year - 1);
    this.years.push(this.current_year );
    this.years.push(this.current_year + 1);
    this.disp('1');
  }

  redirect(date: string) {
   this.router.navigate([`details/${date}`]);
  }

  disp(month: string): void {
      this.dateService.dates(month)
      .subscribe(dates => this.dates = dates);
  }
}

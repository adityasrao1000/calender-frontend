import { Component } from '@angular/core';
import { DayComponent } from './day.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
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

  disp(year: string): void {
      if (year === 'jan') {
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
      if (year === 'feb') {
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

import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './details.component.html'
})

export class DateDetailsComponent {
  date;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => this.date = res);
  }

}

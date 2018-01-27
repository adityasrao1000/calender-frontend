import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})

export class DayComponent {
@Input() day;
@Input() num;
  show(): void {
    alert(this.day);
  }
}

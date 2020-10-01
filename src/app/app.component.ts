import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals: Goal[] = [
    { id: 1, name: 'Watch Finding Nemo' },
    { id: 2, name: 'Buy cookies' },
    { id: 3, name: 'Get new phone case' },
    { id: 4, name: 'Get Dog food' },
    { id: 5, name: 'Solve math homework' },
    { id: 6, name: 'Plot my world nomination plan' }

  ];
}

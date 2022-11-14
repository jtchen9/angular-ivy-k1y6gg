import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'src089',
  templateUrl: './src089.component.html',
  styleUrls: ['./src089.component.css'],
})
export class Src089Component {
  obsValue = new Observable((observer) => {
    console.log('Observable starts');
    setTimeout(() => {
      observer.next('90000');
    }, 5000);
  }).pipe(shareReplay());
}

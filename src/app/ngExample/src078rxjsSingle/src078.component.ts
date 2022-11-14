import { Component } from '@angular/core';
import { of } from 'rxjs';
import { single } from 'rxjs/operators';

@Component({
  selector: 'src078',
  templateUrl: './src078.component.html',
  styleUrls: ['./src078.component.css'],
})
export class Src078Component {
  // src = of(1, 2, 3, 4, 5).pipe(single(val => val == 3));
  // src = of(1, 2, 3, 4, 3).pipe(single(val => val == 3));
  // src = of(1, 2, 3, 4, 3).pipe(single(val => val == 5));
  // src = of(1, 2, 3, 4, 3).pipe(single());
  src = of(1).pipe(single());

  ngOnInit() {
    this.src.subscribe((value) => {
      console.log(value);
    });
  }
}

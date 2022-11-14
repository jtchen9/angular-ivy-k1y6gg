import { Component } from '@angular/core';
import { of } from 'rxjs';
import { first, last } from 'rxjs/operators';

@Component({
  selector: 'src077',
  templateUrl: './src077.component.html',
  styleUrls: ['./src077.component.css'],
})
export class Src077Component {
  // src = of(1, 2, 3, 4, 5).pipe(first());
  // src = of(1, 2, 3, 4, 5).pipe(first((val) => val > 3));
  // src = of(1, 2, 3, 4, 5).pipe(first((val) => val > 10));
  src = of(1, 2, 3, 4, 5).pipe(first((val) => val > 10, 100));
  // src = of(1, 2, 3, 4, 5).pipe(last());
  // src = of(1, 2, 3, 4, 5).pipe(last((val) => val < 3));
  // src = of(1, 2, 3, 4, 5).pipe(last((val) => val > 10));
  // src = of(1, 2, 3, 4, 5).pipe(last(val => val > 10,100));

  ngOnInit() {
    this.src.subscribe((value) => {
      console.log(value);
    });
  }
}

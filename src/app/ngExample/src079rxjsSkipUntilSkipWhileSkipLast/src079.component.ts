import { Component } from '@angular/core';
import { skipWhile, skipUntil, skipLast } from 'rxjs/operators';
import { of, interval, timer } from 'rxjs';

@Component({
  selector: 'src079',
  templateUrl: './src079.component.html',
  styleUrls: ['./src079.component.css'],
})
export class Src079Component {
  ngOnInit() {
    // of(2, 4, 5, 6, 7, 8, 9, 10)
    //   .pipe(skipWhile((val) => val % 2 == 0))
    //   .subscribe((val) => console.log(val));

    // interval(1000)
    //   .pipe(skipUntil(timer(6000)))
    //   .subscribe((val) => console.log(val));

    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(skipLast(5))
      .subscribe((val) => console.log(val));
  }
}

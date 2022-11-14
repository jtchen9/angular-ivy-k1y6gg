import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';
import {
  zip,
  zipWith,
  map,
  combineLatest,
  withLatestFrom,
  combineLatestWith,
} from 'rxjs/operators';

@Component({
  selector: 'src097',
  templateUrl: './src097.component.html',
  styleUrls: ['./src097.component.css'],
})
export class Src097Component implements OnInit {
  main = from('hello').pipe(
    zipWith(interval(500)),
    map(([x, y]) => x)
  );
  some = from([0, 1, 0, 0, 0, 1]).pipe(
    zipWith(interval(300)),
    map(([x, y]) => x)
  );

  // example = this.main.pipe(
  //   combineLatestWith(this.some), map(([x, y]) => {
  //     return y === 1 ? x.toUpperCase() : x;
  //   })
  // );
  example = this.main.pipe(
    withLatestFrom(this.some, (x, y) => {
      return y === 1 ? x.toUpperCase() : x;
    })
  );

  ngOnInit() {
    this.example.subscribe({
      next: (value: any) => {
        console.log(value);
      },
      error: (err: any) => {
        console.log('Error: ' + err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}

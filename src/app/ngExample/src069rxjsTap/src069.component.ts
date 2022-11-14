import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'src069',
  templateUrl: './src069.component.html',
  styleUrls: ['./src069.component.css'],
})
export class Src069Component implements OnInit {
  ngOnInit() {
    of(1, 2, 3, 4, 5)
      .pipe(
        tap((val) => {
          console.log('Before ' + val);
        }),
        map((val) => {
          if (val == 3) {
            throw Error;
          }
          return val + 5;
        }),
        tap({
          next: (val) => {
            console.log('After ' + val);
          },
          error: (err) => {
            console.log('Tap Error');
            console.log(err);
          },
          complete: () => {
            console.log('Tap Complete');
          },
        })
      )
      .subscribe((val) => console.log(val));
  }
}

import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap, concatMap } from 'rxjs/operators';

@Component({
  selector: 'src083',
  templateUrl: './src083.component.html',
  styleUrls: ['./src083.component.css'],
})
export class Src083Component {
  dt = new Date();

  ngOnInit() {
    // of(1, 2, 3, 4, 5)
    //   .pipe(
    //     tap((val) => console.log('Before ' + val)),
    //     delay(1000)
    //   )
    //   .subscribe({
    //     next: (val) => console.log(val),
    //     error: (e) => console.log(e),
    //     complete: () => console.log('Complete'),
    //   });
    //
    // of(1, 2, 3, 4, 5)
    //   .pipe(
    //     tap((val) => console.log('Before ' + val)),
    //     concatMap((item) => of(item).pipe(delay(1000)))
    //   )
    //   .subscribe({
    //     next: (val) => console.log(val),
    //     error: (e) => console.log(e),
    //     complete: () => console.log('Complete'),
    //   });
    //
    console.log(this.dt);
    this.dt.setSeconds(this.dt.getSeconds() + 5);
    console.log(this.dt);
    of(1, 2, 3, 4, 5)
      .pipe(
        tap((val) => console.log('Tap ' + val)),
        delay(this.dt)
      )
      .subscribe({
        next: (val) => console.log(val),
        error: (e) => console.log(e),
        complete: () => console.log('Complete'),
      });
  }
}

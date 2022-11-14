import { Component } from '@angular/core';
import { of, Subject, timer } from 'rxjs';
import { tap, delayWhen } from 'rxjs/operators';

@Component({
  selector: 'src084',
  templateUrl: './src084.component.html',
  styleUrls: ['./src084.component.css'],
})
export class Src084Component {
  click$ = new Subject<Event>();

  ngOnInit() {
    // of(1, 2, 3, 4, 5)
    //   .pipe(
    //     tap((val) => console.log('Before ' + val)),
    //     delayWhen(() => timer(1000))
    //   )
    //   .subscribe({
    //     next: (val) => console.log(val),
    //     error: (e) => console.log(e),
    //     complete: () => console.log('Complete'),
    //   });
    //
    of(1, 2, 3, 4, 5)
      .pipe(
        tap((val) => console.log('Before ' + val)),
        delayWhen(() => this.click$.asObservable())
      )
      .subscribe({
        next: (val) => console.log(val),
        error: (e) => console.log(e),
        complete: () => console.log('Complete'),
      });
  }

  emit($event: Event) {
    this.click$.next($event);
  }
}

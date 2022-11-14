import { Component } from '@angular/core';
import { map, retry, tap, retryWhen } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'src087',
  templateUrl: './src087.component.html',
  styleUrls: ['./src087.component.css'],
})
export class Src087Component {
  ngOnInit() {
    interval(1000)
      .pipe(
        map((val) => {
          if (val > 2) throw new Error('Invalid Value');
          return val;
        }),
        retry(2)
        // retryWhen((error) => error.pipe(tap(() => console.log('Retrying... '))))
      )
      .subscribe({
        next: (val) => console.log(val),
        error: (err) => console.log(err),
        complete: () => console.log('Complete'),
      });
  }
}

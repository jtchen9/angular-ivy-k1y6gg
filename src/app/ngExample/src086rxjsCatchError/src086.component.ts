import { Component } from '@angular/core';
import { catchError, from, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'src086',
  templateUrl: './src086.component.html',
  styleUrls: ['./src086.component.css'],
})
export class Src086Component {
  srcArray = from([1, 2, 'A', 4]);
  // obs = this.srcArray
  // .pipe(
  //   map(val => {
  //     let result = val as number * 2;
  //     if (Number.isNaN(result)) {
  //       console.log('Errors Occurred in Stream')
  //       throw new Error("Result is NaN")
  //     }
  //     return result
  //   }),
  //   catchError(error => {
  //     console.log('Caught in CatchError. Returning 0')
  //     return of(0);     //return from(['A','B','C'])
  //   })
  // );
  obs = this.srcArray.pipe(
    map((val) => {
      let result = (val as number) * 2;
      if (Number.isNaN(result)) {
        console.log('Errors Occurred in Stream');
        throw new Error('Result is NaN');
      }
      return result;
    }),
    catchError((error) => {
      console.log('Caught in CatchError. Throwing error');
      throw new Error(error);
    })
  );

  ngOnInit() {
    this.obs.subscribe({
      next: (el) => {
        console.log('Value Received :' + el);
      },
      error: (err) => {
        console.log('Error caught at Subscriber :' + err);
      },
      complete: () => console.log('Processing Complete'),
    });
  }
}

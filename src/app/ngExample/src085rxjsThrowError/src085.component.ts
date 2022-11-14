import { Component } from '@angular/core';
import { throwError, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'src085',
  templateUrl: './src085.component.html',
  styleUrls: ['./src085.component.css'],
})
export class Src085Component {
  // obs = throwError(() => new Error('Error From ThrowError observable'));
  srcArray = from([1, 2, 'A', 4]);
  obs = this.srcArray.pipe(
    map((val) => {
      let result = (val as number) * 2;
      if (Number.isNaN(result)) {
        console.log('Error in the observable');
        throw Error('Not a Number');
      }
      return result;
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

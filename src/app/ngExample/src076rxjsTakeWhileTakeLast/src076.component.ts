import { Component } from '@angular/core';
import { of, range } from 'rxjs';
import { takeWhile, takeLast } from 'rxjs/operators';

@Component({
  selector: 'src076',
  templateUrl: './src076.component.html',
  styleUrls: ['./src076.component.css'],
})
export class Src076Component {
  // //TakeWhile:
  // obs = of(1, 2, 3, 1, 2, 3, 1, 2, 3).pipe(takeWhile((val) => val < 3));
  // ngOnInit() {
  //   this.obs.subscribe((val) => console.log(val));
  // }

  // //TakeLast:
  obs = range(1, 100).pipe(takeLast(3));
  ngOnInit() {
    this.obs.subscribe((val) => console.log(val));
  }
}

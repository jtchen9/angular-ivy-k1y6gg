import { Component } from '@angular/core';
import { scan } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'src080',
  templateUrl: './src080.component.html',
  styleUrls: ['./src080.component.css'],
})
export class Src080Component {
  ngOnInit() {
    of(1, 2, 3, 4, 5)
      // .pipe(scan((acc, value) => acc + value, 10))
      .pipe(scan((acc: number[], value) => [...acc, value], []))
      .subscribe({
        next: (val) => console.log(val),
        error: (e) => console.log(e),
        complete: () => console.log('Complete'),
      });
  }
}

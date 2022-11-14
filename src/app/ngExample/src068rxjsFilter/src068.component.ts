import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'src068',
  templateUrl: './src068.component.html',
  styleUrls: ['./src068.component.css'],
})
export class Src068Component {
  ngOnInit() {
    of(1, null, 3, undefined, 5)
      .pipe(filter((value) => value !== undefined && value !== null))
      .subscribe((val) => console.log(val));
  }
}

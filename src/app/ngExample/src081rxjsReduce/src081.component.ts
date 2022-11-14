import { Component } from '@angular/core';
import { reduce } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'src081',
  templateUrl: './src081.component.html',
  styleUrls: ['./src081.component.css'],
})
export class Src081Component {
  clickStream: Subject<Event> | undefined;

  startCounting(event: Event) {
    this.clickStream = new Subject<Event>();
    this.clickStream
      .asObservable()
      .pipe(reduce((acc, value) => acc + 1, 0))
      .subscribe((val) => console.log('You clicked ' + val + ' times'));
  }
  clickMe(event: Event) {
    console.log('Clicked');
    if (this.clickStream) this.clickStream.next(event);
  }
  stopCounting() {
    this.clickStream?.complete();
  }
}

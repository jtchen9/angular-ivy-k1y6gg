import { Component } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'src075',
  templateUrl: './src075.component.html',
  styleUrls: ['./src075.component.css'],
})
export class Src075Component {
  notifier = new Subject();

  obs = interval(1000).pipe(takeUntil(this.notifier));

  ngOnInit() {
    this.obs.subscribe((val) => console.log(val));
  }

  stopObs() {
    this.notifier.next('stop');
    this.notifier.complete();
  }
}

import { Component } from '@angular/core';
import { BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'src092',
  templateUrl: './src092.component.html',
  styleUrls: ['./src092.component.css'],
})
export class Src092Component {
  // subject$ = new BehaviorSubject('0');
  // subject$ = new ReplaySubject();
  subject$ = new AsyncSubject();

  ngOnInit() {
    this.subject$.next('1');
    this.subject$.next('2');

    this.subject$.subscribe({
      next: (val) => console.log('Sub1 ' + val),
      error: (err) => console.error('Sub1 ' + err),
      complete: () => console.log('Sub1 Complete'),
    });

    this.subject$.next('3');
    this.subject$.next('4');

    this.subject$.subscribe((val) => {
      console.log('sub2 ' + val);
    });

    this.subject$.next('5');
    this.subject$.complete();
    this.subject$.error('err');

    this.subject$.next('6');

    this.subject$.subscribe({
      next: (val) => console.log('sub3 ' + val),
      error: (err) => console.error('sub3 ' + err),
      complete: () => console.log('sub3 Complete'),
    });
  }
}

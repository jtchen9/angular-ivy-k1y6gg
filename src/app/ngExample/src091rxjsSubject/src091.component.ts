import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'src091',
  templateUrl: './src091.component.html',
  styleUrls: ['./src091.component.css'],
})
export class Src091Component {
  subject$ = new Subject();

  ngOnInit() {
    this.subject$.subscribe((val) => {
      console.log(val);
    });

    this.subject$.next('1');
    this.subject$.next('2');
    this.subject$.complete();
  }
}

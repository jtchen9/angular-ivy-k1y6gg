import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  id = Date.now();
  // sub = new Subscription();
  // src = interval(2000);

  subs: Subscription[] = [];
  src1 = interval(2000);
  src2 = interval(2000);
  src3 = interval(2000);

  ngOnInit() {
    // console.log('Component Created ' + this.id);

    // this.sub = this.src.subscribe((value) => {
    //   console.log('Received ' + this.id);
    // });
    //
    this.subs.push(
      this.src1.subscribe((value) => {
        console.log('Received ' + this.id);
      })
    );
    this.subs.push(
      this.src2.subscribe((value) => {
        console.log('Received ' + this.id);
      })
    );
    this.subs.push(
      this.src3.subscribe((value) => {
        console.log('Received ' + this.id);
      })
    );
  }

  ngOnDestroy() {
    console.log('Component Destroyed ' + this.id);
    // this.sub.unsubscribe();
    this.subs.forEach(sub => sub.unsubscribe());
  }
}

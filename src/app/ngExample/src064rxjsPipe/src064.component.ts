import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'src064',
  templateUrl: './src064.component.html',
  styleUrls: ['./src064.component.css'],
})
export class Src064Component implements OnInit {
  obs1 = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);
    observer.complete();
  }).pipe(
    tap((data) => console.log('tap ' + data)), //tap
    filter((data) => (data as number) > 2), //filter
    tap((data) => console.log('filter ' + data)), //tap
    map((val) => {
      return (val as number) * 2;
    }), //map
    tap((data) => console.log('final ' + data)) //tap
  );

  customOperator = pipe(
    tap((data) => console.log('tap ' + data)),
    filter((data) => (data as number) > 12),
    tap((data) => console.log('filter ' + data)),
    map((val) => {
      return (val as number) * 2;
    })
  );
  obs2 = new Observable((observer) => {
    observer.next(11);
    observer.next(12);
    observer.next(13);
    observer.next(14);
    observer.next(15);
    observer.complete();
  }).pipe(
    this.customOperator,
    tap((data) => console.log('final ' + data))
  );

  ngOnInit() {
    this.obs1.subscribe(console.log);
    // this.obs2.subscribe(console.log);
    // this.customOperator(this.obs2).subscribe();
  }
}

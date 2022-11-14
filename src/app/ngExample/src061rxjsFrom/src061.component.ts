import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'src061',
  templateUrl: './src061.component.html',
  styleUrls: ['./src061.component.css'],
})
export class Src061Component implements OnInit {
  ngOnInit(): void {
    this.obsfrom3.subscribe({
      next: (val) => console.log(val),
      error: (error) => console.log('error'),
      complete: () => console.log('complete'),
    });
  }
  array3 = [1, 2, 3, 4, 5, 6, 7];
  obsfrom1 = from(this.array3);

  obsfrom2 = from('Hello World');

  myMap = new Map<number, string>().set(0, 'Hello').set(1, 'World');
  obsfrom3 = from(this.myMap);

  *generateNos() {
    var i = 0;
    while (i < 5) {
      i = i + 1;
      yield i;
    }
  }
  obsfrom4 = from(this.generateNos());

  promiseSource = from(new Promise((resolve) => resolve('Hello World!')));
  obsfrom5 = from(this.promiseSource);
}

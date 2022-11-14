import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'src060',
  templateUrl: './src060.component.html',
  styleUrls: ['./src060.component.css'],
})
export class Src060Component implements OnInit {
  array = [1, 2, 3, 4, 5, 6, 7];
  array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  obsof1 = of(this.array);
  obsof2 = of(this.array, this.array2);
  obsof3 = of(1, 2, 3);
  obsof4 = of('Hello', 'World');
  obsof5 = of(100, [1, 2, 3, 4, 5, 6, 7], 'Hello World');

  ngOnInit() {
    this.obsof5.subscribe({
      next: (val) => console.log(val),
      error: (error) => console.log('error'),
      complete: () => console.log('complete'),
    });
  }
}

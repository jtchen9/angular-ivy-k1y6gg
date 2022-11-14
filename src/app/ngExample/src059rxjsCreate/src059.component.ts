import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'src059',
  templateUrl: './src059.component.html',
  styleUrls: ['./src059.component.css'],
})
export class Src059Component implements OnInit {
  obs = new Observable((observer) => {
    console.log('Observable starts');
    observer.next('1');
    observer.next('2');
    observer.next('3');
    observer.next('4');
    observer.next('5');
    observer.complete();
  });

  ngOnInit() {
    this.obs.subscribe({
      next: (val) => {
        console.log(val);
      },
      error: (error) => {
        console.log('error');
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }
}

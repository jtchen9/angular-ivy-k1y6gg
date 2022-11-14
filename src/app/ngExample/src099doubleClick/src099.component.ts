import { Component, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { bufferTime, filter } from 'rxjs/operators';

@Component({
  selector: 'src099',
  templateUrl: './src099.component.html',
  styleUrls: ['./src099.component.css'],
})
export class Src099Component implements AfterViewInit {
  button: any;
  click: any;
  example: any;

  ngAfterViewInit() {
    this.button = document.getElementById('demo');
    this.click = fromEvent(this.button, 'click');
    this.example = this.click.pipe(
      bufferTime(500),
      filter((arr: any) => arr.length >= 2)
    );

    this.example.subscribe({
      next: (value: any) => {
        console.log('success');
      },
      error: (err: any) => {
        console.log('Error: ' + err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}

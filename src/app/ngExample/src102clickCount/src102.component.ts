import { Component, AfterViewInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, count, window, switchAll } from 'rxjs/operators';

@Component({
  selector: 'src102',
  templateUrl: './src102.component.html',
  styleUrls: ['./src102.component.css'],
})
export class Src102Component implements AfterViewInit {
  button: any;
  click: any;
  source: any;
  example: any;

  ngAfterViewInit() {
    this.button = document.getElementById('demo');
    this.click = fromEvent(this.button, 'click');
    this.source = interval(5000);
    this.example = this.click.pipe(window(this.source));

    this.example
      .pipe(
        map((innerObservable: any) => innerObservable.pipe(count())),
        switchAll()
      )
      .subscribe(console.log);
  }
}

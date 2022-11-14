import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'src063',
  templateUrl: './src063.component.html',
  styleUrls: ['./src063.component.css'],
})
export class Src063Component {
  el: any;

  ngAfterViewInit() {
    this.el = document.getElementById('abcd')!;
    fromEvent(this.el, 'click').subscribe((evt: any) => {
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
    });
  }
}

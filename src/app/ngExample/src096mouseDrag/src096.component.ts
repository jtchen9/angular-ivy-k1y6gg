import { Component, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil, map, concatAll, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'src096',
  templateUrl: './src096.component.html',
  styleUrls: ['./src096.component.css'],
})
export class Src096Component implements AfterViewInit {
  body = document.body;
  dragDOM: any;
  mouseDown: any;
  mouseUp: any;
  mouseMove: any;

  ngAfterViewInit(): void {
    this.dragDOM = document.getElementById('drag');
    this.mouseDown = fromEvent(this.dragDOM, 'mousedown');
    this.mouseUp = fromEvent(this.body, 'mouseup');
    this.mouseMove = fromEvent(this.body, 'mousemove');

    this.mouseDown
      .pipe(
        map((event: any) => this.mouseMove.pipe(takeUntil(this.mouseUp))),
        concatAll(),
        // map((event: any) => ({ x: event.clientX, y: event.clientY })),
        // ===>  better version below
        withLatestFrom(this.mouseDown, (move: any, down: any) => {
          return {
            x: move.clientX - down.offsetX,
            y: move.clientY - down.offsetY,
          };
        })
      )
      .subscribe((pos: any) => {
        this.dragDOM.style.left = pos.x + 'px';
        this.dragDOM.style.top = pos.y + 'px';
      });
  }
}

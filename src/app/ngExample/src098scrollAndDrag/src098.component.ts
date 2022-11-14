import { Component, AfterViewInit } from '@angular/core';
import {
  concatAll,
  filter,
  fromEvent,
  map,
  takeUntil,
  withLatestFrom,
} from 'rxjs';

@Component({
  selector: 'src098',
  templateUrl: './src098.component.html',
  styleUrls: ['./src098.component.css'],
})
export class Src098Component implements AfterViewInit {
  body = document.body;
  video: any;
  anchor: any;
  scroll: any;
  mouseDown: any;
  mouseUp: any;
  mouseMove: any;

  validValue = (value: number, max: number, min: number) => {
    return Math.min(Math.max(value, min), max);
  };
  ngAfterViewInit() {
    this.video = document.getElementById('video');
    this.anchor = document.getElementById('anchor');
    this.scroll = fromEvent(document, 'scroll');
    this.mouseDown = fromEvent(this.video, 'mousedown');
    this.mouseUp = fromEvent(this.body, 'mouseup');
    this.mouseMove = fromEvent(this.body, 'mousemove');
    this.scroll
      .pipe(map((e) => this.anchor.getBoundingClientRect().bottom < 0))
      .subscribe((bool: any) => {
        if (bool) {
          this.video.classList.add('video-fixed');
        } else {
          this.video.classList.remove('video-fixed');
        }
      });

    this.mouseDown
      .pipe(
        filter((e) => this.video.classList.contains('video-fixed')),
        map((e) => this.mouseMove.pipe(takeUntil(this.mouseUp))),
        concatAll(),
        withLatestFrom(this.mouseDown, (move: any, down: any) => {
          return {
            x: this.validValue(
              move.clientX - down.offsetX,
              window.innerWidth - 320,
              0
            ),
            y: this.validValue(
              move.clientY - down.offsetY,
              window.innerHeight - 180,
              0
            ),
          };
        })
      )
      .subscribe((pos: any) => {
        this.video.style.top = pos.y + 'px';
        this.video.style.left = pos.x + 'px';
      });
  }
}

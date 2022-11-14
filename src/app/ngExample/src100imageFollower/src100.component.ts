import { Component, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'src100',
  templateUrl: './src100.component.html',
  styleUrls: ['./src100.component.css'],
})
export class Src100Component implements AfterViewInit {
  button: any;
  click: any;
  example: any;

  ngAfterViewInit() {
    var imgList = document.getElementsByTagName('img');
    var movePos = fromEvent(document, 'mousemove').pipe(
      map((e: any) => ({
        x: e.clientX,
        y: e.clientY,
      }))
    );
    const delayTime = 60;

    Array.from(imgList).forEach((item, index) => {
      movePos.pipe(delay(delayTime * index)).subscribe(function (pos: any) {
        item.style.transform =
          'translate3d(' + pos.x + 'px, ' + pos.y + 'px, 0)';
      });
    });
  }
}

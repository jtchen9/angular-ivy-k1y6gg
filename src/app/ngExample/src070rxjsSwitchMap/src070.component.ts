import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'src070',
  templateUrl: './src070.component.html',
})
export class Src070Component implements AfterViewInit {
  @ViewChild('btn') button: ElementRef | undefined;
  clicks$: Observable<any> | undefined;

  ngAfterViewInit() {
    this.clicks$ = fromEvent(this.button?.nativeElement, 'click');
    this.clicks$
      .pipe(
        switchMap(() => {
          return interval(500);
        })
      )
      .subscribe((val) => console.log(val));
  }
}

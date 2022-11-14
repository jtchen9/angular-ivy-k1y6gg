import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'src073',
  templateUrl: './src073.component.html',
})
export class Src073Component implements AfterViewInit {
  @ViewChild('btn') button: ElementRef | undefined;
  clicks$: Observable<any> | undefined;
  count: number = 0;

  ngAfterViewInit() {
    this.clicks$ = fromEvent(this.button?.nativeElement, 'click');
    this.clicks$
      .pipe(
        concatMap(() => {
          this.count = this.count + 1;
          return this.delayedObs(this.count);
        })
      )
      .subscribe((val) => console.log(val));
  }

  delayedObs(count: number) {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(count + ' A');
      }, 1000);
      setTimeout(() => {
        observer.next(count + ' B');
      }, 2000);
      setTimeout(() => {
        observer.next(count + ' C');
      }, 3000);
      setTimeout(() => {
        observer.next(count + ' D');
      }, 4000);
      setTimeout(() => {
        observer.next(count + ' E');
        observer.complete();
      }, 5000);
    });
  }
}

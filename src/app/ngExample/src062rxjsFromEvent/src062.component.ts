import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'src062',
  templateUrl: './src062.component.html',
  styleUrls: ['./src062.component.css'],
})
export class Src062Component implements AfterViewInit, OnDestroy {
  @ViewChild('btn') button: ElementRef | undefined;
  @ViewChild('someInput') someInput: ElementRef | undefined;

  buttonSubscription: Subscription | undefined;
  buttonSubscription2: Subscription | undefined;
  buttonSubscription3: Subscription | undefined;

  ngAfterViewInit() {
    this.buttonSubscription = fromEvent(this.button?.nativeElement, 'click')
      .pipe(debounceTime(300))
      .subscribe((res) => console.log(res));
    this.buttonSubscription2 = fromEvent(
      this.someInput?.nativeElement,
      'keyup'
    ).subscribe((res) => console.log(res));
    this.buttonSubscription3 = fromEvent(window, 'scroll').subscribe((val) =>
      console.log(val)
    );
  }

  ngOnDestroy() {
    this.buttonSubscription?.unsubscribe();
    this.buttonSubscription2?.unsubscribe();
    this.buttonSubscription3?.unsubscribe();
  }
}

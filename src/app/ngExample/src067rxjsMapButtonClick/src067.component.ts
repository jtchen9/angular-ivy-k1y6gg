import { Component, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'src067',
  templateUrl: './src067.component.html',
  styleUrls: ['./src067.component.css'],
})
export class Src067Component {
  @ViewChild('btn') button: ElementRef | undefined;

  buttonSubscription: Subscription | undefined;

  ngAfterViewInit() {
    this.buttonSubscription = fromEvent(this.button?.nativeElement, 'click')
      .pipe(map((ev) => (ev as any).clientX))
      .subscribe((res) => console.log(res));
  }

  ngOnDestroy() {
    this.buttonSubscription?.unsubscribe();
  }
}

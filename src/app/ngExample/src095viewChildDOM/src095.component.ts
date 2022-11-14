import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'src095',
  templateUrl: './src095.component.html',
  styleUrls: ['./src095.component.css'],
})
export class Src095Component implements AfterViewInit {
  @ViewChild('someInput') someInputxyz!: ElementRef;
  ngAfterViewInit() {
    this.someInputxyz.nativeElement.value = 'Whale!';
  }
}

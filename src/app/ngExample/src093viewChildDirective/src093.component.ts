import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SharkDirective } from './shark.directive';

@Component({
  selector: 'src093',
  templateUrl: './src093.component.html',
  styleUrls: ['./src093.component.css'],
})
export class Src093Component implements AfterViewInit {
  extraCreature!: string;

  @ViewChild(SharkDirective)
  set appShark(directive: SharkDirective) {
    this.extraCreature = directive.creature;
  }

  ngAfterViewInit() {
    console.log(this.extraCreature); // Dolphin
  }
}

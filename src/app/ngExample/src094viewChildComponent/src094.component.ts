import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PupComponent } from './pup/pup.component';

@Component({
  selector: 'src094',
  templateUrl: './src094.component.html',
  styleUrls: ['./src094.component.css'],
})
export class Src094Component implements AfterViewInit {
  @ViewChild(PupComponent) pup!: PupComponent;
  ngAfterViewInit() {
    console.log(this.pup.whoAmI()); // I am a pup component!
  }
}

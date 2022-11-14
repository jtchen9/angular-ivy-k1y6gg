import { Component } from '@angular/core';

@Component({
  selector: 'src004',
  templateUrl: './src004.component.html',
  styleUrls: ['./src004.component.css'],
})
export class Src004Component {
  toLog(inputMessage: string) {
    console.log(inputMessage);
  }
}

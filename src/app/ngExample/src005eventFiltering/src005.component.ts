import { Component } from '@angular/core';

@Component({
  selector: 'src005',
  templateUrl: './src005.component.html',
  styleUrls: ['./src005.component.css'],
})
export class Src005Component {
  onKeyUp($event: any) {
    if ($event.keyCode === 13) console.log('ENTER was pressed.');
  }
}

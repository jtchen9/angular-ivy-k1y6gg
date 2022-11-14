import { Component } from '@angular/core';

@Component({
  selector: 'src010',
  templateUrl: './src010.component.html',
  styleUrls: ['./src010.component.css'],
})
export class Src010Component {
  xyz: boolean = true;
  onXyz(result:boolean) {
    console.log('color changed:', result);    
    this.xyz = result;
  }
}

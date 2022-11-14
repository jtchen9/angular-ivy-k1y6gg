import { Component } from '@angular/core';

@Component({
  selector: 'src007',
  templateUrl: './src007.component.html',
  styleUrls: ['./src007.component.css'],
})
export class Src007Component {
  email: any = 'me@example.com';

  onKeyUp() {
    console.log(this.email);
  }
}

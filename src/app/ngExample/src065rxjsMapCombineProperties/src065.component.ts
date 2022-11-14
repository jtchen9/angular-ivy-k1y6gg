import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'src065',
  templateUrl: './src065.component.html',
  styleUrls: ['./src065.component.css'],
})
export class Src065Component implements OnInit {
  srcObject = from([
    { fName: 'Sachin', lName: 'Tendulkar' },
    { fName: 'Rahul', lName: 'Dravid' },
    { fName: 'Saurav', lName: 'Ganguly' },
  ]);

  ngOnInit() {
    this.srcObject
      .pipe(
        map((data) => {
          return data.fName + ' ' + data.lName;
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}

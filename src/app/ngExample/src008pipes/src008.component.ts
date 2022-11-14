import { Component } from '@angular/core';

@Component({
  selector: 'src008',
  templateUrl: './src008.component.html',
  styleUrls: ['./src008.component.css'],
})
export class Src008Component {
  course = {
    title: 'The Complete Angular Course',
    students: 3456,
    rating: 4.9755,
    price: 190.9,
    releaseDate: new Date(2016, 0, 1),
  };
}

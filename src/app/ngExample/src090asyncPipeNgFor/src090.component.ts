import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'src090',
  templateUrl: './src090.component.html',
  styleUrls: ['./src090.component.css'],
})
export class Src090Component {
  constructor(private http: HttpClient) {}

  hounds: Observable<any> = this.getHoundList();
  getHoundList(): Observable<any> {
    return this.http.get<any>('https://dog.ceo/api/breed/hound/list');
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'src066',
  templateUrl: './src066.component.html',
  styleUrls: ['./src066.component.css'],
  providers: [KeyValuePipe],
})
export class Src066Component {
  constructor(private http: HttpClient, private keyValue: KeyValuePipe) {}

  $dogsBreed(): Observable<any> {
    return this.http.get<any>('https://dog.ceo/api/breeds/list/all');
  }
  // returns: {"message":{"affenpinscher":[],"african":[],"airedale":[],"akita":[],"appenzeller":[], ...},"status":"success"}

  ngAfterViewInit() {
    this.$dogsBreed()
      .pipe(
        map((data) => {
          var dogs = this.keyValue.transform(data.message);
          console.log(dogs);
        })
      )
      .subscribe();
  }
}

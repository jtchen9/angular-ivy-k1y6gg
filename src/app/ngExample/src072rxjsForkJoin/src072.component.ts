import { Component, AfterViewInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'src072',
  templateUrl: './src072.component.html',
})
export class Src072Component implements AfterViewInit {
  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    // // One approach:
    //   of('hound', 'mastiff', 'retriever') //outer observable
    //     .pipe(
    //       mergeMap((breed) => {
    //         const url = 'https://dog.ceo/api/breed/' + breed + '/list';
    //         return this.http.get<any>(url); //inner observable
    //       })
    //     )
    //     .subscribe((data) => {
    //       console.log(data);
    //     });
    //
    // // Another approach:
    // of("hound", "mastiff", "retriever")
    //   .subscribe(breed => {
    //     const url = 'https://dog.ceo/api/breed/' + breed + '/list';

    //     this.http.get<any>(url)
    //       .subscribe(data => {
    //         console.log(data)
    //       })
    //   })
    //
    // // Use forkJoin:
    of('hound', 'mastiff', 'retriever')
      .pipe(
        mergeMap((breed) => {
          const url1 = 'https://dog.ceo/api/breed/' + breed + '/list';
          const url2 = 'https://dog.ceo/api/breed/' + breed + '/images/random';

          let obs1 = this.http.get<any>(url1);
          let obs2 = this.http.get<any>(url2);

          return forkJoin([obs1, obs2]);
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'src082',
  templateUrl: './src082.component.html',
  styleUrls: ['./src082.component.css'],
})
export class Src082Component {
  mform: FormGroup = new FormGroup({
    name: new FormControl(),
  });

  obs: Subscription | undefined;

  ngOnInit() {
    this.obs = this.mform.valueChanges
      .pipe(debounceTime(500))
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy() {
    this.obs?.unsubscribe();
  }
}

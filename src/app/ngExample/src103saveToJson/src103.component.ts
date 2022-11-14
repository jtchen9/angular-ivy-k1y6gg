import { AnimationStyleMetadata } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'src103',
  templateUrl: './src103.component.html',
  styleUrls: ['./src103.component.css'],
})
export class Src103Component implements OnInit {
  constructor() {}
  ngOnInit() {
    function saveText(text: string, filename: any) {
      var a = document.createElement('a');
      a.setAttribute(
        'href',
        'data:text/plain;charset=utf-u,' + encodeURIComponent(text)
      );
      a.setAttribute('download', filename);
      a.click();
    }
    var obj = { a: 'Hello', b: [2, 'World'], c: 3 };
    saveText(JSON.stringify(obj), 'filename.json');
  }
}

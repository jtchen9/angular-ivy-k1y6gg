import { Component, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'src101',
  templateUrl: './src101.component.html',
  styleUrls: ['./src101.component.css'],
})
export class Src101Component implements AfterViewInit {
  url =
    'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*';
  getSuggestList = (keyword: any) =>
    fetch(this.url + '&search=' + keyword, {
      method: 'GET',
      mode: 'cors',
    }).then((res) => res.json());
  searchInput: any;
  suggestList: any;
  keyword: any;
  selectItem: any;
  render: any;

  ngAfterViewInit() {
    this.searchInput = document.getElementById('search');
    this.suggestList = document.getElementById('suggest-list');
    this.keyword = fromEvent(this.searchInput, 'input');
    this.selectItem = fromEvent(this.suggestList, 'click');

    this.render = (suggestArr = []) =>
      (this.suggestList.innerHTML = suggestArr
        .map((item) => '<li>' + item + '</li>')
        .join(''));

    this.keyword
      .pipe(
        debounceTime(100),
        switchMap(
          (e: any) => this.getSuggestList(e.target.value)
          // check the format of the output by typing:
          // https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*&search=aaa
        ),
        map((res: any) => res[1])
      )
      .subscribe((list: any) => this.render(list));

    this.selectItem
      .pipe(
        filter((e: any) => e.target.matches('li')),
        map((e: any) => e.target.innerText)
      )
      .subscribe((text: any) => {
        this.searchInput.value = text;
        this.render();
      });
  }
}

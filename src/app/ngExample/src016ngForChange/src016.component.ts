import { Component } from '@angular/core';

@Component({
  selector: 'src016',
  templateUrl: './src016.component.html',
  styleUrls: ['./src016.component.css'],
})
export class Src016Component {
  courses = [
    { id: 0, name: 'course0' },
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];

  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }
  onDelete(course: any) {
    let idx = this.courses.indexOf(course);
    this.courses.splice(idx, 1);
  }
  onUpdate(course: any) {
    course.name = 'UPDATED';
  }
}

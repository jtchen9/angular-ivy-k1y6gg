import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: any[] = [];
  message: any = '';

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos().subscribe((t: any) => (this.todos = t as any[]));
  }

  add() {
    var newTodo = { title: '... ' };
    this.service
      .add(newTodo)
      .subscribe({
        next: (t: any) => this.todos.push(t),
        error: (err: any) => (this.message = err),
      });
  }

  delete(id: any) {
    if (confirm('Are you sure?')) this.service.delete(id).subscribe();
  }
}

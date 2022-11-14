import { HttpClient } from '@angular/common/http';
import { from, EMPTY, throwError } from 'rxjs';
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let service123: TodoService;
  let nullClient: HttpClient;

  beforeEach(() => {
    service123 = new TodoService(nullClient);
    component = new TodoComponent(service123);
  });

  it('should set todos property with the items returned from the server on running ngOnInit', () => {
    let todos = [1, 2, 3];

    spyOn(service123, 'getTodos').and.callFake(() => {
      return from([todos]);
    });

    component.ngOnInit();

    expect(component.todos.length).toEqual(3);
    expect(component.todos).toBe(todos);
  });
  it('should call the server to save the changes when a new todo item is added', () => {
    let spy234 = spyOn(service123, 'add').and.callFake(() => {
      return from(EMPTY);
    });

    component.add();

    expect(spy234).toHaveBeenCalled();
  });
  it('should add new todo returned from the server', () => {
    let todo = { id: 1 };
    let spy234 = spyOn(service123, 'add').and.returnValue(from([todo]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });
  it('should set the message property if server returns an error when adding a new todo', () => {
    let error567 = 'error from the server';
    let spy234 = spyOn(service123, 'add').and.returnValue(
      throwError(() => error567)
    );

    component.add();

    expect(component.message).toBe(error567);
  });
  it('should call the server to delete a todo item if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy234 = spyOn(service123, 'delete').and.returnValue(EMPTY);

    component.delete(1);

    expect(spy234).toHaveBeenCalledWith(1);
  });
  it('should NOT call the server to delete a todo item if the user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy234 = spyOn(service123, 'delete').and.returnValue(EMPTY);

    component.delete(1);

    expect(spy234).not.toHaveBeenCalled();
  });
});

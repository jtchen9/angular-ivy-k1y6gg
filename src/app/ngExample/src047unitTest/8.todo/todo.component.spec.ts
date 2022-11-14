import { TodoService } from './todo.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoComponent } from './todo.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TodoComponent],
      providers: [TodoService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
  });

  it('should load todos from the server', () => {
    let todos = [1, 2, 3];
    // let service = fixture.debugElement.injector.get(TodoService);
    let service = TestBed.inject(TodoService);
    spyOn(service, 'getTodos').and.returnValue(from([todos]));

    fixture.detectChanges();

    expect(component.todos.length).toEqual(3);
  });
});

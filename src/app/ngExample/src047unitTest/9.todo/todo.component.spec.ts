import { TodoService } from './todo.service';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TodoComponent } from './todo.component';
import { HttpClientModule } from '@angular/common/http';

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

  it('should load todos from the server (solution 1)', async () => {
    let todos = [1, 2, 3];
    // let service = fixture.debugElement.injector.get(TodoService);
    let service = TestBed.inject(TodoService);
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve(todos));

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.todos.length).toEqual(3);
    });

    console.log('EXPECT WAS CALLED.');
  });
  it('should load todos from the server (solution 2)', fakeAsync(() => {
    let todos = [1, 2, 3];
    // let service = fixture.debugElement.injector.get(TodoService);
    let service = TestBed.inject(TodoService);
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve(todos));

    fixture.detectChanges();
    tick();

    expect(component.todos.length).toEqual(3);

    console.log('EXPECT WAS CALLED.');
  }));
});
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo: any) {
    return this.http.post('...', todo);
  }

  getTodos() { 
    return this.http.get('...');
  }

  async getTodosPromise() {
    return await lastValueFrom(this.http.get('...'));
  }

  delete(id:any) {
    return this.http.delete('...');
  }
}
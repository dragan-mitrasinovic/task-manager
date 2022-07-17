import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  uri = 'http://localhost:8080/tasks';

  moveTask(taskId: string, columnId: string) {
    return this.http.put(this.uri + '/' + taskId + '/' + columnId, {});
  }
}

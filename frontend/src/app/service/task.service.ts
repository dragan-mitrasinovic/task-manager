import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  uri = 'http://localhost:8080/tasks';

  moveTask(taskId: string, columnId: string) {
    return this.http.put(this.uri + '/' + taskId + '/' + columnId, {});
  }

  editTask(task: Task) {
    return this.http.put(this.uri + '/' + task.id, task);
  }

  getTask(taskId: string) {
    return this.http.get(this.uri + '/' + taskId);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  uri = 'http://localhost:8080/projects';
  projectId = '4760161a-8ca8-4e47-9067-a1b67836a568';

  getProjectData() {
    return this.http.get(this.uri + '/' + this.projectId);
  }

  getAllProjects() {
    return this.http.get(this.uri);
  }
}

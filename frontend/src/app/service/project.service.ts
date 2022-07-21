import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  uri = 'http://localhost:8080/projects';

  getProjectData(projectId: string) {
    return this.http.get(this.uri + '/' + projectId);
  }

  getAllProjects() {
    return this.http.get(this.uri);
  }

  createProject(name: string) {
    return this.http.post(this.uri, { name });
  }

  deleteProject(id: string) {
    return this.http.delete(`${this.uri}/${id}`);
  }
}

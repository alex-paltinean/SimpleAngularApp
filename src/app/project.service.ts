import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.projectsUrl = 'http://localhost:8081/projects';
  }

  getProjects() {
    return this.http.get<Project[]>(this.projectsUrl);
  }

  getProject(projectId: string) {
    const urlString = this.projectsUrl + '/' + projectId;
    console.log(urlString);
    return this.http.get<Project>(urlString);
  }

  save(project: Project) {
    console.log('ProjectService.save()');
    return this.http.post<Project>(this.projectsUrl, project);
  }
}

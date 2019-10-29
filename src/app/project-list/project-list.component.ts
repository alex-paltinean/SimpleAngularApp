import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects;

  constructor(
    private projectService: ProjectService
  ) {
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

}

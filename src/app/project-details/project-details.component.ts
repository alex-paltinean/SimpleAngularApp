import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../project.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  projectObservable;
  projectId: string;
  project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('projectId');
    });
    this.projectObservable = this.projectService.getProject(this.projectId).subscribe(p => this.project = p);
  }

  saveProject() {
    this.projectService.save(this.project).subscribe(p => this.project = p);
  }

}

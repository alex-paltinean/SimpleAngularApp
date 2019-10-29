import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import {AppComponent} from './app.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import {CreateProjectComponent} from './create-project/create-project.component';
import {ProjectService} from './project.service';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    CreateProjectComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ProjectListComponent},
      {path: 'projects/:projectId', component: ProjectDetailsComponent}
    ])
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { Project } from '../model/project';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../dialogs/project-dialog/project-dialog.component';
import { Router } from '@angular/router';
import { ConfirmProjectDeleteDialogComponent } from '../dialogs/confirm-project-delete-dialog/confirm-project-delete-dialog.component';
import { AddTaskDialogComponent } from '../dialogs/add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    public projectDialog: MatDialog,
    public taskDialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllProjects();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  projects: Project[];

  openAddProjectDialog() {
    let dialogRef = this.projectDialog.open(ProjectDialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.getAllProjects();
    });
  }

  getAllProjects(): void {
    this.projectService.getAllProjects().subscribe((data: Project[]) => {
      this.projects = data;
    });
  }

  deleteProject(project: Project) {
    let dialogRef = this.projectDialog.open(
      ConfirmProjectDeleteDialogComponent,
      {
        data: project,
      }
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'confirmed') {
      }
      this.getAllProjects();
    });
  }

  createTask() {
    let dialogRef = this.taskDialog.open(AddTaskDialogComponent, {
      data: this.router.url.slice(9),
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((task) => {});
  }
}

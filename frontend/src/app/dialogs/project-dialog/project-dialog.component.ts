import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css'],
})
export class ProjectDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {}

  createProject() {
    this.projectService.createProject(this.data).subscribe(() => {
      this.dialogRef.close();
    });
  }
}

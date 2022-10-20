import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from '../../service/project.service';
import { Project } from '../../model/project';

@Component({
  selector: 'app-confirm-project-delete-dialog',
  templateUrl: './confirm-project-delete-dialog.component.html',
  styleUrls: ['./confirm-project-delete-dialog.component.css'],
})
export class ConfirmProjectDeleteDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmProjectDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {}

  onConfirm() {
    this.projectService.deleteProject(this.data.id).subscribe(() => {
      this.dialogRef.close('confirmed');
    });
  }
}

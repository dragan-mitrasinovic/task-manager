import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BoardComponent } from './board/board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { TaskDialogComponent } from './dialogs/task-dialog/task-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskComponent } from './task/task.component';
import { ProjectDialogComponent } from './dialogs/project-dialog/project-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ConfirmProjectDeleteDialogComponent } from './dialogs/confirm-project-delete-dialog/confirm-project-delete-dialog.component';
import { MatStepperModule } from '@angular/material/stepper';
import { AddTaskDialogComponent } from './dialogs/add-task-dialog/add-task-dialog.component';
import { ConfirmTaskDeleteDialogComponent } from './dialogs/confirm-task-delete-dialog/confirm-task-delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoardComponent,
    TaskDialogComponent,
    TaskComponent,
    ProjectDialogComponent,
    ConfirmProjectDeleteDialogComponent,
    AddTaskDialogComponent,
    ConfirmTaskDeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    DragDropModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

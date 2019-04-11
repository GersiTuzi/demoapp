import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Role } from '../models/role.model';
import { RoleEditComponent } from '../role-edit/role-edit.component';

@Component({
  selector: 'app-role-view',
  templateUrl: './role-view.component.html',
  styleUrls: ['./role-view.component.css']
})
export class RoleViewComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Role, public dialog: MatDialog, public window: MatDialogRef<RoleViewComponent>) { }

  edit() {
    this.window.close();
    const dialogRef = this.dialog.open(RoleEditComponent, { data: this.data, width: '600px' });
  }
}

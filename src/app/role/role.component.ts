import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatSort } from '@angular/material';
import { RoleService } from '../services/role.service';
import { Role } from '../models/role.model';
import { MatTableDataSource } from '@angular/material';
import { RoleViewComponent } from '../role-view/role-view.component';
import { RoleEditComponent } from '../role-edit/role-edit.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(public dialog: MatDialog, private roleService: RoleService) { }

  displayedColumns: string[] = ['id', 'name', 'action'];


  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateListOfRoles() {
    this.roleService.getRoles().then(x => this.dataSource.data = x);
  }
  ngOnInit() {

    this.updateListOfRoles();
    this.dataSource.sort = this.sort;

  }

  popup(role: Role) {
    const dialogRef = this.dialog.open(RoleViewComponent, { data: role, width: '600px' });
  }

  async delete(role: Role) {
    await this.roleService.deleteRole(role);
    await this.updateListOfRoles();

  }

  async edit(role: Role) {
    const dialogRef = this.dialog.open(RoleEditComponent, { data: role, width: '600px' });
    dialogRef.afterClosed().subscribe(result => {
      this.updateListOfRoles();
    });

  }

  openDialog() {
    const dialogRef = this.dialog.open(AddPopupComponent, { width: '600px' });

    dialogRef.afterClosed().subscribe(result => {
      this.updateListOfRoles();
    });
  }
}

@Component({

  selector: 'app-popup-role',
  templateUrl: 'AddPopup.html',
})

export class AddPopupComponent {
  role: Role = {
    id: 0,
    name: ''
  };
  constructor(private roleService: RoleService, public dialog: MatDialogRef<AddPopupComponent>) { }

  addRole() {
    this.roleService.putRole(this.role);
    this.dialog.close();
  }
}



import { RoleService } from './../services/role.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Role } from '../models/role.model';


@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(@Inject(MAT_DIALOG_DATA) public data: Role, public window: MatDialogRef<RoleEditComponent>, private roleService: RoleService) { }

  ngOnInit() {
  }

  async save() {
  await this.roleService.putRole(this.data);
  }

  async saveAndClose(event) {
    await this.save();
    this.window.close();


  }

}

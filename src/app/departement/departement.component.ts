import { DepartementService } from './../services/departement.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatSort, MatTableDataSource } from '@angular/material';
import { AddPopupComponent } from '../role/role.component';
import { Departement } from '../models/departement.model';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  constructor(public dialog: MatDialog, private departementService: DepartementService) { }

  displayedColumns: string[] = ['id', 'name', 'action'];

  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.updateListOfDepartements();
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateListOfDepartements() {
    this.departementService.getDepartements().then(x => this.dataSource.data = x);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddPopupDepartementComponent, { width: '600px' });

    dialogRef.afterClosed().subscribe(result => {
      this.updateListOfDepartements();
    });
  }

}

@Component({

  selector: 'app-popup-departement',
  templateUrl: 'AddPopupDep.html',
})

export class AddPopupDepartementComponent {
  departement: Departement = {
    id: 0,
    name: ''
  };
  constructor(private departementService: DepartementService, public dialog: MatDialogRef<AddPopupComponent>) { }

  addDepartement() {
    this.departementService.putDepartement(this.departement);
    this.dialog.close();
  }
}


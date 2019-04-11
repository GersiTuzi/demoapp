import { AuthGuard } from './auth.guard';
import { PersonService } from './services/person.service';
import { RouterModule, CanActivate } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatDialogModule, MatIconModule, MatTableModule, MatSortModule,MatInputModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserComponent } from './add-user/add-user.component';
import { RoleComponent } from './role/role.component';
import { AddPopupComponent } from './role/role.component';
import { RoleViewComponent } from './role-view/role-view.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { DepartementComponent, AddPopupDepartementComponent } from './departement/departement.component';
import { DepartementViewComponent } from './departement-view/departement-view.component';
import { DepartementEditComponent } from './departement-edit/departement-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    AddUserComponent,
    RoleComponent,
    AddPopupComponent,
    RoleViewComponent,
    RoleEditComponent,
    DepartementComponent,
    DepartementViewComponent,
    DepartementEditComponent,
    AddPopupDepartementComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    RouterModule.forRoot([
    {
      path: 'home',
      component: HomeComponent,
      canActivate: [AuthGuard]
    },
    {
      path: '',
      component: LoginComponent

    },
    {
      path: 'departement',
      component: DepartementComponent,
      canActivate: [AuthGuard]

    },
    {
      path: 'role',
      component: RoleComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'addUser',
      component: AddUserComponent
    }

    ]),
    BrowserAnimationsModule
  ],

  entryComponents: [AddPopupComponent, RoleViewComponent, RoleEditComponent, AddPopupDepartementComponent ],
  providers: [PersonService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

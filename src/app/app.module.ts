import { AuthGuard } from './auth.guard';
import { PersonService } from './services/person.service';
import { RouterModule, CanActivate } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    AddUserComponent
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
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    RouterModule.forRoot([
    {
      path: 'home',
      component: HomeComponent,
      canActivate: [AuthGuard]
    },
    {
      path: '',
      component: LoginComponent,

    },
    {
      path: 'addUser',
      component: AddUserComponent,
      canActivate: [AuthGuard]

    }

    ]),
    BrowserAnimationsModule
  ],
  providers: [PersonService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

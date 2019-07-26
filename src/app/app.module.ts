import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { appRoutes } from './home/routes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { HomepageComponent } from './home/homepage/homepage.component';
import { MaterialModule } from "./core/material/material.module";
import { SigninComponent } from './home/signin/signin.component';
import { RegisterComponent } from './home/register/register.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { FlexLayoutModule } from "@angular/flex-layout";

import { UserService } from './core/services/user.service';
import { AuthGuard } from './core/auth/auth.guard';
import { AuthInterceptor } from './core/auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SigninComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ UserService, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }

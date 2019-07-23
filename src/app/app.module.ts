import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

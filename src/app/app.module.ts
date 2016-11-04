import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import { routing } from './app.route';
import { LoginComponent } from './login/login.component';
import { NavMainComponent } from './shared/components/nav-main/nav-main.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { HttpService } from './shared/services/http.service';
import { StoryService } from './shared/services/story.service';
import { UserService } from './shared/services/user.service';

import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { SignupComponent } from './signup/signup.component';

import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    NavMainComponent,
    FooterComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot(),
    HomeModule,
    AdminModule
  ],
  providers: [HttpService, StoryService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

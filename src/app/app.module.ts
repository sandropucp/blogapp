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

import { StoryService } from './shared/services/story.service';
import { UserService } from './shared/services/user.service';

import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    NavMainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    HomeModule,
    AdminModule
  ],
  providers: [StoryService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

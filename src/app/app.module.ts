import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { LoginComponent } from './page/login/login.component';
import { ButtonComponent } from './component/button/button.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './page/home/home.component';
import { ParentComponent } from './parent/parent.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabComponent } from './component/tab/tab.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginComponent,
    ButtonComponent,
    ParentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HomeComponent,
    BrowserAnimationsModule,
    TabComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

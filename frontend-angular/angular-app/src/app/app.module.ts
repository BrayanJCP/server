import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateComponent } from './modules/module1/create/create.component';
import { UpdateComponent } from './modules/module1/update/update.component';
import { ReadComponent } from './modules/module1/read/read.component';
import { DeleteComponent } from './modules/module1/delete/delete.component';
import { NotFoundComponent } from './modules/pagesResponse/not-found/not-found.component';
import { PageStructComponent } from './page-struct/page-struct.component';
import { RouterModule } from '@angular/router';
import { AppRouting } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/modulelogin/login/login.component';
import { Create2Component } from './modules/module2/create2/create2.component';
import { Read2Component } from './modules/module2/read2/read2.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    ReadComponent,
    DeleteComponent,
    NotFoundComponent,
    PageStructComponent,
    LoginComponent,
    Create2Component,
    Read2Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

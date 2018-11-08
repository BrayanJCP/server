import { NgModule, } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/pagesResponse/not-found/not-found.component';
import { UpdateComponent } from './modules/module1/update/update.component';
import { DeleteComponent } from './modules/module1/delete/delete.component';
import { ReadComponent } from './modules/module1/read/read.component';
import { CreateComponent } from './modules/module1/create/create.component';
import { PageStructComponent } from './page-struct/page-struct.component';
import { Create2Component } from './modules/module2/create2/create2.component';
import { Read2Component } from './modules/module2/read2/read2.component';
import { LoginComponent } from './modules/modulelogin/login/login.component';
const appRoutes: Routes = [
  {
    path: 'table', component: PageStructComponent, children: [
      { path: 'create', component: CreateComponent },
      { path: 'update/:id', component: UpdateComponent },
      { path: 'delete', component: DeleteComponent },
      { path: '', component: ReadComponent },
    ]
  },
  {
    path: 'chair', component: PageStructComponent, children: [
      { path: 'create', component: Create2Component },
      { path: 'update/:id', component: Create2Component },
      { path: '', component: Read2Component },
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, useHash: true } // <-- debugging purposes only
    )
    // other imports here
  ],
})
export class AppRouting { }
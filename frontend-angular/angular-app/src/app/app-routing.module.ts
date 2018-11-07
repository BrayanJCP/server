import {NgModule,} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/pagesResponse/not-found/not-found.component';
import { UpdateComponent } from './modules/module1/update/update.component';
import { DeleteComponent } from './modules/module1/delete/delete.component';
import { ReadComponent } from './modules/module1/read/read.component';
import { CreateComponent } from './modules/module1/create/create.component';
import { PageStructComponent } from './page-struct/page-struct.component';
const appRoutes: Routes = [
    { path:'angular/table',component:PageStructComponent,children:[
        { path: 'create', component: CreateComponent },
        { path: 'update/:id', component: UpdateComponent },
        { path: 'delete', component: DeleteComponent },
        { path: '', component: ReadComponent },
    ]},
    { path: '',
      redirectTo: '/angular/table',
      pathMatch: 'full'
    },
    { path: '**', component: NotFoundComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
      // other imports here
    ],
  })
  export class AppRouting { }
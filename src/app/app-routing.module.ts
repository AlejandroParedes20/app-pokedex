import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { Catalogue2Component } from './catalogue2/catalogue2.component';
import { Catalogue3Component } from './catalogue3/catalogue3.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', component: CatalogueComponent},
  {path:'catalogue2', component:Catalogue2Component},
  {path:'catalogue3', component:Catalogue3Component},
  {path:'user', component:UserComponent},
  {path:'**', pathMatch:'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

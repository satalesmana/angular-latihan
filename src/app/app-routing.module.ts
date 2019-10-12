import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MathComponent} from './pages/math/math.component';
import { FormpageComponent } from './pages/formpage/formpage.component';
import { CrudComponent } from './pages/crud/crud.component';
import {LatihanComponent} from './pages/latihan/latihan.component';
import { from } from 'rxjs';
import {PeminjamanComponent} 
    from './pages/peminjaman/peminjaman.component';

const routes: Routes = [
  {path:'math', component:MathComponent},
  {path:'form', component:FormpageComponent},
  {path:'crud', component:CrudComponent},
  {path:'latihan', component:LatihanComponent},
  {path:'peminjaman', component:PeminjamanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

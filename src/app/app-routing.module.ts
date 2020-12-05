import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path : '' , redirectTo : 'test-centers', pathMatch : "full"},
  {path : 'test-centers' , loadChildren : () => import('./main/test-centers/test-centers.module').then(m => m.TestCentersModule)},
  // {path : '**' , redirectTo : 'test-centers'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

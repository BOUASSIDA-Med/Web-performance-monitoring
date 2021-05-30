import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageSpeedCompareComponent } from './page-speed-compare/page-speed-compare.component';

const routes: Routes = [{path :"pagespeed" ,component : PageSpeedCompareComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageSpeedCompareComponent } from './page-speed-compare/page-speed-compare.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const routes: Routes = [{path :"pagespeed" ,component : PageSpeedCompareComponent }
,{path :"piechart" ,component : PieChartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

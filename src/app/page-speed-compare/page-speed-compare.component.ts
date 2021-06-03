import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InputUrl } from 'src/app/model/inputUrl.model';
import { delay } from 'rxjs/operators';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-page-speed-compare',
  templateUrl: './page-speed-compare.component.html',
  styleUrls: ['./page-speed-compare.component.css']
})
export class PageSpeedCompareComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public show:boolean = false;

  public barChartLabels: Label[] = ['page.speed.compare'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [0,0,0,0], label: 'PSI score' },
    { data: [1,0.01,0], label: 'First Contentful Paint (FCP)' },
    { data: [1,0.01,0], label: 'First Input dealy (FID)' },
    { data: [1,0.01,0], label: 'Cumulative Layout Shift (CLS)' },
    { data: [1,0.01,0], label: 'Largest Contentful Paint (LCP)' }
  ];
 





  
  inputUrl = new InputUrl();

  public message: string = "Uninitialized";
  public response :any;
  
  
  private API_Root = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

  private apiURL :string;

  constructor(private httpClient: HttpClient) {
    
  } 
  ngOnInit(): void {

  }
  async fetchData() {
      
    this.message = "Fetching..";

    this.response = "";
    this.response = await this.httpClient
      .get<any>(this.apiURL)
      .pipe(delay(1000))
      .toPromise();
      
    //this.message = "Fetched";
    //console.log(this.response);
    this.show = true;
    this.barChartData[0].data = [this.response.lighthouseResult.categories.performance.score];
    this.barChartData[1].data = [this.response.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.distributions[0].proportion];
    this.barChartData[2].data = [this.response.loadingExperience.metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE.distributions[0].proportion];
    this.barChartData[3].data = [this.response.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.distributions[0].proportion];

    this.barChartData[4].data = [this.response.loadingExperience.metrics.LARGEST_CONTENTFUL_PAINT_MS.distributions[0].proportion];
    //console.log(this.response.lighthouseResult.categories.performance.score);
   // console.log(this.response.loadingExperience.metrics.LARGEST_CONTENTFUL_PAINT_MS.distributions[0].proportion);
    console.log(this.response.loadingExperience.metrics);
  }
  submitPageSpeed(){

    this.apiURL=this.API_Root+"?url"+"="+this.inputUrl.pageUrl+"&&key="+this.inputUrl.apiKey;
    this.fetchData();

    
  }
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}

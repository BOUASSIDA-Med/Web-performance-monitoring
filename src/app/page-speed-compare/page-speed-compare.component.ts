import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InputUrl } from 'model/inputUrl.model';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-page-speed-compare',
  templateUrl: './page-speed-compare.component.html',
  styleUrls: ['./page-speed-compare.component.css']
})
export class PageSpeedCompareComponent implements OnInit {
  inputUrl = new InputUrl();

  public message: string = "Uninitialized";
  public response :any;
  
  
  private API_Root = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

  private apiURL :string;

  constructor(private httpClient: HttpClient) { }

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
    console.log(this.response);
    
  }
  submitPageSpeed(){

    this.apiURL=this.API_Root+"?url"+"="+this.inputUrl.pageUrl+"&&key="+this.inputUrl.apiKey;
    this.fetchData();
  
  }

}

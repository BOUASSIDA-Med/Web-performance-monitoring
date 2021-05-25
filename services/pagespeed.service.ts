import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PagespeedService {


private key ="" ; //INSERT YOUR API KEY HERE


private API_Root = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

  constructor(private _http: HttpClient) { 

  }
  analyzePage(inputUrl :string) {
  
    let API_URL=`${this.API_Root}?url={$this.inputUrl}&&key={this.key}`;
   
    return this._http.jsonp( API_URL,'callback');
  }

}

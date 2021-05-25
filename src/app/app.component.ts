import { Component } from '@angular/core';
import { PagespeedService } from 'services/pagespeed.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Saas-web-performance-monitoring';
  constructor (private page:PagespeedService)  {
    
    
  }
  load(){
    this.page.analyzePage("https://www.youtube.com/")
  }
}

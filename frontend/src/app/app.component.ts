import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient){}
  hitApi() {
    let data = this.http.post(this.baseUrl + 'signin', {username:"ram", password: "ram123"}).subscribe(
      res=>{

        console.log("🚀 ~ hitApi ~ data", res)
      }
    );
  }
}

import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    let data = this.http.post(this.baseUrl + 'signin',{username:"ram", password: "ram123"}).subscribe(
      res=>{
        console.log("🚀 ~ hitApi ~ data", res)
      }
    );
  }
}

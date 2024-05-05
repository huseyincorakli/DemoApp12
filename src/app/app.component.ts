import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DemoApp12';
  constructor(private http:HttpClient){
    
  }


  getData(){
   this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data=>{
    console.log(data);
    
   })
  }
}

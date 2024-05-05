import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private title:Title){
  title.setTitle("Home")
}

throwit(){
  throw new Error("CAZZIK CUZZUK")
}
}

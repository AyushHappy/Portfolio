import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [RouterOutlet] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-ayush';
  
  // constructor(private router:Router){
  // }

  // ngOnInit(){
  //   this.router.navigate(['greetings']);
  // }
}

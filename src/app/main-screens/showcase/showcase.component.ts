import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-showcase',
  imports: [],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css'
})
export class ShowcaseComponent {

  constructor(private router:Router){
  }

  onClick(toRoute:string){
    console.log("routing");
    this.router.navigate([toRoute]);
  }

  protected my_image:string="assets/Ayush.jpg"
}

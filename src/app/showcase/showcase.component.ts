import { Component } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-showcase',
  imports: [],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css'
})
export class ShowcaseComponent {
  onClick(){
    console.log("routing");
  }
}

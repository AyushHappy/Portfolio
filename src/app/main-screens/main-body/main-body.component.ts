import { Component } from '@angular/core';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-body',
  imports: [SidebarComponent, TopbarComponent,RouterOutlet,CommonModule],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css'
})
export class MainBodyComponent {

  constructor(private router :Router,private route:ActivatedRoute){}

  protected showMenu:boolean=true;

  onToggleMenu(){
    this.showMenu=!this.showMenu;
  }

}

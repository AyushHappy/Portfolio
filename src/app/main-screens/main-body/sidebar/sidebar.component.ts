import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  bottomContents: string[] = [
    'Student Management System',
    'Motion Detector',
    'Library Management System',
  ];

  constructor(private router:Router){
  }

  onClickRouteTo(link:string){
    this.router.navigate(['projects',link.toLowerCase().replace(/\s+/g, '-')]);
    console.log(link);
  }

}

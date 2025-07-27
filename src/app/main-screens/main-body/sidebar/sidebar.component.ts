import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { projectContent } from '../../../shared/project-content.model';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Input() showContent:boolean=true;

  bottomContents=projectContent;

  constructor(private router:Router){
  }

  onClickRouteTo(link:string){
    this.router.navigate(['projects',link.toLowerCase().replace(/\s+/g, '-')]);
    console.log(link);
  }

}

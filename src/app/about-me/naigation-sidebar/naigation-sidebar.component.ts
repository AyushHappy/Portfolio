import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-naigation-sidebar',
  imports: [CommonModule,MatIconModule],
  templateUrl: './naigation-sidebar.component.html',
  styleUrl: './naigation-sidebar.component.css'
})
export class NaigationSidebarComponent {
  public navigationContent:any[]=[
    {
      name:``,
      css:`h-[10%] block`,
      isButton:false,
    },
    {
      name:`Home`,
      routeUrl:`/home`,
      css:`text-lg text-white flex flex-1 justify-start pl-5 `,
      isButton:true,
      icon:`home`,
    },{
      name:`Projects`,
      routeUrl:`/projects/dashboard`,
      css:`text-lg text-white flex flex-1 justify-start pl-5 `,
      isButton:true,
      icon:`work`,
    },{
      name:`Resume`,
      routeUrl:`/resume`,
      css:`text-lg text-white flex flex-1 justify-start pl-5 `,
      isButton:true,
      icon:`description`,
    }
  ]

  constructor(protected router:Router){}

  onClickedRouteTo(routeTo?:string){
    this.router.navigate([routeTo]);
  }
}

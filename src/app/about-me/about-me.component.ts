import { Component } from '@angular/core';
import { NaigationSidebarComponent } from "./naigation-sidebar/naigation-sidebar.component";
import { MyContentComponent } from "./my-content/my-content.component";

@Component({
  selector: 'app-about-me',
  imports: [NaigationSidebarComponent, MyContentComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-resume',
  imports: [MatButtonModule,],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  constructor(private router:Router){
  }

  onClickGoTo(link:string){
    this.router.navigate([link]);
  }
}

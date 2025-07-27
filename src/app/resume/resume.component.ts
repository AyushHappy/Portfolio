import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { Enironmentariables } from '../enironment_ariables';

@Component({
  selector: 'app-resume',
  imports: [MatButtonModule,],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  resumeUrl: SafeResourceUrl;

  constructor(private router:Router,private sanitizer:DomSanitizer){
    this.resumeUrl=this.sanitizer.bypassSecurityTrustResourceUrl(Enironmentariables.RESUME_URL);
  }

  onClickGoTo(link:string){
    this.router.navigate([link]);
  }
}

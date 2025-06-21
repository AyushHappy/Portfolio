import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-resume',
  imports: [MatButtonModule,],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  resumeUrl: SafeResourceUrl;

  constructor(private router:Router,private sanitizer:DomSanitizer){
    this.resumeUrl=this.sanitizer.bypassSecurityTrustResourceUrl('assets/Ayush_resume.pdf');
  }

  onClickGoTo(link:string){
    this.router.navigate([link]);
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from '../showcase/showcase.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent  {
  @ViewChild('greetingSection', { static: true }) greetingSection!: ElementRef;
  showAnimation = false;
  showNext = false;
  nextText = false;

  constructor(private router:Router){

  }

  ngOnInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.showAnimation = true;
          setTimeout(() => this.nextText = true, 2000)
          setTimeout(() => {this.showNext=true;this.showAboutMe()}, 6000);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(this.greetingSection.nativeElement);
  }

  showAboutMe(){
    this.router.navigate(['dashboard']);
    console.log('naigate');
  }
}

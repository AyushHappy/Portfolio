import { Component, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-project-display',
  standalone: true,
  imports: [],
  templateUrl: './project-display.component.html',
  styleUrl: './project-display.component.css',
})
export class ProjectDisplayComponent {

  currentLabel = signal<string>('');

  constructor(private router: Router) {}

  ngOnInit() {
    // 1. Set label immediately on init (for first route)
    this.updateLabelFromUrl(this.router.url);

    // 2. Watch for route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateLabelFromUrl(this.router.url);
      });
  }

  private updateLabelFromUrl(url: string) {
    const segments = url.split('/').filter(Boolean);
    const last = segments[segments.length - 1] || '';
    const label = last.toUpperCase().replace(/-/g, ' ');
    this.currentLabel.set(label);
  }

  images = [
    'assets/screenshots/1.png',
    'assets/screenshots/2.png',
    'assets/screenshots/3.png',
  ];

  previewImg = signal<string | null>(null);

  openPreview(src: string) {
    this.previewImg.set(src);
  }

  closePreview() {
    this.previewImg.set(null);
  }

  items = [
    'Angular', 'Jaa', 'Spring boot 3', 'Spring 6', 'Kafka', 'Redis',
    'Angular', 'Jaa', 'Spring boot 3', 'Spring 6', 'Kafka', 'Redis',
  ];
}

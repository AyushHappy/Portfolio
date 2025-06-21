import { Component, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { projectContent, projectContentI } from '../shared/project-content.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-project-display',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './project-display.component.html',
  styleUrl: './project-display.component.css',
})
export class ProjectDisplayComponent {

  currentLabel = signal<string>('');

  protected projectContents!: projectContentI;

  constructor(private router: Router) { }

  ngOnInit() {
    // Set label and content on initial load
    this.updateLabelFromUrl(this.router.url);

    // Watch for future route changes
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

    const found = projectContent.find(
      p => p.name.toUpperCase() === label
    );

    if (found) {
      this.projectContents = found;
    } else {
      console.error('No matching project found for:', label);
    }
  }

  previewImg = signal<string | null>(null);

  openPreview(src: string) {
    this.previewImg.set(src);
  }

  closePreview() {
    this.previewImg.set(null);
  }
}

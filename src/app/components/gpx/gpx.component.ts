import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepLayoutComponent } from '../step-layout/step-layout.component';
import { BaseStepComponent } from '../base-step/base-step.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gpx',
  standalone: true,
  imports: [CommonModule, StepLayoutComponent],
  template: `
    <app-step-layout
      title="GPX"
      [backgroundImage]="'/assets/images/gpx-bg.jpg'"
      [isValid]="true"
      (onNext)="goToNext()"
      (onPrev)="goToPrev()"
    >
      <div class="gpx-content">
        <div class="info-box">
          <p>Trasu OUV si môžete stiahnuť na tomto linku:</p>
          <div class="download-section">
            <a href="/assets/gpx/ouv.gpx" download class="download-button">
              <span class="icon">⭳</span>
              Stiahnuť GPX trasu
            </a>
          </div>
        </div>
      </div>
    </app-step-layout>
  `,
  styles: [`
    .gpx-content {
      font-size: 1.1rem;
      line-height: 1.6;
    }

    .info-box {
      background: rgba(44, 62, 80, 0.1);
      padding: 2rem;
      border-radius: 8px;
      text-align: center;
    }

    .download-section {
      margin-top: 2rem;
    }

    .download-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: #2c3e50;
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      transition: background-color 0.3s;
    }

    .download-button:hover {
      background: #34495e;
    }

    .icon {
      font-size: 1.2em;
    }

    @media (max-width: 768px) {
      .gpx-content {
        font-size: 1rem;
      }

      .info-box {
        padding: 1.5rem;
      }

      .download-button {
        padding: 0.75rem 1.5rem;
      }
    }
  `]
})
export class GpxComponent extends BaseStepComponent {
  constructor(router: Router) {
    super(router);
    this.nextRoute = '/dropbag';
    this.prevRoute = '/route';
    this.isValid = true;
  }
} 
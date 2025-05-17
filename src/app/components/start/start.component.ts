import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepLayoutComponent } from '../step-layout/step-layout.component';
import { BaseStepComponent } from '../base-step/base-step.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [CommonModule, StepLayoutComponent],
  template: `
    <app-step-layout
      title="Start"
      [backgroundImage]="'/assets/images/start-bg.jpg'"
      [isValid]="true"
      (onNext)="goToNext()"
      (onPrev)="goToPrev()"
    >
      <div class="start-content">
        <div class="info-box">
          <p>Start pretekov je 14.6.2025 o 04:00 na námestí v Tvrdošíne.</p>
          <p>Je potrebné prísť najneskôr 15 minút pred štartom kvôli prevzatiu GPS trackera a spoločnej fotke.</p>
        </div>

        <div class="map-section">
          <h3>Miesto štartu:</h3>
          <div class="map-container">
            <iframe
              width="100%"
              height="400"
              style="border:0"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              [src]="mapUrl"
            ></iframe>
          </div>
        </div>

        <div class="additional-info">
          <h3>Dôležité informácie:</h3>
          <ul>
            <li>Prezentácia začína 45 minút pred štartom</li>
            <li>Parkovanie je možné na priľahlých uliciach</li>
            <li>Toalety budú k dispozícii v blízkosti štartu</li>
          </ul>
        </div>
      </div>
    </app-step-layout>
  `,
  styles: [`
    .start-content {
      font-size: 1.1rem;
      line-height: 1.6;
    }

    .info-box {
      background: rgba(44, 62, 80, 0.1);
      padding: 1.5rem;
      border-radius: 8px;
      margin-bottom: 2rem;
    }

    .info-box p {
      margin-bottom: 1rem;
    }

    .info-box p:last-child {
      margin-bottom: 0;
    }

    .map-section {
      margin-bottom: 2rem;
    }

    .map-section h3 {
      margin-bottom: 1rem;
      color: #2c3e50;
    }

    .map-container {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .additional-info {
      border-top: 1px solid rgba(44, 62, 80, 0.2);
      padding-top: 1.5rem;
    }

    .additional-info h3 {
      margin-bottom: 1rem;
      color: #2c3e50;
    }

    .additional-info ul {
      list-style-type: none;
      padding: 0;
    }

    .additional-info li {
      margin-bottom: 0.75rem;
      padding-left: 1.5rem;
      position: relative;
    }

    .additional-info li:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #2c3e50;
    }

    @media (max-width: 768px) {
      .start-content {
        font-size: 1rem;
      }

      .info-box {
        padding: 1rem;
      }

      .map-container iframe {
        height: 300px;
      }
    }
  `]
})
export class StartComponent extends BaseStepComponent {
  mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2!2d19.5562!3d49.3372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDIwJzEzLjkiTiAxOcKwMzMnMjIuMyJF!5e0!3m2!1sen!2s!4v1616000000000!5m2!1sen!2s';

  constructor(router: Router) {
    super(router);
    this.nextRoute = '/submit';
    this.prevRoute = '/equipment';
    this.isValid = true;
  }
} 
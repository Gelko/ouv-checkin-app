import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepLayoutComponent } from '../step-layout/step-layout.component';
import { BaseStepComponent } from '../base-step/base-step.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route',
  standalone: true,
  imports: [CommonModule, StepLayoutComponent],
  template: `
    <app-step-layout
      title="Trasa"
      [backgroundImage]="'/assets/images/route-bg.jpg'"
      [isValid]="true"
      (onNext)="goToNext()"
      (onPrev)="goToPrev()"
    >
      <div class="route-content">
        <p>Trasa Oravskej Ultra Výzvy má 124km s prevýšením 6400m.</p>
        <p>Na trase bude 5 občerstvovacích staníc.</p>
        
        <div class="stations">
          <div class="station">1. Oravice 19,5km</div>
          <div class="station">2. Ťatliakova chata 36km</div>
          <div class="station">3. Huty 58km</div>
          <div class="station">4. Oravský Podzámok 85km</div>
          <div class="station">5. Príslop 102km</div>
          <div class="station">6. Tvrdošín (cieľ) 124km</div>
        </div>
      </div>
    </app-step-layout>
  `,
  styles: [`
    .route-content {
      font-size: 1.1rem;
      line-height: 1.6;
    }

    .stations {
      margin: 2rem 0;
      display: grid;
      gap: 1rem;
    }

    .station {
      padding: 0.75rem;
      background: rgba(44, 62, 80, 0.1);
      border-radius: 4px;
    }

    @media (max-width: 768px) {
      .route-content {
        font-size: 1rem;
      }
    }
  `]
})
export class RouteComponent extends BaseStepComponent {
  constructor(router: Router) {
    super(router);
    this.nextRoute = '/gpx';
    this.prevRoute = '/';
    this.isValid = true;
  }
} 
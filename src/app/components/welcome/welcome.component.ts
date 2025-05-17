import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepLayoutComponent } from '../step-layout/step-layout.component';
import { BaseStepComponent } from '../base-step/base-step.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, StepLayoutComponent],
  template: `
    <app-step-layout
      [backgroundImage]="'/assets/images/welcome-bg.jpg'"
      [showPrev]="false"
      [isValid]="true"
      (onNext)="goToNext()"
    >
      <div class="welcome-content">
        <div class="logo-container">
          <img src="/assets/images/logo.png" alt="Oravská Ultra Výzva" class="logo">
        </div>
        <h1>Oravská Ultra Výzva</h1>        
        <div class="info-text">
          <p>Vitajte v online briefingu pre Oravskú Ultra Výzvu.</p>
          <p>Prosím, pozorne si prečítajte všetky nasledujúce kroky. Každý krok obsahuje dôležité informácie o pretekoch.</p>
        </div>
      </div>
    </app-step-layout>
  `,
  styles: [`
    .welcome-content {
      text-align: center;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .logo-container {
      margin-bottom: 2rem;
    }

    .logo {
      max-width: 300px;
      height: auto;
      margin: 0 auto;
      display: block;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: #2c3e50;
      font-weight: 600;
    }

    .info-text {
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
      background: rgba(255, 255, 255, 0.8);
      padding: 2rem;
      border-radius: 8px;
    }

    p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      color: #34495e;
    }

    p:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      .welcome-content {
        padding: 1.5rem;
      }

      .logo {
        max-width: 200px;
      }

      h1 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
      }

      .info-text {
        padding: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  `]
})
export class WelcomeComponent extends BaseStepComponent {
  constructor(router: Router) {
    super(router);
    this.nextRoute = '/route';
    this.isValid = true;
  }
} 
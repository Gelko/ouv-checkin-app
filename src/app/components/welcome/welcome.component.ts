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
        <h3>Oravská Ultra Výzva</h3>        
        <div class="info-text">
          <p>Vitajte v online briefingu a check-in systéme pre Oravskú Ultra Výzvu.</p>
          <p>Prosím, pozorne si prečítajte všetky nasledujúce kroky. Každý krok obsahuje dôležité informácie o pretekoch.</p>
          <p>Pre pokračovanie budete musieť potvrdiť svoje porozumenie správnym zodpovedaním otázok.</p>
        </div>
      </div>
    </app-step-layout>
  `,
  styles: [`
    .welcome-content {
      text-align: center;
    }

    h2 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      color: #2c3e50;
    }

    h3 {
      font-size: 1.8rem;
      margin-bottom: 2rem;
      color: #34495e;
    }

    .info-text {
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    p {
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
      }

      h3 {
        font-size: 1.5rem;
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
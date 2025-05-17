import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StepLayoutComponent } from '../step-layout/step-layout.component';
import { BaseStepComponent } from '../base-step/base-step.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route',
  standalone: true,
  imports: [CommonModule, FormsModule, StepLayoutComponent],
  template: `
    <app-step-layout
      title="Trasa"
      [backgroundImage]="'/assets/images/route-bg.jpg'"
      [isValid]="isValid"
      (onNext)="goToNext()"
      (onPrev)="goToPrev()"
    >
      <div class="route-content">
        <p>Trasa Oravskej Ultra Vyzvy ma 124km s prevýšením 6400m.</p>
        <p>Na trase bude 5 obcerstvovacich stanic.</p>
        
        <div class="stations">
          <div class="station">1. Oravice 19.5km</div>
          <div class="station">2. Ťatliakova chata 36km</div>
          <div class="station">3. Huty 58km</div>
          <div class="station">4. Oravsky podzamok 85km</div>
          <div class="station">5. Prislop 102km</div>
          <div class="station">6. Tvrdosin (ciel) 124km</div>
        </div>

        <div class="quiz-section">
          <h3>Otázka:</h3>
          <p>Ako sa vola 4 obcerstvovacia stanica?</p>
          
          <div class="radio-group">
            <label>
              <input 
                type="radio" 
                name="station" 
                [value]="'huty'"
                [(ngModel)]="selectedAnswer"
                (change)="validateStep()"
              >
              Huty
            </label>
            
            <label>
              <input 
                type="radio" 
                name="station" 
                [value]="'oravsky_podzamok'"
                [(ngModel)]="selectedAnswer"
                (change)="validateStep()"
              >
              Oravsky podzamok
            </label>
            
            <label>
              <input 
                type="radio" 
                name="station" 
                [value]="'prislop'"
                [(ngModel)]="selectedAnswer"
                (change)="validateStep()"
              >
              Prislop
            </label>
          </div>
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

    .quiz-section {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(44, 62, 80, 0.2);
    }

    .radio-group {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
    }

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }

    input[type="radio"] {
      width: 1.2rem;
      height: 1.2rem;
    }

    @media (max-width: 768px) {
      .route-content {
        font-size: 1rem;
      }
    }
  `]
})
export class RouteComponent extends BaseStepComponent {
  selectedAnswer: string = '';

  constructor(router: Router) {
    super(router);
    this.nextRoute = '/dropbag';
    this.prevRoute = '/';
  }

  override validateStep() {
    this.isValid = this.selectedAnswer === 'oravsky_podzamok';
  }
} 
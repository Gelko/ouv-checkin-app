import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StepLayoutComponent } from '../step-layout/step-layout.component';
import { BaseStepComponent } from '../base-step/base-step.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule, FormsModule, StepLayoutComponent],
  template: `
    <app-step-layout
      title="Povinná a odporúčaná výbava"
      [backgroundImage]="'/assets/images/equipment-bg.jpg'"
      [isValid]="isValid"
      (onNext)="goToNext()"
      (onPrev)="goToPrev()"
    >
      <div class="equipment-content">
        <div class="equipment-section">
          <h3>Povinná výbava:</h3>
          <ul>
            <li>GPX trasa uložená v hodinkách a telefóne</li>
            <li>Poistenie pokrývajúce zásah HZS</li>
            <li>Čelovka s náhradnou batériou</li>
            <li>Izotermická fólia</li>
            <li>Doklad totožnosti</li>
            <li>Rukavice</li>
            <li>Buffka alebo čiapka</li>
            <li>Nabitý telefón</li>
            <li>Nepremokavá bunda</li>
          </ul>
        </div>

        <div class="equipment-section">
          <h3>Odporúčaná výbava:</h3>
          <ul>
            <li>Dlhé nohavice (v prípade zlého počasia na hrebeni)</li>
            <li>Rolnička na medvede</li>
          </ul>
        </div>

        <div class="quiz-section">
          <h3>Otázka:</h3>
          <p>Ktorá položka nie je súčasťou povinnej výbavy?</p>
          
          <div class="radio-group">
            <label>
              <input 
                type="radio" 
                name="equipment" 
                [value]="'id'"
                [(ngModel)]="selectedAnswer"
                (change)="validateStep()"
              >
              Doklad totožnosti
            </label>
            
            <label>
              <input 
                type="radio" 
                name="equipment" 
                [value]="'phone'"
                [(ngModel)]="selectedAnswer"
                (change)="validateStep()"
              >
              Nabitý telefón
            </label>
            
            <label>
              <input 
                type="radio" 
                name="equipment" 
                [value]="'pants'"
                [(ngModel)]="selectedAnswer"
                (change)="validateStep()"
              >
              Dlhé nohavice
            </label>
          </div>
        </div>
      </div>
    </app-step-layout>
  `,
  styles: [`
    .equipment-content {
      font-size: 1.1rem;
      line-height: 1.6;
    }

    .equipment-section {
      margin-bottom: 2rem;
    }

    .equipment-section h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .equipment-section ul {
      list-style-type: none;
      padding: 0;
    }

    .equipment-section li {
      margin-bottom: 0.75rem;
      padding-left: 1.5rem;
      position: relative;
    }

    .equipment-section li:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #2c3e50;
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
      .equipment-content {
        font-size: 1rem;
      }
    }
  `]
})
export class EquipmentComponent extends BaseStepComponent {
  selectedAnswer: string = '';

  constructor(router: Router) {
    super(router);
    this.nextRoute = '/start';
    this.prevRoute = '/dropbag';
  }

  override validateStep() {
    this.isValid = this.selectedAnswer === 'pants';
  }
} 
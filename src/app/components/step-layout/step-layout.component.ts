import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="step-container" [style.background-image]="'url(' + backgroundImage + ')'">
      <div class="content-wrapper">
        <h1 *ngIf="title">{{ title }}</h1>
        <div class="content">
          <ng-content></ng-content>
        </div>
        <div class="navigation">
          <button *ngIf="showPrev" (click)="onPrev.emit()" class="btn">Previous</button>
          <button *ngIf="showNext" (click)="onNext.emit()" [disabled]="!isValid" class="btn">Next</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .step-container {
      min-height: 100vh;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .content-wrapper {
      background: rgba(255, 255, 255, 0.95);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 800px;
    }

    h1 {
      color: #333;
      margin-bottom: 1.5rem;
      font-size: 2rem;
      text-align: center;
    }

    .content {
      margin-bottom: 2rem;
    }

    .navigation {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 4px;
      background-color: #2c3e50;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .btn:disabled {
      background-color: #95a5a6;
      cursor: not-allowed;
    }

    .btn:hover:not(:disabled) {
      background-color: #34495e;
    }

    @media (max-width: 768px) {
      .content-wrapper {
        padding: 1rem;
      }

      h1 {
        font-size: 1.5rem;
      }

      .btn {
        padding: 0.5rem 1rem;
      }
    }
  `]
})
export class StepLayoutComponent {
  @Input() title: string = '';
  @Input() backgroundImage: string = '';
  @Input() showPrev: boolean = true;
  @Input() showNext: boolean = true;
  @Input() isValid: boolean = false;
  
  @Output() onNext = new EventEmitter<void>();
  @Output() onPrev = new EventEmitter<void>();
} 
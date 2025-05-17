import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StepLayoutComponent } from '../step-layout/step-layout.component';
import { BaseStepComponent } from '../base-step/base-step.component';
import { Router } from '@angular/router';
import { EmailService } from '../../services/email.service';

interface SubmitForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  acceptTerms: boolean;
}

@Component({
  selector: 'app-submit',
  standalone: true,
  imports: [CommonModule, FormsModule, StepLayoutComponent],
  template: `
    <app-step-layout
      title="Finálne potvrdenie"
      [backgroundImage]="'/assets/images/submit-bg.jpg'"
      [isValid]="isFormValid"
      [showNext]="false"
      (onPrev)="goToPrev()"
    >
      <div class="submit-content">
        <div class="info-box">
          <p>Prosím, vyplňte svoje údaje pre dokončenie online briefingu.</p>
          <p>Po odoslaní formulára Vám bude zaslaný potvrdzujúci email.</p>
        </div>

        <form (ngSubmit)="onSubmit()" #form="ngForm" class="submit-form">
          <div class="form-group">
            <label for="firstName">Meno *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              [(ngModel)]="formData.firstName"
              required
              #firstName="ngModel"
            >
            <div class="error-message" *ngIf="firstName.invalid && (firstName.dirty || firstName.touched)">
              Meno je povinné
            </div>
          </div>

          <div class="form-group">
            <label for="lastName">Priezvisko *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              [(ngModel)]="formData.lastName"
              required
              #lastName="ngModel"
            >
            <div class="error-message" *ngIf="lastName.invalid && (lastName.dirty || lastName.touched)">
              Priezvisko je povinné
            </div>
          </div>

          <div class="form-group">
            <label for="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              [(ngModel)]="formData.email"
              required
              email
              #email="ngModel"
            >
            <div class="error-message" *ngIf="email.invalid && (email.dirty || email.touched)">
              Zadajte platný email
            </div>
          </div>

          <div class="form-group">
            <label for="phone">Telefónne číslo *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              [(ngModel)]="formData.phone"
              required
              pattern="^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$"
              #phone="ngModel"
            >
            <div class="error-message" *ngIf="phone.invalid && (phone.dirty || phone.touched)">
              Zadajte platné telefónne číslo
            </div>
          </div>

          <div class="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="acceptTerms"
                [(ngModel)]="formData.acceptTerms"
                required
                #terms="ngModel"
              >
              Súhlasím s podmienkami a potvrdzujem, že som si prečítal(a) všetky informácie
            </label>
            <div class="error-message" *ngIf="terms.invalid && (terms.dirty || terms.touched)">
              Musíte súhlasiť s podmienkami
            </div>
          </div>

          <button 
            type="submit" 
            class="submit-button" 
            [disabled]="!isFormValid || isSubmitting"
          >
            {{ isSubmitting ? 'Odosielam...' : 'Odoslať' }}
          </button>

          <div class="success-message" *ngIf="submitSuccess">
            Formulár bol úspešne odoslaný! Skontrolujte si email.
          </div>

          <div class="error-message" *ngIf="submitError">
            Nastala chyba pri odosielaní. Prosím, skúste to znova neskôr.
          </div>
        </form>
      </div>
    </app-step-layout>
  `,
  styles: [`
    .submit-content {
      font-size: 1.1rem;
      line-height: 1.6;
    }

    .info-box {
      background: rgba(44, 62, 80, 0.1);
      padding: 1.5rem;
      border-radius: 8px;
      margin-bottom: 2rem;
    }

    .submit-form {
      max-width: 500px;
      margin: 0 auto;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #2c3e50;
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"] {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #bdc3c7;
      border-radius: 4px;
      font-size: 1rem;
      transition: border-color 0.3s;
    }

    input:focus {
      outline: none;
      border-color: #3498db;
    }

    .checkbox-group {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .checkbox-group input {
      margin-top: 0.25rem;
    }

    .error-message {
      color: #e74c3c;
      font-size: 0.9rem;
      margin-top: 0.25rem;
    }

    .success-message {
      color: #27ae60;
      text-align: center;
      margin-top: 1rem;
      padding: 1rem;
      background: rgba(39, 174, 96, 0.1);
      border-radius: 4px;
    }

    .submit-button {
      width: 100%;
      padding: 1rem;
      background-color: #2c3e50;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .submit-button:hover:not(:disabled) {
      background-color: #34495e;
    }

    .submit-button:disabled {
      background-color: #95a5a6;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      .submit-content {
        font-size: 1rem;
      }

      .info-box {
        padding: 1rem;
      }

      .submit-button {
        padding: 0.75rem;
        font-size: 1rem;
      }
    }
  `]
})
export class SubmitComponent extends BaseStepComponent {
  formData: SubmitForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    acceptTerms: false
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(
    router: Router,
    private emailService: EmailService
  ) {
    super(router);
    this.prevRoute = '/start';
  }

  get isFormValid(): boolean {
    return !!(
      this.formData.firstName &&
      this.formData.lastName &&
      this.formData.email &&
      this.formData.phone &&
      this.formData.acceptTerms
    );
  }

  async onSubmit() {
    if (!this.isFormValid || this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    try {
      await this.emailService.sendEmail({
        firstName: this.formData.firstName,
        lastName: this.formData.lastName,
        email: this.formData.email,
        phone: this.formData.phone
      }).toPromise();
      
      this.submitSuccess = true;
      
      // Reset form after successful submission
      this.formData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        acceptTerms: false
      };
    } catch (error) {
      console.error('Error submitting form:', error);
      this.submitError = true;
    } finally {
      this.isSubmitting = false;
    }
  }
} 
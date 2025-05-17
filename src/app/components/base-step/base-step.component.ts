import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-step',
  standalone: true,
  imports: [CommonModule],
  template: '',
})
export class BaseStepComponent {
  @Input() nextRoute: string = '';
  @Input() prevRoute: string = '';
  @Input() backgroundImage: string = '';
  protected isValid: boolean = false;

  constructor(protected router: Router) {}

  async goToNext() {
    if (this.isValid) {
      await this.router.navigate([this.nextRoute]);
    }
  }

  async goToPrev() {
    await this.router.navigate([this.prevRoute]);
  }

  protected validateStep() {
    // To be implemented by child components
    this.isValid = true;
  }
} 
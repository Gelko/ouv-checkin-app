import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepLayoutComponent } from '../step-layout/step-layout.component';
import { BaseStepComponent } from '../base-step/base-step.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropbag',
  standalone: true,
  imports: [CommonModule, StepLayoutComponent],
  template: `
    <app-step-layout
      title="Dropbag"
      [backgroundImage]="'/assets/images/dropbag-bg.jpg'"
      [isValid]="true"
      (onNext)="goToNext()"
      (onPrev)="goToPrev()"
    >
      <div class="dropbag-content">
        <div class="info-box">
          <p>Dropbag je potrebne odovzdat organizatorovi pred ubytovanim, alebo na starte pretekov.</p>
          <p>Dropbag Vas bude cakat na obcerstovacke Huty (58km)</p>
        </div>

        <div class="tips">
          <h3>Odporúčania pre dropbag:</h3>
          <ul>
            <li>Označte dropbag svojím menom a číslom</li>
            <li>Zabaľte veci do vodotesného obalu</li>
            <li>Pripravte si náhradné oblečenie</li>
            <li>Nezabudnite na špeciálnu výživu ak ju používate</li>
          </ul>
        </div>
      </div>
    </app-step-layout>
  `,
  styles: [`
    .dropbag-content {
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

    .tips {
      border-top: 1px solid rgba(44, 62, 80, 0.2);
      padding-top: 1.5rem;
    }

    .tips h3 {
      margin-bottom: 1rem;
      color: #2c3e50;
    }

    .tips ul {
      list-style-type: none;
      padding: 0;
    }

    .tips li {
      margin-bottom: 0.75rem;
      padding-left: 1.5rem;
      position: relative;
    }

    .tips li:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #2c3e50;
    }

    @media (max-width: 768px) {
      .dropbag-content {
        font-size: 1rem;
      }

      .info-box {
        padding: 1rem;
      }
    }
  `]
})
export class DropbagComponent extends BaseStepComponent {
  constructor(router: Router) {
    super(router);
    this.nextRoute = '/equipment';
    this.prevRoute = '/route';
    this.isValid = true;
  }
} 
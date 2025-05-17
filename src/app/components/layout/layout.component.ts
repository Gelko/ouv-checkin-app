import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="layout">
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .layout {
      min-height: 100vh;
      position: relative;
      background-size: cover;
      background-position: center;
    }

    .logo {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 120px;
      height: auto;
      z-index: 10;
    }

    .logo.centered {
      position: relative;
      top: 40px;
      right: auto;
      margin: 0 auto;
      display: block;
      width: 200px;
    }

    main {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  `]
})
export class LayoutComponent {
  get isCenteredLogo(): boolean {
    return window.location.pathname === '/';
  }
} 
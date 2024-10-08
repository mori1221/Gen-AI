import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Slide-Deck-Generator';

  constructor(private router: Router) {}

  goToLandingPage(): void {
    this.router.navigate(['/landing-page']);
  }
}

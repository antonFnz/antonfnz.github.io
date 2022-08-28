import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  currentView: 'home' | 'about' = 'home';

  changeView(): void {
    if (this.currentView === 'home') {
      this.currentView = 'about';
    } else {
      this.currentView = 'home';
    }
  }
}

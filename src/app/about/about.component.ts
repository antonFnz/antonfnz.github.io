import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    @Output() changeViewEvent = new EventEmitter<string>();

    emitChangeView(): void {
      this.changeViewEvent.emit();
    }
}

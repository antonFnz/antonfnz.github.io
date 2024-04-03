import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  text = 'Anton';
  greetings = [
    'Hello.',
    'Ciao.',
    'Salut.',
    'Hola.',
    'Hallo.',
    '今日は.',
    '你好.',
    'مرحبًا.',
  ];
  greeting = 'Hello.';
  counter = 0;

  @Output() changeViewEvent = new EventEmitter<string>();

  ngOnInit(): void {
    setInterval(() => {
      this.counter++;
      this.greeting = this.greetings[this.counter % 8];
    }, 2500);
  }

  changeText(): void {
    if (window.innerWidth > 1287) this.text = 'About Me';
  }

  restoreText(): void {
    if (window.innerWidth > 1287) this.text = 'Anton';
  }

  emitChangeView(): void {
    this.changeViewEvent.emit();
  }
}

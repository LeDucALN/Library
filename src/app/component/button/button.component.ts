import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Output() sm: EventEmitter<void> = new EventEmitter();
  submit() {
    this.sm.emit();
  }
}

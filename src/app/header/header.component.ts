import { Component, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: '[app-header]',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() selectedOption = new EventEmitter;

  onSelect(choice: string) {
    this.selectedOption.emit(choice);
  }
}
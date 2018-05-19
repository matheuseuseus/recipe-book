import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedOption = 'recipe';

  onOptionSelected(choice: string) {
    this.selectedOption = choice;
  }
}
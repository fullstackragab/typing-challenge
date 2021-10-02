import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  randomText = lorem.sentence()
  enteredText = ""
  solved = false

  compare(enteredLetter: string, generatedLetter: string) {
    if(!generatedLetter) return 'pending'

    return enteredLetter === generatedLetter ? 'correct' : 'incorrect'
  }

  onUserInput(value: string) {
    this.enteredText = value

    if(value === this.randomText) {
      this.solved = true
    }
  }
}

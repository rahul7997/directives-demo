import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eventValues = [];
  ngstyleFlag = 4;

  onGameStart(firedNumber: number){
    this.eventValues.push(firedNumber);
  }
}

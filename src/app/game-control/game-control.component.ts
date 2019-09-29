import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startGame = new EventEmitter<number>();
  eventCount = 0;
  eventRef: any;

  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.eventRef = setInterval(()=>{
      this.startGame.emit(++this.eventCount);
    },1000);
  }

  onStopGame(){
    clearInterval(this.eventRef);
  }

}

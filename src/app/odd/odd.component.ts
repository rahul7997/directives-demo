import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class OddComponent implements OnInit {
  @Input() eventNumber: number;

  constructor() { }

  ngOnInit() {
  }

}

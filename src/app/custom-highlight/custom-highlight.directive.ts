import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomHighlight]'
})
export class CustomHighlightDirective implements OnInit{
  @Input() defaultColor : string = 'transparent';
  @Input() highlightColor : string = 'blue';
  @HostBinding('style.backgroundColor') hostProperty : string;

  constructor() { }

  ngOnInit(){
    this.hostProperty = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseOver(){
    // this.hostProperty = 'cyan';
    this.hostProperty = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.hostProperty = this.defaultColor;
  }
}

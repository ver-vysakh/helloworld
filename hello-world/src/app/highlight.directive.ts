import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }
  @Input() defaultColor: string;

  @Input('appHighlight') highlightColor: string;
  @HostBinding('class.card-outline-primary')private ishovering: boolean;

  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
    this.ishovering = true;
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
    this.ishovering = false;
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  colores: string[];

  @Input('appColor') config: any;

  constructor(private elem: ElementRef, private renderer: Renderer) {
    // this.elem.nativeElement.style.backgroundColor = 'yellow';
    this.colores = ['red', 'green', 'blue', 'gray'];
    let numAleatorio = Math.round(Math.random() * 3);
    this.renderer.setElementStyle(this.elem.nativeElement, 'background-color', this.colores[numAleatorio]);
    this.renderer.setElementStyle(this.elem.nativeElement, 'font-size', '24px');
    this.config = {
      mouseOverFont: '18px',
      mouseOutFont: '24px'
    };
  }

  @HostListener('mouseover') onMouseOver() {
    this.renderer.setElementStyle(this.elem.nativeElement, 'font-size', this.config.mouseOverFont);
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.setElementStyle(this.elem.nativeElement, 'font-size', this.config.mouseOutFont);
  }
}

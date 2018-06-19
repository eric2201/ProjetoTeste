import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @Input() cor = 'gray';


  @HostBinding('style.background-color') corDeFundo: string;
  constructor(
    /*private elementRef: ElementRef,
    private renderer: Renderer2
    */
  ) {}

  @HostListener('focus') colorir() {
    this.corDeFundo = this.cor;
    /*console.log(this.elementRef.nativeElement);
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  */
  }

  @HostListener('blur') descolorir() {
    this.corDeFundo = 'transparent';
    /*console.log(this.elementRef.nativeElement);
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  */
  }
}

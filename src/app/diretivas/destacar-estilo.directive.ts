import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[destacarEstilo]'
})
export class DestacarEstiloDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.formatar('bold', 'uppercase');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.formatar();
  }

  constructor(private el: ElementRef) {     
  }

  private formatar(fontWeight:string = null, textTransform:string = null) {
    this.el.nativeElement.style.fontWeight = fontWeight;
    this.el.nativeElement.style.textTransform = textTransform;   
  }

}

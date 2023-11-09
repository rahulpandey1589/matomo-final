import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHoverOver]'
})
export class HoverOverDirective {

   @HostListener('mouseenter') onMouseEnter(){
     this.modifyColor('red');
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.modifyColor('');
   }

  constructor(private elementRef : ElementRef) {
   
   }


   private modifyColor(color:string){
    this.elementRef.nativeElement.style.backgroundColor = color;
   }

}

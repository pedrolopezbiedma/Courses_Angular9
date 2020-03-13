import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({ 
    selector: '[appBetterHighlight]' 
})
export class appBetterHighlightDirective implements OnInit {
    constructor(private elementRef:ElementRef, private renderer:Renderer2) { }

    ngOnInit(){
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
    }

    @HostListener('mouseover') onMouseOver(eventData: Event){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
    }

    @HostListener('mouseleave') onMouseLeave(eventData: Event){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
    }
}
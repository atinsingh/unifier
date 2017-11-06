import {Directive, ElementRef, HostBinding, HostListener, Renderer} from '@angular/core';

@Directive({
    selector: '[appAutogrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    },
})
export class AutogrowDirective {
    constructor(private el: ElementRef, private renderer: Renderer) {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '20rem');
    }
    onFocus() {
        console.log("I am autogrowing");
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '45rem');
    }
    onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '20rem');
    }
}
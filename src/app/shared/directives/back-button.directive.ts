import { Location } from '@angular/common';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[backButton]'
})
export class BackButtonDirective {
    @HostBinding('attr.class')
    class!: string;
    @HostBinding('attr.name') name!: string;
    @HostBinding('attr.role') role!: string;
    @HostBinding('attr.aria-label') aria!: string;
    constructor(private location: Location) {}
    @HostListener('click')
    onClick() {
        this.location.back();
    }

    ngOnInit() {
        this.class = 'br-button secondary back-button ml-70 mb-3';
        this.name = 'voltar';
        this.role = 'button';
        this.aria = 'Voltar';
    }
}

# Diretivas no Angular

-   São instruções ao DOM e temos três tipos no Angular:
    -   _Component Directives:_ Diretivas customizadas com classe própria e decorator @Directive.

```ts
import { Directive, HostListener } from '@angular/core';
@Directive({
    selector: '[uppercase]'
})
export class UppercaseDirective {
    constructor() {}

    @HostListener('input', ['$event'])
    public onKeyUp(event: any) {
        event.target['value'] = event.target['value'].toUpperCase();
    }
}
```

    -   _Attribute Directives:_ mudam o estilo e comportamento de elementos do DOM:
        -   [ngClass]
        -   [ngStyle]
        -   [ngControlName]
        -   [(ngModel)]
    -   _Structural Directives:_ Manipulam as estruturas dos elementos do DOM e são prefixados pelo operator '\*'.

```ts
<element *ngIf="isLoading"></element>
<element *ngFor="let tipoTaxa of tipoTaxa$ | async"></element>
<container_element [ngSwitch]="switch_expression">
    <inner_element *ngSwitchCase="expresson_1">...</inner_element>
    <inner_element *ngSwitchCase="expresson_2">...</inner_element>
    <inner_element *ngSwitchDefault>...</element>
</container_element>
```

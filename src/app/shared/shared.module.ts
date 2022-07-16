import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaskPipe } from './pipes/mask.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { ExternalLinkDirective } from './directives/external-link.directive';
import { BackButtonDirective } from './directives/back-button.directive';

@NgModule({
    declarations: [MaskPipe, SafePipe, ExternalLinkDirective, BackButtonDirective],
    imports: [CommonModule],
    exports: [MaskPipe, SafePipe, ExternalLinkDirective, BackButtonDirective]
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaskPipe } from './pipes/mask.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { ExternalLinkDirective } from './directives/external-link.directive';
import { BackButtonDirective } from './directives/back-button.directive';
import { ContainerComponent } from './components/container/container.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
    declarations: [MaskPipe, SafePipe, ExternalLinkDirective, BackButtonDirective, ContainerComponent],
    imports: [CommonModule, MaterialModule],
    exports: [MaskPipe, SafePipe, ExternalLinkDirective, BackButtonDirective, ContainerComponent]
})
export class SharedModule {}

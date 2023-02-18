import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { AcoesPageComponent } from './acoes-page.component';
import { AcoesPageRoutingModule } from './acoes-page.routing.module';

@NgModule({
    declarations: [AcoesPageComponent],
    imports: [CommonModule, AcoesPageRoutingModule, SharedModule],
    exports: [AcoesPageComponent]
})
export class AcoesPageModule {}

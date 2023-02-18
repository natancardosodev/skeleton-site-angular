import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { SharedModule } from '@shared/shared.module';
import { BasicPageComponent } from './basic-page.component';
import { BasicPageRoutingModule } from './basic-page.routing.module';

@NgModule({
    declarations: [BasicPageComponent],
    imports: [CommonModule, BasicPageRoutingModule, SharedModule, NgxSkeletonLoaderModule],
    exports: [BasicPageComponent]
})
export class BasicPageModule {}

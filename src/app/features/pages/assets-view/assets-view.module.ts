import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SharedModule } from '@shared/shared.module';
import { AssetsViewComponent } from './assets-view.component';
import { AssetsViewRoutingModule } from './assets-view.routing.module';

@NgModule({
    declarations: [AssetsViewComponent],
    imports: [CommonModule, AssetsViewRoutingModule, SharedModule, NgxSkeletonLoaderModule],
    exports: [AssetsViewComponent]
})
export class AssetsViewModule {}

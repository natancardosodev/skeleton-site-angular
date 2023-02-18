import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './basic-page.component';

const routes: Routes = [
    {
        path: ':slug',
        component: BasicPageComponent
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BasicPageRoutingModule {}

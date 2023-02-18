import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcoesPageComponent } from './acoes-page.component';

const routes: Routes = [
    {
        path: ':slug',
        component: AcoesPageComponent
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AcoesPageRoutingModule {}

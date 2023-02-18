import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./features/pages/home/home.module').then((m) => m.HomeModule) },
    {
        path: 'acoes',
        loadChildren: () => import('./features/pages/acoes-page/acoes-page.module').then((m) => m.AcoesPageModule)
    },
    {
        path: 'page',
        loadChildren: () => import('./features/pages/basic-page/basic-page.module').then((m) => m.BasicPageModule)
    },
    {
        path: 'view',
        loadChildren: () => import('./features/pages/assets-view/assets-view.module').then((m) => m.AssetsViewModule)
    },
    {
        path: '**',
        loadChildren: () => import('./features/pages/not-found/not-found.module').then((m) => m.NotFoundModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            relativeLinkResolution: 'corrected'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./features/pages/home/home.module').then(m => m.HomeModule) },
    {
        path: '**',
        loadChildren: () =>
            import('./features/pages/not-found/not-found.module').then(
                (m) => m.NotFoundModule
            )
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

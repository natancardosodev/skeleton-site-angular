import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { routesPagesHtml } from '@core/configs/rotas-pages-html';
import {
    DadosBasicPageInterface,
    InputBasicPageInteface,
    PageInterface,
    StructureBasicPageInterface
} from '@core/interfaces/pagina/base-pages.inteface';

import { AppConfigService } from '@core/static/app-config.service';
import { delay, isNullOrUndefined } from '@core/utils/generals.util';

@Component({
    selector: 'app-basic-page',
    templateUrl: './basic-page.component.html',
    styleUrls: ['./basic-page.component.scss']
})
export class BasicPageComponent implements OnInit {
    @Input() public component: string;
    @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;
    public slug: string;
    public routesByUF: Array<PageInterface>;
    public breadcrumb: Array<any>;
    public isLoading: boolean;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private appConfig: AppConfigService
    ) {
        this.activatedRoute.params.subscribe((params) => {
            this.isLoading = true;
            this.slug = params['slug'];
            void (async () => {
                await delay(isNullOrUndefined(this.routesByUF) ? 500 : 0);
                this.getDadosUF();
            })();
        });
    }

    public ngOnInit(): void {}

    public goPageHome(): void {
        void this.router.navigate(['']);
    }

    public getDadosUF(): void {
        const pagesByUF: Array<StructureBasicPageInterface> = routesPagesHtml.filter((item) => {
            return item.uf === this.appConfig.uf;
        });

        if (pagesByUF.length === 0) {
            this.goPage404();
            return;
        }

        this.isLoading = false;
        this.routesByUF = pagesByUF[0].pages;
        this.getCurrentComponent();
    }

    public getCurrentRouter(): Array<PageInterface> {
        const currentRouterByUF = this.routesByUF.filter((item) => {
            return [this.component, this.slug].includes(item.router);
        });

        return currentRouterByUF;
    }

    public getCurrentComponent(): void {
        const currentRouterByUF: Array<PageInterface> = this.getCurrentRouter();

        if (currentRouterByUF.length === 0) {
            this.goPage404();
            return;
        }

        this.render(currentRouterByUF[0].component);
        this.breadcrumb = [{ route: `/page/${currentRouterByUF[0].router}`, label: currentRouterByUF[0].title }];
    }

    public render(currentComponent: any): void {
        const dadosInput: DadosBasicPageInterface = {
            uf: this.appConfig.uf,
            nomePortal: this.appConfig.dadosSigfacil.value?.sigfacil
        };

        this.container.clear();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        this.viewContainerRef.createComponent<InputBasicPageInteface>(currentComponent).instance.data = dadosInput;
    }

    private goPage404(): void {
        void this.router.navigate(['pagina-nao-encontrada']);
    }
}

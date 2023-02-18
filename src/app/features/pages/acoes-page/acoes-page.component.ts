import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

import {
    AcoesPageInterface,
    ModalMsgInterface,
    TipoLivroInterface
} from '@core/interfaces/pagina/acoes-pages.interface';
import { idGenerator, isNullOrUndefined } from '@core/utils/generals.util';
import { AppConfigService } from '@core/static/app-config.service';
import { HiddenInputInterface, MenuInterface } from '@core/interfaces/sistema/sigfacil.interface';
import { AcoesFactory } from '@core/static/acoes/acoes-factory';

@Component({
    selector: 'app-internal-page',
    templateUrl: './acoes-page.component.html',
    styleUrls: ['./acoes-page.component.scss']
})
export class AcoesPageComponent implements OnInit {
    public slug: string;
    public breadcrumb: Array<any>;
    public routePage: AcoesPageInterface;
    public modalMsg: ModalMsgInterface;
    public helpdesk: Array<ModalMsgInterface>;
    public _acoesFactory: AcoesFactory;
    public state: Array<HiddenInputInterface>;
    private uf: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private titleService: Title,
        private appConfig: AppConfigService,
        private location: Location
    ) {
        this._acoesFactory = new AcoesFactory();
        this.activatedRoute.params.subscribe((params) => {
            this.slug = params['slug'];
            this.modalMsg = null;
            if (!isNullOrUndefined(this.slug)) {
                this.routePage = null;
            }
            this.getRoutePage();
            this.state = this.routerState();
            this.uf = appConfig.uf;
        });
    }

    public get acoesFactory(): AcoesFactory {
        return this._acoesFactory;
    }

    public routerState(): Array<HiddenInputInterface> {
        const locationState = this.location.getState() as { state: Array<HiddenInputInterface> };
        return locationState.state;
    }

    ngOnInit(): void {}

    public assets(url: string): string {
        return this.appConfig.assetsSigfacil + url;
    }

    public idGen(label: string, extra?: number) {
        return extra ? idGenerator(`botao-${label.slice(0, 75)}`, extra) : idGenerator(`botao-${label.slice(0, 75)}`);
    }

    public getUrlPortal(router = ''): string {
        if (this.appConfig.dadosSigfacil.value) {
            return `${this.appConfig.dadosSigfacil.value.urlPortal}${router}`;
        }
        return '';
    }

    public convertJsonToHTML(json: Array<TipoLivroInterface>): string {
        let html = '<ul>';
        json.map((item) => {
            html += `<li>${item.nome}</li>`;
        });
        html += '</ul>';

        return html;
    }

    private getRoutePage(): void {
        const routePage = this.acoesFactory.getDados(this.slug);
        if (isNullOrUndefined(routePage)) {
            this.goPage404();
        } else {
            const options: Array<MenuInterface> = this.appConfig.filterHideEnvs(routePage.options);
            this.routePage = { ...routePage, options };
            this.breadcrumb = routePage.breadcrumb;
            this.titleService.setTitle(this.routePage.title || 'Sigfácil');
        }
    }

    private goPage404(): void {
        void this.router.navigate(['pagina-nao-encontrada']);
    }
}

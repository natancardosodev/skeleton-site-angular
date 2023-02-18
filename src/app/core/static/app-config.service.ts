import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import {
    DadosPortalInterface,
    FilteredItemMenu,
    LinkInterface,
    MenuInterface,
    MenusInterface
} from '@core/interfaces/sistema/portal.interface';
import { producao, uf } from '@core/configs/mapeamento-servicos';

import { environment } from 'src/environments/environment';
import { AcoesFactory } from './acoes/acoes-factory';

@Injectable({
    providedIn: 'root'
})
export class AppConfigService {
    public uf: string;
    public subDomain: string;
    public urlAssets: string;
    public menus: MenusInterface;
    public dadosPortal: BehaviorSubject<DadosPortalInterface> = new BehaviorSubject(null);
    public _acoesFactory: AcoesFactory;
    public allMenus: BehaviorSubject<Array<MenuInterface>> = new BehaviorSubject(null);

    constructor() {
        this._acoesFactory = new AcoesFactory();
        this.subDomain = environment.uri.subDomain;
        this.uf = uf;
    }

    public get acoesFactory(): AcoesFactory {
        return this._acoesFactory;
    }

    public getAllItems(list: Array<FilteredItemMenu>): Array<MenuInterface> {
        const allItems: Array<MenuInterface> = [];
        list.map((item: FilteredItemMenu) => {
            if (item.links) {
                item.links.map((subItem: LinkInterface | MenuInterface) => allItems.push(subItem));
            } else {
                allItems.push(item);
            }
        });
        return allItems;
    }

    public loadConfig() {
        // this.menus = MenusService.all;

        if (this.uf && this.menus) {
            const acoesRedesim = this.filterItensMenu(this.menus.acoesRedesim as Array<MenuInterface>);
            const orgaos = this.filterItensMenu(this.menus.orgaos as Array<MenuInterface>);
            const servicosAdicionais = this.filterItensMenu(this.menus.servicosAdicionais as Array<MenuInterface>);

            this.menus = { ...this.menus, acoesRedesim, orgaos, servicosAdicionais };
        }
    }

    /**
     * hideEnvs = Ambiente em que determinado serviço será ocultado
     * isVerifyUF = Se não houver verificação do estado, será validado apenas o ambiente
     * ufsLiberadas = UFs liberados em produção para determinados serviços
     * ufsEspecificas = UFs para exibir serviços especificos
     */
    public filterHideEnvs(
        item: Array<LinkInterface | MenuInterface>,
        isVerifyUF = true
    ): Array<LinkInterface | MenuInterface> {
        return item && item.length > 0
            ? item.filter((it: LinkInterface | MenuInterface) => {
                  return !isVerifyUF
                      ? !it.hideEnvs.includes(this.subDomain)
                      : environment.uri.subDomain === producao
                      ? it.ufsLiberadas.includes(this.uf) && !it.hideEnvs.includes(this.subDomain)
                      : it.ufsEspecificas
                      ? it.ufsEspecificas.includes(this.uf)
                      : !it.hideEnvs.includes(this.subDomain);
              })
            : null;
    }

    private filterItensMenu(menu: Array<MenuInterface>): Array<FilteredItemMenu> {
        return this.filterHideEnvs(
            menu.map((item) => {
                const links: Array<LinkInterface> = item.subLinks ? this.filterHideEnvs(item.subLinks) : [];

                return { ...item, links };
            })
        );
    }
}

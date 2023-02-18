import { Type } from '@angular/core';

export interface PageInterface {
    router: string;
    component: Type<unknown>;
    title: string;
}

export interface StructureBasicPageInterface {
    uf: string;
    pages: Array<PageInterface>;
}

export interface InputBasicPageInteface {
    data: DadosBasicPageInterface;
}

export interface DadosBasicPageInterface {
    nomePortal: string;
    uf: string;
}

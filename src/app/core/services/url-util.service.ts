import { Injectable } from '@angular/core';
import { TiposApisEnum } from '@core/enums/sistema/tipo-apis.enum';
import { isNullOrUndefined } from '@core/utils/generals.util';

import { EnvService } from './env.service';

@Injectable({
    providedIn: 'root'
})
export class UrlUtilService {
    constructor(private env: EnvService) {}

    public getUrlApiBase(): string {
        return `${this.env.api}`;
    }

    public getUrlProjeto(rota: string): string {
        return `${this.env.projeto}${rota}`;
    }

    public getUrlBase(env: string, uf: string): string {
        return `${env}.${uf}`;
    }

    public montarUrlApi(
        resource: string,
        parameters?: Record<string, string>,
        tiposApisExtras?: TiposApisEnum
    ): string {
        const queryString = parameters ? this.objectToQueryString(parameters) : '';
        let baseUrl = '';

        switch (tiposApisExtras) {
            case TiposApisEnum.SERVICE_API:
                baseUrl = this.env.api;
                break;

            default:
                baseUrl = this.getUrlApiBase();
                break;
        }

        return baseUrl + resource + queryString;
    }

    /**
     * transforma um objeto em uma query
     * @static
     * @param {any} parameters
     * @returns {string}
     * @memberof UrlUtilService
     */
    public objectToQueryString(parameters: Record<string, string>): string {
        const arrayParametro = [];

        for (const property of Object.keys(parameters)) {
            if (!isNullOrUndefined(parameters[property])) {
                arrayParametro.push(`${property}=${parameters[property]}`);
            }
        }

        return `?${arrayParametro.join('&')}`;
    }

    public montarUrlArray(resource: string, parameters: Record<string, Array<string>>): string {
        const arrayParametros = Object.keys(parameters).map((property: string) => {
            if (!isNullOrUndefined(parameters[property])) {
                const resp: string = property.match('\\[]')
                    ? parameters[property].map((value) => `${property}=${value}`).join('&')
                    : `${property}=${parameters[property]}`;
                return resp;
            }
            return null;
        });
        const queryString = `?${arrayParametros.join('&')}`;

        return this.getUrlApiBase() + resource + queryString;
    }

    public getAuth(): string {
        return `${this.env.oauth}`;
    }
}

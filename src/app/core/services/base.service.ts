/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { cleanParams, isNullOrUndefined, throwErrorAPI } from '@core/utils/generals.util';

import { UrlUtilService } from './url-util.service';
import { IHttpOptions } from '@core/interfaces/sistema/http-options.interface';
import { MensagensEnum } from '@core/enums/sistema/mensagens.enum';

export abstract class BaseService {
    private _baseUrl!: string;
    private _options!: IHttpOptions;
    private _optionsJarvis!: IHttpOptions;
    private _msgApiFora: Record<string, string>;

    constructor(baseUrl = '', protected http: HttpClient, protected urlUtilService: UrlUtilService) {
        this.baseUrl = baseUrl;
        this.options = {
            withCredentials: true,
            responseType: 'json',
            headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
        this.optionsJarvis = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this._msgApiFora = {
            message: MensagensEnum.API_FORA
        };
    }

    get baseUrl(): string {
        return this._baseUrl;
    }

    set baseUrl(baseUrl: string) {
        this._baseUrl = baseUrl;
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    get options(): IHttpOptions {
        return this._options;
    }

    set options(options: IHttpOptions) {
        this._options = options;
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    get optionsJarvis(): IHttpOptions {
        return this._optionsJarvis;
    }

    set optionsJarvis(optionsJarvis: IHttpOptions) {
        this._optionsJarvis = optionsJarvis;
    }

    get = (
        url: string,
        params?: Record<string, any>,
        tipoApi?: string,
        isHideAlert?: boolean,
        customOptions?: IHttpOptions
    ): Observable<any> => {
        return this.sendRequest(this.getUrl(url, tipoApi), 'get', params, null, tipoApi, customOptions).pipe(
            take(1),
            catchError((erro: HttpErrorResponse) => {
                isHideAlert ? null : this.showMessageError(erro.status === 0 ? this._msgApiFora : erro.error);
                return isHideAlert ? throwErrorAPI(erro.error) : throwErrorAPI();
            })
        );
    };

    post = (
        url: string,
        body?: Record<string, any>,
        tipoApi?: string,
        isHideAlert?: boolean,
        customOptions?: IHttpOptions
    ): Observable<any> => {
        return this.sendRequest(this.getUrl(url, tipoApi), 'post', null, body, tipoApi, customOptions).pipe(
            take(1),
            catchError((erro: HttpErrorResponse) => {
                isHideAlert ? null : this.showMessageError(erro.status === 0 ? this._msgApiFora : erro.error);
                return isHideAlert ? throwErrorAPI(erro.error) : throwErrorAPI();
            })
        );
    };

    put = (
        url: string,
        body?: any,
        tipoApi?: string,
        isHideAlert?: boolean,
        customOptions?: IHttpOptions
    ): Observable<any> => {
        return this.sendRequest(this.getUrl(url, tipoApi), 'put', null, body, tipoApi, customOptions).pipe(
            take(1),
            catchError((erro: HttpErrorResponse) => {
                isHideAlert ? null : this.showMessageError(erro.status === 0 ? this._msgApiFora : erro.error);
                return isHideAlert ? throwErrorAPI(erro.error) : throwErrorAPI();
            })
        );
    };

    delete = (
        url: string,
        params?: Record<string, string>,
        tipoApi?: string,
        isHideAlert?: boolean,
        customOptions?: IHttpOptions
    ): Observable<any> => {
        return this.sendRequest(this.getUrl(url, tipoApi), 'delete', params, null, tipoApi, customOptions).pipe(
            take(1),
            catchError((erro: HttpErrorResponse) => {
                isHideAlert ? null : this.showMessageError(erro.status === 0 ? this._msgApiFora : erro.error);
                return isHideAlert ? throwErrorAPI(erro.error) : throwErrorAPI();
            })
        );
    };

    uploadArquivo = (url: string, body?: any, tipoApi?: string, isHideAlert?: boolean): Observable<any> => {
        const options: IHttpOptions = {
            withCredentials: true,
            responseType: 'json',
            body: body
        };
        return this.http.request('post', this.getUrl(url, tipoApi), options).pipe(
            take(1),
            catchError((erro: HttpErrorResponse) => {
                isHideAlert ? null : this.showMessageError(erro.status === 0 ? this._msgApiFora : erro.error);
                return isHideAlert ? throwErrorAPI(erro.error) : throwErrorAPI();
            })
        );
    };

    downloadArquivo = (
        type: string,
        url: string,
        body?: any,
        tipoApi?: string,
        isHideAlert?: boolean
    ): Observable<any> => {
        this.options = {
            withCredentials: true,
            responseType: 'blob',
            headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }),
            body: body
        };
        return this.http.request(type, this.getUrl(url, tipoApi), this.options).pipe(
            take(1),
            catchError((erro: HttpErrorResponse) => {
                isHideAlert ? null : this.showMessageError(erro.status === 0 ? this._msgApiFora : erro.error);
                return isHideAlert ? throwErrorAPI(erro.error) : throwErrorAPI();
            })
        );
    };

    sendRequest = (
        url: string,
        type: string,
        params?: Record<string, string> | null,
        body?: any,
        tipoApi?: string,
        customOptions?: IHttpOptions
    ): Observable<any> => {
        this.options = customOptions ? customOptions : tipoApi === 'jarvis' ? this.optionsJarvis : this.options;
        this.options['params'] = !params || typeof params === undefined ? null : cleanParams(params);
        this.options['body'] = body;
        this.options['observe'] = tipoApi === 'jarvis' ? 'response' : 'body';

        return this.http.request(type, url, this.options);
    };

    public getUrl(url: string, tipoApi?: string): string {
        const concatUrl = url ? `${this._baseUrl}${url}` : this._baseUrl;

        return this.montarUrlApi(concatUrl, null, tipoApi);
    }

    public showMessageError(msg: Record<string, any> | Array<any> | any, style = 'danger'): void {
        let msgErr = null;
        const msgDefault = 'Ocorreu um erro na requisição';

        if (!msgErr && JSON.stringify(msg).toString().includes('message')) {
            // msgErr = { message: `<strong> Erro: ${msg['message']} </strong>` };
        }

        if (!msgErr && JSON.stringify(msg).toString().includes('[{')) {
            const arrayMessage = msg.map((err: Record<string, string>) => {
                return { message: `<strong> Erro ${err['cod_erro']}: ${err['ds_erro']} </strong>` };
            });
            msgErr = { messagesMultiple: arrayMessage };
        }

        if (!msgErr && JSON.stringify(msg).toString().includes('{}')) {
            msgErr = { message: '<strong> Erro: Requisição ou arquivo não encontrado.</strong>' };
        }

        if (!msgErr) {
            msgErr = { message: msgDefault };
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const args = Object.assign(
            {
                title: 'Atenção',
                style: style
            },
            msgErr
        );

        // void this.alertService.openModal(args);
    }

    public montarUrlApi(resource: string, parameters?: Record<string, string> | null, tipoApi?: string): string {
        const queryString = parameters ? this.objectToQueryString(parameters) : '';
        let baseUrl = '';

        switch (tipoApi) {
            default:
                baseUrl = this.urlUtilService.getUrlApiBase();
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
}

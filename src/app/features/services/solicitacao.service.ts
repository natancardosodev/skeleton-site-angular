/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { BaseService } from '@core/services/base.service';
import { UrlUtilService } from '@core/services/url-util.service';

@Injectable({
    providedIn: 'root'
})
export class SolicitacaoService extends BaseService {
    constructor(http: HttpClient, urlUtilService: UrlUtilService) {
        super('', http, urlUtilService);
    }

    public getListarProcessos = (processo: any): Observable<any> => {
        return this.get('/grid');
    };

    public putIndeferir = (solicitacao: number, dados: any): Observable<any> => {
        return this.put(`/solicitacao/indeferir/${solicitacao}`, dados);
    };

    public postDados = (dados: Record<string, any>): Observable<any> => {
        return this.post('/solicitacao/dados', dados);
    };

    public getObservacao = (solicitacao: Record<string, any>): Observable<any> => {
        return this.get('/solicitacao/observacao', solicitacao);
    };
}

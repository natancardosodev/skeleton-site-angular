import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { MensagensEnum } from '@core/enums/sistema/mensagens.enum';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

declare const gtag: (arg0: string, arg1: string, arg2: { event_label: string }) => void;

export function delay(ms: number): Promise<any> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function isEmpty(dado: Record<string, any>): boolean {
    return !Object.keys(dado).length;
}

export function isNullOrUndefined(value: any) {
    return value === null || value === undefined;
}

export function cleanParams(params: Record<string, any>): any {
    if (params) {
        Object.keys(params).forEach((key: string) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            if (params[key] && typeof params[key] === 'object') cleanParams(params[key]);
            else if (params[key] === undefined) delete params[key];
        });
    }

    return params;
}

export function removeEmpty(obj: Record<string, any>): any {
    Object.keys(obj).forEach(function (key) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        (obj[key] && typeof obj[key] === 'object' && removeEmpty(obj[key])) ||
            ((obj[key] === '' || obj[key] === null) && delete obj[key]);
    });
    return obj;
}

export function trackGAnalytics(label: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    gtag('event', 'select_content', {
        event_label: label
    });
}

export function idGenerator(label: string, idExtra?: number): string {
    if (label === undefined) {
        const radomNumber = Math.floor(Math.random() * 100);
        return `field-${radomNumber}`;
    }

    label = idExtra !== undefined ? `${label}-${idExtra.toString()}` : label;

    return label
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\ +/g, '-')
        .replace(/\//g, '-')
        .replace(/\./g, '')
        .toLowerCase();
}

export function throwErrorAPI(msg?: string): Observable<never> {
    const err = msg ? new Error(msg) : new Error('Erro da API');
    return throwError(() => err);
}

export function generateQueryParamsByObject(obj: Record<any, any>): string {
    let params = '?';
    const tamanhoObj = Object.keys(obj).length;

    if (tamanhoObj) {
        Object.keys(obj).forEach((key, index) => {
            params = `${params}${key}=${obj[key]}${index + 1 < tamanhoObj ? '&' : ''}`;
        });
    }

    return tamanhoObj ? params : '';
}

export function isProd(): boolean {
    return environment.uri.subDomain === 'www';
}

export function separeDatesRange(date: string): Record<string, any> {
    const dateSplit = date.toString().split(' - ');

    return {
        dataInicial: dateSplit[0],
        dataFinal: dateSplit[1]
    };
}

export function joinDatesRange(dateInicial: string, dateFinal: string): string {
    return `${dateInicial} - ${dateFinal}`;
}

export function catchErrorApi(erro: HttpErrorResponse, isHideAlert?: boolean) {
    const msgDefault = {
        message: MensagensEnum.API_FORA
    };

    if ([0, HttpStatusCode.Unauthorized].includes(erro.status)) {
        disableBlockReloadPage();
    }

    return !isHideAlert ? ([0, HttpStatusCode.Unauthorized].includes(erro.status) ? msgDefault : erro.error) : null;
}

export const blockReloadPage = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    return (e.returnValue = '');
};

export function activeBlockReloadPage() {
    window.addEventListener('beforeunload', blockReloadPage);
}

export function disableBlockReloadPage() {
    window.removeEventListener('beforeunload', blockReloadPage, false);
}

export function filterArrObjData(arrData: Array<any>): Array<any> {
    const onlyValues: Array<string> = [];

    if (arrData && arrData.length > 0) {
        arrData.forEach((data: string) => {
            onlyValues.push(Object.values(data[0]).toString().split(' - ')[0].replace('-', '').replace('/', ''));
        });
    }

    return onlyValues;
}

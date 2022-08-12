import { Observable, throwError } from 'rxjs';

declare const gtag: (arg0: string, arg1: string, arg2: { event_label: string }) => void;

export function delay(ms: number): Promise<any> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function trackGAnalytics(label: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    gtag('event', 'select_content', {
        event_label: label
    });
}

export function isEmpty(dado: Record<string, any>): boolean {
    return !Object.keys(dado).length;
}

export function isNullOrUndefined(value: any) {
    return value === null || value === undefined;
}

export function cleanParams(params: Record<string, any>): any {
    if (params) {
        Object.keys(params).forEach((key) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            if (params[key] && typeof params[key] === 'object') cleanParams(params[key]);
            else if (params[key] === undefined) delete params[key];
        });
    }

    return params;
}

export function removeEmpty(obj: any): any {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    Object.keys(obj).forEach(function (key) {
        (obj[key] && typeof obj[key] === 'object' && removeEmpty(obj[key])) ||
            ((obj[key] === '' || obj[key] === null) && delete obj[key]);
    });
    return obj;
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
    return msg ? throwError(msg) : throwError(new Error('Erro da API'));
}

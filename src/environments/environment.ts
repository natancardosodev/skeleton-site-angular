import { IEnvironment } from '@core/interfaces/sistema/environment.interface';

export const environment: IEnvironment = {
    production: false,
    uri: {
        api: 'http://localhost:3000',
        oauth: 'https://deve-autenticacao.voxtecnologia.com.br',
        projeto: 'portal',
        subDomain: 'deve'
    }
};

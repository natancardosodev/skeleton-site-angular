import { IEnvironment } from '@core/interfaces/sistema/environment.interface';

export const environment: IEnvironment = {
    production: true,
    uri: {
        api: 'http://localhost:3000',
        oauth: 'https://homologacao-autenticacao.voxtecnologia.com.br',
        projeto: 'sigfacil',
        subDomain: 'homologacao'
    }
};

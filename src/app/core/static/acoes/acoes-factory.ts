import { AcoesPageInterface } from '@core/interfaces/pagina/acoes-pages.interface';
import { Exemplo } from './exemplo';

export class AcoesFactory {
    public getDados(slug: string): AcoesPageInterface {
        switch (slug) {
            case 'exemplo':
                return new Exemplo().all();

            default:
                return null;
        }
    }
}

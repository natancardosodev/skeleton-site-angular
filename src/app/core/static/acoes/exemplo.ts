import { todasUFs, urlPortalHttp } from '@core/configs/mapeamento-servicos';
import { AcoesPageInterface } from '@core/interfaces/pagina/acoes-pages.interface';

export class Exemplo {
    public all(): AcoesPageInterface {
        return {
            title: 'O que deseja fazer?',
            breadcrumb: [
                { route: '/acoes/transformacao', label: 'Transformação' },
                { route: '/acoes/transformacao', label: 'Escolha de Transformação' }
            ],
            options: [
                {
                    method: 'POST',
                    label: 'Quero alterar a natureza jurídica da minha matriz',
                    action: '/s/consultaprevia/lista-eventos-alteracao',
                    hiddenInputs: [
                        {
                            id: 'x_tipo_empresa',
                            value: 'm'
                        },
                        {
                            id: 'x_tipo_evento',
                            value: 'al'
                        },
                        {
                            id: 'evento_empresa',
                            value: 'eventos-matriz'
                        },
                        {
                            id: 'domain',
                            value: urlPortalHttp
                        },
                        {
                            id: 'evento',
                            value: '225'
                        }
                    ],
                    hideEnvs: [],
                    ufsLiberadas: todasUFs
                },
                {
                    method: 'POST',
                    label: 'Quero alterar a natureza jurídica da minha filial com matriz em outro Estado',
                    action: '/s/consultaprevia/lista-eventos-alteracao',
                    hiddenInputs: [
                        {
                            id: 'x_tipo_empresa',
                            value: 'f'
                        },
                        {
                            id: 'x_tipo_evento',
                            value: 'al'
                        },
                        {
                            id: 'evento_empresa',
                            value: 'eventos-filial'
                        },
                        {
                            id: 'domain',
                            value: urlPortalHttp
                        },
                        {
                            id: 'evento',
                            value: '225'
                        }
                    ],
                    hideEnvs: [],
                    ufsLiberadas: todasUFs
                }
            ]
        };
    }
}

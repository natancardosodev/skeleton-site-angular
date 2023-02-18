import { StructureBasicPageInterface } from '@core/interfaces/pagina/base-pages.inteface';
import { FooterExemploComponent, ModalSobreExemploComponent } from '@features/views/exemplo';

export const routesPagesHtml: Array<StructureBasicPageInterface> = [
    {
        uf: 'pb',
        pages: [
            {
                router: 'rodape',
                component: FooterExemploComponent,
                title: 'Rodapé'
            },
            {
                router: 'modalSobre',
                component: ModalSobreExemploComponent,
                title: 'Sobre o Portal'
            }
        ]
    }
];

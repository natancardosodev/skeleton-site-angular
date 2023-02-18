import { MenuInterface, UfsLiberadasInterface } from '../sistema/sigfacil.interface';

export interface AcoesPageInterface {
    title: string;
    breadcrumb: Array<any>;
    options: Array<MenuInterface>;
    manualButton?: ManualButtonInterface;
}

export interface ManualButtonInterface extends UfsLiberadasInterface {
    router?: string;
}

export interface ModalMsgInterface {
    id?: string;
    title: string;
    body: string;
    buttons: Array<ButtonModalInterface>;
}

interface ButtonModalInterface {
    label: string;
    link: string;
    isPrimary: boolean;
}

export interface TipoLivroInterface {
    id: number;
    nome: string;
    tipo: string;
}

export interface CustomModalInterface {
    title: string;
    body: string;
}

import { CustomModalInterface, ModalMsgInterface } from '../pagina/acoes-pages.interface';

export interface LinkInterface extends UfsLiberadasInterface {
    label: string;
    router?: string;
    link?: string;
    urlAssets?: string;
    action?: string;
    input?: Array<InputInterface>;
    icon?: string;
    ufsEspecificas?: Array<string>;
}

export interface UfsLiberadasInterface {
    hideEnvs: Array<string>;
    ufsLiberadas?: Array<string>;
}

export interface InputInterface {
    name: string;
    value: string;
}

export interface MenuInterface extends UfsLiberadasInterface {
    label: string;
    icon?: string;
    link?: string;
    router?: string;
    customModal?: CustomModalInterface;
    urlAssets?: string;
    button?: string;
    subLinks?: Array<LinkInterface> | Array<MenuInterface>;
    ufsEspecificas?: Array<string>;
    hiddenInputs?: Array<HiddenInputInterface>;
    action?: string;
    method?: string;
    helpdesk?: ModalMsgInterface;
    hiddenSearch?: Array<string>;
}

export interface FilteredItemMenu extends UfsLiberadasInterface {
    label: string;
    icon?: string;
    link?: string;
    router?: string;
    customModal?: CustomModalInterface;
    urlAssets?: string;
    button?: string;
    subLinks?: Array<LinkInterface> | Array<MenuInterface>;
    hiddenInputs?: Array<HiddenInputInterface>;
    action?: string;
    method?: string;
    helpdesk?: ModalMsgInterface;
    links?: Array<LinkInterface> | Array<MenuInterface>;
    input?: Array<InputInterface>;
}

export interface HiddenInputInterface {
    id: string;
    value: string;
}

export interface MenusInterface {
    acoesRedesim: Array<LinkInterface | MenuInterface>;
    orgaos: Array<LinkInterface | MenuInterface>;
    servicosAdicionais: Array<LinkInterface | MenuInterface>;
}

export interface DadosPortalInterface {
    uf?: string;
    estado: string;
    portal: string;
    url: string;
    urlPortal?: string;
    navbar: Array<LinkInterface>;
    rodape: Array<RodapeInterface>;
    contato: ContatoInterface;
}

export interface RodapeInterface {
    nome: string;
    formato: string;
    link: string;
    title: string;
}

export interface ContatoInterface {
    telefones: TelefonesInterface;
    endereco: string;
}

export interface TelefonesInterface {
    principal: string;
    demais: Array<any>;
}

export interface ServicosComunsInterface {
    id: string;
    isExternal: boolean;
    value?: string;
    ufsLiberadas?: Array<string>;
    action?: string;
    inputName?: string;
}

export interface AsideFormDataInterface {
    id: string;
    title: string;
    description: string;
    action?: string;
    method: string;
    hiddenInputs?: Array<{ name: string; value: string }>;
    select?: boolean;
    options?: Array<ServicosComunsInterface>;
    button: {
        name: string;
        label: string;
    };
    input?: {
        id: string;
        type: string;
        initial?: string;
        placeHolder: string;
        maxLength?: number;
        minLength?: number;
    };
    ufsLiberadas?: Array<string>;
}

export interface ResponseApiErroInterface {
    code: number;
    message: string;
    style: string;
}

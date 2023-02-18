import { Component } from '@angular/core';

@Component({
    template: `
        <div>
            <img class="logo-modal" src="../../../assets/img/maceio/logo-modal.png" alt="Prefeitura de Maceió" />
        </div>

        <div class="modal-body">
            <h5 class="modal-title">Sobre o Portal SLIM</h5>
            <p class="text-justify">
                O Slim é um portal de licenciamento integrado do município de Maceió, voltado aos empreendedores e
                empresários de qualquer porte para emissão das licenças, sanitária e ambiental, necessárias para o
                exercício de atividades econômicas. Estas licenças serão fornecidas pela Vigilância Sanitária de Maceió
                – VISA e pela Secretaria de Desenvolvimento Territorial e Meio Ambiente – SEDET, respectivamente.
            </p>
            <p class="text-justify">
                Esta ferramenta busca proporcionar facilidade, agilidade e desburocratização aos processos de
                licenciamento para o funcionamento de empresas no Município. As atividades consideradas "Nível Risco I"
                ambiental e sanitário, estarão dispensadas do licenciamento municipal. Para as atividades econômicas
                consideradas "Nível de Risco II", basta preencher os dados solicitados, fazer o upload da documentação
                exigida e concordar com os Termos de Ciência e Responsabilidade. As licenças serão emitidas
                automaticamente, sem a necessidade de vistoria prévia. Já para atividades econômicas de "Nível de Risco
                III", após a inclusão dos projetos e documentações necessárias, o processo passará por uma análise
                técnica e vistoria prévia. Todo o trâmite poderá ser acompanhado de forma online e, ao final, as
                licenças serão emitidas pelo sistema e poderão ser impressas pelo próprio requerente, com intuito de
                garantir transparência e sustentabilidade ao processo.
            </p>
        </div>
    `
})
export class ModalSobreExemploComponent {}

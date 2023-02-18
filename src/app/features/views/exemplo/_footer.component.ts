import { Component } from '@angular/core';

@Component({
    template: `
        <footer>
            <!-- content -->
            <div class="content">
                <span class="copyright">
                    <p>
                        <span>PREFEITURA DE MACEIÓ</span>
                    </p>
                </span>
                <span class="endereco">
                    <p>
                        Rua Sá e Albuquerque, 235, Jaraguá, Maceió/AL&nbsp;&nbsp;CEP 57022-180<br />
                        <strong>Telefone: (82) 3312-5860</strong>
                    </p>
                    <ul class="midias">
                        <li>
                            <a
                                href="http://www.youtube.com/prefeiturademaceio"
                                class="youtube"
                                target="_blank"
                                title="Curta nosso canal"
                            >
                                youtube
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/PrefeituraDeMaceio"
                                class="facebook"
                                target="_blank"
                                title="facebook"
                            >
                                facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/prefmaceio" class="twitter" target="_blank" title="twitter">
                                twitter
                            </a>
                        </li>
                    </ul>
                </span>
            </div>
            <!-- fim content -->
        </footer>
    `
})
export class FooterExemploComponent {}

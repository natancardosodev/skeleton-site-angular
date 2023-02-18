import { Component } from '@angular/core';

@Component({
    template: `
        <footer>
            <!-- content -->
            <div class="content">
                <span class="copyright">
                    <p>
                        <span>ENTIDADE</span>
                    </p>
                </span>
                <span class="endereco">
                    <p>
                        Logradouro, 232, Centro, Cidade/UF&nbsp;&nbsp;CEP 4545-455<br />
                        <strong>Telefone: (82) 78768677</strong>
                    </p>
                    <ul class="midias">
                        <li>
                            <a
                                href="http://www.youtube.com/prefeiturade"
                                class="youtube"
                                target="_blank"
                                title="Curta nosso canal"
                            >
                                youtube
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/PrefeituraDe"
                                class="facebook"
                                target="_blank"
                                title="facebook"
                            >
                                facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/pref" class="twitter" target="_blank" title="twitter">
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

# Iniciando um novo projeto básico com Angular

## Configurando o Projeto

```bash
npm i -g @angular/cli@14
ng new skeleton-angular-basic
cd skeleton-angular-basic
code .
cd src/app
mkdir core features shared
cd features
mkdir pages services
cd pages
ng g m --name=home --module=app --route=home --routing
ng g m --name=not-found --module=app --route=not-found --routing
cd ../../core
mkdir components configs enums interceptor interfaces services utils s
tatic
```

-   Pode alterar o path da rota em `AppRoutingModule`
-   Abra `src/app/app.component.html` e substitua por `<router-outlet></router-outlet>`
-   Crie um arquivo `.gitkeep` e coloque nas pastas que estão por enquanto vazias
-   Adicionar no compilerOptions do `tsconfig.json`:

```json
"paths": {
      "@core/*": [
        "./src/app/core/*"
      ],
      "@features/*": [
        "./src/app/features/*"
      ],
      "@shared/*": [
        "./src/app/shared/*"
      ]
    },
```

## Adicionando Prettier, ESLint e Stylelint ao projeto

```bash
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/eslint-plugin-tslint @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier prettier prettier-eslint stylelint stylelint-config-sass-guidelines
```

-   Adicione no projeto .eslintignore, .eslintrc.js, .prettierrc.json e .stylelintrc.json conforme este projeto
-   Adicione o `settings.json` em .vscode conforme este projeto.
-   Adicione nos scripts do package.json os comandos abaixo.

```json
"stylelint": "./node_modules/.bin/stylelint 'src/**/**/*.scss'",
"stylelint:fix": "./node_modules/.bin/stylelint 'src/**/**/*.scss' --fix",
"eslint": "./node_modules/.bin/eslint src/app/** --ext .ts --quiet",
"eslint:fix": "./node_modules/.bin/eslint src/app/** --ext .ts --fix",
"lint": "npm run eslint && npm run stylelint",
"lint:fix": "npm run eslint:fix && npm run stylelint:fix"
```

-   Rode o `npm run lint:fix` para corrigir e verificar os erros.

# SkeletonSiteAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Instalação do Projeto

```
npm i -g @angular/cli@14
ng new skeleton-site-angular
cd skeleton-site-angular
code .
cd src/app
mkdir core features shared
cd features
mkdir pages services
cd pages
ng g m --name=home --module=app --route=home --routing
ng g m --name=not-found --module=app --route=not-found --routing
```

- Abra `src/app/app.component.html` e substitua por `<router-outlet></router-outlet>`
- Crie um arquivo `.gitkeep` e coloque nas pastas que estão por enquanto vazias
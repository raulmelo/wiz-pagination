# @wizsolucoes WizPagination
Modulo Angular 4+

## Configuração do módulo (app.module.ts)

Módulo simples de modal.

```ts
import { WizPaginationModule } from '@wizsolucoes/wiz-pagination';

@NgModule({
  declarations: [],
  imports: [
    WizPaginationModule,
  ]

```

## Chamando componente no HTML (.component.html)

Chamando o componente no html

```html
<wiz-pagination [list]=itens (eventPagination)="teste($event)" [valueSelect]=3 type="indicator"></wiz-pagination>


```
## Chamando componente no TS (.component.ts)


```ts
  teste(e) {
    console.log(e);
  }

  public itens = [
    { 'value': 1 },
    { 'value': 2 },
    { 'value': 3 },
    { 'value': 4 },
    { 'value': 5 },
    { 'value': 6 },
    { 'value': 7 },
  ]
```

## (eventPagination)="teste($event)":** *Evento emitido*


```ts
 (eventPagination)="teste($event)"
```


## valueSelect


```ts
 [valueSelect]=1
 [valueSelect]=2
 [valueSelect]=3
 [valueSelect]=4
 [valueSelect]=5...

```

## type="indicator"


```ts
type="default"
type="simple"
type="selector"
type="indicator"

```


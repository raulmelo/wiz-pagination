

![Wiz solucoes](https://syz.wizsolucoes.com.br/assets/header/img/logowiz.svg)

# @wizsolucoes WizPagination

### ✨ [Demonstração](https://syz.wizsolucoes.com.br/component/pagination)
Modulo Angular 4+

  

## Configuração do módulo (app.module.ts)

  

Módulo WizPagination.

  

```ts

import { WizPaginationModule } from  '@wizsolucoes/wiz-pagination';

@NgModule({
declarations: [],
imports: [
	WizPaginationModule,
] 

```

  

## Chamando componente no HTML (.component.html)

  

Chamando o componente no html

  

```html

<wiz-pagination
	[total]=80
	(eventPagination)="teste($event)"
	[valueSelect]=3
></wiz-pagination>
  


```


## Parâmetros


| Props    | Required | default | type | options |  Description                                                     |
| ---------| -------- | ------- |---------|---------|------------------------------------- |
| total       | true  | -       | Number  | -       | Total de páginas para para ser  exibido    
| valueSelect | false |  1      | Number  | -       | Página ativa no momento
| type        | false | default | String  | 'default','simple', 'selector', 'indicator' | diferente tipos de comportamentos quer proporcionar maior usabilidade e adequação de layout.


  ## Eventos
  | Nome          | exemplo |  evento     |Descrição |
  | --------------| ------------------------| -----------| ----------------------------------- |
  |eventPagination| (eventPagination)="teste($event)" | click       | Evento emitido para o componente pai quando executar uma mudança de página                           

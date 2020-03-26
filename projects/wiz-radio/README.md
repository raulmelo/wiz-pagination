# @wizsolucoes WizRadio
Modulo Angular 4+

## Configuração do módulo (app.module.ts)

Módulo simples de modal.

```ts
import { WizRadioModule } from '@wizsolucoes/wiz-radio';

@NgModule({
  declarations: [],
  imports: [
    WizRadioModule,
  ]

```

## Chamando componente no HTML (.component.html)

Chamando o componente no html

```html
<wiz-radio 
(returnEvent)="teste($event)" 
[disabled]=true 
value="teste1"
name="testeName">
</wiz-radio>

```

> **disabled:** *Desabilitar input*

```ts
  [disabled]=false
  [disabled]=true
```


> **value:** *Valor emitido pelo evento*

```ts
  value="sim"
  value="nao"

  value="true"
  value="false"
```

> **name:** *Name dos radios do formgroup*

```ts
 name="testeName">
```


> **(returnEvent)="teste($event)":** *Evento emitido*

app.component.ts
```ts
  teste(e) {
    console.log(e);
  }
```

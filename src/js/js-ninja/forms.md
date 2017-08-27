# Formulários

Selecionando formulários

```js
document.forms[n]
document.forms.formName
document.forms['formName'] // atributo 'name'

```
Selecionando elementos de formulários

```js
var form = document.forms.formName

form.elements[n];
form.elementName; // atributo 'name'
form.['elementName']; // atributo 'name'
```

## Propriedades e métodos

```js
// Devem ser adicionadas ao formulário, não seus elementos

form.submit(); // enfia form. não ativa evento submit.
form.reset(); // apaga todos os dados inseridos no formulário.
form.action = 'action/url';
```

O envio do formulário pode ser bloqueado pelo uso de `preventDefault` dentro do callback.

## Eventos

###Elemento
```js
'focus'   // ativado ao se pôr o foco do elemento.
'blur'    // ativado ao se tirar o foco do elemento.
'change'  // ativado ao se tirar o foco do elemento após inserir algum dado.
```

###Formulário
```js
'submit'   // ativado ao se clicar no botão de enviar. Intercepta o formulário antes de ser passado para o backend.
```

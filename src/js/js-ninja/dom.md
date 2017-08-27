# Document Object Model (DOM)

## Navegando pelo DOM

```js
el.childNodes; // Todos os child nodes do elemento
el.children; // Todos os child nodes do elemento, menos os de texto
```

```js
el.firstChild;
el.lastChild;
```

### Selecionando elementos próximos

```js
el.parentNode;
el.nextSibling;
el.previousSibling;

el.nextElementSibling;
el.previousElementSibling;
```

### Descobrindo o valor do node

```js
el.textContent;
el.innerText; // evitar usar.
```

## Atributos

`class`, `id`, `style`, etc. Tudo adicionado dentro da tag é um atributo.

### Getter

```js
el.getAttribute('atributo');
// << retorna valor do atributo
// se o atributo não existir, retorna 'null'
```

### Setter

```js
el.setAttribute('atributo', 'valor');
```

### Classes

```js
el.className = 'name';
```

```js
el.classList.add('class');
el.classList.remove('class');
el.classList.toggle('class');
el.classList.contains('class'); // checa se el possui .class
```

## Atualiando o DOM em tempo real

### Criando um paragrafo

```js
var newPara = document.createElement('p'); // Cria elemento <p></p>
var paraText = document.createTextNode('O texto vai aqui.'); // Cria um text node.
newPara.appendChild(paraText); // Coloca o text node como child node de newPara.
```

Ou

```js
var newPara = document.createElement('p');
newPara.textContent = 'O texto vai aqui.';
```

Ou uma função curta

```js
function createElement(tag, content) {
  var el = document.createElement(tag);
  el.textContent = content;
  return el;
}
```

### Adicionando ao DOM
Mas qualquer elemento que você criar com esse código não estará acessível pelo DOM, nem renderizado na página. é preciso defini-los como `child nodes` de nodes existentes.

Para isso é só repetir o que já foi feito, mas em outros nodes que possam conter os elementos recem criados. Ex:

```js
el.appendChild(newPara);
parent.appendChild(newPara); // adiciona newPara como child node de parent, como lastChild
parent.insertBefore(newPara, el); // adiciona newPara em parent, antes do elemento el.
```

Agora eles estarão visíveis na página e no inspetor de DOM.

`appendChild` e `insertBefore` também podem ser usados em elementos já existentes, não apenas nos que ainda não foram inseridos no DOM.

Lembrando que elementos movido com `appendChild` pasarrão para o final da lista de nodes.

Obs: Não existe `insertAfter`.

### Removendo elementos

```js
parent.removeChild(el);
```

### Trocando elementos

```js
parent.replaceChild(newEl, oldEl);
```

### `innerHTML`

Retorna o HTML do elemento e seu conteúdo, não apenas o seu conteúdo.

```js
el.innerHTML;
// << <p class="text">This is a paragraph</p>
```

## Manipulando CSS

Todas as propriedades CSS são manipuláveis em JS da seguinte forma:

```js
el.style.property = 'values';
```

O detalhe é que, como javascript não suporta `-` como parte do nome de um elemento, é preciso usar camelCase.

- `background-color` vira `backgroundColor`;
- `margin-bottom` vira `marginBottom`;

Então se quisermos mudar algumas propriedades, fica assim:

```js
el.style.backgroundColor = '#abc';
el.style.border = '1px solid #878';
```

É importante saber que os estilos alterados são adicionados inline através do atributo `style`.


É possível utilizar a propriedade `style` para ver os estilos que foram colocados em determinado elemento, mas apenas os adicionados por JS ou inline.

Para ver todos os estilos computados em um objeto, é possível utilizar `getComputedStyles(el)`, que retorna um objeto `CSSStyleDeclaration` que possuem alguns métodos próprios.

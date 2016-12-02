# Flexbox Basics
- [Guia sobre flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

``` css
.class {
  display: flex;
  /* flex | inline-flex */
}
```

### Direção do conteúdo: `flex-direction`
- [Flex direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
Propriedade exclusiva do flex container.


O valor padrão é `row`.

``` css
.class {
  display: flex;
  flex-direction: row;
  /* row* | row-reverse | column | column-reverse */
}
```

### Quebra de linha: `flex-wrap`
- [Flex wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)

Propriedade exclusiva do flex container.

``` css
.class {
  display: flex;
  flex-wrap: wrap;
  /* wrap | nowrap | wrap-reverse */
}
```

### Posicionamento dos itens: `justify-content`
- [Documentação MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
Propriedade exclusiva do flex container.


``` css
.class {
  display: flex;
  justify-content: ;
  /* center | flex-end | flex-start* | space-around | space-between */
}
```

### Ordem dos elementos: `order`
- [Documentação MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/order)

Propriedade exclusiva de um flex item.
``` css
.item-x {
  order: 0 ;
  /* integer | default: 0 */
}
```
### Preenchimento de espaço vazio: `flex-grow`
- [Documentação MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
- [CSS-Tricks](https://css-tricks.com/flex-grow-is-weird/)

Propriedade exclusiva de um flex item.

flex-grow determines how much of the available space inside the flex container an item should take up; it assigns more or less space to flex items.

``` css
.item-x {
  flex-grow: 1;
  /* 0* | 1 | positive integer */
}
```

### Tamanho mínimo de um item: `flex-basis`
- [documentação MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)

Propriedade exclusiva de um flex item.

Define o tamanho mínimo de um flex item.

``` css
.item-x {
  flex-basis: 100px;
  /* 0* | positive integer */
}
```

### `flex` shorthand
- [documentação MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

Propriedade exclusiva de um flex item.

Define o tamanho mínimo de um flex item.

``` css
.item-x {
  flex: 1 1 20px;
  /* flex-grow | flex-shrink | flex-basis */
}
```

### Alinhamento vertical (cross axis)
#### `align-items`
- [Documentação MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)

`align-items` é uma propriedade exclusiva do flex container. É responsável pelo alinhamento vertical (cross axis) de todos os flex items dentro dele.

#### `align-self`
- [Documentação MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)

`align-self` é uma propriedade exclusiva do flex item. É responsável pelo alinhamento vertical (cross axis) do flex item especificado.

#### Valores possíveis

``` css
/* Keyword values */
align-self: auto;
align-self: flex-start;
align-self: flex-end;
align-self: center;
align-self: baseline;
align-self: stretch; /* Default */
```

### Como centralizar um item
#### Método 1
``` css
.container {
  display: flex;
  min-height: 50vh;

  justify-content: center;
  align-items: center;
}
```
#### Método 2
``` css
.container {
  display: flex;
  min-height: 50vh;

  justify-content: center;
}

.item {
  align-self: center;
}
```
#### Método 3
``` css
.container {
  display: flex;
  min-height: 50vh;
}

.item {
  margin: auto;
}
```

### Links úteis:
- [Flexbugs](https://github.com/philipwalton/flexbugs)
- [Flexbox Froggy](http://flexboxfroggy.com/)
- [Flexbox browser support](http://caniuse.com/#search=flexbox)

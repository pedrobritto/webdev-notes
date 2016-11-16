# CSS Basics

### CSS Rule

``` css
selector {
  property: value;
}
```

### Tipos de seletores

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

1. Type/Element;
2. ID;
3. Class;
4. Universal;
5. Attribute.

Um detalhe interessante: Seletores ID podem ser utilizados como `href` dentro da página e por isso possuem uma estrutura de navegação. Ex:

```html
<p id="top">...</p>
(...)
<a href="#top">Back to top</a>
```

### CSS Units

https://developer.mozilla.org/en-US/docs/Web/CSS/length

#### Pixels (`px`)
Unidade absoluta. Não está sempre diretamente ligada ao pixels em um display, mas é uma unidade de medida relativa à densidade de um display.

Mais sobre pixels:
https://docs.webplatform.org/wiki/tutorials/understanding-css-units

#### Percentuais (`%`)
Unidade relativa. O valor percentual é relativo ao elemento pai.

#### `em`
Unidade relativa. O valor é um número real que age como um multiplicador do tamanho da fonte em relação ao elemento pai. Como o `font-size` do `body` padrão na maioria dos navegados é de `16px`, `1em` equivale a `16px`. `1.5em` equivale a `24px` e assim por diante.

Claro, se o tamanho da fonte em `body` ou em um elemento pai for alterado isso afetará o tamanho de todas as outras fontes de elementos filhos que utilizam `em` como unidade.

Ferramenta de conversão `px` para `em`: http://pxtoem.com/

#### `rem` (*root em*)
Unidade relativa. É semelhante à unidade `em`, mas em vez de ser afetada por qualquer elemento pai, é dependente apenas do elemento raiz `<html>`.

Mais sobre `rem`: https://snook.ca/archives/html_and_css/font-size-with-rem

### Display Values

https://developer.mozilla.org/en-US/docs/Web/CSS/display
https://www.impressivewebs.com/difference-block-inline-css/

Tipos principais:
* none
* inline
* block
* inline-block

`none`. O elemento não é renderizado pelo browser.

`inline`. Ocupam apenas o espaço necessário. Valor padrão dos elementos `span`, `a`, `img`, `strong` e [outros](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements). Não aceitam configurações de `padding` ou `margin`.

`block`. Ocupam 100% do espaço horizontal em que se encontram, forçando uma quebra de linha antes e depois deste tipo de elemento. Valor padrão dos elementos `h1` e afins, `div`, `p`, `ul`, e [outros](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)

`inline-block`. Elementos híbridos que aceitam configuração de `padding` e `margin`, mas não ocupam todo o espaço horizontal em uma linha, podendo coexistir nela com outros elementos sem necessidade de `float`. Os únicos elementos `inline-block` no Chrome são `input`, `button`, `textarea` e `select`.

### Font Stack
Font stack é um conjunto de fontes que é utilizada em ordem de disponibilidade na máquina do cliente. Se a primeira não estiver disponível, a segunda tentará ser utilizada, etc. Ex:

``` css
p {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}
```

Gerador de font stack: http://www.cssfontstack.com/<br>
Sobre `line-height`: https://developer.mozilla.org/en-US/docs/Web/CSS/line-height

## Basic Layout

### Dicas
#### #1
Aplicar `box sizing: border-box` corretamente:

``` css
html { box-sizing: border-box; }

*,
*::before,
*::after { box-sizing: inherit; }

(...)
```

#### #2
Deixar imagens com layout fluido:
``` css
img { max-width: 100%; }
```
#### #3
Ampliar uma imagem de fundo mantendo as devidas proporções:
```css
img {
  background-image: url('../img/photo.jpeg');
  background-size: cover; /* keeps aspect ratio */
  background-position: center; /* centers image */
}
```

#### #4
`background` property shorthand:

``` css
background: #abc url('img.jpg') no-repeat center / cover;
/* color | image | repeat | position / size */
/* é recomendável utilizar background-size em uma nova linha */
```

### Float

Remove os "floated elements" do fluxo normal da página. É um bom jeito de organizar o layout, principalmente em colunas, mas pode fazer com que esses elementos fiquem por cima de outros elementos.

Isso porque se um elemento do tipo `block` tiver algum elemento filho com a propriedade `float`, a o valor da propriedade `height` entrará em "colapso", exatamente porque os elementos com float estão fora do fluxo do documento. É como se ele não tivesse altura, mas ainda assim é renderizado com sua altura normal.

Assim os elementos com `float` são renderizados normalmente, mas outros elementos tipo `block` não os encapsularão corretamente.

Para consertar isso, podemos utilizar um [float clearfix](http://nicolasgallagher.com/micro-clearfix-hack/):

```css
.cf::after {
  content: "";
  display: table;
  clear: both;
}
```

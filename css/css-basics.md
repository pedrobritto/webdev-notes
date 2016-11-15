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

Seletores ID podem ser utilizados como href dentro da página. Ex:

```html
<p id="to-top">...</p>
(...)
<a href="#to-top">Back to top</a>
```

### CSS Units

https://developer.mozilla.org/en-US/docs/Web/CSS/length

#### Pixels (px)
Unidade absoluta. Não está sempre diretamente ligada ao pixels em um display, mas é uma unidade de medida relativa à densidade de um display.

https://docs.webplatform.org/wiki/tutorials/understanding-css-units

#### Percentuais (%)
Unidade relativa. O valor percentual é relativo ao elemento pai.

#### em
Unidade relativa. O valor é um número real que age como um multiplicador do tamanho da fonte em relação ao elemento pai. Como o `font-size` do `body` padrão na maioria dos navegados é de 16px, `1em` equivale a `16px`. `1.5em` equivale a `24px` e assim por diante.

Claro, se o tamanho da fonte em `body` ou em um elemento pai for alterado isso afetará o tamanho de todas as outras fontes de elementos filhos que utilizam `em` como unidade.

Ferramenta de conversão `px <-> em`: http://pxtoem.com/

#### rem (root em)
Unidade relativa. É semelhante à unidade `em`, mas em vez de ser afetada por qualquer elemento pai, é dependente apenas do elemento raiz `<html>`.

https://snook.ca/archives/html_and_css/font-size-with-rem

## Fonts
Gerador de font stcak. http://www.cssfontstack.com/
Sobre line-heigth: https://developer.mozilla.org/en-US/docs/Web/CSS/line-height

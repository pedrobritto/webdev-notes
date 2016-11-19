# Layouts CSS

## Noções básica

### Resete os estilos padrão
Utilizar um resetador de CSS para diminuir as pequenas inconsistênias visuais entre browsers. Um deles é o `normalize.css`.

### Crie um container
É uma boa ideia envolver o seu conteúdo em um container, que é normalmente utilizado para definir o tamanho do conteúdo principal e centralizá-lo.

Veja um exemplo de uso comum de um container:

```html
<div class="container">
  <!-- conteúdo -->
</div>
```
``` css
.container {
  margin: 0 auto;
  max-width: 960px;
}
```

E o `wrapper`? O wrapper é mais comumente utilizado para envolver todo o conteúdo de uma página. O `container` é mais utilizado para envolver seções diferentes, não ele todo de uma vez.

### Fique atento às margens
Margens podem entra em colapso verticalmente em alguns casos.

Sobre isso o Guil Hernandez fala:

- *If there is no content, padding, or border area to interrupt two touching margins, the margins collapse to the largest of the two margin values.*
- *You may experience margins collapsing in adjacent elements like paragraphs and divs.*
- *If a div's bottom margin is larger than the top margin of the div below it, the margin area between the divs collapses to the largest of the two margin values.*

Pelo menos esse problema pode ser resolvido com facilidade. Basta:
1. Remover a margem vertical problemática (`top`, `bottom` ou ambas); ou
2. Adicionar qualquer quantidade de `padding`. 1px já resolve;

Para mais detalhes, [confira a explicação da MDN sobre isso](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing).

### Criando um header full-width e conteúdo centralizado
Essa é fácil. Basta adicionar um `wrapper` ou `container` em volta do conteúdo do site, menos no header.

### Mobile First - Para mais paz de espírito
A ideia todo do mobile first é desenvolver o site pensando primeiro nos dispositivos móveis. Isso porque:

1. É mais fácil partir de um layout menos complexo para um mais complexo (*progressive enhancement*).
2. Reduz a chance de problemas de compatibilidade e consistência em browsers mobile.

Aqui, as media queries só devem ser adicionadas para os layouts de telas maiores e designs de uma só coluna são seus melhores amigos.

Você pode ler mais sobre mobile first [aqui](http://zurb.com/word/mobile-first) e [aqui](http://bradfrost.com/blog/web/mobile-first-responsive-web-design/).

### Ponha o rodapé onde ele pertence
De forma rápida: utilize a função CSS `calc()` para calcular o posicionamento do rodapé.

É preciso utilizar um `wrapper` (que envolva todo o conteúdo do site) que termine antes da tag  `<footer>`, e então adicionar a classe `.footer-push` ao elemento que contem a classe `.wrapper`  para que ele possa empurrar o rodapé para a parte de baixo.

Se preferir, é só adicionar a linha única dentro da classe `.wrapper`.

``` CSS
.footer-push {
  min-height: calc(100vh - 96px);
  /* onde 96px é a altura do rodapé */
}
```

### Sobre a propriedade `display` (de novo)

#### `block`
 Ocupam todo o espaço horizontal disponibilizado por seu elemento pai, ou seja, não coexistem com outros elementos em uma mesma linha¹. Isso porque forçam uma quebra de linha antes e depois de seu conteúdo. Aceitam alterações de `margin`, `padding`, `height` e `width`.

 Exemplos de elementos tipo `block`:
 - `div`
 - `h1`
 - `p`
 - `ul` e `li`

*¹ A não ser que seu elemento pai seja uma `ul` com `display: inline-block` e cada `li` seja `display: block`, por exemplo. As `li`s serão elementos tipo block, mas não ocuparão todo o espaço de uma linha por conta do elemento pai `ul`.*

#### `inline`
Ocupam apenas espaço equivalente ao tamanho de seu conteúdo. Coexistem com outros elementos em uma mesma linha. Alterações de `heigth` e `width` não fazem efeito. `margin` e `padding` funcionam, mas apenas na horizontal, não na vertical.

Exemplos de elementos tipo `inline`:
- `a`
- `img`
- `span`

#### `inline-block`
O melhor de dois mundos. Ocupa espaço e coexiste como elementos `inline` mas os atributos `margin`, `padding`, `height` e `width` funcionam como elementos `block`.

Exemplos de elementos `inline-block` no Google Chrome:
- `input`
- `button`
- `textarea`
- `select`

Notas:
- Não é possível utilizar `margin: 0 auto;` em elementos desse tipo.
- Utilizar esse tipo de `display` não é uma boa ideia para a navegação de layout mobile. Para isso, é melhor fazer com que cada `a` seja um elemento com `display: block` para que a área de clique seja maximizada.
- Há um pequeno espaço em branco entre elementos `inline` e/ou `inline-block`. Para remove o espaço, basta utilizar um pequeno valor negativo em `margin-left` ou `margin-right`, como `-4px`.

### Trabalhando com Floats
- [Floats 101](http://alistapart.com/article/css-floats-101)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/float)

O float remove o elemento do fluxo normal da página, fazendo ele se deslocar para a direita ou esquerda de uma forma peculiar. Isso é útil para construir layouts em colunas ou organizar menus de navegação, mas seu comportamento é um tanto complicado.

O ponto mais difícil de se entender no começo é que se um elemento com `float` estiver contido em um elemento pai do tipo `block`, a altura do elemento pai entrará em colapso e passa a ser `0`.

Para resolver esse problema basta adicionar a seguinte classe em seu `styles.css` e adicioná-la ao elemento pai onde se encontra o elemento com float.

``` css
.cf::after {
  content: "";
  display: table;
  clear: both;
}
```

Notas:
- Com floats não é preciso se preocupar com espaços em branco como acontece com elementos `inline` e `inline-block`.
- Elementos com float ficam adjacentes entre si, independente de espaços em branco.

### Float vs inline-block - Qual usar?

Quando usar `inline-block`:
- Organizar um menu de navegação.
- Criar um layout simples de 2 colunas.
- Se você precisar ter controle sobre alinhamento horizontal e vertical.

Quando usar `float`:
- Quando quiser que o elemento saia do fluxo ou tenha conteúdo ao seu redor, como imagens à esquerda ou direita.
- Outras situações.

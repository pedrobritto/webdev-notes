# Sass/SCSS - Introdução

## Partials

- [Sass Partials](http://www.sass-lang.com/guide#topic-4)

São o básico de SCSS e Sass.

Pequenos pedaços de código CSS que podem ser colocados em arquivos e pastas diferentes, deixando o processo de criação de código mais modular e fácil de manter.

Partials devem começar com `_`, o que indica ao preprocessador que o arquivo não será compilado na pasta de destino.

## Exemplo de estrutura

```
▾ scss
  main.scss
  ▾ components
      _buttons.scss
      _icons.scss
      _typography.scss
      _index.scss
  ▾ layout
      _header.scss
      _footer.scss
      _containers.scss
      _columns.scss
      _index.scss
  ▾ base
      _base.scss
      _index.scss
```

Arquivos do tipo `<folder>/_index.scss` dentro de cada pasta possuem uma série de `@import` quem devem importar para si todos os arquivos dentro de cada uma de suas pastas.

O `@import` de partials, porém, não deve ter `_` no começo do nome dos arquivos, nem a extensão `.scss` como no exemplo:

``` scss
<!-- layout/_index.scss -->
@import 'header';
@import 'container';
```

O arquivo final `main.scss`, por sua vez, deve possuir declarações `@import` que importa o conteúdo de todos os `<folder>/_index.scss`.

``` scss
<!-- main.scss -->
@import 'layout/index';
@import 'components/index';
@import 'base/index';
```

Sendo o único arquivo sem `_`, será o único arquivo compilado pelo comando `sass --watch scss:css`.


## Extends (placeholders)

- [Sass Extend Reference](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#extend)
- [Placeholder Selectors](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_)
- [Extend/Inheritance](http://www.sass-lang.com/guide#topic-7)

Extends permitem a reutilização de regras e propriedades. Dentro de um arquivo chamado `_extends.scss` pode-se escrever:
```scss
%placeholder {
  color: #222;
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 3px;
}
```

E então utilizá-lo onde for necessário.
```scss
.primary-content {
  @extend %placeholder
  <!-- outras regras -->
}
```

Assim todas as declarações (par propriedade-valor) da regra `%placeholder` serão aplicadas em `.primary-content`.

Pode-se copiar uma regra inteira e utiliza-la da seguinte forma:

``` scss
%clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}
```

O `&::after` significa que a regra `%clearfix` será aplicada no pseudo-elemento `::after` do elemento que conter o `@extend %clearfix`, sendo assim um tipo de placeholder.

**Importante:** Para os Extends funcionarem é preciso defini-los dentro do arquivo `_index.scss` da pasta onde eles se encontram através de um `@import ''`.

## Nesting

- [Nesting](http://www.sass-lang.com/guide#topic-3)

Se usado de forma correta, é uma maravilha. Permite uma melhor organização e leve modularização do código. Também permite o uso de `&` como um placeholder de um seletor pai.

Use com cuidado e apenas quando necessário.

``` scss
.main {
  &-heading { ... }
  &-title { ... }
}
```

Saída:
```css
.main-heading { ... }
.main-title { ... }
```

Ou ainda:
``` scss
.main-nav {
  ...
  li { ... }
  a { ... }
}
```

Saída:
```css
.main-nav { ... }
.main-nav li { ... + ... }
.main-nav a { ... + ... }
```

## Variáveis

- [Sass Guide](http://www.sass-lang.com/guide#topic-2)
- [Sass Docs](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_)

Variáveis podem armazenar o valor de qualquer propriedade.

De preferência devem ser estruturados como `base/_variables.scss` e ser o primeiro item a ser importado de todo o arquivo SCSS, antes de mixins e estilos base.

### Cores

- [Name that color](http://chir.ag/projects/name-that-color)

``` scss
// Descriptive color variables

$white          : #fff;
$black          : #000;
$grey           : #878787;
$regent-st-blue : #add8e6;
$river-bed      : #48525c;
$yellow-orange  : #ffa949;

// Functional color variables

$color-border-light : lighten($grey, 35%);
$color-border-dark  : $yellow-orange;

$color-link-default : $yellow-orange;
$color-link-visited : $regent-st-blue;

$color-shadow       : rgba($black,.8);
$color-body         : $white;
```

### Font Stack

- [Sass Font Stack Variables](https://gist.github.com/jacrook/9009655)

``` scss
$stack-sans-serif   : Helvetica, Arial, sans-serif;
$stack-helvetica    : 'Helvetica Neue', $stack-sans-serif;
$stack-abolition    : 'Abolition Regular', $stack-sans-serif;
```

### Interpolação

- [Sass Interpolação](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_)

É possível utilizar variáveis em seletores e strings utilizando interpolação:

``` scss
$path-img: '../img';

img {
  background: url('#{$path-img}/name.jpg');
}
```

Ou

``` scss
$name: foo;
$attr: border;

p.#{$name} {
  $attr-color: #abc;
}
```

É compilado em:

``` css
p.foo {
  border-color: #abc;
}
```

## Mixins

- [Sass Guide](http://www.sass-lang.com/guide#topic-6)
- [Sass Docs](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins)
- [When to use @extend; when to use a mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
- [Smarter Sass Mixins with Null](http://blog.teamtreehouse.com/smarter-sass-mixins-null)

Adicionam um nível de abstração bem similar ao de uma função em linguagens de programação.

De preferência devem ser estruturados como `base/_mixins.scss` e invocados através de `@include <mixin>()`.

Vamos usar o exemplo da regra `@font-face`
``` scss
// base/_mixins.scss
@mixin font-face($family, $file) {
  @font-face {
    font-family: $family;
    src: url('#{$path-font}/#{$file}-webfont.eot');
    src: url('#{$path-font}/#{$file}-webfont.eot?#iefix') format('embedded-opentype'),
         url('#{$path-font}/#{$file}-webfont.woff') format('woff'),
         url('#{$path-font}/#{$file}-webfont.ttf') format('truetype');
  }
}

// components/_typography.scss
@include font-face('Abolition Regular', abolition-regular);
```

Isso será compilado como:
``` css
@font-face {
  font-family: 'Abolition Regular';
  src: url('../fonts/abolition-regular-webfont.eot');
  src: url('../fonts/abolition-regular-webfont.eot?#iefix') format('embedded-opentype'),
       url('../fonts/abolition-regular-webfont.woff') format('woff'),
       url('../fonts/abolition-regular-webfont.ttf') format('truetype');
}
```

## Sass e Media Queries

- [Sass e Media Queries](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#media)

A dica é utilizar os atributos das Media Queries como variáveis:

``` scss
$break-small: '(min-width: 769px)';

@media #{$break-small} {
  // ...
}
```

Pode-se colocar as media queries dentro dos respectivos partials a que pertecem em vez de se criar um partial exclusivo para eles.

## Dicas Gerais

Ao escrever uma regra SCSS a ordem das declarações deve ser:
1. `@extend`
2. `@include`
3. Declarações restantes

Pode-se usar `sass --watch scss:css --style compressed` para gerar CSS minificado, o método ideal de exportação para produção.

Não é possível utilizar `@extend` dentro de uma media query.

Não é preciso fazer o upload da pasta `scss` para o servidor, já que ele não pode ser lido pelo browser. Para debugging é melhor utilizar o mapa CSS de extensão `.css.map` para fazer debugging via ferramenta de desenvolvedor de um browser.

### Ferramentas

- [Sass Meister](http://www.sassmeister.com/)
- [Codepen](http://codepen.io/)

### Ferramentas de layout

- [Susy](http://susy.oddbird.net/)
- [Breakpoint](https://github.com/at-import/breakpoint)
- [Bourbon Neat](http://neat.bourbon.io/)

### Bibliotecas de Mixins

- [Bourbon](http://bourbon.io/)
- [Compass](http://compass-style.org/)

### Material de referência

- [Sass-lang](http://sass-lang.com/)
- [The Sass Way](http://thesassway.com/)
- [Sass Break](http://sassbreak.com/)

# Seletores CSS

### Seletores de atributo
``` css
input[type="text"] { } /* seleciona todas as inputs com type="text" */
input[placeholder] { } /* seleciona todas as inputs com um placeholder */
input[class] { } /* seleciona qualquer input com uma classe */
```
https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors

### DRY CSS
DRY = Don't Repeat Yourself. A ideia aqui é criar classes reutilizáveis e
aplica-las em elementos quando necessário.

``` css
/* DRY classes ------------- */
.br { border-radius: .5em; }
.rounded { border-radius: 50%; }
.btn { /* button rules */ }
```

Aqui vale de tudo. De classes padrão para botões, imagens e listas até classes criadas apenas para adicionar cores em elementos.

É quase como criar um micro framework CSS, como o bootstrap e semantic-ui, que possuem classes reutilizaveis.

### Combinadores

``` css
/* Combinadores -------- */
form > a { } /* direct children */
button + button { } /* immediate sibling */
h1 ~ p { } /*  general siblings */
```
##### Exemplo `>` : `form > a`
Seleciona todos os elementos `a` que são filhos diretos do elemento `form`.
```html
<form>
  <div>
    <a href="quit.html">I want out!</a> <!-- não é selecionado -->
  </div>
  <a href="buy.html">Buy now!</a> <!-- selecionado -->
</form>
```

##### Exemplo `+` : `button + button`
Seleciona todo o elemento `button` que é irmão e diretamente adjacente a outro
elemento `button`.
```html
<button>Ok</button>     <!-- não é selecionado -->
<button>Cancel</button> <!-- selecionado -->
<button>Help</button>   <!-- selecionado -->
(...)
```

##### Exemplo `~` : `h1 ~ p` <br>
Seleciona apenas elementos `p` que são irmão e que vem após -- e estão no mesmo
nível -- que um `h1`. Eles não precisam estar sempre diretamente adjacentes um ao
outro, como é o caso do seletor `+`.
```html
<div>
  <h1>Hi there!</h1>
  <p>This is it</p>            <!-- selecionado -->        
  <a href="go.htm">Yeah</a>
  <p>Do you know it?</p>      <!-- selecionado -->
</div>
<div>
  <p>But before that...</p>   <!-- não selecionado -->
  <h2>Do you?</h2>
  <p>Well, maybe...</p>       <!-- não selecionado -->
</div>
```

### Substring Matching Attribute Selectors
Seletores de atributo por combinação de substring.
`element[attribute(^/$/*)="string"]`
```css
a[href^="http://"]    { /* rule */ }  /* começa com */
a[href$=".jpeg"]      { /* rule */ }  /* termina com */
a[href*="/download/"] { /* rule */ }  /* contém */
```

### Pseudo Classes

Podem ser utilizadas sozinhas (o que seleciona todos os elementos correspondentes)
ou com um prefixo especificando o tipo de elemento que se quer selecionar.

As principais são:
``` css
:first-child /* seleciona o primeiro filho de um elemento */
:last-child /* seleciona o último filho de um elemento */
:only-child /* seleciona elementos que não possuem irmãos */
:empty /* seleciona elementos vazios */
:checked /* seleciona checkboxes ou radios marcados */
:disabled /* seleciona elementos com atributo 'disabled' */
:target
:root /* é como o seletor html, mas mais específico */
```

Sobre `:nth-child(an+b)`
```css
:nth-child(even) /* seleciona apenas os filhos pares */
:nth-child(odd) /* seleciona apenas os filhos impares */
:nth-child(2) /* seleciona apenas o segundo filho */
:nth-child(2n) /* seleciona de 2 em 2 elementos */
:nth-child(2n+3) /* seleciona o elemento 3 e depois a cada 2 */
```

Experimente com uma lista com vários itens.

`:nth-of-type(an+b)` é similar a `:nth-child`, mas mais poderoso por igngorar e
selecionar apenas o tipo de elemento especificado, ao contrário de `:nth-child`.

`:nth-last-of-type(an+b)` é similar a `:nth-of-type()`, mas funciona de forma
invertida, começando a partir do último elemento de dado tipo.

A pseudo classe `:not()` seleciona tudo menos o especificado. Exemplos
```css
div:not(.classe) /* seleciona todos os divs que NÃO possuem a classe ".classe" */
input:not(:first-child) /* seleciona todos os inputs MENOS o primeiro */
```

### Pseudo Elementos
Não aparecem no código fonte, mas podem ser vistos com uma ferramenta de desenvolvedor.

```css
::first-line /* seleciona a primeira linha renderizada */
::first-letter /* seleciona a primeira letra */
::before /* adiciona conteúdo antes do elemento selecionado */
::after /* adiciona conteúdo após o elemento selecionado */
```

A propriedade `content: attr(atributo)` retorna o valor de `atributo` e pode ser utilizado com
os pseudo elementos `::before` e `::after` para criar um elemento adjacente com
o conteúdo do atributo HTML desejado, seja `title`, `href`, etc.

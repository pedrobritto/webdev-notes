# Event Listeners

Funcionam como sensores passivos que detectam alguma ação específica.

Eles não bloqueiam a execução do programa, mas funcionam em paralelo. Quando a ação é detectada, um `callback` executa a ação desejada.

Eles são escritos da seguinte forma:

```js
// callback de função anonima
el.addEventListener('type', function() {
  // function code
}, bool);

// callback de função nomeada
el.addEventListener('type', functionName, bool);
```

O `event listener` irá executar o `callback` quando a ação (primeiro argumento) for detectada no elemento `el`.

Por exemplo:

```js
document.body.addEventListener('click', function() {
  console.log('Você clicou na página');
});
```

O `event listener` irá imprimir a mensagem no console quando um clique for detectado no `body`, que é o elemento onde o `event listener` foi colocado.

O `evente listener` também pode ser chamado sem um elemento. Assim ele é aplicado globalmente, em toda a pagina do browser.


### Objeto `event`

Sempre que um evento é acontece, uma callback é executada. Essa callback sempre passa um objeto evento como parâmetro que contém informações sobre o evento. Exemplo:

```js
function doSomething(event) {
  console.log(event.type);
}
```

#### Algumas propriedades

- `target`: Faz referência ao elemento que disparou o evento.

Lista de tipos de eventos: https://developer.mozilla.org/en-US/docs/Web/Events


### Eventos de teclado

Verificar que tecla foi pressionada através de um código único de cada tecla:

```js
addEventListener('keydown', function(e) {
  console.log(e.keyCode);
});
```

Verificar se a tecla C foi pressionada enquanto a tecla Ctrl está sendo pressionada:

```js
addEventListener('keydown', function(e) {
  if( e.keyCode == 32 && e.ctrlKey == true) {
    console.log('ctrl + c');
  }
})
```
### Remover Event Listener

Não entendi bem. Precisa utilizar `el.removeEventListener('type', function)`, e aparentemente o Event Listener existente não pode conter uma função anonima.

### Bloqueando comportamento padrão

Se quiser impedir o funcionamento padrão de um elemento html, é possível usar o método `preventDefault()` no objeto de evento dentro do callback;

```js
el.addEventListener('click', function(e) {
  e.preventDefault();
})
```

No caso de um hyperlink, por exemplo, nada acontecerá quando ele for clicado. Porém nem todo elemento pode ter seu comportamento padrão bloquado. Isso varia com o navegador.

A propriedade `defaultPrevented` verifica se o comportamento padrão pode ser bloqueado ou não. Retorna `true` se é possível, `false` caso contrário.

```js
el.addEventListener('click', function(e) {
  console.log(e.defaultPrevented);
})
```

### Propagação de eventos

Quando se clica em um elemento, está também se clicando em todos os elementos internos a ele.

Existem dois tipos de propagação de eventos:

#### Bubbling

É o comportamento padrão. O evento é ativado no elemento clicado, e então se propaga para elementos pai (ou seja, que contem o elemento clicado) até chegar no na raíz do documento HTML, ativando todos os eventos que existam no caminho até lá.

Por exemplo:
```html
<ul class="list">
  <li>Item</li>
</ul>
```

Se tivermos eventos que executam no clique, um no `<ul>` e outro no `<li>`, o evento da `<li>` será executado primeiro.

```js
// Bubbling
var $ul = document.querySelector('.list');
var $li = document.querySelector('.list li');

$ul.addEventListener('click', function(e) {
  console.log('clicked ul');
});

$li.addEventListener('click', function(e) {
  console.log('clicked li');
});
```

A mensagem do `li` será exibida primeiro, e então a mensagem do `ul`. Note que o `li` está dentro do `ul`, então a propagação começa do `li` e depois passa para o `ul`, de quem `li` é child.

#### Capturing

É o oposto de Bubbling. O evento é disparado no elemento que envolve o elemento que foi clicado, sendo o evento dele o ultimo a ser disparado.

Para usar capturing é preciso utilizar o terceiro argumento do `addEventListener`, que por padrão é `false`. Utilizando `true`, será utilizado o método `capturing` em vez de `bubbling`.

Executando o mesmo código acima, mas com `capturing` ativado, é a mensagem do `ul` será executada primeiro.

Fica assim:

```js
// Capturing
var $ul = document.querySelector('.list');
var $li = document.querySelector('.list li');

$ul.addEventListener('click', function(e) {
  console.log('clicked ul');
}, true);

$li.addEventListener('click', function(e) {
  console.log('clicked li');
}, true);
```

### Impedindo a propagação

É possível utilizar o método `stopPropagation()` no objeto evento dentro do callback. Assim o evento não ativará eventos em elementos pai.

```js
el.addEventListener('click', function(e) {
  console.log('Evento ativado');
  e.stopPropagation();
}, false);
```

Se utilizado no exemplo acima com o comportamento padrão (bubbling), a mensagem do `ul` não será exibida.

### Delegação de eventos

Para evitar adicionar uma série de event listeners em uma série de elementos, é possível utilizar um listener no elemento pai que podem afetar os elementos filho. Isso é feito utilizando a propriedade `target` do objeto evento.

```js
$ul.addEventListener('click', function(e) {
  e.target.classList.add('class');
})
```

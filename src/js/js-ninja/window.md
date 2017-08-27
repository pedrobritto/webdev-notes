# Objeto Window

## Informações do browser

Não é necessário utilizar `window.obj` para acessar um método ou propriedade global.

```js
window.navigator;
window.location;
window.location.href;
window.location.protocol;
window.location.host;
window.location.pathname;
window.location.search;
window.location.hash;
window.location.port;
window.location.reload();
window.location.assign();
window.location.replace();
```

## Histórico do browser

`window.history` pode ser utilizado para acessar informaçõe sobre o histórico de navegação da seção atual.

`window.history.length` mostra a quantidade de páginas visitadas antes de chegar até a página atual.

`window.history.go(n)` pode ser utilizado para avançar ou voltar páginas, sendo `0` a página atual.

`window.history.back` e `window.history.forward` funcionam de forma similar aos botões de retroceder a avançar, respectivamente.


## Controlando janelas

O método `window.open()` pode ser utilizado para abrir novas janelas. Os parametros são, em ordem: url, nome da janela e configuração da janela.

Nas configurações estão informações como tamanho da janela.

Exemplo: `window.open('https://pedrobritto.com', 'PedroBritto', 'width=400,height=400,resizable=yes')`.

Para fechar a janela, existe o método `window.close()`.

Outros métodos (autoexplicativos) são:

```js
window.moveTo(x,y);
window.resizeTo(w,h);
```

## Informação sobre a tela

O objeto `window.screen` contém informações sobre a tela do usuário.

```js
window.screen.height;
window.screen.width;

window.screen.availHeight;
window.screen.availWidth;

window.screen.colorDepth;
```

## Cookies

### Criando cookies:

```js
document.cookie = 'name=value';
```

### Modificando Valores

```js
document.cookie = 'name=newValue';
```

### Lendo Cookies

É um pouco mais trabalhoso. Primeiro é preciso transformar a string num array (o método `split()` pode ser útil) e então separar o nome e conteúdo de cada item do array.

```js
var cookies = document.cookie.split('; ');

for (var i = 0; i < cookies.length; i++) {
  var crumbs = cookies[i].split('=');
  console.log('O valor de ' + crumbs[0] + ' é ' + crumbs[1]);
}
```

O seguinte cookie:
```js
"name=pedro; surname=britto; city=fortaleza"
```

Seria exibido assim:
```js
"O valor de name é pedro"
"O valor de surname é britto"
"O valor de city é fortaleza"
```

### Validade do Cookie

Cookies normalmente são excluído ao fim de uma sessão, mas isso pode ser contornado caso `expires=date` (`date` é um valor no formato UTC String `Day, DD-Mon-YYYY HH:MM:SS GMT`) ou `max-age=seconds` (`seconds` é um valor em segundos) seja adicionado ao cookie.


Exemplo com `expires=date` para exatamente 24h:

```js
var expiryDate = new Date();
var tomorrow = expiryDate.getTime() + 1000 * 60 * 60 * 24;
expiryDate.setTime(tomorrow);

document.cookie = 'expires=' + expiryDate.toUTCString();
```

Exemplo com `max-age` para o mesmo tempo:
```js
document.cookie = 'max-age=86400';
```

### Caminho e domínio

`path=/`. `domain=domainName` permite acesso do cookie por sudominios de `domainName`.

### Segurança

`secure` não permitirá o cookie ser transmitido em redes que não sejam HTTPS.

### Deletando cookies

Basta por sua data de expiração em uma data no passado, como o Epoch.
```js
'expires=Thu, 01 Jan 1970 00:00:01 GMT'
```

## Funções de temporização

O método `setTimeout()` serve para temporizar a execução de uma função. Recebe como argumentos um callback e o tempo de espera em milisegundos.

Quando executado, retorna a `id` do temporizador. Para cancelar o temporizador, basta utilizar o método `window.clearTimeout(id)` com a mesma `id` retornada no momento da criação do temporizador.

```js
setTimeout();
clearTimeout(id);

// Exemplo
setTimeout(function() { alert('Hello'); }, 1000);
// <- 1
clearTimeout(1);
```

O método `setInterval()` funciona de forma similar ao `setTimeout`, porém funciona de forma cíclia, repetindo a execução no tempo determinado.
```js
setInterval();
clearInterval(id);

// Exemplo
// Exemplo
setInterval(function() { alert('Hello'); }, 1000);
// <- 1
clearInterval(1);

```

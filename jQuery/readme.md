# **jQuery - o básico**

### Selecionando com jQuery
Para selecionar elementos html com jQuery, utiliza-se ```$```, que funciona de forma equivalente ao ```document.querySelectorAll("seletor")``` do javaScript vanilla.

Exemplo:
```
$("p")           equivale a: document.getElementsByTagName("p")
$("div p")      equivale a: document.querySelectorAll("div p")
$(".classe")    equivale a: document.getElementsByClassName("classe")
$("#id")        equivale a: document.getElementById("id")
```
### Manipulando DOM com jQuery

Para adicionar propriedades CSS a um elemento, utiliza-se o método `.css("propriedade","valor")` em vez de `.style.propriedade = "valor"`.

Note que `"propiedade"` em jQuery segue a o estilo kebab case, ao contrário do js, onde se usa camel case. Para manipular a propriedade `font-size: `, por exemplo, utiliza-se `.css("font-size","10px")` em jQuery, mas precisa ser escrita como `.style.fontSize = "10px"` quando se utiliza js.

Uma das vantagens de se utilizar o jQuery é que não é preciso criar uma variável e um loop para armazenar e manipular um conjunto de elementos.

#### Exemplo: Alterar a cor de todos os elementos `p`

javaScript:
```
var p = document.querySelectorAll("p");
for (var i = 0; i < p.length; i++) {
  p[i].style.color = "red";
}
```
jQuery:
```
$("p").css("color","red");
```

Também é possível utilizar um objeto contendo várias propriedades com jQuery
```
var styles = {
	color: "red",
	background: "blue",
	border: "2px solid green",
};
```
E então utiliza-lo como argumento:
```
$("p").css(styles);
```
Para fazer o mesmo com js:
```
var p = document.querySelector("p");
p.style.color = "red";
p.style.background = "blue";
p.style.border = "2px solid green";
```
Caso fosse utilizado `document.querySelectorAll("")` ou outros métodos que retornassem um conjunto de elementos, seria preciso utilizar um loop.
```
var p = document.querySelectorAll("p");
for (var i = 0; i < p.lenght; i++) {
	p[i].style.color = "red";
	p[i].style.background = "blue";
	p[i].style.border = "2px solid green";
}
```

# Métodos jQuery

### `.text()`
O método `.text()` é análogo ao método `.textContent = ""` do js. Utilizar `$("p").text();` retornará uma string com o texto contido em `p`.

Também pode-se utilizar esse mesmo método para substtituir o texto em `$("p")`, bastanto por o novo texto como argumento do método: `$("p").text("O novo texto vem aqui e substitui todo o texto antigo");`

Não processa tags HTML como tais, e sim como strings.

### `.html()`
O método `.html()` é análogo ao método `.innerHTML = ""` do js. Utilizar `$("p").html();` retornará uma string com o código HTML contido em `p`.

Também pode-se utilizar esse mesmo método para substtituir o HTML em `$("p")`, bastanto por o novo código HTML como argumento do método:
```
$("p").text("Vou trocar o texto por uma lista contendo 2 elementos:
  <ul>
    <li>Zero</li>
    <li>Um</li>
  </ul>");
```
Processa tags HTML.

### `.attr()`
Lê ou escreve um atributo de um elemento HTML. Exemplo:
```
<img id="foto" src="/cachorro.png" title="um cachorrinho bonito">
$("#foto").attr("title"); // retorna "um cachorrinho bonito"
$("#foto").attr("title","um filhote de beagle") // modifica 'title' para "um filhote de beagle"
```
Pode-se alterar vários atributos da seguinte forma:
```
$("#foto").attr({
  title: "um gatinho",
  src: "/gato.png",
});
```

### `.val()`
Lê ou escreve um valor de um elemento HTML. Exemplo:
```
<input type="text" value="Texto que eu escrevi">
$("input").val(""); // retorna "Texto que eu escrevi"
$("input").val("Texto novo"); // modifica "Texto que eu escrevi" para "Texto novo"

```

## Manipulando classes

### `.addClass()`
Adiciona a classe desejada a seleção. Exemplo:
`$("p").addClass("adicionar-essa-classe")`

Análogo ao método js: `.classList.add("classe")`

### `.removeClass()`
Remove a classe desejada da seleção. Exemplo:
`$("p").removeClass("remover-essa-classe e-essa-classe-tambem")`

Análogo ao método js: `.classList.remove("classe")`

### `.toggleClass()`
Adiciona classes caso não existam/Remove classes caso existam nos elementos selecionados. Exemplo:
`$("p").toggleClass("classe")`

Análogo ao método js: `.classList.toggle("classe")`

## Eventos

### `.click()`
### `.keypress()`
### `.on()`

// v1.0

// Todas as tags HTML são convertidas em JS pelo browser,
// que por sua vez, podem ser SELECIONADOS e MANIPULADOS através de métodos .js
// Tudo é armazenado em um objeto chamado document.

/*** Seletores DOM ***/

// Metodos básicos de seleção
document.getElementByID();
document.getElementsByClassName();
document.getElementsByTagName();
document.querySelector();
document.querySelectorAll();

// Os argumentos são strings do que se quer retornar. ex:
document.getElementsByClassName("classe");
document.getElementByID("id");
document.getElementsByTagName("li");
document.querySelector("p");

// no caso de querySelector, é preciso utilizar . e # no início de classes e elementos, respectivamente
document.querySelector("#id");
document.querySelector(".classe");

// pode-se armazenar o valor selecionado em uma variável
var variavel = document.getElementsByTagName("h1"); // armazena todas as tags h1 da página em um "objeto" chamado "variavel"

// Peculiaridades

// Os métodos document.querySelector e document.getElementByID retornam apenas
// o primeiro elemento correspondente
// Os outros métodos retornam todos os elementos como uma lista,
// que podem ser acessados através de um índice. ex:
	document.getElementsbyClassName(".classe-repetida")[1] // exibe o segundo elemento com classe ".classe-repetida"
	variavel[0] // exibe o primeiro h1 armazenado em "variavel", caso a lista tenha sido armazenada em "variavel"


// Exemplo
// Maneiras de selecionar/retornar o primeiro <p>

/*
<body>
  <h1>I am an h1!</h1>
  <p id="first" class="special">Hello</p>
  <p class="special">Goodbye</p>
  <p>Hi Again</p>
  <p id="last">Goodbye Again</p>
</body>
*/

// Pode-se utilizar os métodos:
document.getElementByID("first"); // retornar o id #first
document.getElementbyClassName("special")[0]; // retorna o primeiro elemento da classe .special
document.getElementsByTagName("p")[0]; // retorna o elemento 0 da lista <p>
document.querySelector("p"); // retorna o primeiro <p> do documento
document.querySelectorAll("p")[0]; // retorna o elemento 0 <p> da lista <p>

/*** Manipuladores DOM ***/

// uma forma de manipular o estilo (css) é utilizando a propriedade style

	// Selecionar
	var tag = document.getElementbyClassName("classe");

	// Manipular
	tag.style.color = "blue";
	tag.style.border = "10px solid red";

// Mas isso não é considerado boa prática.
	// Idealmente se cria uma classe ou id no arquivo .css do documento e
	// então adiciona-se essa classe ao elemento selecionado. ex:

	/* no .css:
	.nome-da-classe {
		color: blue;
		border: 10px solid red;
	} */

	// no .js:
	tag.classList.add("nome-da-classe");

// Métodos da propriedade elemento.classList
element.classList.add("classe"); // adiciona "classe" ao elemento selecionado na variável "element"
element.classList.remove("classe"); // remove "classe" do elemento selecionado na variável "element"
element.classList.toggle("classe");
	// adiciona "classe" ao elemento selecionado na variável "element" caso ele não esteja presente,
	// remove "classe" do elemento selecionado na variável "element" caso ele esteja presente.

// textContent e innerHTML

	// para o seguinte parágrafo:
	// <p> This is an <strong>awesome</strong> paragraph </p>
	var p = document.querySelector("p");
	p.textContent; // retorna: This is an awesome paragraph. Tags não são retornadas, apenas a string.
	p.textContent = "Texto novo" // altera o conteúdo para "asdf". Não aceita tags.
	p.textContent = "Eu posso usar <strong>tags</strong>?" // Tag <strong> aparece no texto. 

	// para manter as tags, utiliza-se:
	p.innerHTML; // retorna: This is an <strong>awesome</strong> paragraph. Tag não aparece no texto, e sim formata-o.
	p.innerHTML = "Eu posso usar <strong>tags</strong> aqui!";

// getAttribute e setAttribute
// utilizados para ler e escrever atributos existentes

	/*
	<a href="http://www.google.com">Eu sou um link</a>
	<img src="logo.png">
	*/

	// Para modificar o link
	var link = document.querySelector("a");
	link.getAttribute("href"); // retorna: http://www.google.com
	link.setAttribute("href", "http://www.novoendereco.com");

	// Para modificar a origem da imagem
	var imagem = document.querySelector("a");
	imagem.getAttribute("src"); // retorna: logo.png
	iamgem.setAttribute("src", "www.link.com/da-nova-imagem.jpeg");

# Debugging

## Strict Mode

Evita que o javascript se comporta de forma relaxada durante a captura de erros.

Basta adicionar a seguinte string ao início do código:

```js
"use strict";
```

Também pode ser utilizado dentro de funções específicas:

```js
function strict() {
  "use strict";
  // resto do código
}
```

Idealmente se deve utilizar todo o código dentro de self invoking functions. A sintaxe é simples:

```js
(function() {
  "use strict";
  // resto do código
})();
```

## Linting

Ferramentas que ajudam a encontrar erros ou más praticas nos códigos.

## Detectando recursos

É uma boa prática fazer uma detecção de recursos no código javascript antes da invocação de algum método que pode ou não ser suportado em alguns browsers, principalmente nos mais antigos.

Para isso, basta fazer o uso de um simples `if` com o que se quer verificar.

```js
if (window.someMethod) {
  someMethod();
}
```

É importante não usar parenteses no statement. Caso seja utilizado e o método não existir, acontecerá um erro e a execução do programa será interrompida (ou prosseguirá com possíveis problemas);

## Objetos `Error`

É possível criar suas próprias mensagens de erro.

```js
var error = new Error('Mensagem do erro');
```

Existem outros tipos de objetos `error` que também podem ser utilizados da mesma forma:
```js
EvalError;
RangeError;
ReferenceError;
SyntaxError;
TypeError;
URIError;
```

## Throwing exceptions

Você pode "jogar" exceptions, que irão parar a execução do programa. Tudo pode se tornar uma exception, mas é recomandado utilizar objetos `Error` para isso.

```js
throw 4;
throw 'String';
throw { name: 'ninja' };

// Boa prática
throw new Error('Isso é um erro!');
```

Vamos a um exemplo:

```js
function raizQuadrada(numero) {
  "use strict";
  if (numero <= 0)
    throw new Error('Não é possível tirar raíz quadrada de números negativos.');
  else
    return Math.sqrt(numero);
};

raizQuadrada(2);
// <- 1.4142135623730951

raizQuadrada(-1);
// <- Uncaught Error: Não é possível tirar raíz quadrada de números negativos.
```

## "Pegando" Erros

É possível lidar com erros previsíveis utilizando `try`, `catch` e `finally`.

```js
function raizQuadradaImaginaria(numero) {
  "use strict";
  // Executar código normalmente com 'try'
  try {
    return String(raizQuadrada(numero));
  }
  // Se existir erro, lidar com 'catch'
  catch(error) {
    return raizQuadrada(-numero) + 'i';
  }
}
```

`finally` será executado depois de `try` e `catch`, independente de algum erro acontecer ou não.

```js
function raizQuadradaImaginariaFinally(numero) {
  "use strict";
  try {
    var resposta = String(raizQuadrada(numero));
  }
  catch(error) {
    var resposta = raizQuadrada(-numero) + 'i';
  }
  // Sempre executar
  finally {
    return '+ ou - ' + resposta;
  }
}
```

## Testes

### Test Drive Development

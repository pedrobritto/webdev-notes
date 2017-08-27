# Arrays
É uma lista ordenada de valores.

Criar um array:  `var arr = []`.

Ou definir os valores: `var carros = ['focus', 'nsx', 'model s', 'supra']`

Atribuir valores a um array: `arr[i]`, onde `i >= 0`.

### Remover um item
`delete arr[i]`. Se o valor for removido, será retornado `true` e o valor passará a ser `undefined`.

## Propriedades e métodos
### length
Mostra a quantidade de itens no array.

```
carros.length
<< 4
```

É mutável, então pode ser alterada manualmente.

``` js
carros.length = 6
// criará itens extras, preenchidos com undefined

carros.length = 2
// removerá todos os itens a partir do índice 2
```

### Pop
Remove o último item do array.

```
carros.pop();
<< 'supra' // retorna o valor do item removido
```

### Push
Adiciona um item ao final do array.

```
carros.push('corolla');
<< 4  // retorna o novo tamanho (length) do array
```

### Shift
Similar a `pop()`, mas remove o primeiro item do array.

```
carros.shift();
<< 'focus'  // retorna o valor do item removido
```

### Unshift
Similar a `push()`, mas adiciona um item no início do array.

```
carros.push('golf');
<< 4 // retorna o novo tamanho (length) do array
```

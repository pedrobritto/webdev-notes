# APIs - Introdução

APIs (Application Program Interface) é um meio de possibilitar troca de informações entre programas distintos.

Com APIs é possível, por exemplo, pedir ao twitter todos os tweets que utilizam uma hashtag específica ou pedir ao google maps uma lista com postos de combustíveis próximos a um usuário logado.

### Comunicação via HTTP

Para conseguir dados de uma API, é preciso fazer uma GET request. No caso da API do iTunes, por exemplo, para se conseguir dados referentes a todos os álbums da banda Porcupine Tree, faz-se uma requisição para:

`https://itunes.apple.com/search?term=porcupine+tree&entity=album`. Note que `term=porcupine+tree` e `entity=album`.

Isso retornará uma lista com todos os albums da banda porcupine tree presentes no banco de dados do iTunes.

Se em vez disso você quiser procurar por filmes com nome Harry Potter, basta fazer uma requisição para a URL `https://itunes.apple.com/search?term=harry+potter&entity=movies`

É importante saber que `term` e `entity` são termos utilizados pela API do iTunes e outras APIs provavelmente utilizarão outra estrutura de dados, então é preciso saber como cada API é estruturada para utiliza-la corretamente.

### Formato de dados

APIs não respondem com código HTML, mas sim com dados, que podem estar em formato `XML` ou `JSON`.

O formato mais comum é o `JSON` (JavaScript Object Notation) que de fato se parece muito com um objeto JS, apesar de ser uma `string`. Poder ser facilmente "convertido" para ser utilizável com o método `JSON.parse()`. 

Exemplo de resposta da API Yahoo Weather para hora do por do sol no Havaí:

``` json
{
 "query": {
  "count": 1,
  "created": "2016-10-16T10:50:28Z",
  "lang": "pt-BR",
  "results": {
   "channel": {
    "astronomy": {
     "sunset": "6:12 pm" }}}}
}
```

*URL da API do YW: https://developer.yahoo.com/weather/*

Para acessar o dado contido em `sunset`, poderia-se utilizar: `query.results.channel.astronomy.sunset`, mas como a reposta é uma string é preciso de outra solução.

Utilizando-se os pacotes npm `request` e `express`,  o código seria:

``` js
var request = require('request');

request("http://url.com", function (error, response, body){
  if (!error && response.statusCode == 200) {
    // parses string to json
    var data = JSON.parse(body);
    console.log(data["query"]["results"]["channel"]["astronomy"]["sunset"]);
  }
})
```

O resultado que aparecerá no console será `6:12 pm`.

Dessa forma simples é possível acessar dados de APIs e utilizar dentro do seu próprio programa.

## Sites úteis

http://www.programmableweb.com/ - API Directory


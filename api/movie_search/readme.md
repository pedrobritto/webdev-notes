## Movie Search App

Aplicação simples que utiliza a API da OMDb para exibir até 10 resultados de pesquisa de filmes. Os restulados são apenas os títulos dos filmes.

##### Uso

Executar `index.js` com `node`. Navegar até `localhost:PORT` (precisa ser trocada para funcionar fora do ambiente c9.io) e fazer uma pesquisa. É feita uma GET request para a API utilizando o termo de pesquisa.

O usuário é automaticamente redirecionado para a página de resultados `/results` que deve exibir 10 resultados de pesquisa.

É preciso conexão com a internet.

##### API
http://www.omdbapi.com/

##### Pacotes utilizados
```
node
express
request
ejs
```

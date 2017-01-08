# git Basics

Para obter ajuda sobre um comando:
```
$ git help <comando>
```

### Criando um repositório

Para inicializar um respositório em um diretório basta executar o seguinte comando:
```
$ git init
```

Algumas declarações iniciais úteis:
```
$ git config --global user.name "user name"
$ git config --global user.mail email@host.com
$ git config --global color.ui true
```

Após inicializar o repositório em um diretório, pode-se utilizar o seguinte
comando:
```
$ git status
```

Ele ira retornar quaisquer alterações de arquivos dentro do diretório do repositório, como novos arquivos, arquivos removidos e arquivos modificados.

### Adicionando arquivos

Para rastrear/adicionar/(to stage) um arquivo é possível utilizar:
```
$ git add file.ext
$ git add *.ext
$ git add dir/file.ext
$ git add dir/
$ git add "*.ext"
```
Para fazer um commit:
```
$ git commit -m "Descrição curta do commit"
```

o `-m` é uma flag para adicinar um comentário ao commit.

Para ver o log dos commits já feitos:
```
$ git log
```

Para ver as modificações feitas nos arquivos:
```
$ git diff
$ git diff --stage
```

### Enviando arquivos

Para fazer um push para um repositório remoto pela primeira vez:
```
$ git push -u <name> <branch>

# normalmente é
$ git push -u origin master
```

a flag `-u` serve para guardar os dados, então a partir do segundo push, basta executar:
```
$ git push
```

Caso o repositório não tenha sido clonado e precise ser enviado para um repositório remoto, como o GitHub, é preciso criar uma origin com através do comando:

```
// git remote add <name> <url>
$ git remote add origin https://github.com/user/repository-name.git
```

### Branches

Branches são muito úteis para trabalhar com código sem fazer nenhuma alteração definitiva. Perfeito para fazer testes antes da produção.

#### Criando Branches

```
// git branch <branch>
$ git branch new_branch

```

#### Trocando Branches
Agora que criamos o branch `test`, vamos acessa-lo:
```
// git checkout <branch>
$ git checkout new_branch
```

### Unindo branches ao master

Para fazer isso, é preciso trocar para o `master` e então fazer o `merge`:
```
$ git checkout master
$ git merge new_branch
```

Se depois do `merge` você não precisar mais do branch, é só remove-lo:
```
$ git branch -d new_branch
```

### Outros comandos

Para fazer um Unstage:
```
$ git reset HEAD FILENAME
```

Descartar alterações:
```
$ git checkout -- FILENAME
```

Desfazer um commit:
```
# desfaz commit, alterações vão para staging
$ git reset --soft HEAD^

# desfaz commit e alterações
$ git reset --hard HEAD^
```

Adicionar alterações ao último commit:
```
$ git commit --amend -m "Message"
```

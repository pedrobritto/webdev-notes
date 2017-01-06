# git Basics

Para obter ajuda sobre um comando:
```
git help <comando>
```

## Parte I

Para inicializar um respositório em um diretório basta executar o seguinte comando:
```
git init
```

Algumas declarações iniciais úteis:
```
git config --global user.name "user name"
git config --global user.mail email@host.com
git config --global color.ui true
```

Após inicializar o repositório em um diretório, pode-se utilizar o seguinte
comando:
```
git status
```

Ele ira retornar quaisquer alterações de arquivos dentro do diretório do repositório,
 como novos arquivos, arquivos removidos e arquivos modificados.

Para rastrear/adicionar/(to stage) um arquivo é possível utilizar:
```
git add file.ext
git add *.ext
git add dir/file.ext
git add dir/
git add "*.ext"
```
Para fazer um commit:
```
git commit -m "Descrição curta do commit"
```

o `-m` é uma flag para adicinar um comentário ao commit.

Para ver o log dos commits já feitos:
```
git log
```

## Parte II

Ver as modificações feitas no arquivo:
```
git diff
git diff --staged
```

Para fazer um Unstage:
```
git reset HEAD FILENAME
```

Descartar alterações:
```
git checkout -- FILENAME
```

Desfazer um commit:
```
git reset --soft HEAD^ // desfaz commit, alterações vão para staging
git reset --hard HEAD^ // desfaz commit e alterações
```

Adicionar alterações ao último commit:
```
git commit --amend -m "Message"
```

Adicionar um remote
```
git remote add <name> <url>
```
Fazer um push:
```
git push -u <name> <branch>
```

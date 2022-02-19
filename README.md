# DESAFIO DE PROGRAMAÇÃO - ACADEMIA CAPGEMINI

Repositorio criado com o objetivo de resolver o desafio de programação do processo seletivo da Capgemini.

## Feito com:

<img align="left" alt="JavaScript" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img align="left" alt="Node.Js" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
<img align="left" alt="Jest" width="35px" src="https://camo.githubusercontent.com/f2c80b28082b1568bf6ae3e4b999dcf6916e4f7ef611aa48efed85198ebe53a9/68747470733a2f2f6a6573746a732e696f2f696d672f6a6573742e706e67" />


<br>


# Requerimentos
- Node 16.14.0 LTS
Utilize o [site oficial](https://nodejs.org/en/) para fazer o download do Node.
- IDE de sua preferencia, neste projeto utilizei o [VScode](https://code.visualstudio.com/).


#### Como utilizar

```sh
# Clone este repositório
$ git clone https://github.com/rafaelspereira1/academia-tecnica-capgemini

# Acesse o diretório do projeto
$ cd academia-tecnica-capgemini

# Inicie os scripts usando o Node.js
$ node questao-01.js
$ node questao-02.js
$ node questao-03.js

# Para alterar os dados a serem analisados nos scripts abra utilizando sua IDE ou editor de texto de preferencia e altere nos campos indicados por comentarios.

```

#### Como utilizar os testes

```sh
# Instale as dependências do Node
$ npm install
# Execute os testes com o Jest
$ npm test

```

# Questões solicitadas para solução do projeto

## Questão 01

Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços. A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.

Exemplo:
Entrada:
n = 6

```output
saida:
          *
         **
        ***
       ****
      *****
     ******
```
## Questão 02

Débora se inscreveu em uma rede social para se manter em contato com seus amigos. A página de cadastro exigia o preenchimento dos campos de nome e senha, porém a senha precisa ser forte. O site considera uma senha forte quando ela satisfaz os seguintes critérios:

- Possui no mínimo 6 caracteres.
- Contém no mínimo 1 digito.
- Contém no mínimo 1 letra em minúsculo.
- Contém no mínimo 1 letra em maiúsculo.
- Contém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+

Débora digitou uma string aleatória no campo de senha, porém ela não tem certeza se é uma senha forte. Para ajudar Débora, construa um algoritmo que informe qual é o número mínimo de caracteres que devem ser adicionados para uma string qualquer ser considerada segura.

Exemplo:
Entrada:
Ya3

Saída:
3

## Questão 03
Duas palavras podem ser consideradas anagramas de si mesmas se as letras de uma palavra podem ser realocadas para formar a outra palavra. Dada uma string qualquer, desenvolva um algoritmo que encontre o número de pares de substrings que são anagramas.

Exemplo:

Exemplo 1)
Entrada:
ovo

Saída:
2

Explicação:
A lista de todos os anagramas pares são: [o, o], [ov, vo] que estão nas posições [[0], [2]], [[0, 1], [1, 2]] respectivamente. 

Exemplo 2)
Entrada:
ifailuhkqq

Saída:
3






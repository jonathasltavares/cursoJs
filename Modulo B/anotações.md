# Aula 05 - "Variáveis e tipos Primitivos"  

### Comentários com js
> // ou /* */  
### O que são variáveis  
>São espaços delimitados para receber valores. São declaradas no js com var(ou let)  
### Identificadores de variávies  
> * Podem começar com letras, $ ou _  
>* Não podem começar com números  
>* É possivel usar letras ou números  
>* É possivel usar acentos e simbolos  
>* Não podem conter espaços  
>* Não podem ser palavras reservadas  

### Tipos primitivos primordias  
> * Number
> * String
> * Bool  

### typeof
```js
typeof n1 //retorna o tipo da variável  
```
# Aula 06 - "Tratamento de dados"  
### Guardar um valor do prompt  
```js
var nome = window.prompt("Qual é o seu nome?") 
```  
### Concatenação
```js
window.alert("Prazer te conhecer "+nome)
```  
### Conversoes String>Numero  
>Number.parseInt(n)  
Number.parteFloat(n)
Number(n)  

### Conversoes Numero>String  
>String(n)  
n.toString()  

### Template String  
> `Meu nome é ${nome}`  

### Formatando strings  
> * s.length mostra quantid. caracter  
> * s.toUpperCasa() deixa tudo maiusculo 
> * s.toLowerCasa() tudo minusculo  

### Escrevendo na tela  
```js
document.write("Escreva...")
```  
### Formatando numeros  
> * n1.toFixed() quantidade de casa decimais  
> * n1.toFixed.replace('.',',') trocar o ponto por virgula  
> * n1.toLocaleString('pt-BR, {style: 'currency', currency: 'BRL'})  

# Aula 07 - "Operadores (parte 1)"  

### Aritméticos 
> * '+ soma
> * '- subtração
> * '* multiplicação
> * /  divisão
> * % resto da divisão
> * '** potencia  

### Ordem de precedencia  
> 1. parenteses  
> 2. potencia  
> 3. mult, divisa, resto  
> 4. soma e subtração  

### Atribuição  
> * = atribuição simples
> * n+= 3 n mais 3
> * n-= 3 n menos 3
> * n*=3 n multiplicado por 3
> * n/= 3 n dividido por 3
> *  n**= 3 n elevado a 3
> * n%=3 resto da divisao de n por 3  

### Incremento  
> * n++ n mais 1
> * n-- n menos 1  

# Aula 08 - "Operadores (parte 2)"
### Relacionais  
> *  '> maior 
> * '< menor 
> *  '>= maior igual
> * '<= menor igual
> * == igualdade
> * != diferença 
> * === igualdade restrita(identico)  

### Logicos  
> * ! negação
> * && conjução (and)
> * || disjunção (or)  

### Precedencia dos operadores  
> 1. aritmeticos
> 2. relacionais
> 3. logicos(1 not, 2 and, 3 or)
### Ternário
> teste ? true : false  
exemplo: media>=7?"aprovado":"reprovado"  












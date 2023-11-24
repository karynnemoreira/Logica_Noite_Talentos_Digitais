// //Variável: é uma caixinha/gaveta para guardar informações.

// //var, é uma variável declarada FORA DE UMA FUNÇÃO. ELA NÃO É MAIS UTILIZADA, por trazer vários problemas com o uso. 

// // = quer dizer receber
// // "" quer dizer que é um string (textos, letras..) tudo que tiver dentro de " " vai ser entendido como texto.

// var cor = "azul";
// console.log(cor)

// cor = "vermelho";
// console.log(cor)


// //let é uma variável que é A MAIS UTILIZADA E PREFERIDA DOS PROGRAMADOS.

// //let é o tipo da variável
// //vnwnoite é o nome da variável
// //melhor turma é o valor que está sendo guardado nessa variável.

// let vnwnoite = "melhor turma";
// console.log(vnwnoite)

// //Não posso utilizar duas variáveis com o mesmo nome
// //let vnwnoite = "Boa noite!"

// let bia = 17
// let elaine = 19
// let evelyn = 44

// console.log(bia - elaine)
// console.log(evelyn - elaine)

// //const é uma variável constante, ELA NÃO MUDA. 

// const cpf = 123456700;

// console.log(cpf)

// //cpf = 765432100;
// //console.log(cpf)
// //não posso reutilizar uma variável que é constante

// const nascimento = 2001
// console.log(nascimento)
// // nascimento = 2002
// // console.log(nascimento)


// let dia = true


// console.log(typeof nascimento)
// console.log(typeof vnwnoite)
// console.log (typeof dia)

//aula dia 24.11

//Variável é uma caixinha que guardo alguma informação, pode ser textual (string), number (número), boolean (verdade(true) e falso (false))

//const é uma variável constante, ELA NÃO MUDA. Não consigo reutilizar essa variável.

const dispositivo = "celular"; 
console.log(dispositivo)

// dispositivo = "tablet"
// console.log(dispositivo)

const dataNasc = 2005;
console.log(dataNasc)


//CONSOLE.LOG NÃO TEM O PODER DE SALVAR/GRAVAR/ARMAZENAR NADA.


// //let é o tipo de variável que é MAIS UTILIZADA, consigo reutilizar. 

// let cor = "verde"
// console.log(cor)

// cor = "amarelo"
// console.log(cor)

// //Nomes de variáveis NÃO PODEM começar com números e símbolos, exceto: $ e _
// let $cor = "vermelho"
// let _cor = "rosa"
// let corNova = "roxo"

// console.log($cor)
// console.log(_cor)
// console.log(corNova)


// //Saber o tipo da variável 
// let legumes = "cenoura"; //guardando string (texto) com aspas duplas ""
// let _legumes = 'batata'; //guardando string (texto) com aspas simples ''
// let $legumes = `abóbora`; //guardando string (texto) com aspas crase ``  
// let preco = 20; //número, não preciso dew "" ' ' ou ``, ele vai sem nada.
// let sexta = true


// console.log(typeof legumes)
// console.log(typeof preco)
// console.log(typeof sexta)


//TemplateString - Forma mais "elegante" de escrever string. 

// `${}` o templateString SEMPRE vai ser usado com crase ``SEMPRE!! 


let aluna1 = "Evelyn"; //guardando uma string/texto utilizando "" aspas duplas

let aluna2 = 'Joy'; //guardando uma string/texto utilizando  '' aspas simples

let aluna3 = `Cris`; //guardando uma string/texto utilizando ``crase

let alunas = `${aluna1 } ${aluna2} ${aluna3}`;


console.log(aluna1)
console.log(aluna2)
console.log(aluna3)
console.log(alunas)

console.log(`Essas são alunas do vnw: ${aluna1} , ${aluna2} e ${aluna3} `)
 

//Operadores de comparação 

let numero = 2 //tipo number

// = atribuição de tipo/recebe
// == verificação de valor (Verifica se o 2 é o mesmo)
//  === verificação de tipo e valor (verifica se é 2 e se o tipo é number)

// != verifica se o valor comparado é diferente (verifica se o 2 é diferente de um outro valor)

// !== verifica se o valor e o tipo comparado é diferente (verifica se o 2 é diferente de um outro valor, e se ele também é diferente de um number)









// // Tipos de valores

// //null é o tipo de valor nulo, inexistente. 
// let x = null;
// console.log(x)

// //undefined é o tipo de valor que ainda não foi definido 
// let y; 
// console.log(y)

// // NaN = Não é um valor numérico 
// let numero = 5; //number
// let msg = "Hello Word"; //string
// let resp = numero/msg
// console.log(resp)


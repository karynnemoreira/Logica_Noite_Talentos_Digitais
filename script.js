// // //Variável: é uma caixinha/gaveta para guardar informações.

// // //var, é uma variável declarada FORA DE UMA FUNÇÃO. ELA NÃO É MAIS UTILIZADA, por trazer vários problemas com o uso. 

// // // = quer dizer receber
// // // "" quer dizer que é um string (textos, letras..) tudo que tiver dentro de " " vai ser entendido como texto.

// // var cor = "azul";
// // console.log(cor)

// // cor = "vermelho";
// // console.log(cor)


// // //let é uma variável que é A MAIS UTILIZADA E PREFERIDA DOS PROGRAMADOS.

// // //let é o tipo da variável
// // //vnwnoite é o nome da variável
// // //melhor turma é o valor que está sendo guardado nessa variável.

// // let vnwnoite = "melhor turma";
// // console.log(vnwnoite)

// // //Não posso utilizar duas variáveis com o mesmo nome
// // //let vnwnoite = "Boa noite!"

// // let bia = 17
// // let elaine = 19
// // let evelyn = 44

// // console.log(bia - elaine)
// // console.log(evelyn - elaine)

// // //const é uma variável constante, ELA NÃO MUDA. 

// // const cpf = 123456700;

// // console.log(cpf)

// // //cpf = 765432100;
// // //console.log(cpf)
// // //não posso reutilizar uma variável que é constante

// // const nascimento = 2001
// // console.log(nascimento)
// // // nascimento = 2002
// // // console.log(nascimento)


// // let dia = true


// // console.log(typeof nascimento)
// // console.log(typeof vnwnoite)
// // console.log (typeof dia)

// //aula dia 24.11

// //Variável é uma caixinha que guardo alguma informação, pode ser textual (string), number (número), boolean (verdade(true) e falso (false))

// //const é uma variável constante, ELA NÃO MUDA. Não consigo reutilizar essa variável.

// const dispositivo = "celular"; 
// console.log(dispositivo)

// // dispositivo = "tablet"
// // console.log(dispositivo)

// const dataNasc = 2005;
// console.log(dataNasc)


// //CONSOLE.LOG NÃO TEM O PODER DE SALVAR/GRAVAR/ARMAZENAR NADA.


// // //let é o tipo de variável que é MAIS UTILIZADA, consigo reutilizar. 

// // let cor = "verde"
// // console.log(cor)

// // cor = "amarelo"
// // console.log(cor)

// // //Nomes de variáveis NÃO PODEM começar com números e símbolos, exceto: $ e _
// // let $cor = "vermelho"
// // let _cor = "rosa"
// // let corNova = "roxo"

// // console.log($cor)
// // console.log(_cor)
// // console.log(corNova)


// // //Saber o tipo da variável 
// // let legumes = "cenoura"; //guardando string (texto) com aspas duplas ""
// // let _legumes = 'batata'; //guardando string (texto) com aspas simples ''
// // let $legumes = `abóbora`; //guardando string (texto) com aspas crase ``  
// // let preco = 20; //número, não preciso dew "" ' ' ou ``, ele vai sem nada.
// // let sexta = true


// // console.log(typeof legumes)
// // console.log(typeof preco)
// // console.log(typeof sexta)


// //TemplateString - Forma mais "elegante" de escrever string. 

// // `${}` o templateString SEMPRE vai ser usado com crase ``SEMPRE!! 


// let aluna1 = "Evelyn"; //guardando uma string/texto utilizando "" aspas duplas

// let aluna2 = 'Joy'; //guardando uma string/texto utilizando  '' aspas simples

// let aluna3 = `Cris`; //guardando uma string/texto utilizando ``crase

// let alunas = `${aluna1 } ${aluna2} ${aluna3}`;


// console.log(aluna1)
// console.log(aluna2)
// console.log(aluna3)
// console.log(alunas)

// console.log(`Essas são alunas do vnw: ${aluna1} , ${aluna2} e ${aluna3} `)



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


//Operadores de comparação 

// let numero = 2 //tipo number
// console.log(typeof numero)

// // = atribuição de tipo/recebe
// console.log(numero)

// // == verificação de valor (Verifica se o 2 é o mesmo)
// console.log(numero == 2)// retournou true pq o valor 2 é 2. 
// console.log(numero == 4) //retornou false pq o valor NÃO é 2. 


// //  === verificação de tipo e valor (verifica se é 2 e se o tipo é number)
// console.log(numero === 2) //retornou true pq o valor e o tipo são iguais
// console.log(numero === "Karynne") //retornou false pq o valor é diferente e o tipo é uma string
// console.log(numero === "2") //retornou false pq o "2" é entendido como uma string por estar dentro de "aspas"

// // != verifica se o valor comparado é diferente (verifica se o 2 é diferente de um outro valor)

// console.log(numero != 5) //true, pq o valor é diferente do valor 2

// console.log(numero != "uva") //true, pq o valor 2 é diferente do valor "uva"


// // !== verifica se o valor e o tipo comparado é diferente (verifica se o 2 é diferente de um outro valor, e se ele também é diferente de um number)

// console.log(numero !== 3) //true, pq o 2 é diferente de 3

// console.log(numero !== 2) //é falsa essa informação. Pq 2 é igual a 2.   


// // 2 é diferente de 2? 

// console.log (numero !== "galinha") //true, o valor e o tipo são diferentes


// // > maior que

// let number = 10 //gavetinha ta guardando o valor 10

// console.log(number > 3) //true pq number (10) é maior que o valor 3

// console.log (number > 10) //false pq o number(10) não é maior que 10. 

// // < menor que

// console.log(number < 7) //false pq 10 não é menor que 7

// // >= Maior ou igual
// console.log (number >= 10) //true pq 10 é igual a 10
// console.log(number >= 5) //true pq 10 é maior que 5


// // <= Menor ou igual 
// console.log(number <= 4) //false pq 10 não é menor nem igual a 4
// console.log(number <= 10)//true pq 10 é igual a 10, ele não é menor que 10.


// //let é o tipo da variável
// //animal é o nome dessa variável
// // "galo" é o valor dessa variável   
// let animal = "galo"
// console.log(animal)

// animal="coala" //redefinindo o valor da variável
// console.log(animal)

// animal="galinha" 
// console.log(animal)


// let _animal = "coelho"  //outra variável
// let $animal = "macaco" //outra variável
// let animalDomestico = "gato" //outra variável

// //IF ( quer dizer = se) Se essa informação for verdadeira, faça isso: 

// // if(condição){
// //     console.log("retorno")
// // }



// let nascimento = 18

// if(nascimento >= 18){
// console.log("Você pode acessar o zé delivery")
// } else { //senão, caso a resposta for negativa, cai aqui. 
//     console.log("Vai tomar toddynho")
// }

// let dia = "calor"

// if (dia === "calor"){
//     console.log("Uhull, vou pra praia!!")
// }

// console.log(typeof nascimento) //quero saber qual o tipo da variável nascimento
// console.log(typeof dia) //quero saber qual o tipo da variável dia

// let segunda = true
// console.log(typeof segunda)


// let comida = "miojo"

// // console.log(comida)

// comida = "arroz com feijão"

// console.log(comida)


// const bebida = "coca-cola" //variável const (constante) ela não pode ser redefinida
// console.log(bebida)

// // bebida = "água"


// //string ela é guardada entre " aspas duplas" , 'aspas simples' e `crase` 

// let fruta = "amora" 
// console.log(typeof fruta) //avisa qual o tipo de valor está sendo guardado

// //Variáveis não podem começar com números e caracteres/símbolos, exceto _ e $

// let _fruta = `morango`
// let $fruta = 'uva' 
// let frutaMadura = "banana"

// //TemplateString  : Uma forma mais 'elegante' de escrever uma string.  `$`

// let batata = `Adoro comer ${_fruta} e ${$fruta}`
// console.log(batata)


// console.log(`a minha fruta preferia é ${_fruta + $fruta}`)

let nome = "Joy"
let sobreNome ="Silva"
// let nomeCompleto = "Meu nome completo é : " + nome + " " + sobreNome
//  console.log(nomeCompleto)

// =  atribuir / recebe

// console.log(nome)

// // == verificação de valor
// console.log (nome == "Joy")

// // === verifcar o valor e o tipo
// //O valor "Joy" é igual ao valor "Evelyn" ?
// console.log(nome === "Evelyn")
// //O valor "Joy" é igual ao valor 10?
// console.log(nome === 10)

// //!= Verifica se o valor é diferente 

// console.log(nome != 5) //true pq são diferentes
// console.log(nome != "Assis") //true pq são diferentes
// console.log(nome != "Joy") //false pq são iguais

// //!== 
// console.log (nome != 40)
// console.log(nome !== "Lima")

// let n1 = 2
// let n2 = 4

// console.log( n1 > n2) //2 é maior que 4? Não, por isso deu false

// console.log( n1 >= 2) // 2 é maior que 2? Não! Mas, 2 é igual a 2. 

// console.log (n2 < 5) //true pq 4 é menor que 5

// console.log (n2 > 5)//false pq 4 não é maior que 5

// let msg1 = true //armazenando um valor boleando 
// let msg2 = false

//Condicionais 
//IF quer dizer, SE. Se a condição for verdadeira, execute isso. Se a condição for falsa, ela não vai executar. 

// if(condição){
//     retorne a ação da condição
// }

//-----------------

let idadeMaiorQueDezeoito = 18

if(idadeMaiorQueDezeoito >= 18){
console.log("Pode comprar o ingresso para Jogos mortais")
} else{
    console.log("O ingresso da barbie está disponível")
}

//-----------------

let jantar = "Feijoada"

if(jantar === "macarronada") {
    console.log("Poxaaa... queria uma macarronada")
} else {
    console.log("Agora você vai comer pão com ovo")
}

//-----------------
let tamanhoRoupa = "gg"

if(tamanhoRoupa == "p"){
console.log("O tamanho escolhido foi é P")
} else if (tamanhoRoupa == "m"){
console.log("O tamanho escolhido foi M")
} else if (tamanhoRoupa == "g"){
console.log("O tamanho escolhido foi G")
} else{
    console.log("Tamanho indisponível")
}
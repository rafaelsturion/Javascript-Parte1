// var nome = prompt("Qual é o seu nome?");
// var sobrenome = prompt("Qual é o seu sobrenome?");

// console.log("Olá " + nome + " " + sobrenome + "!");

// document.write("<h1>Bem vindo " + nome + " </h1>");

// document.write("<img src='https://sujeitoprogramador.com/steve.png' alt='Foto do Steve'/>");




// Funções

// var area = document.getElementById('area');

// function entrar() {
//     var nome = prompt('Digite o seu nome');
//     if(nome === '' || nome=== null){
//         alert("Ops, algo deu errado")
//         area.innerHTML= "Clique no botão para acessar..."
//     } else{
//         area.innerHTML = "Bem vindo " + nome + " ";

//         let botaoSair = document.createElement('button');
//         botaoSair.innerText = "Sair da conta";
//         botaoSair.onclick = sair;
//         area.appendChild(botaoSair);
//     }
// }

// function sair(){
//     alert("Até mais");
//     area.innerHTML = "Você saiu";
// }


// function mediaAluno(nota1, nota2){
//     var media = (nota1 + nota2) / 2;

//     if(media >=7){
//         console.log("Aluno aprovado coma  média: " + media)
//     }else if(media <7){
//         console.log("Aluno reprovado com a média: " + media)
//     }
// }

// function aluno(nome, curso){
//     var mensagem = "Seja bem vindo ao " + nome + "ao curso de " + curso;
//     console.log(mensagem);
// }


// Arrays (listas)

// Loop while: enquanto

// var x = 5
// while(x<100){
//     document.write("<br> O valor do x é :" + x)

//     //Aumentando o valor do x
//     x ++
// }

// Loop for: para

// var valor = 15

// for(a = 0; a<= valor; a++){
//     // o que estiver aqui dentro
//     document.write("<br> O valor de a é: " + a)
//     console.log(a + 10)

// }

// Switch: expressao de casos para chegar a determinada condição

function pedir(){
    var valor = prompt("Digite um valor de 1 a 4")

    switch(Number(valor)){
        case 1:
            alert("Você escolheu 1 = Suco")
            break
        case 2:
            alert("Você escolheu 2 = Água gelada")
            break
        case 3:
            alert("Você escolheu 3 = Sorvete")
            break
        case 4:
            alert("Você você chamou o garçom")
            break
        default:
            alert("Escolha entre 1 a 4")
            break
    }
}

// Condicionais

// var valor = 70

// if(valor <= 30){
//     console.log("O valor é igual a 30")

// }else{
//     console.log("O valor é diferente de 30")
// }

var nome = "Matheus"
var userOnline = false

if(nome==="Matheus"){
    console.log("Bem vindo Matheus")
}

if(userOnline === true){
    console.log("O usuário está online")
}else{
    console.log("O usuário está offline")
}

var numero = 10

numero === 90 ? console.log("O número é igual a 10") : console.log("O número é diferente de 10")

// ? é o if, : é o else


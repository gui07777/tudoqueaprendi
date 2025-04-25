// A passagem de parâmetros em uma função é o processo de enviar valores
//  para que sejam processados pelo código da função.
//  Os parâmetros são as variáveis que recebem os valores,
//  e os argumentos são os valores que são passados para as funções. 

var nome = prompt("Quem é?")
var nomeCliente = "Guilherme"
var nomeEmpresa = "Code"
var nomeDiretor = "Danilo"

// function tem que chamar pro programa saber que é uma função. Depois digita o nome que
// quiser dar à função. Parênteses é a passagem de parâmetros, e dentro das chaves
// fica a lógica.

function validarNome(){
    switch(nome){
    case 'Guilherme':
        alert("é o cliente");
        break
    case 'Code':
        alert("É a empresa");
        break
    case 'Danilo':
        alert("é o diretor")
        break
    }
}

validarNome();
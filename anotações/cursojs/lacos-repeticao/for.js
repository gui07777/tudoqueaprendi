var frutas = ["Maçã", "Mamão", "Banana", "Morango"] //lista de frutas para exemplificar

for(let i = 0; i < frutas.length; i++){
    alert(frutas[i])
}

//for: método para fazer o laço

//let i = 0: ponto de partida. Nesse exemplo, ele diz que o ponto de partida é da posição 0, ou seja, vai começar o loop do item que está na posição 0 (Maçã).

//ponto e vírgula serve pra separar um parâmetro do outro.

//frutas.length: condição. O loop vai ser executado na lista de frutas até chegar na última posição.

//i++: até chegar no último estágio, ocorrerá incrementação de posição.

//i <: comparação da posição com o tamanho da lista. Enquanto a posição for menor que a lista incrementa, senão, ele vai incrementar posições infinitas mesmo a lista tendo apenas quatro items.

//alert(frutas[i]): mostra na tela a o loop. Se colocar apenas alert(i), ele exibe apenas o número da posição.
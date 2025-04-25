var nomes = ["Guilherme", "Gabriella", "Henrique"]
nomes.push("Davi")
nomes.push("RAfael")    // .push("") serve para adicionar items ao array na última posição

nomes.unshift("Primeiro nome")  //.unshift("") serve para adicionar items na primeira posição

var nomesCopia = nomes.slice();  // .slice() serve para copiar o array inteiro. Dentro do parênteses pode definir quais itens quer copiar pela posição deles. Se quiser copiar também, por exemplo, os últimos 2 ou 3 items da lista no caso de um array mt grande, entre parênteses pode colocar -2 ou -3, de acordo com o seu interesse.

alert(nomes[2])       //se colocar apenas o nome do array(nomes), ele exibe todos os itens do array
alert(nomesCopia)


//.pop() remove último item do array
//.shift() remove primeiro item do array
//.splice() remove o item da posição que quiser
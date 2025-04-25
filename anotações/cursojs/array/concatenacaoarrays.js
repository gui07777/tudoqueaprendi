var nomes = ["Guilherme", "Gabriella", "Henrique"]
var nomesAdicionar = ["Samuel", "Rafael", "Davi"]

var concatenacao = nomes.concat(nomesAdicionar) //.concat() concatena os arrays que escolher

alert(nomes)
alert(nomesAdicionar)
alert(concatenacao)

//ou

var regularShow = ["Rigby", "Mordecai", "Musculoso"]
var spongeBob = ["Bob Esponja", "Lula-Molusco", "Patrick"]
var multiverso = [...regularShow, ...spongeBob] //os 3 pontinhos tem a mesma função do .concat()

alert(regularShow)
alert(spongeBob)
alert(multiverso)
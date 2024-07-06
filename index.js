//DESAFIO CLASSIFICADOR DE NIVEL DE HEROI
//O QUE DEVE SER UTILIZADO:
//VARIAVEIS
//OPERADORES
//LAÇOS DE REPETIÇÃO
//ESTRUTURA DE REPETIÇÃO

//OBJETIVO:
/*crie uma variavel para armazenar o nome e a 
 de experiencia (XP) de um heroi, depois utilize uma 
 estrutura de decisão para apresentar alguma das mensagens 
 abaixo:
 
 se XP for menor do que 1000 = Ferro
 se XP for entre 1001 e 2000 = Bronze
 se XP for entre 2001 e 5000 = Prata
 se XP for entre 6001 e 7000 = Ouro
 se XP for entre 7001 e 8000 = Platina
 se XP for entre 8001 e 9000 = Ascendente
 se XP for entre 9001 e 10000 = Imortal
 se XP for maior ou igual a 10001 = Radiante
 
 SAIDA

 Ao final deve se exibir uma mensagem:
 "o Heroi de nome "nome" esta no nivel de 
 "valor do nivel" */

const nomeHeroi = "Giramille";

let nivelHeroi = 5825;

let nomeNivel = "prata";

if (nivelHeroi <= 1000) {
    nomeNivel = "Ferro"
}
else if (nivelHeroi >= 1001 && nivelHeroi <= 2000) {
    nomeNivel = "Bronze"
}
else if (nivelHeroi >= 2001 && nivelHeroi <= 6000) {
    nomeNivel = "Prata"
}
else if (nivelHeroi >= 6001 && nivelHeroi <= 7000) {
    nomeNivel = "Ouro"
}
else if (nivelHeroi >= 7001 && nivelHeroi <= 8000) {
    nomeNivel = "Platina"
}
else if (nivelHeroi >= 8001 && nivelHeroi <= 9000) {
    nomeNivel = "Ascendente"
}
else if (nivelHeroi >= 9001 && nivelHeroi <= 10000) {
    nomeNivel = "Imortal"
}
else if (nivelHeroi >= 10001) {
    nomeNivel = "Radiante"
} else {
    console.log("nada")
}

console.log(`o ${nomeHeroi} esta no nível ${nomeNivel} (${nivelHeroi}) `)




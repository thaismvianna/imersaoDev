// Criar uma lista com 3 jogadores
let personagem = ["", "", ""];
let viloes = ["", "", ""];

let forcaPersonagem = 0;
let forcaViloes = 0;

for(let i = 0; i < 3; i++) {
  let escolhaPersonagem = prompt("Digite o nome do seu personagem " + (i + 1));
  personagem[i] = escolhaPersonagem;
  // Calcular a força de cada jogador do time do usuário
  forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1;
}
console.log("Agora, o Array Personagem contém " + personagem);

for(let i = 0; i < 3; i++) {
  let indiceAleatorio = Math.floor(Math.random() * 5);
  let viloesPossiveis = ["Jinx", "Vi", "Caitlyn", "Mel", "Lux"];
  viloes[i] = viloesPossiveis[indiceAleatorio];
  // Calcular a força de cada jogador do time do pc
  forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1;
}
console.log("Final vilões:" + viloes);

// Comparar os dois times pra saber quem vence 
if (forcaPersonagem > forcaViloes) {
  alert("Seu time é mais forte! Você ganhou a disputa de cabo de guerra! Sua força foi " + forcaPersonagem);
} else if (forcaPersonagem < forcaViloes) {
  alert("Seu time é mais fraco. O computador venceu a disputa de cabo de guerra! A força foi " + forcaViloes);
} else {
  alert("Os dois times tem a mesma força!");
}
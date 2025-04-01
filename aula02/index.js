var idade = prompt("Quantos anos você tem?");

if (idade >= 18) {
  escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura");
  escolhaComputador = Math.floor(Math.random() * 3) + 1;

  /* Jogador pedra, Computador pedra = empate
Jogador tesoura, Comptador tesoura = empate
Jogador papel, Computador papel = empate */
  if (escolhaJogador == escolhaComputador) {
    alert("Empatou! Continue jogando");
  }

  if (escolhaJogador == 1) {
    if (escolhaComputador == 2) {
      //Jogador pedra, Computador papel = computador vence
      alert("O computador venceu! Tente novamente.");
    }
    if (escolhaComputador == 3) {
      // Jogador pedra, Computador tesoura = jogador vence
      alert("Parabéns, você venceu!");
    }
  }

  if (escolhaJogador == 2) {
    if (escolhaComputador == 1) {
      // Jogador papel, Computador pedra = jogador vence
      alert("Parabéns, você venceu!");
    }
    if (escolhaComputador == 3) {
      // Jogador papel, Computador tesoura = computador vence
      alert("O computador venceu! Tente novamente.");
    }
  }

  if (escolhaJogador == 3) {
    if (escolhaComputador == 1) {
      // Jogador tesoura, Computador pedra = computador vence
      alert("O computador venceu! Tente novamente.");
    }
    if (escolhaComputador == 2) {
      // Jogador tesoura, Computador papel = jogador vence
      alert("Parabéns, você venceu!");
    }
  }

  alert("A escolha do computador foi: " + escolhaComputador);
}

/* Gerar um numero entre 1 a 3. 
O Math.random() faz o computador escolher um número aleatorio e para ele gerar entre os numeros que se pede, se utiliza a conta como ex acima * 3.
O Matth.floor() faz com que arredonde pra baixo caso o número quebre. 
E o + 1 pra ficar no intervalo. Ex se sair 1, vai pra 2. */
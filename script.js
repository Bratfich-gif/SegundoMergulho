idade = prompt("quantos anos você tem?");
if (idade < 18) {
  alert("Você NÃO pode jogar jokenpo");
}

// linha ignorada: alert("Vamos começar a jogar!")

if (idade >= 18) {
  escolhaJogador = prompt("Digite 1-Pedra, 2-papel ou 3-tesoura?");
  escolhaComputador = Math.floor(Math.random() * 3) + 1;

  // Jogador Pedra, Computador Pedra --> empate!!!!!
  // Jogador Tesoura, Computador Tesoura --> empate!
  // Jogador Papel, Computador Papel --> Empate

  if (escolhaJogador == escolhaComputador) {
    alert("empate!!");
  }

  if (escolhaJogador == 1) {
    if (escolhaComputador == 2) {
      // Jogador Pedra, Computador Papel --> Compuador vence
      alert("Computador venceu, escolheu papel");
    }
    if (escolhaComputador == 3) {
      // Joagdor Pedra, Computador Tesoura --> Jogador vence
      alert("Jogador vence, computador tesoura");
    }
  }

  if (escolhaJogador == 2) {
    if (escolhaComputador == 1) {
      // Jogador Papel, Computador Pedra --> Jogador vence
      alert("Jogador venceu, computador pedra!!");
    }
    if (escolhaComputador == 3) {
      //Jogador Papel, Computador Tesoura--> Computador vence
      alert("Computador venceu, escolheu tesoura!");
    }
  }

  if (escolhaJogador == 3) {
    if (escolhaComputador == 1) {
      // Jogador Tesoura, Computador Pedra --> Computador vence
      alert("computador venceu, escolheu pedra");
    }
  }
  if (escolhaComputador == 2) {
    // Jogador Tesoura, Computador Papel --> Jogador vence
    alert("jogador venceu, computador papel");
  }

  alert("escolhaComputador: " + escolhaComputador);
}

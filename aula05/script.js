// PARTE 1: Lista de perguntas e respostas (verifique as vírgulas!)
const perguntas = [
    {
      pergunta: "Qual é o pokémon principal do Ash?", 
      respostas: [
        {opcao: "Pikachu", correto: true},
        {opcao: "Charmander", correto: false},                                 
        {opcao: "Bulbasauro", correto: false}
      ]
    },
    {
      pergunta: "Qual destes Pokémon é do tipo Fogo?",
      respostas: [
        {opcao: "Charizard", correto: true},
        {opcao: "Blastoise", correto: false},
        {opcao: "Venusaur", correto: false}
      ]
    }
  ];
  
  // PARTE 2: Pegando os elementos do HTML (verifique se suas classes existem!)
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0;
  let acertos = 0;
  
  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    if (indiceAtual >= perguntas.length) {
      finalizarJogo();
      return;
    }
  
    progressoElemento.textContent = `${indiceAtual + 1}/${perguntas.length}`;
    perguntaElemento.textContent = perguntas[indiceAtual].pergunta;
    respostasElemento.innerHTML = "";
  
    perguntas[indiceAtual].respostas.forEach(resposta => {
      const botao = document.createElement("button");
      botao.className = "botao-resposta";
      botao.textContent = resposta.opcao;
      
      botao.addEventListener("click", () => {
        if (resposta.correto) {
          acertos++;
        }
        indiceAtual++;
        carregarPergunta();
      });
  
      respostasElemento.appendChild(botao);
    });
  }
  
  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    textoFinal.textContent = `Você acertou ${acertos} de ${perguntas.length}`;
    conteudo.style.display = "none";
    conteudoFinal.style.display = "flex";
  }
  
  // PARTE 6: Iniciando o jogo
  document.addEventListener("DOMContentLoaded", carregarPergunta);
  
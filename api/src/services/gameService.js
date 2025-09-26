import { criarDeck, embaralhar, puxarCarta, calcularValorMao } from "../utils/deck.js";

const games = new Map();

export function iniciarJogo() {
  const gameId = Date.now().toString();
  let deck = embaralhar(criarDeck());

  const maoJogador = [puxarCarta(deck), puxarCarta(deck)];
  const maoDealer = [puxarCarta(deck), puxarCarta(deck)];

  const gameState = {
    id: gameId,
    deck,
    maoJogador,
    maoDealer,
    status: "jogando"
  };

  games.set(gameId, gameState);
  return gameState;
}

export function pedirCarta(gameId) {
  const jogo = games.get(gameId);
  if (!jogo) throw new Error("Partida não encontrada");
  if (jogo.status !== "jogando") throw new Error("Jogo já finalizado");

  const carta = puxarCarta(jogo.deck);
  jogo.maoJogador.push(carta);

  const valorJogador = calcularValorMao(jogo.maoJogador);
  if (valorJogador > 21) {
    jogo.status = "perdeu";
  }

  return carta;
}

export function parar(gameId) {
  const jogo = games.get(gameId);
  if (!jogo) throw new Error("Partida não encontrada");
  if (jogo.status !== "jogando") throw new Error("Jogo já finalizado");

  while (calcularValorMao(jogo.maoDealer) < 17) {
    jogo.maoDealer.push(puxarCarta(jogo.deck));
  }

  const valorJogador = calcularValorMao(jogo.maoJogador);
  const valorDealer = calcularValorMao(jogo.maoDealer);

  if (valorDealer > 21 || valorJogador > valorDealer) {
    jogo.status = "venceu";
  } else if (valorJogador < valorDealer) {
    jogo.status = "perdeu";
  } else {
    jogo.status = "empate";
  }

  return jogo;
}

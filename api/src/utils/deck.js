const naipes = ["♠", "♥", "♦", "♣"];
const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

export function criarDeck() {
  const baralho = [];
  for (let naipe of naipes) {
    for (let valor of valores) {
      baralho.push({ naipe, valor });
    }
  }
  return baralho;
}

export function embaralhar(baralho) {
  let embaralhado = [...baralho];
  for (let i = embaralhado.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [embaralhado[i], embaralhado[j]] = [embaralhado[j], embaralhado[i]];
  }
  return embaralhado;
}

export function puxarCarta(baralho) {
  return baralho.pop();
}

export function calcularValorMao(mao) {
  let valor = 0;
  let ases = 0;

  for (let carta of mao) {
    if (["J", "Q", "K"].includes(carta.valor)) {
      valor += 10;
    } else if (carta.valor === "A") {
      valor += 11;
      ases++;
    } else {
      valor += parseInt(carta.valor, 10);
    }
  }

  while (valor > 21 && ases > 0) {
    valor -= 10;
    ases--;
  }

  return valor;
}

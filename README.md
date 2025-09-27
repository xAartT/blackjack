# 🃏 Blackjack - Jogo Web com Vue.js + Express.js

Este projeto é uma implementação do clássico jogo de **Blackjack (21)**, utilizando **Vue.js** no frontend e **Express.js** no backend. A aplicação permite que um jogador jogue contra o dealer (computador) seguindo as regras básicas do Blackjack.

## 🎯 Sobre o Projeto

A ideia é proporcionar uma experiência simples e direta do jogo de cartas, com uma interface leve e responsiva. O usuário pode iniciar uma partida, comprar cartas, parar sua jogada e aguardar a vez do dealer. O jogo segue as regras tradicionais:

- O jogador deve tentar chegar o mais próximo possível de 21 pontos sem ultrapassar.
- Cartas com figuras (J, Q, K) valem 10 pontos.
- O Ás (A) vale 11 pontos, mas pode ser considerado como 1 se necessário para evitar estouro.
- O dealer compra cartas até atingir pelo menos 17 pontos.

O projeto foi dividido em duas partes:

- **Frontend (Vue.js)**: Interface interativa que exibe as cartas, controla o fluxo do jogo e exibe mensagens ao jogador.
- **Backend (Express.js)**: Lógica do jogo, controle das partidas e distribuição de cartas.

---

## ⚙️ Como Funciona (Frontend - Vue.js)

O componente principal do jogo é responsável por:

### 👤 Jogador e Dealer

- As cartas do jogador e do dealer são armazenadas em arrays (`maoJogador`, `maoDealer`).
- O dealer só revela suas cartas no final do jogo, até lá, são exibidas com o verso.

### 🎮 Ciclo do Jogo

- O jogo começa com `handleStart()`, que inicia uma nova partida requisitando um baralho ao backend.
- O jogador pode:
  - **Comprar uma carta** (`handleCard()`), que adiciona uma carta à mão e verifica se estourou.
  - **Parar** (`handleStop()`), que finaliza a rodada e inicia a jogada automática do dealer.

### 🧠 Lógica de Pontuação

A função `checkPartida(mao)` calcula os pontos de uma mão considerando regras de Blackjack (tratamento de Ás como 11 ou 1). A pontuação determina o andamento e o fim da partida.

### 🤖 Jogada do Dealer

O dealer joga automaticamente quando for sua vez, comprando cartas até atingir no mínimo 17 pontos ou estourar.

### 📢 Mensagens e Alertas

O componente `Alerta` é usado para exibir mensagens no fim do jogo, informando quem venceu ou se houve empate.

---

## 🧩 Estrutura de Componentes

- **`Carta.vue`**: Exibe uma carta com valor e naipe.
- **`CartaVerso.vue`**: Exibe o verso da carta (usado para cartas do dealer ocultas).
- **`Botoes.vue`**: Botões de controle do jogo (comprar carta, parar, iniciar nova partida).
- **`Alerta.vue`**: Modal de feedback ao jogador com o resultado da partida.

---

## 🚀 Como Rodar o Projeto

1. Na pasta raiz é necessário rodar o comando ```npm install```
2. É necessário acessar a pasta app(frontend) e instalar as dependências ```cd app > npm install```
3. Após isso é necessário fazer o mesmo para a pasta api(backend) ```cd .. > cd api > npm install```
4. E por fim basta acessar a pasta raíz e utilizar o comando ```npm run up```

Dessa maneira vai subir o frontend e o backend ao mesmo tempo e acessar o endereço exibido pelo vite no terminal (geralmente ```http://localhost:5173```)

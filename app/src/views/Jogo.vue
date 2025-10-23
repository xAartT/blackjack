<template>
  <div id="body">
    <div id="containerDealer">
      <Carta 
        v-if="mostrarCartasDealer"
        v-for="(carta, i) in maoDealer" 
        :key="i" 
        :valor="carta.valor" 
        :naipe="carta.naipe"
      />

      <CartaVerso
        v-if="!mostrarCartasDealer"
        v-for="(carta, i) in maoDealer"/>
    </div>

    <div>
      <Botoes @start="handleStart" @card="handleCard" @stop="handleStop" />
    </div>

    <div id="containerJogador">
      <Carta 
        v-for="(carta, i) in maoJogador" 
        :key="i" 
        :valor="carta.valor" 
        :naipe="carta.naipe"
      />
    </div>

    <div v-if="vez" id="containerLegenda">
      <label v-if="vez == 'jogador'">
        É a sua vez
      </label>
      <label v-if="vez == 'dealer'">
        É a vez do dealer
      </label>
    </div>
  </div>

  <CartaVerso style="position: fixed; top: 50%; left: 9.5%; transform: translate(-50%, -50%);"/>
  <CartaVerso style="position: fixed; top: 50%; left: 10%; transform: translate(-50%, -50%);"/>

  <Alerta v-model="showAlert" :title="aviso" :message="msg" :type="type" />

</template>

<script>
import * as gameService from '../services/gameService.js'
import Botoes from '../components/Botoes.vue';
import Carta from '../components/TemplateCarta.vue';
import Alerta from '../components/Alerta.vue';
import CartaVerso from '../components/CartaVerso.vue';

export default {
  name: "Jogo",
  components: {
    Botoes,
    Carta,
    Alerta,
    CartaVerso
  },

  data() {
    return {
      gameId: null,
      maoJogador: [],
      maoDealer: [],
      vez: null,
      showAlert: null,
      aviso: null,
      msg: null,
      type: null,
      exibirCartasDealer: false,
    }
  },

  methods: {
    checkPartida(mao) {
      const resultado = mao.reduce(
        (acc, el) => {
          let valorCarta = 0;

          switch (el.valor) {
            case 'J':
            case 'Q':
            case 'K':
              valorCarta = 10;
              break;
            case 'A':
              valorCarta = 11;
              acc.ases += 1;
              break;
            default:
              valorCarta = Number(el.valor);
          }

          acc.total += valorCarta;
          return acc;
        },
        { total: 0, ases: 0 }
      );

      while (resultado.total > 21 && resultado.ases > 0) {
        resultado.total -= 10;
        resultado.ases -= 1;
      }

      return resultado.total;
    },

    notificarResultado(jogador, dealer) {
      if (jogador > 21) {
        this.msg = `Você estourou, o dealer venceu! Seus pontos: ${jogador} Pontos do dealer: ${dealer}`;
        this.type = 'error';
      } else if (dealer > 21) {
        this.msg = `Dealer estourou! Você venceu! Seus pontos: ${jogador} Pontos do dealer: ${dealer}`;
        this.type = 'success';
      } else if (jogador > dealer) {
        this.msg = `Você venceu com ${jogador} pontos! Parabéns!`;
        this.type = 'success';
      } else if (dealer > jogador) {
        this.msg = `O dealer venceu com ${dealer} pontos! Tente novamente!`;
        this.type = 'error';
      } else {
        this.msg = `Empate! O jogo empatou com ${jogador} pontos`;
        this.type = 'info';
      }

      this.showAlert = true;
    },

    async handleStart() {
      const game = await gameService.startGame();
      this.gameId = game.id;
      this.maoJogador = [...game.maoJogador];
      this.maoDealer = [...game.maoDealer];
      this.vez = 'jogador';
    },

    async handleCard() {
      if (!this.gameId || this.vez !== 'jogador') return;

      try {
        const mao = await gameService.pickCard(this.gameId);
        this.maoJogador.push(mao);

        const pontos = this.checkPartida(this.maoJogador);

        if (pontos > 21) {
          this.finalizarJogo();
        } else if (pontos === 21) {
          this.vez = 'dealer';
        } else {
          this.vez = 'dealer';
        }
      } catch (err) {
        console.error('Erro ao pegar carta do jogador:', err.response?.data || err.message);
      }
    },

    async jogadaDealer() {
      const pensandoPor = Math.random() * 5000;
      await new Promise(resolve => setTimeout(resolve, pensandoPor));

      try {
        let pontosDealer = this.checkPartida(this.maoDealer);

        while (pontosDealer < 17) {
          const mao = await gameService.pickCard(this.gameId);
          this.maoDealer.push(mao);
          pontosDealer = this.checkPartida(this.maoDealer);

          await new Promise(resolve => setTimeout(resolve, 800));
        }

        if (this.checkPartida(this.maoDealer) >= 21) {
          this.finalizarJogo();
        } else {
        }

      } catch (err) {
        console.error('Erro ao buscar carta do dealer:', err.response?.data || err.message);
      }

      this.vez = "jogador";
    },

    async handleStop() {
      this.finalizarJogo();
    },

    finalizarJogo() {
      this.mostrarCartasDealer = true;
      const pontosJogador = this.checkPartida(this.maoJogador);
      const pontosDealer = this.checkPartida(this.maoDealer);
      this.notificarResultado(pontosJogador, pontosDealer);
      this.vez = null;
      this.gameId = null;
    }
  },

  watch: {
    async vez(novo) {
      if (novo === 'dealer') {
        await this.jogadaDealer();
      }
    }
  }
};
</script>

<style scoped>
#body {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}

#containerDealer {
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
}

#containerJogador {
  width: 100%;
  height: 45%;
  bottom: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
  margin-bottom: 10px;
}

#containerLegenda {
  top: 0;
  left: 0;
  position: absolute;
  margin: 15px;
  color: white;
}

#deckCentral {
  background-color: red;
  z-index: 9;
  align-self: center;
  place-self: center;
  justify-self: center;
}
</style>
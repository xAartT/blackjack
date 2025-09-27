<template>
  <div class="carta">
    <div :class="['canto-topo-esquerda', corClasse]">
      <span class="valor-pequeno">{{ valor }}</span>
      <span class="naipe-pequeno">{{ naipe }}</span>
    </div>

    <div :class="['naipe-central', corClasse]">
      {{ naipe }}
    </div>

    <div :class="['canto-baixo-direita', corClasse]">
      <span class="valor-pequeno">{{ valor }}</span>
      <span class="naipe-pequeno">{{ naipe }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carta",
  props: {
    valor: {
      type: String,
      required: true,
    },
    naipe: {
      type: String,
      required: true,
    },
  },
  computed: {
    corClasse() {
      return ["♥", "♦"].includes(this.naipe) ? "vermelho" : "preto";
    },
  },
};
</script>

<style scoped>
.carta {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: center;

  width: 160px;
  height: 240px;
  margin: 5px;

  border: 1px solid #333;
  border-radius: 12px;
  background: linear-gradient(145deg, #fefefe, #e8e8e8);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.8);
  font-family: 'Arial', sans-serif;
  overflow: hidden;
}

.vermelho {
  color: #d90000;
}
.preto {
  color: #1a1a1a;
}

.canto-topo-esquerda, .canto-baixo-direita {
  position: absolute;
  padding: 8px;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
}

.canto-topo-esquerda {
  top: 0;
  left: 0;
}

.canto-baixo-direita {
  bottom: 0;
  right: 0;
  transform: rotate(180deg);
}

.valor-pequeno {
  font-size: 24px;
}

.naipe-pequeno {
  font-size: 20px;
}

.naipe-central {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 140px;
  opacity: 0.15;
  line-height: 1;
}

.carta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 20px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 12px 12px 0 0;
}
</style>
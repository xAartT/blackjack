<template>
  <div class="carta">
    <span :class="corClasse">
      {{ valor }}{{ naipe }}
    </span>
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
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 120px;
  border: 2px solid #fff;
  border-radius: 8px;
  background: #fdfdfd;
  font-size: 24px;
  font-weight: bold;
  margin: 5px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
}

.vermelho {
  color: red;
}

.preto {
  color: black;
}
</style>

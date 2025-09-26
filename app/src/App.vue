<template>
  <div id="bg">
    <Jogo/>
  </div>
</template>

<script>
import Jogo from "./views/Jogo.vue";

export default {
  name: "App",
  components: {
    Jogo
  }
};
</script>

<style>
#bg {
  background-color: darkgreen;
  width: 90vw;
  height:90vh;
}
</style>

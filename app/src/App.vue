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
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
}
</style>

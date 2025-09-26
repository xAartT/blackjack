<template>
    <div id="container">
        <button v-if="!jogando" @click="start" id="btn" role="button">Iniciar</button>
        <button v-if="jogando" @click="$emit('card')" id="btn" role="button">Pegar carta</button>
        <button v-if="jogando" @click="$emit('stop')" id="btn" role="button">Parar</button>
    </div>
</template>



<script>
export default {
  name: "Botoes",
  data() {
    return {
        jogando: false
    }
  },
  methods: {
    start() {
        this.jogando = true;
        this.$emit('start')
    }
  }
};
</script>

<style scoped>
    #container {
        border-radius: 5px;
        width: 40%;
        height: 10%;
        top: 0;
        right: 0;
        position: absolute;
        display: flex;
        gap: 5px;
        align-items: center;
        margin: 10px;
    }

    #btn {
        background-color: initial;
        background-image: linear-gradient(-180deg, darkgreen, green);
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
        color: #FFFFFF;
        cursor: pointer;
        display: inline-block;
        font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
        height: 40px;
        line-height: 40px;
        outline: 0;
        overflow: hidden;
        padding: 0 20px;
        pointer-events: auto;
        position: relative;
        text-align: center;
        touch-action: manipulation;
        user-select: none;
        -webkit-user-select: none;
        vertical-align: top;
        white-space: nowrap;
        width: 100%;
        z-index: 9;
        border: 0;
        transition: box-shadow .2s;
    }

    #btn:hover {
    box-shadow: rgba(136, 255, 0, 0.5) 0 3px 8px;
    }
</style>
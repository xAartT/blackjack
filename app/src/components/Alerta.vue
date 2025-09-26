<template>
  <div v-if="visible" class="alert-overlay">
    <div class="alert-box" :class="type">
      <h3 class="alert-title">{{ title }}</h3>
      <p class="alert-message">{{ message }}</p>
      <button class="alert-close" @click="close">Fechar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CenteredAlert',
  props: {
    title: {
      type: String,
      default: 'Alerta'
    },
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'info',
      validator(value) {
        return ['info', 'success', 'warning', 'error'].includes(value)
      }
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: this.modelValue
    }
  },
  watch: {
    modelValue(val) {
      this.visible = val
    }
  },
  methods: {
    close() {
      window.location.reload();
    }
  }
}
</script>

<style scoped>
.alert-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
}

.alert-box {
  background: white;
  padding: 24px 32px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.alert-title {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
}

.alert-message {
  margin-bottom: 20px;
  font-size: 16px;
}

.alert-close {
  padding: 8px 16px;
  border: none;
  background-color: #444;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.alert-close:hover {
  background-color: #222;
}

.alert-box.info {
  border-left: 6px solid #2196F3;
}

.alert-box.success {
  border-left: 6px solid #4CAF50;
}

.alert-box.warning {
  border-left: 6px solid #FFC107;
}

.alert-box.error {
  border-left: 6px solid #F44336;
}
</style>

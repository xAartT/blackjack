<template>
  <div class="carta carta-verso">
    <div class="pattern"></div>
  </div>
</template>

<script>
export default {
  name: "CartaVerso",
};
</script>

<style scoped>
.carta {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 240px;
  border: 2px solid #fff;
  border-radius: 8px;
  background: #fdfdfd;
  font-size: 24px;
  font-weight: bold;
  margin: 5px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.carta-verso {
  background: white;
  border: 2px solid #000;
}

.carta-verso::before {
  content: '';
  position: absolute;
  top: 6px;
  left: 6px;
  right: 6px;
  bottom: 6px;
  border: 2px solid red;
  border-radius: 6px;
  z-index: 2;
}

.pattern {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(
    45deg,
    red 0px,
    red 4px,
    white 4px,
    white 8px
  );
  opacity: 0.6;
  z-index: 1;
}
</style>

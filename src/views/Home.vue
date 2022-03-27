<script setup>
import Footer from "../components/Footer.vue";
import Sabores from "../components/Sabores.vue";
import Adornos from "../components/Adornos.vue";
</script>

<template>
  <div class="home">
    <div class="inicio">
      <img src="../assets/Pastelería Galáctica.png" alt="" class="logo" />
    </div>
    <div class="fondo"></div>
  </div>
  <div class="info">
    <h1 style="margin: 20px 0; font-size:40px;">Arma tu pastel</h1>
    <p style="margin: 20px 10px;">Seleciona entre una gran variedad de sabores y adornos para armar el pastel perfecto.</p>
    <br>
    <router-link class="btn-pedido" to="form">Has tu pedido.</router-link>
  </div>
  <Sabores />
  <Adornos />
  <div class="div-btn">
    <router-link class="btn-pedido" to="form">Has tu pedido.</router-link>
  </div>
  <Footer />
</template>

<style scope>
.home {
  height: 100vh;
  max-height: 100%;
  position: relative;
  text-align: center;
  display: flex;
  z-index: 1;
}
.inicio {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fondo {
  width: 100%;
  background-image: url("../assets/pasteleria.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.logo {
  width: 500px;
  max-width: 100%;
}
.div-btn {
  width: 100%;
  text-align: center;
  margin: 50px 0;
}
.btn-pedido {
  padding: 10px 20px;
  border-radius: 50px;
  text-decoration: none;
  background-color: #000;
  color: #fff;
}
.btn-pedido:hover {
  background: #ffe6bc;
  color: #000;
}
.info {
  text-align: center;
  margin: 50px 0;
}
@media (max-width: 768px) {
  .home {
    flex-wrap: wrap;
    height: auto;
  }
}
</style>

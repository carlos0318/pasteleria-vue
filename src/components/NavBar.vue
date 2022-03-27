<template>
<div class="navbar">
  <div>
    <p class="logo">Pastelería Galáctica</p>
  </div>
  <nav>
    <router-link class="link" to="/">Inicio</router-link>
    <a href="#footer" class="link">Información</a>
    <router-link class="link" to="/pedidos">Pedidos</router-link>
    <router-link class="link" to="/inventario">Inventario</router-link>
  </nav>
</div>
</template>

<style scoped>
  .navbar {
    width: 100%;
    height: 50px;
    background: #ffe6bc;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 10;
  }
  nav .link {
    margin: 0 20px;
    text-decoration: none;
    color: #000000;
    font-size: 18px;
  }
  .logo {
    font-size: 20px;
    font-weight: bold;
  }
  nav .link:hover {
    text-decoration: underline;
  }
</style>

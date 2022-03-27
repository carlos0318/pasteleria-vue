<script>
export default {};
</script>

<template>
  <div class="pedidos">
    <h1>Pedidos</h1>
    <div class="cards-pedidos">
      <div
        v-for="(pedido, i) in $store.state.pedidos"
        :key="pedido.id"
        class="card-pedido"
      >
        <h2>Pedido {{ i + 1 }}</h2>
        <label> Nombre: </label>
        <p>{{ pedido.name }}</p>
        <label> Teléfono: </label>
        <p>{{ pedido.tel }}</p>
        <label> Email: </label>
        <p>{{ pedido.email }}</p>
        <label> Descripción general del pastel: </label>
        <p class="des">{{ pedido.des }}</p>
        <label> Sabores: </label>
        <div v-for="(sabor, index) in pedido.sabores" :key="sabor">
          <p v-if="sabor > 0">{{ index }} {{ sabor }}</p>
        </div>
        <label> Cubiertas y Decoraciones: </label>
        <p>{{ pedido.adornos.join(", ") }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pedidos {
  position: relative;
  top: 50px;
}
h1 {
  text-align: center;
}
.cards-pedidos {
  background: #f0f0f0;
  margin: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
.card-pedido {
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: 100%;
  margin: 15px 0;
  padding: 20px;
  background: #ffffff;
}
.card-pedido label {
  margin-top: 10px;
  font-weight: bold;
}
.des {
    height: 100px;
    margin: 5px 0;
    overflow-y: scroll;
}
</style>

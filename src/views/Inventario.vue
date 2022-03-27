<script>
export default {};
</script>

<template>
  <div class="inventario">
    <h1>Inventario</h1>
    <div class="cards">
    <h2>Sabores</h2>
      <div class="card">
        <img src="../assets/vainilla.png" alt="vainilla" />
        Vainilla: {{ $store.state.vainilla }}
      </div>
      <div class="card">
        <img src="../assets/chocolate.png" alt="chocolate" />
        Chocolate: {{ $store.state.chocolate }}
      </div>
      <div class="card">
        <img src="../assets/fresa.png" alt="fresa" />
        Fresa: {{ $store.state.fresa }}
      </div>
      <div class="card">
        <img src="../assets/limon.png" alt="limon" />
        LImon: {{ $store.state.limon }}
      </div>
    </div>
    <div class="cards">
    <h2>Adornos</h2>
      <div class="card">
        <img src="../assets/caramelo.png" alt="caramelo" />
        Caramelo: {{ $store.state.caramelo }}
      </div>
      <div class="card">
        <img src="../assets/frutas.png" alt="frutas" />
        Frutas: {{ $store.state.frutas }}
      </div>
      <div class="card">
        <img src="../assets/fondant.png" alt="fondant" />
        Fondant: {{ $store.state.fondant }}
      </div>
      <div class="card">
        <img src="../assets/chantilly.png" alt="chantilly" />
        Chantilly: {{ $store.state.chantilly }}
      </div>
      <div class="card">
        <img src="../assets/merengue.png" alt="merengue" />
        Merengue: {{ $store.state.merengue }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.inventario {
  position: relative;
  top: 50px;
}
h1 {
  text-align: center;
}
.cards {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 50px;
  flex-wrap: wrap;
}
.card img {
  width: 50px;
  border-radius: 50%;
  margin-right: 20px;
}
.card {
    width: 200px;
    margin: 15px;
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
}
</style>

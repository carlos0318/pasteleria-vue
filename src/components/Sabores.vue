<template>
  <h2>Sabores</h2>
  <div class="container-cards">
    <div class="card">
      <img src="../assets/vainilla.png" alt="vainilla" width="250" height="200" />
      <p class="precio">Vainilla</p>
    </div>
    <div class="card">
      <img src="../assets/chocolate.png" alt="chocolate" width="250" height="200"/>
      <p class="precio">Chocolate</p>
    </div>
    <div class="card">
      <img src="../assets/limon.png" alt="limon" width="250" height="200"/>
      <p class="precio">Limon</p>
    </div>
    <div class="card">
      <img src="../assets/fresa.png" alt="fresa" width="250" height="200"/>
      <p class="precio">Fresa</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  border-radius: 50px;
  /* border: 1px #000 solid; */
  overflow: hidden;
  text-align: center;
  margin: 20px;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
}
h2 {
  margin-top: 20px;
  text-align: center;
  font-size: 40px;
}
.container-cards {
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
}
.precio {
    margin-top: 10px;
}
</style>

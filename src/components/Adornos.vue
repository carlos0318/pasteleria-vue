<template>
  <h2>Decoraciones y Adornos</h2>
  <div class="container-cards">
    <div class="card">
      <img src="../assets/caramelo.png" alt="caramelo" width="250" height="200"/>
      <p class="precio">Caramelo</p>
    </div>
    <div class="card">
      <img src="../assets/frutas.png" alt="frutas" width="250" height="200"/>
      <p class="precio">Frutas</p>
    </div>
    <div class="card">
      <img src="../assets/fondant.png" alt="fondant" width="250" height="200"/>
      <p class="precio">Fondant</p>
    </div>
    <div class="card">
      <img src="../assets/chantilly.png" alt="chantilly" width="250" height="200"/>
      <p class="precio">Chantilly</p>
    </div>
    <div class="card">
      <img src="../assets/merengue.png" alt="merengue" width="250" height="200"/>
      <p class="precio">Merengue</p>
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
  font-size: 35px;
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

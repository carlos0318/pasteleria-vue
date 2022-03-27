<template>
  <h2>Sabores</h2>
  <div class="container-cards">
    <div class="card">
      <img src="../assets/vainilla.png" alt="vainilla" width="150" height="100" />
      <p class="precio">Vainilla 
        <input type="number" style="width: 50px; margin-left: 10px; text-align: center;" min="0" max="30" v-model="sabores.vainilla" @change="cambiar">
      </p>
    </div>
    <div class="card">
      <img src="../assets/chocolate.png" alt="chocolate" width="150" height="100"/>
      <p class="precio">Chocolate
        <input type="number" name="" id="" style="width: 50px; margin-left: 10px; text-align: center;" min="0" max="30" v-model="sabores.chocolate" @change="cambiar">
      </p>
    </div>
    <div class="card">
      <img src="../assets/limon.png" alt="limon" width="150" height="100"/>
      <p class="precio">Limon
        <input type="number" name="" id="" style="width: 50px; margin-left: 10px; text-align: center;" min="0" max="30" v-model="sabores.limon" @change="cambiar">
      </p>
    </div>
    <div class="card">
      <img src="../assets/fresa.png" alt="fresa" width="150" height="100"/>
      <p class="precio">Fresa
        <input type="number" name="" id="" style="width: 50px; margin-left: 10px; text-align: center;" min="0" max="30" v-model="sabores.fresa" @change="cambiar">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PedidoSabores',
  props: ['avisar'],
  data() {
    return {
      sabores: {
        vainilla: 0,
        chocolate: 0,
        limon: 0,
        fresa: 0,
      }
    }
  },
  methods: {
    cambiar() {
      this.avisar(this.sabores)
    }
  }
}
</script>

<style scoped>
.card {
  width: 150px;
  height: 150px;
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
  font-size: 25px;
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
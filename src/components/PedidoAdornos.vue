<template>
  <h2>Decoraciones y adornos</h2>
  <div class="container-cards">
    <div class="card">
      <img
        src="../assets/caramelo.png"
        alt="caramelo"
        width="150"
        height="100"
      />
      <p class="precio">
        Caramelo
        <input
          type="checkbox"
          id="caramelo"
          value="caramelo"
          v-model="adornos"
          @change="cambiar"
        />
      </p>
    </div>
    <div class="card">
      <img src="../assets/frutas.png" alt="frutas" width="150" height="100" />
      <p class="precio">
        Frutas
        <input
          type="checkbox"
          id="frutas"
          value="frutas"
          v-model="adornos"
          @change="cambiar"
        />
      </p>
    </div>
    <div class="card">
      <img src="../assets/fondant.png" alt="fondant" width="150" height="100" />
      <p class="precio">
        Fondant
        <input
          type="checkbox"
          id="fondant"
          value="fondant"
          v-model="adornos"
          @change="cambiar"
        />
      </p>
    </div>
    <div class="card">
      <img
        src="../assets/chantilly.png"
        alt="chantilly"
        width="150"
        height="100"
      />
      <p class="precio">
        Chantilly
        <input
          type="checkbox"
          id="chantilly"
          value="chantilly"
          v-model="adornos"
          @change="cambiar"
        />
      </p>
    </div>
    <div class="card">
      <img
        src="../assets/merengue.png"
        alt="merengue"
        width="150"
        height="100"
      />
      <p class="precio">
        Merengue
        <input
          type="checkbox"
          id="merengue"
          value="merengue"
          v-model="adornos"
          @change="cambiar"
        />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PedidoAdornos",
  props: ["avisar"],
  data() {
    return {
      adornos: [],
    };
  },
  methods: {
    cambiar() {
      this.avisar(this.adornos);
    },
  },
};
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

<script setup>
import PedidoSabores from "../components/PedidoSabores.vue";
import PedidoAdornos from "../components/PedidoAdornos.vue";
</script>

<template>
  <div class="form">
    <form @submit.prevent="click">
      <h1>Datos personales</h1>
      <div class="datos-persona">
        <div>
          <label for="name">Nombre: </label>
          <input
            type="text"
            name="name"
            id="name"
            v-model="pedido.name"
            required
          />
        </div>

        <div>
          <label for="tel">Teléfono: </label>
          <input type="tel" name="tel" id="tel" v-model="pedido.tel" required />
        </div>

        <div>
          <label for="email">Correo Electrónico: </label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="pedido.email"
            required
          />
        </div>
      </div>

      <h1>Datos del pastel</h1>

      <div>
        <PedidoSabores :avisar="cambiarSabores" />
        <PedidoAdornos :avisar="cambiarAdornos"/>
        <label for="des">Descripción general del pastel</label>
        <textarea
          name="des"
          id="des"
          cols="30"
          rows="10"
          v-model="pedido.des"
        ></textarea>
      </div>

      <div class="btn-container">
        <input type="submit" value="Realizar pedido" class="btn" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormPedidos",
  data() {
    return {
      pedido: {
        name: "",
        tel: "",
        email: "",
        des: "",
        sabores: {
          vainilla: 0,
          chocolate: 0,
          fresa: 0,
          limon: 0,
        },
        adornos: []
      },
    };
  },
  methods: {
    click() {
      this.$store.commit("newPedido", this.pedido);
      this.$router.push("/");
    },
    cambiarSabores(datos) {
      this.pedido.sabores.chocolate = datos.chocolate;
      this.pedido.sabores.vainilla = datos.vainilla;
      this.pedido.sabores.fresa = datos.fresa;
      this.pedido.sabores.limon = datos.limon;
    },
    cambiarAdornos(datos) {
      this.pedido.adornos = datos;
    },
  },
};
</script>

<style scoped>
.form {
  position: relative;
  top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
html,
body {
  min-height: 100%;
}
body,
div,
form,
input,
select,
textarea,
label {
  padding: 0;
  margin: 0;
  outline: none;
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  color: #666;
  line-height: 22px;
}
h1 {
  margin: 0;
  font-size: 30px;
  z-index: 2;
  line-height: 83px;
}
form {
  width: 1000px;
  max-width: 100%;
  padding: 20px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 0 8px #cc7a00;
}
input,
select,
textarea {
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
input {
  width: calc(100% - 10px);
  padding: 5px;
}
textarea {
  width: calc(100% - 12px);
  padding: 5px;
}
.btn-container {
  text-align: center;
}
.btn {
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #cc7a00;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
.btn:hover {
  background: #ff9800;
}
</style>

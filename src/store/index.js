import { createStore } from "vuex";

export default createStore({
  state: {
    vainilla: 30,
    chocolate: 30,
    fresa: 30,
    limon: 30,
    caramelo: 50,
    frutas: 50,
    fondant: 50,
    chantilly: 50,
    merengue: 50,
    pedidos: [
      {
        id: 0,
        name: "prueba",
        tel: "7711231212",
        email: "prueba.ortega@gmail.com",
        des: "Paste que diga feliz cumpleaños para niño",
        sabores: {vainilla: 1, chocolate: 2, fresa: 0, limon: 0},
        adornos: ['caramelo', 'frutas'],
      },
    ],
  },
  getters: {},
  mutations: {
    newPedido(state, payload) {
      state.vainilla -= payload.sabores.vainilla;
      state.chocolate -= payload.sabores.chocolate;
      state.fresa -= payload.sabores.fresa;
      state.limon -= payload.sabores.limon;

      payload.adornos.map((adorno)=> {
        state[adorno]--;
      })


      state.pedidos.push(payload);
    },
  },
  actions: {},
  modules: {},
});

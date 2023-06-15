const app = Vue.createApp({
  data() {
    return {
      operation: "",
      resultado: "0",
    };
  },

  methods: {
    clickC() {
      this.resultado = "0";
    },
    click(par) {
      if (this.resultado == "0") {
        this.resultado = par;
      } else {
        this.resultado += par;
      }
    },
    clickResult() {
      let oper = this.resultado;
      this.operation = oper;

      this.resultado = eval(oper);
    },
  },
}).mount("#appCalc");

//app.mount('#appCalc');

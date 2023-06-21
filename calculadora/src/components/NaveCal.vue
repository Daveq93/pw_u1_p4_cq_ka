<template>
  <div class="calculadora">
    <table>
      <thead>
        <tr>
          <td colspan="4">
            <h1>CALCULADORA</h1>
          </td>
        </tr>
      </thead>

      <tr>
        <td colspan="4">
          <span id="operation">{{ operation }}</span>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <span id="resultado">{{ numero }}</span>
        </td>
      </tr>

      <tr>
        <td><button class="num" @click="resComputed">7</button></td>
        <td><button class="num" @click="resComputed">8</button></td>
        <td><button class="num" @click="resComputed">9</button></td>
        <td><button class="opr" @click="resComputed">/</button></td>
      </tr>
      <tr>
        <td><button class="num" @click="resComputed">4</button></td>
        <td><button class="num" @click="resComputed">5</button></td>
        <td><button class="num" @click="resComputed">6</button></td>
        <td><button class="opr" @click="resComputed">*</button></td>
      </tr>
      <tr>
        <td><button class="num" @click="resComputed">1</button></td>
        <td><button class="num" @click="resComputed">2</button></td>
        <td><button class="num" @click="resComputed">3</button></td>
        <td><button class="opr" @click="resComputed">-</button></td>
      </tr>

      <tr>
        <td><button class="resp" @click="resComputed">=</button></td>
        <td><button class="borrar" @click="clickC">C</button></td>
        <td><button class="num" @click="resComputed">0</button></td>
        <td><button class="opr" @click="resComputed">+</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "NaveCal",
  data() {
    return {
      operation: "",
      resultado: "0",
      numero: "",
    };
  },
  computed: {
    obtener() {
      return (event) => {
        this.numero += event.target.innerText;
      };
    },
    resComputed() {
      return (event) => {
        const pantalla = event.target.innerText;
        if (pantalla !== "=") {
          this.numero += pantalla;
        } else {
          const resultado = eval(this.numero); 
          this.operation = this.numero
          this.numero = resultado.toString();
        }
      };
    },
    clickC() {
      return () => {
        this.numero = "";
      };
    },
  },
};
</script>

<style>
.calculadora {
  display: block;
  margin: 0 auto;
  padding: 20px;
  background-color: #0acff6;
  width: 335px;
  height: 550px;
  border-radius: 25px;
}

td button {
  background-color: white;
  display: block;
  width: 70px;
  height: 70px;
  font-size: 25px;
  border-style: none;
  border-radius: 26px;
  box-shadow: 10px 5px 10px 0px rgb(0, 149, 255);
}

#operation {
  display: block;
  text-align: center;
  font-size: 20px;
  color: antiquewhite;
  font-style: bold;
}

#resultado {
  display: block;
  text-align: center;
  font-size: 40px;
  margin-bottom: 30px;
  width: 290px;
  height: 80px;
  line-height: 100px;
  background-color: white;
  border-radius: 25px;
  overflow-y: scroll;
}

.opr {
  font-size: 50px;
}
.opr:hover {
  background-color: rgb(249, 147, 13);
}

.num:hover {
  background-color: rgb(12, 166, 249);
}

.resp:hover {
  background-color: rgb(4, 248, 166);
}

.borrar:hover {
  background-color: red;
}
</style>

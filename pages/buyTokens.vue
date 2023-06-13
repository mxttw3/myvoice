<template>
  <div class="background">
    <div class="box">
      <header class="py-4 px-8 flex">
        <div class="flex items-center">
          <a href="/home">
            <img src="../img/logo.png" alt="Logo" class="logo-container w-36" />
          </a>
        </div>
        <nav class="flex items-center flex-grow justify-center">
          <ul class="flex space-x-4">
            <li>
              <a
                href="/home"
                class="text-black hover:text-gray-500 font font-light"
                >Home</a
              >
            </li>
            <li>
              <a
                href="/buyTokens"
                class="text-black hover:text-gray-500 font font-light"
                >Buy Tokens</a
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center text-black font-bold">
          <p class="font font-medium">{{ usuario.nombre }}</p>
        </div>
      </header>
      <hr class="flex-grow border-gray-300" />

      <main class="p-8">
        <div class="flex justify-center space-x-8">
          <div class="card">
            <h2 class="card-title sizeTittle font">Tokens</h2>
            <p class="card-description font font-thin">
              Choose the amount of tokens you want
            </p>
            <div class="flex justify-center">
              <div class="flex flex-col items-center">
                <input
                  type="number"
                  v-model="cantidadTokens"
                  class="input-tokens font font-thin"
                  min="200"
                />
                <p class="precio font">{{ calcularPrecio() }}€</p>
                <button @click="calcularCosto" class="card-button font">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        nombre: "Matthew Angulo",
        tokens: 100000,
      },
      cantidadTokens: 0,
    };
  },
  methods: {
    calcularCosto() {
      const tokensComprados = parseInt(this.cantidadTokens);
      const costo = tokensComprados / 10;
      alert(`El costo de la compra es de ${costo.toFixed(2)}€`);
    },
    calcularPrecio() {
      const tokensComprados = parseInt(this.cantidadTokens);
      const costo = tokensComprados / 10;
      return `${costo.toFixed(2)}`;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Geologica:wght@200;300;500;700&display=swap");
body {
  background-color: #d5fefd;
  background-image: linear-gradient(315deg, #d5fefd 0%, #fffcff 60%);
}
.font {
  font-family: "Geologica", serif;
}

.size {
  font-size: 150px;
}
nav {
  flex: 1;
  text-align: center;
}
.background {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 95%;
  margin-top: 2vw;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
}

.logo-container {
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
}
.card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  padding-top: 24px;
  width: 45%;
  height: 320px;
}

.card-title {
  color: #333333;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 12px;
}

.card-description {
  color: #666666;
  font-size: 18px;
  margin-bottom: 20px;
  margin-bottom: 30px; /* Aumenta el margen inferior para separar del precio */
}

.card-button {
  background-color: #4caf50;
  border-radius: 6px;
  color: #ffffff;
  display: inline-block;
  font-size: 18px;
  padding: 9px 35px;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
  margin-top: 8px;
}

.card-button:hover {
  background-color: #45a049;
}

.sizeTittle {
  font-size: 40px;
}

.input-tokens {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 6px 10px;
  margin-right: 8px;
  width: 100px;
  font-size: 16px;
}
.input-tokens {
  /* ... */
  width: 150px; /* Aumenta el ancho del campo de entrada */
}

.precio {
  font-size: 18px;
  margin-top: 8px;
}
</style>

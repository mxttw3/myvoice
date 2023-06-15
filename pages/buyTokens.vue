<template>
  <div class="background">
    <div class="box" :class="{ 'popup-overlay': buyClicked }">
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
                  value="200"
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

    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <button class="close-button" @click="closePopup">&#10005;</button> <!-- Botón de cerrar con el icono X -->
        <h2 class="popup-title font-bold">Choose Payment</h2>
        <p class="popup-subtitle">Choose how you want to pay</p>
        <div class="popup-image-container">
          <!-- Añade la imagen aquí -->
          <img src="../img/payment.png" alt="Payment Method" class="popup-image" />
        </div>
        <div class="popup-carousel">
          <!-- Agrega el carrusel de imágenes aquí -->
          <!-- Puedes usar bibliotecas como "Slick Carousel" o "Swiper" para implementarlo -->
        </div>
        <button class="select-button">Select</button>
      </div>
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
      cantidadTokens: 200,
      showPopup: false,
      selectedPayment: "",
      buyClicked: false,
    };
  },
  methods: {
    calcularCosto() {
      const tokensComprados = parseInt(this.cantidadTokens);
      const costo = tokensComprados / 10;
      if (tokensComprados >= 200) {
        this.showPopup = true;
        this.buyClicked = true;
      } else {
        alert("La cantidad mínima de tokens a comprar es de 200");
      }
    },
    calcularPrecio() {
      const tokensComprados = parseInt(this.cantidadTokens);
      const costo = tokensComprados / 10;
      return `${costo.toFixed(2)}`;
    },

    selectPayment(paymentMethod) {
      this.selectedPayment = paymentMethod;
      this.showPopup = false; // Cerrar el popup después de seleccionar un método de pago
      // Aquí puedes realizar acciones adicionales según el método de pago seleccionado
    },

    closePopup() {
    this.showPopup = false;
    this.buyClicked = false;
    }
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
  background-color: #7fdebf;
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
  background-color: #74caad;
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

.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 20px;
  z-index: 999;
}

.popup-content {
  text-align: center;
}

.popup-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.popup-subtitle {
  font-size: 18px;
  margin-bottom: 16px;
}

.popup-image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.popup-image {
  width: 200px; /* Ajusta el tamaño de la imagen según tus necesidades */
}

.popup-carousel {
  /* Estilos del carrusel */
}

.select-button {
  border: 1px solid black;
  background-color: transparent;
  border-radius: 6px;
  color: black;
  font-size: 18px;
  padding: 9px 35px;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
}

.payment-methods {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

.payment-method {
  background-color: #4caf50;
  border-radius: 6px;
  color: #ffffff;
  display: inline-block;
  font-size: 18px;
  padding: 9px 35px;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
  margin: 0 8px;
}

.payment-method:hover {
  background-color: #45a049;
}

.popup-overlay {
  filter: blur(8px);
  pointer-events: none;
}

.close-button {
  position: absolute;
  top: 5px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 21px;
  color: #999999;
  cursor: pointer;
}

</style>

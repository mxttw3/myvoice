<template>
  <div class="background">
    <div class="box">
      <header class="py-4 px-8 flex">
        <div class="flex items-center">
          <img src="../img/logo.png" alt="Logo" class="logo-container w-36" />
        </div>
        <nav class="flex items-center flex-grow justify-center">
          <ul class="flex space-x-4">
            <li>
              <a href="/home" class="text-black hover:text-gray-500 font font-light">Home</a>
            </li>
            <li>
              <a href="/buyTokens" class="text-black hover:text-gray-500 font font-light">Buy Tokens</a>
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
  <!-- Carta de suscripción básica -->
  <div class="card">
    <h2 class="card-title sizeTittle font">Basic</h2>
    <p class="card-description">Acceso limitado a funciones básicas del sitio.</p>
    <p class="card-price">$9.99€</p>
    <a href="/subscribe/basic" class="card-button">Buy</a>
  </div>

  <!-- Carta de suscripción normal -->
  <div class="card">
    <h2 class="card-title font sizeTittle font">Starter</h2>
    <p class="card-description">Acceso completo a todas las funciones del sitio.</p>
    <p class="card-price">$19.99€</p>
    <a href="/subscribe/normal" class="card-button">Buy</a>
  </div>

  <!-- Carta de suscripción Pro -->
  <div class="card">
    <h2 class="card-title sizeTittle font">Creator</h2>
    <p class="card-description">Acceso premium a funciones avanzadas del sitio.</p>
    <p class="card-price">29.99€</p>
    <a href="/subscribe/pro" class="card-button">Buy</a>
  </div>
</div>
</main>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    let tokens = 100000;
    return {
      usuario: {
        nombre: "Matthew Angulo",
        tokens: tokens,
      },
    };
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
padding: 24px;
text-align: center;
transition: transform 0.3s ease-in-out;
width: 320px;
height: 345px;
}

.card:hover {
transform: translateY(-5px);
}

.card-title {
color: #333333;
font-size: 28px;
font-weight: bold;
margin-bottom: 12px;
margin-bottom: 30px;
}

.card-description {
color: #666666;
font-size: 18px;
margin-bottom: 20px;
margin-bottom: 30px; /* Aumenta el margen inferior para separar del precio */
}

.card-price {
color: #333333;
font-size: 24px;
font-weight: bold;
margin-bottom: 20px;
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

}

.card-button:hover {
background-color: #45a049;
}

.sizeTittle{
  font-size: 40px;
}
</style>

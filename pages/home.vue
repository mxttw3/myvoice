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
              <a href="/home" class="text-black hover:text-gray-500 font font-light"
                >Home</a
              >
            </li>
            <li>
              <a href="/buyTokens" class="text-black hover:text-gray-500 font font-light"
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
        <!-- Contenido del home aquí -->
        <h2 class="text-2xl font font-light mb-4">
          Wellcome, {{ usuario.nombre }}
        </h2>
        <div class="miniBox">
          <div class="tokens-container">
            <p class="font font-medium tokenSize">Your tokens:</p>
            <p class="font font-bold size">{{ usuario.tokens }}</p>
            <div class="buy-button-container">
              <button class="buy-button">BUY MORE</button>
            </div>
          </div>
        </div>
        <!-- Resto del contenido del home -->
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
.tokenSize {
  font-size: 30px;
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

.miniBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
}

.tokens-container {
  width: 50%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.tokenSize {
  font-size: 30px;
  text-align: center;
}

.size {
  font-size: 150px;
  text-align: center;
}

.buy-button-container {
  display: flex;
  justify-content: center;
}

.buy-button {
  padding: 0.5em 2em;
  background-color: #4caf50;
  color: white;
  font-family: "Geologica", serif;
  font-weight: 500;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.buy-button:hover {
  background-color: #45a049;
}
</style>

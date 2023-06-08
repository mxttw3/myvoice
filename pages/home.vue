<template>
  <div class="background">
    <div class="box">
      <header class="py-4 px-8 flex">
        <div class="flex items-center">
          <img src="../img/logo.png" alt="Logo" class="w-36" />
        </div>
        <nav class="flex items-center flex-grow justify-center">
          <ul class="flex space-x-4">
            <li>
              <a href="#" class="text-white hover:text-gray-200">Home</a>
            </li>
            <li>
              <a href="#" class="text-white hover:text-gray-200">Buy Tokens</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center text-white">
          <p>{{ usuario.nombre }}</p>
          <img
            src="../img/guts.jpeg"
            alt="Foto de perfil"
            class="w-8 h-8 rounded-full inset-10-px"
          />
        </div>
      </header>
      <main class="p-8">
        <!-- Contenido del home aquí -->
        <h2 class="text-2xl font-bold mb-4">
          Bienvenido, {{ usuario.nombre }}
        </h2>
        <p>Tus tokens: {{ usuario.tokens }}</p>
        <!-- Resto del contenido del home -->
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        nombre: "John Doe",
        fotoPerfil: "href a la foto de perfil",
        tokens: 10,
      },
    };
  },
};
</script>

<style scoped>
body {
  background-color: #d5fefd;
  background-image: linear-gradient(315deg, #d5fefd 0%, #fffcff 60%);
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
.box{
  width: 95%;
  margin-top: 2vw;
  border-radius: 15px;
  background-color: red;
}
</style>

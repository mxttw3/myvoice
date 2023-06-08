<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="w-full max-w-md">
      <div
        class="bg-white rounded-lg shadow-xl shadow-md hover:shadow-lg p-6 mx-4"
      >
        <div class="logo-container mb-8">
          <img src="../img/logo.png" alt="Logo" class="mx-auto max-w-xs" />
        </div>

        <div class="flex justify-center mt-4">
          <button
            @click="loginWithGoogle"
            class="w-full border border-red-500 hover:bg-red-500 hover:text-white text-red-500 font-bold py-2 px-4 rounded flex items-center justify-center"
          >
            <span class="flex items-center">
              <img
                src="../img/Google__G__Logo.svg.png"
                alt="Google Logo"
                class="w-5 h-5 mr-2"
              />
              <span class="text-center">Log In with Google</span>
            </span>
          </button>
        </div>

        <div class="flex justify-center items-center mb-2 mt-4">
          <hr class="flex-grow border-gray-300" />
          <span class="mx-2 text-gray-500">Or continue with</span>
          <hr class="flex-grow border-gray-300" />
        </div>

        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block mb-2">Email:</label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block mb-2">Password:</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Log In
          </button>
        </form>
        <div class="flex justify-between mt-4">
          <a href="#" class="text-blue-500">Forgot password?</a>
          <a href="./createAcc" class="text-blue-500">Create an account</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Lógica para el inicio de sesión con email y contraseña
    },
    loginWithGoogle() {
      // Lógica para el inicio de sesión con Google
    },
  },
};
</script>

<style>
.logo-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
}

.logo-container img {
  max-width: 80%;
  height: auto;
}

input[type="email"],
input[type="password"] {
  font-family: "Your Creative Font", sans-serif;
}

body {
  background-color: #d5fefd;
  background-image: linear-gradient(315deg, #d5fefd 0%, #fffcff 60%);
}
</style>

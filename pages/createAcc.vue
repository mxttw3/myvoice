<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="w-full max-w-md">
      <div class="bg-white rounded-lg shadow-xl shadow-md hover:shadow-lg p-6 mx-4">
        <div class="logo-container mb-8">
          <img src="../img/logo.png" alt="Logo" class="mx-auto max-w-xs" />
        </div>
        <form @submit.prevent="createAccount">

          <div class="mb-4">
            <label for="firstName" class="block mb-2">First Name:</label>
            <input v-model="firstName" type="text" id="firstName" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
          </div>

          <div class="mb-4">
            <label for="lastName" class="block mb-2">Last Name:</label>
            <input v-model="lastName" type="text" id="lastName" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
          </div>

          <div class="mb-4">
            <label for="email" class="block mb-2">Email:</label>
            <input v-model="email" type="email" id="email" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
          </div>

          <div class="mb-4">
            <label for="password" class="block mb-2">Password:</label>
            <input v-model="password" type="password" id="password" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
          </div>

          <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Create Account
          </button>
        </form>
        <div class="flex justify-between mt-4">
          <a href="#" class="text-blue-500">Forgot password?</a>
          <a href="../" class="text-blue-500">Sign In</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async createAccount() {
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password)
        this.$router.push('/payment')
      } catch (error) {
        console.error('Error de registro:', error)
      }
    }
  }
}
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

input[type="text"],
input[type="email"]{
  font-family: "Your Creative Font", sans-serif;
}

body {
  background-color: #d5fefd;
  background-image: linear-gradient(315deg, #d5fefd 0%, #fffcff 60%);
}
</style>

<template>
  <div>
    <main class="form-signin w-100 m-auto mt-5">
        <form @submit.prevent="login">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
            <input type="email" class="form-control" placeholder="name@example.com" v-model="email">
            <label>Email address</label>
            </div>
            <div class="form-floating">
            <input type="password" class="form-control" placeholder="Password" v-model="password">
            <label>Password</label>
            </div>

            <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        </form>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Login",
  data(){
    return{
        email: "",
        password: ""
    }
  },
  methods: {
    async login(){

        await axios.post('login', {
            email: this.email,
            password: this.password
        });

        await this.$router.push('/')
    }
  }
};
</script>

<style scoped>
.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>

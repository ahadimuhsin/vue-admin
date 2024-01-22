<template>
    <div>
        <main class="form-signin w-100 m-auto mt-5">
            <form @submit.prevent="register">
                <h1 class="h3 mb-3 fw-normal">Register</h1>
                
                <div class="form-floating">
                    <input type="text" class="form-control" placeholder="First Name" v-model="first_name">
                    <label>First Name</label>
                </div>

                <div class="form-floating my-3">
                    <input type="text" class="form-control" placeholder="Last Name" v-model="last_name">
                    <label>Last Name</label>
                </div>
                <div class="form-floating my-3">
                    <input type="email" class="form-control" placeholder="name@example.com" v-model="email">
                    <label>Email address</label>
                </div>

                <div class="form-floating my-3">
                    <input type="password" class="form-control" placeholder="Password" v-model="password">
                    <label>Password</label>
                </div>

                <div class="form-floating my-3">
                    <input type="password" class="form-control" placeholder="Password Confirmation" v-model="password_confirm">
                    <label>Password Confirmation</label>
                </div>

                <button class="btn btn-primary w-100 py-2" type="submit">Submit</button>
            </form>
        </main>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Register",
    data(){
        return{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirm: "",   
        }
    },
    methods: {
        async register(){
            await axios.post('register', {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                password_confirm: this.password_confirm,
            });

            await this.$router.push('/login')
        }
    }
}
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
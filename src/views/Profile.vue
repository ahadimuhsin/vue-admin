<template>
    <div>
        <h3>Account Information</h3>
        <form @submit.prevent="changeProfile">
            <div class="my-4">
                <v-text-field label="First Name" 
                placeholder="First Name" v-model="first_name"></v-text-field>
            </div>

            <div class="my-4">
                <!-- <v-file-input label="Image" show-size
                v-model="image"></v-file-input> -->

                <v-text-field label="Last Name" 
                placeholder="Last Name"
                v-model="last_name"></v-text-field>

            </div>

            <div class="my-4">
                <v-text-field label="Email" 
                placeholder="Email"
                v-model="email"
                type="email"></v-text-field>
            </div>

            <v-btn color="primary" type="submit">Save</v-btn>
        </form>

        <h3 class="mt-4">Change Password</h3>
        <form @submit.prevent="changePassword">
            <div class="my-4">
                <v-text-field label="Current Password" 
                placeholder="Current Password" v-model="current_password"></v-text-field>
            </div>

            <div class="my-4">
                <v-text-field label="Password" 
                placeholder="Password"
                v-model="password"></v-text-field>
            </div>

            <div class="my-4">
                <v-text-field label="Password Confirmation" 
                placeholder="Password Confirmation"
                v-model="password_confirm"></v-text-field>
            </div>

            <v-btn color="primary" type="submit">Save</v-btn>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Profile",
  data(){
    return{
        // user: {},
        first_name: '',
        last_name: '',
        email: '',
        current_password: '',
        password : '',
        password_confirm : ''
    }
  },
  async mounted()
  {
    const {data} = await axios.get('user');

    this.first_name = data.first_name
    this.last_name= data.last_name
    this.email = data.email
  },
  methods: {
    async changeProfile()
    {
        const data = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
        }
        await axios.put('users/info', data);

        this.$notify({
            group: 'foo',
            type: 'success',
            title: 'Sukses',
            text: 'Profil Berhasil Diubah'
        });
        
        setTimeout(() => {
            location.reload();
        }, 2000);

    },

    async changePassword()
    {
        const {response} = await axios.put('users/password', {
            current_password: this.current_password,
            password: this.password,
            password_confirm: this.password_confirm
        });

        console.log(response)
    }
  }
};
</script>
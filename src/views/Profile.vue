<template>
    <div>
        <h3>Account Information</h3>
        <form @submit.prevent="changeProfile">
            <div class="my-4">
                <v-text-field label="First Name" 
                placeholder="First Name" v-model="user.first_name"></v-text-field>
            </div>

            <div class="my-4">
                <!-- <v-file-input label="Image" show-size
                v-model="image"></v-file-input> -->

                <v-text-field label="Last Name" 
                placeholder="Last Name"
                v-model="user.last_name"></v-text-field>

            </div>

            <div class="my-4">
                <v-text-field label="Email" 
                placeholder="Email"
                v-model="user.email"
                type="email"></v-text-field>
            </div>

            <v-btn color="primary" type="submit">Save</v-btn>
        </form>

        <h3 class="mt-4">Change Password</h3>
        <form @submit.prevent="changePassword">
            <div class="my-4">
                <v-text-field label="Current Password" 
                placeholder="Current Password" v-model="current_password" type="password"></v-text-field>
            </div>

            <div class="my-4">
                <v-text-field label="Password" 
                placeholder="Password"
                v-model="password" type="password"></v-text-field>
            </div>

            <div class="my-4">
                <v-text-field label="Password Confirmation" 
                placeholder="Password Confirmation"
                v-model="password_confirm" type="password"></v-text-field>
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
        current_password: '',
        password : '',
        password_confirm : ''
    }
  },
  methods: {
    async changeProfile()
    {
        const data = {
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            email: this.user.email,
        }
        const {process} = await axios.put('users/info', data);

        await this.$store.dispatch('setUser', process);

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

        this.$notify({
            group: 'foo',
            type: 'success',
            title: 'Sukses',
            text: 'Password Berhasil Diubah'
        });
        
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
  },
  computed: {
      user(){
        return this.$store.state.user;
      }
    }
};
</script>
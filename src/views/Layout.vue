<template>
  <v-app>
    <Nav></Nav>
    <div class="container-fluid">
      <div class="row">
        <Menu />
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="table-responsive small">
           <router-view></router-view>
          </div>
        </main>
      </div>
    </div>
  </v-app>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Menu from "@/components/Menu.vue";
import axios from "axios";
import {User} from '@/models/user'

export default {
  name: "Layout",
  components: { Nav, Menu },
  async mounted()
  {
    try {
      const {data} = await axios.get('user');

      // this.user = data
      await this.$store.dispatch('setUser', data)
    } 
    catch (error) {
      await this.$router.push('/login')
    }
  }
};
</script>

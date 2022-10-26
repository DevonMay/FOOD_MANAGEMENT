<template lang="">

  <div>
    <div>
  <b-navbar toggleable="lg" variant="prima" type="dark" style=" border-bottom: 1px solid black; background:black ;z-index:1" fixed="top">
    <b-navbar-brand to="/"></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto text-center">
        <b-nav-item v-if="isLogin" :to="{ path: '/Taskboard' }" class="ml-5 title" >FOOD SYSTEM MANAGEMENT</b-nav-item> 
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="login_button ">
          <router-link v-if="!isLogin" to="/login"><button class="btn btn-danger text-center ml-5">Login</button></router-link> 
        <div v-if="isLogin &&users"><span class="text-warning">Hi, {{users.username}} </span>
         <b-dropdown type="dark" class="mr-3"  variant="ligth">
           <template #button-content>  
        <b-avatar  src="https://decider.com/wp-content/uploads/2016/06/homer.jpg?quality=90&strip=all&w=646&h=431&crop=1" class="mr-1"></b-avatar>
      </template>
       <b-dropdown-item ><b-nav-item >  <button  @click="logout" class="btn btn-light  ">Logout</button></b-nav-item></b-dropdown-item>
     </b-dropdown>
         
          </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  </div>
</template>
<script>
export default {

  computed: {
    isLogin() {
      return this.$store.getters['login/isLogin']
    },

    users() {
      return JSON.parse(localStorage.getItem("user"))

    }
  },
  methods: {
    logout() {
      this.$store.dispatch('login/logout')

      return this.$store.getters['login/isLogin'],
        this.$router.push({ path: '/login' });
    },
    created() {
      this.$store.dispatch('getCurrentUser')
    },


  }

}
</script>
<style scoped>
.login_button{
  float: right;
  padding-right: 100px;
  margin-left:  auto;
}
.title{
  margin-left: 50px;
}
</style>
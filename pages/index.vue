<template>
  <div class="container links">
    <v-container>
      <v-btn color="primary" elevation="2" large>
        <nuxt-link to="/users/LogIn" class="btn btn-success" align="center"
          >Login</nuxt-link
        ></v-btn
      >

       <v-btn color="primary" elevation="2" large>
        <nuxt-link to="/Home" class="btn btn-success" align="center"
          >Home</nuxt-link
        ></v-btn
      >

      
    </v-container>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

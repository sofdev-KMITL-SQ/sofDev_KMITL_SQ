<template>
  <div class="container links">
    <v-container>
      <v-btn
        color="warning"
        dark
        href="/users/LogIn"
        align="center"
        elevation="2"
        large
      >
        Login
      </v-btn>

       <div class="my-2">
            <v-btn
              class="btn btn-warning"
            >
              Extra small Button
            </v-btn>
          </div>
<div>



</div>
      <v-btn
        color="success"
        dark
        href="/home"
        align="center"
        elevation="2"
        large
      >
        Home
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

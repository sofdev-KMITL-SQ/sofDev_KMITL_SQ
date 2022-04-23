<template lang="html">
<div class="center">
  <h1 style="color:rgb(243, 95, 16)">Reset Password</h1>
 <nuxt-link button @click="" to ="/users/Newpass"class="nextBt"><h3 style="color:white">Next</h3></button></nuxt-link>
    <v-text-field v-model="email" label="Email" ></v-text-field> 


</style>

  </div>
</template>

 
<script>
export default {
   layout:"Hbar",
  data() {
    return {
      email: '',
      password: '',
      Newpassword: ''

    }
  },
  methods: {
   
  }
    
}
</script>

<style lang="css" scoped></style>
<style>
.center {
  margin: 173px auto;
  width: 60%;
  border: 4px solid rgb(243, 95, 16);
  padding: 30px;
  padding-top: 50px;
  padding-bottom: 100px;

}
  .nextBt {
      margin: 0;
      position: absolute;
      top: 470px;
      left: 50%;
      width: 50%;
      padding: 7px 15px;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%); 
      background-color: rgb(243, 95, 16); 
    }

</style>



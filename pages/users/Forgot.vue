<template lang="html">
<div class="center">
  <form action="/users/Newpass">
  <h1 style="color:rgb(243, 95, 16)">Reset Password</h1>
 <button type="submit" value="Submit" class="nextBt"><h3 style="color:white">Next</h3></button>
    <v-text-field v-model="Email" label="Email" placeholder="ex: 6x0xxxxx@kmitl.ac.th" type="text" pattern="[6]{1}[0-4]{1}[0]{1}[1-9]{1}[0-9]{4}@kmitl\.ac\.th" required></v-text-field> 
</form>


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



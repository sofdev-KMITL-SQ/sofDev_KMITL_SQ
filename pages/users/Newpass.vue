<template lang="html">
<div class="center">
   <form action="/users/Login">
  <h1 style="color:rgb(243, 95, 16)">Reset Password</h1>
  <h1 >User :</h1>
 <button type="submit" value="Submit" class="cancelbtn"><h3 style="color:white">Change Password</h3></button>
 <v-text-field v-model="password" label="Password" type="text" placeholder="Between 8 -  20 Characters" id="password" minlength="8" maxlength="20" required><br><br></v-text-field>
 <v-text-field v-model="comfirm_password" label="Comfirm password" type="text" id="Cpassword"minlength="8" maxlength="20" pattern=".{8,}" required><br><br></v-text-field>
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
      text-align: center;

}
  .cancelbtn {
      margin: 0;
      position: absolute;
      text-align: center;
      top: 370px;
      left: 50%;
      width: 50%;
      padding: 7px 15px;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      background-color: rgb(243, 95, 16); 
    }

</style>



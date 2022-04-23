<template lang="html">
<div class="center">
 <button v-if="stateForgot==0"@click="updateState()" class="cancelbtn"><h3 style="color:white">{{buttonName[stateForgot]}}</h3></button>
  <nuxt-link button v-else-if="stateForgot==1"@click="updateState()" to ="/users/Login"class="cancelbtn"><h3 style="color:white">{{buttonName[stateForgot]}}</h3></button></nuxt-link>
    <v-text-field v-if = "stateForgot==0" v-model="email" label="Email"></v-text-field>
    <v-text-field v-else-if = "stateForgot==1" v-model=" Newpassword" label="New Password" ></v-text-field>

  


</style>
<div class="box Hw"><h1 style="color:rgb(243, 95, 16)">Reset Password</h1></div>
  </div>
</template>

 
<script>
export default {
   layout:"Hbar",
  data() {
    return {
      email: '',
      password: '',
      Newpassword: '',
      stateForgot: 0,
     
      buttonName: ['Next','Change Password']

    }
  },
  methods: {
   updateState(){
     this.stateForgot++
     this.stateForgot%=2
   }
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
  padding-top: 100px;
  padding-bottom: 100px;

}
  .cancelbtn {

      margin: 0;
      text-align: center;
    position: absolute;
      top: 500px;
      left: 50%;
      width: 50%;
      padding: 7px 15px;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      background-color: rgb(243, 95, 16); 
    }
  .box {
    text-align: center;
    position: absolute;
     margin: -254px -34px;
     width: 60%;
    border-right: 4px solid rgb(243, 95, 16);
    border-left :4px solid rgb(243, 95, 16);
     border-top :4px solid rgb(243, 95, 16);
     border-bottom-color: 4px solid rgb(255, 255, 255);
     padding: 30px;
     padding-top: 30px;
     padding-bottom: 30px;

    }
    .Hw {
        background-color: rgb(255, 255, 255);
        position: absolute;
    }

</style>



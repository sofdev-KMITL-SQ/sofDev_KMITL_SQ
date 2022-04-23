<template lang="html">
<div class="center">
  <button type="button" class="cancelbtn"><h3 style="color:white">Login</h3></button>
    <v-text-field v-model="email" label="Email"></v-text-field>
    <v-text-field
      v-model="password"
      label="Password"
      type="password"
    ></v-text-field>
    <!-- <v-btn  @click="handleLoginClicked"> Login</v-btn> -->
 




<span class="psw">Forgot <a href="/users/Forgot">password</a></span>
<span class="Text1">Frist time at KMITL square </span>
<span class="Regis"> <a href="/users/Regis">Resgister here</a></span>
<div class="box Hog"><h1 style="color:white">Login</h1></div>

  </div>



</template>


<script>
export default {
 layout:"Hbar",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleLoginClicked() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: { user: { email: this.email, password: this.password } }
        })
        console.log(response)
        if (response.data.success) {
          this.$router.replace({ name: 'blogs' })
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="css" scoped></style>



<style>
.center {
  margin: 100px auto;
  width: 60%;
  border: 4px solid rgb(243, 95, 16);
  padding: 30px;
  padding-top: 100px;
  padding-bottom: 200px;

}

  .cancelbtn {

      margin: 0;
      position: absolute;
      top: 600px;
      left: 50%;
      width: 50%;
      padding: 7px 15px;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%); 
      background-color: rgb(243, 95, 16); 
    }
  span.psw {
      position: absolute;
      top: 410px;
      right: 22%;
      }

   span.Text1 {
      position: absolute;
      top: 500px;
      right: 22%
      }    


 span.Regis {
      position: absolute;
      top: 520px;
      right: 22%
      } 
  .box {
    text-align: center;
    position: absolute;
     margin: -254px -34px;
     width: 60%;
     border: 4px solid rgb(243, 95, 16);
     padding: 30px;
     padding-top: 30px;
     padding-bottom: 30px;

    }
    .Hog {
        background-color: rgb(243, 95, 16);
        position: absolute;
    }

</style>







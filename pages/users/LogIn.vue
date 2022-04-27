<template lang="html">
<div class="center">
   <!-- {{res.token}} -->
<form @submit.prevent="createPost">
<button type="submit"  value="Submit" class="cancelbtn" ><h3 style="color:white">Login</h3></button>
  <v-text-field v-model="formData.userEmail" label="Email" placeholder="ex: 6x0xxxxx@kmitl.ac.th" type="text" pattern="[6]{1}[0-4]{1}[0]{1}[1-9]{1}[0-9]{4}@kmitl\.ac\.th" required></v-text-field>
 <v-text-field v-model="formData.userPassword" label="Password" type="password" placeholder="Between 4 -  10 Characters" id="password" minlength="4" maxlength="10" required><br><br></v-text-field>
 
<div class="box Hog" ><h1 style="color:white">Login</h1></div>
<!-- <v-if "{{res.token}} =! {{null}}" ><h1>Hello {{res.token}}</h1></v-if>
<v-else><h1>Haha</h1></v-else> -->
 </form>


<span class="psw">Forgot <a href="/users/Forgot">password</a></span>
<span class="Text1">Frist time at KMITL square </span>
<span class="Regis"> <a href="/users/Regis">Resgister here</a></span>

   <!-- <h1>Hello {{pass}}</h1>  -->

  </div>



</template>

<script>
import axios from 'axios'
export default {
  layout: "Hbar" ,
  name: 'CreatePost',
  data() {
    return {
      res:{},
       pass:{},
      // token: "",
      // id: "",
      // email: "",
      formData: {
        userEmail: '',
        userPassword: '',
        // body: '',
      },
    }
  },
  methods: {
     createPost() {
   
       axios
        .post('http://localhost:3300/api/user/login', this.formData)
        //  .get('http://localhost:3300/api/user/me', config)
        .then((response) => {
          console.log(response)
          localStorage.setItem('user', JSON.stringify(response.data))
          // this.token = response.data.token
          // this.id = response.data.userID
          // this.email = response.data.userEmail
           this.res = response.data
           this.pass =JSON.parse(window.localStorage.getItem('user'));
          //  const user = JSON.parse(localStorage.getItem('user'))
          //  var Ldata = window.localStorage.getItem("user");
           window.location.href = "../Home"
        })
        .catch((error) => {
          console.log(error)
        })
    },
    },
  }
  // modules.exports = Ldata
</script>

<style scoped>
</style>

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
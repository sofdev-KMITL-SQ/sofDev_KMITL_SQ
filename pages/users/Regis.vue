
<template lang="html">
<div class="Box1">
  <!-- <form action="/action_page.php">
   <v-text-field v-model="email" label="Email"></v-text-field>
    <v-text-field v-model="password" label="Password" ></v-text-field>
    <v-text-field v-model="comfirm_password" label="Comfirm Password" ></v-text-field>
    <v-text-field v-model="name" label="Name" ></v-text-field>
    <v-text-field v-model="surname" label="Surname" ></v-text-field>
    <v-text-field v-model="phone_num" label="Telephone number"></v-text-field>
    <v-text-field v-model="address" label="Address" ></v-text-field>

</form> -->
<!-- [6]{1}[0-4]{1}[0]{1}[1-9]{1}[0-9]{4} -->
<form action="/action_page.php">
   <v-text-field v-model="Email" label="Email" type="text" pattern="[6]{1}[0-4]{1}[0]{1}[1-9]{1}[0-9]{4}@(kmitl|KMITL)\.(ac|AC)\.(th|TH)" required></v-text-field>
 <v-text-field v-model="password" label="Password" type="password" id="password" minlength="8" maxlength="20" required><br><br></v-text-field>
 <v-text-field v-model="comfirm_password" label="Comfirm Password" type="password" id="Cpassword"minlength="8" maxlength="20" pattern=".{8,}" required><br><br></v-text-field>
<v-text-field v-model="name" label="Name" type="text" id="username" minlength="2" maxlength="20" required><br><br></v-text-field>
 <v-text-field v-model="surname" label="Surname" type="text" id="usersurname" minlength="2" maxlength="20" required><br><br> </v-text-field>
    <v-text-field v-model="phone_num" label="Telephone number" type="tel" id="phone" maxlength="10" pattern="[0]{1}[0-9]{9}" required><br><br> </v-text-field>
    <v-text-field v-model="address" label="Address" ></v-text-field>

  <input type="submit" value="Submit">
</form>

<div class="Box2">
   <v-text-field v-model="about" label="About me"></v-text-field>
  <v-text-field v-model="interest" label="Interesting in..."></v-text-field>
<!-- <form action="/action_page.php">
  <input type="file" id="myFile" name="filename">
  <input type="submit">
</form> -->
<input type="file" @change="onFileSelected">
<button>Upload</button>

   </div></div>
   
</template>



<script>
// import axios from 'axios';
export default {
 layout:"Hbar",
 data() {
   return{
     email: '',
     password: '',
     comfirm_password: '',
     name: '',
     surname: '',
     phone_num: '',
     address: '',
     about: '',
     interest: '',
     selectedFile : null
   }
 },
methods: {
  onFileSelected(event){
    console.log(event)
  // this.selectedFile = event.target.files[0]
  },
  // onUpload(){
  //   const fd = new FormData();
  //   fd.append('image',this.selectedFile,this.selectedFile.name)
  //   axios.post('https://github.com/Phattylll/test-repo.git')
  //   .then(res =>{
  //     console.log(res)
  //   })

  // }
}
}


</script>

<style lang="css" scoped></style>



<style>
.Box1 {

  margin-top: 70px;
  margin-left:50px;
  width: 30%;
  border: 4px solid rgb(243, 95, 16);
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 30px;
  background-color: rgba(50, 134, 194, 0.626);
}
  
  .Box2 {
  position: absolute;
  margin-top: -504px;
  right: 30px;
  width: 50%;
  border: 4px solid rgb(243, 95, 16);
  padding: 20px;
  padding-top: 350px;
  padding-bottom: 40px;
  background-color: rgba(50, 134, 194, 0.626);
}




</style>










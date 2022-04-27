<template lang="html">
 <form @submit.prevent="createPost" class ="from-horizontal" enctype ="multipart/form-data" >
 <!-- <form @submit.prevent="createPost" > -->
  <div class="Box1">
     <v-text-field
        v-model="formData.userName"
        label="Name"
        type="text"
        placeholder="Between 2 -20 Thai Characters"
        id="username"
        oninput="this.value=this.value.replace(/[^ก-ฮะ-ํ\s]/g,'');"
        minlength="2 "
        maxlength="20"
        required
        ><br /><br
      /></v-text-field>
      <v-text-field
        v-model="formData.userSurename"
        label="Surname"
        type="text"
        placeholder="Between 2 - 20 Thai Characters"
        id="usersurname"
        oninput="this.value=this.value.replace(/[^ก-ฮะ-ํ\s]/g,'');"
        minlength="2"
        maxlength="20"
        required
        ><br /><br />
      </v-text-field>
      <!-- <v-text-field v-model="Email" label="Email" placeholder="ex: 6x0xxxxx" type="text" pattern="[6]{1}[0-4]{1}[0]{1}[1-9]{1}[0-9]{4}@(kmitl|KMITL)\.(ac|AC)\.(th|TH)" required></v-text-field> -->
      <v-text-field
        v-model="formData.userEmail"
        label="Email"
        placeholder="ex: 6x0xxxxx@kmitl.ac.th"
        type="text"
        pattern="[6]{1}[0-4]{1}[0]{1}[1-9]{1}[0-9]{4}@kmitl\.ac\.th"
        required
      ></v-text-field>
      <v-text-field
        v-model="formData.userPassword"
        label="Password"
        type="text"
        placeholder="Between 4 -  10 Characters"
        id="password"
        minlength="4"
        maxlength="10"
        required
        ><br /><br
      /></v-text-field>
          <v-text-field
        v-model="CPassword"
        label="Comfirm Password"
        type="password"
        placeholder="Between 4 -  10 Characters"
        id="password"
        minlength="4"
        maxlength="10"
        required
        ><br /><br
      /></v-text-field>
        <v-text-field
        v-model="formData.userAddress"
        label="Address"
        type="text"
        id="Address"
        maxlength="100"
        required
        ><br /><br />
      </v-text-field>
    
    
    
      <!-- <v-text-field v-model="address" label="Address" type="text"></v-text-field> -->
 
   

    <div class="Box2">
      <v-text-field v-model="formData.userDescription" label="About me"></v-text-field>
      <v-text-field v-model="formData.userInterest" label="Interesting in..."></v-text-field>
<!-- 
   <input
  type="file"
  accept="image/jpeg/*"
  name="userProfilePic"
  @change="uploadImage()"
/> -->

 <!-- <input type="file" class = "form control" name="formData.userProfilePic"/>  -->
 <!-- <v-file-input
    :rules="userProfilePic"
    accept="image/jpeg"
    placeholder="Pick an avatar"
    prepend-icon="mdi-camera"
    label="Avatar"
    @change="uploadImage()"
  ></v-file-input> -->

    <button type="submit" value="Submit" class="subBT">
          <h3 style="color: white">Submit</h3>
        </button>
      <!-- <button>Upload</button> -->
      
    </div>
     <v-text-field
        v-model="formData.userTel"
        label="Telephone number"
        placeholder="ex: 0xxxxxxxxx"
        type="text"
        id="phone"
        minlength="9"
        maxlength="10"
        pattern="[0]{1}[0-9]{8-9}"
        required
        ><br /><br />  </v-text-field>

         
  </div>
      
  </form>
</template>

<script>
import axios from 'axios';
export default {
  layout: "Hbar",
  name: 'createPost',
  name: 'uploadImage',
  data() {
     
    return {
   
     res:{},
       pass:{},
      Cpassword:'',
      formData: {
        userName:'',
        userSurename:'',
        userEmail:'',
        userPassword:'',
        userAddress:'',
        // userProfilePic:'',
        userDescription:'',
        userInterest:'',
        userTel:''
      },
      
    }
  },
  methods: {

   uploadImage() {
  const file = document.querySelector('input[type=file]').files[0]
  const reader = new FileReader()

  const rawImg = reader.readAsDataURL(file)
  console.log(file)
  console.log(rawImg) 
},
     createPost() {
   
       axios
        .post('http://localhost:3300/api/user/register', this.formData)
   
        .then((response) => {
          console.log(response)
          localStorage.setItem('Regit', JSON.stringify(response.data))
          // this.token = response.data.token
          // this.id = response.data.userID
          // this.email = response.data.userEmail
           this.res = response.data.create

           this.pass =JSON.parse(window.localStorage.getItem('Regit'));
          //  const user = JSON.parse(localStorage.getItem('user'))
          //  var Ldata = window.localStorage.getItem("user");
          window.location.href = "../users/profile"


        })
        .catch((error) => {
          console.log(error)
        })
    },
       
    },
    
    }

    // onUpload(){
    //   const fd = new FormData();
    //   fd.append('image',this.selectedFile,this.selectedFile.name)
    //   axios.post('https://github.com/Phattylll/test-repo.git')
    //   .then(res =>{
    //     console.log(res)
    //   })

    // }

</script>

<style lang="css" scoped></style>

<style>
.Box1 {
  margin-top: 70px;
  margin-left: 50px;
  width: 30%;
  border: 4px solid rgb(243, 95, 16);
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 30px;
  background-color: rgba(99, 99, 100, 0.478);
}

.Box2 {
  position: absolute;
  margin-top: -434px;
  right: 30px;
  width: 50%;
  border: 4px solid rgb(243, 95, 16);
  padding: 20px;
  padding-top: 55px;
  padding-bottom: 309px;
  background-color: rgba(99, 99, 100, 0.478);
}

.subBT {
  margin: 0;
  position: absolute;
  bottom: 3%;
  left: 50%;
  width: 50%;
  padding: 7px 15px;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: rgb(243, 95, 16);

}
</style>

<template lang="html">
   <div style="background-color: white"> 
    <div class="Box1">
      <form action="/action_page.php">
        <!-- <v-text-field v-model="Email" label="Email" placeholder="ex: 6x0xxxxx" type="text" pattern="[6]{1}[0-4]{1}[0]{1}[1-9]{1}[0-9]{4}@(kmitl|KMITL)\.(ac|AC)\.(th|TH)" required></v-text-field> -->
        <!-- <v-text-field
          v-model="Email"
          label="Email"
          placeholder="ex: 6x0xxxxx@kmitl.ac.th"
          type="text"
          pattern="[6]{1}[0-4]{1}[0]{1}[1-9]{1}[0-9]{4}@kmitl\.ac\.th"
          required
        ></v-text-field> -->
         <v-text-field
         v-model="Email"
         label="Email"
         readonly><br><br>
        ></v-text-field>

         <v-text-field
         v-model="name"
         label="Name"
         readonly><br><br>
        ></v-text-field>

         <v-text-field
         v-model="surname"
         label="Surame"
         readonly><br><br>
        ></v-text-field>
        <!-- <v-text-field
          v-model="password"
          label="Password"
          type="text"
          placeholder="Between 8 -  20 Characters"
          id="password"
          minlength="8"
          maxlength="20"
          required
          ><br /><br
        /></v-text-field>
        <v-text-field
          v-model="comfirm_password"
          label="Comfirm text"
          type="password"
          id="Cpassword"
          minlength="8"
          maxlength="20"
          pattern=".{8,}"
          required
          ><br /><br
        /></v-text-field>
        <v-text-field
          v-model="name"
          label="Name"
          type="text"
          placeholder="Between 2 -20 Characters"
          id="username"
          minlength="2"
          maxlength="20"
          required
          ><br /><br
        /></v-text-field>
        <v-text-field
          v-model="surname"
          label="Surname"
          type="text"
          placeholder="Between 2 - 20 Characters"
          id="usersurname"
          minlength="2"
          maxlength="20"
          required
          ><br /><br />
        </v-text-field>
        <v-text-field
          v-model="phone_num"
          label="Telephone number"
          placeholder="ex: 0xxxxxxxxx"
          type="text"
          id="phone"
          @input="up"
          maxlength="10"
          pattern="[0]{1}[0-9]{9}"
          required
          ><br /><br />
        </v-text-field> -->
        <!-- <v-text-field v-model="address" label="Address" type="text"></v-text-field> -->
        <!-- <button type="submit" value="Submit" class="subBT"><h3 style="color:white">Submit</h3></button> -->
      </form>

      <div class="Box2">
        <button type="submit" value="Submit" class="editBT">
          <h3 style="color: white">Edit</h3>
        </button>
        <button type="submit" value="Submit" class="CBT">
          <h3 style="color: white">Create Shop</h3>
        </button>
        <v-text-field v-model="about" label="About me"></v-text-field>
        <v-text-field
          v-model="interest"
          label="Interesting in..."
        ></v-text-field>

        <input type="file" @change="onFileSelected" />
        <button>Upload</button>
      </div>
    </div>
  </div> 
</template>

<script>
// import axios from 'axios';
export default {
  layout: "LayoutProfile",
  data() {
    return {
      Email: "",
      password: "",
      comfirm_password: "",
      name: "",
      surname: "",
      phone_num: "",
      address: "",
      about: "",
      interest: "",
      selectedFile: null,
    };
  },
  methods: {
    onFileSelected(event) {
      console.log(event);
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
  },
};
</script>

<style lang="css" scoped></style>

<style>
.Box1 {
  margin-top: 150px;
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
  margin-top: -435px;
  right: 30px;
  width: 50%;
  border: 4px solid rgb(243, 95, 16);
  padding: 20px;
  padding-top: 108px;
  padding-bottom: 165px;
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
.editBT {
  margin: 0px;
  position: absolute;
  bottom: 15%;
  left: 50%;
  width: 50%;
  padding: 7px 15px;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: rgb(243, 95, 16);
}

.CBT {
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

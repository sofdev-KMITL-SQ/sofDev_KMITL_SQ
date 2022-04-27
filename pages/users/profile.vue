<template lang="html">
  <div style="background-color: white">
    <div class="Box1">
      <!-- <span class="pic">
<v-img
  max-height="20%"
  max-width="30%"
  src="https://picsum.photos/id/11/500/300"
></v-img>

      </span> -->

      <!-- <h1>Hello {{pass.token}}</h1> -->

      <H1>สวัสดีคุณ {{ pass.userName }} {{ pass.userSurename }}</H1>
      <H3>Email : {{ pass.userEmail }}</H3>
      <H3>Tel. : {{ pass.userTel }}</H3>
<H3>Interesting in... : {{ pass.userInterest }}</H3>
      <div class="Box2">
        <form action="/users/EditUser">
        <button type="submit" value="Submit" class="editBT">
          <h3 style="color: white">Edit</h3>
        </button>
        </form>
        <form action="https://youtu.be/MLXXQx1UK8o">
        <button type="submit" value="Submit" class="shopBT">
          <h3 style="color: white">My Shop</h3>
        </button>
         </form>
           <form action="/users/Order">
        <button type="submit" value="Submit" class="orderBT">
          <h3 style="color: white">My Order</h3>
        </button>
         </form>
           <form action="/users/RegisShop">
        <button type="submit" value="Submit" class="CshopBT">
          <h3 style="color: white">Create Shop</h3>
        </button>
         </form>
        <h1>Address : {{ pass.userAddress }}</h1>
        <h1>Description : {{ pass.userDescription }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

// import {Ldata} from 'Logln'
// function getdata(){
// const user = JSON.parse(localStorage.getItem('user'))
// return user
//   }
// localStorage.setItem('test', {'data' : 'data'})
export default {
  layout: "LayoutProfile",
  name: "Pass",
  data() {
    return {
      res: {},
      pass: {},
      // Email: "",
      // password: "",
      // comfirm_password: "",
      // name: "",
      // surname: "",
      // phone_num: "",
      // address: "",
      // about: "",
      // interest: "",
      // selectedFile: null,
    };
  },
  methods: {},

  mounted() {
    console.log("response");
    if (localStorage.getItem("Regit"))
      this.pass = JSON.parse(localStorage.getItem("Regit"));
  },
};

// onFileSelected(event) {
//   console.log(event);

// this.selectedFile = event.target.files[0]
// },
// onUpload(){
//   const fd = new FormData();
//   fd.append('image',this.selectedFile,this.selectedFile.name)
//   axios.post('https://github.com/Phattylll/test-repo.git')
//   .then(res =>{
//     console.log(res)
//   })

// }
</script>
<style scoped></style>

<style lang="css" scoped></style>

<style>
.Box1 {
  margin-top: 160px;
  margin-left: 50px;
  width: 35%;
  border: 4px solid rgb(243, 95, 16);
  padding: 20px;
  padding-top: 240px;
  padding-bottom: 35px;
  background-color: rgba(99, 99, 100, 0.478);
}

.Box2 {
  position: absolute;
  margin-top: -347px;
  right: 30px;
  width: 50%;
  border: 4px solid rgb(243, 95, 16);
  padding: 20px;
  padding-top: 60px;
  padding-bottom: 285px;
  background-color: rgba(99, 99, 100, 0.478);
}

/* span.pic {
      position: absolute;
      margin-top: -100px;
      margin-left: 0%;
      } */
.CshopBT {
  margin: 0;
  position: absolute;
  bottom: 13%;
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
  bottom: 33%;
  left: 50%;
  width: 50%;
  padding: 7px 15px;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: rgb(243, 95, 16);
}
.orderBT {
  margin: 0px;
  position: absolute;
  bottom: 23%;
  left: 50%;
  width: 50%;
  padding: 7px 15px;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: rgb(243, 95, 16);
}

.shopBT {
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

<template>
  <div>
    <form @submit.prevent="createPost">
      <div>
        <label for="userEmail">Post User ID</label>
        <input type="text" id="userEmail" v-model="formData.userEmail" />
      </div>
      <div>
        <label for="userPassword">Post Title</label>
        <input type="text" id="userPassword" v-model="formData.userPassword" />
      </div>
      <!-- <div>
        <label for="body">Post Body</label>
        <input type="text" id="userSurname" v-model="formData.body" />
      </div> -->
      <button>Create Post</button>
    <h1>Hello {{res.token}}</h1> 
     <h1>Hello {{res.userID}}</h1> 
     <h1>Hello {{res.userEmail}}</h1> 

<!-- <h1>Hello {{id}}</h1> 
<h1>Hello {{email}}</h1>  -->

    </form>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CreatePost',
  data() {
    return {
      res:{},
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

        })
        .catch((error) => {
          console.log(error)
        })
    },
    },

  }


</script>

<style scoped>
</style>
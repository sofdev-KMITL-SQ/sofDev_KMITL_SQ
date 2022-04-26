
<template>
<div><h1>Hello {{res.token}}</h1> 
     <h1>Hello {{res.userID}}</h1> 
     <h1>Hello {{res.userEmail}}</h1> </div>
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
}


</script>

<style scoped>
</style>
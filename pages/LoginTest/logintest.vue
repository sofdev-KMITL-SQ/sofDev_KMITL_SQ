
<template>
<div><h1>Hello</h1>  </div>
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
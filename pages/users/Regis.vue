

<template lang="html">
<div class="Box2"></div>





</template>



<script>
export default {
  layout: 'session',
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
.Box1 {
  margin-top: 70px;
  margin-left: 30px;
  width: 30%;
  border: 4px solid rgb(243, 95, 16);
  padding: 30px;
  padding-top: 100px;
  padding-bottom: 400px;

}

.Box2 {
  margin-top: 70px;
  margin-left: 48%;
  width: 50%;
  border: 4px solid rgb(243, 95, 16);
  padding: 30px;
  padding-top: 100px;
  padding-bottom: 400px;

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




<script>
export default {
    layout:"Hbar"
}


</script>


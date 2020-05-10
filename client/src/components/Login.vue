<template>
 <div class="border p-5 container d-flex bg-dark text-white justify-content-center mt-5 " style="border-radius:15px;">   
    <b-form v-if="!isLogin">
        <h1>Login</h1>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="emailLog"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="type-password"
          type="password"
          v-model="passwordLog"
          required
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-column ">
      <b-button type="submit" @click.prevent="loginClient" variant="primary" class="mt-2">Login</b-button>
      <!-- <b-button type="submit" @click.prevent="loginClient" variant="primary" class="mt-2"><img src="https://img.icons8.com/cute-clipart/2x/google-logo.png" alt="" srcset=""> G-Login</b-button> -->
          <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" style="margin-top: 10px;"></GoogleLogin>
        </div>
      <span>-OR-</span>
      <b-button type="button" @click.prevent="showRegister" variant="danger" style="height:50px;">Register</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'
import GoogleLogin from 'vue-google-login';


  export default {
    name: 'LoginPage',
    components: {
      GoogleLogin,
    },
    data() {
      return {
          url: 'http://localhost:3000',
          emailLog: '',
          passwordLog: '',
          isLogin: false,
          token: '',
          params:{
                  client_id: "919771096270-2pakq0h6fhnmpr6ctvgni9h1f39dckb7.apps.googleusercontent.com"
                 },
          // only needed if you want to render the button with the google ui
          renderParams: {
              width: 100,
              height: 30,
          }
        }
    },
    methods: {
      onSuccess(googleUser) {
          var id_token = googleUser.getAuthResponse().id_token;
          this.$axios({
            method: "POST",
            url: '/users/googleLogin',
            data: {
              id_token
            }
          })
          .then(({data}) => {
          this.emailLog=""
          this.passwordLog=""
          this.isLogin = true
          localStorage.setItem('token', data)
          this.$emit('changeIsLogin', true)
          const Toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          })
          .catch(({response})=>{
          if (response) {
            this.$swal.fire({ title: `${response.data.msg}`, icon:'error'})
          }
          })
            // This only gets the user information: id, name, imageUrl and email
        },
        
      loginClient() {

        this.$axios({
          url: '/users/login',
          method:'POST',
          data: {
            email: this.emailLog,
            password: this.passwordLog
          }
        })
        .then(({data}) => {
          this.emailLog=""
          this.passwordLog=""
          this.isLogin = true
          localStorage.setItem('token', data)
          this.$emit('changeIsLogin', true)
          const Toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
        })
        .catch(({response}) => {
        if (response) {
          this.$swal.fire({ title: `${response.data.msg}`, icon:'error'})
          }
        })
      },
      
      showRegister(){        
        this.$emit('showRegisterPage', false)
      }

    }
  }
</script>

<style scoped>

b-button{
  height: 25%;
  width: 10%;
}
img{
  width: 15%;
}

</style>
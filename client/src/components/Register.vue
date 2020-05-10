<template>
  <div class="border p-5 container d-flex bg-dark text-white justify-content-center mt-5 w-25" style="border-radius:15px;">
    <b-form>

        <h1>Register</h1>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="emailReg"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Username:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="usernameReg"
          required
          placeholder="Enter Username"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="type-password"
          type="password"
          v-model="passwordReg"
          required
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>

      <div class="d-flex justify-content-between">
      <b-button type="submit" variant="primary" @click.prevent='registerClient'>Register</b-button>
      <span>-OR-</span>
      <b-button type="button" @click.prevent="showRegister" variant="danger">Login</b-button>
      </div>
    </b-form>
  </div>

</template>

<script>
  export default {
    name: 'RegisterPage',
    data() {
      return {
          passwordReg: '',
          emailReg: '',
          usernameReg: ''
        }
    },
    methods: {
      registerClient() {
        this.$axios({
          url: '/users/register',
          method: 'POST',
          data: {
            password: this.passwordReg,
            username: this.usernameReg,
            email: this.emailReg
          }
          })
          .then(({data}) => {
            localStorage.setItem('token',data)
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
            let errors = ""
            response.data.forEach(el => {
              errors+= el + '\n'
            })
          if (response) {
            this.$swal.fire({ title: `${errors}`, icon:'error'})
          }
          })
      },

      showRegister(){
        this.$emit('showLoginPage', true)
      }
    }
  }
</script>
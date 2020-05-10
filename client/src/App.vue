<template>
<div>
  <Title v-if="!isLogin"></Title>
  <Navbar v-if="isLogin" v-on:logoutClient="logoutClient"></Navbar>
  <LoginPage v-if="showLogin && !isLogin" v-on:changeIsLogin="changeIsLogin" v-on:showRegisterPage="changeShowLogReg"></LoginPage>
  <RegisterPage v-if="!showLogin && !isLogin" v-on:changeIsLogin="changeIsLogin" v-on:showLoginPage="changeShowLogReg"></RegisterPage>
  <MainPage v-if="isLogin"></MainPage>
  </div>
</template>

<script>
import Title from './components/Title'
import Navbar from './components/Navbar'
import LoginPage from './components/Login'
import RegisterPage from './components/Register'
import MainPage from './components/Mainpage'

export default {
  name: 'App',
  components: {
    Navbar,
    LoginPage,
    RegisterPage,
    MainPage,
    Title
  },
  beforeMount() {
    if (this.token){
      this.isLogin = true
      this.showLogin = false
    } else {
      this.isLogin = false
      this.showLogin = true
    }
  },
  data: ()=>{
    return {
      isLogin: false,
      showLogin: true,
      showRegister: false,
      token: localStorage.getItem('token')
    }
  },
  // watch: {
  //     token: function(){
  //       this.isLogin = true 
  //     },
  // },
  methods: {
    changeIsLogin(status){
      return this.isLogin = status
    },
    changeShowLogReg(status){
      return this.showLogin = status
    },
    logoutClient(){
      this.token=localStorage.removeItem('token')
      this.isLogin=false
    }
  }
}
</script>

<style >
 /* .bg {
  background-image: url('../assets/bg.svg');
  background-repeat: no-repeat;
  
} */
</style>

<template>
<div class="d-flex justify-content-center align-content-center">
<div class="d-flex-column align-content-center justify-content-center">
  <div>
  <h1>{{title}}</h1>
  </div>
</div>
</div>
</template>

<script>
export default {
name: 'Title',
data: ()=>{
  return{
    title: 'KanFun'
  }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');

h1 {
font-family: 'Pacifico', cursive;
}
</style>
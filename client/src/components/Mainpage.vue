<template>
<div class="mt-3">

      <editForm v-if="isEdit" v-on:setEditForm="setEditForm" :dataEdit="dataEdit" v-on:updateThis="updateThis"></editForm>
      <Categories :dataKanban="dataKanban" v-on:delete="deleteTask" v-on:reloadData="reload" v-on:dataUpdate="dataUpdate"></Categories>
 
</div>

</template>

<script>
import axios from 'axios';
import Categories from './Category';
import editForm from './editForm'

export default {
  name: 'MainPage',
  components: {
    Categories,
    editForm
  },
  data: ()=>{
    return{
      url: 'http://localhost:3000',
      dataKanban: '',
      token: localStorage.getItem('token'),
      dataEdit: '',
      isEdit: false
    }
  },
  // watch: 
  methods: {
    getKanban: function(){
      axios({
        url: `${this.url}/categories`,
        method: 'GET',
        headers: {token: this.token}
      })
      .then(data => {
        this.dataKanban = data.data
      })
      .catch(err => {
        console.log(err, 'err');
      })
    },
    dataUpdate(data){
      this.isEdit = true
      this.dataEdit = data
    },
    deleteTask(id){
      axios({
        url: this.url+'/kanbans/'+id,
        method: 'DELETE',
        headers: {token: this.token}
      })
      .then(data => {
        this.getKanban()
      })
      .catch(response => {
        console.log(response.data);
      })
    },
    reload(){
      this.getKanban()
    },
    setEditForm(){
      this.isEdit = !this.isEdit
    },
    updateThis(data){
      this.$axios({
        url: '/kanbans/'+data.id,
        headers:{token: localStorage.getItem('token')},
        method: 'PATCH',
        data: {
          name: data.name,
          CategoryId: data.CategoryId,
        }
      })
      .then(data =>{
        this.setEditForm()
        this.getKanban()
      })
      .catch(({response}) => {
        this.$swal.fire({ title: `${response.data}`, icon:'error'})
        this.getKanban()
      })
  },
  },
  created() {
    this.getKanban()
    // this.token = null
  },
  // mounted() {
  //   this.deleteTask()
  // }
}
</script>

<style>
.bagi4{
  width: 100%;
}
</style>
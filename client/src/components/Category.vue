<template>
<div class="d-flex justify-content-between container-fluid" >
<b-card-group class="p-0 col" v-for="kanban in dataKanban" :key="kanban.id">
    <div>
    <b-card
      header-tag="header"
      footer="Card Footer"
      footer-tag="footer"
      :header="kanban.title"
      style="width: 18em"
    >
      <b-card-text class="geser px-3" >
        <b-card  v-for="data in kanban.Kanbans" :key="data.id" class="my-2 p-2 content bagi4" bg-variant="dark" text-variant="white">
          <b-card-text class="text-justify">
            {{data.name}}
          </b-card-text>
          <b-button href="#" variant="primary" @click="editTask(data)">Edit</b-button>
          <b-button href="#" variant="danger" @click="deleteTask(data.id)">Delete</b-button>
        </b-card>
      </b-card-text>
      <TextArea :idAdd="kanban.id" v-on:textValueReciever="addData"></TextArea>
    </b-card>
    </div>
  </b-card-group>
</div>
</template>

<script>
import TextArea from './textarea'

export default {
  props: ["dataKanban"],
  components: {
    TextArea,
    },
  methods: {
    deleteTask(id){
      this.$emit('delete', id)
    },
    addData(data){
      let category = data.categoryId
      let text = data.text
      this.$axios({
        url: '/kanbans',
        method: 'POST',
        headers: {token: localStorage.getItem('token')},
        data: {
          name: text,
          CategoryId: category        
          }
      })
      .then(data => {
        this.$emit('reloadData')
        if (data) {
          this.$swal.fire({ title: `You've been added a new task`, icon:'success'})
          }
      })
      .catch(({response}) => {
        if (data) {
          this.$swal.fire({ title: response.data, icon:'error'})
          }
      })
    },
    editTask(data){
      this.$emit('dataUpdate', data)
    }
  },
  data: () => {
    return {
      addValue: '',
      isEdit: false
    }
  }
}
</script>

<style scoped>
.geser {
  overflow-y: auto;
  max-height: 550px;

  /* max-width: 1; */
}
.card-body{
  padding: 0%;
}
.card-footer{
  display: none;
}

</style>
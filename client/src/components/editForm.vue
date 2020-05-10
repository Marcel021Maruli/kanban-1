<template>
  <div class="border p-5 container bg-dark text-white justify-content-center mt-5 " style="border-radius:15px;">
    <b-form>
        <h1>Update Form!</h1>
      <b-form-group
        id="input-group-1"
        label="Edit Title:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-textarea
      id="textarea"
      placeholder="Enter something..."
      v-model="dataEdit.name"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <div>
          <b-form-select v-model="selected" :options="options" :select-size="4"></b-form-select>
          <div class="mt-3">Selected: </div>
          </div>
      </b-form-group>
      <b-button type="submit" variant="primary" @click.prevent="updateData">Update</b-button>
      <b-button type="submit" variant="danger" @click.prevent="closeForm">Cancel</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'editForm',
  props: ['dataEdit'],
  data() {
      return {
        // titleEdit: this.dataEdit.name,
        // dataEdit:{
        //   name:''
        // },
        selected: null,
        options: [
          { value: null, text: 'Please select an option', disabled:true },
          { value: 1, text: 'Backlog',},
          { value: 2, text: 'Todo' },
          { value: 3, text: 'Done' },
          { value: 4, text: 'Completed' },
        ],
        // dataName: dataEdit,
      }
    },
  methods: {
    updateData() {      
      this.$emit('updateThis', {id: this.dataEdit.id, CategoryId: this.selected, name: this.dataEdit.name})
    },
    closeForm() {
      this.$emit('setEditForm')
    }
  }
}
</script>

<style>

</style>
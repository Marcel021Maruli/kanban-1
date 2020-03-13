<template>
<div>
    <textarea v-model="textValue" class="ml-3" style="width: 250px;"></textarea>
    <b-button class="mb-3 ml-3" href="#" variant="primary" @click="sendValue">add</b-button>
</div>

</template>

<script>
export default {
  props:['idAdd'],
  data(){
    return {
      textValue: '',
      categoryId: this.idAdd
    }
  },
  methods: {
    sendValue(){
      this.$emit('textValueReciever', { text: this.textValue, categoryId: this.categoryId})
      this.textValue=''
    }
  }
}
</script>

<style>

</style>
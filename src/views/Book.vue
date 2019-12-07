<template>
  <div class="form">
    <form id="image-form">
      <img v-bind:src="imageDataUri">
      <input type="file" id="image" name="image" v-on:change="fetchBookInformation" required>
    </form>
    <p id="result">{{result}}</p>
  </div>
</template>

<script>
import axiosBase from 'axios';

const axios = axiosBase.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
export default {
  name: 'Book',
  data() {
    return {
      imageDataUri: '',
      result: '',
    };
  },
  methods: {
    async fetchBookInformation() {
      const form = document.getElementById('image-form');
      if (!form.checkValidity()) {
        this.result = '';
      }

      const file = document.getElementById('image').files[0];
      const reader = new FileReader();
      this.imageDataUri = reader.readAsDataURL(file);

      this.result = await axios.post('/books/image_search', new FormData(form))
        .then(value => JSON.stringify(value.data))
        .catch(_ => '');
    },
  },
};
</script>

<style scoped>

</style>

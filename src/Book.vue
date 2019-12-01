<template>
  <div class="form">
    <form id="image-form">
      <input type="file" name="image" required>
      <button type="button" v-on:click="fetchBookInformation">送信</button>
    </form>
    <p id="result"></p>
  </div>
</template>

<script>
    import axiosBase from 'axios';

    const axios = axiosBase.create({
        baseURL: 'http://localhost:8080',
    });
    export default {
        name: "Book",
        methods: {
            fetchBookInformation: function() {
                const form = document.getElementById('image-form');
                const resultEL = document.getElementById('result');
                if (!form.checkValidity()) {
                    resultEL.innerText = "";
                }
                return axios.post('/books/image_search', new FormData(form))
                    .then(value => resultEL.innerText = JSON.stringify(value.data))
                    .catch(reason => {
                        alert(reason);
                        resultEL.innerText =  "";
                    });
            }
        }
    }
</script>

<style scoped>

</style>

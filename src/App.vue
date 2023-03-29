<script >
import axios from 'axios';
import { store } from './store'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
    name: 'App',
    components: {
        AppHeader,
        AppMain
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getMovie() {
            console.log('prova')
            axios.get(store.config.movieApi, {
                params: {
                    api_key: store.config.apiKey,
                    query: store.config.query
                }
            })
                .then((response) => {
                    console.log(response.data.results);
                    store.movies.value = response.data.results
                })
        }
    }
}

</script>

<template>
    <div class="input-group mb-3">
        <input v-model="store.config.query" type="text" class="form-control" placeholder="Recipient's username"
            aria-label="Recipient's username" aria-describedby="basic-addon2">
        <div class="input-group-append">
            <button @click="getMovie" class="btn btn-outline-secondary" type="button">Button</button>
        </div>
    </div>
</template>

<style scoped></style>

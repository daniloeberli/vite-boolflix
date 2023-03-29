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
                    query: store.query
                }
            })
                .then((response) => {
                    console.log(response.data.results);
                    store.movies = response.data.results
                    console.log(store.movies.value)
                })
        }
    }
}

</script>

<template>
    <form @submit.prevent="getMovie">
        <input v-model="store.query" type="search" name="search-movie" id="search-movie">
        <button>Search</button>
    </form>
    <div v-for="movie in store.movies">
        <h3>{{ movie.title }}</h3>
        <ul>
            <li><span>Titolo:</span> {{ movie.title }}</li>
            <li><span>Titolo originale:</span>{{ movie.original_title }}</li>
            <li><span>Lingua:</span>{{ movie.original_language }}</li>
            <li><span>Valutazione media:</span>{{ movie.vote_average }}</li>
        </ul>
    </div>
</template>

<style scoped></style>

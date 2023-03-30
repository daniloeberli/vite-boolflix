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
        getContent() {
            console.log('prova')
            axios.get(store.config.movieApi, {
                params: {
                    api_key: store.config.apiKey,
                    query: store.query,
                    language: 'it-IT'
                }
            })
                .then((response) => {
                    //console.log(response.data.results);
                    store.movies = response.data.results;
                    //console.log(store.movies.value)
                })

            axios.get(store.config.tvApi, {
                params: {
                    api_key: store.config.apiKey,
                    query: store.query
                }
            })
                .then((response) => {
                    //console.log(response.data.results);
                    store.series = response.data.results;
                    //console.log(store.series.value)
                })

        }
    }
}

</script>

<template>
    <!--header app, ricerca film e serie tv-->
    <AppHeader @prova="getContent"></AppHeader>



    <h1>Film</h1>
    <div v-for="movie in store.movies">
        <h3>{{ movie.title }}</h3>
        <ul>
            <li><span>Titolo:</span> {{ movie.title }}</li>
            <li><span>Titolo originale:</span>{{ movie.original_title }}</li>
            <li><span>Lingua:</span>{{ movie.original_language }}</li>
            <li><span>Valutazione media:</span>{{ movie.vote_average }}</li>
        </ul>
    </div>
    <h1>Serie tv</h1>
    <div v-for="serie in store.series">
        <h3>{{ serie.name }}</h3>
        <ul>
            <li><span>Titolo:</span> {{ serie.name }}</li>
            <li><span>Titolo originale:</span>{{ serie.original_name }}</li>
            <li><span>Lingua:</span>{{ serie.original_language }}</li>
            <li><span>Valutazione media:</span>{{ serie.vote_average }}</li>
        </ul>
    </div>
</template>

<style scoped></style>

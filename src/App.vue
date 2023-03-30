<script >
import axios from 'axios';
import { store } from './store'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Card from './components/Card.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
        AppMain,
        Card
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getContent() {
            axios.get(store.config.movieApi, {
                params: {
                    api_key: store.config.apiKey,
                    query: store.query,
                    language: 'it-IT'
                }
            })
                .then((response) => {
                    store.movies = response.data.results;
                })

            axios.get(store.config.tvApi, {
                params: {
                    api_key: store.config.apiKey,
                    query: store.query
                }
            })
                .then((response) => {
                    store.series = response.data.results;
                })

        }
    }
}

</script>

<template>
    <!--header app, ricerca film e serie tv-->
    <AppHeader @search="getContent"></AppHeader>

    <AppMain></AppMain>
    
</template>

<style scoped></style>

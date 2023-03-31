import { reactive } from 'vue';

export const store = reactive({
    password: '',
    movies: [], // array di film
    series: [], // array di serie tv
    query: '', // variabile in cui registriamo la search query
    config: {
        //links ai due API per film e serie tv
        movieApi: 'https://api.themoviedb.org/3/search/movie',
        tvApi:'https://api.themoviedb.org/3/search/tv',
        apiKey: '5570b90b5634f8e44eda2aadea5cb2c8', //chiave specifica per ogni utente 
    }
})
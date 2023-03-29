import { reactive } from 'vue';

export const store = reactive({
    //apiURLMovie:'https://api.themoviedb.org/3/search/movie?api_key=5570b90b5634f8e44eda2aadea5cb2c8',
    movies: [],
    series: [],
    query: '',
    config: {
        movieApi: 'https://api.themoviedb.org/3/search/movie',
        apiKey: '5570b90b5634f8e44eda2aadea5cb2c8',
    }
})
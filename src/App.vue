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
            //metodo che riceve le info dall'API per i film e le serie tv
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
                .catch((error) => {
                    console.log(error);
                    this.store.movies = []

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
                .catch((error) => {
                    console.log(error);
                    this.store.series = []

                })
        },
        login() {
            if (store.password === '89') {
                return true
            } else {
                return false
            }
        }
    }
}

</script>

<template>
    <!-- PASSWORD: 89-->
    <div :class="{ active: login() }" class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-model="store.password" type="password" class="form-control" id="exampleInputPassword1"
            placeholder="Password">
    </div>
    <div v-show="login()" class="prova">
        <AppHeader @search="getContent"></AppHeader>
        <AppMain></AppMain>
    </div>
</template>

<style scoped>
.form-group {
    position: absolute;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.active {
    display: none;
}

label {
    visibility: hidden;
}
</style>

<script>
import { store } from '../store'
import Card from './Card.vue';

export default{
    name: 'Main',

    components:{
        Card
    },
    data(){
        return{
            store
        }
    }
}

</script>
<template>
    <h1>Film</h1>

    <div v-for="movie in store.movies">
        <Card :info="movie"></Card>
    </div>


    <h1>Serie tv</h1>

    <div v-for="serie in store.series">
        <Card :info="serie"></Card>
    </div>

</template>
<style lang="scss" scoped></style>
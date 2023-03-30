<script>
import { store } from '../store'
import Card from './Card.vue';

export default {
    name: 'Main',

    components: {
        Card
    },
    data() {
        return {
            store
        }
    }
}

</script>
<template>
    <!-- sezione film-->
    <section>
        <h1>Film trovati: <span>{{ this.store.movies.length }}</span> </h1>
        <div v-for="movie in store.movies">
            <Card :info="movie"></Card>
        </div>
    </section>

    <!--sezione serie tv-->
    <section>
        <h1>Serie tv trovate: <span>{{ this.store.series.length }}</span></h1>
        <div v-for="serie in store.series">
            <Card :info="serie"></Card>
        </div>
    </section>

    
</template>
<style lang="scss" scoped></style>
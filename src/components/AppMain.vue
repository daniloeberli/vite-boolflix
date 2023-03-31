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
    },
    computed: {
        results() {
            return [...this.store.movies, ...this.store.series]
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <!-- sezione film serie tv-->
            <h1 class="text-center" v-if="results.length == 0">Let's find something else!</h1>
            <h1 v-else='results.length > 0'>Content found: <span>{{ results.length }}</span> </h1>
            <section>
                <div class="row justify-content-between">
                    <Card class="col-12 col-lg-4" v-for="result in results" :info="result"></Card>
                </div>
            </section>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    h1 {
        color: white;
        padding: 20px 0;
    }
}
</style>
<script>
import {store} from "../store"
export default {
    name: 'Header',
    data(){
        return{
            store
        }
    }
}

</script>
<template>
    <form @submit.prevent="$emit('prova')">
        <input v-model="store.query" type="search" name="search-movie" id="search-movie">
        <button>Search</button>
    </form>
</template>
<style lang="scss" scoped></style>
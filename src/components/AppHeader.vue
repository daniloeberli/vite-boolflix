<script>
import { store } from "../store"
export default {
    name: 'Header',
    data() {
        return {
            store
        }
    }
}

</script>
<template>
    <header>
        <div class="container d-flex align-items-center">
            <div class="logo">
                <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="logo">
            </div>
            <form @keyup.prevent="$emit('search')" class="form-inline">
                <label class="sr-only d-none" for="inlineFormInputName2">Name</label>
                <input v-model="store.query" type="search" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2"
                    placeholder="Cerca nel catalogo">
            </form>
        </div>
    </header>
</template>
<style lang="scss" scoped>
header {
    background-color: #32393d;
    padding: 30px 0;
    .logo{
        padding-right: 15%;
    }
    img {
        max-width: 100px;
    }
    form{
        flex-grow: 1;
    }
}
</style>
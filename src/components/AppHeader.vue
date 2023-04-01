<script>
import { store } from "../store"
import Offcanvas from 'bootstrap/js/dist/offcanvas';
export default {
    name: 'Header',
    data() {
        return {
            store
        }
    },
    methods: {
        logOut() {
            window.close()
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
            <form @keyup.prevent="$emit('search')" class="form-inline d-flex">
                <label class="sr-only d-none" for="inlineFormInputName2">Name</label>
                <input v-model="store.query" type="search" class="form-control mr-sm-2" id="inlineFormInputName2"
                    placeholder="Cerca nel catalogo">
                <!--offcanvas bootstrap-->    
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">Assistenza e Logout</button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Hey there!!</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <button type="button" class="btn btn-info">
                            <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Assistenza</a>
                        </button>
                        <button @click="logOut" type="button" class="btn btn-danger">Logout</button>
                    </div>
                </div>   
                <!--/offcanvas bootstrap-->   
            </form>
        </div>
    </header>
</template>
<style lang="scss" scoped>
header {
    background-color: #32393d;
    padding: 30px 0;

    .logo {
        padding-right: 15%;
    }

    img {
        max-width: 100px;
    }

    form {
        flex-grow: 1;
    }

    a{
        color: white;
        text-decoration: none;
    }
}
</style>
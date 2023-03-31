<script>
import CountryFlag from 'vue-country-flag-next';

export default {
    name: 'Card',
    components: {
        CountryFlag
    },
    props: {
        info: Object
    },
    computed: {
        getVote() {
            // trasforma il voto dalla scala decimale a quella a 5 stelle
            return Math.ceil(this.info.vote_average / 2)
        },
        getTitle() {
            // implementazione logica a seconda che sia film o serie tv
            return this.info.title || this.info.name
        },
        getOriginalTitle() {
            // implementazione logica a seconda che sia film o serie tv
            return this.info.original_title || this.info.original_name
        },
        getLanguage() {
            //switch per i casi limite delle lingue
            switch (this.info.original_language) {
                case "en":
                    return 'gb';
                case 'he':
                    return 'il';
                case 'sv':
                    return 'se';
                case 'uk':
                    return 'ua';
                case 'zh':
                    return 'cn';
                case 'ko':
                    return 'kr';
                case 'ja':
                    return 'jp';
                case 'sr':
                    return 'rs'
                default:
                    return this.info.original_language

            }
        },
        getImage() {
            //metodo che ci restituisce la thumbnail, se non esiste mostra img placeholder
            if (this.info.poster_path === null) {
                return `https://picsum.photos/342/513`
            } else {
                return `https://image.tmdb.org/t/p/w342${this.info.poster_path}`
            }
        }
    }
}
</script>
<template>
    <article>
        <div class="card-img">
            <img class="img-fluid thumbnail" :src=getImage :alt=getOriginalTitle>
        </div>
        <ul class="card-text">
            <li><span>Titolo:</span> {{ getTitle }}</li>
            <li><span>Titolo originale:</span>{{ getOriginalTitle }}</li>
            <li><country-flag :country='getLanguage' size='small' /></li>
            <li><span>Valutazione media:</span>{{ getVote }}</li>
            <font-awesome-icon style="color:gold" icon="fa-solid fa-star" v-for="n in getVote" />
            <font-awesome-icon style="color:gold" icon="fa-regular fa-star" v-for="n in 5 - getVote" />
            <li class="overview"><span>Overview:</span>{{ this.info.overview }}</li>
        </ul>
    </article>
</template>


<style lang="scss" scoped>
article {
    background-color: transparent;
    max-width: 350px;
    margin: 40px 0;
}

article:hover .card-text {
    display: block;
}

article:hover .card-img {
    display: none;
}

.card-text {
    display: none;
}

.overview {
    max-height: 200px;
    overflow-y: auto;
}

li {
    color: white;
    font-weight: 300;

    span {
        font-size: 18px;
        font-weight: 500;
    }

    

}</style>
<script>
import CountryFlag from 'vue-country-flag-next';

export default {
    name: 'Card',
    components:{
        CountryFlag
    },
    props: {
        info: Object
    },
    computed:{
        getVote(){
            // trasforma il voto dalla scala decimale a quella a 5 stelle
            return Math.ceil(this.info.vote_average / 2)
        },
        getTitle(){
            // implementazione logica a seconda che sia film o serie tv
            return this.info.title ? this.info.title : this.info.name
        },
        getOriginalTitle(){
            // implementazione logica a seconda che sia film o serie tv
            return this.info.original_title ? this.info.original_title : this.info.original_name
        },
        getLanguage(){
            //switch per i casi limite delle lingue
            switch(this.info.original_language){
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
                    return 'jp'    
                default:
                    return this.info.original_language

            }
        }
    }
}
</script>
<template>
    <!-- struttura della card per film/serie tv-->
    <article>
        <ul>
            <li><span>Titolo:</span> {{ getTitle }}</li>
            <li><span>Titolo originale:</span>{{ getOriginalTitle }}</li>
            <li><country-flag :country='getLanguage' size='small'/></li>
            <li><span>Valutazione media:</span>{{ getVote }}</li>
            <font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote"/>
            <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getVote" />
        </ul>
    </article>
</template>


<style lang="scss" scoped></style>
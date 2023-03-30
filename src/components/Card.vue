<script>

export default {
    name: 'Card',
    components:{
        
    },
    props: {
        info: Object
    },
    computed:{
        getVote(){
            return Math.ceil(this.info.vote_average / 2)
        },
        getTitle(){
            return this.info.title ? this.info.title : this.info.name
        },
        getOriginalTitle(){
            return this.info.original_title ? this.info.original_title : this.info.original_name
        }
    }
}
</script>
<template>
    <article>
        <ul>
            <li><span>Titolo:</span> {{ getTitle }}</li>
            <li><span>Titolo originale:</span>{{ getOriginalTitle }}</li>
            <li><span>Lingua:</span>{{ info.original_language }}</li>
            <li><span>Valutazione media:</span>{{ getVote }}</li>
            <font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote"/>
            <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getVote" />
        </ul>
    </article>
</template>


<style lang="scss" scoped></style>
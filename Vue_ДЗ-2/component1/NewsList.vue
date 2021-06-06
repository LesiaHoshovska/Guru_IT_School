<template>
    <div>
        <div class="tittle">
            <a :href="blockNewsTittleSrc">{{ blockNewsTittle}}</a>
        </div>
        <div>
            <table>
                <tr v-for="news in blockNewsList" :key="news.id">
                    <td>{{news.time}}</td>
                    <td><a :href="news.newLink">{{news.newText}}</a>{{news.sourceText}}</td>
                </tr>
            </table>
        </div>
        <div class="allNews">
            <a :href="linkToAllNewsSrc">{{linkToAllNewsText}}</a>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'NewsList',
        props: {
            blockNewsTittle: {
                type: String,
                default: "News tittle"
            },
            blockNewsTittleSrc: {
                type: String,
                default: "https://www.ukr.net/news/sport.html"
            },
            blockNewsList:{
                type: Array,
                default: ()=>[]
            },
            linkToAllNewsText: {
                type: String,
                default: "No news"
            },
            linkToAllNewsSrc: {
                type: String,
                default: "linkToAllNewsSrc"
            }
        },
    }
</script>

<style lang="css" scoped>
.tittle{
    color: blue;
    text-align: left;
    margin-left: 50px;
}
table{
    text-align: left;
}
.allNews{
    text-align: right;
    color: blue;
}


</style>
<template>
    <div class="container">
        <div >
            <img id="banner" :src="bannerImgSrc" alt="Центр відновлення зору">
        </div>
        <div class="main">
            <div>
            <img id="mainImg" :src="mainImgSrc" alt="Відновлення зору">            
        </div>
        <div>
            <p>{{advText}}</p>
        </div>
        </div>
        


    </div>
</template>

<script>
    export default {
        name: "Advertisment1",
        props: {
            bannerImgSrc: {
                type: String,
                default: 'https://likarni.com/files/clinic_network/sovvy.png'
            },
            mainImgSrc: {
                type: String,
                default: 'https://wworld.com.ua/wp-content/uploads/2018/11/8066c57c70ed5a50948ec1dd338a35a0.jpg'
            },
            advText:{
                type: String,
                default: "No tittle"

            }

        },
    }
    
</script>

<style lang="css">
.main{
    display: inline-flex;
}
#banner{
    height: 20px;
    width: 40px;
    position: absolute;
    
}
#mainImg{
    height: 100px;
    width: 150px;
    padding: 10px;
}
.container{
    height: 115px;
    width: 320px;
    border: black 1px solid;
    
}

</style>
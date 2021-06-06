<template>
  <div class="container">
    <div >
      <img id="banner" :src="bannerSrc" alt="Banner" />
    </div>
    <div class="main">
      <div >
        <img id="img" :src="mainImgSrc" alt="Пончары" />
      </div>
      <div class="purchase">
          <div>
        <a :href="buyTicketLink"> Купить билет</a>
      </div>
      <div class="btn">
        <button><img class="btnImg" :src="btn1" /></button>
        <button><img class="btnImg" :src="btn2" /></button>
      </div>
      </div>
      
      <div>
        <a :href="advTextLink">{{ advText }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Advertisment2",
  props: {
    bannerSrc: {
      type: String,
      default: "No img",
    },
    mainImgSrc: {
      type: String,
      default: "No img",
    },
    buyTicketLink: {
      type: String,
      default: "https://vimeo.com/8736190",
    },
    btn1: {
      type: String,
      default:
        "http://s1.iconbird.com/ico/0912/ToolbarIcons/w256h2561346685452ArrowRight.png",
    },
    btn2: {
      type: String,
      default:
        "http://s1.iconbird.com/ico/0912/ToolbarIcons/w256h2561346685452ArrowLeft.png",
    },
    advTextLink: {
      type: String,
      default: "https://www.kinoafisha.info/reviews/8328559/",
    },
    advText: {
      type: String,
      default: "Пончары. Глобальное закругление",
    },
  },
};
</script>

<style lang="css" scoped>
.container{
    height: 115px;
    width: 320px;
    border: black 1px solid;
    
}
#banner{
    height: 15px;
    width: 15px;
}
#img{
    height: 100px;
    width: 175px;
}
.btnImg{
    height: 15px;
    width: 15px;
}
.btn{
    display: inline-flex;
}
.container{
    display: flex;
}
.purchase{
    display: inline-block;
}
</style>
<template>
  <div id="app">
    <currency-render
      v-for="(item, index) in currencyList"
      :key="index"
      :currency-name="item.currencyName"
      :currency-value="item.currencyValue"
    />
<br><br>
    <student-list :students-list="studentsList" />
    <br><br>
    <news-list
      v-for="item in newsList"
      :key="item.id"
      :blockNewsTittle="item.blockNewsTittle"
      :blockNewsTittleSrc="item.blockNewsTittleSrc"
      :blockNewsList="item.blockNewsList"
      :linkToAllNewsText="item.linkToAllNewsText"
      :linkToAllNewsSrc="item.linkToAllNewsSrc"
    />
    <br><br>
    <advertisment-1
    :bannerImgSrc="bannerImgSrc"
    :mainImgSrc="mainImgSrc"
    :advText="advTittle"
    />
    <br><br>
    <advertisment-2
    :bannerSrc="banner2Src"
    :mainImgSrc="mainImg2Src"
    />

  </div>
</template>

<script>

import StudentList from "./components/component1/StudentList";
import NewsList from "./components/component1/NewsList";
import CurrencyRender from './components/component1/CurrencyRender.vue';
import Advertisment1 from "./components/component1/Advertisment1";
import Advertisment2 from "./components/component1/Advertisment2";



export default {
  name: "App",
  components: {
    CurrencyRender,
    StudentList,
    NewsList,
    Advertisment1,
   Advertisment2,
    
  },
  data() {
    return{
      banner2Src: "https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2019/10/magic-star.jpg",
      mainImg2Src: "https://static.kinoafisha.info/k/movie_shots/1920x1080/upload/movie_shots/8/2/4/8361428/ccc572e508405f5887bd507db3626ba7.jpg",

      bannerImgSrc: "https://likarni.com/files/clinic_network/sovvy.png",
      mainImgSrc: "https://static.ukrinform.com/photos/2017_02/thumb_files/630_360_1486915815-1613.jpg",
      advTittle: "У Києві знайдено старовинний рецепт відновлення зору до 99%",
    
      currencyList: [
        {
          id: 1,
          currencyName: "Долар",
          currencyValue: 28,
        },
        {
          id: 2,
          currencyName: "Євро",
          currencyValue: 33,
        },
      ],
      studentsList: [
        { id: 1, number: 1, name: "Іванов І.І." },
        { id: 2, number: 2, name: "Петров П.П." },
        { id: 3, number: 3, name: "Степанов С.С." },
        { id: 4, number: 4, name: "Воронін А.С" },
      ],
      newsList: [
        {
          id: 1,
          blockNewsTittle: "Авто",
          blockNewsTittleSrc: "https://www.ukr.net/news/auto.html",
          blockNewsList: [
            {
              id: 1,
              time: "23:51",
              newText:
                "Renault и американская группа Plug Power запускают водородную энергетику",
              newLink:
                "https://avtodream.org/vse-novosti/avtomir/38468-renault-i-amerikanskaja-gruppa-plug-power-zapuskajut-vodorodnuju-jenergetiku.html",
              sourceText: "(jkjkj)",
            },
            {
              id: 2,
              time: "23:41",
              newText:
                "https://svidok.online/shho-bude-z-tsinamy-na-avtomobil-ny-j-gaz-prognoz-trejderiv/",
              newLink:
                "https://svidok.online/shho-bude-z-tsinamy-na-avtomobil-ny-j-gaz-prognoz-trejderiv/",
              sourceText: "(Avtodream)",
            },
            {
              id: 3,
              time: "23:41",
              newText:
                "До уваги пішоходів та водіїв: зміни у правилах дорожнього руху",
              newLink:
                "https://autotheme.info/ua/144399-do-uvagi-pishohodiv-ta-vodiyiv-zmini-u-pravilah-dorozhnogo-ruhu.html",
              sourceText: "(Свідок)",
            },
            {
              id: 4,
              time: "23:13",
              newText: "Китайські заводи BMW стануть вуглецево-нейтральними",
              newLink: "https://mmr.net.ua/autoworld/news/157205",
              sourceText: "(MMR)",
            },
            {
              id: 5,
              time: "23:03",
              newText: "Визначено рейтинг найнадійніших автомобільних марок",
              newLink:
                "https://motorcar.com.ua/news/rejtyng-najnadijnishyh-avtomobilnyh-marok/",
              sourceText: "(BizUa)",
            },
          ],
          linkToAllNewsText: "Всі автоновини",
          linkToAllNewsSrc: "https://www.ukr.net/news/auto.html",
        },
        {
          id: 2,
          blockNewsTittle: "Спорт",
          blockNewsTittleSrc:
            "https://github.com/UkrAndy/Vue__4/tree/main/4.Practics",
          blockNewsList: [
            {
              time: "20:45",
              newText: "Бокс. Черноколенко стала на шаг ближе к лицензии",
              newLink:
                "https://prosportua.com/boks-chernokolenko-stala-na-shag-blizhe-k-litsenzii/",
              sourceText: " (Pro Sport)",
            },
            {
              time: "20:44",
              newText: "Роман Мысак покинул Рух",
              newLink:
                "https://www.ua-football.com/ukrainian/high/1622824954-roman-mysak-pokinul-ruh.html?utm_source=ukrnet&utm_medium=cpc&utm_campaign=runewsukrnet",
              sourceText: " (UA-Футбол)",
            },
            {
              time: "20:44",
              newText:
                "Ноттингем. Козлова - лидер посева в квалификационной сетке",
              newLink:
                "https://btu.org.ua/news/ukrainskiy-tennis/32856-nottingem-kozlova-lider-poseva-v-kvalifikacionnoj-setke.html",
              sourceText: "(Большой теннис Украины)",
            },
            {
              time: "20:40",
              newText: 'Мауро Сарате больше не игрок "Бока Хуниорс" ',
              newLink:
                "https://www.footboom.com/foreign/argentina/1622828046-mauro-sarate-bolshe-ne-igrok-boka-khuniors.html?utm_source=ukr.net.news&utm_medium=cpc",
              sourceText: "(Footboom.com)",
            },
            {
              time: "20:30",
              newText:
                "Северная Македония разнесла Казахстан и едет на Евро в отличном настроении",
              newLink:
                "https://zbirna.com/post/severnaya-makedoniya-pereigrala-kazakhstan",
              sourceText: " (Команда №1)",
            },
          ],
          linkToAllNewsText: "всі спортивні новини: футбол, бокс, хокей...",
          linkToAllNewsSrc: "https://www.ukr.net/news/sport.html",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

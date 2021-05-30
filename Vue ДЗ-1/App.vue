<template>
  <div id="app">
    <CurrencyConverter/>
    <br><br><br>
    <Login/>
    <br><br><br>
    <Predicter/>
    <br><br><br>
    <Translator/>

  </div>
</template>

<script>
import CurrencyConverter from './components/converter/CurrencyConverter'
import Login from './components/logIn/Login'
import Predicter from "./components/predicter/Predicter"
import Translator from "./components/translator/Translator";

export default {
  name: 'App',
  components: {
    CurrencyConverter,
    Login,
    Predicter,
    Translator
  }
}
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

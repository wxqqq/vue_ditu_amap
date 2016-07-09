<template>
  <!--div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <p>
      Welcome to your Vue.js app!
    </p>
    <p>
      To get a better understanding of how this boilerplate works, check out
      <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
      It is also recommended to go through the docs for
      <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
      <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
      If you have any issues with the setup, please file an issue at this boilerplate's
      <a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.
    </p>
    <p>
      You may also want to checkout
      <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
      <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
    </p>
  </div-->
  <map></map>
  <div class="container">
    <router-view></router-view>
    <Display></Display>
    <increment></increment>
</div>
</template>

<script>
import Hello from './components/Hello'
import Map from './components/contents/Map'
import Display from './components/Display'
import increment from './components/increment'
import store from './vuex/store'
export default {
  components: {
    Hello,
    Map,
    Display,
    increment
  },
    store: store
}
</script>

<style>
html {
  height: 100%;
}
  body{
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    } 

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
.container{
  position: absolute;
  top: 20px;
  height: 40px;
  z-index: 99999;
  left:20px;
      border-radius: 2px;
    width: 425px;
    z-index: 5;
}
</style>

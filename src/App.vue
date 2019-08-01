<template>
  <div id="app">
    <div class="locale">
      <a href="javascript:void(0);" @click="locale('en-US')" id="en_us">{{ $t('en_us') }}</a>
      <a href="javascript:void(0);" @click="locale('zh-CN')" id="zh_cn">{{ $t('zh_cn') }}</a>
    </div>
    <div id="nav">
      <router-link to="/">{{ $t('home') }}</router-link> |
      <router-link to="/about">{{ $t('about') }}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  // eslint-disable-next-line no-console
  console.log('.env : ' + process.env.VUE_APP_PUBLIC_ENV)

  // eslint-disable-next-line no-console
  console.log('.env.[mode] : ' + process.env.VUE_APP_ENV)

  // eslint-disable-next-line no-console
  console.log('API_URI : ' + process.env.VUE_APP_API_URI)

  // eslint-disable-next-line no-console
  console.log('BASE_URL : ' + process.env.BASE_URL)

  import Vue from 'vue';
  import Cookies from 'js-cookie';
  export default {
    methods : {
      locale(l){
        Vue.config.lang = l;
        Cookies.set('locale', l);
      }
    }
  }


</script>

<style>
@import './assets/css.css';

#app {
  font-family: Helvetica, Arial, sans-serif, 'Avenir';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0; padding: 0;
}

.locale{
  padding: 10px 30px 60px 0;
  text-align: right;
}
.locale a{
  display: inline-block;
  width: 50px;
  height: 25px;
  background: red;
  color: #fff;
  line-height: 25px;
  text-align: center;
}
#en_us{
  background: blue;
}


</style>

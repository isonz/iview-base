<template>
  <div id="app">
    <div class="locale">
      <a href="##" id="en_us">{{ $t('en_us') }}</a>
      <a href="##" id="zh_cn">{{ $t('zh_cn') }}</a>
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

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{ $t(data.message) }}
    <IviewButtonHome></IviewButtonHome>
    <iview-button-home></iview-button-home>
  </div>
</template>

<script>
// @ is an alias to /src
import IviewButtonHome from '@/components/IviewButton'

export default {
  name: 'home',
  components: {
    IviewButtonHome
  },
  data() {
    return {
      data: {
        message: 'nin hao',
      }
    }
  }
}

</script>

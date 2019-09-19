<template>
  <div class="blog-box">
    <Button>{{ $t('mine') }} IVIEW BUTTON {{ $t('open') }} {{ $t('close') }}</Button>

    <i-switch v-model="data.switchShow" size="large">
      <span slot="open">{{ $t('open') }}</span>
      <span slot="close">{{ $t('close') }}</span>
    </i-switch>

    <Button type="primary">{{ $t('array') }}</Button>
    <Button type="primary">{{ $t('array')[0] }}</Button>

  </div>
</template>

<script>
export default {
  name: 'IviewButton-SS',
  components: {},
  props: {
    msg: String
  },
  data() {
    return {
      data: {
        switchShow: true,
      },
    }
  },
  // mounted() {
  //   axs.get('').then(res => {
  //     this.data= {
  //       //重新赋值switchShow属性 因为请求之后switchShow属性会被清空，，清空之后没有默认值，v-model是双向数据绑定 没有值所以会报错
  //       switchShow: res.data
  //     }
  //   })
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog-box {
  color: #42b983;
}
</style>

<template>
  <div>
    <!--为什么v-header组件有seller属性？-->
    <Header :seller="seller"></Header>
    <!--border-1px不是函数吗？怎么当类名使用了呢？-->
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from './components/v-header/v-header'

  const ERR_OK = 0

  export default {
    data() {
      return {
        seller: {}
      }
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        // 提取数据
        response = response.body
        if (response.errno === ERR_OK) {
          // response.data是指什么？
          this.seller = response.data
        }
      })
    },
    components: {
      Header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      // router-link在网页中被渲染成a标签，设置css时要用a标签
      & > a
        display: block
        text-decoration: none
        font-size: 14px
        color: rgb(77, 85, 93)
        // 相当于a.active，为什么可以这么用？
        &.active
          color: rgb(240, 20, 20)
</style>

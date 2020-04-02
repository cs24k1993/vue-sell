<template>
  <div id="app">
    <div class="header">
      <v-header :seller="seller"></v-header>
    </div>
    <div class="tab">
      I am tab!
    </div>
    <div class="content">
      I am content!
    </div>
  </div>
</template>

<script>
  import VHeader from './components/v-header/v-header'
  export default {
    components: {
      VHeader
    }
  }
</script>

<style lang="stylus">

</style>

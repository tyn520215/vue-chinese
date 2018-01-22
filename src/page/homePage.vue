<template>
  <div class="warpp">
    <headerTop titleName="Vue中文社区"></headerTop>
      <home></home>
    <bottomNav bottom="firstPage"></bottomNav>
  </div>
</template>

<script>
  import bottomNav from '../components/BottomNavigation.vue'
  import headerTop from '../components/headerTop.vue'
  import home from './home.vue'

  export default {
      data () {
        return {
        }
      },
      components:{
        bottomNav,
        headerTop,
        home
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .nav_bottom{position: fixed;bottom: 0;width: 100%}
</style>

<template>
  <mu-appbar class="headerT" :title="title">
    <mu-icon-button icon="arrow_back" slot="left"/>
  </mu-appbar>
</template>

<script>
    export default {
        data () {
            return{
              title:'Vue.js中文社区'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .headerT{position: fixed;
    top:0;}
</style>

<template>
  <mu-paper class="nav_bottom">
    <mu-bottom-nav :value="bottomNav" @change="handleChange">
      <mu-bottom-nav-item value="firstPage" to="/home" title="主页" icon="home"/>
      <mu-bottom-nav-item value="public" to="/public" title="发布" icon="favorite"/>
      <mu-bottom-nav-item value="message" to="/message" title="消息" icon="message"/>
      <mu-bottom-nav-item value="login" to="/login" title="我" icon="person"/>
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>
    export default {
      data () {
          return{
            bottomNav:this.bottom
          }
      },
      props: ['bottom'],
      methods: {
        handleChange (val) {
          this.bottomNav = val
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .nav_bottom{position: fixed;bottom: 0;width: 100%}
</style>

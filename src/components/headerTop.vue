<template>
  <mu-appbar class="headerT" :title="title">
    <mu-icon-button icon="arrow_back" slot="left" @click="goback()"/>
  </mu-appbar>
</template>

<script>
    export default {
        data () {
            return{
              title:this.title
            }
        },
      props:['title'],
      methods: {
        goback(){
          this.$router.go(-1)
        }
      }
      }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .headerT{position: fixed;
    top:0;}
</style>

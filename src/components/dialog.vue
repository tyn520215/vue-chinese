<template>
    <div class="vue-dialog">
      <mu-popup position="top" :overlay="true" class="demo-popup-top" :open="topPopup">
        <mu-appbar :title="contents">
        </mu-appbar>
      </mu-popup>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              contents:this.content,
              topPopup:this.popupValue
            }
        },
        created() {
        },
      props:['content','popupValue'],
      components: {},
        mounted() {

        },
        methods: {},
        watch: {
          topPopup (val) {
            if (val) {
              setTimeout(() => {
                this.topPopup = false
              }, 2000)
            }
          },

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

</style>

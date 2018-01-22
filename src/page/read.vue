<template>
    <div>
      <headerTop title="已读消息"></headerTop>
      <mu-list>
        <template v-for="item in read_message">
          <mu-list-item :title="item.topic.title" :to="'/detail/'+item.topic.id">
            <mu-avatar :src="item.author.avatar_url" slot="leftAvatar"/>
          </mu-list-item>
          <mu-divider/>
        </template>
      </mu-list>
      <div v-if="read_message==''||read_message == null ">你没有参与互动，赶快去参加吧！</div>
    </div>
</template>

<script>
  import headerTop from '../components/headerTop.vue'
  import {getUtils} from '../utils/utils.js'

  export default {
        data() {
            return {
              read_message:'',
            }
        },
        created() {
          this.accessToken = sessionStorage.getItem('accessToken');
          this.getNotRead()
        },
        props: [],
        components: {headerTop},
        mounted() {},
        methods: {
          getNotRead(){
            let url = 'https://www.vue-js.com/api/v1/messages?accesstoken='+this.accessToken;
            getUtils(url).then((data)=>{
              this.read_message = data.data.has_read_messages;
            })
          }
        },
        watch: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

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

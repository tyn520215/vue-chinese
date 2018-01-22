<template>
    <div>
      <mu-appbar class="messagr_top" title="我的消息">
      </mu-appbar>
      <mu-flexbox class="mt8" align="center"  @click.native="jumpRead">
        <mu-flexbox-item class="flex-demo" grow="1" style="text-align: center">
          <mu-icon value="star"
                   :size="30"
                   style="color: #fcc015;margin-top: 15px;"></mu-icon>
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo" grow="5">
          已读消息
        </mu-flexbox-item>
        <i class="not_read">{{has_read_messages.length}}</i>
        <mu-flexbox-item class="flex-demo" grow="1" style="text-align: right">
          <mu-icon value="navigate_next" :size="30"
                   style="color: rgb(211, 220, 230);margin-top: 15px;"/>
        </mu-flexbox-item>

      </mu-flexbox>
      <mu-divider shallowInset/>
      <mu-flexbox class="mt8" align="center"  @click.native="jumpNotRead">
        <mu-flexbox-item class="flex-demo" grow="1" style="text-align: center">
          <mu-icon value="chat"
                   :size="30"
                   style="color: #fcc015;margin-top: 15px;"></mu-icon>
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo" grow="5">
          未读消息
        </mu-flexbox-item>
        <i class="not_read">{{not_read_count}}</i>
        <mu-flexbox-item class="flex-demo" grow="1" style="text-align: right" >
          <mu-icon value="navigate_next" :size="30"
                   style="color: rgb(211, 220, 230);margin-top: 15px;"/>
        </mu-flexbox-item>

      </mu-flexbox>
      <mu-divider shallowInset/>

      <bottomNav bottom="message"></bottomNav>
    </div>
</template>

<script>
  import bottomNav from '../components/BottomNavigation.vue'
  import {getUtils} from '../utils/utils.js'
  export default {
        data () {
          return{
              not_read_count:0,
              not_readInfo:'',
              readInfo:'',
              accessToken:'',
              has_read_messages:'',
              hasnot_read_messages:''
          }
        },
    components:{
      bottomNav
    },
    created(){
      this.accessToken = sessionStorage.getItem('accessToken');
      if(this.accessToken){
        this.getNotReadMessage();
        this.getMessageInfo();
      }
    },
    methods:{
      getNotReadMessage(){
        let url = 'https://www.vue-js.com/api/v1/message/count?accesstoken='+this.accessToken;
        getUtils(url).then((data)=>{
          this.not_read_count = data.data;
        })
      },
      getMessageInfo(){
        let url = 'https://www.vue-js.com/api/v1/messages?accesstoken='+this.accessToken;
        getUtils(url).then((data)=>{
          this.has_read_messages = data.data.has_read_messages;
          this.hasnot_read_messages = data.data.hasnot_read_messages;
        })
      },
      checkLogin(){
        this.accessToken !=null ? this.$router.push('/message') :this.$router.push('/login')
      },
      jumpNotRead(){
        this.$router.push('/not_read')
      },
      jumpRead(){
        this.$router.push('/read')

      }
    }
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
    .messagr_top{
      position: fixed;top: 0;
    }
    a {
        color: #42b983;
    }
  .not_read{width: 1.5rem;height: 1.5rem;background-color: rgb(252, 192, 21);border-radius: 0.75rem;text-align: center;line-height: 1.5rem;}
</style>

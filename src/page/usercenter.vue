<template>
    <div class="usercenter">
      <headerTop title="个人中心"></headerTop>
      <mu-list-item :title="loginname" class="userInfo">
        <mu-avatar :src="avatar_url" slot="leftAvatar" :size="40"/>
      </mu-list-item>
      <mu-divider shallowInset/>

      <mu-flexbox class="mt8" align="center">
        <mu-flexbox-item class="flex-demo" grow="1" style="text-align: center">
          <mu-icon value="star"
                   :size="30"
                   style="color: #fcc015;margin-top: 15px;"></mu-icon>
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo" grow="5">
          我收藏的话题
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo" grow="1" style="text-align: right">
          <mu-icon value="navigate_next" :size="30"
                   style="color: rgb(211, 220, 230);margin-top: 15px;"/>
        </mu-flexbox-item>

      </mu-flexbox>
      <mu-divider shallowInset/>
      <mu-flexbox class="mt8" align="center">
        <mu-flexbox-item class="flex-demo" grow="1" style="text-align: center">
          <mu-icon value="chat"
                   :size="30"
                   style="color: #fcc015;margin-top: 15px;"></mu-icon>
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo" grow="5">
          我参与的话题
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo" grow="1" style="text-align: right">
          <mu-icon value="navigate_next" :size="30"
                   style="color: rgb(211, 220, 230);margin-top: 15px;"/>
        </mu-flexbox-item>

      </mu-flexbox>
      <mu-divider shallowInset/>



      <mu-raised-button label="退出登录" class="demo-raised-button" @click="loginOut" primary/>

      <bottomNav bottom="login"></bottomNav>
    </div>
</template>

<script>
  import {getUtils} from '../utils/utils'
  import bottomNav from '../components/BottomNavigation.vue'
  import headerTop from '../components/headerTop.vue'
  export default {
        name: 'App',
        data () {
            return {
              loginname:'',
              avatar_url:'',
              recent_replies:''
            }
        },
        created(){
          let name =this.$route.params.username;
          let url = 'https://www.vue-js.com/api/v1/user/'+name;
          getUtils(url).then((res)=>{
            this.loginname = res.data.loginname;
            this.avatar_url = res.data.avatar_url;
            this.recent_replies = res.data.recent_replies;
          })

        },
        mounted () {

        },
      components:{
        bottomNav,headerTop
      },
        methods: {
          loginOut(){
            sessionStorage.removeItem('name');
            sessionStorage.removeItem('accessToken');
            this.$router.push('/home')
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
s
    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
  .usercenter{
    top: 0;
    position: absolute;
    width: 100%;
  }
  .userInfo{
    margin-top: 3.55rem;
    border-top: 1px solid #e3e3e3;

  }
  .mt8{height: 60px;line-height: 50px;}
</style>

<template>
  <div>
    <mu-text-field label="accessToken" hintText="请输入accessToken" v-model="accessToken" type="password" labelFloat/>
    <mu-raised-button label="登录" class="demo-raised-button" @click="login" primary/>
    <a href="https://www.vue-js.com" style="color:rgb(126,87,194)">accessToken通过登录vue-js中文社区注册获取</a>
    <bottomNav bottom="login"></bottomNav>
    <dia :content="erroTip" :popupValue="ishow"></dia>
    <!--<mu-popup position="top" :overlay="true" class="demo-popup-top" :open="topPopup">-->
      <!--<mu-appbar title="accessToken错误！">-->
      <!--</mu-appbar>-->
    <!--</mu-popup>-->
  </div>
</template>

<script>
  import bottomNav from '../components/BottomNavigation.vue'
  import {postUtils} from '../utils/utils'
  import dia from '../components/dialog.vue'
  export default {
        data () {
            return{
              accessToken:'',
              ishow: false,
              erroTip:'accessToken错误!',
            }
        },
      created(){
        this.checkLogin()
      },
    components:{
      bottomNav,dia
    },
      mounted () {

      },
      methods: {
        login(){
          let url ='https://www.vue-js.com/api/v1/accesstoken?accesstoken='+this.accessToken;
          postUtils(url).then((data)=>{
            let name = data.loginname;
            sessionStorage.setItem('name',name);
            sessionStorage.setItem('accessToken',this.accessToken);
            this.$router.push('/usercenter/'+name)
          }).catch((e)=>{
            this.ishow=true;
          })
        },
        checkLogin(){
          let name = sessionStorage.getItem('name');
          name !=null ? this.$router.push('/usercenter/'+name) :this.$router.push('/login')
        }
      },
    watch: {
      "$route" : 'checkLogin'
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

    a {
        color: #42b983;
    }
    .demo-popup-top {
      width: 100%;
      opacity: .8;
      height: 48px;
      line-height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 375px;
    }
  .mu-appbar{height: 36px}
</style>

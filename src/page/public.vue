<template>
    <div class="public">
      <mu-text-field v-model="title_value" :errorText="errorText" labelFloat/><br/>
      <mu-select-field v-model="public_type" label="选择板块" style="text-align: left" :errorText="errorType">
        <mu-menu-item value="1" title="请选择"/>
        <mu-menu-item value="share" title="分享"/>
        <mu-menu-item value="ask" title="问答"/>
        <mu-menu-item value="job" title="招聘"/>
      </mu-select-field>
      <mu-text-field v-model="public_content" :errorText="errorContent" labelFloat multiLine :rows="3" :rowsMax="6"/><br/>
      <mu-raised-button label="发布" class="demo-raised-button" @click="public" primary/>
      <dialog :content="erroTip" :popupValue="ishow"></dialog>

      <bottomNav bottom="public"></bottomNav>
    </div>
</template>

<script>
  import bottomNav from '../components/BottomNavigation.vue'
  import {postUtils} from '../utils/utils'
  import dialog from '../components/dialog.vue'
  export default {
        name: 'App',
        data () {
          return{
            title_value:'请输入标题',
            public_type:'1',
            public_content:'请输入内容',
            ishow:false,
            erroTip:'发布失败！',
            accessToken:''
          }
        },
    components:{
      bottomNav
    },
    created(){
      this.accessToken =sessionStorage.getItem('accessToken');
    },
    methods:{
      public(){
        let url ='http://www.vue-js.com/api/v1/topics?accesstoken='+this.accessToken+'&title='+this.title_value+'&tab='+this.public_type+'&content='+this.public_content
        postUtils(url).then((data)=>{
              let topId = data.data.topic_id;
              this.$router.push('/detail/'+topId)
            }).catch((e)=>{

            })
          },
      checkLogin(){
        this.accessToken !=null ? this.$router.push('/public') :this.$router.push('/login')
      }
    },
    computed: {
      errorText () {
        return this.title_value ? '' : '这是必填项'
      },
      errorType(){
        return this.public_type == 1 ? '这是必选项':''
      },
      errorContent(){
        return this.public_content ? '':'这是必填项'
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

    a {
        color: #42b983;
    }
</style>

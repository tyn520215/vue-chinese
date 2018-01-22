<template>
  <div>
    <!--<mu-appbar class="headerT" :title="data.title">-->
      <!--<mu-icon-button icon="arrow_back" slot="left" @click="goback"/>-->
    <!--</mu-appbar>-->
    <h2 >{{data.title}}</h2>
    <div><ul><li>发布于{{data.create_at}}</li><li>作者:{{data.author.loginname}}</li><li>{{data.visit_count}}次浏览</li><li>来自{{ data.tab|tab}}</li></ul></div>
    <p v-html="content" style="padding: 0.5rem;margin-bottom:60px"></p>
    <mu-divider />
    <mu-list style="margin-bottom:60px">
      <mu-list-item v-for="rep in replies" :key="rep.id">
        <mu-flexbox orient="vertical">
          <mu-flexbox orient="horizontal">
            <mu-flexbox-item class="flex-demo" grow="7">
              <span style="color: rgba(0, 0, 0, .87)">{{rep.author.loginname}}</span> {{rep.create_at.substring(0,9)}}
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-demo" grow="3">
              <mu-flat-button :label="rep.ups.length"  class="demo-flat-button"  icon="thumb_up" @click="thumb_up(rep.id,$event)"/>
            </mu-flexbox-item>
          </mu-flexbox>
          <mu-flexbox >
            <mu-flexbox-item class="flex-demo" grow="7">
              <span v-html="rep.content">111111</span>
            </mu-flexbox-item>
          </mu-flexbox>
        </mu-flexbox>
        <mu-avatar :src="rep.author.avatar_url" slot="leftAvatar"/></mu-flexbox-item>
        <mu-divider/>

      </mu-list-item>
    </mu-list>


    <mu-appbar title="回复" class="replay">
      <mu-icon-button icon="arrow_back" slot="left" @click="goback"/>
        <mu-text-field  class="appbar-search-field" v-model="opinion" hintText="说说你的看法..."/>
      <mu-flat-button label="发表" slot="right" @click="repaly"/>
    </mu-appbar>
  </div>
</template>

<script>
  import {getUtils,postUtils} from '../utils/utils'
  export default {
        name: 'App',
        data () {
            return {
              title:"",
              content:'',
              visit_count:0,
              author:'',
              time:'',
              data:'',
              id:'',
              from:'',
              replies:'',
              opinion:'',
              clickClass:''
            }
        },
        created(){
          this.initData()

        },
      filters: {
        tab(val) {
          if (val === 'share') {
            return '分享'
          } else if (val === 'ask') {
            return '问答'
          } else if (val === 'job') {
            return '招聘'
          }
        }
      },
        mounted () {

        },
        methods: {
          goback(){
              this.$router.go(-1)
          },
          repaly(){
            let accessToken = sessionStorage.getItem('accessToken');
            if(accessToken){
              let url ='https://www.vue-js.com/api/v1/topic/'+this.id+'/replies?accesstoken='+accessToken+'&content ='+this.opinion;
              postUtils(url).then((data)=>{
                if(data.success){
                  this.initData()
                }
              }).catch((e)=>{

              })
            }else{
              this.$router.push('/login')
            }
          },
          thumb_up(val,event){
            let accessToken = sessionStorage.getItem('accessToken');
            if(accessToken){
              let url ='https://www.vue-js.com/api/v1/reply/'+val+'/ups?accesstoken='+accessToken;
              postUtils(url).then((data)=>{
                if(data.success){
                  let e = event.target;
                  if(data.action =='up'){
                    e.parentElement.style.color ='rgb(252,192,21)'
                  }else{
                    e.parentElement.style.color =''
                  }
                }
                this.initData()
              }).catch((e)=>{})
            }else{
              this.$router.push('/login')
            }

          },
          initData(){
            let id=this.$route.params.id;
            let url = 'https://www.vue-js.com/api/v1/topic/'+id;
            getUtils(url).then((data)=>{
              if(data.data){
                this.data = data.data;
                this.replies = data.data.replies;
                this.title = data.data.title;
                this.content = data.data.content;
                this.visit_count = data.data.visit_count;
                this.id=data.data.id;
              }else{
              }
            });
          }


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .headerT {
      position: fixed;
      top:0
  }
  .replay{
    position: fixed;
    bottom: 0;
  }
  .mu-divider {
    margin: 0;
    height: 1px;
    background-color: rgba(0,0,0,.12);
    width: 100%;
  }
    ul {
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }
    .click{color: #efb66d}
    a {
        color: #42b983;
    }
</style>

<template>
  <div class="demo-infinite-container">
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="all" title="全部"/>
      <mu-tab value="good" title="精华"/>
      <mu-tab value="weex " title="weex"/>
      <mu-tab value="share" title="分享"/>
      <mu-tab value="ask" title="问答"/>
      <mu-tab value="job" title="招聘"/>
    </mu-tabs>
    <mu-list>
      <template v-for="item in items">
        <mu-list-item :title="item.title" :to="'/detail/'+item.id">
          <mu-avatar :src="item.author.avatar_url" slot="leftAvatar"/>

        </mu-list-item>
        <mu-divider/>
      </template>
    </mu-list>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
    <span v-if="noMore">我是有底线的</span>
  </div>
</template>

<script>
  import {getUtils} from '../utils/utils'
    export default {
        data () {
            return{
              items:[],
              page:1,
              noMore:false,
              loading: false,
              activeTab:'all',
              add:false,
              scroller: null,
              url:'https://www.vue-js.com/api/v1/topics'
            }
        },
      created(){
            let url = this.url+"?tab=all";
          this.getData(url)
      },
      mounted () {
        this.scroller = this.$el
      },
      methods: {
        loadMore () {
          if(!this.add){
            this.add = true;
            let newItems=[];
          this.loading = true;
          this.page += 1;
          let url = this.url+"?tab="+this.activeTab+"&page="+this.page ;
            setTimeout(() => {
              getUtils(url).then((data)=>{
                if(data.data.length !=0){
                  newItems=data.data;
                  this.items.push(...newItems);
                  this.add = false;
                }else{
                  this.noMore = true;
                }
              });
              this.loading = false;
              newItems=[]
            }, 2000)

          }
        },
        getData(url){
          this.loading = true;
          getUtils(url).then((data)=>{
            if (data.state = 200){
              this.items = data.data;
              this.loading = false;
            }
          })
        },
        handleTabChange (val) {
            this.activeTab=val;
          let url = this.url+"?tab="+val;
          this.page=1;
          this.add = false;
          this.noMore = false;

          this.getData(url)
        },
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .demo-infinite-container{
      position: absolute;
      top: 56px;
      bottom: 56px;
      overflow: auto;
      width:100%;
    }
</style>

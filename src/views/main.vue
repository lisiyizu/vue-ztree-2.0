<template>
   <div>
    <h1>{{ msg }}</h1>
    <div style='width:280px;'>
      <vue-ztree :list.sync='ztreeDataSource' :func.sync='nodeClick' :is-open='true'></vue-ztree>
    </div>
   </div>
</template>

<script>
import vueZtree from '../components/vue-ztree.vue'
export default {
  data () {
    return {
      msg: 'Hello Vue-Ztree-2.0!',
      ztreeDataSource:[{
                id:1,
                name:"音乐",
                children:[],
                path:"http://www.baidu.com"
      },{
          id:2,
          name:"视频",
          children:[{
             id:3,
             name:"电影",
             children:[{
                id:4,
                name:"国产电影",
                path:""
             },{
                id:5,
                name:"好莱坞电影",
                path:""
             },{
                id:6,
                name:"小语种电影",
                path:""
             }]
          },{
             id:7,
             name:"短片",
             children:[{
                id:9,
                name:"电视剧",
                path:""
             },{
                id:10,
                name:"短片",
                path:""
             }]
          }],
          path:""
      }]
    }
  },
  methods:{
    nodeClick:function(m){
       console.log(JSON.parse(JSON.stringify(m)));
    }
  },
  components:{
    vueZtree
  }
}
</script>

<style>
body {font-family: Helvetica, sans-serif;}
</style>

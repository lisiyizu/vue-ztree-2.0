<style>
body {font-family: Helvetica, sans-serif;}
.iconClassRoot {
   width:15px;
   height:15px;
   display: inline-block;
   background: url("../images/ztree/root.png") no-repeat center/100% auto;
}
.iconClassNode {
   width:15px;
   height:15px;
   display: inline-block;
   background: url("../images/ztree/node.png") no-repeat center/100% auto;
}
.operate ul>li{
  float:left;
  margin:10px 10px;
  list-style-type: none;
}
</style>
<template>
  <div style='display:flex;flex:3'>
      <div style='flex:1' >
        <h1>Hello Ztree(非异步)</h1>
        <div class='operate'>
           <ul>
             <li><a href="javascript:void(0)" @click='up'>节点上移</a></li>
             <li><a href="javascript:void(0)" @click='down'>节点下移</a></li>
             <li><a href="javascript:void(0)" @click='delNode'>删除节点</a></li>
             <li><a href="javascript:void(0)" @click='addNode'>新增节点</a></li>
           </ul>
        </div>
        <div style='width:280px;' v-if='ztreeDataSource.length>0'>
           <vue-ztree :list.sync='ztreeDataSource' :func='nodeClick' :is-open='false'></vue-ztree>
        </div>
      </div>

      <div style='flex:1'>
        <h1>Hello Ztree(异步加载)</h1>
        <div style='width:280px;' v-if='ztreeDataSourceSync.length>0'>
           <vue-ztree :list.sync='ztreeDataSourceSync' :expand='expandClick'  :is-open='false'></vue-ztree>
        </div>
      </div>

      <div style='flex:1'>
        <h1>Hello Ztree(右击事件)</h1>
        <div style='width:280px;' v-if='ztreeDataSourceList.length>0'>
           <vue-ztree :list.sync='ztreeDataSourceList' :contextmenu='contextmenuClick' :is-open='true'></vue-ztree>
        </div>
      </div>
  </div>
</template>

<script>
import vueZtree from '../components/vue-ztree.vue'
export default {
  data () {
    return {
      msg: 'Hello Vue-Ztree-2.0!',
      ztreeDataSource:[],
      show:true,
      parentNodeModel:[],//当前点击节点父亲对象
      nodeModel:null, // 当前点击节点对象
      ztreeDataSourceList:[{
          id:880,
          name:"娱乐",
          iconClass:"iconClassRoot",
          open:true,
          children:[{
            id:881,
            name:"游戏",
            iconClass:"iconClassNode",
          },{
            id:882,
            name:"电影",
            clickNode:true,
            iconClass:"iconClassNode",
          },{
            id:883,
            name:"新闻",
            iconClass:"iconClassNode",
          }]
      },{
          id:990,
          name:"BAT",
          iconClass:"iconClassRoot",
          open:false,
          children:[{
              id:991,
              name:"马化腾",
              iconClass:"iconClassNode",
          },{
              id:992,
              name:"李彦宏",
              iconClass:"iconClassNode",
          },{
              id:993,
              name:"马云",
              iconClass:"iconClassNode",
          }]
      }],
      ztreeDataSourceSync:[{
          id:220,
          name:"娱乐",
          children:[{
            id:881,
            name:"游戏"
          }]
      }]
    }
  },
  methods:{
    // 新增节点
    addNode:function(){
        if(this.nodeModel) {
          this.nodeModel.children.push({
              id:+new Date(),
              name:"动态新增节点哦～",
              path:"",
              clickNode:false,
              isFolder:false,
              isExpand:false,
              loadNode:0,
              children:[]
          });
          this.nodeModel.isFolder = true;
        }else {
          console.log("请先选中节点");
        }
    },
    // 删除节点
    delNode:function(){
        if(this.nodeModel) {
           if(this.parentNodeModel.hasOwnProperty("children")) {
              this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(this.nodeModel),1);
           }else if(this.parentNodeModel instanceof Array){
              // 第一级根节点处理
              this.parentNodeModel.splice(this.parentNodeModel.indexOf(this.nodeModel),1);
           }
           this.nodeModel = null;
        }else {
           console.log("请先选中节点");
        }
    },
    // 节点上移
    up:function(){
       if(!this.nodeModel) console.log("请先选中节点");

       if(this.parentNodeModel.hasOwnProperty("children")) {
          var index = this.parentNodeModel.children.indexOf(this.nodeModel);
          if(index-1>=0) {
            var model = this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(this.nodeModel),1);
            this.parentNodeModel.children.splice(index-1,0,model[0]);
          }
       }else if(this.parentNodeModel instanceof Array){
          // 第一级根节点处理
          var index = this.parentNodeModel.indexOf(this.nodeModel);
          if(index-1>=0) {
            var model = this.parentNodeModel.splice(this.parentNodeModel.indexOf(this.nodeModel),1);
            this.parentNodeModel.splice(index-1,0,model[0]);
          }
       }
    },
    // 节点下移
    down:function(){
       if(!this.nodeModel) console.log("请先选中节点");

       if(this.parentNodeModel.hasOwnProperty("children")) {
          var index = this.parentNodeModel.children.indexOf(this.nodeModel);
          if(index+1<=this.parentNodeModel.children.length) {
            var model = this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(this.nodeModel),1);
            this.parentNodeModel.children.splice(index+1,0,model[0]);
          }
       }else if(this.parentNodeModel instanceof Array){
          // 第一级根节点处理
          var index = this.parentNodeModel.indexOf(this.nodeModel);
          if(index+1<=this.parentNodeModel.length) {
            var model = this.parentNodeModel.splice(this.parentNodeModel.indexOf(this.nodeModel),1);
            this.parentNodeModel.splice(index+1,0,model[0]);
          }
       }
    },
    // 点击节点
    nodeClick:function(m, parent){
       this.show = !this.show;
       this.nodeModel = m;  // 当前点击节点对象
       this.parentNodeModel = parent; //当前点击节点父亲对象

       console.log(m);
       console.log(parent)
    },
    // 右击事件
    contextmenuClick:function(){
       console.log("触发了自定义的contextmenuClick事件");
    },
    // 点击展开收起
    expandClick:function(m){
       console.log(JSON.parse(JSON.stringify(m)));
       // 点击异步加载
       if(m.isExpand) {
          // 动态加载子节点, 模拟ajax请求数据
         // 请注意 id 不能重复哦。
         if(m.hasOwnProperty("children")){
            
            m.loadNode = 1; // 正在加载节点

            setTimeout(()=>{

              m.loadNode = 2; // 节点加载完毕

              m.isFolder = !m.isFolder; 

              m.children.push({
                  id:+new Date(),
                  name:"动态加载节点1",
                  path:"",
                  clickNode:false,
                  isFolder:false,
                  isExpand:false,
                  loadNode:0,
                  children:[{
                        id:+new Date()+1,
                        name:"动态加载末节点",
                        path:"",
                        clickNode:false,
                        isExpand:false,
                        isFolder:false,
                        loadNode:0
                  }]
              })
            },1000);
         }
       }
    }
  },
  components:{
    vueZtree
  },
  mounted (){
      // 异步获取数据操作
      setTimeout(()=>{ 
         this.ztreeDataSource = [{
            id:220,
            name:"游戏1",
            children:[{
              id:221,
              name:"游戏2",
              path:"",
              children:[{
                  id:222,
                  name:"游戏3",
                  path:"",
                  children:[{
                      id:223,
                      name:"游戏4",
                      path:"",
                      children:[{
                          id:224,
                          name:"游戏5",
                          path:"",
                          children:[{
                              id:225,
                              name:"游戏6",
                              path:"",
                              children:[{
                                  id:226,
                                  name:"游戏末节点",
                                  path:""
                              }],
                          }],
                      }],
                  }],
              }],
           }],
            path:"http://www.baidu.com"
         },{
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
      },1000)
  }
}
</script>

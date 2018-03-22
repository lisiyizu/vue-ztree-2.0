webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Main__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_Main__);




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Hello Ztree',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Main___default.a
  }]
}));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(17),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			treeDataSource: []
		};
	},
	props: {
		// 树数据
		list: {
			type: Array,
			twoWay: true
		},
		// 点击节点回调
		func: {
			type: Function,
			default: null
		},
		// 点击展开回调
		expand: {
			type: Function,
			default: null
		},
		// 右击事件
		contextmenu: {
			type: Function,
			default: function () {
				console.log("defalt click contextmenu");
			}
		},
		// 是否展开
		isOpen: {
			type: Boolean,
			twoWay: true,
			default: false
		}
	},
	watch: {
		'list': {
			handler: function () {
				this.initTreeData();
			},
			deep: true
		}
	},
	methods: {
		initTreeData() {
			var tempList = JSON.parse(JSON.stringify(this.list));

			// 递归操作，增加删除一些属性。比如: 展开/收起
			var recurrenceFunc = data => {
				data.forEach(m => {
					if (!m.hasOwnProperty("clickNode")) {
						m.clickNode = m.hasOwnProperty("clickNode") ? m.clickNode : false;
					}

					m.children = m.children || [];

					m.hover = false;

					if (!m.hasOwnProperty("isFolder")) {
						m.isFolder = m.hasOwnProperty("open") ? m.open : this.isOpen;
					}

					if (!m.hasOwnProperty("isExpand")) {
						m.isExpand = m.hasOwnProperty("open") ? m.open : this.isOpen;
					}

					m.loadNode = 0;

					recurrenceFunc(m.children);
				});
			};

			recurrenceFunc(tempList);

			this.treeDataSource = tempList;
		}
	},
	components: {
		// 组件
		ztreeItem: {
			name: 'ztreeItem',
			data() {
				return {
					parentNodeModel: null
				};
			},
			props: {
				model: {
					type: Object,
					twoWay: true
				},
				num: {
					type: Number,
					twoWay: true
				},
				nodes: {
					type: Number,
					twoWay: true,
					default: 0
				},
				trees: {
					type: Array,
					twoWay: true,
					default: []
				},
				root: {
					type: String,
					twoWay: true
				},
				callback: {
					type: Function
				},
				expandfunc: {
					type: Function
				},
				cxtmenufunc: {
					type: Function
				}
			},
			methods: {
				Func(m) {
					// 查找点击的子节点
					var recurFunc = (data, list) => {
						data.forEach(i => {
							if (i.id == m.id) {
								i.clickNode = true;

								if (typeof this.callback == "function") {
									this.callback.call(null, m, list, this.trees);
								}
							} else {
								i.clickNode = false;
							}

							if (i.children) {
								recurFunc(i.children, i);
							}
						});
					};

					recurFunc(this.trees, this.trees);
				},
				getParentNode(m) {
					// 查找点击的子节点
					var recurFunc = (data, list) => {
						data.forEach(i => {
							if (i.id == m.id) this.parentNodeModel = list;
							if (i.children) recurFunc(i.children, i);
						});
					};
					recurFunc(this.trees, this.trees);
				},
				open(m) {
					//
					m.isExpand = !m.isExpand;

					if (typeof this.expandfunc == "function" && m.isExpand) {
						if (m.loadNode != 2) {
							//
							this.expandfunc.call(null, m);
						} else {
							m.isFolder = !m.isFolder;
						}
					} else {
						m.isFolder = !m.isFolder;
					}
				},
				enterFunc(m) {
					m.hover = true;
					this.getParentNode(m);
				},
				leaveFunc(m) {
					m.hover = false;
				},
				// 新增节点
				addNode(nodeModel) {
					if (nodeModel) {
						nodeModel.children.push({
							id: +new Date(),
							name: "动态新增节点哦～",
							path: "",
							clickNode: false,
							isFolder: false,
							isExpand: false,
							hover: false,
							loadNode: 0,
							children: []
						});
						nodeModel.isFolder = true;
					} else {
						console.log("请先选中节点");
					}
				},
				// 删除节点
				delNode(nodeModel) {
					if (nodeModel) {
						if (this.parentNodeModel.hasOwnProperty("children")) {
							this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(nodeModel), 1);
						} else if (this.parentNodeModel instanceof Array) {
							// 第一级根节点处理
							this.parentNodeModel.splice(this.parentNodeModel.indexOf(nodeModel), 1);
						}
						nodeModel = null;
					} else {
						console.log("请先选中节点");
					}
				},
				upNode(nodeModel) {
					if (!nodeModel) console.log("请先选中节点");

					if (this.parentNodeModel.hasOwnProperty("children")) {
						var index = this.parentNodeModel.children.indexOf(nodeModel);
						if (index - 1 >= 0) {
							var model = this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(nodeModel), 1);
							this.parentNodeModel.children.splice(index - 1, 0, model[0]);
						}
					} else if (this.parentNodeModel instanceof Array) {
						// 第一级根节点处理
						var index = this.parentNodeModel.indexOf(nodeModel);
						if (index - 1 >= 0) {
							var model = this.parentNodeModel.splice(this.parentNodeModel.indexOf(nodeModel), 1);
							this.parentNodeModel.splice(index - 1, 0, model[0]);
						}
					}
				},
				downNode(nodeModel) {
					if (!nodeModel) console.log("请先选中节点");

					if (this.parentNodeModel.hasOwnProperty("children")) {
						var index = this.parentNodeModel.children.indexOf(nodeModel);
						if (index + 1 <= this.parentNodeModel.children.length) {
							var model = this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(nodeModel), 1);
							this.parentNodeModel.children.splice(index + 1, 0, model[0]);
						}
					} else if (this.parentNodeModel instanceof Array) {
						// 第一级根节点处理
						var index = this.parentNodeModel.indexOf(nodeModel);
						if (index + 1 <= this.parentNodeModel.length) {
							var model = this.parentNodeModel.splice(this.parentNodeModel.indexOf(nodeModel), 1);
							this.parentNodeModel.splice(index + 1, 0, model[0]);
						}
					}
				}
			},
			computed: {
				// 给（根 和 子树）赋值不同的样式
				rootClass() {
					var strRootClass = '';

					// 根判断
					if (this.root == '0') {
						this.model.children = this.model.children || [];
						strRootClass = this.num == 0 && this.model.children.length == 0 ? "roots_docu" : this.nodes == 1 || this.num == 0 && this.nodes != this.num + 1 ? "root_" : this.nodes == this.num + 1 ? "bottom_" : "center_";

						// 子树判断
					} else if (this.root == '1') {
						this.model.children = this.model.children || [];
						strRootClass = this.nodes > 1 && this.model.children.length > 0 && this.nodes != this.num + 1 ? "center_" : this.num == 0 && this.nodes > 1 || this.nodes != this.num + 1 ? "center_docu" : this.nodes == 1 && this.num != 0 || this.nodes == this.num + 1 && this.model.children.length > 0 ? "bottom_" : "bottom_docu";
					}

					return strRootClass;
				},
				// 是否有儿子节点
				isChildren() {
					return this.num + 1 != this.nodes;
				},
				// 展开/收起
				prefixClass() {
					var returnChar = "";
					if (this.rootClass.indexOf("docu") == -1) {
						if (this.model.isFolder) {
							returnChar = "open";
						} else {
							returnChar = 'close';
						}
					}

					if (this.model.children.length == 0 && this.rootClass.indexOf("docu") == -1) {
						returnChar = 'docu';
					}

					return returnChar;
				},
				liClassVal() {
					return "level" + this.num;
				},
				spanClassVal() {
					return "button level" + this.num + " switch " + this.rootClass + this.prefixClass;
				},
				aClassVal() {
					return this.model.clickNode ? "level" + this.num + ' curSelectedNode' : "level" + this.num;
				},
				ulClassVal() {
					return this.isChildren && this.model.children.length > 0 ? "level" + this.num + ' line' : "level" + this.num;
				}
			},
			template: `<li :class="liClassVal">
				<span :class="spanClassVal" @click='open(model)'></span>
				<a @click='Func(model)' @mouseenter='enterFunc(model)' @mouseleave='leaveFunc(model)' @contextmenu.prevent='cxtmenufunc(model)'>
				    <span :class="{loadSyncNode:model.loadNode==1}" v-if='model.loadNode==1'></span>
				    <span :class='model.iconClass' v-show='model.iconClass' v-else></span>
					<span class="node_name" :class='aClassVal'>{{model.name}}</span>
					<!--新增-->
					<span v-show='model.hover' title='新增' class="button add" @click="addNode(model)"></span>
					<!--删除-->
				    <span v-show='model.hover' title='删除' class="button remove" @click="delNode(model)"></span>
				    <!--上移-->
				    <span v-show='model.hover' title='上移' class="button up" @click="upNode(model)"></span>
				    <!--下移-->
				    <span v-show='model.hover' title='下移' class="button down" @click="downNode(model)"></span>
				</a>
				
				<ul :class="ulClassVal" v-show='model.isFolder'>
					<ztree-item v-for="(item,i) in model.children" :key='i' :callback='callback' :expandfunc='expandfunc' :cxtmenufunc='cxtmenufunc' :model.sync="item" :num.sync='i' root='1' :nodes.sync='model.children.length' :trees.sync='trees'></ztree-item>
				</ul>
			</li>`
		}
	},
	update() {
		this.initTreeData();
	},
	mounted() {
		__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].nextTick(() => {
			this.initTreeData();
		});
	}
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vue_ztree_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vue_ztree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_vue_ztree_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
   data() {
      return {
         msg: 'Hello Vue-Ztree-2.0!',
         ztreeDataSource: [],
         dataList: [],
         treeDeepCopy: [],
         parentNodeModel: [], //当前点击节点父亲对象
         nodeModel: null, // 当前点击节点对象
         ztreeDataSourceList: [{
            id: 880,
            name: "娱乐",
            iconClass: "iconClassRoot",
            open: true,
            children: [{
               id: 881,
               name: "游戏",
               iconClass: "iconClassNode"
            }, {
               id: 882,
               name: "电影",
               clickNode: true,
               iconClass: "iconClassNode"
            }, {
               id: 883,
               name: "新闻",
               iconClass: "iconClassNode"
            }]
         }, {
            id: 990,
            name: "BAT",
            iconClass: "iconClassRoot",
            open: false,
            children: [{
               id: 991,
               name: "马化腾",
               iconClass: "iconClassNode"
            }, {
               id: 992,
               name: "李彦宏",
               iconClass: "iconClassNode"
            }, {
               id: 993,
               name: "马云",
               iconClass: "iconClassNode"
            }]
         }],
         ztreeDataSourceSync: [{
            id: 220,
            name: "娱乐",
            children: [{
               id: 881,
               name: "游戏"
            }]
         }]
      };
   },
   methods: {
      navigateClick: function (index, item) {
         // 递归
         var recurFunc = (data, list) => {
            data.forEach(i => {
               if (i.id == item.id) {
                  i.clickNode = true;
                  this.nodeModel = i;
                  this.parentNodeModel = data;
               } else {
                  i.clickNode = false;
               }

               if (i.children) {
                  recurFunc(i.children, i);
               }
            });
         };
         recurFunc(this.treeDeepCopy, this.treeDeepCopy);

         // 导航
         var self = this;
         for (var i = 0; i < self.dataList.length; i++) {
            if (index == i) {
               self.dataList[i].clickNode = true;
            } else {
               self.dataList[i].clickNode = false;
            }
         }
         self.dataList.splice(index + 1, self.dataList.length - (index + 1));

         this.ztreeDataSource = this.treeDeepCopy;
      },
      // 新增节点
      addNode: function () {
         if (this.nodeModel) {
            this.nodeModel.children.push({
               id: +new Date(),
               name: "动态新增节点哦～",
               path: "",
               clickNode: false,
               isFolder: false,
               isExpand: false,
               hover: false,
               loadNode: 0,
               children: []
            });
            this.nodeModel.isFolder = true;
         } else {
            console.log("请先选中节点");
         }
      },
      // 删除节点
      delNode: function () {
         if (this.nodeModel) {
            if (this.parentNodeModel.hasOwnProperty("children")) {
               this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(this.nodeModel), 1);
            } else if (this.parentNodeModel instanceof Array) {
               // 第一级根节点处理
               this.parentNodeModel.splice(this.parentNodeModel.indexOf(this.nodeModel), 1);
            }
            this.nodeModel = null;
         } else {
            console.log("请先选中节点");
         }
      },
      // 节点上移
      up: function () {
         if (!this.nodeModel) console.log("请先选中节点");

         if (this.parentNodeModel.hasOwnProperty("children")) {
            var index = this.parentNodeModel.children.indexOf(this.nodeModel);
            if (index - 1 >= 0) {
               var model = this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(this.nodeModel), 1);
               this.parentNodeModel.children.splice(index - 1, 0, model[0]);
            }
         } else if (this.parentNodeModel instanceof Array) {
            // 第一级根节点处理
            var index = this.parentNodeModel.indexOf(this.nodeModel);
            if (index - 1 >= 0) {
               var model = this.parentNodeModel.splice(this.parentNodeModel.indexOf(this.nodeModel), 1);
               this.parentNodeModel.splice(index - 1, 0, model[0]);
            }
         }
      },
      // 节点下移
      down: function () {
         if (!this.nodeModel) console.log("请先选中节点");

         if (this.parentNodeModel.hasOwnProperty("children")) {
            var index = this.parentNodeModel.children.indexOf(this.nodeModel);
            if (index + 1 <= this.parentNodeModel.children.length) {
               var model = this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(this.nodeModel), 1);
               this.parentNodeModel.children.splice(index + 1, 0, model[0]);
            }
         } else if (this.parentNodeModel instanceof Array) {
            // 第一级根节点处理
            var index = this.parentNodeModel.indexOf(this.nodeModel);
            if (index + 1 <= this.parentNodeModel.length) {
               var model = this.parentNodeModel.splice(this.parentNodeModel.indexOf(this.nodeModel), 1);
               this.parentNodeModel.splice(index + 1, 0, model[0]);
            }
         }
      },
      findById: function (data, parentId) {
         var vm = this;

         for (var i = 0; i < data.length; i++) {
            if (parentId == data[i].id) {
               console.log(data[i]);
               vm.dataList.push(data[i]);
               vm.findById(vm.ztreeDataSource, data[i].parentId);
               return data[i];
            }

            if (data[i].hasOwnProperty('children')) {
               vm.findById(data[i].children, parentId);
            }
         }
      },
      // 点击节点
      nodeClick: function (m, parent, trees) {
         this.treeDeepCopy = trees;
         this.nodeModel = m; // 当前点击节点对象
         this.parentNodeModel = parent; //当前点击节点父亲对象

         console.log(m);
         console.log(parent);

         // 导航菜单
         this.dataList = [];
         this.findById(this.ztreeDataSource, m.parentId);
         this.dataList = this.dataList.reverse();
         this.dataList.push(m);
      },
      // 右击事件
      contextmenuClick: function (m) {
         console.log(m);
         console.log(event.target);
         console.log("触发了自定义的contextmenuClick事件");
         alert("触发了自定义");
      },
      // 点击展开收起
      expandClick: function (m) {
         console.log(JSON.parse(JSON.stringify(m)));
         // 点击异步加载
         if (m.isExpand) {
            // 动态加载子节点, 模拟ajax请求数据
            // 请注意 id 不能重复哦。
            if (m.hasOwnProperty("children")) {

               m.loadNode = 1; // 正在加载节点

               setTimeout(() => {

                  m.loadNode = 2; // 节点加载完毕

                  m.isFolder = !m.isFolder;

                  m.children.push({
                     id: +new Date(),
                     name: "动态加载节点1",
                     path: "",
                     clickNode: false,
                     isFolder: false,
                     isExpand: false,
                     hover: false,
                     loadNode: 0,
                     children: [{
                        id: +new Date() + 1,
                        name: "动态加载末节点",
                        path: "",
                        clickNode: false,
                        isExpand: false,
                        isFolder: false,
                        hover: false,
                        loadNode: 0
                     }]
                  });
               }, 1000);
            }
         }
      }
   },
   components: {
      vueZtree: __WEBPACK_IMPORTED_MODULE_0__components_vue_ztree_vue___default.a
   },
   mounted() {
      // 异步获取数据操作
      setTimeout(() => {
         this.ztreeDataSource = [{
            id: 220,
            parentId: 0,
            name: "游戏1",
            children: [{
               id: 221,
               parentId: 220,
               name: "游戏2",
               path: "",
               children: [{
                  id: 222,
                  parentId: 221,
                  name: "游戏3",
                  path: "",
                  children: [{
                     id: 223,
                     parentId: 222,
                     name: "游戏4",
                     path: "",
                     children: [{
                        id: 224,
                        parentId: 223,
                        name: "游戏5",
                        path: "",
                        children: [{
                           id: 225,
                           parentId: 224,
                           name: "游戏6",
                           path: "",
                           children: [{
                              id: 226,
                              parentId: 224,
                              name: "游戏末节点",
                              path: ""
                           }]
                        }]
                     }]
                  }]
               }]
            }],
            path: "http://www.baidu.com"
         }, {
            id: 1,
            parentId: 0,
            name: "音乐",
            children: [],
            path: "http://www.baidu.com"
         }, {
            id: 2,
            parentId: 0,
            name: "视频",
            children: [{
               id: 3,
               parentId: 2,
               name: "电影",
               children: [{
                  id: 4,
                  parentId: 3,
                  name: "国产电影",
                  path: ""
               }, {
                  id: 5,
                  parentId: 3,
                  name: "好莱坞电影",
                  path: ""
               }, {
                  id: 6,
                  parentId: 3,
                  name: "小语种电影",
                  path: ""
               }]
            }, {
               id: 7,
               parentId: 2,
               name: "短片",
               children: [{
                  id: 9,
                  parentId: 7,
                  name: "电视剧",
                  path: ""
               }, {
                  id: 10,
                  parentId: 7,
                  name: "短片",
                  path: ""
               }]
            }],
            path: ""
         }];
      }, 1000);
   }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(3);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(9)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(16),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(18),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.treeDataSource.length > 0) ? _c('div', {
    staticClass: "ztree_content_wrap"
  }, [_c('div', {
    staticClass: "zTreeDemoBackground left"
  }, [_c('ul', {
    staticClass: "ztree"
  }, _vm._l((_vm.treeDataSource), function(m, i) {
    return _c('ztree-item', {
      key: i,
      attrs: {
        "model": m,
        "num": i,
        "root": "0",
        "nodes": _vm.treeDataSource.length,
        "callback": _vm.func,
        "expandfunc": _vm.expand,
        "cxtmenufunc": _vm.contextmenu,
        "trees": _vm.treeDataSource
      },
      on: {
        "update:model": function($event) {
          m = $event
        },
        "update:num": function($event) {
          i = $event
        },
        "update:nodes": function($event) {
          _vm.$set(_vm.treeDataSource, "length", $event)
        },
        "update:trees": function($event) {
          _vm.treeDataSource = $event
        }
      }
    })
  }))])]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "display": "flex",
      "flex": "3"
    }
  }, [_c('div', {
    staticStyle: {
      "flex": "1"
    }
  }, [_c('h1', [_vm._v("Hello Ztree(非异步)")]), _vm._v(" "), _c('div', {
    staticClass: "operate"
  }, [_c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": _vm.up
    }
  }, [_vm._v("节点上移")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": _vm.down
    }
  }, [_vm._v("节点下移")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": _vm.delNode
    }
  }, [_vm._v("删除节点")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": _vm.addNode
    }
  }, [_vm._v("新增节点")])])])]), _vm._v(" "), _c('div', {
    staticClass: "operate"
  }, [_c('dl', {
    staticClass: "breadcrumb"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.dataList), function(item, index) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.navigateClick(index, item)
        }
      }
    }, [_vm._l((index), function(item) {
      return _c('span', {
        staticStyle: {
          "margin-left": "10px"
        },
        attrs: {
          "href": ""
        }
      })
    }), _c('a', {
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_vm._v(_vm._s(item.name) + "（点击导航）")])], 2)
  })], 2)]), _vm._v(" "), (_vm.ztreeDataSource.length > 0) ? _c('div', {
    staticStyle: {
      "width": "280px"
    }
  }, [_c('vue-ztree', {
    attrs: {
      "list": _vm.ztreeDataSource,
      "func": _vm.nodeClick,
      "is-open": false
    },
    on: {
      "update:list": function($event) {
        _vm.ztreeDataSource = $event
      }
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticStyle: {
      "flex": "1"
    }
  }, [_c('h1', [_vm._v("Hello Ztree(异步加载)")]), _vm._v(" "), (_vm.ztreeDataSourceSync.length > 0) ? _c('div', {
    staticStyle: {
      "width": "280px"
    }
  }, [_c('vue-ztree', {
    attrs: {
      "list": _vm.ztreeDataSourceSync,
      "expand": _vm.expandClick,
      "is-open": false
    },
    on: {
      "update:list": function($event) {
        _vm.ztreeDataSourceSync = $event
      }
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticStyle: {
      "flex": "1"
    }
  }, [_c('h1', [_vm._v("Hello Ztree(右击事件)")]), _vm._v(" "), (_vm.ztreeDataSourceList.length > 0) ? _c('div', {
    staticStyle: {
      "width": "280px"
    }
  }, [_c('vue-ztree', {
    attrs: {
      "list": _vm.ztreeDataSourceList,
      "contextmenu": _vm.contextmenuClick,
      "is-open": true
    },
    on: {
      "update:list": function($event) {
        _vm.ztreeDataSourceList = $event
      }
    }
  })], 1) : _vm._e()])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('b', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("导航点击树联动(注意：需要设置parentId)")])])
}]}

/***/ })
],[8]);
//# sourceMappingURL=app.9dcd770fefc63d2ee5bc.js.map
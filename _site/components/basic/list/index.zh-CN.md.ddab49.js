(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{4049:function(t,d){t.exports={content:["section",["p","通用列表。"],["h2","何时使用"],["p","最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。"]],meta:{category:"组件",type:"数据展示",title:"List",subtitle:"列表",cols:1,cover:"https://gw.alipayobjects.com/zos/alicdn/5FrZKStG_/List.svg",filename:"components/basic/list/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","另外我们封装了 ",["a",{title:null,href:"https://prolist.ant.design/"},"ProList"],"，在 ",["code","antd"]," List 之上扩展了更多便捷易用的功能，比如多选，展开等功能，使用体验贴近 Table，欢迎尝试使用。"],["h3","List"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","bordered"],["td","是否展示边框"],["td","boolean"],["td","false"],["td"]],["tr",["td","dataSource"],["td","列表数据源"],["td","any","[","]"],["td","-"],["td"]],["tr",["td","footer"],["td","列表底部"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","grid"],["td","列表栅格配置"],["td",["a",{title:null,href:"#List-grid-props"},"object"]],["td","-"],["td"]],["tr",["td","header"],["td","列表头部"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","itemLayout"],["td","设置 ",["code","List.Item"]," 布局, 设置成 ",["code","vertical"]," 则竖直样式显示, 默认横排"],["td","string"],["td","-"],["td"]],["tr",["td","loading"],["td","当卡片内容还在加载中时，可以用 ",["code","loading"]," 展示一个占位"],["td","boolean ","|"," ",["a",{title:null,href:"/components/spin/#API"},"object"]," (",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/8659"},"更多"],")"],["td","false"],["td"]],["tr",["td","loadMore"],["td","加载更多"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","locale"],["td","默认文案设置，目前包括空数据文案"],["td","object"],["td","{emptyText: ",["code","暂无数据"],"}"],["td"]],["tr",["td","pagination"],["td","对应的 ",["code","pagination"]," 配置, 设置 false 不显示"],["td","boolean ","|"," object"],["td","false"],["td"]],["tr",["td","renderItem"],["td","当使用 dataSource 时，可以用 ",["code","renderItem"]," 自定义渲染列表项"],["td","(item) => ReactNode"],["td","-"],["td"]],["tr",["td","rowKey"],["td","当 ",["code","renderItem"]," 自定义渲染列表项有效时，自定义每一行的 ",["code","key"]," 的获取方式"],["td",["code","keyof"]," T ","|"," (item: T) => ",["code","React.Key"]],["td",["code",'"key"']],["td"]],["tr",["td","size"],["td","list 的尺寸"],["td",["code","default"]," ","|"," ",["code","large"]," ","|"," ",["code","small"]],["td",["code","default"]],["td"]],["tr",["td","split"],["td","是否展示分割线"],["td","boolean"],["td","true"],["td"]]]],["h3","pagination"],["p","分页的配置项。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","position"],["td","指定分页显示的位置"],["td",["code","top"]," ","|"," ",["code","bottom"]," ","|"," ",["code","both"]],["td",["code","bottom"]]]]],["p","更多配置项，请查看 ",["a",{title:null,href:"/components/pagination/"},["code","Pagination"]],"。"],["h3","List grid props"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","column"],["td","列数"],["td","number"],["td","-"],["td"]],["tr",["td","gutter"],["td","栅格间隔"],["td","number"],["td","0"],["td"]],["tr",["td","xs"],["td",["code","<576px"]," 展示的列数"],["td","number"],["td","-"],["td"]],["tr",["td","sm"],["td",["code","≥576px"]," 展示的列数"],["td","number"],["td","-"],["td"]],["tr",["td","md"],["td",["code","≥768px"]," 展示的列数"],["td","number"],["td","-"],["td"]],["tr",["td","lg"],["td",["code","≥992px"]," 展示的列数"],["td","number"],["td","-"],["td"]],["tr",["td","xl"],["td",["code","≥1200px"]," 展示的列数"],["td","number"],["td","-"],["td"]],["tr",["td","xxl"],["td",["code","≥1600px"]," 展示的列数"],["td","number"],["td","-"],["td"]]]],["h3","List.Item"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","actions"],["td","列表操作组，根据 ",["code","itemLayout"]," 的不同, 位置在卡片底部或者最右侧"],["td","Array","<","ReactNode>"],["td","-"],["td"]],["tr",["td","extra"],["td","额外内容, 通常用在 ",["code","itemLayout"]," 为 ",["code","vertical"]," 的情况下, 展示右侧内容; ",["code","horizontal"]," 展示在列表元素最右侧"],["td","ReactNode"],["td","-"],["td"]]]],["h3","List.Item.Meta"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","avatar"],["td","列表元素的图标"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","description"],["td","列表元素的描述内容"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","title"],["td","列表元素的标题"],["td","ReactNode"],["td","-"],["td"]]]]]}}}]);
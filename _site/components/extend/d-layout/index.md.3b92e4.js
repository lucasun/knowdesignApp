(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{4140:function(t,n){t.exports={content:["section",["p","协助进行页面级整体布局。"],["h2","组件概述"],["ul",["li",["p",["code","Layout"],"：布局容器，其下可嵌套 ",["code","Header"]," ",["code","Sider"]," ",["code","Content"]," ",["code","Footer"]," 或 ",["code","Layout"]," 本身，可以放在任何父容器中。"]],["li",["p",["code","Header"],"：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 ",["code","Layout"]," 中。"]],["li",["p",["code","Sider"],"：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 ",["code","Layout"]," 中。"]],["li",["p",["code","Content"],"：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 ",["code","Layout"]," 中。"]],["li",["p",["code","Footer"],"：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 ",["code","Layout"]," 中。"]]]],meta:{category:"业务组件",type:"布局",title:"DLayout",subtitle:"菜单通栏",cols:1,filename:"components/extend/d-layout/index.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#组件概述",title:"组件概述"},"组件概述"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span><span class="token punctuation">></span></span>header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Header</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Sider</span><span class="token punctuation">></span></span>left sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Sider</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span><span class="token punctuation">></span></span>main content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Content</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Sider</span><span class="token punctuation">></span></span>right sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Sider</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span><span class="token punctuation">></span></span>footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Footer</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>'},["code","<Layout>\n  <Header>header</Header>\n  <Layout>\n    <Sider>left sidebar</Sider>\n    <Content>main content</Content>\n    <Sider>right sidebar</Sider>\n  </Layout>\n  <Footer>footer</Footer>\n</Layout>"]],["h3","Layout"],["p","布局容器。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","className"],["td","容器 className"],["td","string"],["td","-"]],["tr",["td","hasSider"],["td","表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动"],["td","boolean"],["td","-"]],["tr",["td","style"],["td","指定样式"],["td","CSSProperties"],["td","-"]]]],["h3","Layout.Sider"],["p","侧边栏。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","breakpoint"],["td","触发响应式布局的",["a",{title:null,href:"/components/grid/#Col"},"断点"]],["td",["code","xs"]," ","|"," ",["code","sm"]," ","|"," ",["code","md"]," ","|"," ",["code","lg"]," ","|"," ",["code","xl"]," ","|"," ",["code","xxl"]],["td","-"]],["tr",["td","className"],["td","容器 className"],["td","string"],["td","-"]],["tr",["td","collapsed"],["td","当前收起状态"],["td","boolean"],["td","-"]],["tr",["td","collapsedWidth"],["td","收缩宽度，设置为 0 会出现特殊 trigger"],["td","number"],["td","80"]],["tr",["td","collapsible"],["td","是否可收起"],["td","boolean"],["td","false"]],["tr",["td","defaultCollapsed"],["td","是否默认收起"],["td","boolean"],["td","false"]],["tr",["td","reverseArrow"],["td","翻转折叠提示箭头的方向，当 Sider 在右边时可以使用"],["td","boolean"],["td","false"]],["tr",["td","style"],["td","指定样式"],["td","CSSProperties"],["td","-"]],["tr",["td","theme"],["td","主题颜色"],["td",["code","light"]," ","|"," ",["code","dark"]],["td",["code","dark"]]],["tr",["td","trigger"],["td","自定义 trigger，设置为 null 时隐藏 trigger"],["td","ReactNode"],["td","-"]],["tr",["td","width"],["td","宽度"],["td","number ","|"," string"],["td","200"]],["tr",["td","zeroWidthTriggerStyle"],["td","指定当 ",["code","collapsedWidth"]," 为 0 时出现的特殊 trigger 的样式"],["td","object"],["td","-"]],["tr",["td","onBreakpoint"],["td","触发响应式布局",["a",{title:null,href:"/components/grid/#API"},"断点"],"时的回调"],["td","(broken) => {}"],["td","-"]],["tr",["td","onCollapse"],["td","展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发"],["td","(collapsed, type) => {}"],["td","-"]]]],["h4","breakpoint width"],["pre",{lang:"js",highlighted:'<span class="token punctuation">{</span>\n  xs<span class="token punctuation">:</span> <span class="token string">\'480px\'</span><span class="token punctuation">,</span>\n  sm<span class="token punctuation">:</span> <span class="token string">\'576px\'</span><span class="token punctuation">,</span>\n  md<span class="token punctuation">:</span> <span class="token string">\'768px\'</span><span class="token punctuation">,</span>\n  lg<span class="token punctuation">:</span> <span class="token string">\'992px\'</span><span class="token punctuation">,</span>\n  xl<span class="token punctuation">:</span> <span class="token string">\'1200px\'</span><span class="token punctuation">,</span>\n  xxl<span class="token punctuation">:</span> <span class="token string">\'1600px\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>'},["code","{\n  xs: '480px',\n  sm: '576px',\n  md: '768px',\n  lg: '992px',\n  xl: '1200px',\n  xxl: '1600px',\n}"]],["style",'\n  [data-theme="dark"] .site-layout-background {\n    background: #141414;\n  }\n  [data-theme="dark"] .site-layout-header-background {\n    background: #1f1f1f;\n  }\n']]}}}]);
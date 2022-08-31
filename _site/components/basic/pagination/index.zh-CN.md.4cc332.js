(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{4064:function(t,a){t.exports={content:["section",["p","采用分页的形式分隔长列表，每次只加载一个页面。"],["h2","何时使用"],["ul",["li",["p","当加载/渲染所有数据将花费很多时间时；"]],["li",["p","可切换页码浏览数据。"]]]],meta:{category:"组件",subtitle:"分页",type:"导航",title:"Pagination",cols:1,cover:"https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg",filename:"components/basic/pagination/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","<Pagination onChange={onChange} total={50} />"]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","current"],["td","当前页数"],["td","number"],["td","-"],["td"]],["tr",["td","defaultCurrent"],["td","默认的当前页数"],["td","number"],["td","1"],["td"]],["tr",["td","defaultPageSize"],["td","默认的每页条数"],["td","number"],["td","10"],["td"]],["tr",["td","disabled"],["td","禁用分页"],["td","boolean"],["td","-"],["td"]],["tr",["td","hideOnSinglePage"],["td","只有一页时是否隐藏分页器"],["td","boolean"],["td","false"],["td"]],["tr",["td","itemRender"],["td","用于自定义页码的结构，可用于优化 SEO"],["td","(page, type: 'page' ","|"," 'prev' ","|"," 'next', originalElement) => React.ReactNode"],["td","-"],["td"]],["tr",["td","pageSize"],["td","每页条数"],["td","number"],["td","-"],["td"]],["tr",["td","pageSizeOptions"],["td","指定每页可以显示多少条"],["td","string","[","]"],["td","[",["code","10"],", ",["code","20"],", ",["code","50"],", ",["code","100"],"]"],["td"]],["tr",["td","responsive"],["td","当 size 未指定时，根据屏幕宽度自动调整尺寸"],["td","boolean"],["td","-"],["td"]],["tr",["td","showLessItems"],["td","是否显示较少页面内容"],["td","boolean"],["td","false"],["td"]],["tr",["td","showQuickJumper"],["td","是否可以快速跳转至某页"],["td","boolean ","|"," { goButton: ReactNode }"],["td","false"],["td"]],["tr",["td","showSizeChanger"],["td","是否展示 ",["code","pageSize"]," 切换器，当 ",["code","total"]," 大于 50 时默认为 true"],["td","boolean"],["td","-"],["td"]],["tr",["td","showTitle"],["td","是否显示原生 tooltip 页码提示"],["td","boolean"],["td","true"],["td"]],["tr",["td","showTotal"],["td","用于显示数据总量和当前数据顺序"],["td","function(total, range)"],["td","-"],["td"]],["tr",["td","simple"],["td","当添加该属性时，显示为简单分页"],["td","boolean"],["td","-"],["td"]],["tr",["td","size"],["td","当为 ",["code","small"]," 时，是小尺寸分页"],["td",["code","default"]," ","|"," ",["code","small"]],["td",["code","default"]],["td"]],["tr",["td","total"],["td","数据总数"],["td","number"],["td","0"],["td"]],["tr",["td","onChange"],["td","页码或 ",["code","pageSize"]," 改变的回调，参数是改变后的页码及每页条数"],["td","function(page, pageSize)"],["td","-"],["td"]],["tr",["td","onShowSizeChange"],["td","pageSize 变化的回调"],["td","function(current, size)"],["td","-"],["td"]]]]]}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{4053:function(t,n){t.exports={content:["section",["p","为页面和功能提供导航的菜单列表。"],["h2","何时使用"],["p","导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。"],["p","更多布局和导航的使用可以参考：",["a",{title:null,href:"/components/layout"},"通用布局"],"。"],["h2","开发者注意事项"],["ul",["li",["p","Menu 元素为 ",["code","ul"],"，因而仅支持 ",["a",{title:null,href:"https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element"},["code","li"]," 以及 ",["code","script-supporting"]," 子元素"],"。因而你的子节点元素应该都在 ",["code","Menu.Item"]," 内使用。"]],["li",["p","Menu 需要计算节点结构，因而其子元素仅支持 ",["code","Menu.*"]," 以及对此进行封装的 HOC 组件。"]]]],meta:{category:"组件",cols:1,type:"导航",title:"Menu",subtitle:"导航菜单",cover:"https://gw.alipayobjects.com/zos/alicdn/3XZcjGpvK/Menu.svg",filename:"components/basic/menu/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#开发者注意事项",title:"开发者注意事项"},"开发者注意事项"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>菜单项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SubMenu</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>子菜单<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>子菜单项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SubMenu</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span>'},["code",'<Menu>\n  <Menu.Item>菜单项</Menu.Item>\n  <SubMenu title="子菜单">\n    <Menu.Item>子菜单项</Menu.Item>\n  </SubMenu>\n</Menu>']],["h3","Menu"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","defaultOpenKeys"],["td","初始展开的 SubMenu 菜单项 key 数组"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","defaultSelectedKeys"],["td","初始选中的菜单项 key 数组"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","expandIcon"],["td","自定义展开图标"],["td","ReactNode ","|"," ",["code","(props: SubMenuProps & { isSubMenu: boolean }) => ReactNode"]],["td","-"],["td","4.9.0"]],["tr",["td","forceSubMenuRender"],["td","在子菜单展示之前就渲染进 DOM"],["td","boolean"],["td","false"],["td"]],["tr",["td","inlineCollapsed"],["td","inline 时菜单是否收起状态"],["td","boolean"],["td","-"],["td"]],["tr",["td","inlineIndent"],["td","inline 模式的菜单缩进宽度"],["td","number"],["td","24"],["td"]],["tr",["td","mode"],["td","菜单类型，现在支持垂直、水平、和内嵌模式三种"],["td",["code","vertical"]," ","|"," ",["code","horizontal"]," ","|"," ",["code","inline"]],["td",["code","vertical"]],["td"]],["tr",["td","multiple"],["td","是否允许多选"],["td","boolean"],["td","false"],["td"]],["tr",["td","openKeys"],["td","当前展开的 SubMenu 菜单项 key 数组"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","overflowedIndicator"],["td","自定义 Menu 折叠时的图标"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","selectable"],["td","是否允许选中"],["td","boolean"],["td","true"],["td"]],["tr",["td","selectedKeys"],["td","当前选中的菜单项 key 数组"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","style"],["td","根节点样式"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","subMenuCloseDelay"],["td","用户鼠标离开子菜单后关闭延时，单位：秒"],["td","number"],["td","0.1"],["td"]],["tr",["td","subMenuOpenDelay"],["td","用户鼠标进入子菜单后开启延时，单位：秒"],["td","number"],["td","0"],["td"]],["tr",["td","theme"],["td","主题颜色"],["td",["code","light"]," ","|"," ",["code","dark"]],["td",["code","light"]],["td"]],["tr",["td","triggerSubMenuAction"],["td","SubMenu 展开/关闭的触发行为"],["td",["code","hover"]," ","|"," ",["code","click"]],["td",["code","hover"]],["td"]],["tr",["td","onClick"],["td","点击 MenuItem 调用此函数"],["td","function({ item, key, keyPath, domEvent })"],["td","-"],["td"]],["tr",["td","onDeselect"],["td","取消选中时调用，仅在 multiple 生效"],["td","function({ item, key, keyPath, selectedKeys, domEvent })"],["td","-"],["td"]],["tr",["td","onOpenChange"],["td","SubMenu 展开/关闭的回调"],["td","function(openKeys: string","[","])"],["td","-"],["td"]],["tr",["td","onSelect"],["td","被选中时调用"],["td","function({ item, key, keyPath, selectedKeys, domEvent })"],["td","-  "],["td"]]]],["blockquote",["p","更多属性查看 ",["a",{title:null,href:"https://github.com/react-component/menu#api"},"rc-menu"]]],["h3","Menu.Item"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","danger"],["td","展示错误状态样式"],["td","boolean"],["td","false"],["td","4.3.0"]],["tr",["td","disabled"],["td","是否禁用"],["td","boolean"],["td","false"],["td"]],["tr",["td","icon"],["td","菜单图标"],["td","ReactNode"],["td","-"],["td","4.2.0"]],["tr",["td","key"],["td","item 的唯一标志"],["td","string"],["td","-"],["td"]],["tr",["td","title"],["td","设置收缩时展示的悬浮标题"],["td","string"],["td","-"],["td"]]]],["blockquote",["p","注意：",["code","icon"]," 是 ",["code","4.2.0"]," 新增的属性，之前的版本请使用下面的方式定义图标。"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PieChartOutlined</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Option <span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.SubMenu</span>\n  <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n    <span class="token operator">&lt;</span><span class="token operator">></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PieChartOutlined</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Option <span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">}</span></span>\n<span class="token punctuation">></span></span>\n  <span class="token operator">...</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.SubMenu</span><span class="token punctuation">></span></span>'},["code","<Menu.Item>\n  <PieChartOutlined />\n  <span>Option 1</span>\n</Menu.Item>\n<Menu.SubMenu\n  title={\n    <>\n      <PieChartOutlined />\n      <span>Option 2</span>\n    </>\n  }\n>\n  ...\n</Menu.SubMenu>"]]],["h3","Menu.SubMenu"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","children"],["td","子菜单的菜单项"],["td","Array","<","MenuItem ","|"," SubMenu>"],["td","-"],["td"]],["tr",["td","disabled"],["td","是否禁用"],["td","boolean"],["td","false"],["td"]],["tr",["td","icon"],["td","菜单图标"],["td","ReactNode"],["td","-"],["td","4.2.0"]],["tr",["td","key"],["td","唯一标志"],["td","string"],["td","-"],["td"]],["tr",["td","popupClassName"],["td","子菜单样式，",["code",'mode="inline"']," 时无效"],["td","string"],["td","-"],["td"]],["tr",["td","popupOffset"],["td","子菜单偏移量，",["code",'mode="inline"']," 时无效"],["td","[","number, number]"],["td","-"],["td"]],["tr",["td","title"],["td","子菜单项值"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","onTitleClick"],["td","点击子菜单标题"],["td","function({ key, domEvent })"],["td","-"],["td"]]]],["h3","Menu.ItemGroup"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","children"],["td","分组的菜单项"],["td","MenuItem","[","]"],["td","-"],["td"]],["tr",["td","title"],["td","分组标题"],["td","ReactNode"],["td","-"],["td"]]]],["h3","Menu.Divider"],["p","菜单项分割线，只用在弹出菜单内。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","dashed"],["td","是否虚线"],["td","boolean"],["td","false"],["td","4.17.0"]]]],["h2","FAQ"],["h3","为何 Menu 的子元素会渲染两次？"],["p","Menu 通过",["a",{title:null,href:"https://github.com/react-component/menu/blob/f4684514096d6b7123339cbe72e7b0f68db0bce2/src/Menu.tsx#L543"},"二次渲染"],"收集嵌套结构信息以支持 HOC 的结构。合并成一个推导结构会使得逻辑变得十分复杂，欢迎 PR 以协助改进该设计。"]]}}}]);
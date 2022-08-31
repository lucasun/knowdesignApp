(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{4028:function(t,d){t.exports={content:["section",["p","屏幕边缘滑出的浮层面板。"],["h2","何时使用"],["p","抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。"],["ul",["li",["p","当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。"]],["li",["p","当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。"]]]],meta:{type:"反馈",category:"组件",subtitle:"抽屉",title:"Drawer",cover:"https://gw.alipayobjects.com/zos/alicdn/7z8NJQhFb/Drawer.svg",filename:"components/basic/drawer/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","autoFocus"],["td","抽屉展开后是否将焦点切换至其 Dom 节点"],["td","boolean"],["td","true"],["td","4.17.0"]],["tr",["td","afterVisibleChange"],["td","切换抽屉时动画结束后的回调"],["td","function(visible)"],["td","-"],["td"]],["tr",["td","bodyStyle"],["td","可用于设置 Drawer 内容部分的样式"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","className"],["td","对话框外层容器的类名"],["td","string"],["td","-"],["td"]],["tr",["td","closable"],["td","是否显示左上角的关闭按钮"],["td","boolean"],["td","true"],["td"]],["tr",["td","closeIcon"],["td","自定义关闭图标"],["td","ReactNode"],["td","<","CloseOutlined />"],["td"]],["tr",["td","contentWrapperStyle"],["td","可用于设置 Drawer 包裹内容部分的样式"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","destroyOnClose"],["td","关闭时销毁 Drawer 里的子元素"],["td","boolean"],["td","false"],["td"]],["tr",["td","drawerStyle"],["td","用于设置 Drawer 弹出层的样式"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","extra"],["td","抽屉右上角的操作区域"],["td","ReactNode"],["td","-"],["td","4.17.0"]],["tr",["td","footer"],["td","抽屉的页脚"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","footerStyle"],["td","抽屉页脚部件的样式"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","forceRender"],["td","预渲染 Drawer 内元素"],["td","boolean"],["td","false"],["td"]],["tr",["td","getContainer"],["td","指定 Drawer 挂载的 HTML 节点, false 为挂载在当前 dom"],["td","HTMLElement ","|"," () => HTMLElement ","|"," Selectors ","|"," false"],["td","body"],["td"]],["tr",["td","headerStyle"],["td","用于设置 Drawer 头部的样式"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","height"],["td","高度, 在 ",["code","placement"]," 为 ",["code","top"]," 或 ",["code","bottom"]," 时使用"],["td","string ","|"," number"],["td","256"],["td"]],["tr",["td","keyboard"],["td","是否支持键盘 esc 关闭"],["td","boolean"],["td","true"],["td"]],["tr",["td","mask"],["td","是否展示遮罩"],["td","boolean"],["td","true"],["td"]],["tr",["td","maskClosable"],["td","点击蒙层是否允许关闭"],["td","boolean"],["td","true"],["td"]],["tr",["td","maskStyle"],["td","遮罩样式"],["td","CSSProperties"],["td","{}"],["td"]],["tr",["td","placement"],["td","抽屉的方向"],["td",["code","top"]," ","|"," ",["code","right"]," ","|"," ",["code","bottom"]," ","|"," ",["code","left"]],["td",["code","right"]],["td"]],["tr",["td","push"],["td","用于设置多层 Drawer 的推动行为"],["td","boolean ","|"," { distance: string ","|"," number }"],["td","{ distance: 180 }"],["td","4.5.0+"]],["tr",["td","size"],["td","预设抽屉宽度（或高度），default ",["code","378px"]," 和 large ",["code","736px"]],["td","'default' ","|"," 'large'"],["td","'default'"],["td","4.17.0"]],["tr",["td","style"],["td","可用于设置 Drawer 最外层容器的样式，和 ",["code","drawerStyle"]," 的区别是作用节点包括 ",["code","mask"]],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","title"],["td","标题"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","visible"],["td","Drawer 是否可见"],["td","boolean"],["td","-"],["td"]],["tr",["td","width"],["td","宽度"],["td","string ","|"," number"],["td","378"],["td"]],["tr",["td","zIndex"],["td","设置 Drawer 的 ",["code","z-index"]],["td","number"],["td","1000"],["td"]],["tr",["td","onClose"],["td","点击遮罩层或左上角叉或取消按钮的回调"],["td","function(e)"],["td","-"],["td"]]]]]}}}]);
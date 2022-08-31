(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{4045:function(t,d){t.exports={content:["section",["p","通过鼠标或键盘，输入范围内的数值。"],["h2","何时使用"],["p","当需要获取标准数值时。"]],meta:{category:"组件",subtitle:"数字输入框",type:"数据录入",title:"InputNumber",cover:"https://gw.alipayobjects.com/zos/alicdn/XOS8qZ0kU/InputNumber.svg",filename:"components/basic/input-number/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#方法",title:"方法"},"方法"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["p","属性如下"],["table",["thead",["tr",["th","成员"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","addonAfter"],["td","带标签的 input，设置后置标签"],["td","ReactNode"],["td","-"],["td","4.17.0"]],["tr",["td","addonBefore"],["td","带标签的 input，设置前置标签"],["td","ReactNode"],["td","-"],["td","4.17.0"]],["tr",["td","autoFocus"],["td","自动获取焦点"],["td","boolean"],["td","false"],["td","-"]],["tr",["td","bordered"],["td","是否有边框"],["td","boolean"],["td","true"],["td","4.12.0"]],["tr",["td","controls"],["td","是否显示增减按钮"],["td","boolean"],["td","true"],["td","4.17.0"]],["tr",["td","decimalSeparator"],["td","小数点"],["td","string"],["td","-"],["td","-"]],["tr",["td","defaultValue"],["td","初始值"],["td","number"],["td","-"],["td","-"]],["tr",["td","disabled"],["td","禁用"],["td","boolean"],["td","false"],["td","-"]],["tr",["td","formatter"],["td","指定输入框展示值的格式"],["td","function(value: number ","|"," string, info: { userTyping: boolean, input: string }): string"],["td","-"],["td","info: 4.17.0"]],["tr",["td","keyboard"],["td","是否启用键盘快捷行为"],["td","boolean"],["td","true"],["td","4.12.0"]],["tr",["td","max"],["td","最大值"],["td","number"],["td",["a",{title:null,href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER"},"Number.MAX_SAFE_INTEGER"]],["td","-"]],["tr",["td","min"],["td","最小值"],["td","number"],["td",["a",{title:null,href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER"},"Number.MIN_SAFE_INTEGER"]],["td","-"]],["tr",["td","parser"],["td","指定从 ",["code","formatter"]," 里转换回数字的方式，和 ",["code","formatter"]," 搭配使用"],["td","function(string): number"],["td","-"],["td","-"]],["tr",["td","precision"],["td","数值精度，配置 ",["code","formatter"]," 时会以 ",["code","formatter"]," 为准"],["td","number"],["td","-"],["td","-"]],["tr",["td","readOnly"],["td","只读"],["td","boolean"],["td","false"],["td","-"]],["tr",["td","size"],["td","输入框大小"],["td",["code","large"]," ","|"," ",["code","middle"]," ","|"," ",["code","small"]],["td","-"],["td","-"]],["tr",["td","step"],["td","每次改变步数，可以为小数"],["td","number ","|"," string"],["td","1"],["td","-"]],["tr",["td","stringMode"],["td","字符值模式，开启后支持高精度小数。同时 ",["code","onChange"]," 将返回 string 类型"],["td","boolean"],["td","false"],["td","4.13.0"]],["tr",["td","value"],["td","当前值"],["td","number"],["td","-"],["td","-"]],["tr",["td","onChange"],["td","变化回调"],["td","function(value: number ","|"," string ","|"," null)"],["td","-"],["td","-"]],["tr",["td","onPressEnter"],["td","按下回车的回调"],["td","function(e)"],["td","-"],["td","-"]],["tr",["td","onStep"],["td","点击上下箭头的回调"],["td","(value: number, info: { offset: number, type: 'up' ","|"," 'down' }) => void"],["td","-"],["td","4.7.0"]]]],["h2","方法"],["table",["thead",["tr",["th","名称"],["th","描述"]]],["tbody",["tr",["td","blur()"],["td","移除焦点"]],["tr",["td","focus()"],["td","获取焦点"]]]],["h2","FAQ"],["h3","为何受控模式下，",["code","value"]," 可以超出 ",["code","min"]," 和 ",["code","max"]," 范围？"],["p","在受控模式下，开发者可能自行存储相关数据。如果组件将数据约束回范围内，会导致展示数据与实际存储数据不一致的情况。这使得一些如表单场景存在潜在的数据问题。"],["h3","为何动态修改 ",["code","min"]," 和 ",["code","max"]," 让 ",["code","value"]," 超出范围不会触发 ",["code","onChange"]," 事件？"],["p",["code","onChange"]," 事件为用户触发事件，自行触发会导致表单库误以为变更来自用户操作。我们以错误样式展示超出范围的数值。"]]}}}]);
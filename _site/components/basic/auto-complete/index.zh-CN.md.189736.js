(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{3990:function(t,n){t.exports={content:["section",["p","输入框自动完成功能。"],["h2","何时使用"],["ul",["li",["p","需要一个输入框而不是选择器。"]],["li",["p","需要输入建议/辅助提示。"]]],["p","和 Select 的区别是："],["ul",["li",["p","AutoComplete 是一个带提示的文本输入框，用户可以自由输入，关键词是辅助",["strong","输入"],"。"]],["li",["p","Select 是在限定的可选项中进行选择，关键词是",["strong","选择"],"。"]]]],meta:{category:"组件",subtitle:"自动完成",type:"数据录入",cols:2,title:"AutoComplete",cover:"https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg",filename:"components/basic/auto-complete/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#方法",title:"方法"},"方法"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","allowClear"],["td","支持清除"],["td","boolean"],["td","false"],["td"]],["tr",["td","autoFocus"],["td","自动获取焦点"],["td","boolean"],["td","false"],["td"]],["tr",["td","backfill"],["td","使用键盘选择选项的时候把选中项回填到输入框中"],["td","boolean"],["td","false"],["td"]],["tr",["td","children (自动完成的数据源)"],["td","自动完成的数据源"],["td","React.ReactElement","<","OptionProps> ","|"," Array","<","React.ReactElement","<","OptionProps>>"],["td","-"],["td"]],["tr",["td","children (自定义输入框)"],["td","自定义输入框"],["td","HTMLInputElement ","|"," HTMLTextAreaElement ","|"," React.ReactElement","<","InputProps>"],["td","<","Input />"],["td"]],["tr",["td","defaultActiveFirstOption"],["td","是否默认高亮第一个选项"],["td","boolean"],["td","true"],["td"]],["tr",["td","defaultOpen"],["td","是否默认展开下拉菜单"],["td","boolean"],["td","-"],["td"]],["tr",["td","defaultValue"],["td","指定默认选中的条目"],["td","string"],["td","-"],["td"]],["tr",["td","disabled"],["td","是否禁用"],["td","boolean"],["td","false"],["td"]],["tr",["td","dropdownClassName"],["td","下拉菜单的 className 属性"],["td","string"],["td","-"],["td"]],["tr",["td","dropdownMatchSelectWidth"],["td","下拉菜单和选择器同宽。默认将设置 ",["code","min-width"],"，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动"],["td","boolean ","|"," number"],["td","true"],["td"]],["tr",["td","filterOption"],["td","是否根据输入项进行筛选。当其为一个函数时，会接收 ",["code","inputValue"]," ",["code","option"]," 两个参数，当 ",["code","option"]," 符合筛选条件时，应返回 true，反之则返回 false"],["td","boolean ","|"," function(inputValue, option)"],["td","true"],["td"]],["tr",["td","getPopupContainer"],["td","菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。",["a",{title:null,href:"https://codesandbox.io/s/4j168r7jw0"},"示例"]],["td","function(triggerNode)"],["td","() => document.body"],["td"]],["tr",["td","notFoundContent"],["td","当下拉列表为空时显示的内容"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","open"],["td","是否展开下拉菜单"],["td","boolean"],["td","-"],["td"]],["tr",["td","options"],["td","数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能"],["td","{ label, value }","[","]"],["td","-"],["td"]],["tr",["td","placeholder"],["td","输入框提示"],["td","string"],["td","-"],["td"]],["tr",["td","value"],["td","指定当前选中的条目"],["td","string"],["td","-"],["td"]],["tr",["td","onBlur"],["td","失去焦点时的回调"],["td","function()"],["td","-"],["td"]],["tr",["td","onChange"],["td","选中 option，或 input 的 value 变化时，调用此函数"],["td","function(value)"],["td","-"],["td"]],["tr",["td","onDropdownVisibleChange"],["td","展开下拉菜单的回调"],["td","function(open)"],["td","-"],["td"]],["tr",["td","onFocus"],["td","获得焦点时的回调"],["td","function()"],["td","-"],["td"]],["tr",["td","onSearch"],["td","搜索补全项的时候调用"],["td","function(value)"],["td","-"],["td"]],["tr",["td","onSelect"],["td","被选中时调用，参数为选中项的 value 值"],["td","function(value, option)"],["td","-"],["td"]]]],["h2","方法"],["table",["thead",["tr",["th","名称"],["th","描述"],["th","版本"]]],["tbody",["tr",["td","blur()"],["td","移除焦点"],["td"]],["tr",["td","focus()"],["td","获取焦点"],["td"]]]],["h2","FAQ"],["h3","为何受控状态下使用 onSearch 无法输入中文？"],["p","请使用 ",["code","onChange"]," 进行受控管理。",["code","onSearch"]," 触发于搜索输入，与 ",["code","onChange"]," 时机不同。此外，点选选项时也不会触发 ",["code","onSearch"]," 事件。"],["p","相关 issue：",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/18230"},"#18230"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/17916"},"#17916"]],["h3","v3 的部分属性为何在 v4 中没有了？"],["p","AutoComplete 组件是一个支持自动提示的 Input 组件，因而其不具有 ",["code","labelInValue"]," 等影响 value 展示的属性。在 v3 版本，AutoComplete 实现存在输入值如果遇到 ",["code","value"]," 与 ",["code","label"]," 相同时无法映射的问题。 v4 中不再支持 ",["code","label"]," 为值的输入形态。"],["p","此外为了统一 API，",["code","dataSource"]," 改为 ",["code","options"]," 你可以如下转换："],["h4","v3"],["pre",{lang:"tsx",highlighted:'dataSource <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'light\'</span><span class="token punctuation">,</span> <span class="token string">\'bamboo\'</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n<span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">or</span>\ndataSource <span class="token operator">=</span> <span class="token punctuation">[</span>\n  { value<span class="token punctuation">:</span> <span class="token string">\'light\'</span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> <span class="token string">\'Light\'</span> }<span class="token punctuation">,</span>\n  { value<span class="token punctuation">:</span> <span class="token string">\'bamboo\'</span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> <span class="token string">\'Bamboo\'</span> }<span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>'},["code","dataSource = ['light', 'bamboo'];\n// or\ndataSource = [\n  { value: 'light', text: 'Light' },\n  { value: 'bamboo', text: 'Bamboo' },\n];"]],["h4","v4"],["pre",{lang:"tsx",highlighted:'options <span class="token operator">=</span> <span class="token punctuation">[</span>\n  { value<span class="token punctuation">:</span> <span class="token string">\'light\'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'Light\'</span> }<span class="token punctuation">,</span>\n  { value<span class="token punctuation">:</span> <span class="token string">\'bamboo\'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'Bamboo\'</span> }<span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>'},["code","options = [\n  { value: 'light', label: 'Light' },\n  { value: 'bamboo', label: 'Bamboo' },\n];"]]]}}}]);
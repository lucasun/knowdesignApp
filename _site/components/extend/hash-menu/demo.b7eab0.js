(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{4154:function(n,s,a){n.exports={base:a(5236)}},5236:function(n,s,a){n.exports={content:[],meta:{order:0,title:"基本",filename:"components/extend/hash-menu/demo/base.md",id:"components-extend-hash-menu-demo-base"},toc:["ul"],highlightedCode:["pre",{lang:"tsx",highlighted:'import React from <span class="token string">"react"</span><span class="token comment" spellcheck="true">;</span>\nimport { HashMenu } from <span class="token string">"knowdesign"</span><span class="token comment" spellcheck="true">;</span>\nimport { IMenuItem } from <span class="token string">\'../index.tsx\'</span><span class="token comment" spellcheck="true">; </span>\nexport <span class="token keyword">enum</span> TAB_LIST_KEY {\n  baseInfo <span class="token operator">=</span> <span class="token string">"baseInfo"</span><span class="token punctuation">,</span>\n  mapping <span class="token operator">=</span> <span class="token string">"mapping"</span><span class="token punctuation">,</span>\n  setting <span class="token operator">=</span> <span class="token string">"setting"</span><span class="token punctuation">,</span>\n}\n\nexport <span class="token keyword">const</span> TAB_LIST <span class="token operator">=</span> <span class="token punctuation">[</span>\n  {\n    name<span class="token punctuation">:</span> <span class="token string">"基本信息"</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> TAB_LIST_KEY<span class="token punctuation">.</span>baseInfo<span class="token punctuation">,</span>\n    content<span class="token punctuation">:</span> <span class="token operator">&lt;</span>span<span class="token operator">></span>基本信息<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token punctuation">,</span>\n  }<span class="token punctuation">,</span>\n  {\n    name<span class="token punctuation">:</span> <span class="token string">"Mapping信息"</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> TAB_LIST_KEY<span class="token punctuation">.</span>mapping<span class="token punctuation">,</span>\n    content<span class="token punctuation">:</span> <span class="token operator">&lt;</span>span<span class="token operator">></span>Mapping信息<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token punctuation">,</span>\n  }<span class="token punctuation">,</span>\n  {\n    name<span class="token punctuation">:</span> <span class="token string">"Setting信息"</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> TAB_LIST_KEY<span class="token punctuation">.</span>setting<span class="token punctuation">,</span>\n    content<span class="token punctuation">:</span>  <span class="token operator">&lt;</span>span<span class="token operator">></span>Setting信息<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token punctuation">,</span>\n  }<span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n\n<span class="token keyword">const</span> menuMap <span class="token operator">=</span> new Map<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> IMenuItem<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\nTAB_LIST<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n  return menuMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>key<span class="token punctuation">,</span> d<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n <span class="token keyword">const</span> MENU_MAP <span class="token operator">=</span> menuMap<span class="token comment" spellcheck="true">;</span>\n\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>HashMenu\n      TAB_LIST<span class="token operator">=</span>{TAB_LIST}\n      MENU_MAP<span class="token operator">=</span>{MENU_MAP}\n    <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>\n    mountNode\n<span class="token punctuation">)</span>'}],highlightedCodes:{tsx:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> HashMenu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"knowdesign"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> IMenuItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'../index.tsx\'</span><span class="token punctuation">;</span> \n<span class="token keyword">export</span> <span class="token keyword">enum</span> <span class="token constant">TAB_LIST_KEY</span> <span class="token punctuation">{</span>\n  baseInfo <span class="token operator">=</span> <span class="token string">"baseInfo"</span><span class="token punctuation">,</span>\n  mapping <span class="token operator">=</span> <span class="token string">"mapping"</span><span class="token punctuation">,</span>\n  setting <span class="token operator">=</span> <span class="token string">"setting"</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">TAB_LIST</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">"基本信息"</span><span class="token punctuation">,</span>\n    key<span class="token operator">:</span> <span class="token constant">TAB_LIST_KEY</span><span class="token punctuation">.</span>baseInfo<span class="token punctuation">,</span>\n    content<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>基本信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">"Mapping信息"</span><span class="token punctuation">,</span>\n    key<span class="token operator">:</span> <span class="token constant">TAB_LIST_KEY</span><span class="token punctuation">.</span>mapping<span class="token punctuation">,</span>\n    content<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Mapping信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">"Setting信息"</span><span class="token punctuation">,</span>\n    key<span class="token operator">:</span> <span class="token constant">TAB_LIST_KEY</span><span class="token punctuation">.</span>setting<span class="token punctuation">,</span>\n    content<span class="token operator">:</span>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Setting信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> menuMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> IMenuItem<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token constant">TAB_LIST</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> menuMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>key<span class="token punctuation">,</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token keyword">const</span> <span class="token constant">MENU_MAP</span> <span class="token operator">=</span> menuMap<span class="token punctuation">;</span>\n\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">HashMenu</span></span>\n      <span class="token attr-name">TAB_LIST</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token constant">TAB_LIST</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">MENU_MAP</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token constant">MENU_MAP</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n    mountNode\n<span class="token punctuation">)</span>',jsx:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> HashMenu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'knowdesign\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">let</span> <span class="token constant">TAB_LIST_KEY</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token constant">TAB_LIST_KEY</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token constant">TAB_LIST_KEY</span><span class="token punctuation">[</span><span class="token string">\'baseInfo\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">\'baseInfo\'</span><span class="token punctuation">;</span>\n  <span class="token constant">TAB_LIST_KEY</span><span class="token punctuation">[</span><span class="token string">\'mapping\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">\'mapping\'</span><span class="token punctuation">;</span>\n  <span class="token constant">TAB_LIST_KEY</span><span class="token punctuation">[</span><span class="token string">\'setting\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">\'setting\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token constant">TAB_LIST_KEY</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token constant">TAB_LIST_KEY</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">TAB_LIST</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">\'基本信息\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token constant">TAB_LIST_KEY</span><span class="token punctuation">.</span>baseInfo<span class="token punctuation">,</span>\n    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>基本信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">\'Mapping信息\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token constant">TAB_LIST_KEY</span><span class="token punctuation">.</span>mapping<span class="token punctuation">,</span>\n    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Mapping信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">\'Setting信息\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token constant">TAB_LIST_KEY</span><span class="token punctuation">.</span>setting<span class="token punctuation">,</span>\n    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Setting信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> menuMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token constant">TAB_LIST</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> menuMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>key<span class="token punctuation">,</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token constant">MENU_MAP</span> <span class="token operator">=</span> menuMap<span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">HashMenu</span></span> <span class="token attr-name">TAB_LIST</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token constant">TAB_LIST</span><span class="token punctuation">}</span></span> <span class="token attr-name">MENU_MAP</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token constant">MENU_MAP</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n'},preview:function(){a(0),a(35);Object.defineProperty(s,"__esModule",{value:!0}),s.TAB_LIST_KEY=s.TAB_LIST=void 0;var n,p,t=(n=a(0))&&n.__esModule?n:{default:n},o=a(96);s.TAB_LIST_KEY=p,function(n){n.baseInfo="baseInfo",n.mapping="mapping",n.setting="setting"}(p||(s.TAB_LIST_KEY=p={}));var e=[{name:"基本信息",key:p.baseInfo,content:t.default.createElement("span",null,"基本信息")},{name:"Mapping信息",key:p.mapping,content:t.default.createElement("span",null,"Mapping信息")},{name:"Setting信息",key:p.setting,content:t.default.createElement("span",null,"Setting信息")}];s.TAB_LIST=e;var c=new Map;e.forEach((function(n){return c.set(n.key,n)}));var l=c;return t.default.createElement(o.HashMenu,{TAB_LIST:e,MENU_MAP:l})}}}}]);
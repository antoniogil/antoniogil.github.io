(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o(6961)}])},1060:function(e,t,o){"use strict";o.d(t,{mu:function(){return c},rV:function(){return n}});var r=o(5893),a=o(7294),s=JSON.parse('{"username":"Antonio Gil","theme":{"name":"Dracula","backgroundColor":"#121317","windowColor":"#1e212b","textColor":"#e2e2e2","black":"#16161e","red":"#ec6183","green":"#2ed8a2","yellow":"#e8b195","blue":"#2bc3de","magenta":"#d1aff8","cyan":"#62e0e2","white":"#e2e2e2","gray":"#97989d"},"wallpaper":{"url":"assets/wallpaper.jpg","easing":"ease-in-out","fadeIn":true,"blur":false},"terminal":{"fixedHeight":true,"windowGlow":true,"windowGlowColor":"#291f3325","textGlow":false,"opacity":0,"blur":16},"prompt":{"ctrlC":true,"placeholder":"command...","placeholderColor":"gray","userColor":"green","atColor":"gray","hostColor":"magenta","promptColor":"magenta","promptSymbol":"❯","caretColor":"green","selectionBg":"yellow","selectionFg":"black"},"fetch":{"timeFormat":"HH:mm","dateFormat":"DD/MM/YYYY","titleColor":"yellow","image":"assets/default-icon.svg","data":["Time: {time}","Date: {date}","{seperator}","OS: {osName} {osVersion}","Theme: {theme}","{seperator}","Browser: {browser} {browserVersion}","Engine: {engineName}","{seperator}","{colors}"]},"urlLaunch":{"target":"_self","hoverColor":"magenta"},"search":{"default":"https://google.com/search?q=","target":"_self","shortcutRegex":"([A-Za-z0-9]+) (.*)","shortcuts":[{"alias":"g","name":"Google Search","url":"https://google.com/search?q={}"},{"alias":"d","name":"DuckDuckGo Search","url":"https://duckduckgo.com/?q={}"},{"alias":"b","name":"Brave Search","url":"https://search.brave.com/search?q={}"},{"alias":"gh","name":"Github Search","url":"https://github.com/search?q={}"},{"alias":"s","name":"Stack Overflow Search","url":"https://stackoverflow.com/search?q={}"},{"alias":"r","name":"Subreddit Search","url":"https://reddit.com/r/{}"},{"alias":"w","name":"Wikipedia Search","url":"https://en.wikipedia.org/wiki/{}"}]},"sections":{"list":[{"title":"Productivity","color":"green","align":"left","links":[{"name":"Notion","url":"https://notion.so","icon":"mdi:web"},{"name":"GPT","url":"https://chat.openai.com/","icon":"simple-icons:openai"},{"name":"Learn Microsoft","url":"https://learn.microsoft.com/","icon":"simple-icons:microsoft"},{"name":"Pomodoro","url":"https://app.pomodorotimer.online","icon":"mdi:timer"}]},{"title":"Hello world!","color":"black","align":"left","links":[{"name":"GitHub","url":"https://github.com","icon":"mdi:github"},{"name":"Stack Overflow","url":"https://stackoverflow.com/","icon":"mdi:stack-overflow"},{"name":"VariableNotFound","url":"https://variablenotfound.com","icon":"mdi:web"}]},{"title":"Social","color":"cyan","align":"left","links":[{"name":"Instragram","url":"https://instagram.com","icon":"simple-icons:polywork"},{"name":"Reddit","url":"https://reddit.com","icon":"mdi:reddit"},{"name":"Twitter","url":"https://twitter.com","icon":"mdi:twitter"},{"name":"Facebook","url":"https://facebook.com/","icon":"mdi:facebook"}]},{"title":"Twitch","color":"blue","align":"left","links":[{"name":"AlexElCapo","url":"https://www.twitch.tv/alexelcapo/","icon":"mdi:twitch"}]},{"title":"Youtube","color":"yellow","align":"left","links":[{"name":"Youtube","url":"https://www.youtube.com/","icon":"mdi:youtube"},{"name":"Lofi Girl","url":"https://www.youtube.com/watch?v=jfKfPfyJRdk","icon":"mdi:music"}]}]}}');let l="settings",i=(0,a.createContext)({settings:void 0,setSettings:e=>{}}),n=()=>(0,a.useContext)(i),c=e=>{let{children:t}=e,[o,n]=(0,a.useState)(),[c,u]=(0,a.useState)([]);(0,a.useEffect)(()=>{let e;"undefined"===(e=localStorage.getItem(l))&&console.log("LocalStorage configuration reset to defaults."),n(e?JSON.parse(e):s)},[]),(0,a.useEffect)(()=>{if(o&&"undefined"!==o){localStorage.setItem(l,JSON.stringify(o));let e=["help","fetch","config","config help","config edit","config import","config theme","config reset"];fetch("/api/getTheme").then(e=>e.json()).then(t=>{t.message||t.forEach(t=>{e.push("config theme "+t)})}).catch(e=>console.log("Error fetching themes: ".concat(e.message))),o.sections.list.map(t=>{t.links.map(t=>{e.push(t.name.toLowerCase())})}),u(e)}},[o]);let h=async e=>{await n(e)};return(0,r.jsx)(i.Provider,{value:{settings:o,setSettings:h,resetSettings:()=>{n(s)},items:c},children:t})}},6961:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return u}});var r=o(5893),a=o(7294);let s=(0,a.createContext)(null),l={didCatch:!1,error:null};class i extends a.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=l}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){let{error:e}=this.state;if(null!==e){for(var t,o,r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];null===(t=(o=this.props).onReset)||void 0===t||t.call(o,{args:a,reason:"imperative-api"}),this.setState(l)}}componentDidCatch(e,t){var o,r;null===(o=(r=this.props).onError)||void 0===o||o.call(r,e,t)}componentDidUpdate(e,t){let{didCatch:o}=this.state,{resetKeys:r}=this.props;if(o&&null!==t.error&&function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.length!==t.length||e.some((e,o)=>!Object.is(e,t[o]))}(e.resetKeys,r)){var a,s;null===(a=(s=this.props).onReset)||void 0===a||a.call(s,{next:r,prev:e.resetKeys,reason:"keys"}),this.setState(l)}}render(){let{children:e,fallbackRender:t,FallbackComponent:o,fallback:r}=this.props,{didCatch:l,error:i}=this.state,n=e;if(l){let e={error:i,resetErrorBoundary:this.resetErrorBoundary};if("function"==typeof t)n=t(e);else if(o)n=(0,a.createElement)(o,e);else if(null===r||(0,a.isValidElement)(r))n=r;else throw i}return(0,a.createElement)(s.Provider,{value:{didCatch:l,error:i,resetErrorBoundary:this.resetErrorBoundary}},n)}}var n=o(1060);function c(e){let{error:t,resetErrorBoundary:o}=e,a=t.message.includes("undefined");return(0,r.jsx)("div",{className:"absolute w-full h-auto py-4 transform -translate-x-1/2 -translate-y-1/2 shadow-lg text-textColor rounded-terminal bg-window-color max-w-terminal p-terminal top-1/2 left-1/2",children:(0,r.jsxs)("div",{role:"alert",children:[(0,r.jsx)("p",{children:"Something went wrong on your side:"}),(0,r.jsx)("p",{className:"text-red mb-line",children:t.message}),a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["This is probably caused by faulty or obsolete local configuration, stored in localStorage. Please refer to"," ",(0,r.jsx)("a",{className:"underline",href:"https://github.com/excalith/excalith-start-page/wiki/Troubleshooting",children:"troubleshooting"})," ","page for more information about how to fix this, or click the button below to reset to defaults."]}),(0,r.jsx)("button",{className:"px-4 py-2 rounded-terminal mt-line bg-red",onClick:()=>{!0==confirm("Are you sure you want to reset your configuration to defaults? If you made any customizations, you will lose them.")&&(localStorage.clear(),o(),console.log("LocalStorage configuration reset to defaults."))},children:"Erase And Reset All Data"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["This is an unexpected error. Please refer to"," ",(0,r.jsx)("a",{className:"underline",href:"https://github.com/excalith/excalith-start-page/wiki/Troubleshooting",children:"troubleshooting"})," ","possible solutions."]}),(0,r.jsxs)("p",{className:"mt-line",children:["If nothing helps, please report this issue on"," ",(0,r.jsx)("a",{className:"underline",href:"https://github.com/excalith/excalith-start-page/issues/new?assignees=excalith&labels=&template=bug-report.md&title=%5BBUG%5D+",children:"issues"})," ","by filling out the form. Don't forget to include the error message and add console logs if possible."]})]})]})})}function u(e){let{Component:t,pageProps:o}=e;return(0,r.jsx)(i,{fallbackRender:c,children:(0,r.jsx)(n.mu,{children:(0,r.jsx)(t,{...o})})})}o(9166)},9166:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(2937)}),_N_E=e.O()}]);
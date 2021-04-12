(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{19:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),i=(n(19),n(10)),s=n(4),l=n(6),u=n(5),b=n(12),j=Object(b.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return"ADD_STOCK"===e.type?t.concat([e.object]):"REMOVE_STOCK"===e.type?t.filter((function(t,n){return n!==e.index})):"CLEAR_STOCKS"===e.type?[]:t})),d=n(7),h=n(1),p=function(){return Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Ticker Symbol"}),Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Current Price"}),Object(h.jsx)("th",{children:"Market Cap"}),Object(h.jsx)("th",{children:"Book Value Trailing 12 Months"}),Object(h.jsx)("th",{children:"Remove"})]})})},m=function(t){var e=t.stockData.map((function(e,n){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.symbol}),Object(h.jsx)("td",{children:e.companyName}),Object(h.jsx)("td",{children:Object(h.jsx)(d.a,{value:e.price,displayType:"text",thousandSeparator:!0,prefix:"$"})}),Object(h.jsx)("td",{children:Object(h.jsx)(d.a,{value:e.mktCap,displayType:"text",thousandSeparator:!0,prefix:"$"})}),Object(h.jsx)("td",{children:Object(h.jsx)(d.a,{value:e.bookValuePerShareTTM,displayType:"text",thousandSeparator:!0,prefix:"$"})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:function(){return t.removeStock(n)},children:"Delete"})})]},n)}));return Object(h.jsx)("tbody",{children:e})},O=function(t){var e=t.stockData,n=t.removeStock;return Object(h.jsxs)("table",{children:[Object(h.jsx)(p,{}),Object(h.jsx)(m,{stockData:e,removeStock:n})]})},f=n(3),S=n(14),x=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).initialState={symbol:""},a.state=a.initialState,a.handleChange=function(t){var e=t.target,n=e.name,c=e.value;a.setState(Object(f.a)({},n,c))},a.submitForm=function(){a.props.handleSubmit(a.state),a.setState(a.initialState)},a.componentDidMount=function(){a.element.current.addEventListener("keypress",(function(t){if(13===t.keyCode)return t.preventDefault(),a.submitForm(),!1}))},a.element=c.a.createRef(),a}return Object(S.a)(n,[{key:"render",value:function(){var t=this.state.symbol;return Object(h.jsxs)("form",{ref:this.element,children:[Object(h.jsx)("label",{htmlFor:"name",children:"Enter a Ticker Symbol"}),Object(h.jsx)("input",{type:"text",name:"symbol",id:"symbol",value:t,onChange:this.handleChange}),Object(h.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm,disabled:!this.state.symbol})]})}}]),n}(a.Component),y=n(8),v=(n(23),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=j.getState(),t.updateStateFromStore=function(){t.setState(j.getState())},t.componentDidMount=function(){t.unsubscribeStore=j.subscribe(t.updateStateFromStore);var e=new URLSearchParams(window.location.search);console.log("here",e.getAll("symbol")),e.getAll("symbol").forEach((function(e){console.log("symbol",e),t.handleSubmit({symbol:e})}))},t.componentWillUnmount=function(){t.unsubscribeStore()},t.removeStock=function(t){j.dispatch({type:"REMOVE_STOCK",index:t})},t.handleSubmit=function(t){!function(t){fetch("https://financialmodelingprep.com/api/v3/profile/"+t.symbol.toUpperCase()+"?apikey=ea4063dd504a48c85e6a945bf8918972").then((function(t){return t.status>299&&Object(y.b)("API error "+t.status),t.json()})).then((function(e){e[0]?fetch("https://financialmodelingprep.com/api/v3/key-metrics-ttm/"+t.symbol.toUpperCase()+"?apikey=ea4063dd504a48c85e6a945bf8918972").then((function(t){return t.json()})).then((function(t){e=Object(i.a)(Object(i.a)({},e[0]),t[0]),j.dispatch({type:"ADD_STOCK",object:e})})):Object(y.b)("Symbol "+t.symbol.toUpperCase()+" not found")}))}(t)},t.handleUpdate=function(){var e=j.getState();j.dispatch({type:"CLEAR_STOCKS"}),e.forEach((function(e,n){t.handleSubmit(e)}))},t.render=function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(x,{handleSubmit:t.handleSubmit}),Object(h.jsx)(O,{stockData:j.getState(),removeStock:t.removeStock}),Object(h.jsx)("input",{type:"button",value:"Update",onClick:t.handleUpdate}),Object(h.jsx)(y.a,{})]})},t}return n}(a.Component));o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.45bdd1d9.chunk.js.map
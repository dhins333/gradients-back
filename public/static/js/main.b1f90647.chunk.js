(this.webpackJsonpgradient=this.webpackJsonpgradient||[]).push([[0],{42:function(e,a,t){e.exports=t(90)},89:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(13),o=t.n(r),l=t(12),i=t(4),s=function(){return n.a.createElement("div",{className:"header"},n.a.createElement(l.b,{to:"/",style:{textDecoration:"none"}},n.a.createElement("h2",{className:"header-h2"},"Gradients")),n.a.createElement("div",null,n.a.createElement(l.c,{exact:!0,to:"/",activeClassName:"nav-active",className:"nav-item"},"Home"),n.a.createElement(l.c,{exact:!0,to:"/showcase",activeClassName:"nav-active",className:"nav-item"},"Showcase")))},u=t(3),p=function(){var e=Object(u.c)((function(e){return{color1:e.color1,color2:e.color2,percent1:e.percent1,percent2:e.percent2,type:e.type,deg:e.deg}})),a=e.color1,t=e.color2,c=e.percent1,r=e.percent2,o=e.type,l=e.deg,i={background:"".concat(o,"-gradient(").concat("linear"===o?l+"deg":"circle",", rgba(").concat(a[0],",").concat(a[1],",").concat(a[2],",").concat(a[3],") ").concat(c,"%, rgba(").concat(t[0],",").concat(t[1],",").concat(t[2],",").concat(t[3],") ").concat(r,"%)")};return n.a.createElement("div",{className:"color-box",style:i})},m=t(10),d=t(17),g=function(e){var a={background:"rgba(".concat(e.rgba[0],",").concat(e.rgba[1],",").concat(e.rgba[2],",").concat(e.rgba[3],")")};return n.a.createElement("div",{className:"thumbnail",style:a})},b=function(e){return n.a.createElement("div",{className:"rgb"},n.a.createElement("p",{className:"rgb-text"},"rgba(".concat(e.rgba[0],",").concat(e.rgba[1],",").concat(e.rgba[2],",").concat(e.rgba[3],")")))},v=function(e){var a=Object(u.b)(),t=Object(c.useState)(e.colorValue[0]),r=Object(m.a)(t,2),o=r[0],l=r[1],i=Object(c.useState)(e.colorValue[1]),s=Object(m.a)(i,2),p=s[0],d=s[1],g=Object(c.useState)(e.colorValue[2]),b=Object(m.a)(g,2),v=b[0],h=b[1],E=Object(c.useState)(e.percent),y=Object(m.a)(E,2),f=y[0],j=y[1],O=Object(c.useState)(e.colorValue[3]),N=Object(m.a)(O,2),_=N[0],k=N[1],w=function(t){1===e.pos?a({type:"alpha_change1",alpha:t}):a({type:"alpha_change2",alpha:t})};return n.a.createElement("div",{className:"picker",style:e.style},n.a.createElement("div",{className:"picker-rgb"},n.a.createElement("input",{type:"range",min:"0",max:"255",value:o,onChange:function(t){l(t.target.value),1===e.pos?a({type:"red_change1",red:t.target.value}):a({type:"red_change2",red:t.target.value})},className:"slider red"}),n.a.createElement("input",{type:"range",min:"0",max:"255",value:p,onChange:function(t){d(t.target.value),1===e.pos?a({type:"green_change1",green:t.target.value}):a({type:"green_change2",green:t.target.value})},className:"slider green"}),n.a.createElement("input",{type:"range",min:"0",max:"255",value:v,onChange:function(t){h(t.target.value),1===e.pos?a({type:"blue_change1",blue:t.target.value}):a({type:"blue_change2",blue:t.target.value})},className:"slider blue"})),n.a.createElement("div",{className:"picker-misc"},n.a.createElement("p",null,"Percent ",f),n.a.createElement("input",{type:"range",min:"0",max:"100",value:f,onChange:function(t){j(t.target.value),1===e.pos?a({type:"percent_change1",percent:t.target.value}):a({type:"percent_change2",percent:t.target.value})},className:"slider percent"}),n.a.createElement("p",null,"Alpha:"),n.a.createElement("input",{type:"number",value:_,onChange:function(e){e.target.value<0?(k(0),w(0)):e.target.value>1?(k(1),w(1)):(k(e.target.value),w(e.target.value))},className:"picker-misc-alpha"})))},h=function(e){var a=Object(c.useState)(!1),t=Object(m.a)(a,2),r=t[0],o=t[1],l=e.colorValue,i=e.pos,s=e.percent;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"color"},n.a.createElement(g,{rgba:e.colorValue}),n.a.createElement(b,{rgba:e.colorValue}),n.a.createElement("i",{className:"expand fas fa-caret-square-down",onClick:function(e){o(!r)}})),!0===r?n.a.createElement(d.Spring,{from:{opacity:"0"},to:{opacity:"1"}},(function(e){return n.a.createElement("div",{style:e},n.a.createElement(v,{colorValue:l,pos:i,percent:s}))})):void 0)},E=function(){var e=Object(u.c)((function(e){return{color1:e.color1,color2:e.color2,percent1:e.percent1,percent2:e.percent2}})),a=e.color1,t=e.color2,c=e.percent1,r=e.percent2;return n.a.createElement("div",{className:"mixer"},n.a.createElement(h,{colorValue:a,pos:1,percent:c}),n.a.createElement(h,{colorValue:t,pos:2,percent:r}))},y=function(){var e=Object(u.c)((function(e){return{type:e.type,deg:e.deg}})),a=e.type,t=e.deg,c=Object(u.b)();return n.a.createElement("div",{className:"misc"},n.a.createElement("div",{className:"typebuttons"},n.a.createElement("div",{className:"linear"===a?"typebuttons-linear active":"typebuttons-linear",onClick:function(e){"linear"!==a&&c({type:"change_type"})}},"Linear"),n.a.createElement("div",{className:"radial"===a?"typebuttons-radial active":"typebuttons-radial",onClick:function(e){"radial"!==a&&c({type:"change_type"})}},"Radial")),n.a.createElement("div",{className:"degree-slider-container"},n.a.createElement("input",{type:"range",min:"0",max:"359",className:"linear"!==a?"degree-slider disabled":"degree-slider",disabled:"linear"!==a,value:t,onChange:function(e){c({type:"change_deg",deg:e.target.value})}})))},f=function(){var e=Object(u.b)();return n.a.createElement("div",{className:"css",onClick:function(a){e({type:"toggle_modal"})}},"Get CSS")},j=(t(67),t(68),t(20),t(38));t(69);var O=function(){var e=Object(u.c)((function(e){return{color1:e.color1,color2:e.color2,percent1:e.percent1,percent2:e.percent2,type:e.type,deg:e.deg}})),a=e.color1,t=e.color2,c=e.percent1,r=e.percent2,o=e.type,l=e.deg,i=Object(u.b)(),s="background:".concat(o,"-gradient(").concat("linear"===o?l+"deg":"circle",", rgba(").concat(a[0],",").concat(a[1],",").concat(a[2],",").concat(a[3],") ").concat(c,"%, rgba(").concat(t[0],",").concat(t[1],",").concat(t[2],",").concat(t[3],") ").concat(r,"%)"),p={mode:"css",theme:"material",lineNumbers:!0},m=function(e){i({type:"toggle_modal"})};return n.a.createElement(d.Spring,{from:{transform:"translate3d(0,-100vh,0)"},to:{transform:"translate3d(0,0vh,0)"}},(function(e){return n.a.createElement("div",{className:"overlay",style:e},n.a.createElement("div",{className:"close-container"},n.a.createElement("i",{className:"fas fa-window-close fa-2x close",onClick:m})),n.a.createElement("div",null,n.a.createElement(j.Controlled,{value:s,options:p})))}))},N=function(){var e=Object(u.c)((function(e){return e.modal}));!0===e?(window.scrollTo(0,0),document.querySelector("body").style.overflowY="hidden"):document.querySelector("body").style.overflowY="visible";return n.a.createElement("div",{className:"mainpage"},n.a.createElement(p,null),n.a.createElement(E,null),n.a.createElement(y,null),n.a.createElement(f,null),!0===e?n.a.createElement(O,null):void 0)},_=function(e){var a=Object(u.c)((function(e){return e.showcase})),t="rgba(".concat(a[e.position].color1[0],",").concat(a[e.position].color1[1],",").concat(a[e.position].color1[2],",").concat(a[e.position].color1[3],")"),c="rgba(".concat(a[e.position].color2[0],",").concat(a[e.position].color2[1],",").concat(a[e.position].color2[2],",").concat(a[e.position].color2[3],")");return n.a.createElement("div",{className:"details-container"},n.a.createElement("div",{className:"details"},n.a.createElement("div",{className:"details-item1"},n.a.createElement("p",{className:"details-color1 details-text"},t),n.a.createElement("p",{className:"details-arrow details-text"},"-> "),n.a.createElement("p",{className:"details-color2 details-text"},c))))},k=function(e){var a=Object(u.c)((function(e){return e.showcase})),t=a[e.position].color1,c=a[e.position].color2,r=a[e.position].percent1,o=a[e.position].percent2,l=a[e.position].type,i=a[e.position].deg,s={background:"".concat(l,"-gradient(").concat("linear"===l?i+"deg":"circle",", rgba(").concat(t[0],",").concat(t[1],",").concat(t[2],",").concat(t[3],") ").concat(r,"%, rgba(").concat(c[0],",").concat(c[1],",").concat(c[2],",").concat(c[3],") ").concat(o,"%)")};return n.a.createElement("div",{className:"background",style:s},n.a.createElement("div",{className:"background-prev",style:0===e.position?{visibility:"hidden"}:{},onClick:e.prevClick},"<"),n.a.createElement("div",{className:"background-next",style:e.position===a.length-1?{visibility:"hidden"}:{},onClick:e.nextClick},">"))},w=t(24),x=t.n(w),C=t(39),S=t(40),V=t.n(S),q=function(){Object(c.useEffect)((function(){document.querySelector("body").style.overflowY="hidden"}),[]);var e=Object(u.c)((function(e){return e.showcase})),a=Object(u.b)(),t=Object(c.useState)(0),r=Object(m.a)(t,2),o=r[0],l=r[1];return 0!==e.length?n.a.createElement("div",{className:"showcasepage"},n.a.createElement(_,{position:o}),n.a.createElement(k,{position:o,nextClick:function(e){l(o+1)},prevClick:function(e){l(o-1)}})):(a(function(){var e=Object(C.a)(x.a.mark((function e(a){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("/api/get");case 2:t=e.sent,a({type:"addToShowcase",data:t.data});case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),n.a.createElement("div",null,n.a.createElement("div",{className:"loaderContainer"},n.a.createElement("div",{className:"loader"}))))},T=function(){return n.a.createElement("div",{className:"error"},n.a.createElement("h1",{className:"error-text"},"404 Not Found"))},Y=function(){return n.a.createElement(l.a,null,n.a.createElement(s,null),n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/",component:N,exact:!0}),n.a.createElement(i.a,{path:"/showcase",component:q,exact:!0}),n.a.createElement(i.a,{path:"*",component:T})))},F=t(15),G=t(1),J=function(e,a){switch(a.type){case"red_change1":return Object(G.a)(Object(G.a)({},e),{},{color1:[a.red,e.color1[1],e.color1[2],e.color1[3]]});case"red_change2":return Object(G.a)(Object(G.a)({},e),{},{color2:[a.red,e.color2[1],e.color2[2],e.color2[3]]});case"green_change1":return Object(G.a)(Object(G.a)({},e),{},{color1:[e.color1[0],a.green,e.color1[2],e.color1[3]]});case"green_change2":return Object(G.a)(Object(G.a)({},e),{},{color2:[e.color2[0],a.green,e.color2[2],e.color2[3]]});case"blue_change1":return Object(G.a)(Object(G.a)({},e),{},{color1:[e.color1[0],e.color1[1],a.blue,e.color1[3]]});case"blue_change2":return Object(G.a)(Object(G.a)({},e),{},{color2:[e.color2[0],e.color2[1],a.blue,e.color2[3]]});case"percent_change1":return Object(G.a)(Object(G.a)({},e),{},{percent1:a.percent});case"percent_change2":return Object(G.a)(Object(G.a)({},e),{},{percent2:a.percent});case"alpha_change1":return Object(G.a)(Object(G.a)({},e),{},{color1:[e.color1[0],e.color1[1],e.color1[2],a.alpha]});case"alpha_change2":return Object(G.a)(Object(G.a)({},e),{},{color2:[e.color2[0],e.color2[1],e.color2[2],a.alpha]});case"change_type":return"linear"===e.type?Object(G.a)(Object(G.a)({},e),{},{type:"radial"}):Object(G.a)(Object(G.a)({},e),{},{type:"linear"});case"change_deg":return Object(G.a)(Object(G.a)({},e),{},{deg:a.deg});case"toggle_modal":return Object(G.a)(Object(G.a)({},e),{},{modal:!e.modal});case"addToShowcase":return Object(G.a)(Object(G.a)({},e),{},{showcase:a.data});default:return e}},A=t(41),D=Object(F.c)(J,{color1:[253,116,108,1],color2:[255,144,104,1],percent1:"0",percent2:"100",type:"linear",deg:87,modal:!1,showcase:[]},Object(F.a)(A.a)),H=(t(88),t(89),document.querySelector("#app"));o.a.render(n.a.createElement(u.a,{store:D},n.a.createElement(Y,null)),H)}},[[42,1,2]]]);
//# sourceMappingURL=main.b1f90647.chunk.js.map
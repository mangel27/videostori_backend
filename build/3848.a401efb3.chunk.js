(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[3848],{44174:l=>{function s(e,t,r,n){for(var a=-1,i=e==null?0:e.length;++a<i;){var c=e[a];t(n,c,r(c),e)}return n}l.exports=s},47443:(l,s,e)=>{var t=e(42118);function r(n,a){var i=n==null?0:n.length;return!!i&&t(n,a,0)>-1}l.exports=r},1196:l=>{function s(e,t,r){for(var n=-1,a=e==null?0:e.length;++n<a;)if(r(t,e[n]))return!0;return!1}l.exports=s},48983:(l,s,e)=>{var t=e(40371),r=t("length");l.exports=r},81119:(l,s,e)=>{var t=e(89881);function r(n,a,i,c){return t(n,function(h,v,x){a(c,h,i(h),x)}),c}l.exports=r},41848:l=>{function s(e,t,r,n){for(var a=e.length,i=r+(n?1:-1);n?i--:++i<a;)if(t(e[i],i,e))return i;return-1}l.exports=s},42118:(l,s,e)=>{var t=e(41848),r=e(62722),n=e(42351);function a(i,c,h){return c===c?n(i,c,h):t(i,r,h)}l.exports=a},62722:l=>{function s(e){return e!==e}l.exports=s},45652:(l,s,e)=>{var t=e(88668),r=e(47443),n=e(1196),a=e(74757),i=e(23593),c=e(21814),h=200;function v(x,C,E){var u=-1,o=r,d=x.length,_=!0,m=[],g=m;if(E)_=!1,o=n;else if(d>=h){var f=C?null:i(x);if(f)return c(f);_=!1,o=a,g=new t}else g=C?[]:m;e:for(;++u<d;){var p=x[u],w=C?C(p):p;if(p=E||p!==0?p:0,_&&w===w){for(var Z=g.length;Z--;)if(g[Z]===w)continue e;C&&g.push(w),m.push(p)}else o(g,w,E)||(g!==m&&g.push(w),m.push(p))}return m}l.exports=v},55189:(l,s,e)=>{var t=e(44174),r=e(81119),n=e(67206),a=e(1469);function i(c,h){return function(v,x){var C=a(v)?t:r,E=h?h():{};return C(v,c,n(x,2),E)}}l.exports=i},23593:(l,s,e)=>{var t=e(58525),r=e(50308),n=e(21814),a=1/0,i=t&&1/n(new t([,-0]))[1]==a?function(c){return new t(c)}:r;l.exports=i},42351:l=>{function s(e,t,r){for(var n=r-1,a=e.length;++n<a;)if(e[n]===t)return n;return-1}l.exports=s},88016:(l,s,e)=>{var t=e(48983),r=e(62689),n=e(21903);function a(i){return r(i)?n(i):t(i)}l.exports=a},21903:l=>{var s="\\ud800-\\udfff",e="\\u0300-\\u036f",t="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",n=e+t+r,a="\\ufe0e\\ufe0f",i="["+s+"]",c="["+n+"]",h="\\ud83c[\\udffb-\\udfff]",v="(?:"+c+"|"+h+")",x="[^"+s+"]",C="(?:\\ud83c[\\udde6-\\uddff]){2}",E="[\\ud800-\\udbff][\\udc00-\\udfff]",u="\\u200d",o=v+"?",d="["+a+"]?",_="(?:"+u+"(?:"+[x,C,E].join("|")+")"+d+o+")*",m=d+o+_,g="(?:"+[x+c+"?",c,C,E,i].join("|")+")",f=RegExp(h+"(?="+h+")|"+g+m,"g");function p(w){for(var Z=f.lastIndex=0;f.test(w);)++Z;return Z}l.exports=p},7739:(l,s,e)=>{var t=e(89465),r=e(55189),n=Object.prototype,a=n.hasOwnProperty,i=r(function(c,h,v){a.call(c,v)?c[v].push(h):t(c,v,[h])});l.exports=i},47037:(l,s,e)=>{var t=e(44239),r=e(1469),n=e(37005),a="[object String]";function i(c){return typeof c=="string"||!r(c)&&n(c)&&t(c)==a}l.exports=i},50308:l=>{function s(){}l.exports=s},84238:(l,s,e)=>{var t=e(280),r=e(64160),n=e(98612),a=e(47037),i=e(88016),c="[object Map]",h="[object Set]";function v(x){if(x==null)return 0;if(n(x))return a(x)?i(x):x.length;var C=r(x);return C==c||C==h?x.size:t(x).length}l.exports=v},7334:(l,s,e)=>{var t=e(79833);function r(n){return t(n).toLowerCase()}l.exports=r},44908:(l,s,e)=>{var t=e(45652);function r(n){return n&&n.length?t(n):[]}l.exports=r},20573:(l,s,e)=>{"use strict";e.d(s,{P1:()=>x});var t="NOT_FOUND";function r(E){var u;return{get:function(d){return u&&E(u.key,d)?u.value:t},put:function(d,_){u={key:d,value:_}},getEntries:function(){return u?[u]:[]},clear:function(){u=void 0}}}function n(E,u){var o=[];function d(f){var p=o.findIndex(function(Z){return u(f,Z.key)});if(p>-1){var w=o[p];return p>0&&(o.splice(p,1),o.unshift(w)),w.value}return t}function _(f,p){d(f)===t&&(o.unshift({key:f,value:p}),o.length>E&&o.pop())}function m(){return o}function g(){o=[]}return{get:d,put:_,getEntries:m,clear:g}}var a=function(u,o){return u===o};function i(E){return function(o,d){if(o===null||d===null||o.length!==d.length)return!1;for(var _=o.length,m=0;m<_;m++)if(!E(o[m],d[m]))return!1;return!0}}function c(E,u){var o=typeof u=="object"?u:{equalityCheck:u},d=o.equalityCheck,_=d===void 0?a:d,m=o.maxSize,g=m===void 0?1:m,f=o.resultEqualityCheck,p=i(_),w=g===1?r(p):n(g,p);function Z(){var M=w.get(arguments);if(M===t){if(M=E.apply(null,arguments),f){var P=w.getEntries(),b=P.find(function(O){return f(O.value,M)});b&&(M=b.value)}w.put(arguments,M)}return M}return Z.clearCache=function(){return w.clear()},Z}function h(E){var u=Array.isArray(E[0])?E[0]:E;if(!u.every(function(d){return typeof d=="function"})){var o=u.map(function(d){return typeof d=="function"?"function "+(d.name||"unnamed")+"()":typeof d}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+o+"]")}return u}function v(E){for(var u=arguments.length,o=new Array(u>1?u-1:0),d=1;d<u;d++)o[d-1]=arguments[d];var _=function(){for(var g=arguments.length,f=new Array(g),p=0;p<g;p++)f[p]=arguments[p];var w=0,Z,M={memoizeOptions:void 0},P=f.pop();if(typeof P=="object"&&(M=P,P=f.pop()),typeof P!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof P+"]");var b=M,O=b.memoizeOptions,y=O===void 0?o:O,j=Array.isArray(y)?y:[y],B=h(f),F=E.apply(void 0,[function(){return w++,P.apply(null,arguments)}].concat(j)),A=E(function(){for(var S=[],L=B.length,T=0;T<L;T++)S.push(B[T].apply(null,arguments));return Z=F.apply(null,S),Z});return Object.assign(A,{resultFunc:P,memoizedResultFunc:F,dependencies:B,lastResult:function(){return Z},recomputations:function(){return w},resetRecomputations:function(){return w=0}}),A};return _}var x=v(c),C=function(u,o){if(o===void 0&&(o=x),typeof u!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof u));var d=Object.keys(u),_=o(d.map(function(m){return u[m]}),function(){for(var m=arguments.length,g=new Array(m),f=0;f<m;f++)g[f]=arguments[f];return g.reduce(function(p,w,Z){return p[d[Z]]=w,p},{})});return _}},17034:(l,s,e)=>{"use strict";e.d(s,{A:()=>h});var t=e(67294),r=e(45697),n=e(71997),a=e(41580);const i=(0,n.ZP)(a.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:v})=>v?"auto 1fr":"1fr"};
`,c=(0,n.ZP)(a.x)`
  overflow-x: hidden;
`,h=({sideNav:v,children:x})=>t.createElement(i,{hasSideNav:Boolean(v)},v,t.createElement(c,{paddingBottom:10},x));h.defaultProps={sideNav:void 0},h.propTypes={children:r.node.isRequired,sideNav:r.node}},53192:(l,s,e)=>{"use strict";e.d(s,{m:()=>h});var t=e(67294),r=e(45697),n=e(71997),a=e(11276);const i=`${232/16}rem`,c=(0,n.ZP)(a.r)`
  width: ${i};
  background: ${({theme:v})=>v.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:v})=>v.colors.neutral200};
  z-index: 1;
`,h=({ariaLabel:v,...x})=>t.createElement(c,{"aria-label":v,as:"nav",...x});h.propTypes={ariaLabel:r.string.isRequired}},60984:(l,s,e)=>{"use strict";e.d(s,{p:()=>m});var t=e(67294),r=e(97184),n=e(45697),a=e(71997),i=e(41580),c=e(70004),h=e(11047),v=e(7801),x=e(2504);const C=g=>{const f=(0,t.useRef)();return(0,t.useEffect)(()=>{f.current=g}),f.current};var E=e(12028),u=e(49123),o=e(8509),d=e(75515);const _=(0,a.ZP)(c.i)`
  width: ${24/16}rem;
  background-color: ${({theme:g})=>g.colors.neutral200};
`,m=({as:g,label:f,searchLabel:p,searchable:w,onChange:Z,value:M,onClear:P,onSubmit:b,id:O})=>{const[y,j]=(0,t.useState)(!1),B=C(y),F=(0,x.M)(O),A=(0,t.useRef)(),D=(0,t.useRef)();(0,t.useEffect)(()=>{y&&A.current&&A.current.focus(),B&&!y&&D.current&&D.current.focus()},[y,B]);const S=()=>{j(R=>!R)},L=R=>{P(R),A.current.focus()},T=R=>{R.relatedTarget?.id!==F&&j(!1)},I=R=>{R.key===v.y.ESCAPE&&j(!1)};return y?t.createElement(i.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4},t.createElement(o.U,null,t.createElement(u.w,{name:"searchbar",value:M,onChange:Z,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:I,ref:A,onBlur:T,onClear:L,onSubmit:b,clearLabel:"Clear",size:"S"},p)),t.createElement(i.x,{paddingLeft:2,paddingTop:4},t.createElement(_,null))):t.createElement(i.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4},t.createElement(h.k,{justifyContent:"space-between",alignItems:"flex-start"},t.createElement(d.Z,{variant:"beta",as:g},f),w&&t.createElement(E.h,{ref:D,onClick:S,label:p,icon:t.createElement(r.Z,null)})),t.createElement(i.x,{paddingTop:4},t.createElement(_,null)))};m.defaultProps={as:"h2",searchable:!1,onChange(){},onClear(){},onSubmit(){},value:"",searchLabel:"",id:void 0},m.propTypes={as:n.string,id:n.string,label:n.string.isRequired,onChange:n.func,onClear:n.func,onSubmit:n.func,searchLabel:n.string,searchable:n.bool,value:n.string}},52305:(l,s,e)=>{"use strict";e.d(s,{E:()=>u});var t=e(67294),r=e(71818),n=e(45697),a=e(71997),i=e(63507),c=e(41580),h=e(11047),v=e(75515);const x=(0,a.ZP)(c.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:o})=>o.colors.neutral800};
  svg > * {
    fill: ${({theme:o})=>o.colors.neutral600};
  }

  &.active {
    ${({theme:o})=>`
      background-color: ${o.colors.primary100};
      border-right: 2px solid ${o.colors.primary600};
      svg > * {
        fill: ${o.colors.primary700};
      }
      ${v.Z} {
        color: ${o.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,C=(0,a.ZP)(r.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:o,$active:d})=>d?o.colors.primary600:o.colors.neutral600};
  }
`,E=a.ZP.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,u=t.forwardRef(({children:o,icon:d,withBullet:_,as:m,isSubSectionChild:g,...f},p)=>t.createElement(x,{as:m,icon:d,background:"neutral100",paddingLeft:g?9:7,paddingBottom:2,paddingTop:2,ref:p,...f},t.createElement(h.k,null,d?t.createElement(E,null,d):t.createElement(C,null),t.createElement(c.x,{paddingLeft:2},t.createElement(v.Z,{as:"span"},o))),_&&t.createElement(c.x,{as:h.k,paddingRight:4},t.createElement(C,{$active:!0}))));u.displayName="SubNavLink",u.defaultProps={as:i.f,icon:null,isSubSectionChild:!1,withBullet:!1},u.propTypes={as:n.elementType,children:n.node.isRequired,icon:n.element,isSubSectionChild:n.bool,withBullet:n.bool}},29489:(l,s,e)=>{"use strict";e.d(s,{D:()=>d});var t=e(67294),r=e(45697),n=e(71997),a=e(12645),i=e(41580),c=e(11047),h=e(75515);const v=(0,n.ZP)(c.k)`
  border: none;
  padding: 0;
  background: transparent;
`,x=n.ZP.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:_})=>_?"0deg":"180deg"});
`,C=({collapsable:_,label:m,onClick:g,ariaExpanded:f,ariaControls:p})=>_?t.createElement(v,{as:"button",onClick:g,"aria-expanded":f,"aria-controls":p,textAlign:"left"},t.createElement(i.x,{paddingRight:1},t.createElement(h.Z,{variant:"sigma",textColor:"neutral600"},m)),_&&t.createElement(x,{rotated:f},t.createElement(a.Z,{"aria-hidden":!0}))):t.createElement(v,null,t.createElement(i.x,{paddingRight:1},t.createElement(h.Z,{variant:"sigma",textColor:"neutral600"},m)));C.defaultProps={ariaControls:null,ariaExpanded:null,collapsable:!1,onClick(){}},C.propTypes={ariaControls:r.string,ariaExpanded:r.bool,collapsable:r.bool,label:r.string.isRequired,onClick:r.func};var E=e(30190),u=e(2504);const o=(0,n.ZP)(i.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:_})=>_.colors.neutral500};
    }
  }
`,d=({collapsable:_,label:m,badgeLabel:g,children:f,id:p})=>{const[w,Z]=(0,t.useState)(!0),M=(0,u.M)(p),P=()=>{Z(b=>!b)};return t.createElement(c.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(o,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4},t.createElement(i.x,{position:"relative",paddingRight:g?6:0},t.createElement(C,{onClick:P,ariaExpanded:w,ariaControls:M,collapsable:_,label:m}),g&&t.createElement(E.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},g))),(!_||w)&&t.createElement("ol",{id:M},t.Children.map(f,(b,O)=>t.createElement("li",{key:O},b))))};d.defaultProps={badgeLabel:null,collapsable:!1,id:void 0},d.propTypes={badgeLabel:r.string,children:r.node.isRequired,collapsable:r.bool,id:r.string,label:r.string.isRequired}},34446:(l,s,e)=>{"use strict";e.d(s,{Z:()=>i});var t=e(67294),r=e(45697),n=e(41580),a=e(11047);const i=({children:c,spacing:h=2,horizontal:v=!1,...x})=>t.createElement(n.x,{paddingTop:2,paddingBottom:4},t.createElement(a.k,{as:"ol",gap:h,direction:v?"row":"column",alignItems:v?"center":"stretch",...x},t.Children.map(c,(C,E)=>t.createElement("li",{key:E},C))));i.propTypes={children:r.node.isRequired}},14484:(l,s,e)=>{"use strict";e.d(s,{Z:()=>n});var t=e(85893);const r=a=>(0,t.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,t.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#EAFBE7",stroke:"#C6F0C2"}),(0,t.jsx)("path",{d:"M19.5 7h-7A4.505 4.505 0 0 0 8 11.5c0 2.481 2.019 4.5 4.5 4.5h7c2.481 0 4.5-2.019 4.5-4.5S21.981 7 19.5 7Zm0 8a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z",fill:"#328048"})]}),n=r},85038:(l,s,e)=>{"use strict";e.d(s,{Z:()=>n});var t=e(85893);const r=a=>(0,t.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,t.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#F6F6F9",stroke:"#DCDCE4"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.535 8.768c0 .116-.011.229-.032.339l3.013 1.776 2.985-1.76a1.768 1.768 0 1 1 .519.93l-2.982 1.757v2.477a1.768 1.768 0 1 1-1.048-.044v-2.435l-2.997-1.767a1.768 1.768 0 1 1 .542-1.274Z",fill:"#666687"}),(0,t.jsx)("path",{d:"m13.503 9.107-.05-.01-.006.035.03.018.026-.043Zm3.013 1.776-.025.043.025.014.025-.014-.025-.043Zm2.985-1.76.025.044.031-.018-.007-.035-.05.01Zm.518.93.035-.036-.027-.026-.033.02.026.042Zm-2.98 1.757-.026-.043-.025.014v.029h.05Zm0 2.477h-.05v.035l.032.012.017-.047Zm-1.049-.044.013.048.037-.01v-.038h-.05Zm0-2.435h.05v-.029l-.024-.014-.026.043Zm-2.997-1.767.025-.043-.033-.019-.027.027.035.035Zm.559-.925c.022-.113.033-.23.033-.348h-.1c0 .112-.01.223-.031.33l.098.018Zm2.99 1.723-3.014-1.775-.05.086 3.013 1.775.05-.086Zm2.933-1.758-2.984 1.758.05.086 2.985-1.758-.05-.086Zm-.06-.313c0 .125.013.247.037.366l.098-.02a1.723 1.723 0 0 1-.035-.346h-.1Zm1.818-1.818a1.818 1.818 0 0 0-1.818 1.818h.1c0-.949.769-1.718 1.718-1.718v-.1Zm1.817 1.818a1.818 1.818 0 0 0-1.817-1.818v.1c.948 0 1.717.769 1.717 1.718h.1Zm-1.817 1.817a1.818 1.818 0 0 0 1.817-1.817h-.1c0 .948-.769 1.717-1.717 1.717v.1Zm-1.248-.495c.326.307.765.495 1.248.495v-.1c-.457 0-.872-.178-1.18-.468l-.068.073Zm-2.921 1.763 2.98-1.757-.05-.086-2.981 1.757.05.086Zm.024 2.434V11.81h-.1v2.477h.1Zm-.067.047a1.718 1.718 0 0 1 1.14 1.618h.1c0-.79-.503-1.46-1.206-1.712l-.034.094Zm1.14 1.618c0 .948-.77 1.717-1.718 1.717v.1a1.817 1.817 0 0 0 1.817-1.817h-.1Zm-1.718 1.717a1.718 1.718 0 0 1-1.718-1.717h-.1c0 1.004.814 1.817 1.818 1.817v-.1Zm-1.718-1.717c0-.797.543-1.467 1.278-1.66l-.026-.098a1.818 1.818 0 0 0-1.352 1.758h.1Zm1.215-4.144v2.435h.1v-2.435h-.1Zm-2.973-1.723 2.998 1.766.05-.086-2.997-1.767-.05.087Zm-1.2.5c.49 0 .934-.193 1.26-.507l-.069-.072c-.309.296-.728.48-1.19.48v.1ZM9.95 8.768c0 1.003.814 1.817 1.818 1.817v-.1a1.718 1.718 0 0 1-1.718-1.717h-.1Zm1.818-1.818A1.818 1.818 0 0 0 9.95 8.768h.1c0-.949.769-1.718 1.717-1.718v-.1Zm1.817 1.818a1.818 1.818 0 0 0-1.818-1.818v.1c.95 0 1.718.769 1.718 1.718h.1Z",fill:"#666687"})]}),n=r},34668:(l,s,e)=>{"use strict";e.d(s,{Z:()=>n});var t=e(85893);const r=a=>(0,t.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,t.jsx)("path",{d:"M.5 3A2.5 2.5 0 0 1 3 .5h26A2.5 2.5 0 0 1 31.5 3v18a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 21V3Z",fill:"#FDF4DC",stroke:"#FAE7B9"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.934 7.495V6h1.45v1.495h5.232V6h1.45v1.495h.314c1.385 0 1.602.249 1.62 1.463V16.5c0 1.062-.096 1.5-1.4 1.5h-9.19c-1.306 0-1.41-.318-1.41-1.607V9.105c.018-1.025.117-1.61 1.5-1.61h.434Zm-.774 8.687c0 .406.123.433.388.433h8.953c.265 0 .34-.007.34-.413v-6.087c-.008-.314-.11-.369-.316-.369h-9.072c-.206 0-.296.045-.293.287v6.15Z",fill:"#D9822F"})]}),n=r},71818:(l,s,e)=>{"use strict";e.d(s,{Z:()=>n});var t=e(85893);const r=a=>(0,t.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 4 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:(0,t.jsx)("rect",{width:4,height:4,rx:2,fill:"#A5A5BA"})}),n=r},65531:(l,s,e)=>{"use strict";e.d(s,{Z:()=>n});var t=e(85893);const r=a=>(0,t.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,t.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#F6F6F9",stroke:"#DCDCE4"}),(0,t.jsx)("path",{d:"M20.573 8c-1.484 0-2.666.745-3.397 1.37l-.026.023-.416.452.919 1.51.68-.682c.711-.6 1.506-.93 2.24-.93 1.48 0 2.685 1.171 2.685 2.612 0 1.44-1.205 2.613-2.685 2.613-2.25 0-3.78-2.974-3.795-3.004C16.69 11.784 14.75 8 11.428 8 8.985 8 7 9.954 7 12.355c0 2.401 1.986 4.355 4.427 4.355 1.196 0 2.373-.476 3.404-1.376l.022-.02.413-.45-.919-1.51-.683.686c-.712.616-1.465.928-2.237.928-1.48 0-2.685-1.172-2.685-2.613 0-1.44 1.205-2.613 2.685-2.613 2.25 0 3.78 2.974 3.795 3.004.088.18 2.028 3.964 5.35 3.964 2.442 0 4.428-1.954 4.428-4.355C25 9.954 23.014 8 20.573 8Z",fill:"#666687"})]}),n=r},73145:(l,s,e)=>{"use strict";e.d(s,{Z:()=>n});var t=e(85893);const r=a=>(0,t.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,t.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#FCECEA",stroke:"#F5C0B8"}),(0,t.jsx)("path",{d:"M16.767 17.49c.724 0 1.428-.089 1.962-.253v-1.093c-.383.143-1.128.239-1.86.239-2.905 0-4.744-1.764-4.744-4.546v-.014c0-2.734 1.839-4.641 4.484-4.641 2.598 0 4.307 1.62 4.307 4.088v.013c0 1.402-.444 2.304-1.135 2.304-.417 0-.656-.287-.656-.772V9.157h-1.38v.82h-.124c-.273-.608-.868-.97-1.6-.97-1.367 0-2.296 1.135-2.296 2.789v.014c0 1.73.943 2.884 2.365 2.884.793 0 1.353-.362 1.64-1.052h.123l.007.04c.158.636.78 1.033 1.62 1.033 1.655 0 2.687-1.367 2.687-3.534v-.014c0-3.008-2.242-5.072-5.517-5.072-3.418 0-5.776 2.324-5.776 5.694v.014c0 3.431 2.331 5.687 5.893 5.687Zm-.342-4.053c-.718 0-1.149-.602-1.149-1.586v-.014c0-.991.431-1.586 1.156-1.586.724 0 1.182.608 1.182 1.586v.014c0 .977-.458 1.585-1.19 1.585Z",fill:"#D02B20"})]}),n=r},82574:(l,s,e)=>{"use strict";e.d(s,{Z:()=>n});var t=e(85893);const r=a=>(0,t.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,t.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#F6ECFC",stroke:"#E0C1F4"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.167 7a1.167 1.167 0 1 0 0 2.333 1.167 1.167 0 0 0 0-2.333Zm0 4.03a1.167 1.167 0 1 0 0 2.334 1.167 1.167 0 0 0 0-2.334ZM9 16.23a1.167 1.167 0 1 1 2.333 0 1.167 1.167 0 0 1-2.333 0Zm4.005-9.02a.4.4 0 0 0-.4.4v1.11c0 .22.18.4.4.4H22.6a.4.4 0 0 0 .4-.4V7.61a.4.4 0 0 0-.4-.4h-9.594Zm-.399 4.432a.4.4 0 0 1 .4-.4H22.6c.22 0 .4.18.4.4v1.11a.4.4 0 0 1-.4.4h-9.594a.4.4 0 0 1-.4-.4v-1.11Zm.4 3.63a.4.4 0 0 0-.4.4v1.11c0 .22.18.4.4.4H22.6a.4.4 0 0 0 .4-.4v-1.11a.4.4 0 0 0-.4-.4h-9.594Z",fill:"#9736E8"})]}),n=r},60133:(l,s,e)=>{"use strict";e.d(s,{Z:()=>n});var t=e(85893);const r=a=>(0,t.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,t.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#EAF5FF",stroke:"#B8E1FF"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.243 11.907v.157c.835.093 1.287.516 1.287 1.223V14.5c0 .693.236.959.855.959h.216V16.5h-.364c-1.459 0-2.078-.56-2.078-1.857v-.973c0-.722-.314-.992-1.159-1.002v-1.366c.84-.005 1.16-.275 1.16-1.002v-.968c0-1.282.618-1.832 2.077-1.832h.364v1.041h-.216c-.624 0-.855.266-.855.958v1.184c0 .713-.452 1.135-1.287 1.224Zm15.804.181v-.157c-.835-.088-1.287-.51-1.287-1.223V9.495c0-.693-.236-.954-.855-.954h-.216V7.5h.363c1.454 0 2.073.56 2.073 1.852v.973c0 .722.32.997 1.165 1.002v1.366c-.845.005-1.165.28-1.165 1.002v.973c0 1.282-.613 1.832-2.073 1.832h-.363v-1.046h.216c.619 0 .855-.26.855-.954v-1.188c0-.708.452-1.13 1.287-1.224ZM13.15 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",fill:"#0C75AF"})]}),n=r},74525:(l,s,e)=>{"use strict";e.d(s,{Z:()=>n});var t=e(85893);const r=a=>(0,t.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,t.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#F6ECFC",stroke:"#E0C1F4"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 8.759a2 2 0 0 0-2-2h-8c-1.105 0-2 .902-2 2.006v6.068a2 2 0 0 0 .985 1.724l3.66-3.74 3.31 3.381 1.471-1.502 1.731 1.769c.51-.363.843-.958.843-1.632V8.76ZM18.5 9c-.84 0-1.5.66-1.5 1.5s.66 1.5 1.5 1.5 1.5-.66 1.5-1.5S19.34 9 18.5 9Z",fill:"#9736E8"})]}),n=r},31666:(l,s,e)=>{"use strict";e.d(s,{Z:()=>n});var t=e(85893);const r=a=>(0,t.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,t.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#FCECEA",stroke:"#F5C0B8"}),(0,t.jsx)("path",{d:"M9.815 16h1.475V8.954H9.82L8 10.22v1.328l1.729-1.201h.087V16Zm3.394 0h5.083v-1.187h-3.106v-.112l1.304-1.216c1.284-1.186 1.7-1.85 1.7-2.651v-.015c0-1.215-1.016-2.046-2.466-2.046-1.543 0-2.598.928-2.598 2.28l.005.02h1.362v-.024c0-.67.474-1.128 1.162-1.128.674 0 1.084.42 1.084 1.02v.015c0 .493-.268.85-1.26 1.812l-2.27 2.24V16Zm9.067.156c1.646 0 2.744-.864 2.744-2.143v-.01c0-.957-.683-1.563-1.733-1.66v-.03c.825-.17 1.47-.742 1.47-1.62v-.01c0-1.123-.977-1.885-2.49-1.885-1.48 0-2.471.82-2.574 2.08l-.005.059h1.358l.005-.044c.058-.586.522-.962 1.216-.962.693 0 1.098.361 1.098.947v.01c0 .571-.478.962-1.22.962h-.787v1.05h.806c.855 0 1.357.37 1.357 1.044v.01c0 .596-.493 1.016-1.245 1.016-.761 0-1.264-.39-1.328-.938l-.005-.053h-1.41l.004.063c.098 1.26 1.148 2.114 2.74 2.114Z",fill:"#D02B20"})]}),n=r},48394:(l,s,e)=>{"use strict";e.d(s,{Z:()=>n});var t=e(85893);const r=a=>(0,t.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,t.jsx)("path",{d:"M.5 3A2.5 2.5 0 0 1 3 .5h26A2.5 2.5 0 0 1 31.5 3v18a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 21V3Z",fill:"#F0F0FF",stroke:"#D9D8FF"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.375 16.316c.417-.407.625-.904.625-1.492 0-.589-.206-1.089-.618-1.5l-1.53-1.53a2.042 2.042 0 0 0-1.5-.617 2.06 2.06 0 0 0-1.529.646l-.646-.646c.43-.422.646-.934.646-1.537a2.03 2.03 0 0 0-.61-1.493l-1.515-1.522a2.014 2.014 0 0 0-1.5-.625 2.03 2.03 0 0 0-1.492.61l-1.081 1.074A2.006 2.006 0 0 0 10 9.176c0 .589.206 1.089.618 1.5l1.53 1.53c.41.412.91.617 1.5.617a2.06 2.06 0 0 0 1.529-.646l.646.646a2.069 2.069 0 0 0-.646 1.537c0 .588.203 1.086.61 1.493l1.514 1.522c.407.417.907.625 1.5.625a2.03 2.03 0 0 0 1.493-.61l1.081-1.074Zm-5.956-6.678a.68.68 0 0 0-.205-.5l-1.515-1.522a.68.68 0 0 0-.5-.206.71.71 0 0 0-.5.199l-1.081 1.073a.672.672 0 0 0-.206.493.68.68 0 0 0 .206.5l1.53 1.53a.678.678 0 0 0 .5.198.71.71 0 0 0 .529-.228l-.14-.136a4.46 4.46 0 0 1-.158-.158 1.756 1.756 0 0 1-.11-.14.593.593 0 0 1-.122-.39.68.68 0 0 1 .206-.5.68.68 0 0 1 .5-.206.59.59 0 0 1 .39.121c.064.047.11.084.14.111.03.027.082.08.158.158l.136.14a.713.713 0 0 0 .242-.537Zm5.168 5.187a.68.68 0 0 0-.206-.5l-1.529-1.53a.68.68 0 0 0-.5-.205.7.7 0 0 0-.53.235l.14.136c.079.076.132.129.159.158.027.03.063.076.11.14a.591.591 0 0 1 .121.39.681.681 0 0 1-.206.5.681.681 0 0 1-.5.206.591.591 0 0 1-.39-.121 1.746 1.746 0 0 1-.14-.111 4.395 4.395 0 0 1-.157-.158 20.642 20.642 0 0 0-.136-.14.714.714 0 0 0-.037 1.037l1.515 1.522a.678.678 0 0 0 .5.198.708.708 0 0 0 .5-.19l1.08-1.074a.672.672 0 0 0 .206-.493Z",fill:"#4945FF"})]}),n=r},21210:(l,s,e)=>{"use strict";e.d(s,{Z:()=>n});var t=e(85893);const r=a=>(0,t.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,t.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#EAFBE7",stroke:"#C6F0C2"}),(0,t.jsx)("path",{d:"M8.62 16h1.857l.627-2.05h2.982l.627 2.05h1.863l-2.941-8.455h-2.08L8.619 16Zm3.925-6.768h.105l1.032 3.393h-2.174l1.037-3.393ZM21.65 16.1c1.612 0 2.62-1.26 2.62-3.323v-.011c0-2.075-.985-3.323-2.62-3.323-.884 0-1.605.434-1.933 1.137h-.106V7.082h-1.71V16h1.71v-1.002h.106c.334.697 1.02 1.102 1.933 1.102Zm-.585-1.418c-.903 0-1.471-.715-1.471-1.899v-.011c0-1.184.574-1.91 1.47-1.91.903 0 1.465.726 1.465 1.904v.011c0 1.19-.556 1.905-1.465 1.905Z",fill:"#328048"})]}),n=r},55884:(l,s,e)=>{"use strict";e.d(s,{Z:()=>n});var t=e(85893);const r=a=>(0,t.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,t.jsx)("path",{d:"M.5 3A2.5 2.5 0 0 1 3 .5h26A2.5 2.5 0 0 1 31.5 3v18a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 21V3Z",fill:"#F0F0FF",stroke:"#D9D8FF"}),(0,t.jsx)("path",{d:"M14.907 9.438c0 .375 0 .738.118 1.078-1.243 1.46-4.526 5.317-4.832 5.611a.582.582 0 0 0-.193.433c0 .245.15.481.277.614.19.2 1.004.952 1.154.808.444-.433.533-.548.715-.727.274-.268-.029-.816.066-1.039.096-.222.197-.265.361-.3.165-.034.456.084.684.087.24.003.369-.098.548-.265.144-.133.248-.257.25-.45.007-.26-.368-.603-.089-.877.28-.274.684.178.981.144.297-.035.658-.447.695-.623.038-.176-.337-.629-.28-.886.02-.086.197-.288.33-.317.132-.029.72.199.853.17.162-.034.35-.205.502-.3.447.193.854.271 1.376.271C20.4 12.87 22 11.33 22 9.432 22 7.534 20.399 6 18.423 6s-3.516 1.54-3.516 3.438Zm5.247-.669a.923.923 0 1 1-1.847 0 .923.923 0 0 1 1.847 0Z",fill:"#4945FF"})]}),n=r}}]);

(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[27],{562:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},563:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(566)},565:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},566:function(e,t,n){"use strict";n.r(t);var r=n(737),a=n(523),u=n(623).a,c=n(534);var o=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];var o=function(){e.apply(r,u)};clearTimeout(t),t=setTimeout(o,n)}return r.clear=function(){clearTimeout(t)},r};var i=function(e,t){return function(){return null}},l=n(0);var s=function(e,t){return l.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)},f=n(565).a,d=n(624).a;n(564);var m=function(e,t){return function(){return null}},p=n(698).a,v=n(699).a,b=n(494),h=0;var E=l.useId;var g=function(e){if(void 0!==E){var t=E();return null!=e?e:t}return function(e){var t=l.useState(e),n=Object(b.a)(t,2),r=n[0],a=n[1],u=e||r;return l.useEffect((function(){null==r&&a("mui-".concat(h+=1))}),[r]),u}(e)};var y=function(e,t,n,r,a){return null},_=n(549),w=n(539),C=n(533),N=n(541);n.d(t,"unstable_ClassNameGenerator",(function(){return j})),n.d(t,"capitalize",(function(){return a.a})),n.d(t,"createChainedFunction",(function(){return u})),n.d(t,"createSvgIcon",(function(){return c.a})),n.d(t,"debounce",(function(){return o})),n.d(t,"deprecatedPropType",(function(){return i})),n.d(t,"isMuiElement",(function(){return s})),n.d(t,"ownerDocument",(function(){return f})),n.d(t,"ownerWindow",(function(){return d})),n.d(t,"requirePropFactory",(function(){return m})),n.d(t,"setRef",(function(){return p})),n.d(t,"unstable_useEnhancedEffect",(function(){return v})),n.d(t,"unstable_useId",(function(){return g})),n.d(t,"unsupportedProp",(function(){return y})),n.d(t,"useControlled",(function(){return _.a})),n.d(t,"useEventCallback",(function(){return w.a})),n.d(t,"useForkRef",(function(){return C.a})),n.d(t,"useIsFocusVisible",(function(){return N.a}));var j={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.a.configure(e)}}},623:function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),(function(){}))}n.d(t,"a",(function(){return r}))},624:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(565);function a(e){return Object(r.a)(e).defaultView||window}},704:function(e,t,n){"use strict";var r=n(562);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(563)),u=n(497),c=(0,a.default)((0,u.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");t.default=c},752:function(e,t,n){"use strict";n.r(t);var r=n(18),a=n.n(r),u=n(0),c=n.n(u),o=n(105),i=n(148),l=n(502),s=n.n(l),f=n(149),d=n(704),m=n.n(d),p=n(499),v=n(500),b=n(65),h=n(67);t.default=Object(b.connect)((function(e){return{deleteAllFromCart:a.a.func}}),(function(e){return{deleteAllFromCart:function(t){e(Object(h.h)(t))}}}))((function(e){var t=e.location,n=e.deleteAllFromCart,r=Object(i.useToasts)().addToast,a=t.pathname;return Object(u.useEffect)((function(){n(r)}),[]),c.a.createElement(u.Fragment,null,c.a.createElement(s.a,null,c.a.createElement("title",null,"Moffa | Success"),c.a.createElement("meta",{name:"description",content:"Cart page of flone react minimalist eCommerce template."})),c.a.createElement(f.BreadcrumbsItem,{to:"/"},"Home"),c.a.createElement(f.BreadcrumbsItem,{to:""+a},"Success"),c.a.createElement(p.a,{headerTop:"visible"},c.a.createElement(v.a,null),c.a.createElement("div",{className:"cart-main-area pt-90 pb-100"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"item-empty-area text-center"},c.a.createElement("div",{className:"item-empty-area__icon mb-30"},c.a.createElement(m.a,{sx:{color:"green",fontSize:"100px"}})),c.a.createElement("div",{className:"item-empty-area__text"},"Succesfully Ordered",c.a.createElement("br",null)," ",c.a.createElement(o.b,{to:"/shop-grid-standard"},"Shop Now")))))))))}))}}]);
//# sourceMappingURL=27.5881beda.chunk.js.map
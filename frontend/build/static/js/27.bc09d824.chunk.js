(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[27],{502:function(e,t,a){e.exports=a(239)},503:function(e,t,a){"use strict";function l(e,t,a,l,n,r,c){try{var o=e[r](c),s=o.value}catch(i){return void a(i)}o.done?t(s):Promise.resolve(s).then(l,n)}function n(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var c=e.apply(t,a);function o(e){l(c,n,r,o,s,"next",e)}function s(e){l(c,n,r,o,s,"throw",e)}o(void 0)}))}}a.d(t,"a",(function(){return n}))},666:function(e,t,a){"use strict";a.r(t);var l=a(502),n=a.n(l),r=a(503),c=a(494),o=a(0),s=a.n(o),i=a(105),u=a(148),m=a(501),d=a.n(m),v=a(149),E=a(498),p=a(499),f=a(65),b=a(150),N=a.n(b),h=a(17);t.default=Object(f.connect)((function(e){return{currency:e.currencyData,user:e.userData.user}}))((function(e){var t=e.location,a=e.user,l=Object(u.useToasts)().addToast,m=t.pathname,f=Object(o.useState)([]),b=Object(c.a)(f,2),g=b[0],O=b[1],A=Object(o.useState)([]),y=Object(c.a)(A,2),T=y[0],w=y[1],x=null===a||void 0===a?void 0:a.CUST_ID;Object(h.f)();return Object(o.useEffect)((function(){Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("/api/user/get-my-orders/".concat(x));case 3:t=e.sent,a=t.data,console.log(a,"A"),O(a),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(o.useEffect)((function(){Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("/api/user/view-my-orders-products");case 3:t=e.sent,a=t.data,w(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l("Somthing Went Wrong",{appearance:"success",autoDismiss:!0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),s.a.createElement(o.Fragment,null,s.a.createElement(d.a,null,s.a.createElement("title",null,"MOFFA | MYORDERS"),s.a.createElement("meta",{name:"description",content:"Cart page of flone react minimalist eCommerce template."})),s.a.createElement(v.BreadcrumbsItem,{to:"/"},"Home"),s.a.createElement(v.BreadcrumbsItem,{to:""+m},"MyOrders"),s.a.createElement(E.a,{headerTop:"visible"},s.a.createElement(p.a,null),s.a.createElement("div",{className:"cart-main-area pt-90 pb-100"},s.a.createElement("div",{className:"container"},g&&g.length>=1&&T.length>=1?s.a.createElement(o.Fragment,null,g.map((function(e,t){var l,n,r,c,i,u,m,d,v;return console.log(e,"!"),s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"cart-page-title mt-4",key:t},"ORDER DATE:",e.Date,s.a.createElement("br",null),"ORDER ID:",e.Id,s.a.createElement("br",null),"TOTAL AMOUNT :",null===e||void 0===e?void 0:e.Total,(null===e||void 0===e?void 0:e.wallet)&&s.a.createElement("p",null,"WALLET APPLY AMOUNT:",e.wallet)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"table-content table-responsive cart-table-content"},s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Image"),s.a.createElement("th",null,"Product Name"),s.a.createElement("th",null,"QTY"),s.a.createElement("th",null,"AMOUNT"),s.a.createElement("th",null,"TOTAL"),s.a.createElement("th",null,"STATUS"))),null===e||void 0===e?void 0:e.Product.map((function(t,l){console.log(t,"@");var n,r,c=T.find((function(e){return e.id===t.ProductID}));if(console.log(c,"*"),1==a.user)if(null===t||void 0===t?void 0:t.offer){var i=(null===c||void 0===c?void 0:c.price)*(null===t||void 0===t?void 0:t.offer)/100;n=null===c||void 0===c?void 0:c.price,r=(null===c||void 0===c?void 0:c.price)-i}else if(null===c||void 0===c?void 0:c.discount){var u=(null===c||void 0===c?void 0:c.price)*(null===c||void 0===c?void 0:c.discount)/100;n=null===c||void 0===c?void 0:c.price,r=(null===c||void 0===c?void 0:c.price)-u}else n=null===c||void 0===c?void 0:c.price;else n=null===c||void 0===c?void 0:c.price,r=null===c||void 0===c?void 0:c.wholesaler;return s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{className:"product-thumbnail"},s.a.createElement("img",{style:{height:"150px",width:"120px"},className:"img-fluid",src:null===c||void 0===c?void 0:c.image[0].url,alt:""})),s.a.createElement("td",{className:"product-name"},null===c||void 0===c?void 0:c.name,s.a.createElement("div",{className:"cart-item-variation"},s.a.createElement("span",null,"Color: ",null===t||void 0===t?void 0:t.color),s.a.createElement("span",null,"Size: ",null===t||void 0===t?void 0:t.size))),s.a.createElement("td",{className:"product-price-cart"},s.a.createElement("input",{className:"cart-plus-minus-box",type:"text",value:null===t||void 0===t?void 0:t.quantity,readOnly:!0})),s.a.createElement("td",{className:"product-price-cart"},s.a.createElement(o.Fragment,null,s.a.createElement("span",{className:"amount old"},"\u20b9"+n),s.a.createElement("span",{className:"amount"},"\u20b9"+r))),s.a.createElement("td",{className:"product-quantity"},s.a.createElement("span",{className:"amount"},"\u20b9"+t.quantity*r)),"Pending"==e.status?s.a.createElement("td",null,s.a.createElement("a",{className:"text-danger"},e.status)):s.a.createElement("td",null,s.a.createElement("a",{className:"text-success"},e.status))))})),s.a.createElement("div",{className:"row",style:{marginLeft:"1rem"}},s.a.createElement("div",{className:"col-6"},s.a.createElement("b",null,"TO:"),s.a.createElement("br",null),s.a.createElement("p",null,(null===(l=e.Address)||void 0===l?void 0:l.Name)+","+(null===(n=e.Address)||void 0===n?void 0:n.LastName),",",s.a.createElement("br",null),null===(r=e.Address)||void 0===r?void 0:r.StreetAddress,",",e.Address.State,",",null===(c=e.Address)||void 0===c?void 0:c.TownCity,",",null===(i=e.Address)||void 0===i?void 0:i.Pincode,",",s.a.createElement("br",null),null===(u=e.Address)||void 0===u?void 0:u.Email,",",s.a.createElement("br",null),null===(m=e.Address)||void 0===m?void 0:m.PhoneNumber,",",s.a.createElement("br",null),(null===(d=e.Address)||void 0===d?void 0:d.message)&&s.a.createElement("b",null,null===(v=e.Address)||void 0===v?void 0:v.message)))))))))}))):s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"item-empty-area text-center"},s.a.createElement("div",{className:"item-empty-area__icon mb-30"},s.a.createElement("i",{className:"pe-7s-cart"})),s.a.createElement("div",{className:"item-empty-area__text"},"No items found ",s.a.createElement("br",null)," ",s.a.createElement(i.b,{to:"/shop-grid-standard"},"Shop Now")))))))))}))}}]);
//# sourceMappingURL=27.bc09d824.chunk.js.map
(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[27],{502:function(e,t,a){e.exports=a(239)},503:function(e,t,a){"use strict";function n(e,t,a,n,l,r,c){try{var s=e[r](c),i=s.value}catch(o){return void a(o)}s.done?t(i):Promise.resolve(i).then(n,l)}function l(e){return function(){var t=this,a=arguments;return new Promise((function(l,r){var c=e.apply(t,a);function s(e){n(c,l,r,s,i,"next",e)}function i(e){n(c,l,r,s,i,"throw",e)}s(void 0)}))}}a.d(t,"a",(function(){return l}))},666:function(e,t,a){"use strict";a.r(t);var n=a(502),l=a.n(n),r=a(503),c=a(494),s=a(0),i=a.n(s),o=a(105),u=a(148),m=a(501),d=a.n(m),v=a(149),E=a(498),p=a(499),f=a(65),b=a(150),N=a.n(b),h=a(17);t.default=Object(f.connect)((function(e){return{currency:e.currencyData,user:e.userData.user}}))((function(e){var t=e.location,a=e.user,n=Object(u.useToasts)().addToast,m=t.pathname,f=Object(s.useState)([]),b=Object(c.a)(f,2),g=b[0],O=b[1],A=Object(s.useState)([]),y=Object(c.a)(A,2),T=y[0],w=y[1],x=null===a||void 0===a?void 0:a.CUST_ID;Object(h.f)();return Object(s.useEffect)((function(){Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("/api/user/get-my-orders/".concat(x));case 3:t=e.sent,a=t.data,O(a),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),Object(s.useEffect)((function(){Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("/api/user/view-my-orders-products");case 3:t=e.sent,a=t.data,w(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n("Somthing Went Wrong",{appearance:"success",autoDismiss:!0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),i.a.createElement(s.Fragment,null,i.a.createElement(d.a,null,i.a.createElement("title",null,"MOFFA | MYORDERS"),i.a.createElement("meta",{name:"description",content:"Cart page of flone react minimalist eCommerce template."})),i.a.createElement(v.BreadcrumbsItem,{to:"/"},"Home"),i.a.createElement(v.BreadcrumbsItem,{to:""+m},"MyOrders"),i.a.createElement(E.a,{headerTop:"visible"},i.a.createElement(p.a,null),i.a.createElement("div",{className:"cart-main-area pt-90 pb-100"},i.a.createElement("div",{className:"container"},g&&g.length>=1&&T.length>=1?i.a.createElement(s.Fragment,null,g.map((function(e,t){var n,l,r,c,o,u,m,d,v;return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"cart-page-title mt-4",key:t},"ORDER DATE:",e.Date,i.a.createElement("br",null),"ORDER ID:",e.Id,i.a.createElement("br",null),"TOTAL AMOUNT :",null===e||void 0===e?void 0:e.Total,(null===e||void 0===e?void 0:e.wallet)&&i.a.createElement("p",null,"WALLET APPLY AMOUNT:",e.wallet)),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"table-content table-responsive cart-table-content"},i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Image"),i.a.createElement("th",null,"Product Name"),i.a.createElement("th",null,"QTY"),i.a.createElement("th",null,"AMOUNT"),i.a.createElement("th",null,"TOTAL"),i.a.createElement("th",null,"STATUS"))),null===e||void 0===e?void 0:e.Product.map((function(t,n){var l,r,c=T.find((function(e){return e.id===t.ProductID}));if(1==a.user)if(null===t||void 0===t?void 0:t.offer){var o=(null===c||void 0===c?void 0:c.price)*(null===t||void 0===t?void 0:t.offer)/100;l=null===c||void 0===c?void 0:c.price,r=(null===c||void 0===c?void 0:c.price)-o}else if(null===c||void 0===c?void 0:c.discount){var u=(null===c||void 0===c?void 0:c.price)*(null===c||void 0===c?void 0:c.discount)/100;l=null===c||void 0===c?void 0:c.price,r=(null===c||void 0===c?void 0:c.price)-u}else l=null===c||void 0===c?void 0:c.price;else l=null===c||void 0===c?void 0:c.price,r=null===c||void 0===c?void 0:c.wholesaler;return i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{className:"product-thumbnail"},i.a.createElement("img",{style:{height:"150px",width:"120px"},className:"img-fluid",src:null===c||void 0===c?void 0:c.image[0].url,alt:""})),i.a.createElement("td",{className:"product-name"},null===c||void 0===c?void 0:c.name,i.a.createElement("div",{className:"cart-item-variation"},i.a.createElement("span",null,"Color: ",null===t||void 0===t?void 0:t.color),i.a.createElement("span",null,"Size: ",null===t||void 0===t?void 0:t.size))),i.a.createElement("td",{className:"product-price-cart"},i.a.createElement("input",{className:"cart-plus-minus-box",type:"text",value:null===t||void 0===t?void 0:t.quantity,readOnly:!0})),i.a.createElement("td",{className:"product-price-cart"},i.a.createElement(s.Fragment,null,i.a.createElement("span",{className:"amount old"},"\u20b9"+l),i.a.createElement("span",{className:"amount"},"\u20b9"+r))),i.a.createElement("td",{className:"product-quantity"},i.a.createElement("span",{className:"amount"},"\u20b9"+t.quantity*r)),"Pending"==e.status?i.a.createElement("td",null,i.a.createElement("a",{className:"text-danger"},e.status)):i.a.createElement("td",null,i.a.createElement("a",{className:"text-success"},e.status))))})),i.a.createElement("div",{className:"row",style:{marginLeft:"1rem"}},i.a.createElement("div",{className:"col-6"},i.a.createElement("b",null,"TO:"),i.a.createElement("br",null),i.a.createElement("p",null,(null===(n=e.Address)||void 0===n?void 0:n.Name)+","+(null===(l=e.Address)||void 0===l?void 0:l.LastName),",",i.a.createElement("br",null),null===(r=e.Address)||void 0===r?void 0:r.StreetAddress,",",e.Address.State,",",null===(c=e.Address)||void 0===c?void 0:c.TownCity,",",null===(o=e.Address)||void 0===o?void 0:o.Pincode,",",i.a.createElement("br",null),null===(u=e.Address)||void 0===u?void 0:u.Email,",",i.a.createElement("br",null),null===(m=e.Address)||void 0===m?void 0:m.PhoneNumber,",",i.a.createElement("br",null),(null===(d=e.Address)||void 0===d?void 0:d.message)&&i.a.createElement("b",null,null===(v=e.Address)||void 0===v?void 0:v.message)))))))))}))):i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"item-empty-area text-center"},i.a.createElement("div",{className:"item-empty-area__icon mb-30"},i.a.createElement("i",{className:"pe-7s-cart"})),i.a.createElement("div",{className:"item-empty-area__text"},"No items found ",i.a.createElement("br",null)," ",i.a.createElement(o.b,{to:"/shop-grid-standard"},"Shop Now")))))))))}))}}]);
//# sourceMappingURL=27.9ea7fe10.chunk.js.map
(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[33],{763:function(e,t,a){"use strict";a.r(t);var l=a(497),n=a.n(l),c=a(498),r=a(492),o=a(0),s=a.n(o),m=a(105),i=a(148),u=a(504),d=a.n(u),E=a(150),p=a(65),b=a(495),v=a(67),N=a(500),f=a(502),h=a(149),g=a.n(h);t.default=Object(p.connect)((function(e){return{cartItems:e.cartData,currency:e.currencyData,user:e.userData.user}}),(function(e){return{addToCart:function(t,a,l){e(Object(v.e)(t,a,l))},decreaseQuantity:function(t,a){e(Object(v.g)(t,a))},deleteFromCart:function(t,a){e(Object(v.i)(t,a))},deleteAllFromCart:function(t){e(Object(v.h)(t))}}}))((function(e){var t=e.location,a=e.cartItems,l=e.decreaseQuantity,u=e.addToCart,p=e.deleteFromCart,h=e.deleteAllFromCart,y=e.user,C=Object(o.useState)(1),k=Object(r.a)(C,1)[0],x=Object(i.useToasts)().addToast,w=t.pathname,F=0,O=function(){var e=Object(c.a)(n.a.mark((function e(t,a){var l,c,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p(t,a),!y){e.next=14;break}return l=y.CUST_ID,c=t.id,e.prev=4,e.next=7,g.a.post("/api/user/dlete-cart-produts",{userID:l,Product:c});case 7:r=e.sent,r.data,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t,a){return e.apply(this,arguments)}}();return s.a.createElement(o.Fragment,null,s.a.createElement(d.a,null,s.a.createElement("title",null,"Thepaaki | Cart"),s.a.createElement("meta",{name:"description",content:"Cart page of thepaaki website"})),s.a.createElement(E.BreadcrumbsItem,{to:"/"},"Home"),s.a.createElement(E.BreadcrumbsItem,{to:""+w},"Cart"),s.a.createElement(N.a,{headerTop:"visible"},s.a.createElement(f.a,null),s.a.createElement("div",{className:"cart-main-area pt-90 pb-100"},s.a.createElement("div",{className:"container"},a&&a.length>=1?s.a.createElement(o.Fragment,null,s.a.createElement("h3",{className:"cart-page-title"},"Your cart items"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"table-content table-responsive cart-table-content"},s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Image"),s.a.createElement("th",null,"Product Name"),s.a.createElement("th",null,"Unit Price"),s.a.createElement("th",null,"Qty"),s.a.createElement("th",null,"Subtotal"),s.a.createElement("th",null,"action"))),s.a.createElement("tbody",null,a.map((function(e,t){var a,n;console.log(e,"dkcckskk"),e.variation.map((function(t){console.log(t),t.color==e.selectedProductColor&&(a=t.image)}));var c,r,i=(new Date).toLocaleDateString();(null===e||void 0===e?void 0:e.Deal)&&e.Deal.map((function(t){t.date==i&&(n=t.offer),t.data<i&&p(e,x)}));if(1==(null===y||void 0===y?void 0:y.user)||null==y){if(n)var d=Object(b.a)(e.price,n).toFixed(0);else if(e.discount)d=Object(b.a)(e.price,e.discount).toFixed(0);else d=null;c=e.price,r=d}else!0,d=e.price,c=e.price,r=e.wholesaler;return F+=null!=d?r*e.quantity:c*e.quantity,s.a.createElement("tr",{key:t},s.a.createElement("td",{className:"product-thumbnail"},s.a.createElement(m.b,{to:"/product/"+e.id},s.a.createElement("img",{className:"img-fluid",src:a,alt:""}))),s.a.createElement("td",{className:"product-name"},s.a.createElement(m.b,{to:"/product/"+e.id},e.name),e.selectedProductColor&&e.selectedProductSize?s.a.createElement("div",{className:"cart-item-variation"},s.a.createElement("span",null,"Color: ",e.selectedProductColor),s.a.createElement("span",null,"Size: ",e.selectedProductSize)):""),s.a.createElement("td",{className:"product-price-cart"},null!==d?s.a.createElement(o.Fragment,null,s.a.createElement("span",{className:"amount old"},"\u20b9"+c),s.a.createElement("span",{className:"amount"},"\u20b9"+r)):s.a.createElement("span",{className:"amount"},"\u20b9"+c)),s.a.createElement("td",{className:"product-quantity"},s.a.createElement("div",{className:"cart-plus-minus"},s.a.createElement("button",{className:"dec qtybutton",onClick:function(){return l(e,x)}},"-"),s.a.createElement("input",{className:"cart-plus-minus-box",type:"text",value:e.quantity,readOnly:!0}),s.a.createElement("button",{className:"inc qtybutton",onClick:function(){return u(e,x,k)},disabled:void 0!==e&&e.quantity&&e.quantity>=Object(v.f)(e,e.selectedProductColor,e.selectedProductSize)},"+"))),s.a.createElement("td",{className:"product-subtotal"},null!==d?"\u20b9"+(r*e.quantity).toFixed(2):"\u20b9"+(c*e.quantity).toFixed(2)),s.a.createElement("td",{className:"product-remove"},s.a.createElement("button",{onClick:function(){return O(e,x)}},s.a.createElement("i",{className:"fa fa-times"}))))}))))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"cart-shiping-update-wrapper"},s.a.createElement("div",{className:"cart-shiping-update"},s.a.createElement(m.b,{to:"/shop-grid-standard"},"Continue Shopping")),s.a.createElement("div",{className:"cart-clear"},s.a.createElement("button",{onClick:function(){return h(x)}},"Clear Shopping Cart"))))),s.a.createElement("div",{className:"row text-end"},s.a.createElement("div",{className:"col-lg-4 col-md-12"},s.a.createElement("div",{className:"grand-totall"},s.a.createElement("div",{className:"title-wrap"},s.a.createElement("h4",{className:"cart-bottom-title section-bg-gary-cart"},"Cart Total")),s.a.createElement("h5",null,"Total products"," ",s.a.createElement("span",null,"\u20b9"+F.toFixed(2))),s.a.createElement("h4",{className:"grand-totall-title"},"Grand Total"," ",s.a.createElement("span",null,"\u20b9"+F.toFixed(2))),s.a.createElement(m.b,{to:"/checkout"},"Proceed to Checkout"))))):s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"item-empty-area text-center"},s.a.createElement("div",{className:"item-empty-area__icon mb-30"},s.a.createElement("i",{className:"pe-7s-cart"})),s.a.createElement("div",{className:"item-empty-area__text"},"No items found in cart ",s.a.createElement("br",null)," ",s.a.createElement(m.b,{to:"/shop-grid-standard"},"Shop Now")))))))))}))}}]);
//# sourceMappingURL=33.c9d4c851.chunk.js.map
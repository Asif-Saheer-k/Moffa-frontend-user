(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[37],{747:function(e,a,t){"use strict";t.r(a);var n=t(500),r=t.n(n),s=t(501),c=t(0),o=t.n(c),l=t(504),i=t.n(l),m=t(17),u=t(105),p=t(150),d=t(525),b=t(524),g=t(499),f=t(502),v=t(556),E=t(148),h=t(700),O=t.n(h),x=t(65),T=t(149),j=t.n(T),k=t(154),N=t(45),P=t(151),y=t(106),w=t(155),D=t(153);a.default=Object(x.connect)((function(e){return{user:e.userData.user}}))((function(e){var a=e.location,t=e.user,n=Object(m.g)().phone,l=Object(E.useToasts)().addToast,h=a.pathname,x=Object(m.f)(),T=Object(v.a)(),S=T.register,I=T.handleSubmit,L=T.trigger,C=T.formState.errors;Object(c.useEffect)((function(){t&&x.push("/")}));var W=function(){var e=Object(s.a)(r.a.mark((function e(){var a,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=14;break}return e.prev=1,e.next=4,j.a.get("/api/user/resent-otp");case 4:a=e.sent,a.data,l("Successfuly Sented",{appearance:"success",autoDismiss:!0}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),l("Somthing Went Wrong",{appearance:"error",autoDismiss:!0});case 12:e.next=25;break;case 14:return e.prev=14,e.next=17,j.a.post("/api/user/otpLogin",{phone:n});case 17:t=e.sent,t.data,l("Successfuly Sented",{appearance:"success",autoDismiss:!0}),e.next=25;break;case 22:e.prev=22,e.t1=e.catch(14),l("Somthing Went Wrong",{appearance:"error",autoDismiss:!0});case 25:case"end":return e.stop()}}),e,null,[[1,9],[14,22]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(s.a)(r.a.mark((function e(a){var t,s,c,o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.OTP,!n){e.next=18;break}return e.prev=2,e.next=5,j.a.post("/api/user/otpLogin/".concat(t));case 5:s=e.sent,c=s.data,Object(N.createStore)(k.a,Object(y.load)(),Object(D.composeWithDevTools)(Object(N.applyMiddleware)(P.a,Object(y.save)()))).dispatch(Object(w.b)(c)),window.location.reload(!1),l("Successfuly Logined",{appearance:"success",autoDismiss:!0}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),l(e.t0.response.data,{appearance:"error",autoDismiss:!0});case 16:e.next=30;break;case 18:return e.prev=18,e.next=21,j.a.post("/api/user/register/".concat(t));case 21:o=e.sent,i=o.data,l(i,{appearance:"success",autoDismiss:!0}),x.push("/login-register"),e.next=30;break;case 27:e.prev=27,e.t1=e.catch(18),l(e.t1.response.data,{appearance:"error",autoDismiss:!0});case 30:case"end":return e.stop()}}),e,null,[[2,13],[18,27]])})));return function(a){return e.apply(this,arguments)}}();return o.a.createElement(E.ToastProvider,null,o.a.createElement(c.Fragment,null,o.a.createElement(i.a,null,o.a.createElement("title",null,"Moffa | Login"),o.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),o.a.createElement(p.BreadcrumbsItem,{to:"/"},"Home"),o.a.createElement(p.BreadcrumbsItem,{to:""+h},"OTP"),o.a.createElement(g.a,{headerTop:"visible"},o.a.createElement(f.a,null),o.a.createElement("div",{className:"login-register-area pt-100 pb-100"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},o.a.createElement("div",{className:"login-register-wrapper"},o.a.createElement(d.a.Container,{defaultActiveKey:"otp"},o.a.createElement(b.a,{variant:"pills",className:"login-register-tab-list"},o.a.createElement(b.a.Item,null,o.a.createElement(b.a.Link,{eventKey:"otp"},o.a.createElement("h4",null,"OTP-VERIFICATION")))),o.a.createElement(d.a.Content,null,o.a.createElement(d.a.Pane,{eventKey:"otp"},o.a.createElement("div",{className:"login-form-container"},o.a.createElement("div",{className:"login-register-form"},o.a.createElement("form",{onSubmit:I(K)},o.a.createElement("input",Object.assign({autoComplete:"off",type:"phoneNumber",placeholder:"Enter 6 Digits OTP ",maxLength:"6"},S("OTP",{required:"Please Enter OTP",pattern:{value:/^[0-9]{1,6}$/,message:"Invalid OTP"}}),{onKeyUp:function(){L("OTP")}})),C.OTP&&o.a.createElement("small",{className:"text-danger"},C.OTP.message),o.a.createElement("div",{className:"button-box"},o.a.createElement("div",{className:"login-toggle-btn"},o.a.createElement(u.b,{to:"/"},o.a.createElement(O.a,{seconds:30,minutes:0,resend:W}))),o.a.createElement("button",{type:"submit"},o.a.createElement("span",null,"Login")))))))))))))))))}))}}]);
//# sourceMappingURL=37.ec85ff81.chunk.js.map
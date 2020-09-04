(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{13:function(e,t,a){e.exports=a(18)},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),i=(a(7),a(5)),s=a(12),l=a(1),u=a(9),p=a.n(u);var m=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"header__logo",style:{backgroundImage:"url(".concat(p.a,")")}}))},d=a(4),f=a.n(d),_=o.a.createContext();var h=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,r=e.onCardDelete,c=o.a.useContext(_),i=t.owner._id===c._id,s="element__delete ".concat(i?"element__delete_active":""),l=t.likes.some((function(e){return e._id===c._id})),u="element__like ".concat(l?"element__like_active":"");return o.a.createElement("div",{className:"element"},o.a.createElement("img",{className:"element__image",alt:"\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",src:t.link,onClick:function(){a(t)}}),o.a.createElement("button",{className:"".concat(s),onClick:function(){r(t)},type:"button"}),o.a.createElement("div",{className:"element__text"},o.a.createElement("h2",{className:"element__title"},t.name),o.a.createElement("div",{className:"element__interactivity"},o.a.createElement("button",{type:"button",className:"".concat(u),onClick:function(){n(t)}}),o.a.createElement("span",{className:"element__like-counter"},t.likes.length))))};var v=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,r=e.onCardClick,c=e.cards,i=e.onCardLike,s=e.onCardDelete,l=o.a.useContext(_);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__image"},o.a.createElement("img",{className:"profile__avatar",src:l.avatar||f.a,alt:"\u0430\u0432\u0430\u0442\u0430\u0440"}),o.a.createElement("button",{onClick:n,className:"profile__avatar-edit"})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__title"},l.name),o.a.createElement("button",{onClick:t,type:"button",className:"profile__edit-button"}),o.a.createElement("p",{className:"profile__subtitle"},l.about)),o.a.createElement("button",{onClick:a,type:"button",className:"profile__add-button"})),o.a.createElement("section",{className:"elements"},c.map((function(e){return o.a.createElement(h,{key:e._id,card:e,onCardClick:r,onCardLike:i,onCardDelete:s})}))))};var E=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var b=function(e){var t=e.title,a=e.name,n=e.children,r=e.buttonText,c=e.isOpen,i=e.onClose,s=e.onSubmit,l=e.isLoading;return o.a.createElement("div",{className:"popup popup_type_".concat(a," ").concat(c&&"popup_active")},o.a.createElement("form",{onSubmit:s,className:"popup__container popup__container_type_".concat(a)},o.a.createElement("button",{onClick:i,type:"button",className:"popup__close-button"}),o.a.createElement("h2",{className:"popup__title"},t),n,o.a.createElement("button",{type:"submit",className:"popup__button"},l?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":r)))};var g=function(e){var t=e.isOpen,a=e.onClose,n=e.name,r=e.link;return o.a.createElement("div",{className:"popup popup_type_photo ".concat(t&&"popup_active")},o.a.createElement("div",{className:"popup__card"},o.a.createElement("button",{onClick:a,type:"button",className:"popup__close-button popup__close-button_photo"}),o.a.createElement("img",{className:"popup__card-image",alt:n,src:r}),o.a.createElement("p",{className:"popup__card-name"},n)))},k=a(10),N=a(11),C=new(function(){function e(t){Object(k.a)(this,e),this.apiUrl=t.apiUrl,this.headers=t.headers}return Object(N.a)(e,[{key:"_sendRequest",value:function(e,t){return fetch("".concat(this.apiUrl).concat(e),t).then((function(e){return e.ok?e.json():e.ok?void 0:Promise.reject(e.status)}))}},{key:"getUserInfo",value:function(){return this._sendRequest("/users/me",{headers:this.headers})}},{key:"sendUserInfo",value:function(e){return this._sendRequest("/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"sendUserAvatar",value:function(e){return this._sendRequest("/users/me/avatar",{method:"PATCH",body:JSON.stringify({avatar:e.avatar}),headers:this.headers})}},{key:"getCards",value:function(){return this._sendRequest("/cards",{method:"GET",headers:this.headers})}},{key:"addCard",value:function(e){return this._sendRequest("/cards",{method:"POST",body:JSON.stringify({name:e.name,link:e.link}),headers:this.headers})}},{key:"changeLikeCardStatus",value:function(e,t){return t?this._sendRequest("/cards/likes/".concat(e),{method:"PUT",headers:this.headers}):this._sendRequest("/cards/likes/".concat(e),{method:"DELETE",headers:this.headers})}},{key:"deleteCard",value:function(e,t){if(!t)return this._sendRequest("/cards/".concat(e),{method:"DELETE",headers:this.headers})}}]),e}())({apiUrl:"https://mesto.nomoreparties.co/v1/cohort-13",headers:{authorization:"e66cf1b3-dadb-44df-be8a-bb3ba2569396","Content-Type":"application/json"}});var O=function(e){var t=e.isOpen,a=e.onClose,r=e.onUpdateUser,c=e.isLoading,i=o.a.useContext(_),s=Object(n.useState)(""),u=Object(l.a)(s,2),p=u[0],m=u[1],d=Object(n.useState)(""),f=Object(l.a)(d,2),h=f[0],v=f[1];return o.a.useEffect((function(){m(i.name),v(i.about)}),[i]),o.a.createElement(b,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),r({name:p,about:h})},isLoading:c},o.a.createElement("fieldset",{className:"popup__inputs"},o.a.createElement("input",{defaultValue:p,className:"popup__input popup__input_name",id:"name-input",type:"text",required:!0,minLength:2,maxLength:40,pattern:"[A-Za-z\u0410-\u042f\u0401\u0430-\u044f\u0451 -]{1,}",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",onChange:function(e){m(e.target.value)}}),o.a.createElement("span",{className:"popup__error-message",id:"name-input-error"}),o.a.createElement("input",{defaultValue:h,className:"popup__input popup__input_text",id:"text-input",type:"text",required:!0,minLength:2,maxLength:40,placeholder:"\u041e \u0441\u0435\u0431\u0435",onChange:function(e){v(e.target.value)}}),o.a.createElement("span",{className:"popup__error-message",id:"text-input-error"})))};var A=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,r=e.isLoading,c=o.a.useRef("");return o.a.useEffect((function(){c.current.value=""}),[t]),o.a.createElement(b,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:c.current.value})},isLoading:r},o.a.createElement("fieldset",{className:"popup__inputs"},o.a.createElement("input",{name:"avatar",className:"popup__input popup__input_avatar",id:"avatar-link",type:"url",placeholder:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",defaultValue:"",required:!0,ref:c}),o.a.createElement("span",{className:"popup__error-message",id:"avatar-link-error"})))};var y=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,r=e.isLoading,c=o.a.useRef(""),i=o.a.useRef("");return o.a.useEffect((function(){c.current.value="",i.current.value=""}),[t]),o.a.createElement(b,{name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:c.current.value,link:i.current.value})},isLoading:r},o.a.createElement("fieldset",{className:"popup__inputs"},o.a.createElement("input",{name:"name",className:"popup__input popup__input_title",id:"title-input",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",defaultValue:"",required:!0,minLength:1,maxLength:30,ref:c}),o.a.createElement("span",{className:"popup__error-message",id:"title-input-error"}),o.a.createElement("input",{name:"link",className:"popup__input popup__input_link",id:"link-input",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",defaultValue:"",required:!0,ref:i}),o.a.createElement("span",{className:"popup__error-message",id:"link-input-error"})))};var P=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),u=Object(l.a)(c,2),p=u[0],d=u[1],f=Object(n.useState)(!1),h=Object(l.a)(f,2),k=h[0],N=h[1],P=Object(n.useState)(!1),j=Object(l.a)(P,2),U=j[0],x=j[1],L=Object(n.useState)({isImageOpen:!1,link:"",name:""}),S=Object(l.a)(L,2),R=S[0],w=S[1],I=Object(n.useState)(!1),q=Object(l.a)(I,2),z=q[0],T=q[1];o.a.useEffect((function(){C.getUserInfo().then((function(e){r(e)})).catch((function(e){console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[]);var D=Object(n.useState)([]),M=Object(l.a)(D,2),W=M[0],V=M[1];function H(){x(!1),d(!1),N(!1),w((function(e){return Object(i.a)(Object(i.a)({},e),{},{isImageOpen:!1})}))}return o.a.useEffect((function(){C.getCards().then((function(e){V(e)})).catch((function(e){console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[]),o.a.createElement(_.Provider,{value:a},o.a.createElement("div",{className:"page"},o.a.createElement(m,null),o.a.createElement(v,{onEditProfile:function(){d(!0)},onAddPlace:function(){N(!0)},onEditAvatar:function(){x(!0)},onCardClick:function(e){var t=e.link,a=e.name;w({isImageOpen:!0,link:t,name:a})},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===a._id}));C.changeLikeCardStatus(e._id,!t).then((function(t){var a=W.map((function(a){return a._id===e._id?t:a}));V(a)})).catch((function(e){console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},onCardDelete:function(e){var t=e.owner._id===a._id;C.deleteCard(e._id,!t).then((function(t){var a=W.filter((function(a){return a._id===e._id?!t:a}));V(a)})).catch((function(e){console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},cards:W}),o.a.createElement(E,null),o.a.createElement("section",{className:"popups"},o.a.createElement(O,{isOpen:p,onClose:H,onUpdateUser:function(e){T(!0),C.sendUserInfo(e).then((function(e){r(e)})).catch((function(e){console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))})).finally((function(){T(!1),H()}))},isLoading:z}),o.a.createElement(y,{isOpen:k,onClose:H,onAddPlace:function(e){T(!0),C.addCard(e).then((function(e){V([].concat(Object(s.a)(W),[e]))})).catch((function(e){console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))})).finally((function(){T(!1),H()}))},isLoading:z}),o.a.createElement(A,{isOpen:U,onClose:H,onUpdateAvatar:function(e){T(!0),C.sendUserAvatar(e).then((function(e){r(e)})).catch((function(e){console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))})).finally((function(){T(!1),H()}))},isLoading:z}),o.a.createElement(g,{isOpen:R.isImageOpen,onClose:H,name:R.name,link:R.link}),o.a.createElement(b,{name:"card-delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a.p+"static/media/avatar.045032a9.png"},7:function(e,t,a){},9:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAAAiCAMAAABRP3qRAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAIGDfn78QQIDvUG/Pr18wkLHt6SYAAAMgSURBVFjDxZfZmuQgCIVREOKW5f1fdozRwnRqFufrqeGiTU5A/iCxLfikuWLr2yfsN/i8HVYk728fBYbP22EAjIctlKHUSWgvwrZTuY4MvND6KSrl2TxYKiwOLAaLbNAKCqAB3LV4n7EjWpuWzhPLwLCl8+/JwwUW4ZN2ZEKCzmMS0gaw+7xWHiFMhccU40e/q/q96yWeO09JbX0BYklr4REUNgjmKOa/pqZTXf4BD7gFBA1nB7GUJYmULLQXHlsIY+M5wi2uivM8wVrLv+GpBcoeo4MNnSfgnJIzhYdTStR53D3Q/hWPKzHmjzwbtakjG9DbxnPIzR+/hWfelGcfNTn+O8+to+n/8xxxlB48gRKiW8ZsfGkUWssRYYnJRMTdI2bElFczy5P9raOXItHII3g02/mpodGaVjMXzfJyWCZ56AyVsZvRKk/hU0sNaB00NG94OA0eNMnDY8yJsg48oW4IUQLha2cw9TKYzXZNbL2MfQ+iGmVDdLWuczzgro7Wthx4ahqlkM5M6i4aOLyUv+R4Askcj1zpVVCeceVMbzTSFEIx8IPnJF+H9XZzPFASIYCmUop0PdGH3Mbwi+99O4Yo9jVqikc7GkvTDlUZW+uSt7YGuP6cJ+oOovQTPDWte3XzwCPng6VbLne2v/KBOcpbHl1PpZvhaZPxNSIPPOH4arYuiG93Pq9veFyro36h+xxP6+h+qzz2PQ8Yegk4QDwv29w0w9P61l+FNvClPtmO1vNw2F0D4sd6PeqzzPG0jub2QSuP+XWtRU+SI8/+qmOfOs7yVJSrm0ceKHJ6H6qp8xce3S91y5zi6RPXbUh5HpNJFK5RIa7DBE55dMvxPHggTPOI/u8beWToWIPXV8iHprOv+uSBnF4q8BkU53ng6k6jPCrj+jpjUNdS9Qy+LnEvMIrZ6rSn7E4PSdrxczyxneyVR4tyeJe8ftybr77Z1THfjrl++Eng0dehMM7zsL6q8lxAj70meNUc3w9K21cPrMo0D+zad8pT71I/6fErjnyjWUH9Kvl69/Aa9H1mxNpg7pqEovFXPzF3j20qzw/Oz0UU1nPeGwAAAABJRU5ErkJggg=="}},[[13,1,2]]]);
//# sourceMappingURL=main.2e78bad7.chunk.js.map
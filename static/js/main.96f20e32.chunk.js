(window["webpackJsonpreact_phone-catalog"]=window["webpackJsonpreact_phone-catalog"]||[]).push([[0],{24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),l=a.n(r),o=(a(29),a(7)),s=c.a.createContext(),m=function(){var e=Object(n.useContext)(s);return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:"img/basket_icon.svg",alt:"Basket",className:"basket"}),c.a.createElement("div",{className:"basket__count"},e.totalCount))},u=a(2),i=function(){return c.a.createElement("header",null,c.a.createElement("nav",{className:"header-nav"},c.a.createElement("ul",{className:"header-nav__list"},c.a.createElement("li",{className:"header-nav__li"},c.a.createElement(u.c,{exact:!0,to:"/",activeClassName:"header-nav__li-active",className:"header-nav__link"},"Home")),c.a.createElement("li",{className:"header-nav__li"},c.a.createElement(u.c,{to:"/phones",activeClassName:"header-nav__li-active",className:"header-nav__link"},"Phones")),c.a.createElement("li",{className:"header-nav__li"},c.a.createElement(u.c,{to:"/fake",activeClassName:"header-nav__li-active",className:"header-nav__link"},"Fake")),c.a.createElement("li",{className:"header-nav__li"},c.a.createElement(u.c,{to:"/fake1/qqq/1233/12222/",activeClassName:"header-nav__li-active",className:"header-nav__link"},"Fake")),c.a.createElement("li",{className:"header-nav__li"},c.a.createElement(u.c,{to:"/basket",activeClassName:"header-nav__li-active",className:"header-nav__link"},c.a.createElement(m,{to:"/basket"}))))))},p=function(){return c.a.createElement("div",{className:"home-page"},c.a.createElement("h1",null,"Welcome To Home Page ",c.a.createElement("br",null),c.a.createElement(u.b,{to:"/phones",className:"show-phones"},"Show Phones")))},E=a(3),b=function(){return c.a.createElement("div",{className:"lds-ring"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))},d=function(e){var t=e.phone;return c.a.createElement(s.Consumer,null,function(e){return c.a.createElement("button",{type:"button",onClick:function(){return e.addItemToBasket(t)},className:"button-buy"},"Buy")})},h=function(e){var t=e.phone,a=t.id,n=t.imageUrl,r=t.name,l=t.snippet;return c.a.createElement("article",{className:"item"},c.a.createElement("div",null,c.a.createElement(u.b,{to:"phones/".concat(a)},c.a.createElement("img",{src:n,alt:"",className:"item__img"}),c.a.createElement("div",{className:"item__title"},r),c.a.createElement("div",{className:"item__description"},l))),c.a.createElement(d,{phone:t}))},f=a(10),v="NEWEST",_="ASC",N=function(e){var t=e.setSortType,a=e.setSearchFieldValue,n=Object(f.debounce)(function(e){var t=e.target.value.toLowerCase().replace(/(\s)/gm,"");a(t)},333);return c.a.createElement("div",{className:"filter"},c.a.createElement("input",{type:"search",name:"serchPhones",className:"filter__search-field",placeholder:"Search",autoComplete:"off",onChange:function(e){return function(e){e.persist(),n(e)}(e)}}),c.a.createElement("select",{name:"direction",className:"filter__direction",onChange:function(e){return t(e.target.value)}},c.a.createElement("option",{value:_},"A-z"),c.a.createElement("option",{value:v},"Newest")))},O="NEWEST",g="ASC",j=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),o=Object(E.a)(l,2),s=o[0],m=o[1],u=Object(n.useState)(!1),i=Object(E.a)(u,2),p=(i[0],i[1]),d=Object(n.useState)(""),v=Object(E.a)(d,2),_=v[0],j=v[1],k=Object(n.useState)(g),y=Object(E.a)(k,2),C=y[0],S=y[1];Object(n.useEffect)(function(){fetch("".concat("https://mate-academy.github.io","/phone-catalogue-static/api/phones.json")).then(function(e){return e.json()}).then(function(e){try{r(e),m(!0)}catch(t){p(!0)}})},[]);var w=Object(n.useMemo)(function(){return function(e,t){return t?e.filter(function(e){return e.name.replace(/(\s)/gm,"").toLowerCase().includes(t)}):e}(a,_)},[a,_]),B=Object(n.useMemo)(function(){return function(e,t){switch(t){case O:return Object(f.sortBy)(e,[function(e){return e.age}]);case g:return Object(f.sortBy)(e,[function(e){return e.name}]);default:return e}}(w,C)},[w,C]);return c.a.createElement("div",{className:"phones__wrapper"},c.a.createElement(N,{phones:a,setPhones:r,setSortType:S,setSearchFieldValue:j}),s?c.a.createElement("div",{className:"phones"},B.map(function(e){return c.a.createElement(h,{key:e.id,phone:e})})):c.a.createElement(b,null))},k=Object(o.f)(function(e){var t=e.location;return c.a.createElement("div",{className:"notFound"},c.a.createElement("h1",null,"404 NotFound"),c.a.createElement("h2",null,t.pathname))}),y=a(14),C=a.n(y),S=a(21),w=function(e){var t=e.match,a=Object(n.useState)(null),r=Object(E.a)(a,2),l=r[0],o=r[1],s=Object(n.useState)(!1),m=Object(E.a)(s,2),u=m[0],i=m[1],p=Object(n.useState)(!1),h=Object(E.a)(p,2),f=h[0],v=h[1],_=Object(n.useState)(0),N=Object(E.a)(_,2),O=N[0],g=N[1],j=t.params.phoneId;return Object(n.useEffect)(function(){(function(){var e=Object(S.a)(C.a.mark(function e(){var t,a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://mate-academy.github.io/phone-catalogue-static/api/phones/".concat(j,".json"));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,o(a),v(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),i(!0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(){return e.apply(this,arguments)}})()()},[j]),u?c.a.createElement(k,null):c.a.createElement(c.a.Fragment,null,console.log(l),f?c.a.createElement("div",{className:"details"},c.a.createElement("section",{className:"phone"},c.a.createElement("img",{src:l.images[O],alt:l.name,className:"phone__main-img"}),c.a.createElement("h1",{className:"phone__title"},l.name),c.a.createElement("p",{className:"phone__description"},l.description),c.a.createElement("div",{className:"thumb"},l.images.map(function(e,t){return c.a.createElement("img",{src:e,alt:e,className:"thumb__img",key:e,onClick:function(){return g(t)}})})),c.a.createElement(d,{phone:l}))):c.a.createElement(b,null))},B=function(){var e=Object(n.useContext)(s);return c.a.createElement(c.a.Fragment,null,e.totalCount?c.a.createElement("table",{className:"basket-table"},c.a.createElement("tbody",null,e.itemsInBasket.map(function(t,a){return c.a.createElement("tr",{className:"basket-table__item",key:t.id},c.a.createElement("td",null,a+1),c.a.createElement("td",null,c.a.createElement(u.b,{to:"/phones/".concat(t.id),className:"basket-table__link-to-item "},c.a.createElement("img",{src:t.imageUrl,alt:t.name,className:"basket-table__img"}))),c.a.createElement("td",null,c.a.createElement(u.b,{to:"/phones/".concat(t.id),className:"basket-table__link-to-item "},t.name)),c.a.createElement("td",{className:"basket-table__count-cell"},c.a.createElement("button",{type:"button",className:"myFancyButton",onClick:function(){return e.decreaseCount(t.id)}},"-"),c.a.createElement("div",null,t.count),c.a.createElement("button",{type:"button",className:"myFancyButton",onClick:function(){return e.increaseCount(t.id)}},"+")),c.a.createElement("td",null,c.a.createElement("button",{type:"button",className:"myFancyButton myFancyButton--warning",onClick:function(){return e.removeFromBasket(t.id)}},"X")))}))):c.a.createElement("p",{className:"basket__empty"},"Empty"))},F=a(23),P=a(22),x=function(e,t){localStorage.setItem(e,JSON.stringify(t))};function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach(function(t){Object(P.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var A=function(e){var t=Object(n.useState)(0),a=Object(E.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)([]),m=Object(E.a)(o,2),u=m[0],i=m[1];Object(n.useEffect)(function(){var e=JSON.parse(window.localStorage.getItem("basketLocalStorage"));e?(l(e.totalCount),i(e.itemsInBasket)):(l(0),i([]))},[]),Object(n.useEffect)(function(){x("basketLocalStorage",{totalCount:r,itemsInBasket:u})});return c.a.createElement(s.Provider,{value:{itemsInBasket:u,totalCount:r,addItemToBasket:function(e){var t=u.some(function(t){return t.id===e.id});i(t?u.map(function(t){return t.id===e.id?(t.count++,T({},t,{count:t.count++})):t}):[].concat(Object(F.a)(u),[T({},e,{count:1})])),l(r+1)},removeFromBasket:function(e){i(u.filter(function(t){return t.id===e?(l(r-t.count),!1):t}))},increaseCount:function(e){i(u.map(function(t){return t.id===e?(t.count++,l(r+1),t):t}))},decreaseCount:function(e){i(u.map(function(t){return t.id===e&&1!==t.count?(t.count=t.count-1,l(r-1),t):t}))}}},e.children)},D=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(A,null,c.a.createElement(i,null),c.a.createElement("main",null,c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:p}),c.a.createElement(o.a,{exact:!0,path:"/phones/",component:j}),c.a.createElement(o.a,{exact:!0,path:"/phones/:phoneId",component:w}),c.a.createElement(o.a,{path:"/basket",component:B}),c.a.createElement(o.a,{component:k})))))};l.a.render(c.a.createElement(u.a,null,c.a.createElement(D,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.96f20e32.chunk.js.map
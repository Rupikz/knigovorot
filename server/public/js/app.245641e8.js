(function(t){function a(a){for(var e,l,c=a[0],n=a[1],o=a[2],d=0,p=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&p.push(i[l][0]),i[l]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);v&&v(a);while(p.length)p.shift()();return r.push.apply(r,o||[]),s()}function s(){for(var t,a=0;a<r.length;a++){for(var s=r[a],e=!0,c=1;c<s.length;c++){var n=s[c];0!==i[n]&&(e=!1)}e&&(r.splice(a--,1),t=l(l.s=s[0]))}return t}var e={},i={app:0},r=[];function l(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=e,l.d=function(t,a,s){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)l.d(s,e,function(a){return t[a]}.bind(null,e));return s},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],n=c.push.bind(c);c.push=a,c=c.slice();for(var o=0;o<c.length;o++)a(c[o]);var v=n;r.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("Header"),s("div",{staticClass:"container"},[s("router-view")],1),s("Footer")],1)},r=[],l=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"nav-menu"},[t._m(0),s("ul",{staticClass:"sidenav",attrs:{id:"mobile-demo"},on:{click:function(a){return t.$emit("close-menu")}}},[t._m(1),t._m(2),t._m(3)])])},c=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",[s("div",{staticClass:"nav-wrapper indigo darken-1"},[s("a",{staticClass:"center brand-logo",attrs:{href:""}},[t._v("Полка кафки")]),s("a",{staticClass:"sidenav-trigger",attrs:{href:"","data-target":"mobile-demo"}},[s("i",{staticClass:"material-icons"},[t._v("menu")])]),s("ul",{staticClass:"right hide-on-med-and-down"},[s("li",[s("a",{attrs:{href:"/"}},[t._v("Главная")])]),s("li",[s("a",{attrs:{href:"/books"}},[t._v("Книги")])]),s("li",[s("a",{attrs:{href:"/about"}},[t._v("О нас")])]),s("li",[s("a",{attrs:{href:"/login"}},[t._v("Войти")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("a",{attrs:{href:"/"}},[t._v("Главная")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("a",{attrs:{href:"/books"}},[t._v("Книги")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("a",{attrs:{href:"/about"}},[t._v("О нас")])])}],n={name:"Header"},o=n,v=s("2877"),d=Object(v["a"])(o,l,c,!1,null,null,null),p=d.exports,C=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("footer",{staticClass:"page-footer indigo darken-1"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col l6 s12"},[s("h5",{staticClass:"white-text"},[t._v(" О нас ")]),s("p",{staticClass:"grey-text text-lighten-4"},[t._v(" You can use rows and columns here to organize your footer content. ")])]),s("div",{staticClass:"col l3 offset-6 s12"},[s("h5",{staticClass:"white-text"},[t._v(" Популярные жанры ")]),s("ul",[s("li",[s("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"#!"}},[t._v("Link 1")])]),s("li",[s("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"#!"}},[t._v("Link 2")])]),s("li",[s("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"#!"}},[t._v("Link 3")])]),s("li",[s("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"#!"}},[t._v("Link 4")])])])]),s("div",{staticClass:"col l3 offset-6 s12"},[s("h5",{staticClass:"white-text"},[t._v(" Наши социаьные сети ")]),s("ul",[s("li",[s("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"#!"}},[t._v("Link 1")])]),s("li",[s("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"#!"}},[t._v("Link 2")])]),s("li",[s("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"#!"}},[t._v("Link 3")])]),s("li",[s("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"#!"}},[t._v("Link 4")])])])])])]),s("div",{staticClass:"footer-copyright"},[s("div",{staticClass:"container"},[t._v(" © 2020 Knigovorot "),s("a",{staticClass:"grey-text text-lighten-4 right",attrs:{href:"#!"}},[t._v("More Links")])])])])}],_={name:"Footer"},u=_,m=Object(v["a"])(u,C,f,!1,null,null,null),g=m.exports,h={name:"App",components:{Header:p,Footer:g}},x=h,w=Object(v["a"])(x,i,r,!1,null,null,null),b=w.exports,k=s("8c4f"),y=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Banners"),t._m(0),s("Cards"),t._m(1),s("Cards")],1)},j=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h4",{staticClass:"section-name"},[t._v(" Художественная литература "),s("span",{staticClass:"watch-more"},[s("a",[t._v("Смотреть еще >")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h4",{staticClass:"section-name"},[t._v(" Научпоп "),s("span",{staticClass:"watch-more"},[s("a",[t._v("Смотреть еще >")])])])}],$=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col l3 m4 s6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image waves-effect waves-block waves-light"},[s("img",{staticClass:"activator",attrs:{src:"images/preview-main.jpg"}})]),s("div",{staticClass:"card-content"},[s("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v(" Название книги ")]),s("span",{staticClass:"card-writer activator grey-text text-darken-2"},[t._v(" Автор книги ")]),s("p",[s("span",{staticClass:"сard-price"},[t._v("300")]),t._v(" руб.")])])])]),s("div",{staticClass:"col l3 m4 s6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image waves-effect waves-block waves-light"},[s("img",{staticClass:"activator",attrs:{src:"images/kola.jpg"}})]),s("div",{staticClass:"card-content"},[s("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v(" Название книги ")]),s("span",{staticClass:"card-writer activator grey-text text-darken-2"},[t._v(" Автор книги ")]),s("p",[s("span",{staticClass:"сard-price"},[t._v("Цена")]),t._v(" руб.")])])])]),s("div",{staticClass:"col l3 m4 s6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image waves-effect waves-block waves-light"},[s("img",{staticClass:"activator",attrs:{src:"images/kola.jpg"}})]),s("div",{staticClass:"card-content"},[s("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v(" Название книги ")]),s("span",{staticClass:"card-writer activator grey-text text-darken-2"},[t._v(" Автор книги ")]),s("p",[s("span",{staticClass:"сard-price"},[t._v("Цена")]),t._v(" руб.")])])])]),s("div",{staticClass:"col l3 m4 s6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image waves-effect waves-block waves-light"},[s("img",{staticClass:"activator",attrs:{src:"images/kola.jpg"}})]),s("div",{staticClass:"card-content"},[s("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v(" Название книги ")]),s("span",{staticClass:"card-writer activator grey-text text-darken-2"},[t._v(" Автор книги ")]),s("p",[s("span",{staticClass:"сard-price"},[t._v("Цена")]),t._v(" руб.")])])])])])}],O={name:"Cards"},B=O,L=Object(v["a"])(B,$,E,!1,null,null,null),P=L.exports,F=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row banners"},[s("div",{staticClass:"col l8 m8 s12"},[s("div",{staticClass:"preview-main"},[s("p",{staticClass:"flow-text preview-text"},[t._v(" Читайте книги, ругайтесь матом ")])])]),s("div",{staticClass:"col l4 m4"},[s("div",{staticClass:"preview-minor"})]),s("div",{staticClass:"col l4 m4"},[s("div",{staticClass:"preview-minor"})])])}],M={name:"Banners"},S=M,T=Object(v["a"])(S,F,H,!1,null,null,null),A=T.exports,J={name:"Home",components:{Cards:P,Banners:A}},z=J,K=Object(v["a"])(z,y,j,!1,null,null,null),Y=K.exports,q=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col s12 m4 l3 xl3"},[s("FilterBooks")],1),s("div",{staticClass:"col s12 m8 l9 xl9"},[s("h4",{staticClass:"section-name"},[t._v(" Дублирование названия темы ")]),s("Bookshelf"),t._m(0)],1)])])},D=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"pagination"},[s("li",{staticClass:"disabled"},[s("a",{attrs:{href:"#!"}},[s("i",{staticClass:"material-icons"},[t._v("chevron_left")])])]),s("li",{staticClass:"active"},[s("a",{attrs:{href:"#!"}},[t._v("1")])]),s("li",{staticClass:"waves-effect"},[s("a",{attrs:{href:"#!"}},[t._v("2")])]),s("li",{staticClass:"waves-effect"},[s("a",{attrs:{href:"#!"}},[t._v("3")])]),s("li",{staticClass:"waves-effect"},[s("a",{attrs:{href:"#!"}},[t._v("4")])]),s("li",{staticClass:"waves-effect"},[s("a",{attrs:{href:"#!"}},[t._v("5")])]),s("li",{staticClass:"waves-effect"},[s("a",{attrs:{href:"#!"}},[s("i",{staticClass:"material-icons"},[t._v("chevron_right")])])])])}],G=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"filter-bar"},[s("p",{staticClass:"title"},[t._v(" Настройка поиска ")]),s("ul",{staticClass:"collapsible"},[s("li",[s("div",{staticClass:"collapsible-header"},[t._v(" Художественная литература ")]),s("div",{staticClass:"collapsible-body"},[s("p",[s("a",{attrs:{href:""}},[t._v("Детективы")])]),s("p",[s("a",{attrs:{href:""}},[t._v("Поэзия")])])])]),s("li",[s("div",{staticClass:"collapsible-header"},[t._v(" Научпоп литература ")]),s("div",{staticClass:"collapsible-body"},[s("p",[s("a",{attrs:{href:""}},[t._v("Психология")])]),s("p",[s("a",{attrs:{href:""}},[t._v("Физика")])])])]),s("li",[s("div",{staticClass:"collapsible-header"},[t._v(" Издательство ")]),s("div",{staticClass:"collapsible-body"},[s("p",[s("a",{attrs:{href:""}},[t._v("Эксмо")])]),s("p",[s("a",{attrs:{href:""}},[t._v("Росмэн")])]),s("p",[s("a",{attrs:{href:""}},[t._v("Феникс")])])])])])])}],N={name:"FilterBooks"},Q=N,R=Object(v["a"])(Q,G,I,!1,null,null,null),U=R.exports,V=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bookshelf"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col s6 m6 l4 xl3"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image waves-effect waves-block waves-light"},[s("img",{staticClass:"activator",attrs:{src:"images/kola.jpg"}})]),s("div",{staticClass:"card-content"},[s("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v(" Название книги ")]),s("span",{staticClass:"card-writer activator grey-text text-darken-2"},[t._v(" Автор книги ")]),s("p",[s("span",{staticClass:"сard-price"},[t._v("Цена")]),t._v(" руб.")])])])]),s("div",{staticClass:"col s6 m6 l4 xl3"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image waves-effect waves-block waves-light"},[s("img",{staticClass:"activator",attrs:{src:"images/kola.jpg"}})]),s("div",{staticClass:"card-content"},[s("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v(" Название книги ")]),s("span",{staticClass:"card-writer activator grey-text text-darken-2"},[t._v(" Автор книги ")]),s("p",[s("span",{staticClass:"сard-price"},[t._v("Цена")]),t._v(" руб.")])])])]),s("div",{staticClass:"col s6 m6 l4 xl3"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image waves-effect waves-block waves-light"},[s("img",{staticClass:"activator",attrs:{src:"images/kola.jpg"}})]),s("div",{staticClass:"card-content"},[s("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v(" Название книги ")]),s("span",{staticClass:"card-writer activator grey-text text-darken-2"},[t._v(" Автор книги ")]),s("p",[s("span",{staticClass:"сard-price"},[t._v("Цена")]),t._v(" руб.")])])])]),s("div",{staticClass:"col s6 m6 l4 xl3"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image waves-effect waves-block waves-light"},[s("img",{staticClass:"activator",attrs:{src:"images/kola.jpg"}})]),s("div",{staticClass:"card-content"},[s("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v(" Название книги ")]),s("span",{staticClass:"card-writer activator grey-text text-darken-2"},[t._v(" Автор книги ")]),s("p",[s("span",{staticClass:"сard-price"},[t._v("Цена")]),t._v(" руб.")])])])]),s("div",{staticClass:"col s6 m6 l4 xl3"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image waves-effect waves-block waves-light"},[s("img",{staticClass:"activator",attrs:{src:"images/kola.jpg"}})]),s("div",{staticClass:"card-content"},[s("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v(" Название книги ")]),s("span",{staticClass:"card-writer activator grey-text text-darken-2"},[t._v(" Автор книги ")]),s("p",[s("span",{staticClass:"сard-price"},[t._v("Цена")]),t._v(" руб.")])])])]),s("div",{staticClass:"col s6 m6 l4 xl3"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image waves-effect waves-block waves-light"},[s("img",{staticClass:"activator",attrs:{src:"images/kola.jpg"}})]),s("div",{staticClass:"card-content"},[s("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v(" Название книги ")]),s("span",{staticClass:"card-writer activator grey-text text-darken-2"},[t._v(" Автор книги ")]),s("p",[s("span",{staticClass:"сard-price"},[t._v("Цена")]),t._v(" руб.")])])])]),s("div",{staticClass:"col s6 m6 l4 xl3"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image waves-effect waves-block waves-light"},[s("img",{staticClass:"activator",attrs:{src:"images/kola.jpg"}})]),s("div",{staticClass:"card-content"},[s("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v(" Название книги ")]),s("span",{staticClass:"card-writer activator grey-text text-darken-2"},[t._v(" Автор книги ")]),s("p",[s("span",{staticClass:"сard-price"},[t._v("Цена")]),t._v(" руб.")])])])]),s("div",{staticClass:"col s6 m6 l4 xl3"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image waves-effect waves-block waves-light"},[s("img",{staticClass:"activator",attrs:{src:"images/kola.jpg"}})]),s("div",{staticClass:"card-content"},[s("span",{staticClass:"card-title activator grey-text text-darken-4"},[t._v(" Название книги ")]),s("span",{staticClass:"card-writer activator grey-text text-darken-2"},[t._v(" Автор книги ")]),s("p",[s("span",{staticClass:"сard-price"},[t._v("Цена")]),t._v(" руб.")])])])])])])}],X={name:"Bookshelf"},Z=X,tt=Object(v["a"])(Z,V,W,!1,null,null,null),at=tt.exports,st={name:"Books",components:{FilterBooks:U,Bookshelf:at}},et=st,it=Object(v["a"])(et,q,D,!1,null,null,null),rt=it.exports,lt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},ct=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about"},[s("h1",[t._v("This is an about page")])])}],nt={},ot=Object(v["a"])(nt,lt,ct,!1,null,null,null),vt=ot.exports,dt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"login-form"},[s("a",{staticClass:"logo",attrs:{href:""}},[t._v("Полка кафки")]),s("ul",{staticClass:"collapsible"},[s("li",{staticClass:"active"},[s("div",{staticClass:"collapsible-header"},[t._v(" Авторизация ")]),s("div",{staticClass:"collapsible-body"},[s("div",{staticClass:"row"},[s("form",{staticClass:"col s12"},[s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"login",placeholder:"Ваша почта или логин",type:"text"}}),s("label",{attrs:{for:"login"}},[t._v("Логин")])]),s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"password",placeholder:"Ваш пароль",type:"text"}}),s("label",{attrs:{for:"password"}},[t._v("Пароль")])]),s("a",{staticClass:"waves-effect waves-light btn"},[t._v("Войти")])])])])]),s("li",[s("div",{staticClass:"collapsible-header"},[t._v(" Регистрация ")]),s("div",{staticClass:"collapsible-body"},[s("div",{staticClass:"row"},[s("form",{staticClass:"col s12"},[s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"email",type:"email"}}),s("label",{attrs:{for:"email"}},[t._v("Email")])]),s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"login",placeholder:"Ваш логин",type:"text"}}),s("label",{attrs:{for:"login"}},[t._v("Логин")])]),s("div",{staticClass:"input-field"},[s("input",{staticClass:"validate",attrs:{id:"password",placeholder:"Ваш пароль",type:"text"}}),s("label",{attrs:{for:"password"}},[t._v("Пароль")])]),s("a",{staticClass:"waves-effect waves-light btn"},[t._v("Зарегистрироваться")])])])])])])])}],Ct={name:"Login",components:{}},ft=Ct,_t=Object(v["a"])(ft,dt,pt,!1,null,null,null),ut=_t.exports;e["a"].use(k["a"]);var mt=[{path:"/",name:"Home",component:Y},{path:"/books",name:"Books",component:rt},{path:"/about",name:"About",component:vt},{path:"/login",name:"Login",component:ut}],gt=new k["a"]({mode:"history",base:"/",routes:mt}),ht=gt;e["a"].config.productionTip=!1,new e["a"]({router:ht,render:function(t){return t(b)}}).$mount("#app")}});
//# sourceMappingURL=app.245641e8.js.map
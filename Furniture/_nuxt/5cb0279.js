(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1198:function(t,e,n){t.exports=n.p+"img/service_1.b0520a1.jpg"},1199:function(t,e,n){"use strict";var r={name:"Login",props:["display"],data:function(){return{input:{email:null,password:null}}},metheds:{closeForm:function(){this.$emit("closeForm")}},mounted:function(){var t=this;this.$el.querySelector(".login").addEventListener("click",(function(){t.$store.state.authData=t.input,t.$emit("login")}))}},o=n(82),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"form-container",on:{submit:function(t){t.preventDefault()}}},[n("h1",[t._v("Login")]),t._v(" "),t._m(0),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.email,expression:"input.email"}],attrs:{type:"text",placeholder:"Enter Email",name:"email",required:""},domProps:{value:t.input.email},on:{input:function(e){e.target.composing||t.$set(t.input,"email",e.target.value)}}}),t._v(" "),t._m(1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.password,expression:"input.password"}],attrs:{type:"password",placeholder:"Enter Password",name:"psw",required:""},domProps:{value:t.input.password},on:{input:function(e){e.target.composing||t.$set(t.input,"password",e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn login",attrs:{type:"submit"}},[t._v("Login")]),t._v(" "),n("button",{staticClass:"btn cancel",attrs:{type:"button",onclick:"closeForm()"}},[t._v("Close")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"email"}},[e("b",[this._v("Email")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"psw"}},[e("b",[this._v("Password")])])}],!1,null,null,null);e.a=component.exports},1202:function(t,e,n){var content=n(1218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(141).default)("708bf520",content,!0,{sourceMap:!1})},1203:function(t,e,n){var content=n(1220);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(141).default)("d3aab7a8",content,!0,{sourceMap:!1})},1204:function(t,e,n){var content=n(1225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(141).default)("25a20b40",content,!0,{sourceMap:!1})},1205:function(t,e,n){var content=n(1228);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(141).default)("5f280b80",content,!0,{sourceMap:!1})},1206:function(t,e,n){t.exports=n.p+"img/user1.ec45ace.jpg"},1207:function(t,e,n){var content=n(1231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(141).default)("1f70ea00",content,!0,{sourceMap:!1})},1208:function(t,e,n){var content=n(1233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(141).default)("4a107a0a",content,!0,{sourceMap:!1})},1209:function(t,e,n){var content=n(1235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(141).default)("1b7833da",content,!0,{sourceMap:!1})},1214:function(t,e,n){t.exports=n.p+"img/logo.003ad06.png"},1215:function(t,e,n){t.exports=n.p+"img/menu.8026454.png"},1216:function(t,e,n){t.exports=n.p+"img/close.29e7f15.png"},1217:function(t,e,n){"use strict";n(1202)},1218:function(t,e,n){(e=n(140)(!1)).push([t.i,"#sidenav{width:250px;height:100vh;position:fixed;right:-250px;top:0;background:#bfb8ad;z-index:2;transition:.5s}nav ul li{list-style:none;margin:30px 20px}nav ul li a{text-decoration:none;color:#fff}#menubtn{width:50px;height:50px;background-color:#bfb8ad;text-align:center;position:fixed;right:30px;top:20px;border-radius:3px;z-index:3;cursor:pointer}#menubtn img{width:30px;margin-top:10px;-moz-columns:#fff;column-count:#fff}#close{display:none;width:20px}",""]),t.exports=e},1219:function(t,e,n){"use strict";n(1203)},1220:function(t,e,n){var r=n(140),o=n(1221),l=n(1222);e=r(!1);var c=o(l);e.push([t.i,"#banner{background-image:linear-gradient(rgba(0,0,0,.5),#bfb8ad),url("+c+');background-size:cover;background-position:50%;height:100vh}.logo{width:140px;position:absolute;top:4%;left:10%}.banner-text{text-align:center;color:#fff;padding:160px}.banner-text h1{font-size:100px;font-family:"Big Shoulders Stencil Text",cursive;color:#fff}.banner-text p{font-size:20px;font-style:italic}.banner-btn{margin:70px auto 0}.banner-btn a{text-decoration:none;width:150px;display:inline-block;margin:0 10px;padding:12px 0;color:#fff;border:.5px solid #fff;position:relative;z-index:1;transition:color .5s}.banner-btn a span{width:0;height:100%;position:absolute;top:0;left:0;background:#fff;z-index:-1;transition:.5s}.banner-btn a:hover span{width:100%}.banner-btn a:hover{color:#000}@media screen and (max-width:774px){.banner{text-align:unset}.logo{width:70px}.banner-text h1{font-size:20px}.banner-text a{display:block;margin:20px auto}}',""]),t.exports=e},1221:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},1222:function(t,e,n){t.exports=n.p+"img/banner.d6b8582.jpg"},1223:function(t,e,n){t.exports=n.p+"img/why_us.9a651e3.jpg"},1224:function(t,e,n){"use strict";n(1204)},1225:function(t,e,n){(e=n(140)(!1)).push([t.i,'.feature{width:100%;padding:70px 0}.title-text{text-align:center;padding-bottom:70px}.title-text p{margin:auto;font-size:20px;color:#8a3033;font-weight:700;position:relative;z-index:1;display:inline-block}.title-text p:after{content:"";width:50px;height:35px;background:linear-gradient(#823329,#fff);position:absolute;top:-20px;left:0;z-index:-1;transform:rotate(10deg);border-top-left-radius:35px;border-bottom-right-radius:35px}.title-text h1{font-size:50px}.feature-box{width:80%;margin:auto;display:flex;flex-wrap:wrap;align-items:center;text-align:center}.features,.features-img{flex-basis:50%}.features-img{margin:auto}.features-img img{width:70%;border-radius:10px;opacity:1}.features h1{text-align:left;margin-bottom:10px;font-weight:100;color:#823329}.features-desc{display:flex;align-items:center;margin-bottom:40px}.features-desc .fa{width:50px;height:50px;font-size:30px;line-height:50px;border-radius:8px;color:#823329;border:1px solid #823329}.features-desc p{margin-left:5px}@media screen and (max-width:770px){.title-text h1{font-size:35px}.features,.features-img{flex-basis:100%}.features-img img{width:100%}}',""]),t.exports=e},1226:function(t,e,n){t.exports=n.p+"img/service_2.48bd8d5.jpg"},1227:function(t,e,n){"use strict";n(1205)},1228:function(t,e,n){(e=n(140)(!1)).push([t.i,".service{width:100%;padding:70px 0;background-color:#efefef}.service-box{width:80%;display:flex;flex-wrap:wrap;justify-content:space-around;margin:auto}.single-service{flex-basis:48%;text-align:center;border-radius:7px;color:#fff;margin-bottom:20px;position:relative}.overlay,.single-service img{width:100%;border-radius:7px}.overlay{height:100%;position:absolute;top:0;cursor:pointer;background:linear-gradient(rgba(0,0,0,.5),#823329);opacity:0;transition:1s}.single-service:hover .overlay{opacity:1}.service-desc{width:80%;position:absolute;bottom:0;left:50%;transform:translateX(-50%);transition:1s;opacity:0}hr{background:#fff;height:2px;border:0;margin:15px auto;width:60%}.service-desc p{font-size:14px}.single-service:hover .service-desc{bottom:40%;opacity:1}@media screen and (max-width:770px){.single-service{flex-basis:100%;margin-bottom:30px}.service-desc p{font-size:10px}hr{margin:5px auto}.single-service:hover .service-desc{bottom:25%!important}}",""]),t.exports=e},1229:function(t,e,n){t.exports=n.p+"img/user3.80a7e78.jpg"},1230:function(t,e,n){"use strict";n(1207)},1231:function(t,e,n){(e=n(140)(!1)).push([t.i,".testimonial{width:100%;padding:70px 0}.testimonial-row{width:80%;margin:auto;display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap}.testimonial-column{flex-basis:28%;padding:10px;margin-bottom:30px;border-radius:5px;box-shadow:0 7px 20px 2px #d68c83;cursor:pointer;transition:transform .5s}.testimonial-row p{font-size:14px}.user{display:flex;align-items:center;margin:20px 0}.user img{width:40px;margin-right:20px;border-radius:3px}.user-info .fa{margin-left:10px;color:#27c0ff;font-size:20px}.user-info small{margin:0;color:#b8594d}h4{margin:0}.testimonial-column:hover{transform:translateY(7px)}@media screen and (max-width:770px){.testimonial-column{flex-basis:100%}}",""]),t.exports=e},1232:function(t,e,n){"use strict";n(1208)},1233:function(t,e,n){(e=n(140)(!1)).push([t.i,".footer{padding:60px 0 20px;background:#efefef}.footer .title-text{padding:0}.footer-row{width:80%;margin:0 auto;display:flex;justify-content:space-between;flex-wrap:wrap}.footer-left,.footer-right{flex-basis:45%;padding:10px;margin-bottom:20px}.footer-right{text-align:right}.footer-left .footer-btn{text-align:center;color:#000}.footer-left h2{text-align:center}.banner-btn{margin:70px auto 0}.footer-btn a{text-decoration:none;width:150px;display:inline-block;margin:0 10px;padding:12px 0;color:#000;border:.5px solid #000;position:relative;z-index:1;transition:color .5s}.footer-btn a span{width:0;height:100%;position:absolute;top:0;left:0;background:#fff;z-index:-1;transition:.5s}.footer-row h2{margin:10px 0}.footer-row p{line-height:10px}.footer-right .fa{font-size:20px;color:#823329;margin:10px}.social-links{text-align:center}.social-links .fa{height:40px;width:40px;font-size:40px;line-height:40px;margin:40px 5px 0;color:#823329;cursor:pointer;transition:.5s}.social-links .fa:hover{transform:translateY(-7px)}.social-links p{font-size:12px;margin:20px}@media screen and (max-width:770px){.footer-left,.footer-right{flex-basis:100%;font-size:14px}}",""]),t.exports=e},1234:function(t,e,n){"use strict";n(1209)},1235:function(t,e,n){(e=n(140)(!1)).push([t.i,'*{margin:0;padding:0}html{font-family:"Noto Serif",serif}',""]),t.exports=e},1236:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"banner"}},[r("img",{staticClass:"logo",attrs:{src:n(1214)}}),t._v(" "),r("div",{staticClass:"banner-text"},[r("h1",[t._v("Lets Design a Home")]),t._v(" "),r("p",[t._v("Don't Stress, We Design The Perfect Home...")]),t._v(" "),r("div",{staticClass:"banner-btn"},[r("a",{attrs:{href:"#"}},[r("span"),t._v(" Find Out")]),t._v(" "),r("a",{attrs:{href:""}},[r("span"),t._v(" Read More")])])])])}],o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("div",{attrs:{id:"sidenav"}},[r("nav",[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[t._v("Home")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Features")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Services")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Testimonials")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Meets Us")])]),t._v(" "),r("li",[r("a",{attrs:{href:"/login"}},[t._v("Log In")])])])])]),t._v(" "),r("div",{attrs:{id:"menubtn"}},[r("img",{attrs:{src:n(1215),id:"menu"}}),t._v(" "),r("img",{attrs:{src:n(1216),id:"close"}})])])}],l=n(103),c=n(134);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={name:"SideNav",components:{},props:[],data:function(){return{}},mounted:function(){alert("hello world");var t=this.$el.querySelector("#menubtn"),e=this.$el.querySelector("#sidenav"),menu=this.$el.querySelector("#menu"),n=this.$el.querySelector("#close");t.style.reght="-250px",t.addEventListener("click",(function(){"-250px"==e.style.right?(e.style.right="0",menu.style.display="none",n.style.display="block"):(e.style.right="-250px",menu.style.display="block",n.style.display="none")}))},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["ifAuthenticated"]))},v=(n(1217),n(82)),h={name:"Banner",props:[],components:{SideNav:Object(v.a)(d,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),o,!1,null,null,null).exports},data:function(){return{}}},m=(n(1219),Object(v.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._m(0),this._v(" "),e("SideNav")],1)}),r,!1,null,null,null).exports),x=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"feature"},[r("div",{staticClass:"title-text"},[r("p",[t._v("Features")]),t._v(" "),r("h1",[t._v("Why choose Us")])]),t._v(" "),r("div",{staticClass:"feature-box"},[r("div",{staticClass:"features"},[r("h1",[t._v("Experinced Staff")]),t._v(" "),r("div",{staticClass:"features-desc"},[r("div",{staticClass:"feature-icon"},[r("i",{staticClass:"fa fa-shield"})]),t._v(" "),r("div",{staticClass:"features-text"},[r("p",[t._v("\n            A workforce that proffesinal and dedicated only to you. Only Bees\n            can bit Us\n          ")])])]),t._v(" "),r("h1",[t._v("Pre Booking Online")]),t._v(" "),r("div",{staticClass:"features-desc"},[r("div",{staticClass:"feature-icon"},[r("i",{staticClass:"fa fa-check-square-o"})]),t._v(" "),r("div",{staticClass:"features-text"},[r("p",[t._v("\n            A workforce that proffesinal and dedicated only to you. Only Bees\n            can bit Us\n          ")])])]),t._v(" "),r("h1",[t._v("Experinced Staff")]),t._v(" "),r("div",{staticClass:"features-desc"},[r("div",{staticClass:"feature-icon"},[r("i",{staticClass:"fa fa-inr"})]),t._v(" "),r("div",{staticClass:"features-text"},[r("p",[t._v("\n            A workforce that proffesinal and dedicated only to you. Only Bees\n            can bit Us\n          ")])])])]),t._v(" "),r("div",{staticClass:"features-img"},[r("img",{attrs:{src:n(1223),alt:""}})])])])}],_={name:"Features",props:[],data:function(){return{}}},y=(n(1224),Object(v.a)(_,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),x,!1,null,null,null).exports),w=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"service"},[r("div",{staticClass:"title-text"},[r("p",[t._v("Services")]),t._v(" "),r("h1",[t._v("We Provide Better")])]),t._v(" "),r("div",{staticClass:"service-box"},[r("div",{staticClass:"single-service"},[r("img",{attrs:{src:n(1198),alt:""}}),t._v(" "),r("div",{staticClass:"overlay"}),t._v(" "),r("div",{staticClass:"service-desc"},[r("h3",[t._v("Inetrior Design")]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("Lets create the perect home for you and your family. A home is not just a home")])])]),t._v(" "),r("div",{staticClass:"single-service"},[r("img",{attrs:{src:n(1226),alt:""}}),t._v(" "),r("div",{staticClass:"overlay"}),t._v(" "),r("div",{staticClass:"service-desc"},[r("h3",[t._v("Furniture Building")]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("Lets create the perect home for you and your family. A home is not just a home")])])]),t._v(" "),r("div",{staticClass:"single-service"},[r("img",{attrs:{src:n(1198),alt:""}}),t._v(" "),r("div",{staticClass:"overlay"}),t._v(" "),r("div",{staticClass:"service-desc"},[r("h3",[t._v("Moving Helpers")]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("Lets create the perect home for you and your family. A home is not just a home")])])]),t._v(" "),r("div",{staticClass:"single-service"},[r("img",{attrs:{src:n(1198),alt:""}}),t._v(" "),r("div",{staticClass:"overlay"}),t._v(" "),r("div",{staticClass:"service-desc"},[r("h3",[t._v("Extreria Design")]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("Lets create the perect home for you and your family. A home is not just a home")])])])])])}],C={name:"Service",props:[],data:function(){return{}}},k=(n(1227),Object(v.a)(C,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),w,!1,null,null,null).exports),j=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"testimonial"},[r("div",{staticClass:"title-text"},[r("p",[t._v("Testimonials")]),t._v(" "),r("h1",[t._v("Our Client Say's")])]),t._v(" "),r("div",{staticClass:"testimonial-row"},[r("div",{staticClass:"testimonial-column"},[r("div",{staticClass:"user"},[r("img",{attrs:{src:n(1229),alt:""}}),t._v(" "),r("div",{staticClass:"user-info"},[r("h4",[t._v("Kevin Mwangi "),r("i",{staticClass:"fa fa-twitter"})]),t._v(" "),r("small",[t._v("@KevMwangi")])])]),t._v(" "),r("p",[t._v("\n        Creature form form open them void was thing unto seasons sixth upon\n        creepeth life made also signs may to gathered darkness two lesser\n        cattle day appear. Doesn't so first place. Air heaven had. Let fruit\n        stars made great second. Face sea appear were have. Waters dominion.\n        Spirit there was their own brought. Bring god night Make first was for\n        saying. Creature beast itself land whose abundantly.\n      ")])]),t._v(" "),r("div",{staticClass:"testimonial-column"},[r("div",{staticClass:"user"},[r("img",{attrs:{src:n(1206),alt:""}}),t._v(" "),r("div",{staticClass:"user-info"},[r("h4",[t._v("Pter Kenneth "),r("i",{staticClass:"fa fa-twitter"})]),t._v(" "),r("small",[t._v("@Pkenneth")])])]),t._v(" "),r("p",[t._v("\n        Creature form form open them void was thing unto seasons sixth upon\n        creepeth life made also signs may to gathered darkness two lesser\n        cattle day appear. Doesn't so first place. Air heaven had. Let fruit\n        stars made great second.\n      ")])]),t._v(" "),r("div",{staticClass:"testimonial-column"},[r("div",{staticClass:"user"},[r("img",{attrs:{src:n(1206),alt:""}}),t._v(" "),r("div",{staticClass:"user-info"},[r("h4",[t._v("Alan Paul "),r("i",{staticClass:"fa fa-twitter"})]),t._v(" "),r("small",[t._v("@paulAlan")])])]),t._v(" "),r("p",[t._v("\n        Creature form form open them void was thing unto seasons sixth upon\n        creepeth life made also signs may to gathered darkness two lesser\n        cattle day appear. Doesn't so first place. Air heaven had. Let fruit\n        stars made great second. Face sea appear were have. Waters dominion.\n        Spirit there was their own brought. Bring god night Make first was for\n        saying. Creature beast itself land whose abundantly.\n      ")])])])])}],O={},$=(n(1230),Object(v.a)(O,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),j,!1,null,null,null).exports),E={name:"Footer",data:function(){return{}},methods:{register:function(){this.$emit("openRegister")}}},z=(n(1232),{auth:!1,name:"Home",components:{Banner:m,Features:y,Services:k,Testimonials:$,Footer:Object(v.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[t._m(0),t._v(" "),n("div",{staticClass:"footer-row"},[n("div",{staticClass:"footer-left"},[n("h2",[t._v("Register with us Today")]),t._v(" "),n("div",{staticClass:"footer-btn"},[n("i",{staticClass:"fa fa-registered"}),t._v(" "),n("a",{attrs:{href:"/register"},on:{click:function(e){return t.register()}}},[n("span"),t._v("Register With Us")])])]),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-text"},[e("p",[this._v("Contact Us")]),this._v(" "),e("h1",[this._v("It's So easy")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-right"},[e("h2",[this._v("Get In Touch")]),this._v(" "),e("p",[this._v("#30 abc Moi Ave, Nairobi City"),e("i",{staticClass:"fa fa-map-marker"})]),this._v(" "),e("p",[this._v("example@jirani.com"),e("i",{staticClass:"fa fa-paper-plane"})]),this._v(" "),e("p",[this._v("+254 111 001122"),e("i",{staticClass:"fa fa-phone"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"social-links"},[e("i",{staticClass:"fa fa-facebook"}),this._v(" "),e("i",{staticClass:"fa fa-instagram"}),this._v(" "),e("i",{staticClass:"fa fa-twitter"}),this._v(" "),e("i",{staticClass:"fa fa-youtube-play"}),this._v(" "),e("p",[this._v("Developed By Lantei")])])}],!1,null,null,null).exports,Login:n(1199).a},data:function(){return{displayRegister:!1}},methods:{}}),S=(n(1234),Object(v.a)(z,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("Banner"),this._v(" "),e("Features"),this._v(" "),e("Services"),this._v(" "),e("Testimonials"),this._v(" "),e("Footer")],1)}),[],!1,null,null,null));e.default=S.exports}}]);
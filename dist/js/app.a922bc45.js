(function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=t[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/UserList/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"03be":function(e,t,r){"use strict";var n=r("0d6c"),a=r.n(n);a.a},"0d6c":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("8c4f"),s=r("2f62"),o=(r("7db0"),r("c975"),r("a434"),r("b0c0"),r("d3b7"),r("96cf"),{state:{users:[]},getters:{allUsers:function(e){return e.users}},mutations:{setUsers:function(e,t){e.users=t},updateUser:function(e,t){var r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(fetch("http://localhost:8041/"+t.id,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}));case 2:r=e.users.find((function(e){return t.id==e.id})),r.name=t.name,r.birthday=t.birthday,r.phone=t.phone,r.role=t.role,r.isArchive=t.isArchive;case 8:case"end":return n.stop()}}))},createUser:function(e,t){return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(fetch("http://localhost:8041/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}));case 2:e.users.push(t);case 3:case"end":return r.stop()}}))},deleteUser:function(e,t){return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(fetch("http://localhost:8041/"+t.id,{method:"DELETE",headers:{"Content-Type":"application/json"}}));case 2:e.users.splice(e.users.indexOf(t),1);case 3:case"end":return r.stop()}}))}},actions:{fetchUsers:function(e){var t,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(fetch("http://localhost:8041/"));case 2:return t=n.sent,n.next=5,regeneratorRuntime.awrap(t.json());case 5:r=n.sent,e.commit("setUsers",r);case 7:case"end":return n.stop()}}))}}});n["default"].use(s["a"]);var i=new s["a"].Store({modules:{user:o}}),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{attrs:{id:"app"}},[r("h1",[e._v(e._s(e.title))]),r("router-view"),r("users")],1)},u=[],l=r("5f5b"),p=r("1772"),d=r.n(p),h=(r("f9e3"),r("2dd8"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"creatin container"},[r("table",{staticClass:"table table-hover table-dark"},[r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[e._v("Name")]),r("th",{attrs:{scope:"col"}},[e._v("Birthday")]),r("th",{attrs:{scope:"col"}},[e._v("Phone")]),r("th",{attrs:{scope:"col"}},[e._v("Role")]),r("th",{attrs:{scope:"col"}},[e._v("Archive")]),r("th",{attrs:{scope:"col"}},[r("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(t){return e.createUserForm()}}},[e._v("Create new user")])])])]),r("tbody",e._l(e.allUsers,(function(t,n){return r("tr",{key:n},[r("td",[e._v(e._s(t.name))]),r("td",[e._v(e._s(t.birthday))]),r("td",[e._v(e._s(t.phone))]),r("td",[e._v(e._s(t.role))]),r("td",[e._v(e._s(t.isArchive))]),r("td",[r("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(r){return e.updateUserForm(t)}}},[e._v("Edit")]),e._v(" / "),r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(r){return e.deleteUserForm(t)}}},[e._v("Delete")])])])})),0)]),r("b-modal",{ref:"modal",attrs:{id:"modalForm",centered:"",title:"User info"},on:{ok:e.handleOk,cancel:e.resetModal}},[r("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.eventSubmit(t)}}},[r("b-form-group",{attrs:{state:e.nameState,label:"Name","label-for":"name-input","invalid-feedback":"Check yor name"}},[r("b-form-input",{attrs:{id:"name-input",type:"text",state:e.nameState,required:""},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),r("b-form-group",{attrs:{state:e.birthdayState,label:"Birthday","label-for":"birthday-input","invalid-feedback":"Check your birthday"}},[r("b-form-input",{attrs:{id:"birthday-input",type:"date",state:e.birthdayState,required:""},model:{value:e.user.birthday,callback:function(t){e.$set(e.user,"birthday",t)},expression:"user.birthday"}})],1),r("b-form-group",{attrs:{state:e.phoneState,label:"Phone","label-for":"phone-input","invalid-feedback":"Check your phone"}},[r("b-form-input",{directives:[{name:"mask",rawName:"v-mask",value:"+# (###) ### ## ##",expression:"`+# (###) ### ## ##`"}],attrs:{id:"phone-input",type:"tel",state:e.phoneState,required:""},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1),r("b-form-group",{attrs:{label:"Role","label-for":"role-input"}},[r("b-form-select",{attrs:{id:"role-input",options:e.userRoles},model:{value:e.user.role,callback:function(t){e.$set(e.user,"role",t)},expression:"user.role"}})],1),r("b-form-group",{attrs:{label:"Archive","label-for":"archive-checkbox"}},[r("b-form-checkbox",{attrs:{id:"archive-checkbox",name:"archive-checkbox"},model:{value:e.user.isArchive,callback:function(t){e.$set(e.user,"isArchive",t)},expression:"user.isArchive"}})],1)],1)])],1)}),f=[],b=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3"));function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(b["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={id:"",name:"",isArchive:!1,role:"",phone:"",birthday:""},g={name:"users",computed:Object(s["c"])(["allUsers"]),data:function(){return{user:y,nameState:null,phoneState:null,birthdayState:null,userRoles:[{value:"designer",text:"designer"},{value:"manager",text:"manager"},{value:"developer",text:"developer"}],isEditing:!1}},mounted:function(){this.fetchUsers()},methods:v({},Object(s["b"])(["fetchUsers"]),{},Object(s["d"])(["createUser","deleteUser","editUser","updateUser"]),{checkFormValidity:function(){var e=this.$refs.form.checkValidity();return this.nameState=e,this.birthdayState=e,this.phoneState=e,e},resetModal:function(){this.nameState=null,this.phoneState=null,this.birthdayState=null},createUserForm:function(){this.isEditing=!1,this.user=v({},y),this.$bvModal.show("modalForm")},updateUserForm:function(e){this.isEditing=!0,this.user=v({},e),this.$bvModal.show("modalForm")},deleteUserForm:function(e){this.$store.commit("deleteUser",e)},handleOk:function(e){e.preventDefault(),this.eventSubmit()},eventSubmit:function(){var e=this;this.checkFormValidity()&&(this.isEditing?this.updateUser(this.user):(this.createUser(this.user),this.fetchUsers()),this.resetModal(),this.$nextTick((function(){return e.$bvModal.hide("modalForm")})))}})},O=g,w=(r("03be"),r("2877")),k=Object(w["a"])(O,h,f,!1,null,"761e8428",null),x=k.exports,j=r("1881"),_=r.n(j);n["default"].use(_.a),n["default"].use(l["a"]),n["default"].use(d.a);var S={name:"app",data:function(){return{title:"User List App"}},components:{users:x}},U=S,P=(r("cf25"),Object(w["a"])(U,c,u,!1,null,null,null)),$=P.exports;n["default"].use(a["a"]);var R=[{path:"/users",component:x}],A=new a["a"]({routes:R,mode:"history"});n["default"].config.productionTip=!1,new n["default"]({store:i,router:A,render:function(e){return e($)}}).$mount("#app")},cf25:function(e,t,r){"use strict";var n=r("fea6"),a=r.n(n);a.a},fea6:function(e,t,r){}});
//# sourceMappingURL=app.a922bc45.js.map
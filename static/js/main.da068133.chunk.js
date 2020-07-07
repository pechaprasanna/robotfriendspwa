(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},28:function(e,t,n){},29:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),i=n(5),s=n(1),l=n(15),u=n(16),h={searchField:""},d={isPending:!1,robots:[],error:""},p=(n(28),n(3)),f=n(4),b=n(7),g=n(6),v=function(e){var t=e.name,n=e.id,r=e.email;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(n,"?size=525 x 525")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,r)))},m=function(e){var t=e.robots;return Object.keys(t).length>0?a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(v,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})}))):a.a.createElement("h3",null,"No Results")},E=function(e){e.searchField;var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},w=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},O=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(f.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Ooops. Something went wrong!"):this.props.children}}]),n}(r.Component),y=(n(29),n(11)),R=n.n(y),S=n(17);function j(){return(j=Object(S.a)(R.a.mark((function e(t){var n,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST_ROBOTS_PENDING"}),e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/users");case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.next=10,t({type:"REQUEST_ROBOTS_SUCCESS",payload:r});case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,t({type:"REQUEST_ROBOTS_FAILED",payload:e.t0});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}var C=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?a.a.createElement("h3",{className:"tc f2"},"Loading ... "):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(E,{searchChange:n}),a.a.createElement(w,null,a.a.createElement(O,null,a.a.createElement(m,{robots:c}))))}}]),n}(r.Component),k=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return function(e){return j.apply(this,arguments)}(e)}}}))(C),_=(n(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var T=Object(l.createLogger)(),x=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),A=Object(s.d)(x,Object(s.a)(u.a,T));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{store:A},a.a.createElement(k,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robotfriendspwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robotfriendspwa","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(t,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.da068133.chunk.js.map
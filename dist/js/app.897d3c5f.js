(function(){var e={6645:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=function(){var e=this,t=e._self._c;return t(e.layout,{tag:"component"},[e._t("default")],2)},o=[];const a="AppDefaultLayout";var s={name:"AppLayout",computed:{layout(){const e=this.$route.meta.layout||a;return()=>r(2115)(`./${e}.vue`)}}},i=s,u=r(1001),c=(0,u.Z)(i,n,o,!1,null,null,null),l=c.exports},2484:function(e,t,r){"use strict";var n=r(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("AppLayout",[t("transition",{attrs:{name:"fade"}},[t("router-view")],1)],1)],1)},a=[],s=(r(7658),r(6645)),i={components:{AppLayout:s["default"]},data(){return{path:""}},methods:{},mounted(){var e=window.location.pathname.split("/");this.path=e[1]},watch:{path:{handler(e){if(e){var t=Number(e);Number.isInteger(t)&&this.$router.push(`/?card=${this.path}`)}},immediate:!0}}},u=i,c=r(1001),l=(0,c.Z)(u,o,a,!1,null,null,null),d=l.exports,f=r(2631);const p=()=>r.e(115).then(r.bind(r,3804)),g=()=>r.e(233).then(r.bind(r,233)),m=()=>r.e(602).then(r.bind(r,8602)),h=[{path:"/",name:"login",component:p,meta:{layout:"AppAuthLayout"}},{path:"/register",name:"register",component:g,meta:{layout:"AppAuthLayout"}},{path:"/forgot-password",name:"forgot-password",component:m,meta:{layout:"AppAuthLayout"}}];var v=h;const y=()=>r.e(837).then(r.bind(r,2837)),E=[{path:"/dashboard",name:"dashboard",component:y,meta:{layout:"DashboardLayout",parent:"dashboard",header:"dashboard"}}];var S=E;n["default"].use(f.ZP);const b=[],T=new f.ZP({mode:"history",base:"/",routes:b.concat(v,S)});var _=T,A=r(3822),k=r(680),O=r(4161);const w={appEnv:"production",appName:"eNaira Card Management System",appUrl:"https://enaira.cowrie.services",landingUrl:"https://enaira.cowrie.services",apiKey:"",apiUrl:"https://enaira.cowrie.services",domain:"enaira.cowrie.services",websocket:"https://enaira.cowrie.services",pusherKey:"",companyName:"enaira",supportEmail:"admin@enaira.com",supportPhone:'"+23480000000000",',accessTokenStorageKey:"samzugagpt_session",accessTokenExpiresInStorageKey:"samzugagpt_session_expires_in",accessTokenExpiresAtStorageKey:"samzugagpt_session_expires_at",accessTokenExpiryTimeLeftForFrontendAutoRefresh:18e3,referralCodeStorageKey:"samzugagpt_referral_code",getSubdomain:()=>{let e=window.location.host,t=e.split("."),r=t[0];return r}};var L=w;const R=O.Z.create({baseURL:L.apiUrl,headers:{}}),N=k.Z.get(L.accessTokenStorageKey);N?R.defaults.headers.common["Authorization"]=N:(R.defaults.headers.common["Authorization"]=null,delete R.defaults.headers.common["Authorization"]),R.interceptors.request.use((function(e){NProgress.start();const t=k.Z.get(L.accessTokenStorageKey);return t?e.headers.Authorization=t:(e.headers.Authorization=null,delete e.headers.Authorization),e}),(function(e){return Promise.reject(e)})),R.interceptors.response.use((function(e){return NProgress.done(),e}),(function(e){return NProgress.done(),e.response.data.status_code,Promise.reject(e.response)}));var P=R;const x=()=>({loading:!1,error:!1,success:!1,regError:!1,regSuccess:!1,validationErrors:{},user:{},loggedIn:!1,profile:{}});var C={namespaced:!0,state:x(),getters:{isLoading:e=>e.loading,isLoggedIn(e){return e.loggedIn?e.loggedIn:!!k.Z.get(L.accessTokenStorageKey)},getAccessToken(){return k.Z.get(L.accessTokenStorageKey)},getAccessTokenExpiresAt(){return k.Z.get(L.accessTokenExpiresAtStorageKey)},getAccessTokenExpiresIn(){return k.Z.get(L.accessTokenExpiresInStorageKey)},getUser:e=>e.user,getProfile:e=>e.profile},mutations:{SET_LOADING(e){e.loading=!0,e.error=!1,e.success=!1,e.regError=!1,e.regSuccess=!1,e.validationErrors={}},SET_ERROR(e,t){e.error=t,e.success=!1,e.loading=!1,e.validationErrors={}},SET_SUCCESS(e,t){e.success=t,e.error=!1,e.validationErrors={},e.loading=!1},SET_VALIDATION_ERRORS(e,t){e.loading=!1,e.validationErrors=t},REMOVE_ERROR_SUCCESS(e){e.error=!1,e.success=!1,e.regError=!1,e.regSuccess=!1,e.validationErrors={},e.loading=!1},LOGIN(e,t){e.loading=!1,e.loggedIn=!0,k.Z.set(L.accessTokenStorageKey,t.accessToken,{path:"home/",domain:window.location.hostname,sameSite:"lax",secure:!0})},SET_USER(e,t){e.user=t},SET_PROFILE(e,t){e.profile=t},async LOGOUT(e){e.user=null,e.token=null,localStorage.removeItem("vuex"),localStorage.clear()},RESET(e){Object.keys(e).forEach((t=>{Object.assign(e[t],null)}))}},actions:{async loginUser({commit:e},t){try{let r=await P.post("card/login",t),o=r.data;return console.log(o),k.Z.set("token",o.token),n["default"].$toast.open({message:`${o.message}`,type:"success",position:"top"}),e("LOGIN",{accessToken:o.token}),e("SET_SUCCESS",!0),e("SET_PROFILE",o),r}catch(r){if(console.log(r,"ommmo"),n["default"].$toast.open({message:"Error!",type:"error",position:"top"}),r.data){let t=r.data;if(t.message)return e("SET_ERROR",t.message),void(t.message&&(console.log(t.message),e("SET_VALIDATION_ERRORS",t.message)))}return e("SET_ERROR","Internal connection error, please try again."),r}},async getUserProfile({commit:e}){P.get("/card/profile").then((t=>{console.log(t);let r=t.data;e("SET_USER",r)})).catch((e=>{console.log(e)}))}}},I=r(2415);n["default"].use(A.ZP);var j=new A.ZP.Store({strict:!0,plugins:[(0,I.Z)()],state:{},getters:{},mutations:{},actions:{},modules:{auth:C}}),U=r(8499),Z=r.n(U),K=r(6681),D=r(9425),z=(r(7024),r(785)),$=r(5708),F=r(8815),M=r(5505),G=r(4237),q=r.n(G),B=r(5428),V=r.n(B),H=r(4226),J=r.n(H);n["default"].use(Z()),n["default"].config.productionTip=!1,n["default"].use(K.XG7),n["default"].use(D.A7),n["default"].component("i-icon",z.JO),Object.keys(F).forEach((e=>{(0,$.l7)(e,{...F[e],message:M.s[e]})})),n["default"].component("validation-provider",$.d_),n["default"].component("validation-observer",$._j),n["default"].prototype.$request=P,n["default"].prototype.$axios=O.Z,n["default"].use(q()),n["default"].use(V()),n["default"].component("v-select",J()),new n["default"]({router:_,store:j,render:e=>e(d)}).$mount("#app")},2115:function(e,t,r){var n={"./AppAuthLayout.vue":[1148,148],"./AppDefaultLayout.vue":[2757,757],"./AppLayout.vue":[6645],"./DashboardLayout.vue":[4997,997]};function o(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((function(){return r(o)}))}o.keys=function(){return Object.keys(n)},o.id=2115,e.exports=o}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,function(){r.amdO={}}(),function(){var e=[];r.O=function(t,n,o,a){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],a=e[l][2];for(var i=!0,u=0;u<n.length;u++)(!1&a||s>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(i=!1,a<s&&(s=a));if(i){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,o,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{115:"49daa182",148:"a9641fe6",233:"8962a8af",602:"100d13c6",757:"a0df9ff1",837:"2d154637",997:"ed6cd4f0"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{115:"83fdff75",148:"39391a0e",837:"68361c82",997:"89575cf0"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="enaira-card:";r.l=function(n,o,a,s){if(e[n])e[n].push(o);else{var i,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+a),i.src=n),e[n]=[o];var f=function(t,r){i.onerror=i.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){r.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,n,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=function(r){if(a.onerror=a.onload=null,"load"===r.type)n();else{var s=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=i,a.parentNode&&a.parentNode.removeChild(a),o(u)}};return a.onerror=a.onload=s,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){o=s[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=function(n){return new Promise((function(o,a){var s=r.miniCssF(n),i=r.p+s;if(t(s,i))return o();e(n,i,null,o,a)}))},o={143:0};r.f.miniCss=function(e,t){var r={115:1,148:1,837:1,997:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(r,n){o=e[t]=[r,n]}));n.push(o[2]=a);var s=r.p+r.u(t),i=new Error,u=function(n){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,o[1](i)}};r.l(s,u,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,s=n[0],i=n[1],u=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(u)var l=u(r)}for(t&&t(n);c<s.length;c++)a=s[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},n=self["webpackChunkenaira_card"]=self["webpackChunkenaira_card"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(2484)}));n=r.O(n)})();
//# sourceMappingURL=app.897d3c5f.js.map
"use strict";(self["webpackChunkenaira_card"]=self["webpackChunkenaira_card"]||[]).push([[233],{233:function(e,s,t){t.r(s),t.d(s,{default:function(){return c}});var a=function(){var e=this,s=e._self._c;return s("div",{staticClass:"auth-content"},[s("div",[s("div",{staticClass:"tw-mb-6 tw-text-center"},[s("h3",{staticClass:"tw-font-bold mb-0"},[e._v("Create Account")]),s("span",{staticClass:"tw-text-sm"},[e._v("Already have an account? "),s("router-link",{staticClass:"tw-text-primary",attrs:{to:"/login"}},[e._v("Login")])],1)]),s("form",{attrs:{action:""},on:{submit:function(s){return s.preventDefault(),e.login.apply(null,arguments)}}},[e.error?s("span",{staticClass:"mb-3 error-alert"},[e._v(e._s(e.error))]):e._e(),s("div",{staticClass:"tw-flex tw-space-x-6"},[s("div",{staticClass:"mb-3 tw-w-full"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.first_name,expression:"credentials.first_name"}],attrs:{type:"text",id:"first_name",placeholder:"First Name"},domProps:{value:e.credentials.first_name},on:{input:function(s){s.target.composing||e.$set(e.credentials,"first_name",s.target.value)}}})]),s("div",{staticClass:"mb-3 tw-w-full"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.last_name,expression:"credentials.last_name"}],attrs:{type:"text",id:"lastname",placeholder:"Last Name"},domProps:{value:e.credentials.last_name},on:{input:function(s){s.target.composing||e.$set(e.credentials,"last_name",s.target.value)}}})])]),s("div",{staticClass:"mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.user_email,expression:"credentials.user_email"}],attrs:{type:"email",id:"email",placeholder:"Email"},domProps:{value:e.credentials.user_email},on:{input:function(s){s.target.composing||e.$set(e.credentials,"user_email",s.target.value)}}}),e._l(e.errors,(function(t){return s("small",{key:t.id,staticClass:"tw-text-danger tw-text-xs"},e._l(t.user_email,(function(t){return s("span",{key:t},[e._v(" * "+e._s(t)+" ")])})),0)}))],2),s("div",{staticClass:"mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.username,expression:"credentials.username"}],attrs:{type:"text",id:"username",placeholder:"Username"},domProps:{value:e.credentials.username},on:{input:function(s){s.target.composing||e.$set(e.credentials,"username",s.target.value)}}}),e._l(e.errors,(function(t){return s("small",{key:t.id,staticClass:"tw-text-danger tw-text-xs"},e._l(t.user_login,(function(t){return s("li",{key:t},[e._v(" * "+e._s(t)+" ")])})),0)}))],2),s("div",{staticClass:"mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.phone_number,expression:"credentials.phone_number"}],attrs:{type:"tel",id:"phone_number",placeholder:"Phone Number"},domProps:{value:e.credentials.phone_number},on:{input:function(s){s.target.composing||e.$set(e.credentials,"phone_number",s.target.value)}}})]),s("div",{staticClass:"tw-mb-3"},[s("div",{staticClass:"input-field"},["checkbox"===(e.typePassword?"password":"text")?s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.user_password,expression:"credentials.user_password"}],attrs:{id:"password",placeholder:"Password",type:"checkbox"},domProps:{checked:Array.isArray(e.credentials.user_password)?e._i(e.credentials.user_password,null)>-1:e.credentials.user_password},on:{change:function(s){var t=e.credentials.user_password,a=s.target,r=!!a.checked;if(Array.isArray(t)){var i=null,n=e._i(t,i);a.checked?n<0&&e.$set(e.credentials,"user_password",t.concat([i])):n>-1&&e.$set(e.credentials,"user_password",t.slice(0,n).concat(t.slice(n+1)))}else e.$set(e.credentials,"user_password",r)}}}):"radio"===(e.typePassword?"password":"text")?s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.user_password,expression:"credentials.user_password"}],attrs:{id:"password",placeholder:"Password",type:"radio"},domProps:{checked:e._q(e.credentials.user_password,null)},on:{change:function(s){return e.$set(e.credentials,"user_password",null)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.user_password,expression:"credentials.user_password"}],attrs:{id:"password",placeholder:"Password",type:e.typePassword?"password":"text"},domProps:{value:e.credentials.user_password},on:{input:function(s){s.target.composing||e.$set(e.credentials,"user_password",s.target.value)}}}),s("span",{attrs:{role:"button"},on:{click:function(s){e.typePassword=!e.typePassword}}},[s("i-icon",{staticClass:"form-icon",attrs:{icon:e.typePassword?"tabler:eye":"gridicons:not-visible"}})],1)]),e._l(e.errors,(function(t){return s("small",{key:t.id,staticClass:"tw-text-danger tw-text-xs"},e._l(t.user_pass,(function(t){return s("li",{key:t},[e._v(" * "+e._s(t)+" ")])})),0)}))],2),s("div",{staticClass:"tw-mb-4 tw-flex align-center tw-space-x-2"},[s("input",{attrs:{type:"checkbox",name:"",id:""}}),s("span",{staticClass:"tw-text-[12px]"},[e._v(" I agree to Samzuga Gpt "),s("router-link",{staticClass:"tw-text-primary",attrs:{to:"/login"}},[e._v("Terms of service")]),e._v(" and "),s("router-link",{staticClass:"tw-text-primary",attrs:{to:"/login"}},[e._v("Privacy policy")])],1)]),s("div",{staticClass:"tw-mb-3"},[s("button",{staticClass:"primary-btn w-100",class:e.loading?"bg-secondary":"",attrs:{disabled:e.loading},on:{click:e.register}},[e.loading?s("span",[s("i-icon",{staticClass:"text-white",attrs:{icon:"eos-icons:bubble-loading",width:"20px"}})],1):s("span",[e._v("create account")])])])])])])},r=[],i=t(3822),n={components:{},data:()=>({credentials:{first_name:"",last_name:"",user_email:"",user_password:"",username:""},typePassword:!0}),methods:{...(0,i.nv)("auth",["registerUser"]),register(){let e={first_name:this.credentials.first_name,last_name:this.credentials.last_name,user_email:this.credentials.user_email,user_password:this.credentials.user_password,username:this.credentials.username};this.registerUser(e)}},mounted(){this.$store.commit("auth/REMOVE_ERROR_SUCCESS")},computed:{...(0,i.rn)("auth",{loading:e=>e.loading,error:e=>e.error,errors:e=>e.validationErrors,user:e=>e.user})}},l=n,o=t(1001),d=(0,o.Z)(l,a,r,!1,null,null,null),c=d.exports}}]);
//# sourceMappingURL=233.65d9e3d7.js.map
"use strict";(self["webpackChunkenaira_card"]=self["webpackChunkenaira_card"]||[]).push([[997],{4997:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard tw-h-screen"},[e("app-header",{staticClass:"tw-sticky tw-top-0 sm:tw-z-0"}),e("div",{staticClass:"md:tw-flex lg:tw-flex lg:tw-justify-center md:tw-justify-center tw-overflow-y-auto lg:tw-h-[80vh] md:tw-h-[80vh]",attrs:{id:"main"}},[t._t("default")],2)],1)},r=[],n=(s(7658),function(){var t=this,e=t._self._c;return e("div",{},[e("div",{staticClass:"tw-px-4 tw-py-6 tw-bg-white md:tw-relative lg:tw-relative tw-z-auto lg:tw-z-10 md:tw-z-10"},[e("div",{staticClass:"tw-flex tw-justify-between tw-items-center"},[t._m(0),e("div",{staticClass:"tw-justify-end tw-w-full tw-flex tw-space-x-4 tw-items-center"},[e("div",{staticClass:"tw-full tw-flex tw-items-center tw-space-x-2"},[e("img",{staticClass:"tw-h-[30px] tw-w-[30px] tw-rounded-full",attrs:{src:"https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg",alt:""}}),e("span",{staticClass:"tw-flex tw-flex-col tw-w-full"},[e("span",{staticClass:"tw-text-sm tw-font-bold"},[t._v("Hi, "+t._s(t.name))]),e("span",{staticClass:"tw-text-xs tw-flex"},[t._v(t._s(t.message)+" "),e("span")])])]),e("button",{staticClass:"primary-btn tw-bg-[#D8F4D5] tw-text-primary lg:tw-px-8 md:tw-px-8 tw-px-3 tw-font-bold",on:{click:function(e){return t.$router.push("/")}}},[e("span",[t._v("Logout")])])])])])])}),i=[function(){var t=this,e=t._self._c;return e("span",{},[e("img",{staticClass:"lg:tw-w-[120px] md:tw-w-[120px] tw-w-[100px]",attrs:{src:s(3021),alt:""}})])}],l={components:{},data(){return{currentTime:new Date}},methods:{getProfile(){},updateTime(){this.currentTime=new Date}},beforeMount(){this.getProfile()},created(){setInterval(this.updateTime,1e3)},destroyed(){clearInterval(this.updateTime)},computed:{user(){return this.$store.getters["auth/getProfile"]},message(){const t=this.currentTime.getHours();return t>=0&&t<12?"Good morning ":t>=12&&t<18?"Good afternoon ":"Good evening "},name(){if(this.user)var t=this.user.customer_name.split(" "),e=t[0];return e}}},w=l,u=s(1001),o=(0,u.Z)(w,n,i,!1,null,null,null),c=o.exports,d={components:{AppHeader:c},name:"DashboardLayout",computed:{routeParent(){return this.$route.meta.header}}},p=d,f=(0,u.Z)(p,a,r,!1,null,null,null),m=f.exports},3021:function(t,e,s){t.exports=s.p+"img/enaira-logo.7346794d.png"}}]);
//# sourceMappingURL=997.ed6cd4f0.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{178:function(t,e,l){var content=l(180);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(77).default)("e439a45c",content,!0,{sourceMap:!1})},179:function(t,e,l){"use strict";l(178)},180:function(t,e,l){var n=l(76)((function(i){return i[1]}));n.push([t.i,"[data-v-03f908b6] .flicking-camera{height:100%;width:100%;position:relative}",""]),n.locals={},t.exports=n},187:function(t,e,l){"use strict";l.r(e);l(10),l(47),l(48);var n=l(185),o={data:function(){return{photo_number:1,n:0}},methods:{next_photo:function(){this.$refs.flicking.next(500)},previous_photo:function(){this.$refs.flicking.prev(500)},update_photo_number:function(){this.photo_number=this.$refs.flicking.index+1}},computed:{console:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return console}))},mounted:function(){console.log(this.$refs.flicking)},components:{Flicking:n.a}},r=o,c=(l(179),l(26)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("main",[l("div",{staticClass:"flex flex-col items-stretch h-screen bg-neutral-800"},[l("div",{staticClass:"grow-0 shrink-0 basis-auto sm:px-6 lg:px-8 py-8\n      hidden sm:block sm:text-4xl text-neutral-200"},[t._v("\n      2023-02-05-NYCU\n    ")]),t._v(" "),l("div",{staticClass:"relative grow-0 shrink-1 basis-auto\n        flex flex-col items-center justify-center h-full min-h-0 m-0 sm:m-14"},[l("Flicking",{ref:"flicking",staticClass:"h-full w-full overflow-hidden",on:{changed:t.update_photo_number}},[l("div",{staticClass:"absolute h-full w-full flex items-center justify-center"},[l("nuxt-img",{staticClass:"max-h-full max-w-full shadow-lg rounded-sm",attrs:{src:"/IMG_4618-low.jpg",alt:"img"}})],1),t._v(" "),l("div",{staticClass:"absolute left-[100%] h-full w-full flex items-center justify-center"},[l("nuxt-img",{staticClass:"max-h-full max-w-full shadow-lg rounded-sm",attrs:{src:"/IMG_4619-low.jpg",alt:"img"}})],1),t._v(" "),l("div",{staticClass:"absolute left-[200%] h-full w-full flex items-center justify-center"},[l("nuxt-img",{staticClass:"max-h-full max-w-full shadow-lg rounded-sm",attrs:{src:"/IMG_4623-low.jpg",alt:"img"}})],1),t._v(" "),l("div",{staticClass:"absolute left-[300%] h-full w-full flex items-center justify-center"},[l("nuxt-img",{staticClass:"max-h-full max-w-full shadow-lg rounded-sm",attrs:{src:"/IMG_4626-low.jpg",alt:"img"}})],1),t._v(" "),l("div",{staticClass:"absolute left-[400%] h-full w-full flex items-center justify-center"},[l("nuxt-img",{staticClass:"max-h-full max-w-full shadow-lg rounded-sm",attrs:{src:"/IMG_4630-low.jpg",alt:"img"}})],1)]),t._v(" "),l("div",{staticClass:"absolute right-4 bottom-4 sm:right-0 sm:bottom-0\n        text-base text-neutral-200"},[t._v("\n        "+t._s(t.photo_number)+"/5\n      ")]),t._v(" "),l("button",{staticClass:"absolute right-0 bg-[rgba(0,0,0,0.3)] rounded-lg\n          transition duration-300 hover:bg-[rgba(0,0,0,0.5)]\n          hidden lg:block",attrs:{type:"button"},on:{click:t.next_photo}},[l("svg",{staticClass:"stroke-neutral-200 transition duration-300 hover:translate-x-1",attrs:{viewBox:"0 0 24 24",height:"80",width:"80",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[l("polyline",{attrs:{points:"9 18 15 12 9 6"}})])]),t._v(" "),l("button",{staticClass:"absolute left-0 bg-[rgba(0,0,0,0.3)] rounded-lg\n          transition duration-300 hover:bg-[rgba(0,0,0,0.5)]\n          hidden lg:block rotate-180",attrs:{type:"button"},on:{click:t.previous_photo}},[l("svg",{staticClass:"stroke-neutral-200 transition duration-300 hover:translate-x-1",attrs:{viewBox:"0 0 24 24",height:"80",width:"80",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[l("polyline",{attrs:{points:"9 18 15 12 9 6"}})])])],1)])])}),[],!1,null,"03f908b6",null);e.default=component.exports}}]);
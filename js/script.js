!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){n(1),n(2),e.exports=n(3)},function(e,t){$(document).ready(function(){$(window).on("activate.bs.scrollspy",function(){"#main-content"==$(".site-nav").find("a.active").attr("href")?$(".site-nav").addClass("inbody"):$(".site-nav").removeClass("inbody")}),$(window).trigger("scroll"),$(window).on("scroll",function(){var e=$(window).scrollTop();$(".layout-hero, .layout-hero-content").css("transform","translate3d(0px, "+e/2+"px, 0px)").css("opacity",1-Math.max(e/(.6*window.innerHeight),0))});new Vue({el:".searchbox",data:{query:null,content:[],isActive:!1},methods:{handleBlur:function(e){null!==e.relatedTarget&&(console.log(e.relatedTarget.href),window.location=e.relatedTarget.href),this.isActive=!1},handleClick:function(e){}},computed:{queried:function(){var t=this;return this.content.filter(function(e){return e.title.toLowerCase().match(t.query.toLowerCase())||e.summary.toLowerCase().match(t.query.toLowerCase())||e.tags.toLowerCase().match(t.query.toLowerCase())})}},mounted:function(){var t=this;fetch("/js/data.js").then(function(e){return e.json()}).then(function(e){t.content=e})}})})},function(e,t,n){},function(e,t,n){}]);
var __spreadArray=this&&this.__spreadArray||function(a,b,c){if(c||2===arguments.length)for(var d,e=0,f=b.length;e<f;e++)(d||!(e in b))&&(d||(d=Array.prototype.slice.call(b,0,e)),d[e]=b[e]);return a.concat(d||Array.prototype.slice.call(b))};Document.prototype.qs=function(){return this.querySelector.apply(this,arguments)},Element.prototype.qs=function(){return this.querySelector.apply(this,arguments)},Document.prototype.qsa=function(){return __spreadArray([],this.querySelectorAll.apply(this,arguments),!0)},Element.prototype.qsa=function(){return __spreadArray([],this.querySelectorAll.apply(this,arguments),!0)},Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]},Array.prototype.sortByKey=function(c,d){return d?this.sort(function(d,b){return b[c]>d[c]?1:d[c]>b[c]?-1:0}):this.sort(function(d,a){return d[c]>a[c]?1:a[c]>d[c]?-1:0})},Object.prototype.forEach=function(a){var b=this;Object.keys(this).forEach(function(c){a(c,b[c],b)})},window.HTML=function(a){return void 0===a&&(a="<div></div>"),new DOMParser().parseFromString(a,"text/html").body.firstElementChild};
// ==UserScript==
// @name         Hockey Pool V2 - Distributable
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://games.espn.com/fhl/*
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();

/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});


/* **********************************************
     Begin underscore.min.js
********************************************** */

//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map

/* **********************************************
     Begin backbone.min.js
********************************************** */

(function(t){var e=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.3.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],o(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],o(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var h=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var o=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return l(t);if(i.isString(t))return function(e){return e.get(t)};return t};var l=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var u=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,h;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(h=i.keys(r);a<h.length;a++){e=f(t,e,h[a],r[h[a]],s)}}else if(r&&c.test(r)){for(h=r.split(c);a<h.length;a++){e=t(e,h[a],n,s)}}else{e=t(e,r,n,s)}return e};u.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};u.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var h=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:h,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,h=r.listening;if(h)h.count++;n.push({callback:i,context:s,ctx:s||a,listening:h})}return t};u.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};u.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var h=n[s[a]];if(!h)break;h.obj.off(e,r,this)}return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var h=n.context,o=n.listeners;if(!e&&!r&&!h){var l=i.keys(o);for(;s<l.length;s++){a=o[l[s]];delete o[a.id];delete a.listeningTo[a.objId]}return}var u=e?[e]:i.keys(t);for(;s<u.length;s++){e=u[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||h&&h!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete o[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}return t};u.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));if(typeof t==="string"&&r==null)e=void 0;return this.on(n,e,r)};u.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};u.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,h);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};u.bind=u.on;u.unbind=u.off;i.extend(e,u);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};var n=i.result(this,"defaults");r=i.defaults(i.extend({},n,r),n);this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,u,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var h=[];var o=this._changing;this._changing=true;if(!o){this._previousAttributes=i.clone(this.attributes);this.changed={}}var l=this.attributes;var u=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(l[f],e))h.push(f);if(!i.isEqual(c[f],e)){u[f]=e}else{delete u[f]}s?delete l[f]:l[f]=e}if(this.idAttribute in n)this.id=this.get(this.idAttribute);if(!a){if(h.length)this._pending=r;for(var d=0;d<h.length;d++){this.trigger("change:"+h[d],this,l[h[d]],r)}}if(o)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};B(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else if(!this._validate(n,r)){return false}var a=this;var h=r.success;var o=this.attributes;r.success=function(t){a.attributes=o;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(h)h.call(r.context,a,t,r);a.trigger("sync",a,t,r)};B(this,r);if(n&&s)this.attributes=i.extend({},o,n);var l=this.isNew()?"create":r.patch?"patch":"update";if(l==="patch"&&!r.attrs)r.attrs=n;var u=this.sync(l,this,r);this.attributes=o;return u},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{B(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};h(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var I=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;var s;for(s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,u,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=this._removeModels(t,e);if(!e.silent&&n.length){e.changes={added:[],merged:[],removed:n};this.trigger("update",this,e)}return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.extend({},w,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n>this.length)n=this.length;if(n<0)n+=this.length+1;var s=[];var a=[];var h=[];var o=[];var l={};var u=e.add;var c=e.merge;var f=e.remove;var d=false;var v=this.comparator&&n==null&&e.sort!==false;var g=i.isString(this.comparator)?this.comparator:null;var p,m;for(m=0;m<t.length;m++){p=t[m];var _=this.get(p);if(_){if(c&&p!==_){var y=this._isModel(p)?p.attributes:p;if(e.parse)y=_.parse(y,e);_.set(y,e);h.push(_);if(v&&!d)d=_.hasChanged(g)}if(!l[_.cid]){l[_.cid]=true;s.push(_)}t[m]=_}else if(u){p=t[m]=this._prepareModel(p,e);if(p){a.push(p);this._addReference(p,e);l[p.cid]=true;s.push(p)}}}if(f){for(m=0;m<this.length;m++){p=this.models[m];if(!l[p.cid])o.push(p)}if(o.length)this._removeModels(o,e)}var b=false;var x=!v&&u&&f;if(s.length&&x){b=this.length!==s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;I(this.models,s,0);this.length=this.models.length}else if(a.length){if(v)d=true;I(this.models,a,n==null?this.length:n);this.length=this.models.length}if(d)this.sort({silent:true});if(!e.silent){for(m=0;m<a.length;m++){if(n!=null)e.index=n+m;p=a[m];p.trigger("add",p,this,e)}if(d||b)this.trigger("sort",this,e);if(a.length||o.length||h.length){e.changes={added:a,removed:o,merged:h};this.trigger("update",this,e)}}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(t.attributes||t)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};B(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;delete this._byId[n.cid];var a=this.modelId(n.attributes);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};h(x,S,"models");var k=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(k.prototype,u,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var h=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(h)return h.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var o=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(o)o.call(n.context,t,e,i)};var l=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,l,n);return l};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,u,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var M=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;N.started=false;i.extend(N.prototype,u,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(M,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");N.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!N.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new N;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);n.prototype=i.create(r.prototype,t);n.prototype.constructor=n;n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=k.extend=N.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var B=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});
//# sourceMappingURL=backbone-min.map

/* **********************************************
     Begin moment.min.js
********************************************** */

//! moment.js
//! version : 2.16.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return od.apply(null,arguments)}
// This is done to register the method called with moment()
// without creating circular dependencies.
function b(a){od=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){
// IE8 will treat undefined and null as object if it wasn't for
// input != null
return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)
// even if its not own property I'd still call it non-empty
return!1;return!0}function f(a){return"number"==typeof value||"[object Number]"===Object.prototype.toString.call(a)}function g(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function h(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function i(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function j(a,b){for(var c in b)i(b,c)&&(a[c]=b[c]);return i(b,"toString")&&(a.toString=b.toString),i(b,"valueOf")&&(a.valueOf=b.valueOf),a}function k(a,b,c,d){return rb(a,b,c,d,!0).utc()}function l(){
// We need to deep clone this object.
return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function m(a){return null==a._pf&&(a._pf=l()),a._pf}function n(a){if(null==a._isValid){var b=m(a),c=qd.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function o(a){var b=k(NaN);return null!=a?j(m(b),a):m(b).userInvalidated=!0,b}function p(a){return void 0===a}function q(a,b){var c,d,e;if(p(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),p(b._i)||(a._i=b._i),p(b._f)||(a._f=b._f),p(b._l)||(a._l=b._l),p(b._strict)||(a._strict=b._strict),p(b._tzm)||(a._tzm=b._tzm),p(b._isUTC)||(a._isUTC=b._isUTC),p(b._offset)||(a._offset=b._offset),p(b._pf)||(a._pf=m(b)),p(b._locale)||(a._locale=b._locale),rd.length>0)for(c in rd)d=rd[c],e=b[d],p(e)||(a[d]=e);return a}
// Moment prototype object
function r(b){q(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),
// Prevent infinite loop in case updateOffset creates new moment
// objects.
sd===!1&&(sd=!0,a.updateOffset(this),sd=!1)}function s(a){return a instanceof r||null!=a&&null!=a._isAMomentObject}function t(a){return a<0?Math.ceil(a)||0:Math.floor(a)}function u(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=t(b)),c}
// compare two arrays, return the number of differences
function v(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;d<e;d++)(c&&a[d]!==b[d]||!c&&u(a[d])!==u(b[d]))&&g++;return g+f}function w(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function x(b,c){var d=!0;return j(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e)}w(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function y(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),td[b]||(w(c),td[b]=!0)}function z(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function A(a){var b,c;for(c in a)b=a[c],z(b)?this[c]=b:this["_"+c]=b;this._config=a,
// Lenient ordinal parsing accepts just a number in addition to
// number + (possibly) stuff coming from _ordinalParseLenient.
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function B(a,b){var c,e=j({},a);for(c in b)i(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},j(e[c],a[c]),j(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)i(a,c)&&!i(b,c)&&d(a[c])&&(
// make sure changes to properties don't modify parent config
e[c]=j({},e[c]));return e}function C(a){null!=a&&this.set(a)}function D(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return z(d)?d.call(b,c):d}function E(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function F(){return this._invalidDate}function G(a){return this._ordinal.replace("%d",a)}function H(a,b,c,d){var e=this._relativeTime[c];return z(e)?e(a,b,c,d):e.replace(/%d/i,a)}function I(a,b){var c=this._relativeTime[a>0?"future":"past"];return z(c)?c(b):c.replace(/%s/i,b)}function J(a,b){var c=a.toLowerCase();Dd[c]=Dd[c+"s"]=Dd[b]=a}function K(a){return"string"==typeof a?Dd[a]||Dd[a.toLowerCase()]:void 0}function L(a){var b,c,d={};for(c in a)i(a,c)&&(b=K(c),b&&(d[b]=a[c]));return d}function M(a,b){Ed[a]=b}function N(a){var b=[];for(var c in a)b.push({unit:c,priority:Ed[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function O(b,c){return function(d){return null!=d?(Q(this,b,d),a.updateOffset(this,c),this):P(this,b)}}function P(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function Q(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}
// MOMENTS
function R(a){return a=K(a),z(this[a])?this[a]():this}function S(a,b){if("object"==typeof a){a=L(a);for(var c=N(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=K(a),z(this[a]))return this[a](b);return this}function T(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function U(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Id[a]=e),b&&(Id[b[0]]=function(){return T(e.apply(this,arguments),b[1],b[2])}),c&&(Id[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function V(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function W(a){var b,c,d=a.match(Fd);for(b=0,c=d.length;b<c;b++)Id[d[b]]?d[b]=Id[d[b]]:d[b]=V(d[b]);return function(b){var e,f="";for(e=0;e<c;e++)f+=d[e]instanceof Function?d[e].call(b,a):d[e];return f}}
// format date using native date object
function X(a,b){return a.isValid()?(b=Y(b,a.localeData()),Hd[b]=Hd[b]||W(b),Hd[b](a)):a.localeData().invalidDate()}function Y(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Gd.lastIndex=0;d>=0&&Gd.test(a);)a=a.replace(Gd,c),Gd.lastIndex=0,d-=1;return a}function Z(a,b,c){$d[a]=z(b)?b:function(a,d){return a&&c?c:b}}function $(a,b){return i($d,a)?$d[a](b._strict,b._locale):new RegExp(_(a))}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function _(a){return aa(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function aa(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ba(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),f(b)&&(d=function(a,c){c[b]=u(a)}),c=0;c<a.length;c++)_d[a[c]]=d}function ca(a,b){ba(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function da(a,b,c){null!=b&&i(_d,a)&&_d[a](b,c._a,c,a)}function ea(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function fa(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||ke).test(b)?"format":"standalone"][a.month()]:this._months}function ga(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[ke.test(b)?"format":"standalone"][a.month()]:this._monthsShort}function ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(
// this is not used
this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;d<12;++d)f=k([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=je.call(this._shortMonthsParse,g),e!==-1?e:null):(e=je.call(this._longMonthsParse,g),e!==-1?e:null):"MMM"===b?(e=je.call(this._shortMonthsParse,g),e!==-1?e:(e=je.call(this._longMonthsParse,g),e!==-1?e:null)):(e=je.call(this._longMonthsParse,g),e!==-1?e:(e=je.call(this._shortMonthsParse,g),e!==-1?e:null))}function ia(a,b,c){var d,e,f;if(this._monthsParseExact)return ha.call(this,a,b,c);
// TODO: add sorting
// Sorting makes sure if one month (or abbr) is a prefix of another
// see sorting in computeMonthsParse
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;d<12;d++){
// test the regex
if(
// make the regex if we don't have it already
e=k([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}
// MOMENTS
function ja(a,b){var c;if(!a.isValid())
// No op
return a;if("string"==typeof b)if(/^\d+$/.test(b))b=u(b);else
// TODO: Another silent failure?
if(b=a.localeData().monthsParse(b),!f(b))return a;return c=Math.min(a.date(),ea(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ka(b){return null!=b?(ja(this,b),a.updateOffset(this,!0),this):P(this,"Month")}function la(){return ea(this.year(),this.month())}function ma(a){return this._monthsParseExact?(i(this,"_monthsRegex")||oa.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(i(this,"_monthsShortRegex")||(this._monthsShortRegex=ne),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function na(a){return this._monthsParseExact?(i(this,"_monthsRegex")||oa.call(this),a?this._monthsStrictRegex:this._monthsRegex):(i(this,"_monthsRegex")||(this._monthsRegex=oe),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function oa(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;b<12;b++)
// make the regex if we don't have it already
c=k([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(
// Sorting makes sure if one month (or abbr) is a prefix of another it
// will match the longer piece.
d.sort(a),e.sort(a),f.sort(a),b=0;b<12;b++)d[b]=aa(d[b]),e[b]=aa(e[b]);for(b=0;b<24;b++)f[b]=aa(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}
// HELPERS
function pa(a){return qa(a)?366:365}function qa(a){return a%4===0&&a%100!==0||a%400===0}function ra(){return qa(this.year())}function sa(a,b,c,d,e,f,g){
//can't just apply() to create a date:
//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
var h=new Date(a,b,c,d,e,f,g);
//the date constructor remaps years 0-99 to 1900-1999
return a<100&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function ta(a){var b=new Date(Date.UTC.apply(null,arguments));
//the Date.UTC function remaps years 0-99 to 1900-1999
return a<100&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}
// start-of-first-week - start-of-year
function ua(a,b,c){var// first-week day -- which january is always in the first week (4 for iso, 1 for other)
d=7+b-c,
// first-week day local weekday -- which local weekday is fwd
e=(7+ta(a,0,d).getUTCDay()-b)%7;return-e+d-1}
//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function va(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ua(a,d,e),j=1+7*(b-1)+h+i;return j<=0?(f=a-1,g=pa(f)+j):j>pa(a)?(f=a+1,g=j-pa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function wa(a,b,c){var d,e,f=ua(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return g<1?(e=a.year()-1,d=g+xa(e,b,c)):g>xa(a.year(),b,c)?(d=g-xa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function xa(a,b,c){var d=ua(a,b,c),e=ua(a+1,b,c);return(pa(a)-d+e)/7}
// HELPERS
// LOCALES
function ya(a){return wa(a,this._week.dow,this._week.doy).week}function za(){return this._week.dow}function Aa(){return this._week.doy}
// MOMENTS
function Ba(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ca(a){var b=wa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}
// HELPERS
function Da(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Ea(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Fa(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:this._weekdays}function Ga(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ha(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Ia(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;d<7;++d)f=k([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=je.call(this._weekdaysParse,g),e!==-1?e:null):"ddd"===b?(e=je.call(this._shortWeekdaysParse,g),e!==-1?e:null):(e=je.call(this._minWeekdaysParse,g),e!==-1?e:null):"dddd"===b?(e=je.call(this._weekdaysParse,g),e!==-1?e:(e=je.call(this._shortWeekdaysParse,g),e!==-1?e:(e=je.call(this._minWeekdaysParse,g),e!==-1?e:null))):"ddd"===b?(e=je.call(this._shortWeekdaysParse,g),e!==-1?e:(e=je.call(this._weekdaysParse,g),e!==-1?e:(e=je.call(this._minWeekdaysParse,g),e!==-1?e:null))):(e=je.call(this._minWeekdaysParse,g),e!==-1?e:(e=je.call(this._weekdaysParse,g),e!==-1?e:(e=je.call(this._shortWeekdaysParse,g),e!==-1?e:null)))}function Ja(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ia.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;d<7;d++){
// test the regex
if(
// make the regex if we don't have it already
e=k([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}
// MOMENTS
function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Da(a,this.localeData()),this.add(a-b,"d")):b}function La(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Ma(a){if(!this.isValid())return null!=a?this:NaN;
// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
if(null!=a){var b=Ea(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Na(a){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(i(this,"_weekdaysRegex")||(this._weekdaysRegex=ue),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Oa(a){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(i(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ve),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Pa(a){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(i(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=we),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Qa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],j=[];for(b=0;b<7;b++)
// make the regex if we don't have it already
c=k([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),j.push(d),j.push(e),j.push(f);for(
// Sorting makes sure if one weekday (or abbr) is a prefix of another it
// will match the longer piece.
g.sort(a),h.sort(a),i.sort(a),j.sort(a),b=0;b<7;b++)h[b]=aa(h[b]),i[b]=aa(i[b]),j[b]=aa(j[b]);this._weekdaysRegex=new RegExp("^("+j.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}
// FORMATTING
function Ra(){return this.hours()%12||12}function Sa(){return this.hours()||24}function Ta(a,b){U(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}
// PARSING
function Ua(a,b){return b._meridiemParse}
// LOCALES
function Va(a){
// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
// Using charAt should be more compatible.
return"p"===(a+"").toLowerCase().charAt(0)}function Wa(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Xa(a){return a?a.toLowerCase().replace("_","-"):a}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function Ya(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Xa(a[f]).split("-"),b=e.length,c=Xa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Za(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&v(e,c,!0)>=b-1)
//the next array item is better than a shallower substring of this one
break;b--}f++}return null}function Za(a){var b=null;
// TODO: Find a better way to register and load all the locales in Node
if(!Be[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=xe._abbr,require("./locale/"+a),
// because defineLocale currently also sets the global locale, we
// want to undo that for lazy loaded locales
$a(b)}catch(a){}return Be[a]}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function $a(a,b){var c;
// moment.duration._locale = moment._locale = data;
return a&&(c=p(b)?bb(a):_a(a,b),c&&(xe=c)),xe._abbr}function _a(a,b){if(null!==b){var c=Ae;if(b.abbr=a,null!=Be[a])y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=Be[a]._config;else if(null!=b.parentLocale){if(null==Be[b.parentLocale])return Ce[b.parentLocale]||(Ce[b.parentLocale]=[]),Ce[b.parentLocale].push({name:a,config:b}),null;c=Be[b.parentLocale]._config}
// backwards compat for now: also set the locale
// make sure we set the locale AFTER all child locales have been
// created, so we won't end up with the child locale set.
return Be[a]=new C(B(c,b)),Ce[a]&&Ce[a].forEach(function(a){_a(a.name,a.config)}),$a(a),Be[a]}
// useful for testing
return delete Be[a],null}function ab(a,b){if(null!=b){var c,d=Ae;
// MERGE
null!=Be[a]&&(d=Be[a]._config),b=B(d,b),c=new C(b),c.parentLocale=Be[a],Be[a]=c,
// backwards compat for now: also set the locale
$a(a)}else
// pass null for config to unupdate, useful for tests
null!=Be[a]&&(null!=Be[a].parentLocale?Be[a]=Be[a].parentLocale:null!=Be[a]&&delete Be[a]);return Be[a]}
// returns locale data
function bb(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return xe;if(!c(a)){if(
//short-circuit everything else
b=Za(a))return b;a=[a]}return Ya(a)}function cb(){return wd(Be)}function db(a){var b,c=a._a;return c&&m(a).overflow===-2&&(b=c[be]<0||c[be]>11?be:c[ce]<1||c[ce]>ea(c[ae],c[be])?ce:c[de]<0||c[de]>24||24===c[de]&&(0!==c[ee]||0!==c[fe]||0!==c[ge])?de:c[ee]<0||c[ee]>59?ee:c[fe]<0||c[fe]>59?fe:c[ge]<0||c[ge]>999?ge:-1,m(a)._overflowDayOfYear&&(b<ae||b>ce)&&(b=ce),m(a)._overflowWeeks&&b===-1&&(b=he),m(a)._overflowWeekday&&b===-1&&(b=ie),m(a).overflow=b),a}
// date from iso format
function eb(a){var b,c,d,e,f,g,h=a._i,i=De.exec(h)||Ee.exec(h);if(i){for(m(a).iso=!0,b=0,c=Ge.length;b<c;b++)if(Ge[b][1].exec(i[1])){e=Ge[b][0],d=Ge[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=He.length;b<c;b++)if(He[b][1].exec(i[3])){
// match[2] should be 'T' or space
f=(i[2]||" ")+He[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!Fe.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),kb(a)}else a._isValid=!1}
// date from iso format or fallback
function fb(b){var c=Ie.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(eb(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}
// Pick the first defined of two or three arguments.
function gb(a,b,c){return null!=a?a:null!=b?b:c}function hb(b){
// hooks is actually the exported moment object
var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}
// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function ib(a){var b,c,d,e,f=[];if(!a._d){
// Default to current date.
// * if no year, month, day of month are given, default to today
// * if day of month is given, default month and year
// * if month is given, default only year
// * if year is given, don't default anything
for(d=hb(a),
//compute day of the year from weeks and weekdays
a._w&&null==a._a[ce]&&null==a._a[be]&&jb(a),
//if the day of the year is set, figure out what it is
a._dayOfYear&&(e=gb(a._a[ae],d[ae]),a._dayOfYear>pa(e)&&(m(a)._overflowDayOfYear=!0),c=ta(e,0,a._dayOfYear),a._a[be]=c.getUTCMonth(),a._a[ce]=c.getUTCDate()),b=0;b<3&&null==a._a[b];++b)a._a[b]=f[b]=d[b];
// Zero out whatever was not defaulted, including time
for(;b<7;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];
// Check for 24:00:00.000
24===a._a[de]&&0===a._a[ee]&&0===a._a[fe]&&0===a._a[ge]&&(a._nextDay=!0,a._a[de]=0),a._d=(a._useUTC?ta:sa).apply(null,f),
// Apply timezone offset from input. The actual utcOffset can be changed
// with parseZone.
null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[de]=24)}}function jb(a){var b,c,d,e,f,g,h,i;if(b=a._w,null!=b.GG||null!=b.W||null!=b.E)f=1,g=4,
// TODO: We need to take the current isoWeekYear, but that depends on
// how we interpret now (local, utc, fixed offset). So create
// a now version of current config (take local/utc/offset flags, and
// create now).
c=gb(b.GG,a._a[ae],wa(sb(),1,4).year),d=gb(b.W,1),e=gb(b.E,1),(e<1||e>7)&&(i=!0);else{f=a._locale._week.dow,g=a._locale._week.doy;var j=wa(sb(),f,g);c=gb(b.gg,a._a[ae],j.year),
// Default to current week.
d=gb(b.w,j.week),null!=b.d?(
// weekday -- low day numbers are considered next week
e=b.d,(e<0||e>6)&&(i=!0)):null!=b.e?(
// local weekday -- counting starts from begining of week
e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):
// default to begining of week
e=f}d<1||d>xa(c,f,g)?m(a)._overflowWeeks=!0:null!=i?m(a)._overflowWeekday=!0:(h=va(c,d,e,f,g),a._a[ae]=h.year,a._dayOfYear=h.dayOfYear)}
// date from string and format string
function kb(b){
// TODO: Move this to another part of the creation flow to prevent circular deps
if(b._f===a.ISO_8601)return void eb(b);b._a=[],m(b).empty=!0;
// This array is used to make a Date, either with `new Date` or `Date.UTC`
var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Y(b._f,b._locale).match(Fd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match($(f,b))||[])[0],
// console.log('token', token, 'parsedInput', parsedInput,
//         'regex', getParseRegexForToken(token, config));
d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&m(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),
// don't parse if it's not a known token
Id[f]?(d?m(b).empty=!1:m(b).unusedTokens.push(f),da(f,d,b)):b._strict&&!d&&m(b).unusedTokens.push(f);
// add remaining unparsed input length to the string
m(b).charsLeftOver=i-j,h.length>0&&m(b).unusedInput.push(h),
// clear _12h flag if hour is <= 12
b._a[de]<=12&&m(b).bigHour===!0&&b._a[de]>0&&(m(b).bigHour=void 0),m(b).parsedDateParts=b._a.slice(0),m(b).meridiem=b._meridiem,
// handle meridiem
b._a[de]=lb(b._locale,b._a[de],b._meridiem),ib(b),db(b)}function lb(a,b,c){var d;
// Fallback
return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&b<12&&(b+=12),d||12!==b||(b=0),b):b}
// date from string and array of format strings
function mb(a){var b,c,d,e,f;if(0===a._f.length)return m(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=q({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],kb(b),n(b)&&(
// if there is any input that was not parsed add a penalty for that format
f+=m(b).charsLeftOver,
//or tokens
f+=10*m(b).unusedTokens.length,m(b).score=f,(null==d||f<d)&&(d=f,c=b));j(a,c||b)}function nb(a){if(!a._d){var b=L(a._i);a._a=h([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),ib(a)}}function ob(a){var b=new r(db(pb(a)));
// Adding is smart enough around DST
return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function pb(a){var b=a._i,d=a._f;return a._locale=a._locale||bb(a._l),null===b||void 0===d&&""===b?o({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),s(b)?new r(db(b)):(g(b)?a._d=b:c(d)?mb(a):d?kb(a):qb(a),n(a)||(a._d=null),a))}function qb(b){var d=b._i;void 0===d?b._d=new Date(a.now()):g(d)?b._d=new Date(d.valueOf()):"string"==typeof d?fb(b):c(d)?(b._a=h(d.slice(0),function(a){return parseInt(a,10)}),ib(b)):"object"==typeof d?nb(b):f(d)?
// from milliseconds
b._d=new Date(d):a.createFromInputFallback(b)}function rb(a,b,f,g,h){var i={};
// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
return f!==!0&&f!==!1||(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,ob(i)}function sb(a,b,c,d){return rb(a,b,c,d,!1)}
// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function tb(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return sb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}
// TODO: Use [].sort instead?
function ub(){var a=[].slice.call(arguments,0);return tb("isBefore",a)}function vb(){var a=[].slice.call(arguments,0);return tb("isAfter",a)}function wb(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;
// representation for dateAddRemove
this._milliseconds=+k+1e3*j+// 1000
6e4*i+// 1000 * 60
1e3*h*60*60,//using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
// Because of dateAddRemove treats 24 hours as different from a
// day when working around DST, we need to store them separately
this._days=+g+7*f,
// It is impossible translate months into days without knowing
// which months you are are talking about, so we have to store
// it separately.
this._months=+e+3*d+12*c,this._data={},this._locale=bb(),this._bubble()}function xb(a){return a instanceof wb}function yb(a){return a<0?Math.round(-1*a)*-1:Math.round(a)}
// FORMATTING
function zb(a,b){U(a,0,0,function(){var a=this.utcOffset(),c="+";return a<0&&(a=-a,c="-"),c+T(~~(a/60),2)+b+T(~~a%60,2)})}function Ab(a,b){var c=(b||"").match(a);if(null===c)return null;var d=c[c.length-1]||[],e=(d+"").match(Me)||["-",0,0],f=+(60*e[1])+u(e[2]);return 0===f?0:"+"===e[0]?f:-f}
// Return a moment from input, that is local/utc/zone equivalent to model.
function Bb(b,c){var d,e;
// Use low-level api, because this fn is low-level api.
return c._isUTC?(d=c.clone(),e=(s(b)||g(b)?b.valueOf():sb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):sb(b).local()}function Cb(a){
// On Firefox.24 Date#getTimezoneOffset returns a floating point.
// https://github.com/moment/moment/pull/1871
return 15*-Math.round(a._d.getTimezoneOffset()/15)}
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function Db(b,c){var d,e=this._offset||0;if(!this.isValid())return null!=b?this:NaN;if(null!=b){if("string"==typeof b){if(b=Ab(Xd,b),null===b)return this}else Math.abs(b)<16&&(b=60*b);return!this._isUTC&&c&&(d=Cb(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?Tb(this,Ob(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?e:Cb(this)}function Eb(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Fb(a){return this.utcOffset(0,a)}function Gb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Cb(this),"m")),this}function Hb(){if(null!=this._tzm)this.utcOffset(this._tzm);else if("string"==typeof this._i){var a=Ab(Wd,this._i);null!=a?this.utcOffset(a):this.utcOffset(0,!0)}return this}function Ib(a){return!!this.isValid()&&(a=a?sb(a).utcOffset():0,(this.utcOffset()-a)%60===0)}function Jb(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Kb(){if(!p(this._isDSTShifted))return this._isDSTShifted;var a={};if(q(a,this),a=pb(a),a._a){var b=a._isUTC?k(a._a):sb(a._a);this._isDSTShifted=this.isValid()&&v(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Lb(){return!!this.isValid()&&!this._isUTC}function Mb(){return!!this.isValid()&&this._isUTC}function Nb(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Ob(a,b){var c,d,e,g=a,
// matching against regexp is expensive, do it on demand
h=null;// checks for null or undefined
return xb(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:f(a)?(g={},b?g[b]=a:g.milliseconds=a):(h=Ne.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:u(h[ce])*c,h:u(h[de])*c,m:u(h[ee])*c,s:u(h[fe])*c,ms:u(yb(1e3*h[ge]))*c}):(h=Oe.exec(a))?(c="-"===h[1]?-1:1,g={y:Pb(h[2],c),M:Pb(h[3],c),w:Pb(h[4],c),d:Pb(h[5],c),h:Pb(h[6],c),m:Pb(h[7],c),s:Pb(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=Rb(sb(g.from),sb(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new wb(g),xb(a)&&i(a,"_locale")&&(d._locale=a._locale),d}function Pb(a,b){
// We'd normally use ~~inp for this, but unfortunately it also
// converts floats to ints.
// inp may be undefined, so careful calling replace on it.
var c=a&&parseFloat(a.replace(",","."));
// apply sign while we're at it
return(isNaN(c)?0:c)*b}function Qb(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Rb(a,b){var c;return a.isValid()&&b.isValid()?(b=Bb(b,a),a.isBefore(b)?c=Qb(a,b):(c=Qb(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}
// TODO: remove 'name' arg after deprecation is removed
function Sb(a,b){return function(c,d){var e,f;
//invert the arguments, but complain about it
return null===d||isNaN(+d)||(y(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Ob(c,d),Tb(this,e,a),this}}function Tb(b,c,d,e){var f=c._milliseconds,g=yb(c._days),h=yb(c._months);b.isValid()&&(e=null==e||e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&Q(b,"Date",P(b,"Date")+g*d),h&&ja(b,P(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Ub(a,b){var c=a.diff(b,"days",!0);return c<-6?"sameElse":c<-1?"lastWeek":c<0?"lastDay":c<1?"sameDay":c<2?"nextDay":c<7?"nextWeek":"sameElse"}function Vb(b,c){
// We want to compare the start of today, vs this.
// Getting start-of-today depends on whether we're local/utc/offset or not.
var d=b||sb(),e=Bb(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(z(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,sb(d)))}function Wb(){return new r(this)}function Xb(a,b){var c=s(a)?a:sb(a);return!(!this.isValid()||!c.isValid())&&(b=K(p(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf())}function Yb(a,b){var c=s(a)?a:sb(a);return!(!this.isValid()||!c.isValid())&&(b=K(p(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf())}function Zb(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function $b(a,b){var c,d=s(a)?a:sb(a);return!(!this.isValid()||!d.isValid())&&(b=K(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf()))}function _b(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function ac(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function bc(a,b,c){var d,e,f,g;// 1000
// 1000 * 60
// 1000 * 60 * 60
// 1000 * 60 * 60 * 24, negate dst
// 1000 * 60 * 60 * 24 * 7, negate dst
return this.isValid()?(d=Bb(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),"year"===b||"month"===b||"quarter"===b?(g=cc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:t(g)):NaN):NaN}function cc(a,b){
// difference in months
var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),
// b is in (anchor - 1 month, anchor + 1 month)
f=a.clone().add(e,"months");
//check for negative zero, return zero if negative zero
// linear across the month
// linear across the month
return b-f<0?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function dc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ec(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?z(Date.prototype.toISOString)?this.toDate().toISOString():X(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):X(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function fc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var a="moment",b="";this.isLocal()||(a=0===this.utcOffset()?"moment.utc":"moment.parseZone",b="Z");var c="["+a+'("]',d=0<this.year()&&this.year()<=9999?"YYYY":"YYYYYY",e="-MM-DD[T]HH:mm:ss.SSS",f=b+'[")]';return this.format(c+d+e+f)}function gc(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=X(this,b);return this.localeData().postformat(c)}function hc(a,b){return this.isValid()&&(s(a)&&a.isValid()||sb(a).isValid())?Ob({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ic(a){return this.from(sb(),a)}function jc(a,b){return this.isValid()&&(s(a)&&a.isValid()||sb(a).isValid())?Ob({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function kc(a){return this.to(sb(),a)}
// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function lc(a){var b;return void 0===a?this._locale._abbr:(b=bb(a),null!=b&&(this._locale=b),this)}function mc(){return this._locale}function nc(a){
// the following switch intentionally omits break keywords
// to utilize falling through the cases.
switch(a=K(a)){case"year":this.month(0);/* falls through */
case"quarter":case"month":this.date(1);/* falls through */
case"week":case"isoWeek":case"day":case"date":this.hours(0);/* falls through */
case"hour":this.minutes(0);/* falls through */
case"minute":this.seconds(0);/* falls through */
case"second":this.milliseconds(0)}
// weeks are a special case
// quarters are also special
return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function oc(a){
// 'date' is an alias for 'day', so it should be considered as such.
return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function pc(){return this._d.valueOf()-6e4*(this._offset||0)}function qc(){return Math.floor(this.valueOf()/1e3)}function rc(){return new Date(this.valueOf())}function sc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function tc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function uc(){
// new Date(NaN).toJSON() === null
return this.isValid()?this.toISOString():null}function vc(){return n(this)}function wc(){return j({},m(this))}function xc(){return m(this).overflow}function yc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function zc(a,b){U(0,[a,a.length],0,b)}
// MOMENTS
function Ac(a){return Ec.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Bc(a){return Ec.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Cc(){return xa(this.year(),1,4)}function Dc(){var a=this.localeData()._week;return xa(this.year(),a.dow,a.doy)}function Ec(a,b,c,d,e){var f;return null==a?wa(this,d,e).year:(f=xa(a,d,e),b>f&&(b=f),Fc.call(this,a,b,c,d,e))}function Fc(a,b,c,d,e){var f=va(a,b,c,d,e),g=ta(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}
// MOMENTS
function Gc(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}
// HELPERS
// MOMENTS
function Hc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Ic(a,b){b[ge]=u(1e3*("0."+a))}
// MOMENTS
function Jc(){return this._isUTC?"UTC":""}function Kc(){return this._isUTC?"Coordinated Universal Time":""}function Lc(a){return sb(1e3*a)}function Mc(){return sb.apply(null,arguments).parseZone()}function Nc(a){return a}function Oc(a,b,c,d){var e=bb(),f=k().set(d,b);return e[c](f,a)}function Pc(a,b,c){if(f(a)&&(b=a,a=void 0),a=a||"",null!=b)return Oc(a,b,c,"month");var d,e=[];for(d=0;d<12;d++)e[d]=Oc(a,d,c,"month");return e}
// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function Qc(a,b,c,d){"boolean"==typeof a?(f(b)&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,f(b)&&(c=b,b=void 0),b=b||"");var e=bb(),g=a?e._week.dow:0;if(null!=c)return Oc(b,(c+g)%7,d,"day");var h,i=[];for(h=0;h<7;h++)i[h]=Oc(b,(h+g)%7,d,"day");return i}function Rc(a,b){return Pc(a,b,"months")}function Sc(a,b){return Pc(a,b,"monthsShort")}function Tc(a,b,c){return Qc(a,b,c,"weekdays")}function Uc(a,b,c){return Qc(a,b,c,"weekdaysShort")}function Vc(a,b,c){return Qc(a,b,c,"weekdaysMin")}function Wc(){var a=this._data;return this._milliseconds=Ze(this._milliseconds),this._days=Ze(this._days),this._months=Ze(this._months),a.milliseconds=Ze(a.milliseconds),a.seconds=Ze(a.seconds),a.minutes=Ze(a.minutes),a.hours=Ze(a.hours),a.months=Ze(a.months),a.years=Ze(a.years),this}function Xc(a,b,c,d){var e=Ob(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}
// supports only 2.0-style add(1, 's') or add(duration)
function Yc(a,b){return Xc(this,a,b,1)}
// supports only 2.0-style subtract(1, 's') or subtract(duration)
function Zc(a,b){return Xc(this,a,b,-1)}function $c(a){return a<0?Math.floor(a):Math.ceil(a)}function _c(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;
// if we have a mix of positive and negative values, bubble down first
// check: https://github.com/moment/moment/issues/2166
// The following code bubbles up values, see the tests for
// examples of what that means.
// convert days to months
// 12 months -> 1 year
return f>=0&&g>=0&&h>=0||f<=0&&g<=0&&h<=0||(f+=864e5*$c(bd(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=t(f/1e3),i.seconds=a%60,b=t(a/60),i.minutes=b%60,c=t(b/60),i.hours=c%24,g+=t(c/24),e=t(ad(g)),h+=e,g-=$c(bd(e)),d=t(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function ad(a){
// 400 years have 146097 days (taking into account leap year rules)
// 400 years have 12 months === 4800
return 4800*a/146097}function bd(a){
// the reverse of daysToMonths
return 146097*a/4800}function cd(a){var b,c,d=this._milliseconds;if(a=K(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+ad(b),"month"===a?c:c/12;switch(
// handle milliseconds separately because of floating point math errors (issue #1867)
b=this._days+Math.round(bd(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;
// Math.floor prevents floating point math errors here
case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}
// TODO: Use this.as('ms')?
function dd(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*u(this._months/12)}function ed(a){return function(){return this.as(a)}}function fd(a){return a=K(a),this[a+"s"]()}function gd(a){return function(){return this._data[a]}}function hd(){return t(this.days()/7)}
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function id(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function jd(a,b,c){var d=Ob(a).abs(),e=of(d.as("s")),f=of(d.as("m")),g=of(d.as("h")),h=of(d.as("d")),i=of(d.as("M")),j=of(d.as("y")),k=e<pf.s&&["s",e]||f<=1&&["m"]||f<pf.m&&["mm",f]||g<=1&&["h"]||g<pf.h&&["hh",g]||h<=1&&["d"]||h<pf.d&&["dd",h]||i<=1&&["M"]||i<pf.M&&["MM",i]||j<=1&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,id.apply(null,k)}
// This function allows you to set the rounding function for relative time strings
function kd(a){return void 0===a?of:"function"==typeof a&&(of=a,!0)}
// This function allows you to set a threshold for relative time strings
function ld(a,b){return void 0!==pf[a]&&(void 0===b?pf[a]:(pf[a]=b,!0))}function md(a){var b=this.localeData(),c=jd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function nd(){
// for ISO strings we do not use the normal bubbling rules:
//  * milliseconds bubble up until they become hours
//  * days do not bubble at all
//  * months bubble up until they become years
// This is because there is no context-free conversion between hours and days
// (think of clock changes)
// and also not between days and months (28-31 days per month)
var a,b,c,d=qf(this._milliseconds)/1e3,e=qf(this._days),f=qf(this._months);
// 3600 seconds -> 60 minutes -> 1 hour
a=t(d/60),b=t(a/60),d%=60,a%=60,
// 12 months -> 1 year
c=t(f/12),f%=12;
// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(m<0?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var od,pd;pd=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;d<c;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};var qd=pd,rd=a.momentProperties=[],sd=!1,td={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var ud;ud=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)i(a,b)&&c.push(b);return c};var vd,wd=ud,xd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},yd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},zd="Invalid date",Ad="%d",Bd=/\d{1,2}/,Cd={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Dd={},Ed={},Fd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Gd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Hd={},Id={},Jd=/\d/,Kd=/\d\d/,Ld=/\d{3}/,Md=/\d{4}/,Nd=/[+-]?\d{6}/,Od=/\d\d?/,Pd=/\d\d\d\d?/,Qd=/\d\d\d\d\d\d?/,Rd=/\d{1,3}/,Sd=/\d{1,4}/,Td=/[+-]?\d{1,6}/,Ud=/\d+/,Vd=/[+-]?\d+/,Wd=/Z|[+-]\d\d:?\d\d/gi,Xd=/Z|[+-]\d\d(?::?\d\d)?/gi,Yd=/[+-]?\d+(\.\d{1,3})?/,Zd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,$d={},_d={},ae=0,be=1,ce=2,de=3,ee=4,fe=5,ge=6,he=7,ie=8;vd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){
// I know
var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1};var je=vd;
// FORMATTING
U("M",["MM",2],"Mo",function(){return this.month()+1}),U("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),U("MMMM",0,0,function(a){return this.localeData().months(this,a)}),
// ALIASES
J("month","M"),
// PRIORITY
M("month",8),
// PARSING
Z("M",Od),Z("MM",Od,Kd),Z("MMM",function(a,b){return b.monthsShortRegex(a)}),Z("MMMM",function(a,b){return b.monthsRegex(a)}),ba(["M","MM"],function(a,b){b[be]=u(a)-1}),ba(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);
// if we didn't find a month name, mark the date as invalid.
null!=e?b[be]=e:m(c).invalidMonth=a});
// LOCALES
var ke=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,le="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),me="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ne=Zd,oe=Zd;
// FORMATTING
U("Y",0,0,function(){var a=this.year();return a<=9999?""+a:"+"+a}),U(0,["YY",2],0,function(){return this.year()%100}),U(0,["YYYY",4],0,"year"),U(0,["YYYYY",5],0,"year"),U(0,["YYYYYY",6,!0],0,"year"),
// ALIASES
J("year","y"),
// PRIORITIES
M("year",1),
// PARSING
Z("Y",Vd),Z("YY",Od,Kd),Z("YYYY",Sd,Md),Z("YYYYY",Td,Nd),Z("YYYYYY",Td,Nd),ba(["YYYYY","YYYYYY"],ae),ba("YYYY",function(b,c){c[ae]=2===b.length?a.parseTwoDigitYear(b):u(b)}),ba("YY",function(b,c){c[ae]=a.parseTwoDigitYear(b)}),ba("Y",function(a,b){b[ae]=parseInt(a,10)}),
// HOOKS
a.parseTwoDigitYear=function(a){return u(a)+(u(a)>68?1900:2e3)};
// MOMENTS
var pe=O("FullYear",!0);
// FORMATTING
U("w",["ww",2],"wo","week"),U("W",["WW",2],"Wo","isoWeek"),
// ALIASES
J("week","w"),J("isoWeek","W"),
// PRIORITIES
M("week",5),M("isoWeek",5),
// PARSING
Z("w",Od),Z("ww",Od,Kd),Z("W",Od),Z("WW",Od,Kd),ca(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=u(a)});var qe={dow:0,// Sunday is the first day of the week.
doy:6};
// FORMATTING
U("d",0,"do","day"),U("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),U("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),U("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),U("e",0,0,"weekday"),U("E",0,0,"isoWeekday"),
// ALIASES
J("day","d"),J("weekday","e"),J("isoWeekday","E"),
// PRIORITY
M("day",11),M("weekday",11),M("isoWeekday",11),
// PARSING
Z("d",Od),Z("e",Od),Z("E",Od),Z("dd",function(a,b){return b.weekdaysMinRegex(a)}),Z("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Z("dddd",function(a,b){return b.weekdaysRegex(a)}),ca(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);
// if we didn't get a weekday name, mark the date as invalid
null!=e?b.d=e:m(c).invalidWeekday=a}),ca(["d","e","E"],function(a,b,c,d){b[d]=u(a)});
// LOCALES
var re="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),se="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),te="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ue=Zd,ve=Zd,we=Zd;U("H",["HH",2],0,"hour"),U("h",["hh",2],0,Ra),U("k",["kk",2],0,Sa),U("hmm",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)}),U("hmmss",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)+T(this.seconds(),2)}),U("Hmm",0,0,function(){return""+this.hours()+T(this.minutes(),2)}),U("Hmmss",0,0,function(){return""+this.hours()+T(this.minutes(),2)+T(this.seconds(),2)}),Ta("a",!0),Ta("A",!1),
// ALIASES
J("hour","h"),
// PRIORITY
M("hour",13),Z("a",Ua),Z("A",Ua),Z("H",Od),Z("h",Od),Z("HH",Od,Kd),Z("hh",Od,Kd),Z("hmm",Pd),Z("hmmss",Qd),Z("Hmm",Pd),Z("Hmmss",Qd),ba(["H","HH"],de),ba(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),ba(["h","hh"],function(a,b,c){b[de]=u(a),m(c).bigHour=!0}),ba("hmm",function(a,b,c){var d=a.length-2;b[de]=u(a.substr(0,d)),b[ee]=u(a.substr(d)),m(c).bigHour=!0}),ba("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[de]=u(a.substr(0,d)),b[ee]=u(a.substr(d,2)),b[fe]=u(a.substr(e)),m(c).bigHour=!0}),ba("Hmm",function(a,b,c){var d=a.length-2;b[de]=u(a.substr(0,d)),b[ee]=u(a.substr(d))}),ba("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[de]=u(a.substr(0,d)),b[ee]=u(a.substr(d,2)),b[fe]=u(a.substr(e))});var xe,ye=/[ap]\.?m?\.?/i,ze=O("Hours",!0),Ae={calendar:xd,longDateFormat:yd,invalidDate:zd,ordinal:Ad,ordinalParse:Bd,relativeTime:Cd,months:le,monthsShort:me,week:qe,weekdays:re,weekdaysMin:te,weekdaysShort:se,meridiemParse:ye},Be={},Ce={},De=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ee=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Fe=/Z|[+-]\d\d(?::?\d\d)?/,Ge=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],
// YYYYMM is NOT allowed by the standard
["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],He=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ie=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=x("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),
// constant that refers to the ISO standard
a.ISO_8601=function(){};var Je=x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=sb.apply(null,arguments);return this.isValid()&&a.isValid()?a<this?this:a:o()}),Ke=x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=sb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:o()}),Le=function(){return Date.now?Date.now():+new Date};zb("Z",":"),zb("ZZ",""),
// PARSING
Z("Z",Xd),Z("ZZ",Xd),ba(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ab(Xd,a)});
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var Me=/([\+\-]|\d\d)/gi;
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
a.updateOffset=function(){};
// ASP.NET json date format regex
var Ne=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Oe=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Ob.fn=wb.prototype;var Pe=Sb(1,"add"),Qe=Sb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Re=x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});
// FORMATTING
U(0,["gg",2],0,function(){return this.weekYear()%100}),U(0,["GG",2],0,function(){return this.isoWeekYear()%100}),zc("gggg","weekYear"),zc("ggggg","weekYear"),zc("GGGG","isoWeekYear"),zc("GGGGG","isoWeekYear"),
// ALIASES
J("weekYear","gg"),J("isoWeekYear","GG"),
// PRIORITY
M("weekYear",1),M("isoWeekYear",1),
// PARSING
Z("G",Vd),Z("g",Vd),Z("GG",Od,Kd),Z("gg",Od,Kd),Z("GGGG",Sd,Md),Z("gggg",Sd,Md),Z("GGGGG",Td,Nd),Z("ggggg",Td,Nd),ca(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=u(a)}),ca(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),
// FORMATTING
U("Q",0,"Qo","quarter"),
// ALIASES
J("quarter","Q"),
// PRIORITY
M("quarter",7),
// PARSING
Z("Q",Jd),ba("Q",function(a,b){b[be]=3*(u(a)-1)}),
// FORMATTING
U("D",["DD",2],"Do","date"),
// ALIASES
J("date","D"),
// PRIOROITY
M("date",9),
// PARSING
Z("D",Od),Z("DD",Od,Kd),Z("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),ba(["D","DD"],ce),ba("Do",function(a,b){b[ce]=u(a.match(Od)[0],10)});
// MOMENTS
var Se=O("Date",!0);
// FORMATTING
U("DDD",["DDDD",3],"DDDo","dayOfYear"),
// ALIASES
J("dayOfYear","DDD"),
// PRIORITY
M("dayOfYear",4),
// PARSING
Z("DDD",Rd),Z("DDDD",Ld),ba(["DDD","DDDD"],function(a,b,c){c._dayOfYear=u(a)}),
// FORMATTING
U("m",["mm",2],0,"minute"),
// ALIASES
J("minute","m"),
// PRIORITY
M("minute",14),
// PARSING
Z("m",Od),Z("mm",Od,Kd),ba(["m","mm"],ee);
// MOMENTS
var Te=O("Minutes",!1);
// FORMATTING
U("s",["ss",2],0,"second"),
// ALIASES
J("second","s"),
// PRIORITY
M("second",15),
// PARSING
Z("s",Od),Z("ss",Od,Kd),ba(["s","ss"],fe);
// MOMENTS
var Ue=O("Seconds",!1);
// FORMATTING
U("S",0,0,function(){return~~(this.millisecond()/100)}),U(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),U(0,["SSS",3],0,"millisecond"),U(0,["SSSS",4],0,function(){return 10*this.millisecond()}),U(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),U(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),U(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),U(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),U(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),
// ALIASES
J("millisecond","ms"),
// PRIORITY
M("millisecond",16),
// PARSING
Z("S",Rd,Jd),Z("SS",Rd,Kd),Z("SSS",Rd,Ld);var Ve;for(Ve="SSSS";Ve.length<=9;Ve+="S")Z(Ve,Ud);for(Ve="S";Ve.length<=9;Ve+="S")ba(Ve,Ic);
// MOMENTS
var We=O("Milliseconds",!1);
// FORMATTING
U("z",0,0,"zoneAbbr"),U("zz",0,0,"zoneName");var Xe=r.prototype;Xe.add=Pe,Xe.calendar=Vb,Xe.clone=Wb,Xe.diff=bc,Xe.endOf=oc,Xe.format=gc,Xe.from=hc,Xe.fromNow=ic,Xe.to=jc,Xe.toNow=kc,Xe.get=R,Xe.invalidAt=xc,Xe.isAfter=Xb,Xe.isBefore=Yb,Xe.isBetween=Zb,Xe.isSame=$b,Xe.isSameOrAfter=_b,Xe.isSameOrBefore=ac,Xe.isValid=vc,Xe.lang=Re,Xe.locale=lc,Xe.localeData=mc,Xe.max=Ke,Xe.min=Je,Xe.parsingFlags=wc,Xe.set=S,Xe.startOf=nc,Xe.subtract=Qe,Xe.toArray=sc,Xe.toObject=tc,Xe.toDate=rc,Xe.toISOString=ec,Xe.inspect=fc,Xe.toJSON=uc,Xe.toString=dc,Xe.unix=qc,Xe.valueOf=pc,Xe.creationData=yc,
// Year
Xe.year=pe,Xe.isLeapYear=ra,
// Week Year
Xe.weekYear=Ac,Xe.isoWeekYear=Bc,
// Quarter
Xe.quarter=Xe.quarters=Gc,
// Month
Xe.month=ka,Xe.daysInMonth=la,
// Week
Xe.week=Xe.weeks=Ba,Xe.isoWeek=Xe.isoWeeks=Ca,Xe.weeksInYear=Dc,Xe.isoWeeksInYear=Cc,
// Day
Xe.date=Se,Xe.day=Xe.days=Ka,Xe.weekday=La,Xe.isoWeekday=Ma,Xe.dayOfYear=Hc,
// Hour
Xe.hour=Xe.hours=ze,
// Minute
Xe.minute=Xe.minutes=Te,
// Second
Xe.second=Xe.seconds=Ue,
// Millisecond
Xe.millisecond=Xe.milliseconds=We,
// Offset
Xe.utcOffset=Db,Xe.utc=Fb,Xe.local=Gb,Xe.parseZone=Hb,Xe.hasAlignedHourOffset=Ib,Xe.isDST=Jb,Xe.isLocal=Lb,Xe.isUtcOffset=Mb,Xe.isUtc=Nb,Xe.isUTC=Nb,
// Timezone
Xe.zoneAbbr=Jc,Xe.zoneName=Kc,
// Deprecations
Xe.dates=x("dates accessor is deprecated. Use date instead.",Se),Xe.months=x("months accessor is deprecated. Use month instead",ka),Xe.years=x("years accessor is deprecated. Use year instead",pe),Xe.zone=x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Eb),Xe.isDSTShifted=x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Kb);var Ye=C.prototype;Ye.calendar=D,Ye.longDateFormat=E,Ye.invalidDate=F,Ye.ordinal=G,Ye.preparse=Nc,Ye.postformat=Nc,Ye.relativeTime=H,Ye.pastFuture=I,Ye.set=A,
// Month
Ye.months=fa,Ye.monthsShort=ga,Ye.monthsParse=ia,Ye.monthsRegex=na,Ye.monthsShortRegex=ma,
// Week
Ye.week=ya,Ye.firstDayOfYear=Aa,Ye.firstDayOfWeek=za,
// Day of Week
Ye.weekdays=Fa,Ye.weekdaysMin=Ha,Ye.weekdaysShort=Ga,Ye.weekdaysParse=Ja,Ye.weekdaysRegex=Na,Ye.weekdaysShortRegex=Oa,Ye.weekdaysMinRegex=Pa,
// Hours
Ye.isPM=Va,Ye.meridiem=Wa,$a("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===u(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),
// Side effect imports
a.lang=x("moment.lang is deprecated. Use moment.locale instead.",$a),a.langData=x("moment.langData is deprecated. Use moment.localeData instead.",bb);var Ze=Math.abs,$e=ed("ms"),_e=ed("s"),af=ed("m"),bf=ed("h"),cf=ed("d"),df=ed("w"),ef=ed("M"),ff=ed("y"),gf=gd("milliseconds"),hf=gd("seconds"),jf=gd("minutes"),kf=gd("hours"),lf=gd("days"),mf=gd("months"),nf=gd("years"),of=Math.round,pf={s:45,// seconds to minute
m:45,// minutes to hour
h:22,// hours to day
d:26,// days to month
M:11},qf=Math.abs,rf=wb.prototype;
// Deprecations
// Side effect imports
// FORMATTING
// PARSING
// Side effect imports
return rf.abs=Wc,rf.add=Yc,rf.subtract=Zc,rf.as=cd,rf.asMilliseconds=$e,rf.asSeconds=_e,rf.asMinutes=af,rf.asHours=bf,rf.asDays=cf,rf.asWeeks=df,rf.asMonths=ef,rf.asYears=ff,rf.valueOf=dd,rf._bubble=_c,rf.get=fd,rf.milliseconds=gf,rf.seconds=hf,rf.minutes=jf,rf.hours=kf,rf.days=lf,rf.weeks=hd,rf.months=mf,rf.years=nf,rf.humanize=md,rf.toISOString=nd,rf.toString=nd,rf.toJSON=nd,rf.locale=lc,rf.localeData=mc,rf.toIsoString=x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",nd),rf.lang=Re,U("X",0,0,"unix"),U("x",0,0,"valueOf"),Z("x",Vd),Z("X",Yd),ba("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),ba("x",function(a,b,c){c._d=new Date(u(a))}),a.version="2.16.0",b(sb),a.fn=Xe,a.min=ub,a.max=vb,a.now=Le,a.utc=k,a.unix=Lc,a.months=Rc,a.isDate=g,a.locale=$a,a.invalid=o,a.duration=Ob,a.isMoment=s,a.weekdays=Tc,a.parseZone=Mc,a.localeData=bb,a.isDuration=xb,a.monthsShort=Sc,a.weekdaysMin=Vc,a.defineLocale=_a,a.updateLocale=ab,a.locales=cb,a.weekdaysShort=Uc,a.normalizeUnits=K,a.relativeTimeRounding=kd,a.relativeTimeThreshold=ld,a.calendarFormat=Ub,a.prototype=Xe,a});

/* **********************************************
     Begin base.js
********************************************** */

var HockeyPool = {
  Helpers: {},
  Views: {},
  Models: {},
  Collections: {},
  Templates: {},
  Data: {},
};

/* **********************************************
     Begin 20162017_schedule.js
********************************************** */

HockeyPool.Data.month_to_year = {
  Oct: 2016,
  Nov: 2016,
  Dec: 2016,
  Jan: 2017,
  Feb: 2017,
  Mar: 2017,
  Apr: 2017,
};

HockeyPool.Data.season_start = moment("2016-10-12");
HockeyPool.Data.today_date_id = moment().diff(HockeyPool.Data.season_start, "days")+1;


HockeyPool.Data.get_schedule_for_day = function(day_id){
  var d = HockeyPool.Data.day_id_to_date(day_id);
  return HockeyPool.Data.teams_playing_by_day[d] || [];
};

HockeyPool.Data.day_id_to_date = function(day_id){
  return (moment(HockeyPool.Data.season_start).add(day_id-1, "days")).format("YYYY-MM-DD");
};

HockeyPool.Data.date_to_day_id = function(date){
  return moment(date).diff(HockeyPool.Data.season_start, "days")+1;
};

HockeyPool.Data.schedule = [
  {
    "2016-10-12": "2016-10-12",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-10-12",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-10-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-10-13",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-10-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-10-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-10-13",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-10-13",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-10-13",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-10-13",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-10-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-10-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-10-14",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-10-14",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-10-14",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-10-16",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-10-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-10-16",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-10-17",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-10-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-10-17",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-10-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-10-19",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-10-19",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-10-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-10-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-10-21",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-10-23",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-10-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-10-23",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-10-23",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-10-24",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-10-24",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-10-26",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-10-26",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-10-26",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-10-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-10-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-10-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-10-27",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-10-27",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-10-27",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-10-27",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-10-27",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-10-27",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-10-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-10-28",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-10-28",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-10-28",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-10-28",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-10-28",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-10-28",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-10-30",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-10-30",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-10-30",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-10-30",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-10-30",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-10-30",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-10-30",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-10-30",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-11-02",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-11-02",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-11-02",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-11-04",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-11-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-11-04",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-11-06",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-11-06",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-11-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-11-06",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-11-06",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-11-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-11-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-11-07",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-11-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-11-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-11-09",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-11-09",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-11-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-11-11",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-11-11",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-11-11",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-11-11",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-11-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-11-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-11-13",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-11-13",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-11-13",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-11-13",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-11-16",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-11-16",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-11-18",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-11-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-11-18",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-11-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-11-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-11-20",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-11-20",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-11-20",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-11-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-11-20",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-11-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-11-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-11-21",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-11-21",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-11-21",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-11-21",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-11-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-11-22",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-11-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-11-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-11-22",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-11-22",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-11-24",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-24",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-11-26",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-11-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-11-26",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-11-26",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-11-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-11-26",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-11-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-11-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-11-27",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-11-27",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-11-27",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-11-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-11-27",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-11-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-11-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-11-28",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-11-30",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-11-30",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-11-30",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-12-02",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-12-02",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-12-04",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-12-04",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-12-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-12-04",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-12-04",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-12-04",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-12-04",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-12-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-12-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-12-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-12-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-06",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-12-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-12-06",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-12-06",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-12-06",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-12-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-12-06",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-12-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-12-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-12-07",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-12-07",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-12-07",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-12-07",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-12-09",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-12-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-12-09",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-12-09",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-12-09",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-12-09",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-12-11",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-12-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-12-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-12-11",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-12-11",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-12-11",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-12-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-12-11",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-12-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-12",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-12-14",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-14",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-12-14",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-12-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-12-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-12-15",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-12-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-12-15",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-12-15",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-12-15",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-12-15",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-12-15",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-12-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-12-16",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-12-16",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-12-16",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-12-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-16",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-12-16",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-12-18",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-12-18",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-12-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-12-18",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-12-18",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-12-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-12-19",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-12-19",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-12-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-12-19",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-12-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-12-21",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-12-21",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-12-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-12-28",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-12-28",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-12-28",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-12-30",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-12-30",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-12-30",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-12-30",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-01-01",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-01",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-01-01",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-01-02",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-01-02",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-01-02",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-01-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-01-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-01-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-01-03",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-01-03",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-01-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-01-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-01-04",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-04",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-01-04",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-01-04",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-01-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-01-04",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-01-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-01-05",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-01-05",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-01-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-01-05",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-01-05",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-01-05",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-01-06",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-06",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-01-06",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-01-06",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-01-06",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-01-06",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-01-08",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-08",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-01-08",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-01-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-01-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-01-08",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-01-09",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-01-09",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-01-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-01-09",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-01-10",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-10",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-01-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-01-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-01-10",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-01-10",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-01-10",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-01-11",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-01-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-01-11",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-01-11",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-01-12",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-01-12",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-01-12",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-01-12",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-01-12",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-01-12",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-01-12",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-01-12",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-01-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-01-13",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-01-13",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-01-13",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-01-13",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-01-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-01-13",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-01-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-01-15",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-01-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-01-15",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-01-16",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-01-16",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-01-16",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-01-16",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-01-16",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-01-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-01-16",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-01-17",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-17",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-01-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-01-17",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-01-17",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-01-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-01-17",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-01-17",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-01-17",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-01-18",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-01-18",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-01-18",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-01-18",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-01-18",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-01-19",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-19",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-01-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-01-19",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-01-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-01-19",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-01-19",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-01-19",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-01-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-01-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-01-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-01-20",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-01-20",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-01-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-01-22",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-01-22",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-01-22",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-01-22",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-01-22",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-01-22",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-01-23",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-01-23",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-01-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-01-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-01-23",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-01-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-01-25",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-25",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-01-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-01-25",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-02-01",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-02-01",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-02-01",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-02-02",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-02-02",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-02-02",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-02-02",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-02-02",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-02-02",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-02-02",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-02-02",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-02-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-02-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-02-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-02-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-02-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-02-05",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-02-05",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-02-05",
    "10:00 PM": "12:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-02-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-02-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-02-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-02-08",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-02-10",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-02-10",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-02-12",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-02-12",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-02-12",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-02-12",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-02-12",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-02-12",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-02-13",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-02-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-02-14",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-02-14",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-02-14",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-02-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-02-14",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-02-14",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-02-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-02-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-02-15",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-02-15",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-02-15",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-02-16",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-02-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-02-16",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-02-16",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-02-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-02-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-02-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-02-16",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-02-17",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-02-17",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-02-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-02-20",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-02-20",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-02-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-02-21",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-02-21",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-02-21",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-02-21",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-02-21",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-02-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-02-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-02-21",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-02-22",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-02-22",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-02-22",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-02-23",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-02-23",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-02-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-02-23",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-02-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-02-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-02-24",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-02-24",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-02-24",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-02-24",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-02-25",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-02-25",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-02-25",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-02-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-02-25",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-02-25",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-02-25",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-02-25",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-02-26",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-02-26",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-02-26",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-02-26",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-02-26",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-02-26",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-02-26",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-02-27",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-02-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-02-27",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-03-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-03-01",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-03-03",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-03-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-03-03",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-03",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-03-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-03-03",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-03-05",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-03-05",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-03-05",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-03-05",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-03-05",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-05",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-03-05",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-03-06",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-03-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-03-06",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-03-06",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-03-07",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-03-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-03-07",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-03-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-03-07",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-03-07",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-07",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-03-07",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-03-07",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-03-08",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-03-08",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-03-08",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-03-10",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-03-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-03-10",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-03-10",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-10",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-03-12",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-03-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-03-12",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-03-12",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-03-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-13",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-03-13",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-03-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-03-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-03-13",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-13",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-03-13",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-03-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-03-14",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-03-14",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-03-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-03-14",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-03-14",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-14",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-03-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-03-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-03-14",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-03-15",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-03-15",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-15",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-03-15",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-03-17",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-03-17",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-03-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-03-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-03-19",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-03-19",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-03-19",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-03-19",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-03-19",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-03-20",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-03-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-03-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-03-20",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-03-20",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-03-22",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-03-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-03-22",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-03-24",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-03-24",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-03-24",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-03-24",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-03-26",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-03-26",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-03-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-03-26",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-03-26",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-03-27",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-03-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-03-27",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-27",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-03-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-03-29",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-03-29",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-29",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-03-29",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-03-30",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-03-30",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-03-30",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-03-30",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-03-30",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-30",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-03-30",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-03-30",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-03-30",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-03-31",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-03-31",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-03-31",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-31",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-03-31",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-03-31",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-03-31",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-04-01",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-04-01",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-04-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-04-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-04-01",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-04-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-04-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-04-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-04-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-04-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-04-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-04-05",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-04-05",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-04-07",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "New York Rangers"
  }
]

/* **********************************************
     Begin 20162017_schedule_by_day.js
********************************************** */

HockeyPool.Data.teams_playing_by_day = {"2016-10-12":["St. Louis Blues","Chicago Blackhawks","Los Angeles Kings","San Jose Sharks","Toronto Maple Leafs","Ottawa Senators"],"2016-10-13":["Anaheim Ducks","Dallas Stars","Boston Bruins","Columbus Blue Jackets","Montreal Canadiens","Buffalo Sabres","Carolina Hurricanes","Winnipeg Jets","Detroit Red Wings","Tampa Bay Lightning","New Jersey Devils","Florida Panthers","Minnesota Wild","St. Louis Blues","New York Islanders","New York Rangers","Washington Capitals","Pittsburgh Penguins"],"2016-10-14":["Edmonton Oilers","Calgary Flames","Chicago Blackhawks","Nashville Predators","Philadelphia Flyers","Los Angeles Kings"],"2016-10-15":["Anaheim Ducks","Pittsburgh Penguins","Philadelphia Flyers","Arizona Coyotes","Boston Bruins","Toronto Maple Leafs","San Jose Sharks","Columbus Blue Jackets","Calgary Flames","Vancouver Canucks","Nashville Predators","Chicago Blackhawks","Dallas Stars","Colorado Avalanche","Detroit Red Wings","Florida Panthers","Winnipeg Jets","Minnesota Wild","Montreal Canadiens","Ottawa Senators","New Jersey Devils","Tampa Bay Lightning","New York Islanders","Washington Capitals","New York Rangers","St. Louis Blues"],"2016-10-16":["Anaheim Ducks","New York Islanders","Buffalo Sabres","Edmonton Oilers","Carolina Hurricanes","Vancouver Canucks"],"2016-10-17":["Boston Bruins","Winnipeg Jets","Colorado Avalanche","Pittsburgh Penguins","Ottawa Senators","Detroit Red Wings","San Jose Sharks","New York Rangers"],"2016-10-18":["Anaheim Ducks","New Jersey Devils","Arizona Coyotes","Ottawa Senators","Buffalo Sabres","Calgary Flames","Carolina Hurricanes","Edmonton Oilers","Philadelphia Flyers","Chicago Blackhawks","Colorado Avalanche","Washington Capitals","Dallas Stars","Nashville Predators","Florida Panthers","Tampa Bay Lightning","Los Angeles Kings","Minnesota Wild","Pittsburgh Penguins","Montreal Canadiens","San Jose Sharks","New York Islanders","St. Louis Blues","Vancouver Canucks"],"2016-10-19":["Detroit Red Wings","New York Rangers","Toronto Maple Leafs","Winnipeg Jets"],"2016-10-20":["Anaheim Ducks","Philadelphia Flyers","Arizona Coyotes","Montreal Canadiens","New Jersey Devils","Boston Bruins","Buffalo Sabres","Vancouver Canucks","Carolina Hurricanes","Calgary Flames","Colorado Avalanche","Tampa Bay Lightning","Los Angeles Kings","Dallas Stars","St. Louis Blues","Edmonton Oilers","Washington Capitals","Florida Panthers","Toronto Maple Leafs","Minnesota Wild","San Jose Sharks","Pittsburgh Penguins"],"2016-10-21":["Arizona Coyotes","New York Islanders","Chicago Blackhawks","Columbus Blue Jackets","Nashville Predators","Detroit Red Wings"],"2016-10-22":["Montreal Canadiens","Boston Bruins","Carolina Hurricanes","Philadelphia Flyers","Columbus Blue Jackets","Dallas Stars","St. Louis Blues","Calgary Flames","Toronto Maple Leafs","Chicago Blackhawks","Colorado Avalanche","Florida Panthers","San Jose Sharks","Detroit Red Wings","Vancouver Canucks","Los Angeles Kings","Minnesota Wild","New Jersey Devils","Pittsburgh Penguins","Nashville Predators","New York Rangers","Washington Capitals","Tampa Bay Lightning","Ottawa Senators"],"2016-10-23":["Vancouver Canucks","Anaheim Ducks","Arizona Coyotes","New York Rangers","Edmonton Oilers","Winnipeg Jets","Minnesota Wild","New York Islanders"],"2016-10-24":["Calgary Flames","Chicago Blackhawks","Philadelphia Flyers","Montreal Canadiens"],"2016-10-25":["Anaheim Ducks","San Jose Sharks","Arizona Coyotes","New Jersey Devils","Minnesota Wild","Boston Bruins","Buffalo Sabres","Philadelphia Flyers","Carolina Hurricanes","Detroit Red Wings","Columbus Blue Jackets","Los Angeles Kings","Calgary Flames","St. Louis Blues","Winnipeg Jets","Dallas Stars","Florida Panthers","Pittsburgh Penguins","Ottawa Senators","Vancouver Canucks","Tampa Bay Lightning","Toronto Maple Leafs"],"2016-10-26":["Nashville Predators","Anaheim Ducks","Boston Bruins","New York Rangers","Washington Capitals","Edmonton Oilers","Montreal Canadiens","New York Islanders"],"2016-10-27":["Arizona Coyotes","Philadelphia Flyers","Minnesota Wild","Buffalo Sabres","Columbus Blue Jackets","San Jose Sharks","Dallas Stars","Winnipeg Jets","Detroit Red Wings","St. Louis Blues","Florida Panthers","Toronto Maple Leafs","Nashville Predators","Los Angeles Kings","Tampa Bay Lightning","Montreal Canadiens","New York Islanders","Pittsburgh Penguins"],"2016-10-28":["Columbus Blue Jackets","Anaheim Ducks","New York Rangers","Carolina Hurricanes","Ottawa Senators","Calgary Flames","Chicago Blackhawks","New Jersey Devils","Winnipeg Jets","Colorado Avalanche","Edmonton Oilers","Vancouver Canucks"],"2016-10-29":["Colorado Avalanche","Arizona Coyotes","Boston Bruins","Detroit Red Wings","Florida Panthers","Buffalo Sabres","Dallas Stars","Minnesota Wild","Los Angeles Kings","St. Louis Blues","Toronto Maple Leafs","Montreal Canadiens","Tampa Bay Lightning","New Jersey Devils","Nashville Predators","San Jose Sharks","Pittsburgh Penguins","Philadelphia Flyers","Washington Capitals","Vancouver Canucks"],"2016-10-30":["Buffalo Sabres","Winnipeg Jets","Philadelphia Flyers","Carolina Hurricanes","Washington Capitals","Calgary Flames","Los Angeles Kings","Chicago Blackhawks","Florida Panthers","Detroit Red Wings","Ottawa Senators","Edmonton Oilers","Toronto Maple Leafs","New York Islanders","Tampa Bay Lightning","New York Rangers"],"2016-11-01":["Anaheim Ducks","Los Angeles Kings","San Jose Sharks","Arizona Coyotes","Boston Bruins","Florida Panthers","Buffalo Sabres","Minnesota Wild","Carolina Hurricanes","Ottawa Senators","Dallas Stars","Columbus Blue Jackets","Calgary Flames","Chicago Blackhawks","Nashville Predators","Colorado Avalanche","Edmonton Oilers","Toronto Maple Leafs","Tampa Bay Lightning","New York Islanders","St. Louis Blues","New York Rangers","Washington Capitals","Winnipeg Jets"],"2016-11-02":["Pittsburgh Penguins","Anaheim Ducks","Detroit Red Wings","Philadelphia Flyers","Vancouver Canucks","Montreal Canadiens"],"2016-11-03":["Nashville Predators","Arizona Coyotes","Boston Bruins","Tampa Bay Lightning","Toronto Maple Leafs","Buffalo Sabres","Calgary Flames","San Jose Sharks","Colorado Avalanche","Chicago Blackhawks","St. Louis Blues","Dallas Stars","Edmonton Oilers","New York Rangers","New Jersey Devils","Florida Panthers","Pittsburgh Penguins","Los Angeles Kings","Philadelphia Flyers","New York Islanders","Vancouver Canucks","Ottawa Senators","Winnipeg Jets","Washington Capitals"],"2016-11-04":["Arizona Coyotes","Anaheim Ducks","Montreal Canadiens","Columbus Blue Jackets","Winnipeg Jets","Detroit Red Wings"],"2016-11-05":["New York Rangers","Boston Bruins","Buffalo Sabres","Ottawa Senators","Carolina Hurricanes","Nashville Predators","Columbus Blue Jackets","St. Louis Blues","Calgary Flames","Los Angeles Kings","Chicago Blackhawks","Dallas Stars","Minnesota Wild","Colorado Avalanche","Edmonton Oilers","New York Islanders","Florida Panthers","Washington Capitals","Philadelphia Flyers","Montreal Canadiens","New Jersey Devils","Tampa Bay Lightning","Pittsburgh Penguins","San Jose Sharks","Vancouver Canucks","Toronto Maple Leafs"],"2016-11-06":["Calgary Flames","Anaheim Ducks","New Jersey Devils","Carolina Hurricanes","Dallas Stars","Chicago Blackhawks","Colorado Avalanche","St. Louis Blues","Edmonton Oilers","Detroit Red Wings","Winnipeg Jets","New York Rangers"],"2016-11-07":["Buffalo Sabres","Boston Bruins","Tampa Bay Lightning","Florida Panthers","Vancouver Canucks","New York Islanders"],"2016-11-08":["Arizona Coyotes","Colorado Avalanche","Boston Bruins","Montreal Canadiens","Carolina Hurricanes","New Jersey Devils","Dallas Stars","Winnipeg Jets","Detroit Red Wings","Philadelphia Flyers","Edmonton Oilers","Pittsburgh Penguins","Los Angeles Kings","Toronto Maple Leafs","Ottawa Senators","Nashville Predators","Vancouver Canucks","New York Rangers","San Jose Sharks","Washington Capitals"],"2016-11-09":["Anaheim Ducks","Columbus Blue Jackets","Ottawa Senators","Buffalo Sabres","Chicago Blackhawks","St. Louis Blues"],"2016-11-10":["Anaheim Ducks","Carolina Hurricanes","Winnipeg Jets","Arizona Coyotes","Columbus Blue Jackets","Boston Bruins","Dallas Stars","Calgary Flames","Vancouver Canucks","Detroit Red Wings","San Jose Sharks","Florida Panthers","Los Angeles Kings","Montreal Canadiens","Minnesota Wild","Pittsburgh Penguins","St. Louis Blues","Nashville Predators","New York Islanders","Tampa Bay Lightning"],"2016-11-11":["New Jersey Devils","Buffalo Sabres","Washington Capitals","Chicago Blackhawks","Winnipeg Jets","Colorado Avalanche","Dallas Stars","Edmonton Oilers","Los Angeles Kings","Ottawa Senators","Philadelphia Flyers","Toronto Maple Leafs"],"2016-11-12":["Anaheim Ducks","Nashville Predators","Boston Bruins","Arizona Coyotes","Buffalo Sabres","New Jersey Devils","Washington Capitals","Carolina Hurricanes","St. Louis Blues","Columbus Blue Jackets","New York Rangers","Calgary Flames","Detroit Red Wings","Montreal Canadiens","New York Islanders","Florida Panthers","Minnesota Wild","Philadelphia Flyers","Toronto Maple Leafs","Pittsburgh Penguins","San Jose Sharks","Tampa Bay Lightning"],"2016-11-13":["Boston Bruins","Colorado Avalanche","Montreal Canadiens","Chicago Blackhawks","Dallas Stars","Vancouver Canucks","New York Rangers","Edmonton Oilers","Los Angeles Kings","Winnipeg Jets","Minnesota Wild","Ottawa Senators"],"2016-11-14":["Tampa Bay Lightning","New York Islanders"],"2016-11-15":["Edmonton Oilers","Anaheim Ducks","Buffalo Sabres","St. Louis Blues","San Jose Sharks","Carolina Hurricanes","Washington Capitals","Columbus Blue Jackets","Calgary Flames","Minnesota Wild","Chicago Blackhawks","Winnipeg Jets","Los Angeles Kings","Colorado Avalanche","New Jersey Devils","Dallas Stars","Tampa Bay Lightning","Detroit Red Wings","Florida Panthers","Montreal Canadiens","Nashville Predators","Toronto Maple Leafs","New York Rangers","Vancouver Canucks","Ottawa Senators","Philadelphia Flyers"],"2016-11-16":["Arizona Coyotes","Calgary Flames","Pittsburgh Penguins","Washington Capitals"],"2016-11-17":["New Jersey Devils","Anaheim Ducks","Arizona Coyotes","Vancouver Canucks","Boston Bruins","Minnesota Wild","Tampa Bay Lightning","Buffalo Sabres","Colorado Avalanche","Dallas Stars","Edmonton Oilers","Los Angeles Kings","Florida Panthers","Toronto Maple Leafs","Nashville Predators","Ottawa Senators","Winnipeg Jets","Philadelphia Flyers","San Jose Sharks","St. Louis Blues"],"2016-11-18":["Montreal Canadiens","Carolina Hurricanes","New York Rangers","Columbus Blue Jackets","Chicago Blackhawks","Calgary Flames","Detroit Red Wings","Washington Capitals","Pittsburgh Penguins","New York Islanders"],"2016-11-19":["San Jose Sharks","Arizona Coyotes","Winnipeg Jets","Boston Bruins","Pittsburgh Penguins","Buffalo Sabres","Chicago Blackhawks","Vancouver Canucks","Colorado Avalanche","Minnesota Wild","Edmonton Oilers","Dallas Stars","Florida Panthers","Ottawa Senators","New Jersey Devils","Los Angeles Kings","Toronto Maple Leafs","Montreal Canadiens","Nashville Predators","St. Louis Blues","Tampa Bay Lightning","Philadelphia Flyers"],"2016-11-20":["Los Angeles Kings","Anaheim Ducks","Winnipeg Jets","Carolina Hurricanes","Columbus Blue Jackets","Washington Capitals","Calgary Flames","Detroit Red Wings","Florida Panthers","New York Rangers"],"2016-11-21":["Calgary Flames","Buffalo Sabres","Colorado Avalanche","Columbus Blue Jackets","Chicago Blackhawks","Edmonton Oilers","Minnesota Wild","Dallas Stars","New Jersey Devils","San Jose Sharks","Tampa Bay Lightning","Nashville Predators","New York Rangers","Pittsburgh Penguins"],"2016-11-22":["New York Islanders","Anaheim Ducks","St. Louis Blues","Boston Bruins","Carolina Hurricanes","Toronto Maple Leafs","Philadelphia Flyers","Florida Panthers","Ottawa Senators","Montreal Canadiens"],"2016-11-23":["Vancouver Canucks","Arizona Coyotes","Detroit Red Wings","Buffalo Sabres","Calgary Flames","Columbus Blue Jackets","Chicago Blackhawks","San Jose Sharks","Edmonton Oilers","Colorado Avalanche","Dallas Stars","Nashville Predators","New York Islanders","Los Angeles Kings","Winnipeg Jets","Minnesota Wild","Toronto Maple Leafs","New Jersey Devils","Pittsburgh Penguins","New York Rangers","Philadelphia Flyers","Tampa Bay Lightning","St. Louis Blues","Washington Capitals"],"2016-11-24":["Boston Bruins","Ottawa Senators","Carolina Hurricanes","Montreal Canadiens"],"2016-11-25":["Chicago Blackhawks","Anaheim Ducks","Edmonton Oilers","Arizona Coyotes","Calgary Flames","Boston Bruins","Buffalo Sabres","Washington Capitals","Columbus Blue Jackets","Tampa Bay Lightning","Vancouver Canucks","Dallas Stars","Detroit Red Wings","New Jersey Devils","Pittsburgh Penguins","Minnesota Wild","Winnipeg Jets","Nashville Predators","New York Islanders","San Jose Sharks","New York Rangers","Philadelphia Flyers"],"2016-11-26":["Anaheim Ducks","San Jose Sharks","Carolina Hurricanes","Ottawa Senators","Columbus Blue Jackets","Florida Panthers","Chicago Blackhawks","Los Angeles Kings","Vancouver Canucks","Colorado Avalanche","Montreal Canadiens","Detroit Red Wings","Minnesota Wild","St. Louis Blues","New Jersey Devils","Pittsburgh Penguins","Washington Capitals","Toronto Maple Leafs"],"2016-11-27":["Arizona Coyotes","Edmonton Oilers","Tampa Bay Lightning","Boston Bruins","Florida Panthers","Carolina Hurricanes","Calgary Flames","Philadelphia Flyers","Nashville Predators","Winnipeg Jets","Ottawa Senators","New York Rangers"],"2016-11-28":["Calgary Flames","New York Islanders","Dallas Stars","St. Louis Blues"],"2016-11-29":["Montreal Canadiens","Anaheim Ducks","Arizona Coyotes","San Jose Sharks","Boston Bruins","Philadelphia Flyers","Buffalo Sabres","Ottawa Senators","Carolina Hurricanes","New York Rangers","Tampa Bay Lightning","Columbus Blue Jackets","Florida Panthers","Chicago Blackhawks","Nashville Predators","Colorado Avalanche","Dallas Stars","Detroit Red Wings","Toronto Maple Leafs","Edmonton Oilers","Minnesota Wild","Vancouver Canucks","New Jersey Devils","Winnipeg Jets"],"2016-11-30":["Toronto Maple Leafs","Calgary Flames","San Jose Sharks","Los Angeles Kings","Pittsburgh Penguins","New York Islanders"],"2016-12-01":["Anaheim Ducks","Vancouver Canucks","Los Angeles Kings","Arizona Coyotes","Carolina Hurricanes","Boston Bruins","New York Rangers","Buffalo Sabres","Columbus Blue Jackets","Colorado Avalanche","New Jersey Devils","Chicago Blackhawks","Dallas Stars","Pittsburgh Penguins","Florida Panthers","Detroit Red Wings","Edmonton Oilers","Winnipeg Jets","New York Islanders","Washington Capitals","Philadelphia Flyers","Ottawa Senators","Tampa Bay Lightning","St. Louis Blues"],"2016-12-02":["Minnesota Wild","Calgary Flames","Montreal Canadiens","San Jose Sharks"],"2016-12-03":["Anaheim Ducks","Edmonton Oilers","Columbus Blue Jackets","Arizona Coyotes","Boston Bruins","Buffalo Sabres","Carolina Hurricanes","New York Rangers","Chicago Blackhawks","Philadelphia Flyers","Dallas Stars","Colorado Avalanche","Detroit Red Wings","Pittsburgh Penguins","Florida Panthers","Ottawa Senators","New Jersey Devils","Nashville Predators","Winnipeg Jets","St. Louis Blues","Washington Capitals","Tampa Bay Lightning","Toronto Maple Leafs","Vancouver Canucks"],"2016-12-04":["Anaheim Ducks","Calgary Flames","Tampa Bay Lightning","Carolina Hurricanes","Winnipeg Jets","Chicago Blackhawks","Detroit Red Wings","New York Islanders","Minnesota Wild","Edmonton Oilers","Montreal Canadiens","Los Angeles Kings","Philadelphia Flyers","Nashville Predators"],"2016-12-05":["Arizona Coyotes","Columbus Blue Jackets","Florida Panthers","Boston Bruins","Buffalo Sabres","Washington Capitals","Ottawa Senators","Pittsburgh Penguins"],"2016-12-06":["Arizona Coyotes","Chicago Blackhawks","Edmonton Oilers","Buffalo Sabres","Calgary Flames","Dallas Stars","Colorado Avalanche","Nashville Predators","Detroit Red Wings","Winnipeg Jets","Florida Panthers","Philadelphia Flyers","Montreal Canadiens","St. Louis Blues","Vancouver Canucks","New Jersey Devils","New York Rangers","New York Islanders"],"2016-12-07":["Carolina Hurricanes","Anaheim Ducks","Boston Bruins","Washington Capitals","Minnesota Wild","Toronto Maple Leafs","Ottawa Senators","San Jose Sharks"],"2016-12-08":["Calgary Flames","Arizona Coyotes","Colorado Avalanche","Boston Bruins","Carolina Hurricanes","Los Angeles Kings","Nashville Predators","Dallas Stars","Edmonton Oilers","Philadelphia Flyers","Pittsburgh Penguins","Florida Panthers","New Jersey Devils","Montreal Canadiens","St. Louis Blues","New York Islanders","New York Rangers","Winnipeg Jets","Vancouver Canucks","Tampa Bay Lightning"],"2016-12-09":["San Jose Sharks","Anaheim Ducks","Washington Capitals","Buffalo Sabres","Columbus Blue Jackets","Detroit Red Wings","New York Rangers","Chicago Blackhawks","Edmonton Oilers","Minnesota Wild","St. Louis Blues","New Jersey Devils"],"2016-12-10":["Nashville Predators","Arizona Coyotes","Toronto Maple Leafs","Boston Bruins","Carolina Hurricanes","San Jose Sharks","New York Islanders","Columbus Blue Jackets","Winnipeg Jets","Calgary Flames","Colorado Avalanche","Montreal Canadiens","Dallas Stars","Philadelphia Flyers","Vancouver Canucks","Florida Panthers","Ottawa Senators","Los Angeles Kings","Pittsburgh Penguins","Tampa Bay Lightning"],"2016-12-11":["Ottawa Senators","Anaheim Ducks","Dallas Stars","Chicago Blackhawks","Colorado Avalanche","Toronto Maple Leafs","Philadelphia Flyers","Detroit Red Wings","Winnipeg Jets","Edmonton Oilers","St. Louis Blues","Minnesota Wild","New Jersey Devils","New York Rangers","Vancouver Canucks","Washington Capitals"],"2016-12-12":["Arizona Coyotes","Pittsburgh Penguins","Boston Bruins","Montreal Canadiens"],"2016-12-13":["Anaheim Ducks","Dallas Stars","Arizona Coyotes","Detroit Red Wings","Los Angeles Kings","Buffalo Sabres","Vancouver Canucks","Carolina Hurricanes","Columbus Blue Jackets","Edmonton Oilers","Chicago Blackhawks","New York Rangers","Florida Panthers","Minnesota Wild","St. Louis Blues","Nashville Predators","Washington Capitals","New York Islanders","San Jose Sharks","Toronto Maple Leafs"],"2016-12-14":["Boston Bruins","Pittsburgh Penguins","Tampa Bay Lightning","Calgary Flames","Philadelphia Flyers","Colorado Avalanche","San Jose Sharks","Ottawa Senators"],"2016-12-15":["Anaheim Ducks","Boston Bruins","Arizona Coyotes","Toronto Maple Leafs","Chicago Blackhawks","New York Islanders","New York Rangers","Dallas Stars","Los Angeles Kings","Detroit Red Wings","Florida Panthers","Winnipeg Jets","Minnesota Wild","Nashville Predators","New Jersey Devils","St. Louis Blues"],"2016-12-16":["New York Islanders","Buffalo Sabres","Washington Capitals","Carolina Hurricanes","Columbus Blue Jackets","Calgary Flames","Florida Panthers","Colorado Avalanche","Los Angeles Kings","Pittsburgh Penguins","San Jose Sharks","Montreal Canadiens","Tampa Bay Lightning","Vancouver Canucks"],"2016-12-17":["Anaheim Ducks","Detroit Red Wings","Arizona Coyotes","Minnesota Wild","Buffalo Sabres","Carolina Hurricanes","Chicago Blackhawks","St. Louis Blues","Philadelphia Flyers","Dallas Stars","Tampa Bay Lightning","Edmonton Oilers","Montreal Canadiens","Washington Capitals","New Jersey Devils","Ottawa Senators","New York Rangers","Nashville Predators","Pittsburgh Penguins","Toronto Maple Leafs"],"2016-12-18":["Los Angeles Kings","Boston Bruins","Columbus Blue Jackets","Vancouver Canucks","San Jose Sharks","Chicago Blackhawks","Colorado Avalanche","Winnipeg Jets","New Jersey Devils","New York Rangers","Ottawa Senators","New York Islanders"],"2016-12-19":["Anaheim Ducks","Toronto Maple Leafs","Calgary Flames","Arizona Coyotes","Detroit Red Wings","Carolina Hurricanes","Edmonton Oilers","St. Louis Blues","Nashville Predators","Philadelphia Flyers"],"2016-12-20":["Anaheim Ducks","Montreal Canadiens","New York Islanders","Boston Bruins","Buffalo Sabres","Florida Panthers","Los Angeles Kings","Columbus Blue Jackets","Calgary Flames","San Jose Sharks","Ottawa Senators","Chicago Blackhawks","Colorado Avalanche","Minnesota Wild","St. Louis Blues","Dallas Stars","Detroit Red Wings","Tampa Bay Lightning","Nashville Predators","New Jersey Devils","New York Rangers","Pittsburgh Penguins","Winnipeg Jets","Vancouver Canucks"],"2016-12-21":["Edmonton Oilers","Arizona Coyotes","Washington Capitals","Philadelphia Flyers"],"2016-12-22":["Anaheim Ducks","Ottawa Senators","Boston Bruins","Florida Panthers","Carolina Hurricanes","Buffalo Sabres","Pittsburgh Penguins","Columbus Blue Jackets","Toronto Maple Leafs","Colorado Avalanche","Los Angeles Kings","Nashville Predators","Minnesota Wild","Montreal Canadiens","Philadelphia Flyers","New Jersey Devils","St. Louis Blues","Tampa Bay Lightning","Winnipeg Jets","Vancouver Canucks"],"2016-12-23":["Toronto Maple Leafs","Arizona Coyotes","Boston Bruins","Carolina Hurricanes","Buffalo Sabres","New York Islanders","Montreal Canadiens","Columbus Blue Jackets","Vancouver Canucks","Calgary Flames","Colorado Avalanche","Chicago Blackhawks","Los Angeles Kings","Dallas Stars","Detroit Red Wings","Florida Panthers","Edmonton Oilers","San Jose Sharks","Minnesota Wild","New York Rangers","New Jersey Devils","Pittsburgh Penguins","Tampa Bay Lightning","Washington Capitals"],"2016-12-27":["San Jose Sharks","Anaheim Ducks","Dallas Stars","Arizona Coyotes","Boston Bruins","Columbus Blue Jackets","Buffalo Sabres","Detroit Red Wings","Calgary Flames","Colorado Avalanche","Winnipeg Jets","Chicago Blackhawks","Minnesota Wild","Nashville Predators","Pittsburgh Penguins","New Jersey Devils","Washington Capitals","New York Islanders","Ottawa Senators","New York Rangers"],"2016-12-28":["Carolina Hurricanes","Pittsburgh Penguins","Toronto Maple Leafs","Florida Panthers","Los Angeles Kings","Vancouver Canucks","Montreal Canadiens","Tampa Bay Lightning","Philadelphia Flyers","St. Louis Blues"],"2016-12-29":["Anaheim Ducks","Calgary Flames","New York Rangers","Arizona Coyotes","Boston Bruins","Buffalo Sabres","Columbus Blue Jackets","Winnipeg Jets","Chicago Blackhawks","Nashville Predators","Colorado Avalanche","Dallas Stars","Detroit Red Wings","Ottawa Senators","Los Angeles Kings","Edmonton Oilers","Montreal Canadiens","Florida Panthers","New York Islanders","Minnesota Wild","New Jersey Devils","Washington Capitals","Toronto Maple Leafs","Tampa Bay Lightning"],"2016-12-30":["Anaheim Ducks","Vancouver Canucks","Chicago Blackhawks","Carolina Hurricanes","Nashville Predators","St. Louis Blues","Philadelphia Flyers","San Jose Sharks"],"2016-12-31":["Arizona Coyotes","Calgary Flames","Buffalo Sabres","Boston Bruins","Carolina Hurricanes","Tampa Bay Lightning","Columbus Blue Jackets","Minnesota Wild","New York Rangers","Colorado Avalanche","Florida Panthers","Dallas Stars","Vancouver Canucks","Edmonton Oilers","San Jose Sharks","Los Angeles Kings","Montreal Canadiens","Pittsburgh Penguins","Washington Capitals","New Jersey Devils","New York Islanders","Winnipeg Jets"],"2017-01-01":["Philadelphia Flyers","Anaheim Ducks","Detroit Red Wings","Toronto Maple Leafs","Ottawa Senators","Washington Capitals"],"2017-01-02":["Boston Bruins","New Jersey Devils","Chicago Blackhawks","St. Louis Blues","Colorado Avalanche","Vancouver Canucks"],"2017-01-03":["Buffalo Sabres","New York Rangers","New Jersey Devils","Carolina Hurricanes","Edmonton Oilers","Columbus Blue Jackets","Los Angeles Kings","San Jose Sharks","Montreal Canadiens","Nashville Predators","Winnipeg Jets","Tampa Bay Lightning","Toronto Maple Leafs","Washington Capitals"],"2017-01-04":["Detroit Red Wings","Anaheim Ducks","Arizona Coyotes","Vancouver Canucks","Colorado Avalanche","Calgary Flames","Montreal Canadiens","Dallas Stars","Winnipeg Jets","Florida Panthers","New York Rangers","Philadelphia Flyers"],"2017-01-05":["Edmonton Oilers","Boston Bruins","Buffalo Sabres","Chicago Blackhawks","Carolina Hurricanes","St. Louis Blues","Columbus Blue Jackets","Washington Capitals","Detroit Red Wings","Los Angeles Kings","Minnesota Wild","San Jose Sharks","Nashville Predators","Tampa Bay Lightning"],"2017-01-06":["Arizona Coyotes","Anaheim Ducks","Carolina Hurricanes","Chicago Blackhawks","Calgary Flames","Vancouver Canucks","New York Islanders","Colorado Avalanche","Nashville Predators","Florida Panthers","Toronto Maple Leafs","New Jersey Devils"],"2017-01-07":["New York Islanders","Arizona Coyotes","Boston Bruins","Florida Panthers","Winnipeg Jets","Buffalo Sabres","New York Rangers","Columbus Blue Jackets","Vancouver Canucks","Calgary Flames","Dallas Stars","St. Louis Blues","Detroit Red Wings","San Jose Sharks","Edmonton Oilers","New Jersey Devils","Minnesota Wild","Los Angeles Kings","Montreal Canadiens","Toronto Maple Leafs","Washington Capitals","Ottawa Senators","Tampa Bay Lightning","Philadelphia Flyers"],"2017-01-08":["Minnesota Wild","Anaheim Ducks","Boston Bruins","Carolina Hurricanes","Philadelphia Flyers","Columbus Blue Jackets","Nashville Predators","Chicago Blackhawks","Edmonton Oilers","Ottawa Senators","Tampa Bay Lightning","Pittsburgh Penguins"],"2017-01-09":["Calgary Flames","Winnipeg Jets","Dallas Stars","Los Angeles Kings","Florida Panthers","New Jersey Devils","Washington Capitals","Montreal Canadiens"],"2017-01-10":["Dallas Stars","Anaheim Ducks","Boston Bruins","St. Louis Blues","Philadelphia Flyers","Buffalo Sabres","Columbus Blue Jackets","Carolina Hurricanes","Detroit Red Wings","Chicago Blackhawks","San Jose Sharks","Edmonton Oilers","Vancouver Canucks","Nashville Predators"],"2017-01-11":["San Jose Sharks","Calgary Flames","Florida Panthers","New York Islanders","Montreal Canadiens","Winnipeg Jets","Pittsburgh Penguins","Washington Capitals"],"2017-01-12":["Anaheim Ducks","Colorado Avalanche","Boston Bruins","Nashville Predators","Buffalo Sabres","Tampa Bay Lightning","Detroit Red Wings","Dallas Stars","New Jersey Devils","Edmonton Oilers","St. Louis Blues","Los Angeles Kings","Montreal Canadiens","Minnesota Wild","Pittsburgh Penguins","Ottawa Senators","Vancouver Canucks","Philadelphia Flyers"],"2017-01-13":["Winnipeg Jets","Arizona Coyotes","Buffalo Sabres","Carolina Hurricanes","Columbus Blue Jackets","Tampa Bay Lightning","New Jersey Devils","Calgary Flames","Chicago Blackhawks","Washington Capitals","New York Islanders","Florida Panthers","Toronto Maple Leafs","New York Rangers"],"2017-01-14":["Anaheim Ducks","Arizona Coyotes","Philadelphia Flyers","Boston Bruins","New York Islanders","Carolina Hurricanes","Columbus Blue Jackets","Florida Panthers","Calgary Flames","Edmonton Oilers","Nashville Predators","Colorado Avalanche","Minnesota Wild","Dallas Stars","Pittsburgh Penguins","Detroit Red Wings","Winnipeg Jets","Los Angeles Kings","New York Rangers","Montreal Canadiens","Toronto Maple Leafs","Ottawa Senators","St. Louis Blues","San Jose Sharks"],"2017-01-15":["St. Louis Blues","Anaheim Ducks","Minnesota Wild","Chicago Blackhawks","New Jersey Devils","Vancouver Canucks","Philadelphia Flyers","Washington Capitals"],"2017-01-16":["Arizona Coyotes","Edmonton Oilers","New York Islanders","Boston Bruins","Dallas Stars","Buffalo Sabres","Montreal Canadiens","Detroit Red Wings","Tampa Bay Lightning","Los Angeles Kings","Washington Capitals","Pittsburgh Penguins","Winnipeg Jets","San Jose Sharks"],"2017-01-17":["Tampa Bay Lightning","Anaheim Ducks","Buffalo Sabres","Toronto Maple Leafs","Carolina Hurricanes","Columbus Blue Jackets","Florida Panthers","Calgary Flames","Chicago Blackhawks","Colorado Avalanche","Dallas Stars","New York Rangers","New Jersey Devils","Minnesota Wild","Nashville Predators","Vancouver Canucks","Ottawa Senators","St. Louis Blues"],"2017-01-18":["Arizona Coyotes","Winnipeg Jets","Boston Bruins","Detroit Red Wings","Florida Panthers","Edmonton Oilers","San Jose Sharks","Los Angeles Kings","Pittsburgh Penguins","Montreal Canadiens"],"2017-01-19":["Colorado Avalanche","Anaheim Ducks","Arizona Coyotes","Minnesota Wild","Ottawa Senators","Columbus Blue Jackets","Nashville Predators","Calgary Flames","Dallas Stars","New York Islanders","New York Rangers","Toronto Maple Leafs","Tampa Bay Lightning","San Jose Sharks","Washington Capitals","St. Louis Blues"],"2017-01-20":["Chicago Blackhawks","Boston Bruins","Detroit Red Wings","Buffalo Sabres","Pittsburgh Penguins","Carolina Hurricanes","Nashville Predators","Edmonton Oilers","Florida Panthers","Vancouver Canucks","Montreal Canadiens","New Jersey Devils"],"2017-01-21":["Anaheim Ducks","Minnesota Wild","Tampa Bay Lightning","Arizona Coyotes","Buffalo Sabres","Montreal Canadiens","Carolina Hurricanes","Columbus Blue Jackets","Edmonton Oilers","Calgary Flames","Colorado Avalanche","San Jose Sharks","Washington Capitals","Dallas Stars","Los Angeles Kings","New York Islanders","New Jersey Devils","Philadelphia Flyers","Ottawa Senators","Toronto Maple Leafs","St. Louis Blues","Winnipeg Jets"],"2017-01-22":["Boston Bruins","Pittsburgh Penguins","Columbus Blue Jackets","Ottawa Senators","Vancouver Canucks","Chicago Blackhawks","New York Rangers","Detroit Red Wings","Nashville Predators","Minnesota Wild","Philadelphia Flyers","New York Islanders"],"2017-01-23":["Anaheim Ducks","Winnipeg Jets","Florida Panthers","Arizona Coyotes","Carolina Hurricanes","Washington Capitals","Calgary Flames","Toronto Maple Leafs","San Jose Sharks","Colorado Avalanche","Los Angeles Kings","New York Rangers"],"2017-01-24":["Detroit Red Wings","Boston Bruins","Buffalo Sabres","Nashville Predators","Columbus Blue Jackets","New York Islanders","Calgary Flames","Montreal Canadiens","Tampa Bay Lightning","Chicago Blackhawks","Minnesota Wild","Dallas Stars","Los Angeles Kings","New Jersey Devils","Washington Capitals","Ottawa Senators","St. Louis Blues","Pittsburgh Penguins","San Jose Sharks","Winnipeg Jets"],"2017-01-25":["Edmonton Oilers","Anaheim Ducks","Vancouver Canucks","Colorado Avalanche","Toronto Maple Leafs","Detroit Red Wings","Philadelphia Flyers","New York Rangers"],"2017-01-26":["Vancouver Canucks","Arizona Coyotes","Pittsburgh Penguins","Boston Bruins","Buffalo Sabres","Dallas Stars","Los Angeles Kings","Carolina Hurricanes","Columbus Blue Jackets","Nashville Predators","Calgary Flames","Ottawa Senators","Winnipeg Jets","Chicago Blackhawks","Edmonton Oilers","San Jose Sharks","Tampa Bay Lightning","Florida Panthers","St. Louis Blues","Minnesota Wild","Montreal Canadiens","New York Islanders","Washington Capitals","New Jersey Devils","Toronto Maple Leafs","Philadelphia Flyers"],"2017-01-31":["Colorado Avalanche","Anaheim Ducks","Los Angeles Kings","Arizona Coyotes","Boston Bruins","Tampa Bay Lightning","Buffalo Sabres","Montreal Canadiens","Philadelphia Flyers","Carolina Hurricanes","Columbus Blue Jackets","New York Rangers","Chicago Blackhawks","San Jose Sharks","Toronto Maple Leafs","Dallas Stars","New Jersey Devils","Detroit Red Wings","Minnesota Wild","Edmonton Oilers","Ottawa Senators","Florida Panthers","Nashville Predators","Pittsburgh Penguins","Washington Capitals","New York Islanders","Winnipeg Jets","St. Louis Blues"],"2017-02-01":["Boston Bruins","Washington Capitals","Minnesota Wild","Calgary Flames","Colorado Avalanche","Los Angeles Kings"],"2017-02-02":["Chicago Blackhawks","Arizona Coyotes","New York Rangers","Buffalo Sabres","Winnipeg Jets","Dallas Stars","Edmonton Oilers","Nashville Predators","Montreal Canadiens","Philadelphia Flyers","Ottawa Senators","Tampa Bay Lightning","San Jose Sharks","Vancouver Canucks","Toronto Maple Leafs","St. Louis Blues"],"2017-02-03":["Anaheim Ducks","Florida Panthers","Edmonton Oilers","Carolina Hurricanes","Columbus Blue Jackets","Pittsburgh Penguins","Calgary Flames","New Jersey Devils","New York Islanders","Detroit Red Wings"],"2017-02-04":["Anaheim Ducks","Tampa Bay Lightning","Arizona Coyotes","San Jose Sharks","Toronto Maple Leafs","Boston Bruins","Ottawa Senators","Buffalo Sabres","Carolina Hurricanes","New York Islanders","New Jersey Devils","Columbus Blue Jackets","Chicago Blackhawks","Dallas Stars","Winnipeg Jets","Colorado Avalanche","Detroit Red Wings","Nashville Predators","Los Angeles Kings","Philadelphia Flyers","Minnesota Wild","Vancouver Canucks","Washington Capitals","Montreal Canadiens","Pittsburgh Penguins","St. Louis Blues"],"2017-02-05":["Calgary Flames","New York Rangers","Edmonton Oilers","Montreal Canadiens","Los Angeles Kings","Washington Capitals"],"2017-02-06":["Buffalo Sabres","New Jersey Devils","Toronto Maple Leafs","New York Islanders","St. Louis Blues","Philadelphia Flyers"],"2017-02-07":["Anaheim Ducks","New York Rangers","San Jose Sharks","Buffalo Sabres","Carolina Hurricanes","Washington Capitals","Columbus Blue Jackets","Detroit Red Wings","Calgary Flames","Pittsburgh Penguins","Montreal Canadiens","Colorado Avalanche","Dallas Stars","Toronto Maple Leafs","Los Angeles Kings","Tampa Bay Lightning","Minnesota Wild","Winnipeg Jets","Vancouver Canucks","Nashville Predators","St. Louis Blues","Ottawa Senators"],"2017-02-08":["Chicago Blackhawks","Minnesota Wild"],"2017-02-09":["Anaheim Ducks","Buffalo Sabres","Montreal Canadiens","Arizona Coyotes","San Jose Sharks","Boston Bruins","Vancouver Canucks","Columbus Blue Jackets","Pittsburgh Penguins","Colorado Avalanche","Dallas Stars","Ottawa Senators","Detroit Red Wings","Washington Capitals","Los Angeles Kings","Florida Panthers","Nashville Predators","New York Rangers","New York Islanders","Philadelphia Flyers","St. Louis Blues","Toronto Maple Leafs"],"2017-02-10":["Chicago Blackhawks","Winnipeg Jets","Tampa Bay Lightning","Minnesota Wild"],"2017-02-11":["Anaheim Ducks","Washington Capitals","Pittsburgh Penguins","Arizona Coyotes","Vancouver Canucks","Boston Bruins","Buffalo Sabres","Toronto Maple Leafs","Carolina Hurricanes","Dallas Stars","Detroit Red Wings","Columbus Blue Jackets","Chicago Blackhawks","Edmonton Oilers","Colorado Avalanche","New York Rangers","Florida Panthers","Nashville Predators","St. Louis Blues","Montreal Canadiens","New York Islanders","Ottawa Senators","San Jose Sharks","Philadelphia Flyers","Tampa Bay Lightning","Winnipeg Jets"],"2017-02-12":["Montreal Canadiens","Boston Bruins","Vancouver Canucks","Buffalo Sabres","Colorado Avalanche","New York Islanders","Dallas Stars","Nashville Predators","Detroit Red Wings","Minnesota Wild","San Jose Sharks","New Jersey Devils"],"2017-02-13":["Arizona Coyotes","Calgary Flames","New York Rangers","Columbus Blue Jackets"],"2017-02-14":["Anaheim Ducks","Minnesota Wild","Arizona Coyotes","Edmonton Oilers","Buffalo Sabres","Ottawa Senators","Colorado Avalanche","New Jersey Devils","Dallas Stars","Winnipeg Jets","New York Islanders","Toronto Maple Leafs","Vancouver Canucks","Pittsburgh Penguins"],"2017-02-15":["Toronto Maple Leafs","Columbus Blue Jackets","Philadelphia Flyers","Calgary Flames","St. Louis Blues","Detroit Red Wings","Florida Panthers","San Jose Sharks"],"2017-02-16":["Arizona Coyotes","Los Angeles Kings","Colorado Avalanche","Buffalo Sabres","Dallas Stars","Minnesota Wild","Philadelphia Flyers","Edmonton Oilers","Ottawa Senators","New Jersey Devils","New York Rangers","New York Islanders","Winnipeg Jets","Pittsburgh Penguins","Vancouver Canucks","St. Louis Blues"],"2017-02-17":["Florida Panthers","Anaheim Ducks","Colorado Avalanche","Carolina Hurricanes","Pittsburgh Penguins","Columbus Blue Jackets"],"2017-02-18":["San Jose Sharks","Arizona Coyotes","St. Louis Blues","Buffalo Sabres","Calgary Flames","Vancouver Canucks","Edmonton Oilers","Chicago Blackhawks","Tampa Bay Lightning","Dallas Stars","Washington Capitals","Detroit Red Wings","Florida Panthers","Los Angeles Kings","Nashville Predators","Minnesota Wild","Winnipeg Jets","Montreal Canadiens","New York Islanders","New Jersey Devils","Ottawa Senators","Toronto Maple Leafs"],"2017-02-19":["Los Angeles Kings","Anaheim Ducks","Boston Bruins","San Jose Sharks","Chicago Blackhawks","Buffalo Sabres","Toronto Maple Leafs","Carolina Hurricanes","Nashville Predators","Columbus Blue Jackets","Tampa Bay Lightning","Colorado Avalanche","Detroit Red Wings","Pittsburgh Penguins","New Jersey Devils","New York Islanders","Washington Capitals","New York Rangers","Winnipeg Jets","Ottawa Senators","Philadelphia Flyers","Vancouver Canucks"],"2017-02-20":["Anaheim Ducks","Arizona Coyotes","Florida Panthers","St. Louis Blues"],"2017-02-21":["Pittsburgh Penguins","Carolina Hurricanes","Calgary Flames","Nashville Predators","Chicago Blackhawks","Minnesota Wild","Los Angeles Kings","Colorado Avalanche","New York Islanders","Detroit Red Wings","Edmonton Oilers","Tampa Bay Lightning","Montreal Canadiens","New York Rangers","Ottawa Senators","New Jersey Devils","Winnipeg Jets","Toronto Maple Leafs"],"2017-02-22":["Boston Bruins","Anaheim Ducks","Edmonton Oilers","Florida Panthers","Washington Capitals","Philadelphia Flyers"],"2017-02-23":["Arizona Coyotes","Chicago Blackhawks","Boston Bruins","Los Angeles Kings","Calgary Flames","Tampa Bay Lightning","Colorado Avalanche","Nashville Predators","New York Islanders","Montreal Canadiens","New York Rangers","Toronto Maple Leafs"],"2017-02-24":["Arizona Coyotes","Dallas Stars","Ottawa Senators","Carolina Hurricanes","Calgary Flames","Florida Panthers","Edmonton Oilers","Washington Capitals"],"2017-02-25":["Anaheim Ducks","Los Angeles Kings","Buffalo Sabres","Colorado Avalanche","New York Islanders","Columbus Blue Jackets","Montreal Canadiens","Toronto Maple Leafs","New York Rangers","New Jersey Devils","Washington Capitals","Nashville Predators","Philadelphia Flyers","Pittsburgh Penguins","San Jose Sharks","Vancouver Canucks"],"2017-02-26":["Buffalo Sabres","Arizona Coyotes","Boston Bruins","Dallas Stars","Calgary Flames","Carolina Hurricanes","Columbus Blue Jackets","New York Rangers","St. Louis Blues","Chicago Blackhawks","Edmonton Oilers","Nashville Predators","Ottawa Senators","Florida Panthers"],"2017-02-27":["Los Angeles Kings","Minnesota Wild","Montreal Canadiens","New Jersey Devils","Ottawa Senators","Tampa Bay Lightning"],"2017-02-28":["Arizona Coyotes","Boston Bruins","Nashville Predators","Buffalo Sabres","Carolina Hurricanes","Florida Panthers","Columbus Blue Jackets","Montreal Canadiens","Los Angeles Kings","Calgary Flames","Colorado Avalanche","Philadelphia Flyers","Pittsburgh Penguins","Dallas Stars","Detroit Red Wings","Vancouver Canucks","Edmonton Oilers","St. Louis Blues","Minnesota Wild","Winnipeg Jets","Washington Capitals","New York Rangers","Toronto Maple Leafs","San Jose Sharks"],"2017-03-01":["Carolina Hurricanes","Tampa Bay Lightning","Pittsburgh Penguins","Chicago Blackhawks"],"2017-03-02":["Arizona Coyotes","Buffalo Sabres","New York Rangers","Boston Bruins","Minnesota Wild","Columbus Blue Jackets","Colorado Avalanche","Ottawa Senators","New York Islanders","Dallas Stars","Florida Panthers","Philadelphia Flyers","Toronto Maple Leafs","Los Angeles Kings","Nashville Predators","Montreal Canadiens","New Jersey Devils","Washington Capitals","Vancouver Canucks","San Jose Sharks"],"2017-03-03":["Toronto Maple Leafs","Anaheim Ducks","Arizona Coyotes","Carolina Hurricanes","Detroit Red Wings","Calgary Flames","New York Islanders","Chicago Blackhawks","Tampa Bay Lightning","Pittsburgh Penguins","St. Louis Blues","Winnipeg Jets"],"2017-03-04":["New Jersey Devils","Boston Bruins","Tampa Bay Lightning","Buffalo Sabres","Columbus Blue Jackets","Ottawa Senators","Chicago Blackhawks","Nashville Predators","Colorado Avalanche","Winnipeg Jets","Dallas Stars","Florida Panthers","Detroit Red Wings","Edmonton Oilers","Vancouver Canucks","Los Angeles Kings","Montreal Canadiens","New York Rangers","Philadelphia Flyers","Washington Capitals"],"2017-03-05":["Vancouver Canucks","Anaheim Ducks","Carolina Hurricanes","Arizona Coyotes","Buffalo Sabres","Pittsburgh Penguins","Columbus Blue Jackets","New Jersey Devils","New York Islanders","Calgary Flames","St. Louis Blues","Colorado Avalanche","San Jose Sharks","Minnesota Wild"],"2017-03-06":["Boston Bruins","Ottawa Senators","Dallas Stars","Washington Capitals","New York Rangers","Tampa Bay Lightning","San Jose Sharks","Winnipeg Jets"],"2017-03-07":["Nashville Predators","Anaheim Ducks","Philadelphia Flyers","Buffalo Sabres","Carolina Hurricanes","Colorado Avalanche","New Jersey Devils","Columbus Blue Jackets","Detroit Red Wings","Toronto Maple Leafs","New York Islanders","Edmonton Oilers","New York Rangers","Florida Panthers","St. Louis Blues","Minnesota Wild","Montreal Canadiens","Vancouver Canucks"],"2017-03-08":["Detroit Red Wings","Boston Bruins","Ottawa Senators","Dallas Stars","Pittsburgh Penguins","Winnipeg Jets"],"2017-03-09":["Anaheim Ducks","Chicago Blackhawks","Ottawa Senators","Arizona Coyotes","New York Rangers","Carolina Hurricanes","Montreal Canadiens","Calgary Flames","New Jersey Devils","Colorado Avalanche","Nashville Predators","Los Angeles Kings","Minnesota Wild","Tampa Bay Lightning","New York Islanders","Vancouver Canucks","Philadelphia Flyers","Toronto Maple Leafs","Washington Capitals","San Jose Sharks"],"2017-03-10":["Anaheim Ducks","St. Louis Blues","Buffalo Sabres","Columbus Blue Jackets","Chicago Blackhawks","Detroit Red Wings","Pittsburgh Penguins","Edmonton Oilers","Minnesota Wild","Florida Panthers"],"2017-03-11":["New Jersey Devils","Arizona Coyotes","Philadelphia Flyers","Boston Bruins","Columbus Blue Jackets","Buffalo Sabres","Toronto Maple Leafs","Carolina Hurricanes","Calgary Flames","Winnipeg Jets","Ottawa Senators","Colorado Avalanche","Florida Panthers","Tampa Bay Lightning","Washington Capitals","Los Angeles Kings","Nashville Predators","San Jose Sharks","New York Islanders","St. Louis Blues","Pittsburgh Penguins","Vancouver Canucks"],"2017-03-12":["Washington Capitals","Anaheim Ducks","Minnesota Wild","Chicago Blackhawks","Dallas Stars","San Jose Sharks","New York Rangers","Detroit Red Wings","Montreal Canadiens","Edmonton Oilers"],"2017-03-13":["Colorado Avalanche","Arizona Coyotes","Boston Bruins","Vancouver Canucks","Carolina Hurricanes","New York Islanders","Columbus Blue Jackets","Philadelphia Flyers","Pittsburgh Penguins","Calgary Flames","St. Louis Blues","Los Angeles Kings","Winnipeg Jets","Nashville Predators","Tampa Bay Lightning","New York Rangers"],"2017-03-14":["Arizona Coyotes","Los Angeles Kings","Buffalo Sabres","San Jose Sharks","New York Islanders","Carolina Hurricanes","Chicago Blackhawks","Montreal Canadiens","Dallas Stars","Edmonton Oilers","Toronto Maple Leafs","Florida Panthers","Minnesota Wild","Washington Capitals","Winnipeg Jets","New Jersey Devils","Tampa Bay Lightning","Ottawa Senators"],"2017-03-15":["St. Louis Blues","Anaheim Ducks","Boston Bruins","Calgary Flames","Detroit Red Wings","Colorado Avalanche","Pittsburgh Penguins","Philadelphia Flyers"],"2017-03-16":["Detroit Red Wings","Arizona Coyotes","Boston Bruins","Edmonton Oilers","Buffalo Sabres","Los Angeles Kings","Minnesota Wild","Carolina Hurricanes","Florida Panthers","Columbus Blue Jackets","Chicago Blackhawks","Ottawa Senators","Dallas Stars","Vancouver Canucks","Philadelphia Flyers","New Jersey Devils","Nashville Predators","Washington Capitals","Winnipeg Jets","New York Islanders","St. Louis Blues","San Jose Sharks","Toronto Maple Leafs","Tampa Bay Lightning"],"2017-03-17":["Buffalo Sabres","Anaheim Ducks","Dallas Stars","Calgary Flames","Florida Panthers","New York Rangers","New Jersey Devils","Pittsburgh Penguins"],"2017-03-18":["Anaheim Ducks","San Jose Sharks","St. Louis Blues","Arizona Coyotes","Nashville Predators","Carolina Hurricanes","Columbus Blue Jackets","New York Islanders","Chicago Blackhawks","Toronto Maple Leafs","Colorado Avalanche","Detroit Red Wings","Vancouver Canucks","Edmonton Oilers","New York Rangers","Minnesota Wild","Montreal Canadiens","Ottawa Senators","Washington Capitals","Tampa Bay Lightning"],"2017-03-19":["Carolina Hurricanes","Philadelphia Flyers","Columbus Blue Jackets","New Jersey Devils","Los Angeles Kings","Calgary Flames","Colorado Avalanche","Chicago Blackhawks","Florida Panthers","Pittsburgh Penguins","Minnesota Wild","Winnipeg Jets","Ottawa Senators","Montreal Canadiens"],"2017-03-20":["Arizona Coyotes","Nashville Predators","Boston Bruins","Toronto Maple Leafs","Buffalo Sabres","Detroit Red Wings","San Jose Sharks","Dallas Stars","Los Angeles Kings","Edmonton Oilers"],"2017-03-21":["Arizona Coyotes","Tampa Bay Lightning","Ottawa Senators","Boston Bruins","Pittsburgh Penguins","Buffalo Sabres","Carolina Hurricanes","Florida Panthers","Calgary Flames","Washington Capitals","Vancouver Canucks","Chicago Blackhawks","St. Louis Blues","Colorado Avalanche","Detroit Red Wings","Montreal Canadiens","San Jose Sharks","Minnesota Wild","New York Rangers","New Jersey Devils","Philadelphia Flyers","Winnipeg Jets"],"2017-03-22":["Edmonton Oilers","Anaheim Ducks","Toronto Maple Leafs","Columbus Blue Jackets","New York Islanders","New York Rangers"],"2017-03-23":["Arizona Coyotes","Florida Panthers","Tampa Bay Lightning","Boston Bruins","Carolina Hurricanes","Montreal Canadiens","Columbus Blue Jackets","Washington Capitals","Calgary Flames","Nashville Predators","Dallas Stars","Chicago Blackhawks","Edmonton Oilers","Colorado Avalanche","Winnipeg Jets","Los Angeles Kings","Philadelphia Flyers","Minnesota Wild","New Jersey Devils","Toronto Maple Leafs","Pittsburgh Penguins","Ottawa Senators","Vancouver Canucks","St. Louis Blues"],"2017-03-24":["Winnipeg Jets","Anaheim Ducks","San Jose Sharks","Dallas Stars","Tampa Bay Lightning","Detroit Red Wings","New York Islanders","Pittsburgh Penguins"],"2017-03-25":["Arizona Coyotes","Washington Capitals","Boston Bruins","New York Islanders","Toronto Maple Leafs","Buffalo Sabres","Carolina Hurricanes","New Jersey Devils","Philadelphia Flyers","Columbus Blue Jackets","Calgary Flames","St. Louis Blues","Chicago Blackhawks","Florida Panthers","Colorado Avalanche","Edmonton Oilers","New York Rangers","Los Angeles Kings","Vancouver Canucks","Minnesota Wild","Ottawa Senators","Montreal Canadiens","San Jose Sharks","Nashville Predators"],"2017-03-26":["New York Rangers","Anaheim Ducks","Dallas Stars","New Jersey Devils","Minnesota Wild","Detroit Red Wings","Philadelphia Flyers","Pittsburgh Penguins","Vancouver Canucks","Winnipeg Jets"],"2017-03-27":["Arizona Coyotes","St. Louis Blues","Florida Panthers","Buffalo Sabres","Colorado Avalanche","Calgary Flames","Chicago Blackhawks","Tampa Bay Lightning","Nashville Predators","New York Islanders"],"2017-03-28":["Anaheim Ducks","Vancouver Canucks","Nashville Predators","Boston Bruins","Buffalo Sabres","Columbus Blue Jackets","Detroit Red Wings","Carolina Hurricanes","Dallas Stars","Montreal Canadiens","Los Angeles Kings","Edmonton Oilers","Florida Panthers","Toronto Maple Leafs","Washington Capitals","Minnesota Wild","New York Rangers","San Jose Sharks","Ottawa Senators","Philadelphia Flyers"],"2017-03-29":["St. Louis Blues","Arizona Coyotes","Los Angeles Kings","Calgary Flames","Chicago Blackhawks","Pittsburgh Penguins","Washington Capitals","Colorado Avalanche"],"2017-03-30":["Anaheim Ducks","Winnipeg Jets","Dallas Stars","Boston Bruins","Columbus Blue Jackets","Carolina Hurricanes","Detroit Red Wings","Tampa Bay Lightning","San Jose Sharks","Edmonton Oilers","Florida Panthers","Montreal Canadiens","Ottawa Senators","Minnesota Wild","Toronto Maple Leafs","Nashville Predators","New York Islanders","Philadelphia Flyers"],"2017-03-31":["Washington Capitals","Arizona Coyotes","Columbus Blue Jackets","Chicago Blackhawks","San Jose Sharks","Calgary Flames","St. Louis Blues","Colorado Avalanche","Los Angeles Kings","Vancouver Canucks","New Jersey Devils","New York Islanders","Pittsburgh Penguins","New York Rangers"],"2017-04-01":["Anaheim Ducks","Edmonton Oilers","Florida Panthers","Boston Bruins","Dallas Stars","Carolina Hurricanes","Toronto Maple Leafs","Detroit Red Wings","Minnesota Wild","Nashville Predators","Montreal Canadiens","Tampa Bay Lightning","New Jersey Devils","Philadelphia Flyers","Ottawa Senators","Winnipeg Jets"],"2017-04-02":["Anaheim Ducks","Calgary Flames","Arizona Coyotes","Los Angeles Kings","Boston Bruins","Chicago Blackhawks","New York Islanders","Buffalo Sabres","Carolina Hurricanes","Pittsburgh Penguins","Washington Capitals","Columbus Blue Jackets","Colorado Avalanche","Minnesota Wild","Dallas Stars","Tampa Bay Lightning","Nashville Predators","St. Louis Blues","Philadelphia Flyers","New York Rangers","San Jose Sharks","Vancouver Canucks"],"2017-04-03":["Toronto Maple Leafs","Buffalo Sabres","Ottawa Senators","Detroit Red Wings","Montreal Canadiens","Florida Panthers"],"2017-04-04":["Calgary Flames","Anaheim Ducks","Arizona Coyotes","Dallas Stars","Tampa Bay Lightning","Boston Bruins","Carolina Hurricanes","Minnesota Wild","Columbus Blue Jackets","Pittsburgh Penguins","Chicago Blackhawks","Colorado Avalanche","Detroit Red Wings","Ottawa Senators","Edmonton Oilers","Los Angeles Kings","Philadelphia Flyers","New Jersey Devils","New York Islanders","Nashville Predators","Vancouver Canucks","San Jose Sharks","Winnipeg Jets","St. Louis Blues","Washington Capitals","Toronto Maple Leafs"],"2017-04-05":["Montreal Canadiens","Buffalo Sabres","New York Rangers","Washington Capitals"],"2017-04-06":["Chicago Blackhawks","Anaheim Ducks","Vancouver Canucks","Arizona Coyotes","Ottawa Senators","Boston Bruins","New York Islanders","Carolina Hurricanes","Winnipeg Jets","Columbus Blue Jackets","Calgary Flames","Los Angeles Kings","Minnesota Wild","Colorado Avalanche","Nashville Predators","Dallas Stars","Edmonton Oilers","San Jose Sharks","St. Louis Blues","Florida Panthers","Pittsburgh Penguins","New Jersey Devils","Tampa Bay Lightning","Toronto Maple Leafs"],"2017-04-07":["Tampa Bay Lightning","Montreal Canadiens"],"2017-04-08":["Minnesota Wild","Arizona Coyotes","Washington Capitals","Boston Bruins","Buffalo Sabres","Florida Panthers","St. Louis Blues","Carolina Hurricanes","Columbus Blue Jackets","Philadelphia Flyers","Calgary Flames","San Jose Sharks","Chicago Blackhawks","Los Angeles Kings","Colorado Avalanche","Dallas Stars","Montreal Canadiens","Detroit Red Wings","Edmonton Oilers","Vancouver Canucks","New York Islanders","New Jersey Devils","Nashville Predators","Winnipeg Jets","New York Rangers","Ottawa Senators","Pittsburgh Penguins","Toronto Maple Leafs"],"2017-04-09":["Los Angeles Kings","Anaheim Ducks","Buffalo Sabres","Tampa Bay Lightning","Carolina Hurricanes","Philadelphia Flyers","Columbus Blue Jackets","Toronto Maple Leafs","Colorado Avalanche","St. Louis Blues","New Jersey Devils","Detroit Red Wings","Vancouver Canucks","Edmonton Oilers","Florida Panthers","Washington Capitals","Ottawa Senators","New York Islanders","Pittsburgh Penguins","New York Rangers"]};

/* **********************************************
     Begin team_schedules.js
********************************************** */

HockeyPool.Data.team_schedules = {"St. Louis Blues":{"2016-10-12":"@Chicago Blackhawks","2016-10-13":"Minnesota Wild","2016-10-15":"New York Rangers","2016-10-18":"@Vancouver Canucks","2016-10-20":"@Edmonton Oilers","2016-10-22":"@Calgary Flames","2016-10-25":"Calgary Flames","2016-10-27":"Detroit Red Wings","2016-10-29":"Los Angeles Kings","2016-11-01":"@New York Rangers","2016-11-03":"@Dallas Stars","2016-11-05":"Columbus Blue Jackets","2016-11-06":"Colorado Avalanche","2016-11-09":"Chicago Blackhawks","2016-11-10":"@Nashville Predators","2016-11-12":"@Columbus Blue Jackets","2016-11-15":"Buffalo Sabres","2016-11-17":"San Jose Sharks","2016-11-19":"Nashville Predators","2016-11-22":"@Boston Bruins","2016-11-23":"@Washington Capitals","2016-11-26":"Minnesota Wild","2016-11-28":"Dallas Stars","2016-12-01":"Tampa Bay Lightning","2016-12-03":"Winnipeg Jets","2016-12-06":"Montreal Canadiens","2016-12-08":"@New York Islanders","2016-12-09":"@New Jersey Devils","2016-12-11":"@Minnesota Wild","2016-12-13":"@Nashville Predators","2016-12-15":"New Jersey Devils","2016-12-17":"Chicago Blackhawks","2016-12-19":"Edmonton Oilers","2016-12-20":"@Dallas Stars","2016-12-22":"@Tampa Bay Lightning","2016-12-28":"Philadelphia Flyers","2016-12-30":"Nashville Predators","2017-01-02":"Chicago Blackhawks","2017-01-05":"Carolina Hurricanes","2017-01-07":"Dallas Stars","2017-01-10":"Boston Bruins","2017-01-12":"@Los Angeles Kings","2017-01-14":"@San Jose Sharks","2017-01-15":"@Anaheim Ducks","2017-01-17":"Ottawa Senators","2017-01-19":"Washington Capitals","2017-01-21":"@Winnipeg Jets","2017-01-24":"@Pittsburgh Penguins","2017-01-26":"@Minnesota Wild","2017-01-31":"Winnipeg Jets","2017-02-02":"Toronto Maple Leafs","2017-02-04":"Pittsburgh Penguins","2017-02-06":"@Philadelphia Flyers","2017-02-07":"@Ottawa Senators","2017-02-09":"@Toronto Maple Leafs","2017-02-11":"@Montreal Canadiens","2017-02-15":"@Detroit Red Wings","2017-02-16":"Vancouver Canucks","2017-02-18":"@Buffalo Sabres","2017-02-20":"Florida Panthers","2017-02-26":"@Chicago Blackhawks","2017-02-28":"Edmonton Oilers","2017-03-03":"@Winnipeg Jets","2017-03-05":"@Colorado Avalanche","2017-03-07":"@Minnesota Wild","2017-03-10":"Anaheim Ducks","2017-03-11":"New York Islanders","2017-03-13":"@Los Angeles Kings","2017-03-15":"@Anaheim Ducks","2017-03-16":"@San Jose Sharks","2017-03-18":"@Arizona Coyotes","2017-03-21":"@Colorado Avalanche","2017-03-23":"Vancouver Canucks","2017-03-25":"Calgary Flames","2017-03-27":"Arizona Coyotes","2017-03-29":"@Arizona Coyotes","2017-03-31":"@Colorado Avalanche","2017-04-02":"Nashville Predators","2017-04-04":"Winnipeg Jets","2017-04-06":"@Florida Panthers","2017-04-08":"@Carolina Hurricanes","2017-04-09":"Colorado Avalanche"},"Chicago Blackhawks":{"2016-10-12":"St. Louis Blues","2016-10-14":"@Nashville Predators","2016-10-15":"Nashville Predators","2016-10-18":"Philadelphia Flyers","2016-10-21":"@Columbus Blue Jackets","2016-10-22":"Toronto Maple Leafs","2016-10-24":"Calgary Flames","2016-10-28":"@New Jersey Devils","2016-10-30":"Los Angeles Kings","2016-11-01":"Calgary Flames","2016-11-03":"Colorado Avalanche","2016-11-05":"@Dallas Stars","2016-11-06":"Dallas Stars","2016-11-09":"@St. Louis Blues","2016-11-11":"Washington Capitals","2016-11-13":"Montreal Canadiens","2016-11-15":"@Winnipeg Jets","2016-11-18":"@Calgary Flames","2016-11-19":"@Vancouver Canucks","2016-11-21":"@Edmonton Oilers","2016-11-23":"@San Jose Sharks","2016-11-25":"@Anaheim Ducks","2016-11-26":"@Los Angeles Kings","2016-11-29":"Florida Panthers","2016-12-01":"New Jersey Devils","2016-12-03":"@Philadelphia Flyers","2016-12-04":"Winnipeg Jets","2016-12-06":"Arizona Coyotes","2016-12-09":"New York Rangers","2016-12-11":"Dallas Stars","2016-12-13":"@New York Rangers","2016-12-15":"@New York Islanders","2016-12-17":"@St. Louis Blues","2016-12-18":"San Jose Sharks","2016-12-20":"Ottawa Senators","2016-12-23":"Colorado Avalanche","2016-12-27":"Winnipeg Jets","2016-12-29":"@Nashville Predators","2016-12-30":"@Carolina Hurricanes","2017-01-02":"@St. Louis Blues","2017-01-05":"Buffalo Sabres","2017-01-06":"Carolina Hurricanes","2017-01-08":"Nashville Predators","2017-01-10":"Detroit Red Wings","2017-01-13":"@Washington Capitals","2017-01-15":"Minnesota Wild","2017-01-17":"@Colorado Avalanche","2017-01-20":"@Boston Bruins","2017-01-22":"Vancouver Canucks","2017-01-24":"Tampa Bay Lightning","2017-01-26":"Winnipeg Jets","2017-01-31":"@San Jose Sharks","2017-02-02":"@Arizona Coyotes","2017-02-04":"@Dallas Stars","2017-02-08":"@Minnesota Wild","2017-02-10":"@Winnipeg Jets","2017-02-11":"@Edmonton Oilers","2017-02-18":"Edmonton Oilers","2017-02-19":"@Buffalo Sabres","2017-02-21":"@Minnesota Wild","2017-02-23":"Arizona Coyotes","2017-02-26":"St. Louis Blues","2017-03-01":"Pittsburgh Penguins","2017-03-03":"New York Islanders","2017-03-04":"@Nashville Predators","2017-03-09":"Anaheim Ducks","2017-03-10":"@Detroit Red Wings","2017-03-12":"Minnesota Wild","2017-03-14":"@Montreal Canadiens","2017-03-16":"@Ottawa Senators","2017-03-18":"@Toronto Maple Leafs","2017-03-19":"Colorado Avalanche","2017-03-21":"Vancouver Canucks","2017-03-23":"Dallas Stars","2017-03-25":"@Florida Panthers","2017-03-27":"@Tampa Bay Lightning","2017-03-29":"@Pittsburgh Penguins","2017-03-31":"Columbus Blue Jackets","2017-04-02":"Boston Bruins","2017-04-04":"@Colorado Avalanche","2017-04-06":"@Anaheim Ducks","2017-04-08":"@Los Angeles Kings"},"Los Angeles Kings":{"2016-10-12":"@San Jose Sharks","2016-10-14":"Philadelphia Flyers","2016-10-18":"@Minnesota Wild","2016-10-20":"@Dallas Stars","2016-10-22":"Vancouver Canucks","2016-10-25":"Columbus Blue Jackets","2016-10-27":"Nashville Predators","2016-10-29":"@St. Louis Blues","2016-10-30":"@Chicago Blackhawks","2016-11-01":"Anaheim Ducks","2016-11-03":"Pittsburgh Penguins","2016-11-05":"Calgary Flames","2016-11-08":"@Toronto Maple Leafs","2016-11-10":"@Montreal Canadiens","2016-11-11":"@Ottawa Senators","2016-11-13":"@Winnipeg Jets","2016-11-15":"@Colorado Avalanche","2016-11-17":"Edmonton Oilers","2016-11-19":"New Jersey Devils","2016-11-20":"@Anaheim Ducks","2016-11-23":"New York Islanders","2016-11-26":"Chicago Blackhawks","2016-11-30":"San Jose Sharks","2016-12-01":"@Arizona Coyotes","2016-12-04":"Montreal Canadiens","2016-12-08":"Carolina Hurricanes","2016-12-10":"Ottawa Senators","2016-12-13":"@Buffalo Sabres","2016-12-15":"@Detroit Red Wings","2016-12-16":"@Pittsburgh Penguins","2016-12-18":"@Boston Bruins","2016-12-20":"@Columbus Blue Jackets","2016-12-22":"@Nashville Predators","2016-12-23":"@Dallas Stars","2016-12-28":"@Vancouver Canucks","2016-12-29":"@Edmonton Oilers","2016-12-31":"San Jose Sharks","2017-01-03":"@San Jose Sharks","2017-01-05":"Detroit Red Wings","2017-01-07":"Minnesota Wild","2017-01-09":"Dallas Stars","2017-01-12":"St. Louis Blues","2017-01-14":"Winnipeg Jets","2017-01-16":"Tampa Bay Lightning","2017-01-18":"San Jose Sharks","2017-01-21":"@New York Islanders","2017-01-23":"@New York Rangers","2017-01-24":"@New Jersey Devils","2017-01-26":"@Carolina Hurricanes","2017-01-31":"@Arizona Coyotes","2017-02-01":"Colorado Avalanche","2017-02-04":"@Philadelphia Flyers","2017-02-05":"@Washington Capitals","2017-02-07":"@Tampa Bay Lightning","2017-02-09":"@Florida Panthers","2017-02-16":"Arizona Coyotes","2017-02-18":"Florida Panthers","2017-02-19":"@Anaheim Ducks","2017-02-21":"@Colorado Avalanche","2017-02-23":"Boston Bruins","2017-02-25":"Anaheim Ducks","2017-02-27":"@Minnesota Wild","2017-02-28":"@Calgary Flames","2017-03-02":"Toronto Maple Leafs","2017-03-04":"Vancouver Canucks","2017-03-09":"Nashville Predators","2017-03-11":"Washington Capitals","2017-03-13":"St. Louis Blues","2017-03-14":"Arizona Coyotes","2017-03-16":"Buffalo Sabres","2017-03-19":"@Calgary Flames","2017-03-20":"@Edmonton Oilers","2017-03-23":"Winnipeg Jets","2017-03-25":"New York Rangers","2017-03-28":"@Edmonton Oilers","2017-03-29":"@Calgary Flames","2017-03-31":"@Vancouver Canucks","2017-04-02":"Arizona Coyotes","2017-04-04":"Edmonton Oilers","2017-04-06":"Calgary Flames","2017-04-08":"Chicago Blackhawks","2017-04-09":"@Anaheim Ducks"},"San Jose Sharks":{"2016-10-12":"Los Angeles Kings","2016-10-15":"@Columbus Blue Jackets","2016-10-17":"@New York Rangers","2016-10-18":"@New York Islanders","2016-10-20":"@Pittsburgh Penguins","2016-10-22":"@Detroit Red Wings","2016-10-25":"Anaheim Ducks","2016-10-27":"Columbus Blue Jackets","2016-10-29":"Nashville Predators","2016-11-01":"@Arizona Coyotes","2016-11-03":"Calgary Flames","2016-11-05":"Pittsburgh Penguins","2016-11-08":"@Washington Capitals","2016-11-10":"@Florida Panthers","2016-11-12":"@Tampa Bay Lightning","2016-11-15":"@Carolina Hurricanes","2016-11-17":"@St. Louis Blues","2016-11-19":"@Arizona Coyotes","2016-11-21":"New Jersey Devils","2016-11-23":"Chicago Blackhawks","2016-11-25":"New York Islanders","2016-11-26":"Anaheim Ducks","2016-11-29":"Arizona Coyotes","2016-11-30":"@Los Angeles Kings","2016-12-02":"Montreal Canadiens","2016-12-07":"Ottawa Senators","2016-12-09":"@Anaheim Ducks","2016-12-10":"Carolina Hurricanes","2016-12-13":"@Toronto Maple Leafs","2016-12-14":"@Ottawa Senators","2016-12-16":"@Montreal Canadiens","2016-12-18":"@Chicago Blackhawks","2016-12-20":"Calgary Flames","2016-12-23":"Edmonton Oilers","2016-12-27":"@Anaheim Ducks","2016-12-30":"Philadelphia Flyers","2016-12-31":"@Los Angeles Kings","2017-01-03":"Los Angeles Kings","2017-01-05":"Minnesota Wild","2017-01-07":"Detroit Red Wings","2017-01-10":"@Edmonton Oilers","2017-01-11":"@Calgary Flames","2017-01-14":"St. Louis Blues","2017-01-16":"Winnipeg Jets","2017-01-18":"@Los Angeles Kings","2017-01-19":"Tampa Bay Lightning","2017-01-21":"Colorado Avalanche","2017-01-23":"@Colorado Avalanche","2017-01-24":"@Winnipeg Jets","2017-01-26":"Edmonton Oilers","2017-01-31":"Chicago Blackhawks","2017-02-02":"@Vancouver Canucks","2017-02-04":"Arizona Coyotes","2017-02-07":"@Buffalo Sabres","2017-02-09":"@Boston Bruins","2017-02-11":"@Philadelphia Flyers","2017-02-12":"@New Jersey Devils","2017-02-15":"Florida Panthers","2017-02-18":"@Arizona Coyotes","2017-02-19":"Boston Bruins","2017-02-25":"@Vancouver Canucks","2017-02-28":"Toronto Maple Leafs","2017-03-02":"Vancouver Canucks","2017-03-05":"@Minnesota Wild","2017-03-06":"@Winnipeg Jets","2017-03-09":"Washington Capitals","2017-03-11":"Nashville Predators","2017-03-12":"Dallas Stars","2017-03-14":"Buffalo Sabres","2017-03-16":"St. Louis Blues","2017-03-18":"Anaheim Ducks","2017-03-20":"@Dallas Stars","2017-03-21":"@Minnesota Wild","2017-03-24":"@Dallas Stars","2017-03-25":"@Nashville Predators","2017-03-28":"New York Rangers","2017-03-30":"@Edmonton Oilers","2017-03-31":"@Calgary Flames","2017-04-02":"@Vancouver Canucks","2017-04-04":"Vancouver Canucks","2017-04-06":"Edmonton Oilers","2017-04-08":"Calgary Flames"},"Toronto Maple Leafs":{"2016-10-12":"@Ottawa Senators","2016-10-15":"Boston Bruins","2016-10-19":"@Winnipeg Jets","2016-10-20":"@Minnesota Wild","2016-10-22":"@Chicago Blackhawks","2016-10-25":"Tampa Bay Lightning","2016-10-27":"Florida Panthers","2016-10-29":"@Montreal Canadiens","2016-10-30":"@New York Islanders","2016-11-01":"Edmonton Oilers","2016-11-03":"@Buffalo Sabres","2016-11-05":"Vancouver Canucks","2016-11-08":"Los Angeles Kings","2016-11-11":"Philadelphia Flyers","2016-11-12":"@Pittsburgh Penguins","2016-11-15":"Nashville Predators","2016-11-17":"Florida Panthers","2016-11-19":"@Montreal Canadiens","2016-11-22":"Carolina Hurricanes","2016-11-23":"@New Jersey Devils","2016-11-26":"Washington Capitals","2016-11-29":"@Edmonton Oilers","2016-11-30":"@Calgary Flames","2016-12-03":"@Vancouver Canucks","2016-12-07":"Minnesota Wild","2016-12-10":"@Boston Bruins","2016-12-11":"Colorado Avalanche","2016-12-13":"San Jose Sharks","2016-12-15":"Arizona Coyotes","2016-12-17":"Pittsburgh Penguins","2016-12-19":"Anaheim Ducks","2016-12-22":"@Colorado Avalanche","2016-12-23":"@Arizona Coyotes","2016-12-28":"@Florida Panthers","2016-12-29":"@Tampa Bay Lightning","2017-01-01":"Detroit Red Wings","2017-01-03":"@Washington Capitals","2017-01-06":"@New Jersey Devils","2017-01-07":"Montreal Canadiens","2017-01-13":"@New York Rangers","2017-01-14":"@Ottawa Senators","2017-01-17":"Buffalo Sabres","2017-01-19":"New York Rangers","2017-01-21":"Ottawa Senators","2017-01-23":"Calgary Flames","2017-01-25":"@Detroit Red Wings","2017-01-26":"@Philadelphia Flyers","2017-01-31":"@Dallas Stars","2017-02-02":"@St. Louis Blues","2017-02-04":"@Boston Bruins","2017-02-06":"@New York Islanders","2017-02-07":"Dallas Stars","2017-02-09":"St. Louis Blues","2017-02-11":"Buffalo Sabres","2017-02-14":"New York Islanders","2017-02-15":"@Columbus Blue Jackets","2017-02-18":"Ottawa Senators","2017-02-19":"@Carolina Hurricanes","2017-02-21":"Winnipeg Jets","2017-02-23":"New York Rangers","2017-02-25":"Montreal Canadiens","2017-02-28":"@San Jose Sharks","2017-03-02":"@Los Angeles Kings","2017-03-03":"@Anaheim Ducks","2017-03-07":"Detroit Red Wings","2017-03-09":"Philadelphia Flyers","2017-03-11":"@Carolina Hurricanes","2017-03-14":"@Florida Panthers","2017-03-16":"@Tampa Bay Lightning","2017-03-18":"Chicago Blackhawks","2017-03-20":"Boston Bruins","2017-03-22":"@Columbus Blue Jackets","2017-03-23":"New Jersey Devils","2017-03-25":"@Buffalo Sabres","2017-03-28":"Florida Panthers","2017-03-30":"@Nashville Predators","2017-04-01":"@Detroit Red Wings","2017-04-03":"@Buffalo Sabres","2017-04-04":"Washington Capitals","2017-04-06":"Tampa Bay Lightning","2017-04-08":"Pittsburgh Penguins","2017-04-09":"Columbus Blue Jackets"},"Ottawa Senators":{"2016-10-12":"Toronto Maple Leafs","2016-10-15":"Montreal Canadiens","2016-10-17":"@Detroit Red Wings","2016-10-18":"Arizona Coyotes","2016-10-22":"Tampa Bay Lightning","2016-10-25":"@Vancouver Canucks","2016-10-28":"@Calgary Flames","2016-10-30":"@Edmonton Oilers","2016-11-01":"Carolina Hurricanes","2016-11-03":"Vancouver Canucks","2016-11-05":"Buffalo Sabres","2016-11-08":"@Nashville Predators","2016-11-09":"@Buffalo Sabres","2016-11-11":"Los Angeles Kings","2016-11-13":"Minnesota Wild","2016-11-15":"@Philadelphia Flyers","2016-11-17":"Nashville Predators","2016-11-19":"Florida Panthers","2016-11-22":"@Montreal Canadiens","2016-11-24":"Boston Bruins","2016-11-26":"Carolina Hurricanes","2016-11-27":"@New York Rangers","2016-11-29":"Buffalo Sabres","2016-12-01":"Philadelphia Flyers","2016-12-03":"Florida Panthers","2016-12-05":"@Pittsburgh Penguins","2016-12-07":"@San Jose Sharks","2016-12-10":"@Los Angeles Kings","2016-12-11":"@Anaheim Ducks","2016-12-14":"San Jose Sharks","2016-12-17":"New Jersey Devils","2016-12-18":"@New York Islanders","2016-12-20":"@Chicago Blackhawks","2016-12-22":"Anaheim Ducks","2016-12-27":"@New York Rangers","2016-12-29":"Detroit Red Wings","2017-01-01":"@Washington Capitals","2017-01-07":"Washington Capitals","2017-01-08":"Edmonton Oilers","2017-01-12":"Pittsburgh Penguins","2017-01-14":"Toronto Maple Leafs","2017-01-17":"@St. Louis Blues","2017-01-19":"@Columbus Blue Jackets","2017-01-21":"@Toronto Maple Leafs","2017-01-22":"Columbus Blue Jackets","2017-01-24":"Washington Capitals","2017-01-26":"Calgary Flames","2017-01-31":"@Florida Panthers","2017-02-02":"@Tampa Bay Lightning","2017-02-04":"@Buffalo Sabres","2017-02-07":"St. Louis Blues","2017-02-09":"Dallas Stars","2017-02-11":"New York Islanders","2017-02-14":"Buffalo Sabres","2017-02-16":"@New Jersey Devils","2017-02-18":"@Toronto Maple Leafs","2017-02-19":"Winnipeg Jets","2017-02-21":"@New Jersey Devils","2017-02-24":"@Carolina Hurricanes","2017-02-26":"@Florida Panthers","2017-02-27":"@Tampa Bay Lightning","2017-03-02":"Colorado Avalanche","2017-03-04":"Columbus Blue Jackets","2017-03-06":"Boston Bruins","2017-03-08":"@Dallas Stars","2017-03-09":"@Arizona Coyotes","2017-03-11":"@Colorado Avalanche","2017-03-14":"Tampa Bay Lightning","2017-03-16":"Chicago Blackhawks","2017-03-18":"Montreal Canadiens","2017-03-19":"@Montreal Canadiens","2017-03-21":"@Boston Bruins","2017-03-23":"Pittsburgh Penguins","2017-03-25":"@Montreal Canadiens","2017-03-28":"@Philadelphia Flyers","2017-03-30":"@Minnesota Wild","2017-04-01":"@Winnipeg Jets","2017-04-03":"@Detroit Red Wings","2017-04-04":"Detroit Red Wings","2017-04-06":"@Boston Bruins","2017-04-08":"New York Rangers","2017-04-09":"@New York Islanders"},"Anaheim Ducks":{"2016-10-13":"@Dallas Stars","2016-10-15":"@Pittsburgh Penguins","2016-10-16":"@New York Islanders","2016-10-18":"@New Jersey Devils","2016-10-20":"@Philadelphia Flyers","2016-10-23":"Vancouver Canucks","2016-10-25":"@San Jose Sharks","2016-10-26":"Nashville Predators","2016-10-28":"Columbus Blue Jackets","2016-11-01":"@Los Angeles Kings","2016-11-02":"Pittsburgh Penguins","2016-11-04":"Arizona Coyotes","2016-11-06":"Calgary Flames","2016-11-09":"@Columbus Blue Jackets","2016-11-10":"@Carolina Hurricanes","2016-11-12":"@Nashville Predators","2016-11-15":"Edmonton Oilers","2016-11-17":"New Jersey Devils","2016-11-20":"Los Angeles Kings","2016-11-22":"New York Islanders","2016-11-25":"Chicago Blackhawks","2016-11-26":"@San Jose Sharks","2016-11-29":"Montreal Canadiens","2016-12-01":"@Vancouver Canucks","2016-12-03":"@Edmonton Oilers","2016-12-04":"@Calgary Flames","2016-12-07":"Carolina Hurricanes","2016-12-09":"San Jose Sharks","2016-12-11":"Ottawa Senators","2016-12-13":"@Dallas Stars","2016-12-15":"@Boston Bruins","2016-12-17":"@Detroit Red Wings","2016-12-19":"@Toronto Maple Leafs","2016-12-20":"@Montreal Canadiens","2016-12-22":"@Ottawa Senators","2016-12-27":"San Jose Sharks","2016-12-29":"@Calgary Flames","2016-12-30":"@Vancouver Canucks","2017-01-01":"Philadelphia Flyers","2017-01-04":"Detroit Red Wings","2017-01-06":"Arizona Coyotes","2017-01-08":"Minnesota Wild","2017-01-10":"Dallas Stars","2017-01-12":"@Colorado Avalanche","2017-01-14":"@Arizona Coyotes","2017-01-15":"St. Louis Blues","2017-01-17":"Tampa Bay Lightning","2017-01-19":"Colorado Avalanche","2017-01-21":"@Minnesota Wild","2017-01-23":"@Winnipeg Jets","2017-01-25":"Edmonton Oilers","2017-01-31":"Colorado Avalanche","2017-02-03":"@Florida Panthers","2017-02-04":"@Tampa Bay Lightning","2017-02-07":"@New York Rangers","2017-02-09":"@Buffalo Sabres","2017-02-11":"@Washington Capitals","2017-02-14":"@Minnesota Wild","2017-02-17":"Florida Panthers","2017-02-19":"Los Angeles Kings","2017-02-20":"@Arizona Coyotes","2017-02-22":"Boston Bruins","2017-02-25":"@Los Angeles Kings","2017-03-03":"Toronto Maple Leafs","2017-03-05":"Vancouver Canucks","2017-03-07":"Nashville Predators","2017-03-09":"@Chicago Blackhawks","2017-03-10":"@St. Louis Blues","2017-03-12":"Washington Capitals","2017-03-15":"St. Louis Blues","2017-03-17":"Buffalo Sabres","2017-03-18":"@San Jose Sharks","2017-03-22":"Edmonton Oilers","2017-03-24":"Winnipeg Jets","2017-03-26":"New York Rangers","2017-03-28":"@Vancouver Canucks","2017-03-30":"@Winnipeg Jets","2017-04-01":"@Edmonton Oilers","2017-04-02":"@Calgary Flames","2017-04-04":"Calgary Flames","2017-04-06":"Chicago Blackhawks","2017-04-09":"Los Angeles Kings"},"Dallas Stars":{"2016-10-13":"Anaheim Ducks","2016-10-15":"@Colorado Avalanche","2016-10-18":"@Nashville Predators","2016-10-20":"Los Angeles Kings","2016-10-22":"Columbus Blue Jackets","2016-10-25":"Winnipeg Jets","2016-10-27":"@Winnipeg Jets","2016-10-29":"@Minnesota Wild","2016-11-01":"@Columbus Blue Jackets","2016-11-03":"St. Louis Blues","2016-11-05":"Chicago Blackhawks","2016-11-06":"@Chicago Blackhawks","2016-11-08":"@Winnipeg Jets","2016-11-10":"@Calgary Flames","2016-11-11":"@Edmonton Oilers","2016-11-13":"@Vancouver Canucks","2016-11-15":"New Jersey Devils","2016-11-17":"Colorado Avalanche","2016-11-19":"Edmonton Oilers","2016-11-21":"Minnesota Wild","2016-11-23":"@Nashville Predators","2016-11-25":"Vancouver Canucks","2016-11-28":"@St. Louis Blues","2016-11-29":"@Detroit Red Wings","2016-12-01":"@Pittsburgh Penguins","2016-12-03":"@Colorado Avalanche","2016-12-06":"Calgary Flames","2016-12-08":"Nashville Predators","2016-12-10":"@Philadelphia Flyers","2016-12-11":"@Chicago Blackhawks","2016-12-13":"Anaheim Ducks","2016-12-15":"New York Rangers","2016-12-17":"Philadelphia Flyers","2016-12-20":"St. Louis Blues","2016-12-23":"Los Angeles Kings","2016-12-27":"@Arizona Coyotes","2016-12-29":"Colorado Avalanche","2016-12-31":"Florida Panthers","2017-01-04":"Montreal Canadiens","2017-01-07":"@St. Louis Blues","2017-01-09":"@Los Angeles Kings","2017-01-10":"@Anaheim Ducks","2017-01-12":"Detroit Red Wings","2017-01-14":"Minnesota Wild","2017-01-16":"@Buffalo Sabres","2017-01-17":"@New York Rangers","2017-01-19":"@New York Islanders","2017-01-21":"Washington Capitals","2017-01-24":"Minnesota Wild","2017-01-26":"Buffalo Sabres","2017-01-31":"Toronto Maple Leafs","2017-02-02":"Winnipeg Jets","2017-02-04":"Chicago Blackhawks","2017-02-07":"@Toronto Maple Leafs","2017-02-09":"@Ottawa Senators","2017-02-11":"Carolina Hurricanes","2017-02-12":"@Nashville Predators","2017-02-14":"@Winnipeg Jets","2017-02-16":"@Minnesota Wild","2017-02-18":"Tampa Bay Lightning","2017-02-24":"Arizona Coyotes","2017-02-26":"Boston Bruins","2017-02-28":"Pittsburgh Penguins","2017-03-02":"New York Islanders","2017-03-04":"@Florida Panthers","2017-03-06":"@Washington Capitals","2017-03-08":"Ottawa Senators","2017-03-12":"@San Jose Sharks","2017-03-14":"@Edmonton Oilers","2017-03-16":"@Vancouver Canucks","2017-03-17":"@Calgary Flames","2017-03-20":"San Jose Sharks","2017-03-23":"@Chicago Blackhawks","2017-03-24":"San Jose Sharks","2017-03-26":"@New Jersey Devils","2017-03-28":"@Montreal Canadiens","2017-03-30":"@Boston Bruins","2017-04-01":"@Carolina Hurricanes","2017-04-02":"@Tampa Bay Lightning","2017-04-04":"Arizona Coyotes","2017-04-06":"Nashville Predators","2017-04-08":"Colorado Avalanche"},"Boston Bruins":{"2016-10-13":"@Columbus Blue Jackets","2016-10-15":"@Toronto Maple Leafs","2016-10-17":"@Winnipeg Jets","2016-10-20":"New Jersey Devils","2016-10-22":"Montreal Canadiens","2016-10-25":"Minnesota Wild","2016-10-26":"@New York Rangers","2016-10-29":"@Detroit Red Wings","2016-11-01":"@Florida Panthers","2016-11-03":"@Tampa Bay Lightning","2016-11-05":"New York Rangers","2016-11-07":"Buffalo Sabres","2016-11-08":"@Montreal Canadiens","2016-11-10":"Columbus Blue Jackets","2016-11-12":"@Arizona Coyotes","2016-11-13":"@Colorado Avalanche","2016-11-17":"@Minnesota Wild","2016-11-19":"Winnipeg Jets","2016-11-22":"St. Louis Blues","2016-11-24":"@Ottawa Senators","2016-11-25":"Calgary Flames","2016-11-27":"Tampa Bay Lightning","2016-11-29":"@Philadelphia Flyers","2016-12-01":"Carolina Hurricanes","2016-12-03":"@Buffalo Sabres","2016-12-05":"Florida Panthers","2016-12-07":"@Washington Capitals","2016-12-08":"Colorado Avalanche","2016-12-10":"Toronto Maple Leafs","2016-12-12":"@Montreal Canadiens","2016-12-14":"@Pittsburgh Penguins","2016-12-15":"Anaheim Ducks","2016-12-18":"Los Angeles Kings","2016-12-20":"New York Islanders","2016-12-22":"@Florida Panthers","2016-12-23":"@Carolina Hurricanes","2016-12-27":"@Columbus Blue Jackets","2016-12-29":"@Buffalo Sabres","2016-12-31":"Buffalo Sabres","2017-01-02":"@New Jersey Devils","2017-01-05":"Edmonton Oilers","2017-01-07":"@Florida Panthers","2017-01-08":"@Carolina Hurricanes","2017-01-10":"@St. Louis Blues","2017-01-12":"@Nashville Predators","2017-01-14":"Philadelphia Flyers","2017-01-16":"New York Islanders","2017-01-18":"@Detroit Red Wings","2017-01-20":"Chicago Blackhawks","2017-01-22":"@Pittsburgh Penguins","2017-01-24":"Detroit Red Wings","2017-01-26":"Pittsburgh Penguins","2017-01-31":"@Tampa Bay Lightning","2017-02-01":"@Washington Capitals","2017-02-04":"Toronto Maple Leafs","2017-02-09":"San Jose Sharks","2017-02-11":"Vancouver Canucks","2017-02-12":"Montreal Canadiens","2017-02-19":"@San Jose Sharks","2017-02-22":"@Anaheim Ducks","2017-02-23":"@Los Angeles Kings","2017-02-26":"@Dallas Stars","2017-02-28":"Arizona Coyotes","2017-03-02":"New York Rangers","2017-03-04":"New Jersey Devils","2017-03-06":"@Ottawa Senators","2017-03-08":"Detroit Red Wings","2017-03-11":"Philadelphia Flyers","2017-03-13":"@Vancouver Canucks","2017-03-15":"@Calgary Flames","2017-03-16":"@Edmonton Oilers","2017-03-20":"@Toronto Maple Leafs","2017-03-21":"Ottawa Senators","2017-03-23":"Tampa Bay Lightning","2017-03-25":"@New York Islanders","2017-03-28":"Nashville Predators","2017-03-30":"Dallas Stars","2017-04-01":"Florida Panthers","2017-04-02":"@Chicago Blackhawks","2017-04-04":"Tampa Bay Lightning","2017-04-06":"Ottawa Senators","2017-04-08":"Washington Capitals"},"Columbus Blue Jackets":{"2016-10-13":"Boston Bruins","2016-10-15":"San Jose Sharks","2016-10-21":"Chicago Blackhawks","2016-10-22":"@Dallas Stars","2016-10-25":"@Los Angeles Kings","2016-10-27":"@San Jose Sharks","2016-10-28":"@Anaheim Ducks","2016-11-01":"Dallas Stars","2016-11-04":"Montreal Canadiens","2016-11-05":"@St. Louis Blues","2016-11-09":"Anaheim Ducks","2016-11-10":"@Boston Bruins","2016-11-12":"St. Louis Blues","2016-11-15":"Washington Capitals","2016-11-18":"New York Rangers","2016-11-20":"@Washington Capitals","2016-11-21":"Colorado Avalanche","2016-11-23":"Calgary Flames","2016-11-25":"@Tampa Bay Lightning","2016-11-26":"@Florida Panthers","2016-11-29":"Tampa Bay Lightning","2016-12-01":"@Colorado Avalanche","2016-12-03":"@Arizona Coyotes","2016-12-05":"Arizona Coyotes","2016-12-09":"@Detroit Red Wings","2016-12-10":"New York Islanders","2016-12-13":"@Edmonton Oilers","2016-12-16":"@Calgary Flames","2016-12-18":"@Vancouver Canucks","2016-12-20":"Los Angeles Kings","2016-12-22":"Pittsburgh Penguins","2016-12-23":"Montreal Canadiens","2016-12-27":"Boston Bruins","2016-12-29":"@Winnipeg Jets","2016-12-31":"@Minnesota Wild","2017-01-03":"Edmonton Oilers","2017-01-05":"@Washington Capitals","2017-01-07":"New York Rangers","2017-01-08":"Philadelphia Flyers","2017-01-10":"@Carolina Hurricanes","2017-01-13":"@Tampa Bay Lightning","2017-01-14":"@Florida Panthers","2017-01-17":"Carolina Hurricanes","2017-01-19":"Ottawa Senators","2017-01-21":"Carolina Hurricanes","2017-01-22":"@Ottawa Senators","2017-01-24":"@New York Islanders","2017-01-26":"@Nashville Predators","2017-01-31":"@New York Rangers","2017-02-03":"@Pittsburgh Penguins","2017-02-04":"New Jersey Devils","2017-02-07":"@Detroit Red Wings","2017-02-09":"Vancouver Canucks","2017-02-11":"Detroit Red Wings","2017-02-13":"New York Rangers","2017-02-15":"Toronto Maple Leafs","2017-02-17":"Pittsburgh Penguins","2017-02-19":"Nashville Predators","2017-02-25":"New York Islanders","2017-02-26":"@New York Rangers","2017-02-28":"@Montreal Canadiens","2017-03-02":"Minnesota Wild","2017-03-04":"@Ottawa Senators","2017-03-05":"@New Jersey Devils","2017-03-07":"New Jersey Devils","2017-03-10":"Buffalo Sabres","2017-03-11":"@Buffalo Sabres","2017-03-13":"@Philadelphia Flyers","2017-03-16":"Florida Panthers","2017-03-18":"@New York Islanders","2017-03-19":"@New Jersey Devils","2017-03-22":"Toronto Maple Leafs","2017-03-23":"@Washington Capitals","2017-03-25":"Philadelphia Flyers","2017-03-28":"Buffalo Sabres","2017-03-30":"@Carolina Hurricanes","2017-03-31":"@Chicago Blackhawks","2017-04-02":"Washington Capitals","2017-04-04":"@Pittsburgh Penguins","2017-04-06":"Winnipeg Jets","2017-04-08":"@Philadelphia Flyers","2017-04-09":"@Toronto Maple Leafs"},"Montreal Canadiens":{"2016-10-13":"@Buffalo Sabres","2016-10-15":"@Ottawa Senators","2016-10-18":"Pittsburgh Penguins","2016-10-20":"Arizona Coyotes","2016-10-22":"@Boston Bruins","2016-10-24":"Philadelphia Flyers","2016-10-26":"@New York Islanders","2016-10-27":"Tampa Bay Lightning","2016-10-29":"Toronto Maple Leafs","2016-11-02":"Vancouver Canucks","2016-11-04":"@Columbus Blue Jackets","2016-11-05":"Philadelphia Flyers","2016-11-08":"Boston Bruins","2016-11-10":"Los Angeles Kings","2016-11-12":"Detroit Red Wings","2016-11-13":"@Chicago Blackhawks","2016-11-15":"Florida Panthers","2016-11-18":"@Carolina Hurricanes","2016-11-19":"Toronto Maple Leafs","2016-11-22":"Ottawa Senators","2016-11-24":"Carolina Hurricanes","2016-11-26":"@Detroit Red Wings","2016-11-29":"@Anaheim Ducks","2016-12-02":"@San Jose Sharks","2016-12-04":"@Los Angeles Kings","2016-12-06":"@St. Louis Blues","2016-12-08":"New Jersey Devils","2016-12-10":"Colorado Avalanche","2016-12-12":"Boston Bruins","2016-12-16":"San Jose Sharks","2016-12-17":"@Washington Capitals","2016-12-20":"Anaheim Ducks","2016-12-22":"Minnesota Wild","2016-12-23":"@Columbus Blue Jackets","2016-12-28":"@Tampa Bay Lightning","2016-12-29":"@Florida Panthers","2016-12-31":"@Pittsburgh Penguins","2017-01-03":"@Nashville Predators","2017-01-04":"@Dallas Stars","2017-01-07":"@Toronto Maple Leafs","2017-01-09":"Washington Capitals","2017-01-11":"@Winnipeg Jets","2017-01-12":"@Minnesota Wild","2017-01-14":"New York Rangers","2017-01-16":"@Detroit Red Wings","2017-01-18":"Pittsburgh Penguins","2017-01-20":"@New Jersey Devils","2017-01-21":"Buffalo Sabres","2017-01-24":"Calgary Flames","2017-01-26":"@New York Islanders","2017-01-31":"Buffalo Sabres","2017-02-02":"@Philadelphia Flyers","2017-02-04":"Washington Capitals","2017-02-05":"Edmonton Oilers","2017-02-07":"@Colorado Avalanche","2017-02-09":"@Arizona Coyotes","2017-02-11":"St. Louis Blues","2017-02-12":"@Boston Bruins","2017-02-18":"Winnipeg Jets","2017-02-21":"@New York Rangers","2017-02-23":"New York Islanders","2017-02-25":"@Toronto Maple Leafs","2017-02-27":"@New Jersey Devils","2017-02-28":"Columbus Blue Jackets","2017-03-02":"Nashville Predators","2017-03-04":"@New York Rangers","2017-03-07":"@Vancouver Canucks","2017-03-09":"@Calgary Flames","2017-03-12":"@Edmonton Oilers","2017-03-14":"Chicago Blackhawks","2017-03-18":"@Ottawa Senators","2017-03-19":"Ottawa Senators","2017-03-21":"Detroit Red Wings","2017-03-23":"Carolina Hurricanes","2017-03-25":"Ottawa Senators","2017-03-28":"Dallas Stars","2017-03-30":"Florida Panthers","2017-04-01":"@Tampa Bay Lightning","2017-04-03":"@Florida Panthers","2017-04-05":"@Buffalo Sabres","2017-04-07":"Tampa Bay Lightning","2017-04-08":"@Detroit Red Wings"},"Buffalo Sabres":{"2016-10-13":"Montreal Canadiens","2016-10-16":"@Edmonton Oilers","2016-10-18":"@Calgary Flames","2016-10-20":"@Vancouver Canucks","2016-10-25":"@Philadelphia Flyers","2016-10-27":"Minnesota Wild","2016-10-29":"Florida Panthers","2016-10-30":"@Winnipeg Jets","2016-11-01":"@Minnesota Wild","2016-11-03":"Toronto Maple Leafs","2016-11-05":"@Ottawa Senators","2016-11-07":"@Boston Bruins","2016-11-09":"Ottawa Senators","2016-11-11":"New Jersey Devils","2016-11-12":"@New Jersey Devils","2016-11-15":"@St. Louis Blues","2016-11-17":"Tampa Bay Lightning","2016-11-19":"Pittsburgh Penguins","2016-11-21":"Calgary Flames","2016-11-23":"Detroit Red Wings","2016-11-25":"@Washington Capitals","2016-11-29":"@Ottawa Senators","2016-12-01":"New York Rangers","2016-12-03":"Boston Bruins","2016-12-05":"@Washington Capitals","2016-12-06":"Edmonton Oilers","2016-12-09":"Washington Capitals","2016-12-13":"Los Angeles Kings","2016-12-16":"New York Islanders","2016-12-17":"@Carolina Hurricanes","2016-12-20":"@Florida Panthers","2016-12-22":"Carolina Hurricanes","2016-12-23":"@New York Islanders","2016-12-27":"@Detroit Red Wings","2016-12-29":"Boston Bruins","2016-12-31":"@Boston Bruins","2017-01-03":"@New York Rangers","2017-01-05":"@Chicago Blackhawks","2017-01-07":"Winnipeg Jets","2017-01-10":"Philadelphia Flyers","2017-01-12":"@Tampa Bay Lightning","2017-01-13":"@Carolina Hurricanes","2017-01-16":"Dallas Stars","2017-01-17":"@Toronto Maple Leafs","2017-01-20":"Detroit Red Wings","2017-01-21":"@Montreal Canadiens","2017-01-24":"@Nashville Predators","2017-01-26":"@Dallas Stars","2017-01-31":"@Montreal Canadiens","2017-02-02":"New York Rangers","2017-02-04":"Ottawa Senators","2017-02-06":"@New Jersey Devils","2017-02-07":"San Jose Sharks","2017-02-09":"Anaheim Ducks","2017-02-11":"@Toronto Maple Leafs","2017-02-12":"Vancouver Canucks","2017-02-14":"@Ottawa Senators","2017-02-16":"Colorado Avalanche","2017-02-18":"St. Louis Blues","2017-02-19":"Chicago Blackhawks","2017-02-25":"@Colorado Avalanche","2017-02-26":"@Arizona Coyotes","2017-02-28":"Nashville Predators","2017-03-02":"Arizona Coyotes","2017-03-04":"Tampa Bay Lightning","2017-03-05":"@Pittsburgh Penguins","2017-03-07":"Philadelphia Flyers","2017-03-10":"@Columbus Blue Jackets","2017-03-11":"Columbus Blue Jackets","2017-03-14":"@San Jose Sharks","2017-03-16":"@Los Angeles Kings","2017-03-17":"@Anaheim Ducks","2017-03-20":"@Detroit Red Wings","2017-03-21":"Pittsburgh Penguins","2017-03-25":"Toronto Maple Leafs","2017-03-27":"Florida Panthers","2017-03-28":"@Columbus Blue Jackets","2017-04-02":"New York Islanders","2017-04-03":"Toronto Maple Leafs","2017-04-05":"Montreal Canadiens","2017-04-08":"@Florida Panthers","2017-04-09":"@Tampa Bay Lightning"},"Carolina Hurricanes":{"2016-10-13":"@Winnipeg Jets","2016-10-16":"@Vancouver Canucks","2016-10-18":"@Edmonton Oilers","2016-10-20":"@Calgary Flames","2016-10-22":"@Philadelphia Flyers","2016-10-25":"@Detroit Red Wings","2016-10-28":"New York Rangers","2016-10-30":"Philadelphia Flyers","2016-11-01":"@Ottawa Senators","2016-11-05":"@Nashville Predators","2016-11-06":"New Jersey Devils","2016-11-08":"@New Jersey Devils","2016-11-10":"Anaheim Ducks","2016-11-12":"Washington Capitals","2016-11-15":"San Jose Sharks","2016-11-18":"Montreal Canadiens","2016-11-20":"Winnipeg Jets","2016-11-22":"@Toronto Maple Leafs","2016-11-24":"@Montreal Canadiens","2016-11-26":"@Ottawa Senators","2016-11-27":"Florida Panthers","2016-11-29":"@New York Rangers","2016-12-01":"@Boston Bruins","2016-12-03":"@New York Rangers","2016-12-04":"Tampa Bay Lightning","2016-12-07":"@Anaheim Ducks","2016-12-08":"@Los Angeles Kings","2016-12-10":"@San Jose Sharks","2016-12-13":"Vancouver Canucks","2016-12-16":"Washington Capitals","2016-12-17":"Buffalo Sabres","2016-12-19":"Detroit Red Wings","2016-12-22":"@Buffalo Sabres","2016-12-23":"Boston Bruins","2016-12-28":"@Pittsburgh Penguins","2016-12-30":"Chicago Blackhawks","2016-12-31":"@Tampa Bay Lightning","2017-01-03":"New Jersey Devils","2017-01-05":"@St. Louis Blues","2017-01-06":"@Chicago Blackhawks","2017-01-08":"Boston Bruins","2017-01-10":"Columbus Blue Jackets","2017-01-13":"Buffalo Sabres","2017-01-14":"New York Islanders","2017-01-17":"@Columbus Blue Jackets","2017-01-20":"Pittsburgh Penguins","2017-01-21":"@Columbus Blue Jackets","2017-01-23":"@Washington Capitals","2017-01-26":"Los Angeles Kings","2017-01-31":"Philadelphia Flyers","2017-02-03":"Edmonton Oilers","2017-02-04":"@New York Islanders","2017-02-07":"@Washington Capitals","2017-02-11":"@Dallas Stars","2017-02-17":"Colorado Avalanche","2017-02-19":"Toronto Maple Leafs","2017-02-21":"Pittsburgh Penguins","2017-02-24":"Ottawa Senators","2017-02-26":"Calgary Flames","2017-02-28":"@Florida Panthers","2017-03-01":"@Tampa Bay Lightning","2017-03-03":"Arizona Coyotes","2017-03-05":"@Arizona Coyotes","2017-03-07":"@Colorado Avalanche","2017-03-09":"New York Rangers","2017-03-11":"Toronto Maple Leafs","2017-03-13":"@New York Islanders","2017-03-14":"New York Islanders","2017-03-16":"Minnesota Wild","2017-03-18":"Nashville Predators","2017-03-19":"@Philadelphia Flyers","2017-03-21":"@Florida Panthers","2017-03-23":"@Montreal Canadiens","2017-03-25":"@New Jersey Devils","2017-03-28":"Detroit Red Wings","2017-03-30":"Columbus Blue Jackets","2017-04-01":"Dallas Stars","2017-04-02":"@Pittsburgh Penguins","2017-04-04":"@Minnesota Wild","2017-04-06":"New York Islanders","2017-04-08":"St. Louis Blues","2017-04-09":"@Philadelphia Flyers"},"Winnipeg Jets":{"2016-10-13":"Carolina Hurricanes","2016-10-15":"@Minnesota Wild","2016-10-17":"Boston Bruins","2016-10-19":"Toronto Maple Leafs","2016-10-23":"Edmonton Oilers","2016-10-25":"@Dallas Stars","2016-10-27":"Dallas Stars","2016-10-28":"@Colorado Avalanche","2016-10-30":"Buffalo Sabres","2016-11-01":"Washington Capitals","2016-11-03":"@Washington Capitals","2016-11-04":"@Detroit Red Wings","2016-11-06":"@New York Rangers","2016-11-08":"Dallas Stars","2016-11-10":"@Arizona Coyotes","2016-11-11":"@Colorado Avalanche","2016-11-13":"Los Angeles Kings","2016-11-15":"Chicago Blackhawks","2016-11-17":"@Philadelphia Flyers","2016-11-19":"@Boston Bruins","2016-11-20":"@Carolina Hurricanes","2016-11-23":"@Minnesota Wild","2016-11-25":"@Nashville Predators","2016-11-27":"Nashville Predators","2016-11-29":"New Jersey Devils","2016-12-01":"Edmonton Oilers","2016-12-03":"@St. Louis Blues","2016-12-04":"@Chicago Blackhawks","2016-12-06":"Detroit Red Wings","2016-12-08":"New York Rangers","2016-12-10":"@Calgary Flames","2016-12-11":"@Edmonton Oilers","2016-12-15":"Florida Panthers","2016-12-18":"Colorado Avalanche","2016-12-20":"@Vancouver Canucks","2016-12-22":"@Vancouver Canucks","2016-12-27":"@Chicago Blackhawks","2016-12-29":"Columbus Blue Jackets","2016-12-31":"New York Islanders","2017-01-03":"@Tampa Bay Lightning","2017-01-04":"@Florida Panthers","2017-01-07":"@Buffalo Sabres","2017-01-09":"Calgary Flames","2017-01-11":"Montreal Canadiens","2017-01-13":"@Arizona Coyotes","2017-01-14":"@Los Angeles Kings","2017-01-16":"@San Jose Sharks","2017-01-18":"Arizona Coyotes","2017-01-21":"St. Louis Blues","2017-01-23":"Anaheim Ducks","2017-01-24":"San Jose Sharks","2017-01-26":"@Chicago Blackhawks","2017-01-31":"@St. Louis Blues","2017-02-02":"@Dallas Stars","2017-02-04":"@Colorado Avalanche","2017-02-07":"Minnesota Wild","2017-02-10":"Chicago Blackhawks","2017-02-11":"Tampa Bay Lightning","2017-02-14":"Dallas Stars","2017-02-16":"@Pittsburgh Penguins","2017-02-18":"@Montreal Canadiens","2017-02-19":"@Ottawa Senators","2017-02-21":"@Toronto Maple Leafs","2017-02-28":"Minnesota Wild","2017-03-03":"St. Louis Blues","2017-03-04":"Colorado Avalanche","2017-03-06":"San Jose Sharks","2017-03-08":"Pittsburgh Penguins","2017-03-11":"Calgary Flames","2017-03-13":"@Nashville Predators","2017-03-14":"@New Jersey Devils","2017-03-16":"@New York Islanders","2017-03-19":"Minnesota Wild","2017-03-21":"Philadelphia Flyers","2017-03-23":"@Los Angeles Kings","2017-03-24":"@Anaheim Ducks","2017-03-26":"Vancouver Canucks","2017-03-30":"Anaheim Ducks","2017-04-01":"Ottawa Senators","2017-04-04":"@St. Louis Blues","2017-04-06":"@Columbus Blue Jackets","2017-04-08":"Nashville Predators"},"Detroit Red Wings":{"2016-10-13":"@Tampa Bay Lightning","2016-10-15":"@Florida Panthers","2016-10-17":"Ottawa Senators","2016-10-19":"@New York Rangers","2016-10-21":"Nashville Predators","2016-10-22":"San Jose Sharks","2016-10-25":"Carolina Hurricanes","2016-10-27":"@St. Louis Blues","2016-10-29":"Boston Bruins","2016-10-30":"Florida Panthers","2016-11-02":"@Philadelphia Flyers","2016-11-04":"Winnipeg Jets","2016-11-06":"Edmonton Oilers","2016-11-08":"@Philadelphia Flyers","2016-11-10":"Vancouver Canucks","2016-11-12":"@Montreal Canadiens","2016-11-15":"Tampa Bay Lightning","2016-11-18":"@Washington Capitals","2016-11-20":"Calgary Flames","2016-11-23":"@Buffalo Sabres","2016-11-25":"@New Jersey Devils","2016-11-26":"Montreal Canadiens","2016-11-29":"Dallas Stars","2016-12-01":"Florida Panthers","2016-12-03":"@Pittsburgh Penguins","2016-12-04":"@New York Islanders","2016-12-06":"@Winnipeg Jets","2016-12-09":"Columbus Blue Jackets","2016-12-11":"Philadelphia Flyers","2016-12-13":"Arizona Coyotes","2016-12-15":"Los Angeles Kings","2016-12-17":"Anaheim Ducks","2016-12-19":"@Carolina Hurricanes","2016-12-20":"@Tampa Bay Lightning","2016-12-23":"@Florida Panthers","2016-12-27":"Buffalo Sabres","2016-12-29":"@Ottawa Senators","2017-01-01":"@Toronto Maple Leafs","2017-01-04":"@Anaheim Ducks","2017-01-05":"@Los Angeles Kings","2017-01-07":"@San Jose Sharks","2017-01-10":"@Chicago Blackhawks","2017-01-12":"@Dallas Stars","2017-01-14":"Pittsburgh Penguins","2017-01-16":"Montreal Canadiens","2017-01-18":"Boston Bruins","2017-01-20":"@Buffalo Sabres","2017-01-22":"New York Rangers","2017-01-24":"@Boston Bruins","2017-01-25":"Toronto Maple Leafs","2017-01-31":"New Jersey Devils","2017-02-03":"New York Islanders","2017-02-04":"@Nashville Predators","2017-02-07":"Columbus Blue Jackets","2017-02-09":"@Washington Capitals","2017-02-11":"@Columbus Blue Jackets","2017-02-12":"@Minnesota Wild","2017-02-15":"St. Louis Blues","2017-02-18":"Washington Capitals","2017-02-19":"@Pittsburgh Penguins","2017-02-21":"New York Islanders","2017-02-28":"@Vancouver Canucks","2017-03-03":"@Calgary Flames","2017-03-04":"@Edmonton Oilers","2017-03-07":"@Toronto Maple Leafs","2017-03-08":"@Boston Bruins","2017-03-10":"Chicago Blackhawks","2017-03-12":"New York Rangers","2017-03-15":"@Colorado Avalanche","2017-03-16":"@Arizona Coyotes","2017-03-18":"Colorado Avalanche","2017-03-20":"Buffalo Sabres","2017-03-21":"@Montreal Canadiens","2017-03-24":"Tampa Bay Lightning","2017-03-26":"Minnesota Wild","2017-03-28":"@Carolina Hurricanes","2017-03-30":"@Tampa Bay Lightning","2017-04-01":"Toronto Maple Leafs","2017-04-03":"Ottawa Senators","2017-04-04":"@Ottawa Senators","2017-04-08":"Montreal Canadiens","2017-04-09":"New Jersey Devils"},"Tampa Bay Lightning":{"2016-10-13":"Detroit Red Wings","2016-10-15":"New Jersey Devils","2016-10-18":"Florida Panthers","2016-10-20":"Colorado Avalanche","2016-10-22":"@Ottawa Senators","2016-10-25":"@Toronto Maple Leafs","2016-10-27":"@Montreal Canadiens","2016-10-29":"@New Jersey Devils","2016-10-30":"@New York Rangers","2016-11-01":"@New York Islanders","2016-11-03":"Boston Bruins","2016-11-05":"New Jersey Devils","2016-11-07":"@Florida Panthers","2016-11-10":"New York Islanders","2016-11-12":"San Jose Sharks","2016-11-14":"@New York Islanders","2016-11-15":"@Detroit Red Wings","2016-11-17":"@Buffalo Sabres","2016-11-19":"@Philadelphia Flyers","2016-11-21":"@Nashville Predators","2016-11-23":"Philadelphia Flyers","2016-11-25":"Columbus Blue Jackets","2016-11-27":"@Boston Bruins","2016-11-29":"@Columbus Blue Jackets","2016-12-01":"@St. Louis Blues","2016-12-03":"Washington Capitals","2016-12-04":"@Carolina Hurricanes","2016-12-08":"Vancouver Canucks","2016-12-10":"Pittsburgh Penguins","2016-12-14":"@Calgary Flames","2016-12-16":"@Vancouver Canucks","2016-12-17":"@Edmonton Oilers","2016-12-20":"Detroit Red Wings","2016-12-22":"St. Louis Blues","2016-12-23":"@Washington Capitals","2016-12-28":"Montreal Canadiens","2016-12-29":"Toronto Maple Leafs","2016-12-31":"Carolina Hurricanes","2017-01-03":"Winnipeg Jets","2017-01-05":"Nashville Predators","2017-01-07":"@Philadelphia Flyers","2017-01-08":"@Pittsburgh Penguins","2017-01-12":"Buffalo Sabres","2017-01-13":"Columbus Blue Jackets","2017-01-16":"@Los Angeles Kings","2017-01-17":"@Anaheim Ducks","2017-01-19":"@San Jose Sharks","2017-01-21":"@Arizona Coyotes","2017-01-24":"@Chicago Blackhawks","2017-01-26":"@Florida Panthers","2017-01-31":"Boston Bruins","2017-02-02":"Ottawa Senators","2017-02-04":"Anaheim Ducks","2017-02-07":"Los Angeles Kings","2017-02-10":"@Minnesota Wild","2017-02-11":"@Winnipeg Jets","2017-02-18":"@Dallas Stars","2017-02-19":"@Colorado Avalanche","2017-02-21":"Edmonton Oilers","2017-02-23":"Calgary Flames","2017-02-27":"Ottawa Senators","2017-03-01":"Carolina Hurricanes","2017-03-03":"@Pittsburgh Penguins","2017-03-04":"@Buffalo Sabres","2017-03-06":"New York Rangers","2017-03-09":"Minnesota Wild","2017-03-11":"Florida Panthers","2017-03-13":"@New York Rangers","2017-03-14":"@Ottawa Senators","2017-03-16":"Toronto Maple Leafs","2017-03-18":"Washington Capitals","2017-03-21":"Arizona Coyotes","2017-03-23":"@Boston Bruins","2017-03-24":"@Detroit Red Wings","2017-03-27":"Chicago Blackhawks","2017-03-30":"Detroit Red Wings","2017-04-01":"Montreal Canadiens","2017-04-02":"Dallas Stars","2017-04-04":"@Boston Bruins","2017-04-06":"@Toronto Maple Leafs","2017-04-07":"@Montreal Canadiens","2017-04-09":"Buffalo Sabres"},"New Jersey Devils":{"2016-10-13":"@Florida Panthers","2016-10-15":"@Tampa Bay Lightning","2016-10-18":"Anaheim Ducks","2016-10-20":"@Boston Bruins","2016-10-22":"Minnesota Wild","2016-10-25":"Arizona Coyotes","2016-10-28":"Chicago Blackhawks","2016-10-29":"Tampa Bay Lightning","2016-11-03":"@Florida Panthers","2016-11-05":"@Tampa Bay Lightning","2016-11-06":"@Carolina Hurricanes","2016-11-08":"Carolina Hurricanes","2016-11-11":"@Buffalo Sabres","2016-11-12":"Buffalo Sabres","2016-11-15":"@Dallas Stars","2016-11-17":"@Anaheim Ducks","2016-11-19":"@Los Angeles Kings","2016-11-21":"@San Jose Sharks","2016-11-23":"Toronto Maple Leafs","2016-11-25":"Detroit Red Wings","2016-11-26":"@Pittsburgh Penguins","2016-11-29":"@Winnipeg Jets","2016-12-01":"@Chicago Blackhawks","2016-12-03":"@Nashville Predators","2016-12-06":"Vancouver Canucks","2016-12-08":"@Montreal Canadiens","2016-12-09":"St. Louis Blues","2016-12-11":"@New York Rangers","2016-12-15":"@St. Louis Blues","2016-12-17":"@Ottawa Senators","2016-12-18":"@New York Rangers","2016-12-20":"Nashville Predators","2016-12-22":"Philadelphia Flyers","2016-12-23":"@Pittsburgh Penguins","2016-12-27":"Pittsburgh Penguins","2016-12-29":"@Washington Capitals","2016-12-31":"Washington Capitals","2017-01-02":"Boston Bruins","2017-01-03":"@Carolina Hurricanes","2017-01-06":"Toronto Maple Leafs","2017-01-07":"Edmonton Oilers","2017-01-09":"Florida Panthers","2017-01-12":"@Edmonton Oilers","2017-01-13":"@Calgary Flames","2017-01-15":"@Vancouver Canucks","2017-01-17":"@Minnesota Wild","2017-01-20":"Montreal Canadiens","2017-01-21":"@Philadelphia Flyers","2017-01-24":"Los Angeles Kings","2017-01-26":"Washington Capitals","2017-01-31":"@Detroit Red Wings","2017-02-03":"Calgary Flames","2017-02-04":"@Columbus Blue Jackets","2017-02-06":"Buffalo Sabres","2017-02-12":"San Jose Sharks","2017-02-14":"Colorado Avalanche","2017-02-16":"Ottawa Senators","2017-02-18":"New York Islanders","2017-02-19":"@New York Islanders","2017-02-21":"Ottawa Senators","2017-02-25":"New York Rangers","2017-02-27":"Montreal Canadiens","2017-03-02":"@Washington Capitals","2017-03-04":"@Boston Bruins","2017-03-05":"Columbus Blue Jackets","2017-03-07":"@Columbus Blue Jackets","2017-03-09":"@Colorado Avalanche","2017-03-11":"@Arizona Coyotes","2017-03-14":"Winnipeg Jets","2017-03-16":"Philadelphia Flyers","2017-03-17":"@Pittsburgh Penguins","2017-03-19":"Columbus Blue Jackets","2017-03-21":"New York Rangers","2017-03-23":"@Toronto Maple Leafs","2017-03-25":"Carolina Hurricanes","2017-03-26":"Dallas Stars","2017-03-31":"@New York Islanders","2017-04-01":"@Philadelphia Flyers","2017-04-04":"Philadelphia Flyers","2017-04-06":"Pittsburgh Penguins","2017-04-08":"New York Islanders","2017-04-09":"@Detroit Red Wings"},"Florida Panthers":{"2016-10-13":"New Jersey Devils","2016-10-15":"Detroit Red Wings","2016-10-18":"@Tampa Bay Lightning","2016-10-20":"Washington Capitals","2016-10-22":"Colorado Avalanche","2016-10-25":"@Pittsburgh Penguins","2016-10-27":"@Toronto Maple Leafs","2016-10-29":"@Buffalo Sabres","2016-10-30":"@Detroit Red Wings","2016-11-01":"Boston Bruins","2016-11-03":"New Jersey Devils","2016-11-05":"@Washington Capitals","2016-11-07":"Tampa Bay Lightning","2016-11-10":"San Jose Sharks","2016-11-12":"New York Islanders","2016-11-15":"@Montreal Canadiens","2016-11-17":"@Toronto Maple Leafs","2016-11-19":"@Ottawa Senators","2016-11-20":"@New York Rangers","2016-11-22":"Philadelphia Flyers","2016-11-26":"Columbus Blue Jackets","2016-11-27":"@Carolina Hurricanes","2016-11-29":"@Chicago Blackhawks","2016-12-01":"@Detroit Red Wings","2016-12-03":"@Ottawa Senators","2016-12-05":"@Boston Bruins","2016-12-06":"@Philadelphia Flyers","2016-12-08":"Pittsburgh Penguins","2016-12-10":"Vancouver Canucks","2016-12-13":"@Minnesota Wild","2016-12-15":"@Winnipeg Jets","2016-12-16":"@Colorado Avalanche","2016-12-20":"Buffalo Sabres","2016-12-22":"Boston Bruins","2016-12-23":"Detroit Red Wings","2016-12-28":"Toronto Maple Leafs","2016-12-29":"Montreal Canadiens","2016-12-31":"@Dallas Stars","2017-01-04":"Winnipeg Jets","2017-01-06":"Nashville Predators","2017-01-07":"Boston Bruins","2017-01-09":"@New Jersey Devils","2017-01-11":"@New York Islanders","2017-01-13":"New York Islanders","2017-01-14":"Columbus Blue Jackets","2017-01-17":"@Calgary Flames","2017-01-18":"@Edmonton Oilers","2017-01-20":"@Vancouver Canucks","2017-01-23":"@Arizona Coyotes","2017-01-26":"Tampa Bay Lightning","2017-01-31":"Ottawa Senators","2017-02-03":"Anaheim Ducks","2017-02-09":"Los Angeles Kings","2017-02-11":"@Nashville Predators","2017-02-15":"@San Jose Sharks","2017-02-17":"@Anaheim Ducks","2017-02-18":"@Los Angeles Kings","2017-02-20":"@St. Louis Blues","2017-02-22":"Edmonton Oilers","2017-02-24":"Calgary Flames","2017-02-26":"Ottawa Senators","2017-02-28":"Carolina Hurricanes","2017-03-02":"@Philadelphia Flyers","2017-03-04":"Dallas Stars","2017-03-07":"New York Rangers","2017-03-10":"Minnesota Wild","2017-03-11":"@Tampa Bay Lightning","2017-03-14":"Toronto Maple Leafs","2017-03-16":"@Columbus Blue Jackets","2017-03-17":"@New York Rangers","2017-03-19":"@Pittsburgh Penguins","2017-03-21":"Carolina Hurricanes","2017-03-23":"Arizona Coyotes","2017-03-25":"Chicago Blackhawks","2017-03-27":"@Buffalo Sabres","2017-03-28":"@Toronto Maple Leafs","2017-03-30":"@Montreal Canadiens","2017-04-01":"@Boston Bruins","2017-04-03":"Montreal Canadiens","2017-04-06":"St. Louis Blues","2017-04-08":"Buffalo Sabres","2017-04-09":"@Washington Capitals"},"Minnesota Wild":{"2016-10-13":"@St. Louis Blues","2016-10-15":"Winnipeg Jets","2016-10-18":"Los Angeles Kings","2016-10-20":"Toronto Maple Leafs","2016-10-22":"@New Jersey Devils","2016-10-23":"@New York Islanders","2016-10-25":"@Boston Bruins","2016-10-27":"@Buffalo Sabres","2016-10-29":"Dallas Stars","2016-11-01":"Buffalo Sabres","2016-11-05":"@Colorado Avalanche","2016-11-10":"@Pittsburgh Penguins","2016-11-12":"@Philadelphia Flyers","2016-11-13":"@Ottawa Senators","2016-11-15":"Calgary Flames","2016-11-17":"Boston Bruins","2016-11-19":"Colorado Avalanche","2016-11-21":"@Dallas Stars","2016-11-23":"Winnipeg Jets","2016-11-25":"Pittsburgh Penguins","2016-11-26":"@St. Louis Blues","2016-11-29":"@Vancouver Canucks","2016-12-02":"@Calgary Flames","2016-12-04":"@Edmonton Oilers","2016-12-07":"@Toronto Maple Leafs","2016-12-09":"Edmonton Oilers","2016-12-11":"St. Louis Blues","2016-12-13":"Florida Panthers","2016-12-15":"@Nashville Predators","2016-12-17":"Arizona Coyotes","2016-12-20":"Colorado Avalanche","2016-12-22":"@Montreal Canadiens","2016-12-23":"@New York Rangers","2016-12-27":"@Nashville Predators","2016-12-29":"New York Islanders","2016-12-31":"Columbus Blue Jackets","2017-01-05":"@San Jose Sharks","2017-01-07":"@Los Angeles Kings","2017-01-08":"@Anaheim Ducks","2017-01-12":"Montreal Canadiens","2017-01-14":"@Dallas Stars","2017-01-15":"@Chicago Blackhawks","2017-01-17":"New Jersey Devils","2017-01-19":"Arizona Coyotes","2017-01-21":"Anaheim Ducks","2017-01-22":"Nashville Predators","2017-01-24":"@Dallas Stars","2017-01-26":"St. Louis Blues","2017-01-31":"@Edmonton Oilers","2017-02-01":"@Calgary Flames","2017-02-04":"@Vancouver Canucks","2017-02-07":"@Winnipeg Jets","2017-02-08":"Chicago Blackhawks","2017-02-10":"Tampa Bay Lightning","2017-02-12":"Detroit Red Wings","2017-02-14":"Anaheim Ducks","2017-02-16":"Dallas Stars","2017-02-18":"Nashville Predators","2017-02-21":"Chicago Blackhawks","2017-02-27":"Los Angeles Kings","2017-02-28":"@Winnipeg Jets","2017-03-02":"@Columbus Blue Jackets","2017-03-05":"San Jose Sharks","2017-03-07":"St. Louis Blues","2017-03-09":"@Tampa Bay Lightning","2017-03-10":"@Florida Panthers","2017-03-12":"@Chicago Blackhawks","2017-03-14":"@Washington Capitals","2017-03-16":"@Carolina Hurricanes","2017-03-18":"New York Rangers","2017-03-19":"@Winnipeg Jets","2017-03-21":"San Jose Sharks","2017-03-23":"Philadelphia Flyers","2017-03-25":"Vancouver Canucks","2017-03-26":"@Detroit Red Wings","2017-03-28":"Washington Capitals","2017-03-30":"Ottawa Senators","2017-04-01":"@Nashville Predators","2017-04-02":"Colorado Avalanche","2017-04-04":"Carolina Hurricanes","2017-04-06":"@Colorado Avalanche","2017-04-08":"@Arizona Coyotes"},"New York Islanders":{"2016-10-13":"@New York Rangers","2016-10-15":"@Washington Capitals","2016-10-16":"Anaheim Ducks","2016-10-18":"San Jose Sharks","2016-10-21":"Arizona Coyotes","2016-10-23":"Minnesota Wild","2016-10-26":"Montreal Canadiens","2016-10-27":"@Pittsburgh Penguins","2016-10-30":"Toronto Maple Leafs","2016-11-01":"Tampa Bay Lightning","2016-11-03":"Philadelphia Flyers","2016-11-05":"Edmonton Oilers","2016-11-07":"Vancouver Canucks","2016-11-10":"@Tampa Bay Lightning","2016-11-12":"@Florida Panthers","2016-11-14":"Tampa Bay Lightning","2016-11-18":"Pittsburgh Penguins","2016-11-22":"@Anaheim Ducks","2016-11-23":"@Los Angeles Kings","2016-11-25":"@San Jose Sharks","2016-11-28":"Calgary Flames","2016-11-30":"Pittsburgh Penguins","2016-12-01":"@Washington Capitals","2016-12-04":"Detroit Red Wings","2016-12-06":"New York Rangers","2016-12-08":"St. Louis Blues","2016-12-10":"@Columbus Blue Jackets","2016-12-13":"Washington Capitals","2016-12-15":"Chicago Blackhawks","2016-12-16":"@Buffalo Sabres","2016-12-18":"Ottawa Senators","2016-12-20":"@Boston Bruins","2016-12-23":"Buffalo Sabres","2016-12-27":"Washington Capitals","2016-12-29":"@Minnesota Wild","2016-12-31":"@Winnipeg Jets","2017-01-06":"@Colorado Avalanche","2017-01-07":"@Arizona Coyotes","2017-01-11":"Florida Panthers","2017-01-13":"@Florida Panthers","2017-01-14":"@Carolina Hurricanes","2017-01-16":"@Boston Bruins","2017-01-19":"Dallas Stars","2017-01-21":"Los Angeles Kings","2017-01-22":"Philadelphia Flyers","2017-01-24":"Columbus Blue Jackets","2017-01-26":"Montreal Canadiens","2017-01-31":"Washington Capitals","2017-02-03":"@Detroit Red Wings","2017-02-04":"Carolina Hurricanes","2017-02-06":"Toronto Maple Leafs","2017-02-09":"@Philadelphia Flyers","2017-02-11":"@Ottawa Senators","2017-02-12":"Colorado Avalanche","2017-02-14":"@Toronto Maple Leafs","2017-02-16":"New York Rangers","2017-02-18":"@New Jersey Devils","2017-02-19":"New Jersey Devils","2017-02-21":"@Detroit Red Wings","2017-02-23":"@Montreal Canadiens","2017-02-25":"@Columbus Blue Jackets","2017-03-02":"@Dallas Stars","2017-03-03":"@Chicago Blackhawks","2017-03-05":"@Calgary Flames","2017-03-07":"@Edmonton Oilers","2017-03-09":"@Vancouver Canucks","2017-03-11":"@St. Louis Blues","2017-03-13":"Carolina Hurricanes","2017-03-14":"@Carolina Hurricanes","2017-03-16":"Winnipeg Jets","2017-03-18":"Columbus Blue Jackets","2017-03-22":"@New York Rangers","2017-03-24":"@Pittsburgh Penguins","2017-03-25":"Boston Bruins","2017-03-27":"Nashville Predators","2017-03-30":"@Philadelphia Flyers","2017-03-31":"New Jersey Devils","2017-04-02":"@Buffalo Sabres","2017-04-04":"@Nashville Predators","2017-04-06":"@Carolina Hurricanes","2017-04-08":"@New Jersey Devils","2017-04-09":"Ottawa Senators"},"New York Rangers":{"2016-10-13":"New York Islanders","2016-10-15":"@St. Louis Blues","2016-10-17":"San Jose Sharks","2016-10-19":"Detroit Red Wings","2016-10-22":"@Washington Capitals","2016-10-23":"Arizona Coyotes","2016-10-26":"Boston Bruins","2016-10-28":"@Carolina Hurricanes","2016-10-30":"Tampa Bay Lightning","2016-11-01":"St. Louis Blues","2016-11-03":"Edmonton Oilers","2016-11-05":"@Boston Bruins","2016-11-06":"Winnipeg Jets","2016-11-08":"Vancouver Canucks","2016-11-12":"@Calgary Flames","2016-11-13":"@Edmonton Oilers","2016-11-15":"@Vancouver Canucks","2016-11-18":"@Columbus Blue Jackets","2016-11-20":"Florida Panthers","2016-11-21":"@Pittsburgh Penguins","2016-11-23":"Pittsburgh Penguins","2016-11-25":"@Philadelphia Flyers","2016-11-27":"Ottawa Senators","2016-11-29":"Carolina Hurricanes","2016-12-01":"@Buffalo Sabres","2016-12-03":"Carolina Hurricanes","2016-12-06":"@New York Islanders","2016-12-08":"@Winnipeg Jets","2016-12-09":"@Chicago Blackhawks","2016-12-11":"New Jersey Devils","2016-12-13":"Chicago Blackhawks","2016-12-15":"@Dallas Stars","2016-12-17":"@Nashville Predators","2016-12-18":"New Jersey Devils","2016-12-20":"@Pittsburgh Penguins","2016-12-23":"Minnesota Wild","2016-12-27":"Ottawa Senators","2016-12-29":"@Arizona Coyotes","2016-12-31":"@Colorado Avalanche","2017-01-03":"Buffalo Sabres","2017-01-04":"@Philadelphia Flyers","2017-01-07":"@Columbus Blue Jackets","2017-01-13":"Toronto Maple Leafs","2017-01-14":"@Montreal Canadiens","2017-01-17":"Dallas Stars","2017-01-19":"@Toronto Maple Leafs","2017-01-22":"@Detroit Red Wings","2017-01-23":"Los Angeles Kings","2017-01-25":"Philadelphia Flyers","2017-01-31":"Columbus Blue Jackets","2017-02-02":"@Buffalo Sabres","2017-02-05":"Calgary Flames","2017-02-07":"Anaheim Ducks","2017-02-09":"Nashville Predators","2017-02-11":"Colorado Avalanche","2017-02-13":"@Columbus Blue Jackets","2017-02-16":"@New York Islanders","2017-02-19":"Washington Capitals","2017-02-21":"Montreal Canadiens","2017-02-23":"@Toronto Maple Leafs","2017-02-25":"@New Jersey Devils","2017-02-26":"Columbus Blue Jackets","2017-02-28":"Washington Capitals","2017-03-02":"@Boston Bruins","2017-03-04":"Montreal Canadiens","2017-03-06":"@Tampa Bay Lightning","2017-03-07":"@Florida Panthers","2017-03-09":"@Carolina Hurricanes","2017-03-12":"@Detroit Red Wings","2017-03-13":"Tampa Bay Lightning","2017-03-17":"Florida Panthers","2017-03-18":"@Minnesota Wild","2017-03-21":"@New Jersey Devils","2017-03-22":"New York Islanders","2017-03-25":"@Los Angeles Kings","2017-03-26":"@Anaheim Ducks","2017-03-28":"@San Jose Sharks","2017-03-31":"Pittsburgh Penguins","2017-04-02":"Philadelphia Flyers","2017-04-05":"@Washington Capitals","2017-04-08":"@Ottawa Senators","2017-04-09":"Pittsburgh Penguins"},"Washington Capitals":{"2016-10-13":"@Pittsburgh Penguins","2016-10-15":"New York Islanders","2016-10-18":"Colorado Avalanche","2016-10-20":"@Florida Panthers","2016-10-22":"New York Rangers","2016-10-26":"@Edmonton Oilers","2016-10-29":"@Vancouver Canucks","2016-10-30":"@Calgary Flames","2016-11-01":"@Winnipeg Jets","2016-11-03":"Winnipeg Jets","2016-11-05":"Florida Panthers","2016-11-08":"San Jose Sharks","2016-11-11":"@Chicago Blackhawks","2016-11-12":"@Carolina Hurricanes","2016-11-15":"@Columbus Blue Jackets","2016-11-16":"Pittsburgh Penguins","2016-11-18":"Detroit Red Wings","2016-11-20":"Columbus Blue Jackets","2016-11-23":"St. Louis Blues","2016-11-25":"Buffalo Sabres","2016-11-26":"@Toronto Maple Leafs","2016-12-01":"New York Islanders","2016-12-03":"@Tampa Bay Lightning","2016-12-05":"Buffalo Sabres","2016-12-07":"Boston Bruins","2016-12-09":"@Buffalo Sabres","2016-12-11":"Vancouver Canucks","2016-12-13":"@New York Islanders","2016-12-16":"@Carolina Hurricanes","2016-12-17":"Montreal Canadiens","2016-12-21":"@Philadelphia Flyers","2016-12-23":"Tampa Bay Lightning","2016-12-27":"@New York Islanders","2016-12-29":"New Jersey Devils","2016-12-31":"@New Jersey Devils","2017-01-01":"Ottawa Senators","2017-01-03":"Toronto Maple Leafs","2017-01-05":"Columbus Blue Jackets","2017-01-07":"@Ottawa Senators","2017-01-09":"@Montreal Canadiens","2017-01-11":"Pittsburgh Penguins","2017-01-13":"Chicago Blackhawks","2017-01-15":"Philadelphia Flyers","2017-01-16":"@Pittsburgh Penguins","2017-01-19":"@St. Louis Blues","2017-01-21":"@Dallas Stars","2017-01-23":"Carolina Hurricanes","2017-01-24":"@Ottawa Senators","2017-01-26":"@New Jersey Devils","2017-01-31":"@New York Islanders","2017-02-01":"Boston Bruins","2017-02-04":"@Montreal Canadiens","2017-02-05":"Los Angeles Kings","2017-02-07":"Carolina Hurricanes","2017-02-09":"Detroit Red Wings","2017-02-11":"Anaheim Ducks","2017-02-18":"@Detroit Red Wings","2017-02-19":"@New York Rangers","2017-02-22":"@Philadelphia Flyers","2017-02-24":"Edmonton Oilers","2017-02-25":"@Nashville Predators","2017-02-28":"@New York Rangers","2017-03-02":"New Jersey Devils","2017-03-04":"Philadelphia Flyers","2017-03-06":"Dallas Stars","2017-03-09":"@San Jose Sharks","2017-03-11":"@Los Angeles Kings","2017-03-12":"@Anaheim Ducks","2017-03-14":"Minnesota Wild","2017-03-16":"Nashville Predators","2017-03-18":"@Tampa Bay Lightning","2017-03-21":"Calgary Flames","2017-03-23":"Columbus Blue Jackets","2017-03-25":"Arizona Coyotes","2017-03-28":"@Minnesota Wild","2017-03-29":"@Colorado Avalanche","2017-03-31":"@Arizona Coyotes","2017-04-02":"@Columbus Blue Jackets","2017-04-04":"@Toronto Maple Leafs","2017-04-05":"New York Rangers","2017-04-08":"@Boston Bruins","2017-04-09":"Florida Panthers"},"Pittsburgh Penguins":{"2016-10-13":"Washington Capitals","2016-10-15":"Anaheim Ducks","2016-10-17":"Colorado Avalanche","2016-10-18":"@Montreal Canadiens","2016-10-20":"San Jose Sharks","2016-10-22":"@Nashville Predators","2016-10-25":"Florida Panthers","2016-10-27":"New York Islanders","2016-10-29":"@Philadelphia Flyers","2016-11-02":"@Anaheim Ducks","2016-11-03":"@Los Angeles Kings","2016-11-05":"@San Jose Sharks","2016-11-08":"Edmonton Oilers","2016-11-10":"Minnesota Wild","2016-11-12":"Toronto Maple Leafs","2016-11-16":"@Washington Capitals","2016-11-18":"@New York Islanders","2016-11-19":"@Buffalo Sabres","2016-11-21":"New York Rangers","2016-11-23":"@New York Rangers","2016-11-25":"@Minnesota Wild","2016-11-26":"New Jersey Devils","2016-11-30":"@New York Islanders","2016-12-01":"Dallas Stars","2016-12-03":"Detroit Red Wings","2016-12-05":"Ottawa Senators","2016-12-08":"@Florida Panthers","2016-12-10":"@Tampa Bay Lightning","2016-12-12":"Arizona Coyotes","2016-12-14":"Boston Bruins","2016-12-16":"Los Angeles Kings","2016-12-17":"@Toronto Maple Leafs","2016-12-20":"New York Rangers","2016-12-22":"@Columbus Blue Jackets","2016-12-23":"New Jersey Devils","2016-12-27":"@New Jersey Devils","2016-12-28":"Carolina Hurricanes","2016-12-31":"Montreal Canadiens","2017-01-08":"Tampa Bay Lightning","2017-01-11":"@Washington Capitals","2017-01-12":"@Ottawa Senators","2017-01-14":"@Detroit Red Wings","2017-01-16":"Washington Capitals","2017-01-18":"@Montreal Canadiens","2017-01-20":"@Carolina Hurricanes","2017-01-22":"Boston Bruins","2017-01-24":"St. Louis Blues","2017-01-26":"@Boston Bruins","2017-01-31":"Nashville Predators","2017-02-03":"Columbus Blue Jackets","2017-02-04":"@St. Louis Blues","2017-02-07":"Calgary Flames","2017-02-09":"@Colorado Avalanche","2017-02-11":"@Arizona Coyotes","2017-02-14":"Vancouver Canucks","2017-02-16":"Winnipeg Jets","2017-02-17":"@Columbus Blue Jackets","2017-02-19":"Detroit Red Wings","2017-02-21":"@Carolina Hurricanes","2017-02-25":"Philadelphia Flyers","2017-02-28":"@Dallas Stars","2017-03-01":"@Chicago Blackhawks","2017-03-03":"Tampa Bay Lightning","2017-03-05":"Buffalo Sabres","2017-03-08":"@Winnipeg Jets","2017-03-10":"@Edmonton Oilers","2017-03-11":"@Vancouver Canucks","2017-03-13":"@Calgary Flames","2017-03-15":"@Philadelphia Flyers","2017-03-17":"New Jersey Devils","2017-03-19":"Florida Panthers","2017-03-21":"@Buffalo Sabres","2017-03-23":"@Ottawa Senators","2017-03-24":"New York Islanders","2017-03-26":"Philadelphia Flyers","2017-03-29":"Chicago Blackhawks","2017-03-31":"@New York Rangers","2017-04-02":"Carolina Hurricanes","2017-04-04":"Columbus Blue Jackets","2017-04-06":"@New Jersey Devils","2017-04-08":"@Toronto Maple Leafs","2017-04-09":"@New York Rangers"},"Edmonton Oilers":{"2016-10-14":"@Calgary Flames","2016-10-16":"Buffalo Sabres","2016-10-18":"Carolina Hurricanes","2016-10-20":"St. Louis Blues","2016-10-23":"@Winnipeg Jets","2016-10-26":"Washington Capitals","2016-10-28":"@Vancouver Canucks","2016-10-30":"Ottawa Senators","2016-11-01":"@Toronto Maple Leafs","2016-11-03":"@New York Rangers","2016-11-05":"@New York Islanders","2016-11-06":"@Detroit Red Wings","2016-11-08":"@Pittsburgh Penguins","2016-11-11":"Dallas Stars","2016-11-13":"New York Rangers","2016-11-15":"@Anaheim Ducks","2016-11-17":"@Los Angeles Kings","2016-11-19":"@Dallas Stars","2016-11-21":"Chicago Blackhawks","2016-11-23":"@Colorado Avalanche","2016-11-25":"@Arizona Coyotes","2016-11-27":"Arizona Coyotes","2016-11-29":"Toronto Maple Leafs","2016-12-01":"@Winnipeg Jets","2016-12-03":"Anaheim Ducks","2016-12-04":"Minnesota Wild","2016-12-06":"@Buffalo Sabres","2016-12-08":"@Philadelphia Flyers","2016-12-09":"@Minnesota Wild","2016-12-11":"Winnipeg Jets","2016-12-13":"Columbus Blue Jackets","2016-12-17":"Tampa Bay Lightning","2016-12-19":"@St. Louis Blues","2016-12-21":"@Arizona Coyotes","2016-12-23":"@San Jose Sharks","2016-12-29":"Los Angeles Kings","2016-12-31":"Vancouver Canucks","2017-01-03":"@Columbus Blue Jackets","2017-01-05":"@Boston Bruins","2017-01-07":"@New Jersey Devils","2017-01-08":"@Ottawa Senators","2017-01-10":"San Jose Sharks","2017-01-12":"New Jersey Devils","2017-01-14":"Calgary Flames","2017-01-16":"Arizona Coyotes","2017-01-18":"Florida Panthers","2017-01-20":"Nashville Predators","2017-01-21":"@Calgary Flames","2017-01-25":"@Anaheim Ducks","2017-01-26":"@San Jose Sharks","2017-01-31":"Minnesota Wild","2017-02-02":"@Nashville Predators","2017-02-03":"@Carolina Hurricanes","2017-02-05":"@Montreal Canadiens","2017-02-11":"Chicago Blackhawks","2017-02-14":"Arizona Coyotes","2017-02-16":"Philadelphia Flyers","2017-02-18":"@Chicago Blackhawks","2017-02-21":"@Tampa Bay Lightning","2017-02-22":"@Florida Panthers","2017-02-24":"@Washington Capitals","2017-02-26":"@Nashville Predators","2017-02-28":"@St. Louis Blues","2017-03-04":"Detroit Red Wings","2017-03-07":"New York Islanders","2017-03-10":"Pittsburgh Penguins","2017-03-12":"Montreal Canadiens","2017-03-14":"Dallas Stars","2017-03-16":"Boston Bruins","2017-03-18":"Vancouver Canucks","2017-03-20":"Los Angeles Kings","2017-03-22":"@Anaheim Ducks","2017-03-23":"@Colorado Avalanche","2017-03-25":"Colorado Avalanche","2017-03-28":"Los Angeles Kings","2017-03-30":"San Jose Sharks","2017-04-01":"Anaheim Ducks","2017-04-04":"@Los Angeles Kings","2017-04-06":"@San Jose Sharks","2017-04-08":"@Vancouver Canucks","2017-04-09":"Vancouver Canucks"},"Calgary Flames":{"2016-10-14":"Edmonton Oilers","2016-10-15":"@Vancouver Canucks","2016-10-18":"Buffalo Sabres","2016-10-20":"Carolina Hurricanes","2016-10-22":"St. Louis Blues","2016-10-24":"@Chicago Blackhawks","2016-10-25":"@St. Louis Blues","2016-10-28":"Ottawa Senators","2016-10-30":"Washington Capitals","2016-11-01":"@Chicago Blackhawks","2016-11-03":"@San Jose Sharks","2016-11-05":"@Los Angeles Kings","2016-11-06":"@Anaheim Ducks","2016-11-10":"Dallas Stars","2016-11-12":"New York Rangers","2016-11-15":"@Minnesota Wild","2016-11-16":"Arizona Coyotes","2016-11-18":"Chicago Blackhawks","2016-11-20":"@Detroit Red Wings","2016-11-21":"@Buffalo Sabres","2016-11-23":"@Columbus Blue Jackets","2016-11-25":"@Boston Bruins","2016-11-27":"@Philadelphia Flyers","2016-11-28":"@New York Islanders","2016-11-30":"Toronto Maple Leafs","2016-12-02":"Minnesota Wild","2016-12-04":"Anaheim Ducks","2016-12-06":"@Dallas Stars","2016-12-08":"@Arizona Coyotes","2016-12-10":"Winnipeg Jets","2016-12-14":"Tampa Bay Lightning","2016-12-16":"Columbus Blue Jackets","2016-12-19":"@Arizona Coyotes","2016-12-20":"@San Jose Sharks","2016-12-23":"Vancouver Canucks","2016-12-27":"@Colorado Avalanche","2016-12-29":"Anaheim Ducks","2016-12-31":"Arizona Coyotes","2017-01-04":"Colorado Avalanche","2017-01-06":"@Vancouver Canucks","2017-01-07":"Vancouver Canucks","2017-01-09":"@Winnipeg Jets","2017-01-11":"San Jose Sharks","2017-01-13":"New Jersey Devils","2017-01-14":"@Edmonton Oilers","2017-01-17":"Florida Panthers","2017-01-19":"Nashville Predators","2017-01-21":"Edmonton Oilers","2017-01-23":"@Toronto Maple Leafs","2017-01-24":"@Montreal Canadiens","2017-01-26":"@Ottawa Senators","2017-02-01":"Minnesota Wild","2017-02-03":"@New Jersey Devils","2017-02-05":"@New York Rangers","2017-02-07":"@Pittsburgh Penguins","2017-02-13":"Arizona Coyotes","2017-02-15":"Philadelphia Flyers","2017-02-18":"@Vancouver Canucks","2017-02-21":"@Nashville Predators","2017-02-23":"@Tampa Bay Lightning","2017-02-24":"@Florida Panthers","2017-02-26":"@Carolina Hurricanes","2017-02-28":"Los Angeles Kings","2017-03-03":"Detroit Red Wings","2017-03-05":"New York Islanders","2017-03-09":"Montreal Canadiens","2017-03-11":"@Winnipeg Jets","2017-03-13":"Pittsburgh Penguins","2017-03-15":"Boston Bruins","2017-03-17":"Dallas Stars","2017-03-19":"Los Angeles Kings","2017-03-21":"@Washington Capitals","2017-03-23":"@Nashville Predators","2017-03-25":"@St. Louis Blues","2017-03-27":"Colorado Avalanche","2017-03-29":"Los Angeles Kings","2017-03-31":"San Jose Sharks","2017-04-02":"Anaheim Ducks","2017-04-04":"@Anaheim Ducks","2017-04-06":"@Los Angeles Kings","2017-04-08":"@San Jose Sharks"},"Nashville Predators":{"2016-10-14":"Chicago Blackhawks","2016-10-15":"@Chicago Blackhawks","2016-10-18":"Dallas Stars","2016-10-21":"@Detroit Red Wings","2016-10-22":"Pittsburgh Penguins","2016-10-26":"@Anaheim Ducks","2016-10-27":"@Los Angeles Kings","2016-10-29":"@San Jose Sharks","2016-11-01":"@Colorado Avalanche","2016-11-03":"@Arizona Coyotes","2016-11-05":"Carolina Hurricanes","2016-11-08":"Ottawa Senators","2016-11-10":"St. Louis Blues","2016-11-12":"Anaheim Ducks","2016-11-15":"@Toronto Maple Leafs","2016-11-17":"@Ottawa Senators","2016-11-19":"@St. Louis Blues","2016-11-21":"Tampa Bay Lightning","2016-11-23":"Dallas Stars","2016-11-25":"Winnipeg Jets","2016-11-27":"@Winnipeg Jets","2016-11-29":"@Colorado Avalanche","2016-12-03":"New Jersey Devils","2016-12-04":"Philadelphia Flyers","2016-12-06":"Colorado Avalanche","2016-12-08":"@Dallas Stars","2016-12-10":"@Arizona Coyotes","2016-12-13":"St. Louis Blues","2016-12-15":"Minnesota Wild","2016-12-17":"New York Rangers","2016-12-19":"@Philadelphia Flyers","2016-12-20":"@New Jersey Devils","2016-12-22":"Los Angeles Kings","2016-12-27":"Minnesota Wild","2016-12-29":"Chicago Blackhawks","2016-12-30":"@St. Louis Blues","2017-01-03":"Montreal Canadiens","2017-01-05":"@Tampa Bay Lightning","2017-01-06":"@Florida Panthers","2017-01-08":"@Chicago Blackhawks","2017-01-10":"Vancouver Canucks","2017-01-12":"Boston Bruins","2017-01-14":"@Colorado Avalanche","2017-01-17":"@Vancouver Canucks","2017-01-19":"@Calgary Flames","2017-01-20":"@Edmonton Oilers","2017-01-22":"@Minnesota Wild","2017-01-24":"Buffalo Sabres","2017-01-26":"Columbus Blue Jackets","2017-01-31":"@Pittsburgh Penguins","2017-02-02":"Edmonton Oilers","2017-02-04":"Detroit Red Wings","2017-02-07":"Vancouver Canucks","2017-02-09":"@New York Rangers","2017-02-11":"Florida Panthers","2017-02-12":"Dallas Stars","2017-02-18":"@Minnesota Wild","2017-02-19":"@Columbus Blue Jackets","2017-02-21":"Calgary Flames","2017-02-23":"Colorado Avalanche","2017-02-25":"Washington Capitals","2017-02-26":"Edmonton Oilers","2017-02-28":"@Buffalo Sabres","2017-03-02":"@Montreal Canadiens","2017-03-04":"Chicago Blackhawks","2017-03-07":"@Anaheim Ducks","2017-03-09":"@Los Angeles Kings","2017-03-11":"@San Jose Sharks","2017-03-13":"Winnipeg Jets","2017-03-16":"@Washington Capitals","2017-03-18":"@Carolina Hurricanes","2017-03-20":"Arizona Coyotes","2017-03-23":"Calgary Flames","2017-03-25":"San Jose Sharks","2017-03-27":"@New York Islanders","2017-03-28":"@Boston Bruins","2017-03-30":"Toronto Maple Leafs","2017-04-01":"Minnesota Wild","2017-04-02":"@St. Louis Blues","2017-04-04":"New York Islanders","2017-04-06":"@Dallas Stars","2017-04-08":"@Winnipeg Jets"},"Philadelphia Flyers":{"2016-10-14":"@Los Angeles Kings","2016-10-15":"@Arizona Coyotes","2016-10-18":"@Chicago Blackhawks","2016-10-20":"Anaheim Ducks","2016-10-22":"Carolina Hurricanes","2016-10-24":"@Montreal Canadiens","2016-10-25":"Buffalo Sabres","2016-10-27":"Arizona Coyotes","2016-10-29":"Pittsburgh Penguins","2016-10-30":"@Carolina Hurricanes","2016-11-02":"Detroit Red Wings","2016-11-03":"@New York Islanders","2016-11-05":"@Montreal Canadiens","2016-11-08":"Detroit Red Wings","2016-11-11":"@Toronto Maple Leafs","2016-11-12":"Minnesota Wild","2016-11-15":"Ottawa Senators","2016-11-17":"Winnipeg Jets","2016-11-19":"Tampa Bay Lightning","2016-11-22":"@Florida Panthers","2016-11-23":"@Tampa Bay Lightning","2016-11-25":"New York Rangers","2016-11-27":"Calgary Flames","2016-11-29":"Boston Bruins","2016-12-01":"@Ottawa Senators","2016-12-03":"Chicago Blackhawks","2016-12-04":"@Nashville Predators","2016-12-06":"Florida Panthers","2016-12-08":"Edmonton Oilers","2016-12-10":"Dallas Stars","2016-12-11":"@Detroit Red Wings","2016-12-14":"@Colorado Avalanche","2016-12-17":"@Dallas Stars","2016-12-19":"Nashville Predators","2016-12-21":"Washington Capitals","2016-12-22":"@New Jersey Devils","2016-12-28":"@St. Louis Blues","2016-12-30":"@San Jose Sharks","2017-01-01":"@Anaheim Ducks","2017-01-04":"New York Rangers","2017-01-07":"Tampa Bay Lightning","2017-01-08":"@Columbus Blue Jackets","2017-01-10":"@Buffalo Sabres","2017-01-12":"Vancouver Canucks","2017-01-14":"@Boston Bruins","2017-01-15":"@Washington Capitals","2017-01-21":"New Jersey Devils","2017-01-22":"@New York Islanders","2017-01-25":"@New York Rangers","2017-01-26":"Toronto Maple Leafs","2017-01-31":"@Carolina Hurricanes","2017-02-02":"Montreal Canadiens","2017-02-04":"Los Angeles Kings","2017-02-06":"St. Louis Blues","2017-02-09":"New York Islanders","2017-02-11":"San Jose Sharks","2017-02-15":"@Calgary Flames","2017-02-16":"@Edmonton Oilers","2017-02-19":"@Vancouver Canucks","2017-02-22":"Washington Capitals","2017-02-25":"@Pittsburgh Penguins","2017-02-28":"Colorado Avalanche","2017-03-02":"Florida Panthers","2017-03-04":"@Washington Capitals","2017-03-07":"@Buffalo Sabres","2017-03-09":"@Toronto Maple Leafs","2017-03-11":"@Boston Bruins","2017-03-13":"Columbus Blue Jackets","2017-03-15":"Pittsburgh Penguins","2017-03-16":"@New Jersey Devils","2017-03-19":"Carolina Hurricanes","2017-03-21":"@Winnipeg Jets","2017-03-23":"@Minnesota Wild","2017-03-25":"@Columbus Blue Jackets","2017-03-26":"@Pittsburgh Penguins","2017-03-28":"Ottawa Senators","2017-03-30":"New York Islanders","2017-04-01":"New Jersey Devils","2017-04-02":"@New York Rangers","2017-04-04":"@New Jersey Devils","2017-04-08":"Columbus Blue Jackets","2017-04-09":"Carolina Hurricanes"},"Arizona Coyotes":{"2016-10-15":"Philadelphia Flyers","2016-10-18":"@Ottawa Senators","2016-10-20":"@Montreal Canadiens","2016-10-21":"@New York Islanders","2016-10-23":"@New York Rangers","2016-10-25":"@New Jersey Devils","2016-10-27":"@Philadelphia Flyers","2016-10-29":"Colorado Avalanche","2016-11-01":"San Jose Sharks","2016-11-03":"Nashville Predators","2016-11-04":"@Anaheim Ducks","2016-11-08":"@Colorado Avalanche","2016-11-10":"Winnipeg Jets","2016-11-12":"Boston Bruins","2016-11-16":"@Calgary Flames","2016-11-17":"@Vancouver Canucks","2016-11-19":"San Jose Sharks","2016-11-23":"Vancouver Canucks","2016-11-25":"Edmonton Oilers","2016-11-27":"@Edmonton Oilers","2016-11-29":"@San Jose Sharks","2016-12-01":"Los Angeles Kings","2016-12-03":"Columbus Blue Jackets","2016-12-05":"@Columbus Blue Jackets","2016-12-06":"@Chicago Blackhawks","2016-12-08":"Calgary Flames","2016-12-10":"Nashville Predators","2016-12-12":"@Pittsburgh Penguins","2016-12-13":"@Detroit Red Wings","2016-12-15":"@Toronto Maple Leafs","2016-12-17":"@Minnesota Wild","2016-12-19":"Calgary Flames","2016-12-21":"Edmonton Oilers","2016-12-23":"Toronto Maple Leafs","2016-12-27":"Dallas Stars","2016-12-29":"New York Rangers","2016-12-31":"@Calgary Flames","2017-01-04":"@Vancouver Canucks","2017-01-06":"@Anaheim Ducks","2017-01-07":"New York Islanders","2017-01-13":"Winnipeg Jets","2017-01-14":"Anaheim Ducks","2017-01-16":"@Edmonton Oilers","2017-01-18":"@Winnipeg Jets","2017-01-19":"@Minnesota Wild","2017-01-21":"Tampa Bay Lightning","2017-01-23":"Florida Panthers","2017-01-26":"Vancouver Canucks","2017-01-31":"Los Angeles Kings","2017-02-02":"Chicago Blackhawks","2017-02-04":"@San Jose Sharks","2017-02-09":"Montreal Canadiens","2017-02-11":"Pittsburgh Penguins","2017-02-13":"@Calgary Flames","2017-02-14":"@Edmonton Oilers","2017-02-16":"@Los Angeles Kings","2017-02-18":"San Jose Sharks","2017-02-20":"Anaheim Ducks","2017-02-23":"@Chicago Blackhawks","2017-02-24":"@Dallas Stars","2017-02-26":"Buffalo Sabres","2017-02-28":"@Boston Bruins","2017-03-02":"@Buffalo Sabres","2017-03-03":"@Carolina Hurricanes","2017-03-05":"Carolina Hurricanes","2017-03-09":"Ottawa Senators","2017-03-11":"New Jersey Devils","2017-03-13":"Colorado Avalanche","2017-03-14":"@Los Angeles Kings","2017-03-16":"Detroit Red Wings","2017-03-18":"St. Louis Blues","2017-03-20":"@Nashville Predators","2017-03-21":"@Tampa Bay Lightning","2017-03-23":"@Florida Panthers","2017-03-25":"@Washington Capitals","2017-03-27":"@St. Louis Blues","2017-03-29":"St. Louis Blues","2017-03-31":"Washington Capitals","2017-04-02":"@Los Angeles Kings","2017-04-04":"@Dallas Stars","2017-04-06":"Vancouver Canucks","2017-04-08":"Minnesota Wild"},"Vancouver Canucks":{"2016-10-15":"Calgary Flames","2016-10-16":"Carolina Hurricanes","2016-10-18":"St. Louis Blues","2016-10-20":"Buffalo Sabres","2016-10-22":"@Los Angeles Kings","2016-10-23":"@Anaheim Ducks","2016-10-25":"Ottawa Senators","2016-10-28":"Edmonton Oilers","2016-10-29":"Washington Capitals","2016-11-02":"@Montreal Canadiens","2016-11-03":"@Ottawa Senators","2016-11-05":"@Toronto Maple Leafs","2016-11-07":"@New York Islanders","2016-11-08":"@New York Rangers","2016-11-10":"@Detroit Red Wings","2016-11-13":"Dallas Stars","2016-11-15":"New York Rangers","2016-11-17":"Arizona Coyotes","2016-11-19":"Chicago Blackhawks","2016-11-23":"@Arizona Coyotes","2016-11-25":"@Dallas Stars","2016-11-26":"@Colorado Avalanche","2016-11-29":"Minnesota Wild","2016-12-01":"Anaheim Ducks","2016-12-03":"Toronto Maple Leafs","2016-12-06":"@New Jersey Devils","2016-12-08":"@Tampa Bay Lightning","2016-12-10":"@Florida Panthers","2016-12-11":"@Washington Capitals","2016-12-13":"@Carolina Hurricanes","2016-12-16":"Tampa Bay Lightning","2016-12-18":"Columbus Blue Jackets","2016-12-20":"Winnipeg Jets","2016-12-22":"Winnipeg Jets","2016-12-23":"@Calgary Flames","2016-12-28":"Los Angeles Kings","2016-12-30":"Anaheim Ducks","2016-12-31":"@Edmonton Oilers","2017-01-02":"Colorado Avalanche","2017-01-04":"Arizona Coyotes","2017-01-06":"Calgary Flames","2017-01-07":"@Calgary Flames","2017-01-10":"@Nashville Predators","2017-01-12":"@Philadelphia Flyers","2017-01-15":"New Jersey Devils","2017-01-17":"Nashville Predators","2017-01-20":"Florida Panthers","2017-01-22":"@Chicago Blackhawks","2017-01-25":"@Colorado Avalanche","2017-01-26":"@Arizona Coyotes","2017-02-02":"San Jose Sharks","2017-02-04":"Minnesota Wild","2017-02-07":"@Nashville Predators","2017-02-09":"@Columbus Blue Jackets","2017-02-11":"@Boston Bruins","2017-02-12":"@Buffalo Sabres","2017-02-14":"@Pittsburgh Penguins","2017-02-16":"@St. Louis Blues","2017-02-18":"Calgary Flames","2017-02-19":"Philadelphia Flyers","2017-02-25":"San Jose Sharks","2017-02-28":"Detroit Red Wings","2017-03-02":"@San Jose Sharks","2017-03-04":"@Los Angeles Kings","2017-03-05":"@Anaheim Ducks","2017-03-07":"Montreal Canadiens","2017-03-09":"New York Islanders","2017-03-11":"Pittsburgh Penguins","2017-03-13":"Boston Bruins","2017-03-16":"Dallas Stars","2017-03-18":"@Edmonton Oilers","2017-03-21":"@Chicago Blackhawks","2017-03-23":"@St. Louis Blues","2017-03-25":"@Minnesota Wild","2017-03-26":"@Winnipeg Jets","2017-03-28":"Anaheim Ducks","2017-03-31":"Los Angeles Kings","2017-04-02":"San Jose Sharks","2017-04-04":"@San Jose Sharks","2017-04-06":"@Arizona Coyotes","2017-04-08":"Edmonton Oilers","2017-04-09":"@Edmonton Oilers"},"Colorado Avalanche":{"2016-10-15":"Dallas Stars","2016-10-17":"@Pittsburgh Penguins","2016-10-18":"@Washington Capitals","2016-10-20":"@Tampa Bay Lightning","2016-10-22":"@Florida Panthers","2016-10-28":"Winnipeg Jets","2016-10-29":"@Arizona Coyotes","2016-11-01":"Nashville Predators","2016-11-03":"@Chicago Blackhawks","2016-11-05":"Minnesota Wild","2016-11-06":"@St. Louis Blues","2016-11-08":"Arizona Coyotes","2016-11-11":"Winnipeg Jets","2016-11-13":"Boston Bruins","2016-11-15":"Los Angeles Kings","2016-11-17":"@Dallas Stars","2016-11-19":"@Minnesota Wild","2016-11-21":"@Columbus Blue Jackets","2016-11-23":"Edmonton Oilers","2016-11-26":"Vancouver Canucks","2016-11-29":"Nashville Predators","2016-12-01":"Columbus Blue Jackets","2016-12-03":"Dallas Stars","2016-12-06":"@Nashville Predators","2016-12-08":"@Boston Bruins","2016-12-10":"@Montreal Canadiens","2016-12-11":"@Toronto Maple Leafs","2016-12-14":"Philadelphia Flyers","2016-12-16":"Florida Panthers","2016-12-18":"@Winnipeg Jets","2016-12-20":"@Minnesota Wild","2016-12-22":"Toronto Maple Leafs","2016-12-23":"@Chicago Blackhawks","2016-12-27":"Calgary Flames","2016-12-29":"@Dallas Stars","2016-12-31":"New York Rangers","2017-01-02":"@Vancouver Canucks","2017-01-04":"@Calgary Flames","2017-01-06":"New York Islanders","2017-01-12":"Anaheim Ducks","2017-01-14":"Nashville Predators","2017-01-17":"Chicago Blackhawks","2017-01-19":"@Anaheim Ducks","2017-01-21":"@San Jose Sharks","2017-01-23":"San Jose Sharks","2017-01-25":"Vancouver Canucks","2017-01-31":"@Anaheim Ducks","2017-02-01":"@Los Angeles Kings","2017-02-04":"Winnipeg Jets","2017-02-07":"Montreal Canadiens","2017-02-09":"Pittsburgh Penguins","2017-02-11":"@New York Rangers","2017-02-12":"@New York Islanders","2017-02-14":"@New Jersey Devils","2017-02-16":"@Buffalo Sabres","2017-02-17":"@Carolina Hurricanes","2017-02-19":"Tampa Bay Lightning","2017-02-21":"Los Angeles Kings","2017-02-23":"@Nashville Predators","2017-02-25":"Buffalo Sabres","2017-02-28":"@Philadelphia Flyers","2017-03-02":"@Ottawa Senators","2017-03-04":"@Winnipeg Jets","2017-03-05":"St. Louis Blues","2017-03-07":"Carolina Hurricanes","2017-03-09":"New Jersey Devils","2017-03-11":"Ottawa Senators","2017-03-13":"@Arizona Coyotes","2017-03-15":"Detroit Red Wings","2017-03-18":"@Detroit Red Wings","2017-03-19":"@Chicago Blackhawks","2017-03-21":"St. Louis Blues","2017-03-23":"Edmonton Oilers","2017-03-25":"@Edmonton Oilers","2017-03-27":"@Calgary Flames","2017-03-29":"Washington Capitals","2017-03-31":"St. Louis Blues","2017-04-02":"@Minnesota Wild","2017-04-04":"Chicago Blackhawks","2017-04-06":"Minnesota Wild","2017-04-08":"@Dallas Stars","2017-04-09":"@St. Louis Blues"}}

HockeyPool.Data.team_names = {
  "bos": "Boston Bruins",
  "buf": "Buffalo Sabres",
  "det": "Detroit Red Wings",
  "fla": "Florida Panthers",
  "mon": "Montreal Canadiens",
  "ott": "Ottawa Senators",
  "tb": "Tampa Bay Lightning",
  "tor": "Toronto Maple Leafs",
  "car": "Carolina Hurricanes",
  "cls": "Columbus Blue Jackets",
  "nj": "New Jersey Devils",
  "nyr": "New York Rangers",
  "phi": "Philadelphia Flyers",
  "pit": "Pittsburgh Penguins",
  "wsh": "Washington Capitals",
  "ana": "Anaheim Ducks",
  "ari": "Arizona Coyotes",
  "cgy": "Calgary Flames",
  "edm": "Edmonton Oilers",
  "la": "Los Angeles Kings",
  "sj": "San Jose Sharks",
  "van": "Vancouver Canucks",
  "chi": "Chicago Blackhawks",
  "col": "Colorado Avalanche",
  "dal": "Dallas Stars",
  "min": "Minnesota Wild",
  "nsh": "Nashville Predators",
  "stl": "St. Louis Blues",
  "wpg": "Winnipeg Jets"
}

HockeyPool.Data.get_team_from_short_name = function(short_name){
  return HockeyPool.Data.team_names[short_name.toLowerCase()];
}

HockeyPool.Data.get_team_schedule = function(team_shortname, start_date, end_date){
  var team_name = HockeyPool.Data.team_names[team_shortname.toLowerCase()];
  var sched = HockeyPool.Data.team_schedules[team_name];
  if (!start_date && !end_date){
    return sched;
  }
  else{
    var start = moment(start_date);
    var end = moment(end_date);
    var return_sched = {};
    if (end >= start){
      var day = start;
      while (day <= end){
        var day_str = day.format('YYYY-MM-DD');
        if (sched[day_str]){
          return_sched[day_str] = sched[day_str];
        }
        day = day.add(1, "day");
      }
    }
    return return_sched;
  }
}




/* **********************************************
     Begin data_helper.js
********************************************** */

HockeyPool.Helpers.DataHelper = {
  get_team_schedule: function(team_id){
    return $.get('/fhl/schedule?leagueId=4424&teamId=' + team_id).then(function(data) {
      var team_schedule = new HockeyPool.Collections.TeamSchedule(null, {team_id: team_id});
      $(data).find(".games-fullcol > table.tableBody tr").each(function(){
        if ($(this).text().includes("Matchup")){
          team_schedule.add(new HockeyPool.Models.ScheduleItem(null, {$row: $(this)}));
        }
      })
      return team_schedule;
    });
  },

  get_team_day: function(team_id, day_id){
    return $.get('http://games.espn.com/fhl/playertable/prebuilt/manageroster?leagueId=4424&teamId=' + team_id + '&seasonId=2017&scoringPeriodId=' + day_id + '&version=today&view=stats&context=clubhouse&ajaxPath=playertable/prebuilt/manageroster&managingIr=false&droppingPlayers=false&asLM=false').then(function(data) {
      var team_day = new HockeyPool.Models.TeamDay({day_id: day_id, team_id: team_id, html_content: data});
      return team_day;
    });
  }
};

/* **********************************************
     Begin matchup.js
********************************************** */

HockeyPool.Models.Matchup = Backbone.Model.extend({
  initialize: function(options){
    console.log("Matchup!");

  }
});

/* **********************************************
     Begin weekly_stats.js
********************************************** */

HockeyPool.Models.WeeklyStats = Backbone.Model.extend({
  field_stat_map: {
    "13": {
      key: "goals",
      parse_fn: parseInt,
      comparison: ">"
    },
    "14": {
      key: "assists",
      parse_fn: parseInt,
      comparison: ">"
    },
    "15": {
      key: "plus_minus",
      parse_fn: parseInt,
      comparison: ">"
    },
    "17": {
      key: "penalty_minutes",
      parse_fn: parseInt,
      comparison: ">"
    },
    "23": {
      key: "faceoff_wins",
      parse_fn: parseInt,
      comparison: ">"
    },
    "27": {
      key: "atoi",
      parse_fn: function(val){
        var time_parts = val.match(/(\d*)\:(\d*)/);
        if (time_parts){
          var total_seconds = (parseInt(time_parts[1])*60) + parseInt(time_parts[2]);
          return total_seconds;
        }
        return 0;
      },
      comparison: ">"
    },
    "29": {
      key: "shots_on_goal",
      parse_fn: parseInt,
      comparison: ">"
    },
    "31": {
      key: "hits",
      parse_fn: parseInt,
      comparison: ">"
    },
    "32": {
      key: "blocks",
      parse_fn: parseInt,
      comparison: ">"
    },
    "37": {
      key: "special_team_points",
      parse_fn: parseInt,
      comparison: ">"
    },
    "1": {
      key: "wins",
      parse_fn: parseInt,
      comparison: ">"
    },
    "7": {
      key: "shutouts",
      parse_fn: parseInt,
      comparison: ">"
    },
    "10": {
      key: "gaa",
      parse_fn: parseFloat,
      comparison: "<+save_percentage"
    },
    "11": {
      key: "save_percentage",
      parse_fn: parseFloat,
      comparison: ">"
    }
  },

  defaults: {
    team_name:"",
    team_id:0,
    goals: 0,
    goals_winning: 0,
    assists: 0,
    assists_winning: 0,
    plus_minus: 0,
    plus_minus_winning: 0,
    penalty_minutes: 0,
    penalty_minutes_winning: 0,
    faceoff_wins: 0,
    faceoff_wins_winning: 0,
    atoi: 0,
    atoi_winning: 0,
    shots_on_goal: 0,
    shots_on_goal_winning: 0,
    hits: 0,
    hits_winning: 0,
    blocks: 0,
    blocks_winning: 0,
    special_team_points: 0, 
    special_team_points_winning: 0, 
    wins: 0,
    wins_winning: 0,
    shutouts: 0,
    shutouts_winning: 0,
    gaa: 0, 
    gaa_winning: 0, 
    save_percentage: 0,
    save_percentage_winning: 0,
    matchup_winning: false,
    matchup_totals:{
      losing: 0,
      winning: 0,
      tied: 0
    }
  },

  initialize: function(options){
    this.parse_stats(options["row_node"]);
  },

  compare_to: function(other_team){
    // console.log("comparing to: ", other_team);
    var matchup_totals = {
      winning: 0,
      losing: 0,
      tied: 0
    }
    _.each(this.field_stat_map, function(field, field_id){
      var winning = false;
      if (this.get(field["key"]) == other_team.get(field["key"])){
        matchup_totals["tied"]++;
      }
      else if (field["comparison"] == ">"){
        winning = this.get(field["key"]) > other_team.get(field["key"]);
        winning ? matchup_totals["winning"]++ : matchup_totals["losing"]++;
      }
      else if (field["comparison"] == "<"){
        winning = this.get(field["key"]) < other_team.get(field["key"]);
        winning ? matchup_totals["winning"]++ : matchup_totals["losing"]++;
      }
      else if (field["comparison"] == "<+save_percentage"){ // special case for GAA = 0 --if you didn't play any goalies, that doesn't count as a winning category
        if ((this.get(field["key"]) == 0 && this.get("save_percentage") == 0) && other_team.get("save_percentage") > 0){
          winning = false;
        }
        else if ((other_team.get(field["key"]) == 0 && other_team.get("save_percentage") == 0) && this.get("save_percentage") > 0){
          winning = true;
        }
        else{
          winning = this.get(field["key"]) < other_team.get(field["key"]);
        }
        winning ? matchup_totals["winning"]++ : matchup_totals["losing"]++;
      }
      this.set(field["key"] + "_winning", winning);
    }, this);
    this.set("matchup_totals", matchup_totals);
    this.set("matchup_winning", matchup_totals["winning"] > matchup_totals["losing"]);
  },

  parse_stats: function(row_node){
    var team_id = null;
    _.each($(row_node).find("td"), function(cell){
      var $cell = $(cell);
      if ($cell.hasClass("teamName")){
        this.set("team_name", $cell.text());
      }
      else if ($cell.hasClass("sectionLeadingSpacer")){
        return; // ignore
      }
      else{
        //ls_tmTotalStat_16_10
        var field_info = $cell.attr("id").match(/.*_(\d*)_(\d*)/)
        if (field_info && field_info[2]){
          if (!team_id){
            team_id = parseInt(field_info[1]);
            this.set("team_id", team_id);
          }
          var field_lookup = field_info[2];
          var field_key = this.field_stat_map[field_lookup]["key"];

          this.set(field_key, this.field_stat_map[field_lookup]["parse_fn"]($cell.text()))
        }
      }
    }, this);
  }
});

/* **********************************************
     Begin schedule_item.js
********************************************** */

HockeyPool.Models.ScheduleItem = Backbone.Model.extend({
  initialize: function(models, options){
    this.instance = {};
    options = options || {};
    if (options.$row){
      this.parse_row(options.$row);
    }
    console.log("schuedle item", this);
  },

  parse_row: function($row){
    // dates
    var date_parts = $row.find("td").first().text().match(/\((.{3})\s(\d{1,2})\s-\s((.{3})\s)?(\d{1,2})\)/)

    var date_1_str = date_parts[1] + " " + date_parts[2] + ", " + HockeyPool.Data.month_to_year[date_parts[1]];
    var date_1 = moment(date_1_str, "MMM D, YYYY");

    var date_2_str = (date_parts[4] ? date_parts[4] : date_parts[1]) + " " + date_parts[5] + ", " + HockeyPool.Data.month_to_year[(date_parts[4] ? date_parts[4] : date_parts[1])];
    var date_2 = moment(date_2_str, "MMM D, YYYY");

    this.set({
      date_start: date_1,
      date_start_id: HockeyPool.Data.date_to_day_id(date_1),
      date_end: date_2,
      date_end_id: HockeyPool.Data.date_to_day_id(date_2),
      matchup_length: date_2.diff(date_1, 'days') + 1
    })


    // matchup result (if complete)
    var $result_anchor = $row.find("nobr a").detach();
    if ((score = $result_anchor.text()) !== "Box"){
      this.set("score", score);
    }

    // opponent
    var $opponent_anchor = $row.find("a");
    var opponent_link_parts = $opponent_anchor.attr("href").match(/teamId=(\d{1,2})/)
    this.set("opponent_name", $opponent_anchor.text());
    this.set("opponent_id", parseInt(opponent_link_parts[1]));
    // this.set("opponent_id", $opponent_anchor.text());

  },

  defaults: function(){
    return {

    };
  },

});

/* **********************************************
     Begin team_day.js
********************************************** */

HockeyPool.Models.TeamDay = Backbone.Model.extend({
  initialize: function(options){
    console.log("Team Day!");
    options = options || {};
    this.instance = {};
    this.instance.team_id = options.team_id;
    this.instance.day_id = options.day_id;
    this.instance.players = new HockeyPool.Collections.Players(null, {team_id: this.instance.team_id, day_id: this.instance.day_id});
    if (options.html_content){
      this.parse_day(options.html_content);
    }

  },

  



  parse_day: function(html_content){
    var $content = $("<div></div>").html(html_content);

    //GP  G A +/- PIM FOW ATOI  SOG HIT BLK STP
    var stat_columns_skater = ["games_played", "goals", "assists", "plus_minus", "penalty_minutes", "fow", "atoi", "shots", "hits", "blocks", "stp"];

    //GS  W GA  SV  SO  MIN GAA SV%
    var stat_columns_goalie = ["games_played", "wins", "goals_allowed", "saves", "shutouts", "minutes", "gaa", "save_percentage"];
    var _this = this;
    $content.find(".pncPlayerRow").each(function(){
      var player = new HockeyPool.Models.Player({});
      var $row = $(this);
      var player_name_string = $row.find(".playertablePlayerName").text();
      if (player_name_string == ""){
        return;
      }
      //Mika Zibanejad*, NYR RW, C  IR
      var matches = player_name_string.match(/([a-zA-Z\s\*]*),\s([A-Za-z]*).([A-Z]*(,\s[A-Z]*)*).*(IR|O|SSPD|DTD)?/)

      player.set("name", matches[1]);
      player.set("team", matches[2]);
      player.set("team_fullname", HockeyPool.Data.get_team_from_short_name(matches[2]))
      var positions = matches[3].split(", ");
      player.set("positions", positions);
      console.log("matches[5]", matches[5])
      player.set("ir_status", $.inArray(matches[5], ["IR","O"]) > -1);

      var position_string = $row.find(".playerSlot").text();
      // console.log("position: ", position_string);
      player.set("todays_position", position_string)


      var player_stats = $row.find(".playertableStat").map(function(){ return $(this).text() });
      // console.log("playertableStat: ", player_stats);
      _.each(position_string== "G" ? stat_columns_goalie : stat_columns_skater, function(stat, index){
        player.set(stat, player_stats[index]);
      }, _this);
      // console.log("player", player);
      _this.instance.players.add(player);
    });
  },
});

/* **********************************************
     Begin team_week.js
********************************************** */

HockeyPool.Models.TeamWeek = Backbone.Model.extend({
  initialize: function(options){
    console.log("Team Week!");
    this.instance = {};
    this.instance.team_id = options.team_id;
    this.instance.matchup = options.matchup;
    this.instance.team_days = new HockeyPool.Collections.TeamDays(null, {team_id: this.instance.team_id});
    if (this.instance.matchup){
      this.get_player_data();
    }

  },

  get_player_data: function(){
    // for (i=0; this.instance.matchup.get("date_start") + moment(i, "days") <= this.instance.matchup.get("date_end"); i++){
    //   console.log("get data for...", this.instance.matchup.get("date_start").add(i, "days"))
    // }
    var period_start = this.instance.matchup.get("date_start").diff(HockeyPool.Data.season_start, "days")+1;
    var period_end = this.instance.matchup.get("date_end").diff(HockeyPool.Data.season_start, "days")+1;

    this.get_team_day(period_start, period_end);
    console.log("and it is done now.", this.instance.team_days);
  },

  get_team_day: function(day_id, period_end){
    var team_day_promise = HockeyPool.Helpers.DataHelper.get_team_day(this.instance.team_id, day_id);
    $.when(team_day_promise).done(_.bind(function(team_day){
      // add to days collection
      this.instance.team_days.add(team_day);
      console.log("adding", team_day);
      if (day_id < period_end){
        this.get_team_day(day_id+1, period_end);
      }
    }, this));

  },




});

/* **********************************************
     Begin player.js
********************************************** */

HockeyPool.Models.Player = Backbone.Model.extend({
  initialize: function(options){
    console.log("Player!");

  }
});

/* **********************************************
     Begin conflict.js
********************************************** */

HockeyPool.Models.Conflict = Backbone.Model.extend({

  max_players: {
    C: 2,
    RW: 2,
    LW: 2,
    D: 4,
    G: 2
  },

  initialize: function(options){
    console.log("Conflict Model!");

  },

  add_multi_position_players: function(multi_position_players){
    console.log("got it!", multi_position_players);
    _.each(multi_position_players, function(player){
      var positions = player.get("positions");
      for (j=0; j < positions.length; j++){
        if (this.get(positions[j]) < this.max_players[positions[j]]){
          // console.log("setting a ", positions[j])
          this.set(positions[j], this.get(positions[j]) + 1);
          j = 100; // break the loop
        }
      }
    }, this);
  },

  defaults: function(){
    return {
      C: 0,
      RW: 0,
      LW: 0,
      D: 0,
      G: 0,
    }
  }

});

/* **********************************************
     Begin weekly_stats_collection.js
********************************************** */

HockeyPool.Collections.WeeklyStats = Backbone.Collection.extend({
  initialize: function(){
    console.log("New Weekly Stats!");
  },

  team_list: function(){
    return this.map(function(model){
      return {
        team_id: model.get("team_id"),
        team_name: model.get("team_name")
      }
    });
  }
});

/* **********************************************
     Begin team_schedule.js
********************************************** */

HockeyPool.Collections.TeamSchedule = Backbone.Collection.extend({
  initialize: function(options){
    options = options || {};
    this.instance = {};
    this.instance.team_id = options.team_id || null;

  },

  this_weeks_matchup: function(){
    console.log("woo?");
    var matchup = null;
    var today = moment();
    _.each(this.models, function(m){
      // console.log("start:", m.get("date_start").isSameOrBefore(today, 'day'))
      // console.log("start:", m.get("date_end").isSameOrAfter(today, 'day'))
      if (today.isBetween(m.get("date_start"), m.get("date_end"))){
      // if (m.get("date_start").isSameOrBefore(today, 'day') && m.get("date_end").isSameOrAfter(today, 'day')){
        console.log("this is it!!", m);
        matchup = m;
      }
    }, this);
    return matchup;
  }
});

/* **********************************************
     Begin team_days.js
********************************************** */

HockeyPool.Collections.TeamDays = Backbone.Collection.extend({
  initialize: function(options){
    options = options || {};
    this.instance = {};
    this.instance.team_id = options.team_id || null;

  },
});

/* **********************************************
     Begin players.js
********************************************** */

HockeyPool.Collections.Players = Backbone.Collection.extend({
  initialize: function(options){
    options = options || {};
    this.instance = {};
    this.instance.team_id = options.team_id || null;
    this.instance.day_id = options.day_id || null;

  },
});

/* **********************************************
     Begin stat_comparison.js
********************************************** */

HockeyPool.Views.StatComparison = Backbone.View.extend({
  initialize: function(options){
    options = options || {};
    console.log("Stat Comparison!");
    this.parse_page();
    this.my_team_id = options.my_team_id || teamId;
    this.render();
  },

  parse_page: function(){
    var collection = new HockeyPool.Collections.WeeklyStats();
    _.each($("tr.linescoreTeamRow"), function(row){
      weekly_stats = new HockeyPool.Models.WeeklyStats({
        row_node: row
      })
      collection.add(weekly_stats);
    }, this);
    console.log("collection", collection)
    this.collection = collection;
  },

  set_team_id: function(new_team_id){
    this.my_team_id = new_team_id;
    this.render();
  },

  render: function(){
    this.$el.empty();
    this.$el.html('<table width="100%" border="0" cellpadding="2" cellspacing="1" class="tableBody stat_table"> \
<tbody><tr bgcolor="#25cfd5" class="tableHead" style="text-align:center"><th style="text-align:left">TEAM</th><td class="sectionLeadingSpacer"><spacer type="block" width="1" height="1"></spacer></td>\
<th colspan="10">SKATERS</th><td class="sectionLeadingSpacer"><spacer type="block" width="1" height="1"></spacer></td>\
<th colspan="4">GOALIES</th><td class="sectionLeadingSpacer"><spacer type="block" width="1" height="1"></spacer></td>\
<th style="text-align:right">TOTAL</th><th></th></tr><tr bgcolor="#a8ecee" class="tableSubHead" style="text-align:right"><th style="text-align:left">NAME</th><td class="sectionLeadingSpacer"><spacer type="block" width="1" height="1"></spacer></td>\
<th title="Goals">G</th><th title="Assists">A</th><th title="Plus/minus">+/-</th><th title="Penalty Minutes">PIM</th><th title="Faceoffs Won">FOW</th><th title="Average Time on Ice">ATOI</th><th title="Shots on goal">SOG</th><th title="Hits">HIT</th><th title="Blocked Shots">BLK</th><th title="Special Teams Points">STP</th><td class="sectionLeadingSpacer"><spacer type="block" width="1" height="1"></spacer></td>\
<th title="Wins">W</th><th title="Shutouts">SO</th><th title="Goals Against Average">GAA</th><th title="Save Percentage">SV%</th><td class="sectionLeadingSpacer"><spacer type="block" width="1" height="1"></spacer></td>\
<th>SCORE</th><th></th></tr></table>');
    var my_team = this.collection.findWhere({"team_id": this.my_team_id});
    my_team.compare_to(my_team);

    this.$el.find("table.stat_table tbody").append(new HockeyPool.Views.StatRow({model: my_team}).render().$el);
    this.$el.find("table.stat_table tbody").append("<tr><td style='height:1px;'></td></tr>");
    _.each(this.collection.models, function(model){
      if (model != my_team){
        model.compare_to(my_team);
        this.$el.find("table.stat_table tbody").append(new HockeyPool.Views.StatRow({model: model}).render().$el);
      }
    }, this);
    this.$el.prepend(this.render_select());
  },

  render_select: function(){
    var $el = $("<select></select>");
    var teams = this.collection.team_list();

    _.each(teams, function(team){
      $el.append("<option value='" + team["team_id"] + "' " + (team["team_id"] == this.my_team_id ? " selected " : "") + ">" + team["team_name"] + "</option>")
    }, this);

    $el.off("change").change(_.bind(function(ev){
      var $target = $(ev.currentTarget);
      this.set_team_id(parseInt($target.val()));
    }, this));

    return $el;
  }

});

/* **********************************************
     Begin stat_row.js
********************************************** */

HockeyPool.Views.StatRow = Backbone.View.extend({
  tagName: "tr",

  template: _.template('<td class="teamName"><%= team_name %></td>\
    <td class="sectionLeadingSpacer"><spacer type="block" width="1" height="1"></spacer></td>\
    <td id="" name="" class="precise <%= goals_winning ? "winning" : "" %>" title=""><%= goals %></td>\
    <td id="" name="" class="precise <%= assists_winning ? "winning" : "" %>" title=""><%= assists %></td>\
    <td id="" name="" class="precise <%= plus_minus_winning ? "winning" : "" %>" title=""><%= plus_minus %></td>\
    <td id="" name="" class="precise <%= penalty_minutes_winning ? "winning" : "" %>" title=""><%= penalty_minutes %></td>\
    <td id="" name="" class="precise <%= faceoff_wins_winning ? "winning" : "" %>" title=""><%= faceoff_wins %></td>\
    <td id="" name="" class="precise <%= atoi_winning ? "winning" : "" %>" title="21:52.466667"><%= Math.floor(atoi/60) + ":" + (atoi%60 > 9 ? atoi%60 : "0" + atoi%60) %></td>\
    <td id="" name="" class="precise <%= shots_on_goal_winning ? "winning" : "" %>" title=""><%= shots_on_goal %></td>\
    <td id="" name="" class="precise <%= hits_winning ? "winning" : "" %>" title=""><%= hits %></td>\
    <td id="" name="" class="precise <%= blocks_winning ? "winning" : "" %>" title=""><%= blocks %></td>\
    <td id="" name="" class="precise <%= special_team_points_winning ? "winning" : "" %>" title=""><%= special_team_points %></td>\
    <td class="sectionLeadingSpacer"><spacer type="block" width="1" height="1"></spacer></td>\
    <td id="" name="" class="precise <%= wins_winning ? "winning" : "" %>" title=""><%= wins %></td>\
    <td id="" name="" class="precise <%= shutouts_winning ? "winning" : "" %>" title=""><%= shutouts %></td>\
    <td id="" name="" class="precise  <%= gaa_winning ? "winning" : "" %>" title=""><%= gaa %></td>\
    <td id="" name="" class="precise  <%= save_percentage_winning ? "winning" : "" %>" title=""><%= save_percentage %></td>\
    <td class="sectionLeadingSpacer"><spacer type="block" width="1" height="1"></spacer></td>\
    <td id="" name="" class="<%= matchup_winning ? "winning" : "" %> "><nobr><%= matchup_totals["winning"] + "-" + matchup_totals["losing"] + "-" + matchup_totals["tied"]%></nobr></td>\
    <%if (matchup_totals["winning"] < matchup_totals["losing"]){%>\
      <td style="color:green;">&#x2714;</td>\
    <% }else if (matchup_totals["winning"] > matchup_totals["losing"]){%>\
      <td style="color:red;">&#x2718;</td>\
    <%} else{ %>\
      <td style="color:orange;">&#x2A37;</td>\
    <%}%>'),

  initialize: function(options){
  },

  render: function(){
    this.$el.empty();
    this.$el.addClass("linescoreTeamRow");
    this.$el.attr("bgcolor", "#f4f1e8");
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})

/* **********************************************
     Begin matchup.js
********************************************** */

HockeyPool.Views.Matchup = Backbone.View.extend({
  initialize: function(options){
    this.open_bench();
  },

  open_bench: function(){
    $(".hideableGroup").show();
    $(".hideableGroup").each(function(i){
      if ($(this).text().includes("BENCH: SKATERS")){
        var skaters_node = $(this).siblings().first();
        $(this).detach().insertAfter(skaters_node);
      }
    });
    $(".playerTableShowHideGroupLink").hide();
  },

});

/* **********************************************
     Begin team_view.js
********************************************** */

HockeyPool.Views.TeamView = Backbone.View.extend({
  initialize: function(options){
    this.instance = {};
    options = options || {};
    this.instance.my_team = options.my_team || null;
    this.add_menu();
  },

  add_menu: function(){
    $("#playerTableHeader ul li").click(_.bind(function(ev){
      window.setTimeout(_.bind(function(){
        this.add_menu();
      }, this), 500);
    }, this));
    $("#playerTableHeader ul").append("<li class='load_conflicts'><a href='#'>Conflicts</a></li>");
    $("#playerTableHeader ul li.load_conflicts").click(_.bind(function(ev){
      $("#playerTableHeader ul li#current").removeAttr("id");
      $("#playerTableHeader ul li.load_conflicts").attr("id", "current");
      $(".playertableFrameBorder").remove();
      this.load_conflicts();
    }, this));

  },

  load_conflicts: function(){
    $("<div id='conflict_container'></div>").insertAfter($("#playertableFrameOuterShell"));
    this.conflicts = new HockeyPool.Views.ConflictView({el: $("#conflict_container"), team_id: this.instance.my_team})
  },

  

});

/* **********************************************
     Begin conflict_view.js
********************************************** */

HockeyPool.Views.ConflictView = Backbone.View.extend({

  initialize: function(options){
    this.instance = {};
    options = options || {};
    this.instance.team_id = options.team_id || null;
    console.log("conflict view!");
    // set up events
    // load.
    this.load_data();
    },

    load_data: function(){
      var get_team_schedule = HockeyPool.Helpers.DataHelper.get_team_schedule(this.instance.team_id)

      $.when(get_team_schedule).done(_.bind(function(team_schedule) {
        this_weeks_matchup = team_schedule.this_weeks_matchup();
        console.log("this_weeks_matchup", this_weeks_matchup);

        // var today_day_id = moment().diff(HockeyPool.Data.season_start, "days")+1
        var today_day_id = HockeyPool.Data.today_date_id;
        $.when(HockeyPool.Helpers.DataHelper.get_team_day(this.instance.team_id, today_day_id)).done(_.bind(function(team_day){
          // console.log('got the team', team_day);
          // console.log("sched:", HockeyPool.Data.get_schedule_for_day(today_day_id))
          // console.log("HockeyPool.Data.get_team_from_short_name", HockeyPool.Data.get_team_from_short_name("Tor"))
          // console.log("HockeyPool.Data.get_team_from_short_name", HockeyPool.Data.get_team_from_short_name("stl"))
          // console.log("HockeyPool.Data.get_team_from_short_name", HockeyPool.Data.get_team_from_short_name("StL"))
          this.check_conflicts(team_day, this_weeks_matchup.get("date_start_id"), this_weeks_matchup.get("date_end_id"));
        }, this));
        // console.log(new HockeyPool.Models.TeamWeek({team_id: this.instance.my_team, matchup: team_schedule.this_weeks_matchup()}))
        this.render();
      }, this));
      // console.log("moving forward!");
      // // this.matchup_schedule = ;
      // console.log("sched:", this.matchup_schedule);
    },

    check_conflicts: function(team, day_id_start, day_id_end){
      console.log("checking!", team);
      for (i=0; day_id_start + i <= day_id_end; i++){
        var today_day_id = day_id_start + i;
        console.log("day:", today_day_id);
        var teams_playing = HockeyPool.Data.get_schedule_for_day(today_day_id);
        console.log("teams_playing", teams_playing)
        var conflicts = new HockeyPool.Models.Conflict({});
        var multi_position_players = [];

        _.each(team.instance.players.models, function(player){
          if (player.get("todays_position") !== "IR" && _.indexOf(teams_playing, player.get("team_fullname")) > -1){
            // console.log("playing!", player);
            // console.log("playing!", player.get("name"));
            if (player.get("positions").length === 1){
              var position = player.get("positions")[0];
              conflicts.set(position, conflicts.get(position) +1)
            }
            else{
              multi_position_players.push(player);
            }

          }
        }, this);
        // reconcile multi-position players
        conflicts.add_multi_position_players(multi_position_players);

        console.log("conflicts", conflicts)
      }


    },

    render: function(){
      this.$el.html(this.content_area({}));
    },

    ///////////  Templates  /////////////
    content_area: _.template('\
    <table width="970px" cellpadding="0" cellspacing="0" border="0" class="playertableFrameBorder">\
      <tbody>\
        <tr class="playerTableFiltersRow">\
          <td width="100%">\
            <div class="playertablefiltersmenu">\
              <div id="ptfiltersmenuleft" class="playertablefiltersmenu">\
                <div class="playertablefiltersmenucontaineron" title="Nov 19">Nov 19</div>\
              </div>\
            </div>\
          </td>\
        </tr>\
      </tbody>\
    </table>'),
});

/* **********************************************
     Begin init.js
********************************************** */

if ($(".games-pageheader h1").text().includes("Scoreboard")){
  var $el = $(".bodyCopy").before("<div id='comparison_table'></div>");
  a = new HockeyPool.Views.StatComparison({el: $("#comparison_table"), my_team: teamId});
}
else if ($(".games-pageheader h1").text().includes("Box Score")){
  console.log("matchup");
  a = new HockeyPool.Views.Matchup({my_team: teamId});
  console.log("test")
  console.log("November for the Leafs: ", HockeyPool.Data.get_team_schedule("tor","2016-11-01", "2016-11-30"))
  // _.each(HockeyPool.Data.team_names, function (v, k){
  // 	console.log(k, v)
  // 	console.log(k, _.keys(HockeyPool.Data.get_team_schedule(k)).length)
  // });
}
else if ($(".games-dates-mod h3").text().includes("Lineup")){
  console.log("Individual team screen");
  a = new HockeyPool.Views.TeamView({my_team: teamId});
}


/* **********************************************
     Begin hockey_pool.js
********************************************** */

/*jshint devel:true */
/*global console */

// Libraries
// @codekit-prepend "lib/jquery.min.js"
// @codekit-prepend "lib/underscore.min.js"
// @codekit-prepend "lib/backbone.min.js"
// @codekit-prepend "lib/moment.min.js"

// @codekit-prepend "base.js"

// Data
// @codekit-prepend "data/20162017_schedule.js"
// @codekit-prepend "data/20162017_schedule_by_day.js"
// @codekit-prepend "data/team_schedules.js"

// Helpers
// @codekit-prepend "helpers/data_helper.js"

// Models
// @codekit-prepend "models/matchup.js"
// @codekit-prepend "models/weekly_stats.js"
// @codekit-prepend "models/schedule_item.js"
// @codekit-prepend "models/team_day.js"
// @codekit-prepend "models/team_week.js"
// @codekit-prepend "models/player.js"
// @codekit-prepend "models/conflict.js"

// Collections
// @codekit-prepend "collections/weekly_stats_collection.js"
// @codekit-prepend "collections/team_schedule.js"
// @codekit-prepend "collections/team_days.js"
// @codekit-prepend "collections/players.js"

// Views
// @codekit-prepend "views/stat_comparison.js"
// @codekit-prepend "views/stat_row.js"
// @codekit-prepend "views/matchup.js"
// @codekit-prepend "views/team_view.js"
// @codekit-prepend "views/conflict_view.js"

// @codekit-prepend "init.js"



!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function o(){var e=n(5).default;i=(0,r.render)((0,r.h)(e,null),document.body,i)}var r=n(1);n(9);var i=void 0;o()},function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var o,r,i,l,a=[];for(l=arguments.length;l-- >2;)G.push(arguments[l]);for(n&&n.children&&(G.length||G.push(n.children),delete n.children);G.length;)if((r=G.pop())instanceof Array)for(l=r.length;l--;)G.push(r[l]);else null!=r&&r!==!1&&("number"!=typeof r&&r!==!0||(r=String(r)),i="string"==typeof r,i&&o?a[a.length-1]+=r:(a.push(r),o=i));var u=new t(e,n||void 0,a);return W.vnode&&W.vnode(u),u}function o(e,t){if(t)for(var n in t)e[n]=t[n];return e}function r(e){return o({},e)}function i(e,t){for(var n=t.split("."),o=0;o<n.length&&e;o++)e=e[n[o]];return e}function l(e){return"function"==typeof e}function a(e){return"string"==typeof e}function u(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function s(e,t){return n(e.nodeName,o(r(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function c(e,t,n){var o=t.split(".");return function(t){for(var r=t&&t.target||this,l={},u=l,s=a(n)?i(t,n):r.nodeName?r.type.match(/^che|rad/)?r.checked:r.value:t,c=0;c<o.length-1;c++)u=u[o[c]]||(u[o[c]]=!c&&e.state[o[c]]||{});u[o[c]]=s,e.setState(l)}}function h(e){!e._dirty&&(e._dirty=!0)&&1==K.push(e)&&(W.debounceRendering||q)(f)}function f(){var e,t=K;for(K=[];e=t.pop();)e._dirty&&M(e)}function p(e){var t=e&&e.nodeName;return t&&l(t)&&!(t.prototype&&t.prototype.render)}function d(e,t){return e.nodeName(g(e),t||F)}function m(e,t){return a(t)?e instanceof Text:a(t.nodeName)?b(e,t.nodeName):l(t.nodeName)?e._componentConstructor===t.nodeName||p(t):void 0}function b(e,t){return e.normalizedNodeName===t||z(e.nodeName)===z(t)}function g(e){var t=r(e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function y(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n,o,r){if("className"===t&&(t="class"),"class"===t&&o&&"object"==typeof o&&(o=u(o)),"key"===t);else if("class"!==t||r)if("style"===t){if((!o||a(o)||a(n))&&(e.style.cssText=o||""),o&&"object"==typeof o){if(!a(n))for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"!=typeof o[i]||$[i]?o[i]:o[i]+"px"}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html);else if("o"==t[0]&&"n"==t[1]){var s=e._listeners||(e._listeners={});t=z(t.substring(2)),o?s[t]||e.addEventListener(t,w,!!H[t]):s[t]&&e.removeEventListener(t,w,!!H[t]),s[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)_(e,t,null==o?"":o),null!=o&&o!==!1||e.removeAttribute(t);else{var c=r&&t.match(/^xlink\:?(.+)/);null==o||o===!1?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",z(c[1])):e.removeAttribute(t):"object"==typeof o||l(o)||(c?e.setAttributeNS("http://www.w3.org/1999/xlink",z(c[1]),o):e.setAttribute(t,o))}else e.className=o||""}function _(e,t,n){try{e[t]=n}catch(e){}}function w(e){return this._listeners[e.type](W.event&&W.event(e)||e)}function k(e){if(y(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||z(e.nodeName);(J[t]||(J[t]=[])).push(e)}}function C(e,t){var n=z(e),o=J[n]&&J[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return o.normalizedNodeName=n,o}function x(){for(var e;e=X.pop();)W.afterMount&&W.afterMount(e),e.componentDidMount&&e.componentDidMount()}function N(e,t,n,o,r,i){Q++||(Z=r instanceof SVGElement);var l=O(e,t,n,o);return r&&l.parentNode!==r&&r.appendChild(l),--Q||i||x(),l}function O(e,t,n,o){for(var r=t&&t.attributes;p(t);)t=d(t,n);if(null==t&&(t=""),a(t)){if(e){if(e instanceof Text&&e.parentNode)return e.nodeValue!=t&&(e.nodeValue=t),e;U(e)}return document.createTextNode(t)}if(l(t.nodeName))return A(e,t,n,o);var i=e,u=t.nodeName,s=Z,c=t.children;if(a(u)||(u=String(u)),Z="svg"===u||"foreignObject"!==u&&Z,e){if(!b(e,u)){for(i=C(u,Z);e.firstChild;)i.appendChild(e.firstChild);U(e)}}else i=C(u,Z);c&&1===c.length&&"string"==typeof c[0]&&1===i.childNodes.length&&i.firstChild instanceof Text?i.firstChild.nodeValue!=c[0]&&(i.firstChild.nodeValue=c[0]):(c&&c.length||i.firstChild)&&j(i,c,n,o);var h=i[Y];if(!h){i[Y]=h={};for(var f=i.attributes,m=f.length;m--;)h[f[m].name]=f[m].value}return P(i,t.attributes,h),r&&"function"==typeof r.ref&&(h.ref=r.ref)(i),Z=s,i}function j(e,t,n,o){var r,i,a,u,s=e.childNodes,c=[],h={},f=0,p=0,d=s.length,b=0,g=t&&t.length;if(d)for(var y=0;y<d;y++){var v=s[y],_=g?(i=v._component)?i.__key:(i=v[Y])?i.key:null:null;_||0===_?(f++,h[_]=v):c[b++]=v}if(g)for(var y=0;y<g;y++){a=t[y],u=null;var _=a.key;if(null!=_)f&&_ in h&&(u=h[_],h[_]=void 0,f--);else if(!u&&p<b){for(r=p;r<b;r++)if(i=c[r],i&&m(i,a)){u=i,c[r]=void 0,r===b-1&&b--,r===p&&p++;break}!u&&p<b&&l(a.nodeName)&&o&&(u=c[p],c[p++]=void 0)}u=O(u,a,n,o),u&&u!==e&&u!==s[y]&&e.insertBefore(u,s[y]||null)}if(f)for(var y in h)h[y]&&U(h[y]);p<b&&E(c)}function E(e,t){for(var n=e.length;n--;)e[n]&&U(e[n],t)}function U(e,t){var n=e._component;n?R(n,!t):(e[Y]&&e[Y].ref&&e[Y].ref(null),t||k(e),e.childNodes&&e.childNodes.length&&E(e.childNodes,t))}function P(e,t,n){for(var o in n)t&&o in t||null==n[o]||v(e,o,n[o],n[o]=void 0,Z);if(t)for(var r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||v(e,r,n[r],n[r]=t[r],Z)}function S(e){var t=e.constructor.name,n=ee[t];n?n.push(e):ee[t]=[e]}function T(e,t,n){var o=new e(t,n),r=ee[e.name];if(I.call(o,t,n),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function D(e,t,n,o,r){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&W.syncComponentUpdates===!1&&e.base?h(e):M(e,1,r)),e.__ref&&e.__ref(e))}function M(e,t,n,i){if(!e._disable){var a,u,s,c,h=e.props,f=e.state,m=e.context,b=e.prevProps||h,y=e.prevState||f,v=e.prevContext||m,_=e.base,w=e.nextBase,k=_||w,C=e._component;if(_&&(e.props=b,e.state=y,e.context=v,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(h,f,m)===!1?a=!0:e.componentWillUpdate&&e.componentWillUpdate(h,f,m),e.props=h,e.state=f,e.context=m),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!a){for(e.render&&(u=e.render(h,f,m)),e.getChildContext&&(m=o(r(m),e.getChildContext()));p(u);)u=d(u,m);var O,j,E=u&&u.nodeName;if(l(E)){s=C;var P=g(u);s&&s.constructor===E?D(s,P,1,m):(O=s,s=T(E,P,m),s.nextBase=s.nextBase||w,s._parentComponent=e,e._component=s,D(s,P,0,m),M(s,1,n,!0)),j=s.base}else c=k,O=C,O&&(c=e._component=null),(k||1===t)&&(c&&(c._component=null),j=N(c,u,m,n||!_,k&&k.parentNode,!0));if(k&&j!==k&&s!==C){var S=k.parentNode;S&&j!==S&&(S.replaceChild(j,k),O||(k._component=null,U(k)))}if(O&&R(O,j!==k),e.base=j,j&&!i){for(var A=e,I=e;I=I._parentComponent;)(A=I).base=j;j._component=A,j._componentConstructor=A.constructor}}!_||n?X.unshift(e):a||(e.componentDidUpdate&&e.componentDidUpdate(b,y,v),W.afterUpdate&&W.afterUpdate(e));var V,G=e._renderCallbacks;if(G)for(;V=G.pop();)V.call(e);Q||i||x()}}function A(e,t,n,o){for(var r=e&&e._component,i=e,l=r&&e._componentConstructor===t.nodeName,a=l,u=g(t);r&&!a&&(r=r._parentComponent);)a=r.constructor===t.nodeName;return r&&a&&(!o||r._component)?(D(r,u,3,n,o),e=r.base):(r&&!l&&(R(r,!0),e=i=null),r=T(t.nodeName,u,n),e&&!r.nextBase&&(r.nextBase=e,i=null),D(r,u,1,n,o),e=r.base,i&&e!==i&&(i._component=null,U(i))),e}function R(e,t){W.beforeUnmount&&W.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?R(o,t):n&&(n[Y]&&n[Y].ref&&n[Y].ref(null),e.nextBase=n,t&&(y(n),S(e)),E(n.childNodes,!t)),e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function I(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function V(e,t,n){return N(n,e,{},!1,t)}var W={},G=[],L={},z=function(e){return L[e]||(L[e]=e.toLowerCase())},B="undefined"!=typeof Promise&&Promise.resolve(),q=B?function(e){B.then(e)}:setTimeout,F={},Y="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",$={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},H={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},K=[],J={},X=[],Q=0,Z=!1,ee={};o(I.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=c(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=r(n)),o(n,l(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),h(this)},forceUpdate:function(){M(this,2)},render:function(){}}),e.h=n,e.cloneElement=s,e.Component=I,e.render=V,e.rerender=f,e.options=W})},function(e,t,n){!function(t,o){e.exports=o(n(1))}(this,function(e){"use strict";function t(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_,r=/(?:\?([^#]*))?(#.*)?$/,i=e.match(r),l={},a=void 0;if(i&&i[1])for(var u=i[1].split("&"),s=0;s<u.length;s++){var c=u[s].split("=");l[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}e=o(e.replace(r,"")),t=o(t||"");for(var h=Math.max(e.length,t.length),f=0;f<h;f++)if(t[f]&&":"===t[f].charAt(0)){var p=t[f].replace(/(^\:|[+*?]+$)/g,""),d=(t[f].match(/[+*?]+$/)||_)[0]||"",m=~d.indexOf("+"),b=~d.indexOf("*"),g=e[f]||"";if(!g&&!b&&(d.indexOf("?")<0||m)){a=!1;break}if(l[p]=decodeURIComponent(g),m||b){l[p]=e.slice(f).map(decodeURIComponent).join("/");break}}else if(t[f]!==e[f]){a=!1;break}return(n.default===!0||a!==!1)&&l}function n(e,t){var n=e.attributes||_,o=t.attributes||_;if(n.default)return 1;if(o.default)return-1;var i=r(n.path)-r(o.path);return i||n.path.length-o.path.length}function o(e){return i(e).split("/")}function r(e){return(i(e).match(/\/+/g)||"").length}function i(e){return e.replace(/(^\/+|\/+$)/g,"")}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function c(e){return N in e}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"push";k&&k[t]?k[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}function f(){var e=void 0;return e=k&&k.getCurrentLocation?k.getCurrentLocation():"undefined"!=typeof location?location:x,""+(e.pathname||"")+(e.search||"")}function p(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),d(e)&&h(e,t?"replace":"push"),m(e)}function d(e){for(var t=C.length;t--;)if(C[t].canRoute(e))return!0;return!1}function m(e){for(var t=!1,n=0;n<C.length;n++)C[n].routeTo(e)===!0&&(t=!0);return t}function b(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return p(t)}}function g(e){if(0===e.button)return b(e.currentTarget||e.target||this),y(e)}function y(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function v(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)){var t=e.target;do if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")&&c(t)){if(0!==e.button)return;if(b(t))return y(e)}while(t=t.parentNode)}}var _={},w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},k=null,C=[],x={},N="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_";"function"==typeof addEventListener&&(addEventListener("popstate",function(){return m(f())}),addEventListener("click",v));var O=function(t){var n=t.children,o=s(t,["children"]);return e.h("a",w({},o,{onClick:g}),n)},j=function(e){function o(t){l(this,o);var n=a(this,e.call(this,t));return t.history&&(k=t.history),n.state={url:n.props.url||f()},n}return u(o,e),o.prototype.shouldComponentUpdate=function(e){return e.static!==!0||(e.url!==this.props.url||e.onChange!==this.props.onChange)},o.prototype.canRoute=function(e){return this.getMatchingChildren(this.props.children,e,!1).length>0},o.prototype.routeTo=function(e){return this._didRoute=!1,this.setState({url:e}),this.updating?this.canRoute(e):(this.forceUpdate(),this._didRoute)},o.prototype.componentWillMount=function(){C.push(this),this.updating=!0},o.prototype.componentDidMount=function(){this.updating=!1},o.prototype.componentWillUnmount=function(){C.splice(C.indexOf(this),1)},o.prototype.componentWillUpdate=function(){this.updating=!0},o.prototype.componentDidUpdate=function(){this.updating=!1},o.prototype.getMatchingChildren=function(e,o,r){return e.slice().sort(n).filter(function(e){var n=e.attributes,i=n.path,l=t(o,i,n);if(l){if(r!==!1){n.url=o,n.matches=l;for(var a in l)l.hasOwnProperty(a)&&(n[a]=l[a])}return!0}})},o.prototype.render=function(e,t){var n=e.children,o=e.onChange,r=t.url,i=this.getMatchingChildren(n,r,!0),l=i[0]||null;this._didRoute=!!l;var a=this.previousUrl;return r!==a&&(this.previousUrl=r,"function"==typeof o&&o({router:this,url:r,previous:a,active:i,current:l})),l},o}(e.Component),E=function(t){var n=t.component,o=t.url,r=t.matches;return e.h(n,{url:o,matches:r})};return j.route=p,j.Router=j,j.Route=E,j.Link=O,j})},function(e,t,n){var o,r;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===r)for(var l in o)i.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}var i={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(o=[],r=function(){return n}.apply(t,o),!(void 0!==r&&(e.exports=r)))}()},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var a=n(1),u=(n(2),n(11)),s=o(u),c=n(3),h=o(c),f=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(e){var t;return(0,a.h)("div",{class:s.default.container},(0,a.h)("button",{class:(0,h.default)(s.default.button,(t={},t[s.default.happy]="happy"===e.type,t[s.default.joyful]="joyful"===e.type,t))},e.children))},t}(a.Component);t.default=f},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var a=n(1),u=n(2),s=n(7),c=o(s),h=n(8),f=o(h),p=function(e){function t(){var n,o,l;r(this,t);for(var a=arguments.length,u=Array(a),s=0;s<a;s++)u[s]=arguments[s];return n=o=i(this,e.call.apply(e,[this].concat(u))),o.handleRoute=function(e){o.currentUrl=e.url},l=n,i(o,l)}return l(t,e),t.prototype.render=function(){return(0,a.h)("div",{id:"app"},(0,a.h)(c.default,null),(0,a.h)(u.Router,{onChange:this.handleRoute},(0,a.h)(f.default,{path:"/bleak"})))},t}(a.Component);t.default=p},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var a=n(1),u=(n(2),n(10)),s=o(u),c=n(3),h=(o(c),n(4)),f=o(h),p=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return(0,a.h)("div",{class:s.default["bravenet-subscribe"]},(0,a.h)("form",{action:"https://pub48.bravenet.com/elist/add.php",method:"post"},(0,a.h)("h2",{class:s.default["bravenet-jointext"]},"sign up for news"),(0,a.h)("input",{class:s.default["bravenet-input"],type:"text",id:"elistname",name:"ename",placeholder:"name"}),(0,a.h)("input",{class:s.default["bravenet-input"],type:"text",name:"emailaddress",id:"elistaddress10646043205",placeholder:"email"}),(0,a.h)("input",{type:"hidden",name:"usernum",value:"4091571187"}),(0,a.h)("input",{type:"hidden",name:"action",value:"join"}),(0,a.h)(f.default,{type:"joyful"},"subscribe"),(0,a.h)("div",{id:"elist_err10646043205"})))},t}(a.Component);t.default=p},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var a=n(1),u=(n(2),n(12)),s=o(u),c=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return(0,a.h)("header",{class:s.default.header},(0,a.h)("nav",null,(0,a.h)("a",{href:"https://github.com/unwitting/bleak/"},"Github")))},t}(a.Component);t.default=c},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var a=n(1),u=(n(2),n(13)),s=o(u),c=n(3),h=o(c),f=n(6),p=o(f),d=n(4),m=o(d),b=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.handleDemoClick=function(){window.ga&&window.ga("send","event","interaction","click","livedemo")},t.prototype.handleDownloadClick=function(e){window.ga&&window.ga("send","event","interaction","click","download-tracking"+(e?"optout":"optin"))},t.prototype.handleSubmitIssueClick=function(){window.ga&&window.ga("send","event","interaction","click","submitissue")},t.prototype.render=function(){var e;return(0,a.h)("div",{class:s.default.home},(0,a.h)("div",{class:(0,h.default)(s.default.hero,(e={},e[s.default.prod]="production"==={NODE_ENV:"production"}.NODE_ENV,e))},(0,a.h)("h1",null,"bleak"),(0,a.h)("h2",null,"a Ghost theme")),(0,a.h)("div",{class:s.default.content},(0,a.h)("p",null,(0,a.h)("b",null,"bleak")," is a stunning free theme for the Ghost blog platform. It features full-section images and a slick responsive design that puts the right content right in your readers' faces."),(0,a.h)("p",null,"Stupidly pain-free configuration without having to mess around with the theme's files. Everything is possible right inside Ghost's admin pages."),(0,a.h)("p",null,"Oh, and  AMP pages are covered too."),(0,a.h)("a",{href:"http://unwttng.com",target:"_blank",onClick:this.handleDemoClick.bind(this)},(0,a.h)(m.default,{type:"happy"},"See a live demo")),(0,a.h)("h2",null,"install"),(0,a.h)("p",null,(0,a.h)("b",null,"bleak")," is easy to install. Just download the files you want below."),(0,a.h)("a",{href:"https://github.com/unwitting/bleak/archive/master.zip",target:"_blank",onClick:this.handleDownloadClick.bind(this,!1)},(0,a.h)(m.default,{type:"joyful"},"download .zip")),(0,a.h)("a",{href:"https://github.com/unwitting/bleak/archive/tracking_opt_out.zip",target:"_blank",onClick:this.handleDownloadClick.bind(this,!0)},(0,a.h)(m.default,{type:"happy"},".zip | no tracking (?▾)")),(0,a.h)("p",null,(0,a.h)("b",null,"Full disclosure")," - the core version of ",(0,a.h)("b",null,"bleak")," includes a Google Analytics tag."),(0,a.h)("p",null,"This tracking helps me, the developer, measure its reach and usage, assess the uptake of new features and the kinds of device it's being used on."),(0,a.h)("p",null,(0,a.h)("b",null,"You can opt out of this"),". That's totally fine - the tracking-less version is exactly the same in every other way. Thanks for reading ❤.")),(0,a.h)("a",{href:("production"==={NODE_ENV:"production"}.NODE_ENV?"//unwitting.github.io/bleak":"")+"/assets/img/screenshot_index_page.png",target:"_blank"},(0,a.h)("img",{src:("production"==={NODE_ENV:"production"}.NODE_ENV?"//unwitting.github.io/bleak":"")+"/assets/img/screenshot_index_page.png"})),(0,a.h)("div",{class:s.default.content},(0,a.h)("h2",null,"configure"),(0,a.h)("p",null,"Configuration of ",(0,a.h)("b",null,"bleak")," can all be done inside the Ghost admin screens at ",(0,a.h)("code",null,"/ghost"),"."),(0,a.h)("h3",null,"logo"),(0,a.h)("p",null,"Your blog logo should be ",(0,a.h)("b",null,"high-res")," enough to display nicely at the full width of a phone screen (at least 700px as a rough guide), and should be ",(0,a.h)("b",null,"square"),". This requirement is unfortunately the only way to ensure that your pages will display beautifully on their AMP versions (at ",(0,a.h)("code",null,".../amp"),")."),(0,a.h)("p",null,"You can set your blog logo at ",(0,a.h)("code",null,"yourblog.com/ghost/settings/general/"),". You should add a blog cover photo too, whilst you're there."),(0,a.h)("h3",null,"social links"),(0,a.h)("p",null,(0,a.h)("b",null,"bleak")," has a ton of support for social links with your networks. All configuration lines below can just be dropped into the header code injection at ",(0,a.h)("code",null,"yourblog.com/ghost/settings/code-injection/"),"."),(0,a.h)("p",null,"For any network listed below, just configure ",(0,a.h)("code",null,"window.__themeCfg.<socialnetwork>Username")," in your blog header code injection. For example, to add a navigation item to your Twitter profile, you would add:"),(0,a.h)("p",null,(0,a.h)("code",null,"<script> window.__themeCfg.twitterUsername = 'unwttng'; </script>")),(0,a.h)("p",null,"As if by magic, you now have a social links bar in your sidebar with a Twitter-icon link."),(0,a.h)("p",null,"Which networks are available?"),(0,a.h)("ul",{class:s.default.ul},(0,a.h)("li",{class:s.default.li},(0,a.h)("b",null,"500px")," ",(0,a.h)("code",null,"window.__themeCfg.fivehundredpxUsername = '...';")),(0,a.h)("li",{class:s.default.li},(0,a.h)("b",null,"bitbucket")," ",(0,a.h)("code",null,"window.__themeCfg.bitbucketUsername = '...';")),(0,a.h)("li",{class:s.default.li},(0,a.h)("b",null,"deviantart")," ",(0,a.h)("code",null,"window.__themeCfg.deviantartUsername = '...';")),(0,a.h)("li",{class:s.default.li},(0,a.h)("b",null,"etsy")," ",(0,a.h)("code",null,"window.__themeCfg.etsyUsername = '...';")),(0,a.h)("li",{class:s.default.li},(0,a.h)("b",null,"facebook")," ",(0,a.h)("code",null,"window.__themeCfg.facebookUsername = '...';")),(0,a.h)("li",{class:s.default.li},(0,a.h)("b",null,"flickr")," ",(0,a.h)("code",null,"window.__themeCfg.flickrUsername = '...';")),(0,a.h)("li",{class:s.default.li},(0,a.h)("b",null,"github")," ",(0,a.h)("code",null,"window.__themeCfg.githubUsername = '...';")),(0,a.h)("li",{class:s.default.li},(0,a.h)("b",null,"instagram")," ",(0,a.h)("code",null,"window.__themeCfg.instagramUsername = '...';")),(0,a.h)("li",{class:s.default.li},(0,a.h)("b",null,"linkedin")," ",(0,a.h)("code",null,"window.__themeCfg.linkedinUsername = '...';")),(0,a.h)("li",{class:s.default.li},(0,a.h)("b",null,"pinterest")," ",(0,a.h)("code",null,"window.__themeCfg.pinterestUsername = '...';")),(0,a.h)("li",{class:s.default.li},(0,a.h)("b",null,"soundcloud")," ",(0,a.h)("code",null,"window.__themeCfg.soundcloudUsername = '...';")),(0,a.h)("li",{class:s.default.li},(0,a.h)("b",null,"twitch")," ",(0,a.h)("code",null,"window.__themeCfg.twitchUsername = '...';")),(0,a.h)("li",{class:s.default.li},(0,a.h)("b",null,"twitter")," ",(0,a.h)("code",null,"window.__themeCfg.twitterUsername = '...';")),(0,a.h)("li",{class:s.default.li},(0,a.h)("b",null,"vimeo")," ",(0,a.h)("code",null,"window.__themeCfg.vimeoUsername = '...';")),(0,a.h)("li",{class:s.default.li},(0,a.h)("b",null,"youtube")," ",(0,a.h)("code",null,"window.__themeCfg.youtubeUsername = '...';"))),(0,a.h)("h3",null,"Google Analytics"),(0,a.h)("p",null,"Got a Google Analytics tracking ID? Instantly enable tracking on your blog by adding the following line to header code injection:"),(0,a.h)("p",null,(0,a.h)("code",null,"<script> window.__themeCfg.googleAnalyticsId = 'UA-12345678-1'; </script>")),(0,a.h)("h3",null,"Disqus"),(0,a.h)("p",null,"To integrate a bleak blog with Disqus, you just need a Disqus username. Drop it into your configuration with this one line in the header code injection interface:"),(0,a.h)("p",null,(0,a.h)("code",null,"<script> window.__themeCfg.disqusUsername = 'mydisqususername'; </script>"))),(0,a.h)("a",{href:("production"==={NODE_ENV:"production"}.NODE_ENV?"//unwitting.github.io/bleak":"")+"/assets/img/screenshot_post_page.png",target:"_blank"},(0,a.h)("img",{src:("production"==={NODE_ENV:"production"}.NODE_ENV?"//unwitting.github.io/bleak":"")+"/assets/img/screenshot_post_page.png"})),(0,a.h)("div",{class:s.default.content},(0,a.h)("h2",null,"that's it"),(0,a.h)("p",null,"You're done! If you have any problems with ",(0,a.h)("b",null,"bleak"),", head over to the Github project and raise an issue! I'll take a look."),(0,a.h)("a",{href:"https://github.com/unwitting/bleak/issues",target:"_blank",onClick:this.handleSubmitIssueClick.bind(this)},(0,a.h)(m.default,{type:"happy"},"submit an issue")),(0,a.h)(p.default,null)))},t}(a.Component);t.default=b},function(e,t){},function(e,t){e.exports={"hero-image":"hero-image_34317","bravenet-subscribe":"bravenet-subscribe_27qXF","bravenet-jointext":"bravenet-jointext_2wxsp","bravenet-input":"bravenet-input_13IIr"}},function(e,t){e.exports={"hero-image":"hero-image_sEj6n",container:"container_34kiW",button:"button_375__",happy:"happy_1hyYP",joyful:"joyful_30awJ"}},function(e,t){e.exports={"hero-image":"hero-image_2yC5C",header:"header_3fP58"}},function(e,t){e.exports={"hero-image":"hero-image_3Tb16",home:"home_2xyY2",hero:"hero_1E3X0",prod:"prod_1b8FJ",content:"content_3l3P4",ul:"ul_2cN_E",li:"li_w5QQX"}}]);
//# sourceMappingURL=bundle.js.map
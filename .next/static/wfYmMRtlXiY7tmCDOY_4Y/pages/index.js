(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2NuI":function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,i,a,s,c){if(r(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,i,a,s,c],p=0;(u=new Error(t.replace(/%s/g,(function(){return l[p++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},"5Xsb":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("o0o1"),o=n.n(r),i=n("q1tI"),a=n.n(i),s=n("vcXL"),c=n.n(s),u=a.a.createElement,l=Object(i.createContext)();t.b=function(e){var t=Object(i.useState)(),n=t[0],r=t[1];return Object(i.useEffect)((function(){!function(){var e,t;o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(c()("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json"));case 2:return e=n.sent,n.next=5,o.a.awrap(e.json());case 5:t=n.sent,r(t),console.log(t);case 8:case"end":return n.stop()}}),null,null,null,Promise)}()}),[]),u(l.Provider,{value:{characters:n}},e.children)}},Jssm:function(e,t,n){"use strict";var r=n("q1tI"),o=n("i8i4"),i=n("17x9"),a=n("fhzG");e.exports=a({displayName:"ReactFitText",propTypes:{children:i.element.isRequired,compressor:i.number,minFontSize:i.number,maxFontSize:i.number},getDefaultProps:function(){return{compressor:1,minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY}},componentDidMount:function(){window.addEventListener("resize",this._onBodyResize),this._onBodyResize()},componentWillUnmount:function(){window.removeEventListener("resize",this._onBodyResize)},componentDidUpdate:function(){this._onBodyResize()},_onBodyResize:function(){var e=o.findDOMNode(this),t=e.offsetWidth;e.style.fontSize=Math.max(Math.min(t/(10*this.props.compressor),parseFloat(this.props.maxFontSize)),parseFloat(this.props.minFontSize))+"px"},_renderChildren:function(){var e=this;return r.Children.map(this.props.children,(function(t){return r.cloneElement(t,{ref:function(t){return e._childRef=t}})}))},render:function(){return this._renderChildren()[0]}})},NMDd:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("q1tI"));function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var a=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),s=0;s<o;s++)a[s]=arguments[s];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.state={isLoading:!0,isError:!1,src:null,width:null,height:null,errMsg:null},r.reload=function(e){r.setState({isLoading:!0,isError:!1,src:null,errMsg:null});var t=new Image;t.src=e.src,t.onload=function(){r.setState({src:t.src,width:t.width,height:t.height,isLoading:!1,isError:!1,errMsg:null}),e.onLoad&&e.onLoad(t)},t.onerror=function(t){r.setState({src:null,width:null,height:null,isLoading:!1,isError:!0,errMsg:t}),e.onError&&e.onError(t)}},i(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){this.props.src!==e.src&&this.reload(e)}},{key:"componentDidMount",value:function(){this.reload(this.props)}},{key:"render",value:function(){var e=this.props,t=e.loading,n=e.error,r=e.image,i=e.style,a=e.className,s=this.state,c=s.src,u=s.width,l=s.height,p=s.isLoading,f=s.isError,d=s.errMsg;return t&&p?t():n&&f&&d?n(d):c&&r?r({src:c,width:u,height:l}):c?o.createElement("img",{src:c,style:i,className:a,width:u,height:l}):null}}]),t}(o.PureComponent);t.default=a},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("5Yp1"),a=n("YFqc"),s=n.n(a),c=(n("vcXL"),n("NMDd")),u=n.n(c),l=n("LvDl"),p=n.n(l),f=o.a.createElement,d=function(e){var t=e.data,r=t.name,i=t.biography.fullName,a=t.biography.publisher,c=n("Jssm");return f(o.a.Fragment,null,f(s.a,{href:"/characters/[slug]",as:"/characters/".concat(t.slug)},f("div",{className:"characterCard hvr-sweep-to-top d-flex flex-column align-items-start"},f("div",{className:"characterImageContainer"},f(u.a,{src:t.images.sm,alt:t.name,className:"characterImage",loading:function(){return f("div",{className:"lds-dual-ring d-flex justify-content-center align-items-center h-100 mx-auto"})},error:function(){return f("div",{className:"d-flex justify-content-center align-items-center h-100"},"Error")}})),f(c,{minFontSize:17,maxFontSize:20},f("p",{className:"pl-2 name animated fadeIn"},p.a.upperCase(r))),f(c,{minFontSize:13,maxFontSize:13},f("p",{className:"pl-2 full-name animated fadeIn"},r===i?"":i)),f(c,{minFontSize:12,maxFontSize:13},f("p",{className:"pl-2 animated fadeIn mt-auto publisher"},a?p.a.upperCase(a):"")))))},m=(n("17x9"),"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e});function h(e){return e.toString().replace(/\s/g,"").toLowerCase()}function y(e,t){return t.filter((function(t){return!e.length||function e(t){return Object.values(t).reduce((function(t,n){var r=null!==n&&void 0!==n;return t+("object"===("undefined"===typeof n?"undefined":m(n))&&null!==n?h(e(n)):r?h(n):"")}),"")}(t).includes(h(e))}))}(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=e.value,n=e.data;return this.props.renderResults(y(t,n))},t}(r.Component)).propTypes={};var E=n("5Xsb"),N=o.a.createElement;t.default=function(){var e=Object(r.useContext)(E.a).characters,t=Object(r.useState)(0),n=t[0],a=t[1],s=e?e.slice(18*n,18*(n+1)):[],c=function(e){if("back"===e){if(0===n)return;a((function(e){return e-1}))}else"next"===e&&a((function(e){return e+1}))};return N(o.a.Fragment,null,N("div",{id:"gridTop"}),N(i.a,null,N("div",{className:"row no-gutters"},N("div",{className:"col"}),N("div",{className:"col-10 p-0"},N("div",{className:"cardGrid"},s.map((function(e){return N(d,{data:e,key:Math.random()})})))),N("div",{className:"col p-0"})),N("div",null,N("div",{className:"d-flex justify-content-center mt-4 mb-4"},N("a",{href:"#gridTop",className:"btn btn-primary",onClick:function(){return c("back")}},"Back"),N("a",{href:"#gridTop",className:"btn btn-primary ml-5",onClick:function(){return c("next")}},"Next")))))}},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},fhzG:function(e,t,n){"use strict";var r=n("q1tI"),o=n("lT4e");if("undefined"===typeof r)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var i=(new r.Component).updater;e.exports=o(r.Component,r.isValidElement,i)},lT4e:function(e,t,n){"use strict";var r=n("Qetd"),o=n("t33a"),i=n("2NuI"),a="mixins";e.exports=function(e,t,n){var s=[],c={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},u={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},l={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)f(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=r({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=r({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=m(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=r({},e.propTypes,t)},statics:function(e,t){!function(e,t){if(!t)return;for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){if(i(!(n in l),'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n),n in e){var o=u.hasOwnProperty(n)?u[n]:null;return i("DEFINE_MANY_MERGED"===o,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=m(e[n],r))}e[n]=r}}}(e,t)},autobind:function(){}};function p(e,t){var n=c.hasOwnProperty(t)?c[t]:null;v.hasOwnProperty(t)&&i("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&i("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function f(e,n){if(n){i("function"!==typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=e.prototype,o=r.__reactAutoBindPairs;for(var s in n.hasOwnProperty(a)&&l.mixins(e,n.mixins),n)if(n.hasOwnProperty(s)&&s!==a){var u=n[s],f=r.hasOwnProperty(s);if(p(f,s),l.hasOwnProperty(s))l[s](e,u);else{var d=c.hasOwnProperty(s);if("function"===typeof u&&!d&&!f&&!1!==n.autobind)o.push(s,u),r[s]=u;else if(f){var y=c[s];i(d&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,s),"DEFINE_MANY_MERGED"===y?r[s]=m(r[s],u):"DEFINE_MANY"===y&&(r[s]=h(r[s],u))}else r[s]=u}}}else;}function d(e,t){for(var n in i(e&&t&&"object"===typeof e&&"object"===typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."),t)t.hasOwnProperty(n)&&(i(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function m(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return d(o,n),d(o,r),o}}function h(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function y(e,t){return t.bind(e)}var E={componentDidMount:function(){this.__isMounted=!0}},N={componentWillUnmount:function(){this.__isMounted=!1}},v={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},b=function(){};return r(b.prototype,e.prototype,v),function(e){var t=function(e,r,a){this.__reactAutoBindPairs.length&&function(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var r=t[n],o=t[n+1];e[r]=y(e,o)}}(this),this.props=e,this.context=r,this.refs=o,this.updater=a||n,this.state=null;var s=this.getInitialState?this.getInitialState():null;i("object"===typeof s&&!Array.isArray(s),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=s};for(var r in t.prototype=new b,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],s.forEach(f.bind(null,t)),f(t,E),f(t,e),f(t,N),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),i(t.prototype.render,"createClass(...): Class specification must implement a `render` method."),c)t.prototype[r]||(t.prototype[r]=null);return t}}},t33a:function(e,t,n){"use strict";e.exports={}},vcXL:function(e,t,n){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}},[["vlRD",0,2,4,1,3]]]);
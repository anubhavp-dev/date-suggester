(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[927],{9361:function(a,b){"use strict";b.Z=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}},8045:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(9361).Z,e=c(4941).Z,f=c(3929).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){var b,c,h=a.src,i=a.sizes,p=a.unoptimized,q=void 0!==p&&p,v=a.priority,B=void 0!==v&&v,D=a.loading,E=a.lazyRoot,F=void 0===E?null:E,G=a.lazyBoundary,H=a.className,I=a.quality,J=a.width,K=a.height,L=a.style,M=a.objectFit,N=a.objectPosition,O=a.onLoadingComplete,P=a.placeholder,Q=void 0===P?"empty":P,R=a.blurDataURL,S=j(a,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),T=k.useContext(o.ImageConfigContext),U=k.useMemo(function(){var a=s||T||m.imageConfigDefault,b=f(a.deviceSizes).concat(f(a.imageSizes)).sort(function(a,b){return a-b}),c=a.deviceSizes.sort(function(a,b){return a-b});return g({},a,{allSizes:b,deviceSizes:c})},[T]),V=S,W=i?"responsive":"intrinsic";"layout"in V&&(V.layout&&(W=V.layout),delete V.layout);var X=A;if("loader"in V){if(V.loader){var Y,Z=V.loader;X=function(a){a.config;var b=j(a,["config"]);return Z(b)}}delete V.loader}var $="";if(x(h)){var _=w(h)?h.default:h;if(!_.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(_)));if(R=R||_.blurDataURL,$=_.src,(!W||"fill"!==W)&&(K=K||_.height,J=J||_.width,!_.height||!_.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(_)))}h="string"==typeof h?h:$;var aa=!B&&("lazy"===D|| void 0===D);(h.startsWith("data:")||h.startsWith("blob:"))&&(q=!0,aa=!1),t.has(h)&&(aa=!1),r&&(q=!0);var ab=e(k.useState(!1),2),ac=ab[0],ad=ab[1],ae=e(n.useIntersection({rootRef:F,rootMargin:G||"200px",disabled:!aa}),3),af=ae[0],ag=ae[1],ah=ae[2],ai=!aa||ag,aj={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ak={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},al=!1,am=z(J),an=z(K),ao=z(I),ap=Object.assign({},L,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:N}),aq="blur"!==Q||ac?{}:{backgroundSize:M||"cover",backgroundPosition:N||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(R,'")')};if("fill"===W)aj.display="block",aj.position="absolute",aj.top=0,aj.left=0,aj.bottom=0,aj.right=0;else if(void 0!==am&& void 0!==an){var ar=an/am,as=isNaN(ar)?"100%":"".concat(100*ar,"%");"responsive"===W?(aj.display="block",aj.position="relative",al=!0,ak.paddingTop=as):"intrinsic"===W?(aj.display="inline-block",aj.position="relative",aj.maxWidth="100%",al=!0,ak.maxWidth="100%",b="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(am,"%27%20height=%27").concat(an,"%27/%3e")):"fixed"===W&&(aj.display="inline-block",aj.position="relative",aj.width=am,aj.height=an)}var at={src:u,srcSet:void 0,sizes:void 0};ai&&(at=y({config:U,src:h,unoptimized:q,layout:W,width:am,quality:ao,sizes:i,loader:X}));var au=h,av="imagesrcset",aw="imagesizes";aw="imageSizes";var ax=(d(c={},"imageSrcSet",at.srcSet),d(c,aw,at.sizes),c),ay=k.default.useLayoutEffect,az=k.useRef(O),aA=k.useRef(h);k.useEffect(function(){az.current=O},[O]),ay(function(){aA.current!==h&&(ah(),aA.current=h)},[ah,h]);var aB=g({isLazy:aa,imgAttributes:at,heightInt:an,widthInt:am,qualityInt:ao,layout:W,className:H,imgStyle:ap,blurStyle:aq,loading:D,config:U,unoptimized:q,placeholder:Q,loader:X,srcString:au,onLoadingCompleteRef:az,setBlurComplete:ad,setIntersection:af,isVisible:ai,noscriptSizes:i},V);return k.default.createElement(k.default.Fragment,null,k.default.createElement("span",{style:aj},al?k.default.createElement("span",{style:ak},b?k.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:b}):null):null,k.default.createElement(C,Object.assign({},aB))),B?k.default.createElement(l.default,null,k.default.createElement("link",Object.assign({key:"__nimg-"+at.src+at.srcSet+at.sizes,rel:"preload",as:"image",href:at.srcSet?void 0:at.src},ax))):null)};var g=c(6495).Z,h=c(2648).Z,i=c(1598).Z,j=c(7273).Z,k=i(c(7294)),l=h(c(5443)),m=c(9309),n=c(7190),o=c(9977);c(3794);var p=c(2392),q={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1},r=(q.experimentalRemotePatterns,q.experimentalUnoptimized),s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1},t=new Set,u="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",v=new Map([["default",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality;return c.endsWith(".svg")&&!b.dangerouslyAllowSVG?c:"".concat(p.normalizePathTrailingSlash(b.path),"?url=").concat(encodeURIComponent(c),"&w=").concat(d,"&q=").concat(e||75)}],["imgix",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality,f=new URL("".concat(b.path).concat(D(c))),g=f.searchParams;return g.set("auto",g.getAll("auto").join(",")||"format"),g.set("fit",g.get("fit")||"max"),g.set("w",g.get("w")||d.toString()),e&&g.set("q",e.toString()),f.href}],["cloudinary",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality,f=["f_auto","c_limit","w_"+d,"q_"+(e||"auto")].join(",")+"/";return"".concat(b.path).concat(f).concat(D(c))}],["akamai",function(a){var b=a.config,c=a.src,d=a.width;return"".concat(b.path).concat(D(c),"?imwidth=").concat(d)}],["custom",function(a){var b=a.src;throw Error('Image with src "'.concat(b,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function w(a){return void 0!==a.default}function x(a){var b;return"object"==typeof a&&(w(a)|| void 0!==(b=a).src)}function y(a){var b=a.config,c=a.src,d=a.unoptimized,e=a.layout,g=a.width,h=a.quality,i=a.sizes,j=a.loader;if(d)return{src:c,srcSet:void 0,sizes:void 0};var k=function(a,b,c,d){var e=a.deviceSizes,g=a.allSizes;if(d&&("fill"===c||"responsive"===c)){for(var h=/(^|\s)(1?\d?\d)vw/g,i=[];j=h.exec(d);j)i.push(parseInt(j[2]));if(i.length){var j,k,l=.01*(k=Math).min.apply(k,f(i));return{widths:g.filter(function(a){return a>=e[0]*l}),kind:"w"}}return{widths:g,kind:"w"}}return"number"!=typeof b||"fill"===c||"responsive"===c?{widths:e,kind:"w"}:{widths:f(new Set([b,2*b].map(function(a){return g.find(function(b){return b>=a})||g[g.length-1]}))),kind:"x"}}(b,g,e,i),l=k.widths,m=k.kind,n=l.length-1;return{sizes:i||"w"!==m?i:"100vw",srcSet:l.map(function(a,d){return"".concat(j({config:b,src:c,quality:h,width:a})," ").concat("w"===m?a:d+1).concat(m)}).join(", "),src:j({config:b,src:c,quality:h,width:l[n]})}}function z(a){return"number"==typeof a?a:"string"==typeof a?parseInt(a,10):void 0}function A(a){var b,c=(null==(b=a.config)?void 0:b.loader)||"default",d=v.get(c);if(d)return d(a);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(m.VALID_LOADERS.join(", "),". Received: ").concat(c))}function B(a,b,c,d,e,f){a&&a.src!==u&&a["data-loaded-src"]!==b&&(a["data-loaded-src"]=b,("decode"in a?a.decode():Promise.resolve()).catch(function(){}).then(function(){if(a.parentNode&&(t.add(b),"blur"===d&&f(!0),null==e?void 0:e.current)){var c=a.naturalWidth,g=a.naturalHeight;e.current({naturalWidth:c,naturalHeight:g})}}))}var C=function(a){var b=a.imgAttributes,c=(a.heightInt,a.widthInt),d=a.qualityInt,e=a.layout,f=a.className,h=a.imgStyle,i=a.blurStyle,l=a.isLazy,m=a.placeholder,n=a.loading,o=a.srcString,p=a.config,q=a.unoptimized,r=a.loader,s=a.onLoadingCompleteRef,t=a.setBlurComplete,u=a.setIntersection,v=a.onLoad,w=a.onError,x=(a.isVisible,a.noscriptSizes),z=j(a,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return n=l?"lazy":n,k.default.createElement(k.default.Fragment,null,k.default.createElement("img",Object.assign({},z,b,{decoding:"async","data-nimg":e,className:f,style:g({},h,i),ref:k.useCallback(function(a){u(a),(null==a?void 0:a.complete)&&B(a,o,e,m,s,t)},[u,o,e,m,s,t,]),onLoad:function(a){B(a.currentTarget,o,e,m,s,t),v&&v(a)},onError:function(a){"blur"===m&&t(!0),w&&w(a)}})),(l||"blur"===m)&&k.default.createElement("noscript",null,k.default.createElement("img",Object.assign({},z,y({config:p,src:o,unoptimized:q,layout:e,width:c,quality:d,sizes:x,loader:r}),{decoding:"async","data-nimg":e,style:h,className:f,loading:n}))))};function D(a){return"/"===a[0]?a.slice(1):a}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},7190:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b=a.rootRef,c=a.rootMargin,h=a.disabled||!g,i=e.useRef(),k=d(e.useState(!1),2),l=k[0],m=k[1],n=d(e.useState(null),2),o=n[0],p=n[1];e.useEffect(function(){if(g){if(i.current&&(i.current(),i.current=void 0),!h&&!l)return o&&o.tagName&&(i.current=j(o,function(a){return a&&m(a)},{root:null==b?void 0:b.current,rootMargin:c})),function(){null==i.current||i.current(),i.current=void 0}}else if(!l){var a=f.requestIdleCallback(function(){return m(!0)});return function(){return f.cancelIdleCallback(a)}}},[o,h,c,b,l]);var q=e.useCallback(function(){m(!1)},[]);return[p,l,q]};var e=c(7294),f=c(9311),g="function"==typeof IntersectionObserver,h=new Map,i=[];function j(a,b,c){var d=k(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){if(g.delete(a),f.unobserve(a),0===g.size){f.disconnect(),h.delete(e);var b=i.findIndex(function(a){return a.root===e.root&&a.margin===e.margin});b> -1&&i.splice(b,1)}}}function k(a){var b,c={root:a.root||null,margin:a.rootMargin||""},d=i.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(b=h.get(d)))return b;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return b={id:c,observer:f,elements:e},i.push(c),h.set(c,b),b}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},5675:function(a,b,c){a.exports=c(8045)},1163:function(a,b,c){a.exports=c(387)},1852:function(a,b,c){!function(b,d){a.exports=d(c(7294))}(this,a=>(()=>{var b={"./node_modules/css-mediaquery/index.js":(a,b)=>{"use strict";b.match=function(a,b){return h(a).some(function(a){var c=a.inverse,d="all"===a.type||b.type===a.type;if(d&&c||!(d||c))return!1;var e=a.expressions.every(function(a){var c=a.feature,d=a.modifier,e=a.value,f=b[c];if(!f)return!1;switch(c){case"orientation":case"scan":return f.toLowerCase()===e.toLowerCase();case"width":case"height":case"device-width":case"device-height":e=k(e),f=k(f);break;case"resolution":e=j(e),f=j(f);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":e=i(e),f=i(f);break;case"grid":case"color":case"color-index":case"monochrome":e=parseInt(e,10)||1,f=parseInt(f,10)||0}switch(d){case"min":return f>=e;case"max":return f<=e;default:return f===e}});return e&&!c|| !e&&c})},b.parse=h;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,d=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,e=/^(?:(min|max)-)?(.+)/,f=/(em|rem|px|cm|mm|in|pt|pc)?$/,g=/(dpi|dpcm|dppx)?$/;function h(a){return a.split(",").map(function(a){var b=(a=a.trim()).match(c),f=b[1],g=b[2],h=b[3]||"",i={};return i.inverse=!!f&&"not"===f.toLowerCase(),i.type=g?g.toLowerCase():"all",h=h.match(/\([^\)]+\)/g)||[],i.expressions=h.map(function(a){var b=a.match(d),c=b[1].toLowerCase().match(e);return{modifier:c[1],feature:c[2],value:b[2]}}),i})}function i(a){var b,c=Number(a);return c||(c=(b=a.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/b[2]),c}function j(a){var b=parseFloat(a),c=String(a).match(g)[1];switch(c){case"dpcm":return b/2.54;case"dppx":return 96*b;default:return b}}function k(a){var b=parseFloat(a),c=String(a).match(f)[1];switch(c){case"em":case"rem":return 16*b;case"cm":return 96*b/2.54;case"mm":return 96*b/2.54/10;case"in":return 96*b;case"pt":return 72*b;case"pc":return 72*b/12;default:return b}}},"./node_modules/hyphenate-style-name/index.js":(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>h});var d=/[A-Z]/g,e=/^ms-/,f={};function g(a){return"-"+a.toLowerCase()}let h=function(a){if(f.hasOwnProperty(a))return f[a];var b=a.replace(d,g);return f[a]=e.test(b)?"-"+b:b}},"./node_modules/matchmediaquery/index.js":(a,b,c)=>{"use strict";var d=c(/*! css-mediaquery */ "./node_modules/css-mediaquery/index.js").match,e="undefined"!=typeof window?window.matchMedia:null;function f(a,b,c){var f=this;if(e&&!c){var g=e.call(window,a);this.matches=g.matches,this.media=g.media,g.addListener(h)}else this.matches=d(a,b),this.media=a;function h(a){f.matches=a.matches,f.media=a.media}this.addListener=function(a){g&&g.addListener(a)},this.removeListener=function(a){g&&g.removeListener(a)},this.dispose=function(){g&&g.removeListener(h)}}a.exports=function(a,b,c){return new f(a,b,c)}},"./node_modules/object-assign/index.js":a=>{"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ /* eslint-disable no-unused-vars */ var b=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;a.exports=!function(){try{if(!Object.assign)return!1;var a=new String("abc");if(a[5]="de","5"===Object.getOwnPropertyNames(a)[0])return!1;for(var b={},c=0;c<10;c++)b["_"+String.fromCharCode(c)]=c;var d=Object.getOwnPropertyNames(b).map(function(a){return b[a]});if("0123456789"!==d.join(""))return!1;var e={};if("abcdefghijklmnopqrst".split("").forEach(function(a){e[a]=a}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},e)).join(""))return!1;return!0}catch(f){return!1}}()?function(a,e){for(var f,g,h=function(a){if(null==a)throw TypeError("Object.assign cannot be called with null or undefined");return Object(a)}(a),i=1;i<arguments.length;i++){for(var j in f=Object(arguments[i]))c.call(f,j)&&(h[j]=f[j]);if(b){g=b(f);for(var k=0;k<g.length;k++)d.call(f,g[k])&&(h[g[k]]=f[g[k]])}}return h}:Object.assign},"./node_modules/prop-types/checkPropTypes.js":(a,b,c)=>{"use strict";var d=function(){},e=c(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js"),f={},g=c(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");function h(a,b,c,h,i){for(var j in a)if(g(a,j)){var k;try{if("function"!=typeof a[j]){var l=Error((h||"React class")+": "+c+" type `"+j+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof a[j]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw l.name="Invariant Violation",l}k=a[j](b,j,h,c,null,e)}catch(m){k=m}if(!k||k instanceof Error||d((h||"React class")+": type specification of "+c+" `"+j+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof k+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),k instanceof Error&&!(k.message in f)){f[k.message]=!0;var n=i?i():"";d("Failed "+c+" type: "+k.message+(null!=n?n:""))}}}d=function(a){var b="Warning: "+a;"undefined"!=typeof console&&console.error(b);try{throw Error(b)}catch(c){}},h.resetWarningCache=function(){f={}},a.exports=h},"./node_modules/prop-types/factoryWithTypeCheckers.js":(a,b,c)=>{"use strict";var d=c(/*! react-is */ "./node_modules/react-is/index.js"),e=c(/*! object-assign */ "./node_modules/object-assign/index.js"),f=c(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js"),g=c(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js"),h=c(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js"),i=function(){};function j(){return null}i=function(a){var b="Warning: "+a;"undefined"!=typeof console&&console.error(b);try{throw Error(b)}catch(c){}},a.exports=function(a,b){var c="function"==typeof Symbol&&Symbol.iterator,k="<<anonymous>>",l={array:p("array"),bigint:p("bigint"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:o(j),arrayOf:function(a){return o(function(b,c,d,e,g){if("function"!=typeof a)return new n("Property `"+g+"` of component `"+d+"` has invalid PropType notation inside arrayOf.");var h=b[c];if(!Array.isArray(h)){var i=s(h);return new n("Invalid "+e+" `"+g+"` of type "+("`"+i+"` supplied to `")+d+"`, expected an array.")}for(var j=0;j<h.length;j++){var k=a(h,j,d,e,g+"["+j+"]",f);if(k instanceof Error)return k}return null})},element:o(function(b,c,d,e,f){var g=b[c];if(!a(g)){var h=s(g);return new n("Invalid "+e+" `"+f+"` of type "+("`"+h+"` supplied to `")+d+"`, expected a single ReactElement.")}return null}),elementType:o(function(a,b,c,e,f){var g=a[b];if(!d.isValidElementType(g)){var h=s(g);return new n("Invalid "+e+" `"+f+"` of type "+("`"+h+"` supplied to `")+c+"`, expected a single ReactElement type.")}return null}),instanceOf:function(a){return o(function(b,c,d,e,f){if(!(b[c]instanceof a)){var g=a.name||k,h=v(b[c]);return new n("Invalid "+e+" `"+f+"` of type "+("`"+h+"` supplied to `")+d+"`, expected instance of `"+g+"`.")}return null})},node:o(function(a,b,c,d,e){return r(a[b])?null:new n("Invalid "+d+" `"+e+"` supplied to `"+c+"`, expected a ReactNode.")}),objectOf:function(a){return o(function(b,c,d,e,h){if("function"!=typeof a)return new n("Property `"+h+"` of component `"+d+"` has invalid PropType notation inside objectOf.");var i=b[c],j=s(i);if("object"!==j)return new n("Invalid "+e+" `"+h+"` of type "+("`"+j+"` supplied to `")+d+"`, expected an object.");for(var k in i)if(g(i,k)){var l=a(i,k,d,e,h+"."+k,f);if(l instanceof Error)return l}return null})},oneOf:function(a){return Array.isArray(a)?o(function(b,c,d,e,f){for(var g=b[c],h=0;h<a.length;h++)if(m(g,a[h]))return null;var i=JSON.stringify(a,function(a,b){return"symbol"===t(b)?String(b):b});return new n("Invalid "+e+" `"+f+"` of value `"+String(g)+"` "+("supplied to `"+d+"`, expected one of ")+i+".")}):(arguments.length>1?i("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):i("Invalid argument supplied to oneOf, expected an array."),j)},oneOfType:function(a){if(!Array.isArray(a))return i("Invalid argument supplied to oneOfType, expected an instance of array."),j;for(var b=0;b<a.length;b++){var c=a[b];if("function"!=typeof c)return i("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+u(c)+" at index "+b+"."),j}return o(function(b,c,d,e,h){for(var i=[],j=0;j<a.length;j++){var k=(0,a[j])(b,c,d,e,h,f);if(null==k)return null;k.data&&g(k.data,"expectedType")&&i.push(k.data.expectedType)}var l=i.length>0?", expected one of type ["+i.join(", ")+"]":"";return new n("Invalid "+e+" `"+h+"` supplied to "+("`"+d+"`")+l+".")})},shape:function(a){return o(function(b,c,d,e,g){var h=b[c],i=s(h);if("object"!==i)return new n("Invalid "+e+" `"+g+"` of type `"+i+"` supplied to `"+d+"`, expected `object`.");for(var j in a){var k=a[j];if("function"!=typeof k)return q(d,e,g,j,t(k));var l=k(h,j,d,e,g+"."+j,f);if(l)return l}return null})},exact:function(a){return o(function(b,c,d,h,i){var j=b[c],k=s(j);if("object"!==k)return new n("Invalid "+h+" `"+i+"` of type `"+k+"` supplied to `"+d+"`, expected `object`.");var l=e({},b[c],a);for(var m in l){var o=a[m];if(g(a,m)&&"function"!=typeof o)return q(d,h,i,m,t(o));if(!o)return new n("Invalid "+h+" `"+i+"` key `"+m+"` supplied to `"+d+"`.\nBad object: "+JSON.stringify(b[c],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(a),null,"  "));var p=o(j,m,d,h,i+"."+m,f);if(p)return p}return null})}};function m(a,b){return a===b?0!==a||1/a==1/b:a!=a&&b!=b}function n(a,b){this.message=a,this.data=b&&"object"==typeof b?b:{},this.stack=""}function o(a){var c={},d=0;function e(e,g,h,j,l,m,o){if(j=j||k,m=m||h,o!==f){if(b){var p=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}if("undefined"!=typeof console){var q=j+":"+h;!c[q]&&d<3&&(i("You are manually calling a React.PropTypes validation function for the `"+m+"` prop on `"+j+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),c[q]=!0,d++)}}return null!=g[h]?a(g,h,j,l,m):e?new n(null===g[h]?"The "+l+" `"+m+"` is marked as required in `"+j+"`, but its value is `null`.":"The "+l+" `"+m+"` is marked as required in `"+j+"`, but its value is `undefined`."):null}var g=e.bind(null,!1);return g.isRequired=e.bind(null,!0),g}function p(a){return o(function(b,c,d,e,f,g){var h=b[c];if(s(h)!==a){var i=t(h);return new n("Invalid "+e+" `"+f+"` of type "+("`"+i+"` supplied to `")+d+"`, expected `"+a+"`.",{expectedType:a})}return null})}function q(a,b,c,d,e){return new n((a||"React class")+": "+b+" type `"+c+"."+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+e+"`.")}function r(b){switch(typeof b){case"number":case"string":case"undefined":return!0;case"boolean":return!b;case"object":if(Array.isArray(b))return b.every(r);if(null===b||a(b))return!0;var d=function(a){var b=a&&(c&&a[c]||a["@@iterator"]);if("function"==typeof b)return b}(b);if(!d)return!1;var e,f=d.call(b);if(d!==b.entries){for(;!(e=f.next()).done;)if(!r(e.value))return!1}else for(;!(e=f.next()).done;){var g=e.value;if(g&&!r(g[1]))return!1}return!0;default:return!1}}function s(a){var b,c,d=typeof a;return Array.isArray(a)?"array":a instanceof RegExp?"object":(b=d,c=a,"symbol"===b||c&&("Symbol"===c["@@toStringTag"]||"function"==typeof Symbol&&c instanceof Symbol))?"symbol":d}function t(a){if(null==a)return""+a;var b=s(a);if("object"===b){if(a instanceof Date)return"date";if(a instanceof RegExp)return"regexp"}return b}function u(a){var b=t(a);switch(b){case"array":case"object":return"an "+b;case"boolean":case"date":case"regexp":return"a "+b;default:return b}}function v(a){return a.constructor&&a.constructor.name?a.constructor.name:k}return n.prototype=Error.prototype,l.checkPropTypes=h,l.resetWarningCache=h.resetWarningCache,l.PropTypes=l,l}},"./node_modules/prop-types/index.js":(a,b,c)=>{var d=c(/*! react-is */ "./node_modules/react-is/index.js");a.exports=c(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(d.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":a=>{"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":a=>{a.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(a,b)=>{"use strict";!function(){var a="function"==typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,d=a?Symbol.for("react.portal"):60106,e=a?Symbol.for("react.fragment"):60107,f=a?Symbol.for("react.strict_mode"):60108,g=a?Symbol.for("react.profiler"):60114,h=a?Symbol.for("react.provider"):60109,i=a?Symbol.for("react.context"):60110,j=a?Symbol.for("react.async_mode"):60111,k=a?Symbol.for("react.concurrent_mode"):60111,l=a?Symbol.for("react.forward_ref"):60112,m=a?Symbol.for("react.suspense"):60113,n=a?Symbol.for("react.suspense_list"):60120,o=a?Symbol.for("react.memo"):60115,p=a?Symbol.for("react.lazy"):60116,q=a?Symbol.for("react.block"):60121,r=a?Symbol.for("react.fundamental"):60117,s=a?Symbol.for("react.responder"):60118,t=a?Symbol.for("react.scope"):60119;function u(a){if("object"==typeof a&&null!==a){var b=a.$$typeof;switch(b){case c:var n=a.type;switch(n){case j:case k:case e:case g:case f:case m:return n;default:var q=n&&n.$$typeof;switch(q){case i:case l:case p:case o:case h:return q;default:return b}}case d:return b}}}var v=!1;function w(a){return u(a)===k}b.AsyncMode=j,b.ConcurrentMode=k,b.ContextConsumer=i,b.ContextProvider=h,b.Element=c,b.ForwardRef=l,b.Fragment=e,b.Lazy=p,b.Memo=o,b.Portal=d,b.Profiler=g,b.StrictMode=f,b.Suspense=m,b.isAsyncMode=function(a){return v||(v=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),w(a)||u(a)===j},b.isConcurrentMode=w,b.isContextConsumer=function(a){return u(a)===i},b.isContextProvider=function(a){return u(a)===h},b.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},b.isForwardRef=function(a){return u(a)===l},b.isFragment=function(a){return u(a)===e},b.isLazy=function(a){return u(a)===p},b.isMemo=function(a){return u(a)===o},b.isPortal=function(a){return u(a)===d},b.isProfiler=function(a){return u(a)===g},b.isStrictMode=function(a){return u(a)===f},b.isSuspense=function(a){return u(a)===m},b.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===k||a===g||a===f||a===m||a===n||"object"==typeof a&&null!==a&&(a.$$typeof===p||a.$$typeof===o||a.$$typeof===h||a.$$typeof===i||a.$$typeof===l||a.$$typeof===r||a.$$typeof===s||a.$$typeof===t||a.$$typeof===q)},b.typeOf=u}()},"./node_modules/react-is/index.js":(a,b,c)=>{"use strict";a.exports=c(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(a,b,c)=>{"use strict";function d(a,b){if(a===b)return!0;if(!a||!b)return!1;var c=Object.keys(a),d=Object.keys(b),e=c.length;if(d.length!==e)return!1;for(var f=0;f<e;f++){var g=c[f];if(a[g]!==b[g]||!Object.prototype.hasOwnProperty.call(b,g))return!1}return!0}function e(a,b){if(a===b)return!0;if(!a||!b)return!1;var c=a.length;if(b.length!==c)return!1;for(var d=0;d<c;d++)if(a[d]!==b[d])return!1;return!0}c.r(b),c.d(b,{shallowEqualArrays:()=>e,shallowEqualObjects:()=>d})},"./src/Component.ts":function(a,b,c){"use strict";var d=this&&this.__rest||function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c},e=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var f=e(c(/*! ./useMediaQuery */ "./src/useMediaQuery.ts")),g=function(a){var b=a.children,c=a.device,e=a.onChange,g=d(a,["children","device","onChange"]),h=(0,f.default)(g,c,e);return"function"==typeof b?b(h):h?b:null};b.default=g},"./src/Context.ts":(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=(0,c(/*! react */ "react").createContext)(void 0);b.default=d},"./src/index.ts":function(a,b,c){"use strict";var d=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0}),b.Context=b.toQuery=b.useMediaQuery=b.default=void 0;var e=d(c(/*! ./useMediaQuery */ "./src/useMediaQuery.ts"));b.useMediaQuery=e.default;var f=d(c(/*! ./Component */ "./src/Component.ts"));b.default=f.default;var g=d(c(/*! ./toQuery */ "./src/toQuery.ts"));b.toQuery=g.default;var h=d(c(/*! ./Context */ "./src/Context.ts"));b.Context=h.default},"./src/mediaQuery.ts":function(a,b,c){"use strict";var d=this&&this.__assign||function(){return(d=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},e=this&&this.__rest||function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c},f=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var g=f(c(/*! prop-types */ "./node_modules/prop-types/index.js")),h=g.default.oneOfType([g.default.string,g.default.number]),i={all:g.default.bool,grid:g.default.bool,aural:g.default.bool,braille:g.default.bool,handheld:g.default.bool,print:g.default.bool,projection:g.default.bool,screen:g.default.bool,tty:g.default.bool,tv:g.default.bool,embossed:g.default.bool},j={orientation:g.default.oneOf(["portrait","landscape"]),scan:g.default.oneOf(["progressive","interlace"]),aspectRatio:g.default.string,deviceAspectRatio:g.default.string,height:h,deviceHeight:h,width:h,deviceWidth:h,color:g.default.bool,colorIndex:g.default.bool,monochrome:g.default.bool,resolution:h,type:Object.keys(i)};j.type;var k=e(j,["type"]),l=d({minAspectRatio:g.default.string,maxAspectRatio:g.default.string,minDeviceAspectRatio:g.default.string,maxDeviceAspectRatio:g.default.string,minHeight:h,maxHeight:h,minDeviceHeight:h,maxDeviceHeight:h,minWidth:h,maxWidth:h,minDeviceWidth:h,maxDeviceWidth:h,minColor:g.default.number,maxColor:g.default.number,minColorIndex:g.default.number,maxColorIndex:g.default.number,minMonochrome:g.default.number,maxMonochrome:g.default.number,minResolution:h,maxResolution:h},k),m=d(d({},i),l);b.default={all:m,types:i,matchers:j,features:l}},"./src/toQuery.ts":function(a,b,c){"use strict";var d=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var e=d(c(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js")),f=d(c(/*! ./mediaQuery */ "./src/mediaQuery.ts")),g=function(a,b){var c,d=(0,e.default)(a);return("number"==typeof b&&(b="".concat(b,"px")),!0===b)?d:!1===b?(c=d,"not ".concat(c)):"(".concat(d,": ").concat(b,")")},h=function(a){var b,c=[];return Object.keys(f.default.all).forEach(function(b){var d=a[b];null!=d&&c.push(g(b,d))}),(b=c).join(" and ")};b.default=h},"./src/useMediaQuery.ts":function(a,b,c){"use strict";var d=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var e=c(/*! react */ "react"),f=d(c(/*! matchmediaquery */ "./node_modules/matchmediaquery/index.js")),g=d(c(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js")),h=c(/*! shallow-equal */ "./node_modules/shallow-equal/dist/index.esm.js"),i=d(c(/*! ./toQuery */ "./src/toQuery.ts")),j=d(c(/*! ./Context */ "./src/Context.ts")),k=function(a){if(a)return Object.keys(a).reduce(function(b,c){return b[(0,g.default)(c)]=a[c],b},{})},l=function(){var a=(0,e.useRef)(!1);return(0,e.useEffect)(function(){a.current=!0},[]),a.current},m=function(a){var b=(0,e.useContext)(j.default),c=function(){return k(a)||k(b)},d=(0,e.useState)(c),f=d[0],g=d[1];return(0,e.useEffect)(function(){var a=c();(0,h.shallowEqualObjects)(f,a)||g(a)},[a,b]),f},n=function(a){var b=function(){var b;return(b=a).query||(0,i.default)(b)},c=(0,e.useState)(b),d=c[0],f=c[1];return(0,e.useEffect)(function(){var a=b();d!==a&&f(a)},[a]),d},o=function(a,b){var c=function(){return(0,f.default)(a,b||{},!!b)},d=(0,e.useState)(c),g=d[0],h=d[1],i=l();return(0,e.useEffect)(function(){if(i){var a=c();return h(a),function(){a&&a.dispose()}}},[a,b]),g},p=function(a){var b=(0,e.useState)(a.matches),c=b[0],d=b[1];return(0,e.useEffect)(function(){var b=function(a){d(a.matches)};return a.addListener(b),d(a.matches),function(){a.removeListener(b)}},[a]),c},q=function(a,b,c){var d=m(b),f=n(a);if(!f)throw Error("Invalid or missing MediaQuery!");var g=o(f,d),h=p(g),i=l();return(0,e.useEffect)(function(){i&&c&&c(h)},[h]),(0,e.useEffect)(function(){return function(){g&&g.dispose()}},[]),h};b.default=q},react:b=>{"use strict";b.exports=a}},c={};function d(a){var e=c[a];if(void 0!==e)return e.exports;var f=c[a]={exports:{}};return b[a].call(f.exports,f,f.exports,d),f.exports}return d.d=(a,b)=>{for(var c in b)d.o(b,c)&&!d.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:b[c]})},d.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b),d.r=a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},d("./src/index.ts")})())}}])
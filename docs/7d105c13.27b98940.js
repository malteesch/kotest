(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(153)),i={id:"spec_ordering",title:"Spec Ordering",slug:"spec-ordering.html"},c={unversionedId:"framework/spec_ordering",id:"framework/spec_ordering",isDocsHomePage:!1,title:"Spec Ordering",description:"By default, the ordering of Spec classes is not defined. This means they are essentially random, in whatever order the discovery mechanism finds them.",source:"@site/docs/framework/spec_ordering.md",slug:"/framework/spec-ordering.html",permalink:"/docs/framework/spec-ordering.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/spec_ordering.md",version:"current",sidebar:"framework",previous:{title:"Jacoco",permalink:"/docs/framework/integrations/jacoco.html"},next:{title:"Test Ordering",permalink:"/docs/framework/test-ordering.html"}},l=[{value:"Annotated Example",id:"annotated-example",children:[]}],s={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By default, the ordering of Spec classes is not defined. This means they are essentially random, in whatever order the discovery mechanism finds them."),Object(o.b)("p",null,"This is often sufficient, but if we need control over the execution order of specs, we can do this by specifying the order in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/framework/project-config.html"}),"project config"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),"class MyConfig: AbstractProjectConfig() {\n    override val specExecutionOrder = ...\n}\n")),Object(o.b)("p",null,"There are several options."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"Undefined")," - This is the default. The order of specs is undefined and will execute in the order they are discovered at runtime. Eg either from JVM classpath discovery, or the order they appear in javascript files.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"Lexicographic")," - Specs are ordered lexicographically.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"Random")," - Specs are explicitly executed in a random order.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"Annotated")," - Specs are ordered using the ",Object(o.b)("inlineCode",{parentName:"p"},"@Order"),' annotation added at the class level, with lowest values executed first. Any specs without such an annotation are considered "last".\nThis option only works on the JVM. Any ties will be broken arbitrarily.'))),Object(o.b)("h3",{id:"annotated-example"},"Annotated Example"),Object(o.b)("p",null,"Given the following specs annoated with @Order."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),"@Order(1)\nclass FooTest : FunSpec() { }\n\n@Order(0)\nclass BarTest: FunSpec() {}\n\n@Order(1)\nclass FarTest : FunSpec() { }\n\nclass BooTest : FunSpec() {}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"BarTest")," will be executed first, as it has the lowest order value. ",Object(o.b)("inlineCode",{parentName:"p"},"FooTest")," and ",Object(o.b)("inlineCode",{parentName:"p"},"FarTest")," will be executed next, as they have the next lowest order values, although their values are both 1 so the order between them is undefined. Finally, ",Object(o.b)("inlineCode",{parentName:"p"},"BooTest")," will execute last, as it has no annotation."))}p.isMDXComponent=!0},153:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
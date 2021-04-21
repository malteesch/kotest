(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(153)),s={id:"home"},c={unversionedId:"home",id:"home",isDocsHomePage:!1,title:"home",description:"Kotest is a flexible and comprehensive testing project for Kotlin with multiplatform support.",source:"@site/docs/index.md",slug:"/home",permalink:"/docs/home",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/index.md",version:"current"},i=[{value:"Community",id:"community",children:[]},{value:"Test with Style",id:"test-with-style",children:[]},{value:"Multitude of Matchers",id:"multitude-of-matchers",children:[]},{value:"Let the Computer Generate Your Test Data",id:"let-the-computer-generate-your-test-data",children:[]},{value:"Check all the Tricky Cases With Data Driven Testing",id:"check-all-the-tricky-cases-with-data-driven-testing",children:[]},{value:"Test Exceptions",id:"test-exceptions",children:[]},{value:"Fine Tune Test Execution",id:"fine-tune-test-execution",children:[]}],l={rightToc:i};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("img",{src:"images/logo_with_text.png",alt:"kotest logo",width:"700"}),Object(o.b)("img",{src:"docs/images/intro_gif.gif"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kotest is a flexible and comprehensive testing project for Kotlin with multiplatform support.")),Object(o.b)("p",null,"For latest updates see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/changelog.html"}),"Changelog"),".",Object(o.b)("br",null),"\nSee our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/quickstart"}),"quick start")," guide to get up and running."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://GitHub.com/kotest/kotest/stargazers/"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/kotest/kotest.svg?style=social&label=Star&maxAge=2592000",alt:"GitHub stars"}))),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://search.maven.org/#search%7Cga%7C1%7Ckotest"}),Object(o.b)("img",{src:"https://img.shields.io/maven-central/v/io.kotest/kotest-framework-api-jvm.svg?label=latest%20release"})),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/github/license/kotest/kotest",alt:"GitHub"})),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kotlinlang.slack.com/archives/CT0G9SD7Z"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/static/v1?label=kotlinlang&message=kotest&color=blue&logo=slack",alt:"kotest @ kotlinlang.slack.com"})))),Object(o.b)("h2",{id:"community"},"Community"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://stackoverflow.com/questions/tagged/kotest"}),"Stack Overflow"),' (don\'t forget to use the tag "kotest".)'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://kotlinlang.slack.com/messages/kotest"}),"Kotest channel")," in the Kotlin Slack (get an invite ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://slack.kotlinlang.org/"}),"here"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/kotest/kotest/wiki/contribute"}),"Contribute"))),Object(o.b)("h2",{id:"test-with-style"},"Test with Style"),Object(o.b)("p",null,"Write simple and beautiful tests with the ",Object(o.b)("inlineCode",{parentName:"p"},"StringSpec")," style:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class MyTests : StringSpec({\n  "length should return size of string" {\n    "hello".length shouldBe 5\n  }\n  "startsWith should test for a prefix" {\n    "world" should startWith("wor")\n  }\n})\n')),Object(o.b)("p",null,"Kotest comes with several ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/framework/testing-styles.html"}),"testing styles")," so you can choose one that fits your needs."),Object(o.b)("h2",{id:"multitude-of-matchers"},"Multitude of Matchers"),Object(o.b)("p",null,"Use over 300 provided matchers to test assertions on many different types:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'"substring".shouldContain("str")\n\nuser.email.shouldBeLowerCase()\n\nmyImageFile.shouldHaveExtension(".jpg")\n\ncityMap.shouldContainKey("London")\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"withClue")," and ",Object(o.b)("inlineCode",{parentName:"p"},"asClue")," helpers can add extra context to assertions so failures are self explanatory:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'withClue("Name should be present") { user.name shouldNotBe null }\n\ndata class HttpResponse(val status: Int, body: String)\nval response = HttpResponse(200, "the content")\nresponse.asClue {\n    it.status shouldBe 200\n    it.body shouldBe "the content"\n}\n')),Object(o.b)("p",null,"Nesting is allowed in both cases and will show all available clues."),Object(o.b)("p",null,"Matchers are extension methods and so your IDE will auto complete. See the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/assertions/matchers.html"}),"full list of matchers")," or write your own."),Object(o.b)("h2",{id:"let-the-computer-generate-your-test-data"},"Let the Computer Generate Your Test Data"),Object(o.b)("p",null,"Use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/framework/framework.html"}),"property based testing")," to test your code with automatically generated test data:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class PropertyExample: StringSpec({\n  "String size" {\n    checkAll<String, String> { a, b ->\n      (a + b) shouldHaveLength a.length + b.length\n    }\n  }\n})\n')),Object(o.b)("h2",{id:"check-all-the-tricky-cases-with-data-driven-testing"},"Check all the Tricky Cases With Data Driven Testing"),Object(o.b)("p",null,"Handle even an enormous amount of input parameter combinations easily with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/framework/data-driven-testing.html"}),"data driven tests"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class StringSpecExample : StringSpec({\n  "maximum of two numbers" {\n    forAll(\n        row(1, 5, 5),\n        row(1, 0, 1),\n        row(0, 0, 0)\n    ) { a, b, max ->\n      Math.max(a, b) shouldBe max\n    }\n  }\n})\n')),Object(o.b)("h2",{id:"test-exceptions"},"Test Exceptions"),Object(o.b)("p",null,"Testing for ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/assertions/assertions.html#exceptions"}),"exceptions")," is easy with Kotest:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'val exception = shouldThrow<IllegalAccessException> {\n  // code in here that you expect to throw an IllegalAccessException\n}\nexception.message should startWith("Something went wrong")\n')),Object(o.b)("h2",{id:"fine-tune-test-execution"},"Fine Tune Test Execution"),Object(o.b)("p",null,"You can specify the number of invocations, parallelism, and a timeout for each test or for all tests.\nAnd you can group tests by tags or disable them conditionally.\nAll you need is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/framework/project-config.html"}),Object(o.b)("inlineCode",{parentName:"a"},"config")),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class MySpec : StringSpec({\n  "should use config".config(timeout = 2.seconds, invocations = 10, threads = 2, tags = setOf(Database, Linux)) {\n    // test here\n  }\n})\n')))}b.isMDXComponent=!0},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.a.createElement(h,c(c({ref:t},l),{},{components:n})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
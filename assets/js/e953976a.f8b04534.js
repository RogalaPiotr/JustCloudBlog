"use strict";(self.webpackChunkjustcloudblog=self.webpackChunkjustcloudblog||[]).push([[131],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),g=s(n),d=o,m=g["".concat(i,".").concat(d)]||g[d]||c[d]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=g;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2784:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],u={slug:"How to instal Azure DevOps agent",title:"How to instal Azure DevOps agent",authors:["progala"],tags:["azure","azure devops","agents","automation","devops"]},i=void 0,s={permalink:"JustCloudBlog/blog/How to instal Azure DevOps agent",source:"@site/blog/2022-01-30-ado-agent/index.md",title:"How to instal Azure DevOps agent",description:"Docusaurus blogging features are powered by the blog plugin.",date:"2022-01-30T00:00:00.000Z",formattedDate:"January 30, 2022",tags:[{label:"azure",permalink:"JustCloudBlog/blog/tags/azure"},{label:"azure devops",permalink:"JustCloudBlog/blog/tags/azure-devops"},{label:"agents",permalink:"JustCloudBlog/blog/tags/agents"},{label:"automation",permalink:"JustCloudBlog/blog/tags/automation"},{label:"devops",permalink:"JustCloudBlog/blog/tags/devops"}],readingTime:.405,truncated:!1,authors:[{name:"Piotr Rogala",title:"MVP Azure & owner JustCloud.pl",url:"https://github.com/RogalaPiotr",imageURL:"https://avatars.githubusercontent.com/u/31566956?v=4",key:"progala"}],nextItem:{title:"Welcome",permalink:"JustCloudBlog/blog/welcome"}},p={authorsImageUrls:[void 0]},c=[],g={toc:c};function d(e){var t=e.components,u=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus blogging features")," are powered by the ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"."),(0,a.kt)("p",null,"Simply add Markdown files (or folders) to the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,a.kt)("p",null,"Regular blog authors can be added to ",(0,a.kt)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,a.kt)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,a.kt)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docusaurus Plushie",src:n(1084).Z})),(0,a.kt)("p",null,"The blog supports tags as well!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,a.kt)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."))}d.isMDXComponent=!0},1084:function(e,t,n){t.Z=n.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);
(self.webpackChunkjustcloudblog=self.webpackChunkjustcloudblog||[]).push([[529],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},745:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(3366),a=n(7294),l=n(6010),o=n(7111),i=n(6742),c="sidebar_q+wC",s="sidebarItemTitle_9G5K",u="sidebarItemList_6T4b",m="sidebarItem_cjdF",p="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs",h=n(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),a.createElement("ul",{className:u},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:m},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:d},e.title))}))))}var f=n(941);function y(e){var t=e.getBoundingClientRect();return t.top===t.bottom?y(e.parentNode):t}function v(e){var t,n=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=r.find((function(e){return y(e).top>=n}));return a?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(y(a))?a:null!=(t=r[r.indexOf(a)-1])?t:null:r[r.length-1]}function b(){var e=(0,a.useRef)(0),t=(0,f.LU)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var E=function(e){var t=(0,a.useRef)(void 0),n=b();(0,a.useEffect)((function(){var r=e.linkClassName,a=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=v({anchorTopOffset:n.current}),o=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(a)),e.classList.add(a),t.current=e}else e.classList.remove(a)}(e,e===o)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])},k="tableOfContents_vrFS",N="table-of-contents__link",T={linkClassName:N,linkActiveClassName:"table-of-contents__link--active"};function _(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:N,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(_,{isChild:!0,toc:e.children}))}))):null}var j=function(e){var t=e.toc;return E(T),a.createElement("div",{className:(0,l.Z)(k,"thin-scrollbar")},a.createElement(_,{toc:t}))},O=["sidebar","toc","children"];var Z=function(e){var t=e.sidebar,n=e.toc,i=e.children,c=(0,r.Z)(e,O),s=t&&t.items.length>0;return a.createElement(o.Z,c,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},s&&a.createElement("aside",{className:"col col--3"},a.createElement(g,{sidebar:t})),a.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),n&&a.createElement("div",{className:"col col--2"},a.createElement(j,{toc:n})))))}},2128:function(e,t,n){"use strict";n.d(t,{Z:function(){return me}});var r=n(7294),a=n(6010),l=n(3905),o=n(4973),i=n(6742),c=n(4996),s=n(941),u=n(7462),m=n(3366),p=n(9105),d={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},h={Prism:n(7410).default,theme:d};function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}var y=/\r\n|\r|\n/,v=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},b=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},E=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=f({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=f({},n,{backgroundColor:null}),a};function k(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var N=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),g(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?E(e.theme,e.language):void 0;return t.themeDict=n})),g(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,l=f({},k(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==a&&(l.style=void 0!==l.style?f({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),g(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return l[n[0]];var o=r?{display:"inline-block"}:{},i=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(i))}})),g(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,l=e.token,o=f({},k(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==a&&(o.style=void 0!==o.style?f({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),g(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var l=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],l=0,o=0,i=[],c=[i];o>-1;){for(;(l=r[o]++)<a[o];){var s=void 0,u=t[o],m=n[o][l];if("string"==typeof m?(u=o>0?u:["plain"],s=m):(u=b(u,m.type),m.alias&&(u=b(u,m.alias)),s=m.content),"string"==typeof s){var p=s.split(y),d=p.length;i.push({types:u,content:p[0]});for(var h=1;h<d;h++)v(i),c.push(i=[]),i.push({types:u,content:p[h]})}else o++,t.push(u),n.push(s),r.push(0),a.push(s.length)}o--,t.pop(),n.pop(),r.pop(),a.pop()}return v(i),c}(void 0!==o?this.tokenize(t,r,o,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),T=N;var _=n(7594),j=n.n(_),O={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},Z=n(5350),P=function(){var e=(0,s.LU)().prism,t=(0,Z.Z)().isDarkTheme,n=e.theme||O,r=e.darkTheme||n;return t?r:n},x="codeBlockContainer_J+bg",C="codeBlockContent_csEI",L="codeBlockTitle_oQzk",w="codeBlock_rtdJ",S="copyButton_M3SB",B="codeBlockLines_1zSZ",I=/{([\d,-]+)}/,D=["js","jsBlock","jsx","python","html"],R={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},A=["highlight-next-line","highlight-start","highlight-end"],z=function(e){void 0===e&&(e=D);var t=e.map((function(e){var t=R[e],n=t.start,r=t.end;return"(?:"+n+"\\s*("+A.join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function U(e){var t=e.children,n=e.className,l=e.metastring,i=e.title,c=(0,s.LU)().prism,m=(0,r.useState)(!1),p=m[0],d=m[1],g=(0,r.useState)(!1),f=g[0],y=g[1];(0,r.useEffect)((function(){y(!0)}),[]);var v=(0,s.bc)(l)||i,b=(0,r.useRef)(null),E=[],k=P(),N=Array.isArray(t)?t.join(""):t;if(l&&I.test(l)){var _=l.match(I)[1];E=j()(_).filter((function(e){return e>0}))}var O=null==n?void 0:n.replace(/language-/,"");!O&&c.defaultLanguage&&(O=c.defaultLanguage);var Z=N.replace(/\n$/,"");if(0===E.length&&void 0!==O){for(var D,R="",A=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return z(["js","jsBlock"]);case"jsx":case"tsx":return z(["js","jsBlock","jsx"]);case"html":return z(["js","jsBlock","html"]);case"python":case"py":return z(["python"]);default:return z()}}(O),U=N.replace(/\n$/,"").split("\n"),F=0;F<U.length;){var M=F+1,q=U[F].match(A);if(null!==q){switch(q.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":R+=M+",";break;case"highlight-start":D=M;break;case"highlight-end":R+=D+"-"+(M-1)+","}U.splice(F,1)}else F+=1}E=j()(R),Z=U.join("\n")}var V=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),l=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var o=document.getSelection(),i=!1;o.rangeCount>0&&(i=o.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}a.remove(),i&&(o.removeAllRanges(),o.addRange(i)),l&&l.focus()}(Z),d(!0),setTimeout((function(){return d(!1)}),2e3)};return r.createElement(T,(0,u.Z)({},h,{key:String(f),theme:k,code:Z,language:O}),(function(e){var t=e.className,n=e.style,l=e.tokens,i=e.getLineProps,c=e.getTokenProps;return r.createElement("div",{className:x},v&&r.createElement("div",{style:n,className:L},v),r.createElement("div",{className:(0,a.Z)(C,O)},r.createElement("pre",{tabIndex:0,className:(0,a.Z)(t,w,"thin-scrollbar"),style:n},r.createElement("code",{className:B},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return E.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,u.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,u.Z)({key:t},c({token:e,key:t})))})))})))),r.createElement("button",{ref:b,type:"button","aria-label":(0,o.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.Z)(S,"clean-btn"),onClick:V},p?r.createElement(o.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(o.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var F="anchorWithStickyNavbar_y2LR",M="anchorWithHideOnScrollNavbar_3ly5",q=["id"],V=function(e){var t=Object.assign({},e);return r.createElement("header",null,r.createElement("h1",(0,u.Z)({},t,{id:void 0}),t.children))},W=function(e){return"h1"===e?V:function(e){return function(t){var n,l=t.id,i=(0,m.Z)(t,q),c=(0,s.LU)().navbar.hideOnScroll;return l?r.createElement(e,i,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,a.Z)("anchor","anchor__"+e,(n={},n[M]=c,n[F]=!c,n)),id:l}),i.children,r.createElement("a",{className:"hash-link",href:"#"+l,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(e,i)}}(e)},$="details_h+cY";function H(e){var t=Object.assign({},e);return r.createElement(s.PO,(0,u.Z)({},t,{className:(0,a.Z)("alert alert--info",$,t.className)}))}var J=["mdxType","originalType"];var X={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,l=(a.mdxType,a.originalType,(0,m.Z)(a,J));return r.createElement(e.props.originalType,l)}return e}(e)}));return r.createElement(p.Z,e,t)},code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(U,e):r.createElement("code",e)},a:function(e){return r.createElement(i.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(n)&&(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:r.createElement(U,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(H,(0,u.Z)({},e,{summary:n}),a)},h1:W("h1"),h2:W("h2"),h3:W("h3"),h4:W("h4"),h5:W("h5"),h6:W("h6")},K="iconEdit_mS5F",Y=["className"],G=function(e){var t=e.className,n=(0,m.Z)(e,Y);return r.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.Z)(K,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function Q(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:s.kM.common.editThisPage},r.createElement(G,null),r.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var ee="blogPostTitle_d4p0",te="blogPostData_-Im+",ne="blogPostDetailsFull_xD8n",re=n(7211),ae="tags_NBRY",le="tag_F03v";function oe(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(ae,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return r.createElement("li",{key:n,className:le},r.createElement(re.Z,{name:t,permalink:n}))}))))}var ie="image_9q7L";var ce=function(e){var t=e.author,n=t.name,a=t.title,l=t.url,o=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},o&&r.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:ie,src:o,alt:n})),n&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(i.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},n))),a&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))},se="authorCol_8c0z";function ue(e){var t=e.authors,n=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return r.createElement("div",{className:(0,a.Z)("col col--6",se),key:t},r.createElement(ce,{author:Object.assign({},e,{imageURL:null!=(l=n.authorsImageUrls[t])?l:e.imageURL})}))})))}var me=function(e){var t,n,u,m,p=(u=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return u(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),d=(0,c.C)().withBaseUrl,h=e.children,g=e.frontMatter,f=e.assets,y=e.metadata,v=e.truncated,b=e.isBlogPostPage,E=void 0!==b&&b,k=y.date,N=y.formattedDate,T=y.permalink,_=y.tags,j=y.readingTime,O=y.title,Z=y.editUrl,P=y.authors,x=null!=(t=f.image)?t:g.image;return r.createElement("article",{className:E?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(m=E?"h1":"h2",r.createElement("header",null,r.createElement(m,{className:ee,itemProp:"headline"},E?O:r.createElement(i.Z,{itemProp:"url",to:T},O)),r.createElement("div",{className:(0,a.Z)(te,"margin-vert--md")},r.createElement("time",{dateTime:k,itemProp:"datePublished"},N),void 0!==j&&r.createElement(r.Fragment,null," \xb7 ",p(j))),r.createElement(ue,{authors:P,assets:f}))),x&&r.createElement("meta",{itemProp:"image",content:d(x,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:X},h)),(_.length>0||v)&&r.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",(n={},n[ne]=E,n))},_.length>0&&r.createElement("div",{className:(0,a.Z)("col",{"col--9":!E})},r.createElement(oe,{tags:_})),E&&Z&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(Q,{editUrl:Z})),!E&&v&&r.createElement("div",{className:"col col--3 text--right"},r.createElement(i.Z,{to:y.permalink,"aria-label":"Read more about "+O},r.createElement("b",null,r.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},7211:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(6010),l=n(6742),o="tag_WK-t",i="tagRegular_LXbV",c="tagWithCount_S5Zl";var s=function(e){var t,n=e.permalink,s=e.name,u=e.count;return r.createElement(l.Z,{href:n,className:(0,a.Z)(o,(t={},t[i]=!u,t[c]=u,t))},s,u&&r.createElement("span",null,u))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,l]=t;if(r&&l){r=parseInt(r),l=parseInt(l);const e=r<l?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(l+=e);for(let t=r;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);
(self.webpackChunkjustcloudblog=self.webpackChunkjustcloudblog||[]).push([[529],{745:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(3366),a=n(7294),l=n(6010),o=n(7111),i=n(6742),c="sidebar_q+wC",s="sidebarItemTitle_9G5K",m="sidebarItemList_6T4b",u="sidebarItem_cjdF",d="sidebarItemLink_zyXk",p="sidebarItemLinkActive_wcJs",h=n(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),a.createElement("ul",{className:m},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:u},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title))}))))}var f=n(941);function v(e){var t=e.getBoundingClientRect();return t.top===t.bottom?v(e.parentNode):t}function y(e){var t,n=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=r.find((function(e){return v(e).top>=n}));return a?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(v(a))?a:null!=(t=r[r.indexOf(a)-1])?t:null:r[r.length-1]}function b(){var e=(0,a.useRef)(0),t=(0,f.LU)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var E=function(e){var t=(0,a.useRef)(void 0),n=b();(0,a.useEffect)((function(){var r=e.linkClassName,a=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=y({anchorTopOffset:n.current}),o=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(a)),e.classList.add(a),t.current=e}else e.classList.remove(a)}(e,e===o)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])},k="tableOfContents_vrFS",N="table-of-contents__link",_={linkClassName:N,linkActiveClassName:"table-of-contents__link--active"};function T(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:N,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(T,{isChild:!0,toc:e.children}))}))):null}var Z=function(e){var t=e.toc;return E(_),a.createElement("div",{className:(0,l.Z)(k,"thin-scrollbar")},a.createElement(T,{toc:t}))},L=["sidebar","toc","children"];var j=function(e){var t=e.sidebar,n=e.toc,i=e.children,c=(0,r.Z)(e,L),s=t&&t.items.length>0;return a.createElement(o.Z,c,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},s&&a.createElement("aside",{className:"col col--3"},a.createElement(g,{sidebar:t})),a.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),n&&a.createElement("div",{className:"col col--2"},a.createElement(Z,{toc:n})))))}},2128:function(e,t,n){"use strict";n.d(t,{Z:function(){return ue}});var r=n(7294),a=n(6010),l=n(3905),o=n(4973),i=n(6742),c=n(4996),s=n(941),m=n(7462),u=n(3366),d=n(9105),p={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},h={Prism:n(7410).default,theme:p};function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}var v=/\r\n|\r|\n/,y=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},b=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},E=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=f({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=f({},n,{backgroundColor:null}),a};function k(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var N=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),g(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?E(e.theme,e.language):void 0;return t.themeDict=n})),g(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,l=f({},k(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==a&&(l.style=void 0!==l.style?f({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),g(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return l[n[0]];var o=r?{display:"inline-block"}:{},i=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(i))}})),g(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,l=e.token,o=f({},k(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==a&&(o.style=void 0!==o.style?f({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),g(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var l=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],l=0,o=0,i=[],c=[i];o>-1;){for(;(l=r[o]++)<a[o];){var s=void 0,m=t[o],u=n[o][l];if("string"==typeof u?(m=o>0?m:["plain"],s=u):(m=b(m,u.type),u.alias&&(m=b(m,u.alias)),s=u.content),"string"==typeof s){var d=s.split(v),p=d.length;i.push({types:m,content:d[0]});for(var h=1;h<p;h++)y(i),c.push(i=[]),i.push({types:m,content:d[h]})}else o++,t.push(m),n.push(s),r.push(0),a.push(s.length)}o--,t.pop(),n.pop(),r.pop(),a.pop()}return y(i),c}(void 0!==o?this.tokenize(t,r,o,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),_=N;var T=n(7594),Z=n.n(T),L={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(5350),P=function(){var e=(0,s.LU)().prism,t=(0,j.Z)().isDarkTheme,n=e.theme||L,r=e.darkTheme||n;return t?r:n},C="codeBlockContainer_J+bg",x="codeBlockContent_csEI",S="codeBlockTitle_oQzk",B="codeBlock_rtdJ",O="copyButton_M3SB",w="codeBlockLines_1zSZ",I=/{([\d,-]+)}/,R=["js","jsBlock","jsx","python","html"],A={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},z=["highlight-next-line","highlight-start","highlight-end"],D=function(e){void 0===e&&(e=R);var t=e.map((function(e){var t=A[e],n=t.start,r=t.end;return"(?:"+n+"\\s*("+z.join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function U(e){var t=e.children,n=e.className,l=e.metastring,i=e.title,c=(0,s.LU)().prism,u=(0,r.useState)(!1),d=u[0],p=u[1],g=(0,r.useState)(!1),f=g[0],v=g[1];(0,r.useEffect)((function(){v(!0)}),[]);var y=(0,s.bc)(l)||i,b=(0,r.useRef)(null),E=[],k=P(),N=Array.isArray(t)?t.join(""):t;if(l&&I.test(l)){var T=l.match(I)[1];E=Z()(T).filter((function(e){return e>0}))}var L=null==n?void 0:n.replace(/language-/,"");!L&&c.defaultLanguage&&(L=c.defaultLanguage);var j=N.replace(/\n$/,"");if(0===E.length&&void 0!==L){for(var R,A="",z=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return D(["js","jsBlock"]);case"jsx":case"tsx":return D(["js","jsBlock","jsx"]);case"html":return D(["js","jsBlock","html"]);case"python":case"py":return D(["python"]);default:return D()}}(L),U=N.replace(/\n$/,"").split("\n"),F=0;F<U.length;){var M=F+1,q=U[F].match(z);if(null!==q){switch(q.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":A+=M+",";break;case"highlight-start":R=M;break;case"highlight-end":A+=R+"-"+(M-1)+","}U.splice(F,1)}else F+=1}E=Z()(A),j=U.join("\n")}var V=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),l=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var o=document.getSelection(),i=!1;o.rangeCount>0&&(i=o.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}a.remove(),i&&(o.removeAllRanges(),o.addRange(i)),l&&l.focus()}(j),p(!0),setTimeout((function(){return p(!1)}),2e3)};return r.createElement(_,(0,m.Z)({},h,{key:String(f),theme:k,code:j,language:L}),(function(e){var t=e.className,n=e.style,l=e.tokens,i=e.getLineProps,c=e.getTokenProps;return r.createElement("div",{className:C},y&&r.createElement("div",{style:n,className:S},y),r.createElement("div",{className:(0,a.Z)(x,L)},r.createElement("pre",{tabIndex:0,className:(0,a.Z)(t,B,"thin-scrollbar"),style:n},r.createElement("code",{className:w},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return E.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,m.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,m.Z)({key:t},c({token:e,key:t})))})))})))),r.createElement("button",{ref:b,type:"button","aria-label":(0,o.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.Z)(O,"clean-btn"),onClick:V},d?r.createElement(o.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(o.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var F="anchorWithStickyNavbar_y2LR",M="anchorWithHideOnScrollNavbar_3ly5",q=["id"],V=function(e){var t=Object.assign({},e);return r.createElement("header",null,r.createElement("h1",(0,m.Z)({},t,{id:void 0}),t.children))},W=function(e){return"h1"===e?V:function(e){return function(t){var n,l=t.id,i=(0,u.Z)(t,q),c=(0,s.LU)().navbar.hideOnScroll;return l?r.createElement(e,i,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,a.Z)("anchor","anchor__"+e,(n={},n[M]=c,n[F]=!c,n)),id:l}),i.children,r.createElement("a",{className:"hash-link",href:"#"+l,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(e,i)}}(e)},$="details_h+cY";function H(e){var t=Object.assign({},e);return r.createElement(s.PO,(0,m.Z)({},t,{className:(0,a.Z)("alert alert--info",$,t.className)}))}var J=["mdxType","originalType"];var K={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,l=(a.mdxType,a.originalType,(0,u.Z)(a,J));return r.createElement(e.props.originalType,l)}return e}(e)}));return r.createElement(d.Z,e,t)},code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(U,e):r.createElement("code",e)},a:function(e){return r.createElement(i.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(n)&&(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:r.createElement(U,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(H,(0,m.Z)({},e,{summary:n}),a)},h1:W("h1"),h2:W("h2"),h3:W("h3"),h4:W("h4"),h5:W("h5"),h6:W("h6")},X="iconEdit_mS5F",Y=["className"],G=function(e){var t=e.className,n=(0,u.Z)(e,Y);return r.createElement("svg",(0,m.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.Z)(X,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function Q(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:s.kM.common.editThisPage},r.createElement(G,null),r.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var ee="blogPostTitle_d4p0",te="blogPostData_-Im+",ne="blogPostDetailsFull_xD8n",re=n(7211),ae="tags_NBRY",le="tag_F03v";function oe(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(ae,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return r.createElement("li",{key:n,className:le},r.createElement(re.Z,{name:t,permalink:n}))}))))}var ie="image_9q7L";var ce=function(e){var t=e.author,n=t.name,a=t.title,l=t.url,o=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},o&&r.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:ie,src:o,alt:n})),n&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(i.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},n))),a&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))},se="authorCol_8c0z";function me(e){var t=e.authors,n=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return r.createElement("div",{className:(0,a.Z)("col col--6",se),key:t},r.createElement(ce,{author:Object.assign({},e,{imageURL:null!=(l=n.authorsImageUrls[t])?l:e.imageURL})}))})))}var ue=function(e){var t,n,m,u,d=(m=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return m(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=(0,c.C)().withBaseUrl,h=e.children,g=e.frontMatter,f=e.assets,v=e.metadata,y=e.truncated,b=e.isBlogPostPage,E=void 0!==b&&b,k=v.date,N=v.formattedDate,_=v.permalink,T=v.tags,Z=v.readingTime,L=v.title,j=v.editUrl,P=v.authors,C=null!=(t=f.image)?t:g.image;return r.createElement("article",{className:E?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(u=E?"h1":"h2",r.createElement("header",null,r.createElement(u,{className:ee,itemProp:"headline"},E?L:r.createElement(i.Z,{itemProp:"url",to:_},L)),r.createElement("div",{className:(0,a.Z)(te,"margin-vert--md")},r.createElement("time",{dateTime:k,itemProp:"datePublished"},N),void 0!==Z&&r.createElement(r.Fragment,null," \xb7 ",d(Z))),r.createElement(me,{authors:P,assets:f}))),C&&r.createElement("meta",{itemProp:"image",content:p(C,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:K},h)),(T.length>0||y)&&r.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",(n={},n[ne]=E,n))},T.length>0&&r.createElement("div",{className:(0,a.Z)("col",{"col--9":!E})},r.createElement(oe,{tags:T})),E&&j&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(Q,{editUrl:j})),!E&&y&&r.createElement("div",{className:"col col--3 text--right"},r.createElement(i.Z,{to:v.permalink,"aria-label":"Read more about "+L},r.createElement("b",null,r.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},7211:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(6010),l=n(6742),o="tag_WK-t",i="tagRegular_LXbV",c="tagWithCount_S5Zl";var s=function(e){var t,n=e.permalink,s=e.name,m=e.count;return r.createElement(l.Z,{href:n,className:(0,a.Z)(o,(t={},t[i]=!m,t[c]=m,t))},s,m&&r.createElement("span",null,m))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,l]=t;if(r&&l){r=parseInt(r),l=parseInt(l);const e=r<l?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(l+=e);for(let t=r;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);
"use strict";(self.webpackChunkjustcloudblog=self.webpackChunkjustcloudblog||[]).push([[13],{745:function(e,t,n){n.d(t,{Z:function(){return A}});var r=n(3366),a=n(7294),l=n(6010),c=n(7111),i=n(6742),s="sidebar_q+wC",o="sidebarItemTitle_9G5K",u="sidebarItemList_6T4b",m="sidebarItem_cjdF",d="sidebarItemLink_zyXk",f="sidebarItemLinkActive_wcJs",v=n(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),a.createElement("ul",{className:u},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:m},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title))}))))}var b=n(941);function E(e){var t=e.getBoundingClientRect();return t.top===t.bottom?E(e.parentNode):t}function h(e){var t,n=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=r.find((function(e){return E(e).top>=n}));return a?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(E(a))?a:null!=(t=r[r.indexOf(a)-1])?t:null:r[r.length-1]}function p(){var e=(0,a.useRef)(0),t=(0,b.LU)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var N=function(e){var t=(0,a.useRef)(void 0),n=p();(0,a.useEffect)((function(){var r=e.linkClassName,a=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=h({anchorTopOffset:n.current}),c=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(a)),e.classList.add(a),t.current=e}else e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])},k="tableOfContents_vrFS",_="table-of-contents__link",C={linkClassName:_,linkActiveClassName:"table-of-contents__link--active"};function L(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:_,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(L,{isChild:!0,toc:e.children}))}))):null}var Z=function(e){var t=e.toc;return N(C),a.createElement("div",{className:(0,l.Z)(k,"thin-scrollbar")},a.createElement(L,{toc:t}))},y=["sidebar","toc","children"];var A=function(e){var t=e.sidebar,n=e.toc,i=e.children,s=(0,r.Z)(e,y),o=t&&t.items.length>0;return a.createElement(c.Z,s,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},o&&a.createElement("aside",{className:"col col--3"},a.createElement(g,{sidebar:t})),a.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},i),n&&a.createElement("div",{className:"col col--2"},a.createElement(Z,{toc:n})))))}},5776:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(7294),a=n(745),l=n(7211),c=n(941),i="tag_7kA+";function s(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:i},r.createElement(l.Z,e))}))),r.createElement("hr",null))}var o=function(e){var t=e.tags,n=(0,c.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return r.createElement(s,{key:e.letter,letterEntry:e})})))};var u=function(e){var t=e.tags,n=e.sidebar,l=(0,c.MA)();return r.createElement(a.Z,{title:l,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},r.createElement("h1",null,l),r.createElement(o,{tags:Object.values(t)}))}},7211:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),l=n(6742),c="tag_WK-t",i="tagRegular_LXbV",s="tagWithCount_S5Zl";var o=function(e){var t,n=e.permalink,o=e.name,u=e.count;return r.createElement(l.Z,{href:n,className:(0,a.Z)(c,(t={},t[i]=!u,t[s]=u,t))},o,u&&r.createElement("span",null,u))}}}]);
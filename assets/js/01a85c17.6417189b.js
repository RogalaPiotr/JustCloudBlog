"use strict";(self.webpackChunkjustcloudblog=self.webpackChunkjustcloudblog||[]).push([[13],{895:function(e,t,n){n.d(t,{dK:function(){return c},_k:function(){return l},vc:function(){return a.a},rx:function(){return o},qo:function(){return s},Hk:function(){return i},Iz:function(){return u}});n(1336);var r=n(813),a=n.n(r),c=["en"],l=!1,o="37a6e34c",s=8,i=50,u={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},745:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(3366),a=n(7294),c=n(6010),l=n(7111),o=n(6742),s="sidebar_q+wC",i="sidebarItemTitle_9G5K",u="sidebarItemList_6T4b",m="sidebarItem_cjdF",d="sidebarItemLink_zyXk",f="sidebarItemLinkActive_wcJs",v=n(4973);function h(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,c.Z)(s,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,c.Z)(i,"margin-bottom--md")},t.title),a.createElement("ul",{className:u},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:m},a.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title))}))))}var g=n(941);function b(e){var t=e.getBoundingClientRect();return t.top===t.bottom?b(e.parentNode):t}function E(e){var t,n=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=r.find((function(e){return b(e).top>=n}));return a?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(b(a))?a:null!=(t=r[r.indexOf(a)-1])?t:null:r[r.length-1]}function _(){var e=(0,a.useRef)(0),t=(0,g.LU)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var p=function(e){var t=(0,a.useRef)(void 0),n=_();(0,a.useEffect)((function(){var r=e.linkClassName,a=e.linkActiveClassName;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=E({anchorTopOffset:n.current}),l=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(a)),e.classList.add(a),t.current=e}else e.classList.remove(a)}(e,e===l)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])},N="tableOfContents_vrFS",k="table-of-contents__link",C={linkClassName:k,linkActiveClassName:"table-of-contents__link--active"};function L(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:k,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(L,{isChild:!0,toc:e.children}))}))):null}var y=function(e){var t=e.toc;return p(C),a.createElement("div",{className:(0,c.Z)(N,"thin-scrollbar")},a.createElement(L,{toc:t}))},Z=["sidebar","toc","children"];var w=function(e){var t=e.sidebar,n=e.toc,o=e.children,s=(0,r.Z)(e,Z),i=t&&t.items.length>0;return a.createElement(l.Z,s,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},i&&a.createElement("aside",{className:"col col--3"},a.createElement(h,{sidebar:t})),a.createElement("main",{className:(0,c.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&a.createElement("div",{className:"col col--2"},a.createElement(y,{toc:n})))))}},5776:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(7294),a=n(745),c=n(7211),l=n(941),o="tag_7kA+";function s(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:o},r.createElement(c.Z,e))}))),r.createElement("hr",null))}var i=function(e){var t=e.tags,n=(0,l.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return r.createElement(s,{key:e.letter,letterEntry:e})})))};var u=function(e){var t=e.tags,n=e.sidebar,c=(0,l.MA)();return r.createElement(a.Z,{title:c,wrapperClassName:l.kM.wrapper.blogPages,pageClassName:l.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},r.createElement("h1",null,c),r.createElement(i,{tags:Object.values(t)}))}},7211:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),c=n(6742),l="tag_WK-t",o="tagRegular_LXbV",s="tagWithCount_S5Zl";var i=function(e){var t,n=e.permalink,i=e.name,u=e.count;return r.createElement(c.Z,{href:n,className:(0,a.Z)(l,(t={},t[o]=!u,t[s]=u,t))},i,u&&r.createElement("span",null,u))}}}]);
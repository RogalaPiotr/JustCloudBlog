"use strict";(self.webpackChunkjustcloudblog=self.webpackChunkjustcloudblog||[]).push([[103],{895:function(e,t,a){a.d(t,{dK:function(){return l},_k:function(){return o},vc:function(){return r.a},rx:function(){return i},qo:function(){return s},Hk:function(){return m},Iz:function(){return c}});a(1336);var n=a(813),r=a.n(n),l=["en"],o=!1,i="7bf342b5",s=8,m=50,c={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},6165:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(3366),r=a(7294),l=a(6010),o=a(7111),i=a(6742),s="sidebar_q+wC",m="sidebarItemTitle_9G5K",c="sidebarItemList_6T4b",u="sidebarItem_cjdF",d="sidebarItemLink_zyXk",g="sidebarItemLinkActive_wcJs",p=a(4973);function v(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:c},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var h=a(571),E=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,a=e.toc,i=e.children,s=(0,n.Z)(e,E),m=t&&t.items.length>0;return r.createElement(o.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},m&&r.createElement("aside",{className:"col col--3"},r.createElement(v,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&r.createElement("div",{className:"col col--2"},r.createElement(h.Z,{toc:a})))))}},7937:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),r=a(6010),l=a(3905),o=a(4973),i=a(6742),s=a(4996),m=a(941),c=a(90),u=a(7462),d=a(3366),g="iconEdit_mS5F",p=["className"],v=function(e){var t=e.className,a=(0,d.Z)(e,p);return n.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(g,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function h(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(v,null),n.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var E="blogPostTitle_d4p0",b="blogPostData_-Im+",_="blogPostDetailsFull_xD8n",f=a(7211),N="tags_NBRY",Z="tag_F03v";function k(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(N,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:Z},n.createElement(f.Z,{name:t,permalink:a}))}))))}var P="image_9q7L";var w=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,o=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},o&&n.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:P,src:o,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(i.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},T="authorCol_8c0z";function I(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",T),key:t},n.createElement(w,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var y=function(e){var t,a,u,d,g=(u=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return u(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=(0,s.C)().withBaseUrl,v=e.children,f=e.frontMatter,N=e.assets,Z=e.metadata,P=e.truncated,w=e.isBlogPostPage,T=void 0!==w&&w,y=Z.date,L=Z.formattedDate,x=Z.permalink,B=Z.tags,C=Z.readingTime,M=Z.title,R=Z.editUrl,S=Z.authors,U=null!=(t=N.image)?t:f.image;return n.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(d=T?"h1":"h2",n.createElement("header",null,n.createElement(d,{className:E,itemProp:"headline"},T?M:n.createElement(i.Z,{itemProp:"url",to:x},M)),n.createElement("div",{className:(0,r.Z)(b,"margin-vert--md")},n.createElement("time",{dateTime:y,itemProp:"datePublished"},L),void 0!==C&&n.createElement(n.Fragment,null," \xb7 ",g(C))),n.createElement(I,{authors:S,assets:N}))),U&&n.createElement("meta",{itemProp:"image",content:p(U,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:c.Z},v)),(B.length>0||P)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[_]=T,a))},B.length>0&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":!T})},n.createElement(k,{tags:B})),T&&R&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(h,{editUrl:R})),!T&&P&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(i.Z,{to:Z.permalink,"aria-label":"Read more about "+M},n.createElement("b",null,n.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},4147:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),r=a(1217),l=a(6165),o=a(7937),i=a(4973),s=a(6742);var m=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},c=a(941);var u=function(e){var t,a=e.content,i=e.sidebar,s=a.frontMatter,u=a.assets,d=a.metadata,g=d.title,p=d.description,v=d.nextItem,h=d.prevItem,E=d.date,b=d.tags,_=d.authors,f=s.hide_table_of_contents,N=s.keywords,Z=null!=(t=u.image)?t:s.image;return n.createElement(l.Z,{wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:i,toc:!f&&a.toc?a.toc:void 0},n.createElement(r.Z,{title:g,description:p,keywords:N,image:Z},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:E}),_.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:_.map((function(e){return e.url})).filter(Boolean).join(",")}),b.length>0&&n.createElement("meta",{property:"article:tag",content:b.map((function(e){return e.label})).join(",")})),n.createElement(o.Z,{frontMatter:s,assets:u,metadata:d,isBlogPostPage:!0},n.createElement(a,null)),(v||h)&&n.createElement(m,{nextItem:v,prevItem:h}))}},7211:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(6010),l=a(6742),o="tag_WK-t",i="tagRegular_LXbV",s="tagWithCount_S5Zl";var m=function(e){var t,a=e.permalink,m=e.name,c=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(o,(t={},t[i]=!c,t[s]=c,t))},m,c&&n.createElement("span",null,c))}}}]);
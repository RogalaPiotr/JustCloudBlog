"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4978],{34435:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>d});var n=i(55845),t=i(74848),r=i(28453);const o={slug:"darmowy-cloud-xen-cloud-platform",title:"Darmowy Cloud? - Xen Cloud Platform",description:"Xen Cloud Platform darmowy wirtualizator dla w\u0142asnej chmury prywatnej. Sprawd\u017a moje pierwsze wra\u017cenia z Xen Server.",authors:["progala"],date:"2013-02-26",tags:["ati","citrix","gpu-pass-thru","nvidia","xen","xenserver"],keywords:["ati","citrix","gpu-pass-thru","nvidia","xen","xenserver"],hide_table_of_contents:!0},s=void 0,l={authorsImageUrls:[void 0]},d=[];function c(e){const a={a:"a",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:'Mia\u0142em okazje przetestowa\u0107 XCP na swoim sprz\u0119cie. Instalacja i dzia\u0142anie nie odbiega klasycznego "Xen Server". Zarz\u0105dzanie z konsoli XenCenter te\u017c dobrze dzia\u0142a. Dla testu postawi\u0142em kilka host\xf3w Win7 i dzia\u0142a\u0142y bez problem\xf3w. Jedynym problemem, kt\xf3ry mnie dotkn\u0105\u0142 to brak mo\u017cliwo\u015b\u0107 wsp\xf3\u0142dzielenia procesora GPU. Akurat m\xf3j jest nie rekomendowany. W zasadzie mam zwyk\u0142\u0105 kart\u0119 graficzn\u0105 nVidia GTX 650 dlatego mnie to za bardzo nie rozczarowa\u0142o, ale mimo wszystko musz\u0119 stwierdzi\u0107 \u017ce szkoda. XEN nastawi\u0142 si\u0119 zdecydowanie na dedykowane karty z serii Nvidia Quadro i ATI FirePro. Pr\xf3bowa\u0142em szuka\u0107 rozwi\u0105za\u0144, aby obej\u015b\u0107 t\u0119 przeszkod\u0119, ale bez skutecznie. Kernel-Xen zdecydowanie odmawia instalacji sterownik\xf3w nVidii. Uda\u0142o mi si\u0119 znale\u017a\u0107 opis dotycz\u0105cy instalacji driver\xf3w naprzemiennie dla Kernel-a podstawowego i Kernela-Xen lecz te\u017c bez skuteczne. Polega\u0142o to na rozpocz\u0119ciu instalacji na Kernelu-Xen a p\xf3\u017aniej ko\u0144czenie instalacji na podstawowym Kernelu podobno dzi\u0119ki temu mogliby\u015bmy oszuka\u0107 system i wcisn\u0105\u0107 mu sterownik dla nie rekomendowanej karty graficznej. Opis by\u0142 aktualizowany ostatni raz w po\u0142owie 2010 roku wi\u0119c nie dziwi mnie to, \u017ce nie chce dzia\u0142a\u0107 ze sterownikami mojej karty graficznej. Dla os\xf3b z kart\u0105 graficzn\u0105 ATI m\xf3g\u0142bym zaprosi\u0107 do test\xf3w ;). Na stornie Wiki Xen mo\u017cna znale\u017a\u0107 przetestowane chipsety ATI, z kt\xf3rymi dzia\u0142a\xa0GPU pass-thru.W XCP dodano i rozbudowano kilka nast\u0119puj\u0105cych funkcjonalno\u015bci:'}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"VM lifecycle: live snapshots, checkpoint, migration"}),"\n",(0,t.jsx)(a.li,{children:"Resource pools: flexible storage and networking"}),"\n",(0,t.jsx)(a.li,{children:"Event tracking: progress, notification"}),"\n",(0,t.jsx)(a.li,{children:"Upgrade and patching capabilities"}),"\n",(0,t.jsx)(a.li,{children:"Real-time performance monitoring and alerting"}),"\n",(0,t.jsx)(a.li,{children:"Built-in support and templates for Windows and Linux guests"}),"\n",(0,t.jsx)(a.li,{children:"Open vSwitch support built-in"}),"\n",(0,t.jsx)(a.li,{children:"Storage XenMotion\xae live Migration (cross-pool migration, VDI migration)"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"XenPanda",src:i(73645).A+"",width:"1023",height:"821"})}),"\n",(0,t.jsxs)(a.p,{children:["Wybaczcie, ale nie b\u0119d\u0119 tego t\u0142umaczy\u0142 poniewa\u017c du\u017co czytelniej si\u0119 patrzy na nazwy angielskie. Wszystkie informacje na temat i plik .iso XCP s\u0105 tutaj:\xa0",(0,t.jsx)(a.a,{href:"http://xen.org/products/cloudxen.html",title:"http://xen.org/products/cloudxen.html",children:"http://xen.org/products/cloudxen.html"}),'. Gdy wirtualizujemy hosty linuxowe b\u0105d\u017a serwerowe MS my\u015bl\u0119, \u017ce przy ma\u0142o skomplikowanych infrastrukturach takie rozwi\u0105zanie Open-Source, kt\xf3re jest Freeware w zupe\u0142no\u015bci wystarczy wzgl\u0119dem XenServer Citrix-owego. W wypadku gdy nastawiamy si\u0119 na korzystanie z "GPU pass-thru" czy "Live memory snapshot and revert" mo\u017cemy tego korzysta\u0107 za free w wersji XCP. W wersji Citrixowej musimy zakupi\u0107 licencje co najmniej Enterprise. Zapraszam do pyta\u0144, testowania i komentowania.']})]})}function p(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},73645:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/XenPanda-edb9e68d5fe42d37ce336c7e36d12187.jpeg"},28453:(e,a,i)=>{i.d(a,{R:()=>o,x:()=>s});var n=i(96540);const t={},r=n.createContext(t);function o(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:a},e.children)}},55845:e=>{e.exports=JSON.parse('{"permalink":"/darmowy-cloud-xen-cloud-platform","source":"@site/blog/2013-02-26-darmowy-cloud-xen-cloud-platform/index.md","title":"Darmowy Cloud? - Xen Cloud Platform","description":"Xen Cloud Platform darmowy wirtualizator dla w\u0142asnej chmury prywatnej. Sprawd\u017a moje pierwsze wra\u017cenia z Xen Server.","date":"2013-02-26T00:00:00.000Z","tags":[{"inline":true,"label":"ati","permalink":"/tags/ati"},{"inline":true,"label":"citrix","permalink":"/tags/citrix"},{"inline":true,"label":"gpu-pass-thru","permalink":"/tags/gpu-pass-thru"},{"inline":true,"label":"nvidia","permalink":"/tags/nvidia"},{"inline":true,"label":"xen","permalink":"/tags/xen"},{"inline":true,"label":"xenserver","permalink":"/tags/xenserver"}],"readingTime":1.73,"hasTruncateMarker":false,"authors":[{"name":"Piotr Rogala","title":"MVP Azure & owner JustCloud.pl","url":"https://github.com/RogalaPiotr","imageURL":"https://avatars.githubusercontent.com/u/31566956?v=4","key":"progala","page":null}],"frontMatter":{"slug":"darmowy-cloud-xen-cloud-platform","title":"Darmowy Cloud? - Xen Cloud Platform","description":"Xen Cloud Platform darmowy wirtualizator dla w\u0142asnej chmury prywatnej. Sprawd\u017a moje pierwsze wra\u017cenia z Xen Server.","authors":["progala"],"date":"2013-02-26","tags":["ati","citrix","gpu-pass-thru","nvidia","xen","xenserver"],"keywords":["ati","citrix","gpu-pass-thru","nvidia","xen","xenserver"],"hide_table_of_contents":true},"unlisted":false,"prevItem":{"title":"Infomex - mini konferencja","permalink":"/infomex-mini-konferencja"},"nextItem":{"title":"Publikacja zdalnych aplikacji - RemoteApp, Windows Server 2012","permalink":"/publikacja-zdalnych-aplikacji-remoteapp-windows-server-2012"}}')}}]);
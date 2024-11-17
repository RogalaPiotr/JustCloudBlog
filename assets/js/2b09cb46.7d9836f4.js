"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[923],{17267:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var o=r(91840),t=r(74848),i=r(28453);const s={slug:"azure-i-storage-zarzadzanie-danymi",title:"Azure i Storage \u2013 zarz\u0105dzanie danymi",description:"Chcesz si\u0119 dowiedzie\u0107 jak korzysta\u0107 ze storage w Azure? W tym artykule sprawdzimy aplikacje kt\xf3re pozwol\u0105 na przegl\u0105d danych dodanych na dysku w Azure.",authors:["progala"],date:"2016-02-06",categories:["cloud-computing"],tags:["azure","azure-explorer","cloudxplorer","microsoft-azure-storage-explorer","storage","visual-studio"],keywords:["azure","azure-explorer","cloudxplorer","microsoft-azure-storage-explorer","storage","visual-studio"],hide_table_of_contents:!0},n=void 0,l={authorsImageUrls:[void 0]},d=[];function c(e){const a={a:"a",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Zarz\u0105dzanie zawarto\u015bci\u0105 danych w blob'ach w Azure jest kluczowe do utrzymywania porz\u0105dku. PowerShell jest jak najbardziej odpowiednim narz\u0119dziem do takich operacji aczkolwiek je\u015bli zale\u017cy Ci na czasie, aby przejrze\u0107 sto dysk\xf3w to PowerShell mo\u017ce sta\u0107 si\u0119 uci\u0105\u017cliwy i ma\u0142o pomocy. Poni\u017cej przedstawi\u0119 aplikacje, kt\xf3re mog\u0105 nam pom\xf3c w szybkim i efektywnym zarz\u0105dzaniem danymi przechowywanymi w Azure."}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Microsoft Azure Storage Explorer"}),", producent Microsoft: ",(0,t.jsx)(a.a,{href:"http://storageexplorer.com/",title:"http://storageexplorer.com/",children:"http://storageexplorer.com/"})]}),"\n",(0,t.jsx)(a.p,{children:"Od wydania ulepszonej wersji mog\u0119 stwierdzi\u0107, \u017ce jest to najlepsze narz\u0119dzie do pracy z dyskami w chmurze. Mo\u017cliwo\u015b\u0107 zalogowania si\u0119 danymi chmurowymi jest zalet\u0105 (w poprzedniej wersji nie by\u0142o to dost\u0119pne), a nast\u0119pnie zobaczymy wszystkie storage-y i blob'y w dost\u0119pnej subskrypcji. Minusem aplikacji jest d\u0142ugi czas \u0142adowania danych i wy\u015bwietlania zawarto\u015bci blob'\xf3w."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"image",src:r(86382).A+"",width:"1000",height:"768"})}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Azure Explorer"}),", producent: Cerebrata: ",(0,t.jsx)(a.a,{href:"http://www.cerebrata.com/products/azure-explorer/introduction",title:"http://www.cerebrata.com/products/azure-explorer/introduction",children:"http://www.cerebrata.com/products/azure-explorer/introduction"})]}),"\n",(0,t.jsxs)(a.p,{children:["Azure Explorer jest to darmow\u0105 alternatyw\u0105 programu: CloudXplorer (",(0,t.jsx)(a.a,{href:"http://clumsyleaf.com/products/cloudxplorer",title:"http://clumsyleaf.com/products/cloudxplorer",children:"http://clumsyleaf.com/products/cloudxplorer"}),"). W por\xf3wnaniu do aplikacji Microsoftu nie mo\u017cemy si\u0119 zalogowa\u0107 danymi chmurowymi tylko ka\u017cdy storage trzeba doda\u0107 osobno poprzez podanie nazwy i access key-a. Przegl\u0105danie zawarto\u015bci blob'\xf3w odbywa si\u0119 bardzo szybko."]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"image",src:r(55252).A+"",width:"1007",height:"587"})}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Visual Studio"}),", producent: Microsoft wersja free Express: ",(0,t.jsx)(a.a,{href:"https://www.visualstudio.com/en-us/downloads/download-visual-studio-vs.aspx",title:"https://www.visualstudio.com/en-us/downloads/download-visual-studio-vs.aspx",children:"https://www.visualstudio.com/en-us/downloads/download-visual-studio-vs.aspx"})]}),"\n",(0,t.jsx)(a.p,{children:"By\u0107 mo\u017ce nie jest to najlepsze rozwi\u0105zanie, ale chcia\u0142em przedstawi\u0107 Visual Studio jako alternatyw\u0119 dla program\xf3w, kt\xf3re s\u0105 wy\u0142\u0105cznie przeznaczenia przegl\u0105dania storage-\xf3w. Visual Studio wci\u0105\u017c dopracowuje wy\u015bwietlanie zasob\xf3w chmurowych przez co zawsze mo\u017ce nas co\u015b zaskoczy\u0107 po aktualizacji. W odr\xf3\u017cnieniu od wspomnianych wy\u017cej aplikacji Visual Studio wy\u015bwietli nam wszystkie utworzone zasoby w subskrypcji."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"image",src:r(29743).A+"",width:"385",height:"338"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"image",src:r(41887).A+"",width:"172",height:"244"})}),"\n",(0,t.jsx)(a.p,{children:"Podsumowuj\u0105c: wszystkie wy\u017cej wspomniane aplikacje s\u0105 przydane do pracy z Azure i oferuj\u0105 podobne mo\u017cliwo\u015bci. Zapraszam do test\xf3w i wyra\u017cania swojej opinii!"})]})}function u(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},55252:(e,a,r)=>{r.d(a,{A:()=>o});const o=r.p+"assets/images/image-1-24ab2a1a85c32634b0e54225d9771ef9.png"},29743:(e,a,r)=>{r.d(a,{A:()=>o});const o=r.p+"assets/images/image-2-a63ea87977926434334f1a19bc1c50fd.png"},86382:(e,a,r)=>{r.d(a,{A:()=>o});const o=r.p+"assets/images/image-2a2c93d2781cf4632ccc4cf9a5678330.png"},41887:(e,a,r)=>{r.d(a,{A:()=>o});const o=r.p+"assets/images/image_thumb-3-546508bf69fb0361fd24d8998dcea4c6.png"},28453:(e,a,r)=>{r.d(a,{R:()=>s,x:()=>n});var o=r(96540);const t={},i=o.createContext(t);function s(e){const a=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:a},e.children)}},91840:e=>{e.exports=JSON.parse('{"permalink":"/azure-i-storage-zarzadzanie-danymi","source":"@site/blog/2016-02-06-azure-i-storage-zarzadzanie-danymi/index.md","title":"Azure i Storage \u2013 zarz\u0105dzanie danymi","description":"Chcesz si\u0119 dowiedzie\u0107 jak korzysta\u0107 ze storage w Azure? W tym artykule sprawdzimy aplikacje kt\xf3re pozwol\u0105 na przegl\u0105d danych dodanych na dysku w Azure.","date":"2016-02-06T00:00:00.000Z","tags":[{"inline":true,"label":"azure","permalink":"/tags/azure"},{"inline":true,"label":"azure-explorer","permalink":"/tags/azure-explorer"},{"inline":true,"label":"cloudxplorer","permalink":"/tags/cloudxplorer"},{"inline":true,"label":"microsoft-azure-storage-explorer","permalink":"/tags/microsoft-azure-storage-explorer"},{"inline":true,"label":"storage","permalink":"/tags/storage"},{"inline":true,"label":"visual-studio","permalink":"/tags/visual-studio"}],"readingTime":1.255,"hasTruncateMarker":true,"authors":[{"name":"Piotr Rogala","title":"MVP Azure & owner JustCloud.pl","url":"https://github.com/RogalaPiotr","imageURL":"https://avatars.githubusercontent.com/u/31566956?v=4","key":"progala","page":null}],"frontMatter":{"slug":"azure-i-storage-zarzadzanie-danymi","title":"Azure i Storage \u2013 zarz\u0105dzanie danymi","description":"Chcesz si\u0119 dowiedzie\u0107 jak korzysta\u0107 ze storage w Azure? W tym artykule sprawdzimy aplikacje kt\xf3re pozwol\u0105 na przegl\u0105d danych dodanych na dysku w Azure.","authors":["progala"],"date":"2016-02-06","categories":["cloud-computing"],"tags":["azure","azure-explorer","cloudxplorer","microsoft-azure-storage-explorer","storage","visual-studio"],"keywords":["azure","azure-explorer","cloudxplorer","microsoft-azure-storage-explorer","storage","visual-studio"],"hide_table_of_contents":true},"unlisted":false,"prevItem":{"title":"Microsoft Azure User Group Poland - Wroc\u0142aw","permalink":"/maugp-wroclaw"},"nextItem":{"title":"Azure CLI \u2013 Logowanie","permalink":"/azure-cli-logowanie"}}')}}]);
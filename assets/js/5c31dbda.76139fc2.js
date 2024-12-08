"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5916],{28299:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var r=a(16979),t=a(74848),i=a(28453);const s={slug:"profil-logowania-do-azure",title:"Profil logowania do Azure",description:"Pracujesz du\u017co w konsoli PowerShell? Nie chcesz logowa\u0107\xa0si\u0119\xa0co chwil\u0119? Wykorzystaj plik z kontekstem, kt\xf3ry u\u0142atwi Ci prac\u0119 z konsol\u0105!",date:"2017-08-18",authors:["progala"],tags:["azure","azurermaccount","azurermcontext","import-azurermcontext","powershell","subscryption"],keywords:["azure","azurermaccount","azurermcontext","import-azurermcontext","powershell","subscryption"],hide_table_of_contents:!0},n=void 0,c={authorsImageUrls:[void 0]},l=[];function p(e){const o={a:"a",code:"code",em:"em",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"Spotka\u0142em si\u0119 ostatnio z bardzo ciekawym feature\u2019m zwi\u0105zanym z zapisaniem swojego profilu logowania do Azure. W skr\xf3cie opisuj\u0105c je\u015bli u\u017cywasz cz\u0119sto PowerShella, a dodatkowo masz MFA zapewne wiesz jak denerwuj\u0105ce jest ci\u0105g\u0142e pytanie o login i has\u0142o. Kiedy\u015b pojawi\u0142a si\u0119 opcja zwi\u0105zana z zapisaniem credential\u2019i do pliku a nast\u0119pnie za pomoc\u0105 skryptu mo\u017cna by\u0142o sobie zautomatyzowa\u0107 proces logowania. Aczkolwiek przesta\u0142o to dzia\u0142a\u0107 po wprowadzeniu ARM'a itd. Aby nie rozwodzi\u0107 si\u0119 nad tym przedstawi\u0119 Ci jak mo\u017cemy sobie u\u0142atwi\u0107 \u017cycie i prac\u0119 ze skryptami, ale o tym p\xf3\u017aniej. Na pocz\u0105tku prosz\u0119 Ci\u0119 o wykonanie aktualizacji PowerShell Azure poniewa\u017c poni\u017csze polecenia s\u0105 dost\u0119pne od wersji 3.8.0 oraz 4.2.0 w celu aktualizacji mo\u017cesz u\u017cy\u0107 Web Installer\u2019a z linku poni\u017cej."}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Dokumentacja:"})," Add-AzureRmAccount: ",(0,t.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/powershell/module/azurerm.profile/add-azurermaccount?view=azurermps-3.8.0",children:"https://docs.microsoft.com/en-us/powershell/module/azurerm.profile/add-azurermaccount?view=azurermps-3.8.0"})," Save-AzureRmContext: ",(0,t.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/powershell/module/azurerm.profile/save-azurermcontext?view=azurermps-3.8.0",children:"https://docs.microsoft.com/en-us/powershell/module/azurerm.profile/save-azurermcontext?view=azurermps-3.8.0"})," Import-AzureRmContext: ",(0,t.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/powershell/module/azurerm.profile/import-azurermcontext?view=azurermps-4.2.0",children:"https://docs.microsoft.com/en-us/powershell/module/azurerm.profile/import-azurermcontext?view=azurermps-4.2.0"})," WebInstaller: ",(0,t.jsx)(o.a,{href:"https://www.microsoft.com/web/downloads/platform.aspx",children:"https://www.microsoft.com/web/downloads/platform.aspx"})]}),"\n",(0,t.jsxs)(o.p,{children:["W moim przypadku mamy dwie subskrypcje i zapisuj\u0105c sw\xf3j profil mog\u0119 zdefiniowa\u0107 jaka ma zosta\u0107 wybrana subskrypcja w momencie kiedy b\u0119d\u0119 go importowa\u0142 w dalszej cz\u0119\u015bci. Na pocz\u0105tku pobiore ID Subskrypcji w klasyczny spos\xf3b: otwieram okno PowerShella loguj\u0119 si\u0119 u\u017cywaj\u0105c ",(0,t.jsx)(o.em,{children:"Login-AzureRmAccount"}),", a nast\u0119pnie wpisuj\u0119 ",(0,t.jsx)(o.em,{children:"Get-AzureRmSubscrpytion"})," i dostaje taki wynik:"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:a(33242).A+"",width:"459",height:"244"})}),"\n",(0,t.jsx)(o.p,{children:"Nast\u0119pnie mog\u0119 przej\u015b\u0107 do wykonania polecenia, kt\xf3re mnie zaloguje, a p\xf3\u017aniej umo\u017cliwi mi zapisanie profilu:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:'Add-AzureRmAccount -SubscriptionId "yyyy-yyyy-yyyy-yyyy"\n'})}),"\n",(0,t.jsx)(o.p,{children:"Wynik:"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:a(37445).A+"",width:"650",height:"190"})}),"\n",(0,t.jsx)(o.p,{children:"Nast\u0119pne polecenie - zapisanie profilu:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"Save-AzureRmContext -Path C:\\\\temp\\\\progala-mas.json\n"})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:a(93480).A+"",width:"1133",height:"294"})}),"\n",(0,t.jsx)(o.p,{children:"W tym momencie zapisa\u0142em sw\xf3j profil z odwo\u0142aniem do wcze\u015bniej wskazanej subskrypcji. Jako hint mog\u0119 powiedzie\u0107, \u017ce mo\u017cemy u\u017cy\u0107 funkcji 2w1 jak poni\u017cej:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:'Save-AzureRmContext -Profile (Add-AzureRmAccount -SubscriptionId "yyyy-yyyy-yyyy-yyyy") -Path C:\\\\temp\\\\progala-mas.json\n'})}),"\n",(0,t.jsx)(o.p,{children:"\u017beby m\xf3c zaimportowa\u0107 zapisany profil wystarczy u\u017cy\u0107 polecenia:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"Import-AzureRmContext -Path C:\\\\temp\\\\progala-mas.json\n"})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:a(91419).A+"",width:"530",height:"195"})}),"\n",(0,t.jsx)(o.p,{children:"W taki spos\xf3b mo\u017cemy sw\xf3j profil wywo\u0142a\u0107 gdy korzystamy z r\xf3znych skrypt\xf3w itp. Mo\u017ce to by\u0107 dla kogo\u015b ma\u0142o atrakcyjne aczkolwiek mog\u0119 zdradzi\u0107 do czego bardzo ta wiedza si\u0119 przydaje. Maj\u0105c zagnie\u017cd\u017cone skrypty PowerShellow\u2019e, kt\xf3re wykonuj\u0119 jako Job'y maj\u0105 one to do siebie, \u017ce wywo\u0142ane skrypty w tle maj\u0105 problem z przej\u0119ciem sesji z poprzedniego okna gdy\u017c sesja nie jest dziedziczona. Gdy u\u017cyjemy polecenia Import-AzureRmContex mamy \"gwarancj\u0119\", \u017ce wywo\u0142ane okno w tle b\u0119dzie mog\u0142o swobodnie korzysta\u0107 z sesji Azure'owej."})]})}function u(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},33242:(e,o,a)=>{a.d(o,{A:()=>r});const r=a.p+"assets/images/loginazure1-3fe0cd6c04d1e158f1d20aa6e266b459.jpg"},37445:(e,o,a)=>{a.d(o,{A:()=>r});const r=a.p+"assets/images/loginazure2-e20fe9f949caa707b688f621aa0d8566.jpg"},93480:(e,o,a)=>{a.d(o,{A:()=>r});const r=a.p+"assets/images/loginazure3-c56c6350ce0457b03971d805cacb03bf.jpg"},91419:(e,o,a)=>{a.d(o,{A:()=>r});const r=a.p+"assets/images/loginazure4-71ea87c67de8a8095dbb574859bddca1.jpg"},28453:(e,o,a)=>{a.d(o,{R:()=>s,x:()=>n});var r=a(96540);const t={},i=r.createContext(t);function s(e){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:o},e.children)}},16979:e=>{e.exports=JSON.parse('{"permalink":"/profil-logowania-do-azure","source":"@site/blog/2017-08-18-profil-logowania-do-azure/index.md","title":"Profil logowania do Azure","description":"Pracujesz du\u017co w konsoli PowerShell? Nie chcesz logowa\u0107\xa0si\u0119\xa0co chwil\u0119? Wykorzystaj plik z kontekstem, kt\xf3ry u\u0142atwi Ci prac\u0119 z konsol\u0105!","date":"2017-08-18T00:00:00.000Z","tags":[{"inline":true,"label":"azure","permalink":"/tags/azure"},{"inline":true,"label":"azurermaccount","permalink":"/tags/azurermaccount"},{"inline":true,"label":"azurermcontext","permalink":"/tags/azurermcontext"},{"inline":true,"label":"import-azurermcontext","permalink":"/tags/import-azurermcontext"},{"inline":true,"label":"powershell","permalink":"/tags/powershell"},{"inline":true,"label":"subscryption","permalink":"/tags/subscryption"}],"readingTime":1.67,"hasTruncateMarker":true,"authors":[{"name":"Piotr Rogala","title":"MVP Azure & owner JustCloud.pl","url":"https://github.com/RogalaPiotr","imageURL":"https://avatars.githubusercontent.com/u/31566956?v=4","key":"progala","page":null}],"frontMatter":{"slug":"profil-logowania-do-azure","title":"Profil logowania do Azure","description":"Pracujesz du\u017co w konsoli PowerShell? Nie chcesz logowa\u0107\xa0si\u0119\xa0co chwil\u0119? Wykorzystaj plik z kontekstem, kt\xf3ry u\u0142atwi Ci prac\u0119 z konsol\u0105!","date":"2017-08-18","authors":["progala"],"tags":["azure","azurermaccount","azurermcontext","import-azurermcontext","powershell","subscryption"],"keywords":["azure","azurermaccount","azurermcontext","import-azurermcontext","powershell","subscryption"],"hide_table_of_contents":true},"unlisted":false,"prevItem":{"title":"Deployment maszyny z funkcj\u0105 Auto-Shutdown  za pomoc\u0105 szablonu arm","permalink":"/deployment-maszyny-z-funkcja-auto-shutdown-za-pomoca-szablonu-arm"},"nextItem":{"title":"Visual Studio Code i Git zamiast PowerShell ISE - UPDATED","permalink":"/visual-studio-code-i-git-zamiast-powershell-ise"}}')}}]);
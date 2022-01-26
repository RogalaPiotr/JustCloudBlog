"use strict";(self.webpackChunkjustcloudblog=self.webpackChunkjustcloudblog||[]).push([[7510],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||n;return a?o.createElement(y,i(i({ref:t},u),{},{components:a})):o.createElement(y,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8652:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},assets:function(){return u},toc:function(){return c},default:function(){return m}});var o=a(7462),r=a(3366),n=(a(7294),a(3905)),i=["components"],s={slug:"wyslanie-zadania-api-z-powershell-do-azure-devops",title:"Wys\u0142anie \u017c\u0105dania API z PowerShell do Azure DevOps",description:"PowerShell to nie tylko automatyzacja za pomoc\u0105 modu\u0142\xf3w. Mo\u017cemy go r\xf3wnie\u017c wykorzysta\u0107 do wysy\u0142ania zapyta\u0144 za pomoc\u0105 API do r\xf3\u017cnych serwis\xf3w. W tym artykule zobaczysz jak to zrobi\u0107.",date:"2020-04-13",authors:["progala"],tags:["api","automation","azure","azure devops","powershell"],keywords:["justcloud","powershell","api","automatyzacja","automation","azure","microsoft azure","ado","agents"]},p=void 0,l={permalink:"/wyslanie-zadania-api-z-powershell-do-azure-devops",source:"@site/blog/2020-04-13-wyslanie-zadania-api-z-powershell-do-azure-devops/index.md",title:"Wys\u0142anie \u017c\u0105dania API z PowerShell do Azure DevOps",description:"PowerShell to nie tylko automatyzacja za pomoc\u0105 modu\u0142\xf3w. Mo\u017cemy go r\xf3wnie\u017c wykorzysta\u0107 do wysy\u0142ania zapyta\u0144 za pomoc\u0105 API do r\xf3\u017cnych serwis\xf3w. W tym artykule zobaczysz jak to zrobi\u0107.",date:"2020-04-13T00:00:00.000Z",formattedDate:"April 13, 2020",tags:[{label:"api",permalink:"/tags/api"},{label:"automation",permalink:"/tags/automation"},{label:"azure",permalink:"/tags/azure"},{label:"azure devops",permalink:"/tags/azure-devops"},{label:"powershell",permalink:"/tags/powershell"}],readingTime:1.4,truncated:!0,authors:[{name:"Piotr Rogala",title:"MVP Azure & owner JustCloud.pl",url:"https://github.com/RogalaPiotr",imageURL:"https://avatars.githubusercontent.com/u/31566956?v=4",key:"progala"}],prevItem:{title:"Przyspieszenie pracy nad tagowaniem zasob\xf3w za pomoc\u0105 PowerShell - Tag raport Microsoft Azure",permalink:"/tags-in-azure"},nextItem:{title:"IaC control via PowerShell module for ARM templates",permalink:"/iac-control-via-powershell-module-for-arm-templates"}},u={authorsImageUrls:[void 0]},c=[],d={toc:c};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Cz\u0119sto stajemy przed wyzwaniem zintegrowania ze sob\u0105 wielu narz\u0119dzi. Je\u017celi stosujemy PowerShell w celu automatyzacji swojej infrastruktury b\u0105d\u017a budowy prostych skrypt\xf3w mo\u017ce nam si\u0119 przyda\u0107 zastosowanie u\u017cycia wywo\u0142ania \u017c\u0105dania API za pomoc\u0105 PowerShell. Poni\u017cszy przyk\u0142ad zaprezentuje u\u017cycie wys\u0142ania \u017c\u0105dania za pomoc\u0105 API do Azure DevOps w celu dodania puli agentowej."),(0,n.kt)("p",null,"Referencje API do Azure DevOps s\u0105 dost\u0119pne tutaj:\xa0"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/azure/devops/distributedtask/pools/add?view=azure-devops-rest-5.1"},"https://docs.microsoft.com/en-us/rest/api/azure/devops/distributedtask/pools/add?view=azure-devops-rest-5.1")),(0,n.kt)("p",null,"Poni\u017cszy przyk\u0142adowy skrypt mo\u017cemy rozbudowa\u0107 dla innych operacji stosuj\u0105c odpowiedni uri dla potrzebnej operacji z powy\u017cszego linku.  "),(0,n.kt)("p",null,"Na pocz\u0105tku definiujemy zmienne:  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"$urlvsts - URL do naszego projektu Azure DevOps"),(0,n.kt)("li",{parentName:"ul"},"$token - PAT token (Instrukcja jak wygenerowa\u0107 token: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page"},"https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page"),")"),(0,n.kt)("li",{parentName:"ul"},"$pool - nazwa puli, kt\xf3r\u0105 chcemy utworzy\u0107"),(0,n.kt)("li",{parentName:"ul"},"$encodedPat - przekonwertowanie tokenu na SecureString"),(0,n.kt)("li",{parentName:"ul"},"$body - informacje do przekazania w wysy\u0142anym \u017c\u0105daniu")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$urlvsts = \'https://dev.azure.com/PROJECT-NAME\'\n$token = \'YOUR-PAT-TOKEN\'\n$pool = \'YOUR-POOL-NAME\'\n$encodedPat = \\[System.Convert\\]::ToBase64String(\\[System.Text.Encoding\\]::UTF8.GetBytes( ":$token"))\n$body = "{name:\\`"$pool\\`", autoProvision: \\`"true\\`"}"\n')),(0,n.kt)("p",null,"Komenda ",(0,n.kt)("inlineCode",{parentName:"p"},"Invoke-WebRequest")," wykonuje wys\u0142ania \u017c\u0105dania podaj\u0105c wcze\u015bniej zdefiniowane zmienne oraz zawiera Uri, czyli miejsce, w kt\xf3re zapuka \u017c\u0105danie, aby ustawi\u0107 now\u0105 pul\u0119 w Azure DevOps."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'Invoke-WebRequest \\`\n    -Method POST \\`\n    -Uri "$urlvsts/\\_apis/distributedtask/pools?api-version=5.0-preview.1" \\`\n    -UseBasicParsing \\`\n    -Headers @{Authorization = "Basic $encodedPat"} \\`\n    -Body $body \\`\n    -ContentType "application/json"\n')),(0,n.kt)("p",null,"Screens:"),(0,n.kt)("p",null,"Code:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(408).Z})),(0,n.kt)("p",null,"Output:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4350).Z})),(0,n.kt)("p",null,"Azure DevOps:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(6798).Z})),(0,n.kt)("p",null,"W prosty spos\xf3b mo\u017cemy teraz zautomatyzowa\u0107 operacje w Azure DevOps bez uruchamiania portalu. Niestety referencje API dla Azure DevOps nie pozwalaj\u0105 na wszystko co mo\u017cemy wyklika\u0107 w portalu, ale na pewno pomo\u017ce to w osi\u0105gni\u0119ciu celu. Je\u015bli masz ciekawe przypadki u\u017cycia wspomnianego API lub zastanawiasz si\u0119, gdzie mo\u017cna tego u\u017cy\u0107 zapraszam do komentowania."),(0,n.kt)("p",null,"U\u017cycie skryptu mo\u017cecie r\xf3wnie\u017c sprawdzi\u0107 w deploymencie puli agent\xf3w dla Azure DevOps tutaj: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/RogalaPiotr/JustCloudPublic/blob/master/simple-vm-with-installation-vsts-agent/vstsagent.ps1"},"https://github.com/RogalaPiotr/JustCloudPublic/blob/master/simple-vm-with-installation-vsts-agent/vstsagent.ps1")),(0,n.kt)("p",null,"Artyku\u0142 dost\u0119pny r\xf3wnie\u017c na Medium i LinkedIN:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"(EN) ",(0,n.kt)("a",{parentName:"li",href:"https://medium.com/@piotr.rogala/api-request-to-azure-devops-from-powershell-2e2f525dbd7a"},"https://medium.com/@piotr.rogala/api-request-to-azure-devops-from-powershell-2e2f525dbd7a")),(0,n.kt)("li",{parentName:"ul"},"(PL) ",(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/pulse/wys%C5%82anie-%C5%BC%C4%85dania-api-z-powershell-do-azure-devops-piotr-rogala"},"https://www.linkedin.com/pulse/wys%C5%82anie-%C5%BC%C4%85dania-api-z-powershell-do-azure-devops-piotr-rogala"))))}m.isMDXComponent=!0},408:function(e,t,a){t.Z=a.p+"assets/images/2020-04-13_14h12_09-74a67a70a3044a95c8342ca461fd26c3.png"},4350:function(e,t,a){t.Z=a.p+"assets/images/2020-04-13_14h12_53-b564469a0b3f4a59f61d76185b092578.png"},6798:function(e,t,a){t.Z=a.p+"assets/images/2020-04-13_14h14_02-1024x604-e6cc533454530d607213bf2bb5b3ea5c.png"}}]);
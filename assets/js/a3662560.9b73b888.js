"use strict";(self.webpackChunkjustcloudblog=self.webpackChunkjustcloudblog||[]).push([[510],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,w=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(w,i(i({ref:t},l),{},{components:a})):n.createElement(w,i({ref:t},l))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8652:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return l},toc:function(){return c},default:function(){return m}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],s={slug:"wyslanie-zadania-api-z-powershell-do-azure-devops",title:"Wys\u0142anie \u017c\u0105dania API z PowerShell do Azure DevOps",date:"2020-04-13",authors:["progala"],tags:["api","automation","azure","azure-devops","powershell"]},p=void 0,u={permalink:"/wyslanie-zadania-api-z-powershell-do-azure-devops",source:"@site/blog/2020-04-13-wyslanie-zadania-api-z-powershell-do-azure-devops/index.md",title:"Wys\u0142anie \u017c\u0105dania API z PowerShell do Azure DevOps",description:"Cz\u0119sto stajemy przed wyzwaniem zintegrowania ze sob\u0105 wielu narz\u0119dzi. Je\u017celi stosujemy PowerShell w celu automatyzacji swojej infrastruktury b\u0105d\u017a budowy prostych skrypt\xf3w mo\u017ce nam si\u0119 przyda\u0107 zastosowanie u\u017cycia wywo\u0142ania \u017c\u0105dania API za pomoc\u0105 PowerShell. Poni\u017cszy przyk\u0142ad zaprezentuje u\u017cycie wys\u0142ania \u017c\u0105dania za pomoc\u0105 API do Azure DevOps w celu dodania puli agentowej.",date:"2020-04-13T00:00:00.000Z",formattedDate:"April 13, 2020",tags:[{label:"api",permalink:"/tags/api"},{label:"automation",permalink:"/tags/automation"},{label:"azure",permalink:"/tags/azure"},{label:"azure-devops",permalink:"/tags/azure-devops"},{label:"powershell",permalink:"/tags/powershell"}],readingTime:1.38,truncated:!0,authors:[{name:"Piotr Rogala",title:"MVP Azure & owner JustCloud.pl",url:"https://github.com/RogalaPiotr",imageURL:"https://avatars.githubusercontent.com/u/31566956?v=4",key:"progala"}],prevItem:{title:"Przyspieszenie pracy nad tagowaniem zasob\xf3w za pomoc\u0105 PowerShell - Tag raport Microsoft Azure",permalink:"/tags-in-azure"}},l={authorsImageUrls:[void 0]},c=[],d={toc:c};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Cz\u0119sto stajemy przed wyzwaniem zintegrowania ze sob\u0105 wielu narz\u0119dzi. Je\u017celi stosujemy PowerShell w celu automatyzacji swojej infrastruktury b\u0105d\u017a budowy prostych skrypt\xf3w mo\u017ce nam si\u0119 przyda\u0107 zastosowanie u\u017cycia wywo\u0142ania \u017c\u0105dania API za pomoc\u0105 PowerShell. Poni\u017cszy przyk\u0142ad zaprezentuje u\u017cycie wys\u0142ania \u017c\u0105dania za pomoc\u0105 API do Azure DevOps w celu dodania puli agentowej."),(0,r.kt)("p",null,"Referencje API do Azure DevOps s\u0105 dost\u0119pne tutaj:\xa0"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/azure/devops/distributedtask/pools/add?view=azure-devops-rest-5.1"},"https://docs.microsoft.com/en-us/rest/api/azure/devops/distributedtask/pools/add?view=azure-devops-rest-5.1")),(0,r.kt)("p",null,"Poni\u017cszy przyk\u0142adowy skrypt mo\u017cemy rozbudowa\u0107 dla innych operacji stosuj\u0105c odpowiedni uri dla potrzebnej operacji z powy\u017cszego linku.  "),(0,r.kt)("p",null,"Na pocz\u0105tku definiujemy zmienne:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"$urlvsts - URL do naszego projektu Azure DevOps"),(0,r.kt)("li",{parentName:"ul"},"$token - PAT token (Instrukcja jak wygenerowa\u0107 token: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page"},"https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page"),")"),(0,r.kt)("li",{parentName:"ul"},"$pool - nazwa puli, kt\xf3r\u0105 chcemy utworzy\u0107"),(0,r.kt)("li",{parentName:"ul"},"$encodedPat - przekonwertowanie tokenu na SecureString"),(0,r.kt)("li",{parentName:"ul"},"$body - informacje do przekazania w wysy\u0142anym \u017c\u0105daniu")),(0,r.kt)("p",null,"$urlvsts = '",(0,r.kt)("a",{parentName:"p",href:"https://dev.azure.com/PROJECT-NAME'"},"https://dev.azure.com/PROJECT-NAME'"),"\n$token = 'YOUR-PAT-TOKEN'\n$pool = 'YOUR-POOL-NAME'\n$encodedPat = ","[","System.Convert","]","::ToBase64String(","[","System.Text.Encoding","]",'::UTF8.GetBytes( ":$token"))\n$body = "{name:',"`",'"$pool',"`",'", autoProvision: ',"`",'"true',"`",'"}"'),(0,r.kt)("p",null,"Komenda Invoke-WebRequest wykonuje wys\u0142ania \u017c\u0105dania podaj\u0105c wcze\u015bniej zdefiniowane zmienne oraz zawiera Uri, czyli miejsce, w kt\xf3re zapuka \u017c\u0105danie, aby ustawi\u0107 now\u0105 pul\u0119 w Azure DevOps."),(0,r.kt)("p",null,"Invoke-WebRequest ","`","\n-Method POST ","`",'\n-Uri "$urlvsts/',"_",'apis/distributedtask/pools?api-version=5.0-preview.1" ',"`","\n-UseBasicParsing ","`",'\n-Headers @{Authorization = "Basic $encodedPat"} ',"`","\n-Body $body ","`",'\n-ContentType "application/json"'),(0,r.kt)("p",null,"Screens:"),(0,r.kt)("p",null,"Code:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(408).Z})),(0,r.kt)("p",null,"Output:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4350).Z})),(0,r.kt)("p",null,"Azure DevOps:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6798).Z})),(0,r.kt)("p",null,"W prosty spos\xf3b mo\u017cemy teraz zautomatyzowa\u0107 operacje w Azure DevOps bez uruchamiania portalu. Niestety referencje API dla Azure DevOps nie pozwalaj\u0105 na wszystko co mo\u017cemy wyklika\u0107 w portalu, ale na pewno pomo\u017ce to w osi\u0105gni\u0119ciu celu. Je\u015bli masz ciekawe przypadki u\u017cycia wspomnianego API lub zastanawiasz si\u0119, gdzie mo\u017cna tego u\u017cy\u0107 zapraszam do komentowania."),(0,r.kt)("p",null,"U\u017cycie skryptu mo\u017cecie r\xf3wnie\u017c sprawdzi\u0107 w deploymencie puli agent\xf3w dla Azure DevOps tutaj: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RogalaPiotr/JustCloudPublic/blob/master/simple-vm-with-installation-vsts-agent/vstsagent.ps1"},"https://github.com/RogalaPiotr/JustCloudPublic/blob/master/simple-vm-with-installation-vsts-agent/vstsagent.ps1")),(0,r.kt)("p",null,"Artyku\u0142 dost\u0119pny r\xf3wnie\u017c na Medium i LinkedIN:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(EN) ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@piotr.rogala/api-request-to-azure-devops-from-powershell-2e2f525dbd7a"},"https://medium.com/@piotr.rogala/api-request-to-azure-devops-from-powershell-2e2f525dbd7a")),(0,r.kt)("li",{parentName:"ul"},"(PL) ",(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/pulse/wys%C5%82anie-%C5%BC%C4%85dania-api-z-powershell-do-azure-devops-piotr-rogala"},"https://www.linkedin.com/pulse/wys%C5%82anie-%C5%BC%C4%85dania-api-z-powershell-do-azure-devops-piotr-rogala"))))}m.isMDXComponent=!0},408:function(e,t,a){t.Z=a.p+"assets/images/2020-04-13_14h12_09-74a67a70a3044a95c8342ca461fd26c3.png"},4350:function(e,t,a){t.Z=a.p+"assets/images/2020-04-13_14h12_53-b564469a0b3f4a59f61d76185b092578.png"},6798:function(e,t,a){t.Z=a.p+"assets/images/2020-04-13_14h14_02-1024x604-e6cc533454530d607213bf2bb5b3ea5c.png"}}]);
"use strict";(self.webpackChunkjustcloudblog=self.webpackChunkjustcloudblog||[]).push([[269],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return y}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),y=o,m=d["".concat(u,".").concat(y)]||d[y]||c[y]||n;return a?r.createElement(m,i(i({ref:t},l),{},{components:a})):r.createElement(m,i({ref:t},l))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},719:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return l},toc:function(){return c},default:function(){return y}});var r=a(7462),o=a(3366),n=(a(7294),a(3905)),i=["components"],s={slug:"wyslanie-zadania-api-z-powershell-do-azure-devops",title:"Wys\u0142anie \u017c\u0105dania API z PowerShell do Azure DevOps",description:"PowerShell to nie tylko automatyzacja za pomoc\u0105 modu\u0142\xf3w. Mo\u017cemy go r\xf3wnie\u017c wykorzysta\u0107 do wysy\u0142ania zapyta\u0144 za pomoc\u0105 API do r\xf3\u017cnych serwis\xf3w. W tym artykule zobaczysz jak to zrobi\u0107.",date:"2020-04-13",authors:["progala"],tags:["api","automation","azure","azure-devops","powershell"],keywords:["justcloud","powershell","api","automatyzacja","automation","azure","microsoft azure","ado","agents"]},u=void 0,p={permalink:"/wyslanie-zadania-api-z-powershell-do-azure-devops",source:"@site/blog/2020-04-13-wyslanie-zadania-api-z-powershell-do-azure-devops/index.md",title:"Wys\u0142anie \u017c\u0105dania API z PowerShell do Azure DevOps",description:"PowerShell to nie tylko automatyzacja za pomoc\u0105 modu\u0142\xf3w. Mo\u017cemy go r\xf3wnie\u017c wykorzysta\u0107 do wysy\u0142ania zapyta\u0144 za pomoc\u0105 API do r\xf3\u017cnych serwis\xf3w. W tym artykule zobaczysz jak to zrobi\u0107.",date:"2020-04-13T00:00:00.000Z",formattedDate:"April 13, 2020",tags:[{label:"api",permalink:"/tags/api"},{label:"automation",permalink:"/tags/automation"},{label:"azure",permalink:"/tags/azure"},{label:"azure-devops",permalink:"/tags/azure-devops"},{label:"powershell",permalink:"/tags/powershell"}],readingTime:1.38,truncated:!0,authors:[{name:"Piotr Rogala",title:"MVP Azure & owner JustCloud.pl",url:"https://github.com/RogalaPiotr",imageURL:"https://avatars.githubusercontent.com/u/31566956?v=4",key:"progala"}],prevItem:{title:"Przyspieszenie pracy nad tagowaniem zasob\xf3w za pomoc\u0105 PowerShell - Tag raport Microsoft Azure",permalink:"/tags-in-azure"}},l={authorsImageUrls:[void 0]},c=[],d={toc:c};function y(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Cz\u0119sto stajemy przed wyzwaniem zintegrowania ze sob\u0105 wielu narz\u0119dzi. Je\u017celi stosujemy PowerShell w celu automatyzacji swojej infrastruktury b\u0105d\u017a budowy prostych skrypt\xf3w mo\u017ce nam si\u0119 przyda\u0107 zastosowanie u\u017cycia wywo\u0142ania \u017c\u0105dania API za pomoc\u0105 PowerShell. Poni\u017cszy przyk\u0142ad zaprezentuje u\u017cycie wys\u0142ania \u017c\u0105dania za pomoc\u0105 API do Azure DevOps w celu dodania puli agentowej."),(0,n.kt)("p",null,"Referencje API do Azure DevOps s\u0105 dost\u0119pne tutaj:\xa0"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/azure/devops/distributedtask/pools/add?view=azure-devops-rest-5.1"},"https://docs.microsoft.com/en-us/rest/api/azure/devops/distributedtask/pools/add?view=azure-devops-rest-5.1")),(0,n.kt)("p",null,"Poni\u017cszy przyk\u0142adowy skrypt mo\u017cemy rozbudowa\u0107 dla innych operacji stosuj\u0105c odpowiedni uri dla potrzebnej operacji z powy\u017cszego linku.  "),(0,n.kt)("p",null,"Na pocz\u0105tku definiujemy zmienne:  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"$urlvsts - URL do naszego projektu Azure DevOps"),(0,n.kt)("li",{parentName:"ul"},"$token - PAT token (Instrukcja jak wygenerowa\u0107 token: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page"},"https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page"),")"),(0,n.kt)("li",{parentName:"ul"},"$pool - nazwa puli, kt\xf3r\u0105 chcemy utworzy\u0107"),(0,n.kt)("li",{parentName:"ul"},"$encodedPat - przekonwertowanie tokenu na SecureString"),(0,n.kt)("li",{parentName:"ul"},"$body - informacje do przekazania w wysy\u0142anym \u017c\u0105daniu")))}y.isMDXComponent=!0}}]);
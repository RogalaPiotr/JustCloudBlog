"use strict";(self.webpackChunkjustcloudblog=self.webpackChunkjustcloudblog||[]).push([[9579],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return w}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),w=n,y=d["".concat(l,".").concat(w)]||d[w]||c[w]||r;return a?o.createElement(y,i(i({ref:t},u),{},{components:a})):o.createElement(y,i({ref:t},u))}));function w(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7440:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return w}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),i=["components"],s={slug:"azure global 2022",title:"Jak wdro\u017cy\u0107 Azure Pipelines agenta? (How to deploy Azure Pipelines agent?)",description:"Potrzebujesz stworzy\u0107 w\u0142asny serwer z agentem do deployment\xf3w w Azure DevOps? W tym artykule opisa\u0142em ca\u0142y proces oraz skrypty umo\u017cliwij\u0105ce bardzo szybkie wdro\u017cenie.",authors:["progala"],date:"2022-02-20",tags:["deploy","azure","devops","agent","agents","pipelines"],keywords:["azure","devops","agent","pipelines"]},l=void 0,p={permalink:"/azure global 2022",source:"@site/blog/2022-02-20-azure-global-2022.md",title:"Jak wdro\u017cy\u0107 Azure Pipelines agenta? (How to deploy Azure Pipelines agent?)",description:"Potrzebujesz stworzy\u0107 w\u0142asny serwer z agentem do deployment\xf3w w Azure DevOps? W tym artykule opisa\u0142em ca\u0142y proces oraz skrypty umo\u017cliwij\u0105ce bardzo szybkie wdro\u017cenie.",date:"2022-02-20T00:00:00.000Z",formattedDate:"February 20, 2022",tags:[{label:"deploy",permalink:"/tags/deploy"},{label:"azure",permalink:"/tags/azure"},{label:"devops",permalink:"/tags/devops"},{label:"agent",permalink:"/tags/agent"},{label:"agents",permalink:"/tags/agents"},{label:"pipelines",permalink:"/tags/pipelines"}],readingTime:1.355,truncated:!0,authors:[{name:"Piotr Rogala",title:"MVP Azure & owner JustCloud.pl",url:"https://github.com/RogalaPiotr",imageURL:"https://avatars.githubusercontent.com/u/31566956?v=4",key:"progala"}],frontMatter:{slug:"azure global 2022",title:"Jak wdro\u017cy\u0107 Azure Pipelines agenta? (How to deploy Azure Pipelines agent?)",description:"Potrzebujesz stworzy\u0107 w\u0142asny serwer z agentem do deployment\xf3w w Azure DevOps? W tym artykule opisa\u0142em ca\u0142y proces oraz skrypty umo\u017cliwij\u0105ce bardzo szybkie wdro\u017cenie.",authors:["progala"],date:"2022-02-20",tags:["deploy","azure","devops","agent","agents","pipelines"],keywords:["azure","devops","agent","pipelines"]},nextItem:{title:"Jak wdro\u017cy\u0107 Azure Pipelines agenta? (How to deploy Azure Pipelines agent?)",permalink:"/how to deploy azure pipelines agent"}},u={authorsImageUrls:[void 0]},c=[],d={toc:c};function w(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Azure DevOps pozwala na wdra\u017canie rozwi\u0105za\u0144 za po\u015brednictwem agent\xf3w tak zwanych "Microsoft-hosted" przez 1000 minut na miesi\u0105c. W momencie przekroczenia tego czasu mu\u017cemy dokupi\u0107 minuty albo wykorzysta\u0107 sw\xf3j serwer, laptop do kontynuowania wdra\u017cania. Dodam tylko, \u017ce wykorzystywania wlasnego laptopa do wdra\u017cania to nie jeste rozwi\u0105zanie produkcyjne \ud83d\ude43.'),(0,r.kt)("p",null,"Bardzo cz\u0119sto s\u0142ysz\u0119, a po co mi w\u0142asny serwer do wdra\u017cania?"),(0,r.kt)("p",null,'Klasyczna odpowied\u017a: to zale\u017cy... Robi\u0105c prace dyplomow\u0105 na uczelnie albo projekt PoC dla znajomego, mo\u017cecie wybra\u0107 opcje postawienia agenta na swoim laptopie. Je\u015bli pracujecie w grupie paru os\xf3b nale\u017cy skorzysta\u0107 z w\u0142asnego serwera. Je\u015bli jeste\u015bcie firm\u0105 i dostarczacie rozwi\u0105zania i jest to wasz core dostarczania rozwi\u0105za\u0144 jest to napewno w\u0142asny serer lub dokupienie "minut".\nAle jest jeszcze jedna syutacja kiedy wybierzecie w\u0142asny serwer z agentami. Macie z\u0142o\u017con\u0105 sie\u0107 i restrykcyjny dost\u0119p do niej. Wdro\u017cenie w\u0142asnego serwera w waszej sieci pozwoli wam na \u0142atw\u0105 komunikacje z wdro\u017conymi rozwi\u0105zaniami na Microsoft Azure, ale te\u017c wi\u0119ksze bezpiecze\u0144stwo procesowanych danych.'),(0,r.kt)("p",null,"Poni\u017cej odsy\u0142am was do dokumentacji gdzie mo\u017cecie szczeg\xf3\u0142owo dowiedzie\u0107 si\u0119 co Microsoft oferje w kwestii Azure Pipelines agent."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/agents?view=azure-devops&tabs=browser"},"MS Docs - Azure Pipelines agents")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/media/agent-connections-devops.png?view=azure-devops",alt:"Communication to deploy to target servers\n"})),(0,r.kt)("p",null,"Przechodzimy zatem do wdro\u017cenia w\u0142asnego serwera z agentem."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Opis z tym co jest w publicznym ADO"),(0,r.kt)("li",{parentName:"ol"},"Opis kodu"),(0,r.kt)("li",{parentName:"ol"},"Review wdro\u017cenia")),(0,r.kt)("p",null,"Koniec"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Witam na nowej stronie gdzi\u0119 b\u0119d\u0119 wrzuca\u0142 nowe posty zwi\u0105zane z Microsoft Azure oraz Cloud\u2601\ufe0f. Nowy rok 2022 mam nadziej\u0119 \u017ce przyniesie wiele pozytywnych zmian. Dlatego zapraszam do kontaktu i odwiedzin mojej strony."),(0,r.kt)("p",null,"Nowe linki i ma\u0142e zmiany:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web.justcloud.pl"},"JustCloud \u2601\ufe0f Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.justcloud.pl"},"JustCloud \u2601\ufe0f Blog"))),(0,r.kt)("p",null,"W najbli\u017cszym czasie\xa0ogarn\u0119\xa0r\xf3wnie\u017c uzupe\u0142nienie bloga o stare posty \ud83d\ude43."),(0,r.kt)("p",null,"Dzi\u0119ki i do zobaczenia!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",alt:"welcome"})))}w.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5967],{75749:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>z});var i=o(30464),s=o(74848),t=o(28453),n=o(13554),r=o.n(n);const p={slug:"how to deploy azure pipelines agent",title:"Jak wdro\u017cy\u0107 Azure Pipelines agenta? (How to deploy Azure Pipelines agent?)",description:"Szukasz sposobu na wdro\u017cenie w\u0142asnego serwera z agentem do deployment\xf3w w Azure DevOps? Dowiedz si\u0119, jak szybko i \u0142atwo zrealizowa\u0107 to zadanie dzi\u0119ki szczeg\xf3\u0142owemu procesowi i skryptom opisanym w tym artykule.",authors:["progala"],date:"2022-01-31",tags:["deploy","Azure","DevOps","agent","pipelines"],keywords:["Azure","DevOps","deployment","agent","pipelines","wdro\u017cenie"]},l=void 0,d={authorsImageUrls:[void 0]},z=[];function w(e){const a={a:"a",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:["Azure DevOps pozwala na wdra\u017canie rozwi\u0105za\u0144 za po\u015brednictwem agent\xf3w tzw. ",(0,s.jsx)(a.a,{href:"https://docs.microsoft.com/azure/devops/pipelines/agents/agents?view=azure-devops&tabs=browser&WT.mc_id=AZ-MVP-5002690#microsoft-hosted-agents",children:'"Microsoft-hosted"'})," przez 1800 minut (30 godzin) miesi\u0119cznie. Po przekroczeniu tego czasu nie mo\u017cemy wykonywa\u0107 deployment\xf3w. Mo\u017cna jednak dokupi\u0107 nielimitowany dost\u0119p do agenta za $40 miesi\u0119cznie lub korzysta\u0107 ze swojego serwera, np. laptopa, instaluj\u0105c agenta \u2014 ta opcja wdra\u017cania jest znana w dokumentacji jako ",(0,s.jsx)(a.a,{href:"https://docs.microsoft.com/azure/devops/pipelines/agents/agents?view=azure-devops&tabs=browser&WT.mc_id=AZ-MVP-5002690#install",children:'"Self-Hosted"'}),". Dodam tylko, \u017ce wykorzystywanie w\u0142asnego laptopa do wdra\u017cania nie jest rozwi\u0105zaniem produkcyjnym \ud83d\ude43."]}),"\n",(0,s.jsxs)(a.p,{children:["Strona z cenami Azure DevOps: (",(0,s.jsx)(a.a,{href:"https://azure.microsoft.com/pricing/details/devops/azure-devops-services/?WT.mc_id=AZ-MVP-5002690",children:"https://azure.microsoft.com/pricing/details/devops/azure-devops-services/?WT.mc_id=AZ-MVP-5002690"}),")"]}),"\n",(0,s.jsx)(a.p,{children:"Bardzo cz\u0119sto s\u0142ysz\u0119 pytanie: po co mi w\u0142asny serwer do wdra\u017cania?"}),"\n",(0,s.jsx)(r(),{style:{display:"block",margin:"auto",marginBottom:"20px"},controls:!0,url:"[a komu to potrzebne](https://www.youtube.com/watch?v=OO3FANjwKHY)"}),"\n",(0,s.jsxs)(a.p,{children:['Klasyczna odpowied\u017a: to zale\u017cy... Przy pracy nad prac\u0105 dyplomow\u0105 lub projektem PoC dla znajomego mo\u017cna postawi\u0107 agenta na swoim laptopie. Je\u015bli pracujecie w grupie kilku os\xf3b, najlepiej by\u0142oby skorzysta\u0107 z w\u0142asnego serwera. Je\u015bli jeste\u015bcie firm\u0105 dostarczaj\u0105c\u0105 rozwi\u0105zania, zdecydowanie warto rozwa\u017cy\u0107 w\u0142asny serwer lub zakup agent\xf3w "Microsoft-hosted" za $40, je\u015bli czas wdra\u017cania przekracza 1800 minut miesi\u0119cznie. Jest jeszcze jedna sytuacja, kiedy warto wybra\u0107 w\u0142asny serwer z agentami: wiele firm korzysta z prywatnych, kontrolowanych wewn\u0119trznych sieci z ograniczonym dost\u0119pem z zewn\u0105trz. Wdro\u017cenie w\u0142asnego serwera w takiej sieci pozwoli na \u0142atw\u0105 komunikacj\u0119 z wdro\u017conymi rozwi\u0105zaniami na platformie Microsoft Azure oraz zwi\u0119kszy bezpiecze\u0144stwo procesowanych danych. Pami\u0119tajmy, \u017ce agent ',(0,s.jsx)(a.a,{href:"https://docs.microsoft.com/azure/devops/pipelines/agents/agents?view=azure-devops&tabs=browser&WT.mc_id=AZ-MVP-5002690#microsoft-hosted-agents",children:'"Microsoft-hosted"'}),' to agent "publiczny", odizolowany od waszej sieci. ',(0,s.jsx)(a.a,{href:"https://docs.microsoft.com/azure/devops/pipelines/agents/agents?view=azure-devops&tabs=browser&WT.mc_id=AZ-MVP-5002690#install",children:'"Self-Hosted"'})," mo\u017ce zosta\u0107 wdro\u017cony jako agent odizolowany, ale mo\u017cna go r\xf3wnie\u017c zintegrowa\u0107 z w\u0142asn\u0105 sieci\u0105."]})]})}function c(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(w,{...e})}):w(e)}},30464:e=>{e.exports=JSON.parse('{"permalink":"/how to deploy azure pipelines agent","source":"@site/blog/2022-01-31-how-to-deploy-azure-devops-agent/index.md","title":"Jak wdro\u017cy\u0107 Azure Pipelines agenta? (How to deploy Azure Pipelines agent?)","description":"Szukasz sposobu na wdro\u017cenie w\u0142asnego serwera z agentem do deployment\xf3w w Azure DevOps? Dowiedz si\u0119, jak szybko i \u0142atwo zrealizowa\u0107 to zadanie dzi\u0119ki szczeg\xf3\u0142owemu procesowi i skryptom opisanym w tym artykule.","date":"2022-01-31T00:00:00.000Z","tags":[{"inline":true,"label":"deploy","permalink":"/tags/deploy"},{"inline":true,"label":"Azure","permalink":"/tags/azure"},{"inline":true,"label":"DevOps","permalink":"/tags/dev-ops"},{"inline":true,"label":"agent","permalink":"/tags/agent"},{"inline":true,"label":"pipelines","permalink":"/tags/pipelines"}],"readingTime":5.41,"hasTruncateMarker":true,"authors":[{"name":"Piotr Rogala","title":"MVP Azure & owner JustCloud.pl","url":"https://github.com/RogalaPiotr","imageURL":"https://avatars.githubusercontent.com/u/31566956?v=4","key":"progala","page":null}],"frontMatter":{"slug":"how to deploy azure pipelines agent","title":"Jak wdro\u017cy\u0107 Azure Pipelines agenta? (How to deploy Azure Pipelines agent?)","description":"Szukasz sposobu na wdro\u017cenie w\u0142asnego serwera z agentem do deployment\xf3w w Azure DevOps? Dowiedz si\u0119, jak szybko i \u0142atwo zrealizowa\u0107 to zadanie dzi\u0119ki szczeg\xf3\u0142owemu procesowi i skryptom opisanym w tym artykule.","authors":["progala"],"date":"2022-01-31","tags":["deploy","Azure","DevOps","agent","pipelines"],"keywords":["Azure","DevOps","deployment","agent","pipelines","wdro\u017cenie"]},"unlisted":false,"prevItem":{"title":"Push protection w GitHub przed opublikowaniem hase\u0142","permalink":"/github push protection leak credentials"},"nextItem":{"title":"Nowa ods\u0142ona","permalink":"/welcome"}}')}}]);
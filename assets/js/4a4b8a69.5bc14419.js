"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7514],{56074:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>l,frontMatter:()=>r,metadata:()=>n,toc:()=>d});var n=i(88252),s=i(74848),o=i(28453);const r={slug:"publikacja-zdalnych-aplikacji-remoteapp-windows-server-2012",title:"Publikacja zdalnych aplikacji - RemoteApp, Windows Server 2012",description:"Publikacja zdalnych aplikacji RemoteApp Windows Server 2012. Pe\u0142na konfiguracja krok po kroku.",authors:["progala"],date:"2012-12-05",tags:["publish-application","remoteapp","ws2012"],keywords:["publish-application","remoteapp","ws2012"],hide_table_of_contents:!0},t=void 0,c={authorsImageUrls:[void 0]},d=[];function p(e){const a={img:"img",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:'Dzisiaj przedstawi\u0119 jak nale\u017cy poprawnie udost\u0119pni\u0107 zdalne aplikacje w Windows Server 2012. Udost\u0119pnianie wirtualnych maszyn i zdalnych aplikacji zosta\u0142o rozbudowane dlatego warto zapozna\u0107 si\u0119 wst\u0119pn\u0105 konfiguracj\u0105. Na pocz\u0105tku jak zawsze rozpoczynamy w Server Manager i dodajemy now\u0105 rol\u0119, a nast\u0119pnie w tym momencie u\u017cyjemy nowych udogodnie\u0144 do tworzenia zdalnych us\u0142ug. Wybieramy opcj\u0119 "Role Desktop Services installation", a w kolejnym kroku wybieramy: "Standard deployment"'}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(83661).A+"",width:"784",height:"528"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(37730).A+"",width:"784",height:"528"})}),"\n",(0,s.jsx)(a.p,{children:'Przy tym kroku musimy si\u0119 troch\u0119 bardziej zastanowi\u0107 nad tym co b\u0119dziemy chcieli udost\u0119pnia\u0107. W moim przypadku przedstawi\u0119 scenariusz dla udost\u0119pniania samych zdalnych aplikacji(RemoteApp). Je\u015bli chcieliby\u015bmy udost\u0119pnia\u0107 wirtualne \u015brodowiska i zdalne aplikacje nale\u017ca\u0142o by wybra\u0107 opcj\u0119: "Virtual machine-based desktop deployment". W naszym przypadku wybieramy "Session-based desktop deployment" oraz klikamy dwa razy NEXT:'}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(29439).A+"",width:"784",height:"528"})}),"\n",(0,s.jsx)(a.p,{children:"W tym momencie mo\u017cemy wybra\u0107 serwer, na kt\xf3rym zainstalujemy us\u0142ug\u0119 RD Connection Broker. Je\u015bli b\u0119dziemy mieli po\u0142\u0105czenie z innymi serwerami w sieci b\u0119dziemy mogli go wybra\u0107 z listy po lewej stronie bez konieczno\u015bci logowania si\u0119 do tamtego serwera. Ze wzgl\u0119du na to, \u017ce ja konfiguruj\u0119 to na jednym serwerze w ka\u017cdym momencie wybieram ten sam serwer. Tak na marginesie, RD Connection Brokera zaleca si\u0119 mie\u0107 na osobnym serwerze ze wzgl\u0119du na roz\u0142adowanie zapyta\u0144 do serwera. W kolejnych krokach wybieramy serwery dla RD Web Access i RD Session Host:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(61652).A+"",width:"784",height:"528"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(75985).A+"",width:"784",height:"528"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(7715).A+"",width:"784",height:"528"})}),"\n",(0,s.jsx)(a.p,{children:"Potwierdzamy ca\u0142y proces konfiguracji i instalujemy nasze nowe us\u0142ugi na serwerze. Wszystko powinno si\u0119 zako\u0144czy\u0107 w taki spos\xf3b jak poni\u017cej:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(23256).A+"",width:"784",height:"528"})}),"\n",(0,s.jsx)(a.p,{children:'Po udanym restarcie naszego serwera mo\u017cemy przyst\u0105pi\u0107 do publikacji zdalnych aplikacji, przechodzimy do Server Manager-a i wybieramy pozycj\u0119 Remote Desktop Service z lewej strony. Po obejrzeniu panelu jaki zostanie nam wy\u015bwietlony mo\u017cemy wybra\u0107 pozycj\u0119 "Create session collections":'}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(31125).A+"",width:"1024",height:"612"})}),"\n",(0,s.jsx)(a.p,{children:"W nowym oknie dokonujemy konfiguracji kolekcji w jakiej zostan\u0105 utworzone zdalne aplikacje. Mo\u017cemy wybra\u0107 dowoln\u0105 nazw\u0119 kolekcji:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(55567).A+"",width:"759",height:"528"})}),"\n",(0,s.jsx)(a.p,{children:"W kolejnym kroku wybieramy serwer, kt\xf3ry b\u0119dzie \u017ar\xf3d\u0142em udost\u0119pniania zdalnych aplikacji:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(87634).A+"",width:"759",height:"528"})}),"\n",(0,s.jsx)(a.p,{children:'Wybieramy grup\u0119 u\u017cytkownik\xf3w, kt\xf3rzy otrzymaj\u0105 dost\u0119p do aplikacji, domy\u015blnie jest to "Domain Users", mo\u017cemy oczywi\u015bcie zmieni\u0107 na dowoln\u0105 inn\u0105 grup\u0119:'}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(97533).A+"",width:"759",height:"528"})}),"\n",(0,s.jsx)(a.p,{children:"Mo\u017cemy dodatkowo okre\u015bli\u0107 przestrze\u0144 na dysku dla aplikacji, aby u\u017cytkownicy mieli wsp\xf3lne miejsce do przetrzymywania plik\xf3w(tego jeszcze dok\u0142adnie nie sprawdzi\u0142em, mam nadziej\u0119, \u017ce nie podaje b\u0142\u0119dnych informacji). Po okre\u015bleniu ilo\u015bci miejsca dla tego folderu przechodzimy do podsumowania i konfigurowania kolekcji:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(41952).A+"",width:"759",height:"528"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(12883).A+"",width:"759",height:"528"})}),"\n",(0,s.jsx)(a.p,{children:'Gdy zostanie utworzona kolekcja przechodzimy do niej w panelu "Remote Desktop Session > Collections > RemoteApp", wybieramy opcj\u0119 "Publish RemoteApp Programs":'}),"\n",(0,s.jsx)(a.p,{children:"![](images/15-300x207.jpg"}),"\n",(0,s.jsx)(a.p,{children:"Kolejne kroki przypominaj\u0105 konfiguracj\u0119 z poprzedniego Windows Server 2008. Wybieramy aplikacj\u0119, kt\xf3ra ma zosta\u0107 publikowana. Nast\u0119pnie klikamy NEXT, a\u017c do podsumowania konfiguracji:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(55649).A+"",width:"759",height:"528"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(58967).A+"",width:"759",height:"528"})}),"\n",(0,s.jsx)(a.p,{children:"Aby sprawdzi\u0107 czy dzia\u0142aj\u0105 nasze udost\u0119pnione aplikacje nale\u017cy wej\u015b\u0107 na stron\u0119: https://nazwa_serwera.domena/rdweb . Ciekawostk\u0105 jak\u0105 zauwa\u017cy\u0142em jest mo\u017cliwo\u015b\u0107 uruchomienia strony Web Access z innych przegl\u0105darek ni\u017c IE. Gdy konfigurowa\u0142em zdalne aplikacje pod Windows Server 2008R2 Web Access nie dzia\u0142a\u0142o pod Chrome / FF itd., a w WS 2012 jak wida\u0107 w chrome zadzia\u0142a\u0142 bez problemu \ud83d\ude42 :"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(56874).A+"",width:"1024",height:"768"})})]})}function l(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},83661:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/01-ddfdf391dc144ed5bde6aaba05ea269c.jpg"},37730:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/02-46c4741c8397f70d4ef5c2f88d3e9145.jpg"},29439:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/03-d1b06d323d7c865ff3ad6e7757e204db.jpg"},61652:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/04-12404a880b29d988bdd6d3494c3df33f.jpg"},75985:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/05-0a7d4ceb59e0385315ecbae2931197bd.jpg"},7715:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/07-521801ad5857589c73cb87d361056d47.jpg"},23256:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/08-e33fda0d11ef5d5074f29b2aa2b57f3b.jpg"},31125:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/09-063ef97d7025b243854525700e67dae1.jpg"},55567:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/10-7f244fdf97a9dfc640595cc5ed0319e4.jpg"},87634:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/11-1b6ce8ec5e32dd5695bc7ce97f9d8fcb.jpg"},97533:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/12-cce90b62ffb6a6c3c4afe85873a50e4c.jpg"},41952:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/13-d3e57fa18a82b3b2009ecb6422fe400e.jpg"},12883:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/14-adc29a279f2b23277c62b600dff1c0ce.jpg"},55649:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/16-25570de8c461d0f3d89b02ea0c8397d8.jpg"},58967:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/18-3a3ab93fb85999cd271ff6aa1808d2fe.jpg"},56874:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/20-a4d4ab133364cf1b9839a1eda36aa480.jpg"},28453:(e,a,i)=>{i.d(a,{R:()=>r,x:()=>t});var n=i(96540);const s={},o=n.createContext(s);function r(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:a},e.children)}},88252:e=>{e.exports=JSON.parse('{"permalink":"/publikacja-zdalnych-aplikacji-remoteapp-windows-server-2012","source":"@site/blog/2012-12-05-publikacja-zdalnych-aplikacji-remoteapp-windows-server-2012/index.md","title":"Publikacja zdalnych aplikacji - RemoteApp, Windows Server 2012","description":"Publikacja zdalnych aplikacji RemoteApp Windows Server 2012. Pe\u0142na konfiguracja krok po kroku.","date":"2012-12-05T00:00:00.000Z","tags":[{"inline":true,"label":"publish-application","permalink":"/tags/publish-application"},{"inline":true,"label":"remoteapp","permalink":"/tags/remoteapp"},{"inline":true,"label":"ws2012","permalink":"/tags/ws-2012"}],"readingTime":2.33,"hasTruncateMarker":true,"authors":[{"name":"Piotr Rogala","title":"MVP Azure & owner JustCloud.pl","url":"https://github.com/RogalaPiotr","imageURL":"https://avatars.githubusercontent.com/u/31566956?v=4","key":"progala","page":null}],"frontMatter":{"slug":"publikacja-zdalnych-aplikacji-remoteapp-windows-server-2012","title":"Publikacja zdalnych aplikacji - RemoteApp, Windows Server 2012","description":"Publikacja zdalnych aplikacji RemoteApp Windows Server 2012. Pe\u0142na konfiguracja krok po kroku.","authors":["progala"],"date":"2012-12-05","tags":["publish-application","remoteapp","ws2012"],"keywords":["publish-application","remoteapp","ws2012"],"hide_table_of_contents":true},"unlisted":false,"prevItem":{"title":"Darmowy Cloud? - Xen Cloud Platform","permalink":"/darmowy-cloud-xen-cloud-platform"},"nextItem":{"title":"Instalacja i konfiguracja Active Directory Domain Services w Windows Server 2012","permalink":"/instalacja-i-konfiguracja-active-directory-domain-services-w-windows-server-2012"}}')}}]);
"use strict";(self.webpackChunkjustcloudblog=self.webpackChunkjustcloudblog||[]).push([[9224],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var i=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=i.createContext({}),l=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(a),k=o,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||n;return a?i.createElement(m,r(r({ref:t},u),{},{components:a})):i.createElement(m,r({ref:t},u))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<n;l++)r[l]=a[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6993:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return k}});var i=a(7462),o=a(3366),n=(a(7294),a(3905)),r=["components"],c={slug:"instalacja-i-konfiguracja-active-directory-domain-services-w-windows-server-2012",title:"Instalacja i konfiguracja Active Directory Domain Services w Windows Server 2012",description:"Instalacja i konfiguracja Active Directory Domain Services w Windows Server 2012. Sprawd\u017a jak to dobrze to skonfigurowa\u0107.",authors:["progala"],date:"2012-12-02",tags:["active-directory","ad-ds","instalacja","konfiguracja","windows-server-2012"],keywords:["active-directory","ad-ds","instalacja","konfiguracja","windows-server-2012"],hide_table_of_contents:!0},s=void 0,l={permalink:"/instalacja-i-konfiguracja-active-directory-domain-services-w-windows-server-2012",source:"@site/blog/2012-12-02-instalacja-i-konfiguracja-active-directory-domain-services-w-windows-server-2012/index.md",title:"Instalacja i konfiguracja Active Directory Domain Services w Windows Server 2012",description:"Instalacja i konfiguracja Active Directory Domain Services w Windows Server 2012. Sprawd\u017a jak to dobrze to skonfigurowa\u0107.",date:"2012-12-02T00:00:00.000Z",formattedDate:"December 2, 2012",tags:[{label:"active-directory",permalink:"/tags/active-directory"},{label:"ad-ds",permalink:"/tags/ad-ds"},{label:"instalacja",permalink:"/tags/instalacja"},{label:"konfiguracja",permalink:"/tags/konfiguracja"},{label:"windows-server-2012",permalink:"/tags/windows-server-2012"}],readingTime:2.51,truncated:!0,authors:[{name:"Piotr Rogala",title:"MVP Azure & owner JustCloud.pl",url:"https://github.com/RogalaPiotr",imageURL:"https://avatars.githubusercontent.com/u/31566956?v=4",key:"progala"}],frontMatter:{slug:"instalacja-i-konfiguracja-active-directory-domain-services-w-windows-server-2012",title:"Instalacja i konfiguracja Active Directory Domain Services w Windows Server 2012",description:"Instalacja i konfiguracja Active Directory Domain Services w Windows Server 2012. Sprawd\u017a jak to dobrze to skonfigurowa\u0107.",authors:["progala"],date:"2012-12-02",tags:["active-directory","ad-ds","instalacja","konfiguracja","windows-server-2012"],keywords:["active-directory","ad-ds","instalacja","konfiguracja","windows-server-2012"],hide_table_of_contents:!0},prevItem:{title:"Publikacja zdalnych aplikacji - RemoteApp, Windows Server 2012",permalink:"/publikacja-zdalnych-aplikacji-remoteapp-windows-server-2012"},nextItem:{title:"diskpart and trim",permalink:"/diskpart-and-trim"}},u={authorsImageUrls:[void 0]},p=[],d={toc:p};function k(e){var t=e.components,c=(0,o.Z)(e,r);return(0,n.kt)("wrapper",(0,i.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'W nowym Windows Server 2012 spotka\u0142a mnie ma\u0142a niespodzianka. Po wpisaniu dotychczas u\u017cywanej komendy "dcpromo" zostaje wy\u015bwietlona informacja o tym, \u017ce instalacja roli AD DS zosta\u0142a przeniesiona w inne miejsce w Server Manager-a.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(7075).Z,width:"924",height:"255"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(7767).Z,width:"816",height:"510"})),(0,n.kt)("p",null,"Instalacja"),(0,n.kt)("p",null,'Przechodzimy wi\u0119c do Server Manager-a i wybieramy opcj\u0119 "Add roles and features":'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(3777).Z,width:"987",height:"411"}),"]"),(0,n.kt)("p",null,"Kolejno przechodzimy przez dwa okienka, kt\xf3re nie maj\u0105 wi\u0119kszego znaczenia dla naszej konfiguracji:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(3897).Z,width:"782",height:"524"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(1570).Z,width:"777",height:"516"})),(0,n.kt)("p",null,"Jak widzimy w nowym Windows Server 2012 mamy opcj\u0119 wyboru serwera, na kt\xf3rym chcieliby\u015bmy zainstalowa\u0107 us\u0142ugi. Jest to bardzo interesuj\u0105ce rozwi\u0105zanie dla rozwini\u0119tej firmy, poniewa\u017c mo\u017cemy u\u017cywa\u0107 jednego g\u0142\xf3wnego serwera, z kt\xf3rego b\u0119dziemy instalowa\u0107 i konfigurowa\u0107 wszystkie us\u0142ugi. W moim przypadku jest to pierwszy serwer dlatego nie mamy zbyt du\u017cego wyboru:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(3794).Z,width:"777",height:"518"})),(0,n.kt)("p",null,'Z listy dost\u0119pnych r\xf3l wybieramy "Active Directory Domain Services":'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(7616).Z,width:"780",height:"521"})),(0,n.kt)("p",null,"Po zaznaczeni AD DS wyskoczy okienko z informacj\u0105 o doinstalowaniu dodatkowych potrzebnych r\xf3l(potwierdzamy je):"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(6769).Z,width:"773",height:"515"})),(0,n.kt)("p",null,"W kolejnych krokach klikamy NEXT, a\u017c do podsumowania konfiguracji:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(3441).Z,width:"777",height:"520"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(4101).Z,width:"773",height:"517"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(3349).Z,width:"779",height:"520"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(5819).Z,width:"781",height:"523"})),(0,n.kt)("p",null,"Po udanej instalacji nale\u017cy ponownie uruchomi\u0107 komputer."),(0,n.kt)("p",null,"Konfiguracja"),(0,n.kt)("p",null,'Po instalacji przechodzimy do Server Manager-a wybieraj\u0105c po lewej stronie AD DS. Nast\u0119pnie klikamy na link "More...", kt\xf3ry znajduje si\u0119 na \u017c\xf3\u0142tym pasku:'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(6282).Z,width:"1016",height:"386"})),(0,n.kt)("p",null,'Otworzy nam si\u0119 nowe okienko, w kt\xf3rym nale\u017cy wybra\u0107 "Promote this server to a domain...":'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(5308).Z,width:"875",height:"452"})),(0,n.kt)("p",null,"Nast\u0119pne okna dotycz\u0105 \u015bci\u015ble tworzenia domeny tak jak by\u0142o to w poprzednich systemach Windows Server. W moim przypadku jest tworzona nowa domena dlatego na pocz\u0105tek wpisujemy nazw\u0119 tworzonej domeny:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(5401).Z,width:"754",height:"518"})),(0,n.kt)("p",null,"W kolejnym etapie wybieramy w\u0142a\u015bciwo\u015bci domeny. Mo\u017ce ona wsp\xf3\u0142pracowa\u0107 ze starszymi kontrolerami domen(od AD w Windows Server 2003). Poni\u017cej wprowadzamy has\u0142o dost\u0119powe:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(4493).Z,width:"749",height:"515"})),(0,n.kt)("p",null,"Warto zauwa\u017cy\u0107, \u017ce instalacja Active Directory wykry\u0142a brak us\u0142ugi DNS na naszym serwerze dlatego zostanie automatycznie doinstalowana:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(6981).Z,width:"746",height:"517"})),(0,n.kt)("p",null,"W kolejnym kroku potwierdzamy i klikamy NEXT:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(6185).Z,width:"749",height:"515"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(8451).Z,width:"750",height:"517"})),(0,n.kt)("p",null,"Kolejne dwa kroki przedstawiaj\u0105 podsumowanie i konfigurowanie us\u0142ugi Active Directory Domain Services wraz z us\u0142ug\u0105 DNS:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(4331).Z,width:"751",height:"518"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(838).Z,width:"751",height:"518"})),(0,n.kt)("p",null,"Potwierdzamy lub czekamy na ponowne uruchomienie:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(5317).Z,width:"756",height:"509"})),(0,n.kt)("p",null,"W tym momencie zosta\u0142a poprawnie skonfigurowana nasza domena. W kolejnym kroku przedstawi\u0119 jeszcze dodawanie nowego u\u017cytkownika i grupy."),(0,n.kt)("p",null,"Dodawanie u\u017cytkownika i grupy"),(0,n.kt)("p",null,'W Windows Server 2012 wygl\u0105d AD DS zosta\u0142 nieco zmieniony ze wzgl\u0119du na integracj\u0119 panelu z PowerShell-em. My\u015bl\u0119, \u017ce to bardzo dobry krok w prz\xf3d, poniewa\u017c wszystko co robimy(klikamy) mo\u017cemy podejrze\u0107 w na dole okna klikaj\u0105c na "Windows PowerShell History". Umo\u017cliwi to nam gromadzenie w formie skryptowej naszych dzia\u0142a\u0144 i p\xf3\u017aniejsze wykonywanie pracy poprzez zwyk\u0142e wklejanie polece\u0144 w PowerShell. Na pocz\u0105tku wybierzmy "Active Directory Administrative Center" ze Startu:'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(489).Z,width:"895",height:"680"})),(0,n.kt)("p",null,'\u0141atwo zauwa\u017cy\u0107, \u017ce okno "Active Directory Administrative Center" jest przejrzyste i czytelne:'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(3873).Z,width:"1022",height:"593"})),(0,n.kt)("p",null,'Przechodzimy do naszej domeny po lewej stronie. Z listy mo\u017cemy wybra\u0107 "User" prawym klawiszem myszy i wybieraj\u0105c nowego u\u017cytkownika lub grup\u0119:'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(6967).Z,width:"1019",height:"567"})),(0,n.kt)("p",null,"Samo dodawanie u\u017cytkownika i grupy nie zmieni\u0142o si\u0119 szczeg\xf3lnie poza wygl\u0105dem okna:"),(0,n.kt)("p",null,"![Photobucket]","(images/capture_006_01122012_231318.jpg"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(2775).Z,width:"1024",height:"699"})),(0,n.kt)("p",null,"Na ko\u0144cu mo\u017cemy zobaczy\u0107 jak to wszystko wygl\u0105da od strony PowerShell-a, o kt\xf3rym wspomnia\u0142em na pocz\u0105tku. Na screen-ie przedstawione jest usuni\u0119cie i dodanie ponownie tej samej grupy dla u\u017cytkownik\xf3w:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Photobucket",src:a(5166).Z,width:"1020",height:"693"})),(0,n.kt)("p",null,"Wklejaj\u0105c te polecenia do PowerShell-a zrobimy to samo bez konieczno\u015bci wchodzenia do panelu AD. Dzi\u0119ki takiemu rozwi\u0105zaniu mo\u017cemy \u0107wiczy\u0107 pisanie polece\u0144 do PowerShell-a \ud83d\ude42."))}k.isMDXComponent=!0},489:function(e,t,a){t.Z=a.p+"assets/images/capture_001_01122012_231131-540b12785fbdccf15af544d5f25a6391.jpg"},5166:function(e,t,a){t.Z=a.p+"assets/images/capture_001_02122012_133020-fc4535801d0d8129ef32efeeee9e363e.jpg"},3873:function(e,t,a){t.Z=a.p+"assets/images/capture_002_01122012_231147-0d02e6ebbd79da6c0c24502ce9a5881c.jpg"},6967:function(e,t,a){t.Z=a.p+"assets/images/capture_007_01122012_231336-ce8ac3f0e1380805417cc9d9e61e0f48.jpg"},2775:function(e,t,a){t.Z=a.p+"assets/images/capture_008_01122012_231351-75867a69290f22d125c7b2983b0a39e3.jpg"},7075:function(e,t,a){t.Z=a.p+"assets/images/capture_025_01122012_222924-f2663395001427bde83f8631947f1e50.jpg"},7767:function(e,t,a){t.Z=a.p+"assets/images/capture_026_01122012_222929-c409814dd144a2da70260be3cc47f580.jpg"},3777:function(e,t,a){t.Z=a.p+"assets/images/capture_027_01122012_222945-c037b8d553659a8fa3fa0c8e9101d0c4.jpg"},3897:function(e,t,a){t.Z=a.p+"assets/images/capture_028_01122012_222952-89927035282056cdb8307f769e41f730.jpg"},1570:function(e,t,a){t.Z=a.p+"assets/images/capture_029_01122012_222955-b6ebd7d0c7243c88903524012b5a38c1.jpg"},3794:function(e,t,a){t.Z=a.p+"assets/images/capture_030_01122012_222958-29f5bb39c22f95302ac9fa7e2813c379.jpg"},6769:function(e,t,a){t.Z=a.p+"assets/images/capture_031_01122012_223004-523d4651bae55df96fcaa12b7cbc4160.jpg"},7616:function(e,t,a){t.Z=a.p+"assets/images/capture_032_01122012_223011-5c03c535c8b587c51b1bc6eff1c8beb6.jpg"},3441:function(e,t,a){t.Z=a.p+"assets/images/capture_033_01122012_223015-c1168bdd04b5672ccb5116b1e873e272.jpg"},4101:function(e,t,a){t.Z=a.p+"assets/images/capture_034_01122012_223020-113c68519cef970b6e438e01ff24d2f7.jpg"},3349:function(e,t,a){t.Z=a.p+"assets/images/capture_035_01122012_223022-ddc32c267ffe47e51a85446bb55b65bd.jpg"},5819:function(e,t,a){t.Z=a.p+"assets/images/capture_037_01122012_223117-c5add6fe63598d213ae64a5e52cd3fd3.jpg"},6282:function(e,t,a){t.Z=a.p+"assets/images/capture_038_01122012_223214-dbfd0c487a6677a16c2482f93f402f70.jpg"},5308:function(e,t,a){t.Z=a.p+"assets/images/capture_039_01122012_223221-03cd69793a0b7d4ce82b3485bed3e13b.jpg"},5401:function(e,t,a){t.Z=a.p+"assets/images/capture_040_01122012_223238-3f285ecbef5ee786fa4d217702814b67.jpg"},4493:function(e,t,a){t.Z=a.p+"assets/images/capture_041_01122012_223428-7e66a6df45db645bb3072d274f35a12b.jpg"},6981:function(e,t,a){t.Z=a.p+"assets/images/capture_042_01122012_223441-3295144e4f513eef45e2cf8e48a1efbd.jpg"},6185:function(e,t,a){t.Z=a.p+"assets/images/capture_043_01122012_223510-5b5212f0b022f5987624e5e4bbbaebc5.jpg"},8451:function(e,t,a){t.Z=a.p+"assets/images/capture_044_01122012_223519-113ca93067053c7bd763f145c0f87bda.jpg"},4331:function(e,t,a){t.Z=a.p+"assets/images/capture_045_01122012_223526-19bc74b94a599cac1c5ae2a74ffad881.jpg"},838:function(e,t,a){t.Z=a.p+"assets/images/capture_046_01122012_223618-1b429fab85dee2383798c2ba92ae2af2.jpg"},5317:function(e,t,a){t.Z=a.p+"assets/images/capture_049_01122012_224151-3a2773b223149a36286e19fe5c914f79.jpg"}}]);
"use strict";(self.webpackChunkjustcloudblog=self.webpackChunkjustcloudblog||[]).push([[8023],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,z=m["".concat(l,".").concat(d)]||m[d]||c[d]||r;return a?o.createElement(z,u(u({ref:t},p),{},{components:a})):o.createElement(z,u({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,u=new Array(r);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var s=2;s<r;s++)u[s]=a[s];return o.createElement.apply(null,u)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return d}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),u=["components"],i={slug:"deployment-maszyny-z-funkcja-auto-shutdown-za-pomoca-szablonu-arm",title:"Deployment maszyny z funkcj\u0105 Auto-Shutdown  za pomoc\u0105 szablonu arm",description:"Jak wy\u0142\u0105czy\u0107 maszyn\u0119 automatycznie o danej godzinie? Zapomoc\u0105 tego skryptu zrobisz to!",date:"2017-09-03",authors:["progala"],tags:["arm","auto-shutdown","azure-resource-manager","deplyment"],keywords:["arm","auto-shutdown","azure-resource-manager","deplyment"],hide_table_of_contents:!0},l=void 0,s={permalink:"/deployment-maszyny-z-funkcja-auto-shutdown-za-pomoca-szablonu-arm",source:"@site/blog/2017-09-03-deployment-maszyny-z-funkcja-auto-shutdown-za-pomoca-szablonu-arm/index.md",title:"Deployment maszyny z funkcj\u0105 Auto-Shutdown  za pomoc\u0105 szablonu arm",description:"Jak wy\u0142\u0105czy\u0107 maszyn\u0119 automatycznie o danej godzinie? Zapomoc\u0105 tego skryptu zrobisz to!",date:"2017-09-03T00:00:00.000Z",formattedDate:"September 3, 2017",tags:[{label:"arm",permalink:"/tags/arm"},{label:"auto-shutdown",permalink:"/tags/auto-shutdown"},{label:"azure-resource-manager",permalink:"/tags/azure-resource-manager"},{label:"deplyment",permalink:"/tags/deplyment"}],readingTime:2.04,truncated:!0,authors:[{name:"Piotr Rogala",title:"MVP Azure & owner JustCloud.pl",url:"https://github.com/RogalaPiotr",imageURL:"https://avatars.githubusercontent.com/u/31566956?v=4",key:"progala"}],frontMatter:{slug:"deployment-maszyny-z-funkcja-auto-shutdown-za-pomoca-szablonu-arm",title:"Deployment maszyny z funkcj\u0105 Auto-Shutdown  za pomoc\u0105 szablonu arm",description:"Jak wy\u0142\u0105czy\u0107 maszyn\u0119 automatycznie o danej godzinie? Zapomoc\u0105 tego skryptu zrobisz to!",date:"2017-09-03",authors:["progala"],tags:["arm","auto-shutdown","azure-resource-manager","deplyment"],keywords:["arm","auto-shutdown","azure-resource-manager","deplyment"],hide_table_of_contents:!0},prevItem:{title:"Delete VM and create again based on .vhd",permalink:"/delete-vm-and-create-again-based-on-vhd"},nextItem:{title:"Profil logowania do Azure",permalink:"/profil-logowania-do-azure"}},p={authorsImageUrls:[void 0]},c=[],m={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,u);return(0,r.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Szablony ARM maj\u0105 nam poma\u0107 w pracy dlatego kiedy testuj\u0119 wiele szablon\xf3w zdarza mi si\u0119, \u017ce zapominam o resource'ach, kt\xf3re utworzy\u0142em w Azure co powoduje, \u017ce marnuj\u0119 pieni\u0105dz\u0119 na subskrypcji. Powodem s\u0105 zazwyczaj p\xf3\u017ane godziny pracy i przem\u0119czenie, a p\xf3\u017aniej te z deploy'owane wirtualki dzia\u0142aj\u0105 przez par\u0119 dni nic nie robi\u0105c. Dlatego postanowi\u0142em sobie pom\xf3c i do ka\u017cego deploy'mentu dodaj\u0119 wpis kt\xf3ry wy\u0142\u0105czy wirtualk\u0119 o jakiej\u015b godzinie. Poni\u017cszy przyk\u0142ad zaprezentuje deplyment Windows'a 2016 z manage disk'iem i \"Microsoft.DevTestLab/schedules\"."),(0,r.kt)("p",null,"W poprzendich moich postach mo\u017cesz przeczyta\u0107 jak zalogowa\u0107 si\u0119 do Azure za pomoc\u0105 PowerShell i CLI oraz jak u\u017cywa\u0107 do deployment\xf3w Visual Studio Code i Visual Studio."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Przydatne linki:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wygodny profil logowania:\xa0",(0,r.kt)("a",{parentName:"li",href:"https://justcloud.azurewebsites.net/blog/profil-logowania-do-azure/"},"https://justcloud.azurewebsites.net/blog/profil-logowania-do-azure/")),(0,r.kt)("li",{parentName:"ul"},"Logowanie za pomac\u0105 CLI:\xa0",(0,r.kt)("a",{parentName:"li",href:"https://justcloud.azurewebsites.net/blog/azure-cli-logowanie/"},"https://justcloud.azurewebsites.net/blog/azure-cli-logowanie/")),(0,r.kt)("li",{parentName:"ul"},"Visual Studio Code:\xa0",(0,r.kt)("a",{parentName:"li",href:"https://justcloud.azurewebsites.net/blog/visual-studio-code-i-git-zamiast-powershell-ise/"},"https://justcloud.azurewebsites.net/blog/visual-studio-code-i-git-zamiast-powershell-ise/")),(0,r.kt)("li",{parentName:"ul"},"Visual Studio:\xa0",(0,r.kt)("a",{parentName:"li",href:"https://justcloud.azurewebsites.net/blog/tworzenie-szablonu-arm-visual-studio-2017/"},"https://justcloud.azurewebsites.net/blog/tworzenie-szablonu-arm-visual-studio-2017/"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0179r\xf3d\u0142a:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dokumentacja: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/templates/microsoft.devtestlab/schedules"},"https://docs.microsoft.com/en-us/azure/templates/microsoft.devtestlab/schedules")),(0,r.kt)("li",{parentName:"ul"},"Zones: ",(0,r.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/gg154758.aspx"},"https://msdn.microsoft.com/en-us/library/gg154758.aspx"))))}d.isMDXComponent=!0}}]);
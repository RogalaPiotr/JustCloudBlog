"use strict";(self.webpackChunkjustcloudblog=self.webpackChunkjustcloudblog||[]).push([[4203],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,y=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(y,s(s({ref:t},u),{},{components:n})):a.createElement(y,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5142:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={slug:"auto-deployment-vm-with-vsts-agent-for-pool",title:"Auto deployment VM with VSTS agent for pool",description:"Azure DevOps agent to wa\u017cny element wszystkich wdro\u017ce\u0144. Potrzebujesz stworzy\u0107 w\u0142asnego agenta ADO? Zobacz jak to zrobi\u0107 w prosty i automatyczny spos\xf3b! Wszystko znajdziesz we wpisie.",authors:["progala"],date:"2018-05-27",tags:["arm","automation","azure","deplyoment","json","microsoft","vsts","ado"],keywords:["justcloud","ado","azure","microsoft azure","devops","agent","pipelines","deployment","azure devops agents"],hide_table_of_contents:!0},l=void 0,p={permalink:"/auto-deployment-vm-with-vsts-agent-for-pool",source:"@site/blog/2018-05-27-auto-deployment-vm-with-vsts-agent-for-pool/index.md",title:"Auto deployment VM with VSTS agent for pool",description:"Azure DevOps agent to wa\u017cny element wszystkich wdro\u017ce\u0144. Potrzebujesz stworzy\u0107 w\u0142asnego agenta ADO? Zobacz jak to zrobi\u0107 w prosty i automatyczny spos\xf3b! Wszystko znajdziesz we wpisie.",date:"2018-05-27T00:00:00.000Z",formattedDate:"May 27, 2018",tags:[{label:"arm",permalink:"/tags/arm"},{label:"automation",permalink:"/tags/automation"},{label:"azure",permalink:"/tags/azure"},{label:"deplyoment",permalink:"/tags/deplyoment"},{label:"json",permalink:"/tags/json"},{label:"microsoft",permalink:"/tags/microsoft"},{label:"vsts",permalink:"/tags/vsts"},{label:"ado",permalink:"/tags/ado"}],readingTime:6.94,truncated:!0,authors:[{name:"Piotr Rogala",title:"MVP Azure & owner JustCloud.pl",url:"https://github.com/RogalaPiotr",imageURL:"https://avatars.githubusercontent.com/u/31566956?v=4",key:"progala"}],frontMatter:{slug:"auto-deployment-vm-with-vsts-agent-for-pool",title:"Auto deployment VM with VSTS agent for pool",description:"Azure DevOps agent to wa\u017cny element wszystkich wdro\u017ce\u0144. Potrzebujesz stworzy\u0107 w\u0142asnego agenta ADO? Zobacz jak to zrobi\u0107 w prosty i automatyczny spos\xf3b! Wszystko znajdziesz we wpisie.",authors:["progala"],date:"2018-05-27",tags:["arm","automation","azure","deplyoment","json","microsoft","vsts","ado"],keywords:["justcloud","ado","azure","microsoft azure","devops","agent","pipelines","deployment","azure devops agents"],hide_table_of_contents:!0},prevItem:{title:"Sk\u0105d uczy\u0107 si\u0119 o Microsoft Azure?",permalink:"/skad-uczyc-sie-o-microsoft-azure"},nextItem:{title:"Google Cloud Platform deployment VM z Ubuntu",permalink:"/google-cloud-platform-deployment-vm-z-ubuntu"}},u={authorsImageUrls:[void 0]},c=[{value:"<strong>GitHub</strong>:\xa0https://github.com/RogalaPiotr/JustCloudPublic/tree/master/simple-vm-with-installation-vsts-agent",id:"githubhttpsgithubcomrogalapiotrjustcloudpublictreemastersimple-vm-with-installation-vsts-agent",children:[],level:5},{value:"<strong>Sekcja Parameters:</strong>",id:"sekcja-parameters",children:[],level:2},{value:"<strong>Sekcja Variables:</strong>",id:"sekcja-variables",children:[],level:2},{value:"<strong>Sekcja Resources:</strong>",id:"sekcja-resources",children:[],level:2},{value:"<strong>Sekcja Outputs:</strong>",id:"sekcja-outputs",children:[{value:"<strong>Aby wykona\u0107 deployment nale\u017cy utworzy\u0107 Resource Group&#39;\u0119:</strong>",id:"aby-wykona\u0107-deployment-nale\u017cy-utworzy\u0107-resource-group\u0119",children:[],level:3},{value:"<strong>Wykonanie deployment\u2019u:</strong>",id:"wykonanie-deploymentu",children:[],level:3}],level:2}],m={toc:c};function d(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Wszyscy kt\xf3ry robi\u0105 depyolemnty z VSTS spotykaj\u0105 si\u0119 z sytuacj\u0105, kiedy standardowe 240min si\u0119 ko\u0144czy i trzeba stworzy\u0107 sobie tak\u0105 maszyn\u0119. Sam robi\u0142em tak\u0105 maszyn\u0119 par\u0119 razy i kiedy zn\xf3w pojawi\u0142a si\u0119 ta konieczno\u015b\u0107 postanowi\u0142em stworzy\u0107 automatyczny deployment kt\xf3ry nam stworzy z JSON'a ca\u0142a maszynk\u0119 i podepnie j\u0105 do Agent pool w VSTS."),(0,o.kt)("p",null,"Mia\u0142em par\u0119 pomys\u0142\xf3w, aby zrobi\u0107 bardzo uniwersalny template kt\xf3ry nie tylko przyda si\u0119 wam, ale r\xf3wnie\u017c mi w przysz\u0142o\u015bci do budowania innych szablon\xf3w. Tak\u017ce w skr\xf3cie opisz\u0119 ciekawostki kt\xf3re zastosowa\u0142em szablonie, kt\xf3ry znajdziecie na moim GitHubie."),(0,o.kt)("h5",{id:"githubhttpsgithubcomrogalapiotrjustcloudpublictreemastersimple-vm-with-installation-vsts-agent"},(0,o.kt)("strong",{parentName:"h5"},"GitHub"),":\xa0",(0,o.kt)("a",{parentName:"h5",href:"https://github.com/RogalaPiotr/JustCloudPublic/tree/master/simple-vm-with-installation-vsts-agent"},"https://github.com/RogalaPiotr/JustCloudPublic/tree/master/simple-vm-with-installation-vsts-agent")),(0,o.kt)("p",null,"Za\u0142o\u017cenie dotycz\u0105ce szablonu: chcia\u0142bym doda\u0107 informacj\u0119, gdzie wa\u017cnym jest zwr\xf3cenie uwagi, \u017ce maszyna ma by\u0107 odizolowana od naszej sieci wewn\u0119trznej, dlatego szablon jest infrastruktura stand alone, aby by\u0142o bezpiecznie i w razie czego mo\u017cna j\u0105 usun\u0105 lub powo\u0142a\u0107 wi\u0119cej agent\xf3w do deployment\u2019\xf3w."),(0,o.kt)("h1",{id:"opis-szablonu"},"Opis szablonu"),(0,o.kt)("h2",{id:"sekcja-parameters"},(0,o.kt)("strong",{parentName:"h2"},"Sekcja Parameters:")),(0,o.kt)("p",null,"w tej sekcji podajemy dane kt\xf3re przydadz\u0105 nam si\u0119 do deplyment\u2019u i automatycznego pod\u0142\u0105czenia do VSTS'a."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"adminUsername"),", ",(0,o.kt)("strong",{parentName:"li"},"adminPassword")," - lokalny u\u017cytkownik i has\u0142o,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"dnsLabelPrefix")," - zostanie automatycznie wygenerowany podczas deployment\u2019u, wi\u0119c nie ma konieczno\u015bci go zmienia\u0107,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"vmName")," - nazwa naszej maszyny oraz na podstawie tej nazwy zostan\u0105 nazwane wszystkie nasze resource jest: VNET, NSG, Storage..."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"urlvsts")," - adres do naszego projektu VSTS np.: ",(0,o.kt)("a",{parentName:"li",href:"https://project1.visualstudio.com"},"https://project1.visualstudio.com"),","),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"auth")," - rodzaj po\u015bwiadczenia - wybrany domy\u015blnie PAT,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"token")," - token security kt\xf3ry umo\u017cliwi nam pod\u0142\u0105czenie si\u0119 do projektu. Wi\u0119cej informacji jak stworzy\u0107 Security Token poni\u017cej:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/vsts/build-release/actions/agents/v2-windows?view=vsts"},(0,o.kt)("strong",{parentName:"a"},"https://docs.microsoft.com/en-us/vsts/build-release/actions/agents/v2-windows?view=vsts"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"pool")," - nazwa puli, do kt\xf3rej zostanie dodana maszyna w VSTS'ie - ustawiony jest na default"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AccessIPNSG")," - adres, kt\xf3ry tutaj podacie zostanie dodany do NSG i tylko z tego adresu dostaniecie si\u0119 po RDP do maszyny,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tag")," - tagi mog\u0105 ulec waszej modyfikacji ustawione s\u0105 na Project: VSTSAgent.")),(0,o.kt)("h2",{id:"sekcja-variables"},(0,o.kt)("strong",{parentName:"h2"},"Sekcja Variables:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"vmsize"),' - ustawiony na "Standard',"_",'B1s" - dosy\u0107 tani i wystarczaj\u0105cy na maszyn\u0119 deployment\u2019owy - pami\u0119taj, aby sprawdzi\u0107, czy masz mo\u017cliwo\u015b\u0107 deploy\u2019owania tej maszyny w swojej subskrypcji w innym przypadku zg\u0142o\u015b request do supportu Microsoft w celu uruchomienia wielko\u015bci B',"_","size."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"urldonwloadagent")," - w tym miejscu jest podany link do \u015bci\u0105gni\u0119cia aktualnego zip'a z agentem VSTS - w razie zmiany wersji nale\u017cy zaktualizowa\u0107 link na aktualny"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"filescriptURI")," - skrypt napisany przeze mnie w celu automatycznego pobrania i zainstalowania agenta na maszynie:\xa0",(0,o.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/RogalaPiotr/JustCloudPublic/master/simple-vm-with-installation-vsts-agent/vstsagent.ps1"},"https://raw.githubusercontent.com/RogalaPiotr/JustCloudPublic/master/simple-vm-with-installation-vsts-agent/vstsagent.ps1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"filescriptURISplit"),' - bardzo ciekawa funkcja, kt\xf3ra rozbija powy\u017cszy url na tekst tam, gdzie jest slah "/" co w efekcie generuje nam obiekt',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"wi\u0119cej ciekawych informacji w dokumentacji Microsoft:\xa0",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-template-functions"},"https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-template-functions"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"filescriptName")," - kolejna fajna funkcja, gdzie na podstawie powy\u017cszego splita zabieramy nazw\u0119 skryptu, kt\xf3ry pos\u0142u\u017cy nam do instalacji w CustomScriptExtension,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"agentname")," - ka\u017cdy dodany Agent do puli w VSTS b\u0119dzie nosi\u0142 nazw\u0119 NazwaMaszynyagent.")),(0,o.kt)("h2",{id:"sekcja-resources"},(0,o.kt)("strong",{parentName:"h2"},"Sekcja Resources:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type: Microsoft.Network/networkSecurityGroups")," - NSG z dost\u0119pem RDP tylko z adresu IP kt\xf3ry dodamy podczas deploy\u2019mentu parametr: AccessIPNSG"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type: Microsoft.Network/publicIPAddresses")," - Publiczny adres dla naszej VM, aby m\xf3c si\u0119 do niej pod\u0142\u0105czy\u0107 z zewn\u0105trz."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type: Microsoft.Network/virtualNetworks")," - VNet"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type: Microsoft.Compute/virtualMachines")," - tworzenie maszyny wirtualnej z Windows 2016 i Managed Disk",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type: Microsoft.Compute/virtualMachines/extensions"),' - instalacja agenta VSTS, bazuj\u0105c na napisanym skrypcie i udost\u0119pnionym na GitHubie:\xa0vstsagent.ps1 zostanie on u\u017cyty podczas deplyoment\u2019u a podczas jego wykonywaniu dodamy informacj\u0119 zwi\u0105zane z url VSTS, tokenem itp. Pe\u0142na komenda w linii 257: "commandToExecute"'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type: Microsoft.DevTestLab/schedules")," - dzi\u0119ki temu nasza maszynie b\u0119dzie wy\u0142\u0105czana codziennie o 18:00 zona: W. Europe Standard Time - ten feature dzia\u0142a tylko kiedy maszyna jest w\u0142\u0105czona pozwoli to nam zapomnie\u0107 o wy\u0142\u0105czaniu, a mimo wszystko nie b\u0119dziemy traci\u0107 pieni\u0119dzy za jej bezczynno\u015b\u0107.")),(0,o.kt)("h2",{id:"sekcja-outputs"},(0,o.kt)("strong",{parentName:"h2"},"Sekcja Outputs:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PublicDNS")," - po wykonaniu deployment\u2019u wy\u015bwietli nam publiczny adres DNS dla VM,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hostname")," - wy\u015bwietli nazw\u0119 maszyny, kt\xf3r\u0105 wprowadzili\u015bmy w parametrach,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"VSTSAgentName")," - wy\u015bwietli nazw\u0119 agenta jaka b\u0119dzie widoczna w VSTS,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"VSTSProjectName")," - wy\u015bwietli nazw\u0119 projektu VSTS jaki zosta\u0142 wprowadzony,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ScriptURI")," - wy\u015bwietli \u017ar\xf3d\u0142o z jakiego zosta\u0142 pobrany skrypt do instalacji Agenta,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AccessRDPFrom")," - wy\u015bwietli adres IP kt\xf3ry zosta\u0142 dodany do NSG, aby mia\u0142 dost\u0119p do RDP")),(0,o.kt)("h1",{id:"szablon"},"Szablon:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",\n  "contentVersion": "1.0.0.0",\n  "parameters": {\n    "adminUsername": {\n      "type": "string",\n      "metadata": {\n        "description": "Username for the Virtual Machine."\n      }\n    },\n    "adminPassword": {\n      "type": "securestring",\n      "metadata": {\n        "description": "Password for the Virtual Machine."\n      }\n    },\n    "dnsLabelPrefix": {\n      "type": "string",\n      "defaultValue": "[concat(\'x\', uniqueString(resourceGroup().id))]",\n      "metadata": {\n        "description": "Unique DNS Name for the Public IP used to access the Virtual Machine."\n      }\n    },\n    "vmName": {\n      "type": "string",\n      "metadata": {\n        "description": "Unique DNS Name for the Public IP used to access the Virtual Machine."\n      }\n    },\n    "urlvsts": {\n      "type": "string",\n      "metadata": {\n        "description": "URL for your VSTS Project ex. https://project1.visualstudio.com."\n      }\n    },\n    "auth": {\n      "type": "string",\n      "defaultValue": "pat",\n      "metadata": {\n        "description": "Unique DNS Name for the Public IP used to access the Virtual Machine."\n      }\n    },\n    "token": {\n      "type": "securestring",\n      "metadata": {\n        "description": "Security token for VSTS project."\n      }\n    },\n    "pool": {\n      "type": "string",\n      "metadata": {\n        "description": "Pool name in VSTS - Default is a main."\n      }\n    },\n    "AccessIPNSG": {\n      "type": "string",\n      "metadata": {\n        "description": "Your publif IP it will added for NSG for connection via RDP."\n      }\n    },\n    "numberagents": {\n      "type": "int",\n      "metadata": {\n        "description": "Numbers of agents for installation"\n      }\n    },\n    "tag": {\n      "type": "string",\n      "metadata": {\n          "description": "Tag Values"\n      }\n  }\n},\n  "variables": {\n    "storageAccountName": "[concat(\'stor\', uniquestring(resourceGroup().id))]",\n    "windowsOSVersion": "2019-Datacenter",\n    "vmsize": "Standard_B2ms",\n    "publicIPAddressName": "[concat(parameters(\'vmName\'), \'-pip\')]",\n    "virtualNetworkName": "[concat(parameters(\'vmName\'), \'-vnet\')]",\n    "NSGname": "[concat(parameters(\'vmName\'), \'-nsg\')]",\n    "nicName": "[concat(parameters(\'vmName\'), \'-nic\')]",\n    "subnetName": "[concat(parameters(\'vmName\'), \'-subnet\')]",\n    "addressPrefix": "10.0.0.0/16",\n    "subnetPrefix": "10.0.0.0/24",\n    "subnetRef": "[resourceId(\'Microsoft.Network/virtualNetworks/subnets\', variables(\'virtualNetworkName\'), variables(\'subnetName\'))]",\n    "urldonwloadagent": "https://vstsagentpackage.azureedge.net/agent/2.155.1/vsts-agent-win-x64-2.155.1.zip",\n    "filescriptURI": "https://raw.githubusercontent.com/RogalaPiotr/JustCloudPublic/master/simple-vm-with-installation-vsts-agent/vstsagent.ps1",\n    "filescriptURISplit": "[split(variables(\'filescriptURI\'), \'/\')]",\n    "filescriptName": "[last(variables(\'filescriptURISplit\'))]",\n    "agentname": "[parameters(\'vmName\')]"\n  },\n  "resources": [\n    {\n      "type": "Microsoft.Storage/storageAccounts",\n      "name": "[variables(\'storageAccountName\')]",\n      "apiVersion": "2015-06-15",\n      "location": "[resourceGroup().location]",\n      "tags": {\n        "Project": "[parameters(\'tag\')]"\n      },\n      "properties": {\n        "accountType": "Standard_LRS"\n      }\n    },\n    {\n      "type": "Microsoft.Network/networkSecurityGroups",\n      "name": "[variables(\'NSGName\')]",\n      "location": "[resourceGroup().location]",\n      "tags": {\n        "Project": "[parameters(\'tag\')]"\n      },\n      "apiVersion": "2018-03-01",\n      "properties": {\n        "securityRules": [\n          {\n            "name": "RDP",\n            "properties": {\n              "description": "Allow IP for RDP",\n              "protocol": "TCP",\n              "sourcePortRange": "*",\n              "destinationPortRange": "3389",\n              "sourceAddressPrefix": "[parameters(\'AccessIPNSG\')]",\n              "destinationAddressPrefix": "*",\n              "access": "Allow",\n              "priority": 100,\n              "direction": "Inbound"\n            }\n          }\n        ]\n      }\n    },\n    {\n      "apiVersion": "2016-03-30",\n      "type": "Microsoft.Network/publicIPAddresses",\n      "name": "[variables(\'publicIPAddressName\')]",\n      "location": "[resourceGroup().location]",\n      "tags": {\n        "Project": "[parameters(\'tag\')]"\n      },\n      "properties": {\n        "publicIPAllocationMethod": "Dynamic",\n        "dnsSettings": {\n          "domainNameLabel": "[parameters(\'dnsLabelPrefix\')]"\n        }\n      }\n    },\n    {\n      "apiVersion": "2016-03-30",\n      "type": "Microsoft.Network/virtualNetworks",\n      "name": "[variables(\'virtualNetworkName\')]",\n      "dependsOn": [\n        "[resourceId(\'Microsoft.Network/networkSecurityGroups/\', variables(\'NSGName\'))]"\n      ],\n      "location": "[resourceGroup().location]",\n      "tags": {\n        "Project": "[parameters(\'tag\')]"\n      },\n      "properties": {\n        "addressSpace": {\n          "addressPrefixes": [\n            "[variables(\'addressPrefix\')]"\n          ]\n        },\n        "subnets": [\n          {\n            "name": "[variables(\'subnetName\')]",\n            "properties": {\n              "addressPrefix": "[variables(\'subnetPrefix\')]",\n              "networkSecurityGroup": {\n                "id": "[resourceId(\'Microsoft.Network/networkSecurityGroups\',variables(\'NSGName\'))]"\n            }\n            }\n          }\n        ]\n      }\n    },\n    {\n      "apiVersion": "2016-03-30",\n      "type": "Microsoft.Network/networkInterfaces",\n      "name": "[variables(\'nicName\')]",\n      "location": "[resourceGroup().location]",\n      "tags": {\n        "Project": "[parameters(\'tag\')]"\n      },\n      "dependsOn": [\n        "[resourceId(\'Microsoft.Network/publicIPAddresses/\', variables(\'publicIPAddressName\'))]",\n        "[resourceId(\'Microsoft.Network/virtualNetworks/\', variables(\'virtualNetworkName\'))]"\n      ],\n      "properties": {\n        "ipConfigurations": [\n          {\n            "name": "ipconfig1",\n            "properties": {\n              "privateIPAllocationMethod": "Dynamic",\n              "publicIPAddress": {\n                "id": "[resourceId(\'Microsoft.Network/publicIPAddresses\',variables(\'publicIPAddressName\'))]"\n              },\n              "subnet": {\n                "id": "[variables(\'subnetRef\')]"\n              }\n            }\n          }\n        ]\n      }\n    },\n    {\n      "apiVersion": "2016-04-30-preview",\n      "type": "Microsoft.Compute/virtualMachines",\n      "name": "[parameters(\'vmName\')]",\n      "location": "[resourceGroup().location]",\n      "tags": {\n        "Project": "[parameters(\'tag\')]"\n      },\n      "dependsOn": [\n        "[resourceId(\'Microsoft.Network/networkInterfaces/\', variables(\'nicName\'))]",\n        "[concat(\'Microsoft.Storage/storageAccounts/\', variables(\'storageAccountName\'))]"\n      ],\n      "properties": {\n        "licenseType": "Windows_Server",\n        "hardwareProfile": {\n          "vmSize": "[variables(\'vmsize\')]"\n        },\n        "osProfile": {\n          "computerName": "[parameters(\'vmName\')]",\n          "adminUsername": "[parameters(\'adminUsername\')]",\n          "adminPassword": "[parameters(\'adminPassword\')]"\n        },\n        "storageProfile": {\n          "imageReference": {\n            "publisher": "MicrosoftWindowsServer",\n            "offer": "WindowsServer",\n            "sku": "[variables(\'windowsOSVersion\')]",\n            "version": "latest"\n          },\n          "osDisk": {\n            "name": "[concat(parameters(\'vmName\'),\'-os\')]",\n            "vhd": {\n              "uri": "[concat(\'http://\',variables(\'storageAccountName\'),\'.blob.core.windows.net/vhds/\',parameters(\'vmName\'),\'-vm-os.vhd\')]"\n            },\n            "caching": "ReadWrite",\n            "createOption": "FromImage"\n          }\n        },\n        "networkProfile": {\n          "networkInterfaces": [\n            {\n              "id": "[resourceId(\'Microsoft.Network/networkInterfaces\',variables(\'nicName\'))]"\n            }\n          ]\n        }\n      },\n      "resources": [\n        {\n          "name": "[concat(parameters(\'vmName\'),\'/AzureDevOpsAgentInstall\')]",\n          "type": "Microsoft.Compute/virtualMachines/extensions",\n          "location": "[resourceGroup().location]",\n          "tags": {\n            "Project": "[parameters(\'tag\')]"\n          },\n          "dependsOn": [\n            "[concat(\'Microsoft.Compute/virtualMachines/\', parameters(\'vmName\'))]"\n          ],\n          "apiVersion": "2015-06-15",\n          "properties": {\n            "publisher": "Microsoft.Compute",\n            "type": "CustomScriptExtension",\n            "typeHandlerVersion": "1.9",\n            "autoUpgradeMinorVersion": true,\n            "settings": {\n              "fileUris": [\n                "[variables(\'filescriptURI\')]"\n                ]\n            },\n            "protectedSettings": {\n              "commandToExecute": "[concat(\'powershell -ExecutionPolicy Unrestricted -File \',variables(\'filescriptName\'),\' -url \',variables(\'urldonwloadagent\'),\' -urlvsts \',parameters(\'urlvsts\'),\' -auth \',parameters(\'auth\'),\' -token \',parameters(\'token\'),\' -pool \',parameters(\'pool\'),\' -agentname \',variables(\'agentname\'), \' -numberagents \',parameters(\'numberagents\'))]"\n            }\n          }\n        }\n      ]\n    },\n    {\n      "apiVersion": "2016-05-15",\n      "type": "Microsoft.DevTestLab/schedules",\n      "name": "[concat(\'shutdown-computevm-\', parameters(\'vmName\'))]",\n      "location": "[resourceGroup().location]",\n      "tags": {\n        "Project": "[parameters(\'tag\')]"\n      },\n      "dependsOn": [\n        "[resourceId(\'Microsoft.Compute/virtualMachines/\', parameters(\'vmName\'))]"\n      ],\n      "properties": {\n        "status":"Enabled",\n        "timeZoneId":"W. Europe Standard Time",\n        "taskType":"ComputeVmShutdownTask",\n        "notificationSettings":{\n          "status":"Disabled",\n          "timeInMinutes":15,\n          "webhookUrl":null\n        },\n        "targetResourceId":"[resourceId(\'Microsoft.Compute/virtualMachines\', parameters(\'vmName\'))]",\n        "dailyRecurrence":{\n          "time":"1800"\n        }\n      }\n    }\n  ],\n  "outputs": {\n    "PublicDNS": {\n      "type" : "string",\n      "value": "[reference(variables(\'publicIPAddressName\')).dnsSettings.fqdn]"\n    },\n    "HostName": {\n      "type" : "string",\n      "value": "[parameters(\'vmName\')]"\n    },\n    "VSTSAgentName": {\n      "type" : "string",\n      "value": "[variables(\'agentname\')]"\n    },  \n    "VSTSProjectName": {\n      "type" : "string",\n      "value": "[parameters(\'urlvsts\')]"\n    },  \n    "ScritpURI": {\n      "type" : "string",\n      "value": "[variables(\'filescriptURI\')]"\n    },\n    "AccessRDPFrom": {\n      "type" : "string",\n      "value": "[parameters(\'accessIPNSG\')]"\n    }\n  }\n}\n')),(0,o.kt)("h1",{id:"przyk\u0142ad"},(0,o.kt)("strong",{parentName:"h1"},"Przyk\u0142ad:")),(0,o.kt)("h3",{id:"aby-wykona\u0107-deployment-nale\u017cy-utworzy\u0107-resource-group\u0119"},(0,o.kt)("strong",{parentName:"h3"},"Aby wykona\u0107 deployment nale\u017cy utworzy\u0107 Resource Group'\u0119:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"New-AzureRMResourceGroup -Name VSTS -Location westeurope")),(0,o.kt)("h3",{id:"wykonanie-deploymentu"},(0,o.kt)("strong",{parentName:"h3"},"Wykonanie deployment\u2019u:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'New-AzureRMResourceGroupDeployment -ResourceGroupName VSTS -TemplateURI "https://raw.githubusercontent.com/RogalaPiotr/JustCloudPublic/master/simple-vm-with-installation-vsts-agent/azuredeploy.json" -Verbose')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Efekt w portalu po deploy\u2019mencie:")),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(3264).Z},(0,o.kt)("img",{src:n(8837).Z,width:"1360",height:"637"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Widok puli agent\xf3w w VSTS:")),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(5594).Z},(0,o.kt)("img",{src:n(169).Z,width:"925",height:"335"}))),(0,o.kt)("p",null,"Maszyna jest gotowa do deploy\u2019ment\xf3w, je\u015bli potrzebujesz wi\u0119cej maszyn mo\u017cesz bez oporu deploy\u2019owa\u0107 wi\u0119ksz\u0105 ilo\u015b\u0107 :)"),(0,o.kt)("p",null,"Czas deplymentu to: 15 minutes 46 seconds."))}d.isMDXComponent=!0},3264:function(e,t,n){t.Z=n.p+"assets/files/Clipboard21-8d851887072ff59a7d848fb97d94ba0e.jpg"},5594:function(e,t,n){t.Z=n.p+"assets/files/Clipboard22-1b82d9e149275cd7f3aa92dc67e94dc2.jpg"},8837:function(e,t,n){t.Z=n.p+"assets/images/Clipboard21-8d851887072ff59a7d848fb97d94ba0e.jpg"},169:function(e,t,n){t.Z=n.p+"assets/images/Clipboard22-1b82d9e149275cd7f3aa92dc67e94dc2.jpg"}}]);
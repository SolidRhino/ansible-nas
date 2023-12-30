"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[9073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(y,i(i({ref:t},p),{},{components:n})):o.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={title:"Cloud Commander"},i=void 0,l={unversionedId:"applications/system-tools/cloudcmd",id:"applications/system-tools/cloudcmd",title:"Cloud Commander",description:"Homepage:",source:"@site/docs/applications/system-tools/cloudcmd.md",sourceDirName:"applications/system-tools",slug:"/applications/system-tools/cloudcmd",permalink:"/docs/applications/system-tools/cloudcmd",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/applications/system-tools/cloudcmd.md",tags:[],version:"current",frontMatter:{title:"Cloud Commander"},sidebar:"tutorialSidebar",previous:{title:"System Tools",permalink:"/docs/category/system-tools"},next:{title:"Cloudflare DDNS",permalink:"/docs/applications/system-tools/cloudflare_ddns"}},s={},c=[{value:"Usage",id:"usage",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Homepage: ",(0,r.kt)("a",{parentName:"p",href:"https://cloudcmd.io/"},"https://cloudcmd.io/")),(0,r.kt)("p",null,"Cloud Commander is a file manager for the web. It includes a command-line console and a text editor. Cloud Commander helps you manage your server and work with files, directories and programs in a web browser from any computer, mobile or tablet."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"cloudcmd_enabled: true")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,r.kt)("p",null,"By default your the root of your Ansible-NAS box (",(0,r.kt)("inlineCode",{parentName:"p"},"/"),") is mounted into ",(0,r.kt)("inlineCode",{parentName:"p"},"/mnt/fs")," within the container. If you'd like to change this update ",(0,r.kt)("inlineCode",{parentName:"p"},"cloudcmd_browse_directory")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,r.kt)("p",null,"If you enable external access to Cloud Commander (note that this is not recommended) then ensure you configure authorisation\nwithin the application (F10 from the main menu)."))}d.isMDXComponent=!0}}]);
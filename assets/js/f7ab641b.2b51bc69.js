"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[3178],{3439:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=n(5893),o=n(1151);const t={title:"Piwigo"},r=void 0,l={id:"applications/other/piwigo",title:"Piwigo",description:"Homepage: Piwigo.org",source:"@site/docs/applications/other/piwigo.md",sourceDirName:"applications/other",slug:"/applications/other/piwigo",permalink:"/docs/applications/other/piwigo",draft:!1,unlisted:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/applications/other/piwigo.md",tags:[],version:"current",frontMatter:{title:"Piwigo"},sidebar:"tutorialSidebar",previous:{title:"Paperless-ng",permalink:"/docs/applications/other/paperless_ng"},next:{title:"The Lounge",permalink:"/docs/applications/other/thelounge"}},a={},c=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["Homepage: ",(0,s.jsx)(i.a,{href:"https://piwigo.org",children:"Piwigo.org"})]}),"\n",(0,s.jsx)(i.p,{children:"Piwigo is open source photo gallery software for the web. Designed for organisations, teams and individuals."}),"\n",(0,s.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(i.p,{children:["Set ",(0,s.jsx)(i.code,{children:"piwigo_enabled: true"})," in your ",(0,s.jsx)(i.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file."]}),"\n",(0,s.jsxs)(i.p,{children:["If you want to access Piwigo externally, set ",(0,s.jsx)(i.code,{children:"piwigo_available_externally: true"})," in your ",(0,s.jsx)(i.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file."]}),"\n",(0,s.jsxs)(i.p,{children:["The Piwigo web interface can be found at ",(0,s.jsx)(i.a,{href:"http://ansible_nas_host_or_ip:16923",children:"http://ansible_nas_host_or_ip:16923"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"specific-configuration",children:"Specific Configuration"}),"\n",(0,s.jsx)(i.p,{children:"Optional configurations:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Set ",(0,s.jsx)(i.code,{children:"piwigo_mysql_user"})," in ",(0,s.jsx)(i.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"}),' before installing Piwigo, this defaults to "piwigo".']}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Set ",(0,s.jsx)(i.code,{children:"piwigo_mysql_password"})," in ",(0,s.jsx)(i.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"}),' before installing Piwigo, this defaults to "piwigo".']}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Set ",(0,s.jsx)(i.code,{children:"piwigo_mysql_root_password"})," in ",(0,s.jsx)(i.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"}),' before installing Piwigo, this defaults to "piwigo".']}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"On first run you'll need to enter database details:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Host: ",(0,s.jsx)(i.code,{children:"db:3306"})]}),"\n",(0,s.jsx)(i.li,{children:'Username: the value of piwigo_mysql_user, defaults to "piwigo"'}),"\n",(0,s.jsx)(i.li,{children:'Password: the value of piwigo_password, defaults to "piwigo"'}),"\n",(0,s.jsxs)(i.li,{children:["Database Name: ",(0,s.jsx)(i.code,{children:"piwigo"})]}),"\n",(0,s.jsxs)(i.li,{children:["Database tables prefix: should be prefilled with ",(0,s.jsx)(i.code,{children:"piwigo_"})]}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>r});var s=n(7294);const o={},t=s.createContext(o);function r(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);
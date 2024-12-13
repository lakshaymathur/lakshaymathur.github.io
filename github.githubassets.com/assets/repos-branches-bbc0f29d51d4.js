"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["repos-branches"],{60188:(e,t,a)=>{a.d(t,{D:()=>n});var r=a(7572),s=a(97156);function n(e){if(!s.XC)return;let t=s.XC.querySelector("title"),a=s.XC.createElement("title");a.textContent=e,t?t.textContent!==e&&(t.replaceWith(a),(0,r.i)(e)):(s.XC.head.appendChild(a),(0,r.i)(e))}},51848:(e,t,a)=>{let r;a.d(t,{BI:()=>p,Ti:()=>m,lA:()=>h});var s=a(70837),n=a(18679),i=a(74572),l=a(51528);let{getItem:o}=(0,i.A)("localStorage"),c="dimension_",d=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,s.O)("octolytics");delete e.baseContext,r=new n.s(e)}catch{}function u(e){let t=(0,s.O)("octolytics").baseContext||{};if(t)for(let[e,a]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=a,delete t[e]);let a=document.querySelector("meta[name=visitor-payload]");for(let[e,r]of(a&&Object.assign(t,JSON.parse(atob(a.content))),new URLSearchParams(window.location.search)))d.includes(e.toLowerCase())&&(t[e]=r);return t.staff=(0,l.X)().toString(),Object.assign(t,e)}function h(e){r?.sendPageView(u(e))}function p(e,t={}){let a=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,s=a?{service:a}:{};for(let[e,a]of Object.entries(t))null!=a&&(s[e]=`${a}`);r&&(u(s),r.sendEvent(e||"unknown",u(s)))}function m(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},51550:(e,t,a)=>{a.d(t,{A:()=>r});let r=(e,t)=>{let a=new URL(e,window.location.origin),r=new URL(t,window.location.origin);return r.href.includes("#")&&a.host===r.host&&a.pathname===r.pathname&&a.search===r.search}},231:(e,t,a)=>{var r=a(74848),s=a(73627),n=a(89504),i=a(42024),l=a(96540);let o=(0,l.createContext)(null);function c({options:e,children:t}){return(0,r.jsx)(o.Provider,{value:e,children:t})}function d(){let e=(0,l.useContext)(o);if(!e)throw Error("useCreateBranchButtonOptions must be used within CreateBranchButtonOptionProvider");return e}try{o.displayName||(o.displayName="CreateBranchButtonOptionContext")}catch{}try{c.displayName||(c.displayName="CreateBranchButtonOptionProvider")}catch{}let u=(0,l.createContext)(void 0);function h({user:e,children:t}){return(0,r.jsxs)(u.Provider,{value:e,children:[" ",t," "]})}function p(){return(0,l.useContext)(u)}try{u.displayName||(u.displayName="CurrentUserContext")}catch{}try{h.displayName||(h.displayName="CurrentUserProvider")}catch{}function m({children:e}){let{repo:t,createBranchButtonOptions:a,currentUser:l}=(0,s.X)();return(0,r.jsx)(h,{user:l,children:(0,r.jsx)(n.d,{repository:t,children:(0,r.jsx)(c,{options:a,children:(0,r.jsx)(i.LB,{children:e})})})})}try{m.displayName||(m.displayName="App")}catch{}var x=a(75177),y=a(30729),b=a(38621),f=a(56226),g=a(95677),_=a(82897),j=a(6968),v=a(84217),C=a(60499),w=a(58946);let N=[{type:"overview",title:"Overview",href:"branches"},{type:"yours",title:"Yours",href:"branches/yours",onlyShowForPushUsers:!0},{type:"active",title:"Active",href:"branches/active"},{type:"stale",title:"Stale",href:"branches/stale"},{type:"all",title:"All",href:"branches/all"}];var A=a(27788),k=a(2391),B=a(67138),S=a(70170);function P(){let e=(0,n.t)();return(0,l.useCallback)(t=>{let{href:a}=N.find(e=>e.type===t)||{};if(a)return`/${e.ownerLogin}/${e.name}/${a}`},[e.name,e.ownerLogin])}function R({onChange:e,selectedPage:t,sx:a}){let[s,n]=(0,A.o)(),i=(0,l.useRef)(!1),[o,c]=(0,l.useState)(s.get("query")??""),d=(0,l.useRef)(null),u=(0,A.Z)(),h=P(),p=(0,l.useRef)((0,S.s)(a=>{e?.(a),"all"!==t?u(`${h("all")}?query=${encodeURIComponent(a)}&lastTab=${encodeURIComponent(t)}`,{replace:!0}):s.get("lastTab")&&!a?u(`${h(s.get("lastTab"))}?query=`,{replace:!0}):n({query:a},{replace:!0})},250));return(0,r.jsxs)(k.A,{sx:a,children:[(0,r.jsx)(k.A.Label,{visuallyHidden:!0,children:"Search"}),(0,r.jsx)(B.A,{value:o,ref:d,placeholder:"Search branches...",leadingVisual:b.SearchIcon,onChange:e=>{c(e.target.value),p.current(e.target.value)},block:!0,onFocus:()=>i.current=!0,onBlur:()=>i.current=!1,"data-react-autofocus":i.current})]})}try{R.displayName||(R.displayName="SearchInput")}catch{}var I=a(22205);function L({sx:e}){let{current_page:t,has_more:a}=(0,_.B)(),[s,n]=(0,A.o)(),i=a?t+1:t;return 1===t&&1===i?null:(0,r.jsx)(x.A,{sx:e,children:(0,r.jsx)(I.A,{pageCount:i,currentPage:t,onPageChange:(e,a)=>{e.preventDefault(),t!==a&&(s.set("page",`${a}`),n(s))},showPages:!1})})}try{L.displayName||(L.displayName="BranchPagination")}catch{}function D({selectedPage:e,children:t}){let{currentUserCanPush:a}=(0,n.t)(),s=P(),i=d();return(0,r.jsxs)(j.M,{children:[(0,r.jsx)(j.M.Header,{children:(0,r.jsxs)(x.A,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsx)(v.A,{as:"h1",sx:{fontSize:4,fontWeight:"normal"},children:"Branches"}),(0,r.jsx)(x.A,{sx:{display:"flex",alignItems:"center"},children:a&&(0,r.jsx)(w.F,{...i,liveReload:!0})})]})}),(0,r.jsx)(j.M.Content,{as:"div",children:(0,r.jsxs)(x.A,{sx:{display:"flex",flexDirection:"column",gap:3},children:[(0,r.jsx)(C.A,{children:N.filter(({onlyShowForPushUsers:e})=>a||!e).map(t=>(0,r.jsx)(C.A.Link,{as:f.N,to:s(t.type),selected:t.type===e,children:t.title},t.type))}),(0,r.jsx)(R,{selectedPage:e}),(0,r.jsx)("div",{"data-hpc":!0,children:t}),"overview"!==e?(0,r.jsx)(L,{}):null]})})]})}try{D.displayName||(D.displayName="Layout")}catch{}var T=a(52464),M=a(47139),z=a(24664),O=a(56221),q=a(92979),$=a(30569),U=a(87330),G=a(94977),W=a(54008);function V({rulesetsPath:e,protectedByBranchProtections:t}){return(0,l.useMemo)(()=>{let a=2;return e?a=1:t&&(a=0),{isProtectedBy:{branchProtections:0===a,rulesets:1===a},isProtected:2!==a}},[t,e])}function E({isLarge:e,...t}){let{isProtectedBy:a}=V(t),s=(0,l.useRef)(null),n=!e&&t.name.length<5?"ne":void 0,[i,o]=(0,W.B)({contentRef:s,"aria-label":"This branch is protected by branch protections",direction:n});return a.branchProtections?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{"data-testid":"branch-protection-shield",ref:s,...i,children:(0,r.jsx)(y.A,{size:16,icon:b.ShieldIcon,"aria-label":"This branch is protected by branch protections",sx:{width:32,color:"fg.muted"}})}),o]}):a.rulesets?(0,r.jsx)(G.A,{"aria-label":"View rules",children:(0,r.jsx)(f.N,{to:t.rulesetsPath,"aria-label":"This branch is protected",children:(0,r.jsx)(U.K,{unsafeDisableTooltip:!0,variant:"invisible",icon:b.ShieldIcon,"aria-label":"This branch is protected"})})}):null}try{E.displayName||(E.displayName="BranchProtectionShield")}catch{}var X=a(2676),F=a(30631);let Y={[i.Gy.small]:200,[i.Gy.medium]:200,[i.Gy.large]:225,[i.Gy.xlarge]:250,[i.Gy.xxlarge]:460,[i.Gy.xxxlarge]:530,[i.Gy.xxxxlarge]:540},H=e=>Y[e]??Y[i.Gy.small];function Q({sx:e,...t}){let{screenSize:a}=(0,i.lm)(),{isProtected:s}=V(t);return(0,r.jsx)(X.A,{href:t.path,sx:e,children:(0,r.jsx)(F.A,{title:t.name,maxWidth:H(a)+(s?-32:0),children:t.name})})}try{Q.displayName||(Q.displayName="TruncatedBranchName")}catch{}function J({isLarge:e=!1,sx:t,...a}){let s=!e&&a.name.length<3?"ne":void 0;return(0,r.jsxs)(x.A,{sx:{...t,display:"flex",alignItems:"center",gap:2,height:K},children:[(0,r.jsx)(Q,{...a}),(0,r.jsxs)(x.A,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)($.T,{className:"d-flex flex-justify-center",sx:{width:K},textToCopy:a.name,ariaLabel:"Copy branch name to clipboard",tooltipProps:{direction:s},hasPortalTooltip:!0}),(0,r.jsx)(E,{...a,isLarge:e})]})]})}let K=32;try{J.displayName||(J.displayName="BranchDescription")}catch{}var Z=a(93440),ee=a(34614),et=a(89169),ea=a(14616),er=a(83056),es=a(22868);function en({user:e,updatedAt:t,deletedAt:a,sx:s}){return(0,r.jsxs)(x.A,{sx:{...s,display:"flex",flexDirection:"row",alignItems:"center"},children:[e&&(e.path.startsWith("/apps/")?(0,r.jsx)(ea.m,{text:e.name,children:(0,r.jsx)(ee.A,{href:e.path,sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(es.r,{"aria-label":e.login,src:e.avatarUrl,alt:e.login,sx:{mr:2},size:16,square:!0})})}):(0,r.jsx)(ee.A,{href:e.path,"data-hovercard-url":(0,er.dCN)({owner:e.login}),sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(es.r,{"aria-label":e.login,src:e.avatarUrl,alt:e.login,sx:{mr:2},size:16,square:!1})})),a&&(0,r.jsx)("span",{children:"Deleted"}),"\xa0",(0,r.jsx)(et.A,{datetime:a||t,tense:"past"})]})}try{en.displayName||(en.displayName="UpdatedBy")}catch{}var ei=a(3411);let el=(0,l.lazy)(()=>a.e("ui_packages_repos-branches_components_StatusCheckRollup_tsx").then(a.bind(a,63586))),eo=(0,l.lazy)(()=>a.e("ui_packages_repos-branches_components_PullRequestLabel_tsx").then(a.bind(a,30118))),ec=(0,l.lazy)(()=>a.e("ui_packages_repos-branches_components_MergeQueueLabel_tsx").then(a.bind(a,74863))),ed=(0,l.lazy)(()=>Promise.resolve().then(a.bind(a,93440)));function eu({labelId:e,branches:t,deferredMetadata:a,showMergeQueueHeader:s,isLarge:i=!1}){let o=(0,n.t)(),c=p(),[d,u]=(0,l.useState)([]);return 0===t.length?(0,r.jsxs)(z.A,{border:!0,children:[(0,r.jsx)(z.A.Visual,{children:(0,r.jsx)(b.GitBranchIcon,{size:"medium"})}),(0,r.jsx)(z.A.Heading,{children:"No branches"}),(0,r.jsx)(z.A.Description,{children:"No branches match the search"})]}):(0,r.jsx)(O.b,{"aria-labelledby":e,data:t.map(e=>{let t=a?.get(e.name);return{id:e.name,...e,author:e.author??t?.author,oid:t?.oid,deletedAt:a&&a.size>0&&void 0===t&&!e.isBeingRenamed?e.authoredDate:void 0,aheadBehind:t?.aheadBehind,statusCheckRollup:t?.statusCheckRollup,pullRequest:t?.pullRequest,mergeQueue:t?.mergeQueue,maxDiverged:t?.maxDiverged,isLarge:i}}),columns:[{header:"Branch",field:"name",width:"grow",renderCell:e=>(0,r.jsx)(J,{...e})},{header:"Updated",field:"author",width:180,renderCell:({author:e,authoredDate:t,name:s,deletedAt:n})=>{let i=d.includes(s);return(0,r.jsx)(eh,{children:(0,r.jsxs)(r.Fragment,{children:[a||i||e?null:(0,r.jsx)(q.O,{variant:"rounded",sx:{width:16,height:16,mr:2}}),(0,r.jsx)(en,{user:i?c:e,updatedAt:t,deletedAt:i?new Date().toISOString():n})]})})}},{header:"Check status",id:"statusCheckRollup",width:125,renderCell:({oid:e,statusCheckRollup:t})=>{let s=(0,r.jsx)(q.O,{variant:"rounded",sx:{width:"33%",maxWidth:"42px",height:"20px"}});return a?e&&t?(0,r.jsx)(eh,{children:(0,r.jsx)(l.Suspense,{fallback:s,children:(0,r.jsx)(el,{oid:e,statusCheckRollup:t})})}):null:(0,r.jsx)(eh,{children:s})}},{header:()=>(0,r.jsxs)(x.A,{sx:{display:"flex",justifyContent:"center",mr:"3px",flexGrow:1},children:[(0,r.jsx)(T.A,{sx:{borderRight:"1px solid",borderColor:"border.default",pr:1},children:"Behind"}),(0,r.jsx)(T.A,{sx:{pl:1},children:"Ahead"})]}),field:"aheadBehind",width:Z.AheadBehindCountWidth,renderCell:({isDefault:e,aheadBehind:t,maxDiverged:s})=>{let n=(0,r.jsx)(q.O,{variant:"rounded",sx:{width:Z.AheadBehindCountWidth-24,height:"20px"}});return a?e?(0,r.jsx)(eh,{sx:{justifyContent:"center",flexGrow:1},children:(0,r.jsx)(M.A,{children:"Default"})}):t?(0,r.jsx)(l.Suspense,{fallback:n,children:(0,r.jsx)(ed,{width:Z.AheadBehindCountWidth-24,aheadCount:t[0],behindCount:t[1],maxDiverged:s})}):null:(0,r.jsx)(eh,{children:n})}},{header:s?"Merge queue":"Pull request",id:"pullRequestOrMergeQueue",width:125,renderCell:({mergeQueue:e,pullRequest:t})=>{let s=(0,r.jsx)(q.O,{variant:"rounded",sx:{width:"33%",maxWidth:"75px",height:"20px"}});return a?e?(0,r.jsx)(eh,{children:(0,r.jsx)(l.Suspense,{fallback:s,children:(0,r.jsx)(ec,{mergeQueueUrl:e.path,queueCount:e.count})})}):t?(0,r.jsx)(eh,{children:(0,r.jsx)(l.Suspense,{fallback:s,children:(0,r.jsx)(eo,{repo:o,pullRequest:t})})}):null:(0,r.jsx)(eh,{children:s})}},{header:()=>(0,r.jsx)(T.A,{className:"sr-only",sx:{position:"relative"},children:"Action menu"}),id:"actionMenu",width:70,renderCell:({isDefault:e,name:t,rulesetsPath:a,path:s,deleteable:n,deleteProtected:i,renameable:l,isBeingRenamed:c,oid:h,pullRequest:p,deletedAt:m})=>(0,r.jsx)(ei.u,{repo:o,branch:{isDefault:e,name:t,rulesetsPath:a,path:s,deleteable:n,deleteProtected:i,renameable:l,isBeingRenamed:c},oid:h,pullRequest:p,deletedBranches:d,onDeletedBranchesChange:u,sx:{float:"right"},deletedAt:m})}]})}let eh=({sx:e,children:t})=>(0,r.jsx)(x.A,{sx:{display:"flex",alignItems:"center",height:32,...e},children:t});try{el.displayName||(el.displayName="StatusCheckRollup")}catch{}try{eo.displayName||(eo.displayName="PullRequestLabel")}catch{}try{ec.displayName||(ec.displayName="MergeQueueLabel")}catch{}try{ed.displayName||(ed.displayName="AheadBehindCount")}catch{}try{eu.displayName||(eu.displayName="BranchesTable")}catch{}try{eh.displayName||(eh.displayName="VerticallyCenteredCell")}catch{}var ep=a(55847),em=a(71312),ex=a(28784);function ey({onDismiss:e}){let t=p(),{defaultBranch:a,ownerLogin:s,name:i,id:o}=(0,n.t)(),{helpUrl:c}=d(),{sendClickAnalyticsEvent:u}=(0,em.S)(),h=(0,l.useCallback)(()=>{t&&(async()=>{(await (0,ex.DI)(`${(0,er.jMU)(t)}?notice_name=sculk_protect_this_branch&repository_id=${o}`,{method:"DELETE"})).ok&&e()})()},[t,o,e]),m=(0,l.useCallback)(()=>{u({category:"suggestion",action:"click_to_dismiss",label:"ref_cta:dismiss;ref_loc:repo_branches_listing;"})},[u]),y=(0,l.useCallback)(()=>{u({category:"suggestion",action:"click_to_learn_more_about_rulesets",label:"ref_cta:learn_more_about_rulesets;ref_loc:repo_files_listing;"})},[u]),g=(0,l.useCallback)(()=>{u({category:"suggestion",action:"click_to_add_a_rule",label:"ref_cta:protect_this_branch;ref_loc:repo_branches_listing;"})},[u]);return(0,r.jsx)(x.A,{sx:{position:"relative",width:"100%",borderTop:1,overflow:"hidden"},as:"aside",className:"color-border-default js-notice","aria-label":`Your ${a} branch isn't protected`,children:(0,r.jsxs)(x.A,{sx:{display:"flex",p:2,justifyContent:"space-between",flexDirection:["column","column","row","row"],gap:[2,2,null,null]},"data-testid":"protect-this-branch-banner",children:[(0,r.jsxs)(x.A,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(x.A,{sx:{float:"none",mr:3,ml:0},"data-testid":"protect-this-branch-primer-icon",className:"branch-action-item-icon completeness-indicator completeness-indicator-problem",children:(0,r.jsx)(b.GitBranchIcon,{})}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(x.A,{as:"h3",sx:{mb:1},className:"h5",children:["Your ",a," branch isn't protected"]}),(0,r.jsxs)(T.A,{as:"p",sx:{fontSize:0,color:"fg.muted",mb:0},children:["Protect this branch from force pushing or deletion, or require status checks before merging.\xa0",(0,r.jsx)(f.N,{onClick:y,to:`${c}/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets`,style:{textDecoration:"underline"},children:"Learn more"})]})]})]}),(0,r.jsxs)(x.A,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(ep.Q,{variant:"invisible",onClick:()=>{h(),m()},sx:{fontSize:0,color:"fg.muted",mx:3},children:"Dismiss"}),(0,r.jsx)(f.N,{onClick:g,to:(0,er.cmy)({owner:s,repo:i}),className:"btn btn-sm",children:"Protect this branch"})]})]})})}try{ey.displayName||(ey.displayName="ProtectThisBranchBanner")}catch{}function eb(e,t){let[a,r]=(0,l.useState)(void 0),[s]=(0,A.o)(),n=s.get("query")??"",i=new URLSearchParams;n.length>0&&i.append("include_authors","true");let o=`${(0,er.SHX)({owner:e.ownerLogin,repo:e.name,action:"branches"})}/deferred_metadata?${i.toString()}`;return(0,l.useEffect)(()=>{let e=!1;return(async()=>{if(r(void 0),!t.length){r(new Map);return}let a=await (0,ex.lS)(o,{body:{branches:t},method:"POST"});if(!e)try{if(a.ok){let e=await a.json();e&&r(new Map(Object.entries(e.deferredMetadata)))}else r(new Map)}catch{r(new Map)}})(),function(){e=!0}},[t,o]),a}function ef({id:e,title:t,viewMorePath:a,branches:s,deferredMetadata:n,showMergeQueueHeader:l,showFooter:o,isSecurityAdvisory:c,onDismissBanner:d=()=>null}){let{screenSize:u}=(0,i.lm)(),h=u>=i.Gy.xxxlarge,p="default"===e;return s.length?(0,r.jsxs)(x.A,{sx:{mb:3},children:[(0,r.jsxs)(g.X.Container,{sx:o?{"& .TableOverflowWrapper:last-child .Table .TableBody .TableRow:last-of-type .TableCell":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}:null,children:[(0,r.jsx)(g.X.Title,{as:"h2",id:e,children:t}),(0,r.jsx)(eu,{labelId:e,branches:s,deferredMetadata:n,showMergeQueueHeader:l,isLarge:h})]}),p&&o&&!c?(0,r.jsx)(e_,{children:(0,r.jsx)(ey,{onDismiss:d})}):null,a&&o?(0,r.jsx)(e_,{children:(0,r.jsx)("span",{children:(0,r.jsxs)(f.N,{to:a,children:["View more branches ",(0,r.jsx)(y.A,{icon:b.ChevronRightIcon})]})})}):null]}):null}function eg(){let e=(0,_.B)(),t=P(),a=(0,n.t)(),s=e.protectThisBranchBanner.isSecurityAdvisory,[i,o]=(0,l.useState)(e.protectThisBranchBanner.dismissed),c=eb(a,(0,l.useMemo)(()=>(e.branches.default?[e.branches.default]:[]).concat(e.branches.yours).concat(e.branches.active).map(e=>e.name),[e.branches.active,e.branches.default,e.branches.yours]));return(0,r.jsxs)(D,{selectedPage:"overview",children:[e.branches.default&&(0,r.jsx)(ef,{id:"default",title:"Default",branches:[e.branches.default],deferredMetadata:c,showMergeQueueHeader:e.branches.default.mergeQueueEnabled,onDismissBanner:()=>{o(!0)},showFooter:!i,isSecurityAdvisory:s}),(0,r.jsx)(ef,{id:"yours",title:"Your branches",branches:e.branches.yours,deferredMetadata:c,viewMorePath:t("yours"),showFooter:e.hasMore.yours}),(0,r.jsx)(ef,{id:"Active",title:"Active branches",branches:e.branches.active,deferredMetadata:c,viewMorePath:t("active"),showFooter:e.hasMore.active})]})}function e_({children:e}){return(0,r.jsx)(x.A,{sx:{display:"flex",justifyContent:"center",alignItems:"space-between",padding:2,border:"1px solid",borderTop:0,borderColor:"border.default",borderBottomLeftRadius:2,borderBottomRightRadius:2},children:e})}try{ef.displayName||(ef.displayName="BranchSection")}catch{}try{eg.displayName||(eg.displayName="Overview")}catch{}try{e_.displayName||(e_.displayName="FooterRow")}catch{}var ej=a(80105),ev=a(86233),eC=a(7572);function ew(){return(0,r.jsx)(eB,{type:"yours"})}function eN(){return(0,r.jsx)(eB,{type:"active"})}function eA(){return(0,r.jsx)(eB,{type:"stale"})}function ek(){return(0,r.jsx)(eB,{type:"all"})}function eB({type:e}){let t=(0,_.B)(),a=(0,n.t)(),[s]=(0,A.o)(),{screenSize:o}=(0,i.lm)(),c=o>=i.Gy.xxxlarge,d=(0,l.useMemo)(()=>t.branches.map(e=>e.name),[t.branches]),u=eb(a,d);return(0,l.useEffect)(()=>{s.get("query")&&(0===d.length?(0,eC.i)("No results found"):(0,eC.i)(`${d.length} result${d.length>1?"s":""} found`))},[d,s]),(0,r.jsx)(D,{selectedPage:e,children:(0,r.jsx)(eu,{branches:t.branches,deferredMetadata:u,isLarge:c})})}try{ew.displayName||(ew.displayName="Yours")}catch{}try{eN.displayName||(eN.displayName="Active")}catch{}try{eA.displayName||(eA.displayName="Stale")}catch{}try{ek.displayName||(ek.displayName="All")}catch{}try{eB.displayName||(eB.displayName="List")}catch{}(0,ej.o)("repos-branches",()=>({App:m,routes:[(0,ev.a)({path:"/:user_id/:repository/branches",Component:eg}),(0,ev.a)({path:"/:user_id/:repository/branches/yours",Component:ew}),(0,ev.a)({path:"/:user_id/:repository/branches/active",Component:eN}),(0,ev.a)({path:"/:user_id/:repository/branches/stale",Component:eA}),(0,ev.a)({path:"/:user_id/:repository/branches/all",Component:ek})]}))},71312:(e,t,a)=>{a.d(t,{S:()=>l,s:()=>i});var r=a(96540),s=a(51848),n=a(31481);function i(){let e=(0,r.useContext)(n.I);if(!e)throw Error("useAnalytics must be used within an AnalyticsContext");let{appName:t,category:a,metadata:i}=e;return{sendAnalyticsEvent:(0,r.useCallback)((e,r,n={})=>{let l={react:!0,app_name:t,category:a,...i};(0,s.BI)(e,{...l,...n,target:r})},[t,a,i])}}function l(){let{sendAnalyticsEvent:e}=i();return{sendClickAnalyticsEvent:(0,r.useCallback)((t={})=>{e("analytics.click",void 0,t)},[e])}}},27788:(e,t,a)=>{a.d(t,{Z:()=>u,o:()=>h});var r=a(96540),s=a(47767),n=a(45588),i=a(84976),l=a(51550),o=a(92812),c=a(56725),d=a(99523);let u=()=>{let{routes:e}=r.useContext(o.B),t=(0,s.Zp)();return r.useCallback((s,i={})=>{let o=(0,n.o1)(s).pathname;if((0,n.ue)(e,o)){(0,l.A)(location.href,s.toString())||(0,c.SC)("react");let{preventAutofocus:e,...a}=i;(0,r.startTransition)(()=>{t(s,e?{...a,state:{[d.V]:!0,...a.state}}:a);let{turbo:r,...n}=window.history.state??{};window.history.replaceState({...n,skipTurbo:!0},"",location.href)})}else{let e="string"==typeof s?s:(0,n.AO)(s);(async()=>{let{softNavigate:t}=await Promise.all([a.e("vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js"),a.e("ui_packages_soft-navigate_soft-navigate_ts")]).then(a.bind(a,63120));t(e)})()}},[t,e])},h=()=>{let[e]=(0,i.ok)(),t=u(),{pathname:a}=(0,s.zy)(),n=r.useCallback((r,s={})=>{t({pathname:a,search:(0,i.PI)("function"==typeof r?r(e):r).toString()},s)},[e,t,a]);return[e,n]}},89504:(e,t,a)=>{a.d(t,{d:()=>i,t:()=>l});var r=a(74848),s=a(96540);let n=s.createContext({});function i({repository:e,children:t}){return(0,r.jsxs)(n.Provider,{value:e,children:[" ",t," "]})}function l(){return s.useContext(n)}try{n.displayName||(n.displayName="CurrentRepositoryContext")}catch{}try{i.displayName||(i.displayName="CurrentRepositoryProvider")}catch{}},22868:(e,t,a)=>{a.d(t,{r:()=>l});var r=a(74848),s=a(97156),n=a(47258),i=a(96540);let l=(0,i.forwardRef)(function({src:e,size:t=20,...a},l){let o=(0,i.useMemo)(()=>{let a=new URL(e,s.fV.origin);return a.searchParams.has("size")||a.searchParams.has("s")||a.searchParams.set("size",String(2*Number(t))),a.toString()},[e,t]);return(0,r.jsx)(n.A,{ref:l,src:o,size:t,"data-testid":"github-avatar",...a})});try{l.displayName||(l.displayName="GitHubAvatar")}catch{}},93440:(e,t,a)=>{a.r(t),a.d(t,{AheadBehindCountWidth:()=>o,default:()=>i,scaleAheadBehind:()=>c});var r=a(74848),s=a(75177),n=a(94977);function i({aheadCount:e,behindCount:t,maxDiverged:a,width:i=o,sx:d}){let u=e+t,h=void 0!==a?c(e,a):Math.floor(e/u*100),p=void 0!==a?c(t,a):100-h;return(0,r.jsx)(s.A,{sx:{...d,display:"inline-block",color:"fg.muted"},"aria-label":`Ahead behind count: ${u}`,className:"branch-a-b-count",role:"img",children:(0,r.jsx)(n.A,{"aria-label":`Ahead behind count: ${u}`,children:(0,r.jsxs)(s.A,{sx:{display:"flex",width:i},children:[(0,r.jsx)(l,{aheadOrBehind:"behind",count:t,percentage:p}),(0,r.jsx)(l,{aheadOrBehind:"ahead",count:e,percentage:h})]})})})}let l=({aheadOrBehind:e,count:t,percentage:a})=>(0,r.jsxs)(s.A,{sx:{position:"relative",width:"50%",paddingBottom:1,..."ahead"===e?{textAlign:"left",borderLeft:"1px solid",borderColor:"border.default"}:{textAlign:"right"}},children:[(0,r.jsx)(s.A,{sx:{position:"relative",display:"block",top:"-1px",paddingX:1,fontSize:0},children:t}),(0,r.jsx)(s.A,{"data-testid":`ahead-behind-${a}`,sx:{position:"absolute",width:`${a}%`,minWidth:1,height:"4px",..."ahead"===e?{left:0,borderRadiusTopRight:2,borderRadiusBottomRight:2}:{right:0,borderRadiusTopLeft:2,borderRadiusBottomLeft:2}},children:(0,r.jsx)(s.A,{sx:{position:"absolute",height:"100%",backgroundColor:t>0?"neutral.muted":"transparent",..."ahead"===e?{left:0}:{right:0}},className:"anim-grow-x"})})]}),o=150;function c(e,t){return e=e<=0?0:Math.log10(e),parseFloat((100*((t=t<=0?0:Math.log10(t))>0?e/t:0)).toFixed(2))}try{i.displayName||(i.displayName="AheadBehindCount")}catch{}try{l.displayName||(l.displayName="CountHalf")}catch{}},3411:(e,t,a)=>{a.d(t,{S:()=>y,u:()=>b});var r=a(74848),s=a(96540),n=a(75177),i=a(87330),l=a(89323),o=a(80497),c=a(38621),d=a(56226),u=a(83056),h=a(54156),p=a(28784);let m=(0,s.lazy)(()=>a.e("ui_packages_repos-branches_components_DeleteBranchDialog_tsx").then(a.bind(a,15073))),x=(0,s.lazy)(()=>Promise.all([a.e("primer-react"),a.e("ui_packages_repos-branches_components_RenameBranchDialog_tsx")]).then(a.bind(a,32426)));async function y(e,t,a,r,s){e(!0);let n=await (0,p.DI)(`${(0,u.yf2)({repo:s})}/${encodeURIComponent(t)}`,{method:"delete"});return n.ok&&r([...a,t]),e(!1),n.ok}function b({repo:e,branch:t,oid:a,pullRequest:b,deletedBranches:f,onDeletedBranchesChange:g,sx:_,deletedAt:j}){let{addToast:v}=(0,h.Y6)(),[C,w]=(0,s.useState)(!1),[N,A]=(0,s.useState)(!1),[k,B]=(0,s.useState)(!1);async function S(){C||N||!a||(t.isDefault?v({type:"error",message:"You can't delete the default branch."}):t.deleteProtected?v({type:"error",message:"You can't delete this protected branch."}):t.isBeingRenamed?v({type:"error",message:"You can't delete this branch because it is being renamed."}):t.deleteable&&a?b?.state==="open"?B(!0):await y(w,t.name,f,g,e)||v({type:"error",message:"Branch could not be deleted."}):v({type:"error",message:"You can't delete this branch."}))}async function P(){N||C||!a||(A(!0),(await (0,p.DI)(`${(0,u.yf2)({repo:e})}/?branch=${a}&name=${t.name}`,{method:"post"})).ok?g(f.filter(e=>e!==t.name)):v({type:"error",message:"Branch could not be restored."}),A(!1))}let[R,I]=(0,s.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.A,{sx:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-end",..._},children:f.includes(t.name)&&a?(0,r.jsx)(i.K,{unsafeDisableTooltip:!0,icon:c.UndoIcon,onClick:P,size:"small",variant:"invisible","aria-label":"Restore"}):(0,r.jsxs)(n.A,{sx:{display:"flex",flexDirection:"row"},children:[(0,r.jsx)(i.K,{unsafeDisableTooltip:!0,icon:c.TrashIcon,variant:"invisible",onClick:()=>{j?v({type:"error",message:"This branch no longer exists."}):S()},"aria-label":"Delete branch",size:"small"}),(0,r.jsxs)(l.W,{children:[(0,r.jsx)(l.W.Anchor,{children:(0,r.jsx)(i.K,{unsafeDisableTooltip:!0,icon:c.KebabHorizontalIcon,size:"small",variant:"invisible",className:"color-fg-muted align-center","aria-label":"Branch menu",name:"Branch menu"})}),(0,r.jsx)(l.W.Overlay,{children:(0,r.jsxs)(o.l,{children:[!t.isDefault&&(j?(0,r.jsxs)(o.l.Item,{onSelect:()=>{v({type:"error",message:"This branch no longer exists."})},children:[(0,r.jsx)(o.l.LeadingVisual,{children:e.currentUserCanPush?(0,r.jsx)(c.GitPullRequestIcon,{size:16}):(0,r.jsx)(c.GitCompareIcon,{size:16})}),e.currentUserCanPush?"New pull request":"Compare"]}):(0,r.jsxs)(o.l.LinkItem,{as:d.N,"aria-label":e.currentUserCanPush?"New pull request":"Compare",to:e.currentUserCanPush?(0,u.w7M)({repo:e,refName:t.name}):(0,u.bSP)({repo:e,head:t.name}),className:"text-decoration-skip",children:[(0,r.jsx)(o.l.LeadingVisual,{children:e.currentUserCanPush?(0,r.jsx)(c.GitPullRequestIcon,{size:16}):(0,r.jsx)(c.GitCompareIcon,{size:16})}),e.currentUserCanPush?"New pull request":"Compare"]})),(0,r.jsxs)(o.l.LinkItem,{as:d.N,"aria-label":"Activity",to:(0,u.PUd)({repo:e,branch:t.name}),className:"text-decoration-skip",children:[(0,r.jsx)(o.l.LeadingVisual,{children:(0,r.jsx)(c.PulseIcon,{size:16})}),"Activity"]}),t.rulesetsPath?(0,r.jsxs)(o.l.LinkItem,{as:d.N,"aria-label":"View rules",to:t.rulesetsPath,className:"text-decoration-skip",children:[(0,r.jsx)(o.l.LeadingVisual,{children:(0,r.jsx)(c.ShieldLockIcon,{size:16})}),"View rules"]}):(0,r.jsxs)(o.l.Item,{onSelect:()=>{v({type:"error",message:"There are no rulesets associated with this branch."})},children:[(0,r.jsx)(o.l.LeadingVisual,{children:(0,r.jsx)(c.ShieldLockIcon,{size:16})}),"View rules"]}),e.currentUserCanPush&&(0,r.jsxs)(o.l.Item,{"aria-label":`Rename branch '${t.name}'`,onSelect:()=>{j?v({type:"error",message:"This branch no longer exists."}):t.isBeingRenamed?v({type:"error",message:"You can't rename this branch because it is being renamed."}):t.renameable?I(!0):v({type:"error",message:"You don't have permission to rename this branch."})},children:[(0,r.jsx)(o.l.LeadingVisual,{children:(0,r.jsx)(c.PencilIcon,{size:16})}),"Rename branch"]})]})})]})]})}),(0,r.jsxs)(s.Suspense,{children:[R&&(0,r.jsx)(x,{repo:e,branch:t,onDismiss:function(){I(!1)}}),k&&b&&(0,r.jsx)(m,{showModal:k,setShowModal:B,setDeleting:w,branchName:t.name,onDeletedBranchesChange:g,deletedBranches:f,pullRequest:b,repo:e})]})]})}try{m.displayName||(m.displayName="DeleteBranchDialog")}catch{}try{x.displayName||(x.displayName="RenameBranchDialog")}catch{}try{b.displayName||(b.displayName="BranchActionMenu")}catch{}},42024:(e,t,a)=>{a.d(t,{Gy:()=>i,LB:()=>d,lm:()=>c,nn:()=>u});var r=a(74848),s=a(70170),n=a(96540),i=function(e){return e[e.small=1]="small",e[e.medium=544]="medium",e[e.large=768]="large",e[e.xlarge=1012]="xlarge",e[e.xxlarge=1280]="xxlarge",e[e.xxxlarge=1350]="xxxlarge",e[e.xxxxlarge=1440]="xxxxlarge",e}({});let l=[1440,1350,1280,1012,768,544,1],o=n.createContext({screenSize:1});function c(){return n.useContext(o)}function d({children:e,initialValue:t}){let a=(0,n.useSyncExternalStore)(()=>()=>{},()=>t??u(window.innerWidth),()=>t??1),i=(0,n.useRef)(a),[l,c]=(0,n.useState)(a),d=(0,n.useCallback)(()=>{let e=u(window.innerWidth);i.current!==e&&(i.current=e,c(e))},[]);(0,n.useEffect)(()=>{let e=new ResizeObserver((0,s.s)(d));return e.observe(document.documentElement),()=>e.disconnect()},[d]);let h=(0,n.useMemo)(()=>({screenSize:l}),[l]);return(0,r.jsx)(o.Provider,{value:h,children:e})}function u(e){for(let t of l)if(e>=t)return t;return 1}try{o.displayName||(o.displayName="ScreenContext")}catch{}try{d.displayName||(d.displayName="ScreenSizeProvider")}catch{}},92979:(e,t,a)=>{a.d(t,{O:()=>u});var r=a(75177),s=a(59299),n=a(44999),i=a(38267);let l=(0,i.i7)(["0%{transform:translateX(-100%);}50%{transform:translateX(100%);}100%{transform:translateX(100%);}"]),o=(0,i.AH)(["animation:"," 1.5s infinite linear;"],l),c=(0,i.i7)(["0%{opacity:.3;}10%{opacity:1;}100%{opacity:.3;}"]),d=(0,i.AH)(["animation:"," 2s infinite linear;"],c),u=(0,i.Ay)(r.A).withConfig({displayName:"LoadingSkeleton",componentId:"sc-bcbf24f9-0"})(["position:relative;overflow:hidden;mask-image:radial-gradient(white,black);",";&::after{",";background:linear-gradient(90deg,transparent,",",transparent);content:'';position:absolute;transform:translateX(-100%);bottom:0;left:0;right:0;top:0;}background-color:",";border-radius:",";display:block;height:1.2em;"," width:",";height:",";",""],({animationStyle:e})=>"pulse"===e&&d,({animationStyle:e})=>"pulse"!==e&&o,(0,s.Jt)("colors.neutral.subtle"),(0,s.Jt)("colors.neutral.subtle"),({theme:e,variant:t})=>{switch(t){case"rounded":return(0,s.Jt)("radii.1")(e);case"pill":return"100px";case"elliptical":return"50%";default:return"0"}},({variant:e})=>"elliptical"===e&&{borderRadius:"50%"},({width:e})=>{switch(e){case"random":return`${Math.floor(40*Math.random()+40)}%`;case"xl":return"32px";case"lg":return"24px";case"md":return"20px";case"sm":return"16px";default:return e}},({height:e})=>{switch(e){case"xl":return"32px";case"lg":return"24px";case"md":return"20px";case"sm":return"16px";default:return e}},n.A);try{u.displayName||(u.displayName="LoadingSkeleton")}catch{}}},e=>{var t=t=>e(e.s=t);e.O(0,["primer-react","react-core","react-lib","octicons-react","vendors-node_modules_primer_behaviors_dist_esm_index_mjs","vendors-node_modules_tanstack_query-core_build_modern_queryClient_js","vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-37e3d5","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_stacktrace-parser_dist_s-e7dcdd","vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js","vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_tanstack_query-core_build_modern_queryObserver_js-node_modules_tanstack_-defd52","vendors-node_modules_github_relative-time-element_dist_index_js","vendors-node_modules_braintree_browser-detection_dist_browser-detection_js-node_modules_githu-bb80ec","vendors-node_modules_primer_live-region-element_dist_esm_index_js-node_modules_react-virtual_-75c620","vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_github_hydro-analytics--479797","ui_packages_failbot_failbot_ts","ui_packages_aria-live_aria-live_ts-ui_packages_promise-with-resolvers-polyfill_promise-with-r-014121","ui_packages_paths_index_ts","ui_packages_ref-selector_RefSelector_tsx","ui_packages_create-branch-button_CreateBranchButton_tsx"],()=>t(231)),e.O()}]);
//# sourceMappingURL=repos-branches-c1dc7b3671f3.js.map
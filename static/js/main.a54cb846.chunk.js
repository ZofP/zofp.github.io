(this.webpackJsonpmy_portfolio=this.webpackJsonpmy_portfolio||[]).push([[0],{109:function(e,t,a){e.exports=a.p+"static/media/backroads.1bc167c5.jpeg"},110:function(e,t,a){e.exports=a.p+"static/media/coffeebar.e2e17bdf.jpeg"},111:function(e,t,a){e.exports=a.p+"static/media/pixabay.fcf0fa9b.jpg"},184:function(e,t,a){e.exports=a(449)},189:function(e,t,a){},190:function(e,t,a){},449:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(14),l=a.n(o),i=(a(189),a(17)),c=a(508),m=a(172),s=a(507),p=(a(190),a(45)),u=a(105),d=a(162),g=a.n(d),y=a(478),h=a(484),f=a(510),b=a(513),E=a(486),v=a(487),k=a(488),x=a(489),S=a(490),C=a(491),j=a(91),N=a(492),w=a(512),O=a(480),I=a(481),T=a(482),A=a(483),z=a(485),P=a(493),L=a(27),D=a(55),B=a.n(D),M=a(69),R=a(163),H=a(164),J=Object(y.a)((function(e){return{navbarContainer:{zIndex:"2",alignSelf:"stretch",background:e.palette.primary.dark,position:"fixed",width:"100%"},navbar:{height:"3rem",minHeight:"1rem !important",alignSelf:"flex-end",justifyContent:"flex-end"},menuButton:{marginRight:e.spacing(2),color:e.palette.secondary.light},closeButton:{display:"flex",flexDirection:"column",margin:"1rem 1rem 1rem auto",color:e.palette.secondary.main,"&:hover":{color:e.palette.primary.dark,cursor:"pointer"},transition:"all 0.3s",alignItems:"flex-end"},title:{flexGrow:1,color:e.palette.secondary.light,userSelect:"none",textTransform:"uppercase",fontWeight:"500",textAlign:"end"},headersContainer:{display:"flex",flexDirection:"row",height:"100%",padding:"0","& a":{textAlign:"center"}},avatar:{display:"block",margin:"2rem auto",width:e.spacing(13),height:e.spacing(13),pointerEvents:"none"},menuDrawerContainer:{width:250,background:e.palette.primary.dark,height:"100%"},menuDrawerItem:{color:e.palette.secondary.light,"&:hover div":{color:e.palette.secondary.main,transform:"translateY(-5%)"},"& div":{transition:"all 0.15s ease-out"}},languageIconsDrawerContainer:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginBottom:"0.5rem"},iconDrawerContainer:{"&:hover":{transform:"scale(1.3)",cursor:"pointer"},transition:"all 0.15s ease-out"},menuItem:{color:e.palette.secondary.light,"&:hover span":{color:e.palette.secondary.main,transform:"translateY(-5%)"},"& span":{transition:"all 0.15s ease-out"}},menuItemCurrent:{"& div span":{color:e.palette.secondary.main}},languageIconsContainer:{alignItems:"center",margin:"0 1rem 0 1rem",display:"flex",flexDirection:"column",justifyContent:"space-evenly",height:"100%","& svg":{cursor:"pointer"}},iconContainer:{"&:hover":{transform:"scale(1.3)"},transition:"all 0.15s ease-out"}}})),W=function(e){var t=J(),a=Object(n.useState)({open:!1}),o=Object(i.a)(a,2),l=o[0],c=o[1],m={english:[{itemIcon:r.a.createElement(O.a,null),itemText:"Home",itemPath:"#home"},{itemIcon:r.a.createElement(I.a,null),itemText:"Story",itemPath:"#story"},{itemIcon:r.a.createElement(T.a,null),itemText:"Projects",itemPath:"#projects"},{itemIcon:r.a.createElement(A.a,null),itemText:"Contacts",itemPath:"#contacts"}],czech:[{itemIcon:r.a.createElement(O.a,null),itemText:"Dom\u016f",itemPath:"#home"},{itemIcon:r.a.createElement(I.a,null),itemText:"P\u0159\xedb\u011bh",itemPath:"#story"},{itemIcon:r.a.createElement(T.a,null),itemText:"Projekty",itemPath:"#projects"},{itemIcon:r.a.createElement(A.a,null),itemText:"Kontakt",itemPath:"#contacts"}]};m="czech"===e.language?m.czech:m.english;var s=[{language:"czech",flag:H.a},{language:"english",flag:R.a}],d=Object(h.a)((function(e){return e.breakpoints.up("sm")})),y=function(e){return function(){c(Object(p.a)(Object(p.a)({},l),{},{open:e}))}},D=function(e){var t=e.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:t+-40,behavior:"smooth"})};return r.a.createElement(f.a,{component:"div",className:t.navbarContainer},r.a.createElement(L.Bounce,{left:!0},r.a.createElement(C.a,{className:t.navbar,disableGutters:!0},d?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{componentTag:v.a,items:m.map((function(e){return e.itemPath.slice(1)})),offset:-48,currentClassName:t.menuItemCurrent,className:t.headersContainer},m.map((function(e,a){return r.a.createElement(k.a,{button:!0,key:a,component:u.HashLink,smooth:!0,to:e.itemPath,scroll:function(e){return D(e)}},r.a.createElement(S.a,{primary:e.itemText,className:t.menuItem}))}))),r.a.createElement(f.a,{className:t.languageIconsContainer},s.map((function(a,n){return r.a.createElement(f.a,{className:t.iconContainer,key:n},r.a.createElement(M.Icon,{onClick:function(){return e.handleSetLanguage(a.language)},icon:a.flag}))})))):r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{variant:"h6",className:t.title},"Menu"),r.a.createElement(N.a,{className:t.menuButton,color:"inherit","aria-label":"menu",onClick:y(!0)},r.a.createElement(P.a,null)),r.a.createElement(w.a,{anchor:"right",open:l.open,onClose:y(!1)},r.a.createElement(f.a,{className:t.menuDrawerContainer,component:"div"},r.a.createElement(z.a,{className:t.closeButton,onClick:y(!1)}),r.a.createElement(b.a,{className:t.avatar,src:B.a,alt:"avatar"}),r.a.createElement(f.a,{className:t.languageIconsDrawerContainer},s.map((function(a,n){return r.a.createElement(f.a,{className:t.iconDrawerContainer,key:n},r.a.createElement(M.Icon,{onClick:function(){return e.handleSetLanguage(a.language)},icon:a.flag}))}))),r.a.createElement(E.a,null),r.a.createElement(v.a,null,m.map((function(e,a){return r.a.createElement(k.a,{button:!0,key:a,component:u.HashLink,smooth:!0,to:e.itemPath,scroll:function(e){return D(e)},onClick:y(!1),className:t.menuDrawerItem},r.a.createElement(x.a,{className:t.menuItem},e.itemIcon),r.a.createElement(S.a,{primary:e.itemText}))})))))))))},V=a(495),G=a(108),F=a.n(G),U=Object(y.a)((function(e){return{avatar:{width:e.spacing(15),height:e.spacing(15),marginTop:"0.5rem",userSelect:"none",pointerEvents:"none"},title:{color:e.palette.primary.dark,textAlign:"center",fontWeight:"300",margin:"1rem 1rem",userSelect:"none"},subtitle:{color:e.palette.primary.light,marginBottom:"1.5rem",textAlign:"center",fontWeight:"600",textTransform:"uppercase",userSelect:"none"},typedContainer:{minWidth:"30%",textAlign:"center",zIndex:1,width:"100%"},profileText:{color:e.palette.primary.dark,fontStyle:"italic",fontWeight:"500",textAlign:"center"},slide:{width:"100%"}}})),q=function(e){var t=U(),a={english:{title:["Petr \u017dof\xe1k"],subtitle:["aspiring web developer","React | JavaScript"]},czech:{title:["Petr \u017dof\xe1k"],subtitle:["aspiruj\xedc\xed web developer","React | JavaScript"]}};return a="czech"===e.language?a.czech:a.english,r.a.createElement(f.a,{className:t.typedContainer},r.a.createElement(f.a,{className:t.slide},r.a.createElement(L.Bounce,{right:!0,delay:200},r.a.createElement(V.a,{container:!0,justify:"center"},r.a.createElement(b.a,{className:t.avatar,src:B.a,alt:"avatar"})),r.a.createElement(j.a,{className:t.title,variant:"h3"},r.a.createElement(F.a,{strings:a.title,typeSpeed:40,startDelay:700})),r.a.createElement(j.a,{className:t.subtitle,variant:"h5"},r.a.createElement(F.a,{strings:a.subtitle,typeSpeed:60,backSpeed:60,startDelay:700,loop:!0})))))},Z=Object(y.a)((function(e){return{divider:{backgroundColor:e.palette.primary.dark,height:"0.5rem"}}})),Y=function(){var e=Z();return r.a.createElement(E.a,{className:e.divider,variant:"fullWidth"})},_=Object(y.a)({pageContainer:{display:"flex",flexDirection:"column",minHeight:"100vh",height:"100%",background:"rgba(255, 255, 255, 1)"},pageItem:{flex:"1",display:"flex",justifyContent:"center",flexDirection:"column",alignSelf:"center",textAlign:"center",alignItems:"center",width:"100%"},pageSubitem:{display:"flex",flexDirection:"column",flex:"1",justifyContent:"center"}}),K=function(e){var t=_();return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{component:"div",className:t.pageContainer,id:"home"},r.a.createElement(f.a,{component:"div",className:t.pageItem},r.a.createElement(q,{className:t.pageSubitem,variant:"technologies",language:e.language})),r.a.createElement(Y,null)))},X=a(9),Q=a(90),$=(a(215),a(496)),ee=a(497),te=a(498),ae=a(499),ne=a(166),re=a(113),oe=Object(y.a)((function(e){var t;return{timeline:Object(X.a)({marginBottom:"2rem !important",display:"flex",flexDirection:"column",padding:"0","&.vertical-timeline::before":{background:e.palette.primary.main}},e.breakpoints.between("xs","sm"),{padding:"0",margin:"0"}),dates:(t={},Object(X.a)(t,e.breakpoints.up("laptop"),{color:"#000"}),Object(X.a)(t,"fontWeight","700 !important"),Object(X.a)(t,"fontSize","1.3rem !important"),t),timelineElement:{marginBlockEnd:"1rem !important"},lastTimelineElement:Object(X.a)({marginBlockEnd:"1rem !important",margin:"3rem 0 2rem 0"},e.breakpoints.up("laptop"),{margin:"8rem 0 2rem 0"}),problemContainer:{display:"inline-flex",alignItems:"center",color:e.palette.primary.error},problem:{margin:"0 0 0 1em !important"},solutionContainer:{display:"inline-flex",alignItems:"center",color:e.palette.primary.success},solution:{margin:"1em 0 0 1em !important",whiteSpace:"pre-wrap"},divider:{margin:"1em 0 1em 0 !important",background:e.palette.secondary.light}}})),le=function(e){var t=oe(),a=Object(re.a)(),n={english:[{type:"school",year:"2016",company:"CHARLES UNIVERSITY IN PRAGUE",position1:"Bachelor degree in Economics and Finance",description:"acquired advanced math skills and strong analytical thinking",problem:"",solution:"",contentStyle:{background:a.palette.secondary.main,color:a.palette.primary.main},contentArrowStyle:{borderRight:"7px solid  ".concat(a.palette.secondary.main)},iconStyle:{background:a.palette.secondary.main,color:a.palette.primary.dark},icon:r.a.createElement($.a,null)},{type:"work",year:"2017",company:"CSC COMPUTER SCIENCES",position1:"Labor Accounting Associate Professional",position2:"",description:"",problem:"processes included sending very similar emails to many recipients one by one, only changing few words",solution:"created an Excel macro (code written in VBA) which enabled mass sending of customized emails with one button click",contentStyle:{background:a.palette.primary.dark,color:a.palette.secondary.light},contentArrowStyle:{borderRight:"7px solid  ".concat(a.palette.primary.main)},iconStyle:{background:a.palette.primary.dark,color:a.palette.secondary.main},icon:r.a.createElement(ee.a,null)},{type:"work",year:"2018",company:"DXC TECHNOLOGY",position1:"Labor Accounting Deputy Team leader",position2:"",description:"",problem:"time-consuming reporting processes, a lot of data copy-pasting",solution:"created multiple Excel macros (code written in VBA) to do majority of the reporting work with one button click",contentStyle:{background:a.palette.primary.dark,color:a.palette.secondary.light},contentArrowStyle:{borderRight:"7px solid  ".concat(a.palette.primary.main)},iconStyle:{background:a.palette.primary.dark,color:a.palette.secondary.main},icon:r.a.createElement(ee.a,null)},{type:"work",year:"2019",company:"DXC TECHNOLOGY",position1:"Process Improvement Specialist",position2:"General Ledger Accountant",description:"",problem:"asked to provide a solution for processing access requests to internal database (done by sending emails manually)",solution:"set up a process flow in MS Power Automate which sends automatic emails to requester, approvers and technical support",contentStyle:{background:a.palette.primary.dark,color:a.palette.secondary.light},contentArrowStyle:{borderRight:"7px solid  ".concat(a.palette.primary.dark)},iconStyle:{background:a.palette.primary.dark,color:a.palette.secondary.main},icon:r.a.createElement(ee.a,null)},{type:"work",year:"2020",company:"DXC TECHNOLOGY",position1:"Process Improvement Specialist",position2:"General Ledger Accountant",description:"",problem:"employee absences requests being submitted by email, their overview stored in manually updated Excel tables",solution:"created an application in MS PowerApps (code similar to JavaScript) to easily manage the absence requests, data are stored on cloud.\nThe app is now used accross the whole company.",contentStyle:{background:a.palette.primary.dark,color:a.palette.secondary.light},contentArrowStyle:{borderRight:"7px solid  ".concat(a.palette.primary.dark)},iconStyle:{background:a.palette.primary.dark,color:a.palette.secondary.main},icon:r.a.createElement(ee.a,null)}],czech:[{type:"school",year:"2016",company:"UNIVERZITA KARLOVA",position1:"Ekonomie a Finance - bakal\xe1\u0159sk\xe9 studium",description:"zisk pokro\u010dil\xfdch matematick\xfdch dovednost\xed a analytick\xe9ho my\u0161len\xed",problem:"",solution:"",contentStyle:{background:a.palette.secondary.main,color:a.palette.primary.main},contentArrowStyle:{borderRight:"7px solid  ".concat(a.palette.secondary.main)},iconStyle:{background:a.palette.secondary.main,color:a.palette.primary.dark},icon:r.a.createElement($.a,null)},{type:"work",year:"2017",company:"CSC COMPUTER SCIENCES",position1:"Labor Accounting Associate Professional",position2:"",description:"",problem:"procesy obsahovaly zas\xedl\xe1n\xed podobn\xfdch e-mail\u016f mnoha p\u0159\xedjemc\u016fm jeden po druh\xe9m, m\u011bnilo se jen mal\xe9 mno\u017estv\xed slov",solution:"vytvo\u0159eno makro v Excelu (k\xf3d naps\xe1n ve VBA), je\u017e umo\u017enilo hromadn\xe9 zas\xedl\xe1n\xed p\u0159izp\u016fsobiteln\xfdch e-mail\u016f stiskem jednoho tla\u010d\xedtka",contentStyle:{background:a.palette.primary.dark,color:a.palette.secondary.light},contentArrowStyle:{borderRight:"7px solid  ".concat(a.palette.primary.main)},iconStyle:{background:a.palette.primary.dark,color:a.palette.secondary.main},icon:r.a.createElement(ee.a,null)},{type:"work",year:"2018",company:"DXC TECHNOLOGY",position1:"Labor Accounting Deputy Team leader",position2:"",description:"",problem:"zdlouhav\xe9 procesy na vytv\xe1\u0159en\xed report\u016f, mnoho kop\xedrov\xe1n\xed a vkl\xe1d\xe1n\xed dat",solution:"vytvo\u0159eno n\u011bkolik maker v Excelu (k\xf3d naps\xe1n ve VBA), kter\xe9 v\u011bt\u0161inu pr\xe1ce na reportingu provedou stiskem jednoho tla\u010d\xedtka",contentStyle:{background:a.palette.primary.dark,color:a.palette.secondary.light},contentArrowStyle:{borderRight:"7px solid  ".concat(a.palette.primary.main)},iconStyle:{background:a.palette.primary.dark,color:a.palette.secondary.main},icon:r.a.createElement(ee.a,null)},{type:"work",year:"2019",company:"DXC TECHNOLOGY",position1:"Process Improvement Specialist",position2:"General Ledger Accountant",description:"",problem:"po\u017e\xe1d\xe1n o vybudov\xe1n\xed \u0159e\u0161en\xed na zpracov\xe1v\xe1n\xed \u017e\xe1dost\xed o p\u0159\xedstup k intern\xed datab\xe1zi (\u017e\xe1d\xe1no zas\xedl\xe1n\xedm jednotliv\xfdch e-mail\u016f)",solution:"nastaven procesn\xed tok v MS Power Automate, kter\xfd zas\xedl\xe1 automatick\xe9 e-maily \u017eadateli, schvalovateli a technick\xe9 podpo\u0159e",contentStyle:{background:a.palette.primary.dark,color:a.palette.secondary.light},contentArrowStyle:{borderRight:"7px solid  ".concat(a.palette.primary.dark)},iconStyle:{background:a.palette.primary.dark,color:a.palette.secondary.main},icon:r.a.createElement(ee.a,null)},{type:"work",year:"2020",company:"DXC TECHNOLOGY",position1:"Process Improvement Specialist",position2:"General Ledger Accountant",description:"",problem:"\u017e\xe1dosti zam\u011bstnanc\u016f o absence pod\xe1v\xe1ny e-mailem, jejich p\u0159ehled uchov\xe1v\xe1n v manu\xe1ln\u011b aktualizovan\xfdch excelov\xfdch tabulk\xe1ch",solution:"vytvo\u0159ena aplikace v MS PowerApps (k\xf3d podobn\xfd JavaScriptu) pro jednoduchou spr\xe1vu \u017e\xe1dost\xed o absence, data uchov\xe1v\xe1na na cloudov\xe9m \xfalo\u017ei\u0161ti.\nTato aplikace je nyn\xed vyu\u017e\xedv\xe1na nap\u0159\xed\u010d celou firmou.",contentStyle:{background:a.palette.primary.dark,color:a.palette.secondary.light},contentArrowStyle:{borderRight:"7px solid  ".concat(a.palette.primary.dark)},iconStyle:{background:a.palette.primary.dark,color:a.palette.secondary.main},icon:r.a.createElement(ee.a,null)}]};return n="czech"===e.language?n.czech:n.english,r.a.createElement(Q.VerticalTimeline,{className:t.timeline},n.map((function(e,n){return r.a.createElement(Q.VerticalTimelineElement,{className:t.timelineElement,contentStyle:e.contentStyle,contentArrowStyle:e.contentArrowStyle,date:e.year,dateClassName:t.dates,iconStyle:e.iconStyle,icon:e.icon,key:n},r.a.createElement("h3",{className:"vertical-timeline-element-title",style:{color:"school"===e.type?a.palette.primary.dark:a.palette.secondary.main}},e.company),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.position1),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.position2),r.a.createElement("p",null,e.description),r.a.createElement("div",{className:t.problemContainer},"work"===e.type&&r.a.createElement(te.a,null),r.a.createElement("p",{className:t.problem},e.problem)),r.a.createElement("div",{className:t.solutionContainer},"work"===e.type&&r.a.createElement(ae.a,null),r.a.createElement("p",{className:t.solution},e.solution)))})),r.a.createElement(Q.VerticalTimelineElement,{icon:r.a.createElement(M.Icon,{icon:ne.a}),iconStyle:{background:a.palette.primary.dark,color:a.palette.secondary.main},contentStyle:{padding:"0"},className:t.lastTimelineElement}))},ie=Object(y.a)((function(e){var t;return{pageContainer:{display:"flex",flexDirection:"column",minHeight:"92vh",height:"100%",background:"rgba(255, 255, 255, 1)"},pageContent:{flex:"1",display:"flex",justifyContent:"space-around",alignSelf:"center",alignItems:"stretch",width:"100%",height:"100%",position:"relative"},heading:{display:"flex",flexDirection:"column",justifyContent:"center",color:e.palette.primary.dark,margin:"2rem 0 2.5rem 0",textAlign:"center"},text:{display:"flex",flexDirection:"column",justifyContent:"center",color:e.palette.primary.dark,textAlign:"center",margin:"2rem 0 2.5rem 0"},subtext:(t={marginTop:"1rem"},Object(X.a)(t,e.breakpoints.up("sm"),{whiteSpace:"pre-wrap"}),Object(X.a)(t,e.breakpoints.up("md"),{display:"flex"}),t),pageItem:{flex:"1 0 0",display:"flex",justifyContent:"space-around",flexDirection:"column",alignSelf:"center",alignItems:"center",width:"100%",position:"relative"}}})),ce=function(e){var t=ie(),a={english:{heading:"MY STORY",text:"AND THEN I THOUGHT ...",subtext:["WHAT ABOUT LEARNING"," ACTUAL ","PROGRAMMING ?"]},czech:{heading:"M\u016eJ P\u0158\xcdB\u011aH",text:"A PAK M\u011a NAPADLO ...",subtext:["CO TAKHLE NAU\u010cIT SE"," SKUTE\u010cN\xc9 ","PROGRAMOV\xc1N\xcd ?"]}};return a="czech"===e.language?a.czech:a.english,r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{component:"div",className:t.pageContainer,id:"story"},r.a.createElement(f.a,{component:"div",className:t.pageItem},r.a.createElement(L.Bounce,{left:!0},r.a.createElement(f.a,{component:"div",className:t.heading},r.a.createElement(j.a,{variant:"h3"},a.heading))),r.a.createElement(V.a,{container:!0,justify:"center",className:t.pageContent},r.a.createElement(V.a,{item:!0,container:!0,xs:10,md:9},r.a.createElement(le,{language:e.language}))),r.a.createElement(f.a,{component:"div",className:t.text},r.a.createElement(L.Zoom,null,r.a.createElement(f.a,null,r.a.createElement(j.a,{variant:"h4"},a.text))),r.a.createElement(L.Zoom,{delay:500},r.a.createElement(f.a,{className:t.subtext},r.a.createElement(j.a,{variant:"h4"},a.subtext[0]),r.a.createElement(j.a,{style:{fontStyle:"italic",fontWeight:"bold"},variant:"h4"},a.subtext[1]),r.a.createElement(j.a,{variant:"h4"},a.subtext[2]))))),r.a.createElement(Y,null)))},me=a(500),se=a(501),pe=a(502),ue=a(514),de=a(504),ge=a(505),ye=a(506),he=a(71),fe=a(32),be=a(109),Ee=a.n(be),ve=a(110),ke=a.n(ve),xe=a(111),Se=a.n(xe),Ce=Object(y.a)((function(e){return{cardListContainer:Object(X.a)({maxWidth:"100vw",zIndex:"0",display:"flex",userSelect:"none"},e.breakpoints.between("md","sm"),{padding:"0",margin:"0"}),cardContainer:{margin:"0.5rem",minHeight:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",background:"rgba(204, 204, 204, 0.2)",transition:"0.2s","&:hover":{transform:"scale(1.05)",background:e.palette.secondary.light},paddingBottom:"0.5rem"},cardContent:{display:"flex",flexDirection:"column",flex:"1",justifyContent:"space-between"},cardActions:{display:"flex",alignItems:"stretch",justifyContent:"space-around",flex:"0 0 5rem"},cardImg:{pointerEvents:"none"},cardIconsContainer:{display:"flex",width:"60%",justifyContent:"space-evenly",margin:"0 auto 0.5rem auto",fontSize:"1.5rem"}}})),je=function(e){var t=Ce(),a={english:[{name:"Personal Portfolio \n (This Page)",image:B.a,text:"My personal portfolio web page. Made from scratch.",icons:[{title:"React",component:r.a.createElement(fe.c,null)}],source:"https://github.com/ZofP/zofp.github.io",demo:"/"},{name:"Search Pixabay Pictures Project",image:Se.a,text:"Web page that allows to search pictures from public Pixabay API. Made from scratch.",icons:[{title:"React",component:r.a.createElement(fe.c,null)}],source:"https://github.com/ZofP/search-pixabay-pictures",demo:"https://zofp.github.io/search-pixabay-pictures/"},{name:"Backroads Project",image:Ee.a,text:"Web page of a fictional Backroads travel agency. Made as a part of an online course.",icons:[{title:"HTML",component:r.a.createElement(he.a,null)},{title:"CSS",component:r.a.createElement(fe.a,null)},{title:"JavaScript",component:r.a.createElement(fe.b,null)}],source:"https://github.com/ZofP/backroads-JS-project",demo:"https://zofp.github.io/backroads-JS-project/index.html"},{name:"Coffee Bar Project",image:ke.a,text:"Web page of a fictional coffee bar. Main focus on CSS, with a couple of JavaScript effects. Made as a part of an online course.",icons:[{title:"HTML",component:r.a.createElement(he.a,null)},{title:"CSS",component:r.a.createElement(fe.a,null)},{title:"JavaScript",component:r.a.createElement(fe.b,null)}],source:"https://github.com/ZofP/coffee-bar-JS-project",demo:"https://zofp.github.io/coffee-bar-JS-project/"}],czech:[{name:"Osobn\xed portfolio \n (tato str\xe1nka)",image:B.a,text:"Moje osobn\xed webov\xe1 str\xe1nka portfolia. Vytvo\u0159eno od nuly.",icons:[{title:"React",component:r.a.createElement(fe.c,null)}],source:"https://github.com/ZofP/zofp.github.io",demo:"/"},{name:"Vyhledava\u010d Pixabay obr\xe1zk\u016f",image:Se.a,text:"Webov\xe1 str\xe1nka umo\u017e\u0148uj\xedc\xed vyhledat obr\xe1zky z ve\u0159ejn\xe9ho Pixabay API. Vytvo\u0159eno od nuly.",icons:[{title:"React",component:r.a.createElement(fe.c,null)}],source:"https://github.com/ZofP/search-pixabay-pictures",demo:"https://zofp.github.io/search-pixabay-pictures/"},{name:"Backroads Projekt",image:Ee.a,text:"Webov\xe1 str\xe1nka fiktivn\xed cestovn\xed agentury Backroads. Vytvo\u0159eno jako sou\u010d\xe1st online kurzu.",icons:[{title:"HTML",component:r.a.createElement(he.a,null)},{title:"CSS",component:r.a.createElement(fe.a,null)},{title:"JavaScript",component:r.a.createElement(fe.b,null)}],source:"https://github.com/ZofP/backroads-JS-project",demo:"https://zofp.github.io/backroads-JS-project/index.html"},{name:"Coffee Bar Projekt",image:ke.a,text:"Webov\xe1 str\xe1nka fiktivn\xed kav\xe1rny. Zam\u011b\u0159eno p\u0159edev\u0161im na CSS a p\xe1r efekt\u016f v JavaScriptu. Vytvo\u0159eno jako sou\u010d\xe1st online kurzu.",icons:[{title:"HTML",component:r.a.createElement(he.a,null)},{title:"CSS",component:r.a.createElement(fe.a,null)},{title:"JavaScript",component:r.a.createElement(fe.b,null)}],source:"https://github.com/ZofP/coffee-bar-JS-project",demo:"https://zofp.github.io/coffee-bar-JS-project/"}]};return a="czech"===e.language?a.czech:a.english,r.a.createElement(V.a,{container:!0,justify:"center",className:t.cardListContainer},a.map((function(a,n){var o=a.name,l=a.image,i=a.text,c=a.icons,m=a.source,s=a.demo;return r.a.createElement(V.a,{item:!0,xs:8,sm:8,md:2,key:n,className:t.cardContainer,component:me.a},r.a.createElement(se.a,{component:"img",alt:o,height:"220",image:l,src:l,className:t.cardImg}),r.a.createElement(pe.a,{className:t.cardContent},r.a.createElement(j.a,{gutterBottom:!0,variant:"h5"},o),r.a.createElement(f.a,{component:"div",className:t.cardIconsContainer},c.map((function(e,t){return r.a.createElement(ue.a,{title:e.title,arrow:!0,TransitionComponent:de.a,key:t},r.a.createElement(f.a,{component:"div"},e.component))}))),r.a.createElement(j.a,{variant:"body2",color:"textSecondary",component:"p"},i)),r.a.createElement(ge.a,{className:t.cardActions},r.a.createElement(ye.a,{href:m,target:"_blank",variant:"contained",size:"small",color:"secondary"},"czech"===e.language?"Zdrojov\xfd k\xf3d na Github":"Source code on Github"),l!==B.a&&r.a.createElement(ye.a,{href:s,target:"_blank",variant:"contained",size:"small",color:"primary"},"czech"===e.language?"Uk\xe1zka":"Live demo")))})))},Ne=Object(y.a)((function(e){return{pageContainer:{display:"flex",flexDirection:"column",minHeight:"100vh",height:"100%",background:"rgba(255, 255, 255, 1)"},pageItem:{flex:"1 0 0",display:"flex",justifyContent:"space-around",flexDirection:"column",alignSelf:"center",textAlign:"center",alignItems:"center",width:"100%",position:"relative",marginBottom:"1rem"},heading:{display:"flex",flexDirection:"column",justifyContent:"center",color:e.palette.primary.dark,margin:"1rem"}}})),we=function(e){var t=Ne(),a={english:{heading:"MY PROJECTS"},czech:{heading:"MOJE PROJEKTY"}};return a="czech"===e.language?a.czech:a.english,r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{component:"div",className:t.pageContainer,id:"projects"},r.a.createElement(f.a,{component:"div",className:t.pageItem},r.a.createElement(L.Bounce,{left:!0},r.a.createElement(f.a,{component:"div",className:t.heading},r.a.createElement(j.a,{variant:"h3"},a.heading))),r.a.createElement(L.Bounce,{right:!0,delay:200},r.a.createElement(je,{language:e.language}))),r.a.createElement(Y,null)))},Oe=a(112),Ie=a(169),Te=a.n(Ie),Ae=a(168),ze=a.n(Ae),Pe=a(26),Le=a(170),De=a.n(Le),Be=a(509),Me=a(8),Re=Object(Me.a)((function(e){return{root:{"& label.Mui-focused":{color:e.palette.primary.dark,fontSize:"1rem !important",fontWeight:"bold !important"},"& label":{color:e.palette.primary.main,fontWeight:"bold"},"& .MuiOutlinedInput-root":{"& fieldSet":{borderColor:e.palette.primary.main},"&:hover fieldSet":{borderColor:e.palette.primary.dark},"&.Mui-focused fieldSet":{borderColor:e.palette.primary.dark}}}}}))(Be.a),He=Object(y.a)((function(e){return{form:{display:"flex",alignItems:"center",margin:"0 3rem"},button:{marginTop:"2rem",color:e.palette.primary.dark,borderColor:e.palette.primary.dark,height:"5rem"}}})),Je=function(e){var t=He(),a=Object(Pe.a)(),o={english:[{fieldName:"name",fieldLabel:"Name",required:!0,style:{color:a.palette.primary.main}},{fieldName:"email",fieldLabel:"Email",multiline:!1,required:!0,style:{color:a.palette.primary.main}},{fieldName:"companyName",fieldLabel:"Company Name",multiline:!1,style:{color:a.palette.primary.main}},{fieldName:"message",fieldLabel:"Message",multiline:!0,required:!0,style:{color:a.palette.primary.main,height:"6rem"}}],czech:[{fieldName:"name",fieldLabel:"Jm\xe9no",required:!0,style:{color:a.palette.primary.main}},{fieldName:"email",fieldLabel:"E-mail",multiline:!1,required:!0,style:{color:a.palette.primary.main}},{fieldName:"companyName",fieldLabel:"N\xe1zev firmy",multiline:!1,style:{color:a.palette.primary.main}},{fieldName:"message",fieldLabel:"Zpr\xe1va",multiline:!0,required:!0,style:{color:a.palette.primary.main,height:"6rem"}}]},l=(o="czech"===e.language?o.czech:o.english).reduce((function(e,t){return Object(p.a)(Object(p.a)({},e),{},Object(X.a)({},t.fieldName,""))}),{}),c=Object(n.useState)(l),m=Object(i.a)(c,2),s=m[0],u=m[1],d=Object(Oe.b)({defaultValues:l,mode:"onChange"}),g=function(e){console.log(e)};return r.a.createElement(f.a,{component:"div",className:t.form},r.a.createElement("form",{noValidate:!0,onSubmit:function(){return d.handleSubmit(g)}},o.map((function(t,a){var n=t.required,o=void 0!==n&&n,l=t.multiline,i=void 0!==l&&l,c=t.fieldName,m=t.fieldLabel,g=t.style;return r.a.createElement(Oe.a,{as:Re,control:d.control,key:a,required:o,fullWidth:!0,label:m,variant:"outlined",inputProps:{style:Object(p.a)(Object(p.a)({},g),{},{borderColor:d.errors[c]&&"red"}),name:c,onChange:function(e){u(Object(p.a)(Object(p.a)({},s),{},Object(X.a)({},c,e.target.value)))}},margin:"dense",size:"medium",multiline:i,name:c,rules:{required:{value:o,message:"czech"===e.language?"TOTO POLE JE POVINN\xc9":"THIS FIELD IS REQUIRED"},validate:function(t){return Te()(t)||"email"!==c?void 0:"czech"===e.language?"TOTO POLE MUS\xcd B\xddT V E-MAIL FORM\xc1TU":"THIS FIELD MUST BE IN EMAIL FORMAT"}},error:Boolean(d.errors[c]),helperText:d.errors[c]?d.errors[c].message:""})})),r.a.createElement(ye.a,{type:"submit",className:t.button,variant:"outlined",fullWidth:!0,endIcon:r.a.createElement(De.a,null),onClick:function(e){!function(e){e.preventDefault(),ze.a.send("service_hkk3dfq","template_xppnjzp",s,"user_FteZf7X04wlh7J8p0Lcrn").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)}))}(e),d.reset()},disabled:!d.formState.isValid},"czech"===e.language?"ODESLAT":"SEND")))},We=Object(y.a)((function(e){return{pageContainer:Object(X.a)({display:"flex",flexDirection:"column",minHeight:"calc(100vh - 8px)",height:"100%",background:"rgba(255, 255, 255, 1)"},e.breakpoints.between("xs","sm"),{minHeight:"0"}),pageItem:Object(X.a)({flex:"1 0 0",display:"flex",flexDirection:"column",alignSelf:"center",textAlign:"center",alignItems:"center",width:"100%",position:"relative",justifyContent:"space-evenly"},e.breakpoints.between("xs","sm"),{flex:"0",marginBottom:"1rem"}),heading:{color:e.palette.primary.dark,display:"flex",flexDirection:"column",justifyContent:"center",margin:"1rem"}}})),Ve=function(e){var t=We(),a={english:{heading:"CONTACT ME"},czech:{heading:"KONTAKTUJTE M\u011a"}};return a="czech"===e.language?a.czech:a.english,r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{component:"div",className:t.pageContainer,id:"contacts"},r.a.createElement(f.a,{component:"div",className:t.pageItem},r.a.createElement(L.Bounce,{left:!0},r.a.createElement(f.a,{component:"div",className:t.heading},r.a.createElement(j.a,{variant:"h3"},a.heading))),r.a.createElement(L.Bounce,{right:!0,delay:200},r.a.createElement(Je,{language:e.language})))))},Ge=a(171),Fe=a.n(Ge),Ue=Object(y.a)({particlesCanva:{position:"absolute !important",opacity:"0.6",top:0,left:0,width:"100%",height:"100%"}}),qe=function(){var e=Ue(),t=Object(re.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Fe.a,{canvasClassName:e.particlesCanva,params:{particles:{number:{value:200,densitiy:{enable:!0,value_area:900}},shape:{type:"circle",stroke:{width:.4,color:""}},size:{value:2,random:!0,anim:{enable:!0,speed:5,size_min:.1,sync:!0}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:.1,sync:!0}},color:{value:t.palette.primary.main},lineLinked:{color:{value:t.palette.primary.dark}}}}}))},Ze=a(454),Ye=Object(Ze.a)((function(e){return{footer:{background:e.palette.primary.dark,height:"3rem",display:"flex",justifyContent:"center",alignItems:"center",color:e.palette.secondary.main},text:{margin:"0",fontSize:"1rem"}}})),_e=function(){var e=Ye();return r.a.createElement(f.a,{className:e.footer},r.a.createElement("footer",null,r.a.createElement(L.Bounce,{left:!0},r.a.createElement("p",{className:e.text},"\xa9 Petr \u017dof\xe1k 2020"))))},Ke=Object(m.a)({palette:{primary:{main:"#0f52ba",success:"#b4ff99",error:"#ed8e8e"},secondary:{main:"#ffdb97",light:"#fffad1"}},typography:{fontFamily:["Saira"].join(",")},breakpoints:{values:{xs:0,sm:600,md:960,lg:1280,xl:1920,laptop:1170}}});var Xe=function(){var e=localStorage.getItem("language"),t=Object(n.useState)(e||"english"),a=Object(i.a)(t,2),o=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{theme:Ke},r.a.createElement(qe,null),r.a.createElement(c.a,null),r.a.createElement(W,{language:o,handleSetLanguage:function(e){l(e),function(e){localStorage.setItem("language",e)}(e)}}),r.a.createElement(K,{language:o}),r.a.createElement(ce,{language:o}),r.a.createElement(we,{language:o}),r.a.createElement(Ve,{language:o}),r.a.createElement(_e,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qe=a(104);l.a.render(r.a.createElement(Qe.BrowserRouter,null,r.a.createElement(Xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e,t,a){e.exports=a.p+"static/media/avatar.aeaec6b0.png"}},[[184,1,2]]]);
//# sourceMappingURL=main.a54cb846.chunk.js.map
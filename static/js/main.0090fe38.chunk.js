(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,a,t){e.exports=t(71)},44:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(4),l=t(5),r=t(7),c=t(6),s=t(1),o=t.n(s),i=t(31),m=t.n(i),d=(t(44),t(2)),u=Object(d.f)((function(e){return Object(s.useEffect)((function(){window.scrollTo(0,0)})),e.children})),g=t(20),E=t.n(g),p=t(13),h=t(14),v=t(8),f=t(34),b=t.n(f),N=[{Social:o.a.createElement(v.a,null),link:"https://www.facebook.com/dieguitobugs/"},{Social:o.a.createElement(v.c,null),link:"https://www.linkedin.com/in/diegobugs/"},{Social:o.a.createElement(v.d,null),link:"https://twitter.com/DieguitoBugs"},{Social:o.a.createElement(v.b,null),link:"https://github.com/diegobugs"}],w=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).menuTrigger=l.menuTrigger.bind(Object(h.a)(l)),l.CLoseMenuTrigger=l.CLoseMenuTrigger.bind(Object(h.a)(l)),l.stickyHeader=l.stickyHeader.bind(Object(h.a)(l)),window.addEventListener("load",(function(){console.log("All assets are loaded")})),l}return Object(l.a)(t,[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},{key:"stickyHeader",value:function(){}},{key:"render",value:function(){window.addEventListener("scroll",(function(){window.scrollY>100?document.querySelector(".header--fixed").classList.add("sticky"):document.querySelector(".header--fixed").classList.remove("sticky")}));var e=document.querySelectorAll(".has-droupdown > a");for(var a in e)e.hasOwnProperty(a)&&(e[a].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});var t,n=this.props,l=n.logo,r=n.color,c=void 0===r?"default-color":r;return t="light"===l?o.a.createElement("img",{src:"".concat(".","/assets/images/logo/logo-light.png"),alt:"DB"}):"dark"===l?o.a.createElement("img",{src:"".concat(".","/assets/images/logo/logo-dark.png"),alt:"DB"}):"symbol-dark"===l?o.a.createElement("img",{src:"".concat(".","/assets/images/logo/logo-symbol-dark.png"),alt:"Digital Agency"}):"symbol-light"===l?o.a.createElement("img",{src:"".concat(".","/assets/images/logo/logo-symbol-light.png"),alt:"Digital Agency"}):o.a.createElement("img",{src:"".concat(".","/assets/images/logo/logo.png"),alt:"DB"}),o.a.createElement("header",{className:"header-area header-style-two header--fixed ".concat(c)},o.a.createElement("div",{className:"header-wrapper"},o.a.createElement("div",{className:"header-left d-flex align-items-center"},o.a.createElement("div",{className:"logo"},o.a.createElement("a",{href:this.props.homeLink},t)),o.a.createElement("nav",{className:"mainmenunav d-lg-block ml--50"},o.a.createElement(b.a,{className:"mainmenu",items:["home","about","portfolio","contact"],currentClassName:"is-current",offset:-200},o.a.createElement("li",null,o.a.createElement("a",{href:"#home"},"Home")),o.a.createElement("li",null,o.a.createElement("a",{href:"#about"},"About")),o.a.createElement("li",null,o.a.createElement("a",{href:"#portfolio"},"Portfolio")),o.a.createElement("li",null,o.a.createElement("a",{href:"#contact"},"Contact"))))),o.a.createElement("div",{className:"header-right"},o.a.createElement("div",{className:"social-share-inner d-none d-sm-block"},o.a.createElement("ul",{className:"social-share social-style--2 color-black d-flex justify-content-start liststyle"},N.map((function(e,a){return o.a.createElement("li",{key:a},o.a.createElement("a",{href:"".concat(e.link),target:"_blank",rel:"noopener noreferrer"},e.Social))})))),o.a.createElement("div",{className:"header-btn"},o.a.createElement("a",{className:"btn-default btn-border btn-opacity",target:"_blank",href:"".concat(".","/assets/cv.pdf")},o.a.createElement("span",null,"Download my CV"))),o.a.createElement("div",{className:"humberger-menu d-block d-lg-none pl--20 pl_sm--10"},o.a.createElement("span",{onClick:this.menuTrigger,className:"menutrigger text-white"},o.a.createElement(p.c,null))),o.a.createElement("div",{className:"close-menu d-block d-lg-none"},o.a.createElement("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger"},o.a.createElement(p.d,null))))))}}]),t}(s.Component),y=[{Social:o.a.createElement(v.a,null),link:"https://www.facebook.com/dieguitobugs/"},{Social:o.a.createElement(v.c,null),link:"https://www.linkedin.com/in/diegobugs/"},{Social:o.a.createElement(v.d,null),link:"https://twitter.com/DieguitoBugs"},{Social:o.a.createElement(v.b,null),link:"https://github.com/diegobugs"}],k=function(){return o.a.createElement("div",{className:"footer-style-2 ptb--30 bg_color--6"},o.a.createElement("div",{className:"wrapper plr--50 plr_sm--20"},o.a.createElement("div",{className:"row align-items-center justify-content-between"},o.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},o.a.createElement("div",{className:"inner"},o.a.createElement("div",{className:"logo text-center text-sm-left mb_sm--20"},o.a.createElement("a",{href:"/me"},o.a.createElement("img",{src:"".concat(".","/assets/images/logo/logo-light.png"),alt:"DB"}))))),o.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},o.a.createElement("div",{className:"inner text-center"},o.a.createElement("ul",{className:"social-share rn-lg-size d-flex justify-content-center liststyle"},y.map((function(e,a){return o.a.createElement("li",{key:a},o.a.createElement("a",{href:"".concat(e.link),target:"_blank",rel:"noopener noreferrer"},e.Social))}))))))))},S=t(15),j=t(74),L=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.tabStyle;return o.a.createElement("div",null,o.a.createElement("div",{className:"tabs-area"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-lg-6"},o.a.createElement(S.d,null,o.a.createElement(S.b,{className:"".concat(e)},o.a.createElement(S.a,null,"Skills"),o.a.createElement(S.a,null,"Experience"),o.a.createElement(S.a,null,"Education")),o.a.createElement(S.c,null,o.a.createElement("div",{className:"single-tab-content"},o.a.createElement("div",{className:"rn-progress-bar progress-bar--1 mt_dec--10 row"},o.a.createElement("div",{className:"col col-lg-6"},o.a.createElement("div",{className:"single-progress"},o.a.createElement("h6",{className:"title"},"Javascript"),o.a.createElement(j.a,{now:100}),o.a.createElement("span",{className:"label"},"100%")),o.a.createElement("div",{className:"single-progress"},o.a.createElement("h6",{className:"title"},"ReactJS"),o.a.createElement(j.a,{now:70}),o.a.createElement("span",{className:"label"},"70%")),o.a.createElement("div",{className:"single-progress"},o.a.createElement("h6",{className:"title"},"React Native"),o.a.createElement(j.a,{now:90}),o.a.createElement("span",{className:"label"},"90%")),o.a.createElement("div",{className:"single-progress"},o.a.createElement("h6",{className:"title"},"Kotlin"),o.a.createElement(j.a,{now:50}),o.a.createElement("span",{className:"label"},"50%")),o.a.createElement("div",{className:"single-progress"},o.a.createElement("h6",{className:"title"},"PHP/Laravel"),o.a.createElement(j.a,{now:65}),o.a.createElement("span",{className:"label"},"65%"))),o.a.createElement("div",{className:"col col-lg-6"},o.a.createElement("div",{className:"single-progress"},o.a.createElement("h6",{className:"title"},"HTML/CSS"),o.a.createElement(j.a,{now:70}),o.a.createElement("span",{className:"label"},"70%")),o.a.createElement("div",{className:"single-progress"},o.a.createElement("h6",{className:"title"},"APIs"),o.a.createElement(j.a,{now:90}),o.a.createElement("span",{className:"label"},"90%")),o.a.createElement("div",{className:"single-progress"},o.a.createElement("h6",{className:"title"},"MySQL/PostgreSQL"),o.a.createElement(j.a,{now:95}),o.a.createElement("span",{className:"label"},"95%")),o.a.createElement("div",{className:"single-progress"},o.a.createElement("h6",{className:"title"},"SAP HANA"),o.a.createElement(j.a,{now:80}),o.a.createElement("span",{className:"label"},"80%")),o.a.createElement("div",{className:"single-progress"},o.a.createElement("h6",{className:"title"},"GIT"),o.a.createElement(j.a,{now:85}),o.a.createElement("span",{className:"label"},"85%")))))),o.a.createElement(S.c,null,o.a.createElement("div",{className:"single-tab-content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("div",null,o.a.createElement("span",{className:"fontWeight600"},"Front-end developer"),o.a.createElement("span",null," - Mango Payments S.A"))," ",o.a.createElement("div",null,"21/12/2020 - 10/12/2021"),o.a.createElement("div",null,"Skills:"," ",o.a.createElement("span",{className:"tag theme-gradient"},"React Native"),o.a.createElement("span",{className:"tag theme-gradient"},"Git"),o.a.createElement("span",{className:"tag theme-gradient"},"Kotlin")),o.a.createElement("div",null,"I am part of the front-end development team of Mango, an eWallet. Currently I'm working on the main mobile application, with React Native for both Android and iOS. We are using a variety of technologies and Agile management methodology, like React NaWve, GIT (gitlab), SourceTree, Zeplin, Postman, Slack, and Scrum.")),o.a.createElement("li",null,o.a.createElement("div",null,o.a.createElement("span",{className:"fontWeight600"},"Professor"),o.a.createElement("span",null," - UNAE"))," ",o.a.createElement("div",null,"01/08/2019 - 01-03-2020"),o.a.createElement("div",null,'I took the subjects "Programming Logic" and "Systems Analysis and Design".')),o.a.createElement("li",null,o.a.createElement("div",null,o.a.createElement("span",{className:"fontWeight600"},"IT lead"),o.a.createElement("span",null," - Eno Bronstrup S.A"))," ",o.a.createElement("div",null,"01/01/2019 - 18/12/2020"),o.a.createElement("div",null,"Skills:"," ",o.a.createElement("span",{className:"tag theme-gradient"},"MS Power BI"),o.a.createElement("span",{className:"tag theme-gradient"},"Git"),o.a.createElement("span",{className:"tag theme-gradient"},"SAP B1"),o.a.createElement("span",{className:"tag theme-gradient"},"SAP HANA"),o.a.createElement("span",{className:"tag theme-gradient"},"SQL Server"),o.a.createElement("span",{className:"tag theme-gradient"},"MySQL"),o.a.createElement("span",{className:"tag theme-gradient"},"PHP/Laravel")),o.a.createElement("div",null,"In EBSA I used to be involved in software development activities, assistance to managers in business reports and support for decision making using Data Analysis technologies such as Power BI. I work closely with the accounting department giving support and working with SAP ERP software implementation.")),o.a.createElement("li",null,o.a.createElement("div",null,o.a.createElement("span",{className:"fontWeight600"},"Software developer"),o.a.createElement("span",null," - Eno Bronstrup S.A"))," ",o.a.createElement("div",null,"01/12/2016 - 31/12/2018"),o.a.createElement("div",null,"Skills:"," ",o.a.createElement("span",{className:"tag theme-gradient"},"Genexus"),o.a.createElement("span",{className:"tag theme-gradient"},"PHP/Laravel"),o.a.createElement("span",{className:"tag theme-gradient"},"SQL Server")),o.a.createElement("div",null,"Develop software capable of facilitaing tasks and information management within the companies of the Selecta Group. My role was developing all kinds of computer tools capable of improving performance and operations within the Grupo Selecta holding. The functions and modules developed comply with the areas of agriculture, cattle, accouning, financial. I have worked on implementation of a bug tracking software. Definition and implementation of development flow: I was in charge of designing a development flow for the IT team, where we separated the analysis / development / tesing / implementation tasks in order to have documented the process of launching new features, versioning and quality control of the software product.")),o.a.createElement("li",null,o.a.createElement("div",null,o.a.createElement("span",{className:"fontWeight600"},"User support analyst"),o.a.createElement("span",null," - Banco Regional"))," ",o.a.createElement("div",null,"01/10/2016 - 30/11/2016"),o.a.createElement("div",null,"Skills:"," ",o.a.createElement("span",{className:"tag theme-gradient"},"Oracle Report Builder"),o.a.createElement("span",{className:"tag theme-gradient"},"Oracle Form Builder"),o.a.createElement("span",{className:"tag theme-gradient"},"PL/SQL")),o.a.createElement("div",null,"I had a small opportunity to meet and collaborate with the excellent technology team in this institution. I worked as support for users of the ITGF Banking software, developing reports and giving help in technological solutions. We used PL/SQL, Oracle Report Builder and Oracle Form Builder."))))),o.a.createElement(S.c,null,o.a.createElement("div",{className:"single-tab-content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Specialization in higher education",o.a.createElement("span",null," ","- Universidad Cat\xf3lica Nuestra Se\xf1ora de la Asunci\xf3n \u2013 Encarnaci\xf3n, Itap\xfaa."))," ","2019"),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"BCs in Information Engineering",o.a.createElement("span",null," ","- Universidad Cat\xf3lica Nuestra Se\xf1ora de la Asunci\xf3n \u2013 Encarnaci\xf3n, Itap\xfaa."))," ","2017"),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Computer technician",o.a.createElement("span",null," ","- Universidad Cat\xf3lica Nuestra Se\xf1ora de la Asunci\xf3n \u2013 Encarnaci\xf3n, Itap\xfaa."))," ","2015"),o.a.createElement("li",null,o.a.createElement("a",{href:"/service"},"Bachelor of basic sciences",o.a.createElement("span",null," ","- Colegio Privado Concordia \u2013 Hohenau, Itap\xfaa."))," ","2007"))))))))))}}]),t}(s.Component),O=L,x=t(38),T=t(37),C=function(){return o.a.createElement("p",{className:"success-message"},"Your Message has been successfully sent. I will contact you soon.")};var A=function(e){e.props;var a=Object(s.useState)(!1),t=Object(x.a)(a,2),n=t[0],l=t[1];return setTimeout((function(){l(!1)}),5e3),o.a.createElement("div",{className:"form-wrapper"},o.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault(),T.a.sendForm("service_iwz53bi","template_geor1tz",e.target,"user_FB7TepLxT89hXXBAL9WgY").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),l(!0)}},o.a.createElement("div",{className:"rn-form-group"},o.a.createElement("input",{type:"text",name:"fullname",placeholder:"Your Name",required:!0})),o.a.createElement("div",{className:"rn-form-group"},o.a.createElement("input",{type:"email",name:"email",placeholder:"Your Email",required:!0})),o.a.createElement("div",{className:"rn-form-group"},o.a.createElement("input",{type:"text",name:"phone",placeholder:"Phone Number",required:!0})),o.a.createElement("div",{className:"rn-form-group"},o.a.createElement("input",{type:"text",name:"subject",placeholder:"Subject",required:!0})),o.a.createElement("div",{className:"rn-form-group"},o.a.createElement("textarea",{name:"message",placeholder:"Your Message",required:!0})),o.a.createElement("div",{className:"rn-form-group"},o.a.createElement("button",{className:"btn-default",type:"submit",value:"submit",name:"submit",id:"mc-embedded-subscribe"},"Submit Now")),o.a.createElement("div",{className:"rn-form-group"},n?o.a.createElement(C,null):null)))},P=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"contact-form--1"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row row--35 justify-content-center"},o.a.createElement("div",{className:"col-lg-6 order-2 order-lg-1"},o.a.createElement("div",{className:"section-title text-left mb--50"},o.a.createElement("span",{className:"subtitle"},"Let's Say Hi"),o.a.createElement("h2",{className:"title"},"Get in touch."),o.a.createElement("div",{className:"im_address_inner"},o.a.createElement("div",{className:"im_address mt--5"},o.a.createElement("span",null,"Contact Email:"),o.a.createElement("a",{className:"link im-hover",href:"mailto:diego.f.bugs@gmail.com"},"diego.f.bugs@gmail.com")))),o.a.createElement(A,null)))))}}]),t}(s.Component),_=P,B=t(36),I=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(B.Helmet,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,this.props.pageTitle),o.a.createElement("meta",{name:"robots",content:"noindex, follow"}),o.a.createElement("meta",{name:"description",content:"Diego Bugs"}),o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"})))}}]),t}(s.Component),D=I,M=t(17),H=[{image:o.a.createElement("img",{src:"".concat(".","/assets/images/portfolio/portfolio-1.jpg"),alt:"CUBI, ERP software"}),category:"Development",title:"Software Development",description:"Cubi was an ERP Software. Technologies: PHP, Laravel, MySQL"},{image:o.a.createElement("img",{src:"".concat(".","/assets/images/portfolio/portfolio-2.jpg"),alt:"Orevitae"}),category:"Development",title:"Web Development",description:"Orevitae was an social network. Technologies: PHP, MySQL, Javascript"},{image:o.a.createElement("img",{src:"".concat(".","/assets/images/portfolio/portfolio-3.jpg"),alt:"Mango"}),category:"Application",title:"React Native Template",description:"A React Native template. Technologies: React Native.",link:"https://github.com/diegobugs/demo-react-native-template-ts"}],W=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,a=e.column,t=e.styevariation,n=H.slice(0,this.props.item);return o.a.createElement(o.a.Fragment,null,n.map((function(e,n){return o.a.createElement("div",{className:"".concat(a),key:n},o.a.createElement("div",{className:"im_portfolio ".concat(t)},o.a.createElement("div",{className:"thumbnail_inner"},o.a.createElement("div",{className:"thumbnail"},o.a.createElement(M.b,{to:"/portfolio-details"},e.image))),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"inner"},o.a.createElement("div",{className:"portfolio_heading"},o.a.createElement("div",{className:"category_list"},o.a.createElement(M.b,{to:"/portfolio-details"},e.category)),o.a.createElement("h4",{className:"title"},o.a.createElement(M.b,{to:"/portfolio-details"},e.title))),o.a.createElement("div",{className:"portfolio_hover"},o.a.createElement("p",null,e.description))))))})))}}]),t}(s.Component),q=W,R=[{textPosition:"text-left",category:"Software Engineer, Front-end developer.",title:"Hi, I\u2019m <span>Diego Bugs</span>",description:"Welcome to my personal website.",buttonText:"Download my CV",buttonLink:"".concat(".","/assets/cv.pdf")}],U=function(){return o.a.createElement("div",null,o.a.createElement(D,{pageTitle:"Diego Bugs"}),o.a.createElement(w,{homeLink:"/me",logo:"symbol-dark",color:"color-black"}),o.a.createElement("div",{id:"home",className:"fix"},o.a.createElement("div",{className:"slider-wrapper"},R.map((function(e,a){return o.a.createElement("div",{className:"slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25",key:a},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"inner ".concat(e.textPosition)},e.category?o.a.createElement("span",{className:"theme-color font-700"},e.category):"",e.title?o.a.createElement("h1",{className:"title theme-gradient",dangerouslySetInnerHTML:{__html:e.title}}):"",e.description?o.a.createElement("p",{className:"description"},e.description):"",e.buttonText?o.a.createElement("div",{className:"slide-btn mt--20"},o.a.createElement("a",{className:"btn-default",href:"".concat(e.buttonLink),target:"_blank",rel:"noopener noreferrer"},e.buttonText)):"")))))})))),o.a.createElement("div",{id:"about",className:"fix"},o.a.createElement("div",{className:"about-area ptb--120 bg_color--5"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"section-title text-center mb--30 mb_sm--0"},o.a.createElement("span",{className:"subtitle"},"Details about me"),o.a.createElement("h2",{className:"title"},"About Me"),o.a.createElement("p",{className:"description mt_dec--20"},"I am a software engineer looking for personal and professional growth, always being pro-active, with a good work ethic and enthusiasm. I have always been a person who never gives up.")),o.a.createElement("div",{className:"row mt--30"},o.a.createElement(O,{tabStyle:"tab-style--1 justify-content-center"}))))))),o.a.createElement("div",{id:"portfolio",className:"fix"},o.a.createElement("div",{className:"portfolio-area pb--120 bg_color--5"},o.a.createElement("div",{className:"portfolio-sacousel-inner"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"section-title text-center mb--30 mb_sm--0"},o.a.createElement("span",{className:"subtitle"},"Projects I have worked on"),o.a.createElement("h2",{className:"title"},"Some projects"),o.a.createElement("p",null,"These are some of the projects I've worked on. ",o.a.createElement("br",null))))),o.a.createElement("div",{className:"row"},o.a.createElement(q,{styevariation:"text-center mt--40",column:"col-lg-4 col-md-6 col-sm-6 col-12",item:"6"})),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"view-more-btn mt--60 mt_sm--30 text-center"},o.a.createElement("a",{className:"btn-default",href:"https://www.linkedin.com/in/diegobugs/",target:"_blank"},o.a.createElement("span",{className:"mr--10"},o.a.createElement(p.b,null)),o.a.createElement("span",null,"View projects"))))))))),o.a.createElement("div",{id:"contact",className:"fix"},o.a.createElement("div",{className:"rn-contact-area ptb--120"},o.a.createElement(_,null))),o.a.createElement(k,null),o.a.createElement("div",{className:"backto-top"},o.a.createElement(E.a,{showUnder:160},o.a.createElement(p.a,null))))},F=[{Social:o.a.createElement(v.a,null),link:"https://www.facebook.com/dieguitobugs/"},{Social:o.a.createElement(v.c,null),link:"https://www.linkedin.com/in/diegobugs/"},{Social:o.a.createElement(v.d,null),link:"https://twitter.com/DieguitoBugs"},{Social:o.a.createElement(v.b,null),link:"https://github.com/diegobugs"}],G=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).menuTrigger=l.menuTrigger.bind(Object(h.a)(l)),l.CLoseMenuTrigger=l.CLoseMenuTrigger.bind(Object(h.a)(l)),l.stickyHeader=l.stickyHeader.bind(Object(h.a)(l)),window.addEventListener("load",(function(){console.log("All assets are loaded")})),l}return Object(l.a)(t,[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},{key:"stickyHeader",value:function(){}},{key:"render",value:function(){window.addEventListener("scroll",(function(){window.scrollY>100?document.querySelector(".header--fixed").classList.add("sticky"):document.querySelector(".header--fixed").classList.remove("sticky")}));var e=document.querySelectorAll(".has-droupdown > a");for(var a in e)e.hasOwnProperty(a)&&(e[a].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});var t,n=this.props,l=n.logo,r=n.color,c=void 0===r?"default-color":r;return t="light"===l?o.a.createElement("img",{src:"".concat(".","/assets/images/logo/logo-light.png"),alt:"DB"}):"dark"===l?o.a.createElement("img",{src:"".concat(".","/assets/images/logo/logo-dark.png"),alt:"DB"}):"symbol-dark"===l?o.a.createElement("img",{src:"".concat(".","/assets/images/logo/logo-symbol-dark.png"),alt:"Digital Agency"}):"symbol-light"===l?o.a.createElement("img",{src:"".concat(".","/assets/images/logo/logo-symbol-light.png"),alt:"Digital Agency"}):o.a.createElement("img",{src:"".concat(".","/assets/images/logo/logo.png"),alt:"DB"}),o.a.createElement("header",{className:"header-area header-style-two header--fixed ".concat(c)},o.a.createElement("div",{className:"header-wrapper"},o.a.createElement("div",{className:"header-left d-flex align-items-center"},o.a.createElement("div",{className:"logo"},o.a.createElement("a",{href:this.props.homeLink},t))),o.a.createElement("div",{className:"header-right"},o.a.createElement("div",{className:"social-share-inner d-none d-sm-block"},o.a.createElement("ul",{className:"social-share social-style--2 color-black d-flex justify-content-start liststyle"},F.map((function(e,a){return o.a.createElement("li",{key:a},o.a.createElement("a",{href:"".concat(e.link),target:"_blank",rel:"noopener noreferrer"},e.Social))})))),o.a.createElement("div",{className:"header-btn"},o.a.createElement("a",{className:"btn-default btn-border btn-opacity",target:"_blank",href:"".concat(".","/assets/cv.pdf")},o.a.createElement("span",null,"Download my CV"))),o.a.createElement("div",{className:"humberger-menu d-block d-lg-none pl--20 pl_sm--10"},o.a.createElement("span",{onClick:this.menuTrigger,className:"menutrigger text-white"},o.a.createElement(p.c,null))),o.a.createElement("div",{className:"close-menu d-block d-lg-none"},o.a.createElement("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger"},o.a.createElement(p.d,null))))))}}]),t}(s.Component),Q=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(G,{homeLink:"/",logo:"symbol-dark",color:"color-black"}),o.a.createElement("div",{className:"error-page-inner bg_color--5"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"inner"},o.a.createElement("h1",{className:"title theme-gradient"},"404!"),o.a.createElement("h3",{className:"sub-title"},"Page not found"),o.a.createElement("span",null,"The page you were looking for could not be found."),o.a.createElement("div",{className:"error-button"},o.a.createElement("a",{className:"btn-default",href:"/"},"Back To Homepage"))))))),o.a.createElement("div",{className:"backto-top"},o.a.createElement(E.a,{showUnder:160},o.a.createElement(p.a,null))),o.a.createElement(k,null))}}]),t}(s.Component),Y=Q,J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var V=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(M.a,{basename:"."},o.a.createElement(u,null,o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/",component:U}),o.a.createElement(d.a,{path:"/404",component:Y}),o.a.createElement(d.a,{component:Y}))))}}]),t}(s.Component);m.a.render(o.a.createElement(V,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat(".","/service-worker.js");J?(!function(e,a){fetch(e).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):z(a,e)}))}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.0090fe38.chunk.js.map
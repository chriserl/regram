(this.webpackJsonpregram=this.webpackJsonpregram||[]).push([[0],[,function(e,a,t){e.exports=t.p+"static/media/prof4.09948ef9.jpg"},,,,,,,function(e,a,t){e.exports=t.p+"static/media/prof5.0370e435.jpg"},function(e,a,t){e.exports=t.p+"static/media/prof7.d5c46751.jpg"},function(e,a,t){e.exports=t.p+"static/media/prof8.362b8d22.jpg"},,function(e,a,t){e.exports=t.p+"static/media/prof1.c1cfd516.jpg"},function(e,a,t){e.exports=t.p+"static/media/prof2.7acd4550.jpg"},function(e,a,t){e.exports=t.p+"static/media/prof3.68fdbeae.jpg"},,,function(e,a,t){e.exports=t.p+"static/media/loupe.b2feb1c7.svg"},function(e,a,t){e.exports=t.p+"static/media/bell.580b9bc9.svg"},function(e,a,t){e.exports=t.p+"static/media/jade.003fa517.jpg"},function(e,a,t){e.exports=t.p+"static/media/prof11.500cbff9.jpg"},,,,,,function(e,a,t){},,,,function(e,a,t){e.exports=t.p+"static/media/instagram.82526960.svg"},function(e,a,t){e.exports=t.p+"static/media/cancel.cad70081.svg"},function(e,a,t){e.exports=t.p+"static/media/menu.4a9a687c.svg"},function(e,a,t){e.exports=t.p+"static/media/logout.e75855a1.svg"},function(e,a,t){e.exports=t.p+"static/media/saved.b76d3403.svg"},,function(e,a,t){e.exports=t.p+"static/media/menu.ca394ec8.svg"},function(e,a,t){e.exports=t.p+"static/media/envelope.e41f997a.svg"},function(e,a,t){e.exports=t.p+"static/media/play.c65f6a86.svg"},function(e,a,t){e.exports=t.p+"static/media/prof6.7f705ae8.jpg"},function(e,a,t){e.exports=t.p+"static/media/prof9.c72d027f.jpg"},function(e,a,t){e.exports=t.p+"static/media/heart.7746f5e4.svg"},function(e,a,t){e.exports=t.p+"static/media/speech-bubble.0ec68f32.svg"},function(e,a,t){e.exports=t.p+"static/media/hdimage.625282be.png"},,,,function(e,a,t){e.exports=t(57)},,,,,,,,,,function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),m=t(27),l=t.n(m),r=t(7),c=t(2),i=t(28),o=t(29),p=t(45),u=t(44),N=n.a.createContext(),d=t(46),g=t(15),E=t(30),f=t.n(E);function v(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{href:e.locale,className:"brand"},n.a.createElement("img",{src:f.a,alt:"Gram icon",className:"icon brand-icon"}),n.a.createElement("p",{className:"brand-name h2"},"Gram")))}var h=t(31),k=t.n(h),x=t(32),b=t.n(x),y=t(17),C=t.n(y),S=t(18),I=t.n(S),L=t(33),j=t.n(L),w=t(34),U=t.n(w);function F(){var e=Object(s.useState)((function(){return{feed:{name:"Feed",link:"",className:"item-active",img:b.a},explore:{name:"Explore",link:"explore",className:"",img:C.a},notifications:{name:"Notifications",link:"notifications",className:"",img:I.a},saved:{name:"Saved",link:"saved",className:"",img:U.a},logout:{name:"Logout",link:"logout",className:"logout",img:j.a}}})),a=Object(g.a)(e,2),t=a[0],m=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(N.Consumer,null,(function(e){var a=e.state;return n.a.createElement("aside",{className:e.state.sideNavState},n.a.createElement("div",{className:"aside-header"},n.a.createElement(v,{locale:"./regram"}),n.a.createElement("span",{className:"close-ham",onClick:e.toggleSn},n.a.createElement("img",{src:k.a,alt:"close sidemenu icon",className:"link-icon"}))),n.a.createElement("section",{className:"profile-content"},n.a.createElement("div",{className:"profile-summary"},n.a.createElement("div",{className:"story-unseen image"},n.a.createElement("img",{src:a.profileState.profileImage,alt:"Profile",className:"profile-image"})),n.a.createElement("p",{className:"profile-name h4"},a.profileState.profileName),n.a.createElement("p",{className:"profile-link ps"},"@".concat(a.profileState.profileLink))),n.a.createElement("div",{className:"profile-stats"},n.a.createElement("span",{className:"posts stat"},n.a.createElement("p",{className:"posts-number plb"},a.profileState.postsNum),n.a.createElement("p",{className:"ps stat-name"},"Posts")),n.a.createElement("span",{className:"followers stat"},n.a.createElement("p",{className:"followers-number plb"},a.profileState.followersNum),n.a.createElement("p",{className:"ps stat-name"},"Followers")),n.a.createElement("span",{className:"following stat"},n.a.createElement("p",{className:"following-number plb"},a.profileState.followingNum),n.a.createElement("p",{className:"ps stat-name"},"Following"))),n.a.createElement("ul",{className:"side-menu"},Object.keys(t).map((function(e){return n.a.createElement("li",{onClick:function(){return a=e,void m((function(e){return Object.keys(e).forEach((function(a){e[a].className=""})),e[a].className="".concat(e[a].className," item-active"),Object(d.a)({},e)}));var a},className:"menu-item ".concat(t[e].className),key:t[e].name},n.a.createElement(r.c,{to:"/regram/".concat(t[e].link),className:"menu-link pl"},n.a.createElement("img",{src:t[e].img,alt:"menu icon",className:"link-icon"}),t[e].name))})))))})))}var O=t(36),M=t.n(O),W=t(37),z=t.n(W);function P(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",null,n.a.createElement("button",{className:"hamBtn",onClick:e.toggleSidenav},n.a.createElement("img",{src:M.a,alt:"side navigation icon",className:"hamburger-icon"})),n.a.createElement("form",null,n.a.createElement("div",{className:"form-control"},n.a.createElement("img",{src:C.a,alt:"search icon",className:"search-icon link-icon"}),n.a.createElement("input",{type:"search",name:"main-search",id:"main-search",placeholder:"Seach","aria-placeholder":"Search"}))),n.a.createElement("ul",{className:"nav-items"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("img",{src:I.a,alt:"notifications icon",className:"nav-icon link-icon"}),!0===e.msgNotif&&n.a.createElement("span",{className:"h2"},"\xb7")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("img",{src:z.a,alt:"Messages icon",className:"nav-icon link-icon"}),!0===e.genNotif&&n.a.createElement("span",{className:"h2"},"\xb7")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("button",{className:"btn-prim"},"Add photo")))))}var B=t(38),J=t.n(B),Y=t(12),G=t.n(Y),H=t(13),A=t.n(H),D=t(14),R=t.n(D),V=t(1),$=t.n(V),q=t(8),K=t.n(q),Q=t(39),T=t.n(Q),X=t(9),Z=t.n(X),_=t(10),ee=t.n(_),ae=t(40),te=t.n(ae);function se(){var e=Object(s.useState)((function(){return[{storyState:"story-unseen",storyUserImg:G.a,storyUserName:"Brad"},{storyState:"story-unseen",storyUserImg:A.a,storyUserName:"Ricky"},{storyState:"story-unseen",storyUserImg:R.a,storyUserName:"Ollie"},{storyState:"story-unseen",storyUserImg:$.a,storyUserName:"Sam"},{storyState:"story-unseen",storyUserImg:K.a,storyUserName:"Maeve"},{storyState:"story-unseen",storyUserImg:T.a,storyUserName:"Louis"},{storyState:"story-unseen",storyUserImg:Z.a,storyUserName:"Oleg"},{storyState:"story-unseen",storyUserImg:ee.a,storyUserName:"Oxlade"},{storyState:"story-unseen",storyUserImg:te.a,storyUserName:"Samar"}]})),a=Object(g.a)(e,2),t=a[0];a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"stories"},n.a.createElement("div",{className:"stories-header"},n.a.createElement("p",{className:"section-title h3"},"Stories"),n.a.createElement("button",{className:"watch-all icon-btn"},n.a.createElement("span",null,n.a.createElement("img",{src:J.a,alt:"play icon",className:"btn-icon"})),n.a.createElement("p",{className:"hs"},"Watch all"))),n.a.createElement("ul",{className:"story-items"},n.a.createElement("li",{className:"story-item"},n.a.createElement("div",{className:"add-story"},n.a.createElement("p",{className:"h1"},"+"))),t.map((function(e){return n.a.createElement("li",{className:"story-item",key:e.storyUserName},n.a.createElement("div",{className:"".concat(e.storyState," image")},n.a.createElement("img",{src:e.storyUserImg,alt:e.storyUserName,className:"profile-image"})))})))))}var ne=t(41),me=t.n(ne),le=t(42),re=t.n(le);function ce(e){var a=e.postInfo;return a.userLink.length>9&&(a.userLink=a.userLink.slice(0,8)+"..."),n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"feed-card plb ".concat(e.mode)},n.a.createElement("img",{src:a.postImage,alt:"feed",className:"feed-image"}),n.a.createElement("div",{className:"feed-controls"},n.a.createElement("div",{className:"post-user"},n.a.createElement("p",{className:"post-user-link"},"@"+a.userLink)),n.a.createElement("div",{className:"actions"},n.a.createElement("div",{className:"like"},n.a.createElement("img",{src:me.a,alt:"like post",className:"like-icon"}),n.a.createElement("p",{className:"like-count"},a.likeCount+"k")),n.a.createElement("div",{className:"comment"},n.a.createElement("img",{src:re.a,alt:"comment on post icon",className:"comment-icon"}),n.a.createElement("p",{className:"comment-count"},a.commentCount)))),n.a.createElement("div",{className:"feed-info hidden"},n.a.createElement("p",{className:"psb user-link"},"@blmovement:"),n.a.createElement("p",{className:"ps"},"Lorem, ipsum dolor sit amet constur adipisicing."))))}function ie(){var e=Object(s.useState)((function(){return[{userLink:"blmovement",likeCount:52,commentCount:32,userComments:"loremipsum dolor sit amet",postImage:G.a},{userLink:"alux.com",likeCount:12,commentCount:2,userComments:"loremipsum dolor sit amet",postImage:A.a},{userLink:"marvel",likeCount:12,commentCount:2,userComments:"loremipsum dolor sit amet",postImage:R.a},{userLink:"design1future",likeCount:12,commentCount:2,userComments:"loremipsum dolor sit amet",postImage:$.a},{userLink:"lexibelle",likeCount:12,commentCount:2,userComments:"loremipsum dolor sit amet",postImage:K.a},{userLink:"isetups",likeCount:12,commentCount:2,userComments:"loremipsum dolor sit amet",postImage:Z.a},{userLink:"lionsgate",likeCount:12,commentCount:2,userComments:"loremipsum dolor sit amet",postImage:ee.a}]})),a=Object(g.a)(e,2),t=a[0];a[1];return n.a.createElement("div",{className:"feed-view"},n.a.createElement(N.Consumer,null,(function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(P,{toggleSidenav:e.toggleSn,msgNotif:e.state.msgNotifState,genNotif:e.state.genNotifState}),n.a.createElement(se,null),n.a.createElement("section",{className:"feed"},n.a.createElement("p",{className:"section-title h3"},"Feed"),n.a.createElement("div",{className:"feed-items"},t.map((function(e){return n.a.createElement(ce,{postInfo:e,key:e.userLink})})))))})))}var oe=function(){return n.a.createElement(N.Consumer,null,(function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"explore"},n.a.createElement(P,{toggleSidenav:e.toggleSn,msgNotif:e.state.msgNotifState,genNotif:e.state.genNotifState}),n.a.createElement("div",{className:"explore-nav-wrapper"},n.a.createElement("ul",{className:"explore-tags"},n.a.createElement("li",{className:"explore-tag active-tag"},n.a.createElement("a",{href:"/",className:"tag-link plb"},"For You")),n.a.createElement("li",{className:"explore-tag"},n.a.createElement("a",{href:"/",className:"tag-link pl"},"Following")),n.a.createElement("li",{className:"explore-tag"},n.a.createElement("a",{href:"/",className:"tag-link pl"},"Popular")),n.a.createElement("li",{className:"explore-tag"},n.a.createElement("a",{href:"/",className:"tag-link pl"},"Featured")),n.a.createElement("li",{className:"explore-tag"},n.a.createElement("a",{href:"/",className:"tag-link pl"},"Live")),n.a.createElement("li",{className:"explore-tag"},n.a.createElement("a",{href:"/",className:"tag-link pl"},"Watch Later")))),n.a.createElement("section",{className:"tab-content"},n.a.createElement("div",{className:"explore-card"},n.a.createElement("img",{src:$.a,alt:"explore",className:"card-image"}),n.a.createElement("div",{className:"explore-info"},n.a.createElement("p",{className:"psb card-title"},"Crazy Night With my Mom"),n.a.createElement("div",{className:"card-user"},n.a.createElement("img",{src:$.a,alt:"explorer",className:"card-user-image"}),n.a.createElement("div",{className:"ps user-name"},"marieparis")))),n.a.createElement("div",{className:"explore-card"},n.a.createElement("img",{src:$.a,alt:"explore",className:"card-image"}),n.a.createElement("div",{className:"explore-info"},n.a.createElement("p",{className:"psb card-title"},"Crazy Night With my Mom"),n.a.createElement("div",{className:"card-user"},n.a.createElement("img",{src:$.a,alt:"explorer",className:"card-user-image"}),n.a.createElement("div",{className:"ps user-name"},"marieparis")))),n.a.createElement("div",{className:"explore-card"},n.a.createElement("img",{src:$.a,alt:"explore",className:"card-image"}),n.a.createElement("div",{className:"explore-info"},n.a.createElement("p",{className:"psb card-title"},"Crazy Night With my Mom"),n.a.createElement("div",{className:"card-user"},n.a.createElement("img",{src:$.a,alt:"explorer",className:"card-user-image"}),n.a.createElement("div",{className:"ps user-name"},"marieparis")))),n.a.createElement("div",{className:"explore-card"},n.a.createElement("img",{src:$.a,alt:"explore",className:"card-image"}),n.a.createElement("div",{className:"explore-info"},n.a.createElement("p",{className:"psb card-title"},"Crazy Night With my Mom"),n.a.createElement("div",{className:"card-user"},n.a.createElement("img",{src:$.a,alt:"explorer",className:"card-user-image"}),n.a.createElement("div",{className:"ps user-name"},"marieparis")))),n.a.createElement("div",{className:"explore-card"},n.a.createElement("img",{src:$.a,alt:"explore",className:"card-image"}),n.a.createElement("div",{className:"explore-info"},n.a.createElement("p",{className:"psb card-title"},"Crazy Night With my Mom"),n.a.createElement("div",{className:"card-user"},n.a.createElement("img",{src:$.a,alt:"explorer",className:"card-user-image"}),n.a.createElement("div",{className:"ps user-name"},"marieparis")))),n.a.createElement("div",{className:"explore-card"},n.a.createElement("img",{src:$.a,alt:"explore",className:"card-image"}),n.a.createElement("div",{className:"explore-info"},n.a.createElement("p",{className:"psb card-title"},"Crazy Night With my Mom"),n.a.createElement("div",{className:"card-user"},n.a.createElement("img",{src:$.a,alt:"explorer",className:"card-user-image"}),n.a.createElement("div",{className:"ps user-name"},"marieparis")))),n.a.createElement("div",{className:"explore-card"},n.a.createElement("img",{src:$.a,alt:"explore",className:"card-image"}),n.a.createElement("div",{className:"explore-info"},n.a.createElement("p",{className:"psb card-title"},"Crazy Night With my Mom"),n.a.createElement("div",{className:"card-user"},n.a.createElement("img",{src:$.a,alt:"explorer",className:"card-user-image"}),n.a.createElement("div",{className:"ps user-name"},"marieparis")))))))}))},pe=t(20),ue=t.n(pe);function Ne(){return n.a.createElement(N.Consumer,null,(function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"notifications"},n.a.createElement(P,{toggleSidenav:e.toggleSn,msgNotif:e.state.msgNotifState,genNotif:e.state.genNotifState}),n.a.createElement("ul",{className:"notifications-list"},n.a.createElement("li",{className:"notification-item"},n.a.createElement("img",{src:ue.a,alt:"not user",className:"notification-user-image"}),n.a.createElement("div",{className:"notification-info"},n.a.createElement("div",{className:"notification-title"},n.a.createElement("p",{className:"plb"},"Nisha followed you")," ",n.a.createElement("span",{className:"psb"},"19:45")),n.a.createElement("p",{className:"ps notification-text"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit."))),n.a.createElement("li",{className:"notification-item"},n.a.createElement("img",{src:ue.a,alt:"not user",className:"notification-user-image"}),n.a.createElement("div",{className:"notification-info"},n.a.createElement("div",{className:"notification-title"},n.a.createElement("p",{className:"plb"},"Nisha followed you")," ",n.a.createElement("span",{className:"psb"},"19:45")),n.a.createElement("p",{className:"ps notification-text"},"Lorem, ipsum dolor sit amet consectetur adipisicing functional elit."))),n.a.createElement("li",{className:"notification-item"},n.a.createElement("img",{src:ue.a,alt:"not user",className:"notification-user-image"}),n.a.createElement("div",{className:"notification-info"},n.a.createElement("div",{className:"notification-title"},n.a.createElement("p",{className:"plb"},"Nisha followed you")," ",n.a.createElement("span",{className:"psb"},"19:45")),n.a.createElement("p",{className:"ps notification-text"},"Lorem, ipsum dolor sit plato man oi amet consectetur adipisicing elit."))))))}))}var de=t(19),ge=t.n(de),Ee=[{userLink:"blmovement",likeCount:52,commentCount:32,userComments:"loremipsum dolor sit amet",postImage:G.a},{userLink:"alux.com",likeCount:12,commentCount:2,userComments:"loremipsum dolor sit amet",postImage:A.a},{userLink:"marvel",likeCount:12,commentCount:2,userComments:"loremipsum dolor sit amet",postImage:R.a},{userLink:"design1future",likeCount:12,commentCount:2,userComments:"loremipsum dolor sit amet",postImage:$.a},{userLink:"lexibelle",likeCount:12,commentCount:2,userComments:"loremipsum dolor sit amet",postImage:K.a},{userLink:"isetups",likeCount:12,commentCount:2,userComments:"loremipsum dolor sit amet",postImage:Z.a},{userLink:"lionsgate",likeCount:12,commentCount:2,userComments:"loremipsum dolor sit amet",postImage:ee.a},{userLink:"design1future",likeCount:12,commentCount:2,userComments:"loremipsum dolor sit amet",postImage:$.a},{userLink:"lexibelle",likeCount:12,commentCount:2,userComments:"loremipsum dolor sit amet",postImage:K.a},{userLink:"isetups",likeCount:12,commentCount:2,userComments:"loremipsum dolor sit amet",postImage:Z.a},{userLink:"lionsgate",likeCount:12,commentCount:2,userComments:"loremipsum dolor sit amet",postImage:ee.a}];function fe(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(P,null),n.a.createElement("section",{className:"saved-posts"},n.a.createElement("p",{className:"section-title h3"},"Saved"),n.a.createElement("div",{className:"profile-area"},n.a.createElement("img",{src:ge.a,alt:"profile",className:"profile-img"}),n.a.createElement("div",{className:"profile-info"},n.a.createElement("p",{className:"h3 profile-name"},"Linda Clarkson"),n.a.createElement("p",{className:"profile-link pl"},"@clinda"),n.a.createElement("p",{className:"pl profile-desc"},"Living the dream life ",n.a.createElement("span",null," \ud83d\ude09 ")))),n.a.createElement("section",{className:"posts-section"},Ee.map((function(e){return n.a.createElement(ce,{postInfo:e,key:e.userLink,mode:"saved"})})))))}t(26);var ve=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).toggleSn=function(){""===e.state.sideNavState?e.setState((function(e){return{sideNavState:"sidenav-inactive"}})):e.setState((function(e){return{sideNavState:""}}))},e.state={sideNavState:"sidenav-inactive",msgNotifState:!0,genNotifState:!0,profileState:{profileImage:ge.a,hasStory:!0,profileName:"Unjaded Jade",profileLink:"jade",postsNum:46,followersNum:"2.8k",followingNum:526},currView:"feed"},e}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement(r.a,null,n.a.createElement(N.Provider,{value:{state:this.state,toggleSn:this.toggleSn}},n.a.createElement("div",{className:"feed"},n.a.createElement(F,null),n.a.createElement("main",null,n.a.createElement(c.a,{exact:!0,path:"".concat(this.props.match.url),component:ie}),n.a.createElement(c.a,{path:"".concat(this.props.match.url,"/explore"),component:oe}),n.a.createElement(c.a,{path:"".concat(this.props.match.url,"/notifications"),component:Ne}),n.a.createElement(c.a,{path:"".concat(this.props.match.url,"/saved"),component:fe})))))}}]),t}(n.a.Component),he=t(43),ke=t.n(he);var xe=function(){return n.a.createElement("div",{className:"Home"},n.a.createElement("header",null,n.a.createElement("nav",null,n.a.createElement(v,{locale:"./"}),n.a.createElement("ul",{className:"nav-links"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"../../index.html",className:"nav-link ps help"},"Help")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"../../index.html",className:"nav-link"},n.a.createElement("button",{className:"btn-sec"},"Sign up"))))),n.a.createElement("section",{className:"main"},n.a.createElement("div",{className:"image-area"},n.a.createElement("img",{src:ke.a,alt:"Instagram redesign",className:"hd-image"})),n.a.createElement("div",{className:"info-area"},n.a.createElement("p",{className:"h1 main-text"},"Pimp Your Design ",n.a.createElement("br",null),"on Instagram"),n.a.createElement("p",{className:"pl aux-text"},"More functional and beautiful design. ",n.a.createElement("br",null),"Your life becomes more pleasant."),n.a.createElement("div",{className:"ctaz"},n.a.createElement("button",{className:"btn-prim upgrade-button"},n.a.createElement(r.b,{to:"/regram"},"Sign up")),n.a.createElement("button",{className:"btn-light login"},"Login"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(r.a,null,n.a.createElement(c.a,{exact:!0,path:"/",component:xe}),n.a.createElement(c.a,{path:"/regram",component:ve}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[47,1,2]]]);
//# sourceMappingURL=main.a1093e79.chunk.js.map
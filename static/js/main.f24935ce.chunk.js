(this["webpackJsonpbuildspace-solana"]=this["webpackJsonpbuildspace-solana"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(8),i=n.n(r),o=(n(14),n(9)),s=n(4),l=n(6),u=n(2),d=n.n(u),p=n.p+"static/media/twitter-logo.d89d9a86.svg",b=(n(16),n(0)),f="_buildspace",h="https://twitter.com/".concat(f),j=["https://i.giphy.com/media/eIG0HfouRQJQr1wBzz/giphy.webp","https://media3.giphy.com/media/L71a8LW2UrKwPaWNYM/giphy.gif?cid=ecf05e47rr9qizx2msjucl1xyvuu47d7kf25tqt2lvo024uo&rid=giphy.gif&ct=g","https://media4.giphy.com/media/AeFmQjHMtEySooOc8K/giphy.gif?cid=ecf05e47qdzhdma2y3ugn32lkgi972z9mpfzocjj6z1ro4ec&rid=giphy.gif&ct=g","https://i.giphy.com/media/PAqjdPkJLDsmBRSYUp/giphy.webp"],m=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(l.a)(r,2),u=i[0],m=i[1],g=Object(c.useState)([]),x=Object(l.a)(g,2),v=x[0],O=x[1],w=function(){var e=Object(s.a)(d.a.mark((function e(){var t,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,!(n=t.solana)){e.next=12;break}if(!n.isPhantom){e.next=10;break}return console.log("Phantom wallet found!"),e.next=7,n.connect({onlyIfTrusted:!0});case 7:c=e.sent,console.log("Connected with Public Key:",c.publicKey.toString()),a(c.publicKey.toString());case 10:e.next=13;break;case 12:alert("Solana object not found! Get a Phantom Wallet \ud83d\udc7b");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(d.a.mark((function e(){var t,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,!(n=t.solana)){e.next=7;break}return e.next=4,n.connect();case 4:c=e.sent,console.log("Connected with Public Key:",c.publicKey.toString()),a(c.publicKey.toString());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(e){var t=e.target.value;m(t)},N=function(){var e=Object(s.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.length>0?(console.log("Gif link:",u),O([].concat(Object(o.a)(v),[u])),m("")):console.log("Empty input. Try again.");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){n&&(console.log("Fetching GIF list..."),O(j))}),[n]),Object(c.useEffect)((function(){var e=function(){var e=Object(s.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:n?"authed-container":"container",children:[Object(b.jsxs)("div",{className:"header-container",children:[Object(b.jsx)("p",{className:"header",children:"Random GIF Portal!!\ud83d\uddbc"}),Object(b.jsx)("p",{className:"sub-text",children:"Explore all your randomness in the metaverse \u2728"}),!n&&Object(b.jsx)("button",{className:"cta-button connect-wallet-button",onClick:y,children:"Connect to Wallet"}),n&&Object(b.jsxs)("div",{className:"connected-container",children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N()},children:[Object(b.jsx)("input",{type:"text",placeholder:"Enter gif link!",value:u,onChange:k}),Object(b.jsx)("button",{type:"submit",className:"cta-button submit-gif-button",children:"Submit"})]}),Object(b.jsx)("div",{className:"gif-grid",children:v.map((function(e){return Object(b.jsx)("div",{className:"gif-item",children:Object(b.jsx)("img",{src:e,alt:e})},e)}))})]})]}),Object(b.jsxs)("div",{className:"footer-container",children:[Object(b.jsx)("img",{alt:"Twitter Logo",className:"twitter-logo",src:p}),Object(b.jsx)("a",{className:"footer-text",href:h,target:"_blank",rel:"noreferrer",children:"built on @".concat(f)})]})]})})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f24935ce.chunk.js.map
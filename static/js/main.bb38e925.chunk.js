(this.webpackJsonptermsheet_app=this.webpackJsonptermsheet_app||[]).push([[0],{2:function(e){e.exports=JSON.parse('{"Token":"CXN","hardcap":1250,"softcap":500,"supply":300000,"liq":15.41,"staking":30,"team":10,"marketing":8.59,"unlocked":"Marketing","ethLiq":12.83,"lidLiq":2.57}')},21:function(e,t,n){e.exports=n.p+"static/media/logo-lid.20b6644e.png"},26:function(e,t,n){e.exports=n(48)},31:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(11),o=n.n(r),c=(n(31),n(1)),i=n(3),u=n(4),p=n(12),m=n(2),d=n(21),g=n.n(d),s=n(5),f=[{Percentage:.25,Amount:200},{Percentage:.2,Amount:300},{Percentage:.15,Amount:500},{Percentage:.1,Amount:250}];var b=n(22),E=n.n(b);function x(){var e=Object(i.a)(["\n    margin-top: 3px;\n    margin-right: 10px;\n    border-radius: 8px;\n    border: 2px solid #d1d1d1;\n    padding: 5px;\n    width: 250px;\n\n    :focus{\n        outline: 0;\n        box-shadow: 0 0 5px blue;\n      }\n"]);return x=function(){return e},e}function h(){var e=Object(i.a)(["\n    border: 2px solid #E4E4E4;\n    border-radius: 15px;\n    padding: 0px;\n    margin-bottom: 15px;\n    text-align: center;\n    margin-right: 50px;\n\n    :hover{\n        cursor: pointer;\n        background-color: #ededed;\n    }\n"]);return h=function(){return e},e}var y=[{id:"1",type:"25% - 10%",info:[{Percentage:.25,Amount:200},{Percentage:.2,Amount:300},{Percentage:.15,Amount:500},{Percentage:.1,Amount:250}]},{id:"2",type:"35% - 5%",info:[{Percentage:.35,Amount:400},{Percentage:.1,Amount:100},{Percentage:.08,Amount:200},{Percentage:.05,Amount:550}]},{id:"3",type:"30% - 10%",info:[{Percentage:.3,Amount:250},{Percentage:.2,Amount:250},{Percentage:.1,Amount:175},{Percentage:0,Amount:550}]},{id:"4",type:"10% - 1%",info:[{Percentage:.714,Amount:200},{Percentage:.714,Amount:300},{Percentage:.714,Amount:500},{Percentage:.714,Amount:250}]}],k={content:{top:"320px",left:"30%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",paddingLeft:"30px",paddingRight:"30px",paddingBottom:"20px",borderRadius:"15px"}},v=u.a.div(h()),S=u.a.input(x());function F(e){var t,n=e.token_price,r=(e.supply,e.hardcap),o=Object(a.useState)(!1),i=Object(c.a)(o,2),u=i[0],p=i[1],m=Object(a.useState)(r),d=Object(c.a)(m,2),g=d[0],b=d[1],x=Object(a.useState)(f),h=Object(c.a)(x,2),F=h[0],O=h[1],j=Object(a.useState)([{value:null}]),A=Object(c.a)(j,2),P=A[0],w=A[1],C=Object(a.useState)([{value:null}]),L=Object(c.a)(C,2),q=L[0],T=L[1],D=Object(a.useState)([{Percentage:q,Amount:P}]),R=Object(c.a)(D,2),B=R[0];R[1];function I(e,t){var n=Object(s.a)(P);n[e].value=t.target.value,w(n),function(){var e=0;P.map((function(t){return e+=parseFloat(t.value)})),b(parseFloat(r)-parseFloat(e)),console.log(e)}()}function X(e){var t=Object(s.a)(P),n=Object(s.a)(q);t.push({value:null}),n.push({value:null}),w(t),T(n)}function H(){p(!1)}return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{Style:"display:inline-block; margin-bottom: 100px; background-color: white; color: #0c65EB; width: 398px;"},l.a.createElement("h2",null," Bonus Range "),l.a.createElement("h3",{Style:"text-decoration: underline; margin-left: 40px; margin-bottom: -5px; margin-top: -10px; ",onClick:function(){p(!0)}}," Select"),l.a.createElement(E.a,{isOpen:u,onAfterOpen:function(){t.style.color="#f00"},onRequestClose:H,style:k},l.a.createElement("h2",{ref:function(e){return t=e}}," Select Bonus Structure "),y.map((function(e){return l.a.createElement(v,null,l.a.createElement("p",{onClick:function(){return function(e){O(e)}(e.info)}}," (",e.type,") "))})),l.a.createElement("h3",{Style:"Color: #f00 "},"Create Own"),l.a.createElement("ul",{Style:"list-style-type: none"},l.a.createElement("li",{Style:"float: left; margin-left: 40px; "},"Amount "),l.a.createElement("li",{Style:"display: inline-block; margin-left: 190px;"},"Percentage ")),P.map((function(e,t){return l.a.createElement("div",{key:"".concat(e,"-").concat(t),Style:" input { margin-top: 3px; border-radius: 5px; border: 2px solid black; padding: 5px; width: 250px; }"},l.a.createElement(S,{type:"text",placeholder:P[t].value,onChange:function(e){return I(t,e)}}),l.a.createElement(S,{type:"text",placeholder:q[t].value,onChange:function(e){return function(e,t){var n=Object(s.a)(q);n[e].value=t.target.value,T(n)}(t,e)},onKeyDown:function(e){13==e.keyCode&&X()}}),l.a.createElement("button",{type:"button",onClick:function(){return function(e){var t=Object(s.a)(P),n=Object(s.a)(q);t.splice(e,1),n.splice(e,1),w(t),T(n)}(t)}},"X"))})),l.a.createElement("p",null,"ETH left: ",g),l.a.createElement("button",{type:"button",onClick:function(){return X()}},"Add"),l.a.createElement("button",{type:"button",onClick:function(){return function(){for(var e=0;e<P.length;e++)B.push({Percentage:parseFloat(q[e].value)/100,Amount:parseFloat(P[e].value)});console.log(B),O(B.splice(1))}()}},"submit"),l.a.createElement("p",null,"..."),l.a.createElement("button",{onClick:H},"close")),l.a.createElement("ul",{Style:"float: left"},l.a.createElement("li",null,"Range"),F.map((function(e){return l.a.createElement("li",null," ",e.Amount," ")}))),l.a.createElement("ul",{Style:"float: left"},l.a.createElement("li",null,"Bonus"),F.map((function(e){return l.a.createElement("li",null," ",(100*e.Percentage).toFixed(2),"% ")}))),l.a.createElement("ul",{Style:"float: left"},l.a.createElement("li",null,"Price"),F.map((function(e){return l.a.createElement("li",null," ",(parseFloat(n)*e.Percentage+parseFloat(n)).toFixed(0)," ")}))),l.a.createElement("ul",{Style:"display: inline-block"},l.a.createElement("li",null," Tokens "),F.map((function(e){return l.a.createElement("li",null," ",(e.Amount*(parseFloat(n)*e.Percentage+parseFloat(n))).toFixed(0))}))),l.a.createElement("p",{Style:"margin-left: 40px; font-weight: bold;"},function(e,t){var n,a;return 3e5,1250,9e4,n=0,F.map((function(e){return n+=e.Percentage*e.Amount+e.Amount})),a=625*(9e4*((F[0].Amount+F[0].Percentage*F[0].Amount)/n)/F[0].Amount/(1+F[0].Percentage))/3e5/.83322517845*100,l.a.createElement(l.a.Fragment,null,"Recommend LIQ: ",a.toFixed(2),"%")}()),l.a.createElement("p",{Style:"margin-left: 200px; font-weight: bold;"},"Total Tokens: ",function(){var e;return e=0,F.map((function(t){return e+=parseFloat((t.Amount*(parseFloat(n)*t.Percentage+parseFloat(n))).toFixed(2))})),e}().toFixed(0)," ")))}function O(){var e=Object(i.a)(["\n  font-family: Gotham, sans-serif;\n  background-color:#737373;\n  \n  margin-top: -35px;\n\n  font-weight: bold;\n\n  ul {\n    margin-right: 80px;\n    margin-top: -5px;\n    width: 250px;\n  }\n\n  h2 {\n    margin-right: 750px\n  }\n\n"]);return O=function(){return e},e}var j=u.a.div(O());function A(e){var t=e.token_price,n=e.hardcap,a=e.softCap,r=(e.supply,e.liq),o=e.staking,c=e.team,i=e.marketing,u=e.unlocked,d=(e.remaining,e.ethLiq),g=e.lidLiq,s=e.csvData;return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,null,l.a.createElement("h2",null," Result: $",m.Token),l.a.createElement("ul",{Style:"float: left"},l.a.createElement("li",null," Token Price: ",t," "),l.a.createElement("li",null," LIQ: ",r,"%  "),l.a.createElement("li",null,"  Hardcap: ",n,"  "),l.a.createElement("li",null," Softcap: ",a," ")),l.a.createElement("ul",{Style:"float: left"},l.a.createElement("li",null,"Staking: ",o,"% "),l.a.createElement("li",null,"Team: ",c,"% "),l.a.createElement("li",null,"Marketing: ",i,"% "),l.a.createElement("li",null,"Unlocked: ",u," 5% ")),l.a.createElement("ul",{Style:"display: inline-block"},l.a.createElement("li",null,"Presale: 30%"),l.a.createElement("li",null,"Liq (eth): ",d,"% "),l.a.createElement("li",null,"Lia (lid): ",g,"% "),l.a.createElement("li",null,"LID Fee: 1%")),l.a.createElement("br",null),l.a.createElement("button",{Style:"font-size: 18px; display: inline-block; border:2px solid #D8E0E7; border-radius:25px; background-color: #D8E0E7; width: 173px; height: 35px; margin-bottom:20px; margin-left: 30px; z-index: 2; text-decoration: none; "},l.a.createElement(p.CSVLink,{Style:"text-decoration: none; font-size: 18px; font-family: Gotham, sans-serif; font-weight: 0; color:  #4A4A4A",data:s}," Submit "))))}function P(){var e=Object(i.a)(["\n  font-family: 'Gotham', sans-serif;\n  background-color: #E4E4E4;;\n  margin-top: -20px;\n  padding-top: 20px;\n  padding-bottom: 10px;\n\n  div {\n    background-color: #4A4A4A;\n    padding-right: 50px;\n    border: 2px solid #E4E4E4;\n    border-radius: 15px;\n    color: #E4E4E4;\n    margin-left: 18px;\n    margin-right: 18px;\n  }\n  \n  ul {\n    list-style-type: none;\n  }\n\n  li {\n    padding-top: 5px;\n  }\n\n  h2 {\n    margin-left: 40px;\n    margin-top: 10px;\n  }\n\n  input {\n    margin-top: 3px;\n    border-radius: 5px;\n    border: 2px solid black;\n    padding: 5px;\n    width: 250px;\n  }\n"]);return P=function(){return e},e}var w=u.a.div(P());var C=function(){var e=Object(a.useState)(m.hardcap),t=Object(c.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(m.softcap),i=Object(c.a)(o,2),u=i[0],p=i[1],d=Object(a.useState)(m.supply),s=Object(c.a)(d,2),f=s[0],b=s[1],E=Object(a.useState)(m.liq),x=Object(c.a)(E,2),h=x[0],y=x[1],k=Object(a.useState)(m.staking),v=Object(c.a)(k,2),S=v[0],O=v[1],j=Object(a.useState)(m.team),P=Object(c.a)(j,2),C=P[0],L=P[1],q=Object(a.useState)(m.marketing),T=Object(c.a)(q,2),D=T[0],R=T[1],B=Object(a.useState)(m.unlocked),I=Object(c.a)(B,2),X=I[0],H=I[1],M=Object(a.useState)(m.ethLiq),Q=Object(c.a)(M,2),_=Q[0],z=Q[1],U=Object(a.useState)(m.lidLiq),G=Object(c.a)(U,2),J=G[0],N=G[1],W=Object(a.useState)(0),$=Object(c.a)(W,2),K=$[0];function V(){return console.log(parseFloat(D)),console.log(parseFloat(S)),console.log(parseFloat(C)),(parseFloat(D)+parseFloat(S)+parseFloat(C)+parseFloat(_)+parseFloat(J)+36).toFixed(2)}function Y(){return(parseFloat(parseFloat(f)*(_/100))/(.5*parseFloat(n))).toFixed(2)}$[1];var Z=[["Token Presale"],["Price",Y()],["Refferall Fee","2.5%"],["Hardcap",n],["Softcap",u],["Supply",f],["liq",h],["",""],["Token Distribution"],["Fund","Quantity"],["Staking",S],["Presale","30%"],["liq (xxx/ETH)",_],["liq (xxx/LID)",J],["Team",C],["Marketing",D],["Unlocked: 5%",X],["",""],["Ether Distribution (%)"],["Fund","Quantity","Remaining",u,n],["liq (XXX/ETH)","50.00%","50.00%","",""],["liq (XXX/LID)","10.00%","40.00%","",""],["TEAM+FUND","20.00%","20.00%","",""],["LID","5.00%","15.00%","",""],["Token Burn","15.00%","0.00%","",""]];return l.a.createElement(l.a.Fragment,null,l.a.createElement(w,null,l.a.createElement("img",{Style:"width: 50px; height: 50px; margin-left: 20px; margin-bottom: -60px;",src:g.a}),l.a.createElement("h2",{Style:" font-size: 28px; color: #0c65EB; margin-left: 90px; "},"Term Sheet App "),l.a.createElement("div",{Style:"float: left; background: linear-gradient(0deg, rgba(12,101,235,1) 0%, rgba(28,158,247,1) 100%); color: white;"},l.a.createElement("h2",null,"Token Presale"),l.a.createElement("ul",null,l.a.createElement("li",null," HardCap ",l.a.createElement("br",null),l.a.createElement("input",{type:"number",placeholder:n,step:"0.01",onChange:function(e){return r(e.target.value)}})),l.a.createElement("li",null,"SoftCap ",l.a.createElement("br",null),l.a.createElement("input",{type:"number",placeholder:u,step:"0.01",onChange:function(e){return p(e.target.value)}})),l.a.createElement("li",null,"Supply ",l.a.createElement("br",null),l.a.createElement("input",{type:"number",placeholder:f,step:"0.01",onChange:function(e){return b(e.target.value)}})),l.a.createElement("li",null,"LIQ ",l.a.createElement("br",null),l.a.createElement("input",{type:"number",placeholder:h+"%",step:"0.01",min:"0",max:"100",onChange:function(e){return function(e){z(parseFloat(.83*e).toFixed(2)),N(parseFloat(.17*e).toFixed(2)),y(parseFloat(e).toFixed(2))}(e.target.value)}})),l.a.createElement("br",null),l.a.createElement("li",{Style:"color: #7FFF00; font-weight: bold"}," Reccomended LIQ: ",K.toFixed(2),"% "))),l.a.createElement("div",{Style:"float: left; background: linear-gradient(0deg, rgba(12,101,235,1) 0%, rgba(28,158,247,1) 100%); color: white;"},l.a.createElement("h2",null," Token Distribution "),l.a.createElement("ul",null,l.a.createElement("li",null,"Staking ",l.a.createElement("br",null),l.a.createElement("input",{type:"number",placeholder:S+"%",step:"0.01",onChange:function(e){return O(e.target.value)}})),l.a.createElement("li",null,"Team ",l.a.createElement("br",null),l.a.createElement("input",{type:"number",placeholder:C+"%",step:"0.01",onChange:function(e){return L(e.target.value)}})),l.a.createElement("li",null," Marketing ",l.a.createElement("br",null),l.a.createElement("input",{type:"number",placeholder:D+"%",step:"0.01",onChange:function(e){return R(e.target.value)}})),l.a.createElement("li",null," Unlocked ",l.a.createElement("br",null),l.a.createElement("input",{type:"text",placeholder:X,onChange:function(e){return H(e.target.value)}})),l.a.createElement("br",null),l.a.createElement("li",{Style:"color: #8B0000; font-weight: bold"}," Distrubtion Remaing: ",(-1*(V()-100)).toFixed(2),"% "))),l.a.createElement(F,{supply:f,hardcap:n,token_price:Y()}),l.a.createElement(A,{token_price:Y(),hardcap:n,softCap:u,supply:f,liq:h,staking:S,team:C,marketing:D,unlocked:X,ethLiq:_,lidLiq:J,csvData:Z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.bb38e925.chunk.js.map
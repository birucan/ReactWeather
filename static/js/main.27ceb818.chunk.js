(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(10),r=n.n(i),s=(n(94),n(11)),o=(n(95),n(152)),l=n(110),j=n(156),h=n(157),d=n(158),b=n(159),u=n(160),m=n(46),x=n(179),p=n(81),O=n.n(p),g=n(80),f=n.n(g),v=n(79),w=n.n(v),y=n(78),S=n.n(y),B=n(2);function F(e){function t(t){e.setPageState(t)}var n=c.a.useState(!1),a=Object(s.a)(n,2),i=a[0],r=a[1],p=function(e){return function(t){r(e)}};c.a.useEffect((function(){e.setPageState(e.pageState)}),[e]);return Object(B.jsxs)("div",{className:"AppBarContainer",pageState:e.pageState,setPageState:t,children:[Object(B.jsx)(d.a,{position:"sticky",children:Object(B.jsxs)(b.a,{children:[Object(B.jsx)(u.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:p(!0),children:Object(B.jsx)(O.a,{})}),Object(B.jsx)(m.a,{variant:"h6",children:"React Weather App"})]})}),Object(B.jsx)(x.a,{anchor:"left",open:i,onClose:p(!1),children:Object(B.jsxs)(o.a,{children:[Object(B.jsxs)(l.a,{button:!0,onClick:function(){t("weather")},children:[Object(B.jsx)(j.a,{children:"Weather"}),Object(B.jsx)(h.a,{children:Object(B.jsx)(S.a,{})})]}),Object(B.jsxs)(l.a,{button:!0,onClick:function(){t("licenses")},children:[Object(B.jsx)(j.a,{children:"Licenses"}),Object(B.jsx)(h.a,{children:Object(B.jsx)(w.a,{})})]}),Object(B.jsx)("a",{href:"https://github.com/birucan/ReactWeather",style:{textDecoration:"none",color:"black"},children:Object(B.jsxs)(l.a,{button:!0,children:[Object(B.jsx)(j.a,{children:"Git repo"}),Object(B.jsx)(h.a,{children:Object(B.jsx)(f.a,{})})]})})]})})]})}var k=n(169),C=n(82),P=n.n(C),I=n(171),z=n(166),D=n(173),L=n(177),A=n(180),T=n(174),M=n(167),E=n(111),N=n(172),H=n(84),W=n(162),_=n(163),G=n(161),R=Object(G.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function q(){var e=R;return Object(B.jsxs)(W.a,{className:e.root,children:[Object(B.jsxs)(_.a,{children:[Object(B.jsx)(m.a,{className:e.title,color:"textSecondary",gutterBottom:!0,children:"Icon Licenses"}),Object(B.jsx)(m.a,{variant:"h5",component:"h2",children:"Weather Icons"}),Object(B.jsxs)(m.a,{variant:"body2",component:"p",children:[Object(B.jsxs)("div",{children:["Icons made by"," ",Object(B.jsx)("a",{href:"https://www.flaticon.com/authors/iconixar",title:"iconixar",children:"iconixar"})," ","from"," ",Object(B.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]}),Object(B.jsx)("br",{})]})]}),Object(B.jsxs)(_.a,{children:[Object(B.jsx)(m.a,{className:e.title,color:"textSecondary",gutterBottom:!0,children:"Icon Licenses"}),Object(B.jsx)(m.a,{variant:"h5",component:"h2",children:"Github Icon"}),Object(B.jsxs)(m.a,{variant:"body2",component:"p",children:[Object(B.jsxs)("div",{children:["Icons made by"," ",Object(B.jsx)("a",{href:"https://www.flaticon.com/authors/pixel-perfect",title:"Pixel perfect",children:"Pixel perfect"})," ","from"," ",Object(B.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]}),Object(B.jsx)("br",{})]})]}),Object(B.jsxs)(_.a,{children:[Object(B.jsx)(m.a,{className:e.title,color:"textSecondary",gutterBottom:!0,children:"Icon Licenses"}),Object(B.jsx)(m.a,{variant:"h5",component:"h2",children:"Licenses Icon"}),Object(B.jsxs)(m.a,{variant:"body2",component:"p",children:[Object(B.jsxs)("div",{children:["Icons made by"," ",Object(B.jsx)("a",{href:"https://www.flaticon.com/authors/wanicon",title:"wanicon",children:"wanicon"})," ","from"," ",Object(B.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]}),Object(B.jsx)("br",{})]})]})]})}var J=n(27),U=n.n(J),Y=n(52),Z=function(){var e=Object(Y.a)(U.a.mark((function e(t){var n,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.openweathermap.org/data/2.5","/forecast/?q=").concat(t,"&units=metric&APPID=").concat("432d99d23898d7c9aea395aff1afb1ba"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(Y.a)(U.a.mark((function e(t){var n,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.openweathermap.org/data/2.5","/forecast/?zip=").concat(t,"&units=metric&APPID=").concat("432d99d23898d7c9aea395aff1afb1ba"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(Y.a)(U.a.mark((function e(t,n){var a,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.openweathermap.org/data/2.5","/forecast/?lat=").concat(t,"&lon=").concat(n,"&units=metric&APPID=").concat("432d99d23898d7c9aea395aff1afb1ba"));case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),V=function(){var e=Object(Y.a)(U.a.mark((function e(t){var n,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.openweathermap.org/data/2.5","/weather/?q=").concat(t,"&units=metric&APPID=").concat("432d99d23898d7c9aea395aff1afb1ba"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=n(168),$=n(175),ee=n(170),te=n.p+"static/media/0cloudy.09a2ccb9.svg",ne=n.p+"static/media/0clear.4eccead1.svg",ae=n.p+"static/media/0drizzle.b1c4d2b1.svg",ce=n.p+"static/media/0rainy.98a12099.svg",ie=n.p+"static/media/0storm.9cf155d9.svg",re=n.p+"static/media/0smoke.56ea0f2a.svg",se=n.p+"static/media/006-snowy.b349810c.svg",oe=n(164),le=n(165),je=n(176);n(103);function he(e){var t=e.center,n=(e.zoom,c.a.useState(null)),a=Object(s.a)(n,2),i=a[0],r=a[1];i&&i.flyTo(t);return Object(B.jsx)("div",{className:"map",children:Object(B.jsx)(oe.a,{whenCreated:r,style:{width:"100%",height:"60vh"},center:t,zoom:12,children:Object(B.jsx)(le.a,{position:"topright",children:Object(B.jsx)(le.a.BaseLayer,{checked:!0,name:"OpenStreetMap",children:Object(B.jsx)(je.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})})})})})}function de(e){var t,n,c,i=e.submitedState,r=e.city,o=e.zip,l=e.lat,j=e.lon,h=e.searchState,d={Clouds:te,Clear:ne,Drizzle:ae,Rain:ce,Thunderstorm:ie,Smoke:re,Snow:se},b=0,u=7,x=15,p=23,O=31,g=a.useState(),f=Object(s.a)(g,2),v=f[0],w=f[1],y=a.useState(),S=Object(s.a)(y,2),F=S[0],k=S[1],C=a.useState(!0),P=Object(s.a)(C,2),I=P[0],D=P[1],L=a.useState(0),A=Object(s.a)(L,2),T=A[0],E=A[1],N=a.useState(!1),_=Object(s.a)(N,2),G=_[0],R=_[1],q=a.useState(""),J=Object(s.a)(q,2),U=J[0],Y=J[1];G?(t=1.8,n=32,c="\xb0F"):(t=1,n=0,c="\xb0C");var oe=function(e){E(e.target.value)},le=function(e){R(e.target.value),G?(t=1.8,n=32,c="\xb0F"):(t=1,n=0,c="\xb0C")};var je=function(e){"401"===e.cod||"404"===e.cod||"429"===e.cod||"400"===e.cod?k("Error "+e.cod+": "+e.message):(w(e),V(e.city.name).then((function(a){var i=a;k(Object(B.jsxs)(z.a,{container:!0,spacing:3,direction:"row",alignItems:"center",justify:"center",style:{minWidth:"100vh"},children:[Object(B.jsxs)(z.a,{item:!0,xs:12,children:[Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"h4",component:"h2",align:"center",children:["Current Weather for ",e.city.name,","," ",e.city.country]}),Object(B.jsx)(z.a,{item:!0,xs:12,children:Object(B.jsxs)(W.a,{children:[Object(B.jsxs)(W.a,{children:[Object(B.jsx)("img",{src:d[i.weather[0].main],alt:"weather icon",style:{width:"10em",height:"10em"}}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Description: ",i.weather[0].description]})]}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Temperature:"," ",(i.main.temp*t+n).toFixed(1),c]}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Feels Like:"," ",(i.main.feels_like*t+n).toFixed(1),c]}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Humidity: ",i.main.humidity,"%"]})]})})]}),Object(B.jsx)(z.a,{item:!0,xs:12,children:Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"h4",component:"h2",align:"center",children:["Forecast for ",e.city.name,", ",e.city.country]})}),Object(B.jsx)(z.a,{item:!0,xs:6,children:Object(B.jsxs)(M.a,{variant:"filled",children:[Object(B.jsx)(X.a,{children:"Hour"}),Object(B.jsxs)($.a,{labelId:"hour",id:"demo-simple-select-filled",value:T,onChange:oe,children:[Object(B.jsx)(ee.a,{value:0,children:"3:00 AM"}),Object(B.jsx)(ee.a,{value:1,children:"6:00 AM"}),Object(B.jsx)(ee.a,{value:2,children:"9:00 AM"}),Object(B.jsx)(ee.a,{value:3,children:"12:00 PM"}),Object(B.jsx)(ee.a,{value:4,children:"3:00 PM"}),Object(B.jsx)(ee.a,{value:5,children:"6:00 PM"}),Object(B.jsx)(ee.a,{value:6,children:"9:00 PM"}),Object(B.jsx)(ee.a,{value:7,children:"12:00 AM"})]})]})}),Object(B.jsx)(z.a,{item:!0,xs:6,children:Object(B.jsxs)(M.a,{variant:"filled",children:[Object(B.jsx)(X.a,{children:"Format"}),Object(B.jsxs)($.a,{labelId:"format",id:"demo-simple-select-filled2",value:G,onChange:le,children:[Object(B.jsx)(ee.a,{value:!0,children:"Fahrenheit"}),Object(B.jsx)(ee.a,{value:!1,children:"Celsius"})]})]})}),Object(B.jsx)(z.a,{item:!0,children:Object(B.jsxs)(W.a,{children:[Object(B.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center",children:"Today"}),Object(B.jsxs)(W.a,{children:[Object(B.jsx)("img",{src:d[e.list[b+T].weather[0].main],alt:"weather icon",style:{width:"10em",height:"10em"}}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Description:"," ",e.list[b+T].weather[0].description]})]}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Temperature:"," ",(e.list[b+T].main.temp*t+n).toFixed(1),c]}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Feels Like:"," ",(e.list[b+T].main.feels_like*t+n).toFixed(1),c]}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Humidity:"," ",e.list[b+T].main.humidity,"%"]})]})}),Object(B.jsx)(z.a,{item:!0,children:Object(B.jsxs)(W.a,{children:[Object(B.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center",children:"Tomorrow"}),Object(B.jsxs)(W.a,{children:[Object(B.jsx)("img",{src:d[e.list[u+T].weather[0].main],alt:"weather icon",style:{width:"10em",height:"10em"}}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Description:"," ",e.list[u+T].weather[0].description]})]}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Temperature:"," ",(e.list[u+T].main.temp*t+n).toFixed(1),c]}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Feels Like:"," ",(e.list[u+T].main.feels_like*t+n).toFixed(1),c]}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Humidity:"," ",e.list[u+T].main.humidity,"%"]})]})}),Object(B.jsx)(z.a,{item:!0,children:Object(B.jsxs)(W.a,{children:[Object(B.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center",children:"Day 3"}),Object(B.jsxs)(W.a,{children:[Object(B.jsx)("img",{src:d[e.list[x+T].weather[0].main],alt:"weather icon",style:{width:"10em",height:"10em"}}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Description:"," ",e.list[x+T].weather[0].description]})]}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Temperature:"," ",(e.list[x+T].main.temp*t+n).toFixed(1),c]}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Feels Like:"," ",(e.list[x+T].main.feels_like*t+n).toFixed(1),c]}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Humidity:"," ",e.list[x+T].main.humidity,"%"]})]})}),Object(B.jsx)(z.a,{item:!0,children:Object(B.jsxs)(W.a,{children:[Object(B.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center",children:"Day 4"}),Object(B.jsxs)(W.a,{children:[Object(B.jsx)("img",{src:d[e.list[p+T].weather[0].main],alt:"weather icon",style:{width:"10em",height:"10em"}}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Description:"," ",e.list[p+T].weather[0].description]})]}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Temperature:"," ",(e.list[p+T].main.temp*t+n).toFixed(1),c]}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Feels Like:"," ",(e.list[p+T].main.feels_like*t+n).toFixed(1),c]}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Humidity:"," ",e.list[p+T].main.humidity,"%"]})]})}),Object(B.jsx)(z.a,{item:!0,children:Object(B.jsxs)(W.a,{children:[Object(B.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center",children:"Day 5"}),Object(B.jsxs)(W.a,{children:[Object(B.jsx)("img",{src:d[e.list[O+T].weather[0].main],alt:"weather icon",style:{width:"10em",height:"10em"}}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Description:"," ",e.list[O+T].weather[0].description]})]}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Temperature:"," ",(e.list[O+T].main.temp*t+n).toFixed(1),c]}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Feels Like:"," ",(e.list[O+T].main.feels_like*t+n).toFixed(1),c]}),Object(B.jsxs)(m.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",align:"center",children:["Humidity:"," ",e.list[O+T].main.humidity,"%"]})]})})]}))}))),D(!1)};return a.useEffect((function(){i&&"city name"===h&&Z(r).then((function(e){return je(e)}))}),[r,i,h]),a.useEffect((function(){i&&"zip code"===h&&K(o).then((function(e){je(e)}))}),[o,i,h]),a.useEffect((function(){"current location"===h&&Q(l,j).then((function(e){je(e)}))}),[l,j,h]),a.useEffect((function(){v&&je(v)}),[T,G]),a.useEffect((function(){v&&function(e,t){Y(Object(B.jsx)(he,{center:[e,t],zoom:4}))}(v.city.coord.lat,v.city.coord.lon)}),[v]),I?" ":Object(B.jsx)("div",{children:Object(B.jsxs)(z.a,{spacing:3,children:[Object(B.jsx)(z.a,{item:!0,xs:12}),Object(B.jsx)(z.a,{item:!0,xs:12,children:Object(B.jsx)(H.a,{elevation:4,children:F})}),Object(B.jsx)(z.a,{item:!0,xs:12}),Object(B.jsx)(z.a,{item:!0,xs:12,children:U})]})})}function be(e){var t=c.a.useState(),n=Object(s.a)(t,2),a=n[0],i=n[1],r=c.a.useState(),o=Object(s.a)(r,2),l=o[0],j=o[1],h=c.a.useState(),d=Object(s.a)(h,2),b=d[0],u=d[1],x=c.a.useState(!1),p=Object(s.a)(x,2),O=p[0],g=p[1],f=c.a.useState("city name"),v=Object(s.a)(f,2),w=v[0],y=v[1],S=c.a.useState(""),F=Object(s.a)(S,2),C=F[0],W=F[1];c.a.useEffect((function(){navigator.geolocation&&navigator.geolocation.watchPosition((function(e){u(e),i(e.coords.latitude),j(e.coords.longitude)}))}),[navigator.geolocation]);var _=function(e){g(!1),W(e.target.value)};return"weather"===e.pageState?Object(B.jsx)(D.a,{children:Object(B.jsxs)(z.a,{container:!0,spacing:3,children:[Object(B.jsx)(z.a,{item:!0,xs:12}),Object(B.jsx)(z.a,{item:!0,xs:12,children:Object(B.jsxs)(m.a,{variant:"h5",component:"h5",children:["Search by inputing ",w]})}),Object(B.jsx)(z.a,{item:!0,xs:12,children:Object(B.jsx)(H.a,{elevation:4,children:Object(B.jsxs)(z.a,{container:!0,spacing:3,children:[Object(B.jsx)(z.a,{item:!0,xs:3,children:Object(B.jsxs)(M.a,{component:"fieldset",children:[Object(B.jsx)(E.a,{component:"legend",children:"Search Setting"}),Object(B.jsxs)(A.a,{color:"primary","aria-label":"location",name:"searchState",value:w,onChange:function(e){g(!1),y(e.target.value)},children:[Object(B.jsx)(T.a,{color:"primary",value:"city name",control:Object(B.jsx)(L.a,{}),label:"City Name"}),Object(B.jsx)(T.a,{color:"primary",value:"zip code",control:Object(B.jsx)(L.a,{}),label:"Zip Code"}),Object(B.jsx)(T.a,{color:"primary",value:"current location",control:Object(B.jsx)(L.a,{}),label:"Geolocation"})]})]})}),Object(B.jsx)(z.a,{item:!0,xs:6,children:"city name"===w||"zip code"===w?Object(B.jsxs)("div",{children:[Object(B.jsx)(k.a,{placeholder:"Search...",value:C,onChange:_,inputProps:{"aria-label":"description"},startAdornment:Object(B.jsx)(I.a,{position:"start",children:Object(B.jsx)(P.a,{})})}),Object(B.jsx)(N.a,{variant:"contained",color:"primary",onClick:function(){g(!0)},children:"Submit"})]}):b?Object(B.jsxs)("h4",{children:["Current geolocation: Latitude:",a,", Longitud:",l]}):Object(B.jsx)("h2",{children:"Unable to get you geolocation"})})]})})}),Object(B.jsx)(z.a,{item:!0,xs:12,children:("city name"===w?Object(B.jsx)(de,{city:C,submitedState:O,searchState:w}):"zip code"===w?Object(B.jsx)(de,{zip:C,submitedState:O,searchState:w}):"current location"===w&&a&&l?(console.log("llegue"),Object(B.jsx)(de,{lat:a,lon:l,searchState:w})):void 0)||" "})]})}):"licenses"===e.pageState?Object(B.jsx)(q,{}):Object(B.jsx)("h1",{children:"You shouldn't be here"})}var ue=function(){var e=c.a.useState("weather"),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)("div",{className:"appBar",children:Object(B.jsx)(F,{pageState:n,setPageState:function(e){a(e)}})}),Object(B.jsx)(be,{pageState:n})]})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,182)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};n(105).config(),r.a.render(Object(B.jsx)(ue,{}),document.getElementById("root")),me()},94:function(e,t,n){},95:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.27ceb818.chunk.js.map
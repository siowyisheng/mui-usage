(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,a,t){e.exports=t(66)},51:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),c=t.n(o),i=(t(51),t(3)),s=t(84),l=t(39),u=t(31),p=t.n(u),d=Object(l.a)({palette:{primary:p.a,secondary:{main:"#f44336"}}}),m=t(79),h=t(80),b=t(81),g=t(82),j=t(83),O=t(86),w=t(67),f=t(85),y=Object(f.a)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"}});function v(){var e=y();return r.a.createElement(O.a,{className:e.root},"My Button")}var x=t(4),k=Object(f.a)(function(e){return{root:{padding:16,color:e.palette.primary.main,"& p":{color:"green","& span":{color:"blue"}}}}});function E(e){var a=e.className,t=k();return r.a.createElement(w.a,{className:Object(x.a)(t.root,a)},"This is red since it is inside the paper.",r.a.createElement("p",null,"This is green since it is inside the paragraph"," ",r.a.createElement("span",null,"and this is blue since it is inside the span")))}var S=t(40),W=Object(f.a)({foo:function(e){return{width:500,height:200,backgroundColor:e.color}}});function N(e){var a=e.className,t=Object(n.useState)("black"),o=Object(S.a)(t,2),c=o[0],i=o[1],s=W({color:c});return r.a.createElement(w.a,{className:"".concat(s.foo," ").concat(a)},r.a.createElement("input",{type:"text",value:c,onChange:function(e){return i(e.target.value)}}))}var T=Object(f.a)(function(e){return{root:{padding:16,maxWidth:600},card:{maxWidth:250,margin:e.spacing(3)}}}),B=[{title:"Nested Selectors",description:"One easy way to style elements within MuiComponents."},{title:"Styles from props",description:"Create dynamic styles using props."}],C=function(){var e=T(),a=Object(m.a)();return console.log(a),Object(i.a)("div",{css:{backgroundColor:"#ffe",minHeight:"100vh",display:"flex",alignItems:"center",flexWrap:"wrap",flexDirection:"column",justifyContent:"center",fontSize:"calc(10px + 2vmin)"}},Object(i.a)(h.a,{variant:"h1"},"Material UI usage"),Object(i.a)("div",{css:{display:"flex"}},B.map(function(a){return Object(i.a)(b.a,{className:e.card},Object(i.a)(g.a,null,Object(i.a)(h.a,{color:"textSecondary",gutterBottom:!0},a.title),Object(i.a)(h.a,{variant:"body2",component:"p"},a.description)),Object(i.a)(j.a,null,Object(i.a)(O.a,{size:"small"},"Learn")))})),Object(i.a)(w.a,{classes:e},Object(i.a)(h.a,null,"First, we create a theme with createMuiTheme."),Object(i.a)(h.a,null,"The theme allows us to configure Mui components globally. We can:"),Object(i.a)(h.a,null,"- override default styles."),Object(i.a)(h.a,null,"- provide default props."),Object(i.a)(h.a,null,"- change primary, secondary and error colors."),Object(i.a)(h.a,null,"- change fonts."),Object(i.a)(h.a,null,"We pass our created theme to ThemeProvider, which we will wrap around the entire app. When we want to override styling, we can makeStyles to create a hook, useStyles, which when run, returns `classes` which we can pass into the customized components.")),Object(i.a)(v,null),Object(i.a)(O.a,{color:"primary",variant:"contained"},"Just a button"),Object(i.a)(E,{css:{marginTop:8}}),Object(i.a)(N,{css:{marginTop:8}}))},M=function(){return Object(i.a)(s.a,{theme:d},Object(i.a)(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(65);c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.5b613b15.chunk.js.map
(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),d=a(8),o=a.n(d),r=(a(13),a(2)),i=a(3),s=a(4),u=a(6),m=a(5),l=(a(14),a(0)),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(l.jsx)("div",{id:"display",children:this.props.display})}}]),a}(c.a.Component),y=[{key:"Q",keyCode:81,id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{key:"W",keyCode:87,id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{key:"E",keyCode:69,id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{key:"A",keyCode:65,id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{key:"S",keyCode:83,id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{key:"D",keyCode:68,id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{key:"Z",keyCode:90,id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{key:"X",keyCode:88,id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{key:"C",keyCode:67,id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleKeydown=function(e){for(var t=0;t<y.length;t++)y[t].keyCode===e.keyCode&&n.setState({display:String.fromCharCode(e.keyCode)})},n.state={display:""},n.handleClick=n.handleClick.bind(Object(s.a)(n)),n.audio=c.a.createRef(),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeydown),this.setState({display:"Drop a beat"})}},{key:"componenetWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeydown)}},{key:"handleClick",value:function(e){console.log("click e: "+e);var t=e.target.querySelector("audio");t.play(),t.currentTime=0,this.setState({display:e.target.value})}},{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{id:"drum-machine",children:[Object(l.jsx)("div",{id:"drumpad",children:y.map((function(t){return Object(l.jsxs)("button",{className:"drum-pad",id:t.key,onClick:e.handleClick,onKeyDown:e.handleClick,value:t.key,children:[t.key,Object(l.jsx)("audio",{className:"clip",id:t.key,src:t.url,ref:e.audio})]},t.key)}))}),Object(l.jsx)(p,{display:this.state.display})]})}}]),a}(c.a.Component),h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,d=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),d(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.19ea0c99.chunk.js.map
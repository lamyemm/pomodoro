(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,s){t.exports=s(18)},16:function(t,e,s){},18:function(t,e,s){"use strict";s.r(e);var a=s(0),n=s.n(a),i=s(9),o=s.n(i),r=(s(16),s(2)),c=s(3),m=s(5),l=s(4),u=s(6),d=s(1),h=s(7),p=function(t){function e(){return Object(r.a)(this,e),Object(m.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"logo"},n.a.createElement("p",null,"Pomodoro")),n.a.createElement("div",{className:"time"},n.a.createElement("p",null,this.props.timeNow.minute<10?"0"+this.props.timeNow.minute:this.props.timeNow.minute,":",this.props.timeNow.seconde<10?"0"+this.props.timeNow.seconde:this.props.timeNow.seconde)),n.a.createElement("div",null,n.a.createElement("button",Object(h.a)({className:this.props.timeNow.start?"invisible":"card-footer-item",disabled:this.props.stop,onClick:this.props.addclick},"className","addOrRemove"),n.a.createElement("i",{className:"fas fa-plus"})),n.a.createElement("button",Object(h.a)({className:this.props.timeNow.start?"invisible":"card-footer-item",onClick:this.props.removeclick},"className","addOrRemove"),n.a.createElement("i",{className:"fas fa-minus"}))),n.a.createElement("div",{className:"toggle"},n.a.createElement("button",{className:"card-footer-item",onClick:this.props.startButton},this.props.timeNow.start?"Reset":"Start")))}}]),e}(a.Component),v=function(t){function e(t){var s;return Object(r.a)(this,e),(s=Object(m.a)(this,Object(l.a)(e).call(this,t))).state={start:!1,minute:25,seconde:0,stockMin:25},s.startInterval=s.startInterval.bind(Object(d.a)(Object(d.a)(s))),s.secondsAndMinutes=s.secondsAndMinutes.bind(Object(d.a)(Object(d.a)(s))),s.addMinute=s.addMinute.bind(Object(d.a)(Object(d.a)(s))),s.removeMinute=s.removeMinute.bind(Object(d.a)(Object(d.a)(s))),s}return Object(u.a)(e,t),Object(c.a)(e,[{key:"startInterval",value:function(){!1===this.state.start?this.setState({start:!0},function(){this.timerSeconde=setInterval(this.secondsAndMinutes,1e3)}):(clearInterval(this.timerSeconde),this.setState({start:!1,minute:this.state.stockMin,seconde:0}))}},{key:"secondsAndMinutes",value:function(){0===this.state.minute&&0===this.state.seconde||(0===this.state.seconde?(this.state.minute-=1,this.state.seconde=60):this.setState({seconde:this.state.seconde-=1}))}},{key:"addMinute",value:function(){if(!this.state.start){if(60===this.state.minute)return;this.setState({minute:this.state.minute+=1})}}},{key:"removeMinute",value:function(){if(!this.state.start){if(0===this.state.minute)return;this.setState({minute:this.state.minute-=1})}}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(p,{startButton:this.startInterval,timeNow:this.state,addclick:this.addMinute,removeclick:this.removeMinute}))}}]),e}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.a7823bd9.chunk.js.map
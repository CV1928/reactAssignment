(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),l=a.n(s),c=(a(15),a(1)),o=a(2),i=a(4),m=a(3),u=a(5),d=a(8),E=(a(17),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleInput=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(d.a)({},a,n))},e.submitNote=function(){var t={todo:e.state.todo,estTime:e.state.time,startTime:0,endTime:0,total:!1,start:0,end:0};e.setState(function(e){return{notes:e.notes.concat(t),todo:"",time:""}})},e.start=function(t){var a=new Date,n=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();e.setState({notes:e.state.notes.map(function(e,r){return r==t.target.name?Object.assign({},e,{startTime:n},{start:a.getTime()}):e})})},e.end=function(t){var a=new Date,n=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();0!=e.state.notes[t.target.name].startTime?e.setState({notes:e.state.notes.map(function(e,r){return r==t.target.name?Object.assign({},e,{endTime:n},{end:a.getTime()},{total:!0}):e})}):alert("Please Start the task first")},e.state={todo:"",time:"",notes:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.notes.map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",{style:{textAlign:"center"}},t.todo),r.a.createElement("td",{style:{textAlign:"center"}},t.estTime),0===e.state.notes[a].startTime?r.a.createElement("td",{style:{textAlign:"center"}},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("button",{name:a,className:"btn btn-primary btn-sm",type:"button",variant:"contained",color:"primary",onClick:function(t){return e.start(t)}},"Start"))):r.a.createElement("td",{style:{textAlign:"center"}},e.state.notes[a].startTime),0===e.state.notes[a].endTime?r.a.createElement("td",{style:{textAlign:"center"}},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("button",{name:a,className:"btn btn-primary btn-sm",type:"button",variant:"contained",color:"primary",onClick:function(t){return e.end(t)}},"End"))):r.a.createElement("td",{style:{textAlign:"center"}},e.state.notes[a].endTime),e.state.notes[a].total?r.a.createElement("td",{style:{textAlign:"center"}},new Date(Number(e.state.notes[a].end)-Number(e.state.notes[a].start)).toISOString().substr(11,8)):r.a.createElement("td",{style:{textAlign:"center"}},"--:--:--"))});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"scores-block1 clearfix"},r.a.createElement("div",{className:"bg-white shadow-sm Assessment_Results"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},"Todo :  "),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{className:"form-control",type:"text",name:"todo",placeholder:"Add Todo",onChange:function(t){e.handleInput(t)},value:this.state.todo}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},"Estimated Time (minutes) : "),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{className:"form-control",type:"text",name:"time",placeholder:"Estimated time",onChange:function(t){e.handleInput(t)},value:this.state.time}))),r.a.createElement("button",{onClick:this.submitNote,className:"btn btn-primary btn-lg",type:"button",variant:"contained",color:"primary"},"Submit"))),r.a.createElement("table",{className:"table",style:{marginTop:"2rem"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," ",r.a.createElement("span",{className:"icon-question-circle1",style:{marginRight:"2px"}}),"ToDo"),r.a.createElement("th",null," ",r.a.createElement("span",{className:"icon-clock",style:{marginRight:"2px"}}),"Estimated Time(minutes)"),r.a.createElement("th",null," ",r.a.createElement("span",{className:"icon-clock",style:{marginRight:"2px"}}),"Start Time(HH:MM:SS)"),r.a.createElement("th",null," ",r.a.createElement("span",{className:"icon-clock",style:{marginRight:"2px"}}),"End Time(HH:MM:SS)"),r.a.createElement("th",null," ",r.a.createElement("span",{className:"icon-clock",style:{marginRight:"2px"}}),"Total Time(minutes)"))),r.a.createElement("tbody",null,t)))))}}]),t}(r.a.Component)),g=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(E,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.3a98e48c.chunk.js.map
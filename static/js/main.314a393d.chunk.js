(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(7),r=a.n(l),c=a(1),o=a(2),m=a(4),i=a(3),u=a(5),d=a(8),b=(a(15),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(i.a)(t).call(this))).handleInput=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(d.a)({},a,n))},e.submitNote=function(){var t={todo:e.state.todo,estTime:e.state.time,startTime:0,endTime:0,total:!1,start:0,end:0};e.setState(function(e){return{notes:e.notes.concat(t),todo:"",time:""}})},e.start=function(t){var a=new Date,n=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();e.setState({notes:e.state.notes.map(function(e,s){return s==t.target.name?Object.assign({},e,{startTime:n},{start:a.getTime()}):e})})},e.end=function(t){var a=new Date,n=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();0!=e.state.notes[t.target.name].startTime?e.setState({notes:e.state.notes.map(function(e,s){return s==t.target.name?Object.assign({},e,{endTime:n},{end:a.getTime()},{total:!0}):e})}):alert("Please Start the task first")},e.state={todo:"",time:"",notes:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.notes.map(function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",{style:{textAlign:"center"}},t.todo),s.a.createElement("td",{style:{textAlign:"center"}},t.estTime),0===e.state.notes[a].startTime?s.a.createElement("td",{style:{textAlign:"center"}},s.a.createElement("div",{style:{width:"100%"}},s.a.createElement("button",{name:a,className:"btn btn-primary btn-sm",type:"button",variant:"contained",color:"primary",onClick:function(t){return e.start(t)}},"Start"))):s.a.createElement("td",{style:{textAlign:"center"}},e.state.notes[a].startTime),0===e.state.notes[a].endTime?s.a.createElement("td",{style:{textAlign:"center"}},s.a.createElement("div",{style:{width:"100%"}},s.a.createElement("button",{name:a,className:"btn btn-primary btn-sm",type:"button",variant:"contained",color:"primary",onClick:function(t){return e.end(t)}},"End"))):s.a.createElement("td",{style:{textAlign:"center"}},e.state.notes[a].endTime),e.state.notes[a].total?s.a.createElement("td",{style:{textAlign:"center"}},new Date(Number(e.state.notes[a].end)-Number(e.state.notes[a].start)).toISOString().substr(11,8)):s.a.createElement("td",{style:{textAlign:"center"}},"--:--:--"))});return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"scores-block1 clearfix"},s.a.createElement("div",{className:"bg-white shadow-sm Assessment_Results"},s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement("form",null,s.a.createElement("div",{className:"form-group row"},s.a.createElement("label",{className:"col-sm-3 col-form-label"},"Todo :  "),s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("input",{className:"form-control",type:"text",name:"todo",placeholder:"Add Todo",onChange:function(t){e.handleInput(t)},value:this.state.todo}))),s.a.createElement("div",{className:"form-group row"},s.a.createElement("label",{className:"col-sm-3 col-form-label"},"Estimated Time (minutes) : "),s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("input",{className:"form-control",type:"number",name:"time",placeholder:"Estimated time",onChange:function(t){e.handleInput(t)},value:this.state.time}))),""===this.state.todo||""===this.state.time?s.a.createElement("button",{title:"Please add todo and time",disabled:!0,className:"btn btn-lg",type:"button",variant:"contained"},"Submit"):s.a.createElement("button",{onClick:this.submitNote,className:"btn btn-primary btn-lg",type:"button",variant:"contained",color:"primary"},"Submit"))),0!==this.state.notes.length&&s.a.createElement("table",{className:"table",style:{marginTop:"2rem"}},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null," ",s.a.createElement("span",{className:"icon-question-circle1",style:{marginRight:"2px"}}),"ToDo"),s.a.createElement("th",null," ",s.a.createElement("span",{className:"icon-clock",style:{marginRight:"2px"}}),"Estimated Time(minutes)"),s.a.createElement("th",null," ",s.a.createElement("span",{className:"icon-clock",style:{marginRight:"2px"}}),"Start Time(HH:MM:SS)"),s.a.createElement("th",null," ",s.a.createElement("span",{className:"icon-clock",style:{marginRight:"2px"}}),"End Time(HH:MM:SS)"),s.a.createElement("th",null," ",s.a.createElement("span",{className:"icon-clock",style:{marginRight:"2px"}}),"Total Time(HH:MM:SS)"))),s.a.createElement("tbody",null,t)))))}}]),t}(s.a.Component)),E=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(b,null)}}]),t}(n.Component);r.a.render(s.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.314a393d.chunk.js.map
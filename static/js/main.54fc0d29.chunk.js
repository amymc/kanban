(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),i=(n(27),n(6)),u=n(1),l=n(2),s=n(20),d=n(7),f=n(5),p=n(12),b=n(13),m=n(15),v=n(14),g=n(17),h=n(19),j=n.n(h),k={backlog:"Backlog",inProgress:"In Progress",completed:"Completed"},O=function(e){return Object.keys(k).find(function(t){return k[t]===e})},x=function(e,t){return Object.keys(e).reduce(function(n,a){return e[a].stage===t&&(n[a]=e[a]),n},{})};function y(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}var E=r.a.createContext(),C=function(){return Object(a.useContext)(E)},S=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={stage:null,currentTaskId:null,tasks:{}},n.onChange=function(e,t){n.setState(Object(f.a)({},e,t))},n.saveTask=function(e,t){var a=e.title,r=e.description,c=e.dueDate,o=n.state,i=o.stage,u=o.tasks,l=u[t]?u[t].stage:i,s=Object(f.a)({},t||j()(),{title:a,description:r,dueDate:new Date(c),stage:l});n.setState({tasks:Object(d.a)({},n.state.tasks,s)})},n.deleteTask=function(e){var t=n.state.tasks,a=(t[e],Object(s.a)(t,[e].map(y)));n.setState({tasks:a})},n.updateTaskStage=function(e,t){var a=k[t]===k.completed?new Date:n.state.tasks[e].dueDate;n.setState({tasks:Object(d.a)({},n.state.tasks,Object(f.a)({},e,Object(d.a)({},n.state.tasks[e],{stage:t,dueDate:a})))})},n}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=this.state;return r.a.createElement(E.Provider,{value:{onChange:this.onChange,saveTask:this.saveTask,deleteTask:this.deleteTask,currentTaskId:t.currentTaskId,updateTaskStage:this.updateTaskStage,tasks:t.tasks}},e.children)}}]),t}(r.a.Component),w=E.Consumer,T=r.a.createContext(),N=function(){return Object(a.useContext)(T)},D=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={stage:null,shouldShowModal:!1},n.toggleModal=function(e){n.setState({shouldShowModal:!n.state.shouldShowModal,stage:e})},n}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=this.state;return r.a.createElement(T.Provider,{value:{toggleModal:this.toggleModal,shouldShowModal:t.shouldShowModal,stage:t.stage}},e.children)}}]),t}(r.a.Component),z=T.Consumer,M=n(8);function P(){var e=Object(u.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 14px;\n"]);return P=function(){return e},e}var I="#60a7f0",V="#5bcebd",H="#ec3330",B="#7858f6",A="#f4f3f8",F="#e9e9ef",q="#fff",J=Object(l.a)(P());function W(){var e=Object(u.a)(["\n  ",";\n  height: 42px;\n  background-color: var(--background-color);\n  color: ",";\n  border: none;\n  border-radius: 8px;\n  padding: 14px 18px;\n  &:hover {\n    background-color: ",";\n    cursor: pointer;\n  }\n"]);return W=function(){return e},e}var L=Object(l.a)(W(),J,q,B),U=function(e){var t=e.label,n=e.onClick,a=e.buttonStyle,c=e.isSecondaryStyle,o=e.type;return r.a.createElement("button",{style:{"--background-color":"".concat(c?V:I)},type:o||"button",className:"".concat(L," ").concat(a),onClick:n},t)};function $(){var e=Object(u.a)(["\n  width: 100%;\n  border-radius: 0;\n"]);return $=function(){return e},e}function G(){var e=Object(u.a)(["\n  display: flex;\n"]);return G=function(){return e},e}var K=Object(l.a)(G()),Q=Object(l.a)($()),R=function(e){var t=e.id,n=e.stage,c=C().updateTaskStage,o=k[n];return r.a.createElement("div",{className:K},o===k.backlog&&r.a.createElement(U,{buttonStyle:Q,onClick:function(){return c(t,O(k.inProgress))},label:"Start"}),o===k.inProgress&&r.a.createElement(a.Fragment,null,r.a.createElement(U,{buttonStyle:Q,onClick:function(){return c(t,O(k.backlog))},label:"Backlog"}),r.a.createElement(U,{buttonStyle:Q,isSecondaryStyle:!0,onClick:function(){return c(t,O(k.completed))},label:"Complete"})),o===k.completed&&r.a.createElement(U,{buttonStyle:Q,onClick:function(){return c(t,O(k.inProgress))},label:"Undo"}))};function X(){var e=Object(u.a)(["\n  vertical-align: middle;\n"]);return X=function(){return e},e}var Y=Object(l.a)(X()),Z=function(e){var t=e.color,n=e.iconStyle;return r.a.createElement("svg",{className:"".concat(Y," ").concat(n),viewBox:"0 0 485.213 485.212",fill:t},r.a.createElement("path",{d:"M60.652 75.816V15.163C60.652 6.781 67.433 0 75.817 0c8.38 0 15.161 6.781 15.161 15.163v60.653c0 8.38-6.781 15.161-15.161 15.161-8.384.001-15.165-6.781-15.165-15.161zm257.772 15.162c8.378 0 15.163-6.781 15.163-15.161V15.163C333.587 6.781 326.802 0 318.424 0c-8.382 0-15.168 6.781-15.168 15.163v60.653c0 8.38 6.786 15.162 15.168 15.162zm166.788 272.928c0 66.996-54.312 121.307-121.303 121.307-66.986 0-121.302-54.311-121.302-121.307 0-66.986 54.315-121.3 121.302-121.3 66.991 0 121.303 54.313 121.303 121.3zm-30.322 0c0-50.161-40.81-90.976-90.98-90.976-50.166 0-90.976 40.814-90.976 90.976 0 50.171 40.81 90.98 90.976 90.98 50.17 0 90.98-40.809 90.98-90.98zM121.305 181.955H60.652v60.651h60.653v-60.651zM60.652 333.584h60.653V272.93H60.652v60.654zm90.977-90.978h60.654v-60.651h-60.654v60.651zm0 90.978h60.654V272.93h-60.654v60.654zM30.328 360.891V151.628H363.91v60.653h30.327V94c0-18.421-14.692-33.349-32.843-33.349h-12.647v15.166c0 16.701-13.596 30.325-30.322 30.325-16.731 0-30.326-13.624-30.326-30.325V60.651H106.14v15.166c0 16.701-13.593 30.325-30.322 30.325-16.733 0-30.327-13.624-30.327-30.325V60.651H32.859C14.707 60.651.001 75.579.001 94v266.892c0 18.36 14.706 33.346 32.858 33.346h179.424v-30.331H32.859c-1.374-.001-2.531-1.42-2.531-3.016zm272.928-118.285v-60.651h-60.648v60.651h60.648zm106.143 121.3h-45.49v-45.49c0-8.377-6.781-15.158-15.163-15.158s-15.159 6.781-15.159 15.158v60.658c0 8.378 6.777 15.163 15.159 15.163h60.653c8.382 0 15.163-6.785 15.163-15.163 0-8.382-6.781-15.168-15.163-15.168z"}))};function _(){var e=Object(u.a)(["\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n"]);return _=function(){return e},e}function ee(){var e=Object(u.a)(["\n  margin-left: 5px;\n"]);return ee=function(){return e},e}function te(){var e=Object(u.a)(["\n  font-style: italic;\n  margin: 14px 0 0 0;\n"]);return te=function(){return e},e}function ne(){var e=Object(u.a)(["\n  margin: 0 0 15px 0;\n  font-size: 12px;\n"]);return ne=function(){return e},e}function ae(){var e=Object(u.a)(["\n  border: ",";\n  border-bottom: 0;\n  padding: 18px 12px 14px 12px;\n  &:hover {\n    cursor: pointer;\n    background-color: ",";\n  },\n"]);return ae=function(){return e},e}function re(){var e=Object(u.a)(["\n  margin: 15px 10px auto 10px;\n  font-size: 12px;\n  border-radius: 4px;\n  overflow: hidden;\n  background-color: ",";\n"]);return re=function(){return e},e}var ce=M.a.div(re(),function(e){return e.isCompleted?"".concat(F):"".concat(q)}),oe=M.a.div(ae(),function(e){return"2px solid ".concat(e.isCompleted?"transparent":"".concat(F))},F),ie=Object(l.a)(ne()),ue=Object(l.a)(te()),le=Object(l.a)(ee()),se=Object(l.a)(_()),de=function(e){var t=e.description,n=e.dueDate,a=e.id,c=e.title,o=e.stage,i=C().onChange,u=N().toggleModal,l=k[o]===k.completed;return r.a.createElement(ce,{isCompleted:l},r.a.createElement(oe,{isCompleted:l,onClick:function(e){e.stopPropagation(),i("currentTaskId",a),u()}},r.a.createElement("h2",{className:ie},c),t,r.a.createElement("p",{className:ue,style:{color:l?V:B}},l?r.a.createElement("span",{className:se},"\u2714"):r.a.createElement(Z,{color:B,iconStyle:se}),r.a.createElement("span",{className:le},l?"Completed":"Due"," ",n.toDateString()))),r.a.createElement(R,{stage:o,id:a}))};function fe(){var e=Object(u.a)(["\n  border-radius: 0;\n  margin-top: 15px;\n"]);return fe=function(){return e},e}function pe(){var e=Object(u.a)(["\n  margin: 30px 22px 0 22px;\n  font-size: 14px;\n"]);return pe=function(){return e},e}function be(){var e=Object(u.a)(["\n  width: 240px;\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  background-color: ",";\n  border-radius: 8px;\n  margin: 0 8px;\n  padding-bottom: ",";\n"]);return be=function(){return e},e}var me=M.a.div(be(),q,function(e){return e.canCreateTask?"0":"57px"}),ve=Object(l.a)(pe()),ge=Object(l.a)(fe()),he=function(e){var t=e.canCreateTask,n=e.heading,a=e.tasks,c=e.stage,o=C().onChange,u=N().toggleModal;return r.a.createElement(me,{canCreateTask:t},r.a.createElement("h2",{className:ve},n),Object.entries(a).map(function(e,t){var n=Object(i.a)(e,2),a=n[0],c=n[1];return r.a.createElement(de,Object.assign({key:t,id:a},c))}),t&&r.a.createElement(U,{label:"Create Task",onClick:function(e){e.preventDefault(),o("stage",c),o("currentTaskId",null),u()},buttonStyle:ge}))};function je(){var e=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0.5;\n  background-color: ",";\n"]);return je=function(){return e},e}function ke(){var e=Object(u.a)(["\n  position: absolute;\n  top: 40px;\n  left: 0;\n  right: 0;\n  width: 420px;\n  margin: 0 auto;\n  padding: 34px;\n  background-color: ",";\n  border-radius: 8px;\n  box-shadow: 0px 0px 6px ",";\n"]);return ke=function(){return e},e}var Oe=Object(l.a)(ke(),q,A),xe=Object(l.a)(je(),q),ye=function(e){var t=e.children;return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:xe}),r.a.createElement("div",{className:Oe},t))};function Ee(){var e=Object(u.a)(["\n  color: ",";\n  background-color: transparent;\n  margin-right: 8px;\n  &:hover {\n    color: ",";\n  }\n"]);return Ee=function(){return e},e}function Ce(){var e=Object(u.a)(["\n  margin-right: auto;\n  background-color: ",";\n"]);return Ce=function(){return e},e}function Se(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 14px;\n"]);return Se=function(){return e},e}function we(){var e=Object(u.a)(["\n  ",";\n  min-height: 64px;\n  max-width: 352px;\n"]);return we=function(){return e},e}function Te(){var e=Object(u.a)(["\n  min-height: 32px;\n  border: 2px solid ",";\n  border-radius: 5px;\n  padding: 5px;\n  margin: 5px 0;\n"]);return Te=function(){return e},e}function Ne(){var e=Object(u.a)(["\n  margin: 0 0 12px 0;\n  font-size: 16px;\n"]);return Ne=function(){return e},e}function De(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return De=function(){return e},e}var ze=Object(l.a)(De()),Me=Object(l.a)(Ne()),Pe=Object(l.a)(Te(),F),Ie=Object(l.a)(we(),Pe),Ve=Object(l.a)(Se()),He=Object(l.a)(Ce(),H),Be=Object(l.a)(Ee(),I,q),Ae=function(e){var t=e.title,n=e.description,c=e.dueDate,o=e.id,u=N().toggleModal,l=C(),s=l.saveTask,p=l.deleteTask,b=Object(a.useState)({title:t||"",description:n||"",dueDate:c||""}),m=Object(i.a)(b,2),v=m[0],g=m[1],h=function(e){g(Object(d.a)({},v,Object(f.a)({},e.target.name,e.target.value)))};return r.a.createElement("form",{className:ze,onSubmit:function(e){e.preventDefault(),s(v,o),u()}},r.a.createElement("h1",{className:Me}," ",t?"Edit task":"Create New Task"," "),r.a.createElement("input",{type:"text",value:v.title,placeholder:"Title",name:"title",className:Pe,onChange:h,required:!0}),r.a.createElement("textarea",{type:"text",value:v.description,placeholder:"Description",name:"description",className:Ie,onChange:h}),r.a.createElement("input",{type:"text",onFocus:function(e){return e.currentTarget.type="date"},onBlur:function(e){return e.currentTarget.type="text"},value:v.dueDate.toLocaleString().split(",")[0],placeholder:"Due on",name:"dueDate",className:Pe,onChange:h,required:!0}),r.a.createElement("div",{className:Ve},t&&r.a.createElement(U,{label:"Delete",buttonStyle:He,onClick:function(){p(o),u()}}),r.a.createElement(U,{label:"Cancel",buttonStyle:Be,onClick:u}),t?r.a.createElement(U,{type:"submit",label:"Save"}):r.a.createElement(U,{type:"submit",label:"Create"})))};function Fe(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Fe=function(){return e},e}function qe(){var e=Object(u.a)(["\n  position: relative;\n  height: 100%;\n  padding: 40px;\n  background-color: ",";\n  ",";\n"]);return qe=function(){return e},e}var Je=Object(l.a)(qe(),A,J),We=Object(l.a)(Fe()),Le=function(){return r.a.createElement(S,null,r.a.createElement(w,null,function(e){var t=e.currentTaskId,n=e.tasks;return r.a.createElement(D,null,r.a.createElement(z,null,function(e){var a=e.shouldShowModal;return r.a.createElement("div",{className:Je},r.a.createElement("div",{className:We},Object.entries(k).map(function(e){var t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(he,{key:a,heading:c,canCreateTask:c!==k.completed,stage:a,tasks:x(n,a)})}),a&&r.a.createElement(ye,null,r.a.createElement(Ae,Object.assign({id:t},n[t])))))}))}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.54fc0d29.chunk.js.map
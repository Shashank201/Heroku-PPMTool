(this["webpackJsonpppmtool-react-client"]=this["webpackJsonpppmtool-react-client"]||[]).push([[0],{43:function(e,t,a){e.exports=a(76)},48:function(e,t,a){},49:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(22),o=a.n(c),s=(a(48),a(49),a(5)),i=a(6),l=a(8),m=a(7),u=a(4),p=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.b,{to:"/addProject",className:"btn btn-lg btn-info"},"Create a Project"))},d=a(9),f=a.n(d),h=a(15),v=a(28),E=a.n(v),b=E.a.create({baseURL:"https://svars8-ppmtool.herokuapp.com/"}),j=function(e){e?b.defaults.headers.common.Authorization=e:delete b.defaults.headers.common.Authorization};E.a.interceptors.request.use((function(e){var t=localStorage.getItem("jwtToken");return console.log("interceptor token:"+t),t&&(e.headers.Authorization=t),e}),(function(e){Promise.reject(e)}));var g=b,y="GET_ERRORS",N=function(e,t){return function(){var a=Object(h.a)(f.a.mark((function a(r){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.post("api/project",e).then((function(e){t.push("/dashboard"),r({type:y,payload:{}})})).catch((function(e){r({type:y,payload:e.response.data})}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},O=a(2),k=(a(73),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).onDeleteClick=function(t){e.props.deleteProject(t)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.project;return n.a.createElement("div",{className:"projectItem"},n.a.createElement("div",{className:"projectItem__identifier"},n.a.createElement("span",null,t.projectIdentifier)),n.a.createElement("div",{className:"projectItem__details"},n.a.createElement("h3",null,t.projectName),n.a.createElement("p",null,t.description)),n.a.createElement("div",{className:"projectItem__buttons"},n.a.createElement("ul",{className:"list-group"},n.a.createElement(u.b,{to:"projectBoard/".concat(t.projectIdentifier)},n.a.createElement("li",{className:"list-group-item board"},n.a.createElement("i",{className:"fa fa-flag-checkered pr-1"}," Project Board"))),n.a.createElement(u.b,{to:"updateProject/".concat(t.projectIdentifier)},n.a.createElement("li",{className:"list-group-item update"},n.a.createElement("i",{className:"fa fa-edit pr-1"}," Update Project Info"))),n.a.createElement(u.b,{to:"#"},n.a.createElement("li",{className:"list-group-item delete",onClick:function(){return e.onDeleteClick(t.projectIdentifier)}},n.a.createElement("i",{className:"fa fa-minus-circle pr-1"}," Delete Project"))))))}}]),a}(r.Component)),C=Object(O.b)(null,{deleteProject:function(e){return function(){var t=Object(h.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.delete("api/project/".concat(e)).then((function(t){a({type:"DELETE_PROJECT",payload:e})})).catch((function(e){console.log(e.response.data)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(k),w=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return n.a.createElement("div",{className:"projects"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"section-heading"},"PROJECTS"),n.a.createElement("br",null),n.a.createElement(p,null),n.a.createElement("br",null),n.a.createElement("hr",null),e.map((function(e,t){return n.a.createElement(C,{key:t,project:e})}))))))}}]),a}(r.Component),_=Object(O.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("api/project/all").then((function(e){t({type:"GET_PROJECTS",payload:e.data})})).catch((function(e){console.log(e.response)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(w),P=(a(74),a(1)),S=a.n(P),T=a(24),D=function(){return function(e){localStorage.removeItem("jwtToken"),j(!1),e({type:"REMOVE_CURRENT_USER",payload:{}})}},R=(a(75),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={showMobMenu:!1},e.toggleMobMenuHandler=function(){var t=e.state.showMobMenu;e.setState({showMobMenu:!t})},e.logoutHandler=function(){return e.props.logout()},e}return Object(i.a)(a,[{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,r=t.user,c=n.a.createElement(n.a.Fragment,null,n.a.createElement(u.b,{className:"nav-link",to:"/dashboard"},n.a.createElement("span",null,"Dashboard")),n.a.createElement(u.b,{className:"nav-link",to:"/dashboard"},n.a.createElement("span",null,n.a.createElement("i",{className:"fas fa-user-circle mr-1"}),r?r.fullName:"")),n.a.createElement(u.b,{className:"nav-link",to:"/",onClick:this.logoutHandler},n.a.createElement("span",null," Logout"))),o=n.a.createElement(n.a.Fragment,null,n.a.createElement(u.b,{className:"nav-link ",to:"/register"},n.a.createElement("span",null,"Sign Up")),n.a.createElement(u.b,{className:"nav-link",to:"/login"},n.a.createElement("span",null,"Login")));return e=a&&r?c:o,n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement("div",{className:"logo"},n.a.createElement(u.b,{className:"navbar-brand",to:"/"},n.a.createElement("span",null,"Personal Project Management Tool"))),n.a.createElement("div",{className:"menu-bar"},e),n.a.createElement("div",{className:"toggle-menu-button",onClick:this.toggleMobMenuHandler},n.a.createElement("i",{className:"fa fa-bars"}))),this.state.showMobMenu?n.a.createElement("div",{className:"mob-menu"},e):"")}}]),a}(r.Component));R.proptype={security:S.a.object.isRequired,logout:S.a.func.isRequired};var x=Object(O.b)((function(e){return{security:e.security}}),{logout:D})(R),I=a(11),F=a(13),q=a(10),H=a.n(q),A=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onFieldChangeHandler=function(t){e.setState(Object(F.a)({},t.target.name,t.target.value))},e.onFormSubmit=function(t){t.preventDefault();var a={projectName:e.state.projectName,projectIdentifier:e.state.projectIdentifier,description:e.state.description,start_date:e.state.start_date,end_date:e.state.end_date};e.props.createProject(a,e.props.history)},e}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"section-heading"},"CREATE PROJECT"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onFormSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onFieldChangeHandler,title:"Name is required"}),n.a.createElement("span",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onFieldChangeHandler,title:"Unique ID must be of 4 to 5 characters"}),n.a.createElement("span",{className:"invalid-feedback"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:H()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onFieldChangeHandler,title:"Description is required"}),n.a.createElement("span",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:H()("form-control form-control-lg",{"is-invalid":e.start_date}),name:"start_date",value:this.state.start_date,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.start_date)),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:H()("form-control form-control-lg",{"is-invalid":e.end_date}),name:"end_date",value:this.state.end_date,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.end_date)),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),a}(r.Component),U=Object(O.b)((function(e){return{errors:e.errors}}),{createProject:N})(A),M=a(20),B=a(41),G={},J=a(12),L={projects:[],project:{}},K={project_tasks:[],project_task:{}},W={user:{},validToken:!1},V=Object(M.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":return Object(J.a)(Object(J.a)({},e),{},{projects:t.payload});case"GET_PROJECT":return Object(J.a)(Object(J.a)({},e),{},{project:t.payload});case"DELETE_PROJECT":return Object(J.a)(Object(J.a)({},e),{},{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BACKLOG":return Object(J.a)(Object(J.a)({},e),{},{project_tasks:t.payload});case"GET_PROJECT_TASK":return Object(J.a)(Object(J.a)({},e),{},{project_task:t.payload});case"DELETE_PROJECT_TASK":return Object(J.a)(Object(J.a)({},e),{},{project_tasks:e.project_tasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(J.a)(Object(J.a)({},e),{},{validToken:!0,user:t.payload});case"REMOVE_CURRENT_USER":return Object(J.a)(Object(J.a)({},e),{},{validToken:!1,user:t.payload});default:return e}}}),X={},z=[B.a],$=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Q=window.navigator.userAgent.includes("Chrome")&&$?Object(M.e)(V,X,Object(M.d)(M.a.apply(void 0,z),$)):Object(M.e)(V,X,Object(M.d)(M.a.apply(void 0,z))),Y=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={id:"",projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onFieldChangeHandler=function(t){e.setState(Object(F.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={id:e.state.id,projectName:e.state.projectName,projectIdentifier:e.state.projectIdentifier,description:e.state.description,start_date:e.state.start_date,end_date:e.state.end_date};e.props.createProject(a,e.props.history)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){if(e.project){var t=e.project,a=t.id,r=t.projectName,n=t.projectIdentifier,c=t.description,o=t.start_date,s=t.end_date;this.setState({id:a,projectName:r,projectIdentifier:n,description:c,start_date:o,end_date:s})}e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"section-heading"},"UPDATE PROJECT"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onFieldChangeHandler,title:"Name is required"}),n.a.createElement("span",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",disabled:!0,value:this.state.projectIdentifier,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:H()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onFieldChangeHandler,title:"Description is required"}),n.a.createElement("span",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:H()("form-control form-control-lg",{"is-invalid":e.start_date}),name:"start_date",value:this.state.start_date?this.state.start_date:"",onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.start_date)),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:H()("form-control form-control-lg",{"is-invalid":e.end_date}),name:"end_date",value:this.state.end_date?this.state.end_date:"",onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.end_date)),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),a}(r.Component),Z=Object(O.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(){var a=Object(h.a)(f.a.mark((function a(r){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.get("api/project/".concat(e)).then((function(e){r({type:"GET_PROJECT",payload:e.data})})).catch((function(e){t.push("/dashboard")}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},createProject:N})(Y),ee=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).onDeleteClick=function(){var t=e.props.project_task,a=t.projectIdentifier,r=t.projectSequence;console.log("ProjectIdentifier: ".concat(a," || ProjectSeq : ").concat(r)),e.props.deleteProjectTask(a,r,e.props.history)},e}return Object(i.a)(a,[{key:"render",value:function(){var e,t,a=this.props.project_task;return 1===a.priority&&(t="bg-danger text-light",e="HIGH"),2===a.priority&&(t="bg-warning text-light",e="MEDIUM"),3===a.priority&&(t="bg-info text-light",e="LOW"),n.a.createElement("div",{className:"card mb-1 bg-light"},n.a.createElement("div",{className:"card-header text-primary ".concat(t)},"ID: ",a.projectSequence," -- Priority: ",e),n.a.createElement("div",{className:"card-body bg-light"},n.a.createElement("h5",{className:"card-title"},a.summary),n.a.createElement("p",{className:"card-text text-truncate "},a.acceptanceCriteria),n.a.createElement(u.b,{to:"/updateProjectTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-primary"},"View / Update"),n.a.createElement("button",{className:"btn btn-danger ml-4",onClick:this.onDeleteClick},"Delete")))}}]),a}(r.Component);ee.proptype={deleteProjectTask:S.a.func.isRequired};var te=Object(O.b)(null,{deleteProjectTask:function(e,t,a){return function(){var a=Object(h.a)(f.a.mark((function a(r){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("Are you sure you want to delete ".concat(t," ?"))){a.next=3;break}return a.next=3,g.delete("api/backlog/".concat(e,"/").concat(t)).then((function(e){r({type:"DELETE_PROJECT_TASK",payload:t}),r({type:y,payload:{}})})).catch((function(e){r({type:y,payload:e.response.data})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(ee),ae=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.project_tasks,t=e.filter((function(e){return"TO_DO"===e.status})),a=e.filter((function(e){return"IN_PROGRESS"===e.status})),r=e.filter((function(e){return"DONE"===e.status})),c=t.map((function(e){return n.a.createElement(te,{key:e.id,project_task:e})})),o=a.map((function(e){return n.a.createElement(te,{key:e.id,project_task:e})})),s=r.map((function(e){return n.a.createElement(te,{key:e.id,project_task:e})}));return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-secondary text-white"},n.a.createElement("h5",null,"TO DO"))),c),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-primary text-white"},n.a.createElement("h5",null,"IN PROGRESS"))),o),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-success text-white"},n.a.createElement("h5",null,"DONE"))),s)))}}]),a}(r.Component),re=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.getBacklog(this.props.match.params.id)}},{key:"render",value:function(){var e,t=this.props.match.params.id,a=this.props.backlog.project_tasks,r=this.props.errors;return e=(null===a||void 0===a?void 0:a.length)<1?(null===r||void 0===r?void 0:r.projectNotFound)?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},r.projectNotFound):(null===r||void 0===r?void 0:r.projectIdentifier)?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},r.projectIdentifier):n.a.createElement("div",{className:"alert alert-info text-center",role:"alert"},"No Project Tasks on this board"):n.a.createElement(ae,{project_tasks:a}),n.a.createElement("div",{className:"container projectBoard"},n.a.createElement(u.b,{to:"/addProjectTask/".concat(t),className:"btn btn-primary mb-3"},n.a.createElement("i",{className:"fas fa-plus-circle"}," Create Project Task")),n.a.createElement("br",null),n.a.createElement("hr",null),e)}}]),a}(r.Component);re.proptype={getBacklog:S.a.func.isRequired,backlog:S.a.object.isRequired,errors:S.a.object.isRequired};var ne=Object(O.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:function(e){return function(){var t=Object(h.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("api/backlog/".concat(e)).then((function(e){a({type:"GET_BACKLOG",payload:e.data}),a({type:y,payload:{}})})).catch((function(e){a({type:y,payload:e.response.data})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(re),ce=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:e.props.match.params.id,errors:{}},e.onFieldChangeHandler=function(t){e.setState(Object(F.a)({},t.target.name,t.target.value))},e.onFormSubmit=function(t){t.preventDefault();var a={summary:e.state.summary,acceptanceCriteria:e.state.acceptanceCriteria,status:e.state.status,priority:e.state.priority,dueDate:e.state.dueDate};console.log(a),e.props.addProjectTask(e.state.projectIdentifier,a,e.props.history)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(u.b,{to:"/projectBoard/".concat(this.state.projectIdentifier),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"section-heading"},"ADD PROJECT TASK"),n.a.createElement("p",{className:"lead text-center"},n.a.createElement("strong",null,"Project Name : ",this.state.projectIdentifier)),n.a.createElement("form",{onSubmit:this.onFormSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onFieldChangeHandler,title:"Task summary is required"}),n.a.createElement("span",{className:"invalid-feedback"},e.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onFieldChangeHandler})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onFieldChangeHandler})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onFieldChangeHandler},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onFieldChangeHandler},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),a}(r.Component);ce.proptype={addProjectTask:S.a.func.isRequired,errors:S.a.object.isRequired};var oe=Object(O.b)((function(e){return{errors:e.errors}}),{addProjectTask:function(e,t,a){return function(){var r=Object(h.a)(f.a.mark((function r(n){return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,g.post("api/backlog/".concat(e),t).then((function(t){a.push("/projectBoard/".concat(e)),n({type:y,payload:{}})})).catch((function(e){n({type:y,payload:e.response.data})}));case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})(ce),se=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:"",errors:{}},e.onFieldChangeHandler=function(t){e.setState(Object(F.a)({},t.target.name,t.target.value))},e.onFieldChangeHandler=function(t){e.setState(Object(F.a)({},t.target.name,t.target.value))},e.onFormSubmit=function(t){t.preventDefault();var a=e.state,r=a.projectIdentifier,n=a.projectSequence,c={id:e.state.id,projectSequence:e.state.projectSequence,summary:e.state.summary,acceptanceCriteria:e.state.acceptanceCriteria,status:e.state.status,priority:e.state.priority,dueDate:e.state.dueDate,projectIdentifier:e.state.projectIdentifier};e.props.updateProjectTask(r,n,c,e.props.history)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.getProjectTask(this.props.match.params.backlog_id,this.props.match.params.pt_id,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){if(e.project_task){var t=e.project_task,a=t.id,r=t.projectSequence,n=t.summary,c=t.acceptanceCriteria,o=t.status,s=t.priority,i=t.dueDate,l=t.projectIdentifier;this.setState({id:a,projectSequence:r,summary:n,acceptanceCriteria:c,status:o,priority:s,dueDate:i,projectIdentifier:l})}}},{key:"render",value:function(){var e=this.props.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(u.b,{to:"/projectBoard/".concat(this.props.match.params.backlog_id),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"section-heading"},"UPDATE PROJECT TASK"),n.a.createElement("p",{className:"lead text-center"},n.a.createElement("strong",null,"Project Name: ",this.state.projectIdentifier," | Project Code:"," ",this.state.projectSequence)),n.a.createElement("form",{onSubmit:this.onFormSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onFieldChangeHandler,title:"Task summary is required"}),n.a.createElement("span",{className:"invalid-feedback"},e.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onFieldChangeHandler})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate?this.state.dueDate:"",onChange:this.onFieldChangeHandler})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onFieldChangeHandler},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onFieldChangeHandler},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),a}(r.Component);se.proptype={getProjectTask:S.a.func.isRequired,updateProjectTask:S.a.func.isRequired,project_task:S.a.object.isRequired,errors:S.a.object.isRequired};var ie=Object(O.b)((function(e){return{project_task:e.backlog.project_task,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(){var r=Object(h.a)(f.a.mark((function r(n){return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,g.get("api/backlog/".concat(e,"/").concat(t)).then((function(e){n({type:"GET_PROJECT_TASK",payload:e.data}),n({type:y,payload:{}})})).catch((function(e){n({type:y,payload:e.response.data}),a.push("/dashboard")}));case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},updateProjectTask:function(e,t,a,r){return function(){var n=Object(h.a)(f.a.mark((function n(c){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:g.patch("api/backlog/".concat(e,"/").concat(t),a).then((function(t){c({type:y,payload:{}}),r.push("/projectBoard/".concat(e))})).catch((function(e){c({type:y,payload:e.response.data})}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(se),le=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return n.a.createElement("div",{className:"landing"},n.a.createElement("div",{className:"light-overlay landing-inner text-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:"display-3 mb-4"},"Personal Project Management Tool"),n.a.createElement("p",{className:"lead"},"Create your account to join active projects or start your own"),n.a.createElement("hr",null),n.a.createElement(u.b,{to:"/register",className:"btn btn-lg btn-primary mr-2"},"Sign Up"),n.a.createElement(u.b,{to:"/login",className:"btn btn-lg btn-secondary mr-2"},"Login"))))))}}]),a}(r.Component);le.proptype={security:S.a.object.isRequired};var me=Object(O.b)((function(e){return{security:e.security}}),null)(le),ue=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={username:"",password:""},e.onFormSubmit=function(t){t.preventDefault();var a={username:e.state.username,password:e.state.password};e.props.loginUser(a)},e.onFieldChangeHandler=function(t){e.setState(Object(F.a)({},t.target.name,t.target.value))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){var e=this.props.errors;return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"section-heading"},"LOG IN"),n.a.createElement("form",{onSubmit:this.onFormSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:H()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.password)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),a}(r.Component);ue.proptype={loginUser:S.a.func.isRequired,errors:S.a.object.isRequired,security:S.a.object.isRequired};var pe=Object(O.b)((function(e){return{security:e.security,errors:e.errors}}),{loginUser:function(e){return function(){var t=Object(h.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.post("api/users/login",e).then((function(e){var t=e.data.token;localStorage.setItem("jwtToken",t),j(t);var r=Object(T.a)(t);a({type:"SET_CURRENT_USER",payload:r}),a({type:y,payload:{}})})).catch((function(e){a({type:y,payload:e.response.data})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(ue),de=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={username:"",fullName:"",password:"",confirmPassword:""},e.onFormSubmit=function(t){t.preventDefault();var a={username:e.state.username,fullName:e.state.fullName,password:e.state.password,confirmPassword:e.state.confirmPassword};e.props.createNewUser(a,e.props.history)},e.onFieldChangeHandler=function(t){e.setState(Object(F.a)({},t.target.name,t.target.value))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){var e=this.props.errors;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"section-heading"},"SIGN UP"),n.a.createElement("p",{className:"lead text-center"},"Create your Account"),n.a.createElement("form",{onSubmit:this.onFormSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.fullName}),placeholder:"Name",name:"fullName",value:this.state.fullName,onChange:this.onFieldChangeHandler,title:"Name"}),n.a.createElement("span",{className:"invalid-feedback"},e.fullName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:H()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onFieldChangeHandler,title:"Email"}),n.a.createElement("span",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:H()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onFieldChangeHandler,title:"Password must be atleast 6 characters"}),n.a.createElement("span",{className:"invalid-feedback"},e.password)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:H()("form-control form-control-lg",{"is-invalid":e.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.confirmPassword)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),a}(r.Component);de.proptype={createNewUser:S.a.func.isRequired,error:S.a.object.isRequired,security:S.a.object.isRequired};var fe=Object(O.b)((function(e){return{errors:e.errors,security:e.security}}),{createNewUser:function(e,t){return function(){var a=Object(h.a)(f.a.mark((function a(r){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.post("api/users/register",e).then((function(e){t.push("/login"),r({type:y,payload:{}})})).catch((function(e){r({type:y,payload:e.response.data})}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(de),he=a(42),ve=function(e){var t=e.component,a=e.security,r=Object(he.a)(e,["component","security"]);return n.a.createElement(I.b,Object.assign({},r,{render:function(e){return!0===a.validToken?n.a.createElement(t,e):n.a.createElement(I.a,{to:"/login"})}}))};ve.proptype={security:S.a.object.isRequired};var Ee=Object(O.b)((function(e){return{security:e.security}}),null)(ve),be=localStorage.getItem("jwtToken");if(be){j(be);var je=Object(T.a)(be);Q.dispatch({type:"SET_CURRENT_USER",payload:je});var ge=Date.now()/1e3;je.exp<ge&&(window.location.href="/",Q.dispatch(D()))}var ye=function(){return n.a.createElement(O.a,{store:Q},n.a.createElement("div",{className:"App"},n.a.createElement(u.a,null,n.a.createElement(x,null),n.a.createElement(I.b,{exact:!0,path:"/",component:me}),n.a.createElement(I.b,{exact:!0,path:"/login",component:pe}),n.a.createElement(I.b,{exact:!0,path:"/register",component:fe}),n.a.createElement(I.d,null,n.a.createElement(Ee,{exact:!0,path:"/addProject",component:U}),n.a.createElement(Ee,{exact:!0,path:"/updateProject/:id",component:Z}),n.a.createElement(Ee,{exact:!0,path:"/dashboard",component:_}),n.a.createElement(Ee,{exact:!0,path:"/projectBoard/:id",component:ne}),n.a.createElement(Ee,{exact:!0,path:"/addProjectTask/:id",component:oe}),n.a.createElement(Ee,{exact:!0,path:"/updateProjectTask/:backlog_id/:pt_id",component:ie})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.63c04e9e.chunk.js.map
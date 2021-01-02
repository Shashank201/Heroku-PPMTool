(this["webpackJsonpppmtool-react-client"]=this["webpackJsonpppmtool-react-client"]||[]).push([[0],{43:function(e,t,a){e.exports=a(74)},48:function(e,t,a){},49:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(23),o=a.n(c),s=(a(48),a(49),a(5)),l=a(6),i=a(8),m=a(7),p=a(4),u=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.b,{to:"/addProject",className:"btn btn-lg btn-info"},"Create a Project"))},d=a(9),v=a.n(d),h=a(16),f=a(13),E=a.n(f),b="GET_ERRORS",j=function(e,t){return function(){var a=Object(h.a)(v.a.mark((function a(r){return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.post("https://svars8-ppmtool.herokuapp.com/api/project",e);case 3:t.push("/dashboard"),r({type:b,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:b,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},g=a(2),y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).onDeleteClick=function(t){e.props.deleteProject(t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.project;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card card-body bg-light mb-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"},n.a.createElement("span",{className:"mx-auto"},t.projectIdentifier)),n.a.createElement("div",{className:"col-lg-6 col-md-4 col-8"},n.a.createElement("h3",null,t.projectName),n.a.createElement("p",null,t.description)),n.a.createElement("div",{className:"col-md-4 d-none d-lg-block"},n.a.createElement("ul",{className:"list-group"},n.a.createElement(p.b,{to:"projectBoard/".concat(t.projectIdentifier)},n.a.createElement("li",{className:"list-group-item board"},n.a.createElement("i",{className:"fa fa-flag-checkered pr-1"}," Project Board"))),n.a.createElement(p.b,{to:"updateProject/".concat(t.projectIdentifier)},n.a.createElement("li",{className:"list-group-item update"},n.a.createElement("i",{className:"fa fa-edit pr-1"}," Update Project Info"))),n.a.createElement(p.b,{to:"#"},n.a.createElement("li",{className:"list-group-item delete",onClick:function(){return e.onDeleteClick(t.projectIdentifier)}},n.a.createElement("i",{className:"fa fa-minus-circle pr-1"}," Delete Project"))))))))}}]),a}(r.Component),N=Object(g.b)(null,{deleteProject:function(e){return function(){var t=Object(h.a)(v.a.mark((function t(a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.delete("https://svars8-ppmtool.herokuapp.com/api/project/".concat(e));case 2:a({type:"DELETE_PROJECT",payload:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(y),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return n.a.createElement("div",{className:"projects"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"display-4 text-center"},"Projects"),n.a.createElement("br",null),n.a.createElement(u,null),n.a.createElement("br",null),n.a.createElement("hr",null),e.map((function(e,t){return n.a.createElement(N,{key:t,project:e})}))))))}}]),a}(r.Component),O=Object(g.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(){var e=Object(h.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://svars8-ppmtool.herokuapp.com/api/project/all");case 2:a=e.sent,t({type:"GET_PROJECTS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(k),C=(a(73),a(1)),w=a.n(C),_=function(e){e?E.a.defaults.headers.common.Authorization=e:delete E.a.defaults.headers.common.Authorization},P=a(25),S=function(){return function(e){localStorage.removeItem("jwtToken"),_(!1),e({type:"REMOVE_CURRENT_USER",payload:{}})}},x=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).logoutHandler=function(){return e.props.logout()},e}return Object(l.a)(a,[{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,r=t.user,c=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/dashboard"},"Dashboard"))),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/dashboard"},n.a.createElement("i",{className:"fas fa-user-circle mr-1"}),r?r.fullName:"")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/",onClick:this.logoutHandler},"Logout")))),o=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link ",to:"/register"},"Sign Up")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/login"},"Login"))));return e=a&&r?c:o,n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4"},n.a.createElement("div",{className:"container"},n.a.createElement(p.b,{className:"navbar-brand",to:"/"},"Personal Project Management Tool"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav"},n.a.createElement("span",{className:"navbar-toggler-icon"})),e))}}]),a}(r.Component);x.proptype={security:w.a.object.isRequired,logout:w.a.func.isRequired};var T=Object(g.b)((function(e){return{security:e.security}}),{logout:S})(x),D=a(11),R=a(14),I=a(10),F=a.n(I),H=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onFieldChangeHandler=function(t){e.setState(Object(R.a)({},t.target.name,t.target.value))},e.onFormSubmit=function(t){t.preventDefault();var a={projectName:e.state.projectName,projectIdentifier:e.state.projectIdentifier,description:e.state.description,start_date:e.state.start_date,end_date:e.state.end_date};e.props.createProject(a,e.props.history)},e}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Create Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onFormSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:F()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:F()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:F()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:F()("form-control form-control-lg",{"is-invalid":e.start_date}),name:"start_date",value:this.state.start_date,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.start_date)),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:F()("form-control form-control-lg",{"is-invalid":e.end_date}),name:"end_date",value:this.state.end_date,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.end_date)),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),a}(r.Component),q=Object(g.b)((function(e){return{errors:e.errors}}),{createProject:j})(H),U=a(21),A=a(41),B={},G=a(12),M={projects:[],project:{}},L={project_tasks:[],project_task:{}},J={user:{},validToken:!1},W=Object(U.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":return Object(G.a)(Object(G.a)({},e),{},{projects:t.payload});case"GET_PROJECT":return Object(G.a)(Object(G.a)({},e),{},{project:t.payload});case"DELETE_PROJECT":return Object(G.a)(Object(G.a)({},e),{},{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BACKLOG":return Object(G.a)(Object(G.a)({},e),{},{project_tasks:t.payload});case"GET_PROJECT_TASK":return Object(G.a)(Object(G.a)({},e),{},{project_task:t.payload});case"DELETE_PROJECT_TASK":return Object(G.a)(Object(G.a)({},e),{},{project_tasks:e.project_tasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(G.a)(Object(G.a)({},e),{},{validToken:!0,user:t.payload});case"REMOVE_CURRENT_USER":return Object(G.a)(Object(G.a)({},e),{},{validToken:!1,user:t.payload});default:return e}}}),K={},V=[A.a],X=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),z=window.navigator.userAgent.includes("Chrome")&&X?Object(U.e)(W,K,Object(U.d)(U.a.apply(void 0,V),X)):Object(U.e)(W,K,Object(U.d)(U.a.apply(void 0,V))),$=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={id:"",projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onFieldChangeHandler=function(t){e.setState(Object(R.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={id:e.state.id,projectName:e.state.projectName,projectIdentifier:e.state.projectIdentifier,description:e.state.description,start_date:e.state.start_date,end_date:e.state.end_date};e.props.createProject(a,e.props.history)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){if(e.project){var t=e.project,a=t.id,r=t.projectName,n=t.projectIdentifier,c=t.description,o=t.start_date,s=t.end_date;this.setState({id:a,projectName:r,projectIdentifier:n,description:c,start_date:o,end_date:s})}e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Update Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:F()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:F()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",disabled:!0,value:this.state.projectIdentifier,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:F()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:F()("form-control form-control-lg",{"is-invalid":e.start_date}),name:"start_date",value:this.state.start_date?this.state.start_date:"",onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.start_date)),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:F()("form-control form-control-lg",{"is-invalid":e.end_date}),name:"end_date",value:this.state.end_date?this.state.end_date:"",onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.end_date)),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),a}(r.Component),Q=Object(g.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(){var a=Object(h.a)(v.a.mark((function a(r){var n;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.get("https://svars8-ppmtool.herokuapp.com/api/project/".concat(e));case 3:n=a.sent,r({type:"GET_PROJECT",payload:n.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.push("/dashboard");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},createProject:j})($),Y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).onDeleteClick=function(){var t=e.props.project_task,a=t.projectIdentifier,r=t.projectSequence;console.log("ProjectIdentifier: ".concat(a," || ProjectSeq : ").concat(r)),e.props.deleteProjectTask(a,r,e.props.history)},e}return Object(l.a)(a,[{key:"render",value:function(){var e,t,a=this.props.project_task;return 1===a.priority&&(t="bg-danger text-light",e="HIGH"),2===a.priority&&(t="bg-warning text-light",e="MEDIUM"),3===a.priority&&(t="bg-info text-light",e="LOW"),n.a.createElement("div",{className:"card mb-1 bg-light"},n.a.createElement("div",{className:"card-header text-primary ".concat(t)},"ID: ",a.projectSequence," -- Priority: ",e),n.a.createElement("div",{className:"card-body bg-light"},n.a.createElement("h5",{className:"card-title"},a.summary),n.a.createElement("p",{className:"card-text text-truncate "},a.acceptanceCriteria),n.a.createElement(p.b,{to:"/updateProjectTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-primary"},"View / Update"),n.a.createElement("button",{className:"btn btn-danger ml-4",onClick:this.onDeleteClick},"Delete")))}}]),a}(r.Component);Y.proptype={deleteProjectTask:w.a.func.isRequired};var Z=Object(g.b)(null,{deleteProjectTask:function(e,t,a){return function(){var a=Object(h.a)(v.a.mark((function a(r){return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("Are you sure you want to delete ".concat(t," ?"))){a.next=11;break}return a.prev=1,a.next=4,E.a.delete("https://svars8-ppmtool.herokuapp.com/api/backlog/".concat(e,"/").concat(t));case 4:r({type:"DELETE_PROJECT_TASK",payload:t}),r({type:b,payload:{}}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),r({type:b,payload:a.t0.response.data});case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()}})(Y),ee=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.project_tasks,t=e.filter((function(e){return"TO_DO"===e.status})),a=e.filter((function(e){return"IN_PROGRESS"===e.status})),r=e.filter((function(e){return"DONE"===e.status})),c=t.map((function(e){return n.a.createElement(Z,{key:e.id,project_task:e})})),o=a.map((function(e){return n.a.createElement(Z,{key:e.id,project_task:e})})),s=r.map((function(e){return n.a.createElement(Z,{key:e.id,project_task:e})}));return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-secondary text-white"},n.a.createElement("h3",null,"TO DO"))),c),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-primary text-white"},n.a.createElement("h3",null,"In Progress"))),o),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-success text-white"},n.a.createElement("h3",null,"Done"))),s)))}}]),a}(r.Component),te=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getBacklog(this.props.match.params.id)}},{key:"render",value:function(){var e,t=this.props.match.params.id,a=this.props.backlog.project_tasks,r=this.props.errors;return e=(null===a||void 0===a?void 0:a.length)<1?(null===r||void 0===r?void 0:r.projectNotFound)?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},r.projectNotFound):(null===r||void 0===r?void 0:r.projectIdentifier)?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},r.projectIdentifier):n.a.createElement("div",{className:"alert alert-info text-center",role:"alert"},"No Project Tasks on this board"):n.a.createElement(ee,{project_tasks:a}),n.a.createElement("div",{className:"container"},n.a.createElement(p.b,{to:"/addProjectTask/".concat(t),className:"btn btn-primary mb-3"},n.a.createElement("i",{className:"fas fa-plus-circle"}," Create Project Task")),n.a.createElement("br",null),n.a.createElement("hr",null),e)}}]),a}(r.Component);te.proptype={getBacklog:w.a.func.isRequired,backlog:w.a.object.isRequired,errors:w.a.object.isRequired};var ae=Object(g.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:function(e){return function(){var t=Object(h.a)(v.a.mark((function t(a){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.get("https://svars8-ppmtool.herokuapp.com/api/backlog/".concat(e));case 3:r=t.sent,a({type:"GET_BACKLOG",payload:r.data}),a({type:b,payload:{}}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a({type:b,payload:t.t0.response.data});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})(te),re=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:e.props.match.params.id,errors:{}},e.onFieldChangeHandler=function(t){e.setState(Object(R.a)({},t.target.name,t.target.value))},e.onFormSubmit=function(t){t.preventDefault();var a={summary:e.state.summary,acceptanceCriteria:e.state.acceptanceCriteria,status:e.state.status,priority:e.state.priority,dueDate:e.state.dueDate};console.log(a),e.props.addProjectTask(e.state.projectIdentifier,a,e.props.history)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(p.b,{to:"/projectBoard/".concat(this.state.projectIdentifier),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Add Project Task"),n.a.createElement("p",{className:"lead text-center"},n.a.createElement("strong",null,"Project Name : ",this.state.projectIdentifier)),n.a.createElement("form",{onSubmit:this.onFormSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:F()("form-control form-control-lg",{"is-invalid":e.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onFieldChangeHandler})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onFieldChangeHandler})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onFieldChangeHandler},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onFieldChangeHandler},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),a}(r.Component);re.proptype={addProjectTask:w.a.func.isRequired,errors:w.a.object.isRequired};var ne=Object(g.b)((function(e){return{errors:e.errors}}),{addProjectTask:function(e,t,a){return function(){var r=Object(h.a)(v.a.mark((function r(n){return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,E.a.post("https://svars8-ppmtool.herokuapp.com/api/backlog/".concat(e),t);case 3:a.push("/projectBoard/".concat(e)),n({type:b,payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),n({type:b,payload:r.t0.response.data});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}})(re),ce=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:"",errors:{}},e.onFieldChangeHandler=function(t){e.setState(Object(R.a)({},t.target.name,t.target.value))},e.onFieldChangeHandler=function(t){e.setState(Object(R.a)({},t.target.name,t.target.value))},e.onFormSubmit=function(t){t.preventDefault();var a=e.state,r=a.projectIdentifier,n=a.projectSequence,c={id:e.state.id,projectSequence:e.state.projectSequence,summary:e.state.summary,acceptanceCriteria:e.state.acceptanceCriteria,status:e.state.status,priority:e.state.priority,dueDate:e.state.dueDate,projectIdentifier:e.state.projectIdentifier};e.props.updateProjectTask(r,n,c,e.props.history)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getProjectTask(this.props.match.params.backlog_id,this.props.match.params.pt_id,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){if(e.project_task){var t=e.project_task,a=t.id,r=t.projectSequence,n=t.summary,c=t.acceptanceCriteria,o=t.status,s=t.priority,l=t.dueDate,i=t.projectIdentifier;this.setState({id:a,projectSequence:r,summary:n,acceptanceCriteria:c,status:o,priority:s,dueDate:l,projectIdentifier:i})}}},{key:"render",value:function(){var e=this.props.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(p.b,{to:"/projectBoard/".concat(this.props.match.params.backlog_id),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Update Project Task"),n.a.createElement("p",{className:"lead text-center"},n.a.createElement("strong",null,"Project Name: ",this.state.projectIdentifier," | Project Code:"," ",this.state.projectSequence)),n.a.createElement("form",{onSubmit:this.onFormSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:F()("form-control form-control-lg",{"is-invalid":e.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onFieldChangeHandler})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate?this.state.dueDate:"",onChange:this.onFieldChangeHandler})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onFieldChangeHandler},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onFieldChangeHandler},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),a}(r.Component);ce.proptype={getProjectTask:w.a.func.isRequired,updateProjectTask:w.a.func.isRequired,project_task:w.a.object.isRequired,errors:w.a.object.isRequired};var oe=Object(g.b)((function(e){return{project_task:e.backlog.project_task,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(){var r=Object(h.a)(v.a.mark((function r(n){var c;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,E.a.get("https://svars8-ppmtool.herokuapp.com/api/backlog/".concat(e,"/").concat(t));case 3:c=r.sent,n({type:"GET_PROJECT_TASK",payload:c.data}),n({type:b,payload:{}}),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),n({type:b,payload:r.t0.response.data}),a.push("/dashboard");case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()},updateProjectTask:function(e,t,a,r){return function(){var n=Object(h.a)(v.a.mark((function n(c){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.a.patch("https://svars8-ppmtool.herokuapp.com/api/backlog/".concat(e,"/").concat(t),a);case 3:c({type:b,payload:{}}),r.push("/projectBoard/".concat(e)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c({type:b,payload:n.t0.response.data});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}})(ce),se=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return n.a.createElement("div",{className:"landing"},n.a.createElement("div",{className:"light-overlay landing-inner text-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:"display-3 mb-4"},"Personal Project Management Tool"),n.a.createElement("p",{className:"lead"},"Create your account to join active projects or start your own"),n.a.createElement("hr",null),n.a.createElement(p.b,{to:"/register",className:"btn btn-lg btn-primary mr-2"},"Sign Up"),n.a.createElement(p.b,{to:"/login",className:"btn btn-lg btn-secondary mr-2"},"Login"))))))}}]),a}(r.Component);se.proptype={security:w.a.object.isRequired};var le=Object(g.b)((function(e){return{security:e.security}}),null)(se),ie=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={username:"",password:""},e.onFormSubmit=function(t){t.preventDefault();var a={username:e.state.username,password:e.state.password};e.props.loginUser(a)},e.onFieldChangeHandler=function(t){e.setState(Object(R.a)({},t.target.name,t.target.value))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){var e=this.props.errors;return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Log In"),n.a.createElement("form",{onSubmit:this.onFormSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:F()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:F()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.password)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),a}(r.Component);ie.proptype={loginUser:w.a.func.isRequired,errors:w.a.object.isRequired,security:w.a.object.isRequired};var me=Object(g.b)((function(e){return{security:e.security,errors:e.errors}}),{loginUser:function(e){return function(){var t=Object(h.a)(v.a.mark((function t(a){var r,n,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.post("https://svars8-ppmtool.herokuapp.com/api/users/login",e);case 3:r=t.sent,n=r.data.token,localStorage.setItem("jwtToken",n),_(n),c=Object(P.a)(n),a({type:"SET_CURRENT_USER",payload:c}),a({type:b,payload:{}}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a({type:b,payload:t.t0.response.data});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}})(ie),pe=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={username:"",fullName:"",password:"",confirmPassword:""},e.onFormSubmit=function(t){t.preventDefault();var a={username:e.state.username,fullName:e.state.fullName,password:e.state.password,confirmPassword:e.state.confirmPassword};e.props.createNewUser(a,e.props.history)},e.onFieldChangeHandler=function(t){e.setState(Object(R.a)({},t.target.name,t.target.value))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){var e=this.props.errors;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Sign Up"),n.a.createElement("p",{className:"lead text-center"},"Create your Account"),n.a.createElement("form",{onSubmit:this.onFormSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:F()("form-control form-control-lg",{"is-invalid":e.fullName}),placeholder:"Name",name:"fullName",value:this.state.fullName,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.fullName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:F()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:F()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.password)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:F()("form-control form-control-lg",{"is-invalid":e.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onFieldChangeHandler}),n.a.createElement("span",{className:"invalid-feedback"},e.confirmPassword)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),a}(r.Component);pe.proptype={createNewUser:w.a.func.isRequired,error:w.a.object.isRequired,security:w.a.object.isRequired};var ue=Object(g.b)((function(e){return{errors:e.errors,security:e.security}}),{createNewUser:function(e,t){return function(){var a=Object(h.a)(v.a.mark((function a(r){return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.post("https://svars8-ppmtool.herokuapp.com/api/users/register",e);case 3:t.push("/login"),r({type:b,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:b,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})(pe),de=a(42),ve=function(e){var t=e.component,a=e.security,r=Object(de.a)(e,["component","security"]);return n.a.createElement(D.b,Object.assign({},r,{render:function(e){return!0===a.validToken?n.a.createElement(t,e):n.a.createElement(D.a,{to:"/login"})}}))};ve.proptype={security:w.a.object.isRequired};var he=Object(g.b)((function(e){return{security:e.security}}),null)(ve),fe=localStorage.jwtToken;if(fe){_(fe);var Ee=Object(P.a)(fe);z.dispatch({type:"SET_CURRENT_USER",payload:Ee});var be=Date.now()/1e3;Ee.exp<be&&(window.location.href="/",z.dispatch(S()))}var je=function(){return n.a.createElement(g.a,{store:z},n.a.createElement("div",{className:"App"},n.a.createElement(p.a,null,n.a.createElement(T,null),n.a.createElement(D.b,{exact:!0,path:"/",component:le}),n.a.createElement(D.b,{exact:!0,path:"/login",component:me}),n.a.createElement(D.b,{exact:!0,path:"/register",component:ue}),n.a.createElement(D.d,null,n.a.createElement(he,{exact:!0,path:"/addProject",component:q}),n.a.createElement(he,{exact:!0,path:"/updateProject/:id",component:Q}),n.a.createElement(he,{exact:!0,path:"/dashboard",component:O}),n.a.createElement(he,{exact:!0,path:"/projectBoard/:id",component:ae}),n.a.createElement(he,{exact:!0,path:"/addProjectTask/:id",component:ne}),n.a.createElement(he,{exact:!0,path:"/updateProjectTask/:backlog_id/:pt_id",component:oe})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.3106ff63.chunk.js.map
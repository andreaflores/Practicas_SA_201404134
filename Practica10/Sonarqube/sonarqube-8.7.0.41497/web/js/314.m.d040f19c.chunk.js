(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{1424:function(e,t,a){var n=a(313),s=a(1425);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var r={insert:"head",singleton:!1},o=(n(s,r),s.locals?s.locals:{});e.exports=o},1425:function(e,t,a){(t=a(314)(!1)).push([e.i,".bt-search-form{display:flex;align-items:flex-end}.bt-search-form>li+li{margin-left:16px}.bt-search-form-label{margin-bottom:4px}.bt-search-form-field{padding:4px 0}.bt-search-form-large{flex:1}.bt-workers-warning-icon{margin-top:5px}.emphasised-measure{font-size:24px;font-weight:300}",""]),e.exports=t},1832:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return We}));var n=a(375),s=a.n(n),r=a(2),o=a(334),l=a(26),c=a(31),i=a(468),u=a(587),d=a(337),m=a(557),p=(a(1424),a(589));function h(e,t){return"".concat(e).concat(t)}function b({tasks:e}){return e.length<1e3?null:r.createElement("footer",{className:"spacer-top note text-center"},Object(c.translateWithParameters)("max_results_reached",1e3))}var g=a(316),k=a(312),E=a(323),f=a.n(E),C=a(317),y=a.n(C),O=a(680),N=a.n(O);function x(){return r.createElement(r.Fragment,null,r.createElement("p",{className:"spacer-bottom"},r.createElement("strong",null,Object(c.translate)("background_tasks.add_more_workers"))),r.createElement("p",{className:"big-spacer-bottom markdown"},Object(c.translate)("background_tasks.add_more_workers.text")),r.createElement("p",null,r.createElement("a",{href:"https://redirect.sonarsource.com/editions/enterprise.html",rel:"noopener noreferrer",target:"_blank"},Object(c.translate)("learn_more"))))}var S=a(330),_=a.n(S),v=a(344),j=a.n(v),D=a(322);class w extends r.PureComponent{constructor(e){super(e),this.mounted=!1,this.handleClose=()=>{this.props.onClose()},this.handleWorkerCountChange=e=>this.setState({newWorkerCount:e.value}),this.handleSubmit=e=>{e.preventDefault(),this.setState({submitting:!0});const{newWorkerCount:t}=this.state;Object(u.l)(t).then(()=>{this.mounted&&this.props.onClose(t)},()=>{this.mounted&&this.setState({submitting:!1})})},this.state={newWorkerCount:e.workerCount,submitting:!1}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=[];for(let t=1;t<=10;t++)e.push({label:String(t),value:t});return r.createElement(_.a,{contentLabel:Object(c.translate)("background_tasks.change_number_of_workers"),onRequestClose:this.handleClose},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,Object(c.translate)("background_tasks.change_number_of_workers"))),r.createElement("form",{onSubmit:this.handleSubmit},r.createElement("div",{className:"modal-body"},r.createElement(j.a,{className:"input-tiny spacer-top",clearable:!1,onChange:this.handleWorkerCountChange,options:e,searchable:!1,value:this.state.newWorkerCount}),r.createElement(D.Alert,{className:"big-spacer-top",variant:"info"},Object(c.translate)("background_tasks.change_number_of_workers.hint"))),r.createElement("footer",{className:"modal-foot"},r.createElement("div",null,this.state.submitting&&r.createElement("i",{className:"spinner spacer-right"}),r.createElement(k.SubmitButton,{disabled:this.state.submitting},Object(c.translate)("save")),r.createElement(k.ResetButtonLink,{onClick:this.handleClose},Object(c.translate)("cancel"))))))}}class P extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={canSetWorkerCount:!1,formOpen:!1,loading:!0,noSupportPopup:!1,workerCount:1},this.loadWorkers=()=>{this.setState({loading:!0}),Object(u.k)().then(({canSetWorkerCount:e,value:t})=>{this.mounted&&this.setState({canSetWorkerCount:e,loading:!1,workerCount:t})},()=>{this.mounted&&this.setState({loading:!1})})},this.closeForm=e=>e?this.setState({formOpen:!1,workerCount:e}):this.setState({formOpen:!1}),this.handleChangeClick=()=>{this.setState({formOpen:!0})},this.handleHelpClick=e=>{e.preventDefault(),e.stopPropagation(),this.toggleNoSupportPopup()},this.toggleNoSupportPopup=e=>{void 0!==e?this.setState({noSupportPopup:e}):this.setState(e=>({noSupportPopup:!e.noSupportPopup}))}}componentDidMount(){this.mounted=!0,this.loadWorkers()}componentWillUnmount(){this.mounted=!1}render(){const{canSetWorkerCount:e,formOpen:t,loading:a,workerCount:n}=this.state;return r.createElement("div",{className:"display-flex-center"},!a&&n>1&&r.createElement(y.a,{overlay:Object(c.translate)("background_tasks.number_of_workers.warning")},r.createElement("span",{className:"display-inline-flex-center little-spacer-right"},r.createElement(N.a,{fill:"#d3d3d3"}))),r.createElement("span",{className:"text-middle"},Object(c.translate)("background_tasks.number_of_workers"),a?r.createElement("i",{className:"spinner little-spacer-left"}):r.createElement("strong",{className:"little-spacer-left"},n)),!a&&e&&r.createElement(y.a,{overlay:Object(c.translate)("background_tasks.change_number_of_workers")},r.createElement(k.EditButton,{className:"js-edit button-small spacer-left",onClick:this.handleChangeClick})),!a&&!e&&r.createElement(f.a,{className:"spacer-left",overlay:r.createElement(x,null)}),t&&r.createElement(w,{onClose:this.closeForm,workerCount:this.state.workerCount}))}}function A(e){return r.createElement("header",{className:"page-header"},r.createElement("h1",{className:"page-title"},Object(c.translate)("background_tasks.page")),!e.component&&r.createElement("div",{className:"page-actions"},r.createElement(P,null)),r.createElement("p",{className:"page-description"},Object(c.translate)("background_tasks.page.description"),r.createElement(g.c,{className:"spacer-left",target:"_blank",to:{pathname:"/documentation/analysis/background-tasks/"}},Object(c.translate)("learn_more"))))}var T=a(353),L=a.n(T),M=a(338),F=a.n(M);class R extends r.PureComponent{constructor(){super(...arguments),this.handleChange=e=>{const t=e?p.b.ONLY_CURRENTS:p.b.ALL;this.props.onChange(t)}}render(){const e=this.props.value===p.b.ONLY_CURRENTS;return r.createElement("div",{className:"bt-search-form-field"},r.createElement(F.a,{checked:e,onCheck:this.handleChange},r.createElement("span",{className:"little-spacer-left"},Object(c.translate)("yes"))))}}var q=a(626);class I extends r.PureComponent{constructor(){super(...arguments),this.handleDateRangeChange=({from:e,to:t})=>{this.props.onChange({minSubmittedAt:e,maxExecutedAt:t})}}render(){const e={from:this.props.minSubmittedAt,to:this.props.maxExecutedAt};return r.createElement("div",{className:"nowrap"},r.createElement(q.a,{onChange:this.handleDateRangeChange,value:e}))}}class W extends r.PureComponent{constructor(){super(...arguments),this.handleChange=({value:e})=>{this.props.onChange(e)}}render(){const e=[{value:p.e.ALL,label:Object(c.translate)("background_task.status.ALL")},{value:p.e.ALL_EXCEPT_PENDING,label:Object(c.translate)("background_task.status.ALL_EXCEPT_PENDING")},{value:m.a.Pending,label:Object(c.translate)("background_task.status.PENDING")},{value:m.a.InProgress,label:Object(c.translate)("background_task.status.IN_PROGRESS")},{value:m.a.Success,label:Object(c.translate)("background_task.status.SUCCESS")},{value:m.a.Failed,label:Object(c.translate)("background_task.status.FAILED")},{value:m.a.Canceled,label:Object(c.translate)("background_task.status.CANCELED")}];return r.createElement(j.a,{className:"input-medium",clearable:!1,onChange:this.handleChange,options:e,searchable:!1,value:this.props.value})}}class U extends r.PureComponent{constructor(){super(...arguments),this.handleChange=({value:e})=>{this.props.onChange(e)}}render(){const{value:e,types:t}=this.props,a=t.map(e=>({value:e,label:Object(c.translate)("background_task.type",e)})),n=[{value:p.a,label:Object(c.translate)("background_task.type.ALL")},...a];return r.createElement(j.a,{className:"input-medium",clearable:!1,onChange:this.handleChange,options:n,searchable:!1,value:e})}}class B extends r.PureComponent{constructor(){super(...arguments),this.handleStatusChange=e=>{this.props.onFilterUpdate({status:e})},this.handleTypeChange=e=>{this.props.onFilterUpdate({taskType:e})},this.handleCurrentsChange=e=>{this.props.onFilterUpdate({currents:e})},this.handleDateChange=e=>{this.props.onFilterUpdate(e)},this.handleQueryChange=e=>{this.props.onFilterUpdate({query:e})},this.handleReset=()=>{this.props.onFilterUpdate(p.d)}}renderSearchBox(){const{component:e,query:t}=this.props;return e?null:r.createElement("li",{className:"bt-search-form-large"},r.createElement(L.a,{onChange:this.handleQueryChange,placeholder:Object(c.translate)("background_tasks.search_by_task_or_component"),value:t}))}render(){const{loading:e,component:t,types:a,status:n,taskType:s,currents:o,minSubmittedAt:l,maxExecutedAt:i}=this.props;return r.createElement("section",{className:"big-spacer-top big-spacer-bottom"},r.createElement("ul",{className:"bt-search-form"},r.createElement("li",null,r.createElement("h6",{className:"bt-search-form-label"},Object(c.translate)("status")),r.createElement(W,{onChange:this.handleStatusChange,value:n})),a.length>1&&r.createElement("li",null,r.createElement("h6",{className:"bt-search-form-label"},Object(c.translate)("type")),r.createElement(U,{onChange:this.handleTypeChange,types:a,value:s})),!t&&r.createElement("li",null,r.createElement("h6",{className:"bt-search-form-label"},Object(c.translate)("background_tasks.currents_filter.ONLY_CURRENTS")),r.createElement(R,{onChange:this.handleCurrentsChange,value:o})),r.createElement("li",null,r.createElement("h6",{className:"bt-search-form-label"},Object(c.translate)("date")),r.createElement(I,{maxExecutedAt:i,minSubmittedAt:l,onChange:this.handleDateChange})),this.renderSearchBox(),r.createElement("li",{className:"nowrap"},r.createElement(k.Button,{className:"js-reload",disabled:e,onClick:this.props.onReload},Object(c.translate)("reload"))," ",r.createElement(k.Button,{disabled:e,onClick:this.handleReset},Object(c.translate)("reset_verb")))))}}var Y=a(325),z=a(386),G=a.n(z),X=a(346),H=a(326);var K=Object(Y.b)(e=>({isSystemAdmin:Object(H.getAppState)(e).canAdmin}))((function({isSystemAdmin:e,onCancelAllPending:t,pendingCount:a}){return void 0===a?null:r.createElement("span",null,r.createElement("span",{className:"emphasised-measure"},a),r.createElement("span",{className:"little-spacer-left display-inline-flex-center"},Object(c.translate)("background_tasks.pending"),e&&a>0&&r.createElement(G.a,{cancelButtonText:Object(c.translate)("close"),confirmButtonText:Object(c.translate)("background_tasks.cancel_all_tasks.submit"),isDestructive:!0,modalBody:Object(c.translate)("background_tasks.cancel_all_tasks.text"),modalHeader:Object(c.translate)("background_tasks.cancel_all_tasks"),onConfirm:t},({onClick:e})=>r.createElement(y.a,{overlay:Object(c.translate)("background_tasks.cancel_all_tasks")},r.createElement(k.ClearButton,{className:"little-spacer-left",color:X.colors.red,onClick:e})))))})),Q=a(320);function V({className:e,pendingCount:t,pendingTime:a}){return!a||!t||a<1e3?null:r.createElement("span",{className:e},r.createElement("span",{className:"emphasised-measure"},Object(Q.formatMeasure)(a,"MILLISEC")),r.createElement("span",{className:"little-spacer-left"},Object(c.translate)("background_tasks.pending_time")),r.createElement(f.a,{className:"little-spacer-left",overlay:Object(c.translate)("background_tasks.pending_time.description")}))}function J({className:e,failingCount:t,onShowFailing:a}){return void 0===t?null:r.createElement("span",{className:e},t>0?r.createElement(k.ButtonLink,{className:"emphasised-measure text-baseline",onClick:a},t):r.createElement("span",{className:"emphasised-measure"},t),r.createElement("span",{className:"little-spacer-left"},Object(c.translate)("background_tasks.failures")),r.createElement(f.a,{className:"little-spacer-left",overlay:Object(c.translate)("background_tasks.failing_count")}))}function Z(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}function $(e){let{component:t,pendingCount:a,pendingTime:n}=e,s=Z(e,["component","pendingCount","pendingTime"]);return r.createElement("section",{className:"big-spacer-top big-spacer-bottom"},r.createElement(K,{onCancelAllPending:s.onCancelAllPending,pendingCount:a}),!t&&r.createElement(V,{className:"huge-spacer-left",pendingCount:a,pendingTime:n}),!t&&r.createElement(J,{className:"huge-spacer-left",failingCount:s.failingCount,onShowFailing:s.onShowFailing}))}var ee=a(311),te=a(388),ae=a.n(te),ne=a(351),se=a.n(ne),re=a(332);class oe extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={},this.handleCloseClick=e=>{e.preventDefault(),this.props.onClose()}}componentDidMount(){this.mounted=!0,this.loadScannerContext()}componentWillUnmount(){this.mounted=!1}loadScannerContext(){Object(u.h)(this.props.task.id,["scannerContext"]).then(e=>{this.mounted&&this.setState({scannerContext:e.scannerContext})})}render(){const{task:e}=this.props,{scannerContext:t}=this.state;return r.createElement(_.a,{contentLabel:"scanner context",onRequestClose:this.props.onClose,size:"large"},r.createElement("div",{className:"modal-head"},r.createElement("h2",null,Object(c.translate)("background_tasks.scanner_context"),": ",e.componentName," [",Object(c.translate)("background_task.type",e.type),"]")),r.createElement("div",{className:"modal-body modal-container"},null!=t?r.createElement("pre",{className:"js-task-scanner-context"},t):r.createElement("i",{className:"spinner"})),r.createElement("div",{className:"modal-foot"},r.createElement("a",{className:"js-modal-close",href:"#",onClick:this.handleCloseClick},Object(c.translate)("close"))))}}class le extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0},this.handleCloseClick=e=>{e.preventDefault(),this.props.onClose()}}componentDidMount(){this.mounted=!0,this.loadStacktrace()}componentWillUnmount(){this.mounted=!1}loadStacktrace(){Object(u.h)(this.props.task.id,["stacktrace"]).then(e=>{this.mounted&&this.setState({loading:!1,stacktrace:e.errorStacktrace})},()=>{this.mounted&&this.setState({loading:!1})})}render(){const{task:e}=this.props,{loading:t,stacktrace:a}=this.state;return r.createElement(_.a,{contentLabel:"stacktrace",onRequestClose:this.props.onClose,size:"large"},r.createElement("div",{className:"modal-head"},r.createElement("h2",null,Object(c.translate)("background_tasks.error_stacktrace"),": ",e.componentName," [",Object(c.translate)("background_task.type",e.type),"]")),r.createElement("div",{className:"modal-body modal-container"},t?r.createElement("i",{className:"spinner"}):a?r.createElement("div",null,r.createElement("h4",{className:"spacer-bottom"},Object(c.translate)("background_tasks.error_stacktrace")),r.createElement("pre",{className:"js-task-stacktrace"},a)):r.createElement("div",null,r.createElement("h4",{className:"spacer-bottom"},Object(c.translate)("background_tasks.error_message")),r.createElement("pre",{className:"js-task-error-message"},e.errorMessage))),r.createElement("div",{className:"modal-foot"},r.createElement("a",{className:"js-modal-close",href:"#",onClick:this.handleCloseClick},Object(c.translate)("close"))))}}const ce=Object(re.lazyLoadComponent)(()=>a.e(17).then(a.bind(null,1824)),"AnalysisWarningsModal");class ie extends r.PureComponent{constructor(){super(...arguments),this.state={cancelTaskOpen:!1,scannerContextOpen:!1,stacktraceOpen:!1,warningsOpen:!1},this.handleFilterClick=()=>{this.props.onFilterTask(this.props.task)},this.handleCancelTask=()=>this.props.onCancelTask(this.props.task),this.handleCancelClick=()=>{this.setState({cancelTaskOpen:!0})},this.handleShowScannerContextClick=()=>{this.setState({scannerContextOpen:!0})},this.closeCancelTask=()=>{this.setState({cancelTaskOpen:!1})},this.closeScannerContext=()=>{this.setState({scannerContextOpen:!1})},this.handleShowStacktraceClick=()=>{this.setState({stacktraceOpen:!0})},this.closeStacktrace=()=>{this.setState({stacktraceOpen:!1})},this.handleShowWarningsClick=()=>{this.setState({warningsOpen:!0})},this.closeWarnings=()=>{this.setState({warningsOpen:!1})}}render(){const{component:e,task:t}=this.props,a=void 0===e,n=t.status===m.a.Pending,s=void 0!==t.errorMessage,o=void 0!==t.warningCount&&t.warningCount>0;return a||n||t.hasScannerContext||s||o?r.createElement("td",{className:"thin nowrap"},r.createElement(ae.a,{className:"js-task-action"},a&&t.componentName&&r.createElement(te.ActionsDropdownItem,{className:"js-task-filter",onClick:this.handleFilterClick},Object(c.translateWithParameters)("background_tasks.filter_by_component_x",t.componentName)),n&&r.createElement(te.ActionsDropdownItem,{className:"js-task-cancel",destructive:!0,onClick:this.handleCancelClick},Object(c.translate)("background_tasks.cancel_task")),t.hasScannerContext&&r.createElement(te.ActionsDropdownItem,{className:"js-task-show-scanner-context",onClick:this.handleShowScannerContextClick},Object(c.translate)("background_tasks.show_scanner_context")),s&&r.createElement(te.ActionsDropdownItem,{className:"js-task-show-stacktrace",onClick:this.handleShowStacktraceClick},Object(c.translate)("background_tasks.show_stacktrace")),o&&r.createElement(te.ActionsDropdownItem,{className:"js-task-show-warnings",onClick:this.handleShowWarningsClick},Object(c.translate)("background_tasks.show_warnings"))),this.state.cancelTaskOpen&&r.createElement(se.a,{cancelButtonText:Object(c.translate)("close"),confirmButtonText:Object(c.translate)("background_tasks.cancel_task"),header:Object(c.translate)("background_tasks.cancel_task"),isDestructive:!0,onClose:this.closeCancelTask,onConfirm:this.handleCancelTask},Object(c.translate)("background_tasks.cancel_task.text")),this.state.scannerContextOpen&&r.createElement(oe,{onClose:this.closeScannerContext,task:t}),this.state.stacktraceOpen&&r.createElement(le,{onClose:this.closeStacktrace,task:t}),this.state.warningsOpen&&r.createElement(ce,{componentKey:t.componentKey,onClose:this.closeWarnings,taskId:t.id})):r.createElement("td",null," ")}}var ue=a(397),de=a.n(ue),me=a(520),pe=a.n(me),he=a(343),be=a.n(he),ge=a(321),ke=a(335);function Ee({type:e}){return r.createElement("span",{className:"display-inline-block note"},"[",Object(c.translate)("background_task.type",e),"]")}function fe({task:e}){return e.componentKey?r.createElement("td",null,void 0!==e.branch&&r.createElement(de.a,{className:"little-spacer-right"}),void 0!==e.pullRequest&&r.createElement(pe.a,{className:"little-spacer-right"}),!e.branch&&!e.pullRequest&&e.componentQualifier&&r.createElement("span",{className:"little-spacer-right"},r.createElement(be.a,{qualifier:e.componentQualifier})),e.componentName&&r.createElement(g.c,{className:"spacer-right",to:Ce(e.componentKey,e)},e.componentName,e.branch&&r.createElement("span",{className:"text-limited text-text-top",title:e.branch},r.createElement("span",{style:{marginLeft:5,marginRight:5}},"/"),e.branch),e.pullRequest&&r.createElement("span",{className:"text-limited text-text-top",title:e.pullRequestTitle},r.createElement("span",{style:{marginLeft:5,marginRight:5}},"/"),e.pullRequest)),r.createElement(Ee,{type:e.type})):r.createElement("td",null,r.createElement("span",{className:"note"},e.id),r.createElement(Ee,{type:e.type}))}function Ce(e,t){return Object(ke.e)(t.componentQualifier)?Object(ge.t)(e):t.branch?Object(ge.d)(e,t.branch):t.pullRequest?Object(ge.w)(e,t.pullRequest):Object(ge.v)(e)}var ye=a(684),Oe=a(568),Ne=a.n(Oe);function xe({date:e,baseDate:t}){const a=e&&Object(l.parseDate)(e),n=t&&Object(l.parseDate)(t),s=a&&n&&Object(l.isValidDate)(a)&&Object(l.isValidDate)(n)?ye(a,n):0;return r.createElement("td",{className:"thin nowrap text-right"},s>0&&r.createElement("span",{className:"text-warning little-spacer-right"},"(+".concat(s,"d)")),a&&Object(l.isValidDate)(a)?r.createElement(Ne.a,{date:a,long:!0}):"")}var Se=a(770),_e=a(362),ve=a.n(_e);function je({submittedAt:e,prevSubmittedAt:t}){const a=!t||!Se(Object(l.parseDate)(e),Object(l.parseDate)(t));return r.createElement("td",{className:"thin nowrap text-right small"},a?r.createElement(ve.a,{date:e,long:!0}):"")}function De({ms:e}){return r.createElement("td",{className:"thin nowrap text-right"},e&&function(e){if(!e)return"";if(e<1e3)return h(e,"ms");if(e<1e4){const t=Math.floor(e/1e3);return t+"."+h(e-1e3*t,"s")}if(e<6e4){return h(Math.floor(e/1e3),"s")}if(e<6e5){const t=Math.floor(e/6e4),a=Math.floor((e-6e4*t)/1e3);return h(t,"min")+" "+h(a,"s")}const t=Math.floor(e/36e5),a=Math.floor((e-36e5*t)/6e4);return h(t,"h")+" "+h(a,"min")}(e))}function we({id:e}){return r.createElement("td",{className:"thin nowrap"},r.createElement("div",{className:"note"},e))}var Pe=a(1426),Ae=a.n(Pe);function Te({status:e}){let t;switch(e){case m.a.Pending:t=r.createElement(Ae.a,null);break;case m.a.InProgress:t=r.createElement("i",{className:"spinner"});break;case m.a.Success:t=r.createElement("span",{className:"badge badge-success"},Object(c.translate)("background_task.status.SUCCESS"));break;case m.a.Failed:t=r.createElement("span",{className:"badge badge-error"},Object(c.translate)("background_task.status.FAILED"));break;case m.a.Canceled:t=r.createElement("span",{className:"badge"},Object(c.translate)("background_task.status.CANCELED"));break;default:t=""}return r.createElement("td",{className:"thin spacer-right"},t)}function Le({submitter:e}){return r.createElement("td",{className:"thin note"},r.createElement("span",{className:"text-limited-small text-bottom"},e||Object(c.translate)("anonymous")))}function Me(e){const{task:t,component:a,onCancelTask:n,onFilterTask:s,previousTask:o}=e;return r.createElement("tr",null,r.createElement(Te,{status:t.status}),r.createElement(fe,{task:t}),r.createElement(we,{id:t.id}),r.createElement(Le,{submitter:t.submitterLogin}),r.createElement(je,{prevSubmittedAt:o&&o.submittedAt,submittedAt:t.submittedAt}),r.createElement(xe,{date:t.submittedAt}),r.createElement(xe,{baseDate:t.submittedAt,date:t.startedAt}),r.createElement(xe,{baseDate:t.submittedAt,date:t.executedAt}),r.createElement(De,{ms:t.executionTimeMs}),r.createElement(ie,{component:a,onCancelTask:n,onFilterTask:s,task:t}))}function Fe({tasks:e,component:t,loading:a,onCancelTask:n,onFilterTask:s}){const o=ee("data zebra zebra-hover background-tasks",{"new-loading":a});return r.createElement("div",{className:"boxed-group boxed-group-inner"},r.createElement("table",{className:o},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,Object(c.translate)("background_tasks.table.status")),r.createElement("th",null,Object(c.translate)("background_tasks.table.task")),r.createElement("th",null,Object(c.translate)("background_tasks.table.id")),r.createElement("th",null,Object(c.translate)("background_tasks.table.submitter")),r.createElement("th",null," "),r.createElement("th",{className:"text-right"},Object(c.translate)("background_tasks.table.submitted")),r.createElement("th",{className:"text-right"},Object(c.translate)("background_tasks.table.started")),r.createElement("th",{className:"text-right"},Object(c.translate)("background_tasks.table.finished")),r.createElement("th",{className:"text-right"},Object(c.translate)("background_tasks.table.duration")),r.createElement("th",null," "))),r.createElement("tbody",null,e.map((e,a,o)=>r.createElement(Me,{component:t,key:e.id,onCancelTask:n,onFilterTask:s,previousTask:a>0?o[a-1]:void 0,task:e})))))}function Re(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function qe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(a),!0).forEach((function(t){Ie(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Re(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function Ie(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class We extends r.PureComponent{constructor(e){super(e),this.mounted=!1,this.stopLoading=()=>{this.mounted&&this.setState({loading:!1})},this.loadTasks=()=>{this.setState({loading:!0});const e=function(e={}){const t={};return e.status===p.e.ALL?t.status=[m.a.Pending,m.a.InProgress,m.a.Success,m.a.Failed,m.a.Canceled].join():e.status===p.e.ALL_EXCEPT_PENDING?t.status=[m.a.InProgress,m.a.Success,m.a.Failed,m.a.Canceled].join():t.status=e.status,e.taskType!==p.a&&(t.type=e.taskType),e.currents!==p.b.ALL&&(t.onlyCurrents=!0),e.minSubmittedAt&&(t.minSubmittedAt=Object(l.toShortNotSoISOString)(e.minSubmittedAt)),e.maxExecutedAt&&(t.maxExecutedAt=Object(l.toShortNotSoISOString)(e.maxExecutedAt)),e.query&&(t.q=e.query),t}({status:this.props.location.query.status||p.d.status,taskType:this.props.location.query.taskType||p.d.taskType,currents:this.props.location.query.currents||p.d.currents,minSubmittedAt:this.props.location.query.minSubmittedAt||p.d.minSubmittedAt,maxExecutedAt:this.props.location.query.maxExecutedAt||p.d.maxExecutedAt,query:this.props.location.query.query||p.d.query});this.props.component&&(e.componentId=this.props.component.id),Promise.all([Object(u.d)(e),Object(u.g)(e.componentId)]).then(([{tasks:e},t])=>{this.mounted&&this.setState({failingCount:t.failing,loading:!1,pendingCount:t.pending,pendingTime:t.pendingTime,tasks:e})},this.stopLoading)},this.handleFilterUpdate=e=>{const t=qe({},this.props.location.query,{},e);Object.keys(p.d).forEach(e=>{t[e]===p.d[e]&&delete t[e]}),t.minSubmittedAt&&(t.minSubmittedAt=Object(l.toShortNotSoISOString)(t.minSubmittedAt)),t.maxExecutedAt&&(t.maxExecutedAt=Object(l.toShortNotSoISOString)(t.maxExecutedAt)),this.props.router.push({pathname:this.props.location.pathname,query:t})},this.handleCancelTask=e=>(this.setState({loading:!0}),Object(u.b)(e.id).then(e=>{this.mounted&&this.setState(t=>{return{tasks:(a=t.tasks,n=e,a.map(e=>e.id===n.id?n:e)),loading:!1};var a,n})},this.stopLoading)),this.handleFilterTask=e=>{this.handleFilterUpdate({query:e.componentKey})},this.handleShowFailing=()=>{this.handleFilterUpdate(qe({},p.d,{status:m.a.Failed,currents:p.b.ONLY_CURRENTS}))},this.handleCancelAllPending=()=>{this.setState({loading:!0}),Object(u.a)().then(()=>{this.mounted&&this.loadTasks()},this.stopLoading)},this.state={failingCount:0,loading:!0,pendingCount:0,tasks:[]},this.loadTasksDebounced=s()(this.loadTasks,p.c)}componentDidMount(){this.mounted=!0,Object(u.j)().then(e=>{this.setState({types:e}),this.loadTasks()},()=>{})}componentDidUpdate(e){e.component===this.props.component&&e.location===this.props.location||this.loadTasksDebounced()}componentWillUnmount(){this.mounted=!1}render(){const{component:e}=this.props,{loading:t,types:a,tasks:n}=this.state;if(!a)return r.createElement("div",{className:"page page-limited"},r.createElement("i",{className:"spinner"}));const s=this.props.location.query.status||p.d.status,l=this.props.location.query.taskType||p.d.taskType,u=this.props.location.query.currents||p.d.currents,m=Object(i.parseAsDate)(this.props.location.query.minSubmittedAt),h=Object(i.parseAsDate)(this.props.location.query.maxExecutedAt),g=this.props.location.query.query||"";return r.createElement("div",{className:"page page-limited"},r.createElement(d.a,{suggestions:"background_tasks"}),r.createElement(o.a,{defer:!1,title:Object(c.translate)("background_tasks.page")}),r.createElement(A,{component:e}),r.createElement($,{component:e,failingCount:this.state.failingCount,onCancelAllPending:this.handleCancelAllPending,onShowFailing:this.handleShowFailing,pendingCount:this.state.pendingCount,pendingTime:this.state.pendingTime}),r.createElement(B,{component:e,currents:u,loading:t,maxExecutedAt:h,minSubmittedAt:m,onFilterUpdate:this.handleFilterUpdate,onReload:this.loadTasksDebounced,query:g,status:s,taskType:l,types:a}),r.createElement(Fe,{component:e,loading:t,onCancelTask:this.handleCancelTask,onFilterTask:this.handleFilterTask,tasks:n}),r.createElement(b,{tasks:n}))}}},337:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(2),s=a(371);function r({suggestions:e}){return n.createElement(s.a.Consumer,null,({addSuggestions:t,removeSuggestions:a})=>n.createElement(o,{addSuggestions:t,removeSuggestions:a,suggestions:e}))}class o extends n.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},530:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(488),s=a.n(n),r=a(311),o=a(434),l=a(509),c=a(526),i=a(527),u=a(2),d=a(319),m=a(312),p=a(540),h=a.n(p),b=a(344),g=a.n(b),k=a(531),E=a.n(k),f=a(497),C=a.n(f),y=a(428),O=a.n(y),N=a(332),x=a(31);a(532),a(534);function S(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}const _=Object(N.lazyLoadComponent)(()=>a.e(305).then(a.t.bind(null,674,7)),"DayPicker");class v extends u.PureComponent{constructor(e){super(e),this.focus=()=>{this.input&&this.input.focus(),this.openCalendar()},this.handleResetClick=()=>{this.closeCalendar(),this.props.onChange(void 0)},this.openCalendar=()=>{this.setState({currentMonth:this.props.value||this.props.currentMonth||new Date,lastHovered:void 0,open:!0})},this.closeCalendar=()=>{this.setState({open:!1})},this.handleDayClick=(e,t)=>{t.disabled||(this.closeCalendar(),this.props.onChange(e))},this.handleDayMouseEnter=(e,t)=>{this.setState({lastHovered:t.disabled?void 0:e})},this.handleCurrentMonthChange=({value:e})=>{this.setState(t=>({currentMonth:l(t.currentMonth,e)}))},this.handleCurrentYearChange=({value:e})=>{this.setState(t=>({currentMonth:c(t.currentMonth,e)}))},this.handlePreviousMonthClick=()=>{this.setState(e=>({currentMonth:i(e.currentMonth,1)}))},this.handleNextMonthClick=()=>{this.setState(e=>({currentMonth:o(e.currentMonth,1)}))},this.state={currentMonth:e.value||e.currentMonth||new Date,open:!1}}render(){const{highlightFrom:e,highlightTo:t,minDate:a,value:n}=this.props,{lastHovered:o}=this.state,l=this.props.maxDate||new Date,c=s()(12),i=s()((new Date).getFullYear()-10,(new Date).getFullYear()+1),d=n?[n]:[];let p;const b=o||n;e&&b&&(p={highlighted:{from:e,to:b}},d.push(e)),t&&b&&(p={highlighted:{from:b,to:t}},d.push(t));const k=s()(7).map(x.getWeekDayName),f=s()(7).map(x.getShortWeekDayName);return u.createElement(h.a,{onClickOutside:this.closeCalendar},u.createElement("span",{className:r("date-input-control",this.props.className)},u.createElement(D,{className:r("date-input-control-input",this.props.inputClassName,{"is-filled":void 0!==this.props.value}),innerRef:e=>this.input=e,name:this.props.name,onFocus:this.openCalendar,placeholder:this.props.placeholder,readOnly:!0,type:"text",value:n}),u.createElement(E.a,{className:"date-input-control-icon",fill:""}),void 0!==this.props.value&&u.createElement(m.ClearButton,{className:"button-tiny date-input-control-reset",iconProps:{size:12},onClick:this.handleResetClick}),this.state.open&&u.createElement("div",{className:"date-input-calendar"},u.createElement("nav",{className:"date-input-calendar-nav"},u.createElement(m.ButtonIcon,{className:"button-small",onClick:this.handlePreviousMonthClick},u.createElement(C.a,null)),u.createElement("div",{className:"date-input-calender-month"},u.createElement(g.a,{className:"date-input-calender-month-select",onChange:this.handleCurrentMonthChange,options:c.map(e=>({label:Object(x.getShortMonthName)(e),value:e})),value:this.state.currentMonth.getMonth()}),u.createElement(g.a,{className:"date-input-calender-month-select spacer-left",onChange:this.handleCurrentYearChange,options:i.map(e=>({label:String(e),value:e})),value:this.state.currentMonth.getFullYear()})),u.createElement(m.ButtonIcon,{className:"button-small",onClick:this.handleNextMonthClick},u.createElement(O.a,null))),u.createElement(_,{captionElement:u.createElement(j,null),disabledDays:{after:l,before:a},firstDayOfWeek:1,modifiers:p,month:this.state.currentMonth,navbarElement:u.createElement(j,null),onDayClick:this.handleDayClick,onDayMouseEnter:this.handleDayMouseEnter,selectedDays:d,weekdaysLong:k,weekdaysShort:f}))))}}function j(){return null}const D=Object(d.injectIntl)(e=>{let{innerRef:t,intl:a,value:n}=e,s=S(e,["innerRef","intl","value"]);const r=n&&a.formatDate(n,{year:"numeric",month:"short",day:"numeric"});return u.createElement("input",Object.assign({},s,{ref:t,value:r||""}))})},532:function(e,t,a){var n=a(313),s=a(533);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var r={insert:"head",singleton:!1},o=(n(s,r),s.locals?s.locals:{});e.exports=o},533:function(e,t,a){(t=a(314)(!1)).push([e.i,".DayPicker{display:inline-block}.DayPicker-wrapper{position:relative;-webkit-user-select:none;-ms-user-select:none;user-select:none;padding-bottom:8px;flex-direction:row}.DayPicker-Months{display:flex;flex-wrap:wrap;justify-content:center}.DayPicker-Month{display:table;border-collapse:collapse;border-spacing:0;-webkit-user-select:none;-ms-user-select:none;user-select:none;margin:8px 8px 0}.DayPicker-Weekdays{display:table-header-group}.DayPicker-WeekdaysRow{display:table-row}.DayPicker-Weekday{display:table-cell;padding:8px;font-size:12px;text-align:center;color:#999}.DayPicker-Weekday abbr[title]{border-bottom:none;text-decoration:none}.DayPicker-Body{display:table-row-group}.DayPicker-Week{display:table-row}.DayPicker-Day{display:table-cell;line-height:15px;padding:8px;text-align:center;cursor:pointer;vertical-align:top;outline:none}.DayPicker--interactionDisabled .DayPicker-Day{cursor:default}.DayPicker-Footer{padding-top:8px}.DayPicker-Day--today{font-weight:700}.DayPicker-Day--outside{cursor:default;color:#8b9898}.DayPicker-Day--disabled{color:#cdcdcd;cursor:not-allowed}.DayPicker-Day--sunday{background-color:#f7f8f8}.DayPicker-Day--sunday:not(.DayPicker-Day--today){color:#dce0e0}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside){background-color:#4b9fd5;color:#fff}.DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--highlighted):not(.DayPicker-Day--outside):hover{background-color:#f3f3f3}.DayPicker-Day--highlighted:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside){background-color:#cae3f2}",""]),e.exports=t},534:function(e,t,a){var n=a(313),s=a(535);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var r={insert:"head",singleton:!1},o=(n(s,r),s.locals?s.locals:{});e.exports=o},535:function(e,t,a){(t=a(314)(!1)).push([e.i,".date-input-control{position:relative;display:inline-block;cursor:pointer}.date-input-control-input{width:130px;padding-left:24px!important;cursor:pointer}.date-input-control-input.is-filled{padding-right:16px!important}.date-input-control-icon{position:absolute;top:4px;left:4px}.date-input-control-icon path{fill:#cdcdcd;transition:fill .3s ease}.date-input-control-input:focus+.date-input-control-icon path{fill:#4b9fd5}.date-input-control-reset{position:absolute;top:4px;right:4px;border:none}.date-input-calendar{position:absolute;z-index:7500;top:100%;left:0;border:1px solid #e6e6e6;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175)}.date-input-calendar-nav{display:flex;justify-content:space-between;align-items:center;padding-top:8px;padding-left:8px;padding-right:8px}.date-input-calender-month-select{width:70px}",""]),e.exports=t},589:function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return l}));const n={ALL:"__ALL__",ALL_EXCEPT_PENDING:"__ALL_EXCEPT_PENDING__"},s="ALL_TYPES",r={ALL:"__ALL__",ONLY_CURRENTS:"CURRENTS"},o={status:n.ALL_EXCEPT_PENDING,taskType:s,currents:r.ALL,minSubmittedAt:void 0,maxExecutedAt:void 0,query:""},l=250},626:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(311),s=a(2),r=a(31),o=a(530);class l extends s.PureComponent{constructor(){super(...arguments),this.handleFromChange=e=>{this.props.onChange({from:e,to:this.to}),setTimeout(()=>{e&&!this.to&&this.toDateInput&&this.toDateInput.focus()},0)},this.handleToChange=e=>{this.props.onChange({from:this.from,to:e})}}get from(){return this.props.value&&this.props.value.from}get to(){return this.props.value&&this.props.value.to}render(){return s.createElement("div",{className:n("display-inline-flex-center",this.props.className)},s.createElement(o.a,{currentMonth:this.to,"data-test":"from",highlightTo:this.to,maxDate:this.to,onChange:this.handleFromChange,placeholder:Object(r.translate)("start_date"),value:this.from}),s.createElement("span",{className:"note little-spacer-left little-spacer-right"},Object(r.translate)("to_")),s.createElement(o.a,{currentMonth:this.from,"data-test":"to",highlightFrom:this.from,minDate:this.from,onChange:this.handleToChange,placeholder:Object(r.translate)("end_date"),ref:e=>this.toDateInput=e,value:this.to}))}}}}]);
//# sourceMappingURL=314.m.d040f19c.chunk.js.map
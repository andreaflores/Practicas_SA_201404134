(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1409:function(e,t,n){var r=n(662),a=n(1778);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var l={insert:"head",singleton:!1},i=(r(a,l),a.locals?a.locals:{});e.exports=i},1410:function(e,t,n){"use strict";var r,a=n(13),l=n(676),i=n.n(l),o=n(685),s=n.n(o),c=n(1063),d=n.n(c),p=n(728),u=n.n(p),m=n(781),g=n.n(m),h=n(176),f=n(743),v=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),y=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var l=arguments[t],i=0,o=l.length;i<o;i++,a++)r[a]=l[i];return r},E=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleLanguageClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.rule.lang&&t.props.onFilterChange({languages:[t.props.rule.lang]})},t.handleTypeClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onFilterChange({types:[t.props.rule.type]})},t.handleSeverityClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.rule.severity&&t.props.onFilterChange({severities:[t.props.rule.severity]})},t.handleTagClick=function(e){e.preventDefault(),e.currentTarget.blur();var n=e.currentTarget.dataset.tag;n&&t.props.onFilterChange({tags:[n]})},t}return v(t,e),t.prototype.render=function(){var e=this,t=this.props.rule,n=t.tags,r=void 0===n?[]:n,l=t.sysTags,o=void 0===l?[]:l,c=t.severity,p=y(r,o);return a.createElement(i.a,{className:"display-inline-block",overlay:a.createElement(a.Fragment,null,a.createElement("ul",{className:"menu"},a.createElement("li",{className:"menu-header"},Object(h.translate)("coding_rules.filter_similar_rules")),a.createElement("li",null,a.createElement("a",{"data-test":"coding-rules__similar-language",href:"#",onClick:this.handleLanguageClick},t.langName)),a.createElement("li",null,a.createElement("a",{className:"display-flex-center","data-test":"coding-rules__similar-type",href:"#",onClick:this.handleTypeClick},a.createElement(u.a,{query:t.type}),a.createElement("span",{className:"little-spacer-left"},Object(h.translate)("issue.type",t.type)))),c&&a.createElement("li",null,a.createElement("a",{"data-test":"coding-rules__similar-severity",href:"#",onClick:this.handleSeverityClick},a.createElement(f.a,{className:"display-flex-center",severity:t.severity}))),p.length>0&&a.createElement("li",{className:"divider"}),p.map((function(t){return a.createElement("li",{key:t},a.createElement("a",{"data-tag":t,"data-test":"coding-rules__similar-tag",href:"#",onClick:e.handleTagClick},a.createElement(g.a,{className:"icon-half-transparent little-spacer-right text-middle"}),a.createElement("span",{className:"text-middle"},t)))}))))},a.createElement("a",{className:"js-rule-filter link-no-underline spacer-left dropdown-toggle",href:"#",title:Object(h.translate)("coding_rules.filter_similar_rules")},a.createElement(d.a,{className:"icon-half-transparent"}),a.createElement(s.a,{className:"icon-half-transparent"})))},t}(a.PureComponent);t.a=E},1503:function(e,t,n){"use strict";var r=n(831),a=n(13),l=n(661),i=n(176),o=n(816),s=n(854),c=n(679),d=n.n(c);function p(e){var t=e.onCancel,n=e.onSubmit,r=Object(i.translate)("coding_rules.remove_extended_description");return a.createElement(d.a,{header:r,onClose:t,onSubmit:n},(function(e){var t=e.onCloseClick,n=e.onFormSubmit,o=e.submitting;return a.createElement("form",{onSubmit:n},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,r)),a.createElement("div",{className:"modal-body"},Object(i.translate)("coding_rules.remove_extended_description.confirm")),a.createElement("footer",{className:"modal-foot"},o&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(l.SubmitButton,{className:"button-red",disabled:o},Object(i.translate)("remove")),a.createElement(l.ResetButtonLink,{onClick:t},Object(i.translate)("cancel"))))}))}var u,m=(u=function(e,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={description:"",descriptionForm:!1,submitting:!1,removeDescriptionModal:!1},t.handleDescriptionChange=function(e){return t.setState({description:e.currentTarget.value})},t.handleCancelClick=function(){t.setState({descriptionForm:!1})},t.handleSaveClick=function(){t.updateDescription(t.state.description)},t.handleRemoveDescriptionClick=function(){t.setState({removeDescriptionModal:!0})},t.handleCancelRemoving=function(){return t.setState({removeDescriptionModal:!1})},t.handleConfirmRemoving=function(){t.setState({removeDescriptionModal:!1}),t.updateDescription("")},t.updateDescription=function(e){t.setState({submitting:!0}),Object(o.h)({key:t.props.ruleDetails.key,markdown_note:e}).then((function(e){t.props.onChange(e),t.mounted&&t.setState({submitting:!1,descriptionForm:!1})}),(function(){t.mounted&&t.setState({submitting:!1})}))},t.handleExtendDescriptionClick=function(){t.setState({description:t.props.ruleDetails.mdNote||"",descriptionForm:!0})},t.renderDescription=function(){return a.createElement("div",{id:"coding-rules-detail-description-extra"},void 0!==t.props.ruleDetails.htmlNote&&a.createElement("div",{className:"rule-desc spacer-bottom markdown",dangerouslySetInnerHTML:{__html:Object(r.sanitize)(t.props.ruleDetails.htmlNote)}}),t.props.canWrite&&a.createElement(l.Button,{id:"coding-rules-detail-extend-description",onClick:t.handleExtendDescriptionClick},Object(i.translate)("coding_rules.extend_description")))},t.renderForm=function(){return a.createElement("div",{className:"coding-rules-detail-extend-description-form"},a.createElement("table",{className:"width-100"},a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",{colSpan:2},a.createElement("textarea",{autoFocus:!0,className:"width-100 little-spacer-bottom",id:"coding-rules-detail-extend-description-text",onChange:t.handleDescriptionChange,rows:4,value:t.state.description}))),a.createElement("tr",null,a.createElement("td",null,a.createElement(l.Button,{disabled:t.state.submitting,id:"coding-rules-detail-extend-description-submit",onClick:t.handleSaveClick},Object(i.translate)("save")),void 0!==t.props.ruleDetails.mdNote&&a.createElement(a.Fragment,null,a.createElement(l.Button,{className:"button-red spacer-left",disabled:t.state.submitting,id:"coding-rules-detail-extend-description-remove",onClick:t.handleRemoveDescriptionClick},Object(i.translate)("remove")),t.state.removeDescriptionModal&&a.createElement(p,{onCancel:t.handleCancelRemoving,onSubmit:t.handleConfirmRemoving})),a.createElement(l.ResetButtonLink,{className:"spacer-left",disabled:t.state.submitting,id:"coding-rules-detail-extend-description-cancel",onClick:t.handleCancelClick},Object(i.translate)("cancel")),t.state.submitting&&a.createElement("i",{className:"spinner spacer-left"})),a.createElement("td",{className:"text-right"},a.createElement(s.a,null))))))},t}return m(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.ruleDetails,t=!e.isExternal||"UNKNOWN"!==e.type;return a.createElement("div",{className:"js-rule-description"},t?a.createElement("div",{className:"coding-rules-detail-description rule-desc markdown",dangerouslySetInnerHTML:{__html:Object(r.sanitize)(e.htmlDesc||"")}}):a.createElement("div",{className:"coding-rules-detail-description rule-desc markdown"},Object(i.translateWithParameters)("issue.external_issue_description",e.name)),!e.templateKey&&a.createElement("div",{className:"coding-rules-detail-description coding-rules-detail-description-extra"},!this.state.descriptionForm&&this.renderDescription(),this.state.descriptionForm&&this.props.canWrite&&this.renderForm()))},t}(a.PureComponent);t.a=g},1504:function(e,t,n){"use strict";var r,a=n(13),l=n(665),i=n(661),o=n(676),s=n.n(o),c=n(672),d=n.n(c),p=n(666),u=n.n(p),m=n(728),g=n.n(m),h=n(873),f=n.n(h),v=n(711),y=n.n(v),E=n(725),b=n(176),x=n(743),_=n(853),N=n(670),O=n(699),w=n.n(O),S=n(832),C=n.n(S),k=n(746),j=n.n(k),D=n(816),T=n(907),P=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),F=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var l=arguments[t],i=0,o=l.length;i<o;i++,a++)r[a]=l[i];return r},I=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={searchResult:[]},t.onSearch=function(e){return Object(D.d)({q:e,ps:Math.min(t.props.tags.length+10,100)}).then((function(e){t.mounted&&t.setState({searchResult:w.a.apply(void 0,F([e],t.props.sysTags))})}),(function(){}))},t.onSelect=function(e){t.props.setTags(C()(F(t.props.tags,[e])))},t.onUnselect=function(e){t.props.setTags(w()(t.props.tags,e))},t}return P(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=j()(this.state.searchResult,this.props.tags);return a.createElement(T.a,{listSize:10,onSearch:this.onSearch,onSelect:this.onSelect,onUnselect:this.onUnselect,selectedTags:this.props.tags,tags:e})},t}(a.PureComponent),q=n(1410),R=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),U=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var l=arguments[t],i=0,o=l.length;i<o;i++,a++)r[a]=l[i];return r},A=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderType=function(){var e=t.props.ruleDetails;return a.createElement(u.a,{overlay:Object(b.translate)("coding_rules.type.tooltip",e.type)},a.createElement("li",{className:"coding-rules-detail-property","data-meta":"type"},a.createElement(g.a,{className:"little-spacer-right",query:e.type}),Object(b.translate)("issue.type",e.type)))},t.renderSeverity=function(){return a.createElement(u.a,{overlay:Object(b.translate)("default_severity")},a.createElement("li",{className:"coding-rules-detail-property","data-meta":"severity"},a.createElement(x.a,{className:"display-inline-flex-center",severity:t.props.ruleDetails.severity})))},t.renderStatus=function(){var e=t.props.ruleDetails;return"READY"===e.status?null:a.createElement(u.a,{overlay:Object(b.translate)("status")},a.createElement("li",{className:"coding-rules-detail-property","data-meta":"status"},a.createElement("span",{className:"badge badge-error"},Object(b.translate)("rules.status",e.status))))},t.renderTags=function(){var e=t.props,n=e.canWrite,r=e.ruleDetails,l=r.sysTags,o=void 0===l?[]:l,c=r.tags,d=void 0===c?[]:c,p=U(o,d);return a.createElement("li",{className:"coding-rules-detail-property","data-meta":"tags"},t.props.canWrite?a.createElement(s.a,{closeOnClick:!1,closeOnClickOutside:!0,overlay:a.createElement(I,{setTags:t.props.onTagsChange,sysTags:o,tags:d}),overlayPlacement:E.PopupPlacement.BottomLeft},a.createElement(i.ButtonLink,null,a.createElement(_.a,{allowUpdate:n,tags:p.length>0?p:[Object(b.translate)("coding_rules.no_tags")]}))):a.createElement(_.a,{allowUpdate:n,className:"display-flex-center",tags:p.length>0?p:[Object(b.translate)("coding_rules.no_tags")]}))},t.renderCreationDate=function(){return a.createElement("li",{className:"coding-rules-detail-property","data-meta":"available-since"},a.createElement("span",{className:"little-spacer-right"},Object(b.translate)("coding_rules.available_since")),a.createElement(y.a,{date:t.props.ruleDetails.createdAt}))},t.renderRepository=function(){var e=t.props,n=e.referencedRepositories,r=e.ruleDetails,l=n[r.repo];return l?a.createElement(u.a,{overlay:Object(b.translate)("coding_rules.repository_language")},a.createElement("li",{className:"coding-rules-detail-property","data-meta":"repository"},l.name," (",r.langName,")")):null},t.renderTemplate=function(){return t.props.ruleDetails.isTemplate?a.createElement(u.a,{overlay:Object(b.translate)("coding_rules.rule_template.title")},a.createElement("li",{className:"coding-rules-detail-property"},Object(b.translate)("coding_rules.rule_template"))):null},t.renderParentTemplate=function(){var e=t.props.ruleDetails;return e.templateKey?a.createElement("li",{className:"coding-rules-detail-property"},Object(b.translate)("coding_rules.custom_rule")," (",a.createElement(l.c,{to:Object(N.A)(e.templateKey)},Object(b.translate)("coding_rules.show_template")),")",a.createElement(d.a,{className:"little-spacer-left",overlay:Object(b.translate)("coding_rules.custom_rule.help")})):null},t.renderRemediation=function(){var e=t.props.ruleDetails;return e.debtRemFnType?a.createElement(u.a,{overlay:Object(b.translate)("coding_rules.remediation_function")},a.createElement("li",{className:"coding-rules-detail-property","data-meta":"remediation-function"},Object(b.translate)("coding_rules.remediation_function",e.debtRemFnType),":",void 0!==e.debtRemFnOffset&&" "+e.debtRemFnOffset,void 0!==e.debtRemFnCoeff&&" +"+e.debtRemFnCoeff,void 0!==e.effortToFixDescription&&" "+e.effortToFixDescription)):null},t.renderExternalBadge=function(){var e=t.props.ruleDetails;if(!e.repo)return null;var n=e.repo.replace(new RegExp("^external_"),"");return n?a.createElement(u.a,{overlay:Object(b.translateWithParameters)("coding_rules.external_rule.engine",n)},a.createElement("li",{className:"coding-rules-detail-property"},a.createElement("div",{className:"badge spacer-left text-text-top"},n))):null},t}return R(t,e),t.prototype.renderKey=function(){var e=this.props.ruleDetails,t=e.key.startsWith("external_")?e.key.substr("external_".length):e.key;return a.createElement("span",{className:"note text-middle"},t)},t.prototype.render=function(){var e=this.props.ruleDetails,t=!e.isExternal||"UNKNOWN"!==e.type;return a.createElement("div",{className:"js-rule-meta"},a.createElement("header",{className:"page-header"},a.createElement("div",{className:"pull-right"},this.renderKey(),!e.isExternal&&a.createElement(l.c,{className:"coding-rules-detail-permalink link-no-underline spacer-left text-middle",title:Object(b.translate)("permalink"),to:Object(N.A)(e.key)},a.createElement(f.a,null)),!this.props.hideSimilarRulesFilter&&a.createElement(q.a,{onFilterChange:this.props.onFilterChange,rule:e})),a.createElement("h3",{className:"page-title coding-rules-detail-header"},a.createElement("big",null,e.name))),t&&a.createElement("ul",{className:"coding-rules-detail-properties"},this.renderType(),this.renderSeverity(),!e.isExternal&&this.renderStatus(),this.renderTags(),!e.isExternal&&this.renderCreationDate(),this.renderRepository(),!e.isExternal&&a.createElement(a.Fragment,null,this.renderTemplate(),this.renderParentTemplate(),this.renderRemediation()),e.isExternal&&this.renderExternalBadge()))},t}(a.PureComponent);t.a=A},1778:function(e,t,n){(t=n(663)(!1)).push([e.i,".coding-rules-extended-view .coding-rules-list{display:none}.coding-rules-extended-view .coding-rules-details{display:block}.coding-rules-detail-title{position:relative;display:inline-block;margin:16px 0;font-size:16px;font-weight:400}.coding-rules-detail-quality-profile-parameter{display:block;height:100%;padding-top:0;padding-right:10px}.coding-rules-detail-quality-profile-parameter .key,.coding-rules-detail-quality-profile-parameter .sep,.coding-rules-detail-quality-profile-parameter .value{display:inline;vertical-align:top}.coding-rules-detail-quality-profile-parameter .value{display:inline-block;vertical-align:top;line-height:23px;max-width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:Consolas,Ubuntu Mono,Liberation Mono,Menlo,Courier,monospace}.coding-rules-detail-quality-profile-parameter+.coding-rules-detail-quality-profile-parameter{margin-top:0}.coding-rules-detail-properties{display:flex;flex-wrap:wrap;align-items:center;margin-top:8px}.coding-rules-detail-properties+.coding-rules-detail-properties{margin-top:-10px}.coding-rules-detail-property{display:flex;align-items:center;margin-right:16px;margin-bottom:8px;font-size:12px}.coding-rules-detail-tag+.coding-rules-detail-tag{margin-left:10px}.coding-rules-detail-tags-change{cursor:pointer}.coding-rules-detail-tags-change:hover span{text-decoration:underline}.coding-rules-detail-tag-edit{line-height:1}.coding-rules-details-tag-edit-cancel{vertical-align:middle}.coding-rules-detail-description{margin:20px 0}.coding-rules-detail-description-extra{margin-top:-10px}.coding-rules-detail-extend-description-form{margin:10px 0}.coding-rules-detail-parameters{width:100%;margin:10px 0 20px}.coding-rules-detail-parameter-name{width:1px;vertical-align:top;padding:5px 10px 5px 0;font-weight:700}.coding-rules-detail-parameter-description{vertical-align:top;padding:5px}.coding-rules-detail-parameter-value{font-family:Consolas,Ubuntu Mono,Liberation Mono,Menlo,Courier,monospace;word-break:break-all}.coding-rules-detail-list,.coding-rules-detail-quality-profiles{width:100%;line-height:22px}.coding-rules-detail-list td,.coding-rules-detail-quality-profiles td{border-top:1px solid #e6e6e6}.coding-rules-detail-list tr:first-child td,.coding-rules-detail-quality-profiles tr:first-child td{border-top:none}.coding-rules-detail-list-name,.coding-rules-detail-quality-profile-name{vertical-align:top;width:1px;padding:8px 5px 8px 0;font-weight:600;white-space:nowrap}.coding-rules-detail-list-severity,.coding-rules-detail-quality-profile-severity{vertical-align:top;width:1px;padding:8px 5px;white-space:nowrap}.coding-rules-detail-quality-profile-severity i{margin-top:2px}.coding-rules-detail-list-parameters,.coding-rules-detail-quality-profile-parameters{vertical-align:top;padding:8px 5px}.coding-rules-detail-list-actions,.coding-rules-detail-quality-profile-actions{vertical-align:top;width:1px;padding:8px 0 8px 5px;text-align:right;white-space:nowrap}.coding-rules-detail-quality-profile-inheritance{font-size:12px;font-weight:400}.coding-rules-detail-quality-profiles-activation{margin-top:-3px;margin-left:10px}.coding-rules-most-violated-projects td{border-top-color:transparent}.coding-rules-most-violated-projects tr:first-child+tr td{border-top-color:#e6e6e6}.coding-rules-most-violated-projects .coding-rules-detail-list-name{font-weight:400}.coding-rule{padding:8px 10px 8px 8px;border:1px solid transparent;background-color:#fff}.coding-rule.selected{border-color:#4b9fd5!important}.coding-rule+.coding-rule{border-top-color:#e6e6e6}.coding-rule.selected+.coding-rule{border-top-color:transparent}.coding-rule-table{width:100%}.coding-rule-table td{vertical-align:top}.coding-rule-table+.coding-rule-table{margin-top:5px}.coding-rule-table-meta-cell{width:1px;white-space:nowrap}@media (max-width:1320px){.coding-rule-table .tags-list span{max-width:100px}}.coding-rule-title{line-height:20px;font-size:13px}.coding-rule-meta{padding:2px 2px 2px 30px;font-size:12px}.coding-rule-activation{width:40px;line-height:19.5px}.coding-rule-activation-actions{padding-left:20px}.coding-rule-section-separator{height:0;margin:10px 0;border-top:1px solid #e6e6e6}",""]),e.exports=t},743:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(13),a=n(822),l=n.n(a),i=n(176);function o(e){var t=e.className,n=e.severity;return n?r.createElement("span",{className:t},r.createElement(l.a,{className:"little-spacer-right",severity:n}),Object(i.translate)("severity",n)):null}},796:function(e,t,n){var r=n(662),a=n(869);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var l={insert:"head",singleton:!1},i=(r(a,l),a.locals?a.locals:{});e.exports=i},848:function(e,t,n){"use strict";var r=n(746),a=n.n(r),l=n(660),i=n(13),o=n(703),s=n.n(o),c=n(176),d=n(690),p=n.n(d);function u(e){var t=e.active,n=e.custom,r=e.disabled,a=e.element,o=e.selected,s=function(){return e.onHover(a)},d=l({active:t,disabled:r}),u=e.renderLabel(a);return i.createElement("li",{onFocus:s,onMouseOver:s},i.createElement(p.a,{checked:Boolean(o),className:d,disabled:r,id:a,onCheck:e.onSelectChange},n?i.createElement("span",{"aria-label":Object(c.translate)("create_new_element")+": "+u,className:"little-spacer-left"},i.createElement("span",{"aria-hidden":!0,className:"little-spacer-right"},"+"),u):i.createElement("span",{className:"little-spacer-left"},u)))}var m,g=(m=function(e,t){return(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}m(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),h=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var l=arguments[t],i=0,o=l.length;i<o;i++,a++)r[a]=l[i];return r},f=function(e){function t(t){var n=e.call(this,t)||this;return n.mounted=!1,n.handleSelectChange=function(e,t){e?n.onSelectItem(t):n.onUnselectItem(t)},n.handleSearchChange=function(e){n.onSearchQuery(n.props.validateSearchInput(e))},n.handleElementHover=function(e){n.setState((function(t,r){return{activeIdx:n.getAllElements(r,t).indexOf(e)}}))},n.handleKeyboard=function(e){switch(e.keyCode){case 40:e.stopPropagation(),e.preventDefault(),n.setState(n.selectNextElement);break;case 38:e.stopPropagation(),e.preventDefault(),n.setState(n.selectPreviousElement);break;case 37:case 39:e.stopPropagation();break;case 13:n.state.activeIdx>=0&&n.toggleSelect(n.getAllElements(n.props,n.state)[n.state.activeIdx])}},n.onSearchQuery=function(e){n.setState({activeIdx:0,loading:!0,query:e}),n.props.onSearch(e).then(n.stopLoading,n.stopLoading)},n.onSelectItem=function(e){n.isNewElement(e,n.props)&&n.onSearchQuery(""),n.props.onSelect(e)},n.onUnselectItem=function(e){return n.props.onUnselect(e)},n.isNewElement=function(e,t){var n=t.selectedElements,r=t.elements;return e.length>0&&-1===n.indexOf(e)&&-1===r.indexOf(e)},n.updateSelectedElements=function(e){n.setState((function(t){return t.query?{selectedElements:e.filterSelected(t.query,e.selectedElements)}:{selectedElements:h(e.selectedElements)}}))},n.updateUnselectedElements=function(e){n.setState((function(t){return 0===e.listSize?{unselectedElements:a()(e.elements,e.selectedElements)}:e.listSize<t.selectedElements.length?{unselectedElements:[]}:{unselectedElements:a()(e.elements,e.selectedElements).slice(0,e.listSize-t.selectedElements.length)}}))},n.getAllElements=function(e,t){return n.isNewElement(t.query,e)?h(t.selectedElements,t.unselectedElements,[t.query]):h(t.selectedElements,t.unselectedElements)},n.setElementActive=function(e){return n.setState({activeIdx:e})},n.selectNextElement=function(e,t){var r=e.activeIdx,a=n.getAllElements(t,e);return r<0||r>=a.length-1?{activeIdx:0}:{activeIdx:r+1}},n.selectPreviousElement=function(e,t){var r=e.activeIdx,a=n.getAllElements(t,e);return r<=0?{activeIdx:a.length-1}:{activeIdx:r-1}},n.stopLoading=function(){n.mounted&&n.setState({loading:!1})},n.toggleSelect=function(e){-1===n.props.selectedElements.indexOf(e)?n.onSelectItem(e):n.onUnselectItem(e)},n.state={activeIdx:0,loading:!0,query:"",selectedElements:[],unselectedElements:[]},n}return g(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.onSearchQuery(""),this.updateSelectedElements(this.props),this.updateUnselectedElements(this.props),this.container&&this.container.addEventListener("keydown",this.handleKeyboard,!0)},t.prototype.componentWillReceiveProps=function(e){if(this.props.elements!==e.elements||this.props.selectedElements!==e.selectedElements){this.updateSelectedElements(e),this.updateUnselectedElements(e);var t=this.getAllElements(e,this.state).length;this.state.activeIdx>=t&&this.setState({activeIdx:t-1})}},t.prototype.componentDidUpdate=function(){this.searchInput&&this.searchInput.focus()},t.prototype.componentWillUnmount=function(){this.mounted=!1,this.container&&this.container.removeEventListener("keydown",this.handleKeyboard)},t.prototype.render=function(){var e=this,t=this.props,n=t.allowSelection,r=void 0===n||n,a=t.allowNewElements,o=void 0===a||a,d=t.footerNode,p=void 0===d?"":d,m=this.props.renderLabel,g=this.state,h=g.query,f=g.activeIdx,v=g.selectedElements,y=g.unselectedElements,E=this.getAllElements(this.props,this.state)[f],b=o&&this.isNewElement(h,this.props),x=0===this.props.listSize,_=l("menu",{"menu-vertically-limited":x,"spacer-top":x,"with-top-separator":x,"with-bottom-separator":Boolean(p)});return i.createElement("div",{className:"multi-select",ref:function(t){return e.container=t}},i.createElement("div",{className:"menu-search"},i.createElement(s.a,{autoFocus:!0,className:"little-spacer-top",loading:this.state.loading,onChange:this.handleSearchChange,placeholder:this.props.placeholder,value:h})),i.createElement("ul",{className:_},v.length>0&&v.map((function(t){return i.createElement(u,{active:E===t,element:t,key:t,onHover:e.handleElementHover,onSelectChange:e.handleSelectChange,renderLabel:m,selected:!0})})),y.length>0&&y.map((function(t){return i.createElement(u,{active:E===t,disabled:!r,element:t,key:t,onHover:e.handleElementHover,onSelectChange:e.handleSelectChange,renderLabel:m})})),b&&i.createElement(u,{active:E===h,custom:!0,element:h,key:h,onHover:this.handleElementHover,onSelectChange:this.handleSelectChange,renderLabel:m}),!b&&v.length<1&&y.length<1&&i.createElement("li",{className:"spacer-left"},Object(c.translateWithParameters)("no_results_for_x",h))),p)},t.defaultProps={filterSelected:function(e,t){return t.filter((function(t){return t.includes(e)}))},listSize:0,renderLabel:function(e){return e},validateSearchInput:function(e){return e}},t}(i.PureComponent);t.a=f},853:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(660),a=n(13),l=n(685),i=n.n(l),o=n(781),s=n.n(o),c=n(176);n(796);function d(e){var t=e.allowUpdate,n=void 0!==t&&t,l=e.className,o=e.tags;return a.createElement("span",{"aria-label":Object(c.translateWithParameters)("tags_list_x",o.join(", ")),className:r("tags-list",l)},a.createElement(s.a,{className:"text-middle"}),a.createElement("span",{"aria-hidden":!0,className:"text-ellipsis text-middle",title:o.join(", ")},o.join(", ")),n&&a.createElement(i.a,{className:"text-middle"}))}},854:function(e,t,n){"use strict";var r,a=n(660),l=n(13),i=n(176),o=n(670),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.handleClick=function(e){e.preventDefault(),window.open(Object(o.o)(),"Formatting","height=300,width=600,scrollbars=1,resizable=1")},t.prototype.render=function(){return l.createElement("div",{className:a("markdown-tips",this.props.className)},l.createElement("a",{className:"little-spacer-right",href:"#",onClick:this.handleClick},Object(i.translate)("formatting.helplink")),":",l.createElement("span",{className:"spacer-left"},"*",Object(i.translate)("bold"),"*"),l.createElement("span",{className:"spacer-left"},"``",Object(i.translate)("code"),"``"),l.createElement("span",{className:"spacer-left"},"* ",Object(i.translate)("bulleted_point")))},t}(l.PureComponent);t.a=c},869:function(e,t,n){(t=n(663)(!1)).push([e.i,".tags-list{white-space:nowrap;line-height:16px}.tags-list i:before{font-size:12px}.tags-list span{display:inline-block;vertical-align:middle;text-align:left;max-width:220px;padding-left:4px;padding-right:4px}",""]),e.exports=t},907:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(13),a=n(176),l=n(848);n(796);function i(e){return r.createElement(l.a,{elements:e.tags,listSize:e.listSize,onSearch:e.onSearch,onSelect:e.onSelect,onUnselect:e.onUnselect,placeholder:Object(a.translate)("search.search_for_tags"),selectedElements:e.selectedTags,validateSearchInput:o})}function o(e){return e.toLowerCase().replace(/[^-a-z0-9+#.]/gi,"")}}}]);
//# sourceMappingURL=14.1613385090031.chunk.js.map
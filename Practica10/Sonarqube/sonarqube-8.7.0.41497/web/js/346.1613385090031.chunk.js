(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{2139:function(e,t,n){var r=n(662),o=n(2140);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},c=(r(o,a),o.locals?o.locals:{});e.exports=c},2140:function(e,t,n){(t=n(663)(!1)).push([e.i,".placeholder-bar{display:inline-block;vertical-align:middle;height:8px;background-color:currentColor}",""]),e.exports=t},2215:function(e,t,n){"use strict";n.r(t);var r=n(13),o=n(665),a=n(676),c=n(176),l=n(691),s=n(38),i=n(674),u=n(776),m=n.n(u),d=n(711),p=n.n(d),h=n(49),f="https://sonarsource.cdn.prismic.io/api/v2";function g(){return Object(h.getCorsJSON)(f).then((function(e){var t=e&&e.refs.find((function(e){return"master"===e.id}));return t||Promise.reject("No master ref found")}))}function b(e){var t=['[[at(document.type, "blog_sonarsource_post")]]'];return e.tag&&t.push('[[at(document.tags,["'+e.tag+'"])]]'),Object(h.getCorsJSON)(f+"/documents/search",{access_token:e.accessToken,orderings:"[document.first_publication_date desc]",pageSize:e.ps||1,q:t,ref:e.ref}).then((function(e){return e.results}))}n(2139);function E(e){var t=e.color,n=e.width,o=e.height;return r.createElement("span",{className:"placeholder-bar",style:{color:t,width:n,height:o}})}var _,y=n(675),v=(_=function(e,t){return(_=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}_(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),w=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1},t.fetchProductNews=function(){var e=t.props,n=e.accessToken,r=e.tag;n&&(t.setState({loading:!0}),g().then((function(e){var t=e.ref;return b({accessToken:n,ref:t,tag:r})})).then((function(e){t.mounted&&t.setState({news:e[0],loading:!1})}),(function(){t.mounted&&t.setState({loading:!1})})))},t}return v(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchProductNews()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.renderPlaceholder=function(){return r.createElement("a",{className:"rich-item new-loading"},r.createElement("div",{className:"flex-1"},r.createElement("div",{className:"display-inline-flex-center"},r.createElement("h4",null,Object(c.translate)("embed_docs.latest_blog")),r.createElement("span",{className:"note spacer-left"},r.createElement(E,{color:"#aaa",width:60}))),r.createElement("p",{className:"little-spacer-bottom"},r.createElement(E,{color:"#aaa",width:84})," ",r.createElement(E,{color:"#aaa",width:48})," ",r.createElement(E,{color:"#aaa",width:24})," ",r.createElement(E,{color:"#aaa",width:72})," ",r.createElement(E,{color:"#aaa",width:24})," ",r.createElement(E,{color:"#aaa",width:48}))),r.createElement(m.a,{className:"flex-0"}))},t.prototype.render=function(){var e=this.state,t=e.loading,n=e.news;return t?this.renderPlaceholder():n?r.createElement("a",{className:"rich-item",href:"https://blog.sonarsource.com/"+n.uid,rel:"noopener noreferrer",target:"_blank"},r.createElement("div",{className:"flex-1"},r.createElement("div",{className:"display-inline-flex-center"},r.createElement("h4",null,Object(c.translate)("embed_docs.latest_blog")),r.createElement(p.a,{date:n.last_publication_date},(function(e){return r.createElement("span",{className:"note spacer-left"},e)}))),r.createElement("p",{className:"little-spacer-bottom"},n.data.title)),r.createElement(m.a,{className:"flex-0"})):null},t}(r.PureComponent),O=Object(i.b)((function(e){var t=Object(y.getGlobalSettingValue)(e,"sonar.prismic.accessToken");return{accessToken:t&&t.value}}))(w),k=n(720),j=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),N=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderSuggestions=function(e){var n=e.suggestions;return 0===n.length?null:r.createElement(r.Fragment,null,t.renderTitle(Object(c.translate)("embed_docs.suggestion")),n.map((function(e,n){return r.createElement("li",{key:n},r.createElement(o.c,{onClick:t.props.onClose,target:"_blank",to:e.link},e.text))})),r.createElement("li",{className:"divider"}))},t}return j(t,e),t.prototype.renderTitle=function(e){return r.createElement("li",{className:"menu-header"},e)},t.prototype.renderIconLink=function(e,t,n){return r.createElement("a",{href:e,rel:"noopener noreferrer",target:"_blank"},r.createElement("img",{alt:n,className:"spacer-right",height:"18",src:Object(l.getBaseUrl)()+"/images/"+t,width:"18"}),n)},t.prototype.renderSonarCloudLinks=function(){return r.createElement(r.Fragment,null,r.createElement("li",{className:"divider"}),r.createElement("li",null,r.createElement("a",{href:"https://community.sonarsource.com/c/help/sc",rel:"noopener noreferrer",target:"_blank"},Object(c.translate)("embed_docs.get_help"))),r.createElement("li",{className:"divider"}),this.renderTitle(Object(c.translate)("embed_docs.stay_connected")),r.createElement("li",null,this.renderIconLink("https://twitter.com/sonarcloud","embed-doc/twitter-icon.svg","Twitter")),r.createElement("li",null,this.renderIconLink("https://blog.sonarsource.com/product/SonarCloud","sonarcloud-square-logo.svg",Object(c.translate)("embed_docs.blog"))),r.createElement("li",null,r.createElement(O,{tag:"SonarCloud"})))},t.prototype.renderSonarQubeLinks=function(){return r.createElement(r.Fragment,null,r.createElement("li",{className:"divider"}),r.createElement("li",null,r.createElement("a",{href:"https://community.sonarsource.com/",rel:"noopener noreferrer",target:"_blank"},Object(c.translate)("embed_docs.get_help"))),r.createElement("li",{className:"divider"}),this.renderTitle(Object(c.translate)("embed_docs.stay_connected")),r.createElement("li",null,this.renderIconLink("https://www.sonarqube.org/whats-new/?referrer=sonarqube","embed-doc/sq-icon.svg",Object(c.translate)("embed_docs.news"))),r.createElement("li",null,this.renderIconLink("https://twitter.com/SonarQube","embed-doc/twitter-icon.svg","Twitter")))},t.prototype.render=function(){return r.createElement(a.DropdownOverlay,null,r.createElement("ul",{className:"menu abs-width-240"},r.createElement(k.a.Consumer,null,this.renderSuggestions),r.createElement("li",null,r.createElement(o.c,{onClick:this.props.onClose,target:"_blank",to:"/documentation"},Object(c.translate)("embed_docs.documentation"))),r.createElement("li",null,r.createElement(o.c,{onClick:this.props.onClose,to:"/web_api"},Object(c.translate)("api_documentation.page"))),Object(s.isSonarCloud)()?this.renderSonarCloudLinks():this.renderSonarQubeLinks()))},t}(r.PureComponent);t.default=N},711:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=n(13),a=n(668),c=n(129);t.formatterOption={year:"numeric",month:"short",day:"2-digit"},t.longFormatterOption={year:"numeric",month:"long",day:"numeric"},t.default=function(e){var n=e.children,l=e.date,s=e.long;return o.createElement(a.FormattedDate,r({value:c.parseDate(l)},s?t.longFormatterOption:t.formatterOption),n)}}}]);
//# sourceMappingURL=346.1613385090031.chunk.js.map
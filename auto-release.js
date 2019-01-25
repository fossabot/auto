(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{53:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(a(2)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};r.get||r.set?Object.defineProperty(t,a,r):t[a]=e[a]}return t.default=e,t}(a(0));n(a(1)),n(a(67));function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,a,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={children:void 0}),t&&s)for(var i in s)void 0===t[i]&&(t[i]=s[i]);else t||(t=s||{});if(1===n)t.children=o;else if(n>1){for(var l=new Array(n),u=0;u<n;u++)l[u]=arguments[u+3];t.children=l}return{$$typeof:r,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const d=e=>{let{to:t}=e,a=c(e,["to"]);return t.includes("http")?s.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=o.default.join("/auto/","pages/auto-release.html")+t),s.default.createElement("a",u({},a,{href:t,onClick:a=>{if(a.preventDefault(),"#"===e.to)return!1;const r=new URL(o.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(r),null,t),e.onClick();const s=new CustomEvent("changeLocation",{detail:r});return dispatchEvent(s),!1}})))};d.defaultProps={href:"",onClick:()=>{}};const h=e=>{var t,a;return a=t=class extends s.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?s.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),a};h(()=>a.e(25).then(a.bind(null,68))),h(()=>a.e(25).then(a.bind(null,69)));var p=i("h1",{},void 0,i("code",{},void 0,"auto release")),b=i("p",{},void 0,"Auto-generate a github release."),f=i("pre",{},void 0,i("code",{className:"language-json"},void 0,"{",i("br",{}),"  ",i("span",{className:"hljs-attr"},void 0,'"scripts"'),": {",i("br",{}),"    ",i("span",{className:"hljs-attr"},void 0,'"postpublish"'),": ",i("span",{className:"hljs-string"},void 0,'"auto release"'),i("br",{}),"  }",i("br",{}),"}",i("br",{}))),v=i("p",{},void 0,"Make sure the branch/tag you're releasing is on github before running ",i("code",{},void 0,"auto release"),". You will need to push the tags to github first:"),g=i("pre",{},void 0,i("code",{className:"language-json"},void 0,"{",i("br",{}),"  ",i("span",{className:"hljs-attr"},void 0,'"scripts"'),": {",i("br",{}),"    ",i("span",{className:"hljs-attr"},void 0,'"postpublish"'),": ",i("span",{className:"hljs-string"},void 0,'"git push --follow-tags --set-upstream origin $branch && auto release"'),i("br",{}),"  }",i("br",{}),"}",i("br",{}))),m=i("pre",{},void 0,i("code",{className:"language-bash"},void 0,">  auto release -h",i("br",{}),i("br",{}),"Options",i("br",{}),i("br",{}),"  -d, --dry-run          Report what ",i("span",{className:"hljs-built_in"},void 0,"command")," will ",i("span",{className:"hljs-keyword"},void 0,"do")," but ",i("span",{className:"hljs-keyword"},void 0,"do")," not actually ",i("span",{className:"hljs-keyword"},void 0,"do")," anything",i("br",{}),"  --no-version-prefix    Use the version as the tag without the ",i("span",{className:"hljs-string"},void 0,"'v'")," prefix",i("br",{}),"  --jira string          Jira base URL",i("br",{}),"  --use-version string   Version number to publish as. Defaults to reading from the package definition ",i("span",{className:"hljs-keyword"},void 0,"for")," the platform.",i("br",{}),"  -s, --slack string     Url to post a slack message to about the release. If slack url",i("br",{}),"                         supplied via autorc this flag can act as a boolean.  Make sure the",i("br",{}),"                         SLACK_TOKEN environment variable is ",i("span",{className:"hljs-built_in"},void 0,"set"),".",i("br",{}),i("br",{}),"Global Options",i("br",{}),i("br",{}),"  -h, --",i("span",{className:"hljs-built_in"},void 0,"help"),"            Display the ",i("span",{className:"hljs-built_in"},void 0,"help")," output ",i("span",{className:"hljs-keyword"},void 0,"for")," the ",i("span",{className:"hljs-built_in"},void 0,"command"),i("br",{}),"  -v, --verbose         Show some more logs",i("br",{}),"  -w, --very-verbose    Show a lot more logs",i("br",{}),"  --repo string         The repo to ",i("span",{className:"hljs-built_in"},void 0,"set")," the status on. Defaults to looking ",i("span",{className:"hljs-keyword"},void 0,"in")," the package definition ",i("span",{className:"hljs-keyword"},void 0,"for")," the platform",i("br",{}),"  --owner string        The owner of the GitHub repo. Defaults to reading from the package definition ",i("span",{className:"hljs-keyword"},void 0,"for")," the platform",i("br",{}),"  --github-api string   GitHub API to use",i("br",{}),"  --plugins string[]    Plugins to load auto with. (defaults to just npm)",i("br",{}),i("br",{}),"Examples",i("br",{}),i("br",{}),"  $ auto release",i("br",{}))),y=i("code",{},void 0,".autorc");var j=e=>i("div",{className:e.className},void 0,i("section",{},void 0,p,b,f,v,g,i("h2",{id:"options"},void 0,"Options ",i(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#options","aria-hidden":"true"})),m,i("h2",{id:"slack-url"},void 0,"Slack URL ",i(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#slack-url","aria-hidden":"true"})),i("p",{},void 0,"When posting to slack you must provide your slack services hook url at the CLI or in your ",y," config. To see configuration ",i(d,{currentPage:e.currentPage,to:"/auto/pages/autorc.html#slack-url"},void 0,"go here"),".")));t.default=j,e.exports=t.default}}]);
//# sourceMappingURL=auto-release.js.map
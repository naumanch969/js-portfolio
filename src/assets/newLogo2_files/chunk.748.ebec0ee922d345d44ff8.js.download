/*! For license information please see chunk.748.ebec0ee922d345d44ff8.js.LICENSE.txt */
(self.webpackChunk_ember_auto_import_=self.webpackChunk_ember_auto_import_||[]).push([[748],{3563:function(t){t.exports=function(){var t=["navigation","request","process","log","user","state","error","manual"],e=function(t,e,n){for(var r=n,i=0,o=t.length;i<o;i++)r=e(r,t[i],i,t)
return r},n=function(t,n){return e(t,(function(t,e,r,i){return n(e,r,i)?t.concat(e):t}),[])},r=function(t,n){return e(t,(function(t,e,r,i){return!0===t||e===n}),!1)},i=function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=!{toString:null}.propertyIsEnumerable("toString"),a=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],s=function(t){var e,n=[]
for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(e)
if(!o)return n
for(var r=0,i=a.length;r<i;r++)Object.prototype.hasOwnProperty.call(t,a[r])&&n.push(a[r])
return n},u=function(t,e){return void 0===t&&(t=1),void 0===e&&(e=1/0),function(n){return"number"==typeof n&&parseInt(""+n,10)===n&&n>=t&&n<=e}},c=function(t){return"function"==typeof t||i(t)&&n(t,(function(t){return"function"==typeof t})).length===t.length},h=function(t){return"string"==typeof t&&!!t.length},l={}
l.schema={apiKey:{defaultValue:function(){return null},message:"is required",validate:h},appVersion:{defaultValue:function(){},message:"should be a string",validate:function(t){return void 0===t||h(t)}},appType:{defaultValue:function(){},message:"should be a string",validate:function(t){return void 0===t||h(t)}},autoDetectErrors:{defaultValue:function(){return!0},message:"should be true|false",validate:function(t){return!0===t||!1===t}},enabledErrorTypes:{defaultValue:function(){return{unhandledExceptions:!0,unhandledRejections:!0}},message:"should be an object containing the flags { unhandledExceptions:true|false, unhandledRejections:true|false }",allowPartialObject:!0,validate:function(t){if("object"!=typeof t||!t)return!1
var e=s(t),i=s({unhandledExceptions:!0,unhandledRejections:!0})
return!(n(e,(function(t){return r(i,t)})).length<e.length||n(s(t),(function(e){return"boolean"!=typeof t[e]})).length>0)}},onError:{defaultValue:function(){return[]},message:"should be a function or array of functions",validate:c},onSession:{defaultValue:function(){return[]},message:"should be a function or array of functions",validate:c},onBreadcrumb:{defaultValue:function(){return[]},message:"should be a function or array of functions",validate:c},endpoints:{defaultValue:function(){return{notify:"https://notify.bugsnag.com",sessions:"https://sessions.bugsnag.com"}},message:"should be an object containing endpoint URLs { notify, sessions }",validate:function(t){return t&&"object"==typeof t&&h(t.notify)&&h(t.sessions)&&0===n(s(t),(function(t){return!r(["notify","sessions"],t)})).length}},autoTrackSessions:{defaultValue:function(t){return!0},message:"should be true|false",validate:function(t){return!0===t||!1===t}},enabledReleaseStages:{defaultValue:function(){return null},message:"should be an array of strings",validate:function(t){return null===t||i(t)&&n(t,(function(t){return"string"==typeof t})).length===t.length}},releaseStage:{defaultValue:function(){return"production"},message:"should be a string",validate:function(t){return"string"==typeof t&&t.length}},maxBreadcrumbs:{defaultValue:function(){return 25},message:"should be a number ≤100",validate:function(t){return u(0,100)(t)}},enabledBreadcrumbTypes:{defaultValue:function(){return t},message:"should be null or a list of available breadcrumb types ("+t.join(",")+")",validate:function(n){return null===n||i(n)&&e(n,(function(e,n){return!1===e?e:r(t,n)}),!0)}},context:{defaultValue:function(){},message:"should be a string",validate:function(t){return void 0===t||"string"==typeof t}},user:{defaultValue:function(){return{}},message:"should be an object with { id, email, name } properties",validate:function(t){return null===t||t&&e(s(t),(function(t,e){return t&&r(["id","email","name"],e)}),!0)}},metadata:{defaultValue:function(){return{}},message:"should be an object",validate:function(t){return"object"==typeof t&&null!==t}},logger:{defaultValue:function(){},message:"should be null or an object with methods { debug, info, warn, error }",validate:function(t){return!t||t&&e(["debug","info","warn","error"],(function(e,n){return e&&"function"==typeof t[n]}),!0)}},redactedKeys:{defaultValue:function(){return["password"]},message:"should be an array of strings|regexes",validate:function(t){return i(t)&&t.length===n(t,(function(t){return"string"==typeof t||t&&"function"==typeof t.test})).length}},plugins:{defaultValue:function(){return[]},message:"should be an array of plugin objects",validate:function(t){return i(t)&&t.length===n(t,(function(t){return t&&"object"==typeof t&&"function"==typeof t.load})).length}},featureFlags:{defaultValue:function(){return[]},message:'should be an array of objects that have a "name" property',validate:function(t){return i(t)&&t.length===n(t,(function(t){return t&&"object"==typeof t&&"string"==typeof t.name})).length}}}
var f=function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},d=function(t,n){return e(t,(function(t,e,r,i){return t.concat(n(e,r,i))}),[])}
function p(){return p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},p.apply(this,arguments)}var g=l.schema,v={releaseStage:f({},g.releaseStage,{defaultValue:function(){return/^localhost(:\d+)?$/.test(window.location.host)?"development":"production"}}),appType:p({},g.appType,{defaultValue:function(){return"browser"}}),logger:f({},g.logger,{defaultValue:function(){return"undefined"!=typeof console&&"function"==typeof console.debug?m():void 0}})},m=function(){var t={},e=console.log
return d(["debug","info","warn","error"],(function(n){var r=console[n]
t[n]="function"==typeof r?r.bind(console,"[bugsnag]"):e.bind(console,"[bugsnag]")})),t},y=function(){function t(t,e,n,r){void 0===r&&(r=new Date),this.type=n,this.message=t,this.metadata=e,this.timestamp=r}return t.prototype.toJSON=function(){return{type:this.type,name:this.message,timestamp:this.timestamp,metaData:this.metadata}},t}(),b={}
!function(t,e){"use strict"
"object"==typeof b?b=e():t.StackFrame=e()}(this,(function(){"use strict"
function t(t){return!isNaN(parseFloat(t))&&isFinite(t)}function e(t){return t.charAt(0).toUpperCase()+t.substring(1)}function n(t){return function(){return this[t]}}var r=["isConstructor","isEval","isNative","isToplevel"],i=["columnNumber","lineNumber"],o=["fileName","functionName","source"],a=r.concat(i,o,["args"])
function s(t){if(t instanceof Object)for(var n=0;n<a.length;n++)t.hasOwnProperty(a[n])&&void 0!==t[a[n]]&&this["set"+e(a[n])](t[a[n]])}s.prototype={getArgs:function(){return this.args},setArgs:function(t){if("[object Array]"!==Object.prototype.toString.call(t))throw new TypeError("Args must be an Array")
this.args=t},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(t){if(t instanceof s)this.evalOrigin=t
else{if(!(t instanceof Object))throw new TypeError("Eval Origin must be an Object or StackFrame")
this.evalOrigin=new s(t)}},toString:function(){return(this.getFunctionName()||"{anonymous}")+"("+(this.getArgs()||[]).join(",")+")"+(this.getFileName()?"@"+this.getFileName():"")+(t(this.getLineNumber())?":"+this.getLineNumber():"")+(t(this.getColumnNumber())?":"+this.getColumnNumber():"")}}
for(var u=0;u<r.length;u++)s.prototype["get"+e(r[u])]=n(r[u]),s.prototype["set"+e(r[u])]=function(t){return function(e){this[t]=Boolean(e)}}(r[u])
for(var c=0;c<i.length;c++)s.prototype["get"+e(i[c])]=n(i[c]),s.prototype["set"+e(i[c])]=function(e){return function(n){if(!t(n))throw new TypeError(e+" must be a Number")
this[e]=Number(n)}}(i[c])
for(var h=0;h<o.length;h++)s.prototype["get"+e(o[h])]=n(o[h]),s.prototype["set"+e(o[h])]=function(t){return function(e){this[t]=String(e)}}(o[h])
return s}))
var w={}
!function(t,e){"use strict"
"object"==typeof w?w=e(b):t.ErrorStackParser=e(t.StackFrame)}(this,(function(t){"use strict"
var e=/(^|@)\S+\:\d+/,n=/^\s*at .*(\S+\:\d+|\(native\))/m,r=/^(eval@)?(\[native code\])?$/
return{parse:function(t){if(void 0!==t.stacktrace||void 0!==t["opera#sourceloc"])return this.parseOpera(t)
if(t.stack&&t.stack.match(n))return this.parseV8OrIE(t)
if(t.stack)return this.parseFFOrSafari(t)
throw new Error("Cannot parse given Error object")},extractLocation:function(t){if(-1===t.indexOf(":"))return[t]
var e=/(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(t.replace(/[\(\)]/g,""))
return[e[1],e[2]||void 0,e[3]||void 0]},parseV8OrIE:function(e){return e.stack.split("\n").filter((function(t){return!!t.match(n)}),this).map((function(e){e.indexOf("(eval ")>-1&&(e=e.replace(/eval code/g,"eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g,""))
var n=e.replace(/^\s+/,"").replace(/\(eval code/g,"("),r=n.match(/ (\((.+):(\d+):(\d+)\)$)/),i=(n=r?n.replace(r[0],""):n).split(/\s+/).slice(1),o=this.extractLocation(r?r[1]:i.pop()),a=i.join(" ")||void 0,s=["eval","<anonymous>"].indexOf(o[0])>-1?void 0:o[0]
return new t({functionName:a,fileName:s,lineNumber:o[1],columnNumber:o[2],source:e})}),this)},parseFFOrSafari:function(e){return e.stack.split("\n").filter((function(t){return!t.match(r)}),this).map((function(e){if(e.indexOf(" > eval")>-1&&(e=e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,":$1")),-1===e.indexOf("@")&&-1===e.indexOf(":"))return new t({functionName:e})
var n=/((.*".+"[^@]*)?[^@]*)(?:@)/,r=e.match(n),i=r&&r[1]?r[1]:void 0,o=this.extractLocation(e.replace(n,""))
return new t({functionName:i,fileName:o[0],lineNumber:o[1],columnNumber:o[2],source:e})}),this)},parseOpera:function(t){return!t.stacktrace||t.message.indexOf("\n")>-1&&t.message.split("\n").length>t.stacktrace.split("\n").length?this.parseOpera9(t):t.stack?this.parseOpera11(t):this.parseOpera10(t)},parseOpera9:function(e){for(var n=/Line (\d+).*script (?:in )?(\S+)/i,r=e.message.split("\n"),i=[],o=2,a=r.length;o<a;o+=2){var s=n.exec(r[o])
s&&i.push(new t({fileName:s[2],lineNumber:s[1],source:r[o]}))}return i},parseOpera10:function(e){for(var n=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,r=e.stacktrace.split("\n"),i=[],o=0,a=r.length;o<a;o+=2){var s=n.exec(r[o])
s&&i.push(new t({functionName:s[3]||void 0,fileName:s[2],lineNumber:s[1],source:r[o]}))}return i},parseOpera11:function(n){return n.stack.split("\n").filter((function(t){return!!t.match(e)&&!t.match(/^Error created at/)}),this).map((function(e){var n,r=e.split("@"),i=this.extractLocation(r.pop()),o=r.shift()||"",a=o.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^\)]*\)/g,"")||void 0
o.match(/\(([^\)]*)\)/)&&(n=o.replace(/^[^\(]+\(([^\)]*)\)$/,"$1"))
var s=void 0===n||"[arguments not available]"===n?void 0:n.split(",")
return new t({functionName:a,args:s,fileName:i[0],lineNumber:i[1],columnNumber:i[2],source:e})}),this)}}}))
var x=w,S=function(t,e,n,r){var i=r&&r.redactedKeys?r.redactedKeys:[],o=r&&r.redactedPaths?r.redactedPaths:[]
return JSON.stringify(function(t,e,n){var r=[],i=0
return function t(o,a){function s(){return a.length>8&&i>25e3}if(i++,a.length>20)return C
if(s())return C
if(null===o||"object"!=typeof o)return o
if(function(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return!0
return!1}(r,o))return"[Circular]"
if(r.push(o),"function"==typeof o.toJSON)try{i--
var u=t(o.toJSON(),a)
return r.pop(),u}catch(o){return T(o)}if((h=o)instanceof Error||/^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(h))){i--
var c=t({name:o.name,message:o.message},a)
return r.pop(),c}var h
if(function(t){return"[object Array]"===Object.prototype.toString.call(t)}(o)){for(var l=[],f=0,d=o.length;f<d;f++){if(s()){l.push(C)
break}l.push(t(o[f],a.concat("[]")))}return r.pop(),l}var p={}
try{for(var g in o)if(Object.prototype.hasOwnProperty.call(o,g))if(E(n,a.join("."))&&k(e,g))p[g]="[REDACTED]"
else{if(s()){p[g]=C
break}p[g]=t(A(o,g),a.concat(g))}}catch(o){}return r.pop(),p}(t,[])}(t,i,o),e,n)},C="..."
function T(t){return"[Throws: "+(t?t.message:"?")+"]"}function E(t,e){for(var n=0,r=t.length;n<r;n++)if(0===e.indexOf(t[n]))return!0
return!1}function k(t,e){for(var n=0,r=t.length;n<r;n++){if("string"==typeof t[n]&&t[n].toLowerCase()===e.toLowerCase())return!0
if(t[n]&&"function"==typeof t[n].test&&t[n].test(e))return!0}return!1}function A(t,e){try{return t[e]}catch(t){return T(t)}}function P(t,e,n){"string"==typeof e&&(void 0===n?n=null:null!==n&&"string"!=typeof n&&(n=S(n)),t[e]=n)}var F={add:P,merge:function(t,e){if(i(e))for(var n=0;n<e.length;++n){var r=e[n]
null!==r&&"object"==typeof r&&P(t,r.name,r.variant)}},toEventApi:function(t){return d(s(t),(function(e){var n={featureFlag:e}
return"string"==typeof t[e]&&(n.variant=t[e]),n}))}},R=function(t){return!(!t||!t.stack&&!t.stacktrace&&!t["opera#sourceloc"]||"string"!=typeof(t.stack||t.stacktrace||t["opera#sourceloc"])||t.stack===t.name+": "+t.message)},O=function(t){switch(Object.prototype.toString.call(t)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0
default:return t instanceof Error}},D=function(t,e,n){"string"==typeof e&&(n?t[e]&&delete t[e][n]:delete t[e])},M=function(t,e,n,r){var i
if(e){var o
if(null===n)return D(t,e)
"object"==typeof n&&(o=n),"string"==typeof n&&((i={})[n]=r,o=i),o&&(t[e]||(t[e]={}),t[e]=f({},t[e],o))}},I=function(t,e,n){if("string"==typeof e)return n?t[e]?t[e][n]:void 0:t[e]},N=D,_={}
!function(t,e){"use strict"
"object"==typeof _?_=e(b):t.StackGenerator=e(t.StackFrame)}(this,(function(t){return{backtrace:function(e){var n=[],r=10
"object"==typeof e&&"number"==typeof e.maxStackSize&&(r=e.maxStackSize)
for(var i=arguments.callee;i&&n.length<r&&i.arguments;){for(var o=new Array(i.arguments.length),a=0;a<o.length;++a)o[a]=i.arguments[a];/function(?:\s+([\w$]+))+\s*\(/.test(i.toString())?n.push(new t({functionName:RegExp.$1||void 0,args:o})):n.push(new t({args:o}))
try{i=i.caller}catch(t){break}}return n}}}))
var B=function(){function t(e,n,r,i,o){void 0===r&&(r=[]),void 0===i&&(i=U()),this.apiKey=void 0,this.context=void 0,this.groupingHash=void 0,this.originalError=o,this._handledState=i,this.severity=this._handledState.severity,this.unhandled=this._handledState.unhandled,this.app={},this.device={},this.request={},this.breadcrumbs=[],this.threads=[],this._metadata={},this._features={},this._user={},this._session=void 0,this.errors=[G(e,n,t.__type,r)]}var e=t.prototype
return e.addMetadata=function(t,e,n){return M(this._metadata,t,e,n)},e.getMetadata=function(t,e){return I(this._metadata,t,e)},e.clearMetadata=function(t,e){return N(this._metadata,t,e)},e.addFeatureFlag=function(t,e){void 0===e&&(e=null),F.add(this._features,t,e)},e.addFeatureFlags=function(t){F.merge(this._features,t)},e.clearFeatureFlag=function(t){delete this._features[t]},e.clearFeatureFlags=function(){this._features={}},e.getUser=function(){return this._user},e.setUser=function(t,e,n){this._user={id:t,email:e,name:n}},e.toJSON=function(){return{payloadVersion:"4",exceptions:d(this.errors,(function(t){return f({},t,{message:t.errorMessage})})),severity:this.severity,unhandled:this._handledState.unhandled,severityReason:this._handledState.severityReason,app:this.app,device:this.device,request:this.request,breadcrumbs:this.breadcrumbs,context:this.context,groupingHash:this.groupingHash,metaData:this._metadata,user:this._user,session:this._session,featureFlags:F.toEventApi(this._features)}},t}(),L=function(t){return/^global code$/i.test(t)?"global code":t},U=function(){return{unhandled:!1,severity:"warning",severityReason:{type:"handledException"}}},j=function(t){return"string"==typeof t?t:""}
function G(t,n,r,i){return{errorClass:j(t),errorMessage:j(n),type:r,stacktrace:e(i,(function(t,e){var n=function(t){var e={file:t.fileName,method:L(t.functionName),lineNumber:t.lineNumber,columnNumber:t.columnNumber,code:void 0,inProject:void 0}
return e.lineNumber>-1&&!e.file&&!e.method&&(e.file="global code"),e}(e)
try{return"{}"===JSON.stringify(n)?t:t.concat(n)}catch(e){return t}}),[])}}function z(t){return t.cause?[t].concat(z(t.cause)):[t]}B.getStacktrace=function(t,e,r){if(R(t))return x.parse(t).slice(e)
try{return n(_.backtrace(),(function(t){return-1===(t.functionName||"").indexOf("StackGenerator$$")})).slice(1+r)}catch(t){return[]}},B.create=function(t,e,n,r,i,o){void 0===i&&(i=0)
var a,s=V(t,e,r,o),u=s[0],c=s[1]
try{var h=B.getStacktrace(u,c>0?1+c+i:0,1+i)
a=new B(u.name,u.message,h,n,t)}catch(e){a=new B(u.name,u.message,[],n,t)}if("InvalidError"===u.name&&a.addMetadata(""+r,"non-error parameter",H(t)),u.cause){var l,f=z(u).slice(1),p=d(f,(function(t){var e=O(t)&&R(t)?x.parse(t):[],n=V(t,!0,"error cause")[0]
return"InvalidError"===n.name&&a.addMetadata("error cause",H(t)),G(n.name,n.message,B.__type,e)}));(l=a.errors).push.apply(l,p)}return a}
var H=function(t){return null===t?"null":void 0===t?"undefined":t},V=function(t,e,n,r){var i,o=0,a=function(t){var e="error cause"===n?"was":"received"
r&&r.warn(n+" "+e+' a non-error: "'+t+'"')
var i=new Error(n+" "+e+' a non-error. See "'+n+'" tab for more detail.')
return i.name="InvalidError",i}
if(e)switch(typeof t){case"string":case"number":case"boolean":i=new Error(String(t)),o+=1
break
case"function":i=a("function"),o+=2
break
case"object":null!==t&&O(t)?i=t:null!==t&&Z(t)?((i=new Error(t.message||t.errorMessage)).name=t.name||t.errorClass,o+=1):(i=a(null===t?"null":"unsupported object"),o+=2)
break
default:i=a("nothing"),o+=2}else O(t)?i=t:(i=a(typeof t),o+=2)
if(!R(i))try{throw i}catch(t){R(t)&&(i=t,o=1)}return[i,o]}
B.__type="browserjs"
var Z=function(t){return!("string"!=typeof t.name&&"string"!=typeof t.errorClass||"string"!=typeof t.message&&"string"!=typeof t.errorMessage)},W=B,q=function(t,e,n,r){for(var i=!1,o=t.slice();!i&&o.length;)try{i=!1===o.pop()(e)}catch(t){r.error("Error occurred in "+n+" callback, continuing anyway…"),r.error(t)}return i},K=function(t,e){var n="000000000"+t
return n.substr(n.length-e)},X="object"==typeof window?window:self,Y=0
for(var J in X)Object.hasOwnProperty.call(X,J)&&Y++
var Q=navigator.mimeTypes?navigator.mimeTypes.length:0,$=K((Q+navigator.userAgent.length).toString(36)+Y.toString(36),4),tt=function(){return $},et=0,nt=Math.pow(36,4)
function rt(){return K((Math.random()*nt<<0).toString(36),4)}function it(){return"c"+(new Date).getTime().toString(36)+K((et=et<nt?et:0,++et-1).toString(36),4)+tt()+(rt()+rt())}it.fingerprint=tt
var ot,at=it,st=function(){function t(){this.id=at(),this.startedAt=new Date,this._handled=0,this._unhandled=0,this._user={},this.app={},this.device={}}var e=t.prototype
return e.getUser=function(){return this._user},e.setUser=function(t,e,n){this._user={id:t,email:e,name:n}},e.toJSON=function(){return{id:this.id,startedAt:this.startedAt,events:{handled:this._handled,unhandled:this._unhandled}}},e._track=function(t){this[t._handledState.unhandled?"_unhandled":"_handled"]+=1},t}(),ut=st,ct=function(){},ht=function(){function i(t,e,n,r){var o=this
void 0===e&&(e=l.schema),void 0===n&&(n=[]),this._notifier=r,this._config={},this._schema=e,this._delivery={sendSession:ct,sendEvent:ct},this._logger={debug:ct,info:ct,warn:ct,error:ct},this._plugins={},this._breadcrumbs=[],this._session=null,this._metadata={},this._features={},this._context=void 0,this._user={},this._cbs={e:[],s:[],sp:[],b:[]},this.Client=i,this.Event=W,this.Breadcrumb=y,this.Session=ut,this._config=this._configure(t,n),d(n.concat(this._config.plugins),(function(t){t&&o._loadPlugin(t)})),this._depth=1
var a=this,s=this.notify
this.notify=function(){return s.apply(a,arguments)}}var o=i.prototype
return o.addMetadata=function(t,e,n){return M(this._metadata,t,e,n)},o.getMetadata=function(t,e){return I(this._metadata,t,e)},o.clearMetadata=function(t,e){return N(this._metadata,t,e)},o.addFeatureFlag=function(t,e){void 0===e&&(e=null),F.add(this._features,t,e)},o.addFeatureFlags=function(t){F.merge(this._features,t)},o.clearFeatureFlag=function(t){delete this._features[t]},o.clearFeatureFlags=function(){this._features={}},o.getContext=function(){return this._context},o.setContext=function(t){this._context=t},o._configure=function(t,n){var r=e(n,(function(t,e){return e&&e.configSchema?f({},t,e.configSchema):t}),this._schema),i=e(s(r),(function(e,n){var i=r[n].defaultValue(t[n])
return void 0!==t[n]?r[n].validate(t[n])?r[n].allowPartialObject?e.config[n]=f(i,t[n]):e.config[n]=t[n]:(e.errors[n]=r[n].message,e.config[n]=i):e.config[n]=i,e}),{errors:{},config:{}}),o=i.errors,a=i.config
if(r.apiKey){if(!a.apiKey)throw new Error("No Bugsnag API Key set");/^[0-9a-f]{32}$/i.test(a.apiKey)||(o.apiKey="should be a string of 32 hexadecimal characters")}return this._metadata=f({},a.metadata),F.merge(this._features,a.featureFlags),this._user=f({},a.user),this._context=a.context,a.logger&&(this._logger=a.logger),a.onError&&(this._cbs.e=this._cbs.e.concat(a.onError)),a.onBreadcrumb&&(this._cbs.b=this._cbs.b.concat(a.onBreadcrumb)),a.onSession&&(this._cbs.s=this._cbs.s.concat(a.onSession)),s(o).length&&this._logger.warn(lt(o,t)),a},o.getUser=function(){return this._user},o.setUser=function(t,e,n){this._user={id:t,email:e,name:n}},o._loadPlugin=function(t){var e=t.load(this)
return t.name&&(this._plugins["~"+t.name+"~"]=e),this},o.getPlugin=function(t){return this._plugins["~"+t+"~"]},o._setDelivery=function(t){this._delivery=t(this)},o.startSession=function(){var t=new ut
return t.app.releaseStage=this._config.releaseStage,t.app.version=this._config.appVersion,t.app.type=this._config.appType,t._user=f({},this._user),q(this._cbs.s,t,"onSession",this._logger)?(this._logger.debug("Session not started due to onSession callback"),this):this._sessionDelegate.startSession(this,t)},o.addOnError=function(t,e){void 0===e&&(e=!1),this._cbs.e[e?"unshift":"push"](t)},o.removeOnError=function(t){this._cbs.e=n(this._cbs.e,(function(e){return e!==t}))},o._addOnSessionPayload=function(t){this._cbs.sp.push(t)},o.addOnSession=function(t){this._cbs.s.push(t)},o.removeOnSession=function(t){this._cbs.s=n(this._cbs.s,(function(e){return e!==t}))},o.addOnBreadcrumb=function(t,e){void 0===e&&(e=!1),this._cbs.b[e?"unshift":"push"](t)},o.removeOnBreadcrumb=function(t){this._cbs.b=n(this._cbs.b,(function(e){return e!==t}))},o.pauseSession=function(){return this._sessionDelegate.pauseSession(this)},o.resumeSession=function(){return this._sessionDelegate.resumeSession(this)},o.leaveBreadcrumb=function(e,n,i){if(e="string"==typeof e?e:"",i="string"==typeof i&&r(t,i)?i:"manual",n="object"==typeof n&&null!==n?n:{},e){var o=new y(e,n,i)
q(this._cbs.b,o,"onBreadcrumb",this._logger)?this._logger.debug("Breadcrumb not attached due to onBreadcrumb callback"):(this._breadcrumbs.push(o),this._breadcrumbs.length>this._config.maxBreadcrumbs&&(this._breadcrumbs=this._breadcrumbs.slice(this._breadcrumbs.length-this._config.maxBreadcrumbs)))}},o._isBreadcrumbTypeEnabled=function(t){var e=this._config.enabledBreadcrumbTypes
return null===e||r(e,t)},o.notify=function(t,e,n){void 0===n&&(n=ct)
var r=W.create(t,!0,void 0,"notify()",this._depth+1,this._logger)
this._notify(r,e,n)},o._notify=function(t,e,n){var o=this
if(void 0===n&&(n=ct),t.app=f({},t.app,{releaseStage:this._config.releaseStage,version:this._config.appVersion,type:this._config.appType}),t.context=t.context||this._context,t._metadata=f({},t._metadata,this._metadata),t._features=f({},t._features,this._features),t._user=f({},t._user,this._user),t.breadcrumbs=this._breadcrumbs.slice(),null!==this._config.enabledReleaseStages&&!r(this._config.enabledReleaseStages,this._config.releaseStage))return this._logger.warn("Event not sent due to releaseStage/enabledReleaseStages configuration"),n(null,t)
var a=t.severity,s=function(t){o._logger.error("Error occurred in onError callback, continuing anyway…"),o._logger.error(t)}
!function(t,e,n,r){!function(t,e,n){var r=0,i=function(){if(r>=t.length)return n(null,!0)
e(t[r],(function(t,e){return t?n(t):!1===e?n(null,!1):(r++,void i())}))}
i()}(t,(function(t,r){if("function"!=typeof t)return r(null)
try{if(2!==t.length){var i=t(e)
return i&&"function"==typeof i.then?i.then((function(t){return setTimeout((function(){return r(null,t)}))}),(function(t){setTimeout((function(){return n(t),r(null,!0)}))})):r(null,i)}t(e,(function(t,e){if(t)return n(t),r(null)
r(null,e)}))}catch(t){n(t),r(null)}}),r)}([].concat(this._cbs.e).concat(e),t,s,(function(e,r){if(e&&s(e),!r)return o._logger.debug("Event not sent due to onError callback"),n(null,t)
o._isBreadcrumbTypeEnabled("error")&&i.prototype.leaveBreadcrumb.call(o,t.errors[0].errorClass,{errorClass:t.errors[0].errorClass,errorMessage:t.errors[0].errorMessage,severity:t.severity},"error"),a!==t.severity&&(t._handledState.severityReason={type:"userCallbackSetSeverity"}),t.unhandled!==t._handledState.unhandled&&(t._handledState.severityReason.unhandledOverridden=!0,t._handledState.unhandled=t.unhandled),o._session&&(o._session._track(t),t._session=o._session),o._delivery.sendEvent({apiKey:t.apiKey||o._config.apiKey,notifier:o._notifier,events:[t]},(function(e){return n(e,t)}))}))},i}(),lt=function(t,e){return new Error("Invalid configuration\n"+d(s(t),(function(n){return"  - "+n+" "+t[n]+", got "+ft(e[n])})).join("\n\n"))},ft=function(t){switch(typeof t){case"string":case"number":case"object":return JSON.stringify(t)
default:return String(t)}},dt=ht,pt={},gt=["events.[].metaData","events.[].breadcrumbs.[].metaData","events.[].request"]
pt.event=function(t,e){var n=S(t,null,null,{redactedPaths:gt,redactedKeys:e})
if(n.length>1e6&&(t.events[0]._metadata={notifier:"WARNING!\nSerialized payload was "+n.length/1e6+"MB (limit = 1MB)\nmetadata was removed"},(n=S(t,null,null,{redactedPaths:gt,redactedKeys:e})).length>1e6))throw new Error("payload exceeded 1MB limit")
return n},pt.session=function(t,e){var n=S(t,null,null)
if(n.length>1e6)throw new Error("payload exceeded 1MB limit")
return n},ot=function(t,e){return void 0===e&&(e=window),{sendEvent:function(n,r){void 0===r&&(r=function(){})
var i=vt(t._config,"notify","4",e),o=new e.XDomainRequest
o.onload=function(){r(null)},o.open("POST",i),setTimeout((function(){try{o.send(pt.event(n,t._config.redactedKeys))}catch(e){t._logger.error(e),r(e)}}),0)},sendSession:function(n,r){void 0===r&&(r=function(){})
var i=vt(t._config,"sessions","1",e),o=new e.XDomainRequest
o.onload=function(){r(null)},o.open("POST",i),setTimeout((function(){try{o.send(pt.session(n,t._config.redactedKeys))}catch(e){t._logger.error(e),r(e)}}),0)}}}
var vt=function(t,e,n,r){var i=JSON.parse(JSON.stringify(new Date))
return mt(t.endpoints[e],r.location.protocol)+"?apiKey="+encodeURIComponent(t.apiKey)+"&payloadVersion="+n+"&sentAt="+encodeURIComponent(i)},mt=ot._matchPageProtocol=function(t,e){return"http:"===e?t.replace(/^https:/,"http:"):t},yt=function(t,e){return void 0===e&&(e=window),{sendEvent:function(n,r){void 0===r&&(r=function(){})
try{var i=t._config.endpoints.notify,o=new e.XMLHttpRequest
o.onreadystatechange=function(){o.readyState===e.XMLHttpRequest.DONE&&r(null)},o.open("POST",i),o.setRequestHeader("Content-Type","application/json"),o.setRequestHeader("Bugsnag-Api-Key",n.apiKey||t._config.apiKey),o.setRequestHeader("Bugsnag-Payload-Version","4"),o.setRequestHeader("Bugsnag-Sent-At",(new Date).toISOString()),o.send(pt.event(n,t._config.redactedKeys))}catch(e){t._logger.error(e)}},sendSession:function(n,r){void 0===r&&(r=function(){})
try{var i=t._config.endpoints.sessions,o=new e.XMLHttpRequest
o.onreadystatechange=function(){o.readyState===e.XMLHttpRequest.DONE&&r(null)},o.open("POST",i),o.setRequestHeader("Content-Type","application/json"),o.setRequestHeader("Bugsnag-Api-Key",t._config.apiKey),o.setRequestHeader("Bugsnag-Payload-Version","1"),o.setRequestHeader("Bugsnag-Sent-At",(new Date).toISOString()),o.send(pt.session(n,t._config.redactedKeys))}catch(e){t._logger.error(e)}}}},bt=new Date,wt=function(){bt=new Date},xt={name:"appDuration",load:function(t){return t.addOnError((function(t){var e=new Date
t.app.duration=e-bt}),!0),{reset:wt}}},St=function(t,e){var n="000000000"+t
return n.substr(n.length-e)},Ct="object"==typeof window?window:self,Tt=0
for(var Et in Ct)Object.hasOwnProperty.call(Ct,Et)&&Tt++
var kt=navigator.mimeTypes?navigator.mimeTypes.length:0,At=St((kt+navigator.userAgent.length).toString(36)+Tt.toString(36),4),Pt=function(){return At},Ft=0,Rt=Math.pow(36,4)
function Ot(){return St((Math.random()*Rt<<0).toString(36),4)}function Dt(){return"c"+(new Date).getTime().toString(36)+St((Ft=Ft<Rt?Ft:0,++Ft-1).toString(36),4)+Pt()+(Ot()+Ot())}Dt.fingerprint=Pt
var Mt=Dt,It="bugsnag-anonymous-id",Nt=function(t,e){return void 0===t&&(t=navigator),void 0===e&&(e=window.screen),{load:function(n){var r={locale:t.browserLanguage||t.systemLanguage||t.userLanguage||t.language,userAgent:t.userAgent}
e&&e.orientation&&e.orientation.type?r.orientation=e.orientation.type:r.orientation=document.documentElement.clientWidth>document.documentElement.clientHeight?"landscape":"portrait",n._config.generateAnonymousId&&(r.id=function(){try{var t=window.localStorage,e=t.getItem(It)
return e&&/^c[a-z0-9]{20,32}$/.test(e)||(e=Mt(),t.setItem(It,e)),e}catch(t){}}()),n.addOnSession((function(t){t.device=f({},t.device,r),n._config.collectUserIp||_t(t)})),n.addOnError((function(t){t.device=f({},t.device,r,{time:new Date}),n._config.collectUserIp||_t(t)}),!0)},configSchema:{generateAnonymousId:{validate:function(t){return!0===t||!1===t},defaultValue:function(){return!0},message:"should be true|false"}}}},_t=function(t){var e=t.getUser()
e&&e.id||t.setUser(t.device.id)},Bt=function(t){return void 0===t&&(t=window),{load:function(e){e.addOnError((function(e){e.request&&e.request.url||(e.request=f({},e.request,{url:t.location.href}))}),!0)}}},Lt={load:function(t){t._sessionDelegate=Ut}},Ut={startSession:function(t,e){var n=t
return n._session=e,n._pausedSession=null,null===n._config.enabledReleaseStages||r(n._config.enabledReleaseStages,n._config.releaseStage)?(n._delivery.sendSession({notifier:n._notifier,device:e.device,app:e.app,sessions:[{id:e.id,startedAt:e.startedAt,user:e._user}]}),n):(n._logger.warn("Session not sent due to releaseStage/enabledReleaseStages configuration"),n)},resumeSession:function(t){return t._session?t:t._pausedSession?(t._session=t._pausedSession,t._pausedSession=null,t):t.startSession()},pauseSession:function(t){t._pausedSession=t._session,t._session=null}},jt={load:function(t){t._config.collectUserIp||t.addOnError((function(t){t._user&&void 0===t._user.id&&delete t._user.id,t._user=f({id:"[REDACTED]"},t._user),t.request=f({clientIp:"[REDACTED]"},t.request)}))},configSchema:{collectUserIp:{defaultValue:function(){return!0},message:"should be true|false",validate:function(t){return!0===t||!1===t}}}},Gt={load:function(t){!/^(local-)?dev(elopment)?$/.test(t._config.releaseStage)&&t._isBreadcrumbTypeEnabled("log")&&d(zt,(function(n){var r=console[n]
console[n]=function(){for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a]
t.leaveBreadcrumb("Console output",e(o,(function(t,e,n){var r="[Unknown value]"
try{r=String(e)}catch(t){}if("[object Object]"===r)try{r=JSON.stringify(e)}catch(t){}return t["["+n+"]"]=r,t}),{severity:0===n.indexOf("group")?"log":n}),"log"),r.apply(console,o)},console[n]._restore=function(){console[n]=r}}))}},zt=n(["log","debug","info","warn","error"],(function(t){return"undefined"!=typeof console&&"function"==typeof console[t]})),Ht=5e5,Vt=function(t,r){return void 0===t&&(t=document),void 0===r&&(r=window),{load:function(i){if(i._config.trackInlineScripts){var o=r.location.href,a="",s=t.attachEvent?"complete"===t.readyState:"loading"!==t.readyState,u=function(){return t.documentElement.outerHTML}
a=u()
var c=t.onreadystatechange
t.onreadystatechange=function(){"interactive"===t.readyState&&(a=u(),s=!0)
try{c.apply(this,arguments)}catch(t){}}
var h=null,l=function(t){h=t},f=function(){var e=t.currentScript||h
if(!e&&!s){var n=t.scripts||t.getElementsByTagName("script")
e=n[n.length-1]}return e}
i.addOnError((function(t){t.errors[0].stacktrace=n(t.errors[0].stacktrace,(function(t){return!/__trace__$/.test(t.method)}))
var r=t.errors[0].stacktrace[0]
if(!r||!r.file||r.file.replace(/#.*$/,"")===o.replace(/#.*$/,"")){var i=f()
if(i){var c=i.innerHTML
t.addMetadata("script","content",c.length<=Ht?c:c.substr(0,Ht)),r&&r.lineNumber&&(r.code=function(t){s&&a||(a=u())
var n=["\x3c!-- DOC START --\x3e"].concat(a.split("\n")),r=t-1,i=Math.max(r-3,0),o=Math.min(r+3,n.length)
return e(n.slice(i,o),(function(t,e,n){return t[i+1+n]=e.length<=200?e:e.substr(0,200),t}),{})}(r.lineNumber))}}}),!0)
var p=d(["setTimeout","setInterval","setImmediate","requestAnimationFrame"],(function(t){return Zt(r,t,(function(t){return g(t,(function(t){return{get:function(){return t[0]},replace:function(e){t[0]=e}}}))}))}))[0]
d(["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],(function(t){r[t]&&r[t].prototype&&Object.prototype.hasOwnProperty.call(r[t].prototype,"addEventListener")&&(Zt(r[t].prototype,"addEventListener",(function(t){return g(t,Wt)})),Zt(r[t].prototype,"removeEventListener",(function(t){return g(t,Wt,!0)})))}))}function g(t,e,n){return void 0===n&&(n=!1),function(){var r=[].slice.call(arguments)
try{var i=e(r),o=i.get()
if(n&&t.apply(this,r),"function"!=typeof o)return t.apply(this,r)
if(o.__trace__)i.replace(o.__trace__)
else{var a=f()
o.__trace__=function(){l(a),p((function(){l(null)}),0)
var t=o.apply(this,arguments)
return l(null),t},o.__trace__.__trace__=o.__trace__,i.replace(o.__trace__)}}catch(t){}if(t.apply)return t.apply(this,r)
switch(r.length){case 1:return t(r[0])
case 2:return t(r[0],r[1])
default:return t()}}}},configSchema:{trackInlineScripts:{validate:function(t){return!0===t||!1===t},defaultValue:function(){return!0},message:"should be true|false"}}}}
function Zt(t,e,n){var r=t[e]
if(!r)return r
var i=n(r)
return t[e]=i,r}function Wt(t){var e=!!t[1]&&"function"==typeof t[1].handleEvent
return{get:function(){return e?t[1].handleEvent:t[1]},replace:function(n){e?t[1].handleEvent=n:t[1]=n}}}var qt,Kt=function(t){return void 0===t&&(t=window),{load:function(e){"addEventListener"in t&&e._isBreadcrumbTypeEnabled("user")&&t.addEventListener("click",(function(n){var r,i
try{r=Xt(n.target),i=Yt(n.target,t)}catch(t){r="[hidden]",i="[hidden]",e._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z")}e.leaveBreadcrumb("UI click",{targetText:r,targetSelector:i},"user")}),!0)}}},Xt=function(t){var e,n,r=t.textContent||t.innerText||""
return r||"submit"!==t.type&&"button"!==t.type||(r=t.value),140,n="(...)",(e=r=r.replace(/^\s+|\s+$/g,""))&&e.length<=140?e:e.slice(0,140-n.length)+n}
function Yt(t,e){var n=[t.tagName]
if(t.id&&n.push("#"+t.id),t.className&&t.className.length&&n.push("."+t.className.split(" ").join(".")),!e.document.querySelectorAll||!Array.prototype.indexOf)return n.join("")
try{if(1===e.document.querySelectorAll(n.join("")).length)return n.join("")}catch(t){return n.join("")}if(t.parentNode.childNodes.length>1){var r=Array.prototype.indexOf.call(t.parentNode.childNodes,t)+1
n.push(":nth-child("+r+")")}return 1===e.document.querySelectorAll(n.join("")).length?n.join(""):t.parentNode?Yt(t.parentNode,e)+" > "+n.join(""):n.join("")}qt=function(t){void 0===t&&(t=window)
var e={load:function(e){if("addEventListener"in t&&e._isBreadcrumbTypeEnabled("navigation")){var n=function(t){return function(){return e.leaveBreadcrumb(t,{},"navigation")}}
t.addEventListener("pagehide",n("Page hidden"),!0),t.addEventListener("pageshow",n("Page shown"),!0),t.addEventListener("load",n("Page loaded"),!0),t.document.addEventListener("DOMContentLoaded",n("DOMContentLoaded"),!0),t.addEventListener("load",(function(){return t.addEventListener("popstate",n("Navigated back"),!0)})),t.addEventListener("hashchange",(function(n){var r=n.oldURL?{from:Jt(n.oldURL,t),to:Jt(n.newURL,t),state:$t(t)}:{to:Jt(t.location.href,t)}
e.leaveBreadcrumb("Hash changed",r,"navigation")}),!0),t.history.replaceState&&Qt(e,t.history,"replaceState",t),t.history.pushState&&Qt(e,t.history,"pushState",t)}}}
return e}
var Jt=function(t,e){var n=e.document.createElement("A")
return n.href=t,""+n.pathname+n.search+n.hash},Qt=function(t,e,n,r){var i=e[n]
e[n]=function(o,a,s){t.leaveBreadcrumb("History "+n,function(t,e,n,r){var i=Jt(t.location.href,t)
return{title:n,state:e,prevState:$t(t),to:r||i,from:i}}(r,o,a,s),"navigation"),"function"==typeof t.resetEventCount&&t.resetEventCount(),t._config.autoTrackSessions&&t.startSession(),i.apply(e,[o,a].concat(void 0!==s?s:[]))}},$t=function(t){try{return t.history.state}catch(t){}},te="request",ee=function(t,e){void 0===t&&(t=[]),void 0===e&&(e=window)
var n={load:function(n){if(n._isBreadcrumbTypeEnabled("request")){var i=[n._config.endpoints.notify,n._config.endpoints.sessions].concat(t);(function(){if("addEventListener"in e.XMLHttpRequest.prototype){var t=e.XMLHttpRequest.prototype.open
e.XMLHttpRequest.prototype.open=function(e,n){var r=this,i=!1,o=function(){return u(e,n)},a=function(){return s(e,n,r.status)}
i&&(this.removeEventListener("load",a),this.removeEventListener("error",o)),this.addEventListener("load",a),this.addEventListener("error",o),i=!0,t.apply(this,arguments)}}})(),function(){if("fetch"in e&&!e.fetch.polyfill){var t=e.fetch
e.fetch=function(){var e,n=arguments,r=arguments[0],i=arguments[1],s=null
return r&&"object"==typeof r?(s=r.url,i&&"method"in i?e=i.method:r&&"method"in r&&(e=r.method)):(s=r,i&&"method"in i&&(e=i.method)),void 0===e&&(e="GET"),new Promise((function(r,i){t.apply(void 0,n).then((function(t){o(t,e,s),r(t)})).catch((function(t){a(e,s),i(t)}))}))}}}()
var o=function(t,e,r){var i={status:t.status,request:e+" "+r}
t.status>=400?n.leaveBreadcrumb("fetch() failed",i,te):n.leaveBreadcrumb("fetch() succeeded",i,te)},a=function(t,e){n.leaveBreadcrumb("fetch() error",{request:t+" "+e},te)}}function s(t,e,o){if(void 0!==e){if("string"!=typeof e||!r(i,e.replace(/\?.*$/,""))){var a={status:o,request:t+" "+e}
o>=400?n.leaveBreadcrumb("XMLHttpRequest failed",a,te):n.leaveBreadcrumb("XMLHttpRequest succeeded",a,te)}}else n._logger.warn("The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request.")}function u(t,e){void 0!==e?"string"==typeof e&&r(i,e.replace(/\?.*$/,""))||n.leaveBreadcrumb("XMLHttpRequest error",{request:t+" "+e},te):n._logger.warn("The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request.")}}}
return n},ne={load:function(t){var e=0
t.addOnError((function(n){if(e>=t._config.maxEvents)return t._logger.warn("Cancelling event send due to maxEvents per session limit of "+t._config.maxEvents+" being reached"),!1
e++})),t.resetEventCount=function(){e=0}},configSchema:{maxEvents:{defaultValue:function(){return 10},message:"should be a positive integer ≤100",validate:function(t){return u(1,100)(t)}}}},re={},ie=(re={load:function(t){t.addOnError((function(t){var n=e(t.errors,(function(t,e){return t.concat(e.stacktrace)}),[])
d(n,(function(t){t.file=ie(t.file)}))}))}})._strip=function(t){return"string"==typeof t?t.replace(/\?.*$/,"").replace(/#.*$/,""):t},oe=function(t){return void 0===t&&(t=window),{load:function(e){if(e._config.autoDetectErrors&&e._config.enabledErrorTypes.unhandledExceptions){var n=t.onerror
t.onerror=function(t,r,i,o,a){if(0===i&&/Script error\.?/.test(t))e._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z")
else{var s,u={severity:"error",unhandled:!0,severityReason:{type:"unhandledException"}}
if(a)s=e.Event.create(a,!0,u,"window onerror",1),ae(s.errors[0].stacktrace,r,i,o)
else if("object"!=typeof t||null===t||r&&"string"==typeof r||i||o||a)s=e.Event.create(t,!0,u,"window onerror",1),ae(s.errors[0].stacktrace,r,i,o)
else{var c=t.type?"Event: "+t.type:"Error",h=t.message||t.detail||"";(s=e.Event.create({name:c,message:h},!0,u,"window onerror",1)).originalError=t,s.addMetadata("window onerror",{event:t,extraParameters:r})}e._notify(s)}"function"==typeof n&&n.apply(this,arguments)}}}}},ae=function(t,e,n,r){t[0]||t.push({})
var i=t[0]
i.file||"string"!=typeof e||(i.file=e),!i.lineNumber&&se(n)&&(i.lineNumber=n),i.columnNumber||(se(r)?i.columnNumber=r:window.event&&se(window.event.errorCharacter)&&(i.columnNumber=window.event.errorCharacter))},se=function(t){return"number"==typeof t&&"NaN"!==String.call(t)},ue=function(t){return void 0===t&&(t=window),{load:function(e){if(e._config.autoDetectErrors&&e._config.enabledErrorTypes.unhandledRejections){var n=function(t){var n=t.reason,r=!1
try{t.detail&&t.detail.reason&&(n=t.detail.reason,r=!0)}catch(t){}var i=e.Event.create(n,!1,{severity:"error",unhandled:!0,severityReason:{type:"unhandledPromiseRejection"}},"unhandledrejection handler",1,e._logger)
r&&d(i.errors[0].stacktrace,ce(n)),e._notify(i,(function(t){var e
O(t.originalError)&&!t.originalError.stack&&t.addMetadata("unhandledRejection handler",((e={})[Object.prototype.toString.call(t.originalError)]={name:t.originalError.name,message:t.originalError.message,code:t.originalError.code},e))}))}
"addEventListener"in t?t.addEventListener("unhandledrejection",n):t.onunhandledrejection=function(t,e){n({detail:{reason:t,promise:e}})}}}}},ce=function(t){return function(e){e.file!==t.toString()&&e.method&&(e.method=e.method.replace(/^\s+/,""))}},he={},le=f({},l.schema,v),fe={_client:null,createClient:function(t){"string"==typeof t&&(t={apiKey:t}),t||(t={})
var e,n=[xt,Nt(),(void 0===e&&(e=window),{load:function(t){t.addOnError((function(t){void 0===t.context&&(t.context=e.location.pathname)}),!0)}}),Bt(),ne,Lt,jt,re,oe(),ue(),qt(),Kt(),ee(),Gt,Vt()],r=new dt(t,le,n,{name:"Bugsnag JavaScript",version:"7.16.7",url:"https://github.com/bugsnag/bugsnag-js"})
return r._setDelivery(window.XDomainRequest?ot:yt),r._logger.debug("Loaded!"),r.leaveBreadcrumb("Bugsnag loaded",{},"state"),r._config.autoTrackSessions?r.startSession():r},start:function(t){return fe._client?(fe._client._logger.warn("Bugsnag.start() was called more than once. Ignoring."),fe._client):(fe._client=fe.createClient(t),fe._client)},isStarted:function(){return null!=fe._client}}
return d(["resetEventCount"].concat(s(dt.prototype)),(function(t){/^_/.test(t)||(fe[t]=function(){if(!fe._client)return console.log("Bugsnag."+t+"() was called before Bugsnag.start()")
fe._client._depth+=1
var e=fe._client[t].apply(fe._client,arguments)
return fe._client._depth-=1,e})})),(he=fe).Client=dt,he.Event=W,he.Session=ut,he.Breadcrumb=y,he.default=fe,he}()},4588:function(t,e,n){t.exports=n(3563)},3675:function(t,e,n){"use strict"
n.r(e),n.d(e,{datadogRum:function(){return On}})
var r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])
return t},r.apply(this,arguments)}
function i(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length
var r=Array(t),i=0
for(e=0;e<n;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)r[i]=o[a]
return r}var o=function(t){return Array.isArray(t)},a=function(t){return!Array.isArray(t)&&"object"==typeof t&&null!==t}
function s(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
for(var r=0,i=e;r<i.length;r++){var o=i[r]
null!=o&&(t=h(t,o,c()))}return t}function u(t){return h(void 0,t,c())}function c(){if("undefined"!=typeof WeakSet){var t=new WeakSet
return{hasAlreadyBeenSeen:function(e){var n=t.has(e)
return n||t.add(e),n}}}var e=[]
return{hasAlreadyBeenSeen:function(t){var n=e.indexOf(t)>=0
return n||e.push(t),n}}}function h(t,e,n){if(void 0===e)return t
if(!a(e)&&!o(e))return e
if(!n.hasAlreadyBeenSeen(e)){if(a(e)&&(void 0===t||a(t))){var r=t||{}
for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=h(r[i],e[i],n))
return r}if(o(e)&&(void 0===t||o(t))){(r=t||[]).length=Math.max(r.length,e.length)
for(var s=0;s<e.length;s+=1)r[s]=h(r[s],e[s],n)
return r}return e}}var l,f="console",d="custom",p="network",g="source"
function v(t,e,n){return t&&(void 0!==t.message||e instanceof Error)?{message:t.message||"Empty message",stack:m(t),type:t.name}:{message:n+" "+lt(e),stack:"No stack, consider using an instance of Error",type:t&&t.name}}function m(t){var e=y(t)
return t.stack.forEach((function(t){var n="?"===t.func?"<anonymous>":t.func,r=t.args&&t.args.length>0?"("+t.args.join(", ")+")":"",i=t.line?":"+t.line:"",o=t.line&&t.column?":"+t.column:""
e+="\n  at "+n+r+" @ "+t.url+i+o})),e}function y(t){return(t.name||"Error")+": "+t.message}function b(t){return gt(t)?ct(1e6*t,0):t}function w(){return performance.now()}function x(t,e){return e-t}function S(t){return Math.floor(C()+t)}function C(){return void 0===l&&(l=performance.timing.navigationStart),l}var T=/[^\u0000-\u007F]/,E=function(){function t(t,e,n){void 0===n&&(n=!1),this.endpointUrl=t,this.bytesLimit=e,this.withBatchTime=n}return t.prototype.send=function(t,e){var n=this.withBatchTime?function(t){return t+(-1===t.indexOf("?")?"?":"&")+"batch_time="+(new Date).getTime()+"&m_time="+S(w())}(this.endpointUrl):this.endpointUrl
if(!(navigator.sendBeacon&&e<this.bytesLimit&&navigator.sendBeacon(n,t))){var r=new XMLHttpRequest
r.open("POST",n,!0),r.send(t)}},t}(),k=function(){function t(t,e,n,r,i,o){void 0===o&&(o=ht),this.request=t,this.maxSize=e,this.bytesLimit=n,this.maxMessageSize=r,this.flushTimeout=i,this.beforeUnloadCallback=o,this.pushOnlyBuffer=[],this.upsertBuffer={},this.bufferBytesSize=0,this.bufferMessageCount=0,this.flushOnVisibilityHidden(),this.flushPeriodically()}return t.prototype.add=function(t){this.addOrUpdate(t)},t.prototype.upsert=function(t,e){this.addOrUpdate(t,e)},t.prototype.flush=function(){if(0!==this.bufferMessageCount){var t=i(this.pushOnlyBuffer,(e=this.upsertBuffer,n=[],Object.keys(e).forEach((function(t){n.push(e[t])})),n))
this.request.send(t.join("\n"),this.bufferBytesSize),this.pushOnlyBuffer=[],this.upsertBuffer={},this.bufferBytesSize=0,this.bufferMessageCount=0}var e,n},t.prototype.sizeInBytes=function(t){return T.test(t)?void 0!==window.TextEncoder?(new TextEncoder).encode(t).length:new Blob([t]).size:t.length},t.prototype.addOrUpdate=function(t,e){var n=this.process(t),r=n.processedMessage,i=n.messageBytesSize
i>=this.maxMessageSize?console.warn("Discarded a message whose size was bigger than the maximum allowed size "+this.maxMessageSize+"KB."):(this.hasMessageFor(e)&&this.remove(e),this.willReachedBytesLimitWith(i)&&this.flush(),this.push(r,i,e),this.isFull()&&this.flush())},t.prototype.process=function(t){var e=lt(t)
return{processedMessage:e,messageBytesSize:this.sizeInBytes(e)}},t.prototype.push=function(t,e,n){this.bufferMessageCount>0&&(this.bufferBytesSize+=1),void 0!==n?this.upsertBuffer[n]=t:this.pushOnlyBuffer.push(t),this.bufferBytesSize+=e,this.bufferMessageCount+=1},t.prototype.remove=function(t){var e=this.upsertBuffer[t]
delete this.upsertBuffer[t]
var n=this.sizeInBytes(e)
this.bufferBytesSize-=n,this.bufferMessageCount-=1,this.bufferMessageCount>0&&(this.bufferBytesSize-=1)},t.prototype.hasMessageFor=function(t){return void 0!==t&&void 0!==this.upsertBuffer[t]},t.prototype.willReachedBytesLimitWith=function(t){return this.bufferBytesSize+t+1>=this.bytesLimit},t.prototype.isFull=function(){return this.bufferMessageCount===this.maxSize||this.bufferBytesSize>=this.bytesLimit},t.prototype.flushPeriodically=function(){var t=this
setTimeout((function(){t.flush(),t.flushPeriodically()}),this.flushTimeout)},t.prototype.flushOnVisibilityHidden=function(){var t=this
navigator.sendBeacon&&(wt(window,"beforeunload",this.beforeUnloadCallback),wt(document,"visibilitychange",(function(){"hidden"===document.visibilityState&&t.flush()})),wt(window,"beforeunload",(function(){return t.flush()})))},t}(),A=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/
function P(t){if(R){if(F===t)return
L()}var e=j(t)
throw R=e,F=t,setTimeout((function(){F===t&&L()}),e.incomplete?2e3:0),t}var F,R,O,D,M,I=[]
function N(t,e,n){var r
if(I.forEach((function(i){try{i(t,e,n)}catch(t){r=t}})),r)throw r}function _(t,e,n,r,i){if(R)H(R,e,n),L()
else if(i)N(j(i),!0,i)
else{var o,a={url:e,column:r,line:n},s=t
if("[object String]"==={}.toString.call(t)){var u=A.exec(s)
u&&(o=u[1],s=u[2])}N({name:o,message:"string"==typeof s?s:void 0,stack:[a]},!0,t)}return!!O&&O.apply(this,arguments)}function B(t){var e=t.reason||"Empty reason"
N(j(e),!0,e)}function L(){var t=R,e=F
R=void 0,F=void 0,N(t,!1,e)}var U="?"
function j(t,e){var n,r=void 0===e?0:+e
try{if(n=function(t){var e=Z(t,"stacktrace")
if(e){for(var n,r=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,i=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,o=e.split("\n"),a=[],s=0;s<o.length;s+=2){var u=void 0
r.exec(o[s])?u={args:[],column:void 0,func:(n=r.exec(o[s]))[3],line:+n[1],url:n[2]}:i.exec(o[s])&&(u={args:(n=i.exec(o[s]))[5]?n[5].split(","):[],column:+n[2],func:n[3]||n[4],line:+n[1],url:n[6]}),u&&(!u.func&&u.line&&(u.func=U),u.context=[o[s+1]],a.push(u))}if(a.length)return{stack:a,message:Z(t,"message"),name:Z(t,"name")}}}(t),n)return n}catch(t){if(z)throw t}try{if(n=function(t){var e=Z(t,"stack")
if(e){for(var n,r,i,o,a=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,s=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,u=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,c=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,h=/\((\S*)(?::(\d+))(?::(\d+))\)/,l=e.split("\n"),f=[],d=0,p=l.length;d<p;d+=1){if(a.exec(l[d])){var g=(i=a.exec(l[d]))[2]&&0===i[2].indexOf("native")
n=i[2]&&0===i[2].indexOf("eval"),r=h.exec(i[2]),n&&r&&(i[2]=r[1],i[3]=r[2],i[4]=r[3]),o={args:g?[i[2]]:[],column:i[4]?+i[4]:void 0,func:i[1]||U,line:i[3]?+i[3]:void 0,url:g?void 0:i[2]}}else if(u.exec(l[d]))o={args:[],column:(i=u.exec(l[d]))[4]?+i[4]:void 0,func:i[1]||U,line:+i[3],url:i[2]}
else{if(!s.exec(l[d]))continue
n=(i=s.exec(l[d]))[3]&&i[3].indexOf(" > eval")>-1,r=c.exec(i[3]),n&&r?(i[3]=r[1],i[4]=r[2],i[5]=void 0):0!==d||i[5]||void 0===t.columnNumber||(f[0].column=t.columnNumber+1),o={args:i[2]?i[2].split(","):[],column:i[5]?+i[5]:void 0,func:i[1]||U,line:i[4]?+i[4]:void 0,url:i[3]}}!o.func&&o.line&&(o.func=U),f.push(o)}if(f.length)return{stack:f,message:Z(t,"message"),name:Z(t,"name")}}}(t),n)return n}catch(t){if(z)throw t}try{if(n=function(t){var e=Z(t,"message")
if(e){var n=e.split("\n")
if(!(n.length<4)){var r,i,o,a=/^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,s=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,u=/^\s*Line (\d+) of function script\s*$/i,c=[],h=window&&window.document&&window.document.getElementsByTagName("script"),l=[]
for(var f in h)i=h,o=f,Object.prototype.hasOwnProperty.call(i,o)&&!h[f].src&&l.push(h[f])
for(var d=2;d<n.length;d+=2){var p=void 0
a.exec(n[d])?p={args:[],column:void 0,func:(r=a.exec(n[d]))[3],line:+r[1],url:r[2]}:s.exec(n[d])?p={args:[],column:void 0,func:(r=s.exec(n[d]))[4],line:+r[1],url:r[3]}:u.exec(n[d])&&(r=u.exec(n[d]),p={url:window.location.href.replace(/#.*$/,""),args:[],column:void 0,func:"",line:+r[1]}),p&&(p.func||(p.func=U),p.context=[n[d+1]],c.push(p))}if(c.length)return{stack:c,message:n[0],name:Z(t,"name")}}}}(t),n)return n}catch(t){if(z)throw t}try{if(n=V(t,r+1))return n}catch(t){if(z)throw t}return{message:Z(t,"message"),name:Z(t,"name"),stack:[]}}var G,z=!1
function H(t,e,n){var r={url:e,line:n?+n:void 0}
if(r.url&&r.line){t.incomplete=!1
var i=t.stack
if(i.length>0&&i[0].url===r.url){if(i[0].line===r.line)return!1
if(!i[0].line&&i[0].func===r.func)return i[0].line=r.line,i[0].context=r.context,!1}return i.unshift(r),t.partial=!0,!0}return t.incomplete=!0,!1}function V(t,e){for(var n,r,i=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,o=[],a={},s=!1,u=V.caller;u&&!s;u=u.caller)u!==j&&u!==P&&(r={args:[],column:void 0,func:U,line:void 0,url:void 0},n=i.exec(u.toString()),u.name?r.func=u.name:n&&(r.func=n[1]),void 0===r.func&&(r.func=n?n.input.substring(0,n.input.indexOf("{")):void 0),a[u.toString()]?s=!0:a[u.toString()]=!0,o.push(r))
e&&o.splice(0,e)
var c={stack:o,message:Z(t,"message"),name:Z(t,"name")}
return H(c,Z(t,"sourceURL")||Z(t,"fileName"),Z(t,"line")||Z(t,"lineNumber")),c}function Z(t,e){if("object"==typeof t&&t&&e in t){var n=t[e]
return"string"==typeof n?n:void 0}}!function(t){t.info="info",t.error="error"}(G||(G={}))
var W,q={maxMessagesPerPage:0,sentMessageCount:0}
function K(t){if(t.internalMonitoringEndpoint){var e=function(t){var e,n=r(t.internalMonitoringEndpoint)
function r(e){return new k(new E(e,t.batchBytesLimit),t.maxBatchSize,t.batchBytesLimit,t.maxMessageSize,t.flushTimeout)}return void 0!==t.replica&&(e=r(t.replica.internalMonitoringEndpoint)),{add:function(t){var r=function(t){return s({date:(new Date).getTime(),view:{referrer:document.referrer,url:window.location.href}},void 0!==W?W():{},t)}(t)
n.add(r),e&&e.add(r)}}}(t)
!function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
e.forEach((function(e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}))}(q,{batch:e,maxMessagesPerPage:t.maxInternalMonitoringMessagesPerPage,sentMessageCount:0}),n=setInterval(X((function(){var t=Date.now()-S(w())
if(Math.abs(t)>rt){clearInterval(n)
var e=S(0)
J("clock drift detected",{debug:{navigationStartUTC:new Date(e).toUTCString(),timeSpent:Date.now()-e,drift:t}})}})),it)}var n
return{setExternalContextProvider:function(t){W=t}}}function X(t){return function(){return Y(t,this,arguments)}}function Y(t,e,n){try{return t.apply(e,n)}catch(t){tt(t)
try{!function(t){Q(r(r({},function(t){if(t instanceof Error){var e=j(t)
return{error:{kind:e.name,stack:m(e)},message:e.message}}return{error:{stack:"Not an instance of error"},message:"Uncaught "+lt(t)}}(t)),{status:G.error}))}(t)}catch(t){tt(t)}}}function J(t,e){!function(t){q.debugMode&&console.log("[MONITORING MESSAGE]",t)}(t),Q(r(r({message:t},e),{status:G.info}))}function Q(t){q.batch&&q.sentMessageCount<q.maxMessagesPerPage&&(q.sentMessageCount+=1,q.batch.add(t))}function $(t){q.debugMode=t}function tt(t){q.debugMode&&console.warn("[INTERNAL ERROR]",t)}var et,nt,rt=1e3,it=60*rt,ot=60*it
function at(t,e,n){var r,i,o=!n||void 0===n.leading||n.leading,a=!n||void 0===n.trailing||n.trailing,s=!1
return{throttled:function(){for(var n=[],u=0;u<arguments.length;u++)n[u]=arguments[u]
s?r=n:(o?t.apply(void 0,n):r=n,s=!0,i=setTimeout((function(){a&&r&&t.apply(void 0,r),s=!1,r=void 0}),e))},cancel:function(){clearTimeout(i),s=!1,r=void 0}}}function st(t){return t?(parseInt(t,10)^16*Math.random()>>parseInt(t,10)/4).toString(16):"10000000-1000-4000-8000-100000000000".replace(/[018]/g,st)}function ut(t){return 0!==t&&100*Math.random()<=t}function ct(t,e){return+t.toFixed(e)}function ht(){}function lt(t,e,n){if(null==t)return JSON.stringify(t)
var r=[!1,void 0]
ft(t)&&(r=[!0,t.toJSON],delete t.toJSON)
var i,o,a=[!1,void 0]
"object"==typeof t&&ft(i=Object.getPrototypeOf(t))&&(a=[!0,i.toJSON],delete i.toJSON)
try{o=JSON.stringify(t,e,n)}catch(t){o="<error: unable to serialize object>"}finally{r[0]&&(t.toJSON=r[1]),a[0]&&(i.toJSON=a[1])}return o}function ft(t){return"object"==typeof t&&null!==t&&t.hasOwnProperty("toJSON")}function dt(t,e){return-1!==t.indexOf(e)}function pt(t){return gt(t)&&t>=0&&t<=100}function gt(t){return"number"==typeof t}function vt(t){return Object.keys(t).map((function(e){return[e,t[e]]}))}function mt(t){return 0===Object.keys(t).length}function yt(t){if(t.origin)return t.origin
var e=t.host.replace(/(:80|:443)$/,"")
return t.protocol+"//"+e}function bt(t,e){var n=new RegExp("(?:^|;)\\s*"+e+"\\s*=\\s*([^;]+)").exec(t)
return n?n[1]:void 0}function wt(t,e,n,r){return xt(t,[e],n,r)}function xt(t,e,n,r){var i=void 0===r?{}:r,o=i.once,a=i.capture,s=i.passive,u=X(o?function(t){h(),n(t)}:n),c=s?{capture:a,passive:s}:a
e.forEach((function(e){return t.addEventListener(e,u,c)}))
var h=function(){return e.forEach((function(e){return t.removeEventListener(e,u,c)}))}
return{stop:h}}function St(t,e){document.readyState===t||"complete"===document.readyState?e():wt(window,"complete"===t?"load":"DOMContentLoaded",e,{once:!0})}!function(t){t.DOCUMENT="document",t.XHR="xhr",t.BEACON="beacon",t.FETCH="fetch",t.CSS="css",t.JS="js",t.IMAGE="image",t.FONT="font",t.MEDIA="media",t.OTHER="other"}(et||(et={})),function(t){t.FETCH="fetch",t.XHR="xhr"}(nt||(nt={}))
var Ct,Tt,Et=rt
function kt(t,e,n,r){var i=new Date
i.setTime(i.getTime()+n)
var o="expires="+i.toUTCString(),a=r&&r.crossSite?"none":"strict",s=r&&r.domain?";domain="+r.domain:"",u=r&&r.secure?";secure":""
document.cookie=t+"="+e+";"+o+";path=/;samesite="+a+s+u}function At(t){return bt(document.cookie,t)}function Pt(t,e){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
try{return t.apply(void 0,n)}catch(t){console.error(e,t)}}}var Ft={alternate:{logs:"logs",rum:"rum",sessionReplay:"session-replay",trace:"trace"},classic:{logs:"browser",rum:"rum",sessionReplay:void 0,trace:"public-trace"}},Rt=((Tt={}).eu="datadoghq.eu",Tt.us="datadoghq.com",Tt),Ot=[Rt.us,Rt.eu]
function Dt(t,e,n){return"classic"===t&&function(t,e){var n=Ft.classic[t]
return n&&n+"-http-intake.logs."+e}(e,n)||function(t,e){var n=Ft.alternate[t],r=e.split("."),i=r.pop()
return n+".browser-intake-"+r.join("-")+"."+i}(e,n)}function Mt(t,e,n,r){var i="sdk_version:"+n.sdkVersion+(n.env?",env:"+n.env:"")+(n.service?",service:"+n.service:"")+(n.version?",version:"+n.version:""),o=Dt(t,e,n.site),a=n.proxyHost?n.proxyHost:o,s=n.proxyHost?"ddhost="+o+"&":"",u=(n.applicationId?"_dd.application_id="+n.applicationId+"&":"")+s+"ddsource="+(r||"browser")+"&ddtags="+encodeURIComponent(i)
return"https://"+a+"/v1/input/"+n.clientToken+"?"+u}var It,Nt={allowedTracingOrigins:[],maxErrorsByMinute:3e3,maxInternalMonitoringMessagesPerPage:15,resourceSampleRate:100,sampleRate:100,silentMultipleInit:!1,trackInteractions:!1,requestErrorResponseLengthLimit:32768,flushTimeout:30*rt,maxBatchSize:50,maxMessageSize:262144,batchBytesLimit:16384}
function _t(t){var e={}
return e.secure=function(t){return!!t.useSecureSessionCookie||!!t.useCrossSiteSessionCookie}(t),e.crossSite=!!t.useCrossSiteSessionCookie,t.trackSessionAcrossSubdomains&&(e.domain=function(){if(void 0===Ct){for(var t="dd_site_test_"+st(),e=window.location.hostname.split("."),n=e.pop();e.length&&!At(t);)n=e.pop()+"."+n,kt(t,"test",rt,{domain:n})
Ct=n}return Ct}()),e}function Bt(t,e){var n=function(t,e){var n=Array.isArray(t.enableExperimentalFeatures)?t.enableExperimentalFeatures:[],i=r(r({beforeSend:t.beforeSend&&Pt(t.beforeSend,"beforeSend threw an error:"),cookieOptions:_t(t),isEnabled:function(t){return dt(n,t)},service:t.service},function(t,e){var n={applicationId:t.applicationId,buildMode:e.buildMode,clientToken:t.clientToken,env:t.env,proxyHost:t.proxyHost,sdkVersion:e.sdkVersion,service:t.service,site:t.site||Rt[t.datacenter||e.datacenter],version:t.version},i=function(t,e){return!e.useAlternateIntakeDomains&&dt(Ot,t)?"classic":"alternate"}(n.site,t),o=function(t,e,n){if(e.proxyHost)return["https://"+e.proxyHost+"/v1/input/"]
var r=[e.site]
e.buildMode===It.STAGING&&n&&r.push(Rt.us)
for(var i=[],o=Object.keys(Ft[t]),a=0,s=r;a<s.length;a++)for(var u=s[a],c=0,h=o;c<h.length;c++){var l=h[c]
i.push("https://"+Dt(t,l,u)+"/v1/input/")}return i}(i,n,void 0!==t.replica),a={isIntakeUrl:function(t){return o.some((function(e){return 0===t.indexOf(e)}))},logsEndpoint:Mt(i,"logs",n),rumEndpoint:Mt(i,"rum",n),sessionReplayEndpoint:Mt(i,"sessionReplay",n),traceEndpoint:Mt(i,"trace",n)}
if(t.internalMonitoringApiKey&&(a.internalMonitoringEndpoint=Mt(i,"logs",n,"browser-agent-internal-monitoring")),n.buildMode===It.E2E_TEST&&(a.internalMonitoringEndpoint="<<< E2E INTERNAL MONITORING ENDPOINT >>>",a.logsEndpoint="<<< E2E LOGS ENDPOINT >>>",a.rumEndpoint="<<< E2E RUM ENDPOINT >>>",a.sessionReplayEndpoint="<<< E2E SESSION REPLAY ENDPOINT >>>"),n.buildMode===It.STAGING&&void 0!==t.replica){var s=r(r({},n),{applicationId:t.replica.applicationId,clientToken:t.replica.clientToken,site:Rt.us})
a.replica={applicationId:t.replica.applicationId,internalMonitoringEndpoint:Mt(i,"logs",s,"browser-agent-internal-monitoring"),logsEndpoint:Mt(i,"logs",s),rumEndpoint:Mt(i,"rum",s)}}return a}(t,e)),Nt)
return"allowedTracingOrigins"in t&&(i.allowedTracingOrigins=t.allowedTracingOrigins),"sampleRate"in t&&(i.sampleRate=t.sampleRate),"resourceSampleRate"in t&&(i.resourceSampleRate=t.resourceSampleRate),"trackInteractions"in t&&(i.trackInteractions=!!t.trackInteractions),i}(t,e)
return{configuration:n,internalMonitoring:K(n)}}!function(t){t.RELEASE="release",t.STAGING="staging",t.E2E_TEST="e2e-test"}(It||(It={}))
var Lt,Ut,jt,Gt,zt=function(){function t(t){void 0===t&&(t=1e4),this.limit=t,this.buffer=[]}return t.prototype.add=function(t){this.buffer.push(t)>this.limit&&this.buffer.splice(0,1)},t.prototype.drain=function(t){this.buffer.forEach((function(e){return t(e)})),this.buffer.length=0},t}()
!function(t){t.ACTION="action",t.ERROR="error",t.LONG_TASK="long_task",t.VIEW="view",t.RESOURCE="resource"}(Lt||(Lt={})),function(t){t.INITIAL_LOAD="initial_load",t.ROUTE_CHANGE="route_change"}(Ut||(Ut={})),function(t){t.CLICK="click",t.CUSTOM="custom"}(jt||(jt={})),function(t){t[t.PERFORMANCE_ENTRY_COLLECTED=0]="PERFORMANCE_ENTRY_COLLECTED",t[t.AUTO_ACTION_CREATED=1]="AUTO_ACTION_CREATED",t[t.AUTO_ACTION_COMPLETED=2]="AUTO_ACTION_COMPLETED",t[t.AUTO_ACTION_DISCARDED=3]="AUTO_ACTION_DISCARDED",t[t.VIEW_CREATED=4]="VIEW_CREATED",t[t.VIEW_UPDATED=5]="VIEW_UPDATED",t[t.VIEW_ENDED=6]="VIEW_ENDED",t[t.REQUEST_STARTED=7]="REQUEST_STARTED",t[t.REQUEST_COMPLETED=8]="REQUEST_COMPLETED",t[t.SESSION_RENEWED=9]="SESSION_RENEWED",t[t.DOM_MUTATED=10]="DOM_MUTATED",t[t.BEFORE_UNLOAD=11]="BEFORE_UNLOAD",t[t.RAW_RUM_EVENT_COLLECTED=12]="RAW_RUM_EVENT_COLLECTED",t[t.RUM_EVENT_COLLECTED=13]="RUM_EVENT_COLLECTED",t[t.RECORD_STARTED=14]="RECORD_STARTED",t[t.RECORD_STOPPED=15]="RECORD_STOPPED"}(Gt||(Gt={}))
var Ht,Vt=function(){function t(){this.callbacks={}}return t.prototype.notify=function(t,e){var n=this.callbacks[t]
n&&n.forEach((function(t){return t(e)}))},t.prototype.subscribe=function(t,e){var n=this
return this.callbacks[t]||(this.callbacks[t]=[]),this.callbacks[t].push(e),{unsubscribe:function(){n.callbacks[t]=n.callbacks[t].filter((function(t){return e!==t}))}}},t}(),Zt=function(){return Zt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])
return t},Zt.apply(this,arguments)}
function Wt(t){return qt(t,yt(window.location)).href}function qt(t,e){if(function(){if(void 0!==Ht)return Ht
try{var t=new URL("http://test/path")
return Ht="http://test/path"===t.href}catch(t){Ht=!1}return Ht}())return void 0!==e?new URL(t,e):new URL(t)
if(void 0===e&&!/:/.test(t))throw new Error("Invalid URL: '"+t+"'")
var n=document,r=n.createElement("a")
if(void 0!==e){var i=(n=document.implementation.createHTMLDocument("")).createElement("base")
i.href=e,n.head.appendChild(i),n.body.appendChild(r)}return r.href=t,r}var Kt="initial_document",Xt=[[et.DOCUMENT,function(t){return Kt===t}],[et.XHR,function(t){return"xmlhttprequest"===t}],[et.FETCH,function(t){return"fetch"===t}],[et.BEACON,function(t){return"beacon"===t}],[et.CSS,function(t,e){return/\.css$/i.test(e)}],[et.JS,function(t,e){return/\.js$/i.test(e)}],[et.IMAGE,function(t,e){return dt(["image","img","icon"],t)||null!==/\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(e)}],[et.FONT,function(t,e){return null!==/\.(woff|eot|woff2|ttf)$/i.exec(e)}],[et.MEDIA,function(t,e){return dt(["audio","video"],t)||null!==/\.(mp3|mp4)$/i.exec(e)}]]
function Yt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
for(var n=1;n<t.length;n+=1)if(t[n-1]>t[n])return!1
return!0}function Jt(t){var e=Qt(t)
if(e){var n=e.startTime,r=e.fetchStart,i=e.redirectStart,o=e.redirectEnd,a=e.domainLookupStart,s=e.domainLookupEnd,u=e.connectStart,c=e.secureConnectionStart,h=e.connectEnd,l=e.requestStart,f=e.responseStart,d={download:te(n,f,e.responseEnd),first_byte:te(n,l,f)}
return h!==r&&(d.connect=te(n,u,h),Yt(u,c,h)&&(d.ssl=te(n,c,h))),s!==r&&(d.dns=te(n,a,s)),$t(t)&&(d.redirect=te(n,i,o)),d}}function Qt(t){if(Yt(t.startTime,t.fetchStart,t.domainLookupStart,t.domainLookupEnd,t.connectStart,t.connectEnd,t.requestStart,t.responseStart,t.responseEnd)){if(!$t(t))return t
var e=t.redirectStart,n=t.redirectEnd
if(e<t.startTime&&(e=t.startTime),n<t.startTime&&(n=t.fetchStart),Yt(t.startTime,e,n,t.fetchStart))return Zt(Zt({},t),{redirectEnd:n,redirectStart:e})}}function $t(t){return t.fetchStart!==t.startTime}function te(t,e,n){return{duration:b(x(e,n)),start:b(x(t,e))}}function ee(t){if(t.startTime<t.responseStart)return t.decodedBodySize}function ne(t,e){return e&&!t.isIntakeUrl(e)}var re,ie=2*it
function oe(t){var e=function(t){var e=t.querySelector("meta[name=dd-trace-id]"),n=t.querySelector("meta[name=dd-trace-time]")
return ae(e&&e.content,n&&n.content)}(t)||function(t){var e=function(t){for(var e=0;e<t.childNodes.length;e+=1)if(n=se(t.childNodes[e]))return n
if(t.body)for(e=t.body.childNodes.length-1;e>=0;e-=1){var n,r=t.body.childNodes[e]
if(n=se(r))return n
if(!ue(r))break}}(t)
if(e)return ae(bt(e,"trace-id"),bt(e,"trace-time"))}(t)
if(e&&!(e.traceTime<=Date.now()-ie))return e.traceId}function ae(t,e){var n=e&&Number(e)
if(t&&n)return{traceId:t,traceTime:n}}function se(t){if(t&&function(t){return"#comment"===t.nodeName}(t)){var e=/^\s*DATADOG;(.*?)\s*$/.exec(t.data)
if(e)return e[1]}}function ue(t){return"#text"===t.nodeName}function ce(){return void 0!==window.performance&&"getEntries"in performance}function he(t){return window.PerformanceObserver&&void 0!==PerformanceObserver.supportedEntryTypes&&PerformanceObserver.supportedEntryTypes.includes(t)}function le(){var t={},e=performance.timing
for(var n in e)if(gt(e[n])){var r=n,i=e[r]
t[r]=0===i?0:i-C()}return t}function fe(t,e,n){n.forEach((function(n){"resource"!==n.entryType&&"navigation"!==n.entryType&&"paint"!==n.entryType&&"longtask"!==n.entryType&&"largest-contentful-paint"!==n.entryType&&"first-input"!==n.entryType&&"layout-shift"!==n.entryType||de(t,e,n)}))}function de(t,e,n){(function(t){return"navigation"===t.entryType&&t.loadEventEnd<=0})(n)||function(t,e){return"resource"===e.entryType&&!ne(t,e.name)}(e,n)||t.notify(Gt.PERFORMANCE_ENTRY_COLLECTED,n)}function pe(t,e){for(var n=t,r=0,i=e.split(".");r<i.length;r++){var o=i[r]
if(!ge(n,o))return
n=n[o]}return n}function ge(t,e){return"object"==typeof t&&null!==t&&e in t}!function(t){t.SYNTHETICS="synthetics",t.USER="user"}(re||(re={}))
var ve=["view.url","view.referrer","action.target.name","error.message","error.stack","error.resource.url","resource.url"]
function me(t,e,n,r,i,o){n.subscribe(Gt.RAW_RUM_EVENT_COLLECTED,(function(a){var c,h=a.startTime,l=a.rawRumEvent,f=a.savedCommonContext,d=a.customerContext,p=i.findView(h)
if(r.isTracked()&&p&&p.session.id){var g=i.findAction(h),v=f||o(),m={_dd:{format_version:2},application:{id:t},date:Date.now(),service:e.service,session:{type:void 0===window._DATADOG_SYNTHETICS_BROWSER?re.USER:re.SYNTHETICS}},y=(c=l,-1!==[Lt.ERROR,Lt.RESOURCE,Lt.LONG_TASK].indexOf(c.type)?s(m,p,g,l):s(m,p,l)),b=s(v.context,d)
mt(b)||(y.context=b),"has_replay"in y.session||(y.session.has_replay=v.hasReplay),mt(v.user)||(y.usr=v.user),function(t,e){if(e){var n=function(t,e,n){var r=u(t),i=n(r)
return e.forEach((function(e){var n=pe(t,e),i=pe(r,e)
"string"==typeof n&&"string"==typeof i&&function(t,e,n){for(var r=t,i=e.split("."),o=0;o<i.length;o+=1){var a=i[o]
if(!ge(r,a))return
o!==i.length-1?r=r[a]:r[a]=n}}(t,e,i)})),i}(t,ve,e)
if(!1===n&&t.type!==Lt.VIEW)return!1
!1===n&&console.warn("Can't dismiss view events using beforeSend!")}return!0}(y,e.beforeSend)&&n.notify(Gt.RUM_EVENT_COLLECTED,y)}}))}var ye=function(){function t(){this.observers=[]}return t.prototype.subscribe=function(t){this.observers.push(t)},t.prototype.notify=function(t){this.observers.forEach((function(e){return e(t)}))},t}(),be=15*it,we=4*ot,xe=it
var Se=/^([a-z]+)=([a-z0-9-]+)$/
function Ce(t){var e=function(t){var e=t.get(),n={}
return function(t){return void 0!==t&&(-1!==t.indexOf("&")||Se.test(t))}(e)&&e.split("&").forEach((function(t){var e=Se.exec(t)
if(null!==e){var r=e[1],i=e[2]
n[r]=i}})),n}(t)
return function(t){return(void 0===t.created||Date.now()-Number(t.created)<we)&&(void 0===t.expire||Date.now()<Number(t.expire))}(e)?e:(Ee(t),{})}function Te(t,e){if(mt(t))Ee(e)
else{t.expire=String(Date.now()+be)
var n=vt(t).map((function(t){return t[0]+"="+t[1]})).join("&")
e.set(n,be)}}function Ee(t){t.set("",0)}var ke,Ae,Pe,Fe,Re,Oe,De=[],Me=we,Ie=5*it,Ne=it,_e=[],Be=[]
function Le(){return ke||(Ae=XMLHttpRequest.prototype.open,Pe=XMLHttpRequest.prototype.send,Fe=XMLHttpRequest.prototype.abort,XMLHttpRequest.prototype.open=function(t,e){var n=this
return Y((function(){n._datadog_xhr={method:t,startTime:-1,url:Wt(e)}})),Ae.apply(this,arguments)},XMLHttpRequest.prototype.send=function(){var t=this
return Y((function(){if(t._datadog_xhr){var e=t._datadog_xhr
e.startTime=w(),e.isAborted=!1
var n=t.onreadystatechange
t.onreadystatechange=function(){this.readyState===XMLHttpRequest.DONE&&Y(o),n&&n.apply(this,arguments)}
var i=!1,o=function(){if(!i){i=!0
var n=r(r({},e),{duration:x(e.startTime,w()),response:t.response,status:t.status})
Be.forEach((function(t){return t(n)}))}}
t.addEventListener("loadend",X(o)),_e.forEach((function(n){return n(e,t)}))}})),Pe.apply(this,arguments)},XMLHttpRequest.prototype.abort=function(){var t=this
return Y((function(){t._datadog_xhr&&(t._datadog_xhr.isAborted=!0)})),Fe.apply(this,arguments)},ke={beforeSend:function(t){_e.push(t)},onRequestComplete:function(t){Be.push(t)}}),ke}var Ue=[],je=[]
function Ge(){return Re||(window.fetch&&(Oe=window.fetch,window.fetch=function(t,e){var n,r=Y(ze,null,[t,e])
return r?Y(He,null,[n=Oe.call(this,r.input,r.init),r]):n=Oe.call(this,t,e),n}),Re={beforeSend:function(t){Ue.push(t)},onRequestComplete:function(t){je.push(t)}}),Re}function ze(t,e){var n=e&&e.method||"object"==typeof t&&t.method||"GET",r=Wt("object"==typeof t&&t.url||t),i={init:e,input:t,method:n,startTime:w(),url:r}
return Ue.forEach((function(t){return t(i)})),i}function He(t,e){var n=this,r=function(t){return r=n,void 0,o=function(){var n,r
return function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,r=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,(function(i){switch(i.label){case 0:return e.duration=x(e.startTime,w()),"stack"in t||t instanceof Error?(e.status=0,e.response=m(j(t)),e.isAborted=t instanceof DOMException&&t.code===DOMException.ABORT_ERR,je.forEach((function(t){return t(e)})),[3,6]):[3,1]
case 1:if(!("status"in t))return[3,6]
n=void 0,i.label=2
case 2:return i.trys.push([2,4,,5]),[4,t.clone().text()]
case 3:return n=i.sent(),[3,5]
case 4:return r=i.sent(),n="Unable to retrieve response: "+r,[3,5]
case 5:e.response=n,e.responseType=t.type,e.status=t.status,e.isAborted=!1,je.forEach((function(t){return t(e)})),i.label=6
case 6:return[2]}}))},new((i=void 0)||(i=Promise))((function(t,e){function n(t){try{s(o.next(t))}catch(t){e(t)}}function a(t){try{s(o.throw(t))}catch(t){e(t)}}function s(e){var r
e.done?t(e.value):(r=e.value,r instanceof i?r:new i((function(t){t(r)}))).then(n,a)}s((o=o.apply(r,[])).next())}))
var r,i,o}
t.then(X(r),X(r))}function Ve(t){0===t.status&&(t.traceId=void 0,t.spanId=void 0)}function Ze(t,e,n){var r
void 0!==We()&&function(t,e){for(var n=yt(qt(e)),r=0,i=t.allowedTracingOrigins;r<i.length;r++){var o=i[r]
if(n===o||o instanceof RegExp&&o.test(n))return!0}return!1}(t,e.url)&&(e.traceId=new qe,e.spanId=new qe,n((r=e.traceId,{"x-datadog-origin":"rum","x-datadog-parent-id":e.spanId.toDecimalString(),"x-datadog-sampled":"1","x-datadog-sampling-priority":"1","x-datadog-trace-id":r.toDecimalString()})))}function We(){return window.crypto||window.msCrypto}var qe=function(){function t(){this.buffer=new Uint8Array(8),We().getRandomValues(this.buffer),this.buffer[0]=127&this.buffer[0]}return t.prototype.toString=function(t){for(var e=this.readInt32(0),n=this.readInt32(4),r="";;){var i=e%t*4294967296+n
if(e=Math.floor(e/t),n=Math.floor(i/t),r=(i%t).toString(t)+r,!e&&!n)break}return r},t.prototype.toDecimalString=function(){return this.toString(10)},t.prototype.readInt32=function(t){return 16777216*this.buffer[t]+(this.buffer[t+1]<<16)+(this.buffer[t+2]<<8)+this.buffer[t+3]},t}(),Ke=1
function Xe(){var t=Ke
return Ke+=1,t}function Ye(t,e){void 0===e&&(e=ht)
var n={errorCount:0,longTaskCount:0,resourceCount:0,userActionCount:0},r=t.subscribe(Gt.RUM_EVENT_COLLECTED,(function(t){switch(t.type){case Lt.ERROR:n.errorCount+=1,e(n)
break
case Lt.ACTION:n.userActionCount+=1,e(n)
break
case Lt.LONG_TASK:n.longTaskCount+=1,e(n)
break
case Lt.RESOURCE:n.resourceCount+=1,e(n)}}))
return{stop:function(){r.unsubscribe()},eventCounts:n}}function Je(t,e){var n=function(t){var e,n=new ye,r=[],i=0
function o(){n.notify({isBusy:i>0})}return r.push(t.subscribe(Gt.DOM_MUTATED,(function(){return o()}))),r.push(t.subscribe(Gt.PERFORMANCE_ENTRY_COLLECTED,(function(t){"resource"===t.entryType&&o()}))),r.push(t.subscribe(Gt.REQUEST_STARTED,(function(t){void 0===e&&(e=t.requestIndex),i+=1,o()}))),r.push(t.subscribe(Gt.REQUEST_COMPLETED,(function(t){void 0===e||t.requestIndex<e||(i-=1,o())}))),{observable:n,stop:function(){r.forEach((function(t){return t.unsubscribe()}))}}}(t),r=n.observable,i=n.stop,o=function(t,e,n){var r,i=!1,o=setTimeout(X((function(){return u(!1,0)})),100),a=setTimeout(X((function(){return u(!0,w())})),1e4)
t.subscribe((function(t){var e=t.isBusy
clearTimeout(o),clearTimeout(r)
var n=w()
e||(r=setTimeout(X((function(){return u(!0,n)})),100))}))
var s=function(){i=!0,clearTimeout(o),clearTimeout(r),clearTimeout(a),e()}
function u(t,e){i||(s(),n(t,e))}return{stop:s}}(r,i,e).stop
return{stop:function(){o(),i()}}}var Qe,$e,tn,en="data-dd-action-name",nn=[function(t){if(void 0===$e&&($e="labels"in HTMLInputElement.prototype),$e){if("labels"in t&&t.labels&&t.labels.length>0)return un(t.labels[0])}else if(t.id){var e=t.ownerDocument&&t.ownerDocument.querySelector('label[for="'+t.id.replace('"','\\"')+'"]')
return e&&un(e)}},function(t){if("INPUT"===t.nodeName){var e=t,n=e.getAttribute("type")
if("button"===n||"submit"===n||"reset"===n)return e.value}},function(t){if("BUTTON"===t.nodeName||"LABEL"===t.nodeName||"button"===t.getAttribute("role"))return un(t)},function(t){return t.getAttribute("aria-label")},function(t){var e=t.getAttribute("aria-labelledby")
if(e)return e.split(/\s+/).map((function(e){return function(t,e){return t.ownerDocument?t.ownerDocument.getElementById(e):null}(t,e)})).filter((function(t){return Boolean(t)})).map(un).join(" ")},function(t){return t.getAttribute("alt")},function(t){return t.getAttribute("name")},function(t){return t.getAttribute("title")},function(t){return t.getAttribute("placeholder")},function(t){if("options"in t&&t.options.length>0)return un(t.options[0])}],rn=[function(t){return un(t)}]
function on(t,e){for(var n=t,r=0;r<=10&&n&&"BODY"!==n.nodeName&&"HTML"!==n.nodeName&&"HEAD"!==n.nodeName;){for(var i=0,o=e;i<o.length;i++){var a=(0,o[i])(n)
if("string"==typeof a){var s=a.trim()
if(s)return sn(an(s))}}if("FORM"===n.nodeName)break
n=n.parentElement,r+=1}}function an(t){return t.replace(/\s+/g," ")}function sn(t){return t.length>100?((n=(e=t).charCodeAt(99))>=55296&&n<=56319?e.slice(0,101):e.slice(0,100))+" [...]":t
var e,n}function un(t){if(!t.isContentEditable){if("innerText"in t){var e=t.innerText
if(!function(){if(void 0===Qe){var t=document.createElement("style")
t.textContent="*"
var e=document.createElement("div")
e.appendChild(t),document.body.appendChild(e),Qe=""===e.innerText,document.body.removeChild(e)}return Qe}())for(var n=t.querySelectorAll("script, style"),r=0;r<n.length;r+=1){var i=n[r].innerText
i.trim().length>0&&(e=e.replace(i,""))}return e}return t.textContent}}var cn,hn,ln,fn,dn=function(){function t(t,e,n){this.lifeCycle=t,this.type=e,this.name=n,this.id=st(),this.startTime=w(),this.eventCountsSubscription=Ye(t),this.lifeCycle.notify(Gt.AUTO_ACTION_CREATED,{id:this.id,startTime:this.startTime})}return t.prototype.complete=function(t){var e=this.eventCountsSubscription.eventCounts
this.lifeCycle.notify(Gt.AUTO_ACTION_COMPLETED,{counts:{errorCount:e.errorCount,longTaskCount:e.longTaskCount,resourceCount:e.resourceCount},duration:x(this.startTime,t),id:this.id,name:this.name,startTime:this.startTime,type:this.type}),this.eventCountsSubscription.stop()},t.prototype.discard=function(){this.lifeCycle.notify(Gt.AUTO_ACTION_DISCARDED),this.eventCountsSubscription.stop()},t}()
function pn(t,e){return t.subscribe(Gt.AUTO_ACTION_COMPLETED,(function(e){return t.notify(Gt.RAW_RUM_EVENT_COLLECTED,gn(e))})),e.trackInteractions&&function(t){var e=function(t){var e,n
return{create:function(r,i){if(!e){var o=new dn(t,r,i)
e=o,n=Je(t,(function(t,n){t?o.complete(n):o.discard(),e=void 0}))}},discardCurrent:function(){e&&(n.stop(),e.discard(),e=void 0)}}}(t)
t.subscribe(Gt.VIEW_CREATED,(function(){e.discardCurrent()}))
var n=wt(window,"click",(function(t){if(t.target instanceof Element){var n=function(t){var e
if(void 0===tn&&(tn="closest"in HTMLElement.prototype),tn)e=t.closest("[data-dd-action-name]")
else for(var n=t;n;){if(n.hasAttribute(en)){e=n
break}n=n.parentElement}if(e)return sn(an(e.getAttribute(en).trim()))}(r=t.target)||on(r,nn)||on(r,rn)||""
n&&e.create(jt.CLICK,n)}var r}),{capture:!0}).stop}(t),{addAction:function(e,n){t.notify(Gt.RAW_RUM_EVENT_COLLECTED,Zt({savedCommonContext:n},gn(e)))}}}function gn(t){var e=vn(t)?{action:{error:{count:t.counts.errorCount},id:t.id,loading_time:b(t.duration),long_task:{count:t.counts.longTaskCount},resource:{count:t.counts.resourceCount}}}:void 0
return{customerContext:vn(t)?void 0:t.context,rawRumEvent:s({action:{target:{name:t.name},type:t.type},date:S(t.startTime),type:Lt.ACTION},e),startTime:t.startTime}}function vn(t){return t.type!==jt.CUSTOM}function mn(t){if(!cn){var e=new ye
!function(t,e){function n(n,r){t.isIntakeUrl(r.url)||t.isEnabled("remove-network-errors")&&r.isAborted||!function(t){return 0===t.status&&"opaque"!==t.responseType}(r)&&!function(t){return t.status>=500}(r)||e.notify({message:wn(n)+" error "+r.method+" "+r.url,resource:{method:r.method,statusCode:r.status,url:r.url},source:p,stack:bn(r.response,t)||"Failed to load",startTime:r.startTime})}Le().onRequestComplete((function(t){return n(nt.XHR,t)})),Ge().onRequestComplete((function(t){return n(nt.FETCH,t)}))}(t,e),function(t){hn=console.error,console.error=X((function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
hn.apply(console,e),t.notify(r(r({},yn(e)),{source:f,startTime:w()}))}))}(e),function(t){var e
ln=function(e,n,r){var i=v(e,r,"Uncaught"),o=i.stack,a=i.message,s=i.type
t.notify({message:a,stack:o,type:s,source:g,startTime:w()})},e=ln,D||(O=window.onerror,window.onerror=X(_),D=!0),M||(null!==window.onunhandledrejection&&window.onunhandledrejection,window.onunhandledrejection=X(B),M=!0),I.push(e)}(e),cn=function(t,e){var n=0,r=new ye
return e.subscribe((function(e){n<t.maxErrorsByMinute?(n+=1,r.notify(e)):n===t.maxErrorsByMinute&&(n+=1,r.notify({message:"Reached max number of errors by minute: "+t.maxErrorsByMinute,source:"agent",startTime:w()}))})),setInterval((function(){return n=0}),it),r}(t,e)}return cn}function yn(t){var e=function(t,e){for(var n=0;n<t.length;n+=1){var r=t[n]
if(r instanceof Error)return r}}(t)
return{message:i(["console error:"],t).map((function(t){return function(t){return"string"==typeof t?t:t instanceof Error?y(j(t)):lt(t,void 0,2)}(t)})).join(" "),stack:e?m(j(e)):void 0}}function bn(t,e){return t&&t.length>e.requestErrorResponseLengthLimit?t.substring(0,e.requestErrorResponseLengthLimit)+"...":t}function wn(t){return nt.XHR===t?"XHR":"Fetch"}function xn(t){return{rawRumEvent:{date:S(t.startTime),error:{message:t.message,resource:t.resource?{method:t.resource.method,status_code:t.resource.statusCode,url:t.resource.url}:void 0,source:t.source,stack:t.stack,type:t.type},type:Lt.ERROR},startTime:t.startTime}}function Sn(t){return t.startTime+t.duration}function Cn(t){return{resource:Zt({duration:(e=t,n=e.duration,r=e.startTime,i=e.responseEnd,b(0===n&&r<i?x(r,i):n)),size:ee(t)},Jt(t))}
var e,n,r,i}function Tn(t){return void 0===t&&(t=window),fn||("hidden"===document.visibilityState?fn={timeStamp:0}:(fn={timeStamp:1/0},wt(t,"pagehide",(function(t){var e=t.timeStamp
fn.timeStamp=e}),{capture:!0,once:!0}).stop)),fn}var En,kn=5*it
function An(t,e,n,r,i,o,a){void 0===o&&(o=w())
var s,u,c,h=st(),l={errorCount:0,longTaskCount:0,resourceCount:0,userActionCount:0},f={},d={},p=0,g=Zt({},e),v=n
t.notify(Gt.VIEW_CREATED,{id:h,startTime:o,location:g,referrer:i})
var m,y=at(X(P),3e3,{leading:!1}),b=y.throttled,S=y.cancel,C=Ye(t,(function(t){l=t,b()})).stop,T=function(t,e){var n=t===Ut.INITIAL_LOAD,r=!0,i=[]
function o(){var t
!r&&!n&&i.length>0&&(t=Math.max.apply(Math,i),u=t,b())}return{setLoadEvent:function(t){n&&(n=!1,i.push(t),o())},setActivityLoadingTime:function(t){r&&(r=!1,void 0!==t&&i.push(t),o())}}}(r),E=T.setActivityLoadingTime,k=T.setLoadEvent,A=function(t,e){var n=w(),r=Je(t,(function(t,r){e(t?x(n,r):void 0)})).stop
return{stop:r}}(t,E).stop
function P(){p+=1,t.notify(Gt.VIEW_UPDATED,{cumulativeLayoutShift:s&&ct(s,4),customTimings:d,documentVersion:p,eventCounts:l,id:h,name:a,loadingTime:u,loadingType:r,location:g,hasReplay:v,referrer:i,startTime:o,timings:f,duration:x(o,void 0===c?w():c),isActive:void 0===c})}return he("layout-shift")?(s=0,m=function(t,e){return{stop:t.subscribe(Gt.PERFORMANCE_ENTRY_COLLECTED,(function(t){var e
"layout-shift"!==t.entryType||t.hadRecentInput||(e=t.value,s+=e,b())})).unsubscribe}}(t).stop):m=ht,P(),{scheduleUpdate:b,end:function(){c=w(),C(),A(),m(),t.notify(Gt.VIEW_ENDED)},isDifferentView:function(t){return g.pathname!==t.pathname||(e=t.hash.substr(1),!document.getElementById(e)&&t.hash!==g.hash)
var e},getLocation:function(){return g},triggerUpdate:function(){S(),P()},updateTimings:function(t){f=t,void 0!==t.loadEvent&&k(t.loadEvent)},addTiming:function(t,e){d[function(t){var e=t.replace(/[^a-zA-Z0-9-_.@$]/g,"_")
return e!==t&&console.warn("Invalid timing name: "+t+", sanitized to: "+e),e}(t)]=x(o,e)},updateLocation:function(t){g=Zt({},t)},updateHasReplay:function(t){v=t},get url(){return g.href}}}function Pn(t,e){return t.subscribe(Gt.VIEW_UPDATED,(function(e){return t.notify(Gt.RAW_RUM_EVENT_COLLECTED,function(t){var e={_dd:{document_version:t.documentVersion},date:S(t.startTime),type:Lt.VIEW,view:{action:{count:t.eventCounts.userActionCount},cumulative_layout_shift:t.cumulativeLayoutShift,dom_complete:b(t.timings.domComplete),dom_content_loaded:b(t.timings.domContentLoaded),dom_interactive:b(t.timings.domInteractive),error:{count:t.eventCounts.errorCount},first_contentful_paint:b(t.timings.firstContentfulPaint),first_input_delay:b(t.timings.firstInputDelay),first_input_time:b(t.timings.firstInputTime),is_active:t.isActive,name:t.name,largest_contentful_paint:b(t.timings.largestContentfulPaint),load_event:b(t.timings.loadEvent),loading_time:b(t.loadingTime),loading_type:t.loadingType,long_task:{count:t.eventCounts.longTaskCount},resource:{count:t.eventCounts.resourceCount},time_spent:b(t.duration)},session:{has_replay:t.hasReplay||void 0}}
return mt(t.customTimings)||(e.view.custom_timings=function(t,e){for(var n={},r=0,i=Object.keys(t);r<i.length;r++){var o=i[r]
n[o]=e(t[o])}return n}(t.customTimings,b)),{rawRumEvent:e,startTime:t.startTime}}(e))})),function(t,e){var n,r=!1,i=An(e,t,r,Ut.INITIAL_LOAD,document.referrer,0),o=i,a=function(t,e){var n
function r(t){n=Zt(Zt({},n),t),e(n)}var i=function(t,e){return{stop:t.subscribe(Gt.PERFORMANCE_ENTRY_COLLECTED,(function(t){"navigation"===t.entryType&&e({domComplete:t.domComplete,domContentLoaded:t.domContentLoadedEventEnd,domInteractive:t.domInteractive,loadEvent:t.loadEventEnd})})).unsubscribe}}(t,r).stop,o=function(t,e){var n=Tn()
return{stop:t.subscribe(Gt.PERFORMANCE_ENTRY_COLLECTED,(function(t){"paint"===t.entryType&&"first-contentful-paint"===t.name&&t.startTime<n.timeStamp&&r({firstContentfulPaint:t.startTime})})).unsubscribe}}(t).stop,a=function(t,e,n){var i=Tn(),o=1/0,a=xt(e,["pointerdown","keydown"],(function(t){o=t.timeStamp}),{capture:!0,once:!0}).stop,s=t.subscribe(Gt.PERFORMANCE_ENTRY_COLLECTED,(function(t){"largest-contentful-paint"===t.entryType&&t.startTime<o&&t.startTime<i.timeStamp&&r({largestContentfulPaint:t.startTime})})).unsubscribe
return{stop:function(){a(),s()}}}(t,window).stop,s=function(t,e){var n=Tn()
return{stop:t.subscribe(Gt.PERFORMANCE_ENTRY_COLLECTED,(function(t){if("first-input"===t.entryType&&t.startTime<n.timeStamp){var e=x(t.startTime,t.processingStart)
!function(t){r({firstInputDelay:t.firstInputDelay,firstInputTime:t.firstInputTime})}({firstInputDelay:e>=0?e:0,firstInputTime:t.startTime})}})).unsubscribe}}(t).stop
return{stop:function(){i(),o(),a(),s()}}}(e,(function(t){i.updateTimings(t),i.scheduleUpdate()})).stop,s=function(t){var e=history.pushState
history.pushState=X((function(){e.apply(this,arguments),t()}))
var n=history.replaceState
history.replaceState=X((function(){n.apply(this,arguments),t()}))
var r=wt(window,"popstate",t).stop
return{stop:function(){r(),history.pushState=e,history.replaceState=n}}}(c).stop,u=(n=c,wt(window,"hashchange",n)).stop
function c(){if(o.isDifferentView(t))return o.end(),o.triggerUpdate(),void(o=An(e,t,r,Ut.ROUTE_CHANGE,o.url))
o.updateLocation(t),o.triggerUpdate()}e.subscribe(Gt.SESSION_RENEWED,(function(){o.end(),o=An(e,t,r,Ut.ROUTE_CHANGE,o.url)})),e.subscribe(Gt.BEFORE_UNLOAD,(function(){o.end(),o.triggerUpdate()})),e.subscribe(Gt.RECORD_STARTED,(function(){r=!0,o.updateHasReplay(!0)})),e.subscribe(Gt.RECORD_STOPPED,(function(){r=!1}))
var h=window.setInterval(X((function(){o.triggerUpdate()})),kn)
return{addTiming:function(t,e){void 0===e&&(e=w()),o.addTiming(t,e),o.triggerUpdate()},stop:function(){s(),u(),a(),o.end(),clearInterval(h)}}}(e,t)}function Fn(t){return t===En.TRACKED_WITH_RESOURCES||t===En.TRACKED_WITHOUT_RESOURCES}!function(t){t.NOT_TRACKED="0",t.TRACKED_WITH_RESOURCES="1",t.TRACKED_WITHOUT_RESOURCES="2"}(En||(En={}))
var Rn={buildMode:"release",datacenter:"us",sdkVersion:"2.7.2"},On=function(t){var e,n=!1,i=(e={},{get:function(){return e},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},set:function(t){e=t}}),o={},a=function(){},c=new zt,h=function(t){c.add([t,w()])},l=new zt,f=function(t){l.add([t,x()])},m=new zt,y=function(t){m.add([t,x()])}
function x(){return u({context:i.get(),user:o})}var C,T,A=(C={init:X((function(t){var e;(function(t){if(void 0===document.cookie||null===document.cookie)return!1
try{var e="dd_cookie_test_"+st(),n="test"
return kt(e,n,rt,t),At(e)===n}catch(t){return console.error(t),!1}}(_t(t))||(console.warn("Cookies are not authorized, we will not send any data."),0))&&("file:"!==window.location.protocol||(console.error("Execution is not allowed in the current context."),0))&&function(t){return n?(t.silentMultipleInit||console.error("DD_RUM is already initialized."),!1):t&&(t.clientToken||t.publicApiKey)?t.applicationId?void 0===t.sampleRate||pt(t.sampleRate)?void 0===t.resourceSampleRate||pt(t.resourceSampleRate)?!Array.isArray(t.allowedTracingOrigins)||0===t.allowedTracingOrigins.length||void 0!==t.service||(console.error("Service need to be configured when tracing is enabled"),!1):(console.error("Resource Sample Rate should be a number between 0 and 100"),!1):(console.error("Sample Rate should be a number between 0 and 100"),!1):(console.error("Application ID is not configured, no RUM data will be collected."),!1):(console.error("Client Token is not configured, we will not send any data."),!1)}(t)&&(t.publicApiKey&&(t.clientToken=t.publicApiKey),e=function(t,e){var n=new Vt,r=Bt(t,Rn),i=r.configuration,o=r.internalMonitoring,a=function(t,e){var n=function(t,e,n){var r=function(t,e){var n,r,i=!1,o=function(){i=!0,clearTimeout(n),n=setTimeout((function(){i=!1}),Et)}
return{get:function(){return i||(r=At(t),o()),r},set:function(n,i){kt(t,n,i,e),r=n,o()}}}("_dd_s",t)
!function(t){var e=t.get(),n=At("_dd"),r=At("_dd_r"),i=At("_dd_l")
if(!e){var o={}
n&&(o.id=n),i&&/^[01]$/.test(i)&&(o.logs=i),r&&/^[012]$/.test(r)&&(o.rum=r),Te(o,t)}}(r)
var i=new ye,o=Ce(r).id,a=at(X((function(){var t=Ce(r),a=n(t[e]),s=a.trackingType,u=a.isTracked
t[e]=s,u&&!t.id&&(t.id=st(),t.created=String(Date.now())),Te(t,r),u&&o!==t.id&&(o=t.id,i.notify())})),Et).throttled
return a(),function(t){var e=xt(window,["click","touchstart","keydown","scroll"],t,{capture:!0,passive:!0}).stop
De.push(e)}(a),function(t){var e=X((function(){"visible"===document.visibilityState&&Te(Ce(r),r)})),n=wt(document,"visibilitychange",e).stop
De.push(n)
var i=setInterval(e,xe)
De.push((function(){clearInterval(i)}))}(),{getId:function(){return Ce(r).id},getTrackingType:function(){return Ce(r)[e]},renewObservable:i}}(t.cookieOptions,"rum",(function(e){return function(t,e){var n
return{trackingType:n=function(t){return t===En.NOT_TRACKED||t===En.TRACKED_WITH_RESOURCES||t===En.TRACKED_WITHOUT_RESOURCES}(e)?e:ut(t.sampleRate)?ut(t.resourceSampleRate)?En.TRACKED_WITH_RESOURCES:En.TRACKED_WITHOUT_RESOURCES:En.NOT_TRACKED,isTracked:Fn(n)}}(t,e)}))
return n.renewObservable.subscribe((function(){e.notify(Gt.SESSION_RENEWED)})),{getId:n.getId,isTracked:function(){return void 0!==n.getId()&&Fn(n.getTrackingType())},isTrackedWithResource:function(){return void 0!==n.getId()&&n.getTrackingType()===En.TRACKED_WITH_RESOURCES}}}(i,n)
o.setExternalContextProvider((function(){return s({application_id:t.applicationId},c.findView(),e().context)}))
var u=function(t,e,n,r,i,o){var a=function(t,e){var n,r,i,o=[],a=[]
t.subscribe(Gt.VIEW_CREATED,(function(t){n&&o.unshift({context:c(),endTime:t.startTime,startTime:n.startTime}),n=t,i=e.getId()})),t.subscribe(Gt.VIEW_UPDATED,(function(t){n.id===t.id&&(n=t)})),t.subscribe(Gt.AUTO_ACTION_CREATED,(function(t){r=t})),t.subscribe(Gt.AUTO_ACTION_COMPLETED,(function(t){r&&a.unshift({context:h(),endTime:r.startTime+t.duration,startTime:r.startTime}),r=void 0})),t.subscribe(Gt.AUTO_ACTION_DISCARDED,(function(){r=void 0})),t.subscribe(Gt.SESSION_RENEWED,(function(){o=[],a=[],n=void 0,r=void 0}))
var s=setInterval(X((function(){u(o,Me),u(a,Ie)})),Ne)
function u(t,e){for(var n=performance.now()-e;t.length>0&&t[t.length-1].startTime<n;)t.pop()}function c(){return{session:{id:i},view:{id:n.id,name:n.name,referrer:n.referrer,url:n.location.href}}}function h(){return{action:{id:r.id}}}function l(t,e,n,r){if(void 0===r)return n?t():void 0
if(n&&r>=n.startTime)return t()
for(var i=0,o=e;i<o.length;i++){var a=o[i]
if(r>a.endTime)break
if(r>=a.startTime)return a.context}}return{findAction:function(t){return l(h,a,r,t)},findView:function(t){return l(c,o,n,t)},stop:function(){clearInterval(s)}}}(n,i),u=function(t,e){var n=function(t,e){var n,r=o(t.rumEndpoint,(function(){return e.notify(Gt.BEFORE_UNLOAD)})),i=t.replica
function o(e,n){return new k(new E(e,t.batchBytesLimit,!0),t.maxBatchSize,t.batchBytesLimit,t.maxMessageSize,t.flushTimeout,n)}function a(t){return s(t,{application:{id:i.applicationId}})}void 0!==i&&(n=o(i.rumEndpoint))
var u=!1
return{add:function(t){u||(r.add(t),n&&n.add(a(t)))},stop:function(){u=!0},upsert:function(t,e){u||(r.upsert(t,e),n&&n.upsert(a(t),e))}}}(t,e)
return e.subscribe(Gt.RUM_EVENT_COLLECTED,(function(t){t.type===Lt.VIEW?n.upsert(t,t.view.id):n.add(t)})),{stop:function(){n.stop()}}}(r,n)
me(t,r,n,i,a,o),function(t){t.subscribe(Gt.PERFORMANCE_ENTRY_COLLECTED,(function(e){if("longtask"===e.entryType){var n={date:S(e.startTime),long_task:{duration:b(e.duration)},type:Lt.LONG_TASK}
t.notify(Gt.RAW_RUM_EVENT_COLLECTED,{rawRumEvent:n,startTime:e.startTime})}}))}(n),function(t,e){t.subscribe(Gt.REQUEST_COMPLETED,(function(n){e.isTrackedWithResource()&&t.notify(Gt.RAW_RUM_EVENT_COLLECTED,function(t){var e=t.type===nt.XHR?et.XHR:et.FETCH,n=function(t){if(performance&&"getEntriesByName"in performance){var e=performance.getEntriesByName(t.url,"resource")
if(e.length&&"toJSON"in e[0]){var n,r=e.map((function(t){return t.toJSON()})).filter(Qt).filter((function(e){return n=e,r=t.startTime,i=Sn(t),n.startTime>=r&&Sn(n)<=i
var n,r,i}))
return 1===r.length?r[0]:2===r.length&&Sn((n=r)[0])<=n[1].startTime?r[1]:void 0}}}(t),r=n?n.startTime:t.startTime,i=n?Cn(n):void 0,o=function(t){if(t.traceId&&t.spanId)return{_dd:{span_id:t.spanId.toDecimalString(),trace_id:t.traceId.toDecimalString()},resource:{id:st()}}}(t)
return{startTime:r,rawRumEvent:s({date:S(r),resource:{type:e,duration:b(t.duration),method:t.method,status_code:t.status,url:t.url},type:Lt.RESOURCE},o,i)}}(n))})),t.subscribe(Gt.PERFORMANCE_ENTRY_COLLECTED,(function(n){var r
e.isTrackedWithResource()&&"resource"===n.entryType&&"xmlhttprequest"!==(r=n).initiatorType&&"fetch"!==r.initiatorType&&t.notify(Gt.RAW_RUM_EVENT_COLLECTED,function(t){var e=function(t){var e=t.name
if(!function(t){try{return!!qt(t)}catch(t){return!1}}(e))return J('Failed to construct URL for "'+t.name+'"'),et.OTHER
for(var n=function(t){var e=qt(t).pathname
return"/"===e[0]?e:"/"+e}(e),r=0,i=Xt;r<i.length;r++){var o=i[r],a=o[0]
if((0,o[1])(t.initiatorType,n))return a}return et.OTHER}(t),n=Cn(t),r=function(t){return t.traceId?{_dd:{trace_id:t.traceId}}:void 0}(t),i=s({date:S(t.startTime),resource:{type:e,url:t.name},type:Lt.RESOURCE},r,n)
return{startTime:t.startTime,rawRumEvent:i}}(n))}))}(n,i)
var c=Pn(n,e),h=c.addTiming,l=c.stop,f=function(t,e){return function(t,e){return e.subscribe((function(e){return t.notify(Gt.RAW_RUM_EVENT_COLLECTED,xn(e))})),{addError:function(e,n){var r=e.error,i=e.startTime,o=e.context,a=function(t,e,n){var r=t instanceof Error?j(t):void 0
return Zt({startTime:e,source:n},v(r,t,"Provided"))}(r,i,e.source)
t.notify(Gt.RAW_RUM_EVENT_COLLECTED,Zt({customerContext:o,savedCommonContext:n},xn(a)))}}}(t,mn(e))}(n,r).addError
return{addAction:pn(n,r).addAction,addError:f,parentContexts:a,addTiming:h,stop:function(){l(),u.stop()}}}(t.applicationId,location,n,i,a,e),c=u.parentContexts,h=u.addError,l=u.addAction,f=u.addTiming;(function(t,e){var n=function(t){return{clearTracingIfCancelled:Ve,traceFetch:function(e){return Ze(t,e,(function(t){var n
if(e.input instanceof Request&&!(null===(n=e.init)||void 0===n?void 0:n.headers))e.input=new Request(e.input),Object.keys(t).forEach((function(n){e.input.headers.append(n,t[n])}))
else{e.init=Zt({},e.init)
var r=[]
e.init.headers instanceof Headers?e.init.headers.forEach((function(t,e){r.push([e,t])})):Array.isArray(e.init.headers)?e.init.headers.forEach((function(t){r.push(t)})):e.init.headers&&Object.keys(e.init.headers).forEach((function(t){r.push([t,e.init.headers[t]])})),e.init.headers=r.concat(vt(t))}}))},traceXhr:function(e,n){return Ze(t,e,(function(t){Object.keys(t).forEach((function(e){n.setRequestHeader(e,t[e])}))}))}}}(e)
!function(t,e,n){var r=Le()
r.beforeSend((function(r,i){ne(e,r.url)&&(n.traceXhr(r,i),r.requestIndex=Xe(),t.notify(Gt.REQUEST_STARTED,{requestIndex:r.requestIndex}))})),r.onRequestComplete((function(r){ne(e,r.url)&&(n.clearTracingIfCancelled(r),t.notify(Gt.REQUEST_COMPLETED,{duration:r.duration,method:r.method,requestIndex:r.requestIndex,response:r.response,spanId:r.spanId,startTime:r.startTime,status:r.status,traceId:r.traceId,type:nt.XHR,url:r.url}))}))}(t,e,n),function(t,e,n){var r=Ge()
r.beforeSend((function(r){ne(e,r.url)&&(n.traceFetch(r),r.requestIndex=Xe(),t.notify(Gt.REQUEST_STARTED,{requestIndex:r.requestIndex}))})),r.onRequestComplete((function(r){ne(e,r.url)&&(n.clearTracingIfCancelled(r),t.notify(Gt.REQUEST_COMPLETED,{duration:r.duration,method:r.method,requestIndex:r.requestIndex,response:r.response,responseType:r.responseType,spanId:r.spanId,startTime:r.startTime,status:r.status,traceId:r.traceId,type:nt.FETCH,url:r.url}))}))}(t,e,n)})(n,i),function(t,e){var n
n=function(n){de(t,e,n)},St("interactive",(function(){var t,e={entryType:"resource",initiatorType:Kt,traceId:oe(document)}
if(he("navigation")&&performance.getEntriesByType("navigation").length>0){var r=performance.getEntriesByType("navigation")[0]
t=Zt(Zt({},r.toJSON()),e)}else{var i=le()
t=Zt(Zt(Zt({},i),{decodedBodySize:0,duration:i.responseEnd,name:window.location.href,startTime:0}),e)}n(t)})),ce()&&fe(t,e,performance.getEntries()),window.PerformanceObserver&&(new PerformanceObserver(X((function(n){return fe(t,e,n.getEntries())}))).observe({entryTypes:["resource","navigation","longtask","paint","largest-contentful-paint","first-input","layout-shift"]}),ce()&&"addEventListener"in performance&&performance.addEventListener("resourcetimingbufferfull",(function(){performance.clearResourceTimings()}))),he("navigation")||function(n){function r(){var n
n=Zt(Zt({},le()),{entryType:"navigation"}),de(t,e,n)}St("complete",(function(){setTimeout(X(r))}))}(),he("first-input")||function(n){var r=Date.now(),i=!1,o=xt(window,["click","mousedown","keydown","touchstart","pointerdown"],(function(t){if(t.cancelable){var e={entryType:"first-input",processingStart:w(),startTime:t.timeStamp}
"pointerdown"===t.type?function(t){xt(window,["pointerup","pointercancel"],(function(e){"pointerup"===e.type&&a(t)}),{once:!0})}(e):a(e)}}),{passive:!0,capture:!0}).stop
function a(n){if(!i){i=!0,o()
var a=n.processingStart-n.startTime
a>=0&&a<Date.now()-r&&function(n){de(t,e,n)}(n)}}}()}(n,i),function(t){var e=function(){var t,e=window
if(e.Zone){var n=e.Zone.__symbol__("MutationObserver")
t=e[n]}return t||(t=e.MutationObserver),t}()
e&&new e(X((function(){t.notify(Gt.DOM_MUTATED)}))).observe(document.documentElement,{attributes:!0,characterData:!0,childList:!0,subtree:!0})}(n)
var d=function(t,e,n){return{get:function(r){var i=n.findView(r)
if(e.isTracked()&&i&&i.session.id){var o=n.findAction(r)
return{application_id:t,session_id:i.session.id,user_action:o?{id:o.action.id}:void 0,view:i.view}}}}}(t.applicationId,a,c)
return{addAction:l,addError:h,addTiming:f,configuration:i,lifeCycle:n,parentContexts:c,session:a,getInternalContext:d.get}}(t,(function(){return{user:o,context:i.get()}})),f=e.addAction,y=e.addError,h=e.addTiming,a=e.getInternalContext,l.drain((function(t){var e=t[0],n=t[1]
return f(e,n)})),m.drain((function(t){var e=t[0],n=t[1]
return y(e,n)})),c.drain((function(t){var e=t[0],n=t[1]
return h(e,n)})),n=!0)})),addRumGlobalContext:X(i.add),removeRumGlobalContext:X(i.remove),getRumGlobalContext:X(i.get),setRumGlobalContext:X(i.set),getInternalContext:X((function(t){return a(t)})),addAction:X((function(t,e){f({name:t,context:u(e),startTime:w(),type:jt.CUSTOM})})),addUserAction:function(t,e){A.addAction(t,e)},addError:X((function(t,e,n){var r
void 0===n&&(n=d),n===d||n===p||n===g?r=n:(console.error("DD_RUM.addError: Invalid source '"+n+"'"),r=d),y({error:t,context:u(e),source:r,startTime:w()})})),addTiming:X((function(t){h(t)})),setUser:X((function(t){var e=function(t){if("object"==typeof t&&t){var e=u(t)
return"id"in e&&(e.id=String(e.id)),"name"in e&&(e.name=String(e.name)),"email"in e&&(e.email=String(e.email)),e}}(t)
e?o=e:console.error("Unsupported user:",t)}))},T=r(r({},C),{onReady:function(t){t()}}),Object.defineProperty(T,"_setDebug",{get:function(){return $},enumerable:!1}),T)
return A}()
!function(t,e,n){var r=t[e]
t[e]=n,r&&r.q&&r.q.forEach((function(t){return Pt(t,"onReady callback threw an error:")()}))}(function(){if("object"==typeof globalThis)return globalThis
Object.defineProperty(Object.prototype,"_dd_temp_",{get:function(){return this},configurable:!0})
var t=_dd_temp_
return delete Object.prototype._dd_temp_,"object"!=typeof t&&(t="object"==typeof self?self:"object"==typeof window?window:{}),t}(),"DD_RUM",On)},27:function(t,e,n){"use strict"
n.d(e,{e$:function(){return v},Zx:function(){return f},S4:function(){return u}})
for(var r=n(3649),i=n.n(r),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=new Uint8Array(256),s=0;s<o.length;s++)a[o.charCodeAt(s)]=s
var u,c=function(t){return function(t){for(var e="",n=0;n<t.length;n++)e+=String.fromCharCode(t[n])
return e}(i().inflate(function(t){var e,n,r,i,o,s=.75*t.length,u=t.length,c=0
"="===t[t.length-1]&&(s--,"="===t[t.length-2]&&s--)
var h=new Uint8Array(s)
for(e=0;e<u;e+=4)n=a[t.charCodeAt(e)],r=a[t.charCodeAt(e+1)],i=a[t.charCodeAt(e+2)],o=a[t.charCodeAt(e+3)],h[c++]=n<<2|r>>4,h[c++]=(15&r)<<4|i>>2,h[c++]=(3&i)<<6|63&o
return h}(t)))},h={Courier:"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","Courier-Bold":"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","Courier-Oblique":"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","Courier-BoldOblique":"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",Helvetica:"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","Helvetica-Bold":"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","Helvetica-Oblique":"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","Helvetica-BoldOblique":"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","Times-Roman":"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","Times-Bold":"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","Times-Italic":"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","Times-BoldItalic":"eJyFnV9TG0myxb8K0U/3RjC7NgZj5o0ZZnYGz5pZGyH3bsyDEA3oImhWfxCajf3ut1Xqyjx5Mkt+cbh/p9RdlZV1qrrVJf5T/dg+PjZPi+r76urvy/nortk7PPpwfLh39P7DyUm1X/3cPi0+jR6brsDl5LGZf/dDO735dTGaTsYbdTmdorq3UfdUHj1Opmss0MFhM7m731xwU7Y73pY+fbqbdqW+e3vUkfnPk9fm5vfJYnxffb+YLZv96sf70Ww0XjSzL83msz+9Lpqnm+bmc/s4euqr+cMP7Wv1/b++O3jzZv+7g7cf9k9O3u+fHLz9Y78adGVn08lT83s7nywm7dPmSl0xFS7vJ+OHp2Y+r74/6vhVM5unYtWbNwd/efPmTXeNT+1iMt605Mf2eT3bNGLvf8b/u/f25MPR/ubf4/Tvyebfkzfp33fp3+O905v2utn7sp4vmsf53q9P43b23M5Gi+bmL3t7p9Pp3ufN2eZ7n5t5M3vp6DaYk/neaG8xG900j6PZw157u/fb5KldrJ+b735puk+d/m1v9HTz13a2N+k+PF9ezyc3k9Fs0sz/0lX3p+4yN5Onuy/j+yZ1QKrFl0X3kdHsJqtdwR9Hz7/0ffL+/cl+9TUfHb4/2K9O5+NNpGed+OHdfnXWyHEX4+P96svi5pdhV/Yg/feq++/bg7fb/vp7s5hNxl1E//Wfavi1+v5gE9lPXU3mz6MukP/d3+J3XcwSbl7H09Gj8KOjoy3/97LtQnU9VeVNf6Kn5eP1pqfunrx2006no5nwD+/ebflzMxtvMj4Lx8cftsLosZPmXXi0ZvkzqQapy732PJo1T9PmtiTZj0n1RvPNGecPqhz3yvN0ORcqMRt3A3XkL3G/fr5vnnzxrimTVltykBs5n47m9742fzaz1tP2qfFwsQpKLu5nTVD2tl3OAjp5CcrOJ68BbF6aoG+bOKZPE6iwhGjcTtsnj+fN48RK0gPTjQ842vx7OZp6fDdrupEcNPPfy2aevEZT8KDve637+/fHW3bq0Q8e/ahpe9Cf7MyX+smjn/0H/+aHwC9+UP7qG3buT/9R0du3W/Sbtjuf6+++Ep88uvDn+t2X+oevxGewjvdb9MWf69Kfa+DPdeVrP/SlvvrT1x790yffdTeZPTQLYxsyRq87zY5T/hx5yrF4yngyGU9m4+Wj77XlxrXn3dQTDJHkb6Yy6lMeXQs6PDzsx1jgv75UcOVb/8E73433PkgTj/7Pn+vBl9IhLGn/6K8YmE5ge8/BqPdDaObR3Ndr4Sux9CF88Um48pV49R9c+0r8qejwg+aXTYSDg9zrMJna8ruycTGZ3hSn+pt2FcTZzM46EyzSQk2T421u/+1mYYg+K59ZR3PH7bSdTQI+bwpnGS9n3TQ+XvsuS8NmPklL18D+t6uWeFjdLSed8tgu4pXDRk4n/oZMoc+JczsJWLB+6lZy4XLgZnR3F01pW45LMVpwbPqumTU3/qPdWmh0Nxs9g6nlj153dxFN0EoN7/VoviPCu9XC+ks6wOrdXUGOzXQ6eZ5P5oHUtXVx3y7NWtFN+ya5tedmo5fABkfj5SJauiQvv502r16jkZXx42g8i5Y717MmuvBNuxiNzYhTadL1JAZAlBmOQ61sc9OFNFqjLp/uRrPl43S0DC7T3nXLzIfgdCNsB/TLo8nZk2xwp7rqOXjf53w7u7ntlnlmXagLFDvH6vrDcrnAhV7gncwJs5vHzueWU7yCnGmkTDzjZjPk5/Ng+poW1uZtoZ5tkPTd6OxuiLush16TlZzrUJ2Ybf7p5G+zRiemsEv1dLbvdG3kaiCTxc3kZXITdFJta6bL5WBoaLXth3SdF3xIJ0gagzJVpzsvGiTQVH9KvZ4ZKIp9GKTmNBr0M9RD0hP0Ab0HcBfRO4bOIeAWxN5iUkOPD4+z2D/0CC5FnqOrQpsH2so4Lp+iCujwKOWotVRd50dn0xup0tmsrUI4vVFqhphmAidH1MWrvfrhSR+waftn83QXXP6zvYTew0WN1OTYOUgCUYcXTyOylrUVga6mturdj4+c9tF9OwtadUFX1zAURsEXcok32WwLYRvQBTRidmozjzfmy7TGmQX1pRSUKJY42Wo2wcfldDF5nq6DelEDNcltd+RE6lZbi8loejO5vfV9tS5bwyd7HU3YXcny08402zHrlKVxoaOfSjZIHQqeEo/NX+lE+PCtWzDgEzi5AZq1D80T3gaJOc6au8ncLnx1iNLKS6djPy7kXmTZjWpzN6LBphWkDMyCobU8lmRcFlLqn2Tahyd55Zqec9mnYNLKnxb3vq4/Fg1wGvnWu7xsWxRMpinOjqVZ8LS0fNiRlYUA/1kaGqVKXZR6pDT1lDx3XrpyeRxf7FyW8IyZ1wXNdBE87lkYk1ZPXLU7HDFY6b3PJhe0xNZIQxWuM3UsUOj1PtWucI6P0Me7BJ51iQxVk2nE3cJ8OMj5OgonpI/hIkPuMGzH6T2MfKkTmWJ5ofFrITV/LY3x32j+y3HoonY/msKztzzIN7cm9Jxb+iJyefFlu2zSVPtGB9I6SILA87Pc31gzxQb13Rr16iic67+E613J4PgWRzKss4noG4+2MOX/WKjEkjL/UOz8ZjKOjPasMKHNdrbmk+0frW5huft5d17vXFqfFs55WjTp+HbgovDs8M9g4tSlSGG6LznFQ9iUN9mrzEpAz7ZzKNgq6PPdnVeatneb/n5qg0dVrTdTSR8v5QzqTlUYyXfhTYM8X4GZXGNeSN+ncB6H7w/dFKGeXxrjPy0330X+sV99bGZPv48ms803yP+qTjdfVVf7370/+mO/P9q6h0HbelrUmzrCv22O3sjR1lUMwoahcNEdHelRrgIgSA7DpasM3Y5/g4zzGKUPmWHbp0MGbQcOon9sjqT1l/YoxwyRab0KA3PWgW/9oND6Qdj6gW/9oNj6QdD6vPAzLNkJkqvu6ETaMOyOuqk4H9bd4bEe5SYBgqorhVcCOnyY8bI7eieFlvlsgEyAgMNVgOYAAaIAgSIBAiYBAtYHSMmLacPKHK3tkcRHEcZnS/tCOF4F0aAVTiNXOQ/frMAYFkQDWXg4mrMKQ1oQZbbwKL1F9DkuEiW68DjbReaUF4FGvXAa+pnD+M/oMkDkBMojO8jqwF+OjUH4rvAFFiFSIXwFsxC5FD5nGyJY78gYDCQjdJHMwEoEkZ8I96aSpchZsgb2Iog8RnhkNCJ6txGJLEd47Dsis/mIwA4kgrWhjF98q1cerQNE1iTc+1NvE+hPgsifhJM/KWd/ygr4kyDyJ+GhP2UV/EkQDTDh0QAT0Q8wkWiACY8HmMg8wEQgfxJO/pQ5+FNGlwEif1Ie+VNWB/5y7E/Cd4Uv8CeRCuEr+JPIpfA5fxLB+lPG4E8ZoT9lBv4kiPxJuPenLEX+lDXwJ0HkT8IjfxLR+5NI5E/CY38Smf1JBPYnEaw/ZfziW73yaB0g8ifh3p8wNGhSlpNTWZHsikT2LCODcVlO7mXF0MJMEfAxy2k0WjEakraEH5dWp8FpxXiE2jI8TK1KVmdF8jsjgukZflniZH8kRh5oigwK9WA3tOI34x/4otV3xb/gkLbMzvg7r7SqNUyjgWsajtZpBPBPy8lEreid1OiRnZoC4KmWk7FaMXJXW8JbrNXJZ60Ym60tw45rVbZdq1rvNdpLIU6rAl+XOPmxFb0pK0FLRkqGjBLZsZHYjEEEK0ZKRoxSaMNQAEwYKVkASpEBoO6HP6o0+FGKhz6W4IGPGtkuSmS6IIHlAr2MKdmtkSKzhQKD8OpstCh9I8qByaJajnLBYLHEjig7c0XNWisoYKxA0VYBg6kiJUtFyRsqqJGdggxmipSsFKXISFH3NooqmShKsYViCTZQ1Ng+UbPmCcpLGJNVSNcxJdNEyVtm33r0S0FklsLJKZWzTWYFPFIQGaTw0B2zCtYoiEas8Gi4iujHqkg0UIXHo1RkHqIikAsKJwvMHPwvo8sAkfMpj2wvqwN/OTY84bvCF1idSIXwFUxO5FL4nL2JYL0tYzC2jNDVMgNLE0R+JtybWZYiJ8sa2Jgg8jDhkYGJ6N1LJLIu4bFvicymJQI7lgjWrjJ+8a1eebQOEFmUcO9Pua5oUMrIoVQgiwKBPUokMCll5FIqhDYlMviUMhppKkRDTVU/1lSjwaZCPNpU5+GmCtmVCuRXIoBhCbuMGFkWCJFniTwIrsmupcLOWAa+pVoplgXnUr0YS+ddqljzEg7uJQztSyD4lzIyMBW8g4kWWZiI4GHKyMRUiFxMVW9jqpGPqRAbmersZKqwlalivUz4S9D+VcDWESM/U8EbWq4YGpoyMjQVyNBAYEMTCQxNGRmaCqGhiQyGpowGoQrRIFTVD0LVaBCqEA9C1XkQqkKGpgIZmghgaMIuI0aGBkJkaCIPgmuyoamwM5aBoalWimXB0FQvxtIZmirW0ISDoQlDQxMIhqaMDE0Fb2iiRYYmIhiaMjI0FSJDU9UbmmpkaCrEhqY6G5oqbGiqWEMT/hK0fxWwjaG9YyYxYQFbvdVm/W+UqANlQmaWMVmZYDayXgAby4RMLOPQwnoRDCwTGnIZRwMua364ZYUGW8bxUMsqD7TMybIyJsPqMdhVTy49IasSHBlVLw7cldikMt4RscCgshJHrGBOWS1EzBlT5taWegqm1BO0pB6BIWVCdpSxN6Neiayol8CIMiEbyjgyoax5C8oKGVDGsf1klc0nc7aezK3x9PTFtXXlyNoTWkFl7NdP/SBAvxFEhiOcHEc5W05WwHMEkekID10nq2A7gmgUCY+GkYh+HIlEA0l4PJJE5qEkArmPcLKfzMF/MroMEDmQ8siCsjrwl2MTEr4rfIENiVQIX8GIRC6Fz1mRCNaLMgYzygjdKDOwI0HkR8K9IWUpcqSsgSUJIk8SHpmSiN6VRCJbEh77kshsTCKwM4lgrSnjF9/qlUfrAJE9CXf+9ENHT7ujgyM5yp8FlL0EkAkpcLgC0BxIQBIkYBIfYH1ogOSBrWiQMlCOcgsAmeoCh+oCzdUFRF0OijQEmDQEWN+QLTkzcT/zcT/zcT8rxP0sjPuZj/tZEPezIO5nLu5nPu5nvRkcSXs2PnAoR7XRamuDZzTue9qbLkZGEIVHOMVIeBQoEX20RKKQCee4icDBE8FGUDCFMfMrHwYIaEa1L8WhFR7EN21itPHNiOObOcc38zC+WQzimyWOb+Yuvllw8c0CxTdjjm/Pr3wYML49qn0pF9/MXXx/7kPbT4Y/Y1iR5ZAiI4NSwTiUYrUoZeBECsGKFIoXKcphAzaSuT4d5aYAyi0BZBoCHNoBNDcDkLQCmDQCWN8GILkJira/cdk16uAkI2pjE3RQkxd/hhU6qIk7CHbdWh50XBN1XBN13EQyNh3lugMy1QQOtQSaKwNI6gJMqqKsldVaOrJru4RMTYC75V6iuSaAaMoFReoILN8GAMr5oKj/EVOTEDMzfmd2tCck9wKA7G1AEs6Ns557Uz33fnpesNLz0EXPvYGeB955HtjmuXPMc2+W5/2gP5T2jGyKneOgBxRk3TkNeqA2687NoAdGWXcOgx5IboEiGfRCrN74NsmIRxS3qQnbZIY7YN/UJmhqEzS1tUe+zm2hgm1YwdbXhAcYKEEdZYAB8rHXASZoaQosfUOWhYYsw4YsfUP4fgyUoCHLINhLk1cfq+2TkHd6ZO8sEwpuKhN395OJ2lvJhMK7yKTQDWRiOfyAcvgV6VD+iIkOKCc6Im8/HynRkUKiA7au9NEkOjBypY99osORr3NbqGAbVrD1NeFEByWooyQ6IGuTH/usPpC4S1YDsrVWjrVWKrVWxLVWRWutTCOrLPu9kLU98rVe+9qZqQ7HBQk0REiNRgsV8QOHCtAYIjUeTlSIRxbJNMhIpfFmVUgPEiijSaUByWqQ+lTEjwIu4EcslaAhQyqPEZJ5SFu5LQo7wxKOeSryrYazE5AamwIV2t12tgpSyTWsuiyNMPYSUiNboSLfGsNsNqTGvkOF2IJIZjci2RqTFddFYWdgvHP9Vm0f7b/9IEdyYwfIrORV2DwveHecj4bmqLZH4nyK0MuEmsfZ268OfusbrIXW/mxrfzbcc9/X2e25dzxqKW5Ip3MPPaoDRPWN9qOTFMUBt2FTcY5ItA27l2xKQHBIoBCxGgXKlrkqXXNYEuqiQM0j9VuNjILpB1T4UQ5seUD1BXq7w8AKopAqj4KZ1St/7qFHdYCo6sLLlY4ClbW1L87BEe6u8Kna3vdvlwXpyK6FEsp3zYCCNVHibiGUqF39JESrmcToO6bEzNdLidilzKc8pE4DRG0RTg0SHrVKRN80kah9wrmRInBLRbDNFUxtxi8bGFGb3ZcNzKM2R182sERt9l82sMBt5i8bGHObzQg/LQrcfqtyFKwaxsIWCSJiC3BcrOqiY2UXIytTpKxI8cpfnJ4GiGIknKIjPIqLiD4iIlEshHMUROD2i2BbLti2+aJv7qEe2Uc2F9hIQMFTnAtqGlD7FOfCNAgYPau5gGYAsc+hLvoZCo7s470LPy+poN8TXfSzkR59NSVro9HXRBdV9A3RBRrtISEKszNa5lHAI6NliULvjZYF7gQ2WsbUHbhWZUQdU1irknrl4zn06Kv/YO1LcbdFy9deMtu5oQMtp160InWlFaP+tCV8p1qdetaK3L1W5T62qu1oq1Fvux+eCDn1+64fnoiKXBV6ZVjgXwvnqQvlOSuKv7/Q67BpFRIDKaUFSpQUKEUpgbpPCFQpHVDiZECNUwE1mwioUBrQZviAUgqUN8P7Aldh5Ich/RqeoQ7LcrcX9oj3at4GCD0uiLpbOPW18KijRfS9LBJ1sXDuXxG4c0WwPSuYuhX3+DKiDi3s8SX1ysdz6NFX/8Hal+Lui7bE9pJ9xoVdyAr1JMvUoSxH/cplfPdyCepllrmzWec+Z912PauUASRflhXKBydHaUGFroo9NiwqX4tnq4uf4cxh2SeQ7JmD1FFGSaMCpYsKUaKo6lNENUoOFTgtVOGEUMWmgnJKArNz1jHq+NLOWZavgugOA/Y1+GwdlONODTeY9lp+ugO9KYg6Uzj1pfCoK0X0PSkSdaRw7kcRuBtFsL0omDoRn+Yxoi4sPM0j9crHc+jRV//B2pfizose8PUS3qQfEqK+czfpzKO+i27SWaK+8zfpLHDf8U06Y+o73LrAiPqusHWB1Csfz6FHX/0Ha1+K+y56038r/d5324cjOcqfBZQ7C5DpJ+BwBaC5dwBJxwCTPgHWdweQ3BOK9JWpdGRzLiGbbgkFmZa4S7JEbX4lRKmVGGVVYiahErG5tEH0nuQGNaaTGtulCdnX4rbIb2pJPOx488U0YLvDJSHavZIYbVzZsM2XzUfSLfINMyBbQeVYQaVSE0W8zUYVraMy2ZukSLYlCeKXEv9R4Y6GdGR3NCQU7GhI3O1oSNTuaEgo3NGQFNrRkBjtaEjM7Gj4XG1fDjnUIzsQEgqyPnGX9YnarE8ofNUrKTQeErPvrCVkk/9z76Hv9CinNSLjnCoMzHkGvr2DQnsHYXsHvr3cS6AE7R3Q+P8MvaRkY/Xb7+E+9y6vR7U9krxThPm1pfmRGfS+IAqJ8CguIvrgiEQREh6HSWSOlQiUIMIpS/AR5jtClC+FR5ikDvy5OX2E74pVkEgiFWJVSCmRS7FyySWCzTB8SksZMvSoDhBlXfRItpfy91yQeoIonMKjcIrowykShVN4HE6ROZwiUOoJp9TLHFJPEKWe8ij1sjrw5+bUE74rVkHqiVSIVSH1RC7FyqWeCDb1cC8VZcjQozpAlHrRXqosudcicyXi1yJjNQxw8bXIuAAHe+drkXEhF/j4tchY5YR17+C8CwVO3l3v4IRlBqVrunS26rdjHqW2LbAz5qU0t4V2x9ynvJUp8d3LSWGWDktCXRR4QBRfTtoW6Lo73dBtV7fpyK7CE8q3Q4CChXnibmGeqF2YJ0TL78T0FkFZ3tauxK7IL/vRrO25sDG4dOMWeBgQGaGAePWtiq6+leUBCEj26wlK2/UO5CjXGpBs11Nkt+spx+16SmW7niLdrqdMt+spy9v1lMh2PUHjdrrd1nWoZHtjqmXsJxrfSrkvRRS30tyXAoX7UigsSadIk05Z0Pj79fN9Y6u02cm3fX0sHdmXzRLS1ziEbe5vTyRL5f4WULD7MnG3+zJRu/syIcpLUGhfZmI5LwHZTZgbJPe32vqZadbMt1723CGyU4II8+Zx4jNnacos/SXoVyGUuxf8EpXXcBTxjgNV9N0cZUF/yu8+CFmZo7U98m3wLyPmaRVd2L3Wxpz8OH6tjUXvzO61Nubs0f61NhasW7vX2oiDb7vbAOaRg0e3ASyRl5duA1hmV3e3AczJ3zMHMxREHiic7F545IYieuMXidxfOE8BIrAVimAnA8E0I2ROg1uxmRsyDk7As4RwmiqU74hQMGmo5GcO0Wj6EM5ziAil6PFskjlMKYLIMoSzGWUBZhhBNM0Ij+YaEf2EIxLNOsLjqUdknn9EoElIOM1EmfN0lPnMR4MnJuE0OymPpqisBvNUlpa+NM9YwqNpS8TyfMATmPB4FhOZpzIRSilEk1rGK4/WASq0Opro3LvMeTaI32WOVZ76drzLHBcJpsH4XeZYdVNi4V3mWKbpMX6XOVRxqowfWMRqOG0WH1jEBXgK3fnAIi7kptP4gUWs8tRqVJxRrMCTiFV5srVqOKHYIsHEawvw9GtVNwlb2U0mVqYJ2Yo8LRuVHY1EO0XbnaNFYWek3aRN6jcjHU3gVCCYxm0Jnsyt6qZ0K+/uCze9GxUneSuwc1rVubXdqgrTpBV48rdquASwRYKFgC3AywGrFhYFtpBbGliZFwhW5WWCUd1iwaizUjzdwsGqvHwgNVxEmDLRUsIUWJY+6ZYVVg0XF7bIt2Zit9CwamG5YQu5RYeVdyczL0CMuCoJ66KwM2J+YTLoVyOHR3Ikz6MVyRshiuxzaeX4MFqpPIFWpE+UleljZGX52bESeYS/RWaXCiFqi9+lQjxqVbhLhSRqX7BLhQRuqdulQpja7Hd3RJxaX9jdEYlRHMq7OyKdIlLa3RGpHJt4d0ekUZR4o4OnFKFwo4OXouiUNjp4lSITb3TwGkcl2ujgFYqI2QVAiGLhdwEQj6IQ7gIgidof7AIggVvudgEQpjZHb8/HCkWg+PZ8LEfx2PX2fFyColN+ez7WOValt+djlSJnXxtnRtEKXhtnIYpQ/No4axSV6LVxVjgS/rVx5tR6+bsMpxGj1qtArVchar2qvvWqUetV4Narwq1XxbZeObW+/5H4U0+o5RlTuzOOWp013+asUIsz5vZmzq3N3LY1U9vSq76VH/TIvtV7ha0DFLzVe0WtAmrf6r0yrQFGb/VeQSuA2Ld6N2jzo/rbVxvTkf5oqyC7UFdBfyMrHdmN4gkFe8ETd9vAE7U7wBMKf+wqKbQtPDH7s1YJ2U3fG5Te/337Vg7lORAwCQIw+0QIBHwOBFie/gDTxzkA9ZVTgPmdU0DyOEeZvTfaEvOG8wbRZ5qgwfpLsMgKDcbnCsdA8YdgobT84qki/V1TZVEU5BHBsfTe5rnAkeTuxD70TIgeJW5Ya0/bBhFoS61t4+5tg+7lm3iUop6XG3ZkQS/zi9Mb5u+MN3Rpmr300VkGT3oTd493E7XPdBMKXwxPCj3iTSzojKV5mDvsPXTbhiF6KKA8HgHZn91VjsmpVJJQkSahMqkusL66QOT3dgWlp8zSHn20rMiml3LMLqWSXIo4t1TR1FImmaVIEkvQSOaBIRohIDt3DZ0NAndz1xBNEBDNXUNjgcDM3DVEA1SUR8ARkK3/ad+kZ15v5Ege9CmSB62AzAM/5W6Dx5CtDwrbDR5D43zA9DGpMDE+LaYPRIeVewo6rPyjz2FvfB/kFOJ7gGx3KsfuVCrdqYjyEhTtaGU5LwFJrwoSv9NORLvTzl7aI2t3w4LdDUO7G3q7GxbtbhjY3TCwu2Fod2t75Gu9drWrjUvW3iVr75J1wSXr0CVr75J14JJ14JK1c8nau2Tdu+SBtEdcElDwa5g1uSRQ+7uXdeCSoNAvXNbokoDsb1nWFX5RVlfu27G6cl+J1c4lgbsvv+rKfeNVV/5rrrry323VFX+hVVfuW6waXBIJfl9VV2aRWFd+kVhXfpFYO6M8Vu7WiDUbJZ7FrhHryq8R6ypYI9aV+xqprnCNWFdujVhXfo1YV2aNWFd+jVg7s0TBrxHryq8R68AvUeI1Yl35NWJd+TVi7T2zJs/U4CztkU/nZSF3l2HuLn3usmeCEmT1Msjqpc1qfEzfN889pmdOXhg/pmfRu6J7TM+c/dE/pmfBOqV7TE8cPNNtNmMeuWe02Ywl8tHSZjOW2VHdZjPm5K2Zj3xPs8sKJ6sVHuWsiD5xRaLsFc6JKgJnqwhxyrIbZ07jUrHx5YxxrAtjgxKBbVqFwKtF9IatUuDaIpJ1C2f/FsGZeFbYyTMHOxdEni6cjT0LbXA9Z/EihD4vamD2orHji1CwfdGd94vCE4AIPAtkgaeCzIP5IEvLABWGYDg9iFgeajxRCI9nC5FLI9HNGyLYkUjf5PUxib7JCySaRYrf5AW6n0uib/ICiWeU8Ju8QLPzSvRNnpdgdkFKEwxK0RyDup9mUKWZBqV4ssESPN+gRlMOSjTrgDQKs4TnHpRo+kEpGhao+5GBKg0OlHgAoMZjALXiMOA5CSSyB6OYmQkUtCDE7K6o8RRltGCWQt1PVEYN5irUabpCiWcs1NykBSLPWyDB1IWUZi+UeAIDrY0v76Yx1MKZDAsEkxnKPJ+hVpjSsIib1VDkiQ01nttA4+kNpGCGA3UZ0/JwD6c61HeOaZ7wUIrnPCyxY9S7mQ81M+qvO3Jd5a/srjF4h4L0D3RcYzgABX+K45qaD9T+0Y3roLmg0J/XuDbNA2b+kMZ4M+ikWZujB3sUfWE5lmWmRw8BCs8hW1M8eghQfI78183NWQQ+hDA809aStz/4f3M9zb/5v33B06hWakxaZKNGlFuACF+XAg7Jh1RtGHF+0QaQvEQBTF4tUHZb8R+825DuMtNmPk/PxgU2pgj84UtB9m9WCqbf/tmw2yq/Pn+bHVi01p+Z/Fa5/V2i28g+VRFjVKR/tTQj+gt0t9TV2+njoQ/HNjgPGA5A9hcKHtwkDNx9cf/A8QRsv89/MHMsMPod9wcT6Acf6IdCoB94PlNqw/9QDP+DnbSU2S558F1iRygGvfDOf6xSV+x65z8u4jtoxzv/cQnqttI7/7HMnenfvw/jxV286/37uIjv+ML797Eap0Pp/ftYpiQpvH+/VTeO9yLz8FP2YEDZgxGZM4KQf3lQUdsfbb/t3Rxt3gg/kCMN5OZobY9sZyTkwttilfurZASXyujVf3AdILqycH95Mx9BHQyHihj+WjjPusSpXlb0lYNJEaoGFCoG9DU8wzqmVCWUfIXyxAu1yQiqktGr/+A6QFQD4f7y9LYo1IIUqAwpr8WzrcsK1ZBlX1FZjUAVhUHlhL0Gn11HjKqigq9E/g1YqENGUIWMXv0H1wGi60d/5qmX0Ez6y2cEl8/o1X9wHSC6vHB3+byuKSxrrWy1hKbN7SLL2//3N4r4gepG2mbxePtH7yPNXDA45Sz+mGyRijR5DhJpdsnvS8zjeszt80yr5QuGWr7diFVTnajE82hcuKxugLI42gFmSmgKdtGV9f97IbII7hF/j0KYi/MvLBB2xcM9n6FIH+1js/37SseG2Bd5BMtfV7I42LcmGi79rGJ3qgmm3WfC6UUi4Wa/mVB5w9bgzW9zbd/azGToSO2J5K7F+MwvKS/QAdsLv/Sr7m26vOBSG5AdcC9uUQ3cvZn3wstnwPaFvRezUAamd5jCWnvk69wWKtiGFWx9TdzaVpWgjq19dfDFLF0FSX5vg9/NC5Xemacja/gJ2VfLEwoW9om7aSFRu4RPiJbkidF9fGLmN3wTsevxlUuoVYWPElaVe5SwMgkFKG5TE7YpeBaxMgmlKGgqP7JYmYRa+YRaFRJqFSbUyifUqphQqyChVj6hVj6hVj6hXk3wX33wX33wXwvBfw2D/xoH/9UH/zUI/msQ/LVLobVv2JqnKMJcPPgKxiv4oT/++/9jjgIE",Symbol:"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",ZapfDingbats:"eJxtmNtu20YQhl+F4FULyMGeD7pz3AY1ChtG7NpFA18w1NomIlECSRcxgrx7SVk7+wOdG8H5OJydf2Z2d5gf9cV+t0v9VK/r+6vXsXlOlbHe28paq229qj/t++m62aXZ4J/m8PRb1z9/baZxefK63Z6eXN5dVMvTCh83u277xr/6kLrnl2XNq7TpXnczuZyabdee98/b2VzM/x4/dd/T5qab2pd6PQ2vaVVfvDRD005puE3Lu7eH1HbN9hTjx4/77/X6y5lcnUmjVzHIVVDicVX/1W/SsO36dLMfu6nb9/X6TAoBD+5euvZbn8axXtuZ36dhPJrVQqgPQoh5hev91LWLkIv94W1Ygq9+aX+tZAx2tfz64284/sblN/rqfLP/mqrbt3FKu7G67Nv9cNgPzZQ2H6rz7bb6vLgZq89pTMO/M/xfEqturJpqSM/d7GJIm2oamk3aNcO3av80O5xh3yyKmm1193ZIT02bqovTKjP+MAf++7zsZvZ3276kYyWWXB0z99S18/PbafPHQ71W4fjn/fxnFO+ZvkrT0LVzTr78qB/+nk38bHM9exgP8zr1z9U7jt6840YW5uSJKcZOCaBBnKgm5mU8MVNYyMwWFvO7Ukagkmgg6sDWQ5yFFqjzUrLEaQ3BEmiwNsMSaZS0vgWfOkPHWQowNeTUc0kumnxZvsgPxlGai6VTGUqAVCTQ6QkWnc77DKEiLktSUBJKqHIQZ86d8gCpHYoiEzMsb1ubYy8vW50DChB5ZhGqrijD0EqUIeiaEHIfCg5Kpuu0ApiToaGPSY0uaQsyr65L2oKi1yFt1PLaQ3lzfXTgXodGoJYzglndSLDMPg1sTPJpQJHJigw0QrGERqD9YhyTOgONQDUyuF1zaxuokc/BW2ztXCMrGZ9WMW1oQZHIXWNBkSCfRZEL5BMUiZw6CzVSFCfUSGZFNjIldoKDkonTKQiJIGzWmFd3BizJJ9SINoLDriOfUCOZS+zg+KGD1qGiLNMLxtJD1/ns00ON6EzyUCM6vbxhoBKaqbG3DFQCNiL1iHccBPV0DHhQH/JW8EW90dkyFKGywCJU0WkVSvSGeiSUODWFFD0HYdPQVoiRgfPMA+/nnRgiAyNYSjpWNQcNSMrtFCUH4ZIRpSCWocFCSuhCEY6hoUClc0WC52BJlCYYLQdhN+hygRRRlo5BKRRLS6oihSqh+ZzzRGG1Mo4Iz1LoP0qsxDGFzk0JE42ji0jCPejomJKCuwil4m5CiRMEUMVSzVLDUstSx1Juc0oVWMpqY295qVltmtWmWW2a1aZZbZrVplltmtWmWW2G1WZYbYbVZlhthtVmWG2G1WZYbYbVZlhtltVmWW2W1WZZbZbVZlltltVmWW2W1QYjQCh7E2aAQHeGhCFgPoNoy8KNb2wxBhmGKBxoUZXlLGsLI6AsftEDHV0wIURVbANLcTKlGGBIKPOAxCmhePCKUwFzAmpDFRQvjA9R06Hq8TONvshgKDCuRAZTXigUxjxNFfKRo3CLhnIJBMFRvMZpqpNBMlQJzGT5WFQMVQI/AikPMIhEU1aDjqJvQwmjSHB05cC9jbYwc5UtAHNLhDw41ha+lEqF4JaH3gmB61SYcqInxTDmQK8v08vjqv4zDf1N0w3Lf4A8/vwPpfK11w=="}
!function(t){t.Courier="Courier",t.CourierBold="Courier-Bold",t.CourierOblique="Courier-Oblique",t.CourierBoldOblique="Courier-BoldOblique",t.Helvetica="Helvetica",t.HelveticaBold="Helvetica-Bold",t.HelveticaOblique="Helvetica-Oblique",t.HelveticaBoldOblique="Helvetica-BoldOblique",t.TimesRoman="Times-Roman",t.TimesRomanBold="Times-Bold",t.TimesRomanItalic="Times-Italic",t.TimesRomanBoldItalic="Times-BoldItalic",t.Symbol="Symbol",t.ZapfDingbats="ZapfDingbats"}(u||(u={}))
var l={},f=function(){function t(){var t=this
this.getWidthOfGlyph=function(e){return t.CharWidths[e]},this.getXAxisKerningForPair=function(e,n){return(t.KernPairXAmounts[e]||{})[n]}}return t.load=function(e){var n=l[e]
if(n)return n
var r=c(h[e]),i=Object.assign(new t,JSON.parse(r))
return i.CharWidths=i.CharMetrics.reduce((function(t,e){return t[e.N]=e.WX,t}),{}),i.KernPairXAmounts=i.KernPairs.reduce((function(t,e){var n=e[0],r=e[1],i=e[2]
return t[n]||(t[n]={}),t[n][r]=i,t}),{}),l[e]=i,i},t}(),d=c("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"),p=JSON.parse(d),g=function(t,e){var n=this
this.canEncodeUnicodeCodePoint=function(t){return t in n.unicodeMappings},this.encodeUnicodeCodePoint=function(t){var e=n.unicodeMappings[t]
if(!e){var r=String.fromCharCode(t),i="0x"+function(t,e,n){for(var r="",i=0,o=4-t.length;i<o;i++)r+="0"
return r+t}(t.toString(16)),o=n.name+' cannot encode "'+r+'" ('+i+")"
throw new Error(o)}return{code:e[0],name:e[1]}},this.name=t,this.supportedCodePoints=Object.keys(e).map(Number).sort((function(t,e){return t-e})),this.unicodeMappings=e},v={Symbol:new g("Symbol",p.symbol),ZapfDingbats:new g("ZapfDingbats",p.zapfdingbats),WinAnsi:new g("WinAnsi",p.win1252)}},8405:function(t){"use strict"
var e={single_source_shortest_paths:function(t,n,r){var i={},o={}
o[n]=0
var a,s,u,c,h,l,f,d=e.PriorityQueue.make()
for(d.push(n,0);!d.empty();)for(u in s=(a=d.pop()).value,c=a.cost,h=t[s]||{})h.hasOwnProperty(u)&&(l=c+h[u],f=o[u],(void 0===o[u]||f>l)&&(o[u]=l,d.push(u,l),i[u]=s))
if(void 0!==r&&void 0===o[r]){var p=["Could not find a path from ",n," to ",r,"."].join("")
throw new Error(p)}return i},extract_shortest_path_from_predecessor_list:function(t,e){for(var n=[],r=e;r;)n.push(r),t[r],r=t[r]
return n.reverse(),n},find_path:function(t,n,r){var i=e.single_source_shortest_paths(t,n,r)
return e.extract_shortest_path_from_predecessor_list(i,r)},PriorityQueue:{make:function(t){var n,r=e.PriorityQueue,i={}
for(n in t=t||{},r)r.hasOwnProperty(n)&&(i[n]=r[n])
return i.queue=[],i.sorter=t.sorter||r.default_sorter,i},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var n={value:t,cost:e}
this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}}
t.exports=e},4220:function(t){"use strict"
t.exports=function(t){for(var e=[],n=t.length,r=0;r<n;r++){var i=t.charCodeAt(r)
if(i>=55296&&i<=56319&&n>r+1){var o=t.charCodeAt(r+1)
o>=56320&&o<=57343&&(i=1024*(i-55296)+o-56320+65536,r+=1)}i<128?e.push(i):i<2048?(e.push(i>>6|192),e.push(63&i|128)):i<55296||i>=57344&&i<65536?(e.push(i>>12|224),e.push(i>>6&63|128),e.push(63&i|128)):i>=65536&&i<=1114111?(e.push(i>>18|240),e.push(i>>12&63|128),e.push(i>>6&63|128),e.push(63&i|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},5721:function(t){function e(t,e,n,r){var i,o=null==(i=r)||"number"==typeof i||"boolean"==typeof i?r:n(r),a=e.get(o)
return void 0===a&&(a=t.call(this,r),e.set(o,a)),a}function n(t,e,n){var r=Array.prototype.slice.call(arguments,3),i=n(r),o=e.get(i)
return void 0===o&&(o=t.apply(this,r),e.set(i,o)),o}function r(t,e,n,r,i){return n.bind(e,t,r,i)}function i(t,i){return r(t,this,1===t.length?e:n,i.cache.create(),i.serializer)}function o(){return JSON.stringify(arguments)}function a(){this.cache=Object.create(null)}a.prototype.has=function(t){return t in this.cache},a.prototype.get=function(t){return this.cache[t]},a.prototype.set=function(t,e){this.cache[t]=e}
var s={create:function(){return new a}}
t.exports=function(t,e){var n=e&&e.cache?e.cache:s,r=e&&e.serializer?e.serializer:o
return(e&&e.strategy?e.strategy:i)(t,{cache:n,serializer:r})},t.exports.strategies={variadic:function(t,e){return r(t,this,n,e.cache.create(),e.serializer)},monadic:function(t,n){return r(t,this,e,n.cache.create(),n.serializer)}}},173:function(t,e,n){"use strict"
n.r(e),n.d(e,{SKELETON_TYPE:function(){return i},SyntaxError:function(){return F},TYPE:function(){return r},createLiteralElement:function(){return m},createNumberElement:function(){return y},isArgumentElement:function(){return s},isDateElement:function(){return c},isDateTimeSkeleton:function(){return v},isLiteralElement:function(){return a},isNumberElement:function(){return u},isNumberSkeleton:function(){return g},isPluralElement:function(){return f},isPoundElement:function(){return d},isSelectElement:function(){return l},isTagElement:function(){return p},isTimeElement:function(){return h},parse:function(){return M},pegParse:function(){return R}})
var r,i,o=n(7480)
function a(t){return t.type===r.literal}function s(t){return t.type===r.argument}function u(t){return t.type===r.number}function c(t){return t.type===r.date}function h(t){return t.type===r.time}function l(t){return t.type===r.select}function f(t){return t.type===r.plural}function d(t){return t.type===r.pound}function p(t){return t.type===r.tag}function g(t){return!(!t||"object"!=typeof t||t.type!==i.number)}function v(t){return!(!t||"object"!=typeof t||t.type!==i.dateTime)}function m(t){return{type:r.literal,value:t}}function y(t,e){return{type:r.number,value:t,style:e}}!function(t){t[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural",t[t.pound=7]="pound",t[t.tag=8]="tag"}(r||(r={})),function(t){t[t.number=0]="number",t[t.dateTime=1]="dateTime"}(i||(i={}))
var b=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,w=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,x=/^(@+)?(\+|#+)?$/g,S=/(\*)(0+)|(#+)(0+)|(0+)/g,C=/^(0+)$/
function T(t){var e={}
return t.replace(x,(function(t,n,r){return"string"!=typeof r?(e.minimumSignificantDigits=n.length,e.maximumSignificantDigits=n.length):"+"===r?e.minimumSignificantDigits=n.length:"#"===n[0]?e.maximumSignificantDigits=n.length:(e.minimumSignificantDigits=n.length,e.maximumSignificantDigits=n.length+("string"==typeof r?r.length:0)),""})),e}function E(t){switch(t){case"sign-auto":return{signDisplay:"auto"}
case"sign-accounting":case"()":return{currencySign:"accounting"}
case"sign-always":case"+!":return{signDisplay:"always"}
case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"}
case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"}
case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"}
case"sign-never":case"+_":return{signDisplay:"never"}}}function k(t){var e
if("E"===t[0]&&"E"===t[1]?(e={notation:"engineering"},t=t.slice(2)):"E"===t[0]&&(e={notation:"scientific"},t=t.slice(1)),e){var n=t.slice(0,2)
if("+!"===n?(e.signDisplay="always",t=t.slice(2)):"+?"===n&&(e.signDisplay="exceptZero",t=t.slice(2)),!C.test(t))throw new Error("Malformed concise eng/scientific notation")
e.minimumIntegerDigits=t.length}return e}function A(t){return E(t)||{}}function P(t){for(var e={},n=0,r=t;n<r.length;n++){var i=r[n]
switch(i.stem){case"percent":case"%":e.style="percent"
continue
case"%x100":e.style="percent",e.scale=100
continue
case"currency":e.style="currency",e.currency=i.options[0]
continue
case"group-off":case",_":e.useGrouping=!1
continue
case"precision-integer":case".":e.maximumFractionDigits=0
continue
case"measure-unit":case"unit":e.style="unit",e.unit=i.options[0].replace(/^(.*?)-/,"")
continue
case"compact-short":case"K":e.notation="compact",e.compactDisplay="short"
continue
case"compact-long":case"KK":e.notation="compact",e.compactDisplay="long"
continue
case"scientific":e=(0,o.pi)((0,o.pi)((0,o.pi)({},e),{notation:"scientific"}),i.options.reduce((function(t,e){return(0,o.pi)((0,o.pi)({},t),A(e))}),{}))
continue
case"engineering":e=(0,o.pi)((0,o.pi)((0,o.pi)({},e),{notation:"engineering"}),i.options.reduce((function(t,e){return(0,o.pi)((0,o.pi)({},t),A(e))}),{}))
continue
case"notation-simple":e.notation="standard"
continue
case"unit-width-narrow":e.currencyDisplay="narrowSymbol",e.unitDisplay="narrow"
continue
case"unit-width-short":e.currencyDisplay="code",e.unitDisplay="short"
continue
case"unit-width-full-name":e.currencyDisplay="name",e.unitDisplay="long"
continue
case"unit-width-iso-code":e.currencyDisplay="symbol"
continue
case"scale":e.scale=parseFloat(i.options[0])
continue
case"integer-width":if(i.options.length>1)throw new RangeError("integer-width stems only accept a single optional option")
i.options[0].replace(S,(function(t,n,r,i,o,a){if(n)e.minimumIntegerDigits=r.length
else{if(i&&o)throw new Error("We currently do not support maximum integer digits")
if(a)throw new Error("We currently do not support exact integer digits")}return""}))
continue}if(C.test(i.stem))e.minimumIntegerDigits=i.stem.length
else if(w.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option")
i.stem.replace(w,(function(t,n,r,i,o,a){return"*"===r?e.minimumFractionDigits=n.length:i&&"#"===i[0]?e.maximumFractionDigits=i.length:o&&a?(e.minimumFractionDigits=o.length,e.maximumFractionDigits=o.length+a.length):(e.minimumFractionDigits=n.length,e.maximumFractionDigits=n.length),""})),i.options.length&&(e=(0,o.pi)((0,o.pi)({},e),T(i.options[0])))}else if(x.test(i.stem))e=(0,o.pi)((0,o.pi)({},e),T(i.stem))
else{var a=E(i.stem)
a&&(e=(0,o.pi)((0,o.pi)({},e),a))
var s=k(i.stem)
s&&(e=(0,o.pi)((0,o.pi)({},e),s))}}return e}var F=function(t){function e(n,r,i,o){var a=t.call(this)||this
return a.message=n,a.expected=r,a.found=i,a.location=o,a.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(a,e),a}return(0,o.ZT)(e,t),e.buildMessage=function(t,e){function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function r(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function i(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function o(t){switch(t.type){case"literal":return'"'+r(t.text)+'"'
case"class":var e=t.parts.map((function(t){return Array.isArray(t)?i(t[0])+"-"+i(t[1]):i(t)}))
return"["+(t.inverted?"^":"")+e+"]"
case"any":return"any character"
case"end":return"end of input"
case"other":return t.description}}return"Expected "+function(t){var e,n,r=t.map(o)
if(r.sort(),r.length>0){for(e=1,n=1;e<r.length;e++)r[e-1]!==r[e]&&(r[n]=r[e],n++)
r.length=n}switch(r.length){case 1:return r[0]
case 2:return r[0]+" or "+r[1]
default:return r.slice(0,-1).join(", ")+", or "+r[r.length-1]}}(t)+" but "+((a=e)?'"'+r(a)+'"':"end of input")+" found."
var a},e}(Error),R=function(t,e){e=void 0!==e?e:{}
var n,a={},s={start:Zt},u=Zt,c="<",h=Ut("<",!1),l=function(t){return t.join("")},f=Ut("#",!1),d=Gt("tagElement"),p=Ut("/>",!1),g=Ut(">",!1),v=Ut("</",!1),m=Gt("argumentElement"),y="{",w=Ut("{",!1),x="}",S=Ut("}",!1),C=Gt("numberSkeletonId"),T=/^['\/{}]/,E=jt(["'","/","{","}"],!1,!1),k={type:"any"},A=Gt("numberSkeletonTokenOption"),R=Ut("/",!1),O=Gt("numberSkeletonToken"),D="::",M=Ut("::",!1),I=function(t){return me.pop(),t.replace(/\s*$/,"")},N=",",_=Ut(",",!1),B="number",L=Ut("number",!1),U=function(t,e,n){return(0,o.pi)({type:"number"===e?r.number:"date"===e?r.date:r.time,style:n&&n[2],value:t},be())},j="'",G=Ut("'",!1),z=/^[^']/,H=jt(["'"],!0,!1),V=/^[^a-zA-Z'{}]/,Z=jt([["a","z"],["A","Z"],"'","{","}"],!0,!1),W=/^[a-zA-Z]/,q=jt([["a","z"],["A","Z"]],!1,!1),K="date",X=Ut("date",!1),Y="time",J=Ut("time",!1),Q="plural",$=Ut("plural",!1),tt="selectordinal",et=Ut("selectordinal",!1),nt="offset:",rt=Ut("offset:",!1),it="select",ot=Ut("select",!1),at=Ut("=",!1),st=Gt("whitespace"),ut=/^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,ct=jt([["\t","\r"]," ",""," "," ",[" "," "],"\u2028","\u2029"," "," ","　"],!1,!1),ht=Gt("syntax pattern"),lt=/^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,ft=jt([["!","/"],[":","@"],["[","^"],"`",["{","~"],["¡","§"],"©","«","¬","®","°","±","¶","»","¿","×","÷",["‐","‧"],["‰","‾"],["⁁","⁓"],["⁕","⁞"],["←","⑟"],["─","❵"],["➔","⯿"],["⸀","⹿"],["、","〃"],["〈","〠"],"〰","﴾","﴿","﹅","﹆"],!1,!1),dt=Gt("optional whitespace"),pt=Gt("number"),gt=Ut("-",!1),vt=(Gt("apostrophe"),Gt("double apostrophes")),mt="''",yt=Ut("''",!1),bt=Ut("\n",!1),wt=Gt("argNameOrNumber"),xt=Gt("validTag"),St=Gt("argNumber"),Ct=Ut("0",!1),Tt=/^[1-9]/,Et=jt([["1","9"]],!1,!1),kt=/^[0-9]/,At=jt([["0","9"]],!1,!1),Pt=Gt("argName"),Ft=Gt("tagName"),Rt=0,Ot=0,Dt=[{line:1,column:1}],Mt=0,It=[],Nt=0
if(void 0!==e.startRule){if(!(e.startRule in s))throw new Error("Can't start parsing from rule \""+e.startRule+'".')
u=s[e.startRule]}function _t(){return t.substring(Ot,Rt)}function Bt(){return Ht(Ot,Rt)}function Lt(t,e){throw function(t,e){return new F(t,[],"",e)}(t,e=void 0!==e?e:Ht(Ot,Rt))}function Ut(t,e){return{type:"literal",text:t,ignoreCase:e}}function jt(t,e,n){return{type:"class",parts:t,inverted:e,ignoreCase:n}}function Gt(t){return{type:"other",description:t}}function zt(e){var n,r=Dt[e]
if(r)return r
for(n=e-1;!Dt[n];)n--
for(r={line:(r=Dt[n]).line,column:r.column};n<e;)10===t.charCodeAt(n)?(r.line++,r.column=1):r.column++,n++
return Dt[e]=r,r}function Ht(t,e){var n=zt(t),r=zt(e)
return{start:{offset:t,line:n.line,column:n.column},end:{offset:e,line:r.line,column:r.column}}}function Vt(t){Rt<Mt||(Rt>Mt&&(Mt=Rt,It=[]),It.push(t))}function Zt(){return Wt()}function Wt(){var t,e
for(t=[],e=qt();e!==a;)t.push(e),e=qt()
return t}function qt(){var e,n
return e=Rt,Ot=Rt,(Ce?a:void 0)!==a?(n=function(){var t,e,n,i,s,u,c
return Nt++,(t=Yt())===a&&(t=Rt,(e=Jt())!==a&&(n=Wt())!==a&&(i=Qt())!==a?(Ot=t,u=n,(s=e)!==(c=i)&&Lt('Mismatch tag "'+s+'" !== "'+c+'"',Bt()),t=e=(0,o.pi)({type:r.tag,value:s,children:u},be())):(Rt=t,t=a)),Nt--,t===a&&(e=a,0===Nt&&Vt(d)),t}(),n!==a?(Ot=e,e=n):(Rt=e,e=a)):(Rt=e,e=a),e===a&&(e=function(){var t,e,n
return t=Rt,(e=Kt())!==a&&(Ot=t,n=e,e=(0,o.pi)({type:r.literal,value:n},be())),e}())===a&&(e=function(){var e,n,i,s,u
return Nt++,e=Rt,123===t.charCodeAt(Rt)?(n=y,Rt++):(n=a,0===Nt&&Vt(w)),n!==a&&ue()!==a&&(i=de())!==a&&ue()!==a?(125===t.charCodeAt(Rt)?(s=x,Rt++):(s=a,0===Nt&&Vt(S)),s!==a?(Ot=e,u=i,e=n=(0,o.pi)({type:r.argument,value:u},be())):(Rt=e,e=a)):(Rt=e,e=a),Nt--,e===a&&(n=a,0===Nt&&Vt(m)),e}())===a&&(e=function(){var e
return e=function(){var e,n,r,s,u,c,h,l,f
return e=Rt,123===t.charCodeAt(Rt)?(n=y,Rt++):(n=a,0===Nt&&Vt(w)),n!==a&&ue()!==a&&(r=de())!==a&&ue()!==a?(44===t.charCodeAt(Rt)?(s=N,Rt++):(s=a,0===Nt&&Vt(_)),s!==a&&ue()!==a?(t.substr(Rt,6)===B?(u=B,Rt+=6):(u=a,0===Nt&&Vt(L)),u!==a&&ue()!==a?(c=Rt,44===t.charCodeAt(Rt)?(h=N,Rt++):(h=a,0===Nt&&Vt(_)),h!==a&&(l=ue())!==a?(f=function(){var e,n,r
return e=Rt,t.substr(Rt,2)===D?(n=D,Rt+=2):(n=a,0===Nt&&Vt(M)),n!==a?(r=function(){var t,e,n,r
if(t=Rt,e=[],(n=ee())!==a)for(;n!==a;)e.push(n),n=ee()
else e=a
return e!==a&&(Ot=t,r=e,e=(0,o.pi)({type:i.number,tokens:r,parsedOptions:Te?P(r):{}},be())),e}(),r!==a?(Ot=e,e=n=r):(Rt=e,e=a)):(Rt=e,e=a),e===a&&(e=Rt,Ot=Rt,me.push("numberArgStyle"),(n=(n=!0)?void 0:a)!==a&&(r=Kt())!==a?(Ot=e,e=n=I(r)):(Rt=e,e=a)),e}(),f!==a?c=h=[h,l,f]:(Rt=c,c=a)):(Rt=c,c=a),c===a&&(c=null),c!==a&&(h=ue())!==a?(125===t.charCodeAt(Rt)?(l=x,Rt++):(l=a,0===Nt&&Vt(S)),l!==a?(Ot=e,e=n=U(r,u,c)):(Rt=e,e=a)):(Rt=e,e=a)):(Rt=e,e=a)):(Rt=e,e=a)):(Rt=e,e=a),e}(),e===a&&(e=function(){var e,n,r,s,u,c,h,l,f
return e=Rt,123===t.charCodeAt(Rt)?(n=y,Rt++):(n=a,0===Nt&&Vt(w)),n!==a&&ue()!==a&&(r=de())!==a&&ue()!==a?(44===t.charCodeAt(Rt)?(s=N,Rt++):(s=a,0===Nt&&Vt(_)),s!==a&&ue()!==a?(t.substr(Rt,4)===K?(u=K,Rt+=4):(u=a,0===Nt&&Vt(X)),u===a&&(t.substr(Rt,4)===Y?(u=Y,Rt+=4):(u=a,0===Nt&&Vt(J))),u!==a&&ue()!==a?(c=Rt,44===t.charCodeAt(Rt)?(h=N,Rt++):(h=a,0===Nt&&Vt(_)),h!==a&&(l=ue())!==a?(f=function(){var e,n,r
return e=Rt,t.substr(Rt,2)===D?(n=D,Rt+=2):(n=a,0===Nt&&Vt(M)),n!==a?(r=function(){var e,n,r,s,u,c,h
if(e=Rt,n=Rt,r=[],(s=ne())===a&&(s=re()),s!==a)for(;s!==a;)r.push(s),(s=ne())===a&&(s=re())
else r=a
return(n=r!==a?t.substring(n,Rt):r)!==a&&(Ot=e,u=n,n=(0,o.pi)({type:i.dateTime,pattern:u,parsedOptions:Te?(c=u,h={},c.replace(b,(function(t){var e=t.length
switch(t[0]){case"G":h.era=4===e?"long":5===e?"narrow":"short"
break
case"y":h.year=2===e?"2-digit":"numeric"
break
case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead")
case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported")
case"M":case"L":h.month=["numeric","2-digit","short","long","narrow"][e-1]
break
case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported")
case"d":h.day=["numeric","2-digit"][e-1]
break
case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead")
case"E":h.weekday=4===e?"short":5===e?"narrow":"short"
break
case"e":if(e<4)throw new RangeError("`e..eee` (weekday) patterns are not supported")
h.weekday=["short","long","narrow","short"][e-4]
break
case"c":if(e<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported")
h.weekday=["short","long","narrow","short"][e-4]
break
case"a":h.hour12=!0
break
case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead")
case"h":h.hourCycle="h12",h.hour=["numeric","2-digit"][e-1]
break
case"H":h.hourCycle="h23",h.hour=["numeric","2-digit"][e-1]
break
case"K":h.hourCycle="h11",h.hour=["numeric","2-digit"][e-1]
break
case"k":h.hourCycle="h24",h.hour=["numeric","2-digit"][e-1]
break
case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead")
case"m":h.minute=["numeric","2-digit"][e-1]
break
case"s":h.second=["numeric","2-digit"][e-1]
break
case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead")
case"z":h.timeZoneName=e<4?"short":"long"
break
case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),h):{}},be())),n}(),r!==a?(Ot=e,e=n=r):(Rt=e,e=a)):(Rt=e,e=a),e===a&&(e=Rt,Ot=Rt,me.push("dateOrTimeArgStyle"),(n=(n=!0)?void 0:a)!==a&&(r=Kt())!==a?(Ot=e,e=n=I(r)):(Rt=e,e=a)),e}(),f!==a?c=h=[h,l,f]:(Rt=c,c=a)):(Rt=c,c=a),c===a&&(c=null),c!==a&&(h=ue())!==a?(125===t.charCodeAt(Rt)?(l=x,Rt++):(l=a,0===Nt&&Vt(S)),l!==a?(Ot=e,e=n=U(r,u,c)):(Rt=e,e=a)):(Rt=e,e=a)):(Rt=e,e=a)):(Rt=e,e=a)):(Rt=e,e=a),e}()),e}(),e===a&&(e=function(){var e,n,i,s,u,c,h,l,f,d,p
if(e=Rt,123===t.charCodeAt(Rt)?(n=y,Rt++):(n=a,0===Nt&&Vt(w)),n!==a)if(ue()!==a)if((i=de())!==a)if(ue()!==a)if(44===t.charCodeAt(Rt)?(s=N,Rt++):(s=a,0===Nt&&Vt(_)),s!==a)if(ue()!==a)if(t.substr(Rt,6)===Q?(u=Q,Rt+=6):(u=a,0===Nt&&Vt($)),u===a&&(t.substr(Rt,13)===tt?(u=tt,Rt+=13):(u=a,0===Nt&&Vt(et))),u!==a)if(ue()!==a)if(44===t.charCodeAt(Rt)?(c=N,Rt++):(c=a,0===Nt&&Vt(_)),c!==a)if(ue()!==a)if(h=Rt,t.substr(Rt,7)===nt?(l=nt,Rt+=7):(l=a,0===Nt&&Vt(rt)),l!==a&&(f=ue())!==a&&(d=ce())!==a?h=l=[l,f,d]:(Rt=h,h=a),h===a&&(h=null),h!==a)if((l=ue())!==a){if(f=[],(d=oe())!==a)for(;d!==a;)f.push(d),d=oe()
else f=a
f!==a&&(d=ue())!==a?(125===t.charCodeAt(Rt)?(p=x,Rt++):(p=a,0===Nt&&Vt(S)),p!==a?(Ot=e,n=function(t,e,n,i){return(0,o.pi)({type:r.plural,pluralType:"plural"===e?"cardinal":"ordinal",value:t,offset:n?n[2]:0,options:i.reduce((function(t,e){var n=e.id,r=e.value,i=e.location
return n in t&&Lt('Duplicate option "'+n+'" in plural element: "'+_t()+'"',Bt()),t[n]={value:r,location:i},t}),{})},be())}(i,u,h,f),e=n):(Rt=e,e=a)):(Rt=e,e=a)}else Rt=e,e=a
else Rt=e,e=a
else Rt=e,e=a
else Rt=e,e=a
else Rt=e,e=a
else Rt=e,e=a
else Rt=e,e=a
else Rt=e,e=a
else Rt=e,e=a
else Rt=e,e=a
else Rt=e,e=a
else Rt=e,e=a
return e}(),e===a&&(e=function(){var e,n,i,s,u,c,h,l,f
if(e=Rt,123===t.charCodeAt(Rt)?(n=y,Rt++):(n=a,0===Nt&&Vt(w)),n!==a)if(ue()!==a)if((i=de())!==a)if(ue()!==a)if(44===t.charCodeAt(Rt)?(s=N,Rt++):(s=a,0===Nt&&Vt(_)),s!==a)if(ue()!==a)if(t.substr(Rt,6)===it?(u=it,Rt+=6):(u=a,0===Nt&&Vt(ot)),u!==a)if(ue()!==a)if(44===t.charCodeAt(Rt)?(c=N,Rt++):(c=a,0===Nt&&Vt(_)),c!==a)if(ue()!==a){if(h=[],(l=ie())!==a)for(;l!==a;)h.push(l),l=ie()
else h=a
h!==a&&(l=ue())!==a?(125===t.charCodeAt(Rt)?(f=x,Rt++):(f=a,0===Nt&&Vt(S)),f!==a?(Ot=e,n=function(t,e){return(0,o.pi)({type:r.select,value:t,options:e.reduce((function(t,e){var n=e.id,r=e.value,i=e.location
return n in t&&Lt('Duplicate option "'+n+'" in select element: "'+_t()+'"',Bt()),t[n]={value:r,location:i},t}),{})},be())}(i,h),e=n):(Rt=e,e=a)):(Rt=e,e=a)}else Rt=e,e=a
else Rt=e,e=a
else Rt=e,e=a
else Rt=e,e=a
else Rt=e,e=a
else Rt=e,e=a
else Rt=e,e=a
else Rt=e,e=a
else Rt=e,e=a
else Rt=e,e=a
return e}(),e===a&&(e=function(){var e,n
return e=Rt,35===t.charCodeAt(Rt)?(n="#",Rt++):(n=a,0===Nt&&Vt(f)),n!==a&&(Ot=e,n=(0,o.pi)({type:r.pound},be())),n}())))),e}function Kt(){var e,n,r,i
if(e=Rt,Ot=Rt,(n=(n=Ce)?void 0:a)!==a){if(r=[],(i=he())===a&&(i=le())===a&&(i=fe())===a&&(60===t.charCodeAt(Rt)?(i=c,Rt++):(i=a,0===Nt&&Vt(h))),i!==a)for(;i!==a;)r.push(i),(i=he())===a&&(i=le())===a&&(i=fe())===a&&(60===t.charCodeAt(Rt)?(i=c,Rt++):(i=a,0===Nt&&Vt(h)))
else r=a
r!==a?(Ot=e,e=n=l(r)):(Rt=e,e=a)}else Rt=e,e=a
if(e===a){if(e=Rt,n=[],(r=he())===a&&(r=le())===a&&(r=fe())===a&&(r=Xt()),r!==a)for(;r!==a;)n.push(r),(r=he())===a&&(r=le())===a&&(r=fe())===a&&(r=Xt())
else n=a
n!==a&&(Ot=e,n=l(n)),e=n}return e}function Xt(){var e,n,r
return e=Rt,n=Rt,Nt++,(r=Jt())===a&&(r=Qt())===a&&(r=Yt()),Nt--,r===a?n=void 0:(Rt=n,n=a),n!==a?(60===t.charCodeAt(Rt)?(r=c,Rt++):(r=a,0===Nt&&Vt(h)),r!==a?(Ot=e,e=n="<"):(Rt=e,e=a)):(Rt=e,e=a),e}function Yt(){var e,n,i,s,u,l,f
return e=Rt,n=Rt,60===t.charCodeAt(Rt)?(i=c,Rt++):(i=a,0===Nt&&Vt(h)),i!==a&&(s=pe())!==a&&(u=ue())!==a?("/>"===t.substr(Rt,2)?(l="/>",Rt+=2):(l=a,0===Nt&&Vt(p)),l!==a?n=i=[i,s,u,l]:(Rt=n,n=a)):(Rt=n,n=a),n!==a&&(Ot=e,f=n,n=(0,o.pi)({type:r.literal,value:f.join("")},be())),n}function Jt(){var e,n,r,i
return e=Rt,60===t.charCodeAt(Rt)?(n=c,Rt++):(n=a,0===Nt&&Vt(h)),n!==a&&(r=pe())!==a?(62===t.charCodeAt(Rt)?(i=">",Rt++):(i=a,0===Nt&&Vt(g)),i!==a?(Ot=e,e=n=r):(Rt=e,e=a)):(Rt=e,e=a),e}function Qt(){var e,n,r,i
return e=Rt,"</"===t.substr(Rt,2)?(n="</",Rt+=2):(n=a,0===Nt&&Vt(v)),n!==a&&(r=pe())!==a?(62===t.charCodeAt(Rt)?(i=">",Rt++):(i=a,0===Nt&&Vt(g)),i!==a?(Ot=e,e=n=r):(Rt=e,e=a)):(Rt=e,e=a),e}function $t(){var e,n,r,i,o
if(Nt++,e=Rt,n=[],r=Rt,i=Rt,Nt++,(o=ae())===a&&(T.test(t.charAt(Rt))?(o=t.charAt(Rt),Rt++):(o=a,0===Nt&&Vt(E))),Nt--,o===a?i=void 0:(Rt=i,i=a),i!==a?(t.length>Rt?(o=t.charAt(Rt),Rt++):(o=a,0===Nt&&Vt(k)),o!==a?r=i=[i,o]:(Rt=r,r=a)):(Rt=r,r=a),r!==a)for(;r!==a;)n.push(r),r=Rt,i=Rt,Nt++,(o=ae())===a&&(T.test(t.charAt(Rt))?(o=t.charAt(Rt),Rt++):(o=a,0===Nt&&Vt(E))),Nt--,o===a?i=void 0:(Rt=i,i=a),i!==a?(t.length>Rt?(o=t.charAt(Rt),Rt++):(o=a,0===Nt&&Vt(k)),o!==a?r=i=[i,o]:(Rt=r,r=a)):(Rt=r,r=a)
else n=a
return e=n!==a?t.substring(e,Rt):n,Nt--,e===a&&(n=a,0===Nt&&Vt(C)),e}function te(){var e,n,r
return Nt++,e=Rt,47===t.charCodeAt(Rt)?(n="/",Rt++):(n=a,0===Nt&&Vt(R)),n!==a&&(r=$t())!==a?(Ot=e,e=n=r):(Rt=e,e=a),Nt--,e===a&&(n=a,0===Nt&&Vt(A)),e}function ee(){var t,e,n,r,i
if(Nt++,t=Rt,(e=ue())!==a)if((n=$t())!==a){for(r=[],i=te();i!==a;)r.push(i),i=te()
r!==a?(Ot=t,e=function(t,e){return{stem:t,options:e}}(n,r),t=e):(Rt=t,t=a)}else Rt=t,t=a
else Rt=t,t=a
return Nt--,t===a&&(e=a,0===Nt&&Vt(O)),t}function ne(){var e,n,r,i
if(e=Rt,39===t.charCodeAt(Rt)?(n=j,Rt++):(n=a,0===Nt&&Vt(G)),n!==a){if(r=[],(i=he())===a&&(z.test(t.charAt(Rt))?(i=t.charAt(Rt),Rt++):(i=a,0===Nt&&Vt(H))),i!==a)for(;i!==a;)r.push(i),(i=he())===a&&(z.test(t.charAt(Rt))?(i=t.charAt(Rt),Rt++):(i=a,0===Nt&&Vt(H)))
else r=a
r!==a?(39===t.charCodeAt(Rt)?(i=j,Rt++):(i=a,0===Nt&&Vt(G)),i!==a?e=n=[n,r,i]:(Rt=e,e=a)):(Rt=e,e=a)}else Rt=e,e=a
if(e===a)if(e=[],(n=he())===a&&(V.test(t.charAt(Rt))?(n=t.charAt(Rt),Rt++):(n=a,0===Nt&&Vt(Z))),n!==a)for(;n!==a;)e.push(n),(n=he())===a&&(V.test(t.charAt(Rt))?(n=t.charAt(Rt),Rt++):(n=a,0===Nt&&Vt(Z)))
else e=a
return e}function re(){var e,n
if(e=[],W.test(t.charAt(Rt))?(n=t.charAt(Rt),Rt++):(n=a,0===Nt&&Vt(q)),n!==a)for(;n!==a;)e.push(n),W.test(t.charAt(Rt))?(n=t.charAt(Rt),Rt++):(n=a,0===Nt&&Vt(q))
else e=a
return e}function ie(){var e,n,r,i,s,u,c
return e=Rt,ue()!==a&&(n=ve())!==a&&ue()!==a?(123===t.charCodeAt(Rt)?(r=y,Rt++):(r=a,0===Nt&&Vt(w)),r!==a?(Ot=Rt,me.push("select"),void 0!==a&&(i=Wt())!==a?(125===t.charCodeAt(Rt)?(s=x,Rt++):(s=a,0===Nt&&Vt(S)),s!==a?(Ot=e,u=n,c=i,me.pop(),e=(0,o.pi)({id:u,value:c},be())):(Rt=e,e=a)):(Rt=e,e=a)):(Rt=e,e=a)):(Rt=e,e=a),e}function oe(){var e,n,r,i,s,u,c
return e=Rt,ue()!==a?(n=function(){var e,n,r,i
return e=Rt,n=Rt,61===t.charCodeAt(Rt)?(r="=",Rt++):(r=a,0===Nt&&Vt(at)),r!==a&&(i=ce())!==a?n=r=[r,i]:(Rt=n,n=a),(e=n!==a?t.substring(e,Rt):n)===a&&(e=ve()),e}(),n!==a&&ue()!==a?(123===t.charCodeAt(Rt)?(r=y,Rt++):(r=a,0===Nt&&Vt(w)),r!==a?(Ot=Rt,me.push("plural"),void 0!==a&&(i=Wt())!==a?(125===t.charCodeAt(Rt)?(s=x,Rt++):(s=a,0===Nt&&Vt(S)),s!==a?(Ot=e,u=n,c=i,me.pop(),e=(0,o.pi)({id:u,value:c},be())):(Rt=e,e=a)):(Rt=e,e=a)):(Rt=e,e=a)):(Rt=e,e=a)):(Rt=e,e=a),e}function ae(){var e
return Nt++,ut.test(t.charAt(Rt))?(e=t.charAt(Rt),Rt++):(e=a,0===Nt&&Vt(ct)),Nt--,e===a&&0===Nt&&Vt(st),e}function se(){var e
return Nt++,lt.test(t.charAt(Rt))?(e=t.charAt(Rt),Rt++):(e=a,0===Nt&&Vt(ft)),Nt--,e===a&&0===Nt&&Vt(ht),e}function ue(){var e,n,r
for(Nt++,e=Rt,n=[],r=ae();r!==a;)n.push(r),r=ae()
return e=n!==a?t.substring(e,Rt):n,Nt--,e===a&&(n=a,0===Nt&&Vt(dt)),e}function ce(){var e,n,r,i
return Nt++,e=Rt,45===t.charCodeAt(Rt)?(n="-",Rt++):(n=a,0===Nt&&Vt(gt)),n===a&&(n=null),n!==a&&(r=ge())!==a?(Ot=e,e=n=(i=r)?n?-i:i:0):(Rt=e,e=a),Nt--,e===a&&(n=a,0===Nt&&Vt(pt)),e}function he(){var e,n
return Nt++,e=Rt,t.substr(Rt,2)===mt?(n=mt,Rt+=2):(n=a,0===Nt&&Vt(yt)),n!==a&&(Ot=e,n="'"),Nt--,(e=n)===a&&(n=a,0===Nt&&Vt(vt)),e}function le(){var e,n,r,i,o,s
if(e=Rt,39===t.charCodeAt(Rt)?(n=j,Rt++):(n=a,0===Nt&&Vt(G)),n!==a)if(r=function(){var e,n,r,i,o
return e=Rt,n=Rt,t.length>Rt?(r=t.charAt(Rt),Rt++):(r=a,0===Nt&&Vt(k)),r!==a?(Ot=Rt,(i=(i="<"===(o=r)||">"===o||"{"===o||"}"===o||ye()&&"#"===o)?void 0:a)!==a?n=r=[r,i]:(Rt=n,n=a)):(Rt=n,n=a),n!==a?t.substring(e,Rt):n}(),r!==a){for(i=Rt,o=[],t.substr(Rt,2)===mt?(s=mt,Rt+=2):(s=a,0===Nt&&Vt(yt)),s===a&&(z.test(t.charAt(Rt))?(s=t.charAt(Rt),Rt++):(s=a,0===Nt&&Vt(H)));s!==a;)o.push(s),t.substr(Rt,2)===mt?(s=mt,Rt+=2):(s=a,0===Nt&&Vt(yt)),s===a&&(z.test(t.charAt(Rt))?(s=t.charAt(Rt),Rt++):(s=a,0===Nt&&Vt(H)));(i=o!==a?t.substring(i,Rt):o)!==a?(39===t.charCodeAt(Rt)?(o=j,Rt++):(o=a,0===Nt&&Vt(G)),o===a&&(o=null),o!==a?(Ot=e,e=n=r+i.replace("''","'")):(Rt=e,e=a)):(Rt=e,e=a)}else Rt=e,e=a
else Rt=e,e=a
return e}function fe(){var e,n,r,i,o
return e=Rt,n=Rt,t.length>Rt?(r=t.charAt(Rt),Rt++):(r=a,0===Nt&&Vt(k)),r!==a?(Ot=Rt,(i=(i=!("<"===(o=r)||"{"===o||ye()&&"#"===o||me.length>1&&"}"===o))?void 0:a)!==a?n=r=[r,i]:(Rt=n,n=a)):(Rt=n,n=a),n===a&&(10===t.charCodeAt(Rt)?(n="\n",Rt++):(n=a,0===Nt&&Vt(bt))),n!==a?t.substring(e,Rt):n}function de(){var e,n
return Nt++,e=Rt,(n=ge())===a&&(n=ve()),e=n!==a?t.substring(e,Rt):n,Nt--,e===a&&(n=a,0===Nt&&Vt(wt)),e}function pe(){var e,n
return Nt++,e=Rt,(n=ge())===a&&(n=function(){var e,n,r,i,o
if(Nt++,e=Rt,n=[],45===t.charCodeAt(Rt)?(r="-",Rt++):(r=a,0===Nt&&Vt(gt)),r===a&&(r=Rt,i=Rt,Nt++,(o=ae())===a&&(o=se()),Nt--,o===a?i=void 0:(Rt=i,i=a),i!==a?(t.length>Rt?(o=t.charAt(Rt),Rt++):(o=a,0===Nt&&Vt(k)),o!==a?r=i=[i,o]:(Rt=r,r=a)):(Rt=r,r=a)),r!==a)for(;r!==a;)n.push(r),45===t.charCodeAt(Rt)?(r="-",Rt++):(r=a,0===Nt&&Vt(gt)),r===a&&(r=Rt,i=Rt,Nt++,(o=ae())===a&&(o=se()),Nt--,o===a?i=void 0:(Rt=i,i=a),i!==a?(t.length>Rt?(o=t.charAt(Rt),Rt++):(o=a,0===Nt&&Vt(k)),o!==a?r=i=[i,o]:(Rt=r,r=a)):(Rt=r,r=a))
else n=a
return e=n!==a?t.substring(e,Rt):n,Nt--,e===a&&(n=a,0===Nt&&Vt(Ft)),e}()),e=n!==a?t.substring(e,Rt):n,Nt--,e===a&&(n=a,0===Nt&&Vt(xt)),e}function ge(){var e,n,r,i,o
if(Nt++,e=Rt,48===t.charCodeAt(Rt)?(n="0",Rt++):(n=a,0===Nt&&Vt(Ct)),n!==a&&(Ot=e,n=0),(e=n)===a){if(e=Rt,n=Rt,Tt.test(t.charAt(Rt))?(r=t.charAt(Rt),Rt++):(r=a,0===Nt&&Vt(Et)),r!==a){for(i=[],kt.test(t.charAt(Rt))?(o=t.charAt(Rt),Rt++):(o=a,0===Nt&&Vt(At));o!==a;)i.push(o),kt.test(t.charAt(Rt))?(o=t.charAt(Rt),Rt++):(o=a,0===Nt&&Vt(At))
i!==a?n=r=[r,i]:(Rt=n,n=a)}else Rt=n,n=a
n!==a&&(Ot=e,n=parseInt(n.join(""),10)),e=n}return Nt--,e===a&&(n=a,0===Nt&&Vt(St)),e}function ve(){var e,n,r,i,o
if(Nt++,e=Rt,n=[],r=Rt,i=Rt,Nt++,(o=ae())===a&&(o=se()),Nt--,o===a?i=void 0:(Rt=i,i=a),i!==a?(t.length>Rt?(o=t.charAt(Rt),Rt++):(o=a,0===Nt&&Vt(k)),o!==a?r=i=[i,o]:(Rt=r,r=a)):(Rt=r,r=a),r!==a)for(;r!==a;)n.push(r),r=Rt,i=Rt,Nt++,(o=ae())===a&&(o=se()),Nt--,o===a?i=void 0:(Rt=i,i=a),i!==a?(t.length>Rt?(o=t.charAt(Rt),Rt++):(o=a,0===Nt&&Vt(k)),o!==a?r=i=[i,o]:(Rt=r,r=a)):(Rt=r,r=a)
else n=a
return e=n!==a?t.substring(e,Rt):n,Nt--,e===a&&(n=a,0===Nt&&Vt(Pt)),e}var me=["root"]
function ye(){return"plural"===me[me.length-1]}function be(){return e&&e.captureLocation?{location:Bt()}:{}}var we,xe,Se,Ce=e&&e.ignoreTag,Te=e&&e.shouldParseSkeleton
if((n=u())!==a&&Rt===t.length)return n
throw n!==a&&Rt<t.length&&Vt({type:"end"}),we=It,xe=Mt<t.length?t.charAt(Mt):null,Se=Mt<t.length?Ht(Mt,Mt+1):Ht(Mt,Mt),new F(F.buildMessage(we,xe),we,xe,Se)},O=/(^|[^\\])#/g
function D(t){t.forEach((function(t){(f(t)||l(t))&&Object.keys(t.options).forEach((function(e){for(var n,r=t.options[e],i=-1,s=void 0,u=0;u<r.value.length;u++){var c=r.value[u]
if(a(c)&&O.test(c.value)){i=u,s=c
break}}if(s){var h=s.value.replace(O,"$1{"+t.value+", number}"),l=R(h);(n=r.value).splice.apply(n,(0,o.ev)([i,1],l))}D(r.value)}))}))}function M(t,e){e=(0,o.pi)({normalizeHashtagInPlural:!0,shouldParseSkeleton:!0},e||{})
var n=R(t,e)
return e.normalizeHashtagInPlural&&D(n),n}},5543:function(t,e,n){"use strict"
n.r(e),n.d(e,{ErrorCode:function(){return dt},FormatError:function(){return mt},IntlMessageFormat:function(){return Tt},InvalidValueError:function(){return yt},InvalidValueTypeError:function(){return bt},MissingValueError:function(){return wt},PART_TYPE:function(){return vt},default:function(){return Et},formatToParts:function(){return St},isFormatXMLElementFn:function(){return xt}})
var r,i,o,a=n(7480)
function s(t){return t.type===i.literal}function u(t){return t.type===i.argument}function c(t){return t.type===i.number}function h(t){return t.type===i.date}function l(t){return t.type===i.time}function f(t){return t.type===i.select}function d(t){return t.type===i.plural}function p(t){return t.type===i.pound}function g(t){return t.type===i.tag}function v(t){return!(!t||"object"!=typeof t||t.type!==o.number)}function m(t){return!(!t||"object"!=typeof t||t.type!==o.dateTime)}!function(t){t[t.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",t[t.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",t[t.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",t[t.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",t[t.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",t[t.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",t[t.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",t[t.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",t[t.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",t[t.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",t[t.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",t[t.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",t[t.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",t[t.INVALID_TAG=23]="INVALID_TAG",t[t.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",t[t.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",t[t.UNCLOSED_TAG=27]="UNCLOSED_TAG"}(r||(r={})),function(t){t[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural",t[t.pound=7]="pound",t[t.tag=8]="tag"}(i||(i={})),function(t){t[t.number=0]="number",t[t.dateTime=1]="dateTime"}(o||(o={}))
var y=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,b=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g
function w(t){var e={}
return t.replace(b,(function(t){var n=t.length
switch(t[0]){case"G":e.era=4===n?"long":5===n?"narrow":"short"
break
case"y":e.year=2===n?"2-digit":"numeric"
break
case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead")
case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported")
case"M":case"L":e.month=["numeric","2-digit","short","long","narrow"][n-1]
break
case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported")
case"d":e.day=["numeric","2-digit"][n-1]
break
case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead")
case"E":e.weekday=4===n?"short":5===n?"narrow":"short"
break
case"e":if(n<4)throw new RangeError("`e..eee` (weekday) patterns are not supported")
e.weekday=["short","long","narrow","short"][n-4]
break
case"c":if(n<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported")
e.weekday=["short","long","narrow","short"][n-4]
break
case"a":e.hour12=!0
break
case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead")
case"h":e.hourCycle="h12",e.hour=["numeric","2-digit"][n-1]
break
case"H":e.hourCycle="h23",e.hour=["numeric","2-digit"][n-1]
break
case"K":e.hourCycle="h11",e.hour=["numeric","2-digit"][n-1]
break
case"k":e.hourCycle="h24",e.hour=["numeric","2-digit"][n-1]
break
case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead")
case"m":e.minute=["numeric","2-digit"][n-1]
break
case"s":e.second=["numeric","2-digit"][n-1]
break
case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead")
case"z":e.timeZoneName=n<4?"short":"long"
break
case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),e}var x=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i,S=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,C=/^(@+)?(\+|#+)?[rs]?$/g,T=/(\*)(0+)|(#+)(0+)|(0+)/g,E=/^(0+)$/
function k(t){var e={}
return"r"===t[t.length-1]?e.roundingPriority="morePrecision":"s"===t[t.length-1]&&(e.roundingPriority="lessPrecision"),t.replace(C,(function(t,n,r){return"string"!=typeof r?(e.minimumSignificantDigits=n.length,e.maximumSignificantDigits=n.length):"+"===r?e.minimumSignificantDigits=n.length:"#"===n[0]?e.maximumSignificantDigits=n.length:(e.minimumSignificantDigits=n.length,e.maximumSignificantDigits=n.length+("string"==typeof r?r.length:0)),""})),e}function A(t){switch(t){case"sign-auto":return{signDisplay:"auto"}
case"sign-accounting":case"()":return{currencySign:"accounting"}
case"sign-always":case"+!":return{signDisplay:"always"}
case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"}
case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"}
case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"}
case"sign-never":case"+_":return{signDisplay:"never"}}}function P(t){var e
if("E"===t[0]&&"E"===t[1]?(e={notation:"engineering"},t=t.slice(2)):"E"===t[0]&&(e={notation:"scientific"},t=t.slice(1)),e){var n=t.slice(0,2)
if("+!"===n?(e.signDisplay="always",t=t.slice(2)):"+?"===n&&(e.signDisplay="exceptZero",t=t.slice(2)),!E.test(t))throw new Error("Malformed concise eng/scientific notation")
e.minimumIntegerDigits=t.length}return e}function F(t){return A(t)||{}}function R(t){for(var e={},n=0,r=t;n<r.length;n++){var i=r[n]
switch(i.stem){case"percent":case"%":e.style="percent"
continue
case"%x100":e.style="percent",e.scale=100
continue
case"currency":e.style="currency",e.currency=i.options[0]
continue
case"group-off":case",_":e.useGrouping=!1
continue
case"precision-integer":case".":e.maximumFractionDigits=0
continue
case"measure-unit":case"unit":e.style="unit",e.unit=i.options[0].replace(/^(.*?)-/,"")
continue
case"compact-short":case"K":e.notation="compact",e.compactDisplay="short"
continue
case"compact-long":case"KK":e.notation="compact",e.compactDisplay="long"
continue
case"scientific":e=(0,a.pi)((0,a.pi)((0,a.pi)({},e),{notation:"scientific"}),i.options.reduce((function(t,e){return(0,a.pi)((0,a.pi)({},t),F(e))}),{}))
continue
case"engineering":e=(0,a.pi)((0,a.pi)((0,a.pi)({},e),{notation:"engineering"}),i.options.reduce((function(t,e){return(0,a.pi)((0,a.pi)({},t),F(e))}),{}))
continue
case"notation-simple":e.notation="standard"
continue
case"unit-width-narrow":e.currencyDisplay="narrowSymbol",e.unitDisplay="narrow"
continue
case"unit-width-short":e.currencyDisplay="code",e.unitDisplay="short"
continue
case"unit-width-full-name":e.currencyDisplay="name",e.unitDisplay="long"
continue
case"unit-width-iso-code":e.currencyDisplay="symbol"
continue
case"scale":e.scale=parseFloat(i.options[0])
continue
case"integer-width":if(i.options.length>1)throw new RangeError("integer-width stems only accept a single optional option")
i.options[0].replace(T,(function(t,n,r,i,o,a){if(n)e.minimumIntegerDigits=r.length
else{if(i&&o)throw new Error("We currently do not support maximum integer digits")
if(a)throw new Error("We currently do not support exact integer digits")}return""}))
continue}if(E.test(i.stem))e.minimumIntegerDigits=i.stem.length
else if(S.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option")
i.stem.replace(S,(function(t,n,r,i,o,a){return"*"===r?e.minimumFractionDigits=n.length:i&&"#"===i[0]?e.maximumFractionDigits=i.length:o&&a?(e.minimumFractionDigits=o.length,e.maximumFractionDigits=o.length+a.length):(e.minimumFractionDigits=n.length,e.maximumFractionDigits=n.length),""}))
var o=i.options[0]
"w"===o?e=(0,a.pi)((0,a.pi)({},e),{trailingZeroDisplay:"stripIfInteger"}):o&&(e=(0,a.pi)((0,a.pi)({},e),k(o)))}else if(C.test(i.stem))e=(0,a.pi)((0,a.pi)({},e),k(i.stem))
else{var s=A(i.stem)
s&&(e=(0,a.pi)((0,a.pi)({},e),s))
var u=P(i.stem)
u&&(e=(0,a.pi)((0,a.pi)({},e),u))}}return e}var O,D={AX:["H"],BQ:["H"],CP:["H"],CZ:["H"],DK:["H"],FI:["H"],ID:["H"],IS:["H"],ML:["H"],NE:["H"],RU:["H"],SE:["H"],SJ:["H"],SK:["H"],AS:["h","H"],BT:["h","H"],DJ:["h","H"],ER:["h","H"],GH:["h","H"],IN:["h","H"],LS:["h","H"],PG:["h","H"],PW:["h","H"],SO:["h","H"],TO:["h","H"],VU:["h","H"],WS:["h","H"],"001":["H","h"],AL:["h","H","hB"],TD:["h","H","hB"],"ca-ES":["H","h","hB"],CF:["H","h","hB"],CM:["H","h","hB"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],LU:["H","h","hB"],NP:["H","h","hB"],PF:["H","h","hB"],SC:["H","h","hB"],SM:["H","h","hB"],SN:["H","h","hB"],TF:["H","h","hB"],VA:["H","h","hB"],CY:["h","H","hb","hB"],GR:["h","H","hb","hB"],CO:["h","H","hB","hb"],DO:["h","H","hB","hb"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],NA:["h","H","hB","hb"],PA:["h","H","hB","hb"],PR:["h","H","hB","hb"],VE:["h","H","hB","hb"],AC:["H","h","hb","hB"],AI:["H","h","hb","hB"],BW:["H","h","hb","hB"],BZ:["H","h","hb","hB"],CC:["H","h","hb","hB"],CK:["H","h","hb","hB"],CX:["H","h","hb","hB"],DG:["H","h","hb","hB"],FK:["H","h","hb","hB"],GB:["H","h","hb","hB"],GG:["H","h","hb","hB"],GI:["H","h","hb","hB"],IE:["H","h","hb","hB"],IM:["H","h","hb","hB"],IO:["H","h","hb","hB"],JE:["H","h","hb","hB"],LT:["H","h","hb","hB"],MK:["H","h","hb","hB"],MN:["H","h","hb","hB"],MS:["H","h","hb","hB"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],PN:["H","h","hb","hB"],SH:["H","h","hb","hB"],SX:["H","h","hb","hB"],TA:["H","h","hb","hB"],ZA:["H","h","hb","hB"],"af-ZA":["H","h","hB","hb"],AR:["H","h","hB","hb"],CL:["H","h","hB","hb"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],EA:["H","h","hB","hb"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],GT:["H","h","hB","hb"],HN:["H","h","hB","hb"],IC:["H","h","hB","hb"],KG:["H","h","hB","hb"],KM:["H","h","hB","hb"],LK:["H","h","hB","hb"],MA:["H","h","hB","hb"],MX:["H","h","hB","hb"],NI:["H","h","hB","hb"],PY:["H","h","hB","hb"],SV:["H","h","hB","hb"],UY:["H","h","hB","hb"],JP:["H","h","K"],AD:["H","hB"],AM:["H","hB"],AO:["H","hB"],AT:["H","hB"],AW:["H","hB"],BE:["H","hB"],BF:["H","hB"],BJ:["H","hB"],BL:["H","hB"],BR:["H","hB"],CG:["H","hB"],CI:["H","hB"],CV:["H","hB"],DE:["H","hB"],EE:["H","hB"],FR:["H","hB"],GA:["H","hB"],GF:["H","hB"],GN:["H","hB"],GP:["H","hB"],GW:["H","hB"],HR:["H","hB"],IL:["H","hB"],IT:["H","hB"],KZ:["H","hB"],MC:["H","hB"],MD:["H","hB"],MF:["H","hB"],MQ:["H","hB"],MZ:["H","hB"],NC:["H","hB"],NL:["H","hB"],PM:["H","hB"],PT:["H","hB"],RE:["H","hB"],RO:["H","hB"],SI:["H","hB"],SR:["H","hB"],ST:["H","hB"],TG:["H","hB"],TR:["H","hB"],WF:["H","hB"],YT:["H","hB"],BD:["h","hB","H"],PK:["h","hB","H"],AZ:["H","hB","h"],BA:["H","hB","h"],BG:["H","hB","h"],CH:["H","hB","h"],GE:["H","hB","h"],LI:["H","hB","h"],ME:["H","hB","h"],RS:["H","hB","h"],UA:["H","hB","h"],UZ:["H","hB","h"],XK:["H","hB","h"],AG:["h","hb","H","hB"],AU:["h","hb","H","hB"],BB:["h","hb","H","hB"],BM:["h","hb","H","hB"],BS:["h","hb","H","hB"],CA:["h","hb","H","hB"],DM:["h","hb","H","hB"],"en-001":["h","hb","H","hB"],FJ:["h","hb","H","hB"],FM:["h","hb","H","hB"],GD:["h","hb","H","hB"],GM:["h","hb","H","hB"],GU:["h","hb","H","hB"],GY:["h","hb","H","hB"],JM:["h","hb","H","hB"],KI:["h","hb","H","hB"],KN:["h","hb","H","hB"],KY:["h","hb","H","hB"],LC:["h","hb","H","hB"],LR:["h","hb","H","hB"],MH:["h","hb","H","hB"],MP:["h","hb","H","hB"],MW:["h","hb","H","hB"],NZ:["h","hb","H","hB"],SB:["h","hb","H","hB"],SG:["h","hb","H","hB"],SL:["h","hb","H","hB"],SS:["h","hb","H","hB"],SZ:["h","hb","H","hB"],TC:["h","hb","H","hB"],TT:["h","hb","H","hB"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],VC:["h","hb","H","hB"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],ZM:["h","hb","H","hB"],BO:["H","hB","h","hb"],EC:["H","hB","h","hb"],ES:["H","hB","h","hb"],GQ:["H","hB","h","hb"],PE:["H","hB","h","hb"],AE:["h","hB","hb","H"],"ar-001":["h","hB","hb","H"],BH:["h","hB","hb","H"],DZ:["h","hB","hb","H"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],HK:["h","hB","hb","H"],IQ:["h","hB","hb","H"],JO:["h","hB","hb","H"],KW:["h","hB","hb","H"],LB:["h","hB","hb","H"],LY:["h","hB","hb","H"],MO:["h","hB","hb","H"],MR:["h","hB","hb","H"],OM:["h","hB","hb","H"],PH:["h","hB","hb","H"],PS:["h","hB","hb","H"],QA:["h","hB","hb","H"],SA:["h","hB","hb","H"],SD:["h","hB","hb","H"],SY:["h","hB","hb","H"],TN:["h","hB","hb","H"],YE:["h","hB","hb","H"],AF:["H","hb","hB","h"],LA:["H","hb","hB","h"],CN:["H","hB","hb","h"],LV:["H","hB","hb","h"],TL:["H","hB","hb","h"],"zu-ZA":["H","hB","hb","h"],CD:["hB","H"],IR:["hB","H"],"hi-IN":["hB","h","H"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"te-IN":["hB","h","H"],KH:["hB","h","H","hb"],"ta-IN":["hB","h","hb","H"],BN:["hb","hB","h","H"],MY:["hb","hB","h","H"],ET:["hB","hb","h","H"],"gu-IN":["hB","hb","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],TW:["hB","hb","h","H"],KE:["hB","hb","H","h"],MM:["hB","hb","H","h"],TZ:["hB","hb","H","h"],UG:["hB","hb","H","h"]}
function M(t){var e=t.hourCycle
if(void 0===e&&t.hourCycles&&t.hourCycles.length&&(e=t.hourCycles[0]),e)switch(e){case"h24":return"k"
case"h23":return"H"
case"h12":return"h"
case"h11":return"K"
default:throw new Error("Invalid hourCycle")}var n,r=t.language
return"root"!==r&&(n=t.maximize().region),(D[n||""]||D[r||""]||D["".concat(r,"-001")]||D["001"])[0]}var I=new RegExp("^".concat(y.source,"*")),N=new RegExp("".concat(y.source,"*$"))
function _(t,e){return{start:t,end:e}}var B=!!String.prototype.startsWith,L=!!String.fromCodePoint,U=!!Object.fromEntries,j=!!String.prototype.codePointAt,G=!!String.prototype.trimStart,z=!!String.prototype.trimEnd,H=Number.isSafeInteger?Number.isSafeInteger:function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t&&Math.abs(t)<=9007199254740991},V=!0
try{V="a"===(null===(O=Q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu").exec("a"))||void 0===O?void 0:O[0])}catch(t){V=!1}var Z,W=B?function(t,e,n){return t.startsWith(e,n)}:function(t,e,n){return t.slice(n,n+e.length)===e},q=L?String.fromCodePoint:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
for(var n,r="",i=t.length,o=0;i>o;){if((n=t[o++])>1114111)throw RangeError(n+" is not a valid code point")
r+=n<65536?String.fromCharCode(n):String.fromCharCode(55296+((n-=65536)>>10),n%1024+56320)}return r},K=U?Object.fromEntries:function(t){for(var e={},n=0,r=t;n<r.length;n++){var i=r[n],o=i[0],a=i[1]
e[o]=a}return e},X=j?function(t,e){return t.codePointAt(e)}:function(t,e){var n=t.length
if(!(e<0||e>=n)){var r,i=t.charCodeAt(e)
return i<55296||i>56319||e+1===n||(r=t.charCodeAt(e+1))<56320||r>57343?i:r-56320+(i-55296<<10)+65536}},Y=G?function(t){return t.trimStart()}:function(t){return t.replace(I,"")},J=z?function(t){return t.trimEnd()}:function(t){return t.replace(N,"")}
function Q(t,e){return new RegExp(t,e)}if(V){var $=Q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu")
Z=function(t,e){var n
return $.lastIndex=e,null!==(n=$.exec(t)[1])&&void 0!==n?n:""}}else Z=function(t,e){for(var n=[];;){var r=X(t,e)
if(void 0===r||nt(r)||rt(r))break
n.push(r),e+=r>=65536?2:1}return q.apply(void 0,n)}
var tt=function(){function t(t,e){void 0===e&&(e={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!e.ignoreTag,this.locale=e.locale,this.requiresOtherClause=!!e.requiresOtherClause,this.shouldParseSkeletons=!!e.shouldParseSkeletons}return t.prototype.parse=function(){if(0!==this.offset())throw Error("parser can only be used once")
return this.parseMessage(0,"",!1)},t.prototype.parseMessage=function(t,e,n){for(var o=[];!this.isEOF();){var a=this.char()
if(123===a){if((s=this.parseArgument(t,n)).err)return s
o.push(s.val)}else{if(125===a&&t>0)break
if(35!==a||"plural"!==e&&"selectordinal"!==e){if(60===a&&!this.ignoreTag&&47===this.peek()){if(n)break
return this.error(r.UNMATCHED_CLOSING_TAG,_(this.clonePosition(),this.clonePosition()))}if(60===a&&!this.ignoreTag&&et(this.peek()||0)){if((s=this.parseTag(t,e)).err)return s
o.push(s.val)}else{var s
if((s=this.parseLiteral(t,e)).err)return s
o.push(s.val)}}else{var u=this.clonePosition()
this.bump(),o.push({type:i.pound,location:_(u,this.clonePosition())})}}}return{val:o,err:null}},t.prototype.parseTag=function(t,e){var n=this.clonePosition()
this.bump()
var o=this.parseTagName()
if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:i.literal,value:"<".concat(o,"/>"),location:_(n,this.clonePosition())},err:null}
if(this.bumpIf(">")){var a=this.parseMessage(t+1,e,!0)
if(a.err)return a
var s=a.val,u=this.clonePosition()
if(this.bumpIf("</")){if(this.isEOF()||!et(this.char()))return this.error(r.INVALID_TAG,_(u,this.clonePosition()))
var c=this.clonePosition()
return o!==this.parseTagName()?this.error(r.UNMATCHED_CLOSING_TAG,_(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:i.tag,value:o,children:s,location:_(n,this.clonePosition())},err:null}:this.error(r.INVALID_TAG,_(u,this.clonePosition())))}return this.error(r.UNCLOSED_TAG,_(n,this.clonePosition()))}return this.error(r.INVALID_TAG,_(n,this.clonePosition()))},t.prototype.parseTagName=function(){var t,e=this.offset()
for(this.bump();!this.isEOF()&&(45===(t=this.char())||46===t||t>=48&&t<=57||95===t||t>=97&&t<=122||t>=65&&t<=90||183==t||t>=192&&t<=214||t>=216&&t<=246||t>=248&&t<=893||t>=895&&t<=8191||t>=8204&&t<=8205||t>=8255&&t<=8256||t>=8304&&t<=8591||t>=11264&&t<=12271||t>=12289&&t<=55295||t>=63744&&t<=64975||t>=65008&&t<=65533||t>=65536&&t<=983039);)this.bump()
return this.message.slice(e,this.offset())},t.prototype.parseLiteral=function(t,e){for(var n=this.clonePosition(),r="";;){var o=this.tryParseQuote(e)
if(o)r+=o
else{var a=this.tryParseUnquoted(t,e)
if(a)r+=a
else{var s=this.tryParseLeftAngleBracket()
if(!s)break
r+=s}}}var u=_(n,this.clonePosition())
return{val:{type:i.literal,value:r,location:u},err:null}},t.prototype.tryParseLeftAngleBracket=function(){return this.isEOF()||60!==this.char()||!this.ignoreTag&&(et(t=this.peek()||0)||47===t)?null:(this.bump(),"<")
var t},t.prototype.tryParseQuote=function(t){if(this.isEOF()||39!==this.char())return null
switch(this.peek()){case 39:return this.bump(),this.bump(),"'"
case 123:case 60:case 62:case 125:break
case 35:if("plural"===t||"selectordinal"===t)break
return null
default:return null}this.bump()
var e=[this.char()]
for(this.bump();!this.isEOF();){var n=this.char()
if(39===n){if(39!==this.peek()){this.bump()
break}e.push(39),this.bump()}else e.push(n)
this.bump()}return q.apply(void 0,e)},t.prototype.tryParseUnquoted=function(t,e){if(this.isEOF())return null
var n=this.char()
return 60===n||123===n||35===n&&("plural"===e||"selectordinal"===e)||125===n&&t>0?null:(this.bump(),q(n))},t.prototype.parseArgument=function(t,e){var n=this.clonePosition()
if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE,_(n,this.clonePosition()))
if(125===this.char())return this.bump(),this.error(r.EMPTY_ARGUMENT,_(n,this.clonePosition()))
var o=this.parseIdentifierIfPossible().value
if(!o)return this.error(r.MALFORMED_ARGUMENT,_(n,this.clonePosition()))
if(this.bumpSpace(),this.isEOF())return this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE,_(n,this.clonePosition()))
switch(this.char()){case 125:return this.bump(),{val:{type:i.argument,value:o,location:_(n,this.clonePosition())},err:null}
case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE,_(n,this.clonePosition())):this.parseArgumentOptions(t,e,o,n)
default:return this.error(r.MALFORMED_ARGUMENT,_(n,this.clonePosition()))}},t.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),e=this.offset(),n=Z(this.message,e),r=e+n.length
return this.bumpTo(r),{value:n,location:_(t,this.clonePosition())}},t.prototype.parseArgumentOptions=function(t,e,n,s){var u,c=this.clonePosition(),h=this.parseIdentifierIfPossible().value,l=this.clonePosition()
switch(h){case"":return this.error(r.EXPECT_ARGUMENT_TYPE,_(c,l))
case"number":case"date":case"time":this.bumpSpace()
var f=null
if(this.bumpIf(",")){this.bumpSpace()
var d=this.clonePosition()
if((S=this.parseSimpleArgStyleIfPossible()).err)return S
if(0===(m=J(S.val)).length)return this.error(r.EXPECT_ARGUMENT_STYLE,_(this.clonePosition(),this.clonePosition()))
f={style:m,styleLocation:_(d,this.clonePosition())}}if((C=this.tryParseArgumentClose(s)).err)return C
var p=_(s,this.clonePosition())
if(f&&W(null==f?void 0:f.style,"::",0)){var g=Y(f.style.slice(2))
if("number"===h)return(S=this.parseNumberSkeletonFromString(g,f.styleLocation)).err?S:{val:{type:i.number,value:n,location:p,style:S.val},err:null}
if(0===g.length)return this.error(r.EXPECT_DATE_TIME_SKELETON,p)
var v=g
this.locale&&(v=function(t,e){for(var n="",r=0;r<t.length;r++){var i=t.charAt(r)
if("j"===i){for(var o=0;r+1<t.length&&t.charAt(r+1)===i;)o++,r++
var a=1+(1&o),s=o<2?1:3+(o>>1),u=M(e)
for("H"!=u&&"k"!=u||(s=0);s-- >0;)n+="a"
for(;a-- >0;)n=u+n}else n+="J"===i?"H":i}return n}(g,this.locale))
var m={type:o.dateTime,pattern:v,location:f.styleLocation,parsedOptions:this.shouldParseSkeletons?w(v):{}}
return{val:{type:"date"===h?i.date:i.time,value:n,location:p,style:m},err:null}}return{val:{type:"number"===h?i.number:"date"===h?i.date:i.time,value:n,location:p,style:null!==(u=null==f?void 0:f.style)&&void 0!==u?u:null},err:null}
case"plural":case"selectordinal":case"select":var y=this.clonePosition()
if(this.bumpSpace(),!this.bumpIf(","))return this.error(r.EXPECT_SELECT_ARGUMENT_OPTIONS,_(y,(0,a.pi)({},y)))
this.bumpSpace()
var b=this.parseIdentifierIfPossible(),x=0
if("select"!==h&&"offset"===b.value){if(!this.bumpIf(":"))return this.error(r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,_(this.clonePosition(),this.clonePosition()))
var S
if(this.bumpSpace(),(S=this.tryParseDecimalInteger(r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,r.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)return S
this.bumpSpace(),b=this.parseIdentifierIfPossible(),x=S.val}var C,T=this.tryParsePluralOrSelectOptions(t,h,e,b)
if(T.err)return T
if((C=this.tryParseArgumentClose(s)).err)return C
var E=_(s,this.clonePosition())
return"select"===h?{val:{type:i.select,value:n,options:K(T.val),location:E},err:null}:{val:{type:i.plural,value:n,options:K(T.val),offset:x,pluralType:"plural"===h?"cardinal":"ordinal",location:E},err:null}
default:return this.error(r.INVALID_ARGUMENT_TYPE,_(c,l))}},t.prototype.tryParseArgumentClose=function(t){return this.isEOF()||125!==this.char()?this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE,_(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},t.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,e=this.clonePosition();!this.isEOF();)switch(this.char()){case 39:this.bump()
var n=this.clonePosition()
if(!this.bumpUntil("'"))return this.error(r.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,_(n,this.clonePosition()))
this.bump()
break
case 123:t+=1,this.bump()
break
case 125:if(!(t>0))return{val:this.message.slice(e.offset,this.offset()),err:null}
t-=1
break
default:this.bump()}return{val:this.message.slice(e.offset,this.offset()),err:null}},t.prototype.parseNumberSkeletonFromString=function(t,e){var n=[]
try{n=function(t){if(0===t.length)throw new Error("Number skeleton cannot be empty")
for(var e=[],n=0,r=t.split(x).filter((function(t){return t.length>0}));n<r.length;n++){var i=r[n].split("/")
if(0===i.length)throw new Error("Invalid number skeleton")
for(var o=i[0],a=i.slice(1),s=0,u=a;s<u.length;s++)if(0===u[s].length)throw new Error("Invalid number skeleton")
e.push({stem:o,options:a})}return e}(t)}catch(t){return this.error(r.INVALID_NUMBER_SKELETON,e)}return{val:{type:o.number,tokens:n,location:e,parsedOptions:this.shouldParseSkeletons?R(n):{}},err:null}},t.prototype.tryParsePluralOrSelectOptions=function(t,e,n,i){for(var o,a=!1,s=[],u=new Set,c=i.value,h=i.location;;){if(0===c.length){var l=this.clonePosition()
if("select"===e||!this.bumpIf("="))break
var f=this.tryParseDecimalInteger(r.EXPECT_PLURAL_ARGUMENT_SELECTOR,r.INVALID_PLURAL_ARGUMENT_SELECTOR)
if(f.err)return f
h=_(l,this.clonePosition()),c=this.message.slice(l.offset,this.offset())}if(u.has(c))return this.error("select"===e?r.DUPLICATE_SELECT_ARGUMENT_SELECTOR:r.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,h)
"other"===c&&(a=!0),this.bumpSpace()
var d=this.clonePosition()
if(!this.bumpIf("{"))return this.error("select"===e?r.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:r.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,_(this.clonePosition(),this.clonePosition()))
var p=this.parseMessage(t+1,e,n)
if(p.err)return p
var g=this.tryParseArgumentClose(d)
if(g.err)return g
s.push([c,{value:p.val,location:_(d,this.clonePosition())}]),u.add(c),this.bumpSpace(),c=(o=this.parseIdentifierIfPossible()).value,h=o.location}return 0===s.length?this.error("select"===e?r.EXPECT_SELECT_ARGUMENT_SELECTOR:r.EXPECT_PLURAL_ARGUMENT_SELECTOR,_(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!a?this.error(r.MISSING_OTHER_CLAUSE,_(this.clonePosition(),this.clonePosition())):{val:s,err:null}},t.prototype.tryParseDecimalInteger=function(t,e){var n=1,r=this.clonePosition()
this.bumpIf("+")||this.bumpIf("-")&&(n=-1)
for(var i=!1,o=0;!this.isEOF();){var a=this.char()
if(!(a>=48&&a<=57))break
i=!0,o=10*o+(a-48),this.bump()}var s=_(r,this.clonePosition())
return i?H(o*=n)?{val:o,err:null}:this.error(e,s):this.error(t,s)},t.prototype.offset=function(){return this.position.offset},t.prototype.isEOF=function(){return this.offset()===this.message.length},t.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},t.prototype.char=function(){var t=this.position.offset
if(t>=this.message.length)throw Error("out of bound")
var e=X(this.message,t)
if(void 0===e)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"))
return e},t.prototype.error=function(t,e){return{val:null,err:{kind:t,message:this.message,location:e}}},t.prototype.bump=function(){if(!this.isEOF()){var t=this.char()
10===t?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},t.prototype.bumpIf=function(t){if(W(this.message,t,this.offset())){for(var e=0;e<t.length;e++)this.bump()
return!0}return!1},t.prototype.bumpUntil=function(t){var e=this.offset(),n=this.message.indexOf(t,e)
return n>=0?(this.bumpTo(n),!0):(this.bumpTo(this.message.length),!1)},t.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()))
for(t=Math.min(t,this.message.length);;){var e=this.offset()
if(e===t)break
if(e>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"))
if(this.bump(),this.isEOF())break}},t.prototype.bumpSpace=function(){for(;!this.isEOF()&&nt(this.char());)this.bump()},t.prototype.peek=function(){if(this.isEOF())return null
var t=this.char(),e=this.offset(),n=this.message.charCodeAt(e+(t>=65536?2:1))
return null!=n?n:null},t}()
function et(t){return t>=97&&t<=122||t>=65&&t<=90}function nt(t){return t>=9&&t<=13||32===t||133===t||t>=8206&&t<=8207||8232===t||8233===t}function rt(t){return t>=33&&t<=35||36===t||t>=37&&t<=39||40===t||41===t||42===t||43===t||44===t||45===t||t>=46&&t<=47||t>=58&&t<=59||t>=60&&t<=62||t>=63&&t<=64||91===t||92===t||93===t||94===t||96===t||123===t||124===t||125===t||126===t||161===t||t>=162&&t<=165||166===t||167===t||169===t||171===t||172===t||174===t||176===t||177===t||182===t||187===t||191===t||215===t||247===t||t>=8208&&t<=8213||t>=8214&&t<=8215||8216===t||8217===t||8218===t||t>=8219&&t<=8220||8221===t||8222===t||8223===t||t>=8224&&t<=8231||t>=8240&&t<=8248||8249===t||8250===t||t>=8251&&t<=8254||t>=8257&&t<=8259||8260===t||8261===t||8262===t||t>=8263&&t<=8273||8274===t||8275===t||t>=8277&&t<=8286||t>=8592&&t<=8596||t>=8597&&t<=8601||t>=8602&&t<=8603||t>=8604&&t<=8607||8608===t||t>=8609&&t<=8610||8611===t||t>=8612&&t<=8613||8614===t||t>=8615&&t<=8621||8622===t||t>=8623&&t<=8653||t>=8654&&t<=8655||t>=8656&&t<=8657||8658===t||8659===t||8660===t||t>=8661&&t<=8691||t>=8692&&t<=8959||t>=8960&&t<=8967||8968===t||8969===t||8970===t||8971===t||t>=8972&&t<=8991||t>=8992&&t<=8993||t>=8994&&t<=9e3||9001===t||9002===t||t>=9003&&t<=9083||9084===t||t>=9085&&t<=9114||t>=9115&&t<=9139||t>=9140&&t<=9179||t>=9180&&t<=9185||t>=9186&&t<=9254||t>=9255&&t<=9279||t>=9280&&t<=9290||t>=9291&&t<=9311||t>=9472&&t<=9654||9655===t||t>=9656&&t<=9664||9665===t||t>=9666&&t<=9719||t>=9720&&t<=9727||t>=9728&&t<=9838||9839===t||t>=9840&&t<=10087||10088===t||10089===t||10090===t||10091===t||10092===t||10093===t||10094===t||10095===t||10096===t||10097===t||10098===t||10099===t||10100===t||10101===t||t>=10132&&t<=10175||t>=10176&&t<=10180||10181===t||10182===t||t>=10183&&t<=10213||10214===t||10215===t||10216===t||10217===t||10218===t||10219===t||10220===t||10221===t||10222===t||10223===t||t>=10224&&t<=10239||t>=10240&&t<=10495||t>=10496&&t<=10626||10627===t||10628===t||10629===t||10630===t||10631===t||10632===t||10633===t||10634===t||10635===t||10636===t||10637===t||10638===t||10639===t||10640===t||10641===t||10642===t||10643===t||10644===t||10645===t||10646===t||10647===t||10648===t||t>=10649&&t<=10711||10712===t||10713===t||10714===t||10715===t||t>=10716&&t<=10747||10748===t||10749===t||t>=10750&&t<=11007||t>=11008&&t<=11055||t>=11056&&t<=11076||t>=11077&&t<=11078||t>=11079&&t<=11084||t>=11085&&t<=11123||t>=11124&&t<=11125||t>=11126&&t<=11157||11158===t||t>=11159&&t<=11263||t>=11776&&t<=11777||11778===t||11779===t||11780===t||11781===t||t>=11782&&t<=11784||11785===t||11786===t||11787===t||11788===t||11789===t||t>=11790&&t<=11798||11799===t||t>=11800&&t<=11801||11802===t||11803===t||11804===t||11805===t||t>=11806&&t<=11807||11808===t||11809===t||11810===t||11811===t||11812===t||11813===t||11814===t||11815===t||11816===t||11817===t||t>=11818&&t<=11822||11823===t||t>=11824&&t<=11833||t>=11834&&t<=11835||t>=11836&&t<=11839||11840===t||11841===t||11842===t||t>=11843&&t<=11855||t>=11856&&t<=11857||11858===t||t>=11859&&t<=11903||t>=12289&&t<=12291||12296===t||12297===t||12298===t||12299===t||12300===t||12301===t||12302===t||12303===t||12304===t||12305===t||t>=12306&&t<=12307||12308===t||12309===t||12310===t||12311===t||12312===t||12313===t||12314===t||12315===t||12316===t||12317===t||t>=12318&&t<=12319||12320===t||12336===t||64830===t||64831===t||t>=65093&&t<=65094}function it(t){t.forEach((function(t){if(delete t.location,f(t)||d(t))for(var e in t.options)delete t.options[e].location,it(t.options[e].value)
else c(t)&&v(t.style)||(h(t)||l(t))&&m(t.style)?delete t.style.location:g(t)&&it(t.children)}))}function ot(t,e){void 0===e&&(e={}),e=(0,a.pi)({shouldParseSkeletons:!0,requiresOtherClause:!0},e)
var n=new tt(t,e).parse()
if(n.err){var i=SyntaxError(r[n.err.kind])
throw i.location=n.err.location,i.originalMessage=n.err.message,i}return(null==e?void 0:e.captureLocation)||it(n.val),n.val}function at(t,e){var n=e&&e.cache?e.cache:pt,r=e&&e.serializer?e.serializer:lt
return(e&&e.strategy?e.strategy:ht)(t,{cache:n,serializer:r})}function st(t,e,n,r){var i,o=null==(i=r)||"number"==typeof i||"boolean"==typeof i?r:n(r),a=e.get(o)
return void 0===a&&(a=t.call(this,r),e.set(o,a)),a}function ut(t,e,n){var r=Array.prototype.slice.call(arguments,3),i=n(r),o=e.get(i)
return void 0===o&&(o=t.apply(this,r),e.set(i,o)),o}function ct(t,e,n,r,i){return n.bind(e,t,r,i)}function ht(t,e){return ct(t,this,1===t.length?st:ut,e.cache.create(),e.serializer)}var lt=function(){return JSON.stringify(arguments)}
function ft(){this.cache=Object.create(null)}ft.prototype.get=function(t){return this.cache[t]},ft.prototype.set=function(t,e){this.cache[t]=e}
var dt,pt={create:function(){return new ft}},gt={variadic:function(t,e){return ct(t,this,ut,e.cache.create(),e.serializer)},monadic:function(t,e){return ct(t,this,st,e.cache.create(),e.serializer)}}
!function(t){t.MISSING_VALUE="MISSING_VALUE",t.INVALID_VALUE="INVALID_VALUE",t.MISSING_INTL_API="MISSING_INTL_API"}(dt||(dt={}))
var vt,mt=function(t){function e(e,n,r){var i=t.call(this,e)||this
return i.code=n,i.originalMessage=r,i}return(0,a.ZT)(e,t),e.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},e}(Error),yt=function(t){function e(e,n,r,i){return t.call(this,'Invalid values for "'.concat(e,'": "').concat(n,'". Options are "').concat(Object.keys(r).join('", "'),'"'),dt.INVALID_VALUE,i)||this}return(0,a.ZT)(e,t),e}(mt),bt=function(t){function e(e,n,r){return t.call(this,'Value for "'.concat(e,'" must be of type ').concat(n),dt.INVALID_VALUE,r)||this}return(0,a.ZT)(e,t),e}(mt),wt=function(t){function e(e,n){return t.call(this,'The intl string context variable "'.concat(e,'" was not provided to the string "').concat(n,'"'),dt.MISSING_VALUE,n)||this}return(0,a.ZT)(e,t),e}(mt)
function xt(t){return"function"==typeof t}function St(t,e,n,r,i,o,a){if(1===t.length&&s(t[0]))return[{type:vt.literal,value:t[0].value}]
for(var y=[],b=0,w=t;b<w.length;b++){var x=w[b]
if(s(x))y.push({type:vt.literal,value:x.value})
else if(p(x))"number"==typeof o&&y.push({type:vt.literal,value:n.getNumberFormat(e).format(o)})
else{var S=x.value
if(!i||!(S in i))throw new wt(S,a)
var C=i[S]
if(u(x))C&&"string"!=typeof C&&"number"!=typeof C||(C="string"==typeof C||"number"==typeof C?String(C):""),y.push({type:"string"==typeof C?vt.literal:vt.object,value:C})
else if(h(x)){var T="string"==typeof x.style?r.date[x.style]:m(x.style)?x.style.parsedOptions:void 0
y.push({type:vt.literal,value:n.getDateTimeFormat(e,T).format(C)})}else if(l(x))T="string"==typeof x.style?r.time[x.style]:m(x.style)?x.style.parsedOptions:r.time.medium,y.push({type:vt.literal,value:n.getDateTimeFormat(e,T).format(C)})
else if(c(x))(T="string"==typeof x.style?r.number[x.style]:v(x.style)?x.style.parsedOptions:void 0)&&T.scale&&(C*=T.scale||1),y.push({type:vt.literal,value:n.getNumberFormat(e,T).format(C)})
else{if(g(x)){var E=x.children,k=x.value,A=i[k]
if(!xt(A))throw new bt(k,"function",a)
var P=A(St(E,e,n,r,i,o).map((function(t){return t.value})))
Array.isArray(P)||(P=[P]),y.push.apply(y,P.map((function(t){return{type:"string"==typeof t?vt.literal:vt.object,value:t}})))}if(f(x)){if(!(F=x.options[C]||x.options.other))throw new yt(x.value,C,Object.keys(x.options),a)
y.push.apply(y,St(F.value,e,n,r,i))}else if(d(x)){var F
if(!(F=x.options["=".concat(C)])){if(!Intl.PluralRules)throw new mt('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',dt.MISSING_INTL_API,a)
var R=n.getPluralRules(e,{type:x.pluralType}).select(C-(x.offset||0))
F=x.options[R]||x.options.other}if(!F)throw new yt(x.value,C,Object.keys(x.options),a)
y.push.apply(y,St(F.value,e,n,r,i,C-(x.offset||0)))}}}}return(O=y).length<2?O:O.reduce((function(t,e){var n=t[t.length-1]
return n&&n.type===vt.literal&&e.type===vt.literal?n.value+=e.value:t.push(e),t}),[])
var O}function Ct(t){return{create:function(){return{get:function(e){return t[e]},set:function(e,n){t[e]=n}}}}}!function(t){t[t.literal=0]="literal",t[t.object=1]="object"}(vt||(vt={}))
var Tt=function(){function t(e,n,r,i){var o,s,u,c=this
if(void 0===n&&(n=t.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(t){var e=c.formatToParts(t)
if(1===e.length)return e[0].value
var n=e.reduce((function(t,e){return t.length&&e.type===vt.literal&&"string"==typeof t[t.length-1]?t[t.length-1]+=e.value:t.push(e.value),t}),[])
return n.length<=1?n[0]||"":n},this.formatToParts=function(t){return St(c.ast,c.locales,c.formatters,c.formats,t,void 0,c.message)},this.resolvedOptions=function(){return{locale:c.resolvedLocale.toString()}},this.getAst=function(){return c.ast},this.locales=n,this.resolvedLocale=t.resolveLocale(n),"string"==typeof e){if(this.message=e,!t.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`")
this.ast=t.__parse(e,{ignoreTag:null==i?void 0:i.ignoreTag,locale:this.resolvedLocale})}else this.ast=e
if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.")
this.formats=(s=t.formats,(u=r)?Object.keys(s).reduce((function(t,e){var n,r
return t[e]=(n=s[e],(r=u[e])?(0,a.pi)((0,a.pi)((0,a.pi)({},n||{}),r||{}),Object.keys(n).reduce((function(t,e){return t[e]=(0,a.pi)((0,a.pi)({},n[e]),r[e]||{}),t}),{})):n),t}),(0,a.pi)({},s)):s),this.formatters=i&&i.formatters||(void 0===(o=this.formatterCache)&&(o={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:at((function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
return new((t=Intl.NumberFormat).bind.apply(t,(0,a.ev)([void 0],e,!1)))}),{cache:Ct(o.number),strategy:gt.variadic}),getDateTimeFormat:at((function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
return new((t=Intl.DateTimeFormat).bind.apply(t,(0,a.ev)([void 0],e,!1)))}),{cache:Ct(o.dateTime),strategy:gt.variadic}),getPluralRules:at((function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
return new((t=Intl.PluralRules).bind.apply(t,(0,a.ev)([void 0],e,!1)))}),{cache:Ct(o.pluralRules),strategy:gt.variadic})})}return Object.defineProperty(t,"defaultLocale",{get:function(){return t.memoizedDefaultLocale||(t.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),t.memoizedDefaultLocale},enumerable:!1,configurable:!0}),t.memoizedDefaultLocale=null,t.resolveLocale=function(t){var e=Intl.NumberFormat.supportedLocalesOf(t)
return e.length>0?new Intl.Locale(e[0]):new Intl.Locale("string"==typeof t?t:t[0])},t.__parse=ot,t.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},t}(),Et=Tt},2077:function(t,e,n){var r
t=n.nmd(t),function(){var i,o="Expected a function",a="__lodash_hash_undefined__",s="__lodash_placeholder__",u=32,c=128,h=1/0,l=9007199254740991,f=NaN,d=4294967295,p=[["ary",c],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",u],["partialRight",64],["rearg",256]],g="[object Arguments]",v="[object Array]",m="[object Boolean]",y="[object Date]",b="[object Error]",w="[object Function]",x="[object GeneratorFunction]",S="[object Map]",C="[object Number]",T="[object Object]",E="[object Promise]",k="[object RegExp]",A="[object Set]",P="[object String]",F="[object Symbol]",R="[object WeakMap]",O="[object ArrayBuffer]",D="[object DataView]",M="[object Float32Array]",I="[object Float64Array]",N="[object Int8Array]",_="[object Int16Array]",B="[object Int32Array]",L="[object Uint8Array]",U="[object Uint8ClampedArray]",j="[object Uint16Array]",G="[object Uint32Array]",z=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,V=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Z=/&(?:amp|lt|gt|quot|#39);/g,W=/[&<>"']/g,q=RegExp(Z.source),K=RegExp(W.source),X=/<%-([\s\S]+?)%>/g,Y=/<%([\s\S]+?)%>/g,J=/<%=([\s\S]+?)%>/g,Q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$=/^\w*$/,tt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,et=/[\\^$.*+?()[\]{}|]/g,nt=RegExp(et.source),rt=/^\s+/,it=/\s/,ot=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,at=/\{\n\/\* \[wrapped with (.+)\] \*/,st=/,? & /,ut=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ct=/[()=,{}\[\]\/\s]/,ht=/\\(\\)?/g,lt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ft=/\w*$/,dt=/^[-+]0x[0-9a-f]+$/i,pt=/^0b[01]+$/i,gt=/^\[object .+?Constructor\]$/,vt=/^0o[0-7]+$/i,mt=/^(?:0|[1-9]\d*)$/,yt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,bt=/($^)/,wt=/['\n\r\u2028\u2029\\]/g,xt="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",St="a-z\\xdf-\\xf6\\xf8-\\xff",Ct="A-Z\\xc0-\\xd6\\xd8-\\xde",Tt="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Et="["+Tt+"]",kt="["+xt+"]",At="\\d+",Pt="["+St+"]",Ft="[^\\ud800-\\udfff"+Tt+At+"\\u2700-\\u27bf"+St+Ct+"]",Rt="\\ud83c[\\udffb-\\udfff]",Ot="[^\\ud800-\\udfff]",Dt="(?:\\ud83c[\\udde6-\\uddff]){2}",Mt="[\\ud800-\\udbff][\\udc00-\\udfff]",It="["+Ct+"]",Nt="(?:"+Pt+"|"+Ft+")",_t="(?:"+It+"|"+Ft+")",Bt="(?:['’](?:d|ll|m|re|s|t|ve))?",Lt="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ut="(?:"+kt+"|"+Rt+")?",jt="[\\ufe0e\\ufe0f]?",Gt=jt+Ut+"(?:\\u200d(?:"+[Ot,Dt,Mt].join("|")+")"+jt+Ut+")*",zt="(?:"+["[\\u2700-\\u27bf]",Dt,Mt].join("|")+")"+Gt,Ht="(?:"+[Ot+kt+"?",kt,Dt,Mt,"[\\ud800-\\udfff]"].join("|")+")",Vt=RegExp("['’]","g"),Zt=RegExp(kt,"g"),Wt=RegExp(Rt+"(?="+Rt+")|"+Ht+Gt,"g"),qt=RegExp([It+"?"+Pt+"+"+Bt+"(?="+[Et,It,"$"].join("|")+")",_t+"+"+Lt+"(?="+[Et,It+Nt,"$"].join("|")+")",It+"?"+Nt+"+"+Bt,It+"+"+Lt,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",At,zt].join("|"),"g"),Kt=RegExp("[\\u200d\\ud800-\\udfff"+xt+"\\ufe0e\\ufe0f]"),Xt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Yt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Jt=-1,Qt={}
Qt[M]=Qt[I]=Qt[N]=Qt[_]=Qt[B]=Qt[L]=Qt[U]=Qt[j]=Qt[G]=!0,Qt[g]=Qt[v]=Qt[O]=Qt[m]=Qt[D]=Qt[y]=Qt[b]=Qt[w]=Qt[S]=Qt[C]=Qt[T]=Qt[k]=Qt[A]=Qt[P]=Qt[R]=!1
var $t={}
$t[g]=$t[v]=$t[O]=$t[D]=$t[m]=$t[y]=$t[M]=$t[I]=$t[N]=$t[_]=$t[B]=$t[S]=$t[C]=$t[T]=$t[k]=$t[A]=$t[P]=$t[F]=$t[L]=$t[U]=$t[j]=$t[G]=!0,$t[b]=$t[w]=$t[R]=!1
var te={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ee=parseFloat,ne=parseInt,re="object"==typeof global&&global&&global.Object===Object&&global,ie="object"==typeof self&&self&&self.Object===Object&&self,oe=re||ie||Function("return this")(),ae=e&&!e.nodeType&&e,se=ae&&t&&!t.nodeType&&t,ue=se&&se.exports===ae,ce=ue&&re.process,he=function(){try{return se&&se.require&&se.require("util").types||ce&&ce.binding&&ce.binding("util")}catch(t){}}(),le=he&&he.isArrayBuffer,fe=he&&he.isDate,de=he&&he.isMap,pe=he&&he.isRegExp,ge=he&&he.isSet,ve=he&&he.isTypedArray
function me(t,e,n){switch(n.length){case 0:return t.call(e)
case 1:return t.call(e,n[0])
case 2:return t.call(e,n[0],n[1])
case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function ye(t,e,n,r){for(var i=-1,o=null==t?0:t.length;++i<o;){var a=t[i]
e(r,a,n(a),t)}return r}function be(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}function we(t,e){for(var n=null==t?0:t.length;n--&&!1!==e(t[n],n,t););return t}function xe(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(!e(t[n],n,t))return!1
return!0}function Se(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var a=t[n]
e(a,n,t)&&(o[i++]=a)}return o}function Ce(t,e){return!(null==t||!t.length)&&Me(t,e,0)>-1}function Te(t,e,n){for(var r=-1,i=null==t?0:t.length;++r<i;)if(n(e,t[r]))return!0
return!1}function Ee(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t)
return i}function ke(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n]
return t}function Ae(t,e,n,r){var i=-1,o=null==t?0:t.length
for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t)
return n}function Pe(t,e,n,r){var i=null==t?0:t.length
for(r&&i&&(n=t[--i]);i--;)n=e(n,t[i],i,t)
return n}function Fe(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0
return!1}var Re=Be("length")
function Oe(t,e,n){var r
return n(t,(function(t,n,i){if(e(t,n,i))return r=n,!1})),r}function De(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o
return-1}function Me(t,e,n){return e==e?function(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r
return-1}(t,e,n):De(t,Ne,n)}function Ie(t,e,n,r){for(var i=n-1,o=t.length;++i<o;)if(r(t[i],e))return i
return-1}function Ne(t){return t!=t}function _e(t,e){var n=null==t?0:t.length
return n?je(t,e)/n:f}function Be(t){return function(e){return null==e?i:e[t]}}function Le(t){return function(e){return null==t?i:t[e]}}function Ue(t,e,n,r,i){return i(t,(function(t,i,o){n=r?(r=!1,t):e(n,t,i,o)})),n}function je(t,e){for(var n,r=-1,o=t.length;++r<o;){var a=e(t[r])
a!==i&&(n=n===i?a:n+a)}return n}function Ge(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n)
return r}function ze(t){return t?t.slice(0,an(t)+1).replace(rt,""):t}function He(t){return function(e){return t(e)}}function Ve(t,e){return Ee(e,(function(e){return t[e]}))}function Ze(t,e){return t.has(e)}function We(t,e){for(var n=-1,r=t.length;++n<r&&Me(e,t[n],0)>-1;);return n}function qe(t,e){for(var n=t.length;n--&&Me(e,t[n],0)>-1;);return n}function Ke(t,e){for(var n=t.length,r=0;n--;)t[n]===e&&++r
return r}var Xe=Le({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Ye=Le({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})
function Je(t){return"\\"+te[t]}function Qe(t){return Kt.test(t)}function $e(t){var e=-1,n=Array(t.size)
return t.forEach((function(t,r){n[++e]=[r,t]})),n}function tn(t,e){return function(n){return t(e(n))}}function en(t,e){for(var n=-1,r=t.length,i=0,o=[];++n<r;){var a=t[n]
a!==e&&a!==s||(t[n]=s,o[i++]=n)}return o}function nn(t){var e=-1,n=Array(t.size)
return t.forEach((function(t){n[++e]=t})),n}function rn(t){return Qe(t)?function(t){for(var e=Wt.lastIndex=0;Wt.test(t);)++e
return e}(t):Re(t)}function on(t){return Qe(t)?function(t){return t.match(Wt)||[]}(t):function(t){return t.split("")}(t)}function an(t){for(var e=t.length;e--&&it.test(t.charAt(e)););return e}var sn=Le({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),un=function t(e){var n,r=(e=null==e?oe:un.defaults(oe.Object(),e,un.pick(oe,Yt))).Array,it=e.Date,xt=e.Error,St=e.Function,Ct=e.Math,Tt=e.Object,Et=e.RegExp,kt=e.String,At=e.TypeError,Pt=r.prototype,Ft=St.prototype,Rt=Tt.prototype,Ot=e["__core-js_shared__"],Dt=Ft.toString,Mt=Rt.hasOwnProperty,It=0,Nt=(n=/[^.]+$/.exec(Ot&&Ot.keys&&Ot.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",_t=Rt.toString,Bt=Dt.call(Tt),Lt=oe._,Ut=Et("^"+Dt.call(Mt).replace(et,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),jt=ue?e.Buffer:i,Gt=e.Symbol,zt=e.Uint8Array,Ht=jt?jt.allocUnsafe:i,Wt=tn(Tt.getPrototypeOf,Tt),Kt=Tt.create,te=Rt.propertyIsEnumerable,re=Pt.splice,ie=Gt?Gt.isConcatSpreadable:i,ae=Gt?Gt.iterator:i,se=Gt?Gt.toStringTag:i,ce=function(){try{var t=uo(Tt,"defineProperty")
return t({},"",{}),t}catch(t){}}(),he=e.clearTimeout!==oe.clearTimeout&&e.clearTimeout,Re=it&&it.now!==oe.Date.now&&it.now,Le=e.setTimeout!==oe.setTimeout&&e.setTimeout,cn=Ct.ceil,hn=Ct.floor,ln=Tt.getOwnPropertySymbols,fn=jt?jt.isBuffer:i,dn=e.isFinite,pn=Pt.join,gn=tn(Tt.keys,Tt),vn=Ct.max,mn=Ct.min,yn=it.now,bn=e.parseInt,wn=Ct.random,xn=Pt.reverse,Sn=uo(e,"DataView"),Cn=uo(e,"Map"),Tn=uo(e,"Promise"),En=uo(e,"Set"),kn=uo(e,"WeakMap"),An=uo(Tt,"create"),Pn=kn&&new kn,Fn={},Rn=Lo(Sn),On=Lo(Cn),Dn=Lo(Tn),Mn=Lo(En),In=Lo(kn),Nn=Gt?Gt.prototype:i,_n=Nn?Nn.valueOf:i,Bn=Nn?Nn.toString:i
function Ln(t){if(es(t)&&!Va(t)&&!(t instanceof zn)){if(t instanceof Gn)return t
if(Mt.call(t,"__wrapped__"))return Uo(t)}return new Gn(t)}var Un=function(){function t(){}return function(e){if(!ts(e))return{}
if(Kt)return Kt(e)
t.prototype=e
var n=new t
return t.prototype=i,n}}()
function jn(){}function Gn(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=i}function zn(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=d,this.__views__=[]}function Hn(t){var e=-1,n=null==t?0:t.length
for(this.clear();++e<n;){var r=t[e]
this.set(r[0],r[1])}}function Vn(t){var e=-1,n=null==t?0:t.length
for(this.clear();++e<n;){var r=t[e]
this.set(r[0],r[1])}}function Zn(t){var e=-1,n=null==t?0:t.length
for(this.clear();++e<n;){var r=t[e]
this.set(r[0],r[1])}}function Wn(t){var e=-1,n=null==t?0:t.length
for(this.__data__=new Zn;++e<n;)this.add(t[e])}function qn(t){var e=this.__data__=new Vn(t)
this.size=e.size}function Kn(t,e){var n=Va(t),r=!n&&Ha(t),i=!n&&!r&&Ka(t),o=!n&&!r&&!i&&cs(t),a=n||r||i||o,s=a?Ge(t.length,kt):[],u=s.length
for(var c in t)!e&&!Mt.call(t,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||vo(c,u))||s.push(c)
return s}function Xn(t){var e=t.length
return e?t[Zr(0,e-1)]:i}function Yn(t,e){return Mo(ki(t),or(e,0,t.length))}function Jn(t){return Mo(ki(t))}function Qn(t,e,n){(n!==i&&!ja(t[e],n)||n===i&&!(e in t))&&rr(t,e,n)}function $n(t,e,n){var r=t[e]
Mt.call(t,e)&&ja(r,n)&&(n!==i||e in t)||rr(t,e,n)}function tr(t,e){for(var n=t.length;n--;)if(ja(t[n][0],e))return n
return-1}function er(t,e,n,r){return hr(t,(function(t,i,o){e(r,t,n(t),o)})),r}function nr(t,e){return t&&Ai(e,Os(e),t)}function rr(t,e,n){"__proto__"==e&&ce?ce(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function ir(t,e){for(var n=-1,o=e.length,a=r(o),s=null==t;++n<o;)a[n]=s?i:ks(t,e[n])
return a}function or(t,e,n){return t==t&&(n!==i&&(t=t<=n?t:n),e!==i&&(t=t>=e?t:e)),t}function ar(t,e,n,r,o,a){var s,u=1&e,c=2&e,h=4&e
if(n&&(s=o?n(t,r,o,a):n(t)),s!==i)return s
if(!ts(t))return t
var l=Va(t)
if(l){if(s=function(t){var e=t.length,n=new t.constructor(e)
return e&&"string"==typeof t[0]&&Mt.call(t,"index")&&(n.index=t.index,n.input=t.input),n}(t),!u)return ki(t,s)}else{var f=lo(t),d=f==w||f==x
if(Ka(t))return wi(t,u)
if(f==T||f==g||d&&!o){if(s=c||d?{}:po(t),!u)return c?function(t,e){return Ai(t,ho(t),e)}(t,function(t,e){return t&&Ai(e,Ds(e),t)}(s,t)):function(t,e){return Ai(t,co(t),e)}(t,nr(s,t))}else{if(!$t[f])return o?t:{}
s=function(t,e,n){var r,i=t.constructor
switch(e){case O:return xi(t)
case m:case y:return new i(+t)
case D:return function(t,e){var n=e?xi(t.buffer):t.buffer
return new t.constructor(n,t.byteOffset,t.byteLength)}(t,n)
case M:case I:case N:case _:case B:case L:case U:case j:case G:return Si(t,n)
case S:return new i
case C:case P:return new i(t)
case k:return function(t){var e=new t.constructor(t.source,ft.exec(t))
return e.lastIndex=t.lastIndex,e}(t)
case A:return new i
case F:return r=t,_n?Tt(_n.call(r)):{}}}(t,f,u)}}a||(a=new qn)
var p=a.get(t)
if(p)return p
a.set(t,s),as(t)?t.forEach((function(r){s.add(ar(r,e,n,r,t,a))})):ns(t)&&t.forEach((function(r,i){s.set(i,ar(r,e,n,i,t,a))}))
var v=l?i:(h?c?eo:to:c?Ds:Os)(t)
return be(v||t,(function(r,i){v&&(r=t[i=r]),$n(s,i,ar(r,e,n,i,t,a))})),s}function sr(t,e,n){var r=n.length
if(null==t)return!r
for(t=Tt(t);r--;){var o=n[r],a=e[o],s=t[o]
if(s===i&&!(o in t)||!a(s))return!1}return!0}function ur(t,e,n){if("function"!=typeof t)throw new At(o)
return Fo((function(){t.apply(i,n)}),e)}function cr(t,e,n,r){var i=-1,o=Ce,a=!0,s=t.length,u=[],c=e.length
if(!s)return u
n&&(e=Ee(e,He(n))),r?(o=Te,a=!1):e.length>=200&&(o=Ze,a=!1,e=new Wn(e))
t:for(;++i<s;){var h=t[i],l=null==n?h:n(h)
if(h=r||0!==h?h:0,a&&l==l){for(var f=c;f--;)if(e[f]===l)continue t
u.push(h)}else o(e,l,r)||u.push(h)}return u}Ln.templateSettings={escape:X,evaluate:Y,interpolate:J,variable:"",imports:{_:Ln}},Ln.prototype=jn.prototype,Ln.prototype.constructor=Ln,Gn.prototype=Un(jn.prototype),Gn.prototype.constructor=Gn,zn.prototype=Un(jn.prototype),zn.prototype.constructor=zn,Hn.prototype.clear=function(){this.__data__=An?An(null):{},this.size=0},Hn.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t]
return this.size-=e?1:0,e},Hn.prototype.get=function(t){var e=this.__data__
if(An){var n=e[t]
return n===a?i:n}return Mt.call(e,t)?e[t]:i},Hn.prototype.has=function(t){var e=this.__data__
return An?e[t]!==i:Mt.call(e,t)},Hn.prototype.set=function(t,e){var n=this.__data__
return this.size+=this.has(t)?0:1,n[t]=An&&e===i?a:e,this},Vn.prototype.clear=function(){this.__data__=[],this.size=0},Vn.prototype.delete=function(t){var e=this.__data__,n=tr(e,t)
return!(n<0||(n==e.length-1?e.pop():re.call(e,n,1),--this.size,0))},Vn.prototype.get=function(t){var e=this.__data__,n=tr(e,t)
return n<0?i:e[n][1]},Vn.prototype.has=function(t){return tr(this.__data__,t)>-1},Vn.prototype.set=function(t,e){var n=this.__data__,r=tr(n,t)
return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},Zn.prototype.clear=function(){this.size=0,this.__data__={hash:new Hn,map:new(Cn||Vn),string:new Hn}},Zn.prototype.delete=function(t){var e=ao(this,t).delete(t)
return this.size-=e?1:0,e},Zn.prototype.get=function(t){return ao(this,t).get(t)},Zn.prototype.has=function(t){return ao(this,t).has(t)},Zn.prototype.set=function(t,e){var n=ao(this,t),r=n.size
return n.set(t,e),this.size+=n.size==r?0:1,this},Wn.prototype.add=Wn.prototype.push=function(t){return this.__data__.set(t,a),this},Wn.prototype.has=function(t){return this.__data__.has(t)},qn.prototype.clear=function(){this.__data__=new Vn,this.size=0},qn.prototype.delete=function(t){var e=this.__data__,n=e.delete(t)
return this.size=e.size,n},qn.prototype.get=function(t){return this.__data__.get(t)},qn.prototype.has=function(t){return this.__data__.has(t)},qn.prototype.set=function(t,e){var n=this.__data__
if(n instanceof Vn){var r=n.__data__
if(!Cn||r.length<199)return r.push([t,e]),this.size=++n.size,this
n=this.__data__=new Zn(r)}return n.set(t,e),this.size=n.size,this}
var hr=Ri(yr),lr=Ri(br,!0)
function fr(t,e){var n=!0
return hr(t,(function(t,r,i){return n=!!e(t,r,i)})),n}function dr(t,e,n){for(var r=-1,o=t.length;++r<o;){var a=t[r],s=e(a)
if(null!=s&&(u===i?s==s&&!us(s):n(s,u)))var u=s,c=a}return c}function pr(t,e){var n=[]
return hr(t,(function(t,r,i){e(t,r,i)&&n.push(t)})),n}function gr(t,e,n,r,i){var o=-1,a=t.length
for(n||(n=go),i||(i=[]);++o<a;){var s=t[o]
e>0&&n(s)?e>1?gr(s,e-1,n,r,i):ke(i,s):r||(i[i.length]=s)}return i}var vr=Oi(),mr=Oi(!0)
function yr(t,e){return t&&vr(t,e,Os)}function br(t,e){return t&&mr(t,e,Os)}function wr(t,e){return Se(e,(function(e){return Ja(t[e])}))}function xr(t,e){for(var n=0,r=(e=vi(e,t)).length;null!=t&&n<r;)t=t[Bo(e[n++])]
return n&&n==r?t:i}function Sr(t,e,n){var r=e(t)
return Va(t)?r:ke(r,n(t))}function Cr(t){return null==t?t===i?"[object Undefined]":"[object Null]":se&&se in Tt(t)?function(t){var e=Mt.call(t,se),n=t[se]
try{t[se]=i
var r=!0}catch(t){}var o=_t.call(t)
return r&&(e?t[se]=n:delete t[se]),o}(t):function(t){return _t.call(t)}(t)}function Tr(t,e){return t>e}function Er(t,e){return null!=t&&Mt.call(t,e)}function kr(t,e){return null!=t&&e in Tt(t)}function Ar(t,e,n){for(var o=n?Te:Ce,a=t[0].length,s=t.length,u=s,c=r(s),h=1/0,l=[];u--;){var f=t[u]
u&&e&&(f=Ee(f,He(e))),h=mn(f.length,h),c[u]=!n&&(e||a>=120&&f.length>=120)?new Wn(u&&f):i}f=t[0]
var d=-1,p=c[0]
t:for(;++d<a&&l.length<h;){var g=f[d],v=e?e(g):g
if(g=n||0!==g?g:0,!(p?Ze(p,v):o(l,v,n))){for(u=s;--u;){var m=c[u]
if(!(m?Ze(m,v):o(t[u],v,n)))continue t}p&&p.push(v),l.push(g)}}return l}function Pr(t,e,n){var r=null==(t=Eo(t,e=vi(e,t)))?t:t[Bo(Yo(e))]
return null==r?i:me(r,t,n)}function Fr(t){return es(t)&&Cr(t)==g}function Rr(t,e,n,r,o){return t===e||(null==t||null==e||!es(t)&&!es(e)?t!=t&&e!=e:function(t,e,n,r,o,a){var s=Va(t),u=Va(e),c=s?v:lo(t),h=u?v:lo(e),l=(c=c==g?T:c)==T,f=(h=h==g?T:h)==T,d=c==h
if(d&&Ka(t)){if(!Ka(e))return!1
s=!0,l=!1}if(d&&!l)return a||(a=new qn),s||cs(t)?Qi(t,e,n,r,o,a):function(t,e,n,r,i,o,a){switch(n){case D:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1
t=t.buffer,e=e.buffer
case O:return!(t.byteLength!=e.byteLength||!o(new zt(t),new zt(e)))
case m:case y:case C:return ja(+t,+e)
case b:return t.name==e.name&&t.message==e.message
case k:case P:return t==e+""
case S:var s=$e
case A:var u=1&r
if(s||(s=nn),t.size!=e.size&&!u)return!1
var c=a.get(t)
if(c)return c==e
r|=2,a.set(t,e)
var h=Qi(s(t),s(e),r,i,o,a)
return a.delete(t),h
case F:if(_n)return _n.call(t)==_n.call(e)}return!1}(t,e,c,n,r,o,a)
if(!(1&n)){var p=l&&Mt.call(t,"__wrapped__"),w=f&&Mt.call(e,"__wrapped__")
if(p||w){var x=p?t.value():t,E=w?e.value():e
return a||(a=new qn),o(x,E,n,r,a)}}return!!d&&(a||(a=new qn),function(t,e,n,r,o,a){var s=1&n,u=to(t),c=u.length
if(c!=to(e).length&&!s)return!1
for(var h=c;h--;){var l=u[h]
if(!(s?l in e:Mt.call(e,l)))return!1}var f=a.get(t),d=a.get(e)
if(f&&d)return f==e&&d==t
var p=!0
a.set(t,e),a.set(e,t)
for(var g=s;++h<c;){var v=t[l=u[h]],m=e[l]
if(r)var y=s?r(m,v,l,e,t,a):r(v,m,l,t,e,a)
if(!(y===i?v===m||o(v,m,n,r,a):y)){p=!1
break}g||(g="constructor"==l)}if(p&&!g){var b=t.constructor,w=e.constructor
b==w||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w||(p=!1)}return a.delete(t),a.delete(e),p}(t,e,n,r,o,a))}(t,e,n,r,Rr,o))}function Or(t,e,n,r){var o=n.length,a=o,s=!r
if(null==t)return!a
for(t=Tt(t);o--;){var u=n[o]
if(s&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<a;){var c=(u=n[o])[0],h=t[c],l=u[1]
if(s&&u[2]){if(h===i&&!(c in t))return!1}else{var f=new qn
if(r)var d=r(h,l,c,t,e,f)
if(!(d===i?Rr(l,h,3,r,f):d))return!1}}return!0}function Dr(t){return!(!ts(t)||(e=t,Nt&&Nt in e))&&(Ja(t)?Ut:gt).test(Lo(t))
var e}function Mr(t){return"function"==typeof t?t:null==t?ru:"object"==typeof t?Va(t)?Lr(t[0],t[1]):Br(t):fu(t)}function Ir(t){if(!xo(t))return gn(t)
var e=[]
for(var n in Tt(t))Mt.call(t,n)&&"constructor"!=n&&e.push(n)
return e}function Nr(t,e){return t<e}function _r(t,e){var n=-1,i=Wa(t)?r(t.length):[]
return hr(t,(function(t,r,o){i[++n]=e(t,r,o)})),i}function Br(t){var e=so(t)
return 1==e.length&&e[0][2]?Co(e[0][0],e[0][1]):function(n){return n===t||Or(n,t,e)}}function Lr(t,e){return yo(t)&&So(e)?Co(Bo(t),e):function(n){var r=ks(n,t)
return r===i&&r===e?As(n,t):Rr(e,r,3)}}function Ur(t,e,n,r,o){t!==e&&vr(e,(function(a,s){if(o||(o=new qn),ts(a))!function(t,e,n,r,o,a,s){var u=Ao(t,n),c=Ao(e,n),h=s.get(c)
if(h)Qn(t,n,h)
else{var l=a?a(u,c,n+"",t,e,s):i,f=l===i
if(f){var d=Va(c),p=!d&&Ka(c),g=!d&&!p&&cs(c)
l=c,d||p||g?Va(u)?l=u:qa(u)?l=ki(u):p?(f=!1,l=wi(c,!0)):g?(f=!1,l=Si(c,!0)):l=[]:is(c)||Ha(c)?(l=u,Ha(u)?l=ms(u):ts(u)&&!Ja(u)||(l=po(c))):f=!1}f&&(s.set(c,l),o(l,c,r,a,s),s.delete(c)),Qn(t,n,l)}}(t,e,s,n,Ur,r,o)
else{var u=r?r(Ao(t,s),a,s+"",t,e,o):i
u===i&&(u=a),Qn(t,s,u)}}),Ds)}function jr(t,e){var n=t.length
if(n)return vo(e+=e<0?n:0,n)?t[e]:i}function Gr(t,e,n){e=e.length?Ee(e,(function(t){return Va(t)?function(e){return xr(e,1===t.length?t[0]:t)}:t})):[ru]
var r=-1
e=Ee(e,He(oo()))
var i=_r(t,(function(t,n,i){var o=Ee(e,(function(e){return e(t)}))
return{criteria:o,index:++r,value:t}}))
return function(t,e){var r=t.length
for(t.sort((function(t,e){return function(t,e,n){for(var r=-1,i=t.criteria,o=e.criteria,a=i.length,s=n.length;++r<a;){var u=Ci(i[r],o[r])
if(u)return r>=s?u:u*("desc"==n[r]?-1:1)}return t.index-e.index}(t,e,n)}));r--;)t[r]=t[r].value
return t}(i)}function zr(t,e,n){for(var r=-1,i=e.length,o={};++r<i;){var a=e[r],s=xr(t,a)
n(s,a)&&Yr(o,vi(a,t),s)}return o}function Hr(t,e,n,r){var i=r?Ie:Me,o=-1,a=e.length,s=t
for(t===e&&(e=ki(e)),n&&(s=Ee(t,He(n)));++o<a;)for(var u=0,c=e[o],h=n?n(c):c;(u=i(s,h,u,r))>-1;)s!==t&&re.call(s,u,1),re.call(t,u,1)
return t}function Vr(t,e){for(var n=t?e.length:0,r=n-1;n--;){var i=e[n]
if(n==r||i!==o){var o=i
vo(i)?re.call(t,i,1):ui(t,i)}}return t}function Zr(t,e){return t+hn(wn()*(e-t+1))}function Wr(t,e){var n=""
if(!t||e<1||e>l)return n
do{e%2&&(n+=t),(e=hn(e/2))&&(t+=t)}while(e)
return n}function qr(t,e){return Ro(To(t,e,ru),t+"")}function Kr(t){return Xn(js(t))}function Xr(t,e){var n=js(t)
return Mo(n,or(e,0,n.length))}function Yr(t,e,n,r){if(!ts(t))return t
for(var o=-1,a=(e=vi(e,t)).length,s=a-1,u=t;null!=u&&++o<a;){var c=Bo(e[o]),h=n
if("__proto__"===c||"constructor"===c||"prototype"===c)return t
if(o!=s){var l=u[c];(h=r?r(l,c,u):i)===i&&(h=ts(l)?l:vo(e[o+1])?[]:{})}$n(u,c,h),u=u[c]}return t}var Jr=Pn?function(t,e){return Pn.set(t,e),t}:ru,Qr=ce?function(t,e){return ce(t,"toString",{configurable:!0,enumerable:!1,value:tu(e),writable:!0})}:ru
function $r(t){return Mo(js(t))}function ti(t,e,n){var i=-1,o=t.length
e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0
for(var a=r(o);++i<o;)a[i]=t[i+e]
return a}function ei(t,e){var n
return hr(t,(function(t,r,i){return!(n=e(t,r,i))})),!!n}function ni(t,e,n){var r=0,i=null==t?r:t.length
if("number"==typeof e&&e==e&&i<=2147483647){for(;r<i;){var o=r+i>>>1,a=t[o]
null!==a&&!us(a)&&(n?a<=e:a<e)?r=o+1:i=o}return i}return ri(t,e,ru,n)}function ri(t,e,n,r){var o=0,a=null==t?0:t.length
if(0===a)return 0
for(var s=(e=n(e))!=e,u=null===e,c=us(e),h=e===i;o<a;){var l=hn((o+a)/2),f=n(t[l]),d=f!==i,p=null===f,g=f==f,v=us(f)
if(s)var m=r||g
else m=h?g&&(r||d):u?g&&d&&(r||!p):c?g&&d&&!p&&(r||!v):!p&&!v&&(r?f<=e:f<e)
m?o=l+1:a=l}return mn(a,4294967294)}function ii(t,e){for(var n=-1,r=t.length,i=0,o=[];++n<r;){var a=t[n],s=e?e(a):a
if(!n||!ja(s,u)){var u=s
o[i++]=0===a?0:a}}return o}function oi(t){return"number"==typeof t?t:us(t)?f:+t}function ai(t){if("string"==typeof t)return t
if(Va(t))return Ee(t,ai)+""
if(us(t))return Bn?Bn.call(t):""
var e=t+""
return"0"==e&&1/t==-1/0?"-0":e}function si(t,e,n){var r=-1,i=Ce,o=t.length,a=!0,s=[],u=s
if(n)a=!1,i=Te
else if(o>=200){var c=e?null:Wi(t)
if(c)return nn(c)
a=!1,i=Ze,u=new Wn}else u=e?[]:s
t:for(;++r<o;){var h=t[r],l=e?e(h):h
if(h=n||0!==h?h:0,a&&l==l){for(var f=u.length;f--;)if(u[f]===l)continue t
e&&u.push(l),s.push(h)}else i(u,l,n)||(u!==s&&u.push(l),s.push(h))}return s}function ui(t,e){return null==(t=Eo(t,e=vi(e,t)))||delete t[Bo(Yo(e))]}function ci(t,e,n,r){return Yr(t,e,n(xr(t,e)),r)}function hi(t,e,n,r){for(var i=t.length,o=r?i:-1;(r?o--:++o<i)&&e(t[o],o,t););return n?ti(t,r?0:o,r?o+1:i):ti(t,r?o+1:0,r?i:o)}function li(t,e){var n=t
return n instanceof zn&&(n=n.value()),Ae(e,(function(t,e){return e.func.apply(e.thisArg,ke([t],e.args))}),n)}function fi(t,e,n){var i=t.length
if(i<2)return i?si(t[0]):[]
for(var o=-1,a=r(i);++o<i;)for(var s=t[o],u=-1;++u<i;)u!=o&&(a[o]=cr(a[o]||s,t[u],e,n))
return si(gr(a,1),e,n)}function di(t,e,n){for(var r=-1,o=t.length,a=e.length,s={};++r<o;){var u=r<a?e[r]:i
n(s,t[r],u)}return s}function pi(t){return qa(t)?t:[]}function gi(t){return"function"==typeof t?t:ru}function vi(t,e){return Va(t)?t:yo(t,e)?[t]:_o(ys(t))}var mi=qr
function yi(t,e,n){var r=t.length
return n=n===i?r:n,!e&&n>=r?t:ti(t,e,n)}var bi=he||function(t){return oe.clearTimeout(t)}
function wi(t,e){if(e)return t.slice()
var n=t.length,r=Ht?Ht(n):new t.constructor(n)
return t.copy(r),r}function xi(t){var e=new t.constructor(t.byteLength)
return new zt(e).set(new zt(t)),e}function Si(t,e){var n=e?xi(t.buffer):t.buffer
return new t.constructor(n,t.byteOffset,t.length)}function Ci(t,e){if(t!==e){var n=t!==i,r=null===t,o=t==t,a=us(t),s=e!==i,u=null===e,c=e==e,h=us(e)
if(!u&&!h&&!a&&t>e||a&&s&&c&&!u&&!h||r&&s&&c||!n&&c||!o)return 1
if(!r&&!a&&!h&&t<e||h&&n&&o&&!r&&!a||u&&n&&o||!s&&o||!c)return-1}return 0}function Ti(t,e,n,i){for(var o=-1,a=t.length,s=n.length,u=-1,c=e.length,h=vn(a-s,0),l=r(c+h),f=!i;++u<c;)l[u]=e[u]
for(;++o<s;)(f||o<a)&&(l[n[o]]=t[o])
for(;h--;)l[u++]=t[o++]
return l}function Ei(t,e,n,i){for(var o=-1,a=t.length,s=-1,u=n.length,c=-1,h=e.length,l=vn(a-u,0),f=r(l+h),d=!i;++o<l;)f[o]=t[o]
for(var p=o;++c<h;)f[p+c]=e[c]
for(;++s<u;)(d||o<a)&&(f[p+n[s]]=t[o++])
return f}function ki(t,e){var n=-1,i=t.length
for(e||(e=r(i));++n<i;)e[n]=t[n]
return e}function Ai(t,e,n,r){var o=!n
n||(n={})
for(var a=-1,s=e.length;++a<s;){var u=e[a],c=r?r(n[u],t[u],u,n,t):i
c===i&&(c=t[u]),o?rr(n,u,c):$n(n,u,c)}return n}function Pi(t,e){return function(n,r){var i=Va(n)?ye:er,o=e?e():{}
return i(n,t,oo(r,2),o)}}function Fi(t){return qr((function(e,n){var r=-1,o=n.length,a=o>1?n[o-1]:i,s=o>2?n[2]:i
for(a=t.length>3&&"function"==typeof a?(o--,a):i,s&&mo(n[0],n[1],s)&&(a=o<3?i:a,o=1),e=Tt(e);++r<o;){var u=n[r]
u&&t(e,u,r,a)}return e}))}function Ri(t,e){return function(n,r){if(null==n)return n
if(!Wa(n))return t(n,r)
for(var i=n.length,o=e?i:-1,a=Tt(n);(e?o--:++o<i)&&!1!==r(a[o],o,a););return n}}function Oi(t){return function(e,n,r){for(var i=-1,o=Tt(e),a=r(e),s=a.length;s--;){var u=a[t?s:++i]
if(!1===n(o[u],u,o))break}return e}}function Di(t){return function(e){var n=Qe(e=ys(e))?on(e):i,r=n?n[0]:e.charAt(0),o=n?yi(n,1).join(""):e.slice(1)
return r[t]()+o}}function Mi(t){return function(e){return Ae(Js(Hs(e).replace(Vt,"")),t,"")}}function Ii(t){return function(){var e=arguments
switch(e.length){case 0:return new t
case 1:return new t(e[0])
case 2:return new t(e[0],e[1])
case 3:return new t(e[0],e[1],e[2])
case 4:return new t(e[0],e[1],e[2],e[3])
case 5:return new t(e[0],e[1],e[2],e[3],e[4])
case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5])
case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=Un(t.prototype),r=t.apply(n,e)
return ts(r)?r:n}}function Ni(t){return function(e,n,r){var o=Tt(e)
if(!Wa(e)){var a=oo(n,3)
e=Os(e),n=function(t){return a(o[t],t,o)}}var s=t(e,n,r)
return s>-1?o[a?e[s]:s]:i}}function _i(t){return $i((function(e){var n=e.length,r=n,a=Gn.prototype.thru
for(t&&e.reverse();r--;){var s=e[r]
if("function"!=typeof s)throw new At(o)
if(a&&!u&&"wrapper"==ro(s))var u=new Gn([],!0)}for(r=u?r:n;++r<n;){var c=ro(s=e[r]),h="wrapper"==c?no(s):i
u=h&&bo(h[0])&&424==h[1]&&!h[4].length&&1==h[9]?u[ro(h[0])].apply(u,h[3]):1==s.length&&bo(s)?u[c]():u.thru(s)}return function(){var t=arguments,r=t[0]
if(u&&1==t.length&&Va(r))return u.plant(r).value()
for(var i=0,o=n?e[i].apply(this,t):r;++i<n;)o=e[i].call(this,o)
return o}}))}function Bi(t,e,n,o,a,s,u,h,l,f){var d=e&c,p=1&e,g=2&e,v=24&e,m=512&e,y=g?i:Ii(t)
return function i(){for(var c=arguments.length,b=r(c),w=c;w--;)b[w]=arguments[w]
if(v)var x=io(i),S=Ke(b,x)
if(o&&(b=Ti(b,o,a,v)),s&&(b=Ei(b,s,u,v)),c-=S,v&&c<f){var C=en(b,x)
return Vi(t,e,Bi,i.placeholder,n,b,C,h,l,f-c)}var T=p?n:this,E=g?T[t]:t
return c=b.length,h?b=ko(b,h):m&&c>1&&b.reverse(),d&&l<c&&(b.length=l),this&&this!==oe&&this instanceof i&&(E=y||Ii(E)),E.apply(T,b)}}function Li(t,e){return function(n,r){return function(t,e,n,r){return yr(t,(function(t,i,o){e(r,n(t),i,o)})),r}(n,t,e(r),{})}}function Ui(t,e){return function(n,r){var o
if(n===i&&r===i)return e
if(n!==i&&(o=n),r!==i){if(o===i)return r
"string"==typeof n||"string"==typeof r?(n=ai(n),r=ai(r)):(n=oi(n),r=oi(r)),o=t(n,r)}return o}}function ji(t){return $i((function(e){return e=Ee(e,He(oo())),qr((function(n){var r=this
return t(e,(function(t){return me(t,r,n)}))}))}))}function Gi(t,e){var n=(e=e===i?" ":ai(e)).length
if(n<2)return n?Wr(e,t):e
var r=Wr(e,cn(t/rn(e)))
return Qe(e)?yi(on(r),0,t).join(""):r.slice(0,t)}function zi(t){return function(e,n,o){return o&&"number"!=typeof o&&mo(e,n,o)&&(n=o=i),e=ds(e),n===i?(n=e,e=0):n=ds(n),function(t,e,n,i){for(var o=-1,a=vn(cn((e-t)/(n||1)),0),s=r(a);a--;)s[i?a:++o]=t,t+=n
return s}(e,n,o=o===i?e<n?1:-1:ds(o),t)}}function Hi(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=vs(e),n=vs(n)),t(e,n)}}function Vi(t,e,n,r,o,a,s,c,h,l){var f=8&e
e|=f?u:64,4&(e&=~(f?64:u))||(e&=-4)
var d=[t,e,o,f?a:i,f?s:i,f?i:a,f?i:s,c,h,l],p=n.apply(i,d)
return bo(t)&&Po(p,d),p.placeholder=r,Oo(p,t,e)}function Zi(t){var e=Ct[t]
return function(t,n){if(t=vs(t),(n=null==n?0:mn(ps(n),292))&&dn(t)){var r=(ys(t)+"e").split("e")
return+((r=(ys(e(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}var Wi=En&&1/nn(new En([,-0]))[1]==h?function(t){return new En(t)}:uu
function qi(t){return function(e){var n=lo(e)
return n==S?$e(e):n==A?function(t){var e=-1,n=Array(t.size)
return t.forEach((function(t){n[++e]=[t,t]})),n}(e):function(t,e){return Ee(e,(function(e){return[e,t[e]]}))}(e,t(e))}}function Ki(t,e,n,a,h,l,f,d){var p=2&e
if(!p&&"function"!=typeof t)throw new At(o)
var g=a?a.length:0
if(g||(e&=-97,a=h=i),f=f===i?f:vn(ps(f),0),d=d===i?d:ps(d),g-=h?h.length:0,64&e){var v=a,m=h
a=h=i}var y=p?i:no(t),b=[t,e,n,a,h,v,m,l,f,d]
if(y&&function(t,e){var n=t[1],r=e[1],i=n|r,o=i<131,a=r==c&&8==n||r==c&&256==n&&t[7].length<=e[8]||384==r&&e[7].length<=e[8]&&8==n
if(!o&&!a)return t
1&r&&(t[2]=e[2],i|=1&n?0:4)
var u=e[3]
if(u){var h=t[3]
t[3]=h?Ti(h,u,e[4]):u,t[4]=h?en(t[3],s):e[4]}(u=e[5])&&(h=t[5],t[5]=h?Ei(h,u,e[6]):u,t[6]=h?en(t[5],s):e[6]),(u=e[7])&&(t[7]=u),r&c&&(t[8]=null==t[8]?e[8]:mn(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=i}(b,y),t=b[0],e=b[1],n=b[2],a=b[3],h=b[4],!(d=b[9]=b[9]===i?p?0:t.length:vn(b[9]-g,0))&&24&e&&(e&=-25),e&&1!=e)w=8==e||16==e?function(t,e,n){var o=Ii(t)
return function a(){for(var s=arguments.length,u=r(s),c=s,h=io(a);c--;)u[c]=arguments[c]
var l=s<3&&u[0]!==h&&u[s-1]!==h?[]:en(u,h)
return(s-=l.length)<n?Vi(t,e,Bi,a.placeholder,i,u,l,i,i,n-s):me(this&&this!==oe&&this instanceof a?o:t,this,u)}}(t,e,d):e!=u&&33!=e||h.length?Bi.apply(i,b):function(t,e,n,i){var o=1&e,a=Ii(t)
return function e(){for(var s=-1,u=arguments.length,c=-1,h=i.length,l=r(h+u),f=this&&this!==oe&&this instanceof e?a:t;++c<h;)l[c]=i[c]
for(;u--;)l[c++]=arguments[++s]
return me(f,o?n:this,l)}}(t,e,n,a)
else var w=function(t,e,n){var r=1&e,i=Ii(t)
return function e(){return(this&&this!==oe&&this instanceof e?i:t).apply(r?n:this,arguments)}}(t,e,n)
return Oo((y?Jr:Po)(w,b),t,e)}function Xi(t,e,n,r){return t===i||ja(t,Rt[n])&&!Mt.call(r,n)?e:t}function Yi(t,e,n,r,o,a){return ts(t)&&ts(e)&&(a.set(e,t),Ur(t,e,i,Yi,a),a.delete(e)),t}function Ji(t){return is(t)?i:t}function Qi(t,e,n,r,o,a){var s=1&n,u=t.length,c=e.length
if(u!=c&&!(s&&c>u))return!1
var h=a.get(t),l=a.get(e)
if(h&&l)return h==e&&l==t
var f=-1,d=!0,p=2&n?new Wn:i
for(a.set(t,e),a.set(e,t);++f<u;){var g=t[f],v=e[f]
if(r)var m=s?r(v,g,f,e,t,a):r(g,v,f,t,e,a)
if(m!==i){if(m)continue
d=!1
break}if(p){if(!Fe(e,(function(t,e){if(!Ze(p,e)&&(g===t||o(g,t,n,r,a)))return p.push(e)}))){d=!1
break}}else if(g!==v&&!o(g,v,n,r,a)){d=!1
break}}return a.delete(t),a.delete(e),d}function $i(t){return Ro(To(t,i,Zo),t+"")}function to(t){return Sr(t,Os,co)}function eo(t){return Sr(t,Ds,ho)}var no=Pn?function(t){return Pn.get(t)}:uu
function ro(t){for(var e=t.name+"",n=Fn[e],r=Mt.call(Fn,e)?n.length:0;r--;){var i=n[r],o=i.func
if(null==o||o==t)return i.name}return e}function io(t){return(Mt.call(Ln,"placeholder")?Ln:t).placeholder}function oo(){var t=Ln.iteratee||iu
return t=t===iu?Mr:t,arguments.length?t(arguments[0],arguments[1]):t}function ao(t,e){var n,r,i=t.__data__
return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function so(t){for(var e=Os(t),n=e.length;n--;){var r=e[n],i=t[r]
e[n]=[r,i,So(i)]}return e}function uo(t,e){var n=function(t,e){return null==t?i:t[e]}(t,e)
return Dr(n)?n:i}var co=ln?function(t){return null==t?[]:(t=Tt(t),Se(ln(t),(function(e){return te.call(t,e)})))}:gu,ho=ln?function(t){for(var e=[];t;)ke(e,co(t)),t=Wt(t)
return e}:gu,lo=Cr
function fo(t,e,n){for(var r=-1,i=(e=vi(e,t)).length,o=!1;++r<i;){var a=Bo(e[r])
if(!(o=null!=t&&n(t,a)))break
t=t[a]}return o||++r!=i?o:!!(i=null==t?0:t.length)&&$a(i)&&vo(a,i)&&(Va(t)||Ha(t))}function po(t){return"function"!=typeof t.constructor||xo(t)?{}:Un(Wt(t))}function go(t){return Va(t)||Ha(t)||!!(ie&&t&&t[ie])}function vo(t,e){var n=typeof t
return!!(e=null==e?l:e)&&("number"==n||"symbol"!=n&&mt.test(t))&&t>-1&&t%1==0&&t<e}function mo(t,e,n){if(!ts(n))return!1
var r=typeof e
return!!("number"==r?Wa(n)&&vo(e,n.length):"string"==r&&e in n)&&ja(n[e],t)}function yo(t,e){if(Va(t))return!1
var n=typeof t
return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!us(t))||$.test(t)||!Q.test(t)||null!=e&&t in Tt(e)}function bo(t){var e=ro(t),n=Ln[e]
if("function"!=typeof n||!(e in zn.prototype))return!1
if(t===n)return!0
var r=no(n)
return!!r&&t===r[0]}(Sn&&lo(new Sn(new ArrayBuffer(1)))!=D||Cn&&lo(new Cn)!=S||Tn&&lo(Tn.resolve())!=E||En&&lo(new En)!=A||kn&&lo(new kn)!=R)&&(lo=function(t){var e=Cr(t),n=e==T?t.constructor:i,r=n?Lo(n):""
if(r)switch(r){case Rn:return D
case On:return S
case Dn:return E
case Mn:return A
case In:return R}return e})
var wo=Ot?Ja:vu
function xo(t){var e=t&&t.constructor
return t===("function"==typeof e&&e.prototype||Rt)}function So(t){return t==t&&!ts(t)}function Co(t,e){return function(n){return null!=n&&n[t]===e&&(e!==i||t in Tt(n))}}function To(t,e,n){return e=vn(e===i?t.length-1:e,0),function(){for(var i=arguments,o=-1,a=vn(i.length-e,0),s=r(a);++o<a;)s[o]=i[e+o]
o=-1
for(var u=r(e+1);++o<e;)u[o]=i[o]
return u[e]=n(s),me(t,this,u)}}function Eo(t,e){return e.length<2?t:xr(t,ti(e,0,-1))}function ko(t,e){for(var n=t.length,r=mn(e.length,n),o=ki(t);r--;){var a=e[r]
t[r]=vo(a,n)?o[a]:i}return t}function Ao(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}var Po=Do(Jr),Fo=Le||function(t,e){return oe.setTimeout(t,e)},Ro=Do(Qr)
function Oo(t,e,n){var r=e+""
return Ro(t,function(t,e){var n=e.length
if(!n)return t
var r=n-1
return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(ot,"{\n/* [wrapped with "+e+"] */\n")}(r,function(t,e){return be(p,(function(n){var r="_."+n[0]
e&n[1]&&!Ce(t,r)&&t.push(r)})),t.sort()}(function(t){var e=t.match(at)
return e?e[1].split(st):[]}(r),n)))}function Do(t){var e=0,n=0
return function(){var r=yn(),o=16-(r-n)
if(n=r,o>0){if(++e>=800)return arguments[0]}else e=0
return t.apply(i,arguments)}}function Mo(t,e){var n=-1,r=t.length,o=r-1
for(e=e===i?r:e;++n<e;){var a=Zr(n,o),s=t[a]
t[a]=t[n],t[n]=s}return t.length=e,t}var Io,No,_o=(Io=Ia((function(t){var e=[]
return 46===t.charCodeAt(0)&&e.push(""),t.replace(tt,(function(t,n,r,i){e.push(r?i.replace(ht,"$1"):n||t)})),e}),(function(t){return 500===No.size&&No.clear(),t})),No=Io.cache,Io)
function Bo(t){if("string"==typeof t||us(t))return t
var e=t+""
return"0"==e&&1/t==-1/0?"-0":e}function Lo(t){if(null!=t){try{return Dt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Uo(t){if(t instanceof zn)return t.clone()
var e=new Gn(t.__wrapped__,t.__chain__)
return e.__actions__=ki(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}var jo=qr((function(t,e){return qa(t)?cr(t,gr(e,1,qa,!0)):[]})),Go=qr((function(t,e){var n=Yo(e)
return qa(n)&&(n=i),qa(t)?cr(t,gr(e,1,qa,!0),oo(n,2)):[]})),zo=qr((function(t,e){var n=Yo(e)
return qa(n)&&(n=i),qa(t)?cr(t,gr(e,1,qa,!0),i,n):[]}))
function Ho(t,e,n){var r=null==t?0:t.length
if(!r)return-1
var i=null==n?0:ps(n)
return i<0&&(i=vn(r+i,0)),De(t,oo(e,3),i)}function Vo(t,e,n){var r=null==t?0:t.length
if(!r)return-1
var o=r-1
return n!==i&&(o=ps(n),o=n<0?vn(r+o,0):mn(o,r-1)),De(t,oo(e,3),o,!0)}function Zo(t){return null!=t&&t.length?gr(t,1):[]}function Wo(t){return t&&t.length?t[0]:i}var qo=qr((function(t){var e=Ee(t,pi)
return e.length&&e[0]===t[0]?Ar(e):[]})),Ko=qr((function(t){var e=Yo(t),n=Ee(t,pi)
return e===Yo(n)?e=i:n.pop(),n.length&&n[0]===t[0]?Ar(n,oo(e,2)):[]})),Xo=qr((function(t){var e=Yo(t),n=Ee(t,pi)
return(e="function"==typeof e?e:i)&&n.pop(),n.length&&n[0]===t[0]?Ar(n,i,e):[]}))
function Yo(t){var e=null==t?0:t.length
return e?t[e-1]:i}var Jo=qr(Qo)
function Qo(t,e){return t&&t.length&&e&&e.length?Hr(t,e):t}var $o=$i((function(t,e){var n=null==t?0:t.length,r=ir(t,e)
return Vr(t,Ee(e,(function(t){return vo(t,n)?+t:t})).sort(Ci)),r}))
function ta(t){return null==t?t:xn.call(t)}var ea=qr((function(t){return si(gr(t,1,qa,!0))})),na=qr((function(t){var e=Yo(t)
return qa(e)&&(e=i),si(gr(t,1,qa,!0),oo(e,2))})),ra=qr((function(t){var e=Yo(t)
return e="function"==typeof e?e:i,si(gr(t,1,qa,!0),i,e)}))
function ia(t){if(!t||!t.length)return[]
var e=0
return t=Se(t,(function(t){if(qa(t))return e=vn(t.length,e),!0})),Ge(e,(function(e){return Ee(t,Be(e))}))}function oa(t,e){if(!t||!t.length)return[]
var n=ia(t)
return null==e?n:Ee(n,(function(t){return me(e,i,t)}))}var aa=qr((function(t,e){return qa(t)?cr(t,e):[]})),sa=qr((function(t){return fi(Se(t,qa))})),ua=qr((function(t){var e=Yo(t)
return qa(e)&&(e=i),fi(Se(t,qa),oo(e,2))})),ca=qr((function(t){var e=Yo(t)
return e="function"==typeof e?e:i,fi(Se(t,qa),i,e)})),ha=qr(ia),la=qr((function(t){var e=t.length,n=e>1?t[e-1]:i
return n="function"==typeof n?(t.pop(),n):i,oa(t,n)}))
function fa(t){var e=Ln(t)
return e.__chain__=!0,e}function da(t,e){return e(t)}var pa=$i((function(t){var e=t.length,n=e?t[0]:0,r=this.__wrapped__,o=function(e){return ir(e,t)}
return!(e>1||this.__actions__.length)&&r instanceof zn&&vo(n)?((r=r.slice(n,+n+(e?1:0))).__actions__.push({func:da,args:[o],thisArg:i}),new Gn(r,this.__chain__).thru((function(t){return e&&!t.length&&t.push(i),t}))):this.thru(o)})),ga=Pi((function(t,e,n){Mt.call(t,n)?++t[n]:rr(t,n,1)})),va=Ni(Ho),ma=Ni(Vo)
function ya(t,e){return(Va(t)?be:hr)(t,oo(e,3))}function ba(t,e){return(Va(t)?we:lr)(t,oo(e,3))}var wa=Pi((function(t,e,n){Mt.call(t,n)?t[n].push(e):rr(t,n,[e])})),xa=qr((function(t,e,n){var i=-1,o="function"==typeof e,a=Wa(t)?r(t.length):[]
return hr(t,(function(t){a[++i]=o?me(e,t,n):Pr(t,e,n)})),a})),Sa=Pi((function(t,e,n){rr(t,n,e)}))
function Ca(t,e){return(Va(t)?Ee:_r)(t,oo(e,3))}var Ta=Pi((function(t,e,n){t[n?0:1].push(e)}),(function(){return[[],[]]})),Ea=qr((function(t,e){if(null==t)return[]
var n=e.length
return n>1&&mo(t,e[0],e[1])?e=[]:n>2&&mo(e[0],e[1],e[2])&&(e=[e[0]]),Gr(t,gr(e,1),[])})),ka=Re||function(){return oe.Date.now()}
function Aa(t,e,n){return e=n?i:e,e=t&&null==e?t.length:e,Ki(t,c,i,i,i,i,e)}function Pa(t,e){var n
if("function"!=typeof e)throw new At(o)
return t=ps(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=i),n}}var Fa=qr((function(t,e,n){var r=1
if(n.length){var i=en(n,io(Fa))
r|=u}return Ki(t,r,e,n,i)})),Ra=qr((function(t,e,n){var r=3
if(n.length){var i=en(n,io(Ra))
r|=u}return Ki(e,r,t,n,i)}))
function Oa(t,e,n){var r,a,s,u,c,h,l=0,f=!1,d=!1,p=!0
if("function"!=typeof t)throw new At(o)
function g(e){var n=r,o=a
return r=a=i,l=e,u=t.apply(o,n)}function v(t){return l=t,c=Fo(y,e),f?g(t):u}function m(t){var n=t-h
return h===i||n>=e||n<0||d&&t-l>=s}function y(){var t=ka()
if(m(t))return b(t)
c=Fo(y,function(t){var n=e-(t-h)
return d?mn(n,s-(t-l)):n}(t))}function b(t){return c=i,p&&r?g(t):(r=a=i,u)}function w(){var t=ka(),n=m(t)
if(r=arguments,a=this,h=t,n){if(c===i)return v(h)
if(d)return bi(c),c=Fo(y,e),g(h)}return c===i&&(c=Fo(y,e)),u}return e=vs(e)||0,ts(n)&&(f=!!n.leading,s=(d="maxWait"in n)?vn(vs(n.maxWait)||0,e):s,p="trailing"in n?!!n.trailing:p),w.cancel=function(){c!==i&&bi(c),l=0,r=h=a=c=i},w.flush=function(){return c===i?u:b(ka())},w}var Da=qr((function(t,e){return ur(t,1,e)})),Ma=qr((function(t,e,n){return ur(t,vs(e)||0,n)}))
function Ia(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new At(o)
var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache
if(o.has(i))return o.get(i)
var a=t.apply(this,r)
return n.cache=o.set(i,a)||o,a}
return n.cache=new(Ia.Cache||Zn),n}function Na(t){if("function"!=typeof t)throw new At(o)
return function(){var e=arguments
switch(e.length){case 0:return!t.call(this)
case 1:return!t.call(this,e[0])
case 2:return!t.call(this,e[0],e[1])
case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}Ia.Cache=Zn
var _a=mi((function(t,e){var n=(e=1==e.length&&Va(e[0])?Ee(e[0],He(oo())):Ee(gr(e,1),He(oo()))).length
return qr((function(r){for(var i=-1,o=mn(r.length,n);++i<o;)r[i]=e[i].call(this,r[i])
return me(t,this,r)}))})),Ba=qr((function(t,e){var n=en(e,io(Ba))
return Ki(t,u,i,e,n)})),La=qr((function(t,e){var n=en(e,io(La))
return Ki(t,64,i,e,n)})),Ua=$i((function(t,e){return Ki(t,256,i,i,i,e)}))
function ja(t,e){return t===e||t!=t&&e!=e}var Ga=Hi(Tr),za=Hi((function(t,e){return t>=e})),Ha=Fr(function(){return arguments}())?Fr:function(t){return es(t)&&Mt.call(t,"callee")&&!te.call(t,"callee")},Va=r.isArray,Za=le?He(le):function(t){return es(t)&&Cr(t)==O}
function Wa(t){return null!=t&&$a(t.length)&&!Ja(t)}function qa(t){return es(t)&&Wa(t)}var Ka=fn||vu,Xa=fe?He(fe):function(t){return es(t)&&Cr(t)==y}
function Ya(t){if(!es(t))return!1
var e=Cr(t)
return e==b||"[object DOMException]"==e||"string"==typeof t.message&&"string"==typeof t.name&&!is(t)}function Ja(t){if(!ts(t))return!1
var e=Cr(t)
return e==w||e==x||"[object AsyncFunction]"==e||"[object Proxy]"==e}function Qa(t){return"number"==typeof t&&t==ps(t)}function $a(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=l}function ts(t){var e=typeof t
return null!=t&&("object"==e||"function"==e)}function es(t){return null!=t&&"object"==typeof t}var ns=de?He(de):function(t){return es(t)&&lo(t)==S}
function rs(t){return"number"==typeof t||es(t)&&Cr(t)==C}function is(t){if(!es(t)||Cr(t)!=T)return!1
var e=Wt(t)
if(null===e)return!0
var n=Mt.call(e,"constructor")&&e.constructor
return"function"==typeof n&&n instanceof n&&Dt.call(n)==Bt}var os=pe?He(pe):function(t){return es(t)&&Cr(t)==k},as=ge?He(ge):function(t){return es(t)&&lo(t)==A}
function ss(t){return"string"==typeof t||!Va(t)&&es(t)&&Cr(t)==P}function us(t){return"symbol"==typeof t||es(t)&&Cr(t)==F}var cs=ve?He(ve):function(t){return es(t)&&$a(t.length)&&!!Qt[Cr(t)]},hs=Hi(Nr),ls=Hi((function(t,e){return t<=e}))
function fs(t){if(!t)return[]
if(Wa(t))return ss(t)?on(t):ki(t)
if(ae&&t[ae])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value)
return n}(t[ae]())
var e=lo(t)
return(e==S?$e:e==A?nn:js)(t)}function ds(t){return t?(t=vs(t))===h||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}function ps(t){var e=ds(t),n=e%1
return e==e?n?e-n:e:0}function gs(t){return t?or(ps(t),0,d):0}function vs(t){if("number"==typeof t)return t
if(us(t))return f
if(ts(t)){var e="function"==typeof t.valueOf?t.valueOf():t
t=ts(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t
t=ze(t)
var n=pt.test(t)
return n||vt.test(t)?ne(t.slice(2),n?2:8):dt.test(t)?f:+t}function ms(t){return Ai(t,Ds(t))}function ys(t){return null==t?"":ai(t)}var bs=Fi((function(t,e){if(xo(e)||Wa(e))Ai(e,Os(e),t)
else for(var n in e)Mt.call(e,n)&&$n(t,n,e[n])})),ws=Fi((function(t,e){Ai(e,Ds(e),t)})),xs=Fi((function(t,e,n,r){Ai(e,Ds(e),t,r)})),Ss=Fi((function(t,e,n,r){Ai(e,Os(e),t,r)})),Cs=$i(ir),Ts=qr((function(t,e){t=Tt(t)
var n=-1,r=e.length,o=r>2?e[2]:i
for(o&&mo(e[0],e[1],o)&&(r=1);++n<r;)for(var a=e[n],s=Ds(a),u=-1,c=s.length;++u<c;){var h=s[u],l=t[h];(l===i||ja(l,Rt[h])&&!Mt.call(t,h))&&(t[h]=a[h])}return t})),Es=qr((function(t){return t.push(i,Yi),me(Is,i,t)}))
function ks(t,e,n){var r=null==t?i:xr(t,e)
return r===i?n:r}function As(t,e){return null!=t&&fo(t,e,kr)}var Ps=Li((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=_t.call(e)),t[e]=n}),tu(ru)),Fs=Li((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=_t.call(e)),Mt.call(t,e)?t[e].push(n):t[e]=[n]}),oo),Rs=qr(Pr)
function Os(t){return Wa(t)?Kn(t):Ir(t)}function Ds(t){return Wa(t)?Kn(t,!0):function(t){if(!ts(t))return function(t){var e=[]
if(null!=t)for(var n in Tt(t))e.push(n)
return e}(t)
var e=xo(t),n=[]
for(var r in t)("constructor"!=r||!e&&Mt.call(t,r))&&n.push(r)
return n}(t)}var Ms=Fi((function(t,e,n){Ur(t,e,n)})),Is=Fi((function(t,e,n,r){Ur(t,e,n,r)})),Ns=$i((function(t,e){var n={}
if(null==t)return n
var r=!1
e=Ee(e,(function(e){return e=vi(e,t),r||(r=e.length>1),e})),Ai(t,eo(t),n),r&&(n=ar(n,7,Ji))
for(var i=e.length;i--;)ui(n,e[i])
return n})),_s=$i((function(t,e){return null==t?{}:function(t,e){return zr(t,e,(function(e,n){return As(t,n)}))}(t,e)}))
function Bs(t,e){if(null==t)return{}
var n=Ee(eo(t),(function(t){return[t]}))
return e=oo(e),zr(t,n,(function(t,n){return e(t,n[0])}))}var Ls=qi(Os),Us=qi(Ds)
function js(t){return null==t?[]:Ve(t,Os(t))}var Gs=Mi((function(t,e,n){return e=e.toLowerCase(),t+(n?zs(e):e)}))
function zs(t){return Ys(ys(t).toLowerCase())}function Hs(t){return(t=ys(t))&&t.replace(yt,Xe).replace(Zt,"")}var Vs=Mi((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()})),Zs=Mi((function(t,e,n){return t+(n?" ":"")+e.toLowerCase()})),Ws=Di("toLowerCase"),qs=Mi((function(t,e,n){return t+(n?"_":"")+e.toLowerCase()})),Ks=Mi((function(t,e,n){return t+(n?" ":"")+Ys(e)})),Xs=Mi((function(t,e,n){return t+(n?" ":"")+e.toUpperCase()})),Ys=Di("toUpperCase")
function Js(t,e,n){return t=ys(t),(e=n?i:e)===i?function(t){return Xt.test(t)}(t)?function(t){return t.match(qt)||[]}(t):function(t){return t.match(ut)||[]}(t):t.match(e)||[]}var Qs=qr((function(t,e){try{return me(t,i,e)}catch(t){return Ya(t)?t:new xt(t)}})),$s=$i((function(t,e){return be(e,(function(e){e=Bo(e),rr(t,e,Fa(t[e],t))})),t}))
function tu(t){return function(){return t}}var eu=_i(),nu=_i(!0)
function ru(t){return t}function iu(t){return Mr("function"==typeof t?t:ar(t,1))}var ou=qr((function(t,e){return function(n){return Pr(n,t,e)}})),au=qr((function(t,e){return function(n){return Pr(t,n,e)}}))
function su(t,e,n){var r=Os(e),i=wr(e,r)
null!=n||ts(e)&&(i.length||!r.length)||(n=e,e=t,t=this,i=wr(e,Os(e)))
var o=!(ts(n)&&"chain"in n&&!n.chain),a=Ja(t)
return be(i,(function(n){var r=e[n]
t[n]=r,a&&(t.prototype[n]=function(){var e=this.__chain__
if(o||e){var n=t(this.__wrapped__),i=n.__actions__=ki(this.__actions__)
return i.push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,ke([this.value()],arguments))})})),t}function uu(){}var cu=ji(Ee),hu=ji(xe),lu=ji(Fe)
function fu(t){return yo(t)?Be(Bo(t)):function(t){return function(e){return xr(e,t)}}(t)}var du=zi(),pu=zi(!0)
function gu(){return[]}function vu(){return!1}var mu,yu=Ui((function(t,e){return t+e}),0),bu=Zi("ceil"),wu=Ui((function(t,e){return t/e}),1),xu=Zi("floor"),Su=Ui((function(t,e){return t*e}),1),Cu=Zi("round"),Tu=Ui((function(t,e){return t-e}),0)
return Ln.after=function(t,e){if("function"!=typeof e)throw new At(o)
return t=ps(t),function(){if(--t<1)return e.apply(this,arguments)}},Ln.ary=Aa,Ln.assign=bs,Ln.assignIn=ws,Ln.assignInWith=xs,Ln.assignWith=Ss,Ln.at=Cs,Ln.before=Pa,Ln.bind=Fa,Ln.bindAll=$s,Ln.bindKey=Ra,Ln.castArray=function(){if(!arguments.length)return[]
var t=arguments[0]
return Va(t)?t:[t]},Ln.chain=fa,Ln.chunk=function(t,e,n){e=(n?mo(t,e,n):e===i)?1:vn(ps(e),0)
var o=null==t?0:t.length
if(!o||e<1)return[]
for(var a=0,s=0,u=r(cn(o/e));a<o;)u[s++]=ti(t,a,a+=e)
return u},Ln.compact=function(t){for(var e=-1,n=null==t?0:t.length,r=0,i=[];++e<n;){var o=t[e]
o&&(i[r++]=o)}return i},Ln.concat=function(){var t=arguments.length
if(!t)return[]
for(var e=r(t-1),n=arguments[0],i=t;i--;)e[i-1]=arguments[i]
return ke(Va(n)?ki(n):[n],gr(e,1))},Ln.cond=function(t){var e=null==t?0:t.length,n=oo()
return t=e?Ee(t,(function(t){if("function"!=typeof t[1])throw new At(o)
return[n(t[0]),t[1]]})):[],qr((function(n){for(var r=-1;++r<e;){var i=t[r]
if(me(i[0],this,n))return me(i[1],this,n)}}))},Ln.conforms=function(t){return function(t){var e=Os(t)
return function(n){return sr(n,t,e)}}(ar(t,1))},Ln.constant=tu,Ln.countBy=ga,Ln.create=function(t,e){var n=Un(t)
return null==e?n:nr(n,e)},Ln.curry=function t(e,n,r){var o=Ki(e,8,i,i,i,i,i,n=r?i:n)
return o.placeholder=t.placeholder,o},Ln.curryRight=function t(e,n,r){var o=Ki(e,16,i,i,i,i,i,n=r?i:n)
return o.placeholder=t.placeholder,o},Ln.debounce=Oa,Ln.defaults=Ts,Ln.defaultsDeep=Es,Ln.defer=Da,Ln.delay=Ma,Ln.difference=jo,Ln.differenceBy=Go,Ln.differenceWith=zo,Ln.drop=function(t,e,n){var r=null==t?0:t.length
return r?ti(t,(e=n||e===i?1:ps(e))<0?0:e,r):[]},Ln.dropRight=function(t,e,n){var r=null==t?0:t.length
return r?ti(t,0,(e=r-(e=n||e===i?1:ps(e)))<0?0:e):[]},Ln.dropRightWhile=function(t,e){return t&&t.length?hi(t,oo(e,3),!0,!0):[]},Ln.dropWhile=function(t,e){return t&&t.length?hi(t,oo(e,3),!0):[]},Ln.fill=function(t,e,n,r){var o=null==t?0:t.length
return o?(n&&"number"!=typeof n&&mo(t,e,n)&&(n=0,r=o),function(t,e,n,r){var o=t.length
for((n=ps(n))<0&&(n=-n>o?0:o+n),(r=r===i||r>o?o:ps(r))<0&&(r+=o),r=n>r?0:gs(r);n<r;)t[n++]=e
return t}(t,e,n,r)):[]},Ln.filter=function(t,e){return(Va(t)?Se:pr)(t,oo(e,3))},Ln.flatMap=function(t,e){return gr(Ca(t,e),1)},Ln.flatMapDeep=function(t,e){return gr(Ca(t,e),h)},Ln.flatMapDepth=function(t,e,n){return n=n===i?1:ps(n),gr(Ca(t,e),n)},Ln.flatten=Zo,Ln.flattenDeep=function(t){return null!=t&&t.length?gr(t,h):[]},Ln.flattenDepth=function(t,e){return null!=t&&t.length?gr(t,e=e===i?1:ps(e)):[]},Ln.flip=function(t){return Ki(t,512)},Ln.flow=eu,Ln.flowRight=nu,Ln.fromPairs=function(t){for(var e=-1,n=null==t?0:t.length,r={};++e<n;){var i=t[e]
r[i[0]]=i[1]}return r},Ln.functions=function(t){return null==t?[]:wr(t,Os(t))},Ln.functionsIn=function(t){return null==t?[]:wr(t,Ds(t))},Ln.groupBy=wa,Ln.initial=function(t){return null!=t&&t.length?ti(t,0,-1):[]},Ln.intersection=qo,Ln.intersectionBy=Ko,Ln.intersectionWith=Xo,Ln.invert=Ps,Ln.invertBy=Fs,Ln.invokeMap=xa,Ln.iteratee=iu,Ln.keyBy=Sa,Ln.keys=Os,Ln.keysIn=Ds,Ln.map=Ca,Ln.mapKeys=function(t,e){var n={}
return e=oo(e,3),yr(t,(function(t,r,i){rr(n,e(t,r,i),t)})),n},Ln.mapValues=function(t,e){var n={}
return e=oo(e,3),yr(t,(function(t,r,i){rr(n,r,e(t,r,i))})),n},Ln.matches=function(t){return Br(ar(t,1))},Ln.matchesProperty=function(t,e){return Lr(t,ar(e,1))},Ln.memoize=Ia,Ln.merge=Ms,Ln.mergeWith=Is,Ln.method=ou,Ln.methodOf=au,Ln.mixin=su,Ln.negate=Na,Ln.nthArg=function(t){return t=ps(t),qr((function(e){return jr(e,t)}))},Ln.omit=Ns,Ln.omitBy=function(t,e){return Bs(t,Na(oo(e)))},Ln.once=function(t){return Pa(2,t)},Ln.orderBy=function(t,e,n,r){return null==t?[]:(Va(e)||(e=null==e?[]:[e]),Va(n=r?i:n)||(n=null==n?[]:[n]),Gr(t,e,n))},Ln.over=cu,Ln.overArgs=_a,Ln.overEvery=hu,Ln.overSome=lu,Ln.partial=Ba,Ln.partialRight=La,Ln.partition=Ta,Ln.pick=_s,Ln.pickBy=Bs,Ln.property=fu,Ln.propertyOf=function(t){return function(e){return null==t?i:xr(t,e)}},Ln.pull=Jo,Ln.pullAll=Qo,Ln.pullAllBy=function(t,e,n){return t&&t.length&&e&&e.length?Hr(t,e,oo(n,2)):t},Ln.pullAllWith=function(t,e,n){return t&&t.length&&e&&e.length?Hr(t,e,i,n):t},Ln.pullAt=$o,Ln.range=du,Ln.rangeRight=pu,Ln.rearg=Ua,Ln.reject=function(t,e){return(Va(t)?Se:pr)(t,Na(oo(e,3)))},Ln.remove=function(t,e){var n=[]
if(!t||!t.length)return n
var r=-1,i=[],o=t.length
for(e=oo(e,3);++r<o;){var a=t[r]
e(a,r,t)&&(n.push(a),i.push(r))}return Vr(t,i),n},Ln.rest=function(t,e){if("function"!=typeof t)throw new At(o)
return qr(t,e=e===i?e:ps(e))},Ln.reverse=ta,Ln.sampleSize=function(t,e,n){return e=(n?mo(t,e,n):e===i)?1:ps(e),(Va(t)?Yn:Xr)(t,e)},Ln.set=function(t,e,n){return null==t?t:Yr(t,e,n)},Ln.setWith=function(t,e,n,r){return r="function"==typeof r?r:i,null==t?t:Yr(t,e,n,r)},Ln.shuffle=function(t){return(Va(t)?Jn:$r)(t)},Ln.slice=function(t,e,n){var r=null==t?0:t.length
return r?(n&&"number"!=typeof n&&mo(t,e,n)?(e=0,n=r):(e=null==e?0:ps(e),n=n===i?r:ps(n)),ti(t,e,n)):[]},Ln.sortBy=Ea,Ln.sortedUniq=function(t){return t&&t.length?ii(t):[]},Ln.sortedUniqBy=function(t,e){return t&&t.length?ii(t,oo(e,2)):[]},Ln.split=function(t,e,n){return n&&"number"!=typeof n&&mo(t,e,n)&&(e=n=i),(n=n===i?d:n>>>0)?(t=ys(t))&&("string"==typeof e||null!=e&&!os(e))&&!(e=ai(e))&&Qe(t)?yi(on(t),0,n):t.split(e,n):[]},Ln.spread=function(t,e){if("function"!=typeof t)throw new At(o)
return e=null==e?0:vn(ps(e),0),qr((function(n){var r=n[e],i=yi(n,0,e)
return r&&ke(i,r),me(t,this,i)}))},Ln.tail=function(t){var e=null==t?0:t.length
return e?ti(t,1,e):[]},Ln.take=function(t,e,n){return t&&t.length?ti(t,0,(e=n||e===i?1:ps(e))<0?0:e):[]},Ln.takeRight=function(t,e,n){var r=null==t?0:t.length
return r?ti(t,(e=r-(e=n||e===i?1:ps(e)))<0?0:e,r):[]},Ln.takeRightWhile=function(t,e){return t&&t.length?hi(t,oo(e,3),!1,!0):[]},Ln.takeWhile=function(t,e){return t&&t.length?hi(t,oo(e,3)):[]},Ln.tap=function(t,e){return e(t),t},Ln.throttle=function(t,e,n){var r=!0,i=!0
if("function"!=typeof t)throw new At(o)
return ts(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Oa(t,e,{leading:r,maxWait:e,trailing:i})},Ln.thru=da,Ln.toArray=fs,Ln.toPairs=Ls,Ln.toPairsIn=Us,Ln.toPath=function(t){return Va(t)?Ee(t,Bo):us(t)?[t]:ki(_o(ys(t)))},Ln.toPlainObject=ms,Ln.transform=function(t,e,n){var r=Va(t),i=r||Ka(t)||cs(t)
if(e=oo(e,4),null==n){var o=t&&t.constructor
n=i?r?new o:[]:ts(t)&&Ja(o)?Un(Wt(t)):{}}return(i?be:yr)(t,(function(t,r,i){return e(n,t,r,i)})),n},Ln.unary=function(t){return Aa(t,1)},Ln.union=ea,Ln.unionBy=na,Ln.unionWith=ra,Ln.uniq=function(t){return t&&t.length?si(t):[]},Ln.uniqBy=function(t,e){return t&&t.length?si(t,oo(e,2)):[]},Ln.uniqWith=function(t,e){return e="function"==typeof e?e:i,t&&t.length?si(t,i,e):[]},Ln.unset=function(t,e){return null==t||ui(t,e)},Ln.unzip=ia,Ln.unzipWith=oa,Ln.update=function(t,e,n){return null==t?t:ci(t,e,gi(n))},Ln.updateWith=function(t,e,n,r){return r="function"==typeof r?r:i,null==t?t:ci(t,e,gi(n),r)},Ln.values=js,Ln.valuesIn=function(t){return null==t?[]:Ve(t,Ds(t))},Ln.without=aa,Ln.words=Js,Ln.wrap=function(t,e){return Ba(gi(e),t)},Ln.xor=sa,Ln.xorBy=ua,Ln.xorWith=ca,Ln.zip=ha,Ln.zipObject=function(t,e){return di(t||[],e||[],$n)},Ln.zipObjectDeep=function(t,e){return di(t||[],e||[],Yr)},Ln.zipWith=la,Ln.entries=Ls,Ln.entriesIn=Us,Ln.extend=ws,Ln.extendWith=xs,su(Ln,Ln),Ln.add=yu,Ln.attempt=Qs,Ln.camelCase=Gs,Ln.capitalize=zs,Ln.ceil=bu,Ln.clamp=function(t,e,n){return n===i&&(n=e,e=i),n!==i&&(n=(n=vs(n))==n?n:0),e!==i&&(e=(e=vs(e))==e?e:0),or(vs(t),e,n)},Ln.clone=function(t){return ar(t,4)},Ln.cloneDeep=function(t){return ar(t,5)},Ln.cloneDeepWith=function(t,e){return ar(t,5,e="function"==typeof e?e:i)},Ln.cloneWith=function(t,e){return ar(t,4,e="function"==typeof e?e:i)},Ln.conformsTo=function(t,e){return null==e||sr(t,e,Os(e))},Ln.deburr=Hs,Ln.defaultTo=function(t,e){return null==t||t!=t?e:t},Ln.divide=wu,Ln.endsWith=function(t,e,n){t=ys(t),e=ai(e)
var r=t.length,o=n=n===i?r:or(ps(n),0,r)
return(n-=e.length)>=0&&t.slice(n,o)==e},Ln.eq=ja,Ln.escape=function(t){return(t=ys(t))&&K.test(t)?t.replace(W,Ye):t},Ln.escapeRegExp=function(t){return(t=ys(t))&&nt.test(t)?t.replace(et,"\\$&"):t},Ln.every=function(t,e,n){var r=Va(t)?xe:fr
return n&&mo(t,e,n)&&(e=i),r(t,oo(e,3))},Ln.find=va,Ln.findIndex=Ho,Ln.findKey=function(t,e){return Oe(t,oo(e,3),yr)},Ln.findLast=ma,Ln.findLastIndex=Vo,Ln.findLastKey=function(t,e){return Oe(t,oo(e,3),br)},Ln.floor=xu,Ln.forEach=ya,Ln.forEachRight=ba,Ln.forIn=function(t,e){return null==t?t:vr(t,oo(e,3),Ds)},Ln.forInRight=function(t,e){return null==t?t:mr(t,oo(e,3),Ds)},Ln.forOwn=function(t,e){return t&&yr(t,oo(e,3))},Ln.forOwnRight=function(t,e){return t&&br(t,oo(e,3))},Ln.get=ks,Ln.gt=Ga,Ln.gte=za,Ln.has=function(t,e){return null!=t&&fo(t,e,Er)},Ln.hasIn=As,Ln.head=Wo,Ln.identity=ru,Ln.includes=function(t,e,n,r){t=Wa(t)?t:js(t),n=n&&!r?ps(n):0
var i=t.length
return n<0&&(n=vn(i+n,0)),ss(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&Me(t,e,n)>-1},Ln.indexOf=function(t,e,n){var r=null==t?0:t.length
if(!r)return-1
var i=null==n?0:ps(n)
return i<0&&(i=vn(r+i,0)),Me(t,e,i)},Ln.inRange=function(t,e,n){return e=ds(e),n===i?(n=e,e=0):n=ds(n),function(t,e,n){return t>=mn(e,n)&&t<vn(e,n)}(t=vs(t),e,n)},Ln.invoke=Rs,Ln.isArguments=Ha,Ln.isArray=Va,Ln.isArrayBuffer=Za,Ln.isArrayLike=Wa,Ln.isArrayLikeObject=qa,Ln.isBoolean=function(t){return!0===t||!1===t||es(t)&&Cr(t)==m},Ln.isBuffer=Ka,Ln.isDate=Xa,Ln.isElement=function(t){return es(t)&&1===t.nodeType&&!is(t)},Ln.isEmpty=function(t){if(null==t)return!0
if(Wa(t)&&(Va(t)||"string"==typeof t||"function"==typeof t.splice||Ka(t)||cs(t)||Ha(t)))return!t.length
var e=lo(t)
if(e==S||e==A)return!t.size
if(xo(t))return!Ir(t).length
for(var n in t)if(Mt.call(t,n))return!1
return!0},Ln.isEqual=function(t,e){return Rr(t,e)},Ln.isEqualWith=function(t,e,n){var r=(n="function"==typeof n?n:i)?n(t,e):i
return r===i?Rr(t,e,i,n):!!r},Ln.isError=Ya,Ln.isFinite=function(t){return"number"==typeof t&&dn(t)},Ln.isFunction=Ja,Ln.isInteger=Qa,Ln.isLength=$a,Ln.isMap=ns,Ln.isMatch=function(t,e){return t===e||Or(t,e,so(e))},Ln.isMatchWith=function(t,e,n){return n="function"==typeof n?n:i,Or(t,e,so(e),n)},Ln.isNaN=function(t){return rs(t)&&t!=+t},Ln.isNative=function(t){if(wo(t))throw new xt("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.")
return Dr(t)},Ln.isNil=function(t){return null==t},Ln.isNull=function(t){return null===t},Ln.isNumber=rs,Ln.isObject=ts,Ln.isObjectLike=es,Ln.isPlainObject=is,Ln.isRegExp=os,Ln.isSafeInteger=function(t){return Qa(t)&&t>=-9007199254740991&&t<=l},Ln.isSet=as,Ln.isString=ss,Ln.isSymbol=us,Ln.isTypedArray=cs,Ln.isUndefined=function(t){return t===i},Ln.isWeakMap=function(t){return es(t)&&lo(t)==R},Ln.isWeakSet=function(t){return es(t)&&"[object WeakSet]"==Cr(t)},Ln.join=function(t,e){return null==t?"":pn.call(t,e)},Ln.kebabCase=Vs,Ln.last=Yo,Ln.lastIndexOf=function(t,e,n){var r=null==t?0:t.length
if(!r)return-1
var o=r
return n!==i&&(o=(o=ps(n))<0?vn(r+o,0):mn(o,r-1)),e==e?function(t,e,n){for(var r=n+1;r--;)if(t[r]===e)return r
return r}(t,e,o):De(t,Ne,o,!0)},Ln.lowerCase=Zs,Ln.lowerFirst=Ws,Ln.lt=hs,Ln.lte=ls,Ln.max=function(t){return t&&t.length?dr(t,ru,Tr):i},Ln.maxBy=function(t,e){return t&&t.length?dr(t,oo(e,2),Tr):i},Ln.mean=function(t){return _e(t,ru)},Ln.meanBy=function(t,e){return _e(t,oo(e,2))},Ln.min=function(t){return t&&t.length?dr(t,ru,Nr):i},Ln.minBy=function(t,e){return t&&t.length?dr(t,oo(e,2),Nr):i},Ln.stubArray=gu,Ln.stubFalse=vu,Ln.stubObject=function(){return{}},Ln.stubString=function(){return""},Ln.stubTrue=function(){return!0},Ln.multiply=Su,Ln.nth=function(t,e){return t&&t.length?jr(t,ps(e)):i},Ln.noConflict=function(){return oe._===this&&(oe._=Lt),this},Ln.noop=uu,Ln.now=ka,Ln.pad=function(t,e,n){t=ys(t)
var r=(e=ps(e))?rn(t):0
if(!e||r>=e)return t
var i=(e-r)/2
return Gi(hn(i),n)+t+Gi(cn(i),n)},Ln.padEnd=function(t,e,n){t=ys(t)
var r=(e=ps(e))?rn(t):0
return e&&r<e?t+Gi(e-r,n):t},Ln.padStart=function(t,e,n){t=ys(t)
var r=(e=ps(e))?rn(t):0
return e&&r<e?Gi(e-r,n)+t:t},Ln.parseInt=function(t,e,n){return n||null==e?e=0:e&&(e=+e),bn(ys(t).replace(rt,""),e||0)},Ln.random=function(t,e,n){if(n&&"boolean"!=typeof n&&mo(t,e,n)&&(e=n=i),n===i&&("boolean"==typeof e?(n=e,e=i):"boolean"==typeof t&&(n=t,t=i)),t===i&&e===i?(t=0,e=1):(t=ds(t),e===i?(e=t,t=0):e=ds(e)),t>e){var r=t
t=e,e=r}if(n||t%1||e%1){var o=wn()
return mn(t+o*(e-t+ee("1e-"+((o+"").length-1))),e)}return Zr(t,e)},Ln.reduce=function(t,e,n){var r=Va(t)?Ae:Ue,i=arguments.length<3
return r(t,oo(e,4),n,i,hr)},Ln.reduceRight=function(t,e,n){var r=Va(t)?Pe:Ue,i=arguments.length<3
return r(t,oo(e,4),n,i,lr)},Ln.repeat=function(t,e,n){return e=(n?mo(t,e,n):e===i)?1:ps(e),Wr(ys(t),e)},Ln.replace=function(){var t=arguments,e=ys(t[0])
return t.length<3?e:e.replace(t[1],t[2])},Ln.result=function(t,e,n){var r=-1,o=(e=vi(e,t)).length
for(o||(o=1,t=i);++r<o;){var a=null==t?i:t[Bo(e[r])]
a===i&&(r=o,a=n),t=Ja(a)?a.call(t):a}return t},Ln.round=Cu,Ln.runInContext=t,Ln.sample=function(t){return(Va(t)?Xn:Kr)(t)},Ln.size=function(t){if(null==t)return 0
if(Wa(t))return ss(t)?rn(t):t.length
var e=lo(t)
return e==S||e==A?t.size:Ir(t).length},Ln.snakeCase=qs,Ln.some=function(t,e,n){var r=Va(t)?Fe:ei
return n&&mo(t,e,n)&&(e=i),r(t,oo(e,3))},Ln.sortedIndex=function(t,e){return ni(t,e)},Ln.sortedIndexBy=function(t,e,n){return ri(t,e,oo(n,2))},Ln.sortedIndexOf=function(t,e){var n=null==t?0:t.length
if(n){var r=ni(t,e)
if(r<n&&ja(t[r],e))return r}return-1},Ln.sortedLastIndex=function(t,e){return ni(t,e,!0)},Ln.sortedLastIndexBy=function(t,e,n){return ri(t,e,oo(n,2),!0)},Ln.sortedLastIndexOf=function(t,e){if(null!=t&&t.length){var n=ni(t,e,!0)-1
if(ja(t[n],e))return n}return-1},Ln.startCase=Ks,Ln.startsWith=function(t,e,n){return t=ys(t),n=null==n?0:or(ps(n),0,t.length),e=ai(e),t.slice(n,n+e.length)==e},Ln.subtract=Tu,Ln.sum=function(t){return t&&t.length?je(t,ru):0},Ln.sumBy=function(t,e){return t&&t.length?je(t,oo(e,2)):0},Ln.template=function(t,e,n){var r=Ln.templateSettings
n&&mo(t,e,n)&&(e=i),t=ys(t),e=xs({},e,r,Xi)
var o,a,s=xs({},e.imports,r.imports,Xi),u=Os(s),c=Ve(s,u),h=0,l=e.interpolate||bt,f="__p += '",d=Et((e.escape||bt).source+"|"+l.source+"|"+(l===J?lt:bt).source+"|"+(e.evaluate||bt).source+"|$","g"),p="//# sourceURL="+(Mt.call(e,"sourceURL")?(e.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Jt+"]")+"\n"
t.replace(d,(function(e,n,r,i,s,u){return r||(r=i),f+=t.slice(h,u).replace(wt,Je),n&&(o=!0,f+="' +\n__e("+n+") +\n'"),s&&(a=!0,f+="';\n"+s+";\n__p += '"),r&&(f+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),h=u+e.length,e})),f+="';\n"
var g=Mt.call(e,"variable")&&e.variable
if(g){if(ct.test(g))throw new xt("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n"
f=(a?f.replace(z,""):f).replace(H,"$1").replace(V,"$1;"),f="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}"
var v=Qs((function(){return St(u,p+"return "+f).apply(i,c)}))
if(v.source=f,Ya(v))throw v
return v},Ln.times=function(t,e){if((t=ps(t))<1||t>l)return[]
var n=d,r=mn(t,d)
e=oo(e),t-=d
for(var i=Ge(r,e);++n<t;)e(n)
return i},Ln.toFinite=ds,Ln.toInteger=ps,Ln.toLength=gs,Ln.toLower=function(t){return ys(t).toLowerCase()},Ln.toNumber=vs,Ln.toSafeInteger=function(t){return t?or(ps(t),-9007199254740991,l):0===t?t:0},Ln.toString=ys,Ln.toUpper=function(t){return ys(t).toUpperCase()},Ln.trim=function(t,e,n){if((t=ys(t))&&(n||e===i))return ze(t)
if(!t||!(e=ai(e)))return t
var r=on(t),o=on(e)
return yi(r,We(r,o),qe(r,o)+1).join("")},Ln.trimEnd=function(t,e,n){if((t=ys(t))&&(n||e===i))return t.slice(0,an(t)+1)
if(!t||!(e=ai(e)))return t
var r=on(t)
return yi(r,0,qe(r,on(e))+1).join("")},Ln.trimStart=function(t,e,n){if((t=ys(t))&&(n||e===i))return t.replace(rt,"")
if(!t||!(e=ai(e)))return t
var r=on(t)
return yi(r,We(r,on(e))).join("")},Ln.truncate=function(t,e){var n=30,r="..."
if(ts(e)){var o="separator"in e?e.separator:o
n="length"in e?ps(e.length):n,r="omission"in e?ai(e.omission):r}var a=(t=ys(t)).length
if(Qe(t)){var s=on(t)
a=s.length}if(n>=a)return t
var u=n-rn(r)
if(u<1)return r
var c=s?yi(s,0,u).join(""):t.slice(0,u)
if(o===i)return c+r
if(s&&(u+=c.length-u),os(o)){if(t.slice(u).search(o)){var h,l=c
for(o.global||(o=Et(o.source,ys(ft.exec(o))+"g")),o.lastIndex=0;h=o.exec(l);)var f=h.index
c=c.slice(0,f===i?u:f)}}else if(t.indexOf(ai(o),u)!=u){var d=c.lastIndexOf(o)
d>-1&&(c=c.slice(0,d))}return c+r},Ln.unescape=function(t){return(t=ys(t))&&q.test(t)?t.replace(Z,sn):t},Ln.uniqueId=function(t){var e=++It
return ys(t)+e},Ln.upperCase=Xs,Ln.upperFirst=Ys,Ln.each=ya,Ln.eachRight=ba,Ln.first=Wo,su(Ln,(mu={},yr(Ln,(function(t,e){Mt.call(Ln.prototype,e)||(mu[e]=t)})),mu),{chain:!1}),Ln.VERSION="4.17.21",be(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(t){Ln[t].placeholder=Ln})),be(["drop","take"],(function(t,e){zn.prototype[t]=function(n){n=n===i?1:vn(ps(n),0)
var r=this.__filtered__&&!e?new zn(this):this.clone()
return r.__filtered__?r.__takeCount__=mn(n,r.__takeCount__):r.__views__.push({size:mn(n,d),type:t+(r.__dir__<0?"Right":"")}),r},zn.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),be(["filter","map","takeWhile"],(function(t,e){var n=e+1,r=1==n||3==n
zn.prototype[t]=function(t){var e=this.clone()
return e.__iteratees__.push({iteratee:oo(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}})),be(["head","last"],(function(t,e){var n="take"+(e?"Right":"")
zn.prototype[t]=function(){return this[n](1).value()[0]}})),be(["initial","tail"],(function(t,e){var n="drop"+(e?"":"Right")
zn.prototype[t]=function(){return this.__filtered__?new zn(this):this[n](1)}})),zn.prototype.compact=function(){return this.filter(ru)},zn.prototype.find=function(t){return this.filter(t).head()},zn.prototype.findLast=function(t){return this.reverse().find(t)},zn.prototype.invokeMap=qr((function(t,e){return"function"==typeof t?new zn(this):this.map((function(n){return Pr(n,t,e)}))})),zn.prototype.reject=function(t){return this.filter(Na(oo(t)))},zn.prototype.slice=function(t,e){t=ps(t)
var n=this
return n.__filtered__&&(t>0||e<0)?new zn(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==i&&(n=(e=ps(e))<0?n.dropRight(-e):n.take(e-t)),n)},zn.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},zn.prototype.toArray=function(){return this.take(d)},yr(zn.prototype,(function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),o=Ln[r?"take"+("last"==e?"Right":""):e],a=r||/^find/.test(e)
o&&(Ln.prototype[e]=function(){var e=this.__wrapped__,s=r?[1]:arguments,u=e instanceof zn,c=s[0],h=u||Va(e),l=function(t){var e=o.apply(Ln,ke([t],s))
return r&&f?e[0]:e}
h&&n&&"function"==typeof c&&1!=c.length&&(u=h=!1)
var f=this.__chain__,d=!!this.__actions__.length,p=a&&!f,g=u&&!d
if(!a&&h){e=g?e:new zn(this)
var v=t.apply(e,s)
return v.__actions__.push({func:da,args:[l],thisArg:i}),new Gn(v,f)}return p&&g?t.apply(this,s):(v=this.thru(l),p?r?v.value()[0]:v.value():v)})})),be(["pop","push","shift","sort","splice","unshift"],(function(t){var e=Pt[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t)
Ln.prototype[t]=function(){var t=arguments
if(r&&!this.__chain__){var i=this.value()
return e.apply(Va(i)?i:[],t)}return this[n]((function(n){return e.apply(Va(n)?n:[],t)}))}})),yr(zn.prototype,(function(t,e){var n=Ln[e]
if(n){var r=n.name+""
Mt.call(Fn,r)||(Fn[r]=[]),Fn[r].push({name:e,func:n})}})),Fn[Bi(i,2).name]=[{name:"wrapper",func:i}],zn.prototype.clone=function(){var t=new zn(this.__wrapped__)
return t.__actions__=ki(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=ki(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=ki(this.__views__),t},zn.prototype.reverse=function(){if(this.__filtered__){var t=new zn(this)
t.__dir__=-1,t.__filtered__=!0}else(t=this.clone()).__dir__*=-1
return t},zn.prototype.value=function(){var t=this.__wrapped__.value(),e=this.__dir__,n=Va(t),r=e<0,i=n?t.length:0,o=function(t,e,n){for(var r=-1,i=n.length;++r<i;){var o=n[r],a=o.size
switch(o.type){case"drop":t+=a
break
case"dropRight":e-=a
break
case"take":e=mn(e,t+a)
break
case"takeRight":t=vn(t,e-a)}}return{start:t,end:e}}(0,i,this.__views__),a=o.start,s=o.end,u=s-a,c=r?s:a-1,h=this.__iteratees__,l=h.length,f=0,d=mn(u,this.__takeCount__)
if(!n||!r&&i==u&&d==u)return li(t,this.__actions__)
var p=[]
t:for(;u--&&f<d;){for(var g=-1,v=t[c+=e];++g<l;){var m=h[g],y=m.iteratee,b=m.type,w=y(v)
if(2==b)v=w
else if(!w){if(1==b)continue t
break t}}p[f++]=v}return p},Ln.prototype.at=pa,Ln.prototype.chain=function(){return fa(this)},Ln.prototype.commit=function(){return new Gn(this.value(),this.__chain__)},Ln.prototype.next=function(){this.__values__===i&&(this.__values__=fs(this.value()))
var t=this.__index__>=this.__values__.length
return{done:t,value:t?i:this.__values__[this.__index__++]}},Ln.prototype.plant=function(t){for(var e,n=this;n instanceof jn;){var r=Uo(n)
r.__index__=0,r.__values__=i,e?o.__wrapped__=r:e=r
var o=r
n=n.__wrapped__}return o.__wrapped__=t,e},Ln.prototype.reverse=function(){var t=this.__wrapped__
if(t instanceof zn){var e=t
return this.__actions__.length&&(e=new zn(this)),(e=e.reverse()).__actions__.push({func:da,args:[ta],thisArg:i}),new Gn(e,this.__chain__)}return this.thru(ta)},Ln.prototype.toJSON=Ln.prototype.valueOf=Ln.prototype.value=function(){return li(this.__wrapped__,this.__actions__)},Ln.prototype.first=Ln.prototype.head,ae&&(Ln.prototype[ae]=function(){return this}),Ln}()
oe._=un,(r=function(){return un}.call(e,n,e,t))===i||(t.exports=r)}.call(this)},3649:function(t,e,n){"use strict"
var r={};(0,n(1307).assign)(r,n(3560),n(9853),n(9806)),t.exports=r},3560:function(t,e,n){"use strict"
var r=n(4151),i=n(1307),o=n(2825),a=n(8021),s=n(7563),u=Object.prototype.toString
function c(t){if(!(this instanceof c))return new c(t)
this.options=i.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},t||{})
var e=this.options
e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0
var n=r.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy)
if(0!==n)throw new Error(a[n])
if(e.header&&r.deflateSetHeader(this.strm,e.header),e.dictionary){var h
if(h="string"==typeof e.dictionary?o.string2buf(e.dictionary):"[object ArrayBuffer]"===u.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,0!==(n=r.deflateSetDictionary(this.strm,h)))throw new Error(a[n])
this._dict_set=!0}}function h(t,e){var n=new c(e)
if(n.push(t,!0),n.err)throw n.msg||a[n.err]
return n.result}c.prototype.push=function(t,e){var n,a,s=this.strm,c=this.options.chunkSize
if(this.ended)return!1
a=e===~~e?e:!0===e?4:0,"string"==typeof t?s.input=o.string2buf(t):"[object ArrayBuffer]"===u.call(t)?s.input=new Uint8Array(t):s.input=t,s.next_in=0,s.avail_in=s.input.length
do{if(0===s.avail_out&&(s.output=new i.Buf8(c),s.next_out=0,s.avail_out=c),1!==(n=r.deflate(s,a))&&0!==n)return this.onEnd(n),this.ended=!0,!1
0!==s.avail_out&&(0!==s.avail_in||4!==a&&2!==a)||("string"===this.options.to?this.onData(o.buf2binstring(i.shrinkBuf(s.output,s.next_out))):this.onData(i.shrinkBuf(s.output,s.next_out)))}while((s.avail_in>0||0===s.avail_out)&&1!==n)
return 4===a?(n=r.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,0===n):2!==a||(this.onEnd(0),s.avail_out=0,!0)},c.prototype.onData=function(t){this.chunks.push(t)},c.prototype.onEnd=function(t){0===t&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},e.Deflate=c,e.deflate=h,e.deflateRaw=function(t,e){return(e=e||{}).raw=!0,h(t,e)},e.gzip=function(t,e){return(e=e||{}).gzip=!0,h(t,e)}},9853:function(t,e,n){"use strict"
var r=n(3534),i=n(1307),o=n(2825),a=n(9806),s=n(8021),u=n(7563),c=n(6511),h=Object.prototype.toString
function l(t){if(!(this instanceof l))return new l(t)
this.options=i.assign({chunkSize:16384,windowBits:0,to:""},t||{})
var e=this.options
e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0
var n=r.inflateInit2(this.strm,e.windowBits)
if(n!==a.Z_OK)throw new Error(s[n])
if(this.header=new c,r.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=o.string2buf(e.dictionary):"[object ArrayBuffer]"===h.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(n=r.inflateSetDictionary(this.strm,e.dictionary))!==a.Z_OK))throw new Error(s[n])}function f(t,e){var n=new l(e)
if(n.push(t,!0),n.err)throw n.msg||s[n.err]
return n.result}l.prototype.push=function(t,e){var n,s,u,c,l,f=this.strm,d=this.options.chunkSize,p=this.options.dictionary,g=!1
if(this.ended)return!1
s=e===~~e?e:!0===e?a.Z_FINISH:a.Z_NO_FLUSH,"string"==typeof t?f.input=o.binstring2buf(t):"[object ArrayBuffer]"===h.call(t)?f.input=new Uint8Array(t):f.input=t,f.next_in=0,f.avail_in=f.input.length
do{if(0===f.avail_out&&(f.output=new i.Buf8(d),f.next_out=0,f.avail_out=d),(n=r.inflate(f,a.Z_NO_FLUSH))===a.Z_NEED_DICT&&p&&(n=r.inflateSetDictionary(this.strm,p)),n===a.Z_BUF_ERROR&&!0===g&&(n=a.Z_OK,g=!1),n!==a.Z_STREAM_END&&n!==a.Z_OK)return this.onEnd(n),this.ended=!0,!1
f.next_out&&(0!==f.avail_out&&n!==a.Z_STREAM_END&&(0!==f.avail_in||s!==a.Z_FINISH&&s!==a.Z_SYNC_FLUSH)||("string"===this.options.to?(u=o.utf8border(f.output,f.next_out),c=f.next_out-u,l=o.buf2string(f.output,u),f.next_out=c,f.avail_out=d-c,c&&i.arraySet(f.output,f.output,u,c,0),this.onData(l)):this.onData(i.shrinkBuf(f.output,f.next_out)))),0===f.avail_in&&0===f.avail_out&&(g=!0)}while((f.avail_in>0||0===f.avail_out)&&n!==a.Z_STREAM_END)
return n===a.Z_STREAM_END&&(s=a.Z_FINISH),s===a.Z_FINISH?(n=r.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===a.Z_OK):s!==a.Z_SYNC_FLUSH||(this.onEnd(a.Z_OK),f.avail_out=0,!0)},l.prototype.onData=function(t){this.chunks.push(t)},l.prototype.onEnd=function(t){t===a.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},e.Inflate=l,e.inflate=f,e.inflateRaw=function(t,e){return(e=e||{}).raw=!0,f(t,e)},e.ungzip=f},1307:function(t,e){"use strict"
var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array
function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var n=e.shift()
if(n){if("object"!=typeof n)throw new TypeError(n+"must be non-object")
for(var i in n)r(n,i)&&(t[i]=n[i])}}return t},e.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)}
var i={arraySet:function(t,e,n,r,i){if(e.subarray&&t.subarray)t.set(e.subarray(n,n+r),i)
else for(var o=0;o<r;o++)t[i+o]=e[n+o]},flattenChunks:function(t){var e,n,r,i,o,a
for(r=0,e=0,n=t.length;e<n;e++)r+=t[e].length
for(a=new Uint8Array(r),i=0,e=0,n=t.length;e<n;e++)o=t[e],a.set(o,i),i+=o.length
return a}},o={arraySet:function(t,e,n,r,i){for(var o=0;o<r;o++)t[i+o]=e[n+o]},flattenChunks:function(t){return[].concat.apply([],t)}}
e.setTyped=function(t){t?(e.Buf8=Uint8Array,e.Buf16=Uint16Array,e.Buf32=Int32Array,e.assign(e,i)):(e.Buf8=Array,e.Buf16=Array,e.Buf32=Array,e.assign(e,o))},e.setTyped(n)},2825:function(t,e,n){"use strict"
var r=n(1307),i=!0,o=!0
try{String.fromCharCode.apply(null,[0])}catch(t){i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){o=!1}for(var a=new r.Buf8(256),s=0;s<256;s++)a[s]=s>=252?6:s>=248?5:s>=240?4:s>=224?3:s>=192?2:1
function u(t,e){if(e<65534&&(t.subarray&&o||!t.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(t,e))
for(var n="",a=0;a<e;a++)n+=String.fromCharCode(t[a])
return n}a[254]=a[254]=1,e.string2buf=function(t){var e,n,i,o,a,s=t.length,u=0
for(o=0;o<s;o++)55296==(64512&(n=t.charCodeAt(o)))&&o+1<s&&56320==(64512&(i=t.charCodeAt(o+1)))&&(n=65536+(n-55296<<10)+(i-56320),o++),u+=n<128?1:n<2048?2:n<65536?3:4
for(e=new r.Buf8(u),a=0,o=0;a<u;o++)55296==(64512&(n=t.charCodeAt(o)))&&o+1<s&&56320==(64512&(i=t.charCodeAt(o+1)))&&(n=65536+(n-55296<<10)+(i-56320),o++),n<128?e[a++]=n:n<2048?(e[a++]=192|n>>>6,e[a++]=128|63&n):n<65536?(e[a++]=224|n>>>12,e[a++]=128|n>>>6&63,e[a++]=128|63&n):(e[a++]=240|n>>>18,e[a++]=128|n>>>12&63,e[a++]=128|n>>>6&63,e[a++]=128|63&n)
return e},e.buf2binstring=function(t){return u(t,t.length)},e.binstring2buf=function(t){for(var e=new r.Buf8(t.length),n=0,i=e.length;n<i;n++)e[n]=t.charCodeAt(n)
return e},e.buf2string=function(t,e){var n,r,i,o,s=e||t.length,c=new Array(2*s)
for(r=0,n=0;n<s;)if((i=t[n++])<128)c[r++]=i
else if((o=a[i])>4)c[r++]=65533,n+=o-1
else{for(i&=2===o?31:3===o?15:7;o>1&&n<s;)i=i<<6|63&t[n++],o--
o>1?c[r++]=65533:i<65536?c[r++]=i:(i-=65536,c[r++]=55296|i>>10&1023,c[r++]=56320|1023&i)}return u(c,r)},e.utf8border=function(t,e){var n
for((e=e||t.length)>t.length&&(e=t.length),n=e-1;n>=0&&128==(192&t[n]);)n--
return n<0||0===n?e:n+a[t[n]]>e?n:e}},7506:function(t){"use strict"
t.exports=function(t,e,n,r){for(var i=65535&t|0,o=t>>>16&65535|0,a=0;0!==n;){n-=a=n>2e3?2e3:n
do{o=o+(i=i+e[r++]|0)|0}while(--a)
i%=65521,o%=65521}return i|o<<16|0}},9806:function(t){"use strict"
t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},8548:function(t){"use strict"
var e=function(){for(var t,e=[],n=0;n<256;n++){t=n
for(var r=0;r<8;r++)t=1&t?3988292384^t>>>1:t>>>1
e[n]=t}return e}()
t.exports=function(t,n,r,i){var o=e,a=i+r
t^=-1
for(var s=i;s<a;s++)t=t>>>8^o[255&(t^n[s])]
return-1^t}},4151:function(t,e,n){"use strict"
var r,i=n(1307),o=n(5280),a=n(7506),s=n(8548),u=n(8021),c=-2,h=258,l=262,f=103,d=113,p=666
function g(t,e){return t.msg=u[e],e}function v(t){return(t<<1)-(t>4?9:0)}function m(t){for(var e=t.length;--e>=0;)t[e]=0}function y(t){var e=t.state,n=e.pending
n>t.avail_out&&(n=t.avail_out),0!==n&&(i.arraySet(t.output,e.pending_buf,e.pending_out,n,t.next_out),t.next_out+=n,e.pending_out+=n,t.total_out+=n,t.avail_out-=n,e.pending-=n,0===e.pending&&(e.pending_out=0))}function b(t,e){o._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,y(t.strm)}function w(t,e){t.pending_buf[t.pending++]=e}function x(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function S(t,e){var n,r,i=t.max_chain_length,o=t.strstart,a=t.prev_length,s=t.nice_match,u=t.strstart>t.w_size-l?t.strstart-(t.w_size-l):0,c=t.window,f=t.w_mask,d=t.prev,p=t.strstart+h,g=c[o+a-1],v=c[o+a]
t.prev_length>=t.good_match&&(i>>=2),s>t.lookahead&&(s=t.lookahead)
do{if(c[(n=e)+a]===v&&c[n+a-1]===g&&c[n]===c[o]&&c[++n]===c[o+1]){o+=2,n++
do{}while(c[++o]===c[++n]&&c[++o]===c[++n]&&c[++o]===c[++n]&&c[++o]===c[++n]&&c[++o]===c[++n]&&c[++o]===c[++n]&&c[++o]===c[++n]&&c[++o]===c[++n]&&o<p)
if(r=h-(p-o),o=p-h,r>a){if(t.match_start=e,a=r,r>=s)break
g=c[o+a-1],v=c[o+a]}}}while((e=d[e&f])>u&&0!=--i)
return a<=t.lookahead?a:t.lookahead}function C(t){var e,n,r,o,u,c,h,f,d,p,g=t.w_size
do{if(o=t.window_size-t.lookahead-t.strstart,t.strstart>=g+(g-l)){i.arraySet(t.window,t.window,g,g,0),t.match_start-=g,t.strstart-=g,t.block_start-=g,e=n=t.hash_size
do{r=t.head[--e],t.head[e]=r>=g?r-g:0}while(--n)
e=n=g
do{r=t.prev[--e],t.prev[e]=r>=g?r-g:0}while(--n)
o+=g}if(0===t.strm.avail_in)break
if(c=t.strm,h=t.window,f=t.strstart+t.lookahead,d=o,p=void 0,(p=c.avail_in)>d&&(p=d),n=0===p?0:(c.avail_in-=p,i.arraySet(h,c.input,c.next_in,p,f),1===c.state.wrap?c.adler=a(c.adler,h,p,f):2===c.state.wrap&&(c.adler=s(c.adler,h,p,f)),c.next_in+=p,c.total_in+=p,p),t.lookahead+=n,t.lookahead+t.insert>=3)for(u=t.strstart-t.insert,t.ins_h=t.window[u],t.ins_h=(t.ins_h<<t.hash_shift^t.window[u+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[u+3-1])&t.hash_mask,t.prev[u&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=u,u++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<l&&0!==t.strm.avail_in)}function T(t,e){for(var n,r;;){if(t.lookahead<l){if(C(t),t.lookahead<l&&0===e)return 1
if(0===t.lookahead)break}if(n=0,t.lookahead>=3&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==n&&t.strstart-n<=t.w_size-l&&(t.match_length=S(t,n)),t.match_length>=3)if(r=o._tr_tally(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--
do{t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length)
t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask
else r=o._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++
if(r&&(b(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,4===e?(b(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(b(t,!1),0===t.strm.avail_out)?1:2}function E(t,e){for(var n,r,i;;){if(t.lookahead<l){if(C(t),t.lookahead<l&&0===e)return 1
if(0===t.lookahead)break}if(n=0,t.lookahead>=3&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==n&&t.prev_length<t.max_lazy_match&&t.strstart-n<=t.w_size-l&&(t.match_length=S(t,n),t.match_length<=5&&(1===t.strategy||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){i=t.strstart+t.lookahead-3,r=o._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2
do{++t.strstart<=i&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length)
if(t.match_available=0,t.match_length=2,t.strstart++,r&&(b(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if((r=o._tr_tally(t,0,t.window[t.strstart-1]))&&b(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(r=o._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,4===e?(b(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(b(t,!1),0===t.strm.avail_out)?1:2}function k(t,e,n,r,i){this.good_length=t,this.max_lazy=e,this.nice_length=n,this.max_chain=r,this.func=i}function A(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(1146),this.dyn_dtree=new i.Buf16(122),this.bl_tree=new i.Buf16(78),m(this.dyn_ltree),m(this.dyn_dtree),m(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(16),this.heap=new i.Buf16(573),m(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(573),m(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function P(t){var e
return t&&t.state?(t.total_in=t.total_out=0,t.data_type=2,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:d,t.adler=2===e.wrap?0:1,e.last_flush=0,o._tr_init(e),0):g(t,c)}function F(t){var e,n=P(t)
return 0===n&&((e=t.state).window_size=2*e.w_size,m(e.head),e.max_lazy_match=r[e.level].max_lazy,e.good_match=r[e.level].good_length,e.nice_match=r[e.level].nice_length,e.max_chain_length=r[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0),n}function R(t,e,n,r,o,a){if(!t)return c
var s=1
if(-1===e&&(e=6),r<0?(s=0,r=-r):r>15&&(s=2,r-=16),o<1||o>9||8!==n||r<8||r>15||e<0||e>9||a<0||a>4)return g(t,c)
8===r&&(r=9)
var u=new A
return t.state=u,u.strm=t,u.wrap=s,u.gzhead=null,u.w_bits=r,u.w_size=1<<u.w_bits,u.w_mask=u.w_size-1,u.hash_bits=o+7,u.hash_size=1<<u.hash_bits,u.hash_mask=u.hash_size-1,u.hash_shift=~~((u.hash_bits+3-1)/3),u.window=new i.Buf8(2*u.w_size),u.head=new i.Buf16(u.hash_size),u.prev=new i.Buf16(u.w_size),u.lit_bufsize=1<<o+6,u.pending_buf_size=4*u.lit_bufsize,u.pending_buf=new i.Buf8(u.pending_buf_size),u.d_buf=1*u.lit_bufsize,u.l_buf=3*u.lit_bufsize,u.level=e,u.strategy=a,u.method=n,F(t)}r=[new k(0,0,0,0,(function(t,e){var n=65535
for(n>t.pending_buf_size-5&&(n=t.pending_buf_size-5);;){if(t.lookahead<=1){if(C(t),0===t.lookahead&&0===e)return 1
if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0
var r=t.block_start+n
if((0===t.strstart||t.strstart>=r)&&(t.lookahead=t.strstart-r,t.strstart=r,b(t,!1),0===t.strm.avail_out))return 1
if(t.strstart-t.block_start>=t.w_size-l&&(b(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(b(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(b(t,!1),t.strm.avail_out),1)})),new k(4,4,8,4,T),new k(4,5,16,8,T),new k(4,6,32,32,T),new k(4,4,16,16,E),new k(8,16,32,32,E),new k(8,16,128,128,E),new k(8,32,128,256,E),new k(32,128,258,1024,E),new k(32,258,258,4096,E)],e.deflateInit=function(t,e){return R(t,e,8,15,8,0)},e.deflateInit2=R,e.deflateReset=F,e.deflateResetKeep=P,e.deflateSetHeader=function(t,e){return t&&t.state?2!==t.state.wrap?c:(t.state.gzhead=e,0):c},e.deflate=function(t,e){var n,i,a,u
if(!t||!t.state||e>5||e<0)return t?g(t,c):c
if(i=t.state,!t.output||!t.input&&0!==t.avail_in||i.status===p&&4!==e)return g(t,0===t.avail_out?-5:c)
if(i.strm=t,n=i.last_flush,i.last_flush=e,42===i.status)if(2===i.wrap)t.adler=0,w(i,31),w(i,139),w(i,8),i.gzhead?(w(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),w(i,255&i.gzhead.time),w(i,i.gzhead.time>>8&255),w(i,i.gzhead.time>>16&255),w(i,i.gzhead.time>>24&255),w(i,9===i.level?2:i.strategy>=2||i.level<2?4:0),w(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(w(i,255&i.gzhead.extra.length),w(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(t.adler=s(t.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(w(i,0),w(i,0),w(i,0),w(i,0),w(i,0),w(i,9===i.level?2:i.strategy>=2||i.level<2?4:0),w(i,3),i.status=d)
else{var l=8+(i.w_bits-8<<4)<<8
l|=(i.strategy>=2||i.level<2?0:i.level<6?1:6===i.level?2:3)<<6,0!==i.strstart&&(l|=32),l+=31-l%31,i.status=d,x(i,l),0!==i.strstart&&(x(i,t.adler>>>16),x(i,65535&t.adler)),t.adler=1}if(69===i.status)if(i.gzhead.extra){for(a=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>a&&(t.adler=s(t.adler,i.pending_buf,i.pending-a,a)),y(t),a=i.pending,i.pending!==i.pending_buf_size));)w(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++
i.gzhead.hcrc&&i.pending>a&&(t.adler=s(t.adler,i.pending_buf,i.pending-a,a)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73
if(73===i.status)if(i.gzhead.name){a=i.pending
do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>a&&(t.adler=s(t.adler,i.pending_buf,i.pending-a,a)),y(t),a=i.pending,i.pending===i.pending_buf_size)){u=1
break}u=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,w(i,u)}while(0!==u)
i.gzhead.hcrc&&i.pending>a&&(t.adler=s(t.adler,i.pending_buf,i.pending-a,a)),0===u&&(i.gzindex=0,i.status=91)}else i.status=91
if(91===i.status)if(i.gzhead.comment){a=i.pending
do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>a&&(t.adler=s(t.adler,i.pending_buf,i.pending-a,a)),y(t),a=i.pending,i.pending===i.pending_buf_size)){u=1
break}u=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,w(i,u)}while(0!==u)
i.gzhead.hcrc&&i.pending>a&&(t.adler=s(t.adler,i.pending_buf,i.pending-a,a)),0===u&&(i.status=f)}else i.status=f
if(i.status===f&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&y(t),i.pending+2<=i.pending_buf_size&&(w(i,255&t.adler),w(i,t.adler>>8&255),t.adler=0,i.status=d)):i.status=d),0!==i.pending){if(y(t),0===t.avail_out)return i.last_flush=-1,0}else if(0===t.avail_in&&v(e)<=v(n)&&4!==e)return g(t,-5)
if(i.status===p&&0!==t.avail_in)return g(t,-5)
if(0!==t.avail_in||0!==i.lookahead||0!==e&&i.status!==p){var S=2===i.strategy?function(t,e){for(var n;;){if(0===t.lookahead&&(C(t),0===t.lookahead)){if(0===e)return 1
break}if(t.match_length=0,n=o._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,n&&(b(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(b(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(b(t,!1),0===t.strm.avail_out)?1:2}(i,e):3===i.strategy?function(t,e){for(var n,r,i,a,s=t.window;;){if(t.lookahead<=h){if(C(t),t.lookahead<=h&&0===e)return 1
if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(r=s[i=t.strstart-1])===s[++i]&&r===s[++i]&&r===s[++i]){a=t.strstart+h
do{}while(r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&i<a)
t.match_length=h-(a-i),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(n=o._tr_tally(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(n=o._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),n&&(b(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(b(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(b(t,!1),0===t.strm.avail_out)?1:2}(i,e):r[i.level].func(i,e)
if(3!==S&&4!==S||(i.status=p),1===S||3===S)return 0===t.avail_out&&(i.last_flush=-1),0
if(2===S&&(1===e?o._tr_align(i):5!==e&&(o._tr_stored_block(i,0,0,!1),3===e&&(m(i.head),0===i.lookahead&&(i.strstart=0,i.block_start=0,i.insert=0))),y(t),0===t.avail_out))return i.last_flush=-1,0}return 4!==e?0:i.wrap<=0?1:(2===i.wrap?(w(i,255&t.adler),w(i,t.adler>>8&255),w(i,t.adler>>16&255),w(i,t.adler>>24&255),w(i,255&t.total_in),w(i,t.total_in>>8&255),w(i,t.total_in>>16&255),w(i,t.total_in>>24&255)):(x(i,t.adler>>>16),x(i,65535&t.adler)),y(t),i.wrap>0&&(i.wrap=-i.wrap),0!==i.pending?0:1)},e.deflateEnd=function(t){var e
return t&&t.state?42!==(e=t.state.status)&&69!==e&&73!==e&&91!==e&&e!==f&&e!==d&&e!==p?g(t,c):(t.state=null,e===d?g(t,-3):0):c},e.deflateSetDictionary=function(t,e){var n,r,o,s,u,h,l,f,d=e.length
if(!t||!t.state)return c
if(2===(s=(n=t.state).wrap)||1===s&&42!==n.status||n.lookahead)return c
for(1===s&&(t.adler=a(t.adler,e,d,0)),n.wrap=0,d>=n.w_size&&(0===s&&(m(n.head),n.strstart=0,n.block_start=0,n.insert=0),f=new i.Buf8(n.w_size),i.arraySet(f,e,d-n.w_size,n.w_size,0),e=f,d=n.w_size),u=t.avail_in,h=t.next_in,l=t.input,t.avail_in=d,t.next_in=0,t.input=e,C(n);n.lookahead>=3;){r=n.strstart,o=n.lookahead-2
do{n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+3-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++}while(--o)
n.strstart=r,n.lookahead=2,C(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=2,n.match_available=0,t.next_in=h,t.input=l,t.avail_in=u,n.wrap=s,0},e.deflateInfo="pako deflate (from Nodeca project)"},6511:function(t){"use strict"
t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},2399:function(t){"use strict"
t.exports=function(t,e){var n,r,i,o,a,s,u,c,h,l,f,d,p,g,v,m,y,b,w,x,S,C,T,E,k
n=t.state,r=t.next_in,E=t.input,i=r+(t.avail_in-5),o=t.next_out,k=t.output,a=o-(e-t.avail_out),s=o+(t.avail_out-257),u=n.dmax,c=n.wsize,h=n.whave,l=n.wnext,f=n.window,d=n.hold,p=n.bits,g=n.lencode,v=n.distcode,m=(1<<n.lenbits)-1,y=(1<<n.distbits)-1
t:do{p<15&&(d+=E[r++]<<p,p+=8,d+=E[r++]<<p,p+=8),b=g[d&m]
e:for(;;){if(d>>>=w=b>>>24,p-=w,0==(w=b>>>16&255))k[o++]=65535&b
else{if(!(16&w)){if(0==(64&w)){b=g[(65535&b)+(d&(1<<w)-1)]
continue e}if(32&w){n.mode=12
break t}t.msg="invalid literal/length code",n.mode=30
break t}x=65535&b,(w&=15)&&(p<w&&(d+=E[r++]<<p,p+=8),x+=d&(1<<w)-1,d>>>=w,p-=w),p<15&&(d+=E[r++]<<p,p+=8,d+=E[r++]<<p,p+=8),b=v[d&y]
n:for(;;){if(d>>>=w=b>>>24,p-=w,!(16&(w=b>>>16&255))){if(0==(64&w)){b=v[(65535&b)+(d&(1<<w)-1)]
continue n}t.msg="invalid distance code",n.mode=30
break t}if(S=65535&b,p<(w&=15)&&(d+=E[r++]<<p,(p+=8)<w&&(d+=E[r++]<<p,p+=8)),(S+=d&(1<<w)-1)>u){t.msg="invalid distance too far back",n.mode=30
break t}if(d>>>=w,p-=w,S>(w=o-a)){if((w=S-w)>h&&n.sane){t.msg="invalid distance too far back",n.mode=30
break t}if(C=0,T=f,0===l){if(C+=c-w,w<x){x-=w
do{k[o++]=f[C++]}while(--w)
C=o-S,T=k}}else if(l<w){if(C+=c+l-w,(w-=l)<x){x-=w
do{k[o++]=f[C++]}while(--w)
if(C=0,l<x){x-=w=l
do{k[o++]=f[C++]}while(--w)
C=o-S,T=k}}}else if(C+=l-w,w<x){x-=w
do{k[o++]=f[C++]}while(--w)
C=o-S,T=k}for(;x>2;)k[o++]=T[C++],k[o++]=T[C++],k[o++]=T[C++],x-=3
x&&(k[o++]=T[C++],x>1&&(k[o++]=T[C++]))}else{C=o-S
do{k[o++]=k[C++],k[o++]=k[C++],k[o++]=k[C++],x-=3}while(x>2)
x&&(k[o++]=k[C++],x>1&&(k[o++]=k[C++]))}break}}break}}while(r<i&&o<s)
r-=x=p>>3,d&=(1<<(p-=x<<3))-1,t.next_in=r,t.next_out=o,t.avail_in=r<i?i-r+5:5-(r-i),t.avail_out=o<s?s-o+257:257-(o-s),n.hold=d,n.bits=p}},3534:function(t,e,n){"use strict"
var r=n(1307),i=n(7506),o=n(8548),a=n(2399),s=n(1721),u=-2,c=12,h=30
function l(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function f(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function d(t){var e
return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=1,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new r.Buf32(852),e.distcode=e.distdyn=new r.Buf32(592),e.sane=1,e.back=-1,0):u}function p(t){var e
return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,d(t)):u}function g(t,e){var n,r
return t&&t.state?(r=t.state,e<0?(n=0,e=-e):(n=1+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?u:(null!==r.window&&r.wbits!==e&&(r.window=null),r.wrap=n,r.wbits=e,p(t))):u}function v(t,e){var n,r
return t?(r=new f,t.state=r,r.window=null,0!==(n=g(t,e))&&(t.state=null),n):u}var m,y,b=!0
function w(t){if(b){var e
for(m=new r.Buf32(512),y=new r.Buf32(32),e=0;e<144;)t.lens[e++]=8
for(;e<256;)t.lens[e++]=9
for(;e<280;)t.lens[e++]=7
for(;e<288;)t.lens[e++]=8
for(s(1,t.lens,0,288,m,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5
s(2,t.lens,0,32,y,0,t.work,{bits:5}),b=!1}t.lencode=m,t.lenbits=9,t.distcode=y,t.distbits=5}function x(t,e,n,i){var o,a=t.state
return null===a.window&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new r.Buf8(a.wsize)),i>=a.wsize?(r.arraySet(a.window,e,n-a.wsize,a.wsize,0),a.wnext=0,a.whave=a.wsize):((o=a.wsize-a.wnext)>i&&(o=i),r.arraySet(a.window,e,n-i,o,a.wnext),(i-=o)?(r.arraySet(a.window,e,n-i,i,0),a.wnext=i,a.whave=a.wsize):(a.wnext+=o,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=o))),0}e.inflateReset=p,e.inflateReset2=g,e.inflateResetKeep=d,e.inflateInit=function(t){return v(t,15)},e.inflateInit2=v,e.inflate=function(t,e){var n,f,d,p,g,v,m,y,b,S,C,T,E,k,A,P,F,R,O,D,M,I,N,_,B=0,L=new r.Buf8(4),U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]
if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return u;(n=t.state).mode===c&&(n.mode=13),g=t.next_out,d=t.output,m=t.avail_out,p=t.next_in,f=t.input,v=t.avail_in,y=n.hold,b=n.bits,S=v,C=m,I=0
t:for(;;)switch(n.mode){case 1:if(0===n.wrap){n.mode=13
break}for(;b<16;){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}if(2&n.wrap&&35615===y){n.check=0,L[0]=255&y,L[1]=y>>>8&255,n.check=o(n.check,L,2,0),y=0,b=0,n.mode=2
break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&y)<<8)+(y>>8))%31){t.msg="incorrect header check",n.mode=h
break}if(8!=(15&y)){t.msg="unknown compression method",n.mode=h
break}if(b-=4,M=8+(15&(y>>>=4)),0===n.wbits)n.wbits=M
else if(M>n.wbits){t.msg="invalid window size",n.mode=h
break}n.dmax=1<<M,t.adler=n.check=1,n.mode=512&y?10:c,y=0,b=0
break
case 2:for(;b<16;){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}if(n.flags=y,8!=(255&n.flags)){t.msg="unknown compression method",n.mode=h
break}if(57344&n.flags){t.msg="unknown header flags set",n.mode=h
break}n.head&&(n.head.text=y>>8&1),512&n.flags&&(L[0]=255&y,L[1]=y>>>8&255,n.check=o(n.check,L,2,0)),y=0,b=0,n.mode=3
case 3:for(;b<32;){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}n.head&&(n.head.time=y),512&n.flags&&(L[0]=255&y,L[1]=y>>>8&255,L[2]=y>>>16&255,L[3]=y>>>24&255,n.check=o(n.check,L,4,0)),y=0,b=0,n.mode=4
case 4:for(;b<16;){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}n.head&&(n.head.xflags=255&y,n.head.os=y>>8),512&n.flags&&(L[0]=255&y,L[1]=y>>>8&255,n.check=o(n.check,L,2,0)),y=0,b=0,n.mode=5
case 5:if(1024&n.flags){for(;b<16;){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}n.length=y,n.head&&(n.head.extra_len=y),512&n.flags&&(L[0]=255&y,L[1]=y>>>8&255,n.check=o(n.check,L,2,0)),y=0,b=0}else n.head&&(n.head.extra=null)
n.mode=6
case 6:if(1024&n.flags&&((T=n.length)>v&&(T=v),T&&(n.head&&(M=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Array(n.head.extra_len)),r.arraySet(n.head.extra,f,p,T,M)),512&n.flags&&(n.check=o(n.check,f,T,p)),v-=T,p+=T,n.length-=T),n.length))break t
n.length=0,n.mode=7
case 7:if(2048&n.flags){if(0===v)break t
T=0
do{M=f[p+T++],n.head&&M&&n.length<65536&&(n.head.name+=String.fromCharCode(M))}while(M&&T<v)
if(512&n.flags&&(n.check=o(n.check,f,T,p)),v-=T,p+=T,M)break t}else n.head&&(n.head.name=null)
n.length=0,n.mode=8
case 8:if(4096&n.flags){if(0===v)break t
T=0
do{M=f[p+T++],n.head&&M&&n.length<65536&&(n.head.comment+=String.fromCharCode(M))}while(M&&T<v)
if(512&n.flags&&(n.check=o(n.check,f,T,p)),v-=T,p+=T,M)break t}else n.head&&(n.head.comment=null)
n.mode=9
case 9:if(512&n.flags){for(;b<16;){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}if(y!==(65535&n.check)){t.msg="header crc mismatch",n.mode=h
break}y=0,b=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),t.adler=n.check=0,n.mode=c
break
case 10:for(;b<32;){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}t.adler=n.check=l(y),y=0,b=0,n.mode=11
case 11:if(0===n.havedict)return t.next_out=g,t.avail_out=m,t.next_in=p,t.avail_in=v,n.hold=y,n.bits=b,2
t.adler=n.check=1,n.mode=c
case c:if(5===e||6===e)break t
case 13:if(n.last){y>>>=7&b,b-=7&b,n.mode=27
break}for(;b<3;){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}switch(n.last=1&y,b-=1,3&(y>>>=1)){case 0:n.mode=14
break
case 1:if(w(n),n.mode=20,6===e){y>>>=2,b-=2
break t}break
case 2:n.mode=17
break
case 3:t.msg="invalid block type",n.mode=h}y>>>=2,b-=2
break
case 14:for(y>>>=7&b,b-=7&b;b<32;){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}if((65535&y)!=(y>>>16^65535)){t.msg="invalid stored block lengths",n.mode=h
break}if(n.length=65535&y,y=0,b=0,n.mode=15,6===e)break t
case 15:n.mode=16
case 16:if(T=n.length){if(T>v&&(T=v),T>m&&(T=m),0===T)break t
r.arraySet(d,f,p,T,g),v-=T,p+=T,m-=T,g+=T,n.length-=T
break}n.mode=c
break
case 17:for(;b<14;){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}if(n.nlen=257+(31&y),y>>>=5,b-=5,n.ndist=1+(31&y),y>>>=5,b-=5,n.ncode=4+(15&y),y>>>=4,b-=4,n.nlen>286||n.ndist>30){t.msg="too many length or distance symbols",n.mode=h
break}n.have=0,n.mode=18
case 18:for(;n.have<n.ncode;){for(;b<3;){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}n.lens[U[n.have++]]=7&y,y>>>=3,b-=3}for(;n.have<19;)n.lens[U[n.have++]]=0
if(n.lencode=n.lendyn,n.lenbits=7,N={bits:n.lenbits},I=s(0,n.lens,0,19,n.lencode,0,n.work,N),n.lenbits=N.bits,I){t.msg="invalid code lengths set",n.mode=h
break}n.have=0,n.mode=19
case 19:for(;n.have<n.nlen+n.ndist;){for(;P=(B=n.lencode[y&(1<<n.lenbits)-1])>>>16&255,F=65535&B,!((A=B>>>24)<=b);){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}if(F<16)y>>>=A,b-=A,n.lens[n.have++]=F
else{if(16===F){for(_=A+2;b<_;){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}if(y>>>=A,b-=A,0===n.have){t.msg="invalid bit length repeat",n.mode=h
break}M=n.lens[n.have-1],T=3+(3&y),y>>>=2,b-=2}else if(17===F){for(_=A+3;b<_;){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}b-=A,M=0,T=3+(7&(y>>>=A)),y>>>=3,b-=3}else{for(_=A+7;b<_;){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}b-=A,M=0,T=11+(127&(y>>>=A)),y>>>=7,b-=7}if(n.have+T>n.nlen+n.ndist){t.msg="invalid bit length repeat",n.mode=h
break}for(;T--;)n.lens[n.have++]=M}}if(n.mode===h)break
if(0===n.lens[256]){t.msg="invalid code -- missing end-of-block",n.mode=h
break}if(n.lenbits=9,N={bits:n.lenbits},I=s(1,n.lens,0,n.nlen,n.lencode,0,n.work,N),n.lenbits=N.bits,I){t.msg="invalid literal/lengths set",n.mode=h
break}if(n.distbits=6,n.distcode=n.distdyn,N={bits:n.distbits},I=s(2,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,N),n.distbits=N.bits,I){t.msg="invalid distances set",n.mode=h
break}if(n.mode=20,6===e)break t
case 20:n.mode=21
case 21:if(v>=6&&m>=258){t.next_out=g,t.avail_out=m,t.next_in=p,t.avail_in=v,n.hold=y,n.bits=b,a(t,C),g=t.next_out,d=t.output,m=t.avail_out,p=t.next_in,f=t.input,v=t.avail_in,y=n.hold,b=n.bits,n.mode===c&&(n.back=-1)
break}for(n.back=0;P=(B=n.lencode[y&(1<<n.lenbits)-1])>>>16&255,F=65535&B,!((A=B>>>24)<=b);){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}if(P&&0==(240&P)){for(R=A,O=P,D=F;P=(B=n.lencode[D+((y&(1<<R+O)-1)>>R)])>>>16&255,F=65535&B,!(R+(A=B>>>24)<=b);){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}y>>>=R,b-=R,n.back+=R}if(y>>>=A,b-=A,n.back+=A,n.length=F,0===P){n.mode=26
break}if(32&P){n.back=-1,n.mode=c
break}if(64&P){t.msg="invalid literal/length code",n.mode=h
break}n.extra=15&P,n.mode=22
case 22:if(n.extra){for(_=n.extra;b<_;){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}n.length+=y&(1<<n.extra)-1,y>>>=n.extra,b-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23
case 23:for(;P=(B=n.distcode[y&(1<<n.distbits)-1])>>>16&255,F=65535&B,!((A=B>>>24)<=b);){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}if(0==(240&P)){for(R=A,O=P,D=F;P=(B=n.distcode[D+((y&(1<<R+O)-1)>>R)])>>>16&255,F=65535&B,!(R+(A=B>>>24)<=b);){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}y>>>=R,b-=R,n.back+=R}if(y>>>=A,b-=A,n.back+=A,64&P){t.msg="invalid distance code",n.mode=h
break}n.offset=F,n.extra=15&P,n.mode=24
case 24:if(n.extra){for(_=n.extra;b<_;){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}n.offset+=y&(1<<n.extra)-1,y>>>=n.extra,b-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){t.msg="invalid distance too far back",n.mode=h
break}n.mode=25
case 25:if(0===m)break t
if(T=C-m,n.offset>T){if((T=n.offset-T)>n.whave&&n.sane){t.msg="invalid distance too far back",n.mode=h
break}T>n.wnext?(T-=n.wnext,E=n.wsize-T):E=n.wnext-T,T>n.length&&(T=n.length),k=n.window}else k=d,E=g-n.offset,T=n.length
T>m&&(T=m),m-=T,n.length-=T
do{d[g++]=k[E++]}while(--T)
0===n.length&&(n.mode=21)
break
case 26:if(0===m)break t
d[g++]=n.length,m--,n.mode=21
break
case 27:if(n.wrap){for(;b<32;){if(0===v)break t
v--,y|=f[p++]<<b,b+=8}if(C-=m,t.total_out+=C,n.total+=C,C&&(t.adler=n.check=n.flags?o(n.check,d,C,g-C):i(n.check,d,C,g-C)),C=m,(n.flags?y:l(y))!==n.check){t.msg="incorrect data check",n.mode=h
break}y=0,b=0}n.mode=28
case 28:if(n.wrap&&n.flags){for(;b<32;){if(0===v)break t
v--,y+=f[p++]<<b,b+=8}if(y!==(4294967295&n.total)){t.msg="incorrect length check",n.mode=h
break}y=0,b=0}n.mode=29
case 29:I=1
break t
case h:I=-3
break t
case 31:return-4
default:return u}return t.next_out=g,t.avail_out=m,t.next_in=p,t.avail_in=v,n.hold=y,n.bits=b,(n.wsize||C!==t.avail_out&&n.mode<h&&(n.mode<27||4!==e))&&x(t,t.output,t.next_out,C-t.avail_out)?(n.mode=31,-4):(S-=t.avail_in,C-=t.avail_out,t.total_in+=S,t.total_out+=C,n.total+=C,n.wrap&&C&&(t.adler=n.check=n.flags?o(n.check,d,C,t.next_out-C):i(n.check,d,C,t.next_out-C)),t.data_type=n.bits+(n.last?64:0)+(n.mode===c?128:0)+(20===n.mode||15===n.mode?256:0),(0===S&&0===C||4===e)&&0===I&&(I=-5),I)},e.inflateEnd=function(t){if(!t||!t.state)return u
var e=t.state
return e.window&&(e.window=null),t.state=null,0},e.inflateGetHeader=function(t,e){var n
return t&&t.state?0==(2&(n=t.state).wrap)?u:(n.head=e,e.done=!1,0):u},e.inflateSetDictionary=function(t,e){var n,r=e.length
return t&&t.state?0!==(n=t.state).wrap&&11!==n.mode?u:11===n.mode&&i(1,e,r,0)!==n.check?-3:x(t,e,r,r)?(n.mode=31,-4):(n.havedict=1,0):u},e.inflateInfo="pako inflate (from Nodeca project)"},1721:function(t,e,n){"use strict"
var r=n(1307),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],a=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]
t.exports=function(t,e,n,u,c,h,l,f){var d,p,g,v,m,y,b,w,x,S=f.bits,C=0,T=0,E=0,k=0,A=0,P=0,F=0,R=0,O=0,D=0,M=null,I=0,N=new r.Buf16(16),_=new r.Buf16(16),B=null,L=0
for(C=0;C<=15;C++)N[C]=0
for(T=0;T<u;T++)N[e[n+T]]++
for(A=S,k=15;k>=1&&0===N[k];k--);if(A>k&&(A=k),0===k)return c[h++]=20971520,c[h++]=20971520,f.bits=1,0
for(E=1;E<k&&0===N[E];E++);for(A<E&&(A=E),R=1,C=1;C<=15;C++)if(R<<=1,(R-=N[C])<0)return-1
if(R>0&&(0===t||1!==k))return-1
for(_[1]=0,C=1;C<15;C++)_[C+1]=_[C]+N[C]
for(T=0;T<u;T++)0!==e[n+T]&&(l[_[e[n+T]]++]=T)
if(0===t?(M=B=l,y=19):1===t?(M=i,I-=257,B=o,L-=257,y=256):(M=a,B=s,y=-1),D=0,T=0,C=E,m=h,P=A,F=0,g=-1,v=(O=1<<A)-1,1===t&&O>852||2===t&&O>592)return 1
for(;;){b=C-F,l[T]<y?(w=0,x=l[T]):l[T]>y?(w=B[L+l[T]],x=M[I+l[T]]):(w=96,x=0),d=1<<C-F,E=p=1<<P
do{c[m+(D>>F)+(p-=d)]=b<<24|w<<16|x|0}while(0!==p)
for(d=1<<C-1;D&d;)d>>=1
if(0!==d?(D&=d-1,D+=d):D=0,T++,0==--N[C]){if(C===k)break
C=e[n+l[T]]}if(C>A&&(D&v)!==g){for(0===F&&(F=A),m+=E,R=1<<(P=C-F);P+F<k&&!((R-=N[P+F])<=0);)P++,R<<=1
if(O+=1<<P,1===t&&O>852||2===t&&O>592)return 1
c[g=D&v]=A<<24|P<<16|m-h|0}}return 0!==D&&(c[m+D]=C-F<<24|64<<16|0),f.bits=A,0}},8021:function(t){"use strict"
t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},5280:function(t,e,n){"use strict"
var r=n(1307)
function i(t){for(var e=t.length;--e>=0;)t[e]=0}var o=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],a=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],u=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],c=new Array(576)
i(c)
var h=new Array(60)
i(h)
var l=new Array(512)
i(l)
var f=new Array(256)
i(f)
var d=new Array(29)
i(d)
var p,g,v,m=new Array(30)
function y(t,e,n,r,i){this.static_tree=t,this.extra_bits=e,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=t&&t.length}function b(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function w(t){return t<256?l[t]:l[256+(t>>>7)]}function x(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function S(t,e,n){t.bi_valid>16-n?(t.bi_buf|=e<<t.bi_valid&65535,x(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=n-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=n)}function C(t,e,n){S(t,n[2*e],n[2*e+1])}function T(t,e){var n=0
do{n|=1&t,t>>>=1,n<<=1}while(--e>0)
return n>>>1}function E(t,e,n){var r,i,o=new Array(16),a=0
for(r=1;r<=15;r++)o[r]=a=a+n[r-1]<<1
for(i=0;i<=e;i++){var s=t[2*i+1]
0!==s&&(t[2*i]=T(o[s]++,s))}}function k(t){var e
for(e=0;e<286;e++)t.dyn_ltree[2*e]=0
for(e=0;e<30;e++)t.dyn_dtree[2*e]=0
for(e=0;e<19;e++)t.bl_tree[2*e]=0
t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function A(t){t.bi_valid>8?x(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function P(t,e,n,r){var i=2*e,o=2*n
return t[i]<t[o]||t[i]===t[o]&&r[e]<=r[n]}function F(t,e,n){for(var r=t.heap[n],i=n<<1;i<=t.heap_len&&(i<t.heap_len&&P(e,t.heap[i+1],t.heap[i],t.depth)&&i++,!P(e,r,t.heap[i],t.depth));)t.heap[n]=t.heap[i],n=i,i<<=1
t.heap[n]=r}function R(t,e,n){var r,i,s,u,c=0
if(0!==t.last_lit)do{r=t.pending_buf[t.d_buf+2*c]<<8|t.pending_buf[t.d_buf+2*c+1],i=t.pending_buf[t.l_buf+c],c++,0===r?C(t,i,e):(C(t,(s=f[i])+256+1,e),0!==(u=o[s])&&S(t,i-=d[s],u),C(t,s=w(--r),n),0!==(u=a[s])&&S(t,r-=m[s],u))}while(c<t.last_lit)
C(t,256,e)}function O(t,e){var n,r,i,o=e.dyn_tree,a=e.stat_desc.static_tree,s=e.stat_desc.has_stree,u=e.stat_desc.elems,c=-1
for(t.heap_len=0,t.heap_max=573,n=0;n<u;n++)0!==o[2*n]?(t.heap[++t.heap_len]=c=n,t.depth[n]=0):o[2*n+1]=0
for(;t.heap_len<2;)o[2*(i=t.heap[++t.heap_len]=c<2?++c:0)]=1,t.depth[i]=0,t.opt_len--,s&&(t.static_len-=a[2*i+1])
for(e.max_code=c,n=t.heap_len>>1;n>=1;n--)F(t,o,n)
i=u
do{n=t.heap[1],t.heap[1]=t.heap[t.heap_len--],F(t,o,1),r=t.heap[1],t.heap[--t.heap_max]=n,t.heap[--t.heap_max]=r,o[2*i]=o[2*n]+o[2*r],t.depth[i]=(t.depth[n]>=t.depth[r]?t.depth[n]:t.depth[r])+1,o[2*n+1]=o[2*r+1]=i,t.heap[1]=i++,F(t,o,1)}while(t.heap_len>=2)
t.heap[--t.heap_max]=t.heap[1],function(t,e){var n,r,i,o,a,s,u=e.dyn_tree,c=e.max_code,h=e.stat_desc.static_tree,l=e.stat_desc.has_stree,f=e.stat_desc.extra_bits,d=e.stat_desc.extra_base,p=e.stat_desc.max_length,g=0
for(o=0;o<=15;o++)t.bl_count[o]=0
for(u[2*t.heap[t.heap_max]+1]=0,n=t.heap_max+1;n<573;n++)(o=u[2*u[2*(r=t.heap[n])+1]+1]+1)>p&&(o=p,g++),u[2*r+1]=o,r>c||(t.bl_count[o]++,a=0,r>=d&&(a=f[r-d]),s=u[2*r],t.opt_len+=s*(o+a),l&&(t.static_len+=s*(h[2*r+1]+a)))
if(0!==g){do{for(o=p-1;0===t.bl_count[o];)o--
t.bl_count[o]--,t.bl_count[o+1]+=2,t.bl_count[p]--,g-=2}while(g>0)
for(o=p;0!==o;o--)for(r=t.bl_count[o];0!==r;)(i=t.heap[--n])>c||(u[2*i+1]!==o&&(t.opt_len+=(o-u[2*i+1])*u[2*i],u[2*i+1]=o),r--)}}(t,e),E(o,c,t.bl_count)}function D(t,e,n){var r,i,o=-1,a=e[1],s=0,u=7,c=4
for(0===a&&(u=138,c=3),e[2*(n+1)+1]=65535,r=0;r<=n;r++)i=a,a=e[2*(r+1)+1],++s<u&&i===a||(s<c?t.bl_tree[2*i]+=s:0!==i?(i!==o&&t.bl_tree[2*i]++,t.bl_tree[32]++):s<=10?t.bl_tree[34]++:t.bl_tree[36]++,s=0,o=i,0===a?(u=138,c=3):i===a?(u=6,c=3):(u=7,c=4))}function M(t,e,n){var r,i,o=-1,a=e[1],s=0,u=7,c=4
for(0===a&&(u=138,c=3),r=0;r<=n;r++)if(i=a,a=e[2*(r+1)+1],!(++s<u&&i===a)){if(s<c)do{C(t,i,t.bl_tree)}while(0!=--s)
else 0!==i?(i!==o&&(C(t,i,t.bl_tree),s--),C(t,16,t.bl_tree),S(t,s-3,2)):s<=10?(C(t,17,t.bl_tree),S(t,s-3,3)):(C(t,18,t.bl_tree),S(t,s-11,7))
s=0,o=i,0===a?(u=138,c=3):i===a?(u=6,c=3):(u=7,c=4)}}i(m)
var I=!1
function N(t,e,n,i){S(t,0+(i?1:0),3),function(t,e,n,i){A(t),x(t,n),x(t,~n),r.arraySet(t.pending_buf,t.window,e,n,t.pending),t.pending+=n}(t,e,n)}e._tr_init=function(t){I||(function(){var t,e,n,r,i,u=new Array(16)
for(n=0,r=0;r<28;r++)for(d[r]=n,t=0;t<1<<o[r];t++)f[n++]=r
for(f[n-1]=r,i=0,r=0;r<16;r++)for(m[r]=i,t=0;t<1<<a[r];t++)l[i++]=r
for(i>>=7;r<30;r++)for(m[r]=i<<7,t=0;t<1<<a[r]-7;t++)l[256+i++]=r
for(e=0;e<=15;e++)u[e]=0
for(t=0;t<=143;)c[2*t+1]=8,t++,u[8]++
for(;t<=255;)c[2*t+1]=9,t++,u[9]++
for(;t<=279;)c[2*t+1]=7,t++,u[7]++
for(;t<=287;)c[2*t+1]=8,t++,u[8]++
for(E(c,287,u),t=0;t<30;t++)h[2*t+1]=5,h[2*t]=T(t,5)
p=new y(c,o,257,286,15),g=new y(h,a,0,30,15),v=new y(new Array(0),s,0,19,7)}(),I=!0),t.l_desc=new b(t.dyn_ltree,p),t.d_desc=new b(t.dyn_dtree,g),t.bl_desc=new b(t.bl_tree,v),t.bi_buf=0,t.bi_valid=0,k(t)},e._tr_stored_block=N,e._tr_flush_block=function(t,e,n,r){var i,o,a=0
t.level>0?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,n=4093624447
for(e=0;e<=31;e++,n>>>=1)if(1&n&&0!==t.dyn_ltree[2*e])return 0
if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1
for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1
return 0}(t)),O(t,t.l_desc),O(t,t.d_desc),a=function(t){var e
for(D(t,t.dyn_ltree,t.l_desc.max_code),D(t,t.dyn_dtree,t.d_desc.max_code),O(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*u[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),i=t.opt_len+3+7>>>3,(o=t.static_len+3+7>>>3)<=i&&(i=o)):i=o=n+5,n+4<=i&&-1!==e?N(t,e,n,r):4===t.strategy||o===i?(S(t,2+(r?1:0),3),R(t,c,h)):(S(t,4+(r?1:0),3),function(t,e,n,r){var i
for(S(t,e-257,5),S(t,n-1,5),S(t,r-4,4),i=0;i<r;i++)S(t,t.bl_tree[2*u[i]+1],3)
M(t,t.dyn_ltree,e-1),M(t,t.dyn_dtree,n-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,a+1),R(t,t.dyn_ltree,t.dyn_dtree)),k(t),r&&A(t)},e._tr_tally=function(t,e,n){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&n,t.last_lit++,0===e?t.dyn_ltree[2*n]++:(t.matches++,e--,t.dyn_ltree[2*(f[n]+256+1)]++,t.dyn_dtree[2*w(e)]++),t.last_lit===t.lit_bufsize-1},e._tr_align=function(t){S(t,2,3),C(t,256,c),function(t){16===t.bi_valid?(x(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}},7563:function(t){"use strict"
t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},2638:function(t,e,n){"use strict"
n.d(e,{bt:function(){return fn},dd:function(){return ft},ll:function(){return Ce},ip:function(){return fe},uo:function(){return Te},MY:function(){return be},Ke:function(){return xe},I3:function(){return de},Nl:function(){return pe},Ic:function(){return we},_D:function(){return Ee},kP:function(){return h},r4:function(){return _},eB:function(){return ye},wx:function(){return ve},Qu:function(){return Sn},vL:function(){return Qe},Rj:function(){return yn},PK:function(){return $e},Cx:function(){return Ve},Lf:function(){return Je},MR:function(){return Ze},o0:function(){return sn},qC:function(){return qe},jM:function(){return gn},BE:function(){return tn},SI:function(){return xn},bF:function(){return en},yg:function(){return nn},X7:function(){return rn},bi:function(){return ln},uc:function(){return on},jw:function(){return ge},E9:function(){return Se},Yt:function(){return r},EE:function(){return Ke},H:function(){return kt},pO:function(){return L},VV:function(){return me},bY:function(){return w},rz:function(){return V},ad:function(){return Z},mH:function(){return u},N$:function(){return a},Q0:function(){return s},Sn:function(){return Tt},Fv:function(){return it},oq:function(){return S},Rx:function(){return C},ZM:function(){return W},Qn:function(){return Ft},wG:function(){return _t},p4:function(){return Nt},Fc:function(){return A},DS:function(){return je},S8:function(){return Le},oX:function(){return ze},E3:function(){return He},gi:function(){return Ue},HN:function(){return Ge},RW:function(){return f},Ht:function(){return g},FC:function(){return ue},lg:function(){return ae},ZT:function(){return ie},xL:function(){return ne},If:function(){return ee},AE:function(){return Yt},pS:function(){return Qt},kw:function(){return Xt},Ax:function(){return mt},JT:function(){return le},sS:function(){return Jt},lt:function(){return se},JG:function(){return $t},os:function(){return re},yU:function(){return Kt},zh:function(){return he},Bj:function(){return ce},Ip:function(){return Et},ZY:function(){return tt},Qj:function(){return ot},hl:function(){return Q},y2:function(){return $},se:function(){return At},qs:function(){return Re},jg:function(){return Fe},v0:function(){return Oe},kZ:function(){return K},Vb:function(){return nt},Ao:function(){return q},t:function(){return et},TE:function(){return De},Pq:function(){return z},bo:function(){return G},uR:function(){return l},vi:function(){return v},C9:function(){return X},U6:function(){return b},YN:function(){return N},B8:function(){return Pt},YK:function(){return vt},Iz:function(){return gt},Ge:function(){return O},kc:function(){return oe},Ih:function(){return R},o7:function(){return x},bA:function(){return F},xl:function(){return st},Q$:function(){return ct},Rt:function(){return I},O8:function(){return St},l6:function(){return Mt},GR:function(){return yt},mE:function(){return wt},vE:function(){return at},Ou:function(){return j},xC:function(){return B},H7:function(){return ht},lf:function(){return U},H_:function(){return H},sp:function(){return Ct},yb:function(){return It},dA:function(){return bt},XS:function(){return xt},an:function(){return pt},zS:function(){return dt},kW:function(){return lt},nU:function(){return ut},V_:function(){return rt},Cs:function(){return M},VQ:function(){return D},h6:function(){return Y},Go:function(){return J},Ux:function(){return y},Yr:function(){return m},Iu:function(){return P}})
var r,i=n(1445),o=n(7970),a=function(t){return t instanceof o.wQ?t:o.wQ.of(t)},s=function(t){return t instanceof o.qI?t:o.qI.of(t)},u=function(t){return t instanceof o.qI?t.asNumber():t},c=n(7569)
!function(t){t.Degrees="degrees",t.Radians="radians"}(r||(r={}))
var h,l=function(t){return(0,c.ku)(t,"radianAngle",["number"]),{type:r.Radians,angle:t}},f=function(t){return(0,c.ku)(t,"degreeAngle",["number"]),{type:r.Degrees,angle:t}},d=r.Radians,p=r.Degrees,g=function(t){return t*Math.PI/180},v=function(t){return 180*t/Math.PI},m=function(t){return t.type===d?t.angle:t.type===p?g(t.angle):(0,c.vU)("Invalid rotation: "+JSON.stringify(t))},y=function(t){return t.type===d?v(t.angle):t.type===p?t.angle:(0,c.vU)("Invalid rotation: "+JSON.stringify(t))},b=function(t){void 0===t&&(t=0)
var e=t/90%4
return 0===e?0:1===e?90:2===e?180:3===e?270:0},w=function(t,e){void 0===e&&(e=0)
var n=b(e)
return 90===n||270===n?{width:t.height,height:t.width}:{width:t.width,height:t.height}},x=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=0)
var r=t.x,i=t.y,o=t.width,a=t.height,s=b(n),u=e/2
return 0===s?{x:r-u,y:i-u,width:o,height:a}:90===s?{x:r-a+u,y:i-u,width:a,height:o}:180===s?{x:r-o+u,y:i-a+u,width:o,height:a}:270===s?{x:r-u,y:i-o+u,width:a,height:o}:{x:r-u,y:i-u,width:o,height:a}},S=function(){return o.sI.of(o.Y3.ClipNonZero)},C=function(){return o.sI.of(o.Y3.ClipEvenOdd)},T=Math.cos,E=Math.sin,k=Math.tan,A=function(t,e,n,r,i,a){return o.sI.of(o.Y3.ConcatTransformationMatrix,[s(t),s(e),s(n),s(r),s(i),s(a)])},P=function(t,e){return A(1,0,0,1,t,e)},F=function(t,e){return A(t,0,0,e,0,0)},R=function(t){return A(T(u(t)),E(u(t)),-E(u(t)),T(u(t)),0,0)},O=function(t){return R(g(u(t)))},D=function(t,e){return A(1,k(u(t)),k(u(e)),1,0,0)},M=function(t,e){return D(g(u(t)),g(u(e)))},I=function(t,e){return o.sI.of(o.Y3.SetLineDashPattern,["["+t.map(s).join(" ")+"]",s(e)])},N=function(){return I([],0)}
!function(t){t[t.Butt=0]="Butt",t[t.Round=1]="Round",t[t.Projecting=2]="Projecting"}(h||(h={}))
var _,B=function(t){return o.sI.of(o.Y3.SetLineCapStyle,[s(t)])}
!function(t){t[t.Miter=0]="Miter",t[t.Round=1]="Round",t[t.Bevel=2]="Bevel"}(_||(_={}))
var L,U=function(t){return o.sI.of(o.Y3.SetLineJoinStyle,[s(t)])},j=function(t){return o.sI.of(o.Y3.SetGraphicsStateParams,[a(t)])},G=function(){return o.sI.of(o.Y3.PushGraphicsState)},z=function(){return o.sI.of(o.Y3.PopGraphicsState)},H=function(t){return o.sI.of(o.Y3.SetLineWidth,[s(t)])},V=function(t,e,n,r,i,a){return o.sI.of(o.Y3.AppendBezierCurve,[s(t),s(e),s(n),s(r),s(i),s(a)])},Z=function(t,e,n,r){return o.sI.of(o.Y3.CurveToReplicateInitialPoint,[s(t),s(e),s(n),s(r)])},W=function(){return o.sI.of(o.Y3.ClosePath)},q=function(t,e){return o.sI.of(o.Y3.MoveTo,[s(t),s(e)])},K=function(t,e){return o.sI.of(o.Y3.LineTo,[s(t),s(e)])},X=function(t,e,n,r){return o.sI.of(o.Y3.AppendRectangle,[s(t),s(e),s(n),s(r)])},Y=function(t,e,n){return X(t,e,n,n)},J=function(){return o.sI.of(o.Y3.StrokePath)},Q=function(){return o.sI.of(o.Y3.FillNonZero)},$=function(){return o.sI.of(o.Y3.FillNonZeroAndStroke)},tt=function(){return o.sI.of(o.Y3.EndPath)},et=function(){return o.sI.of(o.Y3.NextLine)},nt=function(t,e){return o.sI.of(o.Y3.MoveText,[s(t),s(e)])},rt=function(t){return o.sI.of(o.Y3.ShowText,[t])},it=function(){return o.sI.of(o.Y3.BeginText)},ot=function(){return o.sI.of(o.Y3.EndText)},at=function(t,e){return o.sI.of(o.Y3.SetFontAndSize,[a(t),s(e)])},st=function(t){return o.sI.of(o.Y3.SetCharacterSpacing,[s(t)])},ut=function(t){return o.sI.of(o.Y3.SetWordSpacing,[s(t)])},ct=function(t){return o.sI.of(o.Y3.SetTextHorizontalScaling,[s(t)])},ht=function(t){return o.sI.of(o.Y3.SetTextLineHeight,[s(t)])},lt=function(t){return o.sI.of(o.Y3.SetTextRise,[s(t)])}
!function(t){t[t.Fill=0]="Fill",t[t.Outline=1]="Outline",t[t.FillAndOutline=2]="FillAndOutline",t[t.Invisible=3]="Invisible",t[t.FillAndClip=4]="FillAndClip",t[t.OutlineAndClip=5]="OutlineAndClip",t[t.FillAndOutlineAndClip=6]="FillAndOutlineAndClip",t[t.Clip=7]="Clip"}(L||(L={}))
var ft,dt=function(t){return o.sI.of(o.Y3.SetTextRenderingMode,[s(t)])},pt=function(t,e,n,r,i,a){return o.sI.of(o.Y3.SetTextMatrix,[s(t),s(e),s(n),s(r),s(i),s(a)])},gt=function(t,e,n,r,i){return pt(T(u(t)),E(u(t))+k(u(e)),-E(u(t))+k(u(n)),T(u(t)),r,i)},vt=function(t,e,n,r,i){return gt(g(u(t)),g(u(e)),g(u(n)),r,i)},mt=function(t){return o.sI.of(o.Y3.DrawObject,[a(t)])},yt=function(t){return o.sI.of(o.Y3.NonStrokingColorGray,[s(t)])},bt=function(t){return o.sI.of(o.Y3.StrokingColorGray,[s(t)])},wt=function(t,e,n){return o.sI.of(o.Y3.NonStrokingColorRgb,[s(t),s(e),s(n)])},xt=function(t,e,n){return o.sI.of(o.Y3.StrokingColorRgb,[s(t),s(e),s(n)])},St=function(t,e,n,r){return o.sI.of(o.Y3.NonStrokingColorCmyk,[s(t),s(e),s(n),s(r)])},Ct=function(t,e,n,r){return o.sI.of(o.Y3.StrokingColorCmyk,[s(t),s(e),s(n),s(r)])},Tt=function(t){return o.sI.of(o.Y3.BeginMarkedContent,[a(t)])},Et=function(){return o.sI.of(o.Y3.EndMarkedContent)}
!function(t){t.Grayscale="Grayscale",t.RGB="RGB",t.CMYK="CMYK"}(ft||(ft={}))
var kt,At=function(t){return(0,c.gI)(t,"gray",0,1),{type:ft.Grayscale,gray:t}},Pt=function(t,e,n){return(0,c.gI)(t,"red",0,1),(0,c.gI)(e,"green",0,1),(0,c.gI)(n,"blue",0,1),{type:ft.RGB,red:t,green:e,blue:n}},Ft=function(t,e,n,r){return(0,c.gI)(t,"cyan",0,1),(0,c.gI)(e,"magenta",0,1),(0,c.gI)(n,"yellow",0,1),(0,c.gI)(r,"key",0,1),{type:ft.CMYK,cyan:t,magenta:e,yellow:n,key:r}},Rt=ft.Grayscale,Ot=ft.RGB,Dt=ft.CMYK,Mt=function(t){return t.type===Rt?yt(t.gray):t.type===Ot?wt(t.red,t.green,t.blue):t.type===Dt?St(t.cyan,t.magenta,t.yellow,t.key):(0,c.vU)("Invalid color: "+JSON.stringify(t))},It=function(t){return t.type===Rt?bt(t.gray):t.type===Ot?xt(t.red,t.green,t.blue):t.type===Dt?Ct(t.cyan,t.magenta,t.yellow,t.key):(0,c.vU)("Invalid color: "+JSON.stringify(t))},Nt=function(t,e){return void 0===e&&(e=1),1===(null==t?void 0:t.length)?At(t[0]*e):3===(null==t?void 0:t.length)?Pt(t[0]*e,t[1]*e,t[2]*e):4===(null==t?void 0:t.length)?Ft(t[0]*e,t[1]*e,t[2]*e,t[3]*e):void 0},_t=function(t){return t.type===Rt?[t.gray]:t.type===Ot?[t.red,t.green,t.blue]:t.type===Dt?[t.cyan,t.magenta,t.yellow,t.key]:(0,c.vU)("Invalid color: "+JSON.stringify(t))},Bt=0,Lt=0,Ut=0,jt=0,Gt=0,zt=0,Ht=new Map([["A",7],["a",7],["C",6],["c",6],["H",1],["h",1],["L",2],["l",2],["M",2],["m",2],["Q",4],["q",4],["S",4],["s",4],["T",2],["t",2],["V",1],["v",1],["Z",0],["z",0]]),Vt={M:function(t){return Bt=t[0],Lt=t[1],Ut=jt=null,Gt=Bt,zt=Lt,q(Bt,Lt)},m:function(t){return Bt+=t[0],Lt+=t[1],Ut=jt=null,Gt=Bt,zt=Lt,q(Bt,Lt)},C:function(t){return Bt=t[4],Lt=t[5],Ut=t[2],jt=t[3],V(t[0],t[1],t[2],t[3],t[4],t[5])},c:function(t){var e=V(t[0]+Bt,t[1]+Lt,t[2]+Bt,t[3]+Lt,t[4]+Bt,t[5]+Lt)
return Ut=Bt+t[2],jt=Lt+t[3],Bt+=t[4],Lt+=t[5],e},S:function(t){null!==Ut&&null!==jt||(Ut=Bt,jt=Lt)
var e=V(Bt-(Ut-Bt),Lt-(jt-Lt),t[0],t[1],t[2],t[3])
return Ut=t[0],jt=t[1],Bt=t[2],Lt=t[3],e},s:function(t){null!==Ut&&null!==jt||(Ut=Bt,jt=Lt)
var e=V(Bt-(Ut-Bt),Lt-(jt-Lt),Bt+t[0],Lt+t[1],Bt+t[2],Lt+t[3])
return Ut=Bt+t[0],jt=Lt+t[1],Bt+=t[2],Lt+=t[3],e},Q:function(t){return Ut=t[0],jt=t[1],Bt=t[2],Lt=t[3],Z(t[0],t[1],Bt,Lt)},q:function(t){var e=Z(t[0]+Bt,t[1]+Lt,t[2]+Bt,t[3]+Lt)
return Ut=Bt+t[0],jt=Lt+t[1],Bt+=t[2],Lt+=t[3],e},T:function(t){null===Ut||null===jt?(Ut=Bt,jt=Lt):(Ut=Bt-(Ut-Bt),jt=Lt-(jt-Lt))
var e=Z(Ut,jt,t[0],t[1])
return Ut=Bt-(Ut-Bt),jt=Lt-(jt-Lt),Bt=t[0],Lt=t[1],e},t:function(t){null===Ut||null===jt?(Ut=Bt,jt=Lt):(Ut=Bt-(Ut-Bt),jt=Lt-(jt-Lt))
var e=Z(Ut,jt,Bt+t[0],Lt+t[1])
return Bt+=t[0],Lt+=t[1],e},A:function(t){var e=Zt(Bt,Lt,t)
return Bt=t[5],Lt=t[6],e},a:function(t){t[5]+=Bt,t[6]+=Lt
var e=Zt(Bt,Lt,t)
return Bt=t[5],Lt=t[6],e},L:function(t){return Bt=t[0],Lt=t[1],Ut=jt=null,K(Bt,Lt)},l:function(t){return Bt+=t[0],Lt+=t[1],Ut=jt=null,K(Bt,Lt)},H:function(t){return Bt=t[0],Ut=jt=null,K(Bt,Lt)},h:function(t){return Bt+=t[0],Ut=jt=null,K(Bt,Lt)},V:function(t){return Lt=t[0],Ut=jt=null,K(Bt,Lt)},v:function(t){return Lt+=t[0],Ut=jt=null,K(Bt,Lt)},Z:function(){var t=W()
return Bt=Gt,Lt=zt,t},z:function(){var t=W()
return Bt=Gt,Lt=zt,t}},Zt=function(t,e,n){for(var r=n[0],i=n[1],o=n[2],a=n[3],s=n[4],u=n[5],c=n[6],h=[],l=0,f=Wt(u,c,r,i,a,s,o,t,e);l<f.length;l++){var d=f[l],p=qt.apply(void 0,d)
h.push(V.apply(void 0,p))}return h},Wt=function(t,e,n,r,i,o,a,s,u){var c=a*(Math.PI/180),h=Math.sin(c),l=Math.cos(c)
n=Math.abs(n),r=Math.abs(r)
var f=(Ut=l*(s-t)*.5+h*(u-e)*.5)*Ut/(n*n)+(jt=l*(u-e)*.5-h*(s-t)*.5)*jt/(r*r)
f>1&&(n*=f=Math.sqrt(f),r*=f)
var d=l/n,p=h/n,g=-h/r,v=l/r,m=d*s+p*u,y=g*s+v*u,b=d*t+p*e,w=g*t+v*e,x=1/((b-m)*(b-m)+(w-y)*(w-y))-.25
x<0&&(x=0)
var S=Math.sqrt(x)
o===i&&(S=-S)
var C=.5*(m+b)-S*(w-y),T=.5*(y+w)+S*(b-m),E=Math.atan2(y-T,m-C),k=Math.atan2(w-T,b-C)-E
k<0&&1===o?k+=2*Math.PI:k>0&&0===o&&(k-=2*Math.PI)
for(var A=Math.ceil(Math.abs(k/(.5*Math.PI+.001))),P=[],F=0;F<A;F++){var R=E+F*k/A,O=E+(F+1)*k/A
P[F]=[C,T,R,O,n,r,h,l]}return P},qt=function(t,e,n,r,i,o,a,s){var u=s*i,c=-a*o,h=a*i,l=s*o,f=.5*(r-n),d=8/3*Math.sin(.5*f)*Math.sin(.5*f)/Math.sin(f),p=t+Math.cos(n)-d*Math.sin(n),g=e+Math.sin(n)+d*Math.cos(n),v=t+Math.cos(r),m=e+Math.sin(r),y=v+d*Math.sin(r),b=m-d*Math.cos(r)
return[u*p+c*g,h*p+l*g,u*y+c*b,h*y+l*b,u*v+c*m,h*v+l*m]},Kt=function(t,e){return[G(),e.graphicsState&&j(e.graphicsState),it(),Mt(e.color),at(e.font,e.size),gt(m(e.rotate),m(e.xSkew),m(e.ySkew),e.x,e.y),rt(t),ot(),z()].filter(Boolean)},Xt=function(t,e){for(var n=[G(),e.graphicsState&&j(e.graphicsState),it(),Mt(e.color),at(e.font,e.size),ht(e.lineHeight),gt(m(e.rotate),m(e.xSkew),m(e.ySkew),e.x,e.y)].filter(Boolean),r=0,i=t.length;r<i;r++)n.push(rt(t[r]),et())
return n.push(ot(),z()),n},Yt=function(t,e){return[G(),e.graphicsState&&j(e.graphicsState),P(e.x,e.y),R(m(e.rotate)),F(e.width,e.height),D(m(e.xSkew),m(e.ySkew)),mt(t),z()].filter(Boolean)},Jt=function(t,e){return[G(),e.graphicsState&&j(e.graphicsState),P(e.x,e.y),R(m(e.rotate)),F(e.xScale,e.yScale),D(m(e.xSkew),m(e.ySkew)),mt(t),z()].filter(Boolean)},Qt=function(t){var e,n
return[G(),t.graphicsState&&j(t.graphicsState),t.color&&It(t.color),H(t.thickness),I(null!==(e=t.dashArray)&&void 0!==e?e:[],null!==(n=t.dashPhase)&&void 0!==n?n:0),q(t.start.x,t.start.y),t.lineCap&&B(t.lineCap),q(t.start.x,t.start.y),K(t.end.x,t.end.y),J(),z()].filter(Boolean)},$t=function(t){var e,n
return[G(),t.graphicsState&&j(t.graphicsState),t.color&&Mt(t.color),t.borderColor&&It(t.borderColor),H(t.borderWidth),t.borderLineCap&&B(t.borderLineCap),I(null!==(e=t.borderDashArray)&&void 0!==e?e:[],null!==(n=t.borderDashPhase)&&void 0!==n?n:0),P(t.x,t.y),R(m(t.rotate)),D(m(t.xSkew),m(t.ySkew)),q(0,0),K(0,t.height),K(t.width,t.height),K(t.width,0),W(),t.color&&t.borderWidth?$():t.color?Q():t.borderColor?J():W(),z()].filter(Boolean)},te=(Math.sqrt(2)-1)/3*4,ee=function(t){var e=u(t.x),n=u(t.y),r=u(t.xScale),i=u(t.yScale),o=r*te,a=i*te,s=(e-=r)+2*r,c=(n-=i)+2*i,h=e+r,l=n+i
return[G(),q(e,l),V(e,l-a,h-o,n,h,n),V(h+o,n,s,l-a,s,l),V(s,l+a,h+o,c,h,c),V(h-o,c,e,l+a,e,l),z()]},ne=function(t){var e,n,r,o,a,s,c,h,l,d,p,g,v,y,b,w
return(0,i.pr)([G(),t.graphicsState&&j(t.graphicsState),t.color&&Mt(t.color),t.borderColor&&It(t.borderColor),H(t.borderWidth),t.borderLineCap&&B(t.borderLineCap),I(null!==(e=t.borderDashArray)&&void 0!==e?e:[],null!==(n=t.borderDashPhase)&&void 0!==n?n:0)],void 0===t.rotate?ee({x:t.x,y:t.y,xScale:t.xScale,yScale:t.yScale}):(o={x:t.x,y:t.y,xScale:t.xScale,yScale:t.yScale,rotate:null!==(r=t.rotate)&&void 0!==r?r:f(0)},a=u(o.x),s=u(o.y),c=u(o.xScale),h=u(o.yScale),l=-c,d=-h,p=c*te,g=h*te,v=l+2*c,y=d+2*h,b=l+c,w=d+h,[P(a,s),R(m(o.rotate)),q(l,w),V(l,w-g,b-p,d,b,d),V(b+p,d,v,w-g,v,w),V(v,w+g,b+p,y,b,y),V(b-p,y,l,w+g,l,w)]),[t.color&&t.borderWidth?$():t.color?Q():t.borderColor?J():W(),z()]).filter(Boolean)},re=function(t,e){var n,r,o
return(0,i.pr)([G(),e.graphicsState&&j(e.graphicsState),P(e.x,e.y),R(m(null!==(n=e.rotate)&&void 0!==n?n:f(0))),e.scale?F(e.scale,-e.scale):F(1,-1),e.color&&Mt(e.color),e.borderColor&&It(e.borderColor),e.borderWidth&&H(e.borderWidth),e.borderLineCap&&B(e.borderLineCap),I(null!==(r=e.borderDashArray)&&void 0!==r?r:[],null!==(o=e.borderDashPhase)&&void 0!==o?o:0)],function(t){return function(t){Bt=Lt=Ut=jt=Gt=zt=0
for(var e=[],n=0;n<t.length;n++){var r=t[n]
if(r.cmd&&"function"==typeof Vt[r.cmd]){var i=Vt[r.cmd](r.args)
Array.isArray(i)?e=e.concat(i):e.push(i)}}return e}(function(t){for(var e,n=[],r=[],i="",o=!1,a=0,s=0,u=t;s<u.length;s++){var c=u[s]
if(Ht.has(c))a=Ht.get(c),e&&(i.length>0&&(r[r.length]=+i),n[n.length]={cmd:e,args:r},r=[],i="",o=!1),e=c
else if([" ",","].includes(c)||"-"===c&&i.length>0&&"e"!==i[i.length-1]||"."===c&&o){if(0===i.length)continue
r.length===a?(n[n.length]={cmd:e,args:r},r=[+i],"M"===e&&(e="L"),"m"===e&&(e="l")):r[r.length]=+i,o="."===c,i=["-","."].includes(c)?c:""}else i+=c,"."===c&&(o=!0)}return i.length>0&&(r.length===a?(n[n.length]={cmd:e,args:r},r=[+i],"M"===e&&(e="L"),"m"===e&&(e="l")):r[r.length]=+i),n[n.length]={cmd:e,args:r},n}(t))}(t),[e.color&&e.borderWidth?$():e.color?Q():e.borderColor?J():W(),z()]).filter(Boolean)},ie=function(t){var e=u(t.size)
return[G(),t.color&&It(t.color),H(t.thickness),P(t.x,t.y),q(-.675*e,-.07601036269430045*e),K(-.25*e,-.49*e),K(.69*e,.475*e),J(),z()].filter(Boolean)},oe=function(t){return 0===t.rotation?[P(0,0),O(0)]:90===t.rotation?[P(t.width,0),O(90)]:180===t.rotation?[P(t.width,t.height),O(180)]:270===t.rotation?[P(0,t.height),O(270)]:[]},ae=function(t){var e=$t({x:t.x,y:t.y,width:t.width,height:t.height,borderWidth:t.borderWidth,color:t.color,borderColor:t.borderColor,rotate:f(0),xSkew:f(0),ySkew:f(0)})
if(!t.filled)return e
var n=u(t.width),r=u(t.height),o=Math.min(n,r)/2,a=ie({x:n/2,y:r/2,size:o,thickness:t.thickness,color:t.markColor})
return(0,i.pr)([G()],e,a,[z()])},se=function(t){var e=u(t.width),n=u(t.height),r=Math.min(e,n)/2,o=ne({x:t.x,y:t.y,xScale:r,yScale:r,color:t.color,borderColor:t.borderColor,borderWidth:t.borderWidth})
if(!t.filled)return o
var a=ne({x:t.x,y:t.y,xScale:.45*r,yScale:.45*r,color:t.dotColor,borderColor:void 0,borderWidth:0})
return(0,i.pr)([G()],o,a,[z()])},ue=function(t){var e=u(t.x),n=u(t.y),r=u(t.width),o=u(t.height),a=$t({x:e,y:n,width:r,height:o,borderWidth:t.borderWidth,color:t.color,borderColor:t.borderColor,rotate:f(0),xSkew:f(0),ySkew:f(0)}),s=ce(t.textLines,{color:t.textColor,font:t.font,size:t.fontSize,rotate:f(0),xSkew:f(0),ySkew:f(0)})
return(0,i.pr)([G()],a,s,[z()])},ce=function(t,e){for(var n=[it(),Mt(e.color),at(e.font,e.size)],r=0,i=t.length;r<i;r++){var o=t[r],a=o.encoded,s=o.x,u=o.y
n.push(gt(m(e.rotate),m(e.xSkew),m(e.ySkew),s,u),rt(a))}return n.push(ot()),n},he=function(t){var e=u(t.x),n=u(t.y),r=u(t.width),o=u(t.height),a=u(t.borderWidth),s=u(t.padding),c=e+a/2+s,h=n+a/2+s,l=r-2*(a/2+s),d=o-2*(a/2+s),p=[q(c,h),K(c,h+d),K(c+l,h+d),K(c+l,h),W(),S(),tt()],g=$t({x:e,y:n,width:r,height:o,borderWidth:t.borderWidth,color:t.color,borderColor:t.borderColor,rotate:f(0),xSkew:f(0),ySkew:f(0)}),v=ce(t.textLines,{color:t.textColor,font:t.font,size:t.fontSize,rotate:f(0),xSkew:f(0),ySkew:f(0)}),m=(0,i.pr)([Tt("Tx"),G()],v,[z(),Et()])
return(0,i.pr)([G()],g,p,m,[z()])},le=function(t){for(var e=u(t.x),n=u(t.y),r=u(t.width),o=u(t.height),a=u(t.lineHeight),s=u(t.borderWidth),c=u(t.padding),h=e+s/2+c,l=n+s/2+c,d=r-2*(s/2+c),p=o-2*(s/2+c),g=[q(h,l),K(h,l+p),K(h+d,l+p),K(h+d,l),W(),S(),tt()],v=$t({x:e,y:n,width:r,height:o,borderWidth:t.borderWidth,color:t.color,borderColor:t.borderColor,rotate:f(0),xSkew:f(0),ySkew:f(0)}),m=[],y=0,b=t.selectedLines.length;y<b;y++){var w=t.textLines[t.selectedLines[y]]
m.push.apply(m,$t({x:w.x-c,y:w.y-(a-w.height)/2,width:r-s,height:w.height+(a-w.height)/2,borderWidth:0,color:t.selectedColor,borderColor:void 0,rotate:f(0),xSkew:f(0),ySkew:f(0)}))}var x=ce(t.textLines,{color:t.textColor,font:t.font,size:t.fontSize,rotate:f(0),xSkew:f(0),ySkew:f(0)}),C=(0,i.pr)([Tt("Tx"),G()],x,[z(),Et()])
return(0,i.pr)([G()],v,m,g,C,[z()])},fe=function(t){function e(){return t.call(this,"Input document to `PDFDocument.load` is encrypted. You can use `PDFDocument.load(..., { ignoreEncryption: true })` if you wish to load the document anyways.")||this}return(0,i.ZT)(e,t),e}(Error),de=function(t){function e(){return t.call(this,"Input to `PDFDocument.embedFont` was a custom font, but no `fontkit` instance was found. You must register a `fontkit` instance with `PDFDocument.registerFontkit(...)` before embedding custom fonts.")||this}return(0,i.ZT)(e,t),e}(Error),pe=function(t){function e(){return t.call(this,"A `page` passed to `PDFDocument.addPage` or `PDFDocument.insertPage` was from a different (foreign) PDF document. If you want to copy pages from one PDFDocument to another, you must use `PDFDocument.copyPages(...)` to copy the pages before adding or inserting them.")||this}return(0,i.ZT)(e,t),e}(Error),ge=function(t){function e(){return t.call(this,"PDFDocument has no pages so `PDFDocument.removePage` cannot be called")||this}return(0,i.ZT)(e,t),e}(Error),ve=function(t){function e(e){var n='PDFDocument has no form field with the name "'+e+'"'
return t.call(this,n)||this}return(0,i.ZT)(e,t),e}(Error),me=function(t){function e(e,n,r){var i,o,a='Expected field "'+e+'" to be of type '+(null==n?void 0:n.name)+", but it is actually of type "+(null!==(o=null===(i=null==r?void 0:r.constructor)||void 0===i?void 0:i.name)&&void 0!==o?o:r)
return t.call(this,a)||this}return(0,i.ZT)(e,t),e}(Error),ye=function(t){function e(e){var n='Failed to select check box due to missing onValue: "'+e+'"'
return t.call(this,n)||this}return(0,i.ZT)(e,t),e}(Error),be=function(t){function e(e){var n='A field already exists with the specified name: "'+e+'"'
return t.call(this,n)||this}return(0,i.ZT)(e,t),e}(Error),we=function(t){function e(e){var n='Field name contains invalid component: "'+e+'"'
return t.call(this,n)||this}return(0,i.ZT)(e,t),e}(Error),xe=function(t){function e(e){var n='A non-terminal field already exists with the specified name: "'+e+'"'
return t.call(this,n)||this}return(0,i.ZT)(e,t),e}(Error),Se=function(t){function e(e){var n="Reading rich text fields is not supported: Attempted to read rich text field: "+e
return t.call(this,n)||this}return(0,i.ZT)(e,t),e}(Error),Ce=function(t){function e(e,n){var r="Failed to layout combed text as lineLength="+e+" is greater than cellCount="+n
return t.call(this,r)||this}return(0,i.ZT)(e,t),e}(Error),Te=function(t){function e(e,n,r){var i="Attempted to set text with length="+e+" for TextField with maxLength="+n+" and name="+r
return t.call(this,i)||this}return(0,i.ZT)(e,t),e}(Error),Ee=function(t){function e(e,n,r){var i="Attempted to set maxLength="+n+", which is less than "+e+", the length of this field's current value (name="+r+")"
return t.call(this,i)||this}return(0,i.ZT)(e,t),e}(Error)
!function(t){t[t.Left=0]="Left",t[t.Center=1]="Center",t[t.Right=2]="Right"}(kt||(kt={}))
var ke,Ae=function(t){for(var e=t.length;e>0;e--)if(/\s/.test(t[e]))return e},Pe=function(t,e,n,r){for(var i,o=t.length;o>0;){var a=t.substring(0,o),s=n.encodeText(a),u=n.widthOfTextAtSize(a,r)
if(u<e)return{line:a,encoded:s,width:u,remainder:t.substring(o)||void 0}
o=null!==(i=Ae(a))&&void 0!==i?i:0}return{line:t,encoded:n.encodeText(t),width:n.widthOfTextAtSize(t,r),remainder:void 0}},Fe=function(t,e){var n=e.alignment,r=e.fontSize,i=e.font,o=e.bounds,a=(0,c.f7)((0,c.FV)(t))
void 0!==r&&0!==r||(r=12)
for(var s=i.heightAtSize(r),u=s+.2*s,h=[],l=o.x,f=o.y,d=o.x+o.width,p=o.y+o.height,g=o.y+o.height,v=0,m=a.length;v<m;v++)for(var y=a[v];void 0!==y;){var b=Pe(y,o.width,i,r),w=b.line,x=b.encoded,S=b.width,C=b.remainder,T=n===kt.Left?o.x:n===kt.Center?o.x+o.width/2-S/2:n===kt.Right?o.x+o.width-S:o.x
T<l&&(l=T),(g-=u)<f&&(f=g),T+S>d&&(d=T+S),g+s>p&&(p=g+s),h.push({text:w,encoded:x,width:S,height:s,x:T,y:g}),y=null==C?void 0:C.trim()}return{fontSize:r,lineHeight:u,lines:h,bounds:{x:l,y:f,width:d-l,height:p-f}}},Re=function(t,e){var n=e.fontSize,r=e.font,i=e.bounds,o=e.cellCount,a=(0,c.VX)((0,c.FV)(t))
if(a.length>o)throw new Ce(a.length,o)
void 0!==n&&0!==n||(n=function(t,e,n,r){for(var i=n.width/r,o=n.height,a=4,s=(0,c.Qs)(t);a<500;){for(var u=0,h=s.length;u<h;u++){var l=s[u]
if(e.widthOfTextAtSize(l,a)>.75*i)return a-1}if(e.heightAtSize(a,{descender:!1})>o)return a-1
a+=1}return a}(a,r,i,o))
for(var s=i.width/o,u=r.heightAtSize(n,{descender:!1}),h=i.y+(i.height/2-u/2),l=[],f=i.x,d=i.y,p=i.x+i.width,g=i.y+i.height,v=0,m=0;v<o;){var y=(0,c.Vk)(a,m),b=y[0],w=y[1],x=r.encodeText(b),S=r.widthOfTextAtSize(b,n),C=i.x+(s*v+s/2)-S/2
C<f&&(f=C),h<d&&(d=h),C+S>p&&(p=C+S),h+u>g&&(g=h+u),l.push({text:a,encoded:x,width:S,height:u,x:C,y:h}),v+=1,m+=w}return{fontSize:n,cells:l,bounds:{x:f,y:d,width:p-f,height:g-d}}},Oe=function(t,e){var n=e.alignment,r=e.fontSize,i=e.font,o=e.bounds,a=(0,c.VX)((0,c.FV)(t))
void 0!==r&&0!==r||(r=function(t,e,n){for(var r=4;r<500;){for(var i=0,o=t.length;i<o;i++){var a=t[i]
if(e.widthOfTextAtSize(a,r)>n.width)return r-1}var s=e.heightAtSize(r)
if(t.length*(s+.2*s)>Math.abs(n.height))return r-1
r+=1}return r}([a],i,o))
var s=i.encodeText(a),u=i.widthOfTextAtSize(a,r),h=i.heightAtSize(r,{descender:!1}),l=n===kt.Left?o.x:n===kt.Center?o.x+o.width/2-u/2:n===kt.Right?o.x+o.width-u:o.x,f=o.y+(o.height/2-h/2)
return{fontSize:r,line:{text:a,encoded:s,width:u,height:h,x:l,y:f},bounds:{x:l,y:f,width:u,height:h}}},De=function(t){return"normal"in t?t:{normal:t}},Me=/\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]+(\d*\.\d+|\d+)[\0\t\n\f\r\ ]+Tf/,Ie=function(t){var e,n,r=null!==(e=t.getDefaultAppearance())&&void 0!==e?e:"",i=null!==(n=(0,c.JZ)(r,Me).match)&&void 0!==n?n:[],o=Number(i[2])
return isFinite(o)?o:void 0},Ne=/(\d*\.\d+|\d+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+(g|rg|k)/,_e=function(t){var e,n=null!==(e=t.getDefaultAppearance())&&void 0!==e?e:"",r=(0,c.JZ)(n,Ne).match,i=null!=r?r:[],o=i[1],a=i[2],s=i[3],u=i[4],h=i[5]
return"g"===h&&o?At(Number(o)):"rg"===h&&o&&a&&s?Pt(Number(o),Number(a),Number(s)):"k"===h&&o&&a&&s&&u?Ft(Number(o),Number(a),Number(s),Number(u)):void 0},Be=function(t,e,n,r){var i
void 0===r&&(r=0)
var o=[Mt(e).toString(),at(null!==(i=null==n?void 0:n.name)&&void 0!==i?i:"dummy__noop",r).toString()].join("\n")
t.setDefaultAppearance(o)},Le=function(t,e){var n,r,o,a=_e(e),s=_e(t.acroField),u=e.getRectangle(),c=e.getAppearanceCharacteristics(),h=e.getBorderStyle(),l=null!==(n=null==h?void 0:h.getWidth())&&void 0!==n?n:0,f=b(null==c?void 0:c.getRotation()),d=w(u,f),p=d.width,g=d.height,v=oe((0,i.pi)((0,i.pi)({},u),{rotation:f})),m=Pt(0,0,0),y=null!==(r=Nt(null==c?void 0:c.getBorderColor()))&&void 0!==r?r:m,x=Nt(null==c?void 0:c.getBackgroundColor()),S=Nt(null==c?void 0:c.getBackgroundColor(),.8),C=null!==(o=null!=a?a:s)&&void 0!==o?o:m
Be(a?e:t.acroField,C)
var T={x:0+l/2,y:0+l/2,width:p-l,height:g-l,thickness:1.5,borderWidth:l,borderColor:y,markColor:C}
return{normal:{on:(0,i.pr)(v,ae((0,i.pi)((0,i.pi)({},T),{color:x,filled:!0}))),off:(0,i.pr)(v,ae((0,i.pi)((0,i.pi)({},T),{color:x,filled:!1})))},down:{on:(0,i.pr)(v,ae((0,i.pi)((0,i.pi)({},T),{color:S,filled:!0}))),off:(0,i.pr)(v,ae((0,i.pi)((0,i.pi)({},T),{color:S,filled:!1})))}}},Ue=function(t,e){var n,r,o,a=_e(e),s=_e(t.acroField),u=e.getRectangle(),c=e.getAppearanceCharacteristics(),h=e.getBorderStyle(),l=null!==(n=null==h?void 0:h.getWidth())&&void 0!==n?n:0,f=b(null==c?void 0:c.getRotation()),d=w(u,f),p=d.width,g=d.height,v=oe((0,i.pi)((0,i.pi)({},u),{rotation:f})),m=Pt(0,0,0),y=null!==(r=Nt(null==c?void 0:c.getBorderColor()))&&void 0!==r?r:m,x=Nt(null==c?void 0:c.getBackgroundColor()),S=Nt(null==c?void 0:c.getBackgroundColor(),.8),C=null!==(o=null!=a?a:s)&&void 0!==o?o:m
Be(a?e:t.acroField,C)
var T={x:p/2,y:g/2,width:p-l,height:g-l,borderWidth:l,borderColor:y,dotColor:C}
return{normal:{on:(0,i.pr)(v,se((0,i.pi)((0,i.pi)({},T),{color:x,filled:!0}))),off:(0,i.pr)(v,se((0,i.pi)((0,i.pi)({},T),{color:x,filled:!1})))},down:{on:(0,i.pr)(v,se((0,i.pi)((0,i.pi)({},T),{color:S,filled:!0}))),off:(0,i.pr)(v,se((0,i.pi)((0,i.pi)({},T),{color:S,filled:!1})))}}},je=function(t,e,n){var r,o,a,s,u,c=_e(e),h=_e(t.acroField),l=Ie(e),f=Ie(t.acroField),d=e.getRectangle(),p=e.getAppearanceCharacteristics(),g=e.getBorderStyle(),v=null==p?void 0:p.getCaptions(),m=null!==(r=null==v?void 0:v.normal)&&void 0!==r?r:"",y=null!==(a=null!==(o=null==v?void 0:v.down)&&void 0!==o?o:m)&&void 0!==a?a:"",x=null!==(s=null==g?void 0:g.getWidth())&&void 0!==s?s:0,S=b(null==p?void 0:p.getRotation()),C=w(d,S),T=C.width,E=C.height,k=oe((0,i.pi)((0,i.pi)({},d),{rotation:S})),A=Pt(0,0,0),P=Nt(null==p?void 0:p.getBorderColor()),F=Nt(null==p?void 0:p.getBackgroundColor()),R=Nt(null==p?void 0:p.getBackgroundColor(),.8),O={x:x,y:x,width:T-2*x,height:E-2*x},D=Oe(m,{alignment:kt.Center,fontSize:null!=l?l:f,font:n,bounds:O}),M=Oe(y,{alignment:kt.Center,fontSize:null!=l?l:f,font:n,bounds:O}),I=Math.min(D.fontSize,M.fontSize),N=null!==(u=null!=c?c:h)&&void 0!==u?u:A
Be(c||void 0!==l?e:t.acroField,N,n,I)
var _={x:0+x/2,y:0+x/2,width:T-x,height:E-x,borderWidth:x,borderColor:P,textColor:N,font:n.name,fontSize:I}
return{normal:(0,i.pr)(k,ue((0,i.pi)((0,i.pi)({},_),{color:F,textLines:[D.line]}))),down:(0,i.pr)(k,ue((0,i.pi)((0,i.pi)({},_),{color:R,textLines:[M.line]})))}},Ge=function(t,e,n){var r,o,a,s,u,c,h=_e(e),l=_e(t.acroField),f=Ie(e),d=Ie(t.acroField),p=e.getRectangle(),g=e.getAppearanceCharacteristics(),v=e.getBorderStyle(),m=null!==(r=t.getText())&&void 0!==r?r:"",y=null!==(o=null==v?void 0:v.getWidth())&&void 0!==o?o:0,x=b(null==g?void 0:g.getRotation()),S=w(p,x),C=S.width,T=S.height,E=oe((0,i.pi)((0,i.pi)({},p),{rotation:x})),k=Pt(0,0,0),A=Nt(null==g?void 0:g.getBorderColor()),P=Nt(null==g?void 0:g.getBackgroundColor()),F=t.isCombed()?0:1,R={x:y+F,y:y+F,width:C-2*(y+F),height:T-2*(y+F)}
if(t.isMultiline())u=(O=Fe(m,{alignment:t.getAlignment(),fontSize:null!=f?f:d,font:n,bounds:R})).lines,c=O.fontSize
else if(t.isCombed())u=(O=Re(m,{fontSize:null!=f?f:d,font:n,bounds:R,cellCount:null!==(a=t.getMaxLength())&&void 0!==a?a:0})).cells,c=O.fontSize
else{var O
u=[(O=Oe(m,{alignment:t.getAlignment(),fontSize:null!=f?f:d,font:n,bounds:R})).line],c=O.fontSize}var D=null!==(s=null!=h?h:l)&&void 0!==s?s:k
Be(h||void 0!==f?e:t.acroField,D,n,c)
var M={x:0+y/2,y:0+y/2,width:C-y,height:T-y,borderWidth:null!=y?y:0,borderColor:A,textColor:D,font:n.name,fontSize:c,color:P,textLines:u,padding:F}
return(0,i.pr)(E,he(M))},ze=function(t,e,n){var r,o,a,s=_e(e),u=_e(t.acroField),c=Ie(e),h=Ie(t.acroField),l=e.getRectangle(),f=e.getAppearanceCharacteristics(),d=e.getBorderStyle(),p=null!==(r=t.getSelected()[0])&&void 0!==r?r:"",g=null!==(o=null==d?void 0:d.getWidth())&&void 0!==o?o:0,v=b(null==f?void 0:f.getRotation()),m=w(l,v),y=m.width,x=m.height,S=oe((0,i.pi)((0,i.pi)({},l),{rotation:v})),C=Pt(0,0,0),T=Nt(null==f?void 0:f.getBorderColor()),E=Nt(null==f?void 0:f.getBackgroundColor()),k={x:g+1,y:g+1,width:y-2*(g+1),height:x-2*(g+1)},A=Oe(p,{alignment:kt.Left,fontSize:null!=c?c:h,font:n,bounds:k}),P=A.line,F=A.fontSize,R=null!==(a=null!=s?s:u)&&void 0!==a?a:C
Be(s||void 0!==c?e:t.acroField,R,n,F)
var O={x:0+g/2,y:0+g/2,width:y-g,height:x-g,borderWidth:null!=g?g:0,borderColor:T,textColor:R,font:n.name,fontSize:F,color:E,textLines:[P],padding:1}
return(0,i.pr)(S,he(O))},He=function(t,e,n){var r,o,a=_e(e),s=_e(t.acroField),u=Ie(e),c=Ie(t.acroField),h=e.getRectangle(),l=e.getAppearanceCharacteristics(),f=e.getBorderStyle(),d=null!==(r=null==f?void 0:f.getWidth())&&void 0!==r?r:0,p=b(null==l?void 0:l.getRotation()),g=w(h,p),v=g.width,m=g.height,y=oe((0,i.pi)((0,i.pi)({},h),{rotation:p})),x=Pt(0,0,0),S=Nt(null==l?void 0:l.getBorderColor()),C=Nt(null==l?void 0:l.getBackgroundColor()),T=t.getOptions(),E=t.getSelected()
t.isSorted()&&T.sort()
for(var k="",A=0,P=T.length;A<P;A++)k+=T[A],A<P-1&&(k+="\n")
var F={x:d+1,y:d+1,width:v-2*(d+1),height:m-2*(d+1)},R=Fe(k,{alignment:kt.Left,fontSize:null!=u?u:c,font:n,bounds:F}),O=R.lines,D=R.fontSize,M=R.lineHeight,I=[]
for(A=0,P=O.length;A<P;A++){var N=O[A]
E.includes(N.text)&&I.push(A)}var _=Pt(.6,193/255,218/255),B=null!==(o=null!=a?a:s)&&void 0!==o?o:x
return Be(a||void 0!==u?e:t.acroField,B,n,D),(0,i.pr)(y,le({x:0+d/2,y:0+d/2,width:v-d,height:m-d,borderWidth:null!=d?d:0,borderColor:S,textColor:B,font:n.name,fontSize:D,color:C,textLines:O,lineHeight:M,selectedColor:_,selectedLines:I,padding:1}))},Ve=function(){function t(t,e,n){this.alreadyEmbedded=!1,(0,c.ku)(t,"ref",[[o.$F,"PDFRef"]]),(0,c.ku)(e,"doc",[[yn,"PDFDocument"]]),(0,c.ku)(n,"embedder",[[o.dS,"PDFPageEmbedder"]]),this.ref=t,this.doc=e,this.width=n.width,this.height=n.height,this.embedder=n}return t.prototype.scale=function(t){return(0,c.ku)(t,"factor",["number"]),{width:this.width*t,height:this.height*t}},t.prototype.size=function(){return this.scale(1)},t.prototype.embed=function(){return(0,i.mG)(this,void 0,void 0,(function(){return(0,i.Jh)(this,(function(t){switch(t.label){case 0:return this.alreadyEmbedded?[3,2]:[4,this.embedder.embedIntoContext(this.doc.context,this.ref)]
case 1:t.sent(),this.alreadyEmbedded=!0,t.label=2
case 2:return[2]}}))}))},t.of=function(e,n,r){return new t(e,n,r)},t}(),Ze=function(){function t(t,e,n){this.modified=!0,(0,c.ku)(t,"ref",[[o.$F,"PDFRef"]]),(0,c.ku)(e,"doc",[[yn,"PDFDocument"]]),(0,c.ku)(n,"embedder",[[o.Wz,"CustomFontEmbedder"],[o.IL,"StandardFontEmbedder"]]),this.ref=t,this.doc=e,this.name=n.fontName,this.embedder=n}return t.prototype.encodeText=function(t){return(0,c.ku)(t,"text",["string"]),this.modified=!0,this.embedder.encodeText(t)},t.prototype.widthOfTextAtSize=function(t,e){return(0,c.ku)(t,"text",["string"]),(0,c.ku)(e,"size",["number"]),this.embedder.widthOfTextAtSize(t,e)},t.prototype.heightAtSize=function(t,e){var n
return(0,c.ku)(t,"size",["number"]),(0,c.MU)(null==e?void 0:e.descender,"options.descender",["boolean"]),this.embedder.heightOfFontAtSize(t,{descender:null===(n=null==e?void 0:e.descender)||void 0===n||n})},t.prototype.sizeAtHeight=function(t){return(0,c.ku)(t,"height",["number"]),this.embedder.sizeOfFontAtHeight(t)},t.prototype.getCharacterSet=function(){return this.embedder instanceof o.IL?this.embedder.encoding.supportedCodePoints:this.embedder.font.characterSet},t.prototype.embed=function(){return(0,i.mG)(this,void 0,void 0,(function(){return(0,i.Jh)(this,(function(t){switch(t.label){case 0:return this.modified?[4,this.embedder.embedIntoContext(this.doc.context,this.ref)]:[3,2]
case 1:t.sent(),this.modified=!1,t.label=2
case 2:return[2]}}))}))},t.of=function(e,n,r){return new t(e,n,r)},t}(),We=function(){function t(t,e,n){this.alreadyEmbedded=!1,(0,c.ku)(t,"ref",[[o.$F,"PDFRef"]]),(0,c.ku)(e,"doc",[[yn,"PDFDocument"]]),(0,c.ku)(n,"embedder",[[o.sm,"JpegEmbedder"],[o.Le,"PngEmbedder"]]),this.ref=t,this.doc=e,this.width=n.width,this.height=n.height,this.embedder=n}return t.prototype.scale=function(t){return(0,c.ku)(t,"factor",["number"]),{width:this.width*t,height:this.height*t}},t.prototype.scaleToFit=function(t,e){(0,c.ku)(t,"width",["number"]),(0,c.ku)(e,"height",["number"])
var n=t/this.width,r=e/this.height,i=Math.min(n,r)
return this.scale(i)},t.prototype.size=function(){return this.scale(1)},t.prototype.embed=function(){return(0,i.mG)(this,void 0,void 0,(function(){return(0,i.Jh)(this,(function(t){switch(t.label){case 0:return this.alreadyEmbedded?[3,2]:[4,this.embedder.embedIntoContext(this.doc.context,this.ref)]
case 1:t.sent(),this.alreadyEmbedded=!0,t.label=2
case 2:return[2]}}))}))},t.of=function(e,n,r){return new t(e,n,r)},t}(),qe=We
!function(t){t[t.Left=0]="Left",t[t.Center=1]="Center",t[t.Right=2]="Right"}(ke||(ke={}))
var Ke,Xe=function(t){(0,c.MU)(null==t?void 0:t.x,"options.x",["number"]),(0,c.MU)(null==t?void 0:t.y,"options.y",["number"]),(0,c.MU)(null==t?void 0:t.width,"options.width",["number"]),(0,c.MU)(null==t?void 0:t.height,"options.height",["number"]),(0,c.MU)(null==t?void 0:t.textColor,"options.textColor",[[Object,"Color"]]),(0,c.MU)(null==t?void 0:t.backgroundColor,"options.backgroundColor",[[Object,"Color"]]),(0,c.MU)(null==t?void 0:t.borderColor,"options.borderColor",[[Object,"Color"]]),(0,c.MU)(null==t?void 0:t.borderWidth,"options.borderWidth",["number"]),(0,c.MU)(null==t?void 0:t.rotate,"options.rotate",[[Object,"Rotation"]])},Ye=function(){function t(t,e,n){(0,c.ku)(t,"acroField",[[o.Fs,"PDFAcroTerminal"]]),(0,c.ku)(e,"ref",[[o.$F,"PDFRef"]]),(0,c.ku)(n,"doc",[[yn,"PDFDocument"]]),this.acroField=t,this.ref=e,this.doc=n}return t.prototype.getName=function(){var t
return null!==(t=this.acroField.getFullyQualifiedName())&&void 0!==t?t:""},t.prototype.isReadOnly=function(){return this.acroField.hasFlag(o.PV.ReadOnly)},t.prototype.enableReadOnly=function(){this.acroField.setFlagTo(o.PV.ReadOnly,!0)},t.prototype.disableReadOnly=function(){this.acroField.setFlagTo(o.PV.ReadOnly,!1)},t.prototype.isRequired=function(){return this.acroField.hasFlag(o.PV.Required)},t.prototype.enableRequired=function(){this.acroField.setFlagTo(o.PV.Required,!0)},t.prototype.disableRequired=function(){this.acroField.setFlagTo(o.PV.Required,!1)},t.prototype.isExported=function(){return!this.acroField.hasFlag(o.PV.NoExport)},t.prototype.enableExporting=function(){this.acroField.setFlagTo(o.PV.NoExport,!1)},t.prototype.disableExporting=function(){this.acroField.setFlagTo(o.PV.NoExport,!0)},t.prototype.needsAppearancesUpdate=function(){throw new o.iQ(this.constructor.name,"needsAppearancesUpdate")},t.prototype.defaultUpdateAppearances=function(t){throw new o.iQ(this.constructor.name,"defaultUpdateAppearances")},t.prototype.markAsDirty=function(){this.doc.getForm().markFieldAsDirty(this.ref)},t.prototype.markAsClean=function(){this.doc.getForm().markFieldAsClean(this.ref)},t.prototype.isDirty=function(){return this.doc.getForm().fieldIsDirty(this.ref)},t.prototype.createWidget=function(t){var e,n=t.textColor,r=t.backgroundColor,i=t.borderColor,a=t.borderWidth,s=y(t.rotate),u=t.caption,h=t.x,l=t.y,f=t.width+a,d=t.height+a,p=Boolean(t.hidden);(0,c.m_)(s,"degreesAngle",90)
var g=o.ci.create(this.doc.context,this.ref),v=x({x:h,y:l,width:f,height:d},a,s)
g.setRectangle(v)
var m=g.getOrCreateAppearanceCharacteristics()
r&&m.setBackgroundColor(_t(r)),m.setRotation(s),u&&m.setCaptions({normal:u}),i&&m.setBorderColor(_t(i))
var b=g.getOrCreateBorderStyle()
if(void 0!==a&&b.setWidth(a),g.setFlagTo(o.TV.Print,!0),g.setFlagTo(o.TV.Hidden,p),g.setFlagTo(o.TV.Invisible,!1),n){var w=(null!==(e=this.acroField.getDefaultAppearance())&&void 0!==e?e:"")+"\n"+Mt(n).toString()
this.acroField.setDefaultAppearance(w)}return g},t.prototype.updateWidgetAppearanceWithFont=function(t,e,n){var r=n.normal,i=n.rollover,o=n.down
this.updateWidgetAppearances(t,{normal:this.createAppearanceStream(t,r,e),rollover:i&&this.createAppearanceStream(t,i,e),down:o&&this.createAppearanceStream(t,o,e)})},t.prototype.updateOnOffWidgetAppearance=function(t,e,n){var r=n.normal,i=n.rollover,o=n.down
this.updateWidgetAppearances(t,{normal:this.createAppearanceDict(t,r,e),rollover:i&&this.createAppearanceDict(t,i,e),down:o&&this.createAppearanceDict(t,o,e)})},t.prototype.updateWidgetAppearances=function(t,e){var n=e.normal,r=e.rollover,i=e.down
t.setNormalAppearance(n),r?t.setRolloverAppearance(r):t.removeRolloverAppearance(),i?t.setDownAppearance(i):t.removeDownAppearance()},t.prototype.createAppearanceStream=function(t,e,n){var r,i=this.acroField.dict.context,o=t.getRectangle(),a=o.width,s=o.height,u=n&&{Font:(r={},r[n.name]=n.ref,r)},c=i.formXObject(e,{Resources:u,BBox:i.obj([0,0,a,s]),Matrix:i.obj([1,0,0,1,0,0])})
return i.register(c)},t.prototype.createImageAppearanceStream=function(t,e,n){var r,o,a=this.acroField.dict.context,s=t.getRectangle(),u=t.getAppearanceCharacteristics(),h=t.getBorderStyle(),l=null!==(o=null==h?void 0:h.getWidth())&&void 0!==o?o:0,d=b(null==u?void 0:u.getRotation()),p=oe((0,i.pi)((0,i.pi)({},s),{rotation:d})),g=w(s,d),v=e.scaleToFit(g.width-2*l,g.height-2*l),m={x:l,y:l,width:v.width,height:v.height,rotate:f(0),xSkew:f(0),ySkew:f(0)}
n===ke.Center?(m.x+=(g.width-2*l)/2-v.width/2,m.y+=(g.height-2*l)/2-v.height/2):n===ke.Right&&(m.x=g.width-l-v.width,m.y=g.height-l-v.height)
var y=(0,c.si)("Image",10),x=(0,i.pr)(p,Yt(y,m)),S={XObject:(r={},r[y]=e.ref,r)},C=a.formXObject(x,{Resources:S,BBox:a.obj([0,0,s.width,s.height]),Matrix:a.obj([1,0,0,1,0,0])})
return a.register(C)},t.prototype.createAppearanceDict=function(t,e,n){var r=this.acroField.dict.context,i=this.createAppearanceStream(t,e.on),a=this.createAppearanceStream(t,e.off),s=r.obj({})
return s.set(n,i),s.set(o.wQ.of("Off"),a),s},t}(),Je=Ye,Qe=function(t){function e(e,n,r){var i=t.call(this,e,n,r)||this
return(0,c.ku)(e,"acroCheckBox",[[o.Ei,"PDFAcroCheckBox"]]),i.acroField=e,i}return(0,i.ZT)(e,t),e.prototype.check=function(){var t,e=null!==(t=this.acroField.getOnValue())&&void 0!==t?t:o.wQ.of("Yes")
this.markAsDirty(),this.acroField.setValue(e)},e.prototype.uncheck=function(){this.markAsDirty(),this.acroField.setValue(o.wQ.of("Off"))},e.prototype.isChecked=function(){var t=this.acroField.getOnValue()
return!!t&&t===this.acroField.getValue()},e.prototype.addToPage=function(t,e){var n,r,i,a,s,u;(0,c.ku)(t,"page",[[xn,"PDFPage"]]),Xe(e),e||(e={}),"textColor"in e||(e.textColor=Pt(0,0,0)),"backgroundColor"in e||(e.backgroundColor=Pt(1,1,1)),"borderColor"in e||(e.borderColor=Pt(0,0,0)),"borderWidth"in e||(e.borderWidth=1)
var h=this.createWidget({x:null!==(n=e.x)&&void 0!==n?n:0,y:null!==(r=e.y)&&void 0!==r?r:0,width:null!==(i=e.width)&&void 0!==i?i:50,height:null!==(a=e.height)&&void 0!==a?a:50,textColor:e.textColor,backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:null!==(s=e.borderWidth)&&void 0!==s?s:0,rotate:null!==(u=e.rotate)&&void 0!==u?u:f(0),hidden:e.hidden}),l=this.doc.context.register(h.dict)
this.acroField.addWidget(l),h.setAppearanceState(o.wQ.of("Off")),this.updateWidgetAppearance(h,o.wQ.of("Yes")),t.node.addAnnot(l)},e.prototype.needsAppearancesUpdate=function(){for(var t,e=this.acroField.getWidgets(),n=0,r=e.length;n<r;n++){var i=e[n],a=i.getAppearanceState(),s=null===(t=i.getAppearances())||void 0===t?void 0:t.normal
if(!(s instanceof o.mh))return!0
if(a&&!s.has(a))return!0}return!1},e.prototype.defaultUpdateAppearances=function(){this.updateAppearances()},e.prototype.updateAppearances=function(t){var e;(0,c.MU)(t,"provider",[Function])
for(var n=this.acroField.getWidgets(),r=0,i=n.length;r<i;r++){var a=n[r],s=null!==(e=a.getOnValue())&&void 0!==e?e:o.wQ.of("Yes")
s&&this.updateWidgetAppearance(a,s,t)}this.markAsClean()},e.prototype.updateWidgetAppearance=function(t,e,n){var r=De((null!=n?n:Le)(this,t))
this.updateOnOffWidgetAppearance(t,e,r)},e.of=function(t,n,r){return new e(t,n,r)},e}(Je),$e=function(t){function e(e,n,r){var i=t.call(this,e,n,r)||this
return(0,c.ku)(e,"acroComboBox",[[o.sS,"PDFAcroComboBox"]]),i.acroField=e,i}return(0,i.ZT)(e,t),e.prototype.getOptions=function(){for(var t=this.acroField.getOptions(),e=new Array(t.length),n=0,r=e.length;n<r;n++){var i=t[n],o=i.display,a=i.value
e[n]=(null!=o?o:a).decodeText()}return e},e.prototype.getSelected=function(){for(var t=this.acroField.getValues(),e=new Array(t.length),n=0,r=t.length;n<r;n++)e[n]=t[n].decodeText()
return e},e.prototype.setOptions=function(t){(0,c.ku)(t,"options",[Array])
for(var e=new Array(t.length),n=0,r=t.length;n<r;n++)e[n]={value:o.Ij.fromText(t[n])}
this.acroField.setOptions(e)},e.prototype.addOptions=function(t){(0,c.ku)(t,"options",["string",Array])
for(var e=Array.isArray(t)?t:[t],n=this.acroField.getOptions(),r=new Array(e.length),i=0,a=e.length;i<a;i++)r[i]={value:o.Ij.fromText(e[i])}
this.acroField.setOptions(n.concat(r))},e.prototype.select=function(t,e){void 0===e&&(e=!1),(0,c.ku)(t,"options",["string",Array]),(0,c.ku)(e,"merge",["boolean"])
var n=Array.isArray(t)?t:[t],r=this.getOptions()
n.find((function(t){return!r.includes(t)}))&&this.enableEditing(),this.markAsDirty(),(n.length>1||1===n.length&&e)&&this.enableMultiselect()
for(var i=new Array(n.length),a=0,s=n.length;a<s;a++)i[a]=o.Ij.fromText(n[a])
if(e){var u=this.acroField.getValues()
this.acroField.setValues(u.concat(i))}else this.acroField.setValues(i)},e.prototype.clear=function(){this.markAsDirty(),this.acroField.setValues([])},e.prototype.setFontSize=function(t){(0,c.z7)(t,"fontSize"),this.acroField.setFontSize(t),this.markAsDirty()},e.prototype.isEditable=function(){return this.acroField.hasFlag(o.m0.Edit)},e.prototype.enableEditing=function(){this.acroField.setFlagTo(o.m0.Edit,!0)},e.prototype.disableEditing=function(){this.acroField.setFlagTo(o.m0.Edit,!1)},e.prototype.isSorted=function(){return this.acroField.hasFlag(o.m0.Sort)},e.prototype.enableSorting=function(){this.acroField.setFlagTo(o.m0.Sort,!0)},e.prototype.disableSorting=function(){this.acroField.setFlagTo(o.m0.Sort,!1)},e.prototype.isMultiselect=function(){return this.acroField.hasFlag(o.m0.MultiSelect)},e.prototype.enableMultiselect=function(){this.acroField.setFlagTo(o.m0.MultiSelect,!0)},e.prototype.disableMultiselect=function(){this.acroField.setFlagTo(o.m0.MultiSelect,!1)},e.prototype.isSpellChecked=function(){return!this.acroField.hasFlag(o.m0.DoNotSpellCheck)},e.prototype.enableSpellChecking=function(){this.acroField.setFlagTo(o.m0.DoNotSpellCheck,!1)},e.prototype.disableSpellChecking=function(){this.acroField.setFlagTo(o.m0.DoNotSpellCheck,!0)},e.prototype.isSelectOnClick=function(){return this.acroField.hasFlag(o.m0.CommitOnSelChange)},e.prototype.enableSelectOnClick=function(){this.acroField.setFlagTo(o.m0.CommitOnSelChange,!0)},e.prototype.disableSelectOnClick=function(){this.acroField.setFlagTo(o.m0.CommitOnSelChange,!1)},e.prototype.addToPage=function(t,e){var n,r,i,o,a,s,u;(0,c.ku)(t,"page",[[xn,"PDFPage"]]),Xe(e),e||(e={}),"textColor"in e||(e.textColor=Pt(0,0,0)),"backgroundColor"in e||(e.backgroundColor=Pt(1,1,1)),"borderColor"in e||(e.borderColor=Pt(0,0,0)),"borderWidth"in e||(e.borderWidth=1)
var h=this.createWidget({x:null!==(n=e.x)&&void 0!==n?n:0,y:null!==(r=e.y)&&void 0!==r?r:0,width:null!==(i=e.width)&&void 0!==i?i:200,height:null!==(o=e.height)&&void 0!==o?o:50,textColor:e.textColor,backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:null!==(a=e.borderWidth)&&void 0!==a?a:0,rotate:null!==(s=e.rotate)&&void 0!==s?s:f(0),hidden:e.hidden}),l=this.doc.context.register(h.dict)
this.acroField.addWidget(l)
var d=null!==(u=e.font)&&void 0!==u?u:this.doc.getForm().getDefaultFont()
this.updateWidgetAppearance(h,d),t.node.addAnnot(l)},e.prototype.needsAppearancesUpdate=function(){var t
if(this.isDirty())return!0
for(var e=this.acroField.getWidgets(),n=0,r=e.length;n<r;n++)if(!((null===(t=e[n].getAppearances())||void 0===t?void 0:t.normal)instanceof o.kO))return!0
return!1},e.prototype.defaultUpdateAppearances=function(t){(0,c.ku)(t,"font",[[Ze,"PDFFont"]]),this.updateAppearances(t)},e.prototype.updateAppearances=function(t,e){(0,c.ku)(t,"font",[[Ze,"PDFFont"]]),(0,c.MU)(e,"provider",[Function])
for(var n=this.acroField.getWidgets(),r=0,i=n.length;r<i;r++){var o=n[r]
this.updateWidgetAppearance(o,t,e)}this.markAsClean()},e.prototype.updateWidgetAppearance=function(t,e,n){var r=De((null!=n?n:ze)(this,t,e))
this.updateWidgetAppearanceWithFont(t,e,r)},e.of=function(t,n,r){return new e(t,n,r)},e}(Je),tn=function(t){function e(e,n,r){var i=t.call(this,e,n,r)||this
return(0,c.ku)(e,"acroListBox",[[o.Au,"PDFAcroListBox"]]),i.acroField=e,i}return(0,i.ZT)(e,t),e.prototype.getOptions=function(){for(var t=this.acroField.getOptions(),e=new Array(t.length),n=0,r=e.length;n<r;n++){var i=t[n],o=i.display,a=i.value
e[n]=(null!=o?o:a).decodeText()}return e},e.prototype.getSelected=function(){for(var t=this.acroField.getValues(),e=new Array(t.length),n=0,r=t.length;n<r;n++)e[n]=t[n].decodeText()
return e},e.prototype.setOptions=function(t){(0,c.ku)(t,"options",[Array]),this.markAsDirty()
for(var e=new Array(t.length),n=0,r=t.length;n<r;n++)e[n]={value:o.Ij.fromText(t[n])}
this.acroField.setOptions(e)},e.prototype.addOptions=function(t){(0,c.ku)(t,"options",["string",Array]),this.markAsDirty()
for(var e=Array.isArray(t)?t:[t],n=this.acroField.getOptions(),r=new Array(e.length),i=0,a=e.length;i<a;i++)r[i]={value:o.Ij.fromText(e[i])}
this.acroField.setOptions(n.concat(r))},e.prototype.select=function(t,e){void 0===e&&(e=!1),(0,c.ku)(t,"options",["string",Array]),(0,c.ku)(e,"merge",["boolean"])
var n=Array.isArray(t)?t:[t],r=this.getOptions();(0,c.k$)(n,"option",r),this.markAsDirty(),(n.length>1||1===n.length&&e)&&this.enableMultiselect()
for(var i=new Array(n.length),a=0,s=n.length;a<s;a++)i[a]=o.Ij.fromText(n[a])
if(e){var u=this.acroField.getValues()
this.acroField.setValues(u.concat(i))}else this.acroField.setValues(i)},e.prototype.clear=function(){this.markAsDirty(),this.acroField.setValues([])},e.prototype.setFontSize=function(t){(0,c.z7)(t,"fontSize"),this.acroField.setFontSize(t),this.markAsDirty()},e.prototype.isSorted=function(){return this.acroField.hasFlag(o.m0.Sort)},e.prototype.enableSorting=function(){this.acroField.setFlagTo(o.m0.Sort,!0)},e.prototype.disableSorting=function(){this.acroField.setFlagTo(o.m0.Sort,!1)},e.prototype.isMultiselect=function(){return this.acroField.hasFlag(o.m0.MultiSelect)},e.prototype.enableMultiselect=function(){this.acroField.setFlagTo(o.m0.MultiSelect,!0)},e.prototype.disableMultiselect=function(){this.acroField.setFlagTo(o.m0.MultiSelect,!1)},e.prototype.isSelectOnClick=function(){return this.acroField.hasFlag(o.m0.CommitOnSelChange)},e.prototype.enableSelectOnClick=function(){this.acroField.setFlagTo(o.m0.CommitOnSelChange,!0)},e.prototype.disableSelectOnClick=function(){this.acroField.setFlagTo(o.m0.CommitOnSelChange,!1)},e.prototype.addToPage=function(t,e){var n,r,i,o,a,s,u;(0,c.ku)(t,"page",[[xn,"PDFPage"]]),Xe(e),e||(e={}),"textColor"in e||(e.textColor=Pt(0,0,0)),"backgroundColor"in e||(e.backgroundColor=Pt(1,1,1)),"borderColor"in e||(e.borderColor=Pt(0,0,0)),"borderWidth"in e||(e.borderWidth=1)
var h=this.createWidget({x:null!==(n=e.x)&&void 0!==n?n:0,y:null!==(r=e.y)&&void 0!==r?r:0,width:null!==(i=e.width)&&void 0!==i?i:200,height:null!==(o=e.height)&&void 0!==o?o:100,textColor:e.textColor,backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:null!==(a=e.borderWidth)&&void 0!==a?a:0,rotate:null!==(s=e.rotate)&&void 0!==s?s:f(0),hidden:e.hidden}),l=this.doc.context.register(h.dict)
this.acroField.addWidget(l)
var d=null!==(u=e.font)&&void 0!==u?u:this.doc.getForm().getDefaultFont()
this.updateWidgetAppearance(h,d),t.node.addAnnot(l)},e.prototype.needsAppearancesUpdate=function(){var t
if(this.isDirty())return!0
for(var e=this.acroField.getWidgets(),n=0,r=e.length;n<r;n++)if(!((null===(t=e[n].getAppearances())||void 0===t?void 0:t.normal)instanceof o.kO))return!0
return!1},e.prototype.defaultUpdateAppearances=function(t){(0,c.ku)(t,"font",[[Ze,"PDFFont"]]),this.updateAppearances(t)},e.prototype.updateAppearances=function(t,e){(0,c.ku)(t,"font",[[Ze,"PDFFont"]]),(0,c.MU)(e,"provider",[Function])
for(var n=this.acroField.getWidgets(),r=0,i=n.length;r<i;r++){var o=n[r]
this.updateWidgetAppearance(o,t,e)}this.markAsClean()},e.prototype.updateWidgetAppearance=function(t,e,n){var r=De((null!=n?n:He)(this,t,e))
this.updateWidgetAppearanceWithFont(t,e,r)},e.of=function(t,n,r){return new e(t,n,r)},e}(Je),en=function(t){function e(e,n,r){var i=t.call(this,e,n,r)||this
return(0,c.ku)(e,"acroRadioButton",[[o.Ym,"PDFAcroRadioButton"]]),i.acroField=e,i}return(0,i.ZT)(e,t),e.prototype.getOptions=function(){var t=this.acroField.getExportValues()
if(t){for(var e=new Array(t.length),n=0,r=t.length;n<r;n++)e[n]=t[n].decodeText()
return e}var i=this.acroField.getOnValues(),o=new Array(i.length)
for(n=0,r=o.length;n<r;n++)o[n]=i[n].decodeText()
return o},e.prototype.getSelected=function(){var t=this.acroField.getValue()
if(t!==o.wQ.of("Off")){var e=this.acroField.getExportValues()
if(e)for(var n=this.acroField.getOnValues(),r=0,i=n.length;r<i;r++)if(n[r]===t)return e[r].decodeText()
return t.decodeText()}},e.prototype.select=function(t){(0,c.ku)(t,"option",["string"])
var e=this.getOptions();(0,c.DA)(t,"option",e),this.markAsDirty()
var n=this.acroField.getOnValues(),r=this.acroField.getExportValues()
if(r)for(var i=0,o=r.length;i<o;i++)r[i].decodeText()===t&&this.acroField.setValue(n[i])
else for(i=0,o=n.length;i<o;i++){var a=n[i]
a.decodeText()===t&&this.acroField.setValue(a)}},e.prototype.clear=function(){this.markAsDirty(),this.acroField.setValue(o.wQ.of("Off"))},e.prototype.isOffToggleable=function(){return!this.acroField.hasFlag(o.Ub.NoToggleToOff)},e.prototype.enableOffToggling=function(){this.acroField.setFlagTo(o.Ub.NoToggleToOff,!1)},e.prototype.disableOffToggling=function(){this.acroField.setFlagTo(o.Ub.NoToggleToOff,!0)},e.prototype.isMutuallyExclusive=function(){return!this.acroField.hasFlag(o.Ub.RadiosInUnison)},e.prototype.enableMutualExclusion=function(){this.acroField.setFlagTo(o.Ub.RadiosInUnison,!1)},e.prototype.disableMutualExclusion=function(){this.acroField.setFlagTo(o.Ub.RadiosInUnison,!0)},e.prototype.addOptionToPage=function(t,e,n){var r,i,a,s,u,h,l,d,p;(0,c.ku)(t,"option",["string"]),(0,c.ku)(e,"page",[[xn,"PDFPage"]]),Xe(n)
var g=this.createWidget({x:null!==(r=null==n?void 0:n.x)&&void 0!==r?r:0,y:null!==(i=null==n?void 0:n.y)&&void 0!==i?i:0,width:null!==(a=null==n?void 0:n.width)&&void 0!==a?a:50,height:null!==(s=null==n?void 0:n.height)&&void 0!==s?s:50,textColor:null!==(u=null==n?void 0:n.textColor)&&void 0!==u?u:Pt(0,0,0),backgroundColor:null!==(h=null==n?void 0:n.backgroundColor)&&void 0!==h?h:Pt(1,1,1),borderColor:null!==(l=null==n?void 0:n.borderColor)&&void 0!==l?l:Pt(0,0,0),borderWidth:null!==(d=null==n?void 0:n.borderWidth)&&void 0!==d?d:1,rotate:null!==(p=null==n?void 0:n.rotate)&&void 0!==p?p:f(0),hidden:null==n?void 0:n.hidden}),v=this.doc.context.register(g.dict),m=this.acroField.addWidgetWithOpt(v,o.Ij.fromText(t),!this.isMutuallyExclusive())
g.setAppearanceState(o.wQ.of("Off")),this.updateWidgetAppearance(g,m),e.node.addAnnot(v)},e.prototype.needsAppearancesUpdate=function(){for(var t,e=this.acroField.getWidgets(),n=0,r=e.length;n<r;n++){var i=e[n],a=i.getAppearanceState(),s=null===(t=i.getAppearances())||void 0===t?void 0:t.normal
if(!(s instanceof o.mh))return!0
if(a&&!s.has(a))return!0}return!1},e.prototype.defaultUpdateAppearances=function(){this.updateAppearances()},e.prototype.updateAppearances=function(t){(0,c.MU)(t,"provider",[Function])
for(var e=this.acroField.getWidgets(),n=0,r=e.length;n<r;n++){var i=e[n],o=i.getOnValue()
o&&this.updateWidgetAppearance(i,o,t)}},e.prototype.updateWidgetAppearance=function(t,e,n){var r=De((null!=n?n:Ue)(this,t))
this.updateOnOffWidgetAppearance(t,e,r)},e.of=function(t,n,r){return new e(t,n,r)},e}(Je),nn=function(t){function e(e,n,r){var i=t.call(this,e,n,r)||this
return(0,c.ku)(e,"acroSignature",[[o.uQ,"PDFAcroSignature"]]),i.acroField=e,i}return(0,i.ZT)(e,t),e.prototype.needsAppearancesUpdate=function(){return!1},e.of=function(t,n,r){return new e(t,n,r)},e}(Je),rn=function(t){function e(e,n,r){var i=t.call(this,e,n,r)||this
return(0,c.ku)(e,"acroText",[[o._X,"PDFAcroText"]]),i.acroField=e,i}return(0,i.ZT)(e,t),e.prototype.getText=function(){var t=this.acroField.getValue()
if(!t&&this.isRichFormatted())throw new Se(this.getName())
return null==t?void 0:t.decodeText()},e.prototype.setText=function(t){(0,c.MU)(t,"text",["string"])
var e=this.getMaxLength()
if(void 0!==e&&t&&t.length>e)throw new Te(t.length,e,this.getName())
this.markAsDirty(),this.disableRichFormatting(),t?this.acroField.setValue(o.Ij.fromText(t)):this.acroField.removeValue()},e.prototype.getAlignment=function(){var t=this.acroField.getQuadding()
return 0===t?kt.Left:1===t?kt.Center:2===t?kt.Right:kt.Left},e.prototype.setAlignment=function(t){(0,c.DA)(t,"alignment",kt),this.markAsDirty(),this.acroField.setQuadding(t)},e.prototype.getMaxLength=function(){return this.acroField.getMaxLength()},e.prototype.setMaxLength=function(t){if((0,c.zo)(t,"maxLength",0,Number.MAX_SAFE_INTEGER),this.markAsDirty(),void 0===t)this.acroField.removeMaxLength()
else{var e=this.getText()
if(e&&e.length>t)throw new Ee(e.length,t,this.getName())
this.acroField.setMaxLength(t)}},e.prototype.removeMaxLength=function(){this.markAsDirty(),this.acroField.removeMaxLength()},e.prototype.setImage=function(t){for(var e=this.getAlignment(),n=e===kt.Center?ke.Center:e===kt.Right?ke.Right:ke.Left,r=this.acroField.getWidgets(),i=0,o=r.length;i<o;i++){var a=r[i],s=this.createImageAppearanceStream(a,t,n)
this.updateWidgetAppearances(a,{normal:s})}this.markAsClean()},e.prototype.setFontSize=function(t){(0,c.z7)(t,"fontSize"),this.acroField.setFontSize(t),this.markAsDirty()},e.prototype.isMultiline=function(){return this.acroField.hasFlag(o.oD.Multiline)},e.prototype.enableMultiline=function(){this.markAsDirty(),this.acroField.setFlagTo(o.oD.Multiline,!0)},e.prototype.disableMultiline=function(){this.markAsDirty(),this.acroField.setFlagTo(o.oD.Multiline,!1)},e.prototype.isPassword=function(){return this.acroField.hasFlag(o.oD.Password)},e.prototype.enablePassword=function(){this.acroField.setFlagTo(o.oD.Password,!0)},e.prototype.disablePassword=function(){this.acroField.setFlagTo(o.oD.Password,!1)},e.prototype.isFileSelector=function(){return this.acroField.hasFlag(o.oD.FileSelect)},e.prototype.enableFileSelection=function(){this.acroField.setFlagTo(o.oD.FileSelect,!0)},e.prototype.disableFileSelection=function(){this.acroField.setFlagTo(o.oD.FileSelect,!1)},e.prototype.isSpellChecked=function(){return!this.acroField.hasFlag(o.oD.DoNotSpellCheck)},e.prototype.enableSpellChecking=function(){this.acroField.setFlagTo(o.oD.DoNotSpellCheck,!1)},e.prototype.disableSpellChecking=function(){this.acroField.setFlagTo(o.oD.DoNotSpellCheck,!0)},e.prototype.isScrollable=function(){return!this.acroField.hasFlag(o.oD.DoNotScroll)},e.prototype.enableScrolling=function(){this.acroField.setFlagTo(o.oD.DoNotScroll,!1)},e.prototype.disableScrolling=function(){this.acroField.setFlagTo(o.oD.DoNotScroll,!0)},e.prototype.isCombed=function(){return this.acroField.hasFlag(o.oD.Comb)&&!this.isMultiline()&&!this.isPassword()&&!this.isFileSelector()&&void 0!==this.getMaxLength()},e.prototype.enableCombing=function(){void 0===this.getMaxLength()&&console.warn("PDFTextFields must have a max length in order to be combed"),this.markAsDirty(),this.disableMultiline(),this.disablePassword(),this.disableFileSelection(),this.acroField.setFlagTo(o.oD.Comb,!0)},e.prototype.disableCombing=function(){this.markAsDirty(),this.acroField.setFlagTo(o.oD.Comb,!1)},e.prototype.isRichFormatted=function(){return this.acroField.hasFlag(o.oD.RichText)},e.prototype.enableRichFormatting=function(){this.acroField.setFlagTo(o.oD.RichText,!0)},e.prototype.disableRichFormatting=function(){this.acroField.setFlagTo(o.oD.RichText,!1)},e.prototype.addToPage=function(t,e){var n,r,i,o,a,s,u;(0,c.ku)(t,"page",[[xn,"PDFPage"]]),Xe(e),e||(e={}),"textColor"in e||(e.textColor=Pt(0,0,0)),"backgroundColor"in e||(e.backgroundColor=Pt(1,1,1)),"borderColor"in e||(e.borderColor=Pt(0,0,0)),"borderWidth"in e||(e.borderWidth=1)
var h=this.createWidget({x:null!==(n=e.x)&&void 0!==n?n:0,y:null!==(r=e.y)&&void 0!==r?r:0,width:null!==(i=e.width)&&void 0!==i?i:200,height:null!==(o=e.height)&&void 0!==o?o:50,textColor:e.textColor,backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:null!==(a=e.borderWidth)&&void 0!==a?a:0,rotate:null!==(s=e.rotate)&&void 0!==s?s:f(0),hidden:e.hidden}),l=this.doc.context.register(h.dict)
this.acroField.addWidget(l)
var d=null!==(u=e.font)&&void 0!==u?u:this.doc.getForm().getDefaultFont()
this.updateWidgetAppearance(h,d),t.node.addAnnot(l)},e.prototype.needsAppearancesUpdate=function(){var t
if(this.isDirty())return!0
for(var e=this.acroField.getWidgets(),n=0,r=e.length;n<r;n++)if(!((null===(t=e[n].getAppearances())||void 0===t?void 0:t.normal)instanceof o.kO))return!0
return!1},e.prototype.defaultUpdateAppearances=function(t){(0,c.ku)(t,"font",[[Ze,"PDFFont"]]),this.updateAppearances(t)},e.prototype.updateAppearances=function(t,e){(0,c.ku)(t,"font",[[Ze,"PDFFont"]]),(0,c.MU)(e,"provider",[Function])
for(var n=this.acroField.getWidgets(),r=0,i=n.length;r<i;r++){var o=n[r]
this.updateWidgetAppearance(o,t,e)}this.markAsClean()},e.prototype.updateWidgetAppearance=function(t,e,n){var r=De((null!=n?n:Ge)(this,t,e))
this.updateWidgetAppearanceWithFont(t,e,r)},e.of=function(t,n,r){return new e(t,n,r)},e}(Je)
!function(t){t.Courier="Courier",t.CourierBold="Courier-Bold",t.CourierOblique="Courier-Oblique",t.CourierBoldOblique="Courier-BoldOblique",t.Helvetica="Helvetica",t.HelveticaBold="Helvetica-Bold",t.HelveticaOblique="Helvetica-Oblique",t.HelveticaBoldOblique="Helvetica-BoldOblique",t.TimesRoman="Times-Roman",t.TimesRomanBold="Times-Bold",t.TimesRomanItalic="Times-Italic",t.TimesRomanBoldItalic="Times-BoldItalic",t.Symbol="Symbol",t.ZapfDingbats="ZapfDingbats"}(Ke||(Ke={}))
var on,an=function(){function t(t,e){var n=this
this.embedDefaultFont=function(){return n.doc.embedStandardFont(Ke.Helvetica)},(0,c.ku)(t,"acroForm",[[o.PS,"PDFAcroForm"]]),(0,c.ku)(e,"doc",[[yn,"PDFDocument"]]),this.acroForm=t,this.doc=e,this.dirtyFields=new Set,this.defaultFontCache=c.Ct.populatedBy(this.embedDefaultFont)}return t.prototype.hasXFA=function(){return this.acroForm.dict.has(o.wQ.of("XFA"))},t.prototype.deleteXFA=function(){this.acroForm.dict.delete(o.wQ.of("XFA"))},t.prototype.getFields=function(){for(var t=this.acroForm.getAllFields(),e=[],n=0,r=t.length;n<r;n++){var i=t[n],o=i[0],a=i[1],s=un(o,a,this.doc)
s&&e.push(s)}return e},t.prototype.getFieldMaybe=function(t){(0,c.ku)(t,"name",["string"])
for(var e=this.getFields(),n=0,r=e.length;n<r;n++){var i=e[n]
if(i.getName()===t)return i}},t.prototype.getField=function(t){(0,c.ku)(t,"name",["string"])
var e=this.getFieldMaybe(t)
if(e)return e
throw new ve(t)},t.prototype.getButton=function(t){(0,c.ku)(t,"name",["string"])
var e=this.getField(t)
if(e instanceof Sn)return e
throw new me(t,Sn,e)},t.prototype.getCheckBox=function(t){(0,c.ku)(t,"name",["string"])
var e=this.getField(t)
if(e instanceof Qe)return e
throw new me(t,Qe,e)},t.prototype.getDropdown=function(t){(0,c.ku)(t,"name",["string"])
var e=this.getField(t)
if(e instanceof $e)return e
throw new me(t,$e,e)},t.prototype.getOptionList=function(t){(0,c.ku)(t,"name",["string"])
var e=this.getField(t)
if(e instanceof tn)return e
throw new me(t,tn,e)},t.prototype.getRadioGroup=function(t){(0,c.ku)(t,"name",["string"])
var e=this.getField(t)
if(e instanceof en)return e
throw new me(t,en,e)},t.prototype.getSignature=function(t){(0,c.ku)(t,"name",["string"])
var e=this.getField(t)
if(e instanceof nn)return e
throw new me(t,nn,e)},t.prototype.getTextField=function(t){(0,c.ku)(t,"name",["string"])
var e=this.getField(t)
if(e instanceof rn)return e
throw new me(t,rn,e)},t.prototype.createButton=function(t){(0,c.ku)(t,"name",["string"])
var e=cn(t),n=this.findOrCreateNonTerminals(e.nonTerminal),r=o._.create(this.doc.context)
return r.setPartialName(e.terminal),hn(n,[r,r.ref],e.terminal),Sn.of(r,r.ref,this.doc)},t.prototype.createCheckBox=function(t){(0,c.ku)(t,"name",["string"])
var e=cn(t),n=this.findOrCreateNonTerminals(e.nonTerminal),r=o.Ei.create(this.doc.context)
return r.setPartialName(e.terminal),hn(n,[r,r.ref],e.terminal),Qe.of(r,r.ref,this.doc)},t.prototype.createDropdown=function(t){(0,c.ku)(t,"name",["string"])
var e=cn(t),n=this.findOrCreateNonTerminals(e.nonTerminal),r=o.sS.create(this.doc.context)
return r.setPartialName(e.terminal),hn(n,[r,r.ref],e.terminal),$e.of(r,r.ref,this.doc)},t.prototype.createOptionList=function(t){(0,c.ku)(t,"name",["string"])
var e=cn(t),n=this.findOrCreateNonTerminals(e.nonTerminal),r=o.Au.create(this.doc.context)
return r.setPartialName(e.terminal),hn(n,[r,r.ref],e.terminal),tn.of(r,r.ref,this.doc)},t.prototype.createRadioGroup=function(t){(0,c.ku)(t,"name",["string"])
var e=cn(t),n=this.findOrCreateNonTerminals(e.nonTerminal),r=o.Ym.create(this.doc.context)
return r.setPartialName(e.terminal),hn(n,[r,r.ref],e.terminal),en.of(r,r.ref,this.doc)},t.prototype.createTextField=function(t){(0,c.ku)(t,"name",["string"])
var e=cn(t),n=this.findOrCreateNonTerminals(e.nonTerminal),r=o._X.create(this.doc.context)
return r.setPartialName(e.terminal),hn(n,[r,r.ref],e.terminal),rn.of(r,r.ref,this.doc)},t.prototype.flatten=function(t){void 0===t&&(t={updateFieldAppearances:!0}),t.updateFieldAppearances&&this.updateFieldAppearances()
for(var e=this.getFields(),n=0,r=e.length;n<r;n++){for(var a=e[n],s=a.acroField.getWidgets(),u=0,h=s.length;u<h;u++){var l=s[u],f=this.findWidgetPage(l),d=this.findWidgetAppearanceRef(a,l),p=(0,c.si)("FlatWidget",10)
f.node.setXObject(o.wQ.of(p),d)
var g=l.getRectangle(),v=(0,i.pr)([G(),P(g.x,g.y)],oe((0,i.pi)((0,i.pi)({},g),{rotation:0})),[mt(p),z()]).filter(Boolean)
f.pushOperators.apply(f,v)}this.removeField(a)}},t.prototype.removeField=function(t){for(var e=t.acroField.getWidgets(),n=new Set,r=0,i=e.length;r<i;r++){var o=e[r],a=this.findWidgetAppearanceRef(t,o),s=this.findWidgetPage(o)
n.add(s),s.node.removeAnnot(a)}n.forEach((function(e){return e.node.removeAnnot(t.ref)})),this.acroForm.removeField(t.acroField),this.doc.context.delete(t.ref)},t.prototype.updateFieldAppearances=function(t){(0,c.MU)(t,"font",[[Ze,"PDFFont"]]),t=null!=t?t:this.getDefaultFont()
for(var e=this.getFields(),n=0,r=e.length;n<r;n++){var i=e[n]
i.needsAppearancesUpdate()&&i.defaultUpdateAppearances(t)}},t.prototype.markFieldAsDirty=function(t){(0,c.MU)(t,"fieldRef",[[o.$F,"PDFRef"]]),this.dirtyFields.add(t)},t.prototype.markFieldAsClean=function(t){(0,c.MU)(t,"fieldRef",[[o.$F,"PDFRef"]]),this.dirtyFields.delete(t)},t.prototype.fieldIsDirty=function(t){return(0,c.MU)(t,"fieldRef",[[o.$F,"PDFRef"]]),this.dirtyFields.has(t)},t.prototype.getDefaultFont=function(){return this.defaultFontCache.access()},t.prototype.findWidgetPage=function(t){var e=t.P(),n=this.doc.getPages().find((function(t){return t.ref===e}))
if(void 0===n){var r=this.doc.context.getObjectRef(t.dict)
if(void 0===r)throw new Error("Could not find PDFRef for PDFObject")
if(void 0===(n=this.doc.findPageForAnnotationRef(r)))throw new Error("Could not find page for PDFRef "+r)}return n},t.prototype.findWidgetAppearanceRef=function(t,e){var n,r=e.getNormalAppearance()
if(r instanceof o.mh&&(t instanceof Qe||t instanceof en)){var i=t.acroField.getValue(),a=null!==(n=r.get(i))&&void 0!==n?n:r.get(o.wQ.of("Off"))
a instanceof o.$F&&(r=a)}if(!(r instanceof o.$F)){var s=t.getName()
throw new Error("Failed to extract appearance ref for: "+s)}return r},t.prototype.findOrCreateNonTerminals=function(t){for(var e=[this.acroForm],n=0,r=t.length;n<r;n++){var i=t[n]
if(!i)throw new we(i)
var a=e[0],s=e[1],u=this.findNonTerminal(i,a)
if(u)e=u
else{var c=o.qg.create(this.doc.context)
c.setPartialName(i),c.setParent(s)
var h=this.doc.context.register(c.dict)
a.addField(h),e=[c,h]}}return e},t.prototype.findNonTerminal=function(t,e){for(var n=e instanceof o.PS?this.acroForm.getFields():(0,o.P_)(e.Kids()),r=0,i=n.length;r<i;r++){var a=n[r],s=a[0],u=a[1]
if(s.getPartialName()===t){if(s instanceof o.qg)return[s,u]
throw new be(t)}}},t.of=function(e,n){return new t(e,n)},t}(),sn=an,un=function(t,e,n){return t instanceof o._?Sn.of(t,e,n):t instanceof o.Ei?Qe.of(t,e,n):t instanceof o.sS?$e.of(t,e,n):t instanceof o.Au?tn.of(t,e,n):t instanceof o._X?rn.of(t,e,n):t instanceof o.Ym?en.of(t,e,n):t instanceof o.uQ?nn.of(t,e,n):void 0},cn=function(t){if(0===t.length)throw new Error("PDF field names must not be empty strings")
for(var e=t.split("."),n=0,r=e.length;n<r;n++)if(""===e[n])throw new Error('Periods in PDF field names must be separated by at least one character: "'+t+'"')
return 1===e.length?{nonTerminal:[],terminal:e[0]}:{nonTerminal:e.slice(0,e.length-1),terminal:e[e.length-1]}},hn=function(t,e,n){for(var r=t[0],i=t[1],a=e[0],s=e[1],u=r.normalizedEntries(),c=((0,o.P_)("Kids"in u?u.Kids:u.Fields)),h=0,l=c.length;h<l;h++)if(c[h][0].getPartialName()===n)throw new be(n)
r.addField(s),a.setParent(i)},ln={"4A0":[4767.87,6740.79],"2A0":[3370.39,4767.87],A0:[2383.94,3370.39],A1:[1683.78,2383.94],A2:[1190.55,1683.78],A3:[841.89,1190.55],A4:[595.28,841.89],A5:[419.53,595.28],A6:[297.64,419.53],A7:[209.76,297.64],A8:[147.4,209.76],A9:[104.88,147.4],A10:[73.7,104.88],B0:[2834.65,4008.19],B1:[2004.09,2834.65],B2:[1417.32,2004.09],B3:[1000.63,1417.32],B4:[708.66,1000.63],B5:[498.9,708.66],B6:[354.33,498.9],B7:[249.45,354.33],B8:[175.75,249.45],B9:[124.72,175.75],B10:[87.87,124.72],C0:[2599.37,3676.54],C1:[1836.85,2599.37],C2:[1298.27,1836.85],C3:[918.43,1298.27],C4:[649.13,918.43],C5:[459.21,649.13],C6:[323.15,459.21],C7:[229.61,323.15],C8:[161.57,229.61],C9:[113.39,161.57],C10:[79.37,113.39],RA0:[2437.8,3458.27],RA1:[1729.13,2437.8],RA2:[1218.9,1729.13],RA3:[864.57,1218.9],RA4:[609.45,864.57],SRA0:[2551.18,3628.35],SRA1:[1814.17,2551.18],SRA2:[1275.59,1814.17],SRA3:[907.09,1275.59],SRA4:[637.8,907.09],Executive:[521.86,756],Folio:[612,936],Legal:[612,1008],Letter:[612,792],Tabloid:[792,1224]}
!function(t){t[t.Fastest=1/0]="Fastest",t[t.Fast=1500]="Fast",t[t.Medium=500]="Medium",t[t.Slow=100]="Slow"}(on||(on={}))
var fn,dn=n(3107),pn=function(){function t(t,e,n){this.alreadyEmbedded=!1,this.ref=t,this.doc=e,this.embedder=n}return t.prototype.embed=function(){return(0,i.mG)(this,void 0,void 0,(function(){var t,e,n,r
return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return this.alreadyEmbedded?[3,2]:[4,this.embedder.embedIntoContext(this.doc.context,this.ref)]
case 1:t=i.sent(),this.doc.catalog.has(o.wQ.of("Names"))||this.doc.catalog.set(o.wQ.of("Names"),this.doc.context.obj({})),(e=this.doc.catalog.lookup(o.wQ.of("Names"),o.mh)).has(o.wQ.of("EmbeddedFiles"))||e.set(o.wQ.of("EmbeddedFiles"),this.doc.context.obj({})),(n=e.lookup(o.wQ.of("EmbeddedFiles"),o.mh)).has(o.wQ.of("Names"))||n.set(o.wQ.of("Names"),this.doc.context.obj([])),(r=n.lookup(o.wQ.of("Names"),o.Gr)).push(o.Ij.fromText(this.embedder.fileName)),r.push(t),this.doc.catalog.has(o.wQ.of("AF"))||this.doc.catalog.set(o.wQ.of("AF"),this.doc.context.obj([])),this.doc.catalog.lookup(o.wQ.of("AF"),o.Gr).push(t),this.alreadyEmbedded=!0,i.label=2
case 2:return[2]}}))}))},t.of=function(e,n,r){return new t(e,n,r)},t}(),gn=function(){function t(t,e,n){this.alreadyEmbedded=!1,this.ref=t,this.doc=e,this.embedder=n}return t.prototype.embed=function(){return(0,i.mG)(this,void 0,void 0,(function(){var t,e,n,r,a,s,u
return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return this.alreadyEmbedded?[3,2]:(t=this.doc,e=t.catalog,n=t.context,[4,this.embedder.embedIntoContext(this.doc.context,this.ref)])
case 1:r=i.sent(),e.has(o.wQ.of("Names"))||e.set(o.wQ.of("Names"),n.obj({})),(a=e.lookup(o.wQ.of("Names"),o.mh)).has(o.wQ.of("JavaScript"))||a.set(o.wQ.of("JavaScript"),n.obj({})),(s=a.lookup(o.wQ.of("JavaScript"),o.mh)).has(o.wQ.of("Names"))||s.set(o.wQ.of("Names"),n.obj([])),(u=s.lookup(o.wQ.of("Names"),o.Gr)).push(o.Ij.fromText(this.embedder.scriptName)),u.push(r),this.alreadyEmbedded=!0,i.label=2
case 2:return[2]}}))}))},t.of=function(e,n,r){return new t(e,n,r)},t}(),vn=n(6887),mn=function(){function t(t,e){this.script=t,this.scriptName=e}return t.for=function(e,n){return new t(e,n)},t.prototype.embedIntoContext=function(t,e){return(0,i.mG)(this,void 0,void 0,(function(){var n
return(0,i.Jh)(this,(function(r){return n=t.obj({Type:"Action",S:"JavaScript",JS:vn.Z.fromText(this.script)}),e?(t.assign(e,n),[2,e]):[2,t.register(n)]}))}))},t}(),yn=function(){function t(t,e,n){var r=this
if(this.defaultWordBreaks=[" "],this.computePages=function(){var t=[]
return r.catalog.Pages().traverse((function(e,n){if(e instanceof o.Eg){var i=r.pageMap.get(e)
i||(i=xn.of(e,n,r),r.pageMap.set(e,i)),t.push(i)}})),t},this.getOrCreateForm=function(){var t=r.catalog.getOrCreateAcroForm()
return sn.of(t,r)},(0,c.ku)(t,"context",[[o.o6,"PDFContext"]]),(0,c.ku)(e,"ignoreEncryption",["boolean"]),this.context=t,this.catalog=t.lookup(t.trailerInfo.Root),this.isEncrypted=!!t.lookup(t.trailerInfo.Encrypt),this.pageCache=c.Ct.populatedBy(this.computePages),this.pageMap=new Map,this.formCache=c.Ct.populatedBy(this.getOrCreateForm),this.fonts=[],this.images=[],this.embeddedPages=[],this.embeddedFiles=[],this.javaScripts=[],!e&&this.isEncrypted)throw new fe
n&&this.updateInfoDict()}return t.load=function(e,n){return void 0===n&&(n={}),(0,i.mG)(this,void 0,void 0,(function(){var r,a,s,u,h,l,f,d,p,g,v
return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return r=n.ignoreEncryption,a=void 0!==r&&r,s=n.parseSpeed,u=void 0===s?on.Slow:s,h=n.throwOnInvalidObject,l=void 0!==h&&h,f=n.updateMetadata,d=void 0===f||f,p=n.capNumbers,g=void 0!==p&&p,(0,c.ku)(e,"pdf",["string",Uint8Array,ArrayBuffer]),(0,c.ku)(a,"ignoreEncryption",["boolean"]),(0,c.ku)(u,"parseSpeed",["number"]),(0,c.ku)(l,"throwOnInvalidObject",["boolean"]),v=(0,c._f)(e),[4,o.h9.forBytesWithOptions(v,u,l,g).parseDocument()]
case 1:return[2,new t(i.sent(),a,d)]}}))}))},t.create=function(e){return void 0===e&&(e={}),(0,i.mG)(this,void 0,void 0,(function(){var n,r,a,s,u,c
return(0,i.Jh)(this,(function(i){return n=e.updateMetadata,r=void 0===n||n,a=o.o6.create(),s=o.N8.withContext(a),u=a.register(s),c=o.lR.withContextAndPages(a,u),a.trailerInfo.Root=a.register(c),[2,new t(a,!1,r)]}))}))},t.prototype.registerFontkit=function(t){this.fontkit=t},t.prototype.getForm=function(){var t=this.formCache.access()
return t.hasXFA()&&(console.warn("Removing XFA form data as pdf-lib does not support reading or writing XFA"),t.deleteXFA()),t},t.prototype.getTitle=function(){var t=this.getInfoDict().lookup(o.wQ.Title)
if(t)return bn(t),t.decodeText()},t.prototype.getAuthor=function(){var t=this.getInfoDict().lookup(o.wQ.Author)
if(t)return bn(t),t.decodeText()},t.prototype.getSubject=function(){var t=this.getInfoDict().lookup(o.wQ.Subject)
if(t)return bn(t),t.decodeText()},t.prototype.getKeywords=function(){var t=this.getInfoDict().lookup(o.wQ.Keywords)
if(t)return bn(t),t.decodeText()},t.prototype.getCreator=function(){var t=this.getInfoDict().lookup(o.wQ.Creator)
if(t)return bn(t),t.decodeText()},t.prototype.getProducer=function(){var t=this.getInfoDict().lookup(o.wQ.Producer)
if(t)return bn(t),t.decodeText()},t.prototype.getCreationDate=function(){var t=this.getInfoDict().lookup(o.wQ.CreationDate)
if(t)return bn(t),t.decodeDate()},t.prototype.getModificationDate=function(){var t=this.getInfoDict().lookup(o.wQ.ModDate)
if(t)return bn(t),t.decodeDate()},t.prototype.setTitle=function(t,e){(0,c.ku)(t,"title",["string"])
var n=o.wQ.of("Title")
this.getInfoDict().set(n,o.Ij.fromText(t)),(null==e?void 0:e.showInWindowTitleBar)&&this.catalog.getOrCreateViewerPreferences().setDisplayDocTitle(!0)},t.prototype.setAuthor=function(t){(0,c.ku)(t,"author",["string"])
var e=o.wQ.of("Author")
this.getInfoDict().set(e,o.Ij.fromText(t))},t.prototype.setSubject=function(t){(0,c.ku)(t,"author",["string"])
var e=o.wQ.of("Subject")
this.getInfoDict().set(e,o.Ij.fromText(t))},t.prototype.setKeywords=function(t){(0,c.ku)(t,"keywords",[Array])
var e=o.wQ.of("Keywords")
this.getInfoDict().set(e,o.Ij.fromText(t.join(" ")))},t.prototype.setCreator=function(t){(0,c.ku)(t,"creator",["string"])
var e=o.wQ.of("Creator")
this.getInfoDict().set(e,o.Ij.fromText(t))},t.prototype.setProducer=function(t){(0,c.ku)(t,"creator",["string"])
var e=o.wQ.of("Producer")
this.getInfoDict().set(e,o.Ij.fromText(t))},t.prototype.setLanguage=function(t){(0,c.ku)(t,"language",["string"])
var e=o.wQ.of("Lang")
this.catalog.set(e,o.u2.of(t))},t.prototype.setCreationDate=function(t){(0,c.ku)(t,"creationDate",[[Date,"Date"]])
var e=o.wQ.of("CreationDate")
this.getInfoDict().set(e,o.u2.fromDate(t))},t.prototype.setModificationDate=function(t){(0,c.ku)(t,"modificationDate",[[Date,"Date"]])
var e=o.wQ.of("ModDate")
this.getInfoDict().set(e,o.u2.fromDate(t))},t.prototype.getPageCount=function(){return void 0===this.pageCount&&(this.pageCount=this.getPages().length),this.pageCount},t.prototype.getPages=function(){return this.pageCache.access()},t.prototype.getPage=function(t){var e=this.getPages()
return(0,c.gI)(t,"index",0,e.length-1),e[t]},t.prototype.getPageIndices=function(){return(0,c.w6)(0,this.getPageCount())},t.prototype.removePage=function(t){var e=this.getPageCount()
if(0===this.pageCount)throw new ge;(0,c.gI)(t,"index",0,e-1),this.catalog.removeLeafNode(t),this.pageCount=e-1},t.prototype.addPage=function(t){return(0,c.ku)(t,"page",["undefined",[xn,"PDFPage"],Array]),this.insertPage(this.getPageCount(),t)},t.prototype.insertPage=function(t,e){var n=this.getPageCount()
if((0,c.gI)(t,"index",0,n),(0,c.ku)(e,"page",["undefined",[xn,"PDFPage"],Array]),!e||Array.isArray(e)){var r=Array.isArray(e)?e:ln.A4;(e=xn.create(this)).setSize.apply(e,r)}else if(e.doc!==this)throw new pe
var i=this.catalog.insertLeafNode(e.ref,t)
return e.node.setParent(i),this.pageMap.set(e.node,e),this.pageCache.invalidate(),this.pageCount=n+1,e},t.prototype.copyPages=function(e,n){return(0,i.mG)(this,void 0,void 0,(function(){var r,a,s,u,h,l,f,d
return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return(0,c.ku)(e,"srcDoc",[[t,"PDFDocument"]]),(0,c.ku)(n,"indices",[Array]),[4,e.flush()]
case 1:for(i.sent(),r=o.Wy.for(e.context,this.context),a=e.getPages(),s=new Array(n.length),u=0,h=n.length;u<h;u++)l=a[n[u]],f=r.copy(l.node),d=this.context.register(f),s[u]=xn.of(f,d,this)
return[2,s]}}))}))},t.prototype.addJavaScript=function(t,e){(0,c.ku)(t,"name",["string"]),(0,c.ku)(e,"script",["string"])
var n=mn.for(e,t),r=this.context.nextRef(),i=gn.of(r,this,n)
this.javaScripts.push(i)},t.prototype.attach=function(t,e,n){return void 0===n&&(n={}),(0,i.mG)(this,void 0,void 0,(function(){var r,o,a,s
return(0,i.Jh)(this,(function(i){return(0,c.ku)(t,"attachment",["string",Uint8Array,ArrayBuffer]),(0,c.ku)(e,"name",["string"]),(0,c.MU)(n.mimeType,"mimeType",["string"]),(0,c.MU)(n.description,"description",["string"]),(0,c.MU)(n.creationDate,"options.creationDate",[Date]),(0,c.MU)(n.modificationDate,"options.modificationDate",[Date]),(0,c.GT)(n.afRelationship,"options.afRelationship",dn.J),r=(0,c._f)(t),o=dn.Z.for(r,e,n),a=this.context.nextRef(),s=pn.of(a,this,o),this.embeddedFiles.push(s),[2]}))}))},t.prototype.embedFont=function(t,e){return void 0===e&&(e={}),(0,i.mG)(this,void 0,void 0,(function(){var n,r,a,s,u,h,l,f,d,p
return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return n=e.subset,r=void 0!==n&&n,a=e.customName,s=e.features,(0,c.ku)(t,"font",["string",Uint8Array,ArrayBuffer]),(0,c.ku)(r,"subset",["boolean"]),(0,c.Cl)(t)?(u=o.IL.for(t,a),[3,7]):[3,1]
case 1:return(0,c.TE)(t)?(h=(0,c._f)(t),l=this.assertFontkit(),r?[4,o.zO.for(l,h,a,s)]:[3,3]):[3,6]
case 2:return f=i.sent(),[3,5]
case 3:return[4,o.Wz.for(l,h,a,s)]
case 4:f=i.sent(),i.label=5
case 5:return u=f,[3,7]
case 6:throw new TypeError("`font` must be one of `StandardFonts | string | Uint8Array | ArrayBuffer`")
case 7:return d=this.context.nextRef(),p=Ze.of(d,this,u),this.fonts.push(p),[2,p]}}))}))},t.prototype.embedStandardFont=function(t,e){if((0,c.ku)(t,"font",["string"]),!(0,c.Cl)(t))throw new TypeError("`font` must be one of type `StandardFonts`")
var n=o.IL.for(t,e),r=this.context.nextRef(),i=Ze.of(r,this,n)
return this.fonts.push(i),i},t.prototype.embedJpg=function(t){return(0,i.mG)(this,void 0,void 0,(function(){var e,n,r,a
return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return(0,c.ku)(t,"jpg",["string",Uint8Array,ArrayBuffer]),e=(0,c._f)(t),[4,o.sm.for(e)]
case 1:return n=i.sent(),r=this.context.nextRef(),a=qe.of(r,this,n),this.images.push(a),[2,a]}}))}))},t.prototype.embedPng=function(t){return(0,i.mG)(this,void 0,void 0,(function(){var e,n,r,a
return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return(0,c.ku)(t,"png",["string",Uint8Array,ArrayBuffer]),e=(0,c._f)(t),[4,o.Le.for(e)]
case 1:return n=i.sent(),r=this.context.nextRef(),a=qe.of(r,this,n),this.images.push(a),[2,a]}}))}))},t.prototype.embedPdf=function(e,n){return void 0===n&&(n=[0]),(0,i.mG)(this,void 0,void 0,(function(){var r,o,a
return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return(0,c.ku)(e,"pdf",["string",Uint8Array,ArrayBuffer,[t,"PDFDocument"]]),(0,c.ku)(n,"indices",[Array]),e instanceof t?(o=e,[3,3]):[3,1]
case 1:return[4,t.load(e)]
case 2:o=i.sent(),i.label=3
case 3:return r=o,a=(0,c.Jp)(r.getPages(),n),[2,this.embedPages(a)]}}))}))},t.prototype.embedPage=function(t,e,n){return(0,i.mG)(this,void 0,void 0,(function(){return(0,i.Jh)(this,(function(r){switch(r.label){case 0:return(0,c.ku)(t,"page",[[xn,"PDFPage"]]),[4,this.embedPages([t],[e],[n])]
case 1:return[2,r.sent()[0]]}}))}))},t.prototype.embedPages=function(t,e,n){return void 0===e&&(e=[]),void 0===n&&(n=[]),(0,i.mG)(this,void 0,void 0,(function(){var r,a,s,u,c,h,l,f,d,p,g,v,m
return(0,i.Jh)(this,(function(i){switch(i.label){case 0:if(0===t.length)return[2,[]]
for(h=0,l=t.length-1;h<l;h++)if(r=t[h],a=t[h+1],r.node.context!==a.node.context)throw new o.qX
s=t[0].node.context,u=s===this.context?function(t){return t}:o.Wy.for(s,this.context).copy,c=new Array(t.length),h=0,l=t.length,i.label=1
case 1:return h<l?(f=u(t[h].node),d=e[h],p=n[h],[4,o.dS.for(f,d,p)]):[3,4]
case 2:g=i.sent(),v=this.context.nextRef(),c[h]=Ve.of(v,this,g),i.label=3
case 3:return h++,[3,1]
case 4:return(m=this.embeddedPages).push.apply(m,c),[2,c]}}))}))},t.prototype.flush=function(){return(0,i.mG)(this,void 0,void 0,(function(){return(0,i.Jh)(this,(function(t){switch(t.label){case 0:return[4,this.embedAll(this.fonts)]
case 1:return t.sent(),[4,this.embedAll(this.images)]
case 2:return t.sent(),[4,this.embedAll(this.embeddedPages)]
case 3:return t.sent(),[4,this.embedAll(this.embeddedFiles)]
case 4:return t.sent(),[4,this.embedAll(this.javaScripts)]
case 5:return t.sent(),[2]}}))}))},t.prototype.save=function(t){return void 0===t&&(t={}),(0,i.mG)(this,void 0,void 0,(function(){var e,n,r,a,s,u,h,l,f
return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return e=t.useObjectStreams,n=void 0===e||e,r=t.addDefaultPage,a=void 0===r||r,s=t.objectsPerTick,u=void 0===s?50:s,h=t.updateFieldAppearances,l=void 0===h||h,(0,c.ku)(n,"useObjectStreams",["boolean"]),(0,c.ku)(a,"addDefaultPage",["boolean"]),(0,c.ku)(u,"objectsPerTick",["number"]),(0,c.ku)(l,"updateFieldAppearances",["boolean"]),a&&0===this.getPageCount()&&this.addPage(),l&&(f=this.formCache.getValue())&&f.updateFieldAppearances(),[4,this.flush()]
case 1:return i.sent(),[2,(n?o.pV:o.Bn).forContext(this.context,u).serializeToBuffer()]}}))}))},t.prototype.saveAsBase64=function(t){return void 0===t&&(t={}),(0,i.mG)(this,void 0,void 0,(function(){var e,n,r,o,a
return(0,i.Jh)(this,(function(s){switch(s.label){case 0:return e=t.dataUri,n=void 0!==e&&e,r=(0,i._T)(t,["dataUri"]),(0,c.ku)(n,"dataUri",["boolean"]),[4,this.save(r)]
case 1:return o=s.sent(),a=(0,c.Eo)(o),[2,n?"data:application/pdf;base64,"+a:a]}}))}))},t.prototype.findPageForAnnotationRef=function(t){for(var e=this.getPages(),n=0,r=e.length;n<r;n++){var i=e[n],o=i.node.Annots()
if(void 0!==(null==o?void 0:o.indexOf(t)))return i}},t.prototype.embedAll=function(t){return(0,i.mG)(this,void 0,void 0,(function(){var e,n
return(0,i.Jh)(this,(function(r){switch(r.label){case 0:e=0,n=t.length,r.label=1
case 1:return e<n?[4,t[e].embed()]:[3,4]
case 2:r.sent(),r.label=3
case 3:return e++,[3,1]
case 4:return[2]}}))}))},t.prototype.updateInfoDict=function(){var t="pdf-lib (https://github.com/Hopding/pdf-lib)",e=new Date,n=this.getInfoDict()
this.setProducer(t),this.setModificationDate(e),n.get(o.wQ.of("Creator"))||this.setCreator(t),n.get(o.wQ.of("CreationDate"))||this.setCreationDate(e)},t.prototype.getInfoDict=function(){var t=this.context.lookup(this.context.trailerInfo.Info)
if(t instanceof o.mh)return t
var e=this.context.obj({})
return this.context.trailerInfo.Info=this.context.register(e),e},t.prototype.assertFontkit=function(){if(!this.fontkit)throw new de
return this.fontkit},t}()
function bn(t){if(!(t instanceof o.Ij||t instanceof o.u2))throw new o.VX([o.Ij,o.u2],t)}!function(t){t.Normal="Normal",t.Multiply="Multiply",t.Screen="Screen",t.Overlay="Overlay",t.Darken="Darken",t.Lighten="Lighten",t.ColorDodge="ColorDodge",t.ColorBurn="ColorBurn",t.HardLight="HardLight",t.SoftLight="SoftLight",t.Difference="Difference",t.Exclusion="Exclusion"}(fn||(fn={}))
var wn=function(){function t(t,e,n){this.fontSize=24,this.fontColor=Pt(0,0,0),this.lineHeight=24,this.x=0,this.y=0,(0,c.ku)(t,"leafNode",[[o.Eg,"PDFPageLeaf"]]),(0,c.ku)(e,"ref",[[o.$F,"PDFRef"]]),(0,c.ku)(n,"doc",[[yn,"PDFDocument"]]),this.node=t,this.ref=e,this.doc=n}return t.prototype.setRotation=function(t){var e=y(t);(0,c.m_)(e,"degreesAngle",90),this.node.set(o.wQ.of("Rotate"),this.doc.context.obj(e))},t.prototype.getRotation=function(){var t=this.node.Rotate()
return f(t?t.asNumber():0)},t.prototype.setSize=function(t,e){(0,c.ku)(t,"width",["number"]),(0,c.ku)(e,"height",["number"])
var n=this.getMediaBox()
this.setMediaBox(n.x,n.y,t,e)
var r=this.getCropBox(),i=this.getBleedBox(),o=this.getTrimBox(),a=this.getArtBox(),s=this.node.CropBox(),u=this.node.BleedBox(),h=this.node.TrimBox(),l=this.node.ArtBox()
s&&(0,c.EO)(r,n)&&this.setCropBox(n.x,n.y,t,e),u&&(0,c.EO)(i,n)&&this.setBleedBox(n.x,n.y,t,e),h&&(0,c.EO)(o,n)&&this.setTrimBox(n.x,n.y,t,e),l&&(0,c.EO)(a,n)&&this.setArtBox(n.x,n.y,t,e)},t.prototype.setWidth=function(t){(0,c.ku)(t,"width",["number"]),this.setSize(t,this.getSize().height)},t.prototype.setHeight=function(t){(0,c.ku)(t,"height",["number"]),this.setSize(this.getSize().width,t)},t.prototype.setMediaBox=function(t,e,n,r){(0,c.ku)(t,"x",["number"]),(0,c.ku)(e,"y",["number"]),(0,c.ku)(n,"width",["number"]),(0,c.ku)(r,"height",["number"])
var i=this.doc.context.obj([t,e,t+n,e+r])
this.node.set(o.wQ.MediaBox,i)},t.prototype.setCropBox=function(t,e,n,r){(0,c.ku)(t,"x",["number"]),(0,c.ku)(e,"y",["number"]),(0,c.ku)(n,"width",["number"]),(0,c.ku)(r,"height",["number"])
var i=this.doc.context.obj([t,e,t+n,e+r])
this.node.set(o.wQ.CropBox,i)},t.prototype.setBleedBox=function(t,e,n,r){(0,c.ku)(t,"x",["number"]),(0,c.ku)(e,"y",["number"]),(0,c.ku)(n,"width",["number"]),(0,c.ku)(r,"height",["number"])
var i=this.doc.context.obj([t,e,t+n,e+r])
this.node.set(o.wQ.BleedBox,i)},t.prototype.setTrimBox=function(t,e,n,r){(0,c.ku)(t,"x",["number"]),(0,c.ku)(e,"y",["number"]),(0,c.ku)(n,"width",["number"]),(0,c.ku)(r,"height",["number"])
var i=this.doc.context.obj([t,e,t+n,e+r])
this.node.set(o.wQ.TrimBox,i)},t.prototype.setArtBox=function(t,e,n,r){(0,c.ku)(t,"x",["number"]),(0,c.ku)(e,"y",["number"]),(0,c.ku)(n,"width",["number"]),(0,c.ku)(r,"height",["number"])
var i=this.doc.context.obj([t,e,t+n,e+r])
this.node.set(o.wQ.ArtBox,i)},t.prototype.getSize=function(){var t=this.getMediaBox()
return{width:t.width,height:t.height}},t.prototype.getWidth=function(){return this.getSize().width},t.prototype.getHeight=function(){return this.getSize().height},t.prototype.getMediaBox=function(){return this.node.MediaBox().asRectangle()},t.prototype.getCropBox=function(){var t,e=this.node.CropBox()
return null!==(t=null==e?void 0:e.asRectangle())&&void 0!==t?t:this.getMediaBox()},t.prototype.getBleedBox=function(){var t,e=this.node.BleedBox()
return null!==(t=null==e?void 0:e.asRectangle())&&void 0!==t?t:this.getCropBox()},t.prototype.getTrimBox=function(){var t,e=this.node.TrimBox()
return null!==(t=null==e?void 0:e.asRectangle())&&void 0!==t?t:this.getCropBox()},t.prototype.getArtBox=function(){var t,e=this.node.ArtBox()
return null!==(t=null==e?void 0:e.asRectangle())&&void 0!==t?t:this.getCropBox()},t.prototype.translateContent=function(t,e){(0,c.ku)(t,"x",["number"]),(0,c.ku)(e,"y",["number"]),this.node.normalize(),this.getContentStream()
var n=this.createContentStream(G(),P(t,e)),r=this.doc.context.register(n),i=this.createContentStream(z()),o=this.doc.context.register(i)
this.node.wrapContentStreams(r,o)},t.prototype.resetPosition=function(){this.getContentStream(!1),this.x=0,this.y=0},t.prototype.setFont=function(t){(0,c.ku)(t,"font",[[Ze,"PDFFont"]]),this.font=t,this.fontKey=(0,c.si)(this.font.name),this.node.setFontDictionary(o.wQ.of(this.fontKey),this.font.ref)},t.prototype.setFontSize=function(t){(0,c.ku)(t,"fontSize",["number"]),this.fontSize=t},t.prototype.setFontColor=function(t){(0,c.ku)(t,"fontColor",[[Object,"Color"]]),this.fontColor=t},t.prototype.setLineHeight=function(t){(0,c.ku)(t,"lineHeight",["number"]),this.lineHeight=t},t.prototype.getPosition=function(){return{x:this.x,y:this.y}},t.prototype.getX=function(){return this.x},t.prototype.getY=function(){return this.y},t.prototype.moveTo=function(t,e){(0,c.ku)(t,"x",["number"]),(0,c.ku)(e,"y",["number"]),this.x=t,this.y=e},t.prototype.moveDown=function(t){(0,c.ku)(t,"yDecrease",["number"]),this.y-=t},t.prototype.moveUp=function(t){(0,c.ku)(t,"yIncrease",["number"]),this.y+=t},t.prototype.moveLeft=function(t){(0,c.ku)(t,"xDecrease",["number"]),this.x-=t},t.prototype.moveRight=function(t){(0,c.ku)(t,"xIncrease",["number"]),this.x+=t},t.prototype.pushOperators=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];(0,c.pO)(t,"operator",[[o.sI,"PDFOperator"]])
var n=this.getContentStream()
n.push.apply(n,t)},t.prototype.drawText=function(t,e){var n,r,i,o,a,s,u
void 0===e&&(e={}),(0,c.ku)(t,"text",["string"]),(0,c.MU)(e.color,"options.color",[[Object,"Color"]]),(0,c.zo)(e.opacity,"opacity.opacity",0,1),(0,c.MU)(e.font,"options.font",[[Ze,"PDFFont"]]),(0,c.MU)(e.size,"options.size",["number"]),(0,c.MU)(e.rotate,"options.rotate",[[Object,"Rotation"]]),(0,c.MU)(e.xSkew,"options.xSkew",[[Object,"Rotation"]]),(0,c.MU)(e.ySkew,"options.ySkew",[[Object,"Rotation"]]),(0,c.MU)(e.x,"options.x",["number"]),(0,c.MU)(e.y,"options.y",["number"]),(0,c.MU)(e.lineHeight,"options.lineHeight",["number"]),(0,c.MU)(e.maxWidth,"options.maxWidth",["number"]),(0,c.MU)(e.wordBreaks,"options.wordBreaks",[Array]),(0,c.GT)(e.blendMode,"options.blendMode",fn)
var h=this.getFont()[0]
e.font&&this.setFont(e.font)
for(var l=this.getFont(),d=l[0],p=l[1],g=e.size||this.fontSize,v=e.wordBreaks||this.doc.defaultWordBreaks,m=void 0===e.maxWidth?(0,c.f7)((0,c.FV)(t)):(0,c.KU)(t,v,e.maxWidth,(function(t){return d.widthOfTextAtSize(t,g)})),y=new Array(m.length),b=0,w=m.length;b<w;b++)y[b]=d.encodeText(m[b])
var x=this.maybeEmbedGraphicsState({opacity:e.opacity,blendMode:e.blendMode}),S=this.getContentStream()
S.push.apply(S,Xt(y,{color:null!==(n=e.color)&&void 0!==n?n:this.fontColor,font:p,size:g,rotate:null!==(r=e.rotate)&&void 0!==r?r:f(0),xSkew:null!==(i=e.xSkew)&&void 0!==i?i:f(0),ySkew:null!==(o=e.ySkew)&&void 0!==o?o:f(0),x:null!==(a=e.x)&&void 0!==a?a:this.x,y:null!==(s=e.y)&&void 0!==s?s:this.y,lineHeight:null!==(u=e.lineHeight)&&void 0!==u?u:this.lineHeight,graphicsState:x})),e.font&&this.setFont(h)},t.prototype.drawImage=function(t,e){var n,r,i,a,s,u,h
void 0===e&&(e={}),(0,c.ku)(t,"image",[[qe,"PDFImage"]]),(0,c.MU)(e.x,"options.x",["number"]),(0,c.MU)(e.y,"options.y",["number"]),(0,c.MU)(e.width,"options.width",["number"]),(0,c.MU)(e.height,"options.height",["number"]),(0,c.MU)(e.rotate,"options.rotate",[[Object,"Rotation"]]),(0,c.MU)(e.xSkew,"options.xSkew",[[Object,"Rotation"]]),(0,c.MU)(e.ySkew,"options.ySkew",[[Object,"Rotation"]]),(0,c.zo)(e.opacity,"opacity.opacity",0,1),(0,c.GT)(e.blendMode,"options.blendMode",fn)
var l=(0,c.si)("Image",10)
this.node.setXObject(o.wQ.of(l),t.ref)
var d=this.maybeEmbedGraphicsState({opacity:e.opacity,blendMode:e.blendMode}),p=this.getContentStream()
p.push.apply(p,Yt(l,{x:null!==(n=e.x)&&void 0!==n?n:this.x,y:null!==(r=e.y)&&void 0!==r?r:this.y,width:null!==(i=e.width)&&void 0!==i?i:t.size().width,height:null!==(a=e.height)&&void 0!==a?a:t.size().height,rotate:null!==(s=e.rotate)&&void 0!==s?s:f(0),xSkew:null!==(u=e.xSkew)&&void 0!==u?u:f(0),ySkew:null!==(h=e.ySkew)&&void 0!==h?h:f(0),graphicsState:d}))},t.prototype.drawPage=function(t,e){var n,r,i,a,s
void 0===e&&(e={}),(0,c.ku)(t,"embeddedPage",[[Ve,"PDFEmbeddedPage"]]),(0,c.MU)(e.x,"options.x",["number"]),(0,c.MU)(e.y,"options.y",["number"]),(0,c.MU)(e.xScale,"options.xScale",["number"]),(0,c.MU)(e.yScale,"options.yScale",["number"]),(0,c.MU)(e.width,"options.width",["number"]),(0,c.MU)(e.height,"options.height",["number"]),(0,c.MU)(e.rotate,"options.rotate",[[Object,"Rotation"]]),(0,c.MU)(e.xSkew,"options.xSkew",[[Object,"Rotation"]]),(0,c.MU)(e.ySkew,"options.ySkew",[[Object,"Rotation"]]),(0,c.zo)(e.opacity,"opacity.opacity",0,1),(0,c.GT)(e.blendMode,"options.blendMode",fn)
var u=(0,c.si)("EmbeddedPdfPage",10)
this.node.setXObject(o.wQ.of(u),t.ref)
var h=this.maybeEmbedGraphicsState({opacity:e.opacity,blendMode:e.blendMode}),l=void 0!==e.width?e.width/t.width:void 0!==e.xScale?e.xScale:1,d=void 0!==e.height?e.height/t.height:void 0!==e.yScale?e.yScale:1,p=this.getContentStream()
p.push.apply(p,Jt(u,{x:null!==(n=e.x)&&void 0!==n?n:this.x,y:null!==(r=e.y)&&void 0!==r?r:this.y,xScale:l,yScale:d,rotate:null!==(i=e.rotate)&&void 0!==i?i:f(0),xSkew:null!==(a=e.xSkew)&&void 0!==a?a:f(0),ySkew:null!==(s=e.ySkew)&&void 0!==s?s:f(0),graphicsState:h}))},t.prototype.drawSvgPath=function(t,e){var n,r,i,o,a,s,u,l,d
void 0===e&&(e={}),(0,c.ku)(t,"path",["string"]),(0,c.MU)(e.x,"options.x",["number"]),(0,c.MU)(e.y,"options.y",["number"]),(0,c.MU)(e.scale,"options.scale",["number"]),(0,c.MU)(e.rotate,"options.rotate",[[Object,"Rotation"]]),(0,c.MU)(e.borderWidth,"options.borderWidth",["number"]),(0,c.MU)(e.color,"options.color",[[Object,"Color"]]),(0,c.zo)(e.opacity,"opacity.opacity",0,1),(0,c.MU)(e.borderColor,"options.borderColor",[[Object,"Color"]]),(0,c.MU)(e.borderDashArray,"options.borderDashArray",[Array]),(0,c.MU)(e.borderDashPhase,"options.borderDashPhase",["number"]),(0,c.GT)(e.borderLineCap,"options.borderLineCap",h),(0,c.zo)(e.borderOpacity,"options.borderOpacity",0,1),(0,c.GT)(e.blendMode,"options.blendMode",fn)
var p=this.maybeEmbedGraphicsState({opacity:e.opacity,borderOpacity:e.borderOpacity,blendMode:e.blendMode})
"color"in e||"borderColor"in e||(e.borderColor=Pt(0,0,0))
var g=this.getContentStream()
g.push.apply(g,re(t,{x:null!==(n=e.x)&&void 0!==n?n:this.x,y:null!==(r=e.y)&&void 0!==r?r:this.y,scale:e.scale,rotate:null!==(i=e.rotate)&&void 0!==i?i:f(0),color:null!==(o=e.color)&&void 0!==o?o:void 0,borderColor:null!==(a=e.borderColor)&&void 0!==a?a:void 0,borderWidth:null!==(s=e.borderWidth)&&void 0!==s?s:0,borderDashArray:null!==(u=e.borderDashArray)&&void 0!==u?u:void 0,borderDashPhase:null!==(l=e.borderDashPhase)&&void 0!==l?l:void 0,borderLineCap:null!==(d=e.borderLineCap)&&void 0!==d?d:void 0,graphicsState:p}))},t.prototype.drawLine=function(t){var e,n,r,i,o;(0,c.ku)(t.start,"options.start",[[Object,"{ x: number, y: number }"]]),(0,c.ku)(t.end,"options.end",[[Object,"{ x: number, y: number }"]]),(0,c.ku)(t.start.x,"options.start.x",["number"]),(0,c.ku)(t.start.y,"options.start.y",["number"]),(0,c.ku)(t.end.x,"options.end.x",["number"]),(0,c.ku)(t.end.y,"options.end.y",["number"]),(0,c.MU)(t.thickness,"options.thickness",["number"]),(0,c.MU)(t.color,"options.color",[[Object,"Color"]]),(0,c.MU)(t.dashArray,"options.dashArray",[Array]),(0,c.MU)(t.dashPhase,"options.dashPhase",["number"]),(0,c.GT)(t.lineCap,"options.lineCap",h),(0,c.zo)(t.opacity,"opacity.opacity",0,1),(0,c.GT)(t.blendMode,"options.blendMode",fn)
var a=this.maybeEmbedGraphicsState({borderOpacity:t.opacity,blendMode:t.blendMode})
"color"in t||(t.color=Pt(0,0,0))
var s=this.getContentStream()
s.push.apply(s,Qt({start:t.start,end:t.end,thickness:null!==(e=t.thickness)&&void 0!==e?e:1,color:null!==(n=t.color)&&void 0!==n?n:void 0,dashArray:null!==(r=t.dashArray)&&void 0!==r?r:void 0,dashPhase:null!==(i=t.dashPhase)&&void 0!==i?i:void 0,lineCap:null!==(o=t.lineCap)&&void 0!==o?o:void 0,graphicsState:a}))},t.prototype.drawRectangle=function(t){var e,n,r,i,o,a,s,u,l,d,p,g,v
void 0===t&&(t={}),(0,c.MU)(t.x,"options.x",["number"]),(0,c.MU)(t.y,"options.y",["number"]),(0,c.MU)(t.width,"options.width",["number"]),(0,c.MU)(t.height,"options.height",["number"]),(0,c.MU)(t.rotate,"options.rotate",[[Object,"Rotation"]]),(0,c.MU)(t.xSkew,"options.xSkew",[[Object,"Rotation"]]),(0,c.MU)(t.ySkew,"options.ySkew",[[Object,"Rotation"]]),(0,c.MU)(t.borderWidth,"options.borderWidth",["number"]),(0,c.MU)(t.color,"options.color",[[Object,"Color"]]),(0,c.zo)(t.opacity,"opacity.opacity",0,1),(0,c.MU)(t.borderColor,"options.borderColor",[[Object,"Color"]]),(0,c.MU)(t.borderDashArray,"options.borderDashArray",[Array]),(0,c.MU)(t.borderDashPhase,"options.borderDashPhase",["number"]),(0,c.GT)(t.borderLineCap,"options.borderLineCap",h),(0,c.zo)(t.borderOpacity,"options.borderOpacity",0,1),(0,c.GT)(t.blendMode,"options.blendMode",fn)
var m=this.maybeEmbedGraphicsState({opacity:t.opacity,borderOpacity:t.borderOpacity,blendMode:t.blendMode})
"color"in t||"borderColor"in t||(t.color=Pt(0,0,0))
var y=this.getContentStream()
y.push.apply(y,$t({x:null!==(e=t.x)&&void 0!==e?e:this.x,y:null!==(n=t.y)&&void 0!==n?n:this.y,width:null!==(r=t.width)&&void 0!==r?r:150,height:null!==(i=t.height)&&void 0!==i?i:100,rotate:null!==(o=t.rotate)&&void 0!==o?o:f(0),xSkew:null!==(a=t.xSkew)&&void 0!==a?a:f(0),ySkew:null!==(s=t.ySkew)&&void 0!==s?s:f(0),borderWidth:null!==(u=t.borderWidth)&&void 0!==u?u:0,color:null!==(l=t.color)&&void 0!==l?l:void 0,borderColor:null!==(d=t.borderColor)&&void 0!==d?d:void 0,borderDashArray:null!==(p=t.borderDashArray)&&void 0!==p?p:void 0,borderDashPhase:null!==(g=t.borderDashPhase)&&void 0!==g?g:void 0,graphicsState:m,borderLineCap:null!==(v=t.borderLineCap)&&void 0!==v?v:void 0}))},t.prototype.drawSquare=function(t){void 0===t&&(t={})
var e=t.size;(0,c.MU)(e,"size",["number"]),this.drawRectangle((0,i.pi)((0,i.pi)({},t),{width:e,height:e}))},t.prototype.drawEllipse=function(t){var e,n,r,i,o,a,s,u,l,f,d
void 0===t&&(t={}),(0,c.MU)(t.x,"options.x",["number"]),(0,c.MU)(t.y,"options.y",["number"]),(0,c.MU)(t.xScale,"options.xScale",["number"]),(0,c.MU)(t.yScale,"options.yScale",["number"]),(0,c.MU)(t.rotate,"options.rotate",[[Object,"Rotation"]]),(0,c.MU)(t.color,"options.color",[[Object,"Color"]]),(0,c.zo)(t.opacity,"opacity.opacity",0,1),(0,c.MU)(t.borderColor,"options.borderColor",[[Object,"Color"]]),(0,c.zo)(t.borderOpacity,"options.borderOpacity",0,1),(0,c.MU)(t.borderWidth,"options.borderWidth",["number"]),(0,c.MU)(t.borderDashArray,"options.borderDashArray",[Array]),(0,c.MU)(t.borderDashPhase,"options.borderDashPhase",["number"]),(0,c.GT)(t.borderLineCap,"options.borderLineCap",h),(0,c.GT)(t.blendMode,"options.blendMode",fn)
var p=this.maybeEmbedGraphicsState({opacity:t.opacity,borderOpacity:t.borderOpacity,blendMode:t.blendMode})
"color"in t||"borderColor"in t||(t.color=Pt(0,0,0))
var g=this.getContentStream()
g.push.apply(g,ne({x:null!==(e=t.x)&&void 0!==e?e:this.x,y:null!==(n=t.y)&&void 0!==n?n:this.y,xScale:null!==(r=t.xScale)&&void 0!==r?r:100,yScale:null!==(i=t.yScale)&&void 0!==i?i:100,rotate:null!==(o=t.rotate)&&void 0!==o?o:void 0,color:null!==(a=t.color)&&void 0!==a?a:void 0,borderColor:null!==(s=t.borderColor)&&void 0!==s?s:void 0,borderWidth:null!==(u=t.borderWidth)&&void 0!==u?u:0,borderDashArray:null!==(l=t.borderDashArray)&&void 0!==l?l:void 0,borderDashPhase:null!==(f=t.borderDashPhase)&&void 0!==f?f:void 0,borderLineCap:null!==(d=t.borderLineCap)&&void 0!==d?d:void 0,graphicsState:p}))},t.prototype.drawCircle=function(t){void 0===t&&(t={})
var e=t.size,n=void 0===e?100:e;(0,c.MU)(n,"size",["number"]),this.drawEllipse((0,i.pi)((0,i.pi)({},t),{xScale:n,yScale:n}))},t.prototype.getFont=function(){if(!this.font||!this.fontKey){var t=this.doc.embedStandardFont(Ke.Helvetica)
this.setFont(t)}return[this.font,this.fontKey]},t.prototype.getContentStream=function(t){return void 0===t&&(t=!0),t&&this.contentStream||(this.contentStream=this.createContentStream(),this.contentStreamRef=this.doc.context.register(this.contentStream),this.node.addContentStream(this.contentStreamRef)),this.contentStream},t.prototype.createContentStream=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var n=this.doc.context.obj({}),r=o.kK.of(n,t)
return r},t.prototype.maybeEmbedGraphicsState=function(t){var e=t.opacity,n=t.borderOpacity,r=t.blendMode
if(void 0!==e||void 0!==n||void 0!==r){var i=(0,c.si)("GS",10),a=this.doc.context.obj({Type:"ExtGState",ca:e,CA:n,BM:r})
return this.node.setExtGState(o.wQ.of(i),a),i}},t.of=function(e,n,r){return new t(e,n,r)},t.create=function(e){(0,c.ku)(e,"doc",[[yn,"PDFDocument"]])
var n=o.$F.of(-1),r=o.Eg.withContextAndParent(e.context,n)
return new t(r,e.context.register(r),e)},t}(),xn=wn,Sn=function(t){function e(e,n,r){var i=t.call(this,e,n,r)||this
return(0,c.ku)(e,"acroButton",[[o._,"PDFAcroPushButton"]]),i.acroField=e,i}return(0,i.ZT)(e,t),e.prototype.setImage=function(t,e){void 0===e&&(e=ke.Center)
for(var n=this.acroField.getWidgets(),r=0,i=n.length;r<i;r++){var o=n[r],a=this.createImageAppearanceStream(o,t,e)
this.updateWidgetAppearances(o,{normal:a})}this.markAsClean()},e.prototype.setFontSize=function(t){(0,c.z7)(t,"fontSize"),this.acroField.setFontSize(t),this.markAsDirty()},e.prototype.addToPage=function(t,e,n){var r,i,o,a,s,u,h,l,d,p,g;(0,c.MU)(t,"text",["string"]),(0,c.MU)(e,"page",[[xn,"PDFPage"]]),Xe(n)
var v=this.createWidget({x:(null!==(r=null==n?void 0:n.x)&&void 0!==r?r:0)-(null!==(i=null==n?void 0:n.borderWidth)&&void 0!==i?i:0)/2,y:(null!==(o=null==n?void 0:n.y)&&void 0!==o?o:0)-(null!==(a=null==n?void 0:n.borderWidth)&&void 0!==a?a:0)/2,width:null!==(s=null==n?void 0:n.width)&&void 0!==s?s:100,height:null!==(u=null==n?void 0:n.height)&&void 0!==u?u:50,textColor:null!==(h=null==n?void 0:n.textColor)&&void 0!==h?h:Pt(0,0,0),backgroundColor:null!==(l=null==n?void 0:n.backgroundColor)&&void 0!==l?l:Pt(.75,.75,.75),borderColor:null==n?void 0:n.borderColor,borderWidth:null!==(d=null==n?void 0:n.borderWidth)&&void 0!==d?d:0,rotate:null!==(p=null==n?void 0:n.rotate)&&void 0!==p?p:f(0),caption:t,hidden:null==n?void 0:n.hidden}),m=this.doc.context.register(v.dict)
this.acroField.addWidget(m)
var y=null!==(g=null==n?void 0:n.font)&&void 0!==g?g:this.doc.getForm().getDefaultFont()
this.updateWidgetAppearance(v,y),e.node.addAnnot(m)},e.prototype.needsAppearancesUpdate=function(){var t
if(this.isDirty())return!0
for(var e=this.acroField.getWidgets(),n=0,r=e.length;n<r;n++)if(!((null===(t=e[n].getAppearances())||void 0===t?void 0:t.normal)instanceof o.kO))return!0
return!1},e.prototype.defaultUpdateAppearances=function(t){(0,c.ku)(t,"font",[[Ze,"PDFFont"]]),this.updateAppearances(t)},e.prototype.updateAppearances=function(t,e){(0,c.ku)(t,"font",[[Ze,"PDFFont"]]),(0,c.MU)(e,"provider",[Function])
for(var n=this.acroField.getWidgets(),r=0,i=n.length;r<i;r++){var o=n[r]
this.updateWidgetAppearance(o,t,e)}},e.prototype.updateWidgetAppearance=function(t,e,n){var r=De((null!=n?n:je)(this,t,e))
this.updateWidgetAppearanceWithFont(t,e,r)},e.of=function(t,n,r){return new e(t,n,r)},e}(Je)},3107:function(t,e,n){"use strict"
n.d(e,{J:function(){return r}})
var r,i=n(1445),o=n(4521),a=n(6887)
!function(t){t.Source="Source",t.Data="Data",t.Alternative="Alternative",t.Supplement="Supplement",t.EncryptedPayload="EncryptedPayload",t.FormData="EncryptedPayload",t.Schema="Schema",t.Unspecified="Unspecified"}(r||(r={}))
var s=function(){function t(t,e,n){void 0===n&&(n={}),this.fileData=t,this.fileName=e,this.options=n}return t.for=function(e,n,r){return void 0===r&&(r={}),new t(e,n,r)},t.prototype.embedIntoContext=function(t,e){return(0,i.mG)(this,void 0,void 0,(function(){var n,r,s,u,c,h,l,f,d
return(0,i.Jh)(this,(function(i){return n=this.options,r=n.mimeType,s=n.description,u=n.creationDate,c=n.modificationDate,h=n.afRelationship,l=t.flateStream(this.fileData,{Type:"EmbeddedFile",Subtype:null!=r?r:void 0,Params:{Size:this.fileData.length,CreationDate:u?o.Z.fromDate(u):void 0,ModDate:c?o.Z.fromDate(c):void 0}}),f=t.register(l),d=t.obj({Type:"Filespec",F:o.Z.of(this.fileName),UF:a.Z.fromText(this.fileName),EF:{F:f},Desc:s?a.Z.fromText(s):void 0,AFRelationship:null!=h?h:void 0}),e?(t.assign(e,d),[2,e]):[2,t.register(d)]}))}))},t}()
e.Z=s},2124:function(t,e,n){"use strict"
n.d(e,{iQ:function(){return o},Gp:function(){return a},VX:function(){return s},l:function(){return u},aj:function(){return c},SY:function(){return h},SR:function(){return l},NP:function(){return f},qX:function(){return d},sV:function(){return p},dm:function(){return g},Y8:function(){return v},bg:function(){return m},sE:function(){return y},vM:function(){return b},TC:function(){return w},_z:function(){return x},Iu:function(){return S},RS:function(){return C},$O:function(){return T},ze:function(){return E},EX:function(){return k},Ke:function(){return A},Sh:function(){return P},or:function(){return F},Dr:function(){return R},ku:function(){return O},uu:function(){return D}})
var r=n(1445),i=n(7569),o=function(t){function e(e,n){var r="Method "+e+"."+n+"() not implemented"
return t.call(this,r)||this}return(0,r.ZT)(e,t),e}(Error),a=function(t){function e(e){var n="Cannot construct "+e+" - it has a private constructor"
return t.call(this,n)||this}return(0,r.ZT)(e,t),e}(Error),s=function(t){function e(e,n){var r=function(t){var e,n
return null!==(e=null==t?void 0:t.name)&&void 0!==e?e:null===(n=null==t?void 0:t.constructor)||void 0===n?void 0:n.name},i="Expected instance of "+(Array.isArray(e)?e.map(r):[r(e)]).join(" or ")+", but got instance of "+(n?r(n):n)
return t.call(this,i)||this}return(0,r.ZT)(e,t),e}(Error),u=function(t){function e(e){var n=e+" stream encoding not supported"
return t.call(this,n)||this}return(0,r.ZT)(e,t),e}(Error),c=function(t){function e(e,n){var r="Cannot call "+e+"."+n+"() more than once"
return t.call(this,r)||this}return(0,r.ZT)(e,t),e}(Error),h=function(t){function e(e){var n="Missing catalog (ref="+e+")"
return t.call(this,n)||this}return(0,r.ZT)(e,t),e}(Error),l=function(t){function e(){return t.call(this,"Can't embed page with missing Contents")||this}return(0,r.ZT)(e,t),e}(Error),f=function(t){function e(e){var n,r,i,o="Unrecognized stream type: "+(null!==(i=null!==(r=null===(n=null==e?void 0:e.contructor)||void 0===n?void 0:n.name)&&void 0!==r?r:null==e?void 0:e.name)&&void 0!==i?i:e)
return t.call(this,o)||this}return(0,r.ZT)(e,t),e}(Error),d=function(t){function e(){return t.call(this,"Found mismatched contexts while embedding pages. All pages in the array passed to `PDFDocument.embedPages()` must be from the same document.")||this}return(0,r.ZT)(e,t),e}(Error),p=function(t){function e(e){var n="Attempted to convert PDFArray with "+e+" elements to rectangle, but must have exactly 4 elements."
return t.call(this,n)||this}return(0,r.ZT)(e,t),e}(Error),g=function(t){function e(e){var n='Attempted to convert "'+e+'" to a date, but it does not match the PDF date string format.'
return t.call(this,n)||this}return(0,r.ZT)(e,t),e}(Error),v=function(t){function e(e,n){var r="Invalid targetIndex specified: targetIndex="+e+" must be less than Count="+n
return t.call(this,r)||this}return(0,r.ZT)(e,t),e}(Error),m=function(t){function e(e,n){var r="Failed to "+n+" at targetIndex="+e+" due to corrupt page tree: It is likely that one or more 'Count' entries are invalid"
return t.call(this,r)||this}return(0,r.ZT)(e,t),e}(Error),y=function(t){function e(e,n,r){var i="index should be at least "+n+" and at most "+r+", but was actually "+e
return t.call(this,i)||this}return(0,r.ZT)(e,t),e}(Error),b=function(t){function e(){return t.call(this,"Attempted to set invalid field value")||this}return(0,r.ZT)(e,t),e}(Error),w=function(t){function e(){return t.call(this,"Attempted to select multiple values for single-select field")||this}return(0,r.ZT)(e,t),e}(Error),x=function(t){function e(e){var n="No /DA (default appearance) entry found for field: "+e
return t.call(this,n)||this}return(0,r.ZT)(e,t),e}(Error),S=function(t){function e(e){var n="No Tf operator found for DA of field: "+e
return t.call(this,n)||this}return(0,r.ZT)(e,t),e}(Error),C=function(t){function e(e,n){var r="Failed to parse number (line:"+e.line+" col:"+e.column+" offset="+e.offset+'): "'+n+'"'
return t.call(this,r)||this}return(0,r.ZT)(e,t),e}(Error),T=function(t){function e(e,n){var r="Failed to parse PDF document (line:"+e.line+" col:"+e.column+" offset="+e.offset+"): "+n
return t.call(this,r)||this}return(0,r.ZT)(e,t),e}(Error),E=function(t){function e(e,n,r){var i="Expected next byte to be "+n+" but it was actually "+r
return t.call(this,e,i)||this}return(0,r.ZT)(e,t),e}(T),k=function(t){function e(e,n){var r="Failed to parse PDF object starting with the following byte: "+n
return t.call(this,e,r)||this}return(0,r.ZT)(e,t),e}(T),A=function(t){function e(e){return t.call(this,e,"Failed to parse invalid PDF object")||this}return(0,r.ZT)(e,t),e}(T),P=function(t){function e(e){return t.call(this,e,"Failed to parse PDF stream")||this}return(0,r.ZT)(e,t),e}(T),F=function(t){function e(e){return t.call(this,e,"Failed to parse PDF literal string due to unbalanced parenthesis")||this}return(0,r.ZT)(e,t),e}(T),R=function(t){function e(e){return t.call(this,e,"Parser stalled")||this}return(0,r.ZT)(e,t),e}(T),O=function(t){function e(e){return t.call(this,e,"No PDF header found")||this}return(0,r.ZT)(e,t),e}(T),D=function(t){function e(e,n){var r="Did not find expected keyword '"+(0,i.Qo)(n)+"'"
return t.call(this,e,r)||this}return(0,r.ZT)(e,t),e}(T)},7970:function(t,e,n){"use strict"
n.d(e,{JN:function(){return Ct.J},Ub:function(){return he},m0:function(){return fe},PV:function(){return ce},oD:function(){return le},TV:function(){return gn},F5:function(){return Ce},iJ:function(){return i.Z},bg:function(){return r.bg},Wz:function(){return wt},zO:function(){return St},$P:function(){return _t},Gb:function(){return Ct.Z},sE:function(){return r.sE},vM:function(){return r.vM},dm:function(){return r.dm},Y8:function(){return r.Y8},sm:function(){return Ft},iQ:function(){return r.iQ},SY:function(){return r.SY},_z:function(){return r._z},uu:function(){return r.uu},ku:function(){return r.ku},SR:function(){return r.SR},Iu:function(){return r.Iu},TC:function(){return r.TC},ze:function(){return r.ze},Ie:function(){return Mt},RS:function(){return r.RS},ry:function(){return Fe},Ei:function(){return Oe},P0:function(){return Ie},sS:function(){return _e},Kg:function(){return me},PS:function(){return an},Au:function(){return Ke},qg:function(){return Le},_:function(){return Ve},Ym:function(){return We},uQ:function(){return je},Fs:function(){return Ae},_X:function(){return ze},oY:function(){return xe},Gr:function(){return d},sV:function(){return r.sV},hd:function(){return g},lR:function(){return un},kK:function(){return G},o6:function(){return V},w9:function(){return Y},PO:function(){return st},mh:function(){return b},QM:function(){return U},o:function(){return c},Ij:function(){return lt.Z},wt:function(){return it},Ke:function(){return r.Ke},wQ:function(){return P},oX:function(){return m},qI:function(){return l},bU:function(){return h.Z},Wy:function(){return K},D2:function(){return An},EX:function(){return r.EX},Qc:function(){return tt},gz:function(){return Fn},sI:function(){return _},Y3:function(){return L},dS:function(){return se},Eg:function(){return W},N8:function(){return hn},h9:function(){return Mn},$O:function(){return r.$O},SV:function(){return O},$F:function(){return I},kO:function(){return R},Sh:function(){return r.Sh},pV:function(){return ct},u2:function(){return yt.Z},$4:function(){return J},O5:function(){return Q},ci:function(){return Ee},Bn:function(){return nt},Dw:function(){return On},qX:function(){return r.qX},Le:function(){return Lt},A1:function(){return Nt},Gp:function(){return r.Gp},M$:function(){return It},aj:function(){return r.aj},Dr:function(){return r.Dr},IL:function(){return dt},or:function(){return r.or},VX:function(){return r.VX},NP:function(){return r.NP},l:function(){return r.l},gF:function(){return pe},WT:function(){return Ye},P_:function(){return Xe},yh:function(){return oe}})
var r=n(2124),i=n(4345),o=n(1445),a=n(3649),s=n.n(a),u=n(7569),c=function(){function t(t,e){this.major=String(t),this.minor=String(e)}return t.prototype.toString=function(){var t=(0,u.D_)(129)
return"%PDF-"+this.major+"."+this.minor+"\n%"+t+t+t+t},t.prototype.sizeInBytes=function(){return 12+this.major.length+this.minor.length},t.prototype.copyBytesInto=function(t,e){var n=e
return t[e++]=i.Z.Percent,t[e++]=i.Z.P,t[e++]=i.Z.D,t[e++]=i.Z.F,t[e++]=i.Z.Dash,e+=(0,u.C1)(this.major,t,e),t[e++]=i.Z.Period,e+=(0,u.C1)(this.minor,t,e),t[e++]=i.Z.Newline,t[e++]=i.Z.Percent,t[e++]=129,t[e++]=129,t[e++]=129,t[e++]=129,e-n},t.forVersion=function(e,n){return new t(e,n)},t}(),h=n(3729),l=function(t){function e(e){var n=t.call(this)||this
return n.numberValue=e,n.stringValue=(0,u.D$)(e),n}return(0,o.ZT)(e,t),e.prototype.asNumber=function(){return this.numberValue},e.prototype.value=function(){return this.numberValue},e.prototype.clone=function(){return e.of(this.numberValue)},e.prototype.toString=function(){return this.stringValue},e.prototype.sizeInBytes=function(){return this.stringValue.length},e.prototype.copyBytesInto=function(t,e){return e+=(0,u.C1)(this.stringValue,t,e),this.stringValue.length},e.of=function(t){return new e(t)},e}(h.Z),f=function(t){function e(e){var n=t.call(this)||this
return n.array=[],n.context=e,n}return(0,o.ZT)(e,t),e.prototype.size=function(){return this.array.length},e.prototype.push=function(t){this.array.push(t)},e.prototype.insert=function(t,e){this.array.splice(t,0,e)},e.prototype.indexOf=function(t){var e=this.array.indexOf(t)
return-1===e?void 0:e},e.prototype.remove=function(t){this.array.splice(t,1)},e.prototype.set=function(t,e){this.array[t]=e},e.prototype.get=function(t){return this.array[t]},e.prototype.lookupMaybe=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
return(e=this.context).lookupMaybe.apply(e,(0,o.pr)([this.get(t)],n))},e.prototype.lookup=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
return(e=this.context).lookup.apply(e,(0,o.pr)([this.get(t)],n))},e.prototype.asRectangle=function(){if(4!==this.size())throw new r.sV(this.size())
var t=this.lookup(0,l).asNumber(),e=this.lookup(1,l).asNumber()
return{x:t,y:e,width:this.lookup(2,l).asNumber()-t,height:this.lookup(3,l).asNumber()-e}},e.prototype.asArray=function(){return this.array.slice()},e.prototype.clone=function(t){for(var n=e.withContext(t||this.context),r=0,i=this.size();r<i;r++)n.push(this.array[r])
return n},e.prototype.toString=function(){for(var t="[ ",e=0,n=this.size();e<n;e++)t+=this.get(e).toString(),t+=" "
return t+"]"},e.prototype.sizeInBytes=function(){for(var t=3,e=0,n=this.size();e<n;e++)t+=this.get(e).sizeInBytes()+1
return t},e.prototype.copyBytesInto=function(t,e){var n=e
t[e++]=i.Z.LeftSquareBracket,t[e++]=i.Z.Space
for(var r=0,o=this.size();r<o;r++)e+=this.get(r).copyBytesInto(t,e),t[e++]=i.Z.Space
return t[e++]=i.Z.RightSquareBracket,e-n},e.withContext=function(t){return new e(t)},e}(h.Z),d=f,p={},g=function(t){function e(e,n){var i=this
if(e!==p)throw new r.Gp("PDFBool")
return(i=t.call(this)||this).value=n,i}return(0,o.ZT)(e,t),e.prototype.asBoolean=function(){return this.value},e.prototype.clone=function(){return this},e.prototype.toString=function(){return String(this.value)},e.prototype.sizeInBytes=function(){return this.value?4:5},e.prototype.copyBytesInto=function(t,e){return this.value?(t[e++]=i.Z.t,t[e++]=i.Z.r,t[e++]=i.Z.u,t[e++]=i.Z.e,4):(t[e++]=i.Z.f,t[e++]=i.Z.a,t[e++]=i.Z.l,t[e++]=i.Z.s,t[e++]=i.Z.e,5)},e.True=new e(p,!0),e.False=new e(p,!1),e}(h.Z),v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.prototype.asNull=function(){return null},e.prototype.clone=function(){return this},e.prototype.toString=function(){return"null"},e.prototype.sizeInBytes=function(){return 4},e.prototype.copyBytesInto=function(t,e){return t[e++]=i.Z.n,t[e++]=i.Z.u,t[e++]=i.Z.l,t[e++]=i.Z.l,4},e}(h.Z),m=new v,y=function(t){function e(e,n){var r=t.call(this)||this
return r.dict=e,r.context=n,r}return(0,o.ZT)(e,t),e.prototype.keys=function(){return Array.from(this.dict.keys())},e.prototype.values=function(){return Array.from(this.dict.values())},e.prototype.entries=function(){return Array.from(this.dict.entries())},e.prototype.set=function(t,e){this.dict.set(t,e)},e.prototype.get=function(t,e){void 0===e&&(e=!1)
var n=this.dict.get(t)
if(n!==m||e)return n},e.prototype.has=function(t){var e=this.dict.get(t)
return void 0!==e&&e!==m},e.prototype.lookupMaybe=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
var i=n.includes(m),a=(e=this.context).lookupMaybe.apply(e,(0,o.pr)([this.get(t,i)],n))
if(a!==m||i)return a},e.prototype.lookup=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
var i=n.includes(m),a=(e=this.context).lookup.apply(e,(0,o.pr)([this.get(t,i)],n))
if(a!==m||i)return a},e.prototype.delete=function(t){return this.dict.delete(t)},e.prototype.asMap=function(){return new Map(this.dict)},e.prototype.clone=function(t){for(var n=e.withContext(t||this.context),r=this.entries(),i=0,o=r.length;i<o;i++){var a=r[i],s=a[0],u=a[1]
n.set(s,u)}return n},e.prototype.toString=function(){for(var t="<<\n",e=this.entries(),n=0,r=e.length;n<r;n++){var i=e[n],o=i[0],a=i[1]
t+=o.toString()+" "+a.toString()+"\n"}return t+">>"},e.prototype.sizeInBytes=function(){for(var t=5,e=this.entries(),n=0,r=e.length;n<r;n++){var i=e[n],o=i[0],a=i[1]
t+=o.sizeInBytes()+a.sizeInBytes()+2}return t},e.prototype.copyBytesInto=function(t,e){var n=e
t[e++]=i.Z.LessThan,t[e++]=i.Z.LessThan,t[e++]=i.Z.Newline
for(var r=this.entries(),o=0,a=r.length;o<a;o++){var s=r[o],u=s[0],c=s[1]
e+=u.copyBytesInto(t,e),t[e++]=i.Z.Space,e+=c.copyBytesInto(t,e),t[e++]=i.Z.Newline}return t[e++]=i.Z.GreaterThan,t[e++]=i.Z.GreaterThan,e-n},e.withContext=function(t){return new e(new Map,t)},e.fromMapWithContext=function(t,n){return new e(t,n)},e}(h.Z),b=y,w=new Uint8Array(256)
w[i.Z.LeftParen]=1,w[i.Z.RightParen]=1,w[i.Z.LessThan]=1,w[i.Z.GreaterThan]=1,w[i.Z.LeftSquareBracket]=1,w[i.Z.RightSquareBracket]=1,w[i.Z.LeftCurly]=1,w[i.Z.RightCurly]=1,w[i.Z.ForwardSlash]=1,w[i.Z.Percent]=1
var x=new Uint8Array(256)
x[i.Z.Null]=1,x[i.Z.Tab]=1,x[i.Z.Newline]=1,x[i.Z.FormFeed]=1,x[i.Z.CarriageReturn]=1,x[i.Z.Space]=1
for(var S=new Uint8Array(256),C=0;C<256;C++)S[C]=x[C]||w[C]?1:0
S[i.Z.Hash]=1
var T,E={},k=new Map,A=function(t){function e(e,n){var o=this
if(e!==E)throw new r.Gp("PDFName")
o=t.call(this)||this
for(var a,s="/",c=0,h=n.length;c<h;c++){var l=n[c],f=(0,u.GN)(l)
s+=(a=f)>=i.Z.ExclamationPoint&&a<=i.Z.Tilde&&!S[a]?l:"#"+(0,u.zv)(f)}return o.encodedName=s,o}return(0,o.ZT)(e,t),e.prototype.asBytes=function(){for(var t=[],e="",n=!1,r=function(e){void 0!==e&&t.push(e),n=!1},o=1,a=this.encodedName.length;o<a;o++){var s=this.encodedName[o],c=(0,u.GN)(s),h=this.encodedName[o+1]
n?c>=i.Z.Zero&&c<=i.Z.Nine||c>=i.Z.a&&c<=i.Z.f||c>=i.Z.A&&c<=i.Z.F?2!==(e+=s).length&&(h>="0"&&h<="9"||h>="a"&&h<="f"||h>="A"&&h<="F")||(r(parseInt(e,16)),e=""):r(c):c===i.Z.Hash?n=!0:r(c)}return new Uint8Array(t)},e.prototype.decodeText=function(){var t=this.asBytes()
return String.fromCharCode.apply(String,Array.from(t))},e.prototype.asString=function(){return this.encodedName},e.prototype.value=function(){return this.encodedName},e.prototype.clone=function(){return this},e.prototype.toString=function(){return this.encodedName},e.prototype.sizeInBytes=function(){return this.encodedName.length},e.prototype.copyBytesInto=function(t,e){return e+=(0,u.C1)(this.encodedName,t,e),this.encodedName.length},e.of=function(t){var n=function(t){return t.replace(/#([\dABCDEF]{2})/g,(function(t,e){return(0,u.Dc)(e)}))}(t),r=k.get(n)
return r||(r=new e(E,n),k.set(n,r)),r},e.Length=e.of("Length"),e.FlateDecode=e.of("FlateDecode"),e.Resources=e.of("Resources"),e.Font=e.of("Font"),e.XObject=e.of("XObject"),e.ExtGState=e.of("ExtGState"),e.Contents=e.of("Contents"),e.Type=e.of("Type"),e.Parent=e.of("Parent"),e.MediaBox=e.of("MediaBox"),e.Page=e.of("Page"),e.Annots=e.of("Annots"),e.TrimBox=e.of("TrimBox"),e.ArtBox=e.of("ArtBox"),e.BleedBox=e.of("BleedBox"),e.CropBox=e.of("CropBox"),e.Rotate=e.of("Rotate"),e.Title=e.of("Title"),e.Author=e.of("Author"),e.Subject=e.of("Subject"),e.Creator=e.of("Creator"),e.Keywords=e.of("Keywords"),e.Producer=e.of("Producer"),e.CreationDate=e.of("CreationDate"),e.ModDate=e.of("ModDate"),e}(h.Z),P=A,F=function(t){function e(e){var n=t.call(this)||this
return n.dict=e,n}return(0,o.ZT)(e,t),e.prototype.clone=function(t){throw new r.iQ(this.constructor.name,"clone")},e.prototype.getContentsString=function(){throw new r.iQ(this.constructor.name,"getContentsString")},e.prototype.getContents=function(){throw new r.iQ(this.constructor.name,"getContents")},e.prototype.getContentsSize=function(){throw new r.iQ(this.constructor.name,"getContentsSize")},e.prototype.updateDict=function(){var t=this.getContentsSize()
this.dict.set(P.Length,l.of(t))},e.prototype.sizeInBytes=function(){return this.updateDict(),this.dict.sizeInBytes()+this.getContentsSize()+18},e.prototype.toString=function(){this.updateDict()
var t=this.dict.toString()
return t+="\nstream\n",(t+=this.getContentsString())+"\nendstream"},e.prototype.copyBytesInto=function(t,e){this.updateDict()
var n=e
e+=this.dict.copyBytesInto(t,e),t[e++]=i.Z.Newline,t[e++]=i.Z.s,t[e++]=i.Z.t,t[e++]=i.Z.r,t[e++]=i.Z.e,t[e++]=i.Z.a,t[e++]=i.Z.m,t[e++]=i.Z.Newline
for(var r=this.getContents(),o=0,a=r.length;o<a;o++)t[e++]=r[o]
return t[e++]=i.Z.Newline,t[e++]=i.Z.e,t[e++]=i.Z.n,t[e++]=i.Z.d,t[e++]=i.Z.s,t[e++]=i.Z.t,t[e++]=i.Z.r,t[e++]=i.Z.e,t[e++]=i.Z.a,t[e++]=i.Z.m,e-n},e}(h.Z),R=F,O=function(t){function e(e,n){var r=t.call(this,e)||this
return r.contents=n,r}return(0,o.ZT)(e,t),e.prototype.asUint8Array=function(){return this.contents.slice()},e.prototype.clone=function(t){return e.of(this.dict.clone(t),this.contents.slice())},e.prototype.getContentsString=function(){return(0,u.Qo)(this.contents)},e.prototype.getContents=function(){return this.contents},e.prototype.getContentsSize=function(){return this.contents.length},e.of=function(t,n){return new e(t,n)},e}(R),D={},M=new Map,I=function(t){function e(e,n,i){var o=this
if(e!==D)throw new r.Gp("PDFRef")
return(o=t.call(this)||this).objectNumber=n,o.generationNumber=i,o.tag=n+" "+i+" R",o}return(0,o.ZT)(e,t),e.prototype.clone=function(){return this},e.prototype.toString=function(){return this.tag},e.prototype.sizeInBytes=function(){return this.tag.length},e.prototype.copyBytesInto=function(t,e){return e+=(0,u.C1)(this.tag,t,e),this.tag.length},e.of=function(t,n){void 0===n&&(n=0)
var r=t+" "+n+" R",i=M.get(r)
return i||(i=new e(D,t,n),M.set(r,i)),i},e}(h.Z),N=function(){function t(t,e){this.name=t,this.args=e||[]}return t.prototype.clone=function(e){for(var n=new Array(this.args.length),r=0,i=n.length;r<i;r++){var o=this.args[r]
n[r]=o instanceof h.Z?o.clone(e):o}return t.of(this.name,n)},t.prototype.toString=function(){for(var t="",e=0,n=this.args.length;e<n;e++)t+=String(this.args[e])+" "
return t+this.name},t.prototype.sizeInBytes=function(){for(var t=0,e=0,n=this.args.length;e<n;e++){var r=this.args[e]
t+=(r instanceof h.Z?r.sizeInBytes():r.length)+1}return t+this.name.length},t.prototype.copyBytesInto=function(t,e){for(var n=e,r=0,o=this.args.length;r<o;r++){var a=this.args[r]
a instanceof h.Z?e+=a.copyBytesInto(t,e):e+=(0,u.C1)(a,t,e),t[e++]=i.Z.Space}return(e+=(0,u.C1)(this.name,t,e))-n},t.of=function(e,n){return new t(e,n)},t}(),_=N
!function(t){t.NonStrokingColor="sc",t.NonStrokingColorN="scn",t.NonStrokingColorRgb="rg",t.NonStrokingColorGray="g",t.NonStrokingColorCmyk="k",t.NonStrokingColorspace="cs",t.StrokingColor="SC",t.StrokingColorN="SCN",t.StrokingColorRgb="RG",t.StrokingColorGray="G",t.StrokingColorCmyk="K",t.StrokingColorspace="CS",t.BeginMarkedContentSequence="BDC",t.BeginMarkedContent="BMC",t.EndMarkedContent="EMC",t.MarkedContentPointWithProps="DP",t.MarkedContentPoint="MP",t.DrawObject="Do",t.ConcatTransformationMatrix="cm",t.PopGraphicsState="Q",t.PushGraphicsState="q",t.SetFlatness="i",t.SetGraphicsStateParams="gs",t.SetLineCapStyle="J",t.SetLineDashPattern="d",t.SetLineJoinStyle="j",t.SetLineMiterLimit="M",t.SetLineWidth="w",t.SetTextMatrix="Tm",t.SetRenderingIntent="ri",t.AppendRectangle="re",t.BeginInlineImage="BI",t.BeginInlineImageData="ID",t.EndInlineImage="EI",t.ClipEvenOdd="W*",t.ClipNonZero="W",t.CloseAndStroke="s",t.CloseFillEvenOddAndStroke="b*",t.CloseFillNonZeroAndStroke="b",t.ClosePath="h",t.AppendBezierCurve="c",t.CurveToReplicateFinalPoint="y",t.CurveToReplicateInitialPoint="v",t.EndPath="n",t.FillEvenOddAndStroke="B*",t.FillEvenOdd="f*",t.FillNonZeroAndStroke="B",t.FillNonZero="f",t.LegacyFillNonZero="F",t.LineTo="l",t.MoveTo="m",t.ShadingFill="sh",t.StrokePath="S",t.BeginText="BT",t.EndText="ET",t.MoveText="Td",t.MoveTextSetLeading="TD",t.NextLine="T*",t.SetCharacterSpacing="Tc",t.SetFontAndSize="Tf",t.SetTextHorizontalScaling="Tz",t.SetTextLineHeight="TL",t.SetTextRenderingMode="Tr",t.SetTextRise="Ts",t.SetWordSpacing="Tw",t.ShowText="Tj",t.ShowTextAdjusted="TJ",t.ShowTextLine="'",t.ShowTextLineAndSpace='"',t.Type3D0="d0",t.Type3D1="d1",t.BeginCompatibilitySection="BX",t.EndCompatibilitySection="EX"}(T||(T={}))
var B,L=T,U=function(t){function e(e,n){var r=t.call(this,e)||this
return r.computeContents=function(){var t=r.getUnencodedContents()
return r.encode?s().deflate(t):t},r.encode=n,n&&e.set(P.of("Filter"),P.of("FlateDecode")),r.contentsCache=u.Ct.populatedBy(r.computeContents),r}return(0,o.ZT)(e,t),e.prototype.getContents=function(){return this.contentsCache.access()},e.prototype.getContentsSize=function(){return this.contentsCache.access().length},e.prototype.getUnencodedContents=function(){throw new r.iQ(this.constructor.name,"getUnencodedContents")},e}(R),j=function(t){function e(e,n,r){void 0===r&&(r=!0)
var i=t.call(this,e,r)||this
return i.operators=n,i}return(0,o.ZT)(e,t),e.prototype.push=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];(t=this.operators).push.apply(t,e)},e.prototype.clone=function(t){for(var n=new Array(this.operators.length),r=0,i=this.operators.length;r<i;r++)n[r]=this.operators[r].clone(t)
var o=this.dict,a=this.encode
return e.of(o.clone(t),n,a)},e.prototype.getContentsString=function(){for(var t="",e=0,n=this.operators.length;e<n;e++)t+=this.operators[e]+"\n"
return t},e.prototype.getUnencodedContents=function(){for(var t=new Uint8Array(this.getUnencodedContentsSize()),e=0,n=0,r=this.operators.length;n<r;n++)e+=this.operators[n].copyBytesInto(t,e),t[e++]=i.Z.Newline
return t},e.prototype.getUnencodedContentsSize=function(){for(var t=0,e=0,n=this.operators.length;e<n;e++)t+=this.operators[e].sizeInBytes()+1
return t},e.of=function(t,n,r){return void 0===r&&(r=!0),new e(t,n,r)},e}(U),G=j,z=function(t,e){var n=t[0],r=e[0]
return n.objectNumber-r.objectNumber},H=function(){function t(){this.largestObjectNumber=0,this.header=c.forVersion(1,7),this.trailerInfo={},this.indirectObjects=new Map}return t.prototype.assign=function(t,e){this.indirectObjects.set(t,e),t.objectNumber>this.largestObjectNumber&&(this.largestObjectNumber=t.objectNumber)},t.prototype.nextRef=function(){return this.largestObjectNumber+=1,I.of(this.largestObjectNumber)},t.prototype.register=function(t){var e=this.nextRef()
return this.assign(e,t),e},t.prototype.delete=function(t){return this.indirectObjects.delete(t)},t.prototype.lookupMaybe=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
var i=e.includes(m),o=t instanceof I?this.indirectObjects.get(t):t
if(o&&(o!==m||i)){for(var a=0,s=e.length;a<s;a++){var u=e[a]
if(u===m){if(o===m)return o}else if(o instanceof u)return o}throw new r.VX(e,o)}},t.prototype.lookup=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
var i=t instanceof I?this.indirectObjects.get(t):t
if(0===e.length)return i
for(var o=0,a=e.length;o<a;o++){var s=e[o]
if(s===m){if(i===m)return i}else if(i instanceof s)return i}throw new r.VX(e,i)},t.prototype.getObjectRef=function(t){for(var e=Array.from(this.indirectObjects.entries()),n=0,r=e.length;n<r;n++){var i=e[n],o=i[0]
if(i[1]===t)return o}},t.prototype.enumerateIndirectObjects=function(){return Array.from(this.indirectObjects.entries()).sort(z)},t.prototype.obj=function(t){if(t instanceof h.Z)return t
if(null==t)return m
if("string"==typeof t)return P.of(t)
if("number"==typeof t)return l.of(t)
if("boolean"==typeof t)return t?g.True:g.False
if(Array.isArray(t)){for(var e=d.withContext(this),n=0,r=t.length;n<r;n++)e.push(this.obj(t[n]))
return e}var i=b.withContext(this),o=Object.keys(t)
for(n=0,r=o.length;n<r;n++){var a=o[n],s=t[a]
void 0!==s&&i.set(P.of(a),this.obj(s))}return i},t.prototype.stream=function(t,e){return void 0===e&&(e={}),O.of(this.obj(e),(0,u.b3)(t))},t.prototype.flateStream=function(t,e){return void 0===e&&(e={}),this.stream(s().deflate((0,u.b3)(t)),(0,o.pi)((0,o.pi)({},e),{Filter:"FlateDecode"}))},t.prototype.contentStream=function(t,e){return void 0===e&&(e={}),G.of(this.obj(e),t)},t.prototype.formXObject=function(t,e){return void 0===e&&(e={}),this.contentStream(t,(0,o.pi)((0,o.pi)({BBox:this.obj([0,0,0,0]),Matrix:this.obj([1,0,0,1,0,0])},e),{Type:"XObject",Subtype:"Form"}))},t.prototype.getPushGraphicsStateContentStream=function(){if(this.pushGraphicsStateContentStreamRef)return this.pushGraphicsStateContentStreamRef
var t=this.obj({}),e=_.of(L.PushGraphicsState),n=G.of(t,[e])
return this.pushGraphicsStateContentStreamRef=this.register(n),this.pushGraphicsStateContentStreamRef},t.prototype.getPopGraphicsStateContentStream=function(){if(this.popGraphicsStateContentStreamRef)return this.popGraphicsStateContentStreamRef
var t=this.obj({}),e=_.of(L.PopGraphicsState),n=G.of(t,[e])
return this.popGraphicsStateContentStreamRef=this.register(n),this.popGraphicsStateContentStreamRef},t.create=function(){return new t},t}(),V=H,Z=function(t){function e(e,n,r){void 0===r&&(r=!0)
var i=t.call(this,e,n)||this
return i.normalized=!1,i.autoNormalizeCTM=r,i}return(0,o.ZT)(e,t),e.prototype.clone=function(t){for(var n=e.fromMapWithContext(new Map,t||this.context,this.autoNormalizeCTM),r=this.entries(),i=0,o=r.length;i<o;i++){var a=r[i],s=a[0],u=a[1]
n.set(s,u)}return n},e.prototype.Parent=function(){return this.lookupMaybe(P.Parent,b)},e.prototype.Contents=function(){return this.lookup(P.of("Contents"))},e.prototype.Annots=function(){return this.lookupMaybe(P.Annots,d)},e.prototype.BleedBox=function(){return this.lookupMaybe(P.BleedBox,d)},e.prototype.TrimBox=function(){return this.lookupMaybe(P.TrimBox,d)},e.prototype.ArtBox=function(){return this.lookupMaybe(P.ArtBox,d)},e.prototype.Resources=function(){var t=this.getInheritableAttribute(P.Resources)
return this.context.lookupMaybe(t,b)},e.prototype.MediaBox=function(){var t=this.getInheritableAttribute(P.MediaBox)
return this.context.lookup(t,d)},e.prototype.CropBox=function(){var t=this.getInheritableAttribute(P.CropBox)
return this.context.lookupMaybe(t,d)},e.prototype.Rotate=function(){var t=this.getInheritableAttribute(P.Rotate)
return this.context.lookupMaybe(t,l)},e.prototype.getInheritableAttribute=function(t){var e
return this.ascend((function(n){e||(e=n.get(t))})),e},e.prototype.setParent=function(t){this.set(P.Parent,t)},e.prototype.addContentStream=function(t){var e=this.normalizedEntries().Contents||this.context.obj([])
this.set(P.Contents,e),e.push(t)},e.prototype.wrapContentStreams=function(t,e){var n=this.Contents()
return n instanceof d&&(n.insert(0,t),n.push(e),!0)},e.prototype.addAnnot=function(t){this.normalizedEntries().Annots.push(t)},e.prototype.removeAnnot=function(t){var e=this.normalizedEntries().Annots,n=e.indexOf(t)
void 0!==n&&e.remove(n)},e.prototype.setFontDictionary=function(t,e){this.normalizedEntries().Font.set(t,e)},e.prototype.setXObject=function(t,e){this.normalizedEntries().XObject.set(t,e)},e.prototype.setExtGState=function(t,e){this.normalizedEntries().ExtGState.set(t,e)},e.prototype.ascend=function(t){t(this)
var e=this.Parent()
e&&e.ascend(t)},e.prototype.normalize=function(){if(!this.normalized){var t=this.context,e=this.get(P.Contents)
this.context.lookup(e)instanceof R&&this.set(P.Contents,t.obj([e])),this.autoNormalizeCTM&&this.wrapContentStreams(this.context.getPushGraphicsStateContentStream(),this.context.getPopGraphicsStateContentStream())
var n=this.getInheritableAttribute(P.Resources),r=t.lookupMaybe(n,b)||t.obj({})
this.set(P.Resources,r)
var i=r.lookupMaybe(P.Font,b)||t.obj({})
r.set(P.Font,i)
var o=r.lookupMaybe(P.XObject,b)||t.obj({})
r.set(P.XObject,o)
var a=r.lookupMaybe(P.ExtGState,b)||t.obj({})
r.set(P.ExtGState,a)
var s=this.Annots()||t.obj([])
this.set(P.Annots,s),this.normalized=!0}},e.prototype.normalizedEntries=function(){this.normalize()
var t=this.Annots(),e=this.Resources()
return{Annots:t,Resources:e,Contents:this.Contents(),Font:e.lookup(P.Font,b),XObject:e.lookup(P.XObject,b),ExtGState:e.lookup(P.ExtGState,b)}},e.InheritableEntries=["Resources","MediaBox","CropBox","Rotate"],e.withContextAndParent=function(t,n){var r=new Map
return r.set(P.Type,P.Page),r.set(P.Parent,n),r.set(P.Resources,t.obj({})),r.set(P.MediaBox,t.obj([0,0,612,792])),new e(r,t,!1)},e.fromMapWithContext=function(t,n,r){return void 0===r&&(r=!0),new e(t,n,r)},e}(b),W=Z,q=function(){function t(t,e){var n=this
this.traversedObjects=new Map,this.copy=function(t){return t instanceof W?n.copyPDFPage(t):t instanceof b?n.copyPDFDict(t):t instanceof d?n.copyPDFArray(t):t instanceof R?n.copyPDFStream(t):t instanceof I?n.copyPDFIndirectObject(t):t.clone()},this.copyPDFPage=function(t){for(var e=t.clone(),r=W.InheritableEntries,i=0,o=r.length;i<o;i++){var a=P.of(r[i]),s=e.getInheritableAttribute(a)
!e.get(a)&&s&&e.set(a,s)}return e.delete(P.of("Parent")),n.copyPDFDict(e)},this.copyPDFDict=function(t){if(n.traversedObjects.has(t))return n.traversedObjects.get(t)
var e=t.clone(n.dest)
n.traversedObjects.set(t,e)
for(var r=t.entries(),i=0,o=r.length;i<o;i++){var a=r[i],s=a[0],u=a[1]
e.set(s,n.copy(u))}return e},this.copyPDFArray=function(t){if(n.traversedObjects.has(t))return n.traversedObjects.get(t)
var e=t.clone(n.dest)
n.traversedObjects.set(t,e)
for(var r=0,i=t.size();r<i;r++){var o=t.get(r)
e.set(r,n.copy(o))}return e},this.copyPDFStream=function(t){if(n.traversedObjects.has(t))return n.traversedObjects.get(t)
var e=t.clone(n.dest)
n.traversedObjects.set(t,e)
for(var r=t.dict.entries(),i=0,o=r.length;i<o;i++){var a=r[i],s=a[0],u=a[1]
e.dict.set(s,n.copy(u))}return e},this.copyPDFIndirectObject=function(t){if(!n.traversedObjects.has(t)){var e=n.dest.nextRef()
n.traversedObjects.set(t,e)
var r=n.src.lookup(t)
if(r){var i=n.copy(r)
n.dest.assign(e,i)}}return n.traversedObjects.get(t)},this.src=t,this.dest=e}return t.for=function(e,n){return new t(e,n)},t}(),K=q,X=function(){function t(t){this.subsections=t?[[t]]:[],this.chunkIdx=0,this.chunkLength=t?1:0}return t.prototype.addEntry=function(t,e){this.append({ref:t,offset:e,deleted:!1})},t.prototype.addDeletedEntry=function(t,e){this.append({ref:t,offset:e,deleted:!0})},t.prototype.toString=function(){for(var t="xref\n",e=0,n=this.subsections.length;e<n;e++){var r=this.subsections[e]
t+=r[0].ref.objectNumber+" "+r.length+"\n"
for(var i=0,o=r.length;i<o;i++){var a=r[i]
t+=(0,u.Sk)(String(a.offset),10,"0"),t+=" ",t+=(0,u.Sk)(String(a.ref.generationNumber),5,"0"),t+=" ",t+=a.deleted?"f":"n",t+=" \n"}}return t},t.prototype.sizeInBytes=function(){for(var t=5,e=0,n=this.subsections.length;e<n;e++){var r=this.subsections[e],i=r.length,o=r[0]
t+=2,t+=String(o.ref.objectNumber).length,t+=String(i).length,t+=20*i}return t},t.prototype.copyBytesInto=function(t,e){var n=e
return t[e++]=i.Z.x,t[e++]=i.Z.r,t[e++]=i.Z.e,t[e++]=i.Z.f,t[e++]=i.Z.Newline,(e+=this.copySubsectionsIntoBuffer(this.subsections,t,e))-n},t.prototype.copySubsectionsIntoBuffer=function(t,e,n){for(var r=n,o=t.length,a=0;a<o;a++){var s=this.subsections[a],c=String(s[0].ref.objectNumber)
n+=(0,u.C1)(c,e,n),e[n++]=i.Z.Space
var h=String(s.length)
n+=(0,u.C1)(h,e,n),e[n++]=i.Z.Newline,n+=this.copyEntriesIntoBuffer(s,e,n)}return n-r},t.prototype.copyEntriesIntoBuffer=function(t,e,n){for(var r=t.length,o=0;o<r;o++){var a=t[o],s=(0,u.Sk)(String(a.offset),10,"0")
n+=(0,u.C1)(s,e,n),e[n++]=i.Z.Space
var c=(0,u.Sk)(String(a.ref.generationNumber),5,"0")
n+=(0,u.C1)(c,e,n),e[n++]=i.Z.Space,e[n++]=a.deleted?i.Z.f:i.Z.n,e[n++]=i.Z.Space,e[n++]=i.Z.Newline}return 20*r},t.prototype.append=function(t){if(0===this.chunkLength)return this.subsections.push([t]),this.chunkIdx=0,void(this.chunkLength=1)
var e=this.subsections[this.chunkIdx],n=e[this.chunkLength-1]
t.ref.objectNumber-n.ref.objectNumber>1?(this.subsections.push([t]),this.chunkIdx+=1,this.chunkLength=1):(e.push(t),this.chunkLength+=1)},t.create=function(){return new t({ref:I.of(0,65535),offset:0,deleted:!0})},t.createEmpty=function(){return new t},t}(),Y=X,J=function(){function t(t){this.lastXRefOffset=String(t)}return t.prototype.toString=function(){return"startxref\n"+this.lastXRefOffset+"\n%%EOF"},t.prototype.sizeInBytes=function(){return 16+this.lastXRefOffset.length},t.prototype.copyBytesInto=function(t,e){var n=e
return t[e++]=i.Z.s,t[e++]=i.Z.t,t[e++]=i.Z.a,t[e++]=i.Z.r,t[e++]=i.Z.t,t[e++]=i.Z.x,t[e++]=i.Z.r,t[e++]=i.Z.e,t[e++]=i.Z.f,t[e++]=i.Z.Newline,e+=(0,u.C1)(this.lastXRefOffset,t,e),t[e++]=i.Z.Newline,t[e++]=i.Z.Percent,t[e++]=i.Z.Percent,t[e++]=i.Z.E,t[e++]=i.Z.O,t[e++]=i.Z.F,e-n},t.forLastCrossRefSectionOffset=function(e){return new t(e)},t}(),Q=function(){function t(t){this.dict=t}return t.prototype.toString=function(){return"trailer\n"+this.dict.toString()},t.prototype.sizeInBytes=function(){return 8+this.dict.sizeInBytes()},t.prototype.copyBytesInto=function(t,e){var n=e
return t[e++]=i.Z.t,t[e++]=i.Z.r,t[e++]=i.Z.a,t[e++]=i.Z.i,t[e++]=i.Z.l,t[e++]=i.Z.e,t[e++]=i.Z.r,t[e++]=i.Z.Newline,(e+=this.dict.copyBytesInto(t,e))-n},t.of=function(e){return new t(e)},t}(),$=function(t){function e(e,n,r){void 0===r&&(r=!0)
var i=t.call(this,e.obj({}),r)||this
return i.objects=n,i.offsets=i.computeObjectOffsets(),i.offsetsString=i.computeOffsetsString(),i.dict.set(P.of("Type"),P.of("ObjStm")),i.dict.set(P.of("N"),l.of(i.objects.length)),i.dict.set(P.of("First"),l.of(i.offsetsString.length)),i}return(0,o.ZT)(e,t),e.prototype.getObjectsCount=function(){return this.objects.length},e.prototype.clone=function(t){return e.withContextAndObjects(t||this.dict.context,this.objects.slice(),this.encode)},e.prototype.getContentsString=function(){for(var t=this.offsetsString,e=0,n=this.objects.length;e<n;e++)t+=this.objects[e][1]+"\n"
return t},e.prototype.getUnencodedContents=function(){for(var t=new Uint8Array(this.getUnencodedContentsSize()),e=(0,u.C1)(this.offsetsString,t,0),n=0,r=this.objects.length;n<r;n++)e+=this.objects[n][1].copyBytesInto(t,e),t[e++]=i.Z.Newline
return t},e.prototype.getUnencodedContentsSize=function(){return this.offsetsString.length+(0,u.Z$)(this.offsets)[1]+(0,u.Z$)(this.objects)[1].sizeInBytes()+1},e.prototype.computeOffsetsString=function(){for(var t="",e=0,n=this.offsets.length;e<n;e++){var r=this.offsets[e]
t+=r[0]+" "+r[1]+" "}return t},e.prototype.computeObjectOffsets=function(){for(var t=0,e=new Array(this.objects.length),n=0,r=this.objects.length;n<r;n++){var i=this.objects[n],o=i[0],a=i[1]
e[n]=[o.objectNumber,t],t+=a.sizeInBytes()+1}return e},e.withContextAndObjects=function(t,n,r){return void 0===r&&(r=!0),new e(t,n,r)},e}(U),tt=$,et=function(){function t(t,e){var n=this
this.parsedObjects=0,this.shouldWaitForTick=function(t){return n.parsedObjects+=t,n.parsedObjects%n.objectsPerTick==0},this.context=t,this.objectsPerTick=e}return t.prototype.serializeToBuffer=function(){return(0,o.mG)(this,void 0,void 0,(function(){var t,e,n,r,a,s,c,h,l,f,d,p,g,v,m,y,b
return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return[4,this.computeBufferSize()]
case 1:t=o.sent(),e=t.size,n=t.header,r=t.indirectObjects,a=t.xref,s=t.trailerDict,c=t.trailer,h=0,l=new Uint8Array(e),h+=n.copyBytesInto(l,h),l[h++]=i.Z.Newline,l[h++]=i.Z.Newline,f=0,d=r.length,o.label=2
case 2:return f<d?(p=r[f],g=p[0],v=p[1],m=String(g.objectNumber),h+=(0,u.C1)(m,l,h),l[h++]=i.Z.Space,y=String(g.generationNumber),h+=(0,u.C1)(y,l,h),l[h++]=i.Z.Space,l[h++]=i.Z.o,l[h++]=i.Z.b,l[h++]=i.Z.j,l[h++]=i.Z.Newline,h+=v.copyBytesInto(l,h),l[h++]=i.Z.Newline,l[h++]=i.Z.e,l[h++]=i.Z.n,l[h++]=i.Z.d,l[h++]=i.Z.o,l[h++]=i.Z.b,l[h++]=i.Z.j,l[h++]=i.Z.Newline,l[h++]=i.Z.Newline,b=v instanceof tt?v.getObjectsCount():1,this.shouldWaitForTick(b)?[4,(0,u.uj)()]:[3,4]):[3,5]
case 3:o.sent(),o.label=4
case 4:return f++,[3,2]
case 5:return a&&(h+=a.copyBytesInto(l,h),l[h++]=i.Z.Newline),s&&(h+=s.copyBytesInto(l,h),l[h++]=i.Z.Newline,l[h++]=i.Z.Newline),h+=c.copyBytesInto(l,h),[2,l]}}))}))},t.prototype.computeIndirectObjectSize=function(t){var e=t[0],n=t[1]
return e.sizeInBytes()+3+(n.sizeInBytes()+9)},t.prototype.createTrailerDict=function(){return this.context.obj({Size:this.context.largestObjectNumber+1,Root:this.context.trailerInfo.Root,Encrypt:this.context.trailerInfo.Encrypt,Info:this.context.trailerInfo.Info,ID:this.context.trailerInfo.ID})},t.prototype.computeBufferSize=function(){return(0,o.mG)(this,void 0,void 0,(function(){var t,e,n,r,i,a,s,h,l,f,d
return(0,o.Jh)(this,(function(o){switch(o.label){case 0:t=c.forVersion(1,7),e=t.sizeInBytes()+2,n=Y.create(),r=this.context.enumerateIndirectObjects(),i=0,a=r.length,o.label=1
case 1:return i<a?(s=r[i],h=s[0],n.addEntry(h,e),e+=this.computeIndirectObjectSize(s),this.shouldWaitForTick(1)?[4,(0,u.uj)()]:[3,3]):[3,4]
case 2:o.sent(),o.label=3
case 3:return i++,[3,1]
case 4:return l=e,e+=n.sizeInBytes()+1,f=Q.of(this.createTrailerDict()),e+=f.sizeInBytes()+2,d=J.forLastCrossRefSectionOffset(l),[2,{size:e+=d.sizeInBytes(),header:t,indirectObjects:r,xref:n,trailerDict:f,trailer:d}]}}))}))},t.forContext=function(e,n){return new t(e,n)},t}(),nt=et,rt=function(t){function e(e){var n=t.call(this)||this
return n.data=e,n}return(0,o.ZT)(e,t),e.prototype.clone=function(){return e.of(this.data.slice())},e.prototype.toString=function(){return"PDFInvalidObject("+this.data.length+" bytes)"},e.prototype.sizeInBytes=function(){return this.data.length},e.prototype.copyBytesInto=function(t,e){for(var n=this.data.length,r=0;r<n;r++)t[e++]=this.data[r]
return n},e.of=function(t){return new e(t)},e}(h.Z),it=rt
!function(t){t[t.Deleted=0]="Deleted",t[t.Uncompressed=1]="Uncompressed",t[t.Compressed=2]="Compressed"}(B||(B={}))
var ot,at=function(t){function e(e,n,r){void 0===r&&(r=!0)
var i=t.call(this,e,r)||this
return i.computeIndex=function(){for(var t=[],e=0,n=0,r=i.entries.length;n<r;n++){var o=i.entries[n],a=i.entries[n-1]
0===n?t.push(o.ref.objectNumber):o.ref.objectNumber-a.ref.objectNumber>1&&(t.push(e),t.push(o.ref.objectNumber),e=0),e+=1}return t.push(e),t},i.computeEntryTuples=function(){for(var t=new Array(i.entries.length),e=0,n=i.entries.length;e<n;e++){var r=i.entries[e]
if(r.type===B.Deleted){var o=r.type,a=r.nextFreeObjectNumber,s=r.ref
t[e]=[o,a,s.generationNumber]}if(r.type===B.Uncompressed){o=r.type
var u=r.offset
s=r.ref,t[e]=[o,u,s.generationNumber]}if(r.type===B.Compressed){o=r.type
var c=r.objectStreamRef,h=r.index
t[e]=[o,c.objectNumber,h]}}return t},i.computeMaxEntryByteWidths=function(){for(var t=i.entryTuplesCache.access(),e=[0,0,0],n=0,r=t.length;n<r;n++){var o=t[n],a=o[0],s=o[1],c=o[2],h=(0,u.yJ)(a),l=(0,u.yJ)(s),f=(0,u.yJ)(c)
h>e[0]&&(e[0]=h),l>e[1]&&(e[1]=l),f>e[2]&&(e[2]=f)}return e},i.entries=n||[],i.entryTuplesCache=u.Ct.populatedBy(i.computeEntryTuples),i.maxByteWidthsCache=u.Ct.populatedBy(i.computeMaxEntryByteWidths),i.indexCache=u.Ct.populatedBy(i.computeIndex),e.set(P.of("Type"),P.of("XRef")),i}return(0,o.ZT)(e,t),e.prototype.addDeletedEntry=function(t,e){var n=B.Deleted
this.entries.push({type:n,ref:t,nextFreeObjectNumber:e}),this.entryTuplesCache.invalidate(),this.maxByteWidthsCache.invalidate(),this.indexCache.invalidate(),this.contentsCache.invalidate()},e.prototype.addUncompressedEntry=function(t,e){var n=B.Uncompressed
this.entries.push({type:n,ref:t,offset:e}),this.entryTuplesCache.invalidate(),this.maxByteWidthsCache.invalidate(),this.indexCache.invalidate(),this.contentsCache.invalidate()},e.prototype.addCompressedEntry=function(t,e,n){var r=B.Compressed
this.entries.push({type:r,ref:t,objectStreamRef:e,index:n}),this.entryTuplesCache.invalidate(),this.maxByteWidthsCache.invalidate(),this.indexCache.invalidate(),this.contentsCache.invalidate()},e.prototype.clone=function(t){var n=this,r=n.dict,i=n.entries,o=n.encode
return e.of(r.clone(t),i.slice(),o)},e.prototype.getContentsString=function(){for(var t=this.entryTuplesCache.access(),e=this.maxByteWidthsCache.access(),n="",r=0,i=t.length;r<i;r++){for(var o=t[r],a=o[0],s=o[1],c=o[2],h=(0,u.GP)((0,u.DV)(a)),l=(0,u.GP)((0,u.DV)(s)),f=(0,u.GP)((0,u.DV)(c)),d=e[0]-1;d>=0;d--)n+=(h[d]||0).toString(2)
for(d=e[1]-1;d>=0;d--)n+=(l[d]||0).toString(2)
for(d=e[2]-1;d>=0;d--)n+=(f[d]||0).toString(2)}return n},e.prototype.getUnencodedContents=function(){for(var t=this.entryTuplesCache.access(),e=this.maxByteWidthsCache.access(),n=new Uint8Array(this.getUnencodedContentsSize()),r=0,i=0,o=t.length;i<o;i++){for(var a=t[i],s=a[0],c=a[1],h=a[2],l=(0,u.GP)((0,u.DV)(s)),f=(0,u.GP)((0,u.DV)(c)),d=(0,u.GP)((0,u.DV)(h)),p=e[0]-1;p>=0;p--)n[r++]=l[p]||0
for(p=e[1]-1;p>=0;p--)n[r++]=f[p]||0
for(p=e[2]-1;p>=0;p--)n[r++]=d[p]||0}return n},e.prototype.getUnencodedContentsSize=function(){var t=this.maxByteWidthsCache.access()
return(0,u.Sm)(t)*this.entries.length},e.prototype.updateDict=function(){t.prototype.updateDict.call(this)
var e=this.maxByteWidthsCache.access(),n=this.indexCache.access(),r=this.dict.context
this.dict.set(P.of("W"),r.obj(e)),this.dict.set(P.of("Index"),r.obj(n))},e.create=function(t,n){void 0===n&&(n=!0)
var r=new e(t,[],n)
return r.addDeletedEntry(I.of(0,65535),0),r},e.of=function(t,n,r){return void 0===r&&(r=!0),new e(t,n,r)},e}(U),st=at,ut=function(t){function e(e,n,r,i){var o=t.call(this,e,n)||this
return o.encodeStreams=r,o.objectsPerStream=i,o}return(0,o.ZT)(e,t),e.prototype.computeBufferSize=function(){return(0,o.mG)(this,void 0,void 0,(function(){var t,e,n,r,i,a,s,h,f,d,p,g,v,m,y,b,w,x,S
return(0,o.Jh)(this,(function(o){switch(o.label){case 0:t=this.context.largestObjectNumber+1,e=c.forVersion(1,7),n=e.sizeInBytes()+2,r=st.create(this.createTrailerDict(),this.encodeStreams),i=[],a=[],s=[],h=this.context.enumerateIndirectObjects(),g=0,v=h.length,o.label=1
case 1:return g<v?(f=h[g],y=f[0],d=f[1],y===this.context.trailerInfo.Encrypt||d instanceof R||d instanceof it||0!==y.generationNumber?(i.push(f),r.addUncompressedEntry(y,n),n+=this.computeIndirectObjectSize(f),this.shouldWaitForTick(1)?[4,(0,u.uj)()]:[3,3]):[3,4]):[3,6]
case 2:o.sent(),o.label=3
case 3:return[3,5]
case 4:m=(0,u.Z$)(a),p=(0,u.Z$)(s),m&&m.length%this.objectsPerStream!=0||(m=[],a.push(m),p=I.of(t++),s.push(p)),r.addCompressedEntry(y,p,m.length),m.push(f),o.label=5
case 5:return g++,[3,1]
case 6:g=0,v=a.length,o.label=7
case 7:return g<v?(m=a[g],y=s[g],b=tt.withContextAndObjects(this.context,m,this.encodeStreams),r.addUncompressedEntry(y,n),n+=this.computeIndirectObjectSize([y,b]),i.push([y,b]),this.shouldWaitForTick(m.length)?[4,(0,u.uj)()]:[3,9]):[3,10]
case 8:o.sent(),o.label=9
case 9:return g++,[3,7]
case 10:return w=I.of(t++),r.dict.set(P.of("Size"),l.of(t)),r.addUncompressedEntry(w,n),x=n,n+=this.computeIndirectObjectSize([w,r]),i.push([w,r]),S=J.forLastCrossRefSectionOffset(x),[2,{size:n+=S.sizeInBytes(),header:e,indirectObjects:i,trailer:S}]}}))}))},e.forContext=function(t,n,r,i){return void 0===r&&(r=!0),void 0===i&&(i=50),new e(t,n,r,i)},e}(nt),ct=ut,ht=n(27),lt=n(6887),ft=function(){function t(t,e){this.encoding=t===ht.S4.ZapfDingbats?ht.e$.ZapfDingbats:t===ht.S4.Symbol?ht.e$.Symbol:ht.e$.WinAnsi,this.font=ht.Zx.load(t),this.fontName=this.font.FontName,this.customName=e}return t.prototype.encodeText=function(t){for(var e=this.encodeTextAsGlyphs(t),n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=(0,u.zv)(e[r].code)
return lt.Z.of(n.join(""))},t.prototype.widthOfTextAtSize=function(t,e){for(var n=this.encodeTextAsGlyphs(t),r=0,i=0,o=n.length;i<o;i++){var a=n[i].name,s=(n[i+1]||{}).name,u=this.font.getXAxisKerningForPair(a,s)||0
r+=this.widthOfGlyph(a)+u}return r*(e/1e3)},t.prototype.heightOfFontAtSize=function(t,e){void 0===e&&(e={})
var n=e.descender,r=void 0===n||n,i=this.font,o=i.Ascender,a=i.Descender,s=i.FontBBox,u=(o||s[3])-(a||s[1])
return r||(u+=a||0),u/1e3*t},t.prototype.sizeOfFontAtHeight=function(t){var e=this.font,n=e.Ascender,r=e.Descender,i=e.FontBBox
return 1e3*t/((n||i[3])-(r||i[1]))},t.prototype.embedIntoContext=function(t,e){var n=t.obj({Type:"Font",Subtype:"Type1",BaseFont:this.customName||this.fontName,Encoding:this.encoding===ht.e$.WinAnsi?"WinAnsiEncoding":void 0})
return e?(t.assign(e,n),e):t.register(n)},t.prototype.widthOfGlyph=function(t){return this.font.getWidthOfGlyph(t)||250},t.prototype.encodeTextAsGlyphs=function(t){for(var e=Array.from(t),n=new Array(e.length),r=0,i=e.length;r<i;r++){var o=(0,u.yq)(e[r])
n[r]=this.encoding.encodeUnicodeCodePoint(o)}return n},t.for=function(e,n){return new t(e,n)},t}(),dt=ft,pt=n(467),gt=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
return"<"+t.join("")+">"},vt=function(t){return(0,u.CK)(t,4)},mt=function(t){if((0,pt.yo)(t))return vt(t)
if((0,pt.pY)(t)){var e=(0,pt.D1)(t),n=(0,pt.$O)(t)
return""+vt(e)+vt(n)}var r=(0,u.zv)(t)
throw new Error("0x"+r+" is not a valid UTF-8 or UTF-16 codepoint.")},yt=n(4521),bt=function(){function t(t,e,n,r){var i=this
this.allGlyphsInFontSortedById=function(){for(var t=new Array(i.font.characterSet.length),e=0,n=t.length;e<n;e++){var r=i.font.characterSet[e]
t[e]=i.font.glyphForCodePoint(r)}return(0,u.PF)(t.sort(u.Yj),(function(t){return t.id}))},this.font=t,this.scale=1e3/this.font.unitsPerEm,this.fontData=e,this.fontName=this.font.postscriptName||"Font",this.customName=n,this.fontFeatures=r,this.baseFontName="",this.glyphCache=u.Ct.populatedBy(this.allGlyphsInFontSortedById)}return t.for=function(e,n,r,i){return(0,o.mG)(this,void 0,void 0,(function(){return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return[4,e.create(n)]
case 1:return[2,new t(o.sent(),n,r,i)]}}))}))},t.prototype.encodeText=function(t){for(var e=this.font.layout(t,this.fontFeatures).glyphs,n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=(0,u.CK)(e[r].id,4)
return lt.Z.of(n.join(""))},t.prototype.widthOfTextAtSize=function(t,e){for(var n=this.font.layout(t,this.fontFeatures).glyphs,r=0,i=0,o=n.length;i<o;i++)r+=n[i].advanceWidth*this.scale
return r*(e/1e3)},t.prototype.heightOfFontAtSize=function(t,e){void 0===e&&(e={})
var n=e.descender,r=void 0===n||n,i=this.font,o=i.ascent,a=i.descent,s=i.bbox,u=(o||s.maxY)*this.scale-(a||s.minY)*this.scale
return r||(u-=Math.abs(a)||0),u/1e3*t},t.prototype.sizeOfFontAtHeight=function(t){var e=this.font,n=e.ascent,r=e.descent,i=e.bbox
return 1e3*t/((n||i.maxY)*this.scale-(r||i.minY)*this.scale)},t.prototype.embedIntoContext=function(t,e){return this.baseFontName=this.customName||(0,u.si)(this.fontName),this.embedFontDict(t,e)},t.prototype.embedFontDict=function(t,e){return(0,o.mG)(this,void 0,void 0,(function(){var n,r,i
return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return[4,this.embedCIDFontDict(t)]
case 1:return n=o.sent(),r=this.embedUnicodeCmap(t),i=t.obj({Type:"Font",Subtype:"Type0",BaseFont:this.baseFontName,Encoding:"Identity-H",DescendantFonts:[n],ToUnicode:r}),e?(t.assign(e,i),[2,e]):[2,t.register(i)]}}))}))},t.prototype.isCFF=function(){return this.font.cff},t.prototype.embedCIDFontDict=function(t){return(0,o.mG)(this,void 0,void 0,(function(){var e,n
return(0,o.Jh)(this,(function(r){switch(r.label){case 0:return[4,this.embedFontDescriptor(t)]
case 1:return e=r.sent(),n=t.obj({Type:"Font",Subtype:this.isCFF()?"CIDFontType0":"CIDFontType2",CIDToGIDMap:"Identity",BaseFont:this.baseFontName,CIDSystemInfo:{Registry:yt.Z.of("Adobe"),Ordering:yt.Z.of("Identity"),Supplement:0},FontDescriptor:e,W:this.computeWidths()}),[2,t.register(n)]}}))}))},t.prototype.embedFontDescriptor=function(t){return(0,o.mG)(this,void 0,void 0,(function(){var e,n,r,i,a,s,u,c,h,l,f,d,p,g,v
return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return[4,this.embedFontStream(t)]
case 1:return e=o.sent(),n=this.scale,r=this.font,i=r.italicAngle,a=r.ascent,s=r.descent,u=r.capHeight,c=r.xHeight,h=this.font.bbox,l=h.minX,f=h.minY,d=h.maxX,p=h.maxY,g=t.obj(((v={Type:"FontDescriptor",FontName:this.baseFontName,Flags:(w=this.font,x=w["OS/2"]?w["OS/2"].sFamilyClass:0,m={fixedPitch:w.post.isFixedPitch,serif:1<=x&&x<=7,symbolic:!0,script:10===x,italic:w.head.macStyle.italic},y=0,b=function(t){y|=1<<t-1},m.fixedPitch&&b(1),m.serif&&b(2),m.symbolic&&b(3),m.script&&b(4),m.nonsymbolic&&b(6),m.italic&&b(7),m.allCap&&b(17),m.smallCap&&b(18),m.forceBold&&b(19),y),FontBBox:[l*n,f*n,d*n,p*n],ItalicAngle:i,Ascent:a*n,Descent:s*n,CapHeight:(u||a)*n,XHeight:(c||0)*n,StemV:0})[this.isCFF()?"FontFile3":"FontFile2"]=e,v)),[2,t.register(g)]}var m,y,b,w,x}))}))},t.prototype.serializeFont=function(){return(0,o.mG)(this,void 0,void 0,(function(){return(0,o.Jh)(this,(function(t){return[2,this.fontData]}))}))},t.prototype.embedFontStream=function(t){return(0,o.mG)(this,void 0,void 0,(function(){var e,n,r
return(0,o.Jh)(this,(function(i){switch(i.label){case 0:return r=(n=t).flateStream,[4,this.serializeFont()]
case 1:return e=r.apply(n,[i.sent(),{Subtype:this.isCFF()?"CIDFontType0C":void 0}]),[2,t.register(e)]}}))}))},t.prototype.embedUnicodeCmap=function(t){var e=function(t,e){for(var n=new Array(t.length),r=0,i=t.length;r<i;r++){var o=t[r],a=gt(vt(e(o))),s=gt.apply(void 0,o.codePoints.map(mt))
n[r]=[a,s]}return function(t){return"/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange\n"+t.length+" beginbfchar\n"+t.map((function(t){return t[0]+" "+t[1]})).join("\n")+"\nendbfchar\nendcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"}(n)}(this.glyphCache.access(),this.glyphId.bind(this)),n=t.flateStream(e)
return t.register(n)},t.prototype.glyphId=function(t){return t?t.id:-1},t.prototype.computeWidths=function(){for(var t=this.glyphCache.access(),e=[],n=[],r=0,i=t.length;r<i;r++){var o=t[r],a=t[r-1],s=this.glyphId(o),u=this.glyphId(a)
0===r?e.push(s):s-u!=1&&(e.push(n),e.push(s),n=[]),n.push(o.advanceWidth*this.scale)}return e.push(n),e},t}(),wt=bt,xt=function(t){function e(e,n,r,i){var o=t.call(this,e,n,r,i)||this
return o.subset=o.font.createSubset(),o.glyphs=[],o.glyphCache=u.Ct.populatedBy((function(){return o.glyphs})),o.glyphIdMap=new Map,o}return(0,o.ZT)(e,t),e.for=function(t,n,r,i){return(0,o.mG)(this,void 0,void 0,(function(){return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return[4,t.create(n)]
case 1:return[2,new e(o.sent(),n,r,i)]}}))}))},e.prototype.encodeText=function(t){for(var e=this.font.layout(t,this.fontFeatures).glyphs,n=new Array(e.length),r=0,i=e.length;r<i;r++){var o=e[r],a=this.subset.includeGlyph(o)
this.glyphs[a-1]=o,this.glyphIdMap.set(o.id,a),n[r]=(0,u.CK)(a,4)}return this.glyphCache.invalidate(),lt.Z.of(n.join(""))},e.prototype.isCFF=function(){return this.subset.cff},e.prototype.glyphId=function(t){return t?this.glyphIdMap.get(t.id):-1},e.prototype.serializeFont=function(){var t=this
return new Promise((function(e,n){var r=[]
t.subset.encodeStream().on("data",(function(t){return r.push(t)})).on("end",(function(){return e((0,u.Jm)(r))})).on("error",(function(t){return n(t)}))}))},e}(wt),St=xt,Ct=n(3107),Tt=[65472,65473,65474,65475,65477,65478,65479,65480,65481,65482,65483,65484,65485,65486,65487]
!function(t){t.DeviceGray="DeviceGray",t.DeviceRGB="DeviceRGB",t.DeviceCMYK="DeviceCMYK"}(ot||(ot={}))
var Et,kt,At,Pt={1:ot.DeviceGray,3:ot.DeviceRGB,4:ot.DeviceCMYK},Ft=function(){function t(t,e,n,r,i){this.imageData=t,this.bitsPerComponent=e,this.width=n,this.height=r,this.colorSpace=i}return t.for=function(e){return(0,o.mG)(this,void 0,void 0,(function(){var n,r,i,a,s,u,c,h
return(0,o.Jh)(this,(function(o){if(65496!==(n=new DataView(e.buffer)).getUint16(0))throw new Error("SOI not found in JPEG")
for(r=2;r<n.byteLength&&(i=n.getUint16(r),r+=2,!Tt.includes(i));)r+=n.getUint16(r)
if(!Tt.includes(i))throw new Error("Invalid JPEG")
if(r+=2,a=n.getUint8(r++),s=n.getUint16(r),r+=2,u=n.getUint16(r),r+=2,c=n.getUint8(r++),!(h=Pt[c]))throw new Error("Unknown JPEG channel.")
return[2,new t(e,a,u,s,h)]}))}))},t.prototype.embedIntoContext=function(t,e){return(0,o.mG)(this,void 0,void 0,(function(){var n
return(0,o.Jh)(this,(function(r){return n=t.stream(this.imageData,{Type:"XObject",Subtype:"Image",BitsPerComponent:this.bitsPerComponent,Width:this.width,Height:this.height,ColorSpace:this.colorSpace,Filter:"DCTDecode",Decode:this.colorSpace===ot.DeviceCMYK?[1,0,1,0,1,0,1,0]:void 0}),e?(t.assign(e,n),[2,e]):[2,t.register(n)]}))}))},t}(),Rt={toRGBA8:function(t){var e=t.width,n=t.height
if(null==t.tabs.acTL)return[Rt.toRGBA8.decodeImage(t.data,e,n,t).buffer]
var r=[]
null==t.frames[0].data&&(t.frames[0].data=t.data)
for(var i=e*n*4,o=new Uint8Array(i),a=new Uint8Array(i),s=new Uint8Array(i),u=0;u<t.frames.length;u++){var c=t.frames[u],h=c.rect.x,l=c.rect.y,f=c.rect.width,d=c.rect.height,p=Rt.toRGBA8.decodeImage(c.data,f,d,t)
if(0!=u)for(var g=0;g<i;g++)s[g]=o[g]
if(0==c.blend?Rt._copyTile(p,f,d,o,e,n,h,l,0):1==c.blend&&Rt._copyTile(p,f,d,o,e,n,h,l,1),r.push(o.buffer.slice(0)),0==c.dispose);else if(1==c.dispose)Rt._copyTile(a,f,d,o,e,n,h,l,0)
else if(2==c.dispose)for(g=0;g<i;g++)o[g]=s[g]}return r}}
Rt.toRGBA8.decodeImage=function(t,e,n,r){var i=e*n,o=Rt.decode._getBPP(r),a=Math.ceil(e*o/8),s=new Uint8Array(4*i),u=new Uint32Array(s.buffer),c=r.ctype,h=r.depth,l=Rt._bin.readUshort
if(Date.now(),6==c){var f=i<<2
if(8==h)for(var d=0;d<f;d+=4)s[d]=t[d],s[d+1]=t[d+1],s[d+2]=t[d+2],s[d+3]=t[d+3]
if(16==h)for(d=0;d<f;d++)s[d]=t[d<<1]}else if(2==c){var p=r.tabs.tRNS
if(null==p){if(8==h)for(d=0;d<i;d++){var g=3*d
u[d]=255<<24|t[g+2]<<16|t[g+1]<<8|t[g]}if(16==h)for(d=0;d<i;d++)g=6*d,u[d]=255<<24|t[g+4]<<16|t[g+2]<<8|t[g]}else{var v=p[0],m=p[1],y=p[2]
if(8==h)for(d=0;d<i;d++){var b=d<<2
g=3*d,u[d]=255<<24|t[g+2]<<16|t[g+1]<<8|t[g],t[g]==v&&t[g+1]==m&&t[g+2]==y&&(s[b+3]=0)}if(16==h)for(d=0;d<i;d++)b=d<<2,g=6*d,u[d]=255<<24|t[g+4]<<16|t[g+2]<<8|t[g],l(t,g)==v&&l(t,g+2)==m&&l(t,g+4)==y&&(s[b+3]=0)}}else if(3==c){var w=r.tabs.PLTE,x=r.tabs.tRNS,S=x?x.length:0
if(1==h)for(var C=0;C<n;C++){var T=C*a,E=C*e
for(d=0;d<e;d++){b=E+d<<2
var k=3*(A=t[T+(d>>3)]>>7-((7&d)<<0)&1)
s[b]=w[k],s[b+1]=w[k+1],s[b+2]=w[k+2],s[b+3]=A<S?x[A]:255}}if(2==h)for(C=0;C<n;C++)for(T=C*a,E=C*e,d=0;d<e;d++)b=E+d<<2,k=3*(A=t[T+(d>>2)]>>6-((3&d)<<1)&3),s[b]=w[k],s[b+1]=w[k+1],s[b+2]=w[k+2],s[b+3]=A<S?x[A]:255
if(4==h)for(C=0;C<n;C++)for(T=C*a,E=C*e,d=0;d<e;d++)b=E+d<<2,k=3*(A=t[T+(d>>1)]>>4-((1&d)<<2)&15),s[b]=w[k],s[b+1]=w[k+1],s[b+2]=w[k+2],s[b+3]=A<S?x[A]:255
if(8==h)for(d=0;d<i;d++){var A
b=d<<2,k=3*(A=t[d]),s[b]=w[k],s[b+1]=w[k+1],s[b+2]=w[k+2],s[b+3]=A<S?x[A]:255}}else if(4==c){if(8==h)for(d=0;d<i;d++){b=d<<2
var P=t[F=d<<1]
s[b]=P,s[b+1]=P,s[b+2]=P,s[b+3]=t[F+1]}if(16==h)for(d=0;d<i;d++){var F
b=d<<2,P=t[F=d<<2],s[b]=P,s[b+1]=P,s[b+2]=P,s[b+3]=t[F+2]}}else if(0==c)for(v=r.tabs.tRNS?r.tabs.tRNS:-1,C=0;C<n;C++){var R=C*a,O=C*e
if(1==h)for(var D=0;D<e;D++){var M=(P=255*(t[R+(D>>>3)]>>>7-(7&D)&1))==255*v?0:255
u[O+D]=M<<24|P<<16|P<<8|P}else if(2==h)for(D=0;D<e;D++)M=(P=85*(t[R+(D>>>2)]>>>6-((3&D)<<1)&3))==85*v?0:255,u[O+D]=M<<24|P<<16|P<<8|P
else if(4==h)for(D=0;D<e;D++)M=(P=17*(t[R+(D>>>1)]>>>4-((1&D)<<2)&15))==17*v?0:255,u[O+D]=M<<24|P<<16|P<<8|P
else if(8==h)for(D=0;D<e;D++)M=(P=t[R+D])==v?0:255,u[O+D]=M<<24|P<<16|P<<8|P
else if(16==h)for(D=0;D<e;D++)P=t[R+(D<<1)],M=l(t,R+(D<<d))==v?0:255,u[O+D]=M<<24|P<<16|P<<8|P}return s},Rt.decode=function(t){for(var e,n=new Uint8Array(t),r=8,i=Rt._bin,o=i.readUshort,a=i.readUint,s={tabs:{},frames:[]},u=new Uint8Array(n.length),c=0,h=0,l=[137,80,78,71,13,10,26,10],f=0;f<8;f++)if(n[f]!=l[f])throw"The input is not a PNG file!"
for(;r<n.length;){var d=i.readUint(n,r)
r+=4
var p=i.readASCII(n,r,4)
if(r+=4,"IHDR"==p)Rt.decode._IHDR(n,r,s)
else if("IDAT"==p){for(f=0;f<d;f++)u[c+f]=n[r+f]
c+=d}else if("acTL"==p)s.tabs[p]={num_frames:a(n,r),num_plays:a(n,r+4)},e=new Uint8Array(n.length)
else if("fcTL"==p){var g
0!=h&&((g=s.frames[s.frames.length-1]).data=Rt.decode._decompress(s,e.slice(0,h),g.rect.width,g.rect.height),h=0)
var v={x:a(n,r+12),y:a(n,r+16),width:a(n,r+4),height:a(n,r+8)},m=o(n,r+22)
m=o(n,r+20)/(0==m?100:m)
var y={rect:v,delay:Math.round(1e3*m),dispose:n[r+24],blend:n[r+25]}
s.frames.push(y)}else if("fdAT"==p){for(f=0;f<d-4;f++)e[h+f]=n[r+f+4]
h+=d-4}else if("pHYs"==p)s.tabs[p]=[i.readUint(n,r),i.readUint(n,r+4),n[r+8]]
else if("cHRM"==p)for(s.tabs[p]=[],f=0;f<8;f++)s.tabs[p].push(i.readUint(n,r+4*f))
else if("tEXt"==p){null==s.tabs[p]&&(s.tabs[p]={})
var b=i.nextZero(n,r),w=i.readASCII(n,r,b-r),x=i.readASCII(n,b+1,r+d-b-1)
s.tabs[p][w]=x}else if("iTXt"==p){null==s.tabs[p]&&(s.tabs[p]={}),b=0
var S=r
b=i.nextZero(n,S),w=i.readASCII(n,S,b-S),n[S=b+1],n[S+1],S+=2,b=i.nextZero(n,S),i.readASCII(n,S,b-S),S=b+1,b=i.nextZero(n,S),i.readUTF8(n,S,b-S),S=b+1,x=i.readUTF8(n,S,d-(S-r)),s.tabs[p][w]=x}else if("PLTE"==p)s.tabs[p]=i.readBytes(n,r,d)
else if("hIST"==p){var C=s.tabs.PLTE.length/3
for(s.tabs[p]=[],f=0;f<C;f++)s.tabs[p].push(o(n,r+2*f))}else if("tRNS"==p)3==s.ctype?s.tabs[p]=i.readBytes(n,r,d):0==s.ctype?s.tabs[p]=o(n,r):2==s.ctype&&(s.tabs[p]=[o(n,r),o(n,r+2),o(n,r+4)])
else if("gAMA"==p)s.tabs[p]=i.readUint(n,r)/1e5
else if("sRGB"==p)s.tabs[p]=n[r]
else if("bKGD"==p)0==s.ctype||4==s.ctype?s.tabs[p]=[o(n,r)]:2==s.ctype||6==s.ctype?s.tabs[p]=[o(n,r),o(n,r+2),o(n,r+4)]:3==s.ctype&&(s.tabs[p]=n[r])
else if("IEND"==p)break
r+=d,i.readUint(n,r),r+=4}return 0!=h&&((g=s.frames[s.frames.length-1]).data=Rt.decode._decompress(s,e.slice(0,h),g.rect.width,g.rect.height),h=0),s.data=Rt.decode._decompress(s,u,s.width,s.height),delete s.compress,delete s.interlace,delete s.filter,s},Rt.decode._decompress=function(t,e,n,r){Date.now()
var i=Rt.decode._getBPP(t),o=Math.ceil(n*i/8),a=new Uint8Array((o+1+t.interlace)*r)
return e=Rt.decode._inflate(e,a),Date.now(),0==t.interlace?e=Rt.decode._filterZero(e,t,0,n,r):1==t.interlace&&(e=Rt.decode._readInterlace(e,t)),e},Rt.decode._inflate=function(t,e){return Rt.inflateRaw(new Uint8Array(t.buffer,2,t.length-6),e)},Rt.inflateRaw=((At={}).H={},At.H.N=function(t,e){var n,r,i=Uint8Array,o=0,a=0,s=0,u=0,c=0,h=0,l=0,f=0,d=0
if(3==t[0]&&0==t[1])return e||new i(0)
var p=At.H,g=p.b,v=p.e,m=p.R,y=p.n,b=p.A,w=p.Z,x=p.m,S=null==e
for(S&&(e=new i(t.length>>>2<<3));0==o;)if(o=g(t,d,1),a=g(t,d+1,2),d+=3,0!=a){if(S&&(e=At.H.W(e,f+(1<<17))),1==a&&(n=x.J,r=x.h,h=511,l=31),2==a){s=v(t,d,5)+257,u=v(t,d+5,5)+1,c=v(t,d+10,4)+4,d+=14
for(var C=1,T=0;T<38;T+=2)x.Q[T]=0,x.Q[T+1]=0
for(T=0;T<c;T++){var E=v(t,d+3*T,3)
x.Q[1+(x.X[T]<<1)]=E,E>C&&(C=E)}d+=3*c,y(x.Q,C),b(x.Q,C,x.u),n=x.w,r=x.d,d=m(x.u,(1<<C)-1,s+u,t,d,x.v)
var k=p.V(x.v,0,s,x.C)
h=(1<<k)-1
var A=p.V(x.v,s,u,x.D)
l=(1<<A)-1,y(x.C,k),b(x.C,k,n),y(x.D,A),b(x.D,A,r)}for(;;){var P=n[w(t,d)&h]
d+=15&P
var F=P>>>4
if(F>>>8==0)e[f++]=F
else{if(256==F)break
var R=f+F-254
if(F>264){var O=x.q[F-257]
R=f+(O>>>3)+v(t,d,7&O),d+=7&O}var D=r[w(t,d)&l]
d+=15&D
var M=D>>>4,I=x.c[M],N=(I>>>4)+g(t,d,15&I)
for(d+=15&I;f<R;)e[f]=e[f++-N],e[f]=e[f++-N],e[f]=e[f++-N],e[f]=e[f++-N]
f=R}}}else{0!=(7&d)&&(d+=8-(7&d))
var _=4+(d>>>3),B=t[_-4]|t[_-3]<<8
S&&(e=At.H.W(e,f+B)),e.set(new i(t.buffer,t.byteOffset+_,B),f),d=_+B<<3,f+=B}return e.length==f?e:e.slice(0,f)},At.H.W=function(t,e){var n=t.length
if(e<=n)return t
var r=new Uint8Array(n<<1)
return r.set(t,0),r},At.H.R=function(t,e,n,r,i,o){for(var a=At.H.e,s=At.H.Z,u=0;u<n;){var c=t[s(r,i)&e]
i+=15&c
var h=c>>>4
if(h<=15)o[u]=h,u++
else{var l=0,f=0
16==h?(f=3+a(r,i,2),i+=2,l=o[u-1]):17==h?(f=3+a(r,i,3),i+=3):18==h&&(f=11+a(r,i,7),i+=7)
for(var d=u+f;u<d;)o[u]=l,u++}}return i},At.H.V=function(t,e,n,r){for(var i=0,o=0,a=r.length>>>1;o<n;){var s=t[o+e]
r[o<<1]=0,r[1+(o<<1)]=s,s>i&&(i=s),o++}for(;o<a;)r[o<<1]=0,r[1+(o<<1)]=0,o++
return i},At.H.n=function(t,e){for(var n,r,i,o,a=At.H.m,s=t.length,u=a.j,c=0;c<=e;c++)u[c]=0
for(c=1;c<s;c+=2)u[t[c]]++
var h=a.K
for(n=0,u[0]=0,r=1;r<=e;r++)n=n+u[r-1]<<1,h[r]=n
for(i=0;i<s;i+=2)0!=(o=t[i+1])&&(t[i]=h[o],h[o]++)},At.H.A=function(t,e,n){for(var r=t.length,i=At.H.m.r,o=0;o<r;o+=2)if(0!=t[o+1])for(var a=o>>1,s=t[o+1],u=a<<4|s,c=e-s,h=t[o]<<c,l=h+(1<<c);h!=l;)n[i[h]>>>15-e]=u,h++},At.H.l=function(t,e){for(var n=At.H.m.r,r=15-e,i=0;i<t.length;i+=2){var o=t[i]<<e-t[i+1]
t[i]=n[o]>>>r}},At.H.M=function(t,e,n){n<<=7&e
var r=e>>>3
t[r]|=n,t[r+1]|=n>>>8},At.H.I=function(t,e,n){n<<=7&e
var r=e>>>3
t[r]|=n,t[r+1]|=n>>>8,t[r+2]|=n>>>16},At.H.e=function(t,e,n){return(t[e>>>3]|t[1+(e>>>3)]<<8)>>>(7&e)&(1<<n)-1},At.H.b=function(t,e,n){return(t[e>>>3]|t[1+(e>>>3)]<<8|t[2+(e>>>3)]<<16)>>>(7&e)&(1<<n)-1},At.H.Z=function(t,e){return(t[e>>>3]|t[1+(e>>>3)]<<8|t[2+(e>>>3)]<<16)>>>(7&e)},At.H.i=function(t,e){return(t[e>>>3]|t[1+(e>>>3)]<<8|t[2+(e>>>3)]<<16|t[3+(e>>>3)]<<24)>>>(7&e)},At.H.m=(Et=Uint16Array,kt=Uint32Array,{K:new Et(16),j:new Et(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new Et(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new kt(32),J:new Et(512),_:[],h:new Et(32),$:[],w:new Et(32768),C:[],v:[],d:new Et(32768),D:[],u:new Et(512),Q:[],r:new Et(32768),s:new kt(286),Y:new kt(30),a:new kt(19),t:new kt(15e3),k:new Et(65536),g:new Et(32768)}),function(){for(var t=At.H.m,e=0;e<32768;e++){var n=e
n=(4278255360&(n=(4042322160&(n=(3435973836&(n=(2863311530&n)>>>1|(1431655765&n)<<1))>>>2|(858993459&n)<<2))>>>4|(252645135&n)<<4))>>>8|(16711935&n)<<8,t.r[e]=(n>>>16|n<<16)>>>17}function r(t,e,n){for(;0!=e--;)t.push(0,n)}for(e=0;e<32;e++)t.q[e]=t.S[e]<<3|t.T[e],t.c[e]=t.p[e]<<4|t.z[e]
r(t._,144,8),r(t._,112,9),r(t._,24,7),r(t._,8,8),At.H.n(t._,9),At.H.A(t._,9,t.J),At.H.l(t._,9),r(t.$,32,5),At.H.n(t.$,5),At.H.A(t.$,5,t.h),At.H.l(t.$,5),r(t.Q,19,0),r(t.C,286,0),r(t.D,30,0),r(t.v,320,0)}(),At.H.N),Rt.decode._readInterlace=function(t,e){for(var n=e.width,r=e.height,i=Rt.decode._getBPP(e),o=i>>3,a=Math.ceil(n*i/8),s=new Uint8Array(r*a),u=0,c=[0,0,4,0,2,0,1],h=[0,4,0,2,0,1,0],l=[8,8,8,4,4,2,2],f=[8,8,4,4,2,2,1],d=0;d<7;){for(var p=l[d],g=f[d],v=0,m=0,y=c[d];y<r;)y+=p,m++
for(var b=h[d];b<n;)b+=g,v++
var w=Math.ceil(v*i/8)
Rt.decode._filterZero(t,e,u,v,m)
for(var x=0,S=c[d];S<r;){for(var C=h[d],T=u+x*w<<3;C<n;){var E
if(1==i&&(E=(E=t[T>>3])>>7-(7&T)&1,s[S*a+(C>>3)]|=E<<7-((7&C)<<0)),2==i&&(E=(E=t[T>>3])>>6-(7&T)&3,s[S*a+(C>>2)]|=E<<6-((3&C)<<1)),4==i&&(E=(E=t[T>>3])>>4-(7&T)&15,s[S*a+(C>>1)]|=E<<4-((1&C)<<2)),i>=8)for(var k=S*a+C*o,A=0;A<o;A++)s[k+A]=t[(T>>3)+A]
T+=i,C+=g}x++,S+=p}v*m!=0&&(u+=m*(1+w)),d+=1}return s},Rt.decode._getBPP=function(t){return[1,null,3,1,2,null,4][t.ctype]*t.depth},Rt.decode._filterZero=function(t,e,n,r,i){var o=Rt.decode._getBPP(e),a=Math.ceil(r*o/8),s=Rt.decode._paeth
o=Math.ceil(o/8)
var u=0,c=1,h=t[n],l=0
if(h>1&&(t[n]=[0,0,1][h-2]),3==h)for(l=o;l<a;l++)t[l+1]=t[l+1]+(t[l+1-o]>>>1)&255
for(var f=0;f<i;f++)if(l=0,0==(h=t[(c=(u=n+f*a)+f+1)-1]))for(;l<a;l++)t[u+l]=t[c+l]
else if(1==h){for(;l<o;l++)t[u+l]=t[c+l]
for(;l<a;l++)t[u+l]=t[c+l]+t[u+l-o]}else if(2==h)for(;l<a;l++)t[u+l]=t[c+l]+t[u+l-a]
else if(3==h){for(;l<o;l++)t[u+l]=t[c+l]+(t[u+l-a]>>>1)
for(;l<a;l++)t[u+l]=t[c+l]+(t[u+l-a]+t[u+l-o]>>>1)}else{for(;l<o;l++)t[u+l]=t[c+l]+s(0,t[u+l-a],0)
for(;l<a;l++)t[u+l]=t[c+l]+s(t[u+l-o],t[u+l-a],t[u+l-o-a])}return t},Rt.decode._paeth=function(t,e,n){var r=t+e-n,i=r-t,o=r-e,a=r-n
return i*i<=o*o&&i*i<=a*a?t:o*o<=a*a?e:n},Rt.decode._IHDR=function(t,e,n){var r=Rt._bin
n.width=r.readUint(t,e),e+=4,n.height=r.readUint(t,e),e+=4,n.depth=t[e],e++,n.ctype=t[e],e++,n.compress=t[e],e++,n.filter=t[e],e++,n.interlace=t[e],e++},Rt._bin={nextZero:function(t,e){for(;0!=t[e];)e++
return e},readUshort:function(t,e){return t[e]<<8|t[e+1]},writeUshort:function(t,e,n){t[e]=n>>8&255,t[e+1]=255&n},readUint:function(t,e){return 16777216*t[e]+(t[e+1]<<16|t[e+2]<<8|t[e+3])},writeUint:function(t,e,n){t[e]=n>>24&255,t[e+1]=n>>16&255,t[e+2]=n>>8&255,t[e+3]=255&n},readASCII:function(t,e,n){for(var r="",i=0;i<n;i++)r+=String.fromCharCode(t[e+i])
return r},writeASCII:function(t,e,n){for(var r=0;r<n.length;r++)t[e+r]=n.charCodeAt(r)},readBytes:function(t,e,n){for(var r=[],i=0;i<n;i++)r.push(t[e+i])
return r},pad:function(t){return t.length<2?"0"+t:t},readUTF8:function(t,e,n){for(var r,i="",o=0;o<n;o++)i+="%"+Rt._bin.pad(t[e+o].toString(16))
try{r=decodeURIComponent(i)}catch(r){return Rt._bin.readASCII(t,e,n)}return r}},Rt._copyTile=function(t,e,n,r,i,o,a,s,u){for(var c=Math.min(e,i),h=Math.min(n,o),l=0,f=0,d=0;d<h;d++)for(var p=0;p<c;p++)if(a>=0&&s>=0?(l=d*e+p<<2,f=(s+d)*i+a+p<<2):(l=(-s+d)*e-a+p<<2,f=d*i+p<<2),0==u)r[f]=t[l],r[f+1]=t[l+1],r[f+2]=t[l+2],r[f+3]=t[l+3]
else if(1==u){var g=t[l+3]*(1/255),v=t[l]*g,m=t[l+1]*g,y=t[l+2]*g,b=r[f+3]*(1/255),w=r[f]*b,x=r[f+1]*b,S=r[f+2]*b,C=1-g,T=g+b*C,E=0==T?0:1/T
r[f+3]=255*T,r[f+0]=(v+w*C)*E,r[f+1]=(m+x*C)*E,r[f+2]=(y+S*C)*E}else if(2==u)g=t[l+3],v=t[l],m=t[l+1],y=t[l+2],b=r[f+3],w=r[f],x=r[f+1],S=r[f+2],g==b&&v==w&&m==x&&y==S?(r[f]=0,r[f+1]=0,r[f+2]=0,r[f+3]=0):(r[f]=v,r[f+1]=m,r[f+2]=y,r[f+3]=g)
else if(3==u){if(g=t[l+3],v=t[l],m=t[l+1],y=t[l+2],b=r[f+3],w=r[f],x=r[f+1],S=r[f+2],g==b&&v==w&&m==x&&y==S)continue
if(g<220&&b>20)return!1}return!0},Rt.encode=function(t,e,n,r,i,o,a){null==r&&(r=0),null==a&&(a=!1)
var s=Rt.encode.compress(t,e,n,r,[!1,!1,!1,0,a])
return Rt.encode.compressPNG(s,-1),Rt.encode._main(s,e,n,i,o)},Rt.encodeLL=function(t,e,n,r,i,o,a,s){for(var u={ctype:0+(1==r?0:2)+(0==i?0:4),depth:o,frames:[]},c=(Date.now(),(r+i)*o),h=c*e,l=0;l<t.length;l++)u.frames.push({rect:{x:0,y:0,width:e,height:n},img:new Uint8Array(t[l]),blend:0,dispose:1,bpp:Math.ceil(c/8),bpl:Math.ceil(h/8)})
return Rt.encode.compressPNG(u,0,!0),Rt.encode._main(u,e,n,a,s)},Rt.encode._main=function(t,e,n,r,i){null==i&&(i={})
var o=Rt.crc.crc,a=Rt._bin.writeUint,s=Rt._bin.writeUshort,u=Rt._bin.writeASCII,c=8,h=t.frames.length>1,l=!1,f=33+(h?20:0)
if(null!=i.sRGB&&(f+=13),null!=i.pHYs&&(f+=21),3==t.ctype){for(var d=t.plte.length,p=0;p<d;p++)t.plte[p]>>>24!=255&&(l=!0)
f+=8+3*d+4+(l?8+1*d+4:0)}for(var g=0;g<t.frames.length;g++)h&&(f+=38),f+=(T=t.frames[g]).cimg.length+12,0!=g&&(f+=4)
f+=12
var v=new Uint8Array(f),m=[137,80,78,71,13,10,26,10]
for(p=0;p<8;p++)v[p]=m[p]
if(a(v,c,13),u(v,c+=4,"IHDR"),a(v,c+=4,e),a(v,c+=4,n),v[c+=4]=t.depth,v[++c]=t.ctype,v[++c]=0,v[++c]=0,v[++c]=0,a(v,++c,o(v,c-17,17)),c+=4,null!=i.sRGB&&(a(v,c,1),u(v,c+=4,"sRGB"),v[c+=4]=i.sRGB,a(v,++c,o(v,c-5,5)),c+=4),null!=i.pHYs&&(a(v,c,9),u(v,c+=4,"pHYs"),a(v,c+=4,i.pHYs[0]),a(v,c+=4,i.pHYs[1]),v[c+=4]=i.pHYs[2],a(v,++c,o(v,c-13,13)),c+=4),h&&(a(v,c,8),u(v,c+=4,"acTL"),a(v,c+=4,t.frames.length),a(v,c+=4,null!=i.loop?i.loop:0),a(v,c+=4,o(v,c-12,12)),c+=4),3==t.ctype){for(a(v,c,3*(d=t.plte.length)),u(v,c+=4,"PLTE"),c+=4,p=0;p<d;p++){var y=3*p,b=t.plte[p],w=255&b,x=b>>>8&255,S=b>>>16&255
v[c+y+0]=w,v[c+y+1]=x,v[c+y+2]=S}if(a(v,c+=3*d,o(v,c-3*d-4,3*d+4)),c+=4,l){for(a(v,c,d),u(v,c+=4,"tRNS"),c+=4,p=0;p<d;p++)v[c+p]=t.plte[p]>>>24&255
a(v,c+=d,o(v,c-d-4,d+4)),c+=4}}var C=0
for(g=0;g<t.frames.length;g++){var T=t.frames[g]
h&&(a(v,c,26),u(v,c+=4,"fcTL"),a(v,c+=4,C++),a(v,c+=4,T.rect.width),a(v,c+=4,T.rect.height),a(v,c+=4,T.rect.x),a(v,c+=4,T.rect.y),s(v,c+=4,r[g]),s(v,c+=2,1e3),v[c+=2]=T.dispose,v[++c]=T.blend,a(v,++c,o(v,c-30,30)),c+=4)
var E=T.cimg
a(v,c,(d=E.length)+(0==g?0:4))
var k=c+=4
u(v,c,0==g?"IDAT":"fdAT"),c+=4,0!=g&&(a(v,c,C++),c+=4),v.set(E,c),a(v,c+=d,o(v,k,c-k)),c+=4}return a(v,c,0),u(v,c+=4,"IEND"),a(v,c+=4,o(v,c-4,4)),c+=4,v.buffer},Rt.encode.compressPNG=function(t,e,n){for(var r=0;r<t.frames.length;r++){var i=t.frames[r],o=(i.rect.width,i.rect.height),a=new Uint8Array(o*i.bpl+o)
i.cimg=Rt.encode._filterZero(i.img,o,i.bpp,i.bpl,a,e,n)}},Rt.encode.compress=function(t,e,n,r,i){for(var o=i[0],a=i[1],s=i[2],u=i[3],c=i[4],h=6,l=8,f=255,d=0;d<t.length;d++)for(var p=new Uint8Array(t[d]),g=p.length,v=0;v<g;v+=4)f&=p[v+3]
var m=255!=f,y=Rt.encode.framize(t,e,n,o,a,s),b={},w=[],x=[]
if(0!=r){var S=[]
for(v=0;v<y.length;v++)S.push(y[v].img.buffer)
var C=Rt.encode.concatRGBA(S),T=Rt.quantize(C,r),E=0,k=new Uint8Array(T.abuf)
for(v=0;v<y.length;v++){var A=(Z=y[v].img).length
for(x.push(new Uint8Array(T.inds.buffer,E>>2,A>>2)),d=0;d<A;d+=4)Z[d]=k[E+d],Z[d+1]=k[E+d+1],Z[d+2]=k[E+d+2],Z[d+3]=k[E+d+3]
E+=A}for(v=0;v<T.plte.length;v++)w.push(T.plte[v].est.rgba)}else for(d=0;d<y.length;d++){var P=y[d],F=new Uint32Array(P.img.buffer),R=P.rect.width,O=(g=F.length,new Uint8Array(g))
for(x.push(O),v=0;v<g;v++){var D=F[v]
if(0!=v&&D==F[v-1])O[v]=O[v-1]
else if(v>R&&D==F[v-R])O[v]=O[v-R]
else{var M=b[D]
if(null==M&&(b[D]=M=w.length,w.push(D),w.length>=300))break
O[v]=M}}}var I=w.length
for(I<=256&&0==c&&(l=I<=2?1:I<=4?2:I<=16?4:8,l=Math.max(l,u)),d=0;d<y.length;d++){(P=y[d]).rect.x,P.rect.y,R=P.rect.width
var N=P.rect.height,_=P.img,B=(new Uint32Array(_.buffer),4*R),L=4
if(I<=256&&0==c){B=Math.ceil(l*R/8)
for(var U=new Uint8Array(B*N),j=x[d],G=0;G<N;G++){v=G*B
var z=G*R
if(8==l)for(var H=0;H<R;H++)U[v+H]=j[z+H]
else if(4==l)for(H=0;H<R;H++)U[v+(H>>1)]|=j[z+H]<<4-4*(1&H)
else if(2==l)for(H=0;H<R;H++)U[v+(H>>2)]|=j[z+H]<<6-2*(3&H)
else if(1==l)for(H=0;H<R;H++)U[v+(H>>3)]|=j[z+H]<<7-1*(7&H)}_=U,h=3,L=1}else if(0==m&&1==y.length){U=new Uint8Array(R*N*3)
var V=R*N
for(v=0;v<V;v++){var Z,W=4*v
U[Z=3*v]=_[W],U[Z+1]=_[W+1],U[Z+2]=_[W+2]}_=U,h=2,L=3,B=3*R}P.img=_,P.bpl=B,P.bpp=L}return{ctype:h,depth:l,plte:w,frames:y}},Rt.encode.framize=function(t,e,n,r,i,o){for(var a=[],s=0;s<t.length;s++){var u,c=new Uint8Array(t[s]),h=new Uint32Array(c.buffer),l=0,f=0,d=e,p=n,g=r?1:0
if(0!=s){for(var v=o||r||1==s||0!=a[s-2].dispose?1:2,m=0,y=1e9,b=0;b<v;b++){for(var w=new Uint8Array(t[s-1-b]),x=new Uint32Array(t[s-1-b]),S=e,C=n,T=-1,E=-1,k=0;k<n;k++)for(var A=0;A<e;A++)h[I=k*e+A]!=x[I]&&(A<S&&(S=A),A>T&&(T=A),k<C&&(C=k),k>E&&(E=k));-1==T&&(S=C=T=E=0),i&&(1==(1&S)&&S--,1==(1&C)&&C--)
var P=(T-S+1)*(E-C+1)
P<y&&(y=P,m=b,l=S,f=C,d=T-S+1,p=E-C+1)}w=new Uint8Array(t[s-1-m]),1==m&&(a[s-1].dispose=2),u=new Uint8Array(d*p*4),Rt._copyTile(w,e,n,u,d,p,-l,-f,0),1==(g=Rt._copyTile(c,e,n,u,d,p,-l,-f,3)?1:0)?Rt.encode._prepareDiff(c,e,n,u,{x:l,y:f,width:d,height:p}):Rt._copyTile(c,e,n,u,d,p,-l,-f,0)}else u=c.slice(0)
a.push({rect:{x:l,y:f,width:d,height:p},img:u,blend:g,dispose:0})}if(r)for(s=0;s<a.length;s++)if(1!=(N=a[s]).blend){var F=N.rect,R=a[s-1].rect,O=Math.min(F.x,R.x),D=Math.min(F.y,R.y),M={x:O,y:D,width:Math.max(F.x+F.width,R.x+R.width)-O,height:Math.max(F.y+F.height,R.y+R.height)-D}
a[s-1].dispose=1,s-1!=0&&Rt.encode._updateFrame(t,e,n,a,s-1,M,i),Rt.encode._updateFrame(t,e,n,a,s,M,i)}if(1!=t.length)for(var I=0;I<a.length;I++){var N;(N=a[I]).rect.width,N.rect.height}return a},Rt.encode._updateFrame=function(t,e,n,r,i,o,a){for(var s=Uint8Array,u=Uint32Array,c=new s(t[i-1]),h=new u(t[i-1]),l=i+1<t.length?new s(t[i+1]):null,f=new s(t[i]),d=new u(f.buffer),p=e,g=n,v=-1,m=-1,y=0;y<o.height;y++)for(var b=0;b<o.width;b++){var w=o.x+b,x=o.y+y,S=x*e+w,C=d[S]
0==C||0==r[i-1].dispose&&h[S]==C&&(null==l||0!=l[4*S+3])||(w<p&&(p=w),w>v&&(v=w),x<g&&(g=x),x>m&&(m=x))}-1==v&&(p=g=v=m=0),a&&(1==(1&p)&&p--,1==(1&g)&&g--),o={x:p,y:g,width:v-p+1,height:m-g+1}
var T=r[i]
T.rect=o,T.blend=1,T.img=new Uint8Array(o.width*o.height*4),0==r[i-1].dispose?(Rt._copyTile(c,e,n,T.img,o.width,o.height,-o.x,-o.y,0),Rt.encode._prepareDiff(f,e,n,T.img,o)):Rt._copyTile(f,e,n,T.img,o.width,o.height,-o.x,-o.y,0)},Rt.encode._prepareDiff=function(t,e,n,r,i){Rt._copyTile(t,e,n,r,i.width,i.height,-i.x,-i.y,2)},Rt.encode._filterZero=function(t,e,n,r,i,o,a){var u,c=[],h=[0,1,2,3,4];-1!=o?h=[o]:(e*r>5e5||1==n)&&(h=[0]),a&&(u={level:0})
for(var l=a&&null!=UZIP?UZIP:s(),f=0;f<h.length;f++){for(var d=0;d<e;d++)Rt.encode._filterLine(i,t,d,r,n,h[f])
c.push(l.deflate(i,u))}var p,g=1e9
for(f=0;f<c.length;f++)c[f].length<g&&(p=f,g=c[f].length)
return c[p]},Rt.encode._filterLine=function(t,e,n,r,i,o){var a=n*r,s=a+n,u=Rt.decode._paeth
if(t[s]=o,s++,0==o)if(r<500)for(var c=0;c<r;c++)t[s+c]=e[a+c]
else t.set(new Uint8Array(e.buffer,a,r),s)
else if(1==o){for(c=0;c<i;c++)t[s+c]=e[a+c]
for(c=i;c<r;c++)t[s+c]=e[a+c]-e[a+c-i]+256&255}else if(0==n){for(c=0;c<i;c++)t[s+c]=e[a+c]
if(2==o)for(c=i;c<r;c++)t[s+c]=e[a+c]
if(3==o)for(c=i;c<r;c++)t[s+c]=e[a+c]-(e[a+c-i]>>1)+256&255
if(4==o)for(c=i;c<r;c++)t[s+c]=e[a+c]-u(e[a+c-i],0,0)+256&255}else{if(2==o)for(c=0;c<r;c++)t[s+c]=e[a+c]+256-e[a+c-r]&255
if(3==o){for(c=0;c<i;c++)t[s+c]=e[a+c]+256-(e[a+c-r]>>1)&255
for(c=i;c<r;c++)t[s+c]=e[a+c]+256-(e[a+c-r]+e[a+c-i]>>1)&255}if(4==o){for(c=0;c<i;c++)t[s+c]=e[a+c]+256-u(0,e[a+c-r],0)&255
for(c=i;c<r;c++)t[s+c]=e[a+c]+256-u(e[a+c-i],e[a+c-r],e[a+c-i-r])&255}}},Rt.crc={table:function(){for(var t=new Uint32Array(256),e=0;e<256;e++){for(var n=e,r=0;r<8;r++)1&n?n=3988292384^n>>>1:n>>>=1
t[e]=n}return t}(),update:function(t,e,n,r){for(var i=0;i<r;i++)t=Rt.crc.table[255&(t^e[n+i])]^t>>>8
return t},crc:function(t,e,n){return 4294967295^Rt.crc.update(4294967295,t,e,n)}},Rt.quantize=function(t,e){for(var n=new Uint8Array(t),r=n.slice(0),i=new Uint32Array(r.buffer),o=Rt.quantize.getKDtree(r,e),a=o[0],s=o[1],u=(Rt.quantize.planeDst,n),c=i,h=u.length,l=new Uint8Array(n.length>>2),f=0;f<h;f+=4){var d=u[f]*(1/255),p=u[f+1]*(1/255),g=u[f+2]*(1/255),v=u[f+3]*(1/255),m=Rt.quantize.getNearest(a,d,p,g,v)
l[f>>2]=m.ind,c[f>>2]=m.est.rgba}return{abuf:r.buffer,inds:l,plte:s}},Rt.quantize.getKDtree=function(t,e,n){null==n&&(n=1e-4)
var r=new Uint32Array(t.buffer),i={i0:0,i1:t.length,bst:null,est:null,tdst:0,left:null,right:null}
i.bst=Rt.quantize.stats(t,i.i0,i.i1),i.est=Rt.quantize.estats(i.bst)
for(var o=[i];o.length<e;){for(var a=0,s=0,u=0;u<o.length;u++)o[u].est.L>a&&(a=o[u].est.L,s=u)
if(a<n)break
var c=o[s],h=Rt.quantize.splitPixels(t,r,c.i0,c.i1,c.est.e,c.est.eMq255)
if(c.i0>=h||c.i1<=h)c.est.L=0
else{var l={i0:c.i0,i1:h,bst:null,est:null,tdst:0,left:null,right:null}
l.bst=Rt.quantize.stats(t,l.i0,l.i1),l.est=Rt.quantize.estats(l.bst)
var f={i0:h,i1:c.i1,bst:null,est:null,tdst:0,left:null,right:null}
for(f.bst={R:[],m:[],N:c.bst.N-l.bst.N},u=0;u<16;u++)f.bst.R[u]=c.bst.R[u]-l.bst.R[u]
for(u=0;u<4;u++)f.bst.m[u]=c.bst.m[u]-l.bst.m[u]
f.est=Rt.quantize.estats(f.bst),c.left=l,c.right=f,o[s]=l,o.push(f)}}for(o.sort((function(t,e){return e.bst.N-t.bst.N})),u=0;u<o.length;u++)o[u].ind=u
return[i,o]},Rt.quantize.getNearest=function(t,e,n,r,i){if(null==t.left)return t.tdst=Rt.quantize.dist(t.est.q,e,n,r,i),t
var o=Rt.quantize.planeDst(t.est,e,n,r,i),a=t.left,s=t.right
o>0&&(a=t.right,s=t.left)
var u=Rt.quantize.getNearest(a,e,n,r,i)
if(u.tdst<=o*o)return u
var c=Rt.quantize.getNearest(s,e,n,r,i)
return c.tdst<u.tdst?c:u},Rt.quantize.planeDst=function(t,e,n,r,i){var o=t.e
return o[0]*e+o[1]*n+o[2]*r+o[3]*i-t.eMq},Rt.quantize.dist=function(t,e,n,r,i){var o=e-t[0],a=n-t[1],s=r-t[2],u=i-t[3]
return o*o+a*a+s*s+u*u},Rt.quantize.splitPixels=function(t,e,n,r,i,o){var a=Rt.quantize.vecDot
for(r-=4;n<r;){for(;a(t,n,i)<=o;)n+=4
for(;a(t,r,i)>o;)r-=4
if(n>=r)break
var s=e[n>>2]
e[n>>2]=e[r>>2],e[r>>2]=s,n+=4,r-=4}for(;a(t,n,i)>o;)n-=4
return n+4},Rt.quantize.vecDot=function(t,e,n){return t[e]*n[0]+t[e+1]*n[1]+t[e+2]*n[2]+t[e+3]*n[3]},Rt.quantize.stats=function(t,e,n){for(var r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i=[0,0,0,0],o=n-e>>2,a=e;a<n;a+=4){var s=t[a]*(1/255),u=t[a+1]*(1/255),c=t[a+2]*(1/255),h=t[a+3]*(1/255)
i[0]+=s,i[1]+=u,i[2]+=c,i[3]+=h,r[0]+=s*s,r[1]+=s*u,r[2]+=s*c,r[3]+=s*h,r[5]+=u*u,r[6]+=u*c,r[7]+=u*h,r[10]+=c*c,r[11]+=c*h,r[15]+=h*h}return r[4]=r[1],r[8]=r[2],r[9]=r[6],r[12]=r[3],r[13]=r[7],r[14]=r[11],{R:r,m:i,N:o}},Rt.quantize.estats=function(t){var e=t.R,n=t.m,r=t.N,i=n[0],o=n[1],a=n[2],s=n[3],u=0==r?0:1/r,c=[e[0]-i*i*u,e[1]-i*o*u,e[2]-i*a*u,e[3]-i*s*u,e[4]-o*i*u,e[5]-o*o*u,e[6]-o*a*u,e[7]-o*s*u,e[8]-a*i*u,e[9]-a*o*u,e[10]-a*a*u,e[11]-a*s*u,e[12]-s*i*u,e[13]-s*o*u,e[14]-s*a*u,e[15]-s*s*u],h=c,l=Rt.M4,f=[.5,.5,.5,.5],d=0,p=0
if(0!=r)for(var g=0;g<10&&(f=l.multVec(h,f),p=Math.sqrt(l.dot(f,f)),f=l.sml(1/p,f),!(Math.abs(p-d)<1e-9));g++)d=p
var v=[i*u,o*u,a*u,s*u]
return{Cov:c,q:v,e:f,L:d,eMq255:l.dot(l.sml(255,v),f),eMq:l.dot(f,v),rgba:(Math.round(255*v[3])<<24|Math.round(255*v[2])<<16|Math.round(255*v[1])<<8|Math.round(255*v[0])<<0)>>>0}},Rt.M4={multVec:function(t,e){return[t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3],t[4]*e[0]+t[5]*e[1]+t[6]*e[2]+t[7]*e[3],t[8]*e[0]+t[9]*e[1]+t[10]*e[2]+t[11]*e[3],t[12]*e[0]+t[13]*e[1]+t[14]*e[2]+t[15]*e[3]]},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]},sml:function(t,e){return[t*e[0],t*e[1],t*e[2],t*e[3]]}},Rt.encode.concatRGBA=function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n].byteLength
var r=new Uint8Array(e),i=0
for(n=0;n<t.length;n++){for(var o=new Uint8Array(t[n]),a=o.length,s=0;s<a;s+=4){var u=o[s],c=o[s+1],h=o[s+2],l=o[s+3]
0==l&&(u=c=h=0),r[i+s]=u,r[i+s+1]=c,r[i+s+2]=h,r[i+s+3]=l}i+=a}return r.buffer}
var Ot,Dt=Rt
!function(t){t.Greyscale="Greyscale",t.Truecolour="Truecolour",t.IndexedColour="IndexedColour",t.GreyscaleWithAlpha="GreyscaleWithAlpha",t.TruecolourWithAlpha="TruecolourWithAlpha"}(Ot||(Ot={}))
var Mt,It,Nt,_t,Bt=function(){function t(t){var e=Dt.decode(t),n=Dt.toRGBA8(e)
if(n.length>1)throw new Error("Animated PNGs are not supported")
var r=function(t){for(var e=Math.floor(t.length/4),n=new Uint8Array(3*e),r=new Uint8Array(1*e),i=0,o=0,a=0;i<t.length;)n[o++]=t[i++],n[o++]=t[i++],n[o++]=t[i++],r[a++]=t[i++]
return{rgbChannel:n,alphaChannel:r}}(new Uint8Array(n[0])),i=r.rgbChannel,o=r.alphaChannel
this.rgbChannel=i,o.some((function(t){return t<255}))&&(this.alphaChannel=o),this.type=function(t){if(0===t)return Ot.Greyscale
if(2===t)return Ot.Truecolour
if(3===t)return Ot.IndexedColour
if(4===t)return Ot.GreyscaleWithAlpha
if(6===t)return Ot.TruecolourWithAlpha
throw new Error("Unknown color type: "+t)}(e.ctype),this.width=e.width,this.height=e.height,this.bitsPerComponent=8}return t.load=function(e){return new t(e)},t}(),Lt=function(){function t(t){this.image=t,this.bitsPerComponent=t.bitsPerComponent,this.width=t.width,this.height=t.height,this.colorSpace="DeviceRGB"}return t.for=function(e){return(0,o.mG)(this,void 0,void 0,(function(){return(0,o.Jh)(this,(function(n){return[2,new t(Bt.load(e))]}))}))},t.prototype.embedIntoContext=function(t,e){return(0,o.mG)(this,void 0,void 0,(function(){var n,r
return(0,o.Jh)(this,(function(i){return n=this.embedAlphaChannel(t),r=t.flateStream(this.image.rgbChannel,{Type:"XObject",Subtype:"Image",BitsPerComponent:this.image.bitsPerComponent,Width:this.image.width,Height:this.image.height,ColorSpace:this.colorSpace,SMask:n}),e?(t.assign(e,r),[2,e]):[2,t.register(r)]}))}))},t.prototype.embedAlphaChannel=function(t){if(this.image.alphaChannel){var e=t.flateStream(this.image.alphaChannel,{Type:"XObject",Subtype:"Image",Height:this.image.height,Width:this.image.width,BitsPerComponent:this.image.bitsPerComponent,ColorSpace:"DeviceGray",Decode:[0,1]})
return t.register(e)}},t}(),Ut=function(){function t(t,e,n){this.bytes=t,this.start=e||0,this.pos=this.start,this.end=e&&n?e+n:this.bytes.length}return Object.defineProperty(t.prototype,"length",{get:function(){return this.end-this.start},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isEmpty",{get:function(){return 0===this.length},enumerable:!1,configurable:!0}),t.prototype.getByte=function(){return this.pos>=this.end?-1:this.bytes[this.pos++]},t.prototype.getUint16=function(){var t=this.getByte(),e=this.getByte()
return-1===t||-1===e?-1:(t<<8)+e},t.prototype.getInt32=function(){return(this.getByte()<<24)+(this.getByte()<<16)+(this.getByte()<<8)+this.getByte()},t.prototype.getBytes=function(t,e){void 0===e&&(e=!1)
var n=this.bytes,r=this.pos,i=this.end
if(t){var o=r+t
return o>i&&(o=i),this.pos=o,a=n.subarray(r,o),e?new Uint8ClampedArray(a):a}var a=n.subarray(r,i)
return e?new Uint8ClampedArray(a):a},t.prototype.peekByte=function(){var t=this.getByte()
return this.pos--,t},t.prototype.peekBytes=function(t,e){void 0===e&&(e=!1)
var n=this.getBytes(t,e)
return this.pos-=n.length,n},t.prototype.skip=function(t){t||(t=1),this.pos+=t},t.prototype.reset=function(){this.pos=this.start},t.prototype.moveStart=function(){this.start=this.pos},t.prototype.makeSubStream=function(e,n){return new t(this.bytes,e,n)},t.prototype.decode=function(){return this.bytes},t}(),jt=new Uint8Array(0),Gt=function(){function t(t){if(this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=jt,this.minBufferLength=512,t)for(;this.minBufferLength<t;)this.minBufferLength*=2}return Object.defineProperty(t.prototype,"isEmpty",{get:function(){for(;!this.eof&&0===this.bufferLength;)this.readBlock()
return 0===this.bufferLength},enumerable:!1,configurable:!0}),t.prototype.getByte=function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return-1
this.readBlock()}return this.buffer[this.pos++]},t.prototype.getUint16=function(){var t=this.getByte(),e=this.getByte()
return-1===t||-1===e?-1:(t<<8)+e},t.prototype.getInt32=function(){return(this.getByte()<<24)+(this.getByte()<<16)+(this.getByte()<<8)+this.getByte()},t.prototype.getBytes=function(t,e){var n
void 0===e&&(e=!1)
var r=this.pos
if(t){for(this.ensureBuffer(r+t),n=r+t;!this.eof&&this.bufferLength<n;)this.readBlock()
var i=this.bufferLength
n>i&&(n=i)}else{for(;!this.eof;)this.readBlock()
n=this.bufferLength}this.pos=n
var o=this.buffer.subarray(r,n)
return!e||o instanceof Uint8ClampedArray?o:new Uint8ClampedArray(o)},t.prototype.peekByte=function(){var t=this.getByte()
return this.pos--,t},t.prototype.peekBytes=function(t,e){void 0===e&&(e=!1)
var n=this.getBytes(t,e)
return this.pos-=n.length,n},t.prototype.skip=function(t){t||(t=1),this.pos+=t},t.prototype.reset=function(){this.pos=0},t.prototype.makeSubStream=function(t,e){for(var n=t+e;this.bufferLength<=n&&!this.eof;)this.readBlock()
return new Ut(this.buffer,t,e)},t.prototype.decode=function(){for(;!this.eof;)this.readBlock()
return this.buffer.subarray(0,this.bufferLength)},t.prototype.readBlock=function(){throw new r.iQ(this.constructor.name,"readBlock")},t.prototype.ensureBuffer=function(t){var e=this.buffer
if(t<=e.byteLength)return e
for(var n=this.minBufferLength;n<t;)n*=2
var r=new Uint8Array(n)
return r.set(e),this.buffer=r},t}(),zt=function(t){return 32===t||9===t||13===t||10===t},Ht=function(t){function e(e,n){var r=t.call(this,n)||this
return r.stream=e,r.input=new Uint8Array(5),n&&(n*=.8),r}return(0,o.ZT)(e,t),e.prototype.readBlock=function(){for(var t=this.stream,e=t.getByte();zt(e);)e=t.getByte()
if(-1!==e&&126!==e){var n,r,i=this.bufferLength
if(122===e){for(n=this.ensureBuffer(i+4),r=0;r<4;++r)n[i+r]=0
this.bufferLength+=4}else{var o=this.input
for(o[0]=e,r=1;r<5;++r){for(e=t.getByte();zt(e);)e=t.getByte()
if(o[r]=e,-1===e||126===e)break}if(n=this.ensureBuffer(i+r-1),this.bufferLength+=r-1,r<5){for(;r<5;++r)o[r]=117
this.eof=!0}var a=0
for(r=0;r<5;++r)a=85*a+(o[r]-33)
for(r=3;r>=0;--r)n[i+r]=255&a,a>>=8}}else this.eof=!0},e}(Gt),Vt=Ht,Zt=function(t){function e(e,n){var r=t.call(this,n)||this
return r.stream=e,r.firstDigit=-1,n&&(n*=.5),r}return(0,o.ZT)(e,t),e.prototype.readBlock=function(){var t=this.stream.getBytes(8e3)
if(t.length){for(var e=t.length+1>>1,n=this.ensureBuffer(this.bufferLength+e),r=this.bufferLength,i=this.firstDigit,o=0,a=t.length;o<a;o++){var s=t[o],u=void 0
if(s>=48&&s<=57)u=15&s
else{if(!(s>=65&&s<=70||s>=97&&s<=102)){if(62===s){this.eof=!0
break}continue}u=9+(15&s)}i<0?i=u:(n[r++]=i<<4|u,i=-1)}i>=0&&this.eof&&(n[r++]=i<<4,i=-1),this.firstDigit=i,this.bufferLength=r}else this.eof=!0},e}(Gt),Wt=Zt,qt=new Int32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Kt=new Int32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),Xt=new Int32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),Yt=[new Int32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],Jt=[new Int32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5],Qt=function(t){function e(e,n){var r=t.call(this,n)||this
r.stream=e
var i=e.getByte(),o=e.getByte()
if(-1===i||-1===o)throw new Error("Invalid header in flate stream: "+i+", "+o)
if(8!=(15&i))throw new Error("Unknown compression method in flate stream: "+i+", "+o)
if(((i<<8)+o)%31!=0)throw new Error("Bad FCHECK in flate stream: "+i+", "+o)
if(32&o)throw new Error("FDICT bit set in flate stream: "+i+", "+o)
return r.codeSize=0,r.codeBuf=0,r}return(0,o.ZT)(e,t),e.prototype.readBlock=function(){var t,e,n=this.stream,r=this.getBits(3)
if(1&r&&(this.eof=!0),0!=(r>>=1)){var i,o
if(1===r)i=Yt,o=Jt
else{if(2!==r)throw new Error("Unknown block type in flate stream")
var a=this.getBits(5)+257,s=this.getBits(5)+1,u=this.getBits(4)+4,c=new Uint8Array(qt.length),h=void 0
for(h=0;h<u;++h)c[qt[h]]=this.getBits(3)
var l=this.generateHuffmanTable(c)
e=0,h=0
for(var f=a+s,d=new Uint8Array(f),p=void 0,g=void 0,v=void 0;h<f;){var m=this.getCode(l)
if(16===m)p=2,g=3,v=e
else if(17===m)p=3,g=3,v=e=0
else{if(18!==m){d[h++]=e=m
continue}p=7,g=11,v=e=0}for(var y=this.getBits(p)+g;y-- >0;)d[h++]=v}i=this.generateHuffmanTable(d.subarray(0,a)),o=this.generateHuffmanTable(d.subarray(a,f))}for(var b=(t=this.buffer)?t.length:0,w=this.bufferLength;;){var x=this.getCode(i)
if(x<256)w+1>=b&&(b=(t=this.ensureBuffer(w+1)).length),t[w++]=x
else{if(256===x)return void(this.bufferLength=w)
var S=(x=Kt[x-=257])>>16
S>0&&(S=this.getBits(S)),e=(65535&x)+S,x=this.getCode(o),(S=(x=Xt[x])>>16)>0&&(S=this.getBits(S))
var C=(65535&x)+S
w+e>=b&&(b=(t=this.ensureBuffer(w+e)).length)
for(var T=0;T<e;++T,++w)t[w]=t[w-C]}}}else{var E=void 0
if(-1===(E=n.getByte()))throw new Error("Bad block header in flate stream")
var k=E
if(-1===(E=n.getByte()))throw new Error("Bad block header in flate stream")
if(k|=E<<8,-1===(E=n.getByte()))throw new Error("Bad block header in flate stream")
var A=E
if(-1===(E=n.getByte()))throw new Error("Bad block header in flate stream")
if((A|=E<<8)!=(65535&~k)&&(0!==k||0!==A))throw new Error("Bad uncompressed block length in flate stream")
this.codeBuf=0,this.codeSize=0
var P=this.bufferLength
t=this.ensureBuffer(P+k)
var F=P+k
if(this.bufferLength=F,0===k)-1===n.peekByte()&&(this.eof=!0)
else for(var R=P;R<F;++R){if(-1===(E=n.getByte())){this.eof=!0
break}t[R]=E}}},e.prototype.getBits=function(t){for(var e,n=this.stream,r=this.codeSize,i=this.codeBuf;r<t;){if(-1===(e=n.getByte()))throw new Error("Bad encoding in flate stream")
i|=e<<r,r+=8}return e=i&(1<<t)-1,this.codeBuf=i>>t,this.codeSize=r-=t,e},e.prototype.getCode=function(t){for(var e,n=this.stream,r=t[0],i=t[1],o=this.codeSize,a=this.codeBuf;o<i&&-1!==(e=n.getByte());)a|=e<<o,o+=8
var s=r[a&(1<<i)-1]
"number"==typeof r&&console.log("FLATE:",s)
var u=s>>16,c=65535&s
if(u<1||o<u)throw new Error("Bad encoding in flate stream")
return this.codeBuf=a>>u,this.codeSize=o-u,c},e.prototype.generateHuffmanTable=function(t){var e,n=t.length,r=0
for(e=0;e<n;++e)t[e]>r&&(r=t[e])
for(var i=1<<r,o=new Int32Array(i),a=1,s=0,u=2;a<=r;++a,s<<=1,u<<=1)for(var c=0;c<n;++c)if(t[c]===a){var h=0,l=s
for(e=0;e<a;++e)h=h<<1|1&l,l>>=1
for(e=h;e<i;e+=u)o[e]=a<<16|c;++s}return[o,r]},e}(Gt),$t=Qt,te=function(t){function e(e,n,r){var i=t.call(this,n)||this
i.stream=e,i.cachedData=0,i.bitsCached=0
for(var o=4096,a={earlyChange:r,codeLength:9,nextCode:258,dictionaryValues:new Uint8Array(o),dictionaryLengths:new Uint16Array(o),dictionaryPrevCodes:new Uint16Array(o),currentSequence:new Uint8Array(o),currentSequenceLength:0},s=0;s<256;++s)a.dictionaryValues[s]=s,a.dictionaryLengths[s]=1
return i.lzwState=a,i}return(0,o.ZT)(e,t),e.prototype.readBlock=function(){var t,e,n,r=1024,i=this.lzwState
if(i){var o=i.earlyChange,a=i.nextCode,s=i.dictionaryValues,u=i.dictionaryLengths,c=i.dictionaryPrevCodes,h=i.codeLength,l=i.prevCode,f=i.currentSequence,d=i.currentSequenceLength,p=0,g=this.bufferLength,v=this.ensureBuffer(this.bufferLength+r)
for(t=0;t<512;t++){var m=this.readBits(h),y=d>0
if(!m||m<256)f[0]=m,d=1
else{if(!(m>=258)){if(256===m){h=9,a=258,d=0
continue}this.eof=!0,delete this.lzwState
break}if(m<a)for(e=(d=u[m])-1,n=m;e>=0;e--)f[e]=s[n],n=c[n]
else f[d++]=f[0]}if(y&&(c[a]=l,u[a]=u[l]+1,s[a]=f[0],h=++a+o&a+o-1?h:0|Math.min(Math.log(a+o)/.6931471805599453+1,12)),l=m,r<(p+=d)){do{r+=512}while(r<p)
v=this.ensureBuffer(this.bufferLength+r)}for(e=0;e<d;e++)v[g++]=f[e]}i.nextCode=a,i.codeLength=h,i.prevCode=l,i.currentSequenceLength=d,this.bufferLength=g}},e.prototype.readBits=function(t){for(var e=this.bitsCached,n=this.cachedData;e<t;){var r=this.stream.getByte()
if(-1===r)return this.eof=!0,null
n=n<<8|r,e+=8}return this.bitsCached=e-=t,this.cachedData=n,n>>>e&(1<<t)-1},e}(Gt),ee=te,ne=function(t){function e(e,n){var r=t.call(this,n)||this
return r.stream=e,r}return(0,o.ZT)(e,t),e.prototype.readBlock=function(){var t=this.stream.getBytes(2)
if(!t||t.length<2||128===t[0])this.eof=!0
else{var e,n=this.bufferLength,r=t[0]
if(r<128){if((e=this.ensureBuffer(n+r+1))[n++]=t[1],r>0){var i=this.stream.getBytes(r)
e.set(i,n),n+=r}}else{r=257-r
var o=t[1]
e=this.ensureBuffer(n+r+1)
for(var a=0;a<r;a++)e[n++]=o}this.bufferLength=n}},e}(Gt),re=ne,ie=function(t,e,n){if(e===P.of("FlateDecode"))return new $t(t)
if(e===P.of("LZWDecode")){var i=1
if(n instanceof b){var o=n.lookup(P.of("EarlyChange"))
o instanceof l&&(i=o.asNumber())}return new ee(t,void 0,i)}if(e===P.of("ASCII85Decode"))return new Vt(t)
if(e===P.of("ASCIIHexDecode"))return new Wt(t)
if(e===P.of("RunLengthDecode"))return new re(t)
throw new r.l(e.asString())},oe=function(t){var e=t.dict,n=t.contents,i=new Ut(n),o=e.lookup(P.of("Filter")),a=e.lookup(P.of("DecodeParms"))
if(o instanceof P)i=ie(i,o,a)
else if(o instanceof d)for(var s=0,u=o.size();s<u;s++)i=ie(i,o.lookup(s,P),a&&a.lookupMaybe(s,b))
else if(o)throw new r.VX([P,d],o)
return i},ae=function(){function t(t,e,n){this.page=t
var r=null!=e?e:function(t){var e=t.MediaBox()
return{left:0,bottom:0,right:e.lookup(2,l).asNumber()-e.lookup(0,l).asNumber(),top:e.lookup(3,l).asNumber()-e.lookup(1,l).asNumber()}}(t)
this.width=r.right-r.left,this.height=r.top-r.bottom,this.boundingBox=r,this.transformationMatrix=null!=n?n:function(t){return[1,0,0,1,-t.left,-t.bottom]}(r)}return t.for=function(e,n,r){return(0,o.mG)(this,void 0,void 0,(function(){return(0,o.Jh)(this,(function(i){return[2,new t(e,n,r)]}))}))},t.prototype.embedIntoContext=function(t,e){return(0,o.mG)(this,void 0,void 0,(function(){var n,i,a,s,u,c,h,l,f,d
return(0,o.Jh)(this,(function(o){if(n=this.page.normalizedEntries(),i=n.Contents,a=n.Resources,!i)throw new r.SR
return s=this.decodeContents(i),u=this.boundingBox,c=u.left,h=u.bottom,l=u.right,f=u.top,d=t.stream(s,{Type:"XObject",Subtype:"Form",FormType:1,BBox:[c,h,l,f],Matrix:this.transformationMatrix,Resources:a}),e?(t.assign(e,d),[2,e]):[2,t.register(d)]}))}))},t.prototype.decodeContents=function(t){for(var e=Uint8Array.of(i.Z.Newline),n=[],o=0,a=t.size();o<a;o++){var s=t.lookup(o,R),c=void 0
if(s instanceof O)c=oe(s).decode()
else{if(!(s instanceof G))throw new r.NP(s)
c=s.getUnencodedContents()}n.push(c,e)}return u.M5.apply(void 0,n)},t}(),se=ae,ue=function(t,e){if(void 0!==t)return e[t]}
!function(t){t.UseNone="UseNone",t.UseOutlines="UseOutlines",t.UseThumbs="UseThumbs",t.UseOC="UseOC"}(Mt||(Mt={})),function(t){t.L2R="L2R",t.R2L="R2L"}(It||(It={})),function(t){t.None="None",t.AppDefault="AppDefault"}(Nt||(Nt={})),function(t){t.Simplex="Simplex",t.DuplexFlipShortEdge="DuplexFlipShortEdge",t.DuplexFlipLongEdge="DuplexFlipLongEdge"}(_t||(_t={}))
var ce,he,le,fe,de=function(){function t(t){this.dict=t}return t.prototype.lookupBool=function(t){var e=this.dict.lookup(P.of(t))
if(e instanceof g)return e},t.prototype.lookupName=function(t){var e=this.dict.lookup(P.of(t))
if(e instanceof P)return e},t.prototype.HideToolbar=function(){return this.lookupBool("HideToolbar")},t.prototype.HideMenubar=function(){return this.lookupBool("HideMenubar")},t.prototype.HideWindowUI=function(){return this.lookupBool("HideWindowUI")},t.prototype.FitWindow=function(){return this.lookupBool("FitWindow")},t.prototype.CenterWindow=function(){return this.lookupBool("CenterWindow")},t.prototype.DisplayDocTitle=function(){return this.lookupBool("DisplayDocTitle")},t.prototype.NonFullScreenPageMode=function(){return this.lookupName("NonFullScreenPageMode")},t.prototype.Direction=function(){return this.lookupName("Direction")},t.prototype.PrintScaling=function(){return this.lookupName("PrintScaling")},t.prototype.Duplex=function(){return this.lookupName("Duplex")},t.prototype.PickTrayByPDFSize=function(){return this.lookupBool("PickTrayByPDFSize")},t.prototype.PrintPageRange=function(){var t=this.dict.lookup(P.of("PrintPageRange"))
if(t instanceof d)return t},t.prototype.NumCopies=function(){var t=this.dict.lookup(P.of("NumCopies"))
if(t instanceof l)return t},t.prototype.getHideToolbar=function(){var t,e
return null!==(e=null===(t=this.HideToolbar())||void 0===t?void 0:t.asBoolean())&&void 0!==e&&e},t.prototype.getHideMenubar=function(){var t,e
return null!==(e=null===(t=this.HideMenubar())||void 0===t?void 0:t.asBoolean())&&void 0!==e&&e},t.prototype.getHideWindowUI=function(){var t,e
return null!==(e=null===(t=this.HideWindowUI())||void 0===t?void 0:t.asBoolean())&&void 0!==e&&e},t.prototype.getFitWindow=function(){var t,e
return null!==(e=null===(t=this.FitWindow())||void 0===t?void 0:t.asBoolean())&&void 0!==e&&e},t.prototype.getCenterWindow=function(){var t,e
return null!==(e=null===(t=this.CenterWindow())||void 0===t?void 0:t.asBoolean())&&void 0!==e&&e},t.prototype.getDisplayDocTitle=function(){var t,e
return null!==(e=null===(t=this.DisplayDocTitle())||void 0===t?void 0:t.asBoolean())&&void 0!==e&&e},t.prototype.getNonFullScreenPageMode=function(){var t,e,n=null===(t=this.NonFullScreenPageMode())||void 0===t?void 0:t.decodeText()
return null!==(e=ue(n,Mt))&&void 0!==e?e:Mt.UseNone},t.prototype.getReadingDirection=function(){var t,e,n=null===(t=this.Direction())||void 0===t?void 0:t.decodeText()
return null!==(e=ue(n,It))&&void 0!==e?e:It.L2R},t.prototype.getPrintScaling=function(){var t,e,n=null===(t=this.PrintScaling())||void 0===t?void 0:t.decodeText()
return null!==(e=ue(n,Nt))&&void 0!==e?e:Nt.AppDefault},t.prototype.getDuplex=function(){var t,e=null===(t=this.Duplex())||void 0===t?void 0:t.decodeText()
return ue(e,_t)},t.prototype.getPickTrayByPDFSize=function(){var t
return null===(t=this.PickTrayByPDFSize())||void 0===t?void 0:t.asBoolean()},t.prototype.getPrintPageRange=function(){var t=this.PrintPageRange()
if(!t)return[]
for(var e=[],n=0;n<t.size();n+=2){var r=t.lookup(n,l).asNumber(),i=t.lookup(n+1,l).asNumber()
e.push({start:r,end:i})}return e},t.prototype.getNumCopies=function(){var t,e
return null!==(e=null===(t=this.NumCopies())||void 0===t?void 0:t.asNumber())&&void 0!==e?e:1},t.prototype.setHideToolbar=function(t){var e=this.dict.context.obj(t)
this.dict.set(P.of("HideToolbar"),e)},t.prototype.setHideMenubar=function(t){var e=this.dict.context.obj(t)
this.dict.set(P.of("HideMenubar"),e)},t.prototype.setHideWindowUI=function(t){var e=this.dict.context.obj(t)
this.dict.set(P.of("HideWindowUI"),e)},t.prototype.setFitWindow=function(t){var e=this.dict.context.obj(t)
this.dict.set(P.of("FitWindow"),e)},t.prototype.setCenterWindow=function(t){var e=this.dict.context.obj(t)
this.dict.set(P.of("CenterWindow"),e)},t.prototype.setDisplayDocTitle=function(t){var e=this.dict.context.obj(t)
this.dict.set(P.of("DisplayDocTitle"),e)},t.prototype.setNonFullScreenPageMode=function(t){(0,u.DA)(t,"nonFullScreenPageMode",Mt)
var e=P.of(t)
this.dict.set(P.of("NonFullScreenPageMode"),e)},t.prototype.setReadingDirection=function(t){(0,u.DA)(t,"readingDirection",It)
var e=P.of(t)
this.dict.set(P.of("Direction"),e)},t.prototype.setPrintScaling=function(t){(0,u.DA)(t,"printScaling",Nt)
var e=P.of(t)
this.dict.set(P.of("PrintScaling"),e)},t.prototype.setDuplex=function(t){(0,u.DA)(t,"duplex",_t)
var e=P.of(t)
this.dict.set(P.of("Duplex"),e)},t.prototype.setPickTrayByPDFSize=function(t){var e=this.dict.context.obj(t)
this.dict.set(P.of("PickTrayByPDFSize"),e)},t.prototype.setPrintPageRange=function(t){Array.isArray(t)||(t=[t])
for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n].start),e.push(t[n].end);(0,u.pO)(e,"printPageRange",["number"])
var i=this.dict.context.obj(e)
this.dict.set(P.of("PrintPageRange"),i)},t.prototype.setNumCopies=function(t){(0,u.gI)(t,"numCopies",1,Number.MAX_VALUE),(0,u.Qk)(t,"numCopies")
var e=this.dict.context.obj(t)
this.dict.set(P.of("NumCopies"),e)},t.fromDict=function(e){return new t(e)},t.create=function(e){return new t(e.obj({}))},t}(),pe=de,ge=/\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+Tf/,ve=function(){function t(t,e){this.dict=t,this.ref=e}return t.prototype.T=function(){return this.dict.lookupMaybe(P.of("T"),yt.Z,lt.Z)},t.prototype.Ff=function(){var t=this.getInheritableAttribute(P.of("Ff"))
return this.dict.context.lookupMaybe(t,l)},t.prototype.V=function(){var t=this.getInheritableAttribute(P.of("V"))
return this.dict.context.lookup(t)},t.prototype.Kids=function(){return this.dict.lookupMaybe(P.of("Kids"),d)},t.prototype.DA=function(){var t=this.dict.lookup(P.of("DA"))
if(t instanceof yt.Z||t instanceof lt.Z)return t},t.prototype.setKids=function(t){this.dict.set(P.of("Kids"),this.dict.context.obj(t))},t.prototype.getParent=function(){var e=this.dict.get(P.of("Parent"))
if(e instanceof I)return new t(this.dict.lookup(P.of("Parent"),b),e)},t.prototype.setParent=function(t){t?this.dict.set(P.of("Parent"),t):this.dict.delete(P.of("Parent"))},t.prototype.getFullyQualifiedName=function(){var t=this.getParent()
return t?t.getFullyQualifiedName()+"."+this.getPartialName():this.getPartialName()},t.prototype.getPartialName=function(){var t
return null===(t=this.T())||void 0===t?void 0:t.decodeText()},t.prototype.setPartialName=function(t){t?this.dict.set(P.of("T"),lt.Z.fromText(t)):this.dict.delete(P.of("T"))},t.prototype.setDefaultAppearance=function(t){this.dict.set(P.of("DA"),yt.Z.of(t))},t.prototype.getDefaultAppearance=function(){var t=this.DA()
return t instanceof lt.Z?t.decodeText():null==t?void 0:t.asString()},t.prototype.setFontSize=function(t){var e,n=null!==(e=this.getFullyQualifiedName())&&void 0!==e?e:"",i=this.getDefaultAppearance()
if(!i)throw new r._z(n)
var o=(0,u.JZ)(i,ge)
if(!o.match)throw new r.Iu(n)
var a=i.slice(0,o.pos-o.match[0].length),s=o.pos<=i.length?i.slice(o.pos):"",c=a+" /"+o.match[1]+" "+t+" Tf "+s
this.setDefaultAppearance(c)},t.prototype.getFlags=function(){var t,e
return null!==(e=null===(t=this.Ff())||void 0===t?void 0:t.asNumber())&&void 0!==e?e:0},t.prototype.setFlags=function(t){this.dict.set(P.of("Ff"),l.of(t))},t.prototype.hasFlag=function(t){return 0!=(this.getFlags()&t)},t.prototype.setFlag=function(t){var e=this.getFlags()
this.setFlags(e|t)},t.prototype.clearFlag=function(t){var e=this.getFlags()
this.setFlags(e&~t)},t.prototype.setFlagTo=function(t,e){e?this.setFlag(t):this.clearFlag(t)},t.prototype.getInheritableAttribute=function(t){var e
return this.ascend((function(n){e||(e=n.dict.get(t))})),e},t.prototype.ascend=function(t){t(this)
var e=this.getParent()
e&&e.ascend(t)},t}(),me=ve,ye=function(){function t(t){this.dict=t}return t.prototype.W=function(){var t=this.dict.lookup(P.of("W"))
if(t instanceof l)return t},t.prototype.getWidth=function(){var t,e
return null!==(e=null===(t=this.W())||void 0===t?void 0:t.asNumber())&&void 0!==e?e:1},t.prototype.setWidth=function(t){var e=this.dict.context.obj(t)
this.dict.set(P.of("W"),e)},t.fromDict=function(e){return new t(e)},t}(),be=ye,we=function(){function t(t){this.dict=t}return t.prototype.Rect=function(){return this.dict.lookup(P.of("Rect"),d)},t.prototype.AP=function(){return this.dict.lookupMaybe(P.of("AP"),b)},t.prototype.F=function(){var t=this.dict.lookup(P.of("F"))
return this.dict.context.lookupMaybe(t,l)},t.prototype.getRectangle=function(){var t,e=this.Rect()
return null!==(t=null==e?void 0:e.asRectangle())&&void 0!==t?t:{x:0,y:0,width:0,height:0}},t.prototype.setRectangle=function(t){var e=t.x,n=t.y,r=t.width,i=t.height,o=this.dict.context.obj([e,n,e+r,n+i])
this.dict.set(P.of("Rect"),o)},t.prototype.getAppearanceState=function(){var t=this.dict.lookup(P.of("AS"))
if(t instanceof P)return t},t.prototype.setAppearanceState=function(t){this.dict.set(P.of("AS"),t)},t.prototype.setAppearances=function(t){this.dict.set(P.of("AP"),t)},t.prototype.ensureAP=function(){var t=this.AP()
return t||(t=this.dict.context.obj({}),this.dict.set(P.of("AP"),t)),t},t.prototype.getNormalAppearance=function(){var t=this.ensureAP().get(P.of("N"))
if(t instanceof I||t instanceof b)return t
throw new Error("Unexpected N type: "+(null==t?void 0:t.constructor.name))},t.prototype.setNormalAppearance=function(t){this.ensureAP().set(P.of("N"),t)},t.prototype.setRolloverAppearance=function(t){this.ensureAP().set(P.of("R"),t)},t.prototype.setDownAppearance=function(t){this.ensureAP().set(P.of("D"),t)},t.prototype.removeRolloverAppearance=function(){var t=this.AP()
null==t||t.delete(P.of("R"))},t.prototype.removeDownAppearance=function(){var t=this.AP()
null==t||t.delete(P.of("D"))},t.prototype.getAppearances=function(){var t=this.AP()
if(t)return{normal:t.lookup(P.of("N"),b,R),rollover:t.lookupMaybe(P.of("R"),b,R),down:t.lookupMaybe(P.of("D"),b,R)}},t.prototype.getFlags=function(){var t,e
return null!==(e=null===(t=this.F())||void 0===t?void 0:t.asNumber())&&void 0!==e?e:0},t.prototype.setFlags=function(t){this.dict.set(P.of("F"),l.of(t))},t.prototype.hasFlag=function(t){return 0!=(this.getFlags()&t)},t.prototype.setFlag=function(t){var e=this.getFlags()
this.setFlags(e|t)},t.prototype.clearFlag=function(t){var e=this.getFlags()
this.setFlags(e&~t)},t.prototype.setFlagTo=function(t,e){e?this.setFlag(t):this.clearFlag(t)},t.fromDict=function(e){return new t(e)},t}(),xe=we,Se=function(){function t(t){this.dict=t}return t.prototype.R=function(){var t=this.dict.lookup(P.of("R"))
if(t instanceof l)return t},t.prototype.BC=function(){var t=this.dict.lookup(P.of("BC"))
if(t instanceof d)return t},t.prototype.BG=function(){var t=this.dict.lookup(P.of("BG"))
if(t instanceof d)return t},t.prototype.CA=function(){var t=this.dict.lookup(P.of("CA"))
if(t instanceof lt.Z||t instanceof yt.Z)return t},t.prototype.RC=function(){var t=this.dict.lookup(P.of("RC"))
if(t instanceof lt.Z||t instanceof yt.Z)return t},t.prototype.AC=function(){var t=this.dict.lookup(P.of("AC"))
if(t instanceof lt.Z||t instanceof yt.Z)return t},t.prototype.getRotation=function(){var t
return null===(t=this.R())||void 0===t?void 0:t.asNumber()},t.prototype.getBorderColor=function(){var t=this.BC()
if(t){for(var e=[],n=0,r=null==t?void 0:t.size();n<r;n++){var i=t.get(n)
i instanceof l&&e.push(i.asNumber())}return e}},t.prototype.getBackgroundColor=function(){var t=this.BG()
if(t){for(var e=[],n=0,r=null==t?void 0:t.size();n<r;n++){var i=t.get(n)
i instanceof l&&e.push(i.asNumber())}return e}},t.prototype.getCaptions=function(){var t=this.CA(),e=this.RC(),n=this.AC()
return{normal:null==t?void 0:t.decodeText(),rollover:null==e?void 0:e.decodeText(),down:null==n?void 0:n.decodeText()}},t.prototype.setRotation=function(t){var e=this.dict.context.obj(t)
this.dict.set(P.of("R"),e)},t.prototype.setBorderColor=function(t){var e=this.dict.context.obj(t)
this.dict.set(P.of("BC"),e)},t.prototype.setBackgroundColor=function(t){var e=this.dict.context.obj(t)
this.dict.set(P.of("BG"),e)},t.prototype.setCaptions=function(t){var e=lt.Z.fromText(t.normal)
if(this.dict.set(P.of("CA"),e),t.rollover){var n=lt.Z.fromText(t.rollover)
this.dict.set(P.of("RC"),n)}else this.dict.delete(P.of("RC"))
if(t.down){var r=lt.Z.fromText(t.down)
this.dict.set(P.of("AC"),r)}else this.dict.delete(P.of("AC"))},t.fromDict=function(e){return new t(e)},t}(),Ce=Se,Te=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.prototype.MK=function(){var t=this.dict.lookup(P.of("MK"))
if(t instanceof b)return t},e.prototype.BS=function(){var t=this.dict.lookup(P.of("BS"))
if(t instanceof b)return t},e.prototype.DA=function(){var t=this.dict.lookup(P.of("DA"))
if(t instanceof yt.Z||t instanceof lt.Z)return t},e.prototype.P=function(){var t=this.dict.get(P.of("P"))
if(t instanceof I)return t},e.prototype.setDefaultAppearance=function(t){this.dict.set(P.of("DA"),yt.Z.of(t))},e.prototype.getDefaultAppearance=function(){var t=this.DA()
return t instanceof lt.Z?t.decodeText():null==t?void 0:t.asString()},e.prototype.getAppearanceCharacteristics=function(){var t=this.MK()
if(t)return Ce.fromDict(t)},e.prototype.getOrCreateAppearanceCharacteristics=function(){var t=this.MK()
if(t)return Ce.fromDict(t)
var e=Ce.fromDict(this.dict.context.obj({}))
return this.dict.set(P.of("MK"),e.dict),e},e.prototype.getBorderStyle=function(){var t=this.BS()
if(t)return be.fromDict(t)},e.prototype.getOrCreateBorderStyle=function(){var t=this.BS()
if(t)return be.fromDict(t)
var e=be.fromDict(this.dict.context.obj({}))
return this.dict.set(P.of("BS"),e.dict),e},e.prototype.getOnValue=function(){var t,e=null===(t=this.getAppearances())||void 0===t?void 0:t.normal
if(e instanceof b)for(var n=e.keys(),r=0,i=n.length;r<i;r++){var o=n[r]
if(o!==P.of("Off"))return o}},e.fromDict=function(t){return new e(t)},e.create=function(t,n){return new e(t.obj({Type:"Annot",Subtype:"Widget",Rect:[0,0,0,0],Parent:n}))},e}(xe),Ee=Te,ke=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.prototype.FT=function(){var t=this.getInheritableAttribute(P.of("FT"))
return this.dict.context.lookup(t,P)},e.prototype.getWidgets=function(){var t=this.Kids()
if(!t)return[Ee.fromDict(this.dict)]
for(var e=new Array(t.size()),n=0,r=t.size();n<r;n++){var i=t.lookup(n,b)
e[n]=Ee.fromDict(i)}return e},e.prototype.addWidget=function(t){this.normalizedEntries().Kids.push(t)},e.prototype.removeWidget=function(t){var e=this.Kids()
if(e){if(t<0||t>e.size())throw new r.sE(t,0,e.size())
e.remove(t)}else{if(0!==t)throw new r.sE(t,0,0)
this.setKids([])}},e.prototype.normalizedEntries=function(){var t=this.Kids()
return t||(t=this.dict.context.obj([this.ref]),this.dict.set(P.of("Kids"),t)),{Kids:t}},e.fromDict=function(t,n){return new e(t,n)},e}(me),Ae=ke,Pe=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.prototype.Opt=function(){return this.dict.lookupMaybe(P.of("Opt"),yt.Z,lt.Z,d)},e.prototype.setOpt=function(t){this.dict.set(P.of("Opt"),this.dict.context.obj(t))},e.prototype.getExportValues=function(){var t=this.Opt()
if(t){if(t instanceof yt.Z||t instanceof lt.Z)return[t]
for(var e=[],n=0,r=t.size();n<r;n++){var i=t.lookup(n);(i instanceof yt.Z||i instanceof lt.Z)&&e.push(i)}return e}},e.prototype.removeExportValue=function(t){var e=this.Opt()
if(e)if(e instanceof yt.Z||e instanceof lt.Z){if(0!==t)throw new r.sE(t,0,0)
this.setOpt([])}else{if(t<0||t>e.size())throw new r.sE(t,0,e.size())
e.remove(t)}},e.prototype.normalizeExportValues=function(){for(var t,e,n,r,i=null!==(t=this.getExportValues())&&void 0!==t?t:[],o=[],a=this.getWidgets(),s=0,u=a.length;s<u;s++){var c=a[s],h=null!==(e=i[s])&&void 0!==e?e:lt.Z.fromText(null!==(r=null===(n=c.getOnValue())||void 0===n?void 0:n.decodeText())&&void 0!==r?r:"")
o.push(h)}this.setOpt(o)},e.prototype.addOpt=function(t,e){var n
this.normalizeExportValues()
var r,i=t.decodeText()
if(e)for(var o=null!==(n=this.getExportValues())&&void 0!==n?n:[],a=0,s=o.length;a<s;a++)o[a].decodeText()===i&&(r=a)
var u=this.Opt()
return u.push(t),null!=r?r:u.size()-1},e.prototype.addWidgetWithOpt=function(t,e,n){var r=this.addOpt(e,n),i=P.of(String(r))
return this.addWidget(t),i},e}(Ae),Fe=Pe,Re=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.prototype.setValue=function(t){var e
if(t!==(null!==(e=this.getOnValue())&&void 0!==e?e:P.of("Yes"))&&t!==P.of("Off"))throw new r.vM
this.dict.set(P.of("V"),t)
for(var n=this.getWidgets(),i=0,o=n.length;i<o;i++){var a=n[i],s=a.getOnValue()===t?t:P.of("Off")
a.setAppearanceState(s)}},e.prototype.getValue=function(){var t=this.V()
return t instanceof P?t:P.of("Off")},e.prototype.getOnValue=function(){var t=this.getWidgets()[0]
return null==t?void 0:t.getOnValue()},e.fromDict=function(t,n){return new e(t,n)},e.create=function(t){var n=t.obj({FT:"Btn",Kids:[]})
return new e(n,t.register(n))},e}(Fe),Oe=Re,De=function(t){return 1<<t}
!function(t){t[t.ReadOnly=De(0)]="ReadOnly",t[t.Required=De(1)]="Required",t[t.NoExport=De(2)]="NoExport"}(ce||(ce={})),function(t){t[t.NoToggleToOff=De(14)]="NoToggleToOff",t[t.Radio=De(15)]="Radio",t[t.PushButton=De(16)]="PushButton",t[t.RadiosInUnison=De(25)]="RadiosInUnison"}(he||(he={})),function(t){t[t.Multiline=De(12)]="Multiline",t[t.Password=De(13)]="Password",t[t.FileSelect=De(20)]="FileSelect",t[t.DoNotSpellCheck=De(22)]="DoNotSpellCheck",t[t.DoNotScroll=De(23)]="DoNotScroll",t[t.Comb=De(24)]="Comb",t[t.RichText=De(25)]="RichText"}(le||(le={})),function(t){t[t.Combo=De(17)]="Combo",t[t.Edit=De(18)]="Edit",t[t.Sort=De(19)]="Sort",t[t.MultiSelect=De(21)]="MultiSelect",t[t.DoNotSpellCheck=De(22)]="DoNotSpellCheck",t[t.CommitOnSelChange=De(26)]="CommitOnSelChange"}(fe||(fe={}))
var Me=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.prototype.setValues=function(t){if(this.hasFlag(fe.Combo)&&!this.hasFlag(fe.Edit)&&!this.valuesAreValid(t))throw new r.vM
if(0===t.length&&this.dict.delete(P.of("V")),1===t.length&&this.dict.set(P.of("V"),t[0]),t.length>1){if(!this.hasFlag(fe.MultiSelect))throw new r.TC
this.dict.set(P.of("V"),this.dict.context.obj(t))}this.updateSelectedIndices(t)},e.prototype.valuesAreValid=function(t){for(var e=this.getOptions(),n=function(n,r){var i=t[n].decodeText()
if(!e.find((function(t){return i===(t.display||t.value).decodeText()})))return{value:!1}},r=0,i=t.length;r<i;r++){var o=n(r)
if("object"==typeof o)return o.value}return!0},e.prototype.updateSelectedIndices=function(t){if(t.length>1){for(var e=new Array(t.length),n=this.getOptions(),r=function(r,i){var o=t[r].decodeText()
e[r]=n.findIndex((function(t){return o===(t.display||t.value).decodeText()}))},i=0,o=t.length;i<o;i++)r(i)
this.dict.set(P.of("I"),this.dict.context.obj(e.sort()))}else this.dict.delete(P.of("I"))},e.prototype.getValues=function(){var t=this.V()
if(t instanceof yt.Z||t instanceof lt.Z)return[t]
if(t instanceof d){for(var e=[],n=0,r=t.size();n<r;n++){var i=t.lookup(n);(i instanceof yt.Z||i instanceof lt.Z)&&e.push(i)}return e}return[]},e.prototype.Opt=function(){return this.dict.lookupMaybe(P.of("Opt"),yt.Z,lt.Z,d)},e.prototype.setOptions=function(t){for(var e=new Array(t.length),n=0,r=t.length;n<r;n++){var i=t[n],o=i.value,a=i.display
e[n]=this.dict.context.obj([o,a||o])}this.dict.set(P.of("Opt"),this.dict.context.obj(e))},e.prototype.getOptions=function(){var t=this.Opt()
if(t instanceof yt.Z||t instanceof lt.Z)return[{value:t,display:t}]
if(t instanceof d){for(var e=[],n=0,r=t.size();n<r;n++){var i=t.lookup(n)
if((i instanceof yt.Z||i instanceof lt.Z)&&e.push({value:i,display:i}),i instanceof d&&i.size()>0){var o=i.lookup(0,yt.Z,lt.Z),a=i.lookupMaybe(1,yt.Z,lt.Z)
e.push({value:o,display:a||o})}}return e}return[]},e}(Ae),Ie=Me,Ne=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.fromDict=function(t,n){return new e(t,n)},e.create=function(t){var n=t.obj({FT:"Ch",Ff:fe.Combo,Kids:[]})
return new e(n,t.register(n))},e}(Ie),_e=Ne,Be=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.prototype.addField=function(t){var e=this.normalizedEntries().Kids
null==e||e.push(t)},e.prototype.normalizedEntries=function(){var t=this.Kids()
return t||(t=this.dict.context.obj([]),this.dict.set(P.of("Kids"),t)),{Kids:t}},e.fromDict=function(t,n){return new e(t,n)},e.create=function(t){var n=t.obj({})
return new e(n,t.register(n))},e}(me),Le=Be,Ue=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.fromDict=function(t,n){return new e(t,n)},e}(Ae),je=Ue,Ge=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.prototype.MaxLen=function(){var t=this.dict.lookup(P.of("MaxLen"))
if(t instanceof l)return t},e.prototype.Q=function(){var t=this.dict.lookup(P.of("Q"))
if(t instanceof l)return t},e.prototype.setMaxLength=function(t){this.dict.set(P.of("MaxLen"),l.of(t))},e.prototype.removeMaxLength=function(){this.dict.delete(P.of("MaxLen"))},e.prototype.getMaxLength=function(){var t
return null===(t=this.MaxLen())||void 0===t?void 0:t.asNumber()},e.prototype.setQuadding=function(t){this.dict.set(P.of("Q"),l.of(t))},e.prototype.getQuadding=function(){var t
return null===(t=this.Q())||void 0===t?void 0:t.asNumber()},e.prototype.setValue=function(t){this.dict.set(P.of("V"),t)},e.prototype.removeValue=function(){this.dict.delete(P.of("V"))},e.prototype.getValue=function(){var t=this.V()
if(t instanceof yt.Z||t instanceof lt.Z)return t},e.fromDict=function(t,n){return new e(t,n)},e.create=function(t){var n=t.obj({FT:"Tx",Kids:[]})
return new e(n,t.register(n))},e}(Ae),ze=Ge,He=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.fromDict=function(t,n){return new e(t,n)},e.create=function(t){var n=t.obj({FT:"Btn",Ff:he.PushButton,Kids:[]})
return new e(n,t.register(n))},e}(Fe),Ve=He,Ze=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.prototype.setValue=function(t){if(!this.getOnValues().includes(t)&&t!==P.of("Off"))throw new r.vM
this.dict.set(P.of("V"),t)
for(var e=this.getWidgets(),n=0,i=e.length;n<i;n++){var o=e[n],a=o.getOnValue()===t?t:P.of("Off")
o.setAppearanceState(a)}},e.prototype.getValue=function(){var t=this.V()
return t instanceof P?t:P.of("Off")},e.prototype.getOnValues=function(){for(var t=this.getWidgets(),e=[],n=0,r=t.length;n<r;n++){var i=t[n].getOnValue()
i&&e.push(i)}return e},e.fromDict=function(t,n){return new e(t,n)},e.create=function(t){var n=t.obj({FT:"Btn",Ff:he.Radio,Kids:[]})
return new e(n,t.register(n))},e}(Fe),We=Ze,qe=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.fromDict=function(t,n){return new e(t,n)},e.create=function(t){var n=t.obj({FT:"Ch",Kids:[]})
return new e(n,t.register(n))},e}(Ie),Ke=qe,Xe=function(t){if(!t)return[]
for(var e=[],n=0,r=t.size();n<r;n++){var i=t.get(n),o=t.lookup(n)
i instanceof I&&o instanceof b&&e.push([Ye(o,i),i])}return e},Ye=function(t,e){return Je(t)?Le.fromDict(t,e):Qe(t,e)},Je=function(t){var e=t.lookup(P.of("Kids"))
if(e instanceof d)for(var n=0,r=e.size();n<r;n++){var i=e.lookup(n)
if(i instanceof b&&i.has(P.of("T")))return!0}return!1},Qe=function(t,e){var n=nn(t,P.of("FT")),r=t.context.lookup(n,P)
return r===P.of("Btn")?$e(t,e):r===P.of("Ch")?tn(t,e):r===P.of("Tx")?ze.fromDict(t,e):r===P.of("Sig")?je.fromDict(t,e):Ae.fromDict(t,e)},$e=function(t,e){var n,r=nn(t,P.of("Ff")),i=t.context.lookupMaybe(r,l),o=null!==(n=null==i?void 0:i.asNumber())&&void 0!==n?n:0
return en(o,he.PushButton)?Ve.fromDict(t,e):en(o,he.Radio)?We.fromDict(t,e):Oe.fromDict(t,e)},tn=function(t,e){var n,r=nn(t,P.of("Ff")),i=t.context.lookupMaybe(r,l),o=null!==(n=null==i?void 0:i.asNumber())&&void 0!==n?n:0
return en(o,fe.Combo)?_e.fromDict(t,e):Ke.fromDict(t,e)},en=function(t,e){return 0!=(t&e)},nn=function(t,e){var n
return rn(t,(function(t){n||(n=t.get(e))})),n},rn=function(t,e){e(t)
var n=t.lookupMaybe(P.of("Parent"),b)
n&&rn(n,e)},on=function(){function t(t){this.dict=t}return t.prototype.Fields=function(){var t=this.dict.lookup(P.of("Fields"))
if(t instanceof d)return t},t.prototype.getFields=function(){for(var t=this.normalizedEntries().Fields,e=new Array(t.size()),n=0,r=t.size();n<r;n++){var i=t.get(n),o=t.lookup(n,b)
e[n]=[Ye(o,i),i]}return e},t.prototype.getAllFields=function(){var t=[],e=function(n){if(n)for(var r=0,i=n.length;r<i;r++){var o=n[r]
t.push(o)
var a=o[0]
a instanceof Le&&e(Xe(a.Kids()))}}
return e(this.getFields()),t},t.prototype.addField=function(t){var e=this.normalizedEntries().Fields
null==e||e.push(t)},t.prototype.removeField=function(t){var e=t.getParent(),n=void 0===e?this.normalizedEntries().Fields:e.Kids(),r=null==n?void 0:n.indexOf(t.ref)
if(void 0===n||void 0===r)throw new Error("Tried to remove inexistent field "+t.getFullyQualifiedName())
n.remove(r),void 0!==e&&0===n.size()&&this.removeField(e)},t.prototype.normalizedEntries=function(){var t=this.Fields()
return t||(t=this.dict.context.obj([]),this.dict.set(P.of("Fields"),t)),{Fields:t}},t.fromDict=function(e){return new t(e)},t.create=function(e){return new t(e.obj({Fields:[]}))},t}(),an=on,sn=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.prototype.Pages=function(){return this.lookup(P.of("Pages"),b)},e.prototype.AcroForm=function(){return this.lookupMaybe(P.of("AcroForm"),b)},e.prototype.getAcroForm=function(){var t=this.AcroForm()
if(t)return an.fromDict(t)},e.prototype.getOrCreateAcroForm=function(){var t=this.getAcroForm()
if(!t){t=an.create(this.context)
var e=this.context.register(t.dict)
this.set(P.of("AcroForm"),e)}return t},e.prototype.ViewerPreferences=function(){return this.lookupMaybe(P.of("ViewerPreferences"),b)},e.prototype.getViewerPreferences=function(){var t=this.ViewerPreferences()
if(t)return pe.fromDict(t)},e.prototype.getOrCreateViewerPreferences=function(){var t=this.getViewerPreferences()
if(!t){t=pe.create(this.context)
var e=this.context.register(t.dict)
this.set(P.of("ViewerPreferences"),e)}return t},e.prototype.insertLeafNode=function(t,e){var n=this.get(P.of("Pages"))
return this.Pages().insertLeafNode(t,e)||n},e.prototype.removeLeafNode=function(t){this.Pages().removeLeafNode(t)},e.withContextAndPages=function(t,n){var r=new Map
return r.set(P.of("Type"),P.of("Catalog")),r.set(P.of("Pages"),n),new e(r,t)},e.fromMapWithContext=function(t,n){return new e(t,n)},e}(b),un=sn,cn=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,o.ZT)(e,t),e.prototype.Parent=function(){return this.lookup(P.of("Parent"))},e.prototype.Kids=function(){return this.lookup(P.of("Kids"),d)},e.prototype.Count=function(){return this.lookup(P.of("Count"),l)},e.prototype.pushTreeNode=function(t){this.Kids().push(t)},e.prototype.pushLeafNode=function(t){var e=this.Kids()
this.insertLeafKid(e.size(),t)},e.prototype.insertLeafNode=function(t,n){var i=this.Kids(),o=this.Count().asNumber()
if(n>o)throw new r.Y8(n,o)
for(var a=n,s=0,u=i.size();s<u;s++){if(0===a)return void this.insertLeafKid(s,t)
var c=i.get(s),h=this.context.lookup(c)
if(h instanceof e){if(h.Count().asNumber()>a)return h.insertLeafNode(t,a)||c
a-=h.Count().asNumber()}h instanceof W&&(a-=1)}if(0!==a)throw new r.bg(n,"insertLeafNode")
this.insertLeafKid(i.size(),t)},e.prototype.removeLeafNode=function(t,n){void 0===n&&(n=!0)
var i=this.Kids(),o=this.Count().asNumber()
if(t>=o)throw new r.Y8(t,o)
for(var a=t,s=0,u=i.size();s<u;s++){var c=i.get(s),h=this.context.lookup(c)
if(h instanceof e){if(h.Count().asNumber()>a)return h.removeLeafNode(a,n),void(n&&0===h.Kids().size()&&i.remove(s))
a-=h.Count().asNumber()}if(h instanceof W){if(0===a)return void this.removeKid(s)
a-=1}}throw new r.bg(t,"removeLeafNode")},e.prototype.ascend=function(t){t(this)
var e=this.Parent()
e&&e.ascend(t)},e.prototype.traverse=function(t){for(var n=this.Kids(),r=0,i=n.size();r<i;r++){var o=n.get(r),a=this.context.lookup(o)
a instanceof e&&a.traverse(t),t(a,o)}},e.prototype.insertLeafKid=function(t,e){var n=this.Kids()
this.ascend((function(t){var e=t.Count().asNumber()+1
t.set(P.of("Count"),l.of(e))})),n.insert(t,e)},e.prototype.removeKid=function(t){var e=this.Kids()
e.lookup(t)instanceof W&&this.ascend((function(t){var e=t.Count().asNumber()-1
t.set(P.of("Count"),l.of(e))})),e.remove(t)},e.withContext=function(t,n){var r=new Map
return r.set(P.of("Type"),P.of("Pages")),r.set(P.of("Kids"),t.obj([])),r.set(P.of("Count"),t.obj(0)),n&&r.set(P.of("Parent"),n),new e(r,t)},e.fromMapWithContext=function(t,n){return new e(t,n)},e}(b),hn=cn,ln=new Uint8Array(256)
ln[i.Z.Zero]=1,ln[i.Z.One]=1,ln[i.Z.Two]=1,ln[i.Z.Three]=1,ln[i.Z.Four]=1,ln[i.Z.Five]=1,ln[i.Z.Six]=1,ln[i.Z.Seven]=1,ln[i.Z.Eight]=1,ln[i.Z.Nine]=1
var fn=new Uint8Array(256)
fn[i.Z.Period]=1,fn[i.Z.Plus]=1,fn[i.Z.Minus]=1
for(var dn=new Uint8Array(256),pn=0;pn<256;pn++)dn[pn]=ln[pn]||fn[pn]?1:0
var gn,vn=i.Z.Newline,mn=i.Z.CarriageReturn,yn=function(){function t(t,e){void 0===e&&(e=!1),this.bytes=t,this.capNumbers=e}return t.prototype.parseRawInt=function(){for(var t="";!this.bytes.done();){var e=this.bytes.peek()
if(!ln[e])break
t+=(0,u.D_)(this.bytes.next())}var n=Number(t)
if(!t||!isFinite(n))throw new r.RS(this.bytes.position(),t)
return n},t.prototype.parseRawNumber=function(){for(var t="";!this.bytes.done();){var e=this.bytes.peek()
if(!dn[e])break
if(t+=(0,u.D_)(this.bytes.next()),e===i.Z.Period)break}for(;!this.bytes.done()&&(e=this.bytes.peek(),ln[e]);)t+=(0,u.D_)(this.bytes.next())
var n=Number(t)
if(!t||!isFinite(n))throw new r.RS(this.bytes.position(),t)
if(n>Number.MAX_SAFE_INTEGER){if(this.capNumbers){var o="Parsed number that is too large for some PDF readers: "+t+", using Number.MAX_SAFE_INTEGER instead."
return console.warn(o),Number.MAX_SAFE_INTEGER}o="Parsed number that is too large for some PDF readers: "+t+", not capping.",console.warn(o)}return n},t.prototype.skipWhitespace=function(){for(;!this.bytes.done()&&x[this.bytes.peek()];)this.bytes.next()},t.prototype.skipLine=function(){for(;!this.bytes.done();){var t=this.bytes.peek()
if(t===vn||t===mn)return
this.bytes.next()}},t.prototype.skipComment=function(){if(this.bytes.peek()!==i.Z.Percent)return!1
for(;!this.bytes.done();){var t=this.bytes.peek()
if(t===vn||t===mn)return!0
this.bytes.next()}return!0},t.prototype.skipWhitespaceAndComments=function(){for(this.skipWhitespace();this.skipComment();)this.skipWhitespace()},t.prototype.matchKeyword=function(t){for(var e=this.bytes.offset(),n=0,r=t.length;n<r;n++)if(this.bytes.done()||this.bytes.next()!==t[n])return this.bytes.moveTo(e),!1
return!0},t}(),bn=yn,wn=function(){function t(t){this.idx=0,this.line=0,this.column=0,this.bytes=t,this.length=this.bytes.length}return t.prototype.moveTo=function(t){this.idx=t},t.prototype.next=function(){var t=this.bytes[this.idx++]
return t===i.Z.Newline?(this.line+=1,this.column=0):this.column+=1,t},t.prototype.assertNext=function(t){if(this.peek()!==t)throw new r.ze(this.position(),t,this.peek())
return this.next()},t.prototype.peek=function(){return this.bytes[this.idx]},t.prototype.peekAhead=function(t){return this.bytes[this.idx+t]},t.prototype.peekAt=function(t){return this.bytes[t]},t.prototype.done=function(){return this.idx>=this.length},t.prototype.offset=function(){return this.idx},t.prototype.slice=function(t,e){return this.bytes.slice(t,e)},t.prototype.position=function(){return{line:this.line,column:this.column,offset:this.idx}},t.of=function(e){return new t(e)},t.fromPDFRawStream=function(e){return t.of(oe(e).decode())},t}(),xn=i.Z.Space,Sn=i.Z.CarriageReturn,Cn=i.Z.Newline,Tn=[i.Z.s,i.Z.t,i.Z.r,i.Z.e,i.Z.a,i.Z.m],En=[i.Z.e,i.Z.n,i.Z.d,i.Z.s,i.Z.t,i.Z.r,i.Z.e,i.Z.a,i.Z.m],kn={header:[i.Z.Percent,i.Z.P,i.Z.D,i.Z.F,i.Z.Dash],eof:[i.Z.Percent,i.Z.Percent,i.Z.E,i.Z.O,i.Z.F],obj:[i.Z.o,i.Z.b,i.Z.j],endobj:[i.Z.e,i.Z.n,i.Z.d,i.Z.o,i.Z.b,i.Z.j],xref:[i.Z.x,i.Z.r,i.Z.e,i.Z.f],trailer:[i.Z.t,i.Z.r,i.Z.a,i.Z.i,i.Z.l,i.Z.e,i.Z.r],startxref:[i.Z.s,i.Z.t,i.Z.a,i.Z.r,i.Z.t,i.Z.x,i.Z.r,i.Z.e,i.Z.f],true:[i.Z.t,i.Z.r,i.Z.u,i.Z.e],false:[i.Z.f,i.Z.a,i.Z.l,i.Z.s,i.Z.e],null:[i.Z.n,i.Z.u,i.Z.l,i.Z.l],stream:Tn,streamEOF1:(0,o.pr)(Tn,[xn,Sn,Cn]),streamEOF2:(0,o.pr)(Tn,[Sn,Cn]),streamEOF3:(0,o.pr)(Tn,[Sn]),streamEOF4:(0,o.pr)(Tn,[Cn]),endstream:En,EOF1endstream:(0,o.pr)([Sn,Cn],En),EOF2endstream:(0,o.pr)([Sn],En),EOF3endstream:(0,o.pr)([Cn],En)},An=function(t){function e(e,n,r){void 0===r&&(r=!1)
var i=t.call(this,e,r)||this
return i.context=n,i}return(0,o.ZT)(e,t),e.prototype.parseObject=function(){if(this.skipWhitespaceAndComments(),this.matchKeyword(kn.true))return g.True
if(this.matchKeyword(kn.false))return g.False
if(this.matchKeyword(kn.null))return m
var t=this.bytes.peek()
if(t===i.Z.LessThan&&this.bytes.peekAhead(1)===i.Z.LessThan)return this.parseDictOrStream()
if(t===i.Z.LessThan)return this.parseHexString()
if(t===i.Z.LeftParen)return this.parseString()
if(t===i.Z.ForwardSlash)return this.parseName()
if(t===i.Z.LeftSquareBracket)return this.parseArray()
if(dn[t])return this.parseNumberOrRef()
throw new r.EX(this.bytes.position(),t)},e.prototype.parseNumberOrRef=function(){var t=this.parseRawNumber()
this.skipWhitespaceAndComments()
var e=this.bytes.offset()
if(ln[this.bytes.peek()]){var n=this.parseRawNumber()
if(this.skipWhitespaceAndComments(),this.bytes.peek()===i.Z.R)return this.bytes.assertNext(i.Z.R),I.of(t,n)}return this.bytes.moveTo(e),l.of(t)},e.prototype.parseHexString=function(){var t=""
for(this.bytes.assertNext(i.Z.LessThan);!this.bytes.done()&&this.bytes.peek()!==i.Z.GreaterThan;)t+=(0,u.D_)(this.bytes.next())
return this.bytes.assertNext(i.Z.GreaterThan),lt.Z.of(t)},e.prototype.parseString=function(){for(var t=0,e=!1,n="";!this.bytes.done();){var o=this.bytes.next()
if(n+=(0,u.D_)(o),e||(o===i.Z.LeftParen&&(t+=1),o===i.Z.RightParen&&(t-=1)),o===i.Z.BackSlash?e=!e:e&&(e=!1),0===t)return yt.Z.of(n.substring(1,n.length-1))}throw new r.or(this.bytes.position())},e.prototype.parseName=function(){this.bytes.assertNext(i.Z.ForwardSlash)
for(var t="";!this.bytes.done();){var e=this.bytes.peek()
if(x[e]||w[e])break
t+=(0,u.D_)(e),this.bytes.next()}return P.of(t)},e.prototype.parseArray=function(){this.bytes.assertNext(i.Z.LeftSquareBracket),this.skipWhitespaceAndComments()
for(var t=d.withContext(this.context);this.bytes.peek()!==i.Z.RightSquareBracket;){var e=this.parseObject()
t.push(e),this.skipWhitespaceAndComments()}return this.bytes.assertNext(i.Z.RightSquareBracket),t},e.prototype.parseDict=function(){this.bytes.assertNext(i.Z.LessThan),this.bytes.assertNext(i.Z.LessThan),this.skipWhitespaceAndComments()
for(var t=new Map;!this.bytes.done()&&this.bytes.peek()!==i.Z.GreaterThan&&this.bytes.peekAhead(1)!==i.Z.GreaterThan;){var e=this.parseName(),n=this.parseObject()
t.set(e,n),this.skipWhitespaceAndComments()}this.skipWhitespaceAndComments(),this.bytes.assertNext(i.Z.GreaterThan),this.bytes.assertNext(i.Z.GreaterThan)
var r=t.get(P.of("Type"))
return r===P.of("Catalog")?un.fromMapWithContext(t,this.context):r===P.of("Pages")?hn.fromMapWithContext(t,this.context):r===P.of("Page")?W.fromMapWithContext(t,this.context):b.fromMapWithContext(t,this.context)},e.prototype.parseDictOrStream=function(){var t=this.bytes.position(),e=this.parseDict()
if(this.skipWhitespaceAndComments(),!(this.matchKeyword(kn.streamEOF1)||this.matchKeyword(kn.streamEOF2)||this.matchKeyword(kn.streamEOF3)||this.matchKeyword(kn.streamEOF4)||this.matchKeyword(kn.stream)))return e
var n,r=this.bytes.offset(),i=e.get(P.of("Length"))
i instanceof l?(n=r+i.asNumber(),this.bytes.moveTo(n),this.skipWhitespaceAndComments(),this.matchKeyword(kn.endstream)||(this.bytes.moveTo(r),n=this.findEndOfStreamFallback(t))):n=this.findEndOfStreamFallback(t)
var o=this.bytes.slice(r,n)
return O.of(e,o)},e.prototype.findEndOfStreamFallback=function(t){for(var e=1,n=this.bytes.offset();!this.bytes.done()&&(n=this.bytes.offset(),this.matchKeyword(kn.stream)?e+=1:this.matchKeyword(kn.EOF1endstream)||this.matchKeyword(kn.EOF2endstream)||this.matchKeyword(kn.EOF3endstream)||this.matchKeyword(kn.endstream)?e-=1:this.bytes.next(),0!==e););if(0!==e)throw new r.Sh(t)
return n},e.forBytes=function(t,n,r){return new e(wn.of(t),n,r)},e.forByteStream=function(t,n,r){return void 0===r&&(r=!1),new e(t,n,r)},e}(bn),Pn=function(t){function e(e,n){var r=t.call(this,wn.fromPDFRawStream(e),e.dict.context)||this,i=e.dict
return r.alreadyParsed=!1,r.shouldWaitForTick=n||function(){return!1},r.firstOffset=i.lookup(P.of("First"),l).asNumber(),r.objectCount=i.lookup(P.of("N"),l).asNumber(),r}return(0,o.ZT)(e,t),e.prototype.parseIntoContext=function(){return(0,o.mG)(this,void 0,void 0,(function(){var t,e,n,i,a,s,c,h
return(0,o.Jh)(this,(function(o){switch(o.label){case 0:if(this.alreadyParsed)throw new r.aj("PDFObjectStreamParser","parseIntoContext")
this.alreadyParsed=!0,t=this.parseOffsetsAndObjectNumbers(),e=0,n=t.length,o.label=1
case 1:return e<n?(i=t[e],a=i.objectNumber,s=i.offset,this.bytes.moveTo(this.firstOffset+s),c=this.parseObject(),h=I.of(a,0),this.context.assign(h,c),this.shouldWaitForTick()?[4,(0,u.uj)()]:[3,3]):[3,4]
case 2:o.sent(),o.label=3
case 3:return e++,[3,1]
case 4:return[2]}}))}))},e.prototype.parseOffsetsAndObjectNumbers=function(){for(var t=[],e=0,n=this.objectCount;e<n;e++){this.skipWhitespaceAndComments()
var r=this.parseRawInt()
this.skipWhitespaceAndComments()
var i=this.parseRawInt()
t.push({objectNumber:r,offset:i})}return t},e.forStream=function(t,n){return new e(t,n)},e}(An),Fn=Pn,Rn=function(){function t(t){this.alreadyParsed=!1,this.dict=t.dict,this.bytes=wn.fromPDFRawStream(t),this.context=this.dict.context
var e=this.dict.lookup(P.of("Size"),l),n=this.dict.lookup(P.of("Index"))
if(n instanceof d){this.subsections=[]
for(var r=0,i=n.size();r<i;r+=2){var o=n.lookup(r+0,l).asNumber(),a=n.lookup(r+1,l).asNumber()
this.subsections.push({firstObjectNumber:o,length:a})}}else this.subsections=[{firstObjectNumber:0,length:e.asNumber()}]
var s=this.dict.lookup(P.of("W"),d)
for(this.byteWidths=[-1,-1,-1],r=0,i=s.size();r<i;r++)this.byteWidths[r]=s.lookup(r,l).asNumber()}return t.prototype.parseIntoContext=function(){if(this.alreadyParsed)throw new r.aj("PDFXRefStreamParser","parseIntoContext")
return this.alreadyParsed=!0,this.context.trailerInfo={Root:this.dict.get(P.of("Root")),Encrypt:this.dict.get(P.of("Encrypt")),Info:this.dict.get(P.of("Info")),ID:this.dict.get(P.of("ID"))},this.parseEntries()},t.prototype.parseEntries=function(){for(var t=[],e=this.byteWidths,n=e[0],r=e[1],i=e[2],o=0,a=this.subsections.length;o<a;o++)for(var s=this.subsections[o],u=s.firstObjectNumber,c=s.length,h=0;h<c;h++){for(var l=0,f=0,d=n;f<d;f++)l=l<<8|this.bytes.next()
var p=0
for(f=0,d=r;f<d;f++)p=p<<8|this.bytes.next()
var g=0
for(f=0,d=i;f<d;f++)g=g<<8|this.bytes.next()
0===n&&(l=1)
var v=u+h,m={ref:I.of(v,g),offset:p,deleted:0===l,inObjectStream:2===l}
t.push(m)}return t},t.forStream=function(e){return new t(e)},t}(),On=Rn,Dn=function(t){function e(e,n,r,i){void 0===n&&(n=1/0),void 0===r&&(r=!1),void 0===i&&(i=!1)
var o=t.call(this,wn.of(e),V.create(),i)||this
return o.alreadyParsed=!1,o.parsedObjects=0,o.shouldWaitForTick=function(){return o.parsedObjects+=1,o.parsedObjects%o.objectsPerTick==0},o.objectsPerTick=n,o.throwOnInvalidObject=r,o}return(0,o.ZT)(e,t),e.prototype.parseDocument=function(){return(0,o.mG)(this,void 0,void 0,(function(){var t,e
return(0,o.Jh)(this,(function(n){switch(n.label){case 0:if(this.alreadyParsed)throw new r.aj("PDFParser","parseDocument")
this.alreadyParsed=!0,this.context.header=this.parseHeader(),n.label=1
case 1:return this.bytes.done()?[3,3]:[4,this.parseDocumentSection()]
case 2:if(n.sent(),(e=this.bytes.offset())===t)throw new r.Dr(this.bytes.position())
return t=e,[3,1]
case 3:return this.maybeRecoverRoot(),this.context.lookup(I.of(0))&&(console.warn("Removing parsed object: 0 0 R"),this.context.delete(I.of(0))),[2,this.context]}}))}))},e.prototype.maybeRecoverRoot=function(){var t=function(t){return t instanceof b&&t.lookup(P.of("Type"))===P.of("Catalog")}
if(!t(this.context.lookup(this.context.trailerInfo.Root)))for(var e=this.context.enumerateIndirectObjects(),n=0,r=e.length;n<r;n++){var i=e[n],o=i[0]
t(i[1])&&(this.context.trailerInfo.Root=o)}},e.prototype.parseHeader=function(){for(;!this.bytes.done();){if(this.matchKeyword(kn.header)){var t=this.parseRawInt()
this.bytes.assertNext(i.Z.Period)
var e=this.parseRawInt(),n=c.forVersion(t,e)
return this.skipBinaryHeaderComment(),n}this.bytes.next()}throw new r.ku(this.bytes.position())},e.prototype.parseIndirectObjectHeader=function(){this.skipWhitespaceAndComments()
var t=this.parseRawInt()
this.skipWhitespaceAndComments()
var e=this.parseRawInt()
if(this.skipWhitespaceAndComments(),!this.matchKeyword(kn.obj))throw new r.uu(this.bytes.position(),kn.obj)
return I.of(t,e)},e.prototype.matchIndirectObjectHeader=function(){var t=this.bytes.offset()
try{return this.parseIndirectObjectHeader(),!0}catch(e){return this.bytes.moveTo(t),!1}},e.prototype.parseIndirectObject=function(){return(0,o.mG)(this,void 0,void 0,(function(){var t,e
return(0,o.Jh)(this,(function(n){switch(n.label){case 0:return t=this.parseIndirectObjectHeader(),this.skipWhitespaceAndComments(),e=this.parseObject(),this.skipWhitespaceAndComments(),this.matchKeyword(kn.endobj),e instanceof O&&e.dict.lookup(P.of("Type"))===P.of("ObjStm")?[4,Fn.forStream(e,this.shouldWaitForTick).parseIntoContext()]:[3,2]
case 1:return n.sent(),[3,3]
case 2:e instanceof O&&e.dict.lookup(P.of("Type"))===P.of("XRef")?On.forStream(e).parseIntoContext():this.context.assign(t,e),n.label=3
case 3:return[2,t]}}))}))},e.prototype.tryToParseInvalidIndirectObject=function(){var t=this.bytes.position(),e="Trying to parse invalid object: "+JSON.stringify(t)+")"
if(this.throwOnInvalidObject)throw new Error(e)
console.warn(e)
var n=this.parseIndirectObjectHeader()
console.warn("Invalid object ref: "+n),this.skipWhitespaceAndComments()
for(var i=this.bytes.offset(),o=!0;!this.bytes.done()&&(this.matchKeyword(kn.endobj)&&(o=!1),o);)this.bytes.next()
if(o)throw new r.Ke(t)
var a=this.bytes.offset()-kn.endobj.length,s=it.of(this.bytes.slice(i,a))
return this.context.assign(n,s),n},e.prototype.parseIndirectObjects=function(){return(0,o.mG)(this,void 0,void 0,(function(){var t
return(0,o.Jh)(this,(function(e){switch(e.label){case 0:this.skipWhitespaceAndComments(),e.label=1
case 1:if(this.bytes.done()||!ln[this.bytes.peek()])return[3,8]
t=this.bytes.offset(),e.label=2
case 2:return e.trys.push([2,4,,5]),[4,this.parseIndirectObject()]
case 3:return e.sent(),[3,5]
case 4:return e.sent(),this.bytes.moveTo(t),this.tryToParseInvalidIndirectObject(),[3,5]
case 5:return this.skipWhitespaceAndComments(),this.skipJibberish(),this.shouldWaitForTick()?[4,(0,u.uj)()]:[3,7]
case 6:e.sent(),e.label=7
case 7:return[3,1]
case 8:return[2]}}))}))},e.prototype.maybeParseCrossRefSection=function(){if(this.skipWhitespaceAndComments(),this.matchKeyword(kn.xref)){this.skipWhitespaceAndComments()
for(var t=-1,e=Y.createEmpty();!this.bytes.done()&&ln[this.bytes.peek()];){var n=this.parseRawInt()
this.skipWhitespaceAndComments()
var r=this.parseRawInt()
this.skipWhitespaceAndComments()
var o=this.bytes.peek()
if(o===i.Z.n||o===i.Z.f){var a=I.of(t,r)
this.bytes.next()===i.Z.n?e.addEntry(a,n):e.addDeletedEntry(a,n),t+=1}else t=n
this.skipWhitespaceAndComments()}return e}},e.prototype.maybeParseTrailerDict=function(){if(this.skipWhitespaceAndComments(),this.matchKeyword(kn.trailer)){this.skipWhitespaceAndComments()
var t=this.parseDict(),e=this.context
e.trailerInfo={Root:t.get(P.of("Root"))||e.trailerInfo.Root,Encrypt:t.get(P.of("Encrypt"))||e.trailerInfo.Encrypt,Info:t.get(P.of("Info"))||e.trailerInfo.Info,ID:t.get(P.of("ID"))||e.trailerInfo.ID}}},e.prototype.maybeParseTrailer=function(){if(this.skipWhitespaceAndComments(),this.matchKeyword(kn.startxref)){this.skipWhitespaceAndComments()
var t=this.parseRawInt()
return this.skipWhitespace(),this.matchKeyword(kn.eof),this.skipWhitespaceAndComments(),this.matchKeyword(kn.eof),this.skipWhitespaceAndComments(),J.forLastCrossRefSectionOffset(t)}},e.prototype.parseDocumentSection=function(){return(0,o.mG)(this,void 0,void 0,(function(){return(0,o.Jh)(this,(function(t){switch(t.label){case 0:return[4,this.parseIndirectObjects()]
case 1:return t.sent(),this.maybeParseCrossRefSection(),this.maybeParseTrailerDict(),this.maybeParseTrailer(),this.skipJibberish(),[2]}}))}))},e.prototype.skipJibberish=function(){for(this.skipWhitespaceAndComments();!this.bytes.done();){var t=this.bytes.offset(),e=this.bytes.peek()
if(e>=i.Z.Space&&e<=i.Z.Tilde&&(this.matchKeyword(kn.xref)||this.matchKeyword(kn.trailer)||this.matchKeyword(kn.startxref)||this.matchIndirectObjectHeader())){this.bytes.moveTo(t)
break}this.bytes.next()}},e.prototype.skipBinaryHeaderComment=function(){this.skipWhitespaceAndComments()
try{var t=this.bytes.offset()
this.parseIndirectObjectHeader(),this.bytes.moveTo(t)}catch(t){this.bytes.next(),this.skipWhitespaceAndComments()}},e.forBytesWithOptions=function(t,n,r,i){return new e(t,n,r,i)},e}(An),Mn=Dn,In=function(t){return 1<<t}
!function(t){t[t.Invisible=In(0)]="Invisible",t[t.Hidden=In(1)]="Hidden",t[t.Print=In(2)]="Print",t[t.NoZoom=In(3)]="NoZoom",t[t.NoRotate=In(4)]="NoRotate",t[t.NoView=In(5)]="NoView",t[t.ReadOnly=In(6)]="ReadOnly",t[t.Locked=In(7)]="Locked",t[t.ToggleNoView=In(8)]="ToggleNoView",t[t.LockedContents=In(9)]="LockedContents"}(gn||(gn={}))},6887:function(t,e,n){"use strict"
var r=n(1445),i=n(3729),o=n(4345),a=n(7569),s=n(2124),u=function(t){function e(e){var n=t.call(this)||this
return n.value=e,n}return(0,r.ZT)(e,t),e.prototype.asBytes=function(){for(var t=this.value+(this.value.length%2==1?"0":""),e=t.length,n=new Uint8Array(t.length/2),r=0,i=0;r<e;){var o=parseInt(t.substring(r,r+2),16)
n[i]=o,r+=2,i+=1}return n},e.prototype.decodeText=function(){var t=this.asBytes()
return(0,a.O0)(t)?(0,a.aB)(t):(0,a.Ji)(t)},e.prototype.decodeDate=function(){var t=this.decodeText(),e=(0,a.sG)(t)
if(!e)throw new s.dm(t)
return e},e.prototype.asString=function(){return this.value},e.prototype.clone=function(){return e.of(this.value)},e.prototype.toString=function(){return"<"+this.value+">"},e.prototype.sizeInBytes=function(){return this.value.length+2},e.prototype.copyBytesInto=function(t,e){return t[e++]=o.Z.LessThan,e+=(0,a.C1)(this.value,t,e),t[e++]=o.Z.GreaterThan,this.value.length+2},e.of=function(t){return new e(t)},e.fromText=function(t){for(var n=(0,a.nB)(t),r="",i=0,o=n.length;i<o;i++)r+=(0,a.CK)(n[i],4)
return new e(r)},e}(i.Z)
e.Z=u},3729:function(t,e,n){"use strict"
var r=n(2124),i=function(){function t(){}return t.prototype.clone=function(t){throw new r.iQ(this.constructor.name,"clone")},t.prototype.toString=function(){throw new r.iQ(this.constructor.name,"toString")},t.prototype.sizeInBytes=function(){throw new r.iQ(this.constructor.name,"sizeInBytes")},t.prototype.copyBytesInto=function(t,e){throw new r.iQ(this.constructor.name,"copyBytesInto")},t}()
e.Z=i},4521:function(t,e,n){"use strict"
var r=n(1445),i=n(3729),o=n(4345),a=n(7569),s=n(2124),u=function(t){function e(e){var n=t.call(this)||this
return n.value=e,n}return(0,r.ZT)(e,t),e.prototype.asBytes=function(){for(var t=[],e="",n=!1,r=function(e){void 0!==e&&t.push(e),n=!1},i=0,s=this.value.length;i<s;i++){var u=this.value[i],c=(0,a.GN)(u),h=this.value[i+1]
n?c===o.Z.Newline||c===o.Z.CarriageReturn?r():c===o.Z.n?r(o.Z.Newline):c===o.Z.r?r(o.Z.CarriageReturn):c===o.Z.t?r(o.Z.Tab):c===o.Z.b?r(o.Z.Backspace):c===o.Z.f?r(o.Z.FormFeed):c===o.Z.LeftParen?r(o.Z.LeftParen):c===o.Z.RightParen?r(o.Z.RightParen):c===o.Z.Backspace?r(o.Z.BackSlash):c>=o.Z.Zero&&c<=o.Z.Seven?3!==(e+=u).length&&h>="0"&&h<="7"||(r(parseInt(e,8)),e=""):r(c):c===o.Z.BackSlash?n=!0:r(c)}return new Uint8Array(t)},e.prototype.decodeText=function(){var t=this.asBytes()
return(0,a.O0)(t)?(0,a.aB)(t):(0,a.Ji)(t)},e.prototype.decodeDate=function(){var t=this.decodeText(),e=(0,a.sG)(t)
if(!e)throw new s.dm(t)
return e},e.prototype.asString=function(){return this.value},e.prototype.clone=function(){return e.of(this.value)},e.prototype.toString=function(){return"("+this.value+")"},e.prototype.sizeInBytes=function(){return this.value.length+2},e.prototype.copyBytesInto=function(t,e){return t[e++]=o.Z.LeftParen,e+=(0,a.C1)(this.value,t,e),t[e++]=o.Z.RightParen,this.value.length+2},e.of=function(t){return new e(t)},e.fromDate=function(t){return new e("D:"+(0,a.Sk)(String(t.getUTCFullYear()),4,"0")+(0,a.Sk)(String(t.getUTCMonth()+1),2,"0")+(0,a.Sk)(String(t.getUTCDate()),2,"0")+(0,a.Sk)(String(t.getUTCHours()),2,"0")+(0,a.Sk)(String(t.getUTCMinutes()),2,"0")+(0,a.Sk)(String(t.getUTCSeconds()),2,"0")+"Z")},e}(i.Z)
e.Z=u},4345:function(t,e){"use strict"
var n
!function(t){t[t.Null=0]="Null",t[t.Backspace=8]="Backspace",t[t.Tab=9]="Tab",t[t.Newline=10]="Newline",t[t.FormFeed=12]="FormFeed",t[t.CarriageReturn=13]="CarriageReturn",t[t.Space=32]="Space",t[t.ExclamationPoint=33]="ExclamationPoint",t[t.Hash=35]="Hash",t[t.Percent=37]="Percent",t[t.LeftParen=40]="LeftParen",t[t.RightParen=41]="RightParen",t[t.Plus=43]="Plus",t[t.Minus=45]="Minus",t[t.Dash=45]="Dash",t[t.Period=46]="Period",t[t.ForwardSlash=47]="ForwardSlash",t[t.Zero=48]="Zero",t[t.One=49]="One",t[t.Two=50]="Two",t[t.Three=51]="Three",t[t.Four=52]="Four",t[t.Five=53]="Five",t[t.Six=54]="Six",t[t.Seven=55]="Seven",t[t.Eight=56]="Eight",t[t.Nine=57]="Nine",t[t.LessThan=60]="LessThan",t[t.GreaterThan=62]="GreaterThan",t[t.A=65]="A",t[t.D=68]="D",t[t.E=69]="E",t[t.F=70]="F",t[t.O=79]="O",t[t.P=80]="P",t[t.R=82]="R",t[t.LeftSquareBracket=91]="LeftSquareBracket",t[t.BackSlash=92]="BackSlash",t[t.RightSquareBracket=93]="RightSquareBracket",t[t.a=97]="a",t[t.b=98]="b",t[t.d=100]="d",t[t.e=101]="e",t[t.f=102]="f",t[t.i=105]="i",t[t.j=106]="j",t[t.l=108]="l",t[t.m=109]="m",t[t.n=110]="n",t[t.o=111]="o",t[t.r=114]="r",t[t.s=115]="s",t[t.t=116]="t",t[t.u=117]="u",t[t.x=120]="x",t[t.LeftCurly=123]="LeftCurly",t[t.RightCurly=125]="RightCurly",t[t.Tilde=126]="Tilde"}(n||(n={})),e.Z=n},165:function(t,e,n){"use strict"
n.r(e),n.d(e,{BlendMode:function(){return r.bt},ColorTypes:function(){return r.dd},CombedTextLayoutError:function(){return r.ll},EncryptedPDFError:function(){return r.ip},ExceededMaxLengthError:function(){return r.uo},FieldAlreadyExistsError:function(){return r.MY},FieldExistsAsNonTerminalError:function(){return r.Ke},FontkitNotRegisteredError:function(){return r.I3},ForeignPageError:function(){return r.Nl},InvalidFieldNamePartError:function(){return r.Ic},InvalidMaxLengthError:function(){return r._D},LineCapStyle:function(){return r.kP},LineJoinStyle:function(){return r.r4},MissingOnValueCheckError:function(){return r.eB},NoSuchFieldError:function(){return r.wx},PDFButton:function(){return r.Qu},PDFCheckBox:function(){return r.vL},PDFDocument:function(){return r.Rj},PDFDropdown:function(){return r.PK},PDFEmbeddedPage:function(){return r.Cx},PDFField:function(){return r.Lf},PDFFont:function(){return r.MR},PDFForm:function(){return r.o0},PDFImage:function(){return r.qC},PDFJavaScript:function(){return r.jM},PDFOptionList:function(){return r.BE},PDFPage:function(){return r.SI},PDFRadioGroup:function(){return r.bF},PDFSignature:function(){return r.yg},PDFTextField:function(){return r.X7},PageSizes:function(){return r.bi},ParseSpeeds:function(){return r.uc},RemovePageFromEmptyDocumentError:function(){return r.jw},RichTextFieldReadError:function(){return r.E9},RotationTypes:function(){return r.Yt},StandardFonts:function(){return r.EE},TextAlignment:function(){return r.H},TextRenderingMode:function(){return r.pO},UnexpectedFieldTypeError:function(){return r.VV},adjustDimsForRotation:function(){return r.bY},appendBezierCurve:function(){return r.rz},appendQuadraticCurve:function(){return r.ad},asNumber:function(){return r.mH},asPDFName:function(){return r.N$},asPDFNumber:function(){return r.Q0},beginMarkedContent:function(){return r.Sn},beginText:function(){return r.Fv},clip:function(){return r.oq},clipEvenOdd:function(){return r.Rx},closePath:function(){return r.ZM},cmyk:function(){return r.Qn},colorToComponents:function(){return r.wG},componentsToColor:function(){return r.p4},concatTransformationMatrix:function(){return r.Fc},defaultButtonAppearanceProvider:function(){return r.DS},defaultCheckBoxAppearanceProvider:function(){return r.S8},defaultDropdownAppearanceProvider:function(){return r.oX},defaultOptionListAppearanceProvider:function(){return r.E3},defaultRadioGroupAppearanceProvider:function(){return r.gi},defaultTextFieldAppearanceProvider:function(){return r.HN},degrees:function(){return r.RW},degreesToRadians:function(){return r.Ht},drawButton:function(){return r.FC},drawCheckBox:function(){return r.lg},drawCheckMark:function(){return r.ZT},drawEllipse:function(){return r.xL},drawEllipsePath:function(){return r.If},drawImage:function(){return r.AE},drawLine:function(){return r.pS},drawLinesOfText:function(){return r.kw},drawObject:function(){return r.Ax},drawOptionList:function(){return r.JT},drawPage:function(){return r.sS},drawRadioButton:function(){return r.lt},drawRectangle:function(){return r.JG},drawSvgPath:function(){return r.os},drawText:function(){return r.yU},drawTextField:function(){return r.zh},drawTextLines:function(){return r.Bj},endMarkedContent:function(){return r.Ip},endPath:function(){return r.ZY},endText:function(){return r.Qj},fill:function(){return r.hl},fillAndStroke:function(){return r.y2},grayscale:function(){return r.se},layoutCombedText:function(){return r.qs},layoutMultilineText:function(){return r.jg},layoutSinglelineText:function(){return r.v0},lineTo:function(){return r.kZ},moveText:function(){return r.Vb},moveTo:function(){return r.Ao},nextLine:function(){return r.t},normalizeAppearance:function(){return r.TE},popGraphicsState:function(){return r.Pq},pushGraphicsState:function(){return r.bo},radians:function(){return r.uR},radiansToDegrees:function(){return r.vi},rectangle:function(){return r.C9},reduceRotation:function(){return r.U6},restoreDashPattern:function(){return r.YN},rgb:function(){return r.B8},rotateAndSkewTextDegreesAndTranslate:function(){return r.YK},rotateAndSkewTextRadiansAndTranslate:function(){return r.Iz},rotateDegrees:function(){return r.Ge},rotateInPlace:function(){return r.kc},rotateRadians:function(){return r.Ih},rotateRectangle:function(){return r.o7},scale:function(){return r.bA},setCharacterSpacing:function(){return r.xl},setCharacterSqueeze:function(){return r.Q$},setDashPattern:function(){return r.Rt},setFillingCmykColor:function(){return r.O8},setFillingColor:function(){return r.l6},setFillingGrayscaleColor:function(){return r.GR},setFillingRgbColor:function(){return r.mE},setFontAndSize:function(){return r.vE},setGraphicsState:function(){return r.Ou},setLineCap:function(){return r.xC},setLineHeight:function(){return r.H7},setLineJoin:function(){return r.lf},setLineWidth:function(){return r.H_},setStrokingCmykColor:function(){return r.sp},setStrokingColor:function(){return r.yb},setStrokingGrayscaleColor:function(){return r.dA},setStrokingRgbColor:function(){return r.XS},setTextMatrix:function(){return r.an},setTextRenderingMode:function(){return r.zS},setTextRise:function(){return r.kW},setWordSpacing:function(){return r.nU},showText:function(){return r.V_},skewDegrees:function(){return r.Cs},skewRadians:function(){return r.VQ},square:function(){return r.h6},stroke:function(){return r.Go},toDegrees:function(){return r.Ux},toRadians:function(){return r.Yr},translate:function(){return r.Iu},AFRelationship:function(){return i.JN},AcroButtonFlags:function(){return i.Ub},AcroChoiceFlags:function(){return i.m0},AcroFieldFlags:function(){return i.PV},AcroTextFlags:function(){return i.oD},AnnotationFlags:function(){return i.TV},AppearanceCharacteristics:function(){return i.F5},CharCodes:function(){return i.iJ},CorruptPageTreeError:function(){return i.bg},CustomFontEmbedder:function(){return i.Wz},CustomFontSubsetEmbedder:function(){return i.zO},Duplex:function(){return i.$P},FileEmbedder:function(){return i.Gb},IndexOutOfBoundsError:function(){return i.sE},InvalidAcroFieldValueError:function(){return i.vM},InvalidPDFDateStringError:function(){return i.dm},InvalidTargetIndexError:function(){return i.Y8},JpegEmbedder:function(){return i.sm},MethodNotImplementedError:function(){return i.iQ},MissingCatalogError:function(){return i.SY},MissingDAEntryError:function(){return i._z},MissingKeywordError:function(){return i.uu},MissingPDFHeaderError:function(){return i.ku},MissingPageContentsEmbeddingError:function(){return i.SR},MissingTfOperatorError:function(){return i.Iu},MultiSelectValueError:function(){return i.TC},NextByteAssertionError:function(){return i.ze},NonFullScreenPageMode:function(){return i.Ie},NumberParsingError:function(){return i.RS},PDFAcroButton:function(){return i.ry},PDFAcroCheckBox:function(){return i.Ei},PDFAcroChoice:function(){return i.P0},PDFAcroComboBox:function(){return i.sS},PDFAcroField:function(){return i.Kg},PDFAcroForm:function(){return i.PS},PDFAcroListBox:function(){return i.Au},PDFAcroNonTerminal:function(){return i.qg},PDFAcroPushButton:function(){return i._},PDFAcroRadioButton:function(){return i.Ym},PDFAcroSignature:function(){return i.uQ},PDFAcroTerminal:function(){return i.Fs},PDFAcroText:function(){return i._X},PDFAnnotation:function(){return i.oY},PDFArray:function(){return i.Gr},PDFArrayIsNotRectangleError:function(){return i.sV},PDFBool:function(){return i.hd},PDFCatalog:function(){return i.lR},PDFContentStream:function(){return i.kK},PDFContext:function(){return i.o6},PDFCrossRefSection:function(){return i.w9},PDFCrossRefStream:function(){return i.PO},PDFDict:function(){return i.mh},PDFFlateStream:function(){return i.QM},PDFHeader:function(){return i.o},PDFHexString:function(){return i.Ij},PDFInvalidObject:function(){return i.wt},PDFInvalidObjectParsingError:function(){return i.Ke},PDFName:function(){return i.wQ},PDFNull:function(){return i.oX},PDFNumber:function(){return i.qI},PDFObject:function(){return i.bU},PDFObjectCopier:function(){return i.Wy},PDFObjectParser:function(){return i.D2},PDFObjectParsingError:function(){return i.EX},PDFObjectStream:function(){return i.Qc},PDFObjectStreamParser:function(){return i.gz},PDFOperator:function(){return i.sI},PDFOperatorNames:function(){return i.Y3},PDFPageEmbedder:function(){return i.dS},PDFPageLeaf:function(){return i.Eg},PDFPageTree:function(){return i.N8},PDFParser:function(){return i.h9},PDFParsingError:function(){return i.$O},PDFRawStream:function(){return i.SV},PDFRef:function(){return i.$F},PDFStream:function(){return i.kO},PDFStreamParsingError:function(){return i.Sh},PDFStreamWriter:function(){return i.pV},PDFString:function(){return i.u2},PDFTrailer:function(){return i.$4},PDFTrailerDict:function(){return i.O5},PDFWidgetAnnotation:function(){return i.ci},PDFWriter:function(){return i.Bn},PDFXRefStreamParser:function(){return i.Dw},PageEmbeddingMismatchedContextError:function(){return i.qX},PngEmbedder:function(){return i.Le},PrintScaling:function(){return i.A1},PrivateConstructorError:function(){return i.Gp},ReadingDirection:function(){return i.M$},ReparseError:function(){return i.aj},StalledParserError:function(){return i.Dr},StandardFontEmbedder:function(){return i.IL},UnbalancedParenthesisError:function(){return i.or},UnexpectedObjectTypeError:function(){return i.VX},UnrecognizedStreamTypeError:function(){return i.NP},UnsupportedEncodingError:function(){return i.l},ViewerPreferences:function(){return i.gF},createPDFAcroField:function(){return i.WT},createPDFAcroFields:function(){return i.P_},decodePDFRawStream:function(){return i.yh},Cache:function(){return u.Ct},StandardFontValues:function(){return u.Rl},addRandomSuffix:function(){return u.si},arrayAsString:function(){return u.Qo},assertEachIs:function(){return u.pO},assertInteger:function(){return u.Qk},assertIs:function(){return u.ku},assertIsOneOf:function(){return u.DA},assertIsOneOfOrUndefined:function(){return u.GT},assertIsSubset:function(){return u.k$},assertMultiple:function(){return u.m_},assertOrUndefined:function(){return u.MU},assertPositive:function(){return u.z7},assertRange:function(){return u.gI},assertRangeOrUndefined:function(){return u.zo},backtick:function(){return u.Ni},breakTextIntoLines:function(){return u.KU},byAscendingId:function(){return u.Yj},bytesFor:function(){return u.DV},canBeConvertedToUint8Array:function(){return u.TE},charAtIndex:function(){return u.Vk},charFromCode:function(){return u.D_},charFromHexCode:function(){return u.Dc},charSplit:function(){return u.Qs},cleanText:function(){return u.FV},copyStringIntoBuffer:function(){return u.C1},createTypeErrorMsg:function(){return u._s},createValueErrorMsg:function(){return u.Bj},decodeFromBase64:function(){return u.nN},decodeFromBase64DataUri:function(){return u.Gw},encodeToBase64:function(){return u.Eo},error:function(){return u.vU},escapeRegExp:function(){return u.hr},escapedNewlineChars:function(){return u.xV},findLastMatch:function(){return u.JZ},getType:function(){return u.oL},hasSurrogates:function(){return u.pY},hasUtf16BOM:function(){return u.O0},highSurrogate:function(){return u.D1},isNewlineChar:function(){return u.By},isStandardFont:function(){return u.Cl},isType:function(){return u.P9},isWithinBMP:function(){return u.yo},last:function(){return u.Z$},lineSplit:function(){return u.f7},lowSurrogate:function(){return u.$O},mergeIntoTypedArray:function(){return u.M5},mergeLines:function(){return u.VX},mergeUint8Arrays:function(){return u.Jm},newlineChars:function(){return u.H1},numberToString:function(){return u.D$},padStart:function(){return u.Sk},parseDate:function(){return u.sG},pdfDocEncodingDecode:function(){return u.Ji},pluckIndices:function(){return u.Jp},range:function(){return u.w6},rectanglesAreEqual:function(){return u.EO},reverseArray:function(){return u.GP},singleQuote:function(){return u.ox},sizeInBytes:function(){return u.yJ},sortedUniq:function(){return u.PF},sum:function(){return u.Sm},toCharCode:function(){return u.GN},toCodePoint:function(){return u.yq},toHexString:function(){return u.zv},toHexStringOfMinLength:function(){return u.CK},toUint8Array:function(){return u._f},typedArrayFor:function(){return u.b3},utf16Decode:function(){return u.aB},utf16Encode:function(){return u.nB},utf8Encode:function(){return u.Rn},values:function(){return u.VO},waitForTick:function(){return u.uj}})
var r=n(2638),i=n(7970),o=n(4993),a={}
for(var s in o)["default","BlendMode","ColorTypes","CombedTextLayoutError","EncryptedPDFError","ExceededMaxLengthError","FieldAlreadyExistsError","FieldExistsAsNonTerminalError","FontkitNotRegisteredError","ForeignPageError","InvalidFieldNamePartError","InvalidMaxLengthError","LineCapStyle","LineJoinStyle","MissingOnValueCheckError","NoSuchFieldError","PDFButton","PDFCheckBox","PDFDocument","PDFDropdown","PDFEmbeddedPage","PDFField","PDFFont","PDFForm","PDFImage","PDFJavaScript","PDFOptionList","PDFPage","PDFRadioGroup","PDFSignature","PDFTextField","PageSizes","ParseSpeeds","RemovePageFromEmptyDocumentError","RichTextFieldReadError","RotationTypes","StandardFonts","TextAlignment","TextRenderingMode","UnexpectedFieldTypeError","adjustDimsForRotation","appendBezierCurve","appendQuadraticCurve","asNumber","asPDFName","asPDFNumber","beginMarkedContent","beginText","clip","clipEvenOdd","closePath","cmyk","colorToComponents","componentsToColor","concatTransformationMatrix","defaultButtonAppearanceProvider","defaultCheckBoxAppearanceProvider","defaultDropdownAppearanceProvider","defaultOptionListAppearanceProvider","defaultRadioGroupAppearanceProvider","defaultTextFieldAppearanceProvider","degrees","degreesToRadians","drawButton","drawCheckBox","drawCheckMark","drawEllipse","drawEllipsePath","drawImage","drawLine","drawLinesOfText","drawObject","drawOptionList","drawPage","drawRadioButton","drawRectangle","drawSvgPath","drawText","drawTextField","drawTextLines","endMarkedContent","endPath","endText","fill","fillAndStroke","grayscale","layoutCombedText","layoutMultilineText","layoutSinglelineText","lineTo","moveText","moveTo","nextLine","normalizeAppearance","popGraphicsState","pushGraphicsState","radians","radiansToDegrees","rectangle","reduceRotation","restoreDashPattern","rgb","rotateAndSkewTextDegreesAndTranslate","rotateAndSkewTextRadiansAndTranslate","rotateDegrees","rotateInPlace","rotateRadians","rotateRectangle","scale","setCharacterSpacing","setCharacterSqueeze","setDashPattern","setFillingCmykColor","setFillingColor","setFillingGrayscaleColor","setFillingRgbColor","setFontAndSize","setGraphicsState","setLineCap","setLineHeight","setLineJoin","setLineWidth","setStrokingCmykColor","setStrokingColor","setStrokingGrayscaleColor","setStrokingRgbColor","setTextMatrix","setTextRenderingMode","setTextRise","setWordSpacing","showText","skewDegrees","skewRadians","square","stroke","toDegrees","toRadians","translate","AFRelationship","AcroButtonFlags","AcroChoiceFlags","AcroFieldFlags","AcroTextFlags","AnnotationFlags","AppearanceCharacteristics","CharCodes","CorruptPageTreeError","CustomFontEmbedder","CustomFontSubsetEmbedder","Duplex","FileEmbedder","IndexOutOfBoundsError","InvalidAcroFieldValueError","InvalidPDFDateStringError","InvalidTargetIndexError","JpegEmbedder","MethodNotImplementedError","MissingCatalogError","MissingDAEntryError","MissingKeywordError","MissingPDFHeaderError","MissingPageContentsEmbeddingError","MissingTfOperatorError","MultiSelectValueError","NextByteAssertionError","NonFullScreenPageMode","NumberParsingError","PDFAcroButton","PDFAcroCheckBox","PDFAcroChoice","PDFAcroComboBox","PDFAcroField","PDFAcroForm","PDFAcroListBox","PDFAcroNonTerminal","PDFAcroPushButton","PDFAcroRadioButton","PDFAcroSignature","PDFAcroTerminal","PDFAcroText","PDFAnnotation","PDFArray","PDFArrayIsNotRectangleError","PDFBool","PDFCatalog","PDFContentStream","PDFContext","PDFCrossRefSection","PDFCrossRefStream","PDFDict","PDFFlateStream","PDFHeader","PDFHexString","PDFInvalidObject","PDFInvalidObjectParsingError","PDFName","PDFNull","PDFNumber","PDFObject","PDFObjectCopier","PDFObjectParser","PDFObjectParsingError","PDFObjectStream","PDFObjectStreamParser","PDFOperator","PDFOperatorNames","PDFPageEmbedder","PDFPageLeaf","PDFPageTree","PDFParser","PDFParsingError","PDFRawStream","PDFRef","PDFStream","PDFStreamParsingError","PDFStreamWriter","PDFString","PDFTrailer","PDFTrailerDict","PDFWidgetAnnotation","PDFWriter","PDFXRefStreamParser","PageEmbeddingMismatchedContextError","PngEmbedder","PrintScaling","PrivateConstructorError","ReadingDirection","ReparseError","StalledParserError","StandardFontEmbedder","UnbalancedParenthesisError","UnexpectedObjectTypeError","UnrecognizedStreamTypeError","UnsupportedEncodingError","ViewerPreferences","createPDFAcroField","createPDFAcroFields","decodePDFRawStream"].indexOf(s)<0&&(a[s]=function(t){return o[t]}.bind(0,s))
n.d(e,a)
var u=n(7569)},4993:function(){},7569:function(t,e,n){"use strict"
n.d(e,{Ct:function(){return nt},Rl:function(){return D},si:function(){return h.si},Qo:function(){return g},pO:function(){return q},Qk:function(){return J},ku:function(){return Z},DA:function(){return U},GT:function(){return j},k$:function(){return G},m_:function(){return Y},MU:function(){return W},z7:function(){return Q},gI:function(){return K},zo:function(){return X},Ni:function(){return N},KU:function(){return h.KU},Yj:function(){return v},DV:function(){return P},TE:function(){return S},Vk:function(){return h.Vk},D_:function(){return h.D_},Dc:function(){return h.Dc},Qs:function(){return h.Qs},FV:function(){return h.FV},C1:function(){return h.C1},_s:function(){return V},Bj:function(){return L},nN:function(){return s},Gw:function(){return c},Eo:function(){return a},vU:function(){return F},hr:function(){return h.hr},xV:function(){return h.xV},JZ:function(){return h.JZ},oL:function(){return z},pY:function(){return E.pY},O0:function(){return E.O0},D1:function(){return E.D1},By:function(){return h.By},Cl:function(){return M},P9:function(){return H},yo:function(){return E.yo},Z$:function(){return l},f7:function(){return h.f7},$O:function(){return E.$O},M5:function(){return d},VX:function(){return h.VX},Jm:function(){return p},H1:function(){return h.H1},D$:function(){return k},Sk:function(){return h.Sk},sG:function(){return h.sG},Ji:function(){return et},Jp:function(){return x},w6:function(){return w},EO:function(){return I},GP:function(){return y},ox:function(){return _},yJ:function(){return A},PF:function(){return m},Sm:function(){return b},GN:function(){return h.GN},yq:function(){return h.yq},zv:function(){return h.zv},CK:function(){return h.CK},_f:function(){return C},b3:function(){return f},aB:function(){return E.aB},nB:function(){return E.nB},Rn:function(){return E.Rn},VO:function(){return O},uj:function(){return T}})
for(var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=new Uint8Array(256),o=0;o<r.length;o++)i[r.charCodeAt(o)]=o
for(var a=function(t){for(var e="",n=t.length,i=0;i<n;i+=3)e+=r[t[i]>>2],e+=r[(3&t[i])<<4|t[i+1]>>4],e+=r[(15&t[i+1])<<2|t[i+2]>>6],e+=r[63&t[i+2]]
return n%3==2?e=e.substring(0,e.length-1)+"=":n%3==1&&(e=e.substring(0,e.length-2)+"=="),e},s=function(t){var e,n,r,o,a,s=.75*t.length,u=t.length,c=0
"="===t[t.length-1]&&(s--,"="===t[t.length-2]&&s--)
var h=new Uint8Array(s)
for(e=0;e<u;e+=4)n=i[t.charCodeAt(e)],r=i[t.charCodeAt(e+1)],o=i[t.charCodeAt(e+2)],a=i[t.charCodeAt(e+3)],h[c++]=n<<2|r>>4,h[c++]=(15&r)<<4|o>>2,h[c++]=(3&o)<<6|63&a
return h},u=/^(data)?:?([\w\/\+]+)?;?(charset=[\w-]+|base64)?.*,/i,c=function(t){var e=t.trim(),n=e.substring(0,100).match(u)
if(!n)return s(e)
var r=n[0],i=e.substring(r.length)
return s(i)},h=n(8637),l=function(t){return t[t.length-1]},f=function(t){if(t instanceof Uint8Array)return t
for(var e=t.length,n=new Uint8Array(e),r=0;r<e;r++)n[r]=t.charCodeAt(r)
return n},d=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
for(var n=t.length,r=[],i=0;i<n;i++){var o=t[i]
r[i]=o instanceof Uint8Array?o:f(o)}var a=0
for(i=0;i<n;i++)a+=t[i].length
for(var s=new Uint8Array(a),u=0,c=0;c<n;c++)for(var h=r[c],l=0,d=h.length;l<d;l++)s[u++]=h[l]
return s},p=function(t){for(var e=0,n=0,r=t.length;n<r;n++)e+=t[n].length
var i=new Uint8Array(e),o=0
for(n=0,r=t.length;n<r;n++){var a=t[n]
i.set(a,o),o+=a.length}return i},g=function(t){for(var e="",n=0,r=t.length;n<r;n++)e+=(0,h.D_)(t[n])
return e},v=function(t,e){return t.id-e.id},m=function(t,e){for(var n=[],r=0,i=t.length;r<i;r++){var o=t[r],a=t[r-1]
0!==r&&e(o)===e(a)||n.push(o)}return n},y=function(t){for(var e=t.length,n=0,r=Math.floor(e/2);n<r;n++){var i=n,o=e-n-1,a=t[n]
t[i]=t[o],t[o]=a}return t},b=function(t){for(var e=0,n=0,r=t.length;n<r;n++)e+=t[n]
return e},w=function(t,e){for(var n=new Array(e-t),r=0,i=n.length;r<i;r++)n[r]=t+r
return n},x=function(t,e){for(var n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t[e[r]]
return n},S=function(t){return t instanceof Uint8Array||t instanceof ArrayBuffer||"string"==typeof t},C=function(t){if("string"==typeof t)return c(t)
if(t instanceof ArrayBuffer)return new Uint8Array(t)
if(t instanceof Uint8Array)return t
throw new TypeError("`input` must be one of `string | ArrayBuffer | Uint8Array`")},T=function(){return new Promise((function(t){setTimeout((function(){return t()}),0)}))},E=n(467),k=function(t){var e,n=String(t)
if(Math.abs(t)<1){if(e=parseInt(t.toString().split("e-")[1])){var r=t<0
r&&(t*=-1),t*=Math.pow(10,e-1),n="0."+new Array(e).join("0")+t.toString().substring(2),r&&(n="-"+n)}}else(e=parseInt(t.toString().split("+")[1]))>20&&(e-=20,n=(t/=Math.pow(10,e)).toString()+new Array(e+1).join("0"))
return n},A=function(t){return Math.ceil(t.toString(2).length/8)},P=function(t){for(var e=new Uint8Array(A(t)),n=1;n<=e.length;n++)e[n-1]=t>>8*(e.length-n)
return e},F=function(t){throw new Error(t)},R=n(27),O=function(t){return Object.keys(t).map((function(e){return t[e]}))},D=O(R.S4),M=function(t){return D.includes(t)},I=function(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height},N=function(t){return"`"+t+"`"},_=function(t){return"'"+t+"'"},B=function(t){var e=typeof t
return"string"===e?_(t):"undefined"===e?N(t):t},L=function(t,e,n){for(var r=new Array(n.length),i=0,o=n.length;i<o;i++){var a=n[i]
r[i]=B(a)}var s=r.join(" or ")
return N(e)+" must be one of "+s+", but was actually "+B(t)},U=function(t,e,n){Array.isArray(n)||(n=O(n))
for(var r=0,i=n.length;r<i;r++)if(t===n[r])return
throw new TypeError(L(t,e,n))},j=function(t,e,n){Array.isArray(n)||(n=O(n)),U(t,e,n.concat(void 0))},G=function(t,e,n){Array.isArray(n)||(n=O(n))
for(var r=0,i=t.length;r<i;r++)U(t[r],e,n)},z=function(t){return null===t?"null":void 0===t?"undefined":"string"==typeof t?"string":isNaN(t)?"NaN":"number"==typeof t?"number":"boolean"==typeof t?"boolean":"symbol"==typeof t?"symbol":"bigint"==typeof t?"bigint":t.constructor&&t.constructor.name?t.constructor.name:t.name?t.name:t.constructor?String(t.constructor):String(t)},H=function(t,e){return"null"===e?null===t:"undefined"===e?void 0===t:"string"===e?"string"==typeof t:"number"===e?"number"==typeof t&&!isNaN(t):"boolean"===e?"boolean"==typeof t:"symbol"===e?"symbol"==typeof t:"bigint"===e?"bigint"==typeof t:e===Date?t instanceof Date:e===Array?t instanceof Array:e===Uint8Array?t instanceof Uint8Array:e===ArrayBuffer?t instanceof ArrayBuffer:e===Function?t instanceof Function:t instanceof e[0]},V=function(t,e,n){for(var r=new Array(n.length),i=0,o=n.length;i<o;i++){var a=n[i]
"null"===a&&(r[i]=N("null")),"undefined"===a&&(r[i]=N("undefined")),"string"===a?r[i]=N("string"):"number"===a?r[i]=N("number"):"boolean"===a?r[i]=N("boolean"):"symbol"===a?r[i]=N("symbol"):"bigint"===a?r[i]=N("bigint"):a===Array?r[i]=N("Array"):a===Uint8Array?r[i]=N("Uint8Array"):a===ArrayBuffer?r[i]=N("ArrayBuffer"):r[i]=N(a[1])}var s=r.join(" or ")
return N(e)+" must be of type "+s+", but was actually of type "+N(z(t))},Z=function(t,e,n){for(var r=0,i=n.length;r<i;r++)if(H(t,n[r]))return
throw new TypeError(V(t,e,n))},W=function(t,e,n){Z(t,e,n.concat("undefined"))},q=function(t,e,n){for(var r=0,i=t.length;r<i;r++)Z(t[r],e,n)},K=function(t,e,n,r){if(Z(t,e,["number"]),Z(n,"min",["number"]),Z(r,"max",["number"]),r=Math.max(n,r),t<n||t>r)throw new Error(N(e)+" must be at least "+n+" and at most "+r+", but was actually "+t)},X=function(t,e,n,r){Z(t,e,["number","undefined"]),"number"==typeof t&&K(t,e,n,r)},Y=function(t,e,n){if(Z(t,e,["number"]),t%n!=0)throw new Error(N(e)+" must be a multiple of "+n+", but was actually "+t)},J=function(t,e){if(!Number.isInteger(t))throw new Error(N(e)+" must be an integer, but was actually "+t)},Q=function(t,e){if(![1,0].includes(Math.sign(t)))throw new Error(N(e)+" must be a positive number or 0, but was actually "+t)},$=new Uint16Array(256),tt=0;tt<256;tt++)$[tt]=tt
$[22]=(0,h.GN)(""),$[24]=(0,h.GN)("˘"),$[25]=(0,h.GN)("ˇ"),$[26]=(0,h.GN)("ˆ"),$[27]=(0,h.GN)("˙"),$[28]=(0,h.GN)("˝"),$[29]=(0,h.GN)("˛"),$[30]=(0,h.GN)("˚"),$[31]=(0,h.GN)("˜"),$[127]=(0,h.GN)("�"),$[128]=(0,h.GN)("•"),$[129]=(0,h.GN)("†"),$[130]=(0,h.GN)("‡"),$[131]=(0,h.GN)("…"),$[132]=(0,h.GN)("—"),$[133]=(0,h.GN)("–"),$[134]=(0,h.GN)("ƒ"),$[135]=(0,h.GN)("⁄"),$[136]=(0,h.GN)("‹"),$[137]=(0,h.GN)("›"),$[138]=(0,h.GN)("−"),$[139]=(0,h.GN)("‰"),$[140]=(0,h.GN)("„"),$[141]=(0,h.GN)("“"),$[142]=(0,h.GN)("”"),$[143]=(0,h.GN)("‘"),$[144]=(0,h.GN)("’"),$[145]=(0,h.GN)("‚"),$[146]=(0,h.GN)("™"),$[147]=(0,h.GN)("ﬁ"),$[148]=(0,h.GN)("ﬂ"),$[149]=(0,h.GN)("Ł"),$[150]=(0,h.GN)("Œ"),$[151]=(0,h.GN)("Š"),$[152]=(0,h.GN)("Ÿ"),$[153]=(0,h.GN)("Ž"),$[154]=(0,h.GN)("ı"),$[155]=(0,h.GN)("ł"),$[156]=(0,h.GN)("œ"),$[157]=(0,h.GN)("š"),$[158]=(0,h.GN)("ž"),$[159]=(0,h.GN)("�"),$[160]=(0,h.GN)("€"),$[173]=(0,h.GN)("�")
var et=function(t){for(var e=new Array(t.length),n=0,r=t.length;n<r;n++)e[n]=$[t[n]]
return String.fromCodePoint.apply(String,e)},nt=function(){function t(t){this.populate=t,this.value=void 0}return t.prototype.getValue=function(){return this.value},t.prototype.access=function(){return this.value||(this.value=this.populate()),this.value},t.prototype.invalidate=function(){this.value=void 0},t.populatedBy=function(e){return new t(e)},t}()},8637:function(t,e,n){"use strict"
n.d(e,{GN:function(){return r},yq:function(){return i},CK:function(){return o},zv:function(){return a},D_:function(){return s},Dc:function(){return u},Sk:function(){return c},C1:function(){return h},si:function(){return l},hr:function(){return f},FV:function(){return d},xV:function(){return p},H1:function(){return g},By:function(){return v},f7:function(){return m},VX:function(){return y},Vk:function(){return b},Qs:function(){return w},KU:function(){return x},sG:function(){return C},JZ:function(){return T}})
var r=function(t){return t.charCodeAt(0)},i=function(t){return t.codePointAt(0)},o=function(t,e){return c(t.toString(16),e,"0").toUpperCase()},a=function(t){return o(t,2)},s=function(t){return String.fromCharCode(t)},u=function(t){return s(parseInt(t,16))},c=function(t,e,n){for(var r="",i=0,o=e-t.length;i<o;i++)r+=n
return r+t},h=function(t,e,n){for(var r=t.length,i=0;i<r;i++)e[n++]=t.charCodeAt(i)
return r},l=function(t,e){return void 0===e&&(e=4),t+"-"+Math.floor(Math.random()*Math.pow(10,e))},f=function(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},d=function(t){return t.replace(/\t|\u0085|\u2028|\u2029/g,"    ").replace(/[\b\v]/g,"")},p=["\\n","\\f","\\r","\\u000B"],g=["\n","\f","\r","\v"],v=function(t){return/^[\n\f\r\u000B]$/.test(t)},m=function(t){return t.split(/[\n\f\r\u000B]/)},y=function(t){return t.replace(/[\n\f\r\u000B]/g," ")},b=function(t,e){var n,r=t.charCodeAt(e),i=e+1,o=1
return r>=55296&&r<=56319&&t.length>i&&(n=t.charCodeAt(i))>=56320&&n<=57343&&(o=2),[t.slice(e,e+o),o]},w=function(t){for(var e=[],n=0,r=t.length;n<r;){var i=b(t,n),o=i[0],a=i[1]
e.push(o),n+=a}return e},x=function(t,e,n,r){for(var i=function(t){for(var e=p.join("|"),n=["$"],r=0,i=t.length;r<i;r++){var o=t[r]
if(v(o))throw new TypeError("`wordBreak` must not include "+e)
n.push(""===o?".":f(o))}var a=n.join("|")
return new RegExp("("+e+")|((.*?)("+a+"))","gm")}(e),o=d(t).match(i),a="",s=0,u=[],c=function(){""!==a&&u.push(a),a="",s=0},h=0,l=o.length;h<l;h++){var g=o[h]
if(v(g))c()
else{var m=r(g)
s+m>n&&c(),a+=g,s+=m}}return c(),u},S=/^D:(\d\d\d\d)(\d\d)?(\d\d)?(\d\d)?(\d\d)?(\d\d)?([+\-Z])?(\d\d)?'?(\d\d)?'?$/,C=function(t){var e=t.match(S)
if(e){var n=e[1],r=e[2],i=void 0===r?"01":r,o=e[3],a=void 0===o?"01":o,s=e[4],u=void 0===s?"00":s,c=e[5],h=void 0===c?"00":c,l=e[6],f=void 0===l?"00":l,d=e[7],p=void 0===d?"Z":d,g=e[8],v=void 0===g?"00":g,m=e[9]
return new Date(n+"-"+i+"-"+a+"T"+u+":"+h+":"+f+("Z"===p?"Z":""+p+v+":"+(void 0===m?"00":m)))}},T=function(t,e){for(var n,r,i=0;i<t.length;){var o=t.substring(i).match(e)
if(!o)return{match:r,pos:i}
r=o,i+=(null!==(n=o.index)&&void 0!==n?n:0)+o[0].length}return{match:r,pos:i}}},467:function(t,e,n){"use strict"
n.d(e,{Rn:function(){return o},nB:function(){return a},yo:function(){return s},pY:function(){return u},D1:function(){return c},$O:function(){return h},aB:function(){return f},O0:function(){return b}})
var r,i=n(8637),o=function(t,e){void 0===e&&(e=!0)
var n=[]
e&&n.push(239,187,191)
for(var r=0,o=t.length;r<o;){var a=t.codePointAt(r)
if(a<128){var s=127&a
n.push(s),r+=1}else if(a<2048){s=a>>6&31|192
var u=63&a|128
n.push(s,u),r+=1}else if(a<65536){s=a>>12&15|224,u=a>>6&63|128
var c=63&a|128
n.push(s,u,c),r+=1}else{if(!(a<1114112))throw new Error("Invalid code point: 0x"+(0,i.zv)(a))
s=a>>18&7|240,u=a>>12&63|128,c=a>>6&63|128
var h=a>>0&63|128
n.push(s,u,c,h),r+=2}}return new Uint8Array(n)},a=function(t,e){void 0===e&&(e=!0)
var n=[]
e&&n.push(65279)
for(var r=0,o=t.length;r<o;){var a=t.codePointAt(r)
if(a<65536)n.push(a),r+=1
else{if(!(a<1114112))throw new Error("Invalid code point: 0x"+(0,i.zv)(a))
n.push(c(a),h(a)),r+=2}}return new Uint16Array(n)},s=function(t){return t>=0&&t<=65535},u=function(t){return t>=65536&&t<=1114111},c=function(t){return Math.floor((t-65536)/1024)+55296},h=function(t){return(t-65536)%1024+56320}
!function(t){t.BigEndian="BigEndian",t.LittleEndian="LittleEndian"}(r||(r={}))
var l="�".codePointAt(0),f=function(t,e){if(void 0===e&&(e=!0),t.length<=1)return String.fromCodePoint(l)
for(var n=e?v(t):r.BigEndian,i=e?2:0,o=[];t.length-i>=2;){var a=g(t[i++],t[i++],n)
if(d(a))if(t.length-i<2)o.push(l)
else{var s=g(t[i++],t[i++],n)
p(s)?o.push(a,s):o.push(l)}else p(a)?(i+=2,o.push(l)):o.push(a)}return i<t.length&&o.push(l),String.fromCodePoint.apply(String,o)},d=function(t){return t>=55296&&t<=56319},p=function(t){return t>=56320&&t<=57343},g=function(t,e,n){if(n===r.LittleEndian)return e<<8|t
if(n===r.BigEndian)return t<<8|e
throw new Error("Invalid byteOrder: "+n)},v=function(t){return m(t)?r.BigEndian:y(t)?r.LittleEndian:r.BigEndian},m=function(t){return 254===t[0]&&255===t[1]},y=function(t){return 255===t[0]&&254===t[1]},b=function(t){return m(t)||y(t)}},1445:function(t,e,n){"use strict"
n.d(e,{ZT:function(){return i},pi:function(){return o},_T:function(){return a},mG:function(){return s},Jh:function(){return u},pr:function(){return c}})
var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},r(t,e)}
function i(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var o=function(){return o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])
return t},o.apply(this,arguments)}
function a(t,e){var n={}
for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r])
if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function s(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function s(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e
t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}))}function u(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,r=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function c(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length
var r=Array(t),i=0
for(e=0;e<n;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)r[i]=o[a]
return r}},1970:function(t,e,n){const r=n(840),i=n(3667),o=n(3437),a=n(4205)
function s(t,e,n,o,a){const s=[].slice.call(arguments,1),u=s.length,c="function"==typeof s[u-1]
if(!c&&!r())throw new Error("Callback required as last argument")
if(!c){if(u<1)throw new Error("Too few arguments provided")
return 1===u?(n=e,e=o=void 0):2!==u||e.getContext||(o=n,n=e,e=void 0),new Promise((function(r,a){try{const a=i.create(n,o)
r(t(a,e,o))}catch(t){a(t)}}))}if(u<2)throw new Error("Too few arguments provided")
2===u?(a=n,n=e,e=o=void 0):3===u&&(e.getContext&&void 0===a?(a=o,o=void 0):(a=o,o=n,n=e,e=void 0))
try{const r=i.create(n,o)
a(null,t(r,e,o))}catch(t){a(t)}}e.create=i.create,e.toCanvas=s.bind(null,o.render),e.toDataURL=s.bind(null,o.renderToDataURL),e.toString=s.bind(null,(function(t,e,n){return a.render(t,n)}))},840:function(t){t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},1829:function(t,e,n){const r=n(6445).getSymbolSize
e.getRowColCoords=function(t){if(1===t)return[]
const e=Math.floor(t/7)+2,n=r(t),i=145===n?26:2*Math.ceil((n-13)/(2*e-2)),o=[n-7]
for(let r=1;r<e-1;r++)o[r]=o[r-1]-i
return o.push(6),o.reverse()},e.getPositions=function(t){const n=[],r=e.getRowColCoords(t),i=r.length
for(let e=0;e<i;e++)for(let t=0;t<i;t++)0===e&&0===t||0===e&&t===i-1||e===i-1&&0===t||n.push([r[e],r[t]])
return n}},121:function(t,e,n){const r=n(2851),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"]
function o(t){this.mode=r.ALPHANUMERIC,this.data=t}o.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e
for(e=0;e+2<=this.data.length;e+=2){let n=45*i.indexOf(this.data[e])
n+=i.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(i.indexOf(this.data[e]),6)},t.exports=o},2163:function(t){function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){const e=Math.floor(t/8)
return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8)
this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},3303:function(t){function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0")
this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}e.prototype.set=function(t,e,n,r){const i=t*this.size+e
this.data[i]=n,r&&(this.reservedBit[i]=!0)},e.prototype.get=function(t,e){return this.data[t*this.size+e]},e.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},e.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=e},4506:function(t,e,n){const r=n(4220),i=n(2851)
function o(t){this.mode=i.BYTE,this.data=new Uint8Array(r(t))}o.getBitsLength=function(t){return 8*t},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)},t.exports=o},2842:function(t,e,n){const r=n(7356),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430]
e.getBlocksCount=function(t,e){switch(e){case r.L:return i[4*(t-1)+0]
case r.M:return i[4*(t-1)+1]
case r.Q:return i[4*(t-1)+2]
case r.H:return i[4*(t-1)+3]
default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case r.L:return o[4*(t-1)+0]
case r.M:return o[4*(t-1)+1]
case r.Q:return o[4*(t-1)+2]
case r.H:return o[4*(t-1)+3]
default:return}}},7356:function(t,e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,n){if(e.isValid(t))return t
try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string")
switch(t.toLowerCase()){case"l":case"low":return e.L
case"m":case"medium":return e.M
case"q":case"quartile":return e.Q
case"h":case"high":return e.H
default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(t){return n}}},4280:function(t,e,n){const r=n(6445).getSymbolSize
e.getPositions=function(t){const e=r(t)
return[[0,0],[e-7,0],[0,e-7]]}},3468:function(t,e,n){const r=n(6445),i=r.getBCHDigit(1335)
e.getEncodedBits=function(t,e){const n=t.bit<<3|e
let o=n<<10
for(;r.getBCHDigit(o)-i>=0;)o^=1335<<r.getBCHDigit(o)-i
return 21522^(n<<10|o)}},1254:function(t,e){const n=new Uint8Array(512),r=new Uint8Array(256)
!function(){let t=1
for(let e=0;e<255;e++)n[e]=t,r[t]=e,t<<=1,256&t&&(t^=285)
for(let e=255;e<512;e++)n[e]=n[e-255]}(),e.log=function(t){if(t<1)throw new Error("log("+t+")")
return r[t]},e.exp=function(t){return n[t]},e.mul=function(t,e){return 0===t||0===e?0:n[r[t]+r[e]]}},3466:function(t,e,n){const r=n(2851),i=n(6445)
function o(t){this.mode=r.KANJI,this.data=t}o.getBitsLength=function(t){return 13*t},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e
for(e=0;e<this.data.length;e++){let n=i.toSJIS(this.data[e])
if(n>=33088&&n<=40956)n-=33088
else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8")
n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13)}},t.exports=o},1819:function(t,e){function n(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2==0
case e.Patterns.PATTERN001:return n%2==0
case e.Patterns.PATTERN010:return r%3==0
case e.Patterns.PATTERN011:return(n+r)%3==0
case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0
case e.Patterns.PATTERN101:return n*r%2+n*r%3==0
case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0
case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0
default:throw new Error("bad maskPattern:"+t)}}e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size
let n=0,r=0,i=0,o=null,a=null
for(let s=0;s<e;s++){r=i=0,o=a=null
for(let u=0;u<e;u++){let e=t.get(s,u)
e===o?r++:(r>=5&&(n+=r-5+3),o=e,r=1),e=t.get(u,s),e===a?i++:(i>=5&&(n+=i-5+3),a=e,i=1)}r>=5&&(n+=r-5+3),i>=5&&(n+=i-5+3)}return n},e.getPenaltyN2=function(t){const e=t.size
let n=0
for(let r=0;r<e-1;r++)for(let i=0;i<e-1;i++){const e=t.get(r,i)+t.get(r,i+1)+t.get(r+1,i)+t.get(r+1,i+1)
4!==e&&0!==e||n++}return 3*n},e.getPenaltyN3=function(t){const e=t.size
let n=0,r=0,i=0
for(let o=0;o<e;o++){r=i=0
for(let a=0;a<e;a++)r=r<<1&2047|t.get(o,a),a>=10&&(1488===r||93===r)&&n++,i=i<<1&2047|t.get(a,o),a>=10&&(1488===i||93===i)&&n++}return 40*n},e.getPenaltyN4=function(t){let e=0
const n=t.data.length
for(let r=0;r<n;r++)e+=t.data[r]
return 10*Math.abs(Math.ceil(100*e/n/5)-10)},e.applyMask=function(t,e){const r=e.size
for(let i=0;i<r;i++)for(let o=0;o<r;o++)e.isReserved(o,i)||e.xor(o,i,n(t,o,i))},e.getBestMask=function(t,n){const r=Object.keys(e.Patterns).length
let i=0,o=1/0
for(let a=0;a<r;a++){n(a),e.applyMask(a,t)
const r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t)
e.applyMask(a,t),r<o&&(o=r,i=a)}return i}},2851:function(t,e,n){const r=n(2906),i=n(8836)
e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t)
if(!r.isValid(e))throw new Error("Invalid version: "+e)
return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return i.testNumeric(t)?e.NUMERIC:i.testAlphanumeric(t)?e.ALPHANUMERIC:i.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id
throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,n){if(e.isValid(t))return t
try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string")
switch(t.toLowerCase()){case"numeric":return e.NUMERIC
case"alphanumeric":return e.ALPHANUMERIC
case"kanji":return e.KANJI
case"byte":return e.BYTE
default:throw new Error("Unknown mode: "+t)}}(t)}catch(t){return n}}},4807:function(t,e,n){const r=n(2851)
function i(t){this.mode=r.NUMERIC,this.data=t.toString()}i.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e,n,r
for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),r=parseInt(n,10),t.put(r,10)
const i=this.data.length-e
i>0&&(n=this.data.substr(e),r=parseInt(n,10),t.put(r,3*i+1))},t.exports=i},5876:function(t,e,n){const r=n(1254)
e.mul=function(t,e){const n=new Uint8Array(t.length+e.length-1)
for(let i=0;i<t.length;i++)for(let o=0;o<e.length;o++)n[i+o]^=r.mul(t[i],e[o])
return n},e.mod=function(t,e){let n=new Uint8Array(t)
for(;n.length-e.length>=0;){const t=n[0]
for(let o=0;o<e.length;o++)n[o]^=r.mul(e[o],t)
let i=0
for(;i<n.length&&0===n[i];)i++
n=n.slice(i)}return n},e.generateECPolynomial=function(t){let n=new Uint8Array([1])
for(let i=0;i<t;i++)n=e.mul(n,new Uint8Array([1,r.exp(i)]))
return n}},3667:function(t,e,n){const r=n(6445),i=n(7356),o=n(2163),a=n(3303),s=n(1829),u=n(4280),c=n(1819),h=n(2842),l=n(4179),f=n(5928),d=n(3468),p=n(2851),g=n(3250)
function v(t,e,n){const r=t.size,i=d.getEncodedBits(e,n)
let o,a
for(o=0;o<15;o++)a=1==(i>>o&1),o<6?t.set(o,8,a,!0):o<8?t.set(o+1,8,a,!0):t.set(r-15+o,8,a,!0),o<8?t.set(8,r-o-1,a,!0):o<9?t.set(8,15-o-1+1,a,!0):t.set(8,15-o-1,a,!0)
t.set(r-8,8,1,!0)}function m(t,e,n,i){let d
if(Array.isArray(t))d=g.fromArray(t)
else{if("string"!=typeof t)throw new Error("Invalid data")
{let r=e
if(!r){const e=g.rawSplit(t)
r=f.getBestVersionForData(e,n)}d=g.fromString(t,r||40)}}const m=f.getBestVersionForData(d,n)
if(!m)throw new Error("The amount of data is too big to be stored in a QR Code")
if(e){if(e<m)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+m+".\n")}else e=m
const y=function(t,e,n){const i=new o
n.forEach((function(e){i.put(e.mode.bit,4),i.put(e.getLength(),p.getCharCountIndicator(e.mode,t)),e.write(i)}))
const a=8*(r.getSymbolTotalCodewords(t)-h.getTotalCodewordsCount(t,e))
for(i.getLengthInBits()+4<=a&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0)
const s=(a-i.getLengthInBits())/8
for(let r=0;r<s;r++)i.put(r%2?17:236,8)
return function(t,e,n){const i=r.getSymbolTotalCodewords(e),o=i-h.getTotalCodewordsCount(e,n),a=h.getBlocksCount(e,n),s=a-i%a,u=Math.floor(i/a),c=Math.floor(o/a),f=c+1,d=u-c,p=new l(d)
let g=0
const v=new Array(a),m=new Array(a)
let y=0
const b=new Uint8Array(t.buffer)
for(let r=0;r<a;r++){const t=r<s?c:f
v[r]=b.slice(g,g+t),m[r]=p.encode(v[r]),g+=t,y=Math.max(y,t)}const w=new Uint8Array(i)
let x,S,C=0
for(x=0;x<y;x++)for(S=0;S<a;S++)x<v[S].length&&(w[C++]=v[S][x])
for(x=0;x<d;x++)for(S=0;S<a;S++)w[C++]=m[S][x]
return w}(i,t,e)}(e,n,d),b=r.getSymbolSize(e),w=new a(b)
return function(t,e){const n=t.size,r=u.getPositions(e)
for(let i=0;i<r.length;i++){const e=r[i][0],o=r[i][1]
for(let r=-1;r<=7;r++)if(!(e+r<=-1||n<=e+r))for(let i=-1;i<=7;i++)o+i<=-1||n<=o+i||(r>=0&&r<=6&&(0===i||6===i)||i>=0&&i<=6&&(0===r||6===r)||r>=2&&r<=4&&i>=2&&i<=4?t.set(e+r,o+i,!0,!0):t.set(e+r,o+i,!1,!0))}}(w,e),function(t){const e=t.size
for(let n=8;n<e-8;n++){const e=n%2==0
t.set(n,6,e,!0),t.set(6,n,e,!0)}}(w),function(t,e){const n=s.getPositions(e)
for(let r=0;r<n.length;r++){const e=n[r][0],i=n[r][1]
for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)-2===n||2===n||-2===r||2===r||0===n&&0===r?t.set(e+n,i+r,!0,!0):t.set(e+n,i+r,!1,!0)}}(w,e),v(w,n,0),e>=7&&function(t,e){const n=t.size,r=f.getEncodedBits(e)
let i,o,a
for(let s=0;s<18;s++)i=Math.floor(s/3),o=s%3+n-8-3,a=1==(r>>s&1),t.set(i,o,a,!0),t.set(o,i,a,!0)}(w,e),function(t,e){const n=t.size
let r=-1,i=n-1,o=7,a=0
for(let s=n-1;s>0;s-=2)for(6===s&&s--;;){for(let n=0;n<2;n++)if(!t.isReserved(i,s-n)){let r=!1
a<e.length&&(r=1==(e[a]>>>o&1)),t.set(i,s-n,r),o--,-1===o&&(a++,o=7)}if(i+=r,i<0||n<=i){i-=r,r=-r
break}}}(w,y),isNaN(i)&&(i=c.getBestMask(w,v.bind(null,w,n))),c.applyMask(i,w),v(w,n,i),{modules:w,version:e,errorCorrectionLevel:n,maskPattern:i,segments:d}}e.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text")
let n,o,a=i.M
return void 0!==e&&(a=i.from(e.errorCorrectionLevel,i.M),n=f.from(e.version),o=c.from(e.maskPattern),e.toSJISFunc&&r.setToSJISFunction(e.toSJISFunc)),m(t,n,a,o)}},4179:function(t,e,n){const r=n(5876)
function i(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(t){this.degree=t,this.genPoly=r.generateECPolynomial(this.degree)},i.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized")
const e=new Uint8Array(t.length+this.degree)
e.set(t)
const n=r.mod(e,this.genPoly),i=this.degree-n.length
if(i>0){const t=new Uint8Array(this.degree)
return t.set(n,i),t}return n},t.exports=i},8836:function(t,e){let n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+"
n=n.replace(/u/g,"\\u")
const r="(?:(?![A-Z0-9 $%*+\\-./:]|"+n+")(?:.|[\r\n]))+"
e.KANJI=new RegExp(n,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(r,"g"),e.NUMERIC=new RegExp("[0-9]+","g"),e.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g")
const i=new RegExp("^"+n+"$"),o=new RegExp("^[0-9]+$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$")
e.testKanji=function(t){return i.test(t)},e.testNumeric=function(t){return o.test(t)},e.testAlphanumeric=function(t){return a.test(t)}},3250:function(t,e,n){const r=n(2851),i=n(4807),o=n(121),a=n(4506),s=n(3466),u=n(8836),c=n(6445),h=n(8405)
function l(t){return unescape(encodeURIComponent(t)).length}function f(t,e,n){const r=[]
let i
for(;null!==(i=t.exec(n));)r.push({data:i[0],index:i.index,mode:e,length:i[0].length})
return r}function d(t){const e=f(u.NUMERIC,r.NUMERIC,t),n=f(u.ALPHANUMERIC,r.ALPHANUMERIC,t)
let i,o
return c.isKanjiModeEnabled()?(i=f(u.BYTE,r.BYTE,t),o=f(u.KANJI,r.KANJI,t)):(i=f(u.BYTE_KANJI,r.BYTE,t),o=[]),e.concat(n,i,o).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function p(t,e){switch(e){case r.NUMERIC:return i.getBitsLength(t)
case r.ALPHANUMERIC:return o.getBitsLength(t)
case r.KANJI:return s.getBitsLength(t)
case r.BYTE:return a.getBitsLength(t)}}function g(t,e){let n
const u=r.getBestModeForData(t)
if(n=r.from(e,u),n!==r.BYTE&&n.bit<u.bit)throw new Error('"'+t+'" cannot be encoded with mode '+r.toString(n)+".\n Suggested mode is: "+r.toString(u))
switch(n!==r.KANJI||c.isKanjiModeEnabled()||(n=r.BYTE),n){case r.NUMERIC:return new i(t)
case r.ALPHANUMERIC:return new o(t)
case r.KANJI:return new s(t)
case r.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"==typeof e?t.push(g(e,null)):e.data&&t.push(g(e.data,e.mode)),t}),[])},e.fromString=function(t,n){const i=function(t){const e=[]
for(let n=0;n<t.length;n++){const i=t[n]
switch(i.mode){case r.NUMERIC:e.push([i,{data:i.data,mode:r.ALPHANUMERIC,length:i.length},{data:i.data,mode:r.BYTE,length:i.length}])
break
case r.ALPHANUMERIC:e.push([i,{data:i.data,mode:r.BYTE,length:i.length}])
break
case r.KANJI:e.push([i,{data:i.data,mode:r.BYTE,length:l(i.data)}])
break
case r.BYTE:e.push([{data:i.data,mode:r.BYTE,length:l(i.data)}])}}return e}(d(t,c.isKanjiModeEnabled())),o=function(t,e){const n={},i={start:{}}
let o=["start"]
for(let a=0;a<t.length;a++){const s=t[a],u=[]
for(let t=0;t<s.length;t++){const c=s[t],h=""+a+t
u.push(h),n[h]={node:c,lastCount:0},i[h]={}
for(let t=0;t<o.length;t++){const a=o[t]
n[a]&&n[a].node.mode===c.mode?(i[a][h]=p(n[a].lastCount+c.length,c.mode)-p(n[a].lastCount,c.mode),n[a].lastCount+=c.length):(n[a]&&(n[a].lastCount=c.length),i[a][h]=p(c.length,c.mode)+4+r.getCharCountIndicator(c.mode,e))}}o=u}for(let r=0;r<o.length;r++)i[o[r]].end=0
return{map:i,table:n}}(i,n),a=h.find_path(o.map,"start","end"),s=[]
for(let e=1;e<a.length-1;e++)s.push(o.table[a[e]].node)
return e.fromArray(s.reduce((function(t,e){const n=t.length-1>=0?t[t.length-1]:null
return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[]))},e.rawSplit=function(t){return e.fromArray(d(t,c.isKanjiModeEnabled()))}},6445:function(t,e){let n
const r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706]
e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined')
if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40')
return 4*t+17},e.getSymbolTotalCodewords=function(t){return r[t]},e.getBCHDigit=function(t){let e=0
for(;0!==t;)e++,t>>>=1
return e},e.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.')
n=t},e.isKanjiModeEnabled=function(){return void 0!==n},e.toSJIS=function(t){return n(t)}},2906:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},5928:function(t,e,n){const r=n(6445),i=n(2842),o=n(7356),a=n(2851),s=n(2906),u=r.getBCHDigit(7973)
function c(t,e){return a.getCharCountIndicator(t,e)+4}function h(t,e){let n=0
return t.forEach((function(t){const r=c(t.mode,e)
n+=r+t.getBitsLength()})),n}e.from=function(t,e){return s.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,n){if(!s.isValid(t))throw new Error("Invalid QR Code version")
void 0===n&&(n=a.BYTE)
const o=8*(r.getSymbolTotalCodewords(t)-i.getTotalCodewordsCount(t,e))
if(n===a.MIXED)return o
const u=o-c(n,t)
switch(n){case a.NUMERIC:return Math.floor(u/10*3)
case a.ALPHANUMERIC:return Math.floor(u/11*2)
case a.KANJI:return Math.floor(u/13)
case a.BYTE:default:return Math.floor(u/8)}},e.getBestVersionForData=function(t,n){let r
const i=o.from(n,o.M)
if(Array.isArray(t)){if(t.length>1)return function(t,n){for(let r=1;r<=40;r++)if(h(t,r)<=e.getCapacity(r,n,a.MIXED))return r}(t,i)
if(0===t.length)return 1
r=t[0]}else r=t
return function(t,n,r){for(let i=1;i<=40;i++)if(n<=e.getCapacity(i,r,t))return i}(r.mode,r.getLength(),i)},e.getEncodedBits=function(t){if(!s.isValid(t)||t<7)throw new Error("Invalid QR Code version")
let e=t<<12
for(;r.getBCHDigit(e)-u>=0;)e^=7973<<r.getBCHDigit(e)-u
return t<<12|e}},3437:function(t,e,n){const r=n(5409)
e.render=function(t,e,n){let i=n,o=e
void 0!==i||e&&e.getContext||(i=e,e=void 0),e||(o=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),i=r.getOptions(i)
const a=r.getImageWidth(t.modules.size,i),s=o.getContext("2d"),u=s.createImageData(a,a)
return r.qrToImageData(u.data,t,i),function(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}(s,o,a),s.putImageData(u,0,0),o},e.renderToDataURL=function(t,n,r){let i=r
void 0!==i||n&&n.getContext||(i=n,n=void 0),i||(i={})
const o=e.render(t,n,i),a=i.type||"image/png",s=i.rendererOpts||{}
return o.toDataURL(a,s.quality)}},4205:function(t,e,n){const r=n(5409)
function i(t,e){const n=t.a/255,r=e+'="'+t.hex+'"'
return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function o(t,e,n){let r=t+e
return void 0!==n&&(r+=" "+n),r}e.render=function(t,e,n){const a=r.getOptions(e),s=t.modules.size,u=t.modules.data,c=s+2*a.margin,h=a.color.light.a?"<path "+i(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",l="<path "+i(a.color.dark,"stroke")+' d="'+function(t,e,n){let r="",i=0,a=!1,s=0
for(let u=0;u<t.length;u++){const c=Math.floor(u%e),h=Math.floor(u/e)
c||a||(a=!0),t[u]?(s++,u>0&&c>0&&t[u-1]||(r+=a?o("M",c+n,.5+h+n):o("m",i,0),i=0,a=!1),c+1<e&&t[u+1]||(r+=o("h",s),s=0)):i++}return r}(u,s,a.margin)+'"/>',f='viewBox="0 0 '+c+" "+c+'"',d='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+f+' shape-rendering="crispEdges">'+h+l+"</svg>\n"
return"function"==typeof n&&n(null,d),d}},5409:function(t,e){function n(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string")
let e=t.slice().replace("#","").split("")
if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t)
3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F")
const n=parseInt(e.join(""),16)
return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={})
const e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,i=t.scale||4
return{width:r,scale:r?4:i,margin:e,color:{dark:n(t.color.dark||"#000000ff"),light:n(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,n){const r=e.getScale(t,n)
return Math.floor((t+2*n.margin)*r)},e.qrToImageData=function(t,n,r){const i=n.modules.size,o=n.modules.data,a=e.getScale(i,r),s=Math.floor((i+2*r.margin)*a),u=r.margin*a,c=[r.color.light,r.color.dark]
for(let e=0;e<s;e++)for(let n=0;n<s;n++){let h=4*(e*s+n),l=r.color.light
e>=u&&n>=u&&e<s-u&&n<s-u&&(l=c[o[Math.floor((e-u)/a)*i+Math.floor((n-u)/a)]?1:0]),t[h++]=l.r,t[h++]=l.g,t[h++]=l.b,t[h]=l.a}}},7480:function(t,e,n){"use strict"
n.d(e,{ZT:function(){return i},pi:function(){return o},ev:function(){return a}})
var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)}
function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null")
function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var o=function(){return o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])
return t},o.apply(this,arguments)}
function a(t,e,n){if(n||2===arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i])
return t.concat(r||Array.prototype.slice.call(e))}Object.create,Object.create},1909:function(t,e,n){"use strict"
var r
n.r(e),n.d(e,{NIL:function(){return R},parse:function(){return v},stringify:function(){return f},v1:function(){return g},v3:function(){return E},v4:function(){return k},v5:function(){return F},validate:function(){return s},version:function(){return O}})
var i=new Uint8Array(16)
function o(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported")
return r(i)}for(var a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,s=function(t){return"string"==typeof t&&a.test(t)},u=[],c=0;c<256;++c)u.push((c+256).toString(16).substr(1))
var h,l,f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[t[e+0]]+u[t[e+1]]+u[t[e+2]]+u[t[e+3]]+"-"+u[t[e+4]]+u[t[e+5]]+"-"+u[t[e+6]]+u[t[e+7]]+"-"+u[t[e+8]]+u[t[e+9]]+"-"+u[t[e+10]]+u[t[e+11]]+u[t[e+12]]+u[t[e+13]]+u[t[e+14]]+u[t[e+15]]).toLowerCase()
if(!s(n))throw TypeError("Stringified UUID is invalid")
return n},d=0,p=0,g=function(t,e,n){var r=e&&n||0,i=e||new Array(16),a=(t=t||{}).node||h,s=void 0!==t.clockseq?t.clockseq:l
if(null==a||null==s){var u=t.random||(t.rng||o)()
null==a&&(a=h=[1|u[0],u[1],u[2],u[3],u[4],u[5]]),null==s&&(s=l=16383&(u[6]<<8|u[7]))}var c=void 0!==t.msecs?t.msecs:Date.now(),g=void 0!==t.nsecs?t.nsecs:p+1,v=c-d+(g-p)/1e4
if(v<0&&void 0===t.clockseq&&(s=s+1&16383),(v<0||c>d)&&void 0===t.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
d=c,p=g,l=s
var m=(1e4*(268435455&(c+=122192928e5))+g)%4294967296
i[r++]=m>>>24&255,i[r++]=m>>>16&255,i[r++]=m>>>8&255,i[r++]=255&m
var y=c/4294967296*1e4&268435455
i[r++]=y>>>8&255,i[r++]=255&y,i[r++]=y>>>24&15|16,i[r++]=y>>>16&255,i[r++]=s>>>8|128,i[r++]=255&s
for(var b=0;b<6;++b)i[r+b]=a[b]
return e||f(i)},v=function(t){if(!s(t))throw TypeError("Invalid UUID")
var e,n=new Uint8Array(16)
return n[0]=(e=parseInt(t.slice(0,8),16))>>>24,n[1]=e>>>16&255,n[2]=e>>>8&255,n[3]=255&e,n[4]=(e=parseInt(t.slice(9,13),16))>>>8,n[5]=255&e,n[6]=(e=parseInt(t.slice(14,18),16))>>>8,n[7]=255&e,n[8]=(e=parseInt(t.slice(19,23),16))>>>8,n[9]=255&e,n[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,n[11]=e/4294967296&255,n[12]=e>>>24&255,n[13]=e>>>16&255,n[14]=e>>>8&255,n[15]=255&e,n}
function m(t,e,n){function r(t,r,i,o){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t))
for(var e=[],n=0;n<t.length;++n)e.push(t.charCodeAt(n))
return e}(t)),"string"==typeof r&&(r=v(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)")
var a=new Uint8Array(16+t.length)
if(a.set(r),a.set(t,r.length),(a=n(a))[6]=15&a[6]|e,a[8]=63&a[8]|128,i){o=o||0
for(var s=0;s<16;++s)i[o+s]=a[s]
return i}return f(a)}try{r.name=t}catch(t){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r}function y(t){return 14+(t+64>>>9<<4)+1}function b(t,e){var n=(65535&t)+(65535&e)
return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function w(t,e,n,r,i,o){return b((a=b(b(e,t),b(r,o)))<<(s=i)|a>>>32-s,n)
var a,s}function x(t,e,n,r,i,o,a){return w(e&n|~e&r,t,e,i,o,a)}function S(t,e,n,r,i,o,a){return w(e&r|n&~r,t,e,i,o,a)}function C(t,e,n,r,i,o,a){return w(e^n^r,t,e,i,o,a)}function T(t,e,n,r,i,o,a){return w(n^(e|~r),t,e,i,o,a)}var E=m("v3",48,(function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t))
t=new Uint8Array(e.length)
for(var n=0;n<e.length;++n)t[n]=e.charCodeAt(n)}return function(t){for(var e=[],n=32*t.length,r="0123456789abcdef",i=0;i<n;i+=8){var o=t[i>>5]>>>i%32&255,a=parseInt(r.charAt(o>>>4&15)+r.charAt(15&o),16)
e.push(a)}return e}(function(t,e){t[e>>5]|=128<<e%32,t[y(e)-1]=e
for(var n=1732584193,r=-271733879,i=-1732584194,o=271733878,a=0;a<t.length;a+=16){var s=n,u=r,c=i,h=o
n=x(n,r,i,o,t[a],7,-680876936),o=x(o,n,r,i,t[a+1],12,-389564586),i=x(i,o,n,r,t[a+2],17,606105819),r=x(r,i,o,n,t[a+3],22,-1044525330),n=x(n,r,i,o,t[a+4],7,-176418897),o=x(o,n,r,i,t[a+5],12,1200080426),i=x(i,o,n,r,t[a+6],17,-1473231341),r=x(r,i,o,n,t[a+7],22,-45705983),n=x(n,r,i,o,t[a+8],7,1770035416),o=x(o,n,r,i,t[a+9],12,-1958414417),i=x(i,o,n,r,t[a+10],17,-42063),r=x(r,i,o,n,t[a+11],22,-1990404162),n=x(n,r,i,o,t[a+12],7,1804603682),o=x(o,n,r,i,t[a+13],12,-40341101),i=x(i,o,n,r,t[a+14],17,-1502002290),n=S(n,r=x(r,i,o,n,t[a+15],22,1236535329),i,o,t[a+1],5,-165796510),o=S(o,n,r,i,t[a+6],9,-1069501632),i=S(i,o,n,r,t[a+11],14,643717713),r=S(r,i,o,n,t[a],20,-373897302),n=S(n,r,i,o,t[a+5],5,-701558691),o=S(o,n,r,i,t[a+10],9,38016083),i=S(i,o,n,r,t[a+15],14,-660478335),r=S(r,i,o,n,t[a+4],20,-405537848),n=S(n,r,i,o,t[a+9],5,568446438),o=S(o,n,r,i,t[a+14],9,-1019803690),i=S(i,o,n,r,t[a+3],14,-187363961),r=S(r,i,o,n,t[a+8],20,1163531501),n=S(n,r,i,o,t[a+13],5,-1444681467),o=S(o,n,r,i,t[a+2],9,-51403784),i=S(i,o,n,r,t[a+7],14,1735328473),n=C(n,r=S(r,i,o,n,t[a+12],20,-1926607734),i,o,t[a+5],4,-378558),o=C(o,n,r,i,t[a+8],11,-2022574463),i=C(i,o,n,r,t[a+11],16,1839030562),r=C(r,i,o,n,t[a+14],23,-35309556),n=C(n,r,i,o,t[a+1],4,-1530992060),o=C(o,n,r,i,t[a+4],11,1272893353),i=C(i,o,n,r,t[a+7],16,-155497632),r=C(r,i,o,n,t[a+10],23,-1094730640),n=C(n,r,i,o,t[a+13],4,681279174),o=C(o,n,r,i,t[a],11,-358537222),i=C(i,o,n,r,t[a+3],16,-722521979),r=C(r,i,o,n,t[a+6],23,76029189),n=C(n,r,i,o,t[a+9],4,-640364487),o=C(o,n,r,i,t[a+12],11,-421815835),i=C(i,o,n,r,t[a+15],16,530742520),n=T(n,r=C(r,i,o,n,t[a+2],23,-995338651),i,o,t[a],6,-198630844),o=T(o,n,r,i,t[a+7],10,1126891415),i=T(i,o,n,r,t[a+14],15,-1416354905),r=T(r,i,o,n,t[a+5],21,-57434055),n=T(n,r,i,o,t[a+12],6,1700485571),o=T(o,n,r,i,t[a+3],10,-1894986606),i=T(i,o,n,r,t[a+10],15,-1051523),r=T(r,i,o,n,t[a+1],21,-2054922799),n=T(n,r,i,o,t[a+8],6,1873313359),o=T(o,n,r,i,t[a+15],10,-30611744),i=T(i,o,n,r,t[a+6],15,-1560198380),r=T(r,i,o,n,t[a+13],21,1309151649),n=T(n,r,i,o,t[a+4],6,-145523070),o=T(o,n,r,i,t[a+11],10,-1120210379),i=T(i,o,n,r,t[a+2],15,718787259),r=T(r,i,o,n,t[a+9],21,-343485551),n=b(n,s),r=b(r,u),i=b(i,c),o=b(o,h)}return[n,r,i,o]}(function(t){if(0===t.length)return[]
for(var e=8*t.length,n=new Uint32Array(y(e)),r=0;r<e;r+=8)n[r>>5]|=(255&t[r/8])<<r%32
return n}(t),8*t.length))})),k=function(t,e,n){var r=(t=t||{}).random||(t.rng||o)()
if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0
for(var i=0;i<16;++i)e[n+i]=r[i]
return e}return f(r)}
function A(t,e,n,r){switch(t){case 0:return e&n^~e&r
case 1:case 3:return e^n^r
case 2:return e&n^e&r^n&r}}function P(t,e){return t<<e|t>>>32-e}var F=m("v5",80,(function(t){var e=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520]
if("string"==typeof t){var r=unescape(encodeURIComponent(t))
t=[]
for(var i=0;i<r.length;++i)t.push(r.charCodeAt(i))}else Array.isArray(t)||(t=Array.prototype.slice.call(t))
t.push(128)
for(var o=t.length/4+2,a=Math.ceil(o/16),s=new Array(a),u=0;u<a;++u){for(var c=new Uint32Array(16),h=0;h<16;++h)c[h]=t[64*u+4*h]<<24|t[64*u+4*h+1]<<16|t[64*u+4*h+2]<<8|t[64*u+4*h+3]
s[u]=c}s[a-1][14]=8*(t.length-1)/Math.pow(2,32),s[a-1][14]=Math.floor(s[a-1][14]),s[a-1][15]=8*(t.length-1)&4294967295
for(var l=0;l<a;++l){for(var f=new Uint32Array(80),d=0;d<16;++d)f[d]=s[l][d]
for(var p=16;p<80;++p)f[p]=P(f[p-3]^f[p-8]^f[p-14]^f[p-16],1)
for(var g=n[0],v=n[1],m=n[2],y=n[3],b=n[4],w=0;w<80;++w){var x=Math.floor(w/20),S=P(g,5)+A(x,v,m,y)+b+e[x]+f[w]>>>0
b=y,y=m,m=P(v,30)>>>0,v=g,g=S}n[0]=n[0]+g>>>0,n[1]=n[1]+v>>>0,n[2]=n[2]+m>>>0,n[3]=n[3]+y>>>0,n[4]=n[4]+b>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]})),R="00000000-0000-0000-0000-000000000000",O=function(t){if(!s(t))throw TypeError("Invalid UUID")
return parseInt(t.substr(14,1),16)}},691:function(t,e,n){var r
!function(){function i(t,e,n){return t.call.apply(t.bind,arguments)}function o(t,e,n){if(!t)throw Error()
if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2)
return function(){var n=Array.prototype.slice.call(arguments)
return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function a(t,e,n){return(a=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:o).apply(null,arguments)}var s=Date.now||function(){return+new Date}
function u(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var c=!!window.FontFace
function h(t,e,n,r){if(e=t.c.createElement(e),n)for(var i in n)n.hasOwnProperty(i)&&("style"==i?e.style.cssText=n[i]:e.setAttribute(i,n[i]))
return r&&e.appendChild(t.c.createTextNode(r)),e}function l(t,e,n){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(n,t.lastChild)}function f(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t,e,n){e=e||[],n=n||[]
for(var r=t.className.split(/\s+/),i=0;i<e.length;i+=1){for(var o=!1,a=0;a<r.length;a+=1)if(e[i]===r[a]){o=!0
break}o||r.push(e[i])}for(e=[],i=0;i<r.length;i+=1){for(o=!1,a=0;a<n.length;a+=1)if(r[i]===n[a]){o=!0
break}o||e.push(r[i])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function p(t,e){for(var n=t.className.split(/\s+/),r=0,i=n.length;r<i;r++)if(n[r]==e)return!0
return!1}function g(t,e,n){function r(){s&&i&&o&&(s(a),s=null)}e=h(t,"link",{rel:"stylesheet",href:e,media:"all"})
var i=!1,o=!0,a=null,s=n||null
c?(e.onload=function(){i=!0,r()},e.onerror=function(){i=!0,a=Error("Stylesheet failed to load"),r()}):setTimeout((function(){i=!0,r()}),0),l(t,"head",e)}function v(t,e,n,r){var i=t.c.getElementsByTagName("head")[0]
if(i){var o=h(t,"script",{src:e}),a=!1
return o.onload=o.onreadystatechange=function(){a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(a=!0,n&&n(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&i.removeChild(o))},i.appendChild(o),setTimeout((function(){a||(a=!0,n&&n(Error("Script load timeout")))}),r||5e3),o}return null}function m(){this.a=0,this.c=null}function y(t){return t.a++,function(){t.a--,w(t)}}function b(t,e){t.c=e,w(t)}function w(t){0==t.a&&t.c&&(t.c(),t.c=null)}function x(t){this.a=t||"-"}function S(t,e){this.c=t,this.f=4,this.a="n"
var n=(e||"n4").match(/^([nio])([1-9])$/i)
n&&(this.a=n[1],this.f=parseInt(n[2],10))}function C(t){var e=[]
t=t.split(/,\s*/)
for(var n=0;n<t.length;n++){var r=t[n].replace(/['"]/g,"");-1!=r.indexOf(" ")||/^\d/.test(r)?e.push("'"+r+"'"):e.push(r)}return e.join(",")}function T(t){return t.a+t.f}function E(t){var e="normal"
return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function k(t){var e=4,n="n",r=null
return t&&((r=t.match(/(normal|oblique|italic)/i))&&r[1]&&(n=r[1].substr(0,1).toLowerCase()),(r=t.match(/([1-9]00|normal|bold)/i))&&r[1]&&(/bold/i.test(r[1])?e=7:/[1-9]00/.test(r[1])&&(e=parseInt(r[1].substr(0,1),10)))),n+e}function A(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new x("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function P(t){if(t.g){var e=p(t.f,t.a.c("wf","active")),n=[],r=[t.a.c("wf","loading")]
e||n.push(t.a.c("wf","inactive")),d(t.f,n,r)}F(t,"inactive")}function F(t,e,n){t.j&&t.h[e]&&(n?t.h[e](n.c,T(n)):t.h[e]())}function R(){this.c={}}function O(t,e){this.c=t,this.f=e,this.a=h(this.c,"span",{"aria-hidden":"true"},this.f)}function D(t){l(t.c,"body",t.a)}function M(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+C(t.c)+";font-style:"+E(t)+";font-weight:"+t.f+"00;"}function I(t,e,n,r,i,o){this.g=t,this.j=e,this.a=r,this.c=n,this.f=i||3e3,this.h=o||void 0}function N(t,e,n,r,i,o,a){this.v=t,this.B=e,this.c=n,this.a=r,this.s=a||"BESbswy",this.f={},this.w=i||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new O(this.c,this.s),this.h=new O(this.c,this.s),this.j=new O(this.c,this.s),this.m=new O(this.c,this.s),t=M(t=new S(this.a.c+",serif",T(this.a))),this.g.a.style.cssText=t,t=M(t=new S(this.a.c+",sans-serif",T(this.a))),this.h.a.style.cssText=t,t=M(t=new S("serif",T(this.a))),this.j.a.style.cssText=t,t=M(t=new S("sans-serif",T(this.a))),this.m.a.style.cssText=t,D(this.g),D(this.h),D(this.j),D(this.m)}x.prototype.c=function(t){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase())
return e.join(this.a)},I.prototype.start=function(){var t=this.c.o.document,e=this,n=s(),r=new Promise((function(r,i){!function o(){s()-n>=e.f?i():t.fonts.load(function(t){return E(t)+" "+t.f+"00 300px "+C(t.c)}(e.a),e.h).then((function(t){1<=t.length?r():setTimeout(o,25)}),(function(){i()}))}()})),i=null,o=new Promise((function(t,n){i=setTimeout(n,e.f)}))
Promise.race([o,r]).then((function(){i&&(clearTimeout(i),i=null),e.g(e.a)}),(function(){e.j(e.a)}))}
var _={D:"serif",C:"sans-serif"},B=null
function L(){if(null===B){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent)
B=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return B}function U(t,e,n){for(var r in _)if(_.hasOwnProperty(r)&&e===t.f[_[r]]&&n===t.f[_[r]])return!0
return!1}function j(t){var e,n=t.g.a.offsetWidth,r=t.h.a.offsetWidth;(e=n===t.f.serif&&r===t.f["sans-serif"])||(e=L()&&U(t,n,r)),e?s()-t.A>=t.w?L()&&U(t,n,r)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?G(t,t.v):G(t,t.B):function(t){setTimeout(a((function(){j(this)}),t),50)}(t):G(t,t.v)}function G(t,e){setTimeout(a((function(){f(this.g.a),f(this.h.a),f(this.j.a),f(this.m.a),e(this.a)}),t),0)}function z(t,e,n){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=n}N.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=s(),j(this)}
var H=null
function V(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&d(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),F(t,"active")):P(t.a))}function Z(t){this.j=t,this.a=new R,this.h=0,this.f=this.g=!0}function W(t,e,n,r,i){var o=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=i||null,s=r||{}
if(0===n.length&&o)P(e.a)
else{e.f+=n.length,o&&(e.j=o)
var u,c=[]
for(u=0;u<n.length;u++){var h=n[u],l=s[h.c],f=e.a,p=h
if(f.g&&d(f.f,[f.a.c("wf",p.c,T(p).toString(),"loading")]),F(f,"fontloading",p),f=null,null===H)if(window.FontFace){p=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)
var g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor)
H=p?42<parseInt(p[1],10):!g}else H=!1
f=H?new I(a(e.g,e),a(e.h,e),e.c,h,e.s,l):new N(a(e.g,e),a(e.h,e),e.c,h,e.s,t,l),c.push(f)}for(u=0;u<c.length;u++)c[u].start()}}),0)}function q(t,e){this.c=t,this.a=e}function K(t,e){this.c=t,this.a=e}function X(t,e){this.c=t||Y,this.a=[],this.f=[],this.g=e||""}z.prototype.g=function(t){var e=this.a
e.g&&d(e.f,[e.a.c("wf",t.c,T(t).toString(),"active")],[e.a.c("wf",t.c,T(t).toString(),"loading"),e.a.c("wf",t.c,T(t).toString(),"inactive")]),F(e,"fontactive",t),this.m=!0,V(this)},z.prototype.h=function(t){var e=this.a
if(e.g){var n=p(e.f,e.a.c("wf",t.c,T(t).toString(),"active")),r=[],i=[e.a.c("wf",t.c,T(t).toString(),"loading")]
n||r.push(e.a.c("wf",t.c,T(t).toString(),"inactive")),d(e.f,r,i)}F(e,"fontinactive",t),V(this)},Z.prototype.load=function(t){this.c=new u(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,n){var r=[],i=n.timeout
!function(t){t.g&&d(t.f,[t.a.c("wf","loading")]),F(t,"loading")}(e),r=function(t,e,n){var r,i=[]
for(r in e)if(e.hasOwnProperty(r)){var o=t.c[r]
o&&i.push(o(e[r],n))}return i}(t.a,n,t.c)
var o=new z(t.c,e,i)
for(t.h=r.length,e=0,n=r.length;e<n;e++)r[e].load((function(e,n,r){W(t,o,e,n,r)}))}(this,new A(this.c,t),t)},q.prototype.load=function(t){function e(){if(o["__mti_fntLst"+r]){var n,i=o["__mti_fntLst"+r](),a=[]
if(i)for(var s=0;s<i.length;s++){var u=i[s].fontfamily
null!=i[s].fontStyle&&null!=i[s].fontWeight?(n=i[s].fontStyle+i[s].fontWeight,a.push(new S(u,n))):a.push(new S(u))}t(a)}else setTimeout((function(){e()}),50)}var n=this,r=n.a.projectId,i=n.a.version
if(r){var o=n.c.o
v(this.c,(n.a.api||"https://fast.fonts.net/jsapi")+"/"+r+".js"+(i?"?v="+i:""),(function(i){i?t([]):(o["__MonotypeConfiguration__"+r]=function(){return n.a},e())})).id="__MonotypeAPIScript__"+r}else t([])},K.prototype.load=function(t){var e,n,r=this.a.urls||[],i=this.a.families||[],o=this.a.testStrings||{},a=new m
for(e=0,n=r.length;e<n;e++)g(this.c,r[e],y(a))
var s=[]
for(e=0,n=i.length;e<n;e++)if((r=i[e].split(":"))[1])for(var u=r[1].split(","),c=0;c<u.length;c+=1)s.push(new S(r[0],u[c]))
else s.push(new S(r[0]))
b(a,(function(){t(s,o)}))}
var Y="https://fonts.googleapis.com/css"
function J(t){this.f=t,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},$={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},tt={i:"i",italic:"i",n:"n",normal:"n"},et=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/
function nt(t,e){this.c=t,this.a=e}var rt={Arimo:!0,Cousine:!0,Tinos:!0}
function it(t,e){this.c=t,this.a=e}function ot(t,e){this.c=t,this.f=e,this.a=[]}nt.prototype.load=function(t){var e=new m,n=this.c,r=new X(this.a.api,this.a.text),i=this.a.families
!function(t,e){for(var n=e.length,r=0;r<n;r++){var i=e[r].split(":")
3==i.length&&t.f.push(i.pop())
var o=""
2==i.length&&""!=i[1]&&(o=":"),t.a.push(i.join(o))}}(r,i)
var o=new J(i)
!function(t){for(var e=t.f.length,n=0;n<e;n++){var r=t.f[n].split(":"),i=r[0].replace(/\+/g," "),o=["n4"]
if(2<=r.length){var a
if(a=[],s=r[1])for(var s,u=(s=s.split(",")).length,c=0;c<u;c++){var h
if((h=s[c]).match(/^[\w-]+$/))if(null==(l=et.exec(h.toLowerCase())))h=""
else{if(h=null==(h=l[2])||""==h?"n":tt[h],null==(l=l[1])||""==l)l="4"
else var l=$[l]||(isNaN(l)?"4":l.substr(0,1))
h=[h,l].join("")}else h=""
h&&a.push(h)}0<a.length&&(o=a),3==r.length&&(a=[],0<(r=(r=r[2])?r.split(","):a).length&&(r=Q[r[0]])&&(t.c[i]=r))}for(t.c[i]||(r=Q[i])&&(t.c[i]=r),r=0;r<o.length;r+=1)t.a.push(new S(i,o[r]))}}(o),g(n,function(t){if(0==t.a.length)throw Error("No fonts to load!")
if(-1!=t.c.indexOf("kit="))return t.c
for(var e=t.a.length,n=[],r=0;r<e;r++)n.push(t.a[r].replace(/ /g,"+"))
return e=t.c+"?family="+n.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(r),y(e)),b(e,(function(){t(o.a,o.c,rt)}))},it.prototype.load=function(t){var e=this.a.id,n=this.c.o
e?v(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([])
else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){e=n.Typekit.config.fn
for(var r=[],i=0;i<e.length;i+=2)for(var o=e[i],a=e[i+1],s=0;s<a.length;s++)r.push(new S(o,a[s]))
try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(r)}}),2e3):t([])},ot.prototype.load=function(t){var e=this.f.id,n=this.c.o,r=this
e?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[e]=function(e,n){for(var i=0,o=n.fonts.length;i<o;++i){var a=n.fonts[i]
r.a.push(new S(a.name,k("font-weight:"+a.weight+";font-style:"+a.style)))}t(r.a)},v(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])}
var at=new Z(window)
at.a.c.custom=function(t,e){return new K(e,t)},at.a.c.fontdeck=function(t,e){return new ot(e,t)},at.a.c.monotype=function(t,e){return new q(e,t)},at.a.c.typekit=function(t,e){return new it(e,t)},at.a.c.google=function(t,e){return new nt(e,t)}
var st={load:a(at.load,at)}
void 0===(r=function(){return st}.call(e,n,e,t))||(t.exports=r)}()},7087:function(t,e,n){"use strict"
let r,i
n.r(e),n.d(e,{deleteDB:function(){return p},openDB:function(){return d},unwrap:function(){return f},wrap:function(){return l}})
const o=new WeakMap,a=new WeakMap,s=new WeakMap,u=new WeakMap,c=new WeakMap
let h={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return a.get(t)
if("objectStoreNames"===e)return t.objectStoreNames||s.get(t)
if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return l(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}
function l(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{e(l(t.result)),r()},o=()=>{n(t.error),r()}
t.addEventListener("success",i),t.addEventListener("error",o)}))
return e.then((e=>{e instanceof IDBCursor&&o.set(e,t)})).catch((()=>{})),c.set(e,t),e}(t)
if(u.has(t))return u.get(t)
const e=function(t){return"function"==typeof t?(e=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return e.apply(f(this),n),l(o.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return l(e.apply(f(this),n))}:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i]
const o=e.call(f(this),t,...r)
return s.set(o,t.sort?t.sort():[t]),l(o)}:(t instanceof IDBTransaction&&function(t){if(a.has(t))return
const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()}
t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)}))
a.set(t,e)}(t),n=t,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>n instanceof t))?new Proxy(t,h):t)
var e,n}(t)
return e!==t&&(u.set(t,e),c.set(e,t)),e}const f=t=>c.get(t)
function d(t,e){let{blocked:n,upgrade:r,blocking:i,terminated:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const a=indexedDB.open(t,e),s=l(a)
return r&&a.addEventListener("upgradeneeded",(t=>{r(l(a.result),t.oldVersion,t.newVersion,l(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((t=>{o&&t.addEventListener("close",(()=>o())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),s}function p(t){let{blocked:e}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=indexedDB.deleteDatabase(t)
return e&&n.addEventListener("blocked",(()=>e())),l(n).then((()=>{}))}const g=["get","getKey","getAll","getAllKeys","count"],v=["put","add","delete","clear"],m=new Map
function y(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return
if(m.get(e))return m.get(e)
const n=e.replace(/FromIndex$/,""),r=e!==n,i=v.includes(n)
if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!g.includes(n))return
const o=async function(t){const e=this.transaction(t,i?"readwrite":"readonly")
let o=e.store
for(var a=arguments.length,s=new Array(a>1?a-1:0),u=1;u<a;u++)s[u-1]=arguments[u]
return r&&(o=o.index(s.shift())),(await Promise.all([o[n](...s),i&&e.done]))[0]}
return m.set(e,o),o}var b
b=h,h={...b,get:(t,e,n)=>y(t,e)||b.get(t,e,n),has:(t,e)=>!!y(t,e)||b.has(t,e)}},8911:function(t,e,n){"use strict"
n.r(e),n.d(e,{default:function(){return on}})
var r=Math.PI/180
const i="undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope?self:{},o={_global:i,version:"8.2.3",isBrowser:"undefined"!=typeof window&&("[object Window]"==={}.toString.call(window)||"[object global]"==={}.toString.call(window)),isUnminified:/param/.test(function(t){}.toString()),dblClickWindow:400,getAngle:t=>o.angleDeg?t*r:t,enableTrace:!1,pointerEventsEnabled:!0,autoDrawEnabled:!0,hitOnDragEnabled:!1,capturePointerEventsEnabled:!1,_mouseListenClick:!1,_touchListenClick:!1,_pointerListenClick:!1,_mouseInDblClickWindow:!1,_touchInDblClickWindow:!1,_pointerInDblClickWindow:!1,_mouseDblClickPointerId:null,_touchDblClickPointerId:null,_pointerDblClickPointerId:null,pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1,dragDistance:3,angleDeg:!0,showWarnings:!0,dragButtons:[0,1],isDragging:()=>o.DD.isDragging,isDragReady:()=>!!o.DD.node,document:i.document,_injectGlobal(t){i.Konva=t}},a=t=>{o[t.prototype.getClassName()]=t}
o._injectGlobal(o)
class s{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[1,0,0,1,0,0]
this.dirty=!1,this.m=t&&t.slice()||[1,0,0,1,0,0]}reset(){this.m[0]=1,this.m[1]=0,this.m[2]=0,this.m[3]=1,this.m[4]=0,this.m[5]=0}copy(){return new s(this.m)}copyInto(t){t.m[0]=this.m[0],t.m[1]=this.m[1],t.m[2]=this.m[2],t.m[3]=this.m[3],t.m[4]=this.m[4],t.m[5]=this.m[5]}point(t){var e=this.m
return{x:e[0]*t.x+e[2]*t.y+e[4],y:e[1]*t.x+e[3]*t.y+e[5]}}translate(t,e){return this.m[4]+=this.m[0]*t+this.m[2]*e,this.m[5]+=this.m[1]*t+this.m[3]*e,this}scale(t,e){return this.m[0]*=t,this.m[1]*=t,this.m[2]*=e,this.m[3]*=e,this}rotate(t){var e=Math.cos(t),n=Math.sin(t),r=this.m[0]*e+this.m[2]*n,i=this.m[1]*e+this.m[3]*n,o=this.m[0]*-n+this.m[2]*e,a=this.m[1]*-n+this.m[3]*e
return this.m[0]=r,this.m[1]=i,this.m[2]=o,this.m[3]=a,this}getTranslation(){return{x:this.m[4],y:this.m[5]}}skew(t,e){var n=this.m[0]+this.m[2]*e,r=this.m[1]+this.m[3]*e,i=this.m[2]+this.m[0]*t,o=this.m[3]+this.m[1]*t
return this.m[0]=n,this.m[1]=r,this.m[2]=i,this.m[3]=o,this}multiply(t){var e=this.m[0]*t.m[0]+this.m[2]*t.m[1],n=this.m[1]*t.m[0]+this.m[3]*t.m[1],r=this.m[0]*t.m[2]+this.m[2]*t.m[3],i=this.m[1]*t.m[2]+this.m[3]*t.m[3],o=this.m[0]*t.m[4]+this.m[2]*t.m[5]+this.m[4],a=this.m[1]*t.m[4]+this.m[3]*t.m[5]+this.m[5]
return this.m[0]=e,this.m[1]=n,this.m[2]=r,this.m[3]=i,this.m[4]=o,this.m[5]=a,this}invert(){var t=1/(this.m[0]*this.m[3]-this.m[1]*this.m[2]),e=this.m[3]*t,n=-this.m[1]*t,r=-this.m[2]*t,i=this.m[0]*t,o=t*(this.m[2]*this.m[5]-this.m[3]*this.m[4]),a=t*(this.m[1]*this.m[4]-this.m[0]*this.m[5])
return this.m[0]=e,this.m[1]=n,this.m[2]=r,this.m[3]=i,this.m[4]=o,this.m[5]=a,this}getMatrix(){return this.m}setAbsolutePosition(t,e){var n=this.m[0],r=this.m[1],i=this.m[2],o=this.m[3],a=this.m[4],s=(n*(e-this.m[5])-r*(t-a))/(n*o-r*i),u=(t-a-i*s)/n
return this.translate(u,s)}decompose(){var t=this.m[0],e=this.m[1],n=this.m[2],r=this.m[3],i=t*r-e*n
let o={x:this.m[4],y:this.m[5],rotation:0,scaleX:0,scaleY:0,skewX:0,skewY:0}
if(0!=t||0!=e){var a=Math.sqrt(t*t+e*e)
o.rotation=e>0?Math.acos(t/a):-Math.acos(t/a),o.scaleX=a,o.scaleY=i/a,o.skewX=(t*n+e*r)/i,o.skewY=0}else if(0!=n||0!=r){var s=Math.sqrt(n*n+r*r)
o.rotation=Math.PI/2-(r>0?Math.acos(-n/s):-Math.acos(n/s)),o.scaleX=i/s,o.scaleY=s,o.skewX=0,o.skewY=(t*n+e*r)/i}return o.rotation=g._getRotation(o.rotation),o}}var u=Math.PI/180,c=180/Math.PI,h="Konva error: ",l={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,132,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,255,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,203],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[119,128,144],slategrey:[119,128,144],snow:[255,255,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],transparent:[255,255,255,0],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,5]},f=/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/,d=[]
const p="undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||function(t){setTimeout(t,60)},g={_isElement:t=>!(!t||1!=t.nodeType),_isFunction:t=>!!(t&&t.constructor&&t.call&&t.apply),_isPlainObject:t=>!!t&&t.constructor===Object,_isArray:t=>"[object Array]"===Object.prototype.toString.call(t),_isNumber:t=>"[object Number]"===Object.prototype.toString.call(t)&&!isNaN(t)&&isFinite(t),_isString:t=>"[object String]"===Object.prototype.toString.call(t),_isBoolean:t=>"[object Boolean]"===Object.prototype.toString.call(t),isObject:t=>t instanceof Object,isValidSelector(t){if("string"!=typeof t)return!1
var e=t[0]
return"#"===e||"."===e||e===e.toUpperCase()},_sign:t=>0===t||t>0?1:-1,requestAnimFrame(t){d.push(t),1===d.length&&p((function(){const t=d
d=[],t.forEach((function(t){t()}))}))},createCanvasElement(){var t=document.createElement("canvas")
try{t.style=t.style||{}}catch(t){}return t},createImageElement:()=>document.createElement("img"),_isInDocument(t){for(;t=t.parentNode;)if(t==document)return!0
return!1},_urlToImage(t,e){var n=g.createImageElement()
n.onload=function(){e(n)},n.src=t},_rgbToHex:(t,e,n)=>((1<<24)+(t<<16)+(e<<8)+n).toString(16).slice(1),_hexToRgb(t){t=t.replace("#","")
var e=parseInt(t,16)
return{r:e>>16&255,g:e>>8&255,b:255&e}},getRandomColor(){for(var t=(16777215*Math.random()<<0).toString(16);t.length<6;)t="0"+t
return"#"+t},getRGB(t){var e
return t in l?{r:(e=l[t])[0],g:e[1],b:e[2]}:"#"===t[0]?this._hexToRgb(t.substring(1)):"rgb("===t.substr(0,4)?(e=f.exec(t.replace(/ /g,"")),{r:parseInt(e[1],10),g:parseInt(e[2],10),b:parseInt(e[3],10)}):{r:0,g:0,b:0}},colorToRGBA:t=>(t=t||"black",g._namedColorToRBA(t)||g._hex3ColorToRGBA(t)||g._hex6ColorToRGBA(t)||g._rgbColorToRGBA(t)||g._rgbaColorToRGBA(t)||g._hslColorToRGBA(t)),_namedColorToRBA(t){var e=l[t.toLowerCase()]
return e?{r:e[0],g:e[1],b:e[2],a:1}:null},_rgbColorToRGBA(t){if(0===t.indexOf("rgb(")){var e=(t=t.match(/rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number)
return{r:e[0],g:e[1],b:e[2],a:1}}},_rgbaColorToRGBA(t){if(0===t.indexOf("rgba(")){var e=(t=t.match(/rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number)
return{r:e[0],g:e[1],b:e[2],a:e[3]}}},_hex6ColorToRGBA(t){if("#"===t[0]&&7===t.length)return{r:parseInt(t.slice(1,3),16),g:parseInt(t.slice(3,5),16),b:parseInt(t.slice(5,7),16),a:1}},_hex3ColorToRGBA(t){if("#"===t[0]&&4===t.length)return{r:parseInt(t[1]+t[1],16),g:parseInt(t[2]+t[2],16),b:parseInt(t[3]+t[3],16),a:1}},_hslColorToRGBA(t){if(/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(t)){const[e,...n]=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t),r=Number(n[0])/360,i=Number(n[1])/100,o=Number(n[2])/100
let a,s,u
if(0===i)return u=255*o,{r:Math.round(u),g:Math.round(u),b:Math.round(u),a:1}
a=o<.5?o*(1+i):o+i-o*i
const c=2*o-a,h=[0,0,0]
for(let t=0;t<3;t++)s=r+1/3*-(t-1),s<0&&s++,s>1&&s--,u=6*s<1?c+6*(a-c)*s:2*s<1?a:3*s<2?c+(a-c)*(2/3-s)*6:c,h[t]=255*u
return{r:Math.round(h[0]),g:Math.round(h[1]),b:Math.round(h[2]),a:1}}},haveIntersection:(t,e)=>!(e.x>t.x+t.width||e.x+e.width<t.x||e.y>t.y+t.height||e.y+e.height<t.y),cloneObject(t){var e={}
for(var n in t)this._isPlainObject(t[n])?e[n]=this.cloneObject(t[n]):this._isArray(t[n])?e[n]=this.cloneArray(t[n]):e[n]=t[n]
return e},cloneArray:t=>t.slice(0),degToRad:t=>t*u,radToDeg:t=>t*c,_degToRad:t=>(g.warn("Util._degToRad is removed. Please use public Util.degToRad instead."),g.degToRad(t)),_radToDeg:t=>(g.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."),g.radToDeg(t)),_getRotation:t=>o.angleDeg?g.radToDeg(t):t,_capitalize:t=>t.charAt(0).toUpperCase()+t.slice(1),throw(t){throw new Error(h+t)},error(t){console.error(h+t)},warn(t){o.showWarnings&&console.warn("Konva warning: "+t)},each(t,e){for(var n in t)e(n,t[n])},_inRange:(t,e,n)=>e<=t&&t<n,_getProjectionToSegment(t,e,n,r,i,o){var a,s,u,c=(t-n)*(t-n)+(e-r)*(e-r)
if(0==c)a=t,s=e,u=(i-n)*(i-n)+(o-r)*(o-r)
else{var h=((i-t)*(n-t)+(o-e)*(r-e))/c
h<0?(a=t,s=e,u=(t-i)*(t-i)+(e-o)*(e-o)):h>1?(a=n,s=r,u=(n-i)*(n-i)+(r-o)*(r-o)):u=((a=t+h*(n-t))-i)*(a-i)+((s=e+h*(r-e))-o)*(s-o)}return[a,s,u]},_getProjectionToLine(t,e,n){var r=g.cloneObject(t),i=Number.MAX_VALUE
return e.forEach((function(o,a){if(n||a!==e.length-1){var s=e[(a+1)%e.length],u=g._getProjectionToSegment(o.x,o.y,s.x,s.y,t.x,t.y),c=u[0],h=u[1],l=u[2]
l<i&&(r.x=c,r.y=h,i=l)}})),r},_prepareArrayForTween(t,e,n){var r,i=[],o=[]
if(t.length>e.length){var a=e
e=t,t=a}for(r=0;r<t.length;r+=2)i.push({x:t[r],y:t[r+1]})
for(r=0;r<e.length;r+=2)o.push({x:e[r],y:e[r+1]})
var s=[]
return o.forEach((function(t){var e=g._getProjectionToLine(t,i,n)
s.push(e.x),s.push(e.y)})),s},_prepareToStringify(t){var e
for(var n in t.visitedByCircularReferenceRemoval=!0,t)if(t.hasOwnProperty(n)&&t[n]&&"object"==typeof t[n])if(e=Object.getOwnPropertyDescriptor(t,n),t[n].visitedByCircularReferenceRemoval||g._isElement(t[n])){if(!e.configurable)return null
delete t[n]}else if(null===g._prepareToStringify(t[n])){if(!e.configurable)return null
delete t[n]}return delete t.visitedByCircularReferenceRemoval,t},_assign(t,e){for(var n in e)t[n]=e[n]
return t},_getFirstPointerId:t=>t.touches?t.changedTouches[0].identifier:t.pointerId||999}
function v(t){return g._isString(t)?'"'+t+'"':"[object Number]"===Object.prototype.toString.call(t)||g._isBoolean(t)?t:Object.prototype.toString.call(t)}function m(t){return t>255?255:t<0?0:Math.round(t)}function y(){if(o.isUnminified)return function(t,e){return g._isNumber(t)||g.warn(v(t)+' is a not valid value for "'+e+'" attribute. The value should be a number.'),t}}function b(t){if(o.isUnminified)return function(e,n){let r=g._isNumber(e),i=g._isArray(e)&&e.length==t
return r||i||g.warn(v(e)+' is a not valid value for "'+n+'" attribute. The value should be a number or Array<number>('+t+")"),e}}function w(){if(o.isUnminified)return function(t,e){return g._isNumber(t)||"auto"===t||g.warn(v(t)+' is a not valid value for "'+e+'" attribute. The value should be a number or "auto".'),t}}function x(){if(o.isUnminified)return function(t,e){return g._isString(t)||g.warn(v(t)+' is a not valid value for "'+e+'" attribute. The value should be a string.'),t}}function S(){if(o.isUnminified)return function(t,e){const n=g._isString(t),r="[object CanvasGradient]"===Object.prototype.toString.call(t)||t&&t.addColorStop
return n||r||g.warn(v(t)+' is a not valid value for "'+e+'" attribute. The value should be a string or a native gradient.'),t}}function C(){if(o.isUnminified)return function(t,e){return!0===t||!1===t||g.warn(v(t)+' is a not valid value for "'+e+'" attribute. The value should be a boolean.'),t}}var T="get",E="set"
const k={addGetterSetter(t,e,n,r,i){k.addGetter(t,e,n),k.addSetter(t,e,r,i),k.addOverloadedGetterSetter(t,e)},addGetter(t,e,n){var r=T+g._capitalize(e)
t.prototype[r]=t.prototype[r]||function(){var t=this.attrs[e]
return void 0===t?n:t}},addSetter(t,e,n,r){var i=E+g._capitalize(e)
t.prototype[i]||k.overWriteSetter(t,e,n,r)},overWriteSetter(t,e,n,r){var i=E+g._capitalize(e)
t.prototype[i]=function(t){return n&&null!=t&&(t=n.call(this,t,e)),this._setAttr(e,t),r&&r.call(this),this}},addComponentsGetterSetter(t,e,n,r,i){var a,s,u=n.length,c=g._capitalize,h=T+c(e),l=E+c(e)
t.prototype[h]=function(){var t={}
for(a=0;a<u;a++)t[s=n[a]]=this.getAttr(e+c(s))
return t}
var f=function(t){if(o.isUnminified)return function(e,n){return g.isObject(e)||g.warn(v(e)+' is a not valid value for "'+n+'" attribute. The value should be an object with properties '+t),e}}(n)
t.prototype[l]=function(t){var n,o=this.attrs[e]
for(n in r&&(t=r.call(this,t)),f&&f.call(this,t,e),t)t.hasOwnProperty(n)&&this._setAttr(e+c(n),t[n])
return this._fireChangeEvent(e,o,t),i&&i.call(this),this},k.addOverloadedGetterSetter(t,e)},addOverloadedGetterSetter(t,e){var n=g._capitalize(e),r=E+n,i=T+n
t.prototype[e]=function(){return arguments.length?(this[r](arguments[0]),this):this[i]()}},addDeprecatedGetterSetter(t,e,n,r){g.error("Adding deprecated "+e)
var i=T+g._capitalize(e),o=e+" property is deprecated and will be removed soon. Look at Konva change log for more information."
t.prototype[i]=function(){g.error(o)
var t=this.attrs[e]
return void 0===t?n:t},k.addSetter(t,e,r,(function(){g.error(o)})),k.addOverloadedGetterSetter(t,e)},backCompat(t,e){g.each(e,(function(e,n){var r=t.prototype[n],i=T+g._capitalize(e),o=E+g._capitalize(e)
function a(){r.apply(this,arguments),g.error('"'+e+'" method is deprecated and will be removed soon. Use ""'+n+'" instead.')}t.prototype[e]=a,t.prototype[i]=a,t.prototype[o]=a}))},afterSetFilter(){this._filterUpToDate=!1}}
function A(t){var e,n,r=[],i=t.length,o=g
for(e=0;e<i;e++)n=t[e],o._isNumber(n)?n=Math.round(1e3*n)/1e3:o._isString(n)||(n+=""),r.push(n)
return r}var P,F=["arc","arcTo","beginPath","bezierCurveTo","clearRect","clip","closePath","createLinearGradient","createPattern","createRadialGradient","drawImage","ellipse","fill","fillText","getImageData","createImageData","lineTo","moveTo","putImageData","quadraticCurveTo","rect","restore","rotate","save","scale","setLineDash","setTransform","stroke","strokeText","transform","translate"]
class R{constructor(t){this.canvas=t,this._context=t._canvas.getContext("2d"),o.enableTrace&&(this.traceArr=[],this._enableTrace())}fillShape(t){t.fillEnabled()&&this._fill(t)}_fill(t){}strokeShape(t){t.hasStroke()&&this._stroke(t)}_stroke(t){}fillStrokeShape(t){t.attrs.fillAfterStrokeEnabled?(this.strokeShape(t),this.fillShape(t)):(this.fillShape(t),this.strokeShape(t))}getTrace(t,e){var n,r,i,o,a=this.traceArr,s=a.length,u=""
for(n=0;n<s;n++)(i=(r=a[n]).method)?(o=r.args,u+=i,t?u+="()":g._isArray(o[0])?u+="(["+o.join(",")+"])":(e&&(o=o.map((t=>"number"==typeof t?Math.floor(t):t))),u+="("+o.join(",")+")")):(u+=r.property,t||(u+="="+r.val)),u+=";"
return u}clearTrace(){this.traceArr=[]}_trace(t){var e=this.traceArr
e.push(t),e.length>=100&&e.shift()}reset(){var t=this.getCanvas().getPixelRatio()
this.setTransform(1*t,0,0,1*t,0,0)}getCanvas(){return this.canvas}clear(t){var e=this.getCanvas()
t?this.clearRect(t.x||0,t.y||0,t.width||0,t.height||0):this.clearRect(0,0,e.getWidth()/e.pixelRatio,e.getHeight()/e.pixelRatio)}_applyLineCap(t){var e=t.getLineCap()
e&&this.setAttr("lineCap",e)}_applyOpacity(t){var e=t.getAbsoluteOpacity()
1!==e&&this.setAttr("globalAlpha",e)}_applyLineJoin(t){var e=t.attrs.lineJoin
e&&this.setAttr("lineJoin",e)}setAttr(t,e){this._context[t]=e}arc(t,e,n,r,i,o){this._context.arc(t,e,n,r,i,o)}arcTo(t,e,n,r,i){this._context.arcTo(t,e,n,r,i)}beginPath(){this._context.beginPath()}bezierCurveTo(t,e,n,r,i,o){this._context.bezierCurveTo(t,e,n,r,i,o)}clearRect(t,e,n,r){this._context.clearRect(t,e,n,r)}clip(){this._context.clip()}closePath(){this._context.closePath()}createImageData(t,e){var n=arguments
return 2===n.length?this._context.createImageData(t,e):1===n.length?this._context.createImageData(t):void 0}createLinearGradient(t,e,n,r){return this._context.createLinearGradient(t,e,n,r)}createPattern(t,e){return this._context.createPattern(t,e)}createRadialGradient(t,e,n,r,i,o){return this._context.createRadialGradient(t,e,n,r,i,o)}drawImage(t,e,n,r,i,o,a,s,u){var c=arguments,h=this._context
3===c.length?h.drawImage(t,e,n):5===c.length?h.drawImage(t,e,n,r,i):9===c.length&&h.drawImage(t,e,n,r,i,o,a,s,u)}ellipse(t,e,n,r,i,o,a,s){this._context.ellipse(t,e,n,r,i,o,a,s)}isPointInPath(t,e){return this._context.isPointInPath(t,e)}fill(t){t?this._context.fill(t):this._context.fill()}fillRect(t,e,n,r){this._context.fillRect(t,e,n,r)}strokeRect(t,e,n,r){this._context.strokeRect(t,e,n,r)}fillText(t,e,n,r){r?this._context.fillText(t,e,n,r):this._context.fillText(t,e,n)}measureText(t){return this._context.measureText(t)}getImageData(t,e,n,r){return this._context.getImageData(t,e,n,r)}lineTo(t,e){this._context.lineTo(t,e)}moveTo(t,e){this._context.moveTo(t,e)}rect(t,e,n,r){this._context.rect(t,e,n,r)}putImageData(t,e,n){this._context.putImageData(t,e,n)}quadraticCurveTo(t,e,n,r){this._context.quadraticCurveTo(t,e,n,r)}restore(){this._context.restore()}rotate(t){this._context.rotate(t)}save(){this._context.save()}scale(t,e){this._context.scale(t,e)}setLineDash(t){this._context.setLineDash?this._context.setLineDash(t):"mozDash"in this._context?this._context.mozDash=t:"webkitLineDash"in this._context&&(this._context.webkitLineDash=t)}getLineDash(){return this._context.getLineDash()}setTransform(t,e,n,r,i,o){this._context.setTransform(t,e,n,r,i,o)}stroke(t){t?this._context.stroke(t):this._context.stroke()}strokeText(t,e,n,r){this._context.strokeText(t,e,n,r)}transform(t,e,n,r,i,o){this._context.transform(t,e,n,r,i,o)}translate(t,e){this._context.translate(t,e)}_enableTrace(){var t,e,n=this,r=F.length,i=this.setAttr,o=function(t){var r,i=n[t]
n[t]=function(){return e=A(Array.prototype.slice.call(arguments,0)),r=i.apply(n,arguments),n._trace({method:t,args:e}),r}}
for(t=0;t<r;t++)o(F[t])
n.setAttr=function(){i.apply(n,arguments)
var t=arguments[0],e=arguments[1]
"shadowOffsetX"!==t&&"shadowOffsetY"!==t&&"shadowBlur"!==t||(e/=this.canvas.getPixelRatio()),n._trace({property:t,val:e})}}_applyGlobalCompositeOperation(t){const e=t.attrs.globalCompositeOperation
!e||"source-over"===e||this.setAttr("globalCompositeOperation",e)}}["fillStyle","strokeStyle","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","lineCap","lineDashOffset","lineJoin","lineWidth","miterLimit","font","textAlign","textBaseline","globalAlpha","globalCompositeOperation","imageSmoothingEnabled"].forEach((function(t){Object.defineProperty(R.prototype,t,{get(){return this._context[t]},set(e){this._context[t]=e}})}))
class O extends R{_fillColor(t){var e=t.fill()
this.setAttr("fillStyle",e),t._fillFunc(this)}_fillPattern(t){this.setAttr("fillStyle",t._getFillPattern()),t._fillFunc(this)}_fillLinearGradient(t){var e=t._getLinearGradient()
e&&(this.setAttr("fillStyle",e),t._fillFunc(this))}_fillRadialGradient(t){var e=t._getRadialGradient()
e&&(this.setAttr("fillStyle",e),t._fillFunc(this))}_fill(t){var e=t.fill(),n=t.getFillPriority()
if(e&&"color"===n)this._fillColor(t)
else{var r=t.getFillPatternImage()
if(r&&"pattern"===n)this._fillPattern(t)
else{var i=t.getFillLinearGradientColorStops()
if(i&&"linear-gradient"===n)this._fillLinearGradient(t)
else{var o=t.getFillRadialGradientColorStops()
o&&"radial-gradient"===n?this._fillRadialGradient(t):e?this._fillColor(t):r?this._fillPattern(t):i?this._fillLinearGradient(t):o&&this._fillRadialGradient(t)}}}}_strokeLinearGradient(t){var e=t.getStrokeLinearGradientStartPoint(),n=t.getStrokeLinearGradientEndPoint(),r=t.getStrokeLinearGradientColorStops(),i=this.createLinearGradient(e.x,e.y,n.x,n.y)
if(r){for(var o=0;o<r.length;o+=2)i.addColorStop(r[o],r[o+1])
this.setAttr("strokeStyle",i)}}_stroke(t){var e=t.dash(),n=t.getStrokeScaleEnabled()
if(t.hasStroke()){if(!n){this.save()
var r=this.getCanvas().getPixelRatio()
this.setTransform(r,0,0,r,0,0)}this._applyLineCap(t),e&&t.dashEnabled()&&(this.setLineDash(e),this.setAttr("lineDashOffset",t.dashOffset())),this.setAttr("lineWidth",t.strokeWidth()),t.getShadowForStrokeEnabled()||this.setAttr("shadowColor","rgba(0,0,0,0)"),t.getStrokeLinearGradientColorStops()?this._strokeLinearGradient(t):this.setAttr("strokeStyle",t.stroke()),t._strokeFunc(this),n||this.restore()}}_applyShadow(t){var e,n,r,i=null!==(e=t.getShadowRGBA())&&void 0!==e?e:"black",o=null!==(n=t.getShadowBlur())&&void 0!==n?n:5,a=null!==(r=t.getShadowOffset())&&void 0!==r?r:{x:0,y:0},s=t.getAbsoluteScale(),u=this.canvas.getPixelRatio(),c=s.x*u,h=s.y*u
this.setAttr("shadowColor",i),this.setAttr("shadowBlur",o*Math.min(Math.abs(c),Math.abs(h))),this.setAttr("shadowOffsetX",a.x*c),this.setAttr("shadowOffsetY",a.y*h)}}class D extends R{_fill(t){this.save(),this.setAttr("fillStyle",t.colorKey),t._fillFuncHit(this),this.restore()}strokeShape(t){t.hasHitStroke()&&this._stroke(t)}_stroke(t){if(t.hasHitStroke()){var e=t.getStrokeScaleEnabled()
if(!e){this.save()
var n=this.getCanvas().getPixelRatio()
this.setTransform(n,0,0,n,0,0)}this._applyLineCap(t)
var r=t.hitStrokeWidth(),i="auto"===r?t.strokeWidth():r
this.setAttr("lineWidth",i),this.setAttr("strokeStyle",t.colorKey),t._strokeFuncHit(this),e||this.restore()}}}class M{constructor(t){this.pixelRatio=1,this.width=0,this.height=0,this.isCache=!1
var e=(t||{}).pixelRatio||o.pixelRatio||function(){if(P)return P
var t=g.createCanvasElement().getContext("2d")
return P=(o._global.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)}()
this.pixelRatio=e,this._canvas=g.createCanvasElement(),this._canvas.style.padding="0",this._canvas.style.margin="0",this._canvas.style.border="0",this._canvas.style.background="transparent",this._canvas.style.position="absolute",this._canvas.style.top="0",this._canvas.style.left="0"}getContext(){return this.context}getPixelRatio(){return this.pixelRatio}setPixelRatio(t){var e=this.pixelRatio
this.pixelRatio=t,this.setSize(this.getWidth()/e,this.getHeight()/e)}setWidth(t){this.width=this._canvas.width=t*this.pixelRatio,this._canvas.style.width=t+"px"
var e=this.pixelRatio
this.getContext()._context.scale(e,e)}setHeight(t){this.height=this._canvas.height=t*this.pixelRatio,this._canvas.style.height=t+"px"
var e=this.pixelRatio
this.getContext()._context.scale(e,e)}getWidth(){return this.width}getHeight(){return this.height}setSize(t,e){this.setWidth(t||0),this.setHeight(e||0)}toDataURL(t,e){try{return this._canvas.toDataURL(t,e)}catch(t){try{return this._canvas.toDataURL()}catch(t){return g.error("Unable to get data URL. "+t.message+" For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."),""}}}}k.addGetterSetter(M,"pixelRatio",void 0,y())
class I extends M{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{width:0,height:0}
super(t),this.context=new O(this),this.setSize(t.width,t.height)}}class N extends M{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{width:0,height:0}
super(t),this.hitCanvas=!0,this.context=new D(this),this.setSize(t.width,t.height)}}const _={get isDragging(){var t=!1
return _._dragElements.forEach((e=>{"dragging"===e.dragStatus&&(t=!0)})),t},justDragged:!1,get node(){var t
return _._dragElements.forEach((e=>{t=e.node})),t},_dragElements:new Map,_drag(t){const e=[]
_._dragElements.forEach(((n,r)=>{const{node:i}=n,o=i.getStage()
o.setPointersPositions(t),void 0===n.pointerId&&(n.pointerId=g._getFirstPointerId(t))
const a=o._changedPointerPositions.find((t=>t.id===n.pointerId))
if(a){if("dragging"!==n.dragStatus){var s=i.dragDistance()
if(Math.max(Math.abs(a.x-n.startPointerPos.x),Math.abs(a.y-n.startPointerPos.y))<s)return
if(i.startDrag({evt:t}),!i.isDragging())return}i._setDragPosition(t,n),e.push(i)}})),e.forEach((e=>{e.fire("dragmove",{type:"dragmove",target:e,evt:t},!0)}))},_endDragBefore(t){_._dragElements.forEach((e=>{const{node:n}=e,r=n.getStage()
if(t&&r.setPointersPositions(t),!r._changedPointerPositions.find((t=>t.id===e.pointerId)))return
"dragging"!==e.dragStatus&&"stopped"!==e.dragStatus||(_.justDragged=!0,o._mouseListenClick=!1,o._touchListenClick=!1,o._pointerListenClick=!1,e.dragStatus="stopped")
const i=e.node.getLayer()||e.node instanceof o.Stage&&e.node
i&&i.batchDraw()}))},_endDragAfter(t){_._dragElements.forEach(((e,n)=>{"stopped"===e.dragStatus&&e.node.fire("dragend",{type:"dragend",target:e.node,evt:t},!0),"dragging"!==e.dragStatus&&_._dragElements.delete(n)}))}}
o.isBrowser&&(window.addEventListener("mouseup",_._endDragBefore,!0),window.addEventListener("touchend",_._endDragBefore,!0),window.addEventListener("mousemove",_._drag),window.addEventListener("touchmove",_._drag),window.addEventListener("mouseup",_._endDragAfter,!1),window.addEventListener("touchend",_._endDragAfter,!1))
var B="absoluteOpacity",L="allEventListeners",U="absoluteTransform",j="absoluteScale",G="canvas",z="listening",H="mouseenter",V="mouseleave",Z="Shape",W=" ",q="stage",K="transform",X="visible",Y=["xChange.konva","yChange.konva","scaleXChange.konva","scaleYChange.konva","skewXChange.konva","skewYChange.konva","rotationChange.konva","offsetXChange.konva","offsetYChange.konva","transformsEnabledChange.konva"].join(W)
let J=1
class Q{constructor(t){this._id=J++,this.eventListeners={},this.attrs={},this.index=0,this._allEventListeners=null,this.parent=null,this._cache=new Map,this._attachedDepsListeners=new Map,this._lastPos=null,this._batchingTransformChange=!1,this._needClearTransformCache=!1,this._filterUpToDate=!1,this._isUnderCache=!1,this._dragEventId=null,this._shouldFireChangeEvents=!1,this.setAttrs(t),this._shouldFireChangeEvents=!0}hasChildren(){return!1}_clearCache(t){t!==K&&t!==U||!this._cache.get(t)?t?this._cache.delete(t):this._cache.clear():this._cache.get(t).dirty=!0}_getCache(t,e){var n=this._cache.get(t)
return(void 0===n||(t===K||t===U)&&!0===n.dirty)&&(n=e.call(this),this._cache.set(t,n)),n}_calculate(t,e,n){if(!this._attachedDepsListeners.get(t)){const n=e.map((t=>t+"Change.konva")).join(W)
this.on(n,(()=>{this._clearCache(t)})),this._attachedDepsListeners.set(t,!0)}return this._getCache(t,n)}_getCanvasCache(){return this._cache.get(G)}_clearSelfAndDescendantCache(t){this._clearCache(t),t===U&&this.fire("absoluteTransformChange")}clearCache(){return this._cache.delete(G),this._clearSelfAndDescendantCache(),this._requestDraw(),this}cache(t){var e=t||{},n={}
void 0!==e.x&&void 0!==e.y&&void 0!==e.width&&void 0!==e.height||(n=this.getClientRect({skipTransform:!0,relativeTo:this.getParent()}))
var r=Math.ceil(e.width||n.width),i=Math.ceil(e.height||n.height),o=e.pixelRatio,a=void 0===e.x?n.x:e.x,s=void 0===e.y?n.y:e.y,u=e.offset||0,c=e.drawBorder||!1,h=e.hitCanvasPixelRatio||1
if(r&&i){a-=u,s-=u
var l=new I({pixelRatio:o,width:r+=2*u,height:i+=2*u}),f=new I({pixelRatio:o,width:0,height:0}),d=new N({pixelRatio:h,width:r,height:i}),p=l.getContext(),v=d.getContext()
return d.isCache=!0,l.isCache=!0,this._cache.delete(G),this._filterUpToDate=!1,!1===e.imageSmoothingEnabled&&(l.getContext()._context.imageSmoothingEnabled=!1,f.getContext()._context.imageSmoothingEnabled=!1),p.save(),v.save(),p.translate(-a,-s),v.translate(-a,-s),this._isUnderCache=!0,this._clearSelfAndDescendantCache(B),this._clearSelfAndDescendantCache(j),this.drawScene(l,this),this.drawHit(d,this),this._isUnderCache=!1,p.restore(),v.restore(),c&&(p.save(),p.beginPath(),p.rect(0,0,r,i),p.closePath(),p.setAttr("strokeStyle","red"),p.setAttr("lineWidth",5),p.stroke(),p.restore()),this._cache.set(G,{scene:l,filter:f,hit:d,x:a,y:s}),this._requestDraw(),this}g.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.")}isCached(){return this._cache.has(G)}getClientRect(t){throw new Error('abstract "getClientRect" method call')}_transformedRect(t,e){var n,r,i,o,a=[{x:t.x,y:t.y},{x:t.x+t.width,y:t.y},{x:t.x+t.width,y:t.y+t.height},{x:t.x,y:t.y+t.height}],s=this.getAbsoluteTransform(e)
return a.forEach((function(t){var e=s.point(t)
void 0===n&&(n=i=e.x,r=o=e.y),n=Math.min(n,e.x),r=Math.min(r,e.y),i=Math.max(i,e.x),o=Math.max(o,e.y)})),{x:n,y:r,width:i-n,height:o-r}}_drawCachedSceneCanvas(t){t.save(),t._applyOpacity(this),t._applyGlobalCompositeOperation(this)
const e=this._getCanvasCache()
t.translate(e.x,e.y)
var n=this._getCachedSceneCanvas(),r=n.pixelRatio
t.drawImage(n._canvas,0,0,n.width/r,n.height/r),t.restore()}_drawCachedHitCanvas(t){var e=this._getCanvasCache(),n=e.hit
t.save(),t.translate(e.x,e.y),t.drawImage(n._canvas,0,0,n.width/n.pixelRatio,n.height/n.pixelRatio),t.restore()}_getCachedSceneCanvas(){var t,e,n,r,i=this.filters(),o=this._getCanvasCache(),a=o.scene,s=o.filter,u=s.getContext()
if(i){if(!this._filterUpToDate){var c=a.pixelRatio
s.setSize(a.width/a.pixelRatio,a.height/a.pixelRatio)
try{for(t=i.length,u.clear(),u.drawImage(a._canvas,0,0,a.getWidth()/c,a.getHeight()/c),e=u.getImageData(0,0,s.getWidth(),s.getHeight()),n=0;n<t;n++)"function"==typeof(r=i[n])?(r.call(this,e),u.putImageData(e,0,0)):g.error("Filter should be type of function, but got "+typeof r+" instead. Please check correct filters")}catch(t){g.error("Unable to apply filter. "+t.message+" This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.")}this._filterUpToDate=!0}return s}return a}on(t,e){if(this._cache&&this._cache.delete(L),3===arguments.length)return this._delegate.apply(this,arguments)
var n,r,i,o,a=t.split(W),s=a.length
for(n=0;n<s;n++)i=(r=a[n].split("."))[0],o=r[1]||"",this.eventListeners[i]||(this.eventListeners[i]=[]),this.eventListeners[i].push({name:o,handler:e})
return this}off(t,e){var n,r,i,o,a,s=(t||"").split(W),u=s.length
if(this._cache&&this._cache.delete(L),!t)for(r in this.eventListeners)this._off(r)
for(n=0;n<u;n++)if(o=(i=s[n].split("."))[0],a=i[1],o)this.eventListeners[o]&&this._off(o,a,e)
else for(r in this.eventListeners)this._off(r,a,e)
return this}dispatchEvent(t){var e={target:this,type:t.type,evt:t}
return this.fire(t.type,e),this}addEventListener(t,e){return this.on(t,(function(t){e.call(this,t.evt)})),this}removeEventListener(t){return this.off(t),this}_delegate(t,e,n){var r=this
this.on(t,(function(t){for(var i=t.target.findAncestors(e,!0,r),o=0;o<i.length;o++)(t=g.cloneObject(t)).currentTarget=i[o],n.call(i[o],t)}))}remove(){return this.isDragging()&&this.stopDrag(),_._dragElements.delete(this._id),this._remove(),this}_clearCaches(){this._clearSelfAndDescendantCache(U),this._clearSelfAndDescendantCache(B),this._clearSelfAndDescendantCache(j),this._clearSelfAndDescendantCache(q),this._clearSelfAndDescendantCache(X),this._clearSelfAndDescendantCache(z)}_remove(){this._clearCaches()
var t=this.getParent()
t&&t.children&&(t.children.splice(this.index,1),t._setChildrenIndices(),this.parent=null)}destroy(){return this.remove(),this}getAttr(t){var e="get"+g._capitalize(t)
return g._isFunction(this[e])?this[e]():this.attrs[t]}getAncestors(){for(var t=this.getParent(),e=[];t;)e.push(t),t=t.getParent()
return e}getAttrs(){return this.attrs||{}}setAttrs(t){return this._batchTransformChanges((()=>{var e,n
if(!t)return this
for(e in t)"children"!==e&&(n="set"+g._capitalize(e),g._isFunction(this[n])?this[n](t[e]):this._setAttr(e,t[e]))})),this}isListening(){return this._getCache(z,this._isListening)}_isListening(t){if(!this.listening())return!1
const e=this.getParent()
return!e||e===t||this===t||e._isListening(t)}isVisible(){return this._getCache(X,this._isVisible)}_isVisible(t){if(!this.visible())return!1
const e=this.getParent()
return!e||e===t||this===t||e._isVisible(t)}shouldDrawHit(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(t)return this._isVisible(t)&&this._isListening(t)
var n=this.getLayer(),r=!1
_._dragElements.forEach((t=>{"dragging"===t.dragStatus&&("Stage"===t.node.nodeType||t.node.getLayer()===n)&&(r=!0)}))
var i=!e&&!o.hitOnDragEnabled&&r
return this.isListening()&&this.isVisible()&&!i}show(){return this.visible(!0),this}hide(){return this.visible(!1),this}getZIndex(){return this.index||0}getAbsoluteZIndex(){var t,e,n,r,i=this.getDepth(),o=this,a=0
return"Stage"!==o.nodeType&&function s(u){for(t=[],e=u.length,n=0;n<e;n++)r=u[n],a++,r.nodeType!==Z&&(t=t.concat(r.getChildren().slice())),r._id===o._id&&(n=e)
t.length>0&&t[0].getDepth()<=i&&s(t)}(o.getStage().getChildren()),a}getDepth(){for(var t=0,e=this.parent;e;)t++,e=e.parent
return t}_batchTransformChanges(t){this._batchingTransformChange=!0,t(),this._batchingTransformChange=!1,this._needClearTransformCache&&(this._clearCache(K),this._clearSelfAndDescendantCache(U)),this._needClearTransformCache=!1}setPosition(t){return this._batchTransformChanges((()=>{this.x(t.x),this.y(t.y)})),this}getPosition(){return{x:this.x(),y:this.y()}}getRelativePointerPosition(){if(!this.getStage())return null
var t=this.getStage().getPointerPosition()
if(!t)return null
var e=this.getAbsoluteTransform().copy()
return e.invert(),e.point(t)}getAbsolutePosition(t){let e=!1,n=this.parent
for(;n;){if(n.isCached()){e=!0
break}n=n.parent}e&&!t&&(t=!0)
var r=this.getAbsoluteTransform(t).getMatrix(),i=new s,o=this.offset()
return i.m=r.slice(),i.translate(o.x,o.y),i.getTranslation()}setAbsolutePosition(t){var e=this._clearTransform()
this.attrs.x=e.x,this.attrs.y=e.y,delete e.x,delete e.y,this._clearCache(K)
var n=this._getAbsoluteTransform().copy()
return n.invert(),n.translate(t.x,t.y),t={x:this.attrs.x+n.getTranslation().x,y:this.attrs.y+n.getTranslation().y},this._setTransform(e),this.setPosition({x:t.x,y:t.y}),this._clearCache(K),this._clearSelfAndDescendantCache(U),this}_setTransform(t){var e
for(e in t)this.attrs[e]=t[e]}_clearTransform(){var t={x:this.x(),y:this.y(),rotation:this.rotation(),scaleX:this.scaleX(),scaleY:this.scaleY(),offsetX:this.offsetX(),offsetY:this.offsetY(),skewX:this.skewX(),skewY:this.skewY()}
return this.attrs.x=0,this.attrs.y=0,this.attrs.rotation=0,this.attrs.scaleX=1,this.attrs.scaleY=1,this.attrs.offsetX=0,this.attrs.offsetY=0,this.attrs.skewX=0,this.attrs.skewY=0,t}move(t){var e=t.x,n=t.y,r=this.x(),i=this.y()
return void 0!==e&&(r+=e),void 0!==n&&(i+=n),this.setPosition({x:r,y:i}),this}_eachAncestorReverse(t,e){var n,r,i=[],o=this.getParent()
if(!e||e._id!==this._id){for(i.unshift(this);o&&(!e||o._id!==e._id);)i.unshift(o),o=o.parent
for(n=i.length,r=0;r<n;r++)t(i[r])}}rotate(t){return this.rotation(this.rotation()+t),this}moveToTop(){if(!this.parent)return g.warn("Node has no parent. moveToTop function is ignored."),!1
var t=this.index
return this.parent.children.splice(t,1),this.parent.children.push(this),this.parent._setChildrenIndices(),!0}moveUp(){if(!this.parent)return g.warn("Node has no parent. moveUp function is ignored."),!1
var t=this.index
return t<this.parent.getChildren().length-1&&(this.parent.children.splice(t,1),this.parent.children.splice(t+1,0,this),this.parent._setChildrenIndices(),!0)}moveDown(){if(!this.parent)return g.warn("Node has no parent. moveDown function is ignored."),!1
var t=this.index
return t>0&&(this.parent.children.splice(t,1),this.parent.children.splice(t-1,0,this),this.parent._setChildrenIndices(),!0)}moveToBottom(){if(!this.parent)return g.warn("Node has no parent. moveToBottom function is ignored."),!1
var t=this.index
return t>0&&(this.parent.children.splice(t,1),this.parent.children.unshift(this),this.parent._setChildrenIndices(),!0)}setZIndex(t){if(!this.parent)return g.warn("Node has no parent. zIndex parameter is ignored."),this;(t<0||t>=this.parent.children.length)&&g.warn("Unexpected value "+t+" for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to "+(this.parent.children.length-1)+".")
var e=this.index
return this.parent.children.splice(e,1),this.parent.children.splice(t,0,this),this.parent._setChildrenIndices(),this}getAbsoluteOpacity(){return this._getCache(B,this._getAbsoluteOpacity)}_getAbsoluteOpacity(){var t=this.opacity(),e=this.getParent()
return e&&!e._isUnderCache&&(t*=e.getAbsoluteOpacity()),t}moveTo(t){return this.getParent()!==t&&(this._remove(),t.add(this)),this}toObject(){var t,e,n,r,i={},o=this.getAttrs()
for(t in i.attrs={},o)e=o[t],g.isObject(e)&&!g._isPlainObject(e)&&!g._isArray(e)||(n="function"==typeof this[t]&&this[t],delete o[t],r=n?n.call(this):null,o[t]=e,r!==e&&(i.attrs[t]=e))
return i.className=this.getClassName(),g._prepareToStringify(i)}toJSON(){return JSON.stringify(this.toObject())}getParent(){return this.parent}findAncestors(t,e,n){var r=[]
e&&this._isMatch(t)&&r.push(this)
for(var i=this.parent;i;){if(i===n)return r
i._isMatch(t)&&r.push(i),i=i.parent}return r}isAncestorOf(t){return!1}findAncestor(t,e,n){return this.findAncestors(t,e,n)[0]}_isMatch(t){if(!t)return!1
if("function"==typeof t)return t(this)
var e,n,r=t.replace(/ /g,"").split(","),i=r.length
for(e=0;e<i;e++)if(n=r[e],g.isValidSelector(n)||(g.warn('Selector "'+n+'" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'),g.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'),g.warn("Konva is awesome, right?")),"#"===n.charAt(0)){if(this.id()===n.slice(1))return!0}else if("."===n.charAt(0)){if(this.hasName(n.slice(1)))return!0}else if(this.className===n||this.nodeType===n)return!0
return!1}getLayer(){var t=this.getParent()
return t?t.getLayer():null}getStage(){return this._getCache(q,this._getStage)}_getStage(){var t=this.getParent()
return t?t.getStage():void 0}fire(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0
return e.target=e.target||this,n?this._fireAndBubble(t,e):this._fire(t,e),this}getAbsoluteTransform(t){return t?this._getAbsoluteTransform(t):this._getCache(U,this._getAbsoluteTransform)}_getAbsoluteTransform(t){var e
if(t)return e=new s,this._eachAncestorReverse((function(t){var n=t.transformsEnabled()
"all"===n?e.multiply(t.getTransform()):"position"===n&&e.translate(t.x()-t.offsetX(),t.y()-t.offsetY())}),t),e
e=this._cache.get(U)||new s,this.parent?this.parent.getAbsoluteTransform().copyInto(e):e.reset()
var n=this.transformsEnabled()
if("all"===n)e.multiply(this.getTransform())
else if("position"===n){const t=this.attrs.x||0,n=this.attrs.y||0,r=this.attrs.offsetX||0,i=this.attrs.offsetY||0
e.translate(t-r,n-i)}return e.dirty=!1,e}getAbsoluteScale(t){for(var e=this;e;)e._isUnderCache&&(t=e),e=e.getParent()
const n=this.getAbsoluteTransform(t).decompose()
return{x:n.scaleX,y:n.scaleY}}getAbsoluteRotation(){return this.getAbsoluteTransform().decompose().rotation}getTransform(){return this._getCache(K,this._getTransform)}_getTransform(){var t,e,n=this._cache.get(K)||new s
n.reset()
var r=this.x(),i=this.y(),a=o.getAngle(this.rotation()),u=null!==(t=this.attrs.scaleX)&&void 0!==t?t:1,c=null!==(e=this.attrs.scaleY)&&void 0!==e?e:1,h=this.attrs.skewX||0,l=this.attrs.skewY||0,f=this.attrs.offsetX||0,d=this.attrs.offsetY||0
return 0===r&&0===i||n.translate(r,i),0!==a&&n.rotate(a),0===h&&0===l||n.skew(h,l),1===u&&1===c||n.scale(u,c),0===f&&0===d||n.translate(-1*f,-1*d),n.dirty=!1,n}clone(t){var e,n,r,i,o,a=g.cloneObject(this.attrs)
for(e in t)a[e]=t[e]
var s=new this.constructor(a)
for(e in this.eventListeners)for(r=(n=this.eventListeners[e]).length,i=0;i<r;i++)(o=n[i]).name.indexOf("konva")<0&&(s.eventListeners[e]||(s.eventListeners[e]=[]),s.eventListeners[e].push(o))
return s}_toKonvaCanvas(t){t=t||{}
var e=this.getClientRect(),n=this.getStage(),r=void 0!==t.x?t.x:e.x,i=void 0!==t.y?t.y:e.y,o=t.pixelRatio||1,a=new I({width:t.width||e.width||(n?n.width():0),height:t.height||e.height||(n?n.height():0),pixelRatio:o}),s=a.getContext()
return s.save(),(r||i)&&s.translate(-1*r,-1*i),this.drawScene(a),s.restore(),a}toCanvas(t){return this._toKonvaCanvas(t)._canvas}toDataURL(t){var e=(t=t||{}).mimeType||null,n=t.quality||null,r=this._toKonvaCanvas(t).toDataURL(e,n)
return t.callback&&t.callback(r),r}toImage(t){if(!t||!t.callback)throw"callback required for toImage method config argument"
var e=t.callback
delete t.callback,g._urlToImage(this.toDataURL(t),(function(t){e(t)}))}setSize(t){return this.width(t.width),this.height(t.height),this}getSize(){return{width:this.width(),height:this.height()}}getClassName(){return this.className||this.nodeType}getType(){return this.nodeType}getDragDistance(){return void 0!==this.attrs.dragDistance?this.attrs.dragDistance:this.parent?this.parent.getDragDistance():o.dragDistance}_off(t,e,n){var r,i,o,a=this.eventListeners[t]
for(r=0;r<a.length;r++)if(i=a[r].name,o=a[r].handler,!("konva"===i&&"konva"!==e||e&&i!==e||n&&n!==o)){if(a.splice(r,1),0===a.length){delete this.eventListeners[t]
break}r--}}_fireChangeEvent(t,e,n){this._fire(t+"Change",{oldVal:e,newVal:n})}addName(t){if(!this.hasName(t)){var e=this.name(),n=e?e+" "+t:t
this.name(n)}return this}hasName(t){if(!t)return!1
const e=this.name()
return!!e&&-1!==(e||"").split(/\s/g).indexOf(t)}removeName(t){var e=(this.name()||"").split(/\s/g),n=e.indexOf(t)
return-1!==n&&(e.splice(n,1),this.name(e.join(" "))),this}setAttr(t,e){var n=this["set"+g._capitalize(t)]
return g._isFunction(n)?n.call(this,e):this._setAttr(t,e),this}_requestDraw(){if(o.autoDrawEnabled){const t=this.getLayer()||this.getStage()
null==t||t.batchDraw()}}_setAttr(t,e){var n=this.attrs[t];(n!==e||g.isObject(e))&&(null==e?delete this.attrs[t]:this.attrs[t]=e,this._shouldFireChangeEvents&&this._fireChangeEvent(t,n,e),this._requestDraw())}_setComponentAttr(t,e,n){var r
void 0!==n&&((r=this.attrs[t])||(this.attrs[t]=this.getAttr(t)),this.attrs[t][e]=n,this._fireChangeEvent(t,r,n))}_fireAndBubble(t,e,n){if(e&&this.nodeType===Z&&(e.target=this),t!==H&&t!==V||!(n&&(this===n||this.isAncestorOf&&this.isAncestorOf(n))||"Stage"===this.nodeType&&!n)){this._fire(t,e)
var r=(t===H||t===V)&&n&&n.isAncestorOf&&n.isAncestorOf(this)&&!n.isAncestorOf(this.parent);(e&&!e.cancelBubble||!e)&&this.parent&&this.parent.isListening()&&!r&&(n&&n.parent?this._fireAndBubble.call(this.parent,t,e,n):this._fireAndBubble.call(this.parent,t,e))}}_getProtoListeners(t){let e=this._cache.get(L)
if(!e){e={}
let t=Object.getPrototypeOf(this)
for(;t;)if(t.eventListeners){for(var n in t.eventListeners){const r=t.eventListeners[n],i=e[n]||[]
e[n]=r.concat(i)}t=Object.getPrototypeOf(t)}else t=Object.getPrototypeOf(t)
this._cache.set(L,e)}return e[t]}_fire(t,e){(e=e||{}).currentTarget=this,e.type=t
const n=this._getProtoListeners(t)
if(n)for(var r=0;r<n.length;r++)n[r].handler.call(this,e)
const i=this.eventListeners[t]
if(i)for(r=0;r<i.length;r++)i[r].handler.call(this,e)}draw(){return this.drawScene(),this.drawHit(),this}_createDragElement(t){var e=t?t.pointerId:void 0,n=this.getStage(),r=this.getAbsolutePosition(),i=n._getPointerById(e)||n._changedPointerPositions[0]||r
_._dragElements.set(this._id,{node:this,startPointerPos:i,offset:{x:i.x-r.x,y:i.y-r.y},dragStatus:"ready",pointerId:e})}startDrag(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
_._dragElements.has(this._id)||this._createDragElement(t),_._dragElements.get(this._id).dragStatus="dragging",this.fire("dragstart",{type:"dragstart",target:this,evt:t&&t.evt},e)}_setDragPosition(t,e){const n=this.getStage()._getPointerById(e.pointerId)
if(n){var r={x:n.x-e.offset.x,y:n.y-e.offset.y},i=this.dragBoundFunc()
if(void 0!==i){const e=i.call(this,r,t)
e?r=e:g.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.")}this._lastPos&&this._lastPos.x===r.x&&this._lastPos.y===r.y||(this.setAbsolutePosition(r),this._requestDraw()),this._lastPos=r}}stopDrag(t){const e=_._dragElements.get(this._id)
e&&(e.dragStatus="stopped"),_._endDragBefore(t),_._endDragAfter(t)}setDraggable(t){this._setAttr("draggable",t),this._dragChange()}isDragging(){const t=_._dragElements.get(this._id)
return!!t&&"dragging"===t.dragStatus}_listenDrag(){this._dragCleanup(),this.on("mousedown.konva touchstart.konva",(function(t){if((void 0===t.evt.button||o.dragButtons.indexOf(t.evt.button)>=0)&&!this.isDragging()){var e=!1
_._dragElements.forEach((t=>{this.isAncestorOf(t.node)&&(e=!0)})),e||this._createDragElement(t)}}))}_dragChange(){if(this.attrs.draggable)this._listenDrag()
else{if(this._dragCleanup(),!this.getStage())return
const t=_._dragElements.get(this._id),e=t&&"dragging"===t.dragStatus,n=t&&"ready"===t.dragStatus
e?this.stopDrag():n&&_._dragElements.delete(this._id)}}_dragCleanup(){this.off("mousedown.konva"),this.off("touchstart.konva")}isClientRectOnScreen(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0}
const e=this.getStage()
if(!e)return!1
const n={x:-t.x,y:-t.y,width:e.width()+t.x,height:e.height()+t.y}
return g.haveIntersection(n,this.getClientRect())}static create(t,e){return g._isString(t)&&(t=JSON.parse(t)),this._createNode(t,e)}static _createNode(t,e){var n,r,i,a=Q.prototype.getClassName.call(t),s=t.children
if(e&&(t.attrs.container=e),o[a]||(g.warn('Can not find a node with class name "'+a+'". Fallback to "Shape".'),a="Shape"),n=new(0,o[a])(t.attrs),s)for(r=s.length,i=0;i<r;i++)n.add(Q._createNode(s[i]))
return n}}Q.prototype.nodeType="Node",Q.prototype._attrsAffectingSize=[],Q.prototype.eventListeners={},Q.prototype.on.call(Q.prototype,Y,(function(){this._batchingTransformChange?this._needClearTransformCache=!0:(this._clearCache(K),this._clearSelfAndDescendantCache(U))})),Q.prototype.on.call(Q.prototype,"visibleChange.konva",(function(){this._clearSelfAndDescendantCache(X)})),Q.prototype.on.call(Q.prototype,"listeningChange.konva",(function(){this._clearSelfAndDescendantCache(z)})),Q.prototype.on.call(Q.prototype,"opacityChange.konva",(function(){this._clearSelfAndDescendantCache(B)}))
const $=k.addGetterSetter
$(Q,"zIndex"),$(Q,"absolutePosition"),$(Q,"position"),$(Q,"x",0,y()),$(Q,"y",0,y()),$(Q,"globalCompositeOperation","source-over",x()),$(Q,"opacity",1,y()),$(Q,"name","",x()),$(Q,"id","",x()),$(Q,"rotation",0,y()),k.addComponentsGetterSetter(Q,"scale",["x","y"]),$(Q,"scaleX",1,y()),$(Q,"scaleY",1,y()),k.addComponentsGetterSetter(Q,"skew",["x","y"]),$(Q,"skewX",0,y()),$(Q,"skewY",0,y()),k.addComponentsGetterSetter(Q,"offset",["x","y"]),$(Q,"offsetX",0,y()),$(Q,"offsetY",0,y()),$(Q,"dragDistance",null,y()),$(Q,"width",0,y()),$(Q,"height",0,y()),$(Q,"listening",!0,C()),$(Q,"preventDefault",!0,C()),$(Q,"filters",null,(function(t){return this._filterUpToDate=!1,t})),$(Q,"visible",!0,C()),$(Q,"transformsEnabled","all",x()),$(Q,"size"),$(Q,"dragBoundFunc"),$(Q,"draggable",!1,C()),k.backCompat(Q,{rotateDeg:"rotate",setRotationDeg:"setRotation",getRotationDeg:"getRotation"})
class tt extends Q{constructor(){super(...arguments),this.children=[]}getChildren(t){if(!t)return this.children||[]
const e=this.children||[]
var n=[]
return e.forEach((function(e){t(e)&&n.push(e)})),n}hasChildren(){return this.getChildren().length>0}removeChildren(){return this.getChildren().forEach((t=>{t.parent=null,t.index=0,t.remove()})),this.children=[],this._requestDraw(),this}destroyChildren(){return this.getChildren().forEach((t=>{t.parent=null,t.index=0,t.destroy()})),this.children=[],this._requestDraw(),this}add(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
if(arguments.length>1){for(var r=0;r<arguments.length;r++)this.add(arguments[r])
return this}var i=e[0]
return i.getParent()?(i.moveTo(this),this):(this._validateAdd(i),i.index=this.getChildren().length,i.parent=this,i._clearCaches(),this.getChildren().push(i),this._fire("add",{child:i}),this._requestDraw(),this)}destroy(){return this.hasChildren()&&this.destroyChildren(),super.destroy(),this}find(t){return this._generalFind(t,!1)}findOne(t){var e=this._generalFind(t,!0)
return e.length>0?e[0]:void 0}_generalFind(t,e){var n=[]
return this._descendants((r=>{const i=r._isMatch(t)
return i&&n.push(r),!(!i||!e)})),n}_descendants(t){let e=!1
const n=this.getChildren()
for(const r of n){if(e=t(r),e)return!0
if(r.hasChildren()&&(e=r._descendants(t),e))return!0}return!1}toObject(){var t=Q.prototype.toObject.call(this)
return t.children=[],this.getChildren().forEach((e=>{t.children.push(e.toObject())})),t}isAncestorOf(t){for(var e=t.getParent();e;){if(e._id===this._id)return!0
e=e.getParent()}return!1}clone(t){var e=Q.prototype.clone.call(this,t)
return this.getChildren().forEach((function(t){e.add(t.clone())})),e}getAllIntersections(t){var e=[]
return this.find("Shape").forEach((function(n){n.isVisible()&&n.intersects(t)&&e.push(n)})),e}_clearSelfAndDescendantCache(t){var e
super._clearSelfAndDescendantCache(t),this.isCached()||null===(e=this.children)||void 0===e||e.forEach((function(e){e._clearSelfAndDescendantCache(t)}))}_setChildrenIndices(){var t
null===(t=this.children)||void 0===t||t.forEach((function(t,e){t.index=e})),this._requestDraw()}drawScene(t,e){var n=this.getLayer(),r=t||n&&n.getCanvas(),i=r&&r.getContext(),o=this._getCanvasCache(),a=o&&o.scene,s=r&&r.isCache
if(!this.isVisible()&&!s)return this
if(a){i.save()
var u=this.getAbsoluteTransform(e).getMatrix()
i.transform(u[0],u[1],u[2],u[3],u[4],u[5]),this._drawCachedSceneCanvas(i),i.restore()}else this._drawChildren("drawScene",r,e)
return this}drawHit(t,e){if(!this.shouldDrawHit(e))return this
var n=this.getLayer(),r=t||n&&n.hitCanvas,i=r&&r.getContext(),o=this._getCanvasCache()
if(o&&o.hit){i.save()
var a=this.getAbsoluteTransform(e).getMatrix()
i.transform(a[0],a[1],a[2],a[3],a[4],a[5]),this._drawCachedHitCanvas(i),i.restore()}else this._drawChildren("drawHit",r,e)
return this}_drawChildren(t,e,n){var r,i=e&&e.getContext(),o=this.clipWidth(),a=this.clipHeight(),s=this.clipFunc(),u=o&&a||s
const c=n===this
if(u){i.save()
var h=this.getAbsoluteTransform(n),l=h.getMatrix()
if(i.transform(l[0],l[1],l[2],l[3],l[4],l[5]),i.beginPath(),s)s.call(this,i,this)
else{var f=this.clipX(),d=this.clipY()
i.rect(f,d,o,a)}i.clip(),l=h.copy().invert().getMatrix(),i.transform(l[0],l[1],l[2],l[3],l[4],l[5])}var p=!c&&"source-over"!==this.globalCompositeOperation()&&"drawScene"===t
p&&(i.save(),i._applyGlobalCompositeOperation(this)),null===(r=this.children)||void 0===r||r.forEach((function(r){r[t](e,n)})),p&&i.restore(),u&&i.restore()}getClientRect(t){var e,n,r,i,o,a,s=(t=t||{}).skipTransform,u=t.relativeTo,c=this
null===(e=this.children)||void 0===e||e.forEach((function(e){if(e.visible()){var a=e.getClientRect({relativeTo:c,skipShadow:t.skipShadow,skipStroke:t.skipStroke})
0===a.width&&0===a.height||(void 0===n?(n=a.x,r=a.y,i=a.x+a.width,o=a.y+a.height):(n=Math.min(n,a.x),r=Math.min(r,a.y),i=Math.max(i,a.x+a.width),o=Math.max(o,a.y+a.height)))}}))
for(var h=this.find("Shape"),l=!1,f=0;f<h.length;f++)if(h[f]._isVisible(this)){l=!0
break}return a=l&&void 0!==n?{x:n,y:r,width:i-n,height:o-r}:{x:0,y:0,width:0,height:0},s?a:this._transformedRect(a,u)}}k.addComponentsGetterSetter(tt,"clip",["x","y","width","height"]),k.addGetterSetter(tt,"clipX",void 0,y()),k.addGetterSetter(tt,"clipY",void 0,y()),k.addGetterSetter(tt,"clipWidth",void 0,y()),k.addGetterSetter(tt,"clipHeight",void 0,y()),k.addGetterSetter(tt,"clipFunc")
const et=new Map,nt=void 0!==o._global.PointerEvent
function rt(t){return et.get(t)}function it(t){return{evt:t,pointerId:t.pointerId}}function ot(t,e){return et.get(t)===e}function at(t,e){st(t),e.getStage()&&(et.set(t,e),nt&&e._fire("gotpointercapture",it(new PointerEvent("gotpointercapture"))))}function st(t,e){const n=et.get(t)
if(!n)return
const r=n.getStage()
r&&r.content,et.delete(t),nt&&n._fire("lostpointercapture",it(new PointerEvent("lostpointercapture")))}var ut="mouseleave",ct="mouseover",ht="mouseenter",lt="mousemove",ft="mousedown",dt="mouseup",pt="pointermove",gt="pointerdown",vt="pointerup",mt="pointercancel",yt="pointerout",bt="pointerleave",wt="pointerover",xt="pointerenter",St="contextmenu",Ct="touchstart",Tt="touchend",Et="touchmove",kt="touchcancel",At="wheel",Pt=[[ht,"_pointerenter"],[ft,"_pointerdown"],[lt,"_pointermove"],[dt,"_pointerup"],[ut,"_pointerleave"],[Ct,"_pointerdown"],[Et,"_pointermove"],[Tt,"_pointerup"],[kt,"_pointercancel"],[ct,"_pointerover"],[At,"_wheel"],[St,"_contextmenu"],[gt,"_pointerdown"],[pt,"_pointermove"],[vt,"_pointerup"],[mt,"_pointercancel"],["lostpointercapture","_lostpointercapture"]]
const Ft={mouse:{[yt]:"mouseout",[bt]:ut,[wt]:ct,[xt]:ht,[pt]:lt,[gt]:ft,[vt]:dt,[mt]:"mousecancel",pointerclick:"click",pointerdblclick:"dblclick"},touch:{[yt]:"touchout",[bt]:"touchleave",[wt]:"touchover",[xt]:"touchenter",[pt]:Et,[gt]:Ct,[vt]:Tt,[mt]:kt,pointerclick:"tap",pointerdblclick:"dbltap"},pointer:{[yt]:yt,[bt]:bt,[wt]:wt,[xt]:xt,[pt]:pt,[gt]:gt,[vt]:vt,[mt]:mt,pointerclick:"pointerclick",pointerdblclick:"pointerdblclick"}},Rt=t=>t.indexOf("pointer")>=0?"pointer":t.indexOf("touch")>=0?"touch":"mouse",Ot=t=>{const e=Rt(t)
return"pointer"===e?o.pointerEventsEnabled&&Ft.pointer:"touch"===e?Ft.touch:"mouse"===e?Ft.mouse:void 0}
function Dt(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return(t.clipFunc||t.clipWidth||t.clipHeight)&&g.warn("Stage does not support clipping. Please use clip for Layers or Groups."),t}const Mt=[]
class It extends tt{constructor(t){super(Dt(t)),this._pointerPositions=[],this._changedPointerPositions=[],this._buildDOM(),this._bindContentEvents(),Mt.push(this),this.on("widthChange.konva heightChange.konva",this._resizeDOM),this.on("visibleChange.konva",this._checkVisibility),this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva",(()=>{Dt(this.attrs)})),this._checkVisibility()}_validateAdd(t){const e="Layer"===t.getType(),n="FastLayer"===t.getType()
e||n||g.throw("You may only add layers to the stage.")}_checkVisibility(){if(!this.content)return
const t=this.visible()?"":"none"
this.content.style.display=t}setContainer(t){if("string"==typeof t){if("."===t.charAt(0)){var e=t.slice(1)
t=document.getElementsByClassName(e)[0]}else{var n
n="#"!==t.charAt(0)?t:t.slice(1),t=document.getElementById(n)}if(!t)throw"Can not find container in document with id "+n}return this._setAttr("container",t),this.content&&(this.content.parentElement&&this.content.parentElement.removeChild(this.content),t.appendChild(this.content)),this}shouldDrawHit(){return!0}clear(){var t,e=this.children,n=e.length
for(t=0;t<n;t++)e[t].clear()
return this}clone(t){return t||(t={}),t.container="undefined"!=typeof document&&document.createElement("div"),tt.prototype.clone.call(this,t)}destroy(){super.destroy()
var t=this.content
t&&g._isInDocument(t)&&this.container().removeChild(t)
var e=Mt.indexOf(this)
return e>-1&&Mt.splice(e,1),this}getPointerPosition(){const t=this._pointerPositions[0]||this._changedPointerPositions[0]
return t?{x:t.x,y:t.y}:(g.warn("Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);"),null)}_getPointerById(t){return this._pointerPositions.find((e=>e.id===t))}getPointersPositions(){return this._pointerPositions}getStage(){return this}getContent(){return this.content}_toKonvaCanvas(t){(t=t||{}).x=t.x||0,t.y=t.y||0,t.width=t.width||this.width(),t.height=t.height||this.height()
var e=new I({width:t.width,height:t.height,pixelRatio:t.pixelRatio||1}),n=e.getContext()._context,r=this.children
return(t.x||t.y)&&n.translate(-1*t.x,-1*t.y),r.forEach((function(e){if(e.isVisible()){var r=e._toKonvaCanvas(t)
n.drawImage(r._canvas,t.x,t.y,r.getWidth()/r.getPixelRatio(),r.getHeight()/r.getPixelRatio())}})),e}getIntersection(t){if(!t)return null
var e,n=this.children
for(e=n.length-1;e>=0;e--){const r=n[e].getIntersection(t)
if(r)return r}return null}_resizeDOM(){var t=this.width(),e=this.height()
this.content&&(this.content.style.width=t+"px",this.content.style.height=e+"px"),this.bufferCanvas.setSize(t,e),this.bufferHitCanvas.setSize(t,e),this.children.forEach((n=>{n.setSize({width:t,height:e}),n.draw()}))}add(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r]
if(arguments.length>1){for(var i=0;i<arguments.length;i++)this.add(arguments[i])
return this}super.add(t)
var a=this.children.length
return a>5&&g.warn("The stage has "+a+" layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."),t.setSize({width:this.width(),height:this.height()}),t.draw(),o.isBrowser&&this.content.appendChild(t.canvas._canvas),this}getParent(){return null}getLayer(){return null}hasPointerCapture(t){return ot(t,this)}setPointerCapture(t){at(t,this)}releaseCapture(t){st(t)}getLayers(){return this.children}_bindContentEvents(){o.isBrowser&&Pt.forEach((t=>{let[e,n]=t
this.content.addEventListener(e,(t=>{this[n](t)}))}))}_pointerenter(t){this.setPointersPositions(t)
const e=Ot(t.type)
this._fire(e.pointerenter,{evt:t,target:this,currentTarget:this})}_pointerover(t){this.setPointersPositions(t)
const e=Ot(t.type)
this._fire(e.pointerover,{evt:t,target:this,currentTarget:this})}_getTargetShape(t){let e=this[t+"targetShape"]
return e&&!e.getStage()&&(e=null),e}_pointerleave(t){const e=Ot(t.type),n=Rt(t.type)
if(e){this.setPointersPositions(t)
var r=this._getTargetShape(n),i=!_.isDragging||o.hitOnDragEnabled
r&&i?(r._fireAndBubble(e.pointerout,{evt:t}),r._fireAndBubble(e.pointerleave,{evt:t}),this._fire(e.pointerleave,{evt:t,target:this,currentTarget:this}),this[n+"targetShape"]=null):i&&(this._fire(e.pointerleave,{evt:t,target:this,currentTarget:this}),this._fire(e.pointerout,{evt:t,target:this,currentTarget:this})),this.pointerPos=void 0,this._pointerPositions=[]}}_pointerdown(t){const e=Ot(t.type),n=Rt(t.type)
if(e){this.setPointersPositions(t)
var r=!1
this._changedPointerPositions.forEach((i=>{var a=this.getIntersection(i)
if(_.justDragged=!1,o["_"+n+"ListenClick"]=!0,!a||!a.isListening())return
o.capturePointerEventsEnabled&&a.setPointerCapture(i.id),this[n+"ClickStartShape"]=a,a._fireAndBubble(e.pointerdown,{evt:t,pointerId:i.id}),r=!0
const s=t.type.indexOf("touch")>=0
a.preventDefault()&&t.cancelable&&s&&t.preventDefault()})),r||this._fire(e.pointerdown,{evt:t,target:this,currentTarget:this,pointerId:this._pointerPositions[0].id})}}_pointermove(t){const e=Ot(t.type),n=Rt(t.type)
if(!e)return
if(_.isDragging&&_.node.preventDefault()&&t.cancelable&&t.preventDefault(),this.setPointersPositions(t),_.isDragging&&!o.hitOnDragEnabled)return
var r={}
let i=!1
var a=this._getTargetShape(n)
this._changedPointerPositions.forEach((o=>{const s=rt(o.id)||this.getIntersection(o),u=o.id,c={evt:t,pointerId:u}
var h=a!==s
if(h&&a&&(a._fireAndBubble(e.pointerout,Object.assign({},c),s),a._fireAndBubble(e.pointerleave,Object.assign({},c),s)),s){if(r[s._id])return
r[s._id]=!0}s&&s.isListening()?(i=!0,h&&(s._fireAndBubble(e.pointerover,Object.assign({},c),a),s._fireAndBubble(e.pointerenter,Object.assign({},c),a),this[n+"targetShape"]=s),s._fireAndBubble(e.pointermove,Object.assign({},c))):a&&(this._fire(e.pointerover,{evt:t,target:this,currentTarget:this,pointerId:u}),this[n+"targetShape"]=null)})),i||this._fire(e.pointermove,{evt:t,target:this,currentTarget:this,pointerId:this._changedPointerPositions[0].id})}_pointerup(t){const e=Ot(t.type),n=Rt(t.type)
if(!e)return
this.setPointersPositions(t)
const r=this[n+"ClickStartShape"],i=this[n+"ClickEndShape"]
var a={}
let s=!1
this._changedPointerPositions.forEach((u=>{const c=rt(u.id)||this.getIntersection(u)
if(c){if(c.releaseCapture(u.id),a[c._id])return
a[c._id]=!0}const h=u.id,l={evt:t,pointerId:h}
let f=!1
o["_"+n+"InDblClickWindow"]&&o["_"+n+"InDblClickWindowId"]===h?(f=!0,clearTimeout(this[n+"DblTimeout"])):_.justDragged||(o["_"+n+"InDblClickWindow"]=!0,o["_"+n+"InDblClickWindowId"]=h,clearTimeout(this[n+"DblTimeout"])),this[n+"DblTimeout"]=setTimeout((function(){o["_"+n+"InDblClickWindow"]=!1}),o.dblClickWindow),c&&c.isListening()?(s=!0,this[n+"ClickEndShape"]=c,c._fireAndBubble(e.pointerup,Object.assign({},l)),o["_"+n+"ListenClick"]&&r&&r===c&&(c._fireAndBubble(e.pointerclick,Object.assign({},l)),f&&i&&i===c&&c._fireAndBubble(e.pointerdblclick,Object.assign({},l)))):(this[n+"ClickEndShape"]=null,o["_"+n+"ListenClick"]&&this._fire(e.pointerclick,{evt:t,target:this,currentTarget:this,pointerId:h}),f&&this._fire(e.pointerdblclick,{evt:t,target:this,currentTarget:this,pointerId:h}))})),s||this._fire(e.pointerup,{evt:t,target:this,currentTarget:this,pointerId:this._changedPointerPositions[0].id}),o["_"+n+"ListenClick"]=!1,t.cancelable&&t.preventDefault()}_contextmenu(t){this.setPointersPositions(t)
var e=this.getIntersection(this.getPointerPosition())
e&&e.isListening()?e._fireAndBubble(St,{evt:t}):this._fire(St,{evt:t,target:this,currentTarget:this})}_wheel(t){this.setPointersPositions(t)
var e=this.getIntersection(this.getPointerPosition())
e&&e.isListening()?e._fireAndBubble(At,{evt:t}):this._fire(At,{evt:t,target:this,currentTarget:this})}_pointercancel(t){this.setPointersPositions(t)
const e=rt(t.pointerId)||this.getIntersection(this.getPointerPosition())
e&&e._fireAndBubble(vt,it(t)),st(t.pointerId)}_lostpointercapture(t){st(t.pointerId)}setPointersPositions(t){var e=this._getContentPosition(),n=null,r=null
void 0!==(t=t||window.event).touches?(this._pointerPositions=[],this._changedPointerPositions=[],Array.prototype.forEach.call(t.touches,(t=>{this._pointerPositions.push({id:t.identifier,x:(t.clientX-e.left)/e.scaleX,y:(t.clientY-e.top)/e.scaleY})})),Array.prototype.forEach.call(t.changedTouches||t.touches,(t=>{this._changedPointerPositions.push({id:t.identifier,x:(t.clientX-e.left)/e.scaleX,y:(t.clientY-e.top)/e.scaleY})}))):(n=(t.clientX-e.left)/e.scaleX,r=(t.clientY-e.top)/e.scaleY,this.pointerPos={x:n,y:r},this._pointerPositions=[{x:n,y:r,id:g._getFirstPointerId(t)}],this._changedPointerPositions=[{x:n,y:r,id:g._getFirstPointerId(t)}])}_setPointerPosition(t){g.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'),this.setPointersPositions(t)}_getContentPosition(){if(!this.content||!this.content.getBoundingClientRect)return{top:0,left:0,scaleX:1,scaleY:1}
var t=this.content.getBoundingClientRect()
return{top:t.top,left:t.left,scaleX:t.width/this.content.clientWidth||1,scaleY:t.height/this.content.clientHeight||1}}_buildDOM(){if(this.bufferCanvas=new I({width:this.width(),height:this.height()}),this.bufferHitCanvas=new N({pixelRatio:1,width:this.width(),height:this.height()}),o.isBrowser){var t=this.container()
if(!t)throw"Stage has no container. A container is required."
t.innerHTML="",this.content=document.createElement("div"),this.content.style.position="relative",this.content.style.userSelect="none",this.content.className="konvajs-content",this.content.setAttribute("role","presentation"),t.appendChild(this.content),this._resizeDOM()}}cache(){return g.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."),this}clearCache(){return this}batchDraw(){return this.getChildren().forEach((function(t){t.batchDraw()})),this}}It.prototype.nodeType="Stage",a(It),k.addGetterSetter(It,"container")
var Nt="hasShadow",_t="shadowRGBA",Bt="patternImage",Lt="linearGradient",Ut="radialGradient"
let jt
function Gt(){return jt||(jt=g.createCanvasElement().getContext("2d"),jt)}const zt={}
class Ht extends Q{constructor(t){let e
for(super(t);e=g.getRandomColor(),!e||e in zt;);this.colorKey=e,zt[e]=this}getContext(){return g.warn("shape.getContext() method is deprecated. Please do not use it."),this.getLayer().getContext()}getCanvas(){return g.warn("shape.getCanvas() method is deprecated. Please do not use it."),this.getLayer().getCanvas()}getSceneFunc(){return this.attrs.sceneFunc||this._sceneFunc}getHitFunc(){return this.attrs.hitFunc||this._hitFunc}hasShadow(){return this._getCache(Nt,this._hasShadow)}_hasShadow(){return this.shadowEnabled()&&0!==this.shadowOpacity()&&!!(this.shadowColor()||this.shadowBlur()||this.shadowOffsetX()||this.shadowOffsetY())}_getFillPattern(){return this._getCache(Bt,this.__getFillPattern)}__getFillPattern(){if(this.fillPatternImage()){const t=Gt().createPattern(this.fillPatternImage(),this.fillPatternRepeat()||"repeat")
if(t&&t.setTransform){const e=new s
e.translate(this.fillPatternX(),this.fillPatternY()),e.rotate(o.getAngle(this.fillPatternRotation())),e.scale(this.fillPatternScaleX(),this.fillPatternScaleY()),e.translate(-1*this.fillPatternOffsetX(),-1*this.fillPatternOffsetY())
const n=e.getMatrix()
t.setTransform({a:n[0],b:n[1],c:n[2],d:n[3],e:n[4],f:n[5]})}return t}}_getLinearGradient(){return this._getCache(Lt,this.__getLinearGradient)}__getLinearGradient(){var t=this.fillLinearGradientColorStops()
if(t){for(var e=Gt(),n=this.fillLinearGradientStartPoint(),r=this.fillLinearGradientEndPoint(),i=e.createLinearGradient(n.x,n.y,r.x,r.y),o=0;o<t.length;o+=2)i.addColorStop(t[o],t[o+1])
return i}}_getRadialGradient(){return this._getCache(Ut,this.__getRadialGradient)}__getRadialGradient(){var t=this.fillRadialGradientColorStops()
if(t){for(var e=Gt(),n=this.fillRadialGradientStartPoint(),r=this.fillRadialGradientEndPoint(),i=e.createRadialGradient(n.x,n.y,this.fillRadialGradientStartRadius(),r.x,r.y,this.fillRadialGradientEndRadius()),o=0;o<t.length;o+=2)i.addColorStop(t[o],t[o+1])
return i}}getShadowRGBA(){return this._getCache(_t,this._getShadowRGBA)}_getShadowRGBA(){if(this.hasShadow()){var t=g.colorToRGBA(this.shadowColor())
return"rgba("+t.r+","+t.g+","+t.b+","+t.a*(this.shadowOpacity()||1)+")"}}hasFill(){return this._calculate("hasFill",["fillEnabled","fill","fillPatternImage","fillLinearGradientColorStops","fillRadialGradientColorStops"],(()=>this.fillEnabled()&&!!(this.fill()||this.fillPatternImage()||this.fillLinearGradientColorStops()||this.fillRadialGradientColorStops())))}hasStroke(){return this._calculate("hasStroke",["strokeEnabled","strokeWidth","stroke","strokeLinearGradientColorStops"],(()=>this.strokeEnabled()&&this.strokeWidth()&&!(!this.stroke()&&!this.strokeLinearGradientColorStops())))}hasHitStroke(){const t=this.hitStrokeWidth()
return"auto"===t?this.hasStroke():this.strokeEnabled()&&!!t}intersects(t){var e=this.getStage().bufferHitCanvas
return e.getContext().clear(),this.drawHit(e,null,!0),e.context.getImageData(Math.round(t.x),Math.round(t.y),1,1).data[3]>0}destroy(){return Q.prototype.destroy.call(this),delete zt[this.colorKey],delete this.colorKey,this}_useBufferCanvas(t){var e
if(!this.getStage())return!1
if(null!==(e=this.attrs.perfectDrawEnabled)&&void 0!==e&&!e)return!1
const n=t||this.hasFill(),r=this.hasStroke(),i=1!==this.getAbsoluteOpacity()
if(n&&r&&i)return!0
const o=this.hasShadow(),a=this.shadowForStrokeEnabled()
return!!(n&&r&&o&&a)}setStrokeHitEnabled(t){g.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."),t?this.hitStrokeWidth("auto"):this.hitStrokeWidth(0)}getStrokeHitEnabled(){return 0!==this.hitStrokeWidth()}getSelfRect(){var t=this.size()
return{x:this._centroid?-t.width/2:0,y:this._centroid?-t.height/2:0,width:t.width,height:t.height}}getClientRect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const e=t.skipTransform,n=t.relativeTo,r=this.getSelfRect(),i=!t.skipStroke&&this.hasStroke()&&this.strokeWidth()||0,o=r.width+i,a=r.height+i,s=!t.skipShadow&&this.hasShadow(),u=s?this.shadowOffsetX():0,c=s?this.shadowOffsetY():0,h=o+Math.abs(u),l=a+Math.abs(c),f=s&&this.shadowBlur()||0,d=h+2*f,p=l+2*f
let g=0
Math.round(i/2)!==i/2&&(g=1)
const v={width:d+g,height:p+g,x:-Math.round(i/2+f)+Math.min(u,0)+r.x,y:-Math.round(i/2+f)+Math.min(c,0)+r.y}
return e?v:this._transformedRect(v,n)}drawScene(t,e){var n,r,i=this.getLayer(),o=t||i.getCanvas(),a=o.getContext(),s=this._getCanvasCache(),u=this.getSceneFunc(),c=this.hasShadow(),h=o.isCache,l=e===this
if(!this.isVisible()&&!l)return this
if(s){a.save()
var f=this.getAbsoluteTransform(e).getMatrix()
return a.transform(f[0],f[1],f[2],f[3],f[4],f[5]),this._drawCachedSceneCanvas(a),a.restore(),this}if(!u)return this
if(a.save(),this._useBufferCanvas()&&!h){(r=(n=this.getStage().bufferCanvas).getContext()).clear(),r.save(),r._applyLineJoin(this)
var d=this.getAbsoluteTransform(e).getMatrix()
r.transform(d[0],d[1],d[2],d[3],d[4],d[5]),u.call(this,r,this),r.restore()
var p=n.pixelRatio
c&&a._applyShadow(this),a._applyOpacity(this),a._applyGlobalCompositeOperation(this),a.drawImage(n._canvas,0,0,n.width/p,n.height/p)}else a._applyLineJoin(this),l||(d=this.getAbsoluteTransform(e).getMatrix(),a.transform(d[0],d[1],d[2],d[3],d[4],d[5]),a._applyOpacity(this),a._applyGlobalCompositeOperation(this)),c&&a._applyShadow(this),u.call(this,a,this)
return a.restore(),this}drawHit(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
if(!this.shouldDrawHit(e,n))return this
var r=this.getLayer(),i=t||r.hitCanvas,o=i&&i.getContext(),a=this.hitFunc()||this.sceneFunc(),s=this._getCanvasCache(),u=s&&s.hit
if(this.colorKey||g.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"),u){o.save()
var c=this.getAbsoluteTransform(e).getMatrix()
return o.transform(c[0],c[1],c[2],c[3],c[4],c[5]),this._drawCachedHitCanvas(o),o.restore(),this}if(!a)return this
if(o.save(),o._applyLineJoin(this),this!==e){var h=this.getAbsoluteTransform(e).getMatrix()
o.transform(h[0],h[1],h[2],h[3],h[4],h[5])}return a.call(this,o,this),o.restore(),this}drawHitFromCache(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
var e,n,r,i,o,a=this._getCanvasCache(),s=this._getCachedSceneCanvas(),u=a.hit,c=u.getContext(),h=u.getWidth(),l=u.getHeight()
c.clear(),c.drawImage(s._canvas,0,0,h,l)
try{for(r=(n=(e=c.getImageData(0,0,h,l)).data).length,i=g._hexToRgb(this.colorKey),o=0;o<r;o+=4)n[o+3]>t?(n[o]=i.r,n[o+1]=i.g,n[o+2]=i.b,n[o+3]=255):n[o+3]=0
c.putImageData(e,0,0)}catch(t){g.error("Unable to draw hit graph from cached scene canvas. "+t.message)}return this}hasPointerCapture(t){return ot(t,this)}setPointerCapture(t){at(t,this)}releaseCapture(t){st(t)}}Ht.prototype._fillFunc=function(t){t.fill()},Ht.prototype._strokeFunc=function(t){t.stroke()},Ht.prototype._fillFuncHit=function(t){t.fill()},Ht.prototype._strokeFuncHit=function(t){t.stroke()},Ht.prototype._centroid=!1,Ht.prototype.nodeType="Shape",a(Ht),Ht.prototype.eventListeners={},Ht.prototype.on.call(Ht.prototype,"shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",(function(){this._clearCache(Nt)})),Ht.prototype.on.call(Ht.prototype,"shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",(function(){this._clearCache(_t)})),Ht.prototype.on.call(Ht.prototype,"fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva",(function(){this._clearCache(Bt)})),Ht.prototype.on.call(Ht.prototype,"fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva",(function(){this._clearCache(Lt)})),Ht.prototype.on.call(Ht.prototype,"fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva",(function(){this._clearCache(Ut)})),k.addGetterSetter(Ht,"stroke",void 0,S()),k.addGetterSetter(Ht,"strokeWidth",2,y()),k.addGetterSetter(Ht,"fillAfterStrokeEnabled",!1),k.addGetterSetter(Ht,"hitStrokeWidth","auto",w()),k.addGetterSetter(Ht,"strokeHitEnabled",!0,C()),k.addGetterSetter(Ht,"perfectDrawEnabled",!0,C()),k.addGetterSetter(Ht,"shadowForStrokeEnabled",!0,C()),k.addGetterSetter(Ht,"lineJoin"),k.addGetterSetter(Ht,"lineCap"),k.addGetterSetter(Ht,"sceneFunc"),k.addGetterSetter(Ht,"hitFunc"),k.addGetterSetter(Ht,"dash"),k.addGetterSetter(Ht,"dashOffset",0,y()),k.addGetterSetter(Ht,"shadowColor",void 0,x()),k.addGetterSetter(Ht,"shadowBlur",0,y()),k.addGetterSetter(Ht,"shadowOpacity",1,y()),k.addComponentsGetterSetter(Ht,"shadowOffset",["x","y"]),k.addGetterSetter(Ht,"shadowOffsetX",0,y()),k.addGetterSetter(Ht,"shadowOffsetY",0,y()),k.addGetterSetter(Ht,"fillPatternImage"),k.addGetterSetter(Ht,"fill",void 0,S()),k.addGetterSetter(Ht,"fillPatternX",0,y()),k.addGetterSetter(Ht,"fillPatternY",0,y()),k.addGetterSetter(Ht,"fillLinearGradientColorStops"),k.addGetterSetter(Ht,"strokeLinearGradientColorStops"),k.addGetterSetter(Ht,"fillRadialGradientStartRadius",0),k.addGetterSetter(Ht,"fillRadialGradientEndRadius",0),k.addGetterSetter(Ht,"fillRadialGradientColorStops"),k.addGetterSetter(Ht,"fillPatternRepeat","repeat"),k.addGetterSetter(Ht,"fillEnabled",!0),k.addGetterSetter(Ht,"strokeEnabled",!0),k.addGetterSetter(Ht,"shadowEnabled",!0),k.addGetterSetter(Ht,"dashEnabled",!0),k.addGetterSetter(Ht,"strokeScaleEnabled",!0),k.addGetterSetter(Ht,"fillPriority","color"),k.addComponentsGetterSetter(Ht,"fillPatternOffset",["x","y"]),k.addGetterSetter(Ht,"fillPatternOffsetX",0,y()),k.addGetterSetter(Ht,"fillPatternOffsetY",0,y()),k.addComponentsGetterSetter(Ht,"fillPatternScale",["x","y"]),k.addGetterSetter(Ht,"fillPatternScaleX",1,y()),k.addGetterSetter(Ht,"fillPatternScaleY",1,y()),k.addComponentsGetterSetter(Ht,"fillLinearGradientStartPoint",["x","y"]),k.addComponentsGetterSetter(Ht,"strokeLinearGradientStartPoint",["x","y"]),k.addGetterSetter(Ht,"fillLinearGradientStartPointX",0),k.addGetterSetter(Ht,"strokeLinearGradientStartPointX",0),k.addGetterSetter(Ht,"fillLinearGradientStartPointY",0),k.addGetterSetter(Ht,"strokeLinearGradientStartPointY",0),k.addComponentsGetterSetter(Ht,"fillLinearGradientEndPoint",["x","y"]),k.addComponentsGetterSetter(Ht,"strokeLinearGradientEndPoint",["x","y"]),k.addGetterSetter(Ht,"fillLinearGradientEndPointX",0),k.addGetterSetter(Ht,"strokeLinearGradientEndPointX",0),k.addGetterSetter(Ht,"fillLinearGradientEndPointY",0),k.addGetterSetter(Ht,"strokeLinearGradientEndPointY",0),k.addComponentsGetterSetter(Ht,"fillRadialGradientStartPoint",["x","y"]),k.addGetterSetter(Ht,"fillRadialGradientStartPointX",0),k.addGetterSetter(Ht,"fillRadialGradientStartPointY",0),k.addComponentsGetterSetter(Ht,"fillRadialGradientEndPoint",["x","y"]),k.addGetterSetter(Ht,"fillRadialGradientEndPointX",0),k.addGetterSetter(Ht,"fillRadialGradientEndPointY",0),k.addGetterSetter(Ht,"fillPatternRotation",0),k.backCompat(Ht,{dashArray:"dash",getDashArray:"getDash",setDashArray:"getDash",drawFunc:"sceneFunc",getDrawFunc:"getSceneFunc",setDrawFunc:"setSceneFunc",drawHitFunc:"hitFunc",getDrawHitFunc:"getHitFunc",setDrawHitFunc:"setHitFunc"})
var Vt=[{x:0,y:0},{x:-1,y:-1},{x:1,y:-1},{x:1,y:1},{x:-1,y:1}],Zt=Vt.length
class Wt extends tt{constructor(t){super(t),this.canvas=new I,this.hitCanvas=new N({pixelRatio:1}),this._waitingForDraw=!1,this.on("visibleChange.konva",this._checkVisibility),this._checkVisibility(),this.on("imageSmoothingEnabledChange.konva",this._setSmoothEnabled),this._setSmoothEnabled()}createPNGStream(){return this.canvas._canvas.createPNGStream()}getCanvas(){return this.canvas}getNativeCanvasElement(){return this.canvas._canvas}getHitCanvas(){return this.hitCanvas}getContext(){return this.getCanvas().getContext()}clear(t){return this.getContext().clear(t),this.getHitCanvas().getContext().clear(t),this}setZIndex(t){super.setZIndex(t)
var e=this.getStage()
return e&&e.content&&(e.content.removeChild(this.getNativeCanvasElement()),t<e.children.length-1?e.content.insertBefore(this.getNativeCanvasElement(),e.children[t+1].getCanvas()._canvas):e.content.appendChild(this.getNativeCanvasElement())),this}moveToTop(){Q.prototype.moveToTop.call(this)
var t=this.getStage()
return t&&t.content&&(t.content.removeChild(this.getNativeCanvasElement()),t.content.appendChild(this.getNativeCanvasElement())),!0}moveUp(){if(!Q.prototype.moveUp.call(this))return!1
var t=this.getStage()
return!(!t||!t.content||(t.content.removeChild(this.getNativeCanvasElement()),this.index<t.children.length-1?t.content.insertBefore(this.getNativeCanvasElement(),t.children[this.index+1].getCanvas()._canvas):t.content.appendChild(this.getNativeCanvasElement()),0))}moveDown(){if(Q.prototype.moveDown.call(this)){var t=this.getStage()
if(t){var e=t.children
t.content&&(t.content.removeChild(this.getNativeCanvasElement()),t.content.insertBefore(this.getNativeCanvasElement(),e[this.index+1].getCanvas()._canvas))}return!0}return!1}moveToBottom(){if(Q.prototype.moveToBottom.call(this)){var t=this.getStage()
if(t){var e=t.children
t.content&&(t.content.removeChild(this.getNativeCanvasElement()),t.content.insertBefore(this.getNativeCanvasElement(),e[1].getCanvas()._canvas))}return!0}return!1}getLayer(){return this}remove(){var t=this.getNativeCanvasElement()
return Q.prototype.remove.call(this),t&&t.parentNode&&g._isInDocument(t)&&t.parentNode.removeChild(t),this}getStage(){return this.parent}setSize(t){let{width:e,height:n}=t
return this.canvas.setSize(e,n),this.hitCanvas.setSize(e,n),this._setSmoothEnabled(),this}_validateAdd(t){var e=t.getType()
"Group"!==e&&"Shape"!==e&&g.throw("You may only add groups and shapes to a layer.")}_toKonvaCanvas(t){return(t=t||{}).width=t.width||this.getWidth(),t.height=t.height||this.getHeight(),t.x=void 0!==t.x?t.x:this.x(),t.y=void 0!==t.y?t.y:this.y(),Q.prototype._toKonvaCanvas.call(this,t)}_checkVisibility(){const t=this.visible()
this.canvas._canvas.style.display=t?"block":"none"}_setSmoothEnabled(){this.getContext()._context.imageSmoothingEnabled=this.imageSmoothingEnabled()}getWidth(){if(this.parent)return this.parent.width()}setWidth(){g.warn('Can not change width of layer. Use "stage.width(value)" function instead.')}getHeight(){if(this.parent)return this.parent.height()}setHeight(){g.warn('Can not change height of layer. Use "stage.height(value)" function instead.')}batchDraw(){return this._waitingForDraw||(this._waitingForDraw=!0,g.requestAnimFrame((()=>{this.draw(),this._waitingForDraw=!1}))),this}getIntersection(t){if(!this.isListening()||!this.isVisible())return null
for(var e=1,n=!1;;){for(let r=0;r<Zt;r++){const i=Vt[r],o=this._getIntersection({x:t.x+i.x*e,y:t.y+i.y*e}),a=o.shape
if(a)return a
if(n=!!o.antialiased,!o.antialiased)break}if(!n)return null
e+=1}}_getIntersection(t){const e=this.hitCanvas.pixelRatio,n=this.hitCanvas.context.getImageData(Math.round(t.x*e),Math.round(t.y*e),1,1).data,r=n[3]
if(255===r){const t=g._rgbToHex(n[0],n[1],n[2]),e=zt["#"+t]
return e?{shape:e}:{antialiased:!0}}return r>0?{antialiased:!0}:{}}drawScene(t,e){var n=this.getLayer(),r=t||n&&n.getCanvas()
return this._fire("beforeDraw",{node:this}),this.clearBeforeDraw()&&r.getContext().clear(),tt.prototype.drawScene.call(this,r,e),this._fire("draw",{node:this}),this}drawHit(t,e){var n=this.getLayer(),r=t||n&&n.hitCanvas
return n&&n.clearBeforeDraw()&&n.getHitCanvas().getContext().clear(),tt.prototype.drawHit.call(this,r,e),this}enableHitGraph(){return this.hitGraphEnabled(!0),this}disableHitGraph(){return this.hitGraphEnabled(!1),this}setHitGraphEnabled(t){g.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."),this.listening(t)}getHitGraphEnabled(t){return g.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."),this.listening()}toggleHitCanvas(){if(this.parent&&this.parent.content){var t=this.parent
this.hitCanvas._canvas.parentNode?t.content.removeChild(this.hitCanvas._canvas):t.content.appendChild(this.hitCanvas._canvas)}}}Wt.prototype.nodeType="Layer",a(Wt),k.addGetterSetter(Wt,"imageSmoothingEnabled",!0),k.addGetterSetter(Wt,"clearBeforeDraw",!0),k.addGetterSetter(Wt,"hitGraphEnabled",!0,C())
class qt extends Wt{constructor(t){super(t),this.listening(!1),g.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.')}}qt.prototype.nodeType="FastLayer",a(qt)
class Kt extends tt{_validateAdd(t){var e=t.getType()
"Group"!==e&&"Shape"!==e&&g.throw("You may only add groups and shapes to groups.")}}Kt.prototype.nodeType="Group",a(Kt)
var Xt=i.performance&&i.performance.now?function(){return i.performance.now()}:function(){return(new Date).getTime()}
class Yt{constructor(t,e){this.id=Yt.animIdCounter++,this.frame={time:0,timeDiff:0,lastTime:Xt(),frameRate:0},this.func=t,this.setLayers(e)}setLayers(t){var e
return e=t?t.length>0?t:[t]:[],this.layers=e,this}getLayers(){return this.layers}addLayer(t){var e,n=this.layers,r=n.length
for(e=0;e<r;e++)if(n[e]._id===t._id)return!1
return this.layers.push(t),!0}isRunning(){var t,e=Yt.animations,n=e.length
for(t=0;t<n;t++)if(e[t].id===this.id)return!0
return!1}start(){return this.stop(),this.frame.timeDiff=0,this.frame.lastTime=Xt(),Yt._addAnimation(this),this}stop(){return Yt._removeAnimation(this),this}_updateFrameObject(t){this.frame.timeDiff=t-this.frame.lastTime,this.frame.lastTime=t,this.frame.time+=this.frame.timeDiff,this.frame.frameRate=1e3/this.frame.timeDiff}static _addAnimation(t){this.animations.push(t),this._handleAnimation()}static _removeAnimation(t){var e,n=t.id,r=this.animations,i=r.length
for(e=0;e<i;e++)if(r[e].id===n){this.animations.splice(e,1)
break}}static _runFrames(){var t,e,n,r,i,o,a,s,u={},c=this.animations
for(r=0;r<c.length;r++)if(e=(t=c[r]).layers,n=t.func,t._updateFrameObject(Xt()),o=e.length,!n||!1!==n.call(t,t.frame))for(i=0;i<o;i++)void 0!==(a=e[i])._id&&(u[a._id]=a)
for(s in u)u.hasOwnProperty(s)&&u[s].batchDraw()}static _animationLoop(){var t=Yt
t.animations.length?(t._runFrames(),g.requestAnimFrame(t._animationLoop)):t.animRunning=!1}static _handleAnimation(){this.animRunning||(this.animRunning=!0,g.requestAnimFrame(this._animationLoop))}}Yt.animations=[],Yt.animIdCounter=0,Yt.animRunning=!1
var Jt={node:1,duration:1,easing:1,onFinish:1,yoyo:1},Qt=0,$t=["fill","stroke","shadowColor"]
class te{constructor(t,e,n,r,i,o,a){this.prop=t,this.propFunc=e,this.begin=r,this._pos=r,this.duration=o,this._change=0,this.prevPos=0,this.yoyo=a,this._time=0,this._position=0,this._startTime=0,this._finish=0,this.func=n,this._change=i-this.begin,this.pause()}fire(t){var e=this[t]
e&&e()}setTime(t){t>this.duration?this.yoyo?(this._time=this.duration,this.reverse()):this.finish():t<0?this.yoyo?(this._time=0,this.play()):this.reset():(this._time=t,this.update())}getTime(){return this._time}setPosition(t){this.prevPos=this._pos,this.propFunc(t),this._pos=t}getPosition(t){return void 0===t&&(t=this._time),this.func(t,this.begin,this._change,this.duration)}play(){this.state=2,this._startTime=this.getTimer()-this._time,this.onEnterFrame(),this.fire("onPlay")}reverse(){this.state=3,this._time=this.duration-this._time,this._startTime=this.getTimer()-this._time,this.onEnterFrame(),this.fire("onReverse")}seek(t){this.pause(),this._time=t,this.update(),this.fire("onSeek")}reset(){this.pause(),this._time=0,this.update(),this.fire("onReset")}finish(){this.pause(),this._time=this.duration,this.update(),this.fire("onFinish")}update(){this.setPosition(this.getPosition(this._time)),this.fire("onUpdate")}onEnterFrame(){var t=this.getTimer()-this._startTime
2===this.state?this.setTime(t):3===this.state&&this.setTime(this.duration-t)}pause(){this.state=1,this.fire("onPause")}getTimer(){return(new Date).getTime()}}class ee{constructor(t){var e,n,r=this,i=t.node,a=i._id,s=t.easing||ne.Linear,u=!!t.yoyo
e=void 0===t.duration?.3:0===t.duration?.001:t.duration,this.node=i,this._id=Qt++
var c=i.getLayer()||(i instanceof o.Stage?i.getLayers():null)
for(n in c||g.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."),this.anim=new Yt((function(){r.tween.onEnterFrame()}),c),this.tween=new te(n,(function(t){r._tweenFunc(t)}),s,0,1,1e3*e,u),this._addListeners(),ee.attrs[a]||(ee.attrs[a]={}),ee.attrs[a][this._id]||(ee.attrs[a][this._id]={}),ee.tweens[a]||(ee.tweens[a]={}),t)void 0===Jt[n]&&this._addAttr(n,t[n])
this.reset(),this.onFinish=t.onFinish,this.onReset=t.onReset,this.onUpdate=t.onUpdate}_addAttr(t,e){var n,r,i,o,a,s,u,c,h=this.node,l=h._id
if((i=ee.tweens[l][t])&&delete ee.attrs[l][i][t],n=h.getAttr(t),g._isArray(e))if(r=[],a=Math.max(e.length,n.length),"points"===t&&e.length!==n.length&&(e.length>n.length?(u=n,n=g._prepareArrayForTween(n,e,h.closed())):(s=e,e=g._prepareArrayForTween(e,n,h.closed()))),0===t.indexOf("fill"))for(o=0;o<a;o++)if(o%2==0)r.push(e[o]-n[o])
else{var f=g.colorToRGBA(n[o])
c=g.colorToRGBA(e[o]),n[o]=f,r.push({r:c.r-f.r,g:c.g-f.g,b:c.b-f.b,a:c.a-f.a})}else for(o=0;o<a;o++)r.push(e[o]-n[o])
else-1!==$t.indexOf(t)?(n=g.colorToRGBA(n),r={r:(c=g.colorToRGBA(e)).r-n.r,g:c.g-n.g,b:c.b-n.b,a:c.a-n.a}):r=e-n
ee.attrs[l][this._id][t]={start:n,diff:r,end:e,trueEnd:s,trueStart:u},ee.tweens[l][t]=this._id}_tweenFunc(t){var e,n,r,i,o,a,s,u,c=this.node,h=ee.attrs[c._id][this._id]
for(e in h){if(r=(n=h[e]).start,i=n.diff,u=n.end,g._isArray(r))if(o=[],s=Math.max(r.length,u.length),0===e.indexOf("fill"))for(a=0;a<s;a++)a%2==0?o.push((r[a]||0)+i[a]*t):o.push("rgba("+Math.round(r[a].r+i[a].r*t)+","+Math.round(r[a].g+i[a].g*t)+","+Math.round(r[a].b+i[a].b*t)+","+(r[a].a+i[a].a*t)+")")
else for(a=0;a<s;a++)o.push((r[a]||0)+i[a]*t)
else o=-1!==$t.indexOf(e)?"rgba("+Math.round(r.r+i.r*t)+","+Math.round(r.g+i.g*t)+","+Math.round(r.b+i.b*t)+","+(r.a+i.a*t)+")":r+i*t
c.setAttr(e,o)}}_addListeners(){this.tween.onPlay=()=>{this.anim.start()},this.tween.onReverse=()=>{this.anim.start()},this.tween.onPause=()=>{this.anim.stop()},this.tween.onFinish=()=>{var t=this.node,e=ee.attrs[t._id][this._id]
e.points&&e.points.trueEnd&&t.setAttr("points",e.points.trueEnd),this.onFinish&&this.onFinish.call(this)},this.tween.onReset=()=>{var t=this.node,e=ee.attrs[t._id][this._id]
e.points&&e.points.trueStart&&t.points(e.points.trueStart),this.onReset&&this.onReset()},this.tween.onUpdate=()=>{this.onUpdate&&this.onUpdate.call(this)}}play(){return this.tween.play(),this}reverse(){return this.tween.reverse(),this}reset(){return this.tween.reset(),this}seek(t){return this.tween.seek(1e3*t),this}pause(){return this.tween.pause(),this}finish(){return this.tween.finish(),this}destroy(){var t,e=this.node._id,n=this._id,r=ee.tweens[e]
for(t in this.pause(),r)delete ee.tweens[e][t]
delete ee.attrs[e][n]}}ee.attrs={},ee.tweens={},Q.prototype.to=function(t){var e=t.onFinish
t.node=this,t.onFinish=function(){this.destroy(),e&&e()},new ee(t).play()}
const ne={BackEaseIn(t,e,n,r){var i=1.70158
return n*(t/=r)*t*((i+1)*t-i)+e},BackEaseOut(t,e,n,r){var i=1.70158
return n*((t=t/r-1)*t*((i+1)*t+i)+1)+e},BackEaseInOut(t,e,n,r){var i=1.70158
return(t/=r/2)<1?n/2*(t*t*((1+(i*=1.525))*t-i))+e:n/2*((t-=2)*t*((1+(i*=1.525))*t+i)+2)+e},ElasticEaseIn(t,e,n,r,i,o){var a=0
return 0===t?e:1==(t/=r)?e+n:(o||(o=.3*r),!i||i<Math.abs(n)?(i=n,a=o/4):a=o/(2*Math.PI)*Math.asin(n/i),-i*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)+e)},ElasticEaseOut(t,e,n,r,i,o){var a=0
return 0===t?e:1==(t/=r)?e+n:(o||(o=.3*r),!i||i<Math.abs(n)?(i=n,a=o/4):a=o/(2*Math.PI)*Math.asin(n/i),i*Math.pow(2,-10*t)*Math.sin((t*r-a)*(2*Math.PI)/o)+n+e)},ElasticEaseInOut(t,e,n,r,i,o){var a=0
return 0===t?e:2==(t/=r/2)?e+n:(o||(o=r*(.3*1.5)),!i||i<Math.abs(n)?(i=n,a=o/4):a=o/(2*Math.PI)*Math.asin(n/i),t<1?i*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)*-.5+e:i*Math.pow(2,-10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)*.5+n+e)},BounceEaseOut:(t,e,n,r)=>(t/=r)<1/2.75?n*(7.5625*t*t)+e:t<2/2.75?n*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?n*(7.5625*(t-=2.25/2.75)*t+.9375)+e:n*(7.5625*(t-=2.625/2.75)*t+.984375)+e,BounceEaseIn:(t,e,n,r)=>n-ne.BounceEaseOut(r-t,0,n,r)+e,BounceEaseInOut:(t,e,n,r)=>t<r/2?.5*ne.BounceEaseIn(2*t,0,n,r)+e:.5*ne.BounceEaseOut(2*t-r,0,n,r)+.5*n+e,EaseIn:(t,e,n,r)=>n*(t/=r)*t+e,EaseOut:(t,e,n,r)=>-n*(t/=r)*(t-2)+e,EaseInOut:(t,e,n,r)=>(t/=r/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e,StrongEaseIn:(t,e,n,r)=>n*(t/=r)*t*t*t*t+e,StrongEaseOut:(t,e,n,r)=>n*((t=t/r-1)*t*t*t*t+1)+e,StrongEaseInOut:(t,e,n,r)=>(t/=r/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e,Linear:(t,e,n,r)=>n*t/r+e},re=g._assign(o,{Util:g,Transform:s,Node:Q,Container:tt,Stage:It,stages:Mt,Layer:Wt,FastLayer:qt,Group:Kt,DD:_,Shape:Ht,shapes:zt,Animation:Yt,Tween:ee,Easings:ne,Context:R,Canvas:M})
class ie extends Ht{_sceneFunc(t){var e=o.getAngle(this.angle()),n=this.clockwise()
t.beginPath(),t.arc(0,0,this.outerRadius(),0,e,n),t.arc(0,0,this.innerRadius(),e,0,!n),t.closePath(),t.fillStrokeShape(this)}getWidth(){return 2*this.outerRadius()}getHeight(){return 2*this.outerRadius()}setWidth(t){this.outerRadius(t/2)}setHeight(t){this.outerRadius(t/2)}}function oe(t,e,n,r,i,o,a){var s=Math.sqrt(Math.pow(n-t,2)+Math.pow(r-e,2)),u=Math.sqrt(Math.pow(i-n,2)+Math.pow(o-r,2)),c=a*s/(s+u),h=a*u/(s+u)
return[n-c*(i-t),r-c*(o-e),n+h*(i-t),r+h*(o-e)]}function ae(t,e){var n,r,i=t.length,o=[]
for(n=2;n<i-2;n+=2)r=oe(t[n-2],t[n-1],t[n],t[n+1],t[n+2],t[n+3],e),isNaN(r[0])||(o.push(r[0]),o.push(r[1]),o.push(t[n]),o.push(t[n+1]),o.push(r[2]),o.push(r[3]))
return o}ie.prototype._centroid=!0,ie.prototype.className="Arc",ie.prototype._attrsAffectingSize=["innerRadius","outerRadius"],a(ie),k.addGetterSetter(ie,"innerRadius",0,y()),k.addGetterSetter(ie,"outerRadius",0,y()),k.addGetterSetter(ie,"angle",0,y()),k.addGetterSetter(ie,"clockwise",!1,C())
class se extends Ht{constructor(t){super(t),this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva",(function(){this._clearCache("tensionPoints")}))}_sceneFunc(t){var e,n,r,i=this.points(),o=i.length,a=this.tension(),s=this.closed(),u=this.bezier()
if(o){if(t.beginPath(),t.moveTo(i[0],i[1]),0!==a&&o>4){for(n=(e=this.getTensionPoints()).length,r=s?0:4,s||t.quadraticCurveTo(e[0],e[1],e[2],e[3]);r<n-2;)t.bezierCurveTo(e[r++],e[r++],e[r++],e[r++],e[r++],e[r++])
s||t.quadraticCurveTo(e[n-2],e[n-1],i[o-2],i[o-1])}else if(u)for(r=2;r<o;)t.bezierCurveTo(i[r++],i[r++],i[r++],i[r++],i[r++],i[r++])
else for(r=2;r<o;r+=2)t.lineTo(i[r],i[r+1])
s?(t.closePath(),t.fillStrokeShape(this)):t.strokeShape(this)}}getTensionPoints(){return this._getCache("tensionPoints",this._getTensionPoints)}_getTensionPoints(){return this.closed()?this._getTensionPointsClosed():ae(this.points(),this.tension())}_getTensionPointsClosed(){var t=this.points(),e=t.length,n=this.tension(),r=oe(t[e-2],t[e-1],t[0],t[1],t[2],t[3],n),i=oe(t[e-4],t[e-3],t[e-2],t[e-1],t[0],t[1],n),o=ae(t,n)
return[r[2],r[3]].concat(o).concat([i[0],i[1],t[e-2],t[e-1],i[2],i[3],r[0],r[1],t[0],t[1]])}getWidth(){return this.getSelfRect().width}getHeight(){return this.getSelfRect().height}getSelfRect(){var t=this.points()
if(t.length<4)return{x:t[0]||0,y:t[1]||0,width:0,height:0}
for(var e,n,r=(t=0!==this.tension()?[t[0],t[1],...this._getTensionPoints(),t[t.length-2],t[t.length-1]]:this.points())[0],i=t[0],o=t[1],a=t[1],s=0;s<t.length/2;s++)e=t[2*s],n=t[2*s+1],r=Math.min(r,e),i=Math.max(i,e),o=Math.min(o,n),a=Math.max(a,n)
return{x:r,y:o,width:i-r,height:a-o}}}se.prototype.className="Line",se.prototype._attrsAffectingSize=["points","bezier","tension"],a(se),k.addGetterSetter(se,"closed",!1),k.addGetterSetter(se,"bezier",!1),k.addGetterSetter(se,"tension",0,y()),k.addGetterSetter(se,"points",[],function(){if(o.isUnminified)return function(t,e){return g._isArray(t)?t.forEach((function(t){g._isNumber(t)||g.warn('"'+e+'" attribute has non numeric element '+t+". Make sure that all elements are numbers.")})):g.warn(v(t)+' is a not valid value for "'+e+'" attribute. The value should be a array of numbers.'),t}}())
class ue extends Ht{constructor(t){super(t),this.dataArray=[],this.pathLength=0,this.dataArray=ue.parsePathData(this.data()),this.pathLength=0
for(var e=0;e<this.dataArray.length;++e)this.pathLength+=this.dataArray[e].pathLength
this.on("dataChange.konva",(function(){this.dataArray=ue.parsePathData(this.data()),this.pathLength=0
for(var t=0;t<this.dataArray.length;++t)this.pathLength+=this.dataArray[t].pathLength}))}_sceneFunc(t){var e=this.dataArray
t.beginPath()
for(var n=!1,r=0;r<e.length;r++){var i=e[r].command,o=e[r].points
switch(i){case"L":t.lineTo(o[0],o[1])
break
case"M":t.moveTo(o[0],o[1])
break
case"C":t.bezierCurveTo(o[0],o[1],o[2],o[3],o[4],o[5])
break
case"Q":t.quadraticCurveTo(o[0],o[1],o[2],o[3])
break
case"A":var a=o[0],s=o[1],u=o[2],c=o[3],h=o[4],l=o[5],f=o[6],d=o[7],p=u>c?u:c,g=u>c?1:u/c,v=u>c?c/u:1
t.translate(a,s),t.rotate(f),t.scale(g,v),t.arc(0,0,p,h,h+l,1-d),t.scale(1/g,1/v),t.rotate(-f),t.translate(-a,-s)
break
case"z":n=!0,t.closePath()}}n||this.hasFill()?t.fillStrokeShape(this):t.strokeShape(this)}getSelfRect(){var t=[]
this.dataArray.forEach((function(e){if("A"===e.command){var n=e.points[4],r=e.points[5],i=e.points[4]+r,o=Math.PI/180
if(Math.abs(n-i)<o&&(o=Math.abs(n-i)),r<0)for(let r=n-o;r>i;r-=o){const n=ue.getPointOnEllipticalArc(e.points[0],e.points[1],e.points[2],e.points[3],r,0)
t.push(n.x,n.y)}else for(let r=n+o;r<i;r+=o){const n=ue.getPointOnEllipticalArc(e.points[0],e.points[1],e.points[2],e.points[3],r,0)
t.push(n.x,n.y)}}else if("C"===e.command)for(let a=0;a<=1;a+=.01){const n=ue.getPointOnCubicBezier(a,e.start.x,e.start.y,e.points[0],e.points[1],e.points[2],e.points[3],e.points[4],e.points[5])
t.push(n.x,n.y)}else t=t.concat(e.points)}))
for(var e,n,r=t[0],i=t[0],o=t[1],a=t[1],s=0;s<t.length/2;s++)e=t[2*s],n=t[2*s+1],isNaN(e)||(r=Math.min(r,e),i=Math.max(i,e)),isNaN(n)||(o=Math.min(o,n),a=Math.max(a,n))
return{x:Math.round(r),y:Math.round(o),width:Math.round(i-r),height:Math.round(a-o)}}getLength(){return this.pathLength}getPointAtLength(t){var e,n=0,r=this.dataArray.length
if(!r)return null
for(;n<r&&t>this.dataArray[n].pathLength;)t-=this.dataArray[n].pathLength,++n
if(n===r)return{x:(e=this.dataArray[n-1].points.slice(-2))[0],y:e[1]}
if(t<.01)return{x:(e=this.dataArray[n].points.slice(0,2))[0],y:e[1]}
var i=this.dataArray[n],o=i.points
switch(i.command){case"L":return ue.getPointOnLine(t,i.start.x,i.start.y,o[0],o[1])
case"C":return ue.getPointOnCubicBezier(t/i.pathLength,i.start.x,i.start.y,o[0],o[1],o[2],o[3],o[4],o[5])
case"Q":return ue.getPointOnQuadraticBezier(t/i.pathLength,i.start.x,i.start.y,o[0],o[1],o[2],o[3])
case"A":var a=o[0],s=o[1],u=o[2],c=o[3],h=o[4],l=o[5],f=o[6]
return h+=l*t/i.pathLength,ue.getPointOnEllipticalArc(a,s,u,c,h,f)}return null}static getLineLength(t,e,n,r){return Math.sqrt((n-t)*(n-t)+(r-e)*(r-e))}static getPointOnLine(t,e,n,r,i,o,a){void 0===o&&(o=e),void 0===a&&(a=n)
var s=(i-n)/(r-e+1e-8),u=Math.sqrt(t*t/(1+s*s))
r<e&&(u*=-1)
var c,h=s*u
if(r===e)c={x:o,y:a+h}
else if((a-n)/(o-e+1e-8)===s)c={x:o+u,y:a+h}
else{var l,f,d=this.getLineLength(e,n,r,i),p=(o-e)*(r-e)+(a-n)*(i-n)
l=e+(p/=d*d)*(r-e),f=n+p*(i-n)
var g=this.getLineLength(o,a,l,f),v=Math.sqrt(t*t-g*g)
u=Math.sqrt(v*v/(1+s*s)),r<e&&(u*=-1),c={x:l+u,y:f+(h=s*u)}}return c}static getPointOnCubicBezier(t,e,n,r,i,o,a,s,u){function c(t){return t*t*t}function h(t){return 3*t*t*(1-t)}function l(t){return 3*t*(1-t)*(1-t)}function f(t){return(1-t)*(1-t)*(1-t)}return{x:s*c(t)+o*h(t)+r*l(t)+e*f(t),y:u*c(t)+a*h(t)+i*l(t)+n*f(t)}}static getPointOnQuadraticBezier(t,e,n,r,i,o,a){function s(t){return t*t}function u(t){return 2*t*(1-t)}function c(t){return(1-t)*(1-t)}return{x:o*s(t)+r*u(t)+e*c(t),y:a*s(t)+i*u(t)+n*c(t)}}static getPointOnEllipticalArc(t,e,n,r,i,o){var a=Math.cos(o),s=Math.sin(o),u=n*Math.cos(i),c=r*Math.sin(i)
return{x:t+(u*a-c*s),y:e+(u*s+c*a)}}static parsePathData(t){if(!t)return[]
var e=t,n=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"]
e=e.replace(new RegExp(" ","g"),",")
for(var r=0;r<n.length;r++)e=e.replace(new RegExp(n[r],"g"),"|"+n[r])
var i,o=e.split("|"),a=[],s=[],u=0,c=0,h=/([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi
for(r=1;r<o.length;r++){var l=o[r],f=l.charAt(0)
for(l=l.slice(1),s.length=0;i=h.exec(l);)s.push(i[0])
for(var d=[],p=0,g=s.length;p<g;p++)if("00"!==s[p]){var v=parseFloat(s[p])
isNaN(v)?d.push(0):d.push(v)}else d.push(0,0)
for(;d.length>0&&!isNaN(d[0]);){var m,y,b,w,x,S,C,T,E,k,A=null,P=[],F=u,R=c
switch(f){case"l":u+=d.shift(),c+=d.shift(),A="L",P.push(u,c)
break
case"L":u=d.shift(),c=d.shift(),P.push(u,c)
break
case"m":var O=d.shift(),D=d.shift()
if(u+=O,c+=D,A="M",a.length>2&&"z"===a[a.length-1].command)for(var M=a.length-2;M>=0;M--)if("M"===a[M].command){u=a[M].points[0]+O,c=a[M].points[1]+D
break}P.push(u,c),f="l"
break
case"M":u=d.shift(),c=d.shift(),A="M",P.push(u,c),f="L"
break
case"h":u+=d.shift(),A="L",P.push(u,c)
break
case"H":u=d.shift(),A="L",P.push(u,c)
break
case"v":c+=d.shift(),A="L",P.push(u,c)
break
case"V":c=d.shift(),A="L",P.push(u,c)
break
case"C":P.push(d.shift(),d.shift(),d.shift(),d.shift()),u=d.shift(),c=d.shift(),P.push(u,c)
break
case"c":P.push(u+d.shift(),c+d.shift(),u+d.shift(),c+d.shift()),u+=d.shift(),c+=d.shift(),A="C",P.push(u,c)
break
case"S":y=u,b=c,"C"===(m=a[a.length-1]).command&&(y=u+(u-m.points[2]),b=c+(c-m.points[3])),P.push(y,b,d.shift(),d.shift()),u=d.shift(),c=d.shift(),A="C",P.push(u,c)
break
case"s":y=u,b=c,"C"===(m=a[a.length-1]).command&&(y=u+(u-m.points[2]),b=c+(c-m.points[3])),P.push(y,b,u+d.shift(),c+d.shift()),u+=d.shift(),c+=d.shift(),A="C",P.push(u,c)
break
case"Q":P.push(d.shift(),d.shift()),u=d.shift(),c=d.shift(),P.push(u,c)
break
case"q":P.push(u+d.shift(),c+d.shift()),u+=d.shift(),c+=d.shift(),A="Q",P.push(u,c)
break
case"T":y=u,b=c,"Q"===(m=a[a.length-1]).command&&(y=u+(u-m.points[0]),b=c+(c-m.points[1])),u=d.shift(),c=d.shift(),A="Q",P.push(y,b,u,c)
break
case"t":y=u,b=c,"Q"===(m=a[a.length-1]).command&&(y=u+(u-m.points[0]),b=c+(c-m.points[1])),u+=d.shift(),c+=d.shift(),A="Q",P.push(y,b,u,c)
break
case"A":w=d.shift(),x=d.shift(),S=d.shift(),C=d.shift(),T=d.shift(),E=u,k=c,u=d.shift(),c=d.shift(),A="A",P=this.convertEndpointToCenterParameterization(E,k,u,c,C,T,w,x,S)
break
case"a":w=d.shift(),x=d.shift(),S=d.shift(),C=d.shift(),T=d.shift(),E=u,k=c,u+=d.shift(),c+=d.shift(),A="A",P=this.convertEndpointToCenterParameterization(E,k,u,c,C,T,w,x,S)}a.push({command:A||f,points:P,start:{x:F,y:R},pathLength:this.calcLength(F,R,A||f,P)})}"z"!==f&&"Z"!==f||a.push({command:"z",points:[],start:void 0,pathLength:0})}return a}static calcLength(t,e,n,r){var i,o,a,s,u=ue
switch(n){case"L":return u.getLineLength(t,e,r[0],r[1])
case"C":for(i=0,o=u.getPointOnCubicBezier(0,t,e,r[0],r[1],r[2],r[3],r[4],r[5]),s=.01;s<=1;s+=.01)a=u.getPointOnCubicBezier(s,t,e,r[0],r[1],r[2],r[3],r[4],r[5]),i+=u.getLineLength(o.x,o.y,a.x,a.y),o=a
return i
case"Q":for(i=0,o=u.getPointOnQuadraticBezier(0,t,e,r[0],r[1],r[2],r[3]),s=.01;s<=1;s+=.01)a=u.getPointOnQuadraticBezier(s,t,e,r[0],r[1],r[2],r[3]),i+=u.getLineLength(o.x,o.y,a.x,a.y),o=a
return i
case"A":i=0
var c=r[4],h=r[5],l=r[4]+h,f=Math.PI/180
if(Math.abs(c-l)<f&&(f=Math.abs(c-l)),o=u.getPointOnEllipticalArc(r[0],r[1],r[2],r[3],c,0),h<0)for(s=c-f;s>l;s-=f)a=u.getPointOnEllipticalArc(r[0],r[1],r[2],r[3],s,0),i+=u.getLineLength(o.x,o.y,a.x,a.y),o=a
else for(s=c+f;s<l;s+=f)a=u.getPointOnEllipticalArc(r[0],r[1],r[2],r[3],s,0),i+=u.getLineLength(o.x,o.y,a.x,a.y),o=a
return a=u.getPointOnEllipticalArc(r[0],r[1],r[2],r[3],l,0),i+u.getLineLength(o.x,o.y,a.x,a.y)}return 0}static convertEndpointToCenterParameterization(t,e,n,r,i,o,a,s,u){var c=u*(Math.PI/180),h=Math.cos(c)*(t-n)/2+Math.sin(c)*(e-r)/2,l=-1*Math.sin(c)*(t-n)/2+Math.cos(c)*(e-r)/2,f=h*h/(a*a)+l*l/(s*s)
f>1&&(a*=Math.sqrt(f),s*=Math.sqrt(f))
var d=Math.sqrt((a*a*(s*s)-a*a*(l*l)-s*s*(h*h))/(a*a*(l*l)+s*s*(h*h)))
i===o&&(d*=-1),isNaN(d)&&(d=0)
var p=d*a*l/s,g=d*-s*h/a,v=(t+n)/2+Math.cos(c)*p-Math.sin(c)*g,m=(e+r)/2+Math.sin(c)*p+Math.cos(c)*g,y=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},b=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(y(t)*y(e))},w=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(b(t,e))},x=w([1,0],[(h-p)/a,(l-g)/s]),S=[(h-p)/a,(l-g)/s],C=[(-1*h-p)/a,(-1*l-g)/s],T=w(S,C)
return b(S,C)<=-1&&(T=Math.PI),b(S,C)>=1&&(T=0),0===o&&T>0&&(T-=2*Math.PI),1===o&&T<0&&(T+=2*Math.PI),[v,m,a,s,x,T,c,o]}}ue.prototype.className="Path",ue.prototype._attrsAffectingSize=["data"],a(ue),k.addGetterSetter(ue,"data")
class ce extends se{_sceneFunc(t){super._sceneFunc(t)
var e=2*Math.PI,n=this.points(),r=n,i=0!==this.tension()&&n.length>4
i&&(r=this.getTensionPoints())
var o,a,s=this.pointerLength(),u=n.length
if(i){const t=[r[r.length-4],r[r.length-3],r[r.length-2],r[r.length-1],n[u-2],n[u-1]],e=ue.calcLength(r[r.length-4],r[r.length-3],"C",t),i=ue.getPointOnQuadraticBezier(Math.min(1,1-s/e),t[0],t[1],t[2],t[3],t[4],t[5])
o=n[u-2]-i.x,a=n[u-1]-i.y}else o=n[u-2]-n[u-4],a=n[u-1]-n[u-3]
var c=(Math.atan2(a,o)+e)%e,h=this.pointerWidth()
this.pointerAtEnding()&&(t.save(),t.beginPath(),t.translate(n[u-2],n[u-1]),t.rotate(c),t.moveTo(0,0),t.lineTo(-s,h/2),t.lineTo(-s,-h/2),t.closePath(),t.restore(),this.__fillStroke(t)),this.pointerAtBeginning()&&(t.save(),t.beginPath(),t.translate(n[0],n[1]),i?(o=(r[0]+r[2])/2-n[0],a=(r[1]+r[3])/2-n[1]):(o=n[2]-n[0],a=n[3]-n[1]),t.rotate((Math.atan2(-a,-o)+e)%e),t.moveTo(0,0),t.lineTo(-s,h/2),t.lineTo(-s,-h/2),t.closePath(),t.restore(),this.__fillStroke(t))}__fillStroke(t){var e=this.dashEnabled()
e&&(this.attrs.dashEnabled=!1,t.setLineDash([])),t.fillStrokeShape(this),e&&(this.attrs.dashEnabled=!0)}getSelfRect(){const t=super.getSelfRect(),e=this.pointerWidth()/2
return{x:t.x-e,y:t.y-e,width:t.width+2*e,height:t.height+2*e}}}ce.prototype.className="Arrow",a(ce),k.addGetterSetter(ce,"pointerLength",10,y()),k.addGetterSetter(ce,"pointerWidth",10,y()),k.addGetterSetter(ce,"pointerAtBeginning",!1),k.addGetterSetter(ce,"pointerAtEnding",!0)
class he extends Ht{_sceneFunc(t){t.beginPath(),t.arc(0,0,this.attrs.radius||0,0,2*Math.PI,!1),t.closePath(),t.fillStrokeShape(this)}getWidth(){return 2*this.radius()}getHeight(){return 2*this.radius()}setWidth(t){this.radius()!==t/2&&this.radius(t/2)}setHeight(t){this.radius()!==t/2&&this.radius(t/2)}}he.prototype._centroid=!0,he.prototype.className="Circle",he.prototype._attrsAffectingSize=["radius"],a(he),k.addGetterSetter(he,"radius",0,y())
class le extends Ht{_sceneFunc(t){var e=this.radiusX(),n=this.radiusY()
t.beginPath(),t.save(),e!==n&&t.scale(1,n/e),t.arc(0,0,e,0,2*Math.PI,!1),t.restore(),t.closePath(),t.fillStrokeShape(this)}getWidth(){return 2*this.radiusX()}getHeight(){return 2*this.radiusY()}setWidth(t){this.radiusX(t/2)}setHeight(t){this.radiusY(t/2)}}le.prototype.className="Ellipse",le.prototype._centroid=!0,le.prototype._attrsAffectingSize=["radiusX","radiusY"],a(le),k.addComponentsGetterSetter(le,"radius",["x","y"]),k.addGetterSetter(le,"radiusX",0,y()),k.addGetterSetter(le,"radiusY",0,y())
class fe extends Ht{constructor(t){super(t),this.on("imageChange.konva",(()=>{this._setImageLoad()})),this._setImageLoad()}_setImageLoad(){const t=this.image()
t&&t.complete||t&&4===t.readyState||t&&t.addEventListener&&t.addEventListener("load",(()=>{this._requestDraw()}))}_useBufferCanvas(){return super._useBufferCanvas(!0)}_sceneFunc(t){const e=this.getWidth(),n=this.getHeight(),r=this.attrs.image
let i
if(r){const t=this.attrs.cropWidth,o=this.attrs.cropHeight
i=t&&o?[r,this.cropX(),this.cropY(),t,o,0,0,e,n]:[r,0,0,e,n]}(this.hasFill()||this.hasStroke())&&(t.beginPath(),t.rect(0,0,e,n),t.closePath(),t.fillStrokeShape(this)),r&&t.drawImage.apply(t,i)}_hitFunc(t){var e=this.width(),n=this.height()
t.beginPath(),t.rect(0,0,e,n),t.closePath(),t.fillStrokeShape(this)}getWidth(){var t,e
return null!==(t=this.attrs.width)&&void 0!==t?t:null===(e=this.image())||void 0===e?void 0:e.width}getHeight(){var t,e
return null!==(t=this.attrs.height)&&void 0!==t?t:null===(e=this.image())||void 0===e?void 0:e.height}static fromURL(t,e){var n=g.createImageElement()
n.onload=function(){var t=new fe({image:n})
e(t)},n.crossOrigin="Anonymous",n.src=t}}fe.prototype.className="Image",a(fe),k.addGetterSetter(fe,"image"),k.addComponentsGetterSetter(fe,"crop",["x","y","width","height"]),k.addGetterSetter(fe,"cropX",0,y()),k.addGetterSetter(fe,"cropY",0,y()),k.addGetterSetter(fe,"cropWidth",0,y()),k.addGetterSetter(fe,"cropHeight",0,y())
var de=["fontFamily","fontSize","fontStyle","padding","lineHeight","text","width","height"],pe="up",ge="right",ve="down",me="left",ye=de.length
class be extends Kt{constructor(t){super(t),this.on("add.konva",(function(t){this._addListeners(t.child),this._sync()}))}getText(){return this.find("Text")[0]}getTag(){return this.find("Tag")[0]}_addListeners(t){var e,n=this,r=function(){n._sync()}
for(e=0;e<ye;e++)t.on(de[e]+"Change.konva",r)}getWidth(){return this.getText().width()}getHeight(){return this.getText().height()}_sync(){var t,e,n,r,i,o,a,s=this.getText(),u=this.getTag()
if(s&&u){switch(t=s.width(),e=s.height(),n=u.pointerDirection(),r=u.pointerWidth(),a=u.pointerHeight(),i=0,o=0,n){case pe:i=t/2,o=-1*a
break
case ge:i=t+r,o=e/2
break
case ve:i=t/2,o=e+a
break
case me:i=-1*r,o=e/2}u.setAttrs({x:-1*i,y:-1*o,width:t,height:e}),s.setAttrs({x:-1*i,y:-1*o})}}}be.prototype.className="Label",a(be)
class we extends Ht{_sceneFunc(t){var e=this.width(),n=this.height(),r=this.pointerDirection(),i=this.pointerWidth(),o=this.pointerHeight(),a=this.cornerRadius()
let s=0,u=0,c=0,h=0
"number"==typeof a?s=u=c=h=Math.min(a,e/2,n/2):(s=Math.min(a[0]||0,e/2,n/2),u=Math.min(a[1]||0,e/2,n/2),h=Math.min(a[2]||0,e/2,n/2),c=Math.min(a[3]||0,e/2,n/2)),t.beginPath(),t.moveTo(s,0),r===pe&&(t.lineTo((e-i)/2,0),t.lineTo(e/2,-1*o),t.lineTo((e+i)/2,0)),t.lineTo(e-u,0),t.arc(e-u,u,u,3*Math.PI/2,0,!1),r===ge&&(t.lineTo(e,(n-o)/2),t.lineTo(e+i,n/2),t.lineTo(e,(n+o)/2)),t.lineTo(e,n-h),t.arc(e-h,n-h,h,0,Math.PI/2,!1),r===ve&&(t.lineTo((e+i)/2,n),t.lineTo(e/2,n+o),t.lineTo((e-i)/2,n)),t.lineTo(c,n),t.arc(c,n-c,c,Math.PI/2,Math.PI,!1),r===me&&(t.lineTo(0,(n+o)/2),t.lineTo(-1*i,n/2),t.lineTo(0,(n-o)/2)),t.lineTo(0,s),t.arc(s,s,s,Math.PI,3*Math.PI/2,!1),t.closePath(),t.fillStrokeShape(this)}getSelfRect(){var t=0,e=0,n=this.pointerWidth(),r=this.pointerHeight(),i=this.pointerDirection(),o=this.width(),a=this.height()
return i===pe?(e-=r,a+=r):i===ve?a+=r:i===me?(t-=1.5*n,o+=n):i===ge&&(o+=1.5*n),{x:t,y:e,width:o,height:a}}}we.prototype.className="Tag",a(we),k.addGetterSetter(we,"pointerDirection","none"),k.addGetterSetter(we,"pointerWidth",0,y()),k.addGetterSetter(we,"pointerHeight",0,y()),k.addGetterSetter(we,"cornerRadius",0,b(4))
class xe extends Ht{_sceneFunc(t){var e=this.cornerRadius(),n=this.width(),r=this.height()
if(t.beginPath(),e){let i=0,o=0,a=0,s=0
"number"==typeof e?i=o=a=s=Math.min(e,n/2,r/2):(i=Math.min(e[0]||0,n/2,r/2),o=Math.min(e[1]||0,n/2,r/2),s=Math.min(e[2]||0,n/2,r/2),a=Math.min(e[3]||0,n/2,r/2)),t.moveTo(i,0),t.lineTo(n-o,0),t.arc(n-o,o,o,3*Math.PI/2,0,!1),t.lineTo(n,r-s),t.arc(n-s,r-s,s,0,Math.PI/2,!1),t.lineTo(a,r),t.arc(a,r-a,a,Math.PI/2,Math.PI,!1),t.lineTo(0,i),t.arc(i,i,i,Math.PI,3*Math.PI/2,!1)}else t.rect(0,0,n,r)
t.closePath(),t.fillStrokeShape(this)}}xe.prototype.className="Rect",a(xe),k.addGetterSetter(xe,"cornerRadius",0,b(4))
class Se extends Ht{_sceneFunc(t){const e=this._getPoints()
t.beginPath(),t.moveTo(e[0].x,e[0].y)
for(var n=1;n<e.length;n++)t.lineTo(e[n].x,e[n].y)
t.closePath(),t.fillStrokeShape(this)}_getPoints(){const t=this.attrs.sides,e=this.attrs.radius||0,n=[]
for(var r=0;r<t;r++)n.push({x:e*Math.sin(2*r*Math.PI/t),y:-1*e*Math.cos(2*r*Math.PI/t)})
return n}getSelfRect(){const t=this._getPoints()
var e=t[0].x,n=t[0].y,r=t[0].x,i=t[0].y
return t.forEach((t=>{e=Math.min(e,t.x),n=Math.max(n,t.x),r=Math.min(r,t.y),i=Math.max(i,t.y)})),{x:e,y:r,width:n-e,height:i-r}}getWidth(){return 2*this.radius()}getHeight(){return 2*this.radius()}setWidth(t){this.radius(t/2)}setHeight(t){this.radius(t/2)}}Se.prototype.className="RegularPolygon",Se.prototype._centroid=!0,Se.prototype._attrsAffectingSize=["radius"],a(Se),k.addGetterSetter(Se,"radius",0,y()),k.addGetterSetter(Se,"sides",0,y())
var Ce=2*Math.PI
class Te extends Ht{_sceneFunc(t){t.beginPath(),t.arc(0,0,this.innerRadius(),0,Ce,!1),t.moveTo(this.outerRadius(),0),t.arc(0,0,this.outerRadius(),Ce,0,!0),t.closePath(),t.fillStrokeShape(this)}getWidth(){return 2*this.outerRadius()}getHeight(){return 2*this.outerRadius()}setWidth(t){this.outerRadius(t/2)}setHeight(t){this.outerRadius(t/2)}}Te.prototype.className="Ring",Te.prototype._centroid=!0,Te.prototype._attrsAffectingSize=["innerRadius","outerRadius"],a(Te),k.addGetterSetter(Te,"innerRadius",0,y()),k.addGetterSetter(Te,"outerRadius",0,y())
class Ee extends Ht{constructor(t){super(t),this._updated=!0,this.anim=new Yt((()=>{var t=this._updated
return this._updated=!1,t})),this.on("animationChange.konva",(function(){this.frameIndex(0)})),this.on("frameIndexChange.konva",(function(){this._updated=!0})),this.on("frameRateChange.konva",(function(){this.anim.isRunning()&&(clearInterval(this.interval),this._setInterval())}))}_sceneFunc(t){var e=this.animation(),n=this.frameIndex(),r=4*n,i=this.animations()[e],o=this.frameOffsets(),a=i[r+0],s=i[r+1],u=i[r+2],c=i[r+3],h=this.image()
if((this.hasFill()||this.hasStroke())&&(t.beginPath(),t.rect(0,0,u,c),t.closePath(),t.fillStrokeShape(this)),h)if(o){var l=o[e],f=2*n
t.drawImage(h,a,s,u,c,l[f+0],l[f+1],u,c)}else t.drawImage(h,a,s,u,c,0,0,u,c)}_hitFunc(t){var e=this.animation(),n=this.frameIndex(),r=4*n,i=this.animations()[e],o=this.frameOffsets(),a=i[r+2],s=i[r+3]
if(t.beginPath(),o){var u=o[e],c=2*n
t.rect(u[c+0],u[c+1],a,s)}else t.rect(0,0,a,s)
t.closePath(),t.fillShape(this)}_useBufferCanvas(){return super._useBufferCanvas(!0)}_setInterval(){var t=this
this.interval=setInterval((function(){t._updateIndex()}),1e3/this.frameRate())}start(){if(!this.isRunning()){var t=this.getLayer()
this.anim.setLayers(t),this._setInterval(),this.anim.start()}}stop(){this.anim.stop(),clearInterval(this.interval)}isRunning(){return this.anim.isRunning()}_updateIndex(){var t=this.frameIndex(),e=this.animation()
t<this.animations()[e].length/4-1?this.frameIndex(t+1):this.frameIndex(0)}}Ee.prototype.className="Sprite",a(Ee),k.addGetterSetter(Ee,"animation"),k.addGetterSetter(Ee,"animations"),k.addGetterSetter(Ee,"frameOffsets"),k.addGetterSetter(Ee,"image"),k.addGetterSetter(Ee,"frameIndex",0,y()),k.addGetterSetter(Ee,"frameRate",17,y()),k.backCompat(Ee,{index:"frameIndex",getIndex:"getFrameIndex",setIndex:"setFrameIndex"})
class ke extends Ht{_sceneFunc(t){var e=this.innerRadius(),n=this.outerRadius(),r=this.numPoints()
t.beginPath(),t.moveTo(0,0-n)
for(var i=1;i<2*r;i++){var o=i%2==0?n:e,a=o*Math.sin(i*Math.PI/r),s=-1*o*Math.cos(i*Math.PI/r)
t.lineTo(a,s)}t.closePath(),t.fillStrokeShape(this)}getWidth(){return 2*this.outerRadius()}getHeight(){return 2*this.outerRadius()}setWidth(t){this.outerRadius(t/2)}setHeight(t){this.outerRadius(t/2)}}function Ae(t){return Array.from(t)}ke.prototype.className="Star",ke.prototype._centroid=!0,ke.prototype._attrsAffectingSize=["innerRadius","outerRadius"],a(ke),k.addGetterSetter(ke,"numPoints",5,y()),k.addGetterSetter(ke,"innerRadius",0,y()),k.addGetterSetter(ke,"outerRadius",0,y())
var Pe,Fe="auto",Re="justify",Oe="left",De="middle",Me="normal",Ie=" ",Ne=["fontFamily","fontSize","fontStyle","fontVariant","padding","align","verticalAlign","lineHeight","text","width","height","wrap","ellipsis","letterSpacing"],_e=Ne.length
function Be(){return Pe||(Pe=g.createCanvasElement().getContext("2d"))}class Le extends Ht{constructor(t){super(function(t){return(t=t||{}).fillLinearGradientColorStops||t.fillRadialGradientColorStops||t.fillPatternImage||(t.fill=t.fill||"black"),t}(t)),this._partialTextX=0,this._partialTextY=0
for(var e=0;e<_e;e++)this.on(Ne[e]+"Change.konva",this._setTextData)
this._setTextData()}_sceneFunc(t){var e=this.textArr,n=e.length
if(this.text()){var r,i=this.padding(),o=this.fontSize(),a=this.lineHeight()*o,s=this.verticalAlign(),u=0,c=this.align(),h=this.getWidth(),l=this.letterSpacing(),f=this.fill(),d=this.textDecoration(),p=-1!==d.indexOf("underline"),g=-1!==d.indexOf("line-through"),v=0,m=(v=a/2,0),y=0
for(t.setAttr("font",this._getContextFont()),t.setAttr("textBaseline",De),t.setAttr("textAlign",Oe),s===De?u=(this.getHeight()-n*a-2*i)/2:"bottom"===s&&(u=this.getHeight()-n*a-2*i),t.translate(i,u+i),r=0;r<n;r++){m=0,y=0
var b,w,x,S=e[r],C=S.text,T=S.width,E=r!==n-1
if(t.save(),"right"===c?m+=h-T-2*i:"center"===c&&(m+=(h-T-2*i)/2),p&&(t.save(),t.beginPath(),t.moveTo(m,v+y+Math.round(o/2)),w=0==(b=C.split(" ").length-1),x=c===Re&&E&&!w?h-2*i:T,t.lineTo(m+Math.round(x),v+y+Math.round(o/2)),t.lineWidth=o/15,t.strokeStyle=f,t.stroke(),t.restore()),g&&(t.save(),t.beginPath(),t.moveTo(m,v+y),w=0==(b=C.split(" ").length-1),x=c===Re&&E&&!w?h-2*i:T,t.lineTo(m+Math.round(x),v+y),t.lineWidth=o/15,t.strokeStyle=f,t.stroke(),t.restore()),0!==l||c===Re){b=C.split(" ").length-1
for(var k=Ae(C),A=0;A<k.length;A++){var P=k[A]
" "===P&&r!==n-1&&c===Re&&(m+=(h-2*i-T)/b),this._partialTextX=m,this._partialTextY=v+y,this._partialText=P,t.fillStrokeShape(this),m+=this.measureSize(P).width+l}}else this._partialTextX=m,this._partialTextY=v+y,this._partialText=C,t.fillStrokeShape(this)
t.restore(),n>1&&(v+=a)}}}_hitFunc(t){var e=this.getWidth(),n=this.getHeight()
t.beginPath(),t.rect(0,0,e,n),t.closePath(),t.fillStrokeShape(this)}setText(t){var e=g._isString(t)?t:null==t?"":t+""
return this._setAttr("text",e),this}getWidth(){return this.attrs.width===Fe||void 0===this.attrs.width?this.getTextWidth()+2*this.padding():this.attrs.width}getHeight(){return this.attrs.height===Fe||void 0===this.attrs.height?this.fontSize()*this.textArr.length*this.lineHeight()+2*this.padding():this.attrs.height}getTextWidth(){return this.textWidth}getTextHeight(){return g.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."),this.textHeight}measureSize(t){var e,n=Be(),r=this.fontSize()
return n.save(),n.font=this._getContextFont(),e=n.measureText(t),n.restore(),{width:e.width,height:r}}_getContextFont(){return this.fontStyle()+Ie+this.fontVariant()+Ie+(this.fontSize()+"px ")+this.fontFamily().split(",").map((t=>{const e=(t=t.trim()).indexOf(" ")>=0,n=t.indexOf('"')>=0||t.indexOf("'")>=0
return e&&!n&&(t=`"${t}"`),t})).join(", ")}_addTextLine(t){this.align()===Re&&(t=t.trim())
var e=this._getTextWidth(t)
return this.textArr.push({text:t,width:e})}_getTextWidth(t){var e=this.letterSpacing(),n=t.length
return Be().measureText(t).width+(n?e*(n-1):0)}_setTextData(){var t=this.text().split("\n"),e=+this.fontSize(),n=0,r=this.lineHeight()*e,i=this.attrs.width,o=this.attrs.height,a=i!==Fe&&void 0!==i,s=o!==Fe&&void 0!==o,u=this.padding(),c=i-2*u,h=o-2*u,l=0,f=this.wrap(),d="none"!==f,p="char"!==f&&d,g=this.ellipsis()
this.textArr=[],Be().font=this._getContextFont()
for(var v=g?this._getTextWidth("…"):0,m=0,y=t.length;m<y;++m){var b=t[m],w=this._getTextWidth(b)
if(a&&w>c)for(;b.length>0;){for(var x=0,S=b.length,C="",T=0;x<S;){var E=x+S>>>1,k=b.slice(0,E+1),A=this._getTextWidth(k)+v
A<=c?(x=E+1,C=k,T=A):S=E}if(!C)break
if(p){var P,F=b[C.length];(P=(F===Ie||"-"===F)&&T<=c?C.length:Math.max(C.lastIndexOf(Ie),C.lastIndexOf("-"))+1)>0&&(x=P,C=C.slice(0,x),T=this._getTextWidth(C))}if(C=C.trimRight(),this._addTextLine(C),n=Math.max(n,T),l+=r,!d||s&&l+r>h){var R=this.textArr[this.textArr.length-1]
R&&g&&(this._getTextWidth(R.text+"…")<c||(R.text=R.text.slice(0,R.text.length-3)),this.textArr.splice(this.textArr.length-1,1),this._addTextLine(R.text+"…"))
break}if((b=(b=b.slice(x)).trimLeft()).length>0&&(w=this._getTextWidth(b))<=c){this._addTextLine(b),l+=r,n=Math.max(n,w)
break}}else this._addTextLine(b),l+=r,n=Math.max(n,w)
if(s&&l+r>h)break}this.textHeight=e,this.textWidth=n}getStrokeScaleEnabled(){return!0}}Le.prototype._fillFunc=function(t){t.fillText(this._partialText,this._partialTextX,this._partialTextY)},Le.prototype._strokeFunc=function(t){t.strokeText(this._partialText,this._partialTextX,this._partialTextY)},Le.prototype.className="Text",Le.prototype._attrsAffectingSize=["text","fontSize","padding","wrap","lineHeight","letterSpacing"],a(Le),k.overWriteSetter(Le,"width",w()),k.overWriteSetter(Le,"height",w()),k.addGetterSetter(Le,"fontFamily","Arial"),k.addGetterSetter(Le,"fontSize",12,y()),k.addGetterSetter(Le,"fontStyle",Me),k.addGetterSetter(Le,"fontVariant",Me),k.addGetterSetter(Le,"padding",0,y()),k.addGetterSetter(Le,"align",Oe),k.addGetterSetter(Le,"verticalAlign","top"),k.addGetterSetter(Le,"lineHeight",1,y()),k.addGetterSetter(Le,"wrap","word"),k.addGetterSetter(Le,"ellipsis",!1,C()),k.addGetterSetter(Le,"letterSpacing",0,y()),k.addGetterSetter(Le,"text","",x()),k.addGetterSetter(Le,"textDecoration","")
var Ue="normal"
function je(t){t.fillText(this.partialText,0,0)}function Ge(t){t.strokeText(this.partialText,0,0)}class ze extends Ht{constructor(t){super(t),this.dummyCanvas=g.createCanvasElement(),this.dataArray=[],this.dataArray=ue.parsePathData(this.attrs.data),this.on("dataChange.konva",(function(){this.dataArray=ue.parsePathData(this.attrs.data),this._setTextData()})),this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva",this._setTextData),this._setTextData()}_sceneFunc(t){t.setAttr("font",this._getContextFont()),t.setAttr("textBaseline",this.textBaseline()),t.setAttr("textAlign","left"),t.save()
var e=this.textDecoration(),n=this.fill(),r=this.fontSize(),i=this.glyphInfo
"underline"===e&&t.beginPath()
for(var o=0;o<i.length;o++){t.save()
var a=i[o].p0
t.translate(a.x,a.y),t.rotate(i[o].rotation),this.partialText=i[o].text,t.fillStrokeShape(this),"underline"===e&&(0===o&&t.moveTo(0,r/2+1),t.lineTo(r,r/2+1)),t.restore()}"underline"===e&&(t.strokeStyle=n,t.lineWidth=r/20,t.stroke()),t.restore()}_hitFunc(t){t.beginPath()
var e=this.glyphInfo
if(e.length>=1){var n=e[0].p0
t.moveTo(n.x,n.y)}for(var r=0;r<e.length;r++){var i=e[r].p1
t.lineTo(i.x,i.y)}t.setAttr("lineWidth",this.fontSize()),t.setAttr("strokeStyle",this.colorKey),t.stroke()}getTextWidth(){return this.textWidth}getTextHeight(){return g.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."),this.textHeight}setText(t){return Le.prototype.setText.call(this,t)}_getContextFont(){return Le.prototype._getContextFont.call(this)}_getTextSize(t){var e=this.dummyCanvas.getContext("2d")
e.save(),e.font=this._getContextFont()
var n=e.measureText(t)
return e.restore(),{width:n.width,height:parseInt(this.attrs.fontSize,10)}}_setTextData(){var t=this,e=this._getTextSize(this.attrs.text),n=this.letterSpacing(),r=this.align(),i=this.kerningFunc()
this.textWidth=e.width,this.textHeight=e.height
var o=Math.max(this.textWidth+((this.attrs.text||"").length-1)*n,0)
this.glyphInfo=[]
for(var a=0,s=0;s<t.dataArray.length;s++)t.dataArray[s].pathLength>0&&(a+=t.dataArray[s].pathLength)
var u=0
"center"===r&&(u=Math.max(0,a/2-o/2)),"right"===r&&(u=Math.max(0,a-o))
for(var c,h,l,f=Ae(this.text()),d=this.text().split(" ").length-1,p=-1,g=0,v=function(){g=0
for(var e=t.dataArray,n=p+1;n<e.length;n++){if(e[n].pathLength>0)return p=n,e[n]
"M"===e[n].command&&(c={x:e[n].points[0],y:e[n].points[1]})}return{}},m=function(e){var i=t._getTextSize(e).width+n
" "===e&&"justify"===r&&(i+=(a-o)/d)
var s=0,u=0
for(h=void 0;Math.abs(i-s)/i>.01&&u<20;){u++
for(var f=s;void 0===l;)(l=v())&&f+l.pathLength<i&&(f+=l.pathLength,l=void 0)
if(l==={}||void 0===c)return
var p=!1
switch(l.command){case"L":ue.getLineLength(c.x,c.y,l.points[0],l.points[1])>i?h=ue.getPointOnLine(i,c.x,c.y,l.points[0],l.points[1],c.x,c.y):l=void 0
break
case"A":var m=l.points[4],y=l.points[5],b=l.points[4]+y
0===g?g=m+1e-8:i>s?g+=Math.PI/180*y/Math.abs(y):g-=Math.PI/360*y/Math.abs(y),(y<0&&g<b||y>=0&&g>b)&&(g=b,p=!0),h=ue.getPointOnEllipticalArc(l.points[0],l.points[1],l.points[2],l.points[3],g,l.points[6])
break
case"C":0===g?g=i>l.pathLength?1e-8:i/l.pathLength:i>s?g+=(i-s)/l.pathLength/2:g=Math.max(g-(s-i)/l.pathLength/2,0),g>1&&(g=1,p=!0),h=ue.getPointOnCubicBezier(g,l.start.x,l.start.y,l.points[0],l.points[1],l.points[2],l.points[3],l.points[4],l.points[5])
break
case"Q":0===g?g=i/l.pathLength:i>s?g+=(i-s)/l.pathLength:g-=(s-i)/l.pathLength,g>1&&(g=1,p=!0),h=ue.getPointOnQuadraticBezier(g,l.start.x,l.start.y,l.points[0],l.points[1],l.points[2],l.points[3])}void 0!==h&&(s=ue.getLineLength(c.x,c.y,h.x,h.y)),p&&(p=!1,l=void 0)}},y=u/(t._getTextSize("C").width+n)-1,b=0;b<y&&(m("C"),void 0!==c&&void 0!==h);b++)c=h
for(var w=0;w<f.length&&(m(f[w]),void 0!==c&&void 0!==h);w++){var x=ue.getLineLength(c.x,c.y,h.x,h.y),S=0
if(i)try{S=i(f[w-1],f[w])*this.fontSize()}catch(t){S=0}c.x+=S,h.x+=S,this.textWidth+=S
var C=ue.getPointOnLine(S+x/2,c.x,c.y,h.x,h.y),T=Math.atan2(h.y-c.y,h.x-c.x)
this.glyphInfo.push({transposeX:C.x,transposeY:C.y,text:f[w],rotation:T,p0:c,p1:h}),c=h}}getSelfRect(){if(!this.glyphInfo.length)return{x:0,y:0,width:0,height:0}
var t=[]
this.glyphInfo.forEach((function(e){t.push(e.p0.x),t.push(e.p0.y),t.push(e.p1.x),t.push(e.p1.y)}))
for(var e,n,r=t[0]||0,i=t[0]||0,o=t[1]||0,a=t[1]||0,s=0;s<t.length/2;s++)e=t[2*s],n=t[2*s+1],r=Math.min(r,e),i=Math.max(i,e),o=Math.min(o,n),a=Math.max(a,n)
var u=this.fontSize()
return{x:r-u/2,y:o-u/2,width:i-r+u,height:a-o+u}}}ze.prototype._fillFunc=je,ze.prototype._strokeFunc=Ge,ze.prototype._fillFuncHit=je,ze.prototype._strokeFuncHit=Ge,ze.prototype.className="TextPath",ze.prototype._attrsAffectingSize=["text","fontSize","data"],a(ze),k.addGetterSetter(ze,"data"),k.addGetterSetter(ze,"fontFamily","Arial"),k.addGetterSetter(ze,"fontSize",12,y()),k.addGetterSetter(ze,"fontStyle",Ue),k.addGetterSetter(ze,"align","left"),k.addGetterSetter(ze,"letterSpacing",0,y()),k.addGetterSetter(ze,"textBaseline","middle"),k.addGetterSetter(ze,"fontVariant",Ue),k.addGetterSetter(ze,"text",""),k.addGetterSetter(ze,"textDecoration",null),k.addGetterSetter(ze,"kerningFunc",null)
var He=["resizeEnabledChange","rotateAnchorOffsetChange","rotateEnabledChange","enabledAnchorsChange","anchorSizeChange","borderEnabledChange","borderStrokeChange","borderStrokeWidthChange","borderDashChange","anchorStrokeChange","anchorStrokeWidthChange","anchorFillChange","anchorCornerRadiusChange","ignoreStrokeChange"].map((t=>t+".tr-konva")).join(" "),Ve="nodesRect",Ze=["widthChange","heightChange","scaleXChange","scaleYChange","skewXChange","skewYChange","rotationChange","offsetXChange","offsetYChange","transformsEnabledChange","strokeWidthChange"].map((t=>t+".tr-konva")).join(" "),We={"top-left":-45,"top-center":0,"top-right":45,"middle-right":-90,"middle-left":90,"bottom-left":-135,"bottom-center":180,"bottom-right":135}
const qe="ontouchstart"in o._global
var Ke=["top-left","top-center","top-right","middle-right","middle-left","bottom-left","bottom-center","bottom-right"]
function Xe(t,e,n){const r=n.x+(t.x-n.x)*Math.cos(e)-(t.y-n.y)*Math.sin(e),i=n.y+(t.x-n.x)*Math.sin(e)+(t.y-n.y)*Math.cos(e)
return Object.assign(Object.assign({},t),{rotation:t.rotation+e,x:r,y:i})}class Ye extends Kt{constructor(t){super(t),this._transforming=!1,this._createElements(),this._handleMouseMove=this._handleMouseMove.bind(this),this._handleMouseUp=this._handleMouseUp.bind(this),this.update=this.update.bind(this),this.on(He,this.update),this.getNode()&&this.update()}attachTo(t){return this.setNode(t),this}setNode(t){return g.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."),this.setNodes([t])}getNode(){return this._nodes&&this._nodes[0]}setNodes(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
return this._nodes&&this._nodes.length&&this.detach(),this._nodes=t,1===t.length&&this.useSingleNodeRotation()?this.rotation(t[0].getAbsoluteRotation()):this.rotation(0),this._nodes.forEach((t=>{const e=t._attrsAffectingSize.map((t=>t+"Change.tr-konva")).join(" "),n=()=>{1===this.nodes().length&&this.useSingleNodeRotation()&&this.rotation(this.nodes()[0].getAbsoluteRotation()),this._resetTransformCache(),this._transforming||this.isDragging()||this.update()}
t.on(e,n),t.on(Ze,n),t.on("absoluteTransformChange.tr-konva",n),t.on("xChange.tr-konva yChange.tr-konva",n),this._proxyDrag(t)})),this._resetTransformCache(),!!this.findOne(".top-left")&&this.update(),this}_proxyDrag(t){let e
t.on("dragstart.tr-konva",(n=>{e=t.getAbsolutePosition(),this.isDragging()||t===this.findOne(".back")||this.startDrag(n,!1)})),t.on("dragmove.tr-konva",(n=>{if(!e)return
const r=t.getAbsolutePosition(),i=r.x-e.x,o=r.y-e.y
this.nodes().forEach((e=>{if(e===t)return
if(e.isDragging())return
const r=e.getAbsolutePosition()
e.setAbsolutePosition({x:r.x+i,y:r.y+o}),e.startDrag(n)})),e=null}))}getNodes(){return this._nodes||[]}getActiveAnchor(){return this._movingAnchorName}detach(){this._nodes&&this._nodes.forEach((t=>{t.off(".tr-konva")})),this._nodes=[],this._resetTransformCache()}_resetTransformCache(){this._clearCache(Ve),this._clearCache("transform"),this._clearSelfAndDescendantCache("absoluteTransform")}_getNodeRect(){return this._getCache(Ve,this.__getNodeRect)}__getNodeShape(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.rotation(),n=arguments.length>2?arguments[2]:void 0
var r=t.getClientRect({skipTransform:!0,skipShadow:!0,skipStroke:this.ignoreStroke()}),i=t.getAbsoluteScale(n),a=t.getAbsolutePosition(n),s=r.x*i.x-t.offsetX()*i.x,u=r.y*i.y-t.offsetY()*i.y
const c=(o.getAngle(t.getAbsoluteRotation())+2*Math.PI)%(2*Math.PI)
return Xe({x:a.x+s*Math.cos(c)+u*Math.sin(-c),y:a.y+u*Math.cos(c)+s*Math.sin(c),width:r.width*i.x,height:r.height*i.y,rotation:c},-o.getAngle(e),{x:0,y:0})}__getNodeRect(){if(!this.getNode())return{x:-1e8,y:-1e8,width:0,height:0,rotation:0}
const t=[]
this.nodes().map((e=>{const n=e.getClientRect({skipTransform:!0,skipShadow:!0,skipStroke:this.ignoreStroke()})
var r=[{x:n.x,y:n.y},{x:n.x+n.width,y:n.y},{x:n.x+n.width,y:n.y+n.height},{x:n.x,y:n.y+n.height}],i=e.getAbsoluteTransform()
r.forEach((function(e){var n=i.point(e)
t.push(n)}))}))
const e=new s
var n,r,i,a
e.rotate(-o.getAngle(this.rotation())),t.forEach((function(t){var o=e.point(t)
void 0===n&&(n=i=o.x,r=a=o.y),n=Math.min(n,o.x),r=Math.min(r,o.y),i=Math.max(i,o.x),a=Math.max(a,o.y)})),e.invert()
const u=e.point({x:n,y:r})
return{x:u.x,y:u.y,width:i-n,height:a-r,rotation:o.getAngle(this.rotation())}}getX(){return this._getNodeRect().x}getY(){return this._getNodeRect().y}getWidth(){return this._getNodeRect().width}getHeight(){return this._getNodeRect().height}_createElements(){this._createBack(),Ke.forEach(function(t){this._createAnchor(t)}.bind(this)),this._createAnchor("rotater")}_createAnchor(t){var e=new xe({stroke:"rgb(0, 161, 255)",fill:"white",strokeWidth:1,name:t+" _anchor",dragDistance:0,draggable:!0,hitStrokeWidth:qe?10:"auto"}),n=this
e.on("mousedown touchstart",(function(t){n._handleMouseDown(t)})),e.on("dragstart",(t=>{e.stopDrag(),t.cancelBubble=!0})),e.on("dragend",(t=>{t.cancelBubble=!0})),e.on("mouseenter",(()=>{var n=o.getAngle(this.rotation()),r=function(t,e){if("rotater"===t)return"crosshair"
e+=g.degToRad(We[t]||0)
var n=(g.radToDeg(e)%360+360)%360
return g._inRange(n,337.5,360)||g._inRange(n,0,22.5)?"ns-resize":g._inRange(n,22.5,67.5)?"nesw-resize":g._inRange(n,67.5,112.5)?"ew-resize":g._inRange(n,112.5,157.5)?"nwse-resize":g._inRange(n,157.5,202.5)?"ns-resize":g._inRange(n,202.5,247.5)?"nesw-resize":g._inRange(n,247.5,292.5)?"ew-resize":g._inRange(n,292.5,337.5)?"nwse-resize":(g.error("Transformer has unknown angle for cursor detection: "+n),"pointer")}(t,n)
e.getStage().content&&(e.getStage().content.style.cursor=r),this._cursorChange=!0})),e.on("mouseout",(()=>{e.getStage().content&&(e.getStage().content.style.cursor=""),this._cursorChange=!1})),this.add(e)}_createBack(){var t=new Ht({name:"back",width:0,height:0,draggable:!0,sceneFunc(t){var e=this.getParent(),n=e.padding()
t.beginPath(),t.rect(-n,-n,this.width()+2*n,this.height()+2*n),t.moveTo(this.width()/2,-n),e.rotateEnabled()&&t.lineTo(this.width()/2,-e.rotateAnchorOffset()*g._sign(this.height())-n),t.fillStrokeShape(this)},hitFunc:(t,e)=>{if(this.shouldOverdrawWholeArea()){var n=this.padding()
t.beginPath(),t.rect(-n,-n,e.width()+2*n,e.height()+2*n),t.fillStrokeShape(e)}}})
this.add(t),this._proxyDrag(t),t.on("dragstart",(t=>{t.cancelBubble=!0})),t.on("dragmove",(t=>{t.cancelBubble=!0})),t.on("dragend",(t=>{t.cancelBubble=!0})),this.on("dragmove",(t=>{this.update()}))}_handleMouseDown(t){this._movingAnchorName=t.target.name().split(" ")[0]
var e=this._getNodeRect(),n=e.width,r=e.height,i=Math.sqrt(Math.pow(n,2)+Math.pow(r,2))
this.sin=Math.abs(r/i),this.cos=Math.abs(n/i),"undefined"!=typeof window&&(window.addEventListener("mousemove",this._handleMouseMove),window.addEventListener("touchmove",this._handleMouseMove),window.addEventListener("mouseup",this._handleMouseUp,!0),window.addEventListener("touchend",this._handleMouseUp,!0)),this._transforming=!0
var o=t.target.getAbsolutePosition(),a=t.target.getStage().getPointerPosition()
this._anchorDragOffset={x:a.x-o.x,y:a.y-o.y},this._fire("transformstart",{evt:t,target:this.getNode()}),this._nodes.forEach((e=>{e._fire("transformstart",{evt:t,target:e})}))}_handleMouseMove(t){var e,n,r,i=this.findOne("."+this._movingAnchorName),a=i.getStage()
a.setPointersPositions(t)
const s=a.getPointerPosition()
var u={x:s.x-this._anchorDragOffset.x,y:s.y-this._anchorDragOffset.y}
const c=i.getAbsolutePosition()
i.setAbsolutePosition(u)
const h=i.getAbsolutePosition()
if(c.x!==h.x||c.y!==h.y)if("rotater"!==this._movingAnchorName){var l=this.keepRatio()||t.shiftKey,f=this.centeredScaling()||t.altKey
if("top-left"===this._movingAnchorName){if(l){var d=f?{x:this.width()/2,y:this.height()/2}:{x:this.findOne(".bottom-right").x(),y:this.findOne(".bottom-right").y()}
r=Math.sqrt(Math.pow(d.x-i.x(),2)+Math.pow(d.y-i.y(),2))
var p=this.findOne(".top-left").x()>d.x?-1:1,g=this.findOne(".top-left").y()>d.y?-1:1
e=r*this.cos*p,n=r*this.sin*g,this.findOne(".top-left").x(d.x-e),this.findOne(".top-left").y(d.y-n)}}else if("top-center"===this._movingAnchorName)this.findOne(".top-left").y(i.y())
else if("top-right"===this._movingAnchorName){l&&(d=f?{x:this.width()/2,y:this.height()/2}:{x:this.findOne(".bottom-left").x(),y:this.findOne(".bottom-left").y()},r=Math.sqrt(Math.pow(i.x()-d.x,2)+Math.pow(d.y-i.y(),2)),p=this.findOne(".top-right").x()<d.x?-1:1,g=this.findOne(".top-right").y()>d.y?-1:1,e=r*this.cos*p,n=r*this.sin*g,this.findOne(".top-right").x(d.x+e),this.findOne(".top-right").y(d.y-n))
var v=i.position()
this.findOne(".top-left").y(v.y),this.findOne(".bottom-right").x(v.x)}else"middle-left"===this._movingAnchorName?this.findOne(".top-left").x(i.x()):"middle-right"===this._movingAnchorName?this.findOne(".bottom-right").x(i.x()):"bottom-left"===this._movingAnchorName?(l&&(d=f?{x:this.width()/2,y:this.height()/2}:{x:this.findOne(".top-right").x(),y:this.findOne(".top-right").y()},r=Math.sqrt(Math.pow(d.x-i.x(),2)+Math.pow(i.y()-d.y,2)),p=d.x<i.x()?-1:1,g=i.y()<d.y?-1:1,e=r*this.cos*p,n=r*this.sin*g,i.x(d.x-e),i.y(d.y+n)),v=i.position(),this.findOne(".top-left").x(v.x),this.findOne(".bottom-right").y(v.y)):"bottom-center"===this._movingAnchorName?this.findOne(".bottom-right").y(i.y()):"bottom-right"===this._movingAnchorName?l&&(d=f?{x:this.width()/2,y:this.height()/2}:{x:this.findOne(".top-left").x(),y:this.findOne(".top-left").y()},r=Math.sqrt(Math.pow(i.x()-d.x,2)+Math.pow(i.y()-d.y,2)),p=this.findOne(".bottom-right").x()<d.x?-1:1,g=this.findOne(".bottom-right").y()<d.y?-1:1,e=r*this.cos*p,n=r*this.sin*g,this.findOne(".bottom-right").x(d.x+e),this.findOne(".bottom-right").y(d.y+n)):console.error(new Error("Wrong position argument of selection resizer: "+this._movingAnchorName))
if(f=this.centeredScaling()||t.altKey){var m=this.findOne(".top-left"),y=this.findOne(".bottom-right"),b=m.x(),w=m.y(),x=this.getWidth()-y.x(),S=this.getHeight()-y.y()
y.move({x:-b,y:-w}),m.move({x:x,y:S})}var C=this.findOne(".top-left").getAbsolutePosition()
e=C.x,n=C.y
var T=this.findOne(".bottom-right").x()-this.findOne(".top-left").x(),E=this.findOne(".bottom-right").y()-this.findOne(".top-left").y()
this._fitNodesInto({x:e,y:n,width:T,height:E,rotation:o.getAngle(this.rotation())},t)}else{var k=this._getNodeRect()
e=i.x()-k.width/2,n=-i.y()+k.height/2
let r=Math.atan2(-n,e)+Math.PI/2
k.height<0&&(r-=Math.PI)
const a=o.getAngle(this.rotation())+r,s=o.getAngle(this.rotationSnapTolerance()),u=function(t,e,n){let r=e
for(let i=0;i<t.length;i++){const a=o.getAngle(t[i]),s=Math.abs(a-e)%(2*Math.PI)
Math.min(s,2*Math.PI-s)<n&&(r=a)}return r}(this.rotationSnaps(),a,s),c=function(t,e){const n=function(t){return{x:t.x+t.width/2*Math.cos(t.rotation)+t.height/2*Math.sin(-t.rotation),y:t.y+t.height/2*Math.cos(t.rotation)+t.width/2*Math.sin(t.rotation)}}(t)
return Xe(t,e,n)}(k,u-k.rotation)
this._fitNodesInto(c,t)}}_handleMouseUp(t){this._removeEvents(t)}getAbsoluteTransform(){return this.getTransform()}_removeEvents(t){if(this._transforming){this._transforming=!1,"undefined"!=typeof window&&(window.removeEventListener("mousemove",this._handleMouseMove),window.removeEventListener("touchmove",this._handleMouseMove),window.removeEventListener("mouseup",this._handleMouseUp,!0),window.removeEventListener("touchend",this._handleMouseUp,!0))
var e=this.getNode()
this._fire("transformend",{evt:t,target:e}),e&&this._nodes.forEach((e=>{e._fire("transformend",{evt:t,target:e})})),this._movingAnchorName=null}}_fitNodesInto(t,e){var n=this._getNodeRect()
if(g._inRange(t.width,2*-this.padding()-1,1))return void this.update()
if(g._inRange(t.height,2*-this.padding()-1,1))return void this.update()
const r=this.flipEnabled()
var i=new s
if(i.rotate(o.getAngle(this.rotation())),this._movingAnchorName&&t.width<0&&this._movingAnchorName.indexOf("left")>=0){const e=i.point({x:2*-this.padding(),y:0})
if(t.x+=e.x,t.y+=e.y,t.width+=2*this.padding(),this._movingAnchorName=this._movingAnchorName.replace("left","right"),this._anchorDragOffset.x-=e.x,this._anchorDragOffset.y-=e.y,!r)return void this.update()}else if(this._movingAnchorName&&t.width<0&&this._movingAnchorName.indexOf("right")>=0){const e=i.point({x:2*this.padding(),y:0})
if(this._movingAnchorName=this._movingAnchorName.replace("right","left"),this._anchorDragOffset.x-=e.x,this._anchorDragOffset.y-=e.y,t.width+=2*this.padding(),!r)return void this.update()}if(this._movingAnchorName&&t.height<0&&this._movingAnchorName.indexOf("top")>=0){const e=i.point({x:0,y:2*-this.padding()})
if(t.x+=e.x,t.y+=e.y,this._movingAnchorName=this._movingAnchorName.replace("top","bottom"),this._anchorDragOffset.x-=e.x,this._anchorDragOffset.y-=e.y,t.height+=2*this.padding(),!r)return void this.update()}else if(this._movingAnchorName&&t.height<0&&this._movingAnchorName.indexOf("bottom")>=0){const e=i.point({x:0,y:2*this.padding()})
if(this._movingAnchorName=this._movingAnchorName.replace("bottom","top"),this._anchorDragOffset.x-=e.x,this._anchorDragOffset.y-=e.y,t.height+=2*this.padding(),!r)return void this.update()}if(this.boundBoxFunc()){const e=this.boundBoxFunc()(n,t)
e?t=e:g.warn("boundBoxFunc returned falsy. You should return new bound rect from it!")}const a=1e7,u=new s
u.translate(n.x,n.y),u.rotate(n.rotation),u.scale(n.width/a,n.height/a)
const c=new s
c.translate(t.x,t.y),c.rotate(t.rotation),c.scale(t.width/a,t.height/a)
const h=c.multiply(u.invert())
this._nodes.forEach((t=>{var n
const r=t.getParent().getAbsoluteTransform(),i=t.getTransform().copy()
i.translate(t.offsetX(),t.offsetY())
const o=new s
o.multiply(r.copy().invert()).multiply(h).multiply(r).multiply(i)
const a=o.decompose()
t.setAttrs(a),this._fire("transform",{evt:e,target:t}),t._fire("transform",{evt:e,target:t}),null===(n=t.getLayer())||void 0===n||n.batchDraw()})),this.rotation(g._getRotation(t.rotation)),this._resetTransformCache(),this.update(),this.getLayer().batchDraw()}forceUpdate(){this._resetTransformCache(),this.update()}_batchChangeChild(t,e){this.findOne(t).setAttrs(e)}update(){var t,e=this._getNodeRect()
this.rotation(g._getRotation(e.rotation))
var n=e.width,r=e.height,i=this.enabledAnchors(),o=this.resizeEnabled(),a=this.padding(),s=this.anchorSize()
this.find("._anchor").forEach((t=>{t.setAttrs({width:s,height:s,offsetX:s/2,offsetY:s/2,stroke:this.anchorStroke(),strokeWidth:this.anchorStrokeWidth(),fill:this.anchorFill(),cornerRadius:this.anchorCornerRadius()})})),this._batchChangeChild(".top-left",{x:0,y:0,offsetX:s/2+a,offsetY:s/2+a,visible:o&&i.indexOf("top-left")>=0}),this._batchChangeChild(".top-center",{x:n/2,y:0,offsetY:s/2+a,visible:o&&i.indexOf("top-center")>=0}),this._batchChangeChild(".top-right",{x:n,y:0,offsetX:s/2-a,offsetY:s/2+a,visible:o&&i.indexOf("top-right")>=0}),this._batchChangeChild(".middle-left",{x:0,y:r/2,offsetX:s/2+a,visible:o&&i.indexOf("middle-left")>=0}),this._batchChangeChild(".middle-right",{x:n,y:r/2,offsetX:s/2-a,visible:o&&i.indexOf("middle-right")>=0}),this._batchChangeChild(".bottom-left",{x:0,y:r,offsetX:s/2+a,offsetY:s/2-a,visible:o&&i.indexOf("bottom-left")>=0}),this._batchChangeChild(".bottom-center",{x:n/2,y:r,offsetY:s/2-a,visible:o&&i.indexOf("bottom-center")>=0}),this._batchChangeChild(".bottom-right",{x:n,y:r,offsetX:s/2-a,offsetY:s/2-a,visible:o&&i.indexOf("bottom-right")>=0}),this._batchChangeChild(".rotater",{x:n/2,y:-this.rotateAnchorOffset()*g._sign(r)-a,visible:this.rotateEnabled()}),this._batchChangeChild(".back",{width:n,height:r,visible:this.borderEnabled(),stroke:this.borderStroke(),strokeWidth:this.borderStrokeWidth(),dash:this.borderDash(),x:0,y:0}),null===(t=this.getLayer())||void 0===t||t.batchDraw()}isTransforming(){return this._transforming}stopTransform(){if(this._transforming){this._removeEvents()
var t=this.findOne("."+this._movingAnchorName)
t&&t.stopDrag()}}destroy(){return this.getStage()&&this._cursorChange&&this.getStage().content&&(this.getStage().content.style.cursor=""),Kt.prototype.destroy.call(this),this.detach(),this._removeEvents(),this}toObject(){return Q.prototype.toObject.call(this)}}Ye.prototype.className="Transformer",a(Ye),k.addGetterSetter(Ye,"enabledAnchors",Ke,(function(t){return t instanceof Array||g.warn("enabledAnchors value should be an array"),t instanceof Array&&t.forEach((function(t){-1===Ke.indexOf(t)&&g.warn("Unknown anchor name: "+t+". Available names are: "+Ke.join(", "))})),t||[]})),k.addGetterSetter(Ye,"flipEnabled",!0,C()),k.addGetterSetter(Ye,"resizeEnabled",!0),k.addGetterSetter(Ye,"anchorSize",10,y()),k.addGetterSetter(Ye,"rotateEnabled",!0),k.addGetterSetter(Ye,"rotationSnaps",[]),k.addGetterSetter(Ye,"rotateAnchorOffset",50,y()),k.addGetterSetter(Ye,"rotationSnapTolerance",5,y()),k.addGetterSetter(Ye,"borderEnabled",!0),k.addGetterSetter(Ye,"anchorStroke","rgb(0, 161, 255)"),k.addGetterSetter(Ye,"anchorStrokeWidth",1,y()),k.addGetterSetter(Ye,"anchorFill","white"),k.addGetterSetter(Ye,"anchorCornerRadius",0,y()),k.addGetterSetter(Ye,"borderStroke","rgb(0, 161, 255)"),k.addGetterSetter(Ye,"borderStrokeWidth",1,y()),k.addGetterSetter(Ye,"borderDash"),k.addGetterSetter(Ye,"keepRatio",!0),k.addGetterSetter(Ye,"centeredScaling",!1),k.addGetterSetter(Ye,"ignoreStroke",!1),k.addGetterSetter(Ye,"padding",0,y()),k.addGetterSetter(Ye,"node"),k.addGetterSetter(Ye,"nodes"),k.addGetterSetter(Ye,"boundBoxFunc"),k.addGetterSetter(Ye,"shouldOverdrawWholeArea",!1),k.addGetterSetter(Ye,"useSingleNodeRotation",!0),k.backCompat(Ye,{lineEnabled:"borderEnabled",rotateHandlerOffset:"rotateAnchorOffset",enabledHandlers:"enabledAnchors"})
class Je extends Ht{_sceneFunc(t){t.beginPath(),t.arc(0,0,this.radius(),0,o.getAngle(this.angle()),this.clockwise()),t.lineTo(0,0),t.closePath(),t.fillStrokeShape(this)}getWidth(){return 2*this.radius()}getHeight(){return 2*this.radius()}setWidth(t){this.radius(t/2)}setHeight(t){this.radius(t/2)}}function Qe(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}Je.prototype.className="Wedge",Je.prototype._centroid=!0,Je.prototype._attrsAffectingSize=["radius"],a(Je),k.addGetterSetter(Je,"radius",0,y()),k.addGetterSetter(Je,"angle",0,y()),k.addGetterSetter(Je,"clockwise",!1),k.backCompat(Je,{angleDeg:"angle",getAngleDeg:"getAngle",setAngleDeg:"setAngle"})
var $e=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],tn=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24]
function en(t,e,n,r,i){var o=n-e,a=i-r
return 0===o?r+a/2:0===a?r:a*((t-e)/o)+r}function nn(t,e,n){var r=4*(n*t.width+e),i=[]
return i.push(t.data[r++],t.data[r++],t.data[r++],t.data[r++]),i}function rn(t,e){return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)+Math.pow(t[2]-e[2],2))}k.addGetterSetter(Q,"blurRadius",0,y(),k.afterSetFilter),k.addGetterSetter(Q,"brightness",0,y(),k.afterSetFilter),k.addGetterSetter(Q,"contrast",0,y(),k.afterSetFilter),k.addGetterSetter(Q,"embossStrength",.5,y(),k.afterSetFilter),k.addGetterSetter(Q,"embossWhiteLevel",.5,y(),k.afterSetFilter),k.addGetterSetter(Q,"embossDirection","top-left",null,k.afterSetFilter),k.addGetterSetter(Q,"embossBlend",!1,null,k.afterSetFilter),k.addGetterSetter(Q,"enhance",0,y(),k.afterSetFilter),k.addGetterSetter(Q,"hue",0,y(),k.afterSetFilter),k.addGetterSetter(Q,"saturation",0,y(),k.afterSetFilter),k.addGetterSetter(Q,"luminance",0,y(),k.afterSetFilter),k.addGetterSetter(Q,"hue",0,y(),k.afterSetFilter),k.addGetterSetter(Q,"saturation",0,y(),k.afterSetFilter),k.addGetterSetter(Q,"value",0,y(),k.afterSetFilter),k.addGetterSetter(Q,"kaleidoscopePower",2,y(),k.afterSetFilter),k.addGetterSetter(Q,"kaleidoscopeAngle",0,y(),k.afterSetFilter),k.addGetterSetter(Q,"threshold",0,y(),k.afterSetFilter),k.addGetterSetter(Q,"noise",.2,y(),k.afterSetFilter),k.addGetterSetter(Q,"pixelSize",8,y(),k.afterSetFilter),k.addGetterSetter(Q,"levels",.5,y(),k.afterSetFilter),k.addGetterSetter(Q,"red",0,(function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)})),k.addGetterSetter(Q,"green",0,(function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)})),k.addGetterSetter(Q,"blue",0,m,k.afterSetFilter),k.addGetterSetter(Q,"red",0,(function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)})),k.addGetterSetter(Q,"green",0,(function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)})),k.addGetterSetter(Q,"blue",0,m,k.afterSetFilter),k.addGetterSetter(Q,"alpha",1,(function(t){return this._filterUpToDate=!1,t>1?1:t<0?0:t})),k.addGetterSetter(Q,"threshold",.5,y(),k.afterSetFilter)
var on=re.Util._assign(re,{Arc:ie,Arrow:ce,Circle:he,Ellipse:le,Image:fe,Label:be,Tag:we,Line:se,Path:ue,Rect:xe,RegularPolygon:Se,Ring:Te,Sprite:Ee,Star:ke,Text:Le,TextPath:ze,Transformer:Ye,Wedge:Je,Filters:{Blur:function(t){var e=Math.round(this.blurRadius())
e>0&&function(t,e){var n,r,i,o,a,s,u,c,h,l,f,d,p,g,v,m,y,b,w,x,S,C,T,E,k=t.data,A=t.width,P=t.height,F=e+e+1,R=A-1,O=P-1,D=e+1,M=D*(D+1)/2,I=new Qe,N=null,_=I,B=null,L=null,U=$e[e],j=tn[e]
for(i=1;i<F;i++)_=_.next=new Qe,i===D&&(N=_)
for(_.next=I,u=s=0,r=0;r<P;r++){for(m=y=b=w=c=h=l=f=0,d=D*(x=k[s]),p=D*(S=k[s+1]),g=D*(C=k[s+2]),v=D*(T=k[s+3]),c+=M*x,h+=M*S,l+=M*C,f+=M*T,_=I,i=0;i<D;i++)_.r=x,_.g=S,_.b=C,_.a=T,_=_.next
for(i=1;i<D;i++)o=s+((R<i?R:i)<<2),c+=(_.r=x=k[o])*(E=D-i),h+=(_.g=S=k[o+1])*E,l+=(_.b=C=k[o+2])*E,f+=(_.a=T=k[o+3])*E,m+=x,y+=S,b+=C,w+=T,_=_.next
for(B=I,L=N,n=0;n<A;n++)k[s+3]=T=f*U>>j,0!==T?(T=255/T,k[s]=(c*U>>j)*T,k[s+1]=(h*U>>j)*T,k[s+2]=(l*U>>j)*T):k[s]=k[s+1]=k[s+2]=0,c-=d,h-=p,l-=g,f-=v,d-=B.r,p-=B.g,g-=B.b,v-=B.a,o=u+((o=n+e+1)<R?o:R)<<2,c+=m+=B.r=k[o],h+=y+=B.g=k[o+1],l+=b+=B.b=k[o+2],f+=w+=B.a=k[o+3],B=B.next,d+=x=L.r,p+=S=L.g,g+=C=L.b,v+=T=L.a,m-=x,y-=S,b-=C,w-=T,L=L.next,s+=4
u+=A}for(n=0;n<A;n++){for(y=b=w=m=h=l=f=c=0,d=D*(x=k[s=n<<2]),p=D*(S=k[s+1]),g=D*(C=k[s+2]),v=D*(T=k[s+3]),c+=M*x,h+=M*S,l+=M*C,f+=M*T,_=I,i=0;i<D;i++)_.r=x,_.g=S,_.b=C,_.a=T,_=_.next
for(a=A,i=1;i<=e;i++)s=a+n<<2,c+=(_.r=x=k[s])*(E=D-i),h+=(_.g=S=k[s+1])*E,l+=(_.b=C=k[s+2])*E,f+=(_.a=T=k[s+3])*E,m+=x,y+=S,b+=C,w+=T,_=_.next,i<O&&(a+=A)
for(s=n,B=I,L=N,r=0;r<P;r++)k[3+(o=s<<2)]=T=f*U>>j,T>0?(T=255/T,k[o]=(c*U>>j)*T,k[o+1]=(h*U>>j)*T,k[o+2]=(l*U>>j)*T):k[o]=k[o+1]=k[o+2]=0,c-=d,h-=p,l-=g,f-=v,d-=B.r,p-=B.g,g-=B.b,v-=B.a,o=n+((o=r+D)<O?o:O)*A<<2,c+=m+=B.r=k[o],h+=y+=B.g=k[o+1],l+=b+=B.b=k[o+2],f+=w+=B.a=k[o+3],B=B.next,d+=x=L.r,p+=S=L.g,g+=C=L.b,v+=T=L.a,m-=x,y-=S,b-=C,w-=T,L=L.next,s+=A}}(t,e)},Brighten:function(t){var e,n=255*this.brightness(),r=t.data,i=r.length
for(e=0;e<i;e+=4)r[e]+=n,r[e+1]+=n,r[e+2]+=n},Contrast:function(t){var e,n=Math.pow((this.contrast()+100)/100,2),r=t.data,i=r.length,o=150,a=150,s=150
for(e=0;e<i;e+=4)o=r[e],a=r[e+1],s=r[e+2],o/=255,o-=.5,o*=n,o+=.5,a/=255,a-=.5,a*=n,a+=.5,s/=255,s-=.5,s*=n,s+=.5,o=(o*=255)<0?0:o>255?255:o,a=(a*=255)<0?0:a>255?255:a,s=(s*=255)<0?0:s>255?255:s,r[e]=o,r[e+1]=a,r[e+2]=s},Emboss:function(t){var e=10*this.embossStrength(),n=255*this.embossWhiteLevel(),r=this.embossDirection(),i=this.embossBlend(),o=0,a=0,s=t.data,u=t.width,c=t.height,h=4*u,l=c
switch(r){case"top-left":o=-1,a=-1
break
case"top":o=-1,a=0
break
case"top-right":o=-1,a=1
break
case"right":o=0,a=1
break
case"bottom-right":o=1,a=1
break
case"bottom":o=1,a=0
break
case"bottom-left":o=1,a=-1
break
case"left":o=0,a=-1
break
default:g.error("Unknown emboss direction: "+r)}do{var f=(l-1)*h,d=o
l+d<1&&(d=0),l+d>c&&(d=0)
var p=(l-1+d)*u*4,v=u
do{var m=f+4*(v-1),y=a
v+y<1&&(y=0),v+y>u&&(y=0)
var b=p+4*(v-1+y),w=s[m]-s[b],x=s[m+1]-s[b+1],S=s[m+2]-s[b+2],C=w,T=C>0?C:-C
if((x>0?x:-x)>T&&(C=x),(S>0?S:-S)>T&&(C=S),C*=e,i){var E=s[m]+C,k=s[m+1]+C,A=s[m+2]+C
s[m]=E>255?255:E<0?0:E,s[m+1]=k>255?255:k<0?0:k,s[m+2]=A>255?255:A<0?0:A}else{var P=n-C
P<0?P=0:P>255&&(P=255),s[m]=s[m+1]=s[m+2]=P}}while(--v)}while(--l)},Enhance:function(t){var e,n,r,i,o=t.data,a=o.length,s=o[0],u=s,c=o[1],h=c,l=o[2],f=l,d=this.enhance()
if(0!==d){for(i=0;i<a;i+=4)(e=o[i+0])<s?s=e:e>u&&(u=e),(n=o[i+1])<c?c=n:n>h&&(h=n),(r=o[i+2])<l?l=r:r>f&&(f=r)
var p,g,v,m,y,b,w,x,S
for(u===s&&(u=255,s=0),h===c&&(h=255,c=0),f===l&&(f=255,l=0),d>0?(g=u+d*(255-u),v=s-d*(s-0),y=h+d*(255-h),b=c-d*(c-0),x=f+d*(255-f),S=l-d*(l-0)):(g=u+d*(u-(p=.5*(u+s))),v=s+d*(s-p),y=h+d*(h-(m=.5*(h+c))),b=c+d*(c-m),x=f+d*(f-(w=.5*(f+l))),S=l+d*(l-w)),i=0;i<a;i+=4)o[i+0]=en(o[i+0],s,u,v,g),o[i+1]=en(o[i+1],c,h,b,y),o[i+2]=en(o[i+2],l,f,S,x)}},Grayscale:function(t){var e,n,r=t.data,i=r.length
for(e=0;e<i;e+=4)n=.34*r[e]+.5*r[e+1]+.16*r[e+2],r[e]=n,r[e+1]=n,r[e+2]=n},HSL:function(t){var e,n,r,i,o,a=t.data,s=a.length,u=Math.pow(2,this.saturation()),c=Math.abs(this.hue()+360)%360,h=127*this.luminance(),l=1*u*Math.cos(c*Math.PI/180),f=1*u*Math.sin(c*Math.PI/180),d=.299+.701*l+.167*f,p=.587-.587*l+.33*f,g=.114-.114*l-.497*f,v=.299-.299*l-.328*f,m=.587+.413*l+.035*f,y=.114-.114*l+.293*f,b=.299-.3*l+1.25*f,w=.587-.586*l-1.05*f,x=.114+.886*l-.2*f
for(e=0;e<s;e+=4)n=a[e+0],r=a[e+1],i=a[e+2],o=a[e+3],a[e+0]=d*n+p*r+g*i+h,a[e+1]=v*n+m*r+y*i+h,a[e+2]=b*n+w*r+x*i+h,a[e+3]=o},HSV:function(t){var e,n,r,i,o,a=t.data,s=a.length,u=Math.pow(2,this.value()),c=Math.pow(2,this.saturation()),h=Math.abs(this.hue()+360)%360,l=u*c*Math.cos(h*Math.PI/180),f=u*c*Math.sin(h*Math.PI/180),d=.299*u+.701*l+.167*f,p=.587*u-.587*l+.33*f,g=.114*u-.114*l-.497*f,v=.299*u-.299*l-.328*f,m=.587*u+.413*l+.035*f,y=.114*u-.114*l+.293*f,b=.299*u-.3*l+1.25*f,w=.587*u-.586*l-1.05*f,x=.114*u+.886*l-.2*f
for(e=0;e<s;e+=4)n=a[e+0],r=a[e+1],i=a[e+2],o=a[e+3],a[e+0]=d*n+p*r+g*i,a[e+1]=v*n+m*r+y*i,a[e+2]=b*n+w*r+x*i,a[e+3]=o},Invert:function(t){var e,n=t.data,r=n.length
for(e=0;e<r;e+=4)n[e]=255-n[e],n[e+1]=255-n[e+1],n[e+2]=255-n[e+2]},Kaleidoscope:function(t){var e,n,r,i,o,a,s,u,c,h=t.width,l=t.height,f=Math.round(this.kaleidoscopePower()),d=Math.round(this.kaleidoscopeAngle()),p=Math.floor(h*(d%360)/360)
if(!(f<1)){var v=g.createCanvasElement()
v.width=h,v.height=l
var m=v.getContext("2d").getImageData(0,0,h,l)
!function(t,e,n){var r,i,o,a,s=t.data,u=e.data,c=t.width,h=t.height,l=n.polarCenterX||c/2,f=n.polarCenterY||h/2,d=0,p=0,g=0,v=0,m=Math.sqrt(l*l+f*f)
i=c-l,o=h-f,m=(a=Math.sqrt(i*i+o*o))>m?a:m
var y,b,w,x,S=h,C=c,T=360/C*Math.PI/180
for(b=0;b<C;b+=1)for(w=Math.sin(b*T),x=Math.cos(b*T),y=0;y<S;y+=1)i=Math.floor(l+m*y/S*x),d=s[0+(r=4*((o=Math.floor(f+m*y/S*w))*c+i))],p=s[r+1],g=s[r+2],v=s[r+3],u[0+(r=4*(b+y*c))]=d,u[r+1]=p,u[r+2]=g,u[r+3]=v}(t,m,{polarCenterX:h/2,polarCenterY:l/2})
for(var y=h/Math.pow(2,f);y<=8;)y*=2,f-=1
var b=y=Math.ceil(y),w=0,x=b,S=1
for(p+y>h&&(w=b,x=0,S=-1),n=0;n<l;n+=1)for(e=w;e!==x;e+=S)u=4*(h*n+Math.round(e+p)%h),i=m.data[u+0],o=m.data[u+1],a=m.data[u+2],s=m.data[u+3],c=4*(h*n+e),m.data[c+0]=i,m.data[c+1]=o,m.data[c+2]=a,m.data[c+3]=s
for(n=0;n<l;n+=1)for(b=Math.floor(y),r=0;r<f;r+=1){for(e=0;e<b+1;e+=1)u=4*(h*n+e),i=m.data[u+0],o=m.data[u+1],a=m.data[u+2],s=m.data[u+3],c=4*(h*n+2*b-e-1),m.data[c+0]=i,m.data[c+1]=o,m.data[c+2]=a,m.data[c+3]=s
b*=2}!function(t,e,n){var r,i,o,a,s,u,c=t.data,h=e.data,l=t.width,f=t.height,d=n.polarCenterX||l/2,p=n.polarCenterY||f/2,g=0,v=0,m=0,y=0,b=Math.sqrt(d*d+p*p)
i=l-d,o=f-p,b=(u=Math.sqrt(i*i+o*o))>b?u:b
var w,x,S,C=f,T=l,E=n.polarRotation||0
for(i=0;i<l;i+=1)for(o=0;o<f;o+=1)a=i-d,s=o-p,w=Math.sqrt(a*a+s*s)*C/b,x=(x=(180*Math.atan2(s,a)/Math.PI+360+E)%360)*T/360,S=Math.floor(x),g=c[0+(r=4*(Math.floor(w)*l+S))],v=c[r+1],m=c[r+2],y=c[r+3],h[0+(r=4*(o*l+i))]=g,h[r+1]=v,h[r+2]=m,h[r+3]=y}(m,t,{polarRotation:0})}},Mask:function(t){var e=function(t,e){var n=nn(t,0,0),r=nn(t,t.width-1,0),i=nn(t,0,t.height-1),o=nn(t,t.width-1,t.height-1),a=e||10
if(rn(n,r)<a&&rn(r,o)<a&&rn(o,i)<a&&rn(i,n)<a){for(var s=function(t){for(var e=[0,0,0],n=0;n<t.length;n++)e[0]+=t[n][0],e[1]+=t[n][1],e[2]+=t[n][2]
return e[0]/=t.length,e[1]/=t.length,e[2]/=t.length,e}([r,n,o,i]),u=[],c=0;c<t.width*t.height;c++){var h=rn(s,[t.data[4*c],t.data[4*c+1],t.data[4*c+2]])
u[c]=h<a?0:255}return u}}(t,this.threshold())
return e&&function(t,e){for(var n=0;n<t.width*t.height;n++)t.data[4*n+3]=e[n]}(t,e=function(t,e,n){for(var r=[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9],i=Math.round(Math.sqrt(r.length)),o=Math.floor(i/2),a=[],s=0;s<n;s++)for(var u=0;u<e;u++){for(var c=s*e+u,h=0,l=0;l<i;l++)for(var f=0;f<i;f++){var d=s+l-o,p=u+f-o
if(d>=0&&d<n&&p>=0&&p<e){var g=r[l*i+f]
h+=t[d*e+p]*g}}a[c]=h}return a}(e=function(t,e,n){for(var r=[1,1,1,1,1,1,1,1,1],i=Math.round(Math.sqrt(r.length)),o=Math.floor(i/2),a=[],s=0;s<n;s++)for(var u=0;u<e;u++){for(var c=s*e+u,h=0,l=0;l<i;l++)for(var f=0;f<i;f++){var d=s+l-o,p=u+f-o
if(d>=0&&d<n&&p>=0&&p<e){var g=r[l*i+f]
h+=t[d*e+p]*g}}a[c]=h>=1020?255:0}return a}(e=function(t,e,n){for(var r=[1,1,1,1,0,1,1,1,1],i=Math.round(Math.sqrt(r.length)),o=Math.floor(i/2),a=[],s=0;s<n;s++)for(var u=0;u<e;u++){for(var c=s*e+u,h=0,l=0;l<i;l++)for(var f=0;f<i;f++){var d=s+l-o,p=u+f-o
if(d>=0&&d<n&&p>=0&&p<e){var g=r[l*i+f]
h+=t[d*e+p]*g}}a[c]=2040===h?255:0}return a}(e,t.width,t.height),t.width,t.height),t.width,t.height)),t},Noise:function(t){var e,n=255*this.noise(),r=t.data,i=r.length,o=n/2
for(e=0;e<i;e+=4)r[e+0]+=o-2*o*Math.random(),r[e+1]+=o-2*o*Math.random(),r[e+2]+=o-2*o*Math.random()},Pixelate:function(t){var e,n,r,i,o,a,s,u,c,h,l,f,d,p,v=Math.ceil(this.pixelSize()),m=t.width,y=t.height,b=Math.ceil(m/v),w=Math.ceil(y/v),x=t.data
if(v<=0)g.error("pixelSize value can not be <= 0")
else for(f=0;f<b;f+=1)for(d=0;d<w;d+=1){for(i=0,o=0,a=0,s=0,c=(u=f*v)+v,l=(h=d*v)+v,p=0,e=u;e<c;e+=1)if(!(e>=m))for(n=h;n<l;n+=1)n>=y||(i+=x[0+(r=4*(m*n+e))],o+=x[r+1],a+=x[r+2],s+=x[r+3],p+=1)
for(i/=p,o/=p,a/=p,s/=p,e=u;e<c;e+=1)if(!(e>=m))for(n=h;n<l;n+=1)n>=y||(x[0+(r=4*(m*n+e))]=i,x[r+1]=o,x[r+2]=a,x[r+3]=s)}},Posterize:function(t){var e,n=Math.round(254*this.levels())+1,r=t.data,i=r.length,o=255/n
for(e=0;e<i;e+=1)r[e]=Math.floor(r[e]/o)*o},RGB:function(t){var e,n,r=t.data,i=r.length,o=this.red(),a=this.green(),s=this.blue()
for(e=0;e<i;e+=4)n=(.34*r[e]+.5*r[e+1]+.16*r[e+2])/255,r[e]=n*o,r[e+1]=n*a,r[e+2]=n*s,r[e+3]=r[e+3]},RGBA:function(t){var e,n,r=t.data,i=r.length,o=this.red(),a=this.green(),s=this.blue(),u=this.alpha()
for(e=0;e<i;e+=4)n=1-u,r[e]=o*u+r[e]*n,r[e+1]=a*u+r[e+1]*n,r[e+2]=s*u+r[e+2]*n},Sepia:function(t){var e,n,r,i,o=t.data,a=o.length
for(e=0;e<a;e+=4)n=o[e+0],r=o[e+1],i=o[e+2],o[e+0]=Math.min(255,.393*n+.769*r+.189*i),o[e+1]=Math.min(255,.349*n+.686*r+.168*i),o[e+2]=Math.min(255,.272*n+.534*r+.131*i)},Solarize:function(t){var e=t.data,n=t.width,r=4*n,i=t.height
do{var o=(i-1)*r,a=n
do{var s=o+4*(a-1),u=e[s],c=e[s+1],h=e[s+2]
u>127&&(u=255-u),c>127&&(c=255-c),h>127&&(h=255-h),e[s]=u,e[s+1]=c,e[s+2]=h}while(--a)}while(--i)},Threshold:function(t){var e,n=255*this.threshold(),r=t.data,i=r.length
for(e=0;e<i;e+=1)r[e]=r[e]<n?0:255}}})}}])

//# sourceMappingURL=chunk.748.ebec0ee922d345d44ff8.map
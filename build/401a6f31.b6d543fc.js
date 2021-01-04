(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{131:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,O=m["".concat(c,".").concat(u)]||m[u]||s[u]||b;return a?r.a.createElement(O,l(l({ref:t},i),{},{components:a})):r.a.createElement(O,l({ref:t},i))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<b;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"Highlight",(function(){return i})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),b=(a(0),a(131)),c={id:"qhawaxMod",title:"qHAWAX Module",sidebar_label:"qHAWAX Module"},l={unversionedId:"qhawaxMod",id:"qhawaxMod",isDocsHomePage:!1,title:"qHAWAX Module",description:"The file shows the functions that register and request data related to the qHAWAX table.",source:"@site/APIresources/business.qhawax.md",slug:"/qhawaxMod",permalink:"/APIresources/qhawaxMod",version:"current",sidebar_label:"qHAWAX Module",sidebar:"APIresources",previous:{title:"Post Business Helper Module",permalink:"/APIresources/post_business_helperMod"},next:{title:"qHAWAX Installation History Module",permalink:"/APIresources/qhawax_installation_historyMod"}},o=[],i=function(e){var t=e.children,a=e.color;return Object(b.b)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#000000",padding:"0.2rem"}},t)},p={toc:o,Highlight:i};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The file shows the functions that register and request data related to the qHAWAX table."),Object(b.b)("h4",{id:"qhawaxgetincaqhawaxinca"},Object(b.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"qhawax.getIncaQhawaxInca()")),Object(b.b)("p",null,"Gets qHAWAX Inca value."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Parameters")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"qhawax_name")," (",Object(b.b)("em",{parentName:"li"},"string"),") - qHAWAX name")),Object(b.b)("h4",{id:"qhawaxgetactiveqhawaxmodecustomer"},Object(b.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"qhawax.getActiveQhawaxModeCustomer()")),Object(b.b)("p",null,"Gets all active qHAWAXs that are in field in mode customer."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"No parameters required")),Object(b.b)("h4",{id:"qhawaxupdateincadata"},Object(b.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"qhawax.updateIncaData()")),Object(b.b)("p",null,"Saves qHAWAX Inca value."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Parameters")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"name")," (",Object(b.b)("em",{parentName:"p"},"string"),") - qHAWAX name")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"value_inca")," (",Object(b.b)("em",{parentName:"p"},"integer"),") - qHAWAX inca value"))),Object(b.b)("h4",{id:"qhawaxsendqhawaxstatusoff"},Object(b.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"qhawax.sendQhawaxStatusOff()")),Object(b.b)("p",null,"Endpoint to set qHAWAX OFF because script detect no new data within five minutes."),Object(b.b)("p",null,"Json input of following fields:"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Parameters")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"name")," (",Object(b.b)("em",{parentName:"p"},"string"),") - qHAWAX name")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"qhawax_lost_timestamp")," (",Object(b.b)("em",{parentName:"p"},"string"),") - the last time qHAWAX send measurement with timezone")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"description")," (",Object(b.b)("em",{parentName:"p"},"string"),") - qHAWAX description")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"person_in_charge")," (",Object(b.b)("em",{parentName:"p"},"string"),") - person who did this action"))),Object(b.b)("h4",{id:"qhawaxsendqhawaxstatuson"},Object(b.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"qhawax.sendQhawaxStatusOn()")),Object(b.b)("p",null,"Sets qHAWAX ON due to module reset (sensors reset)."),Object(b.b)("p",null,"Json input of following fields:"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Parameters")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"name")," (",Object(b.b)("em",{parentName:"p"},"string"),") - qHAWAX name")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"description")," (",Object(b.b)("em",{parentName:"p"},"string"),") - qHAWAX description")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"person_in_charge")," (",Object(b.b)("em",{parentName:"p"},"string"),") - person who did this action"))),Object(b.b)("h4",{id:"qhawaxgettimeallactiveqhawax"},Object(b.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"qhawax.getTimeAllActiveQhawax()")),Object(b.b)("p",null,"Gets time all active qHAWAX - Script"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Parameters")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"name")," (",Object(b.b)("em",{parentName:"li"},"string"),") - qHAWAX name")),Object(b.b)("h4",{id:"qhawaxcreateqhawax"},Object(b.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"qhawax.createQhawax()")),Object(b.b)("p",null,"Creates a qHAWAX"),Object(b.b)("p",null,"Json input of following fields:"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Parameters")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"name")," (",Object(b.b)("em",{parentName:"p"},"string"),") - qHAWAX name")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"qhawax_type")," (",Object(b.b)("em",{parentName:"p"},"string"),") - qHAWAX type (STATIC or AEREO)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"description")," (",Object(b.b)("em",{parentName:"p"},"string"),") - qHAWAX description")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"person_in_charge")," (",Object(b.b)("em",{parentName:"p"},"string"),") - person who did this action"))),Object(b.b)("h4",{id:"qhawaxqhawaxchangetocalibration"},Object(b.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"qhawax.qhawaxChangeToCalibration()")),Object(b.b)("p",null,"qHAWAX update to Calibration mode, set main inca -2 value."),Object(b.b)("p",null,"Json input of following fields:"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Parameters")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"qhawax_name")," (",Object(b.b)("em",{parentName:"p"},"string"),") - qHAWAX name")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"description")," (",Object(b.b)("em",{parentName:"p"},"string"),") - qHAWAX description")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"person_in_charge")," (",Object(b.b)("em",{parentName:"p"},"string"),") - username who change mode"))),Object(b.b)("h4",{id:"qhawaxqhawaxendcalibration"},Object(b.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"qhawax.qhawaxEndCalibration()")),Object(b.b)("p",null,"qHAWAX update end calibration mode, set main inca original, depends of mode (custome or stand by)."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Parameters")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"qhawax_name")," (",Object(b.b)("em",{parentName:"p"},"string"),") - qHAWAX name")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"person_in_charge")," (",Object(b.b)("em",{parentName:"p"},"string"),") - username who change mode"))),Object(b.b)("h4",{id:"qhawaxgetqhawaxprocessedlatesttimestamp"},Object(b.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"qhawax.getQhawaxProcessedLatestTimestamp()")),Object(b.b)("p",null,"Gets qHAWAX Processed Measurement latest timestamp."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Parameters")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"qhawax_name")," (",Object(b.b)("em",{parentName:"li"},"string"),") - qHAWAX name")),Object(b.b)("h4",{id:"qhawaxgetqhawaxvalidprocessedlatesttimestamp"},Object(b.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"qhawax.getQhawaxValidProcessedLatestTimestamp()")),Object(b.b)("p",null,"To get qHAWAX Valid Processed Measurement latest timestamp."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Parameters")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"qhawax_name")," (",Object(b.b)("em",{parentName:"li"},"string"),") - qHAWAX name")),Object(b.b)("h4",{id:"qhawaxgetqhawaxstatus"},Object(b.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"qhawax.getQhawaxStatus()")),Object(b.b)("p",null,"Gets qHAWAX status"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Parameters")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"qhawax_name")," (",Object(b.b)("em",{parentName:"li"},"string"),") - qHAWAX name")))}m.isMDXComponent=!0}}]);
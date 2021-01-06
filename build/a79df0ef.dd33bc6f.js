(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"Highlight",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),b=(a(0),a(131)),p={id:"gas_incaMod",title:"Gas Inca Module",sidebar_label:"Gas Inca Module"},c={unversionedId:"gas_incaMod",id:"gas_incaMod",isDocsHomePage:!1,title:"Gas Inca Module",description:"The file shows the functions that register and request data related to the Gas Inca table.",source:"@site/APIresources/data.gas_inca.md",slug:"/gas_incaMod",permalink:"/APIresources/gas_incaMod",version:"current",sidebar_label:"Gas Inca Module",sidebar:"APIresources",previous:{title:"Air Quality Module",permalink:"/APIresources/air_qualityMod"},next:{title:"Get Data Helper Module",permalink:"/APIresources/get_data_helperMod"}},l=[],o=function(e){var t=e.children,a=e.color;return Object(b.b)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#000000",padding:"0.2rem"}},t)},m={toc:l,Highlight:o};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The file shows the functions that register and request data related to the Gas Inca table."),Object(b.b)("h4",{id:"gas_incahandlegasinca"},Object(b.b)(o,{color:"#b2e4f7",mdxType:"Highlight"},"gas_inca.handleGasInca()")),Object(b.b)("p",null,"POST: To record gas and dust measurement in gas Inca table."),Object(b.b)("p",null,"Json input of Air Quality Measurement."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Parameters")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"timestamp_zone")," (",Object(b.b)("em",{parentName:"p"},"string"),") - timestamp with time zone")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"CO")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of CO measurement in ppb")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"CO_ug_m3")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of CO measurement in ug/m3")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"H2S")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of H2S measurement in ppb")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"H2S_ug_m3")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of H2S measurement in ug/m3")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"SO2")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of SO2 measurement in ppb")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"SO2_ug_m3")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of SO2 measurement in ug/m3")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"NO2")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of NO2 measurement in ppb")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"NO2_ug_m3")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of NO2 measurement in ug/m3")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"O3")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of O3 measurement in ppb")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"O3_ug_m3")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of O3 measurement in ppb")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"PM25")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of PM25 measurement in ppb")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"PM1")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of PM1 measurement in ppb")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"PM10")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of PM10 measurement in ppb")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"UV")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of UV measurement")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"UVA")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of UVA measurement")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"UVB")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of UVB measurement")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"spl")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of noise measurement")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"humidity")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of humidity measurement")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"pressure")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of pressure measurement")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"temperature")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of temperature measurement in Celsius"))),Object(b.b)("h4",{id:"gas_incagetlastgasincadata"},Object(b.b)(o,{color:"#b2e4f7",mdxType:"Highlight"},"gas_inca.getLastGasIncaData()")),Object(b.b)("p",null,"Lists all measurements of the last hour from the gas Inca table."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"No parameters required")))}u.isMDXComponent=!0},131:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),m=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=m(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=m(a),s=n,O=u["".concat(p,".").concat(s)]||u[s]||i[s]||b;return a?r.a.createElement(O,c(c({ref:t},o),{},{components:a})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,p=new Array(b);p[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var o=2;o<b;o++)p[o]=a[o];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);
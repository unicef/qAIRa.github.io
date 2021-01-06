(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"Highlight",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(131)),c={id:"fromJsonToCsv",title:"From Json To CSV",sidebar_label:"From Json To CSV"},i={unversionedId:"fromJsonToCsv",id:"fromJsonToCsv",isDocsHomePage:!0,title:"From Json To CSV",description:"fromJsonToCsv.js",source:"@site/WEBresources/fromJsonToCsv.md",slug:"/",permalink:"/WEBresources/",version:"current",sidebar_label:"From Json To CSV",sidebar:"WEBresources",next:{title:"Information Windows",permalink:"/WEBresources/infowindows"}},l=[],s=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#000000",padding:"0.2rem"}},t)},b={toc:l,Highlight:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"fromJsonToCsv.js")),Object(a.b)("p",null,"This file shows the functions to turn a .json file to a .csv file and downloads it."),Object(a.b)("h4",{id:"json2csv-jsondata-jsonfields-"},Object(a.b)(s,{color:"#b2e4f7",mdxType:"Highlight"},"json2csv( jsonData, jsonFields )")),Object(a.b)("p",null,"Transforms a .json file to a .csv file."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Parameters"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"jsonData")," (",Object(a.b)("em",{parentName:"p"},"Json"),") - Json file to convert to csv")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"jsonFields")," (",Object(a.b)("em",{parentName:"p"},"string"),") - Fields to convert to csv")))),Object(a.b)("h4",{id:"download-content--filename-mimetype-"},Object(a.b)(s,{color:"#b2e4f7",mdxType:"Highlight"},"download( content , fileName, mimeType )")),Object(a.b)("p",null,"Downloads the .csv file created."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Parameters"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"content")," (",Object(a.b)("em",{parentName:"p"},"Json"),") - Json file to convert to csv")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"fileName")," (",Object(a.b)("em",{parentName:"p"},"string"),") - The name given to the file to download.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"mimeType")," - mimetype to download.")))))}p.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?o.a.createElement(f,i(i({ref:t},s),{},{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
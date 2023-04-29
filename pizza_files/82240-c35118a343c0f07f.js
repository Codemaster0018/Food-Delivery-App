"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82240],{82240:function(n,e,t){t.r(e),t.d(e,{CmsDarkHeaderBanner:function(){return nh}});var r,o,i,a=t(70865),u=t(26297),c=t(52322),s=t(96976),l=t(87394),d=t(97599),m=t(29510),f=t(43110),v=t(72075),p=t(27764),h=t(70314),g=t.n(h),b=t(5632),Z=t(2784),x=t(80589),w=function(n){var e,t,r,o=n.children,i=(0,b.useRouter)(),a=null==i?void 0:i.asPath,u=(0,l.Z)((0,Z.useState)(),2),s=u[0],h=u[1],w=((0,f.j)().data||{}).id,y=(0,m.PE)();v.j&&(r=null==window?void 0:null===(e=window.location)||void 0===e?void 0:e.href);var P=(0,p.qw)(a),k=null===(t=g()().publicRuntimeConfig.googleOptimize.containerId.shutterstock)||void 0===t?void 0:t[P],E=(0,Z.useCallback)(function(n){var e,t;h(n),console.error(JSON.stringify({message:n.message,stack:n.stack,err:n,msg:"BannerErrorBoundary onError"})),null===(e=window.NREUM)||void 0===e||null===(t=e.noticeError)||void 0===t||t.call(e,n,{assetType:P,currentAsPath:a,localeData:y,msg:"MPENG-14 banner error",optimizeContainerId:k,url:r,userId:w})},[P,a,y,k,r,w]);return(0,c.jsx)(x.ErrorBoundary,{onError:E,FallbackComponent:function(){return(0,c.jsx)(d.F,{error:s,statusCode:500,withSearchBar:!0})},children:o})},y=t(92931),P=t(41033),k=t(18505),E=t(62021),j=t(47842),C=t(62197),I=t(4418),R=t(8740),A=t(75053),B=(0,R.ZL)()(function(n){var e,t,r=n.breakpoints,o=n.palette,i=n.tokens.spacing;return{root:(e={display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"".concat(i.s," ").concat(i.base),backgroundColor:o.background.default,color:o.primary.main},(0,j.Z)(e,r.down("sm"),{flexDirection:"column",minHeight:"".concat(A.oQ,"px")}),(0,j.Z)(e,"minHeight","".concat(A.ep,"px")),e),title:(0,j.Z)({},r.up("sm"),{marginRight:i.m}),button:(t={},(0,j.Z)(t,r.down("sm"),{marginTop:i.s,width:"100%"}),(0,j.Z)(t,"backgroundColor",o.common.white),(0,j.Z)(t,"color",o.common.black),(0,j.Z)(t,"&:hover",{color:o.common.white}),t),buttonRoot:(0,j.Z)({},r.down("sm"),{width:"100%"})}}),N=function(n){var e=n.title,t=n.cta,r=B().classes;return(0,c.jsxs)("div",{className:r.root,"data-automation":"header-banner","data-optimize":"CmsHeaderBanner-banner",children:[(0,c.jsx)(C.Z,{variant:"body2",className:r.title,"data-automation":"header-banner-title",children:e}),!!t&&(0,c.jsx)(I.Y,{dataAutomation:"header-banner-cta",label:t.label,href:t.href,trackAnalytics:t.trackAnalytics,classesProps:{root:r.buttonRoot,button:r.button},size:"medium"})]})};N.defaultProps={title:void 0,cta:void 0};var D=function(n){var e=n.initialProps;return(0,c.jsx)(N,(0,a.Z)({},e.headerProps))},S=t(67550),T=function(){var n=B().classes;return(0,c.jsx)(S.Z,{className:n.root})},L=t(88849),M=t(96670),F={flagID:"fact-454-header-banner-copy-experiment",id:"FACT-454",name:"ADP Free Trial Copy",treatments:(r={},(0,j.Z)(r,L.NM,function(n){var e=n.experiment,t=n.initialProps;return(0,Z.useEffect)(function(){e.recordImpression()},[]),(0,c.jsx)(D,{initialProps:t})}),(0,j.Z)(r,L.vG,function(n){var e=n.experiment,t=n.initialProps.headerProps;return(0,Z.useEffect)(function(){e.recordImpression()},[]),(0,c.jsx)(N,(0,M.Z)((0,a.Z)({},t),{title:"Create winning content fast with Shutterstock's 650M+ high-quality images, videos, and music tracks. First month free."}))}),(0,j.Z)(r,L._Z,function(n){var e=n.experiment,t=n.initialProps.headerProps;return(0,Z.useEffect)(function(){e.recordImpression()},[]),(0,c.jsx)(N,(0,M.Z)((0,a.Z)({},t),{title:"Elevate your brand with 650M+ high-quality assets and easy design tools. First month on us."}))}),r)},H=function(n){return(0,c.jsx)(E.K,{config:F,initialProps:n,Portal:D,SkeletonLoader:T})},O=function(n){var e=n.initialProps;return(0,c.jsx)(N,(0,a.Z)({},e.headerProps))},U=function(){var n=B().classes;return(0,c.jsx)(S.Z,{className:n.root})},z={flagID:"fact-462-srp-free-trial-banner",id:"FACT-462",name:"Free Trial Banner Copy",treatments:(o={},(0,j.Z)(o,L.NM,function(n){var e=n.experiment,t=n.initialProps;return(0,Z.useEffect)(function(){e.recordImpression()},[]),(0,c.jsx)(O,{initialProps:t})}),(0,j.Z)(o,L.vG,function(n){var e=n.experiment,t=n.initialProps.headerProps;return(0,Z.useEffect)(function(){e.recordImpression()},[]),(0,c.jsx)(N,(0,M.Z)((0,a.Z)({},t),{title:"Find high-quality assets to power your creativity on a steady basis — All for one low price."}))}),(0,j.Z)(o,L._Z,function(n){var e=n.experiment,t=n.initialProps.headerProps;return(0,Z.useEffect)(function(){e.recordImpression()},[]),(0,c.jsx)(N,(0,M.Z)((0,a.Z)({},t),{title:"Join millions of happy customers who trust Shutterstock with their creative needs. First month on us."}))}),o)},_=function(n){return(0,c.jsx)(E.K,{config:z,initialProps:n,Portal:O,SkeletonLoader:U})},Q={title:"",cta:null},q=(0,R.ZL)()(function(n){var e,t,r=n.breakpoints,o=n.palette,i=n.tokens.spacing;return{root:(e={display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"".concat(i.s," ").concat(i.base),backgroundColor:o.background.default,color:o.primary.main},(0,j.Z)(e,r.down("sm"),{flexDirection:"column",minHeight:"".concat(A.oQ,"px")}),(0,j.Z)(e,"minHeight","".concat(A.ep,"px")),e),title:(0,j.Z)({},r.up("sm"),{marginRight:i.m}),button:(t={},(0,j.Z)(t,r.down("sm"),{marginTop:i.s,width:"100%"}),(0,j.Z)(t,"backgroundColor",o.common.white),(0,j.Z)(t,"color",o.common.black),(0,j.Z)(t,"&:hover",{color:o.common.white}),t),buttonRoot:(0,j.Z)({},r.down("sm"),{width:"100%"})}}),K=function(n){var e=n.initialProps,t=e.title,r=e.cta,o=q().classes;return(0,c.jsxs)("div",{className:o.root,"data-automation":"header-banner","data-optimize":"CmsHeaderBanner-banner",children:[(0,c.jsx)(C.Z,{variant:"body2",className:o.title,"data-automation":"header-banner-title",children:t}),!!r&&(0,c.jsx)(I.Y,{dataAutomation:"header-banner-cta",label:r.label,href:r.href,trackAnalytics:r.trackAnalytics,classesProps:{root:o.buttonRoot,button:o.button},size:"medium"})]})};K.defaultProps={initialProps:Q};var G=function(n,e){var t=n.title,r=n.cta;return(0,c.jsxs)("div",{className:e.root,"data-automation":"header-banner","data-optimize":"CmsHeaderBanner-banner",children:[(0,c.jsx)(C.Z,{variant:"body2",className:e.title,"data-automation":"header-banner-title",children:t}),!!r&&(0,c.jsx)(I.Y,{dataAutomation:"header-banner-cta",label:r.label,href:r.href,trackAnalytics:r.trackAnalytics,classesProps:{root:e.buttonRoot,button:e.button},size:"medium"})]})},Y=(0,R.ZL)()(function(n){var e,t,r=n.breakpoints,o=n.palette,i=n.tokens,a=i.border,u=i.spacing,c=i.color;return{root:(e={display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"".concat(u.s," ").concat(u.base),backgroundColor:c.blue.azure,color:c.white},(0,j.Z)(e,r.down("sm"),{flexDirection:"column",minHeight:"".concat(A.oQ,"px")}),(0,j.Z)(e,"minHeight","".concat(A.ep,"px")),e),title:(0,j.Z)({},r.up("sm"),{marginRight:u.m}),button:(t={},(0,j.Z)(t,r.down("sm"),{marginTop:u.s,width:"100%"}),(0,j.Z)(t,"backgroundColor",o.common.white),(0,j.Z)(t,"color",o.common.black),(0,j.Z)(t,"borderRadius",a.radius["rounded-button"]),(0,j.Z)(t,"&:hover",{borderRadius:a.radius["rounded-button"],color:o.common.white}),t),buttonRoot:(0,j.Z)({},r.down("sm"),{width:"100%"})}}),X=function(n){var e=n.experiment,t=n.initialProps;return(0,Z.useEffect)(function(){e.recordImpression()},[]),G(t,Y().classes)};X.defaultProps={initialProps:Q};var W={flagID:"sdaq-141-lo-header-banner-experiment",id:"SDAQ-141",name:"LO Header banner view experiment",treatments:(i={},(0,j.Z)(i,L.NM,function(n){var e=n.experiment,t=n.initialProps;return(0,Z.useEffect)(function(){e.recordImpression()},[]),(0,c.jsx)(K,{initialProps:t})}),(0,j.Z)(i,L.vG,X),i)},J=function(){return null},V=function(n){return(0,c.jsx)(E.K,{config:W,initialProps:n,Portal:K,SkeletonLoader:J})};V.defaultProps=Q;var $=t(81740),nn=t(27050),ne=t(33701),nt=t(53957),nr=function(n){var e,t,r=n.id,o=n.entries,i=(0,nn.E6)(o,r);if(!i)return null;switch(i.ctaButtonType){case nt.n8.outline:case nt.n8.outlineDarkMode:e=nt.Qh;break;case nt.n8.primaryRed:e=nt.xJ,t=nt.Vb;break;default:e=nt.xJ}return(0,M.Z)((0,a.Z)((0,M.Z)((0,a.Z)({id:r,label:i.ctaButtonText,href:(0,p.en)(i.ctaButtonUrl)},i.trackAnalytics&&{trackAnalytics:(0,nn.AV)({trackAnalytics:i.trackAnalytics,entries:o})}),{variant:e}),t?{color:t}:{}),{contentType:nt.wF.button,ctaButtonType:i.ctaButtonType,openLinkInNewTab:i.openLinkInNewTab||null})},no=function(n){var e=n.logoMedia,t=(0,nn.U2)({image:e}),r=t.url,o=t.title,i=t.description;return r?{url:r,title:o,description:i}:null},ni=function(n){var e=n.id,t=n.entries,r=(0,nn.E6)(t,e);if(!r)return null;var o=r.title,i=r.subtitle,a=r.logo,u=r.backgroundImage,c=r.backgroundColor,s=r.width,l=r.alignment,d=r.colorTheme,m=r.height,f=r.cta;return{title:o,subtitle:void 0===i?null:i,logo:no({logoMedia:a}),backgroundImage:(0,nn.U2)({image:u,srcSet:(0,nn.cK)({heroSize:ne.bn})}),backgroundColor:c,width:s,alignment:l,colorTheme:d,height:m,cta:f&&nr({id:f.id,entries:t})}},na=function(n){var e=n.fields.modules,t=n.entries;return ni({id:((0,nn.v2)(e,nt.wF.cmsBanner)||{}).id,entries:t})},nu=function(n){var e=n.slug;return{contentType:nt.wF.fetchComponentsContainer,fieldName:nt.mA.slug,fieldValue:e}},nc=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.rawData,t=n.locale;return e?{headerBanner:na((0,nn.iG)(e,t))}:{}},ns=t(35896),nl=t(3255),nd=function(n){var e=n.slug,t=(0,m.PE)().locale,r=(0,b.useRouter)().query,o=nu({slug:e}),i=(0,nn.pK)((0,a.Z)({query:r,locale:t},o)),u=(0,$.Dn)({queryParams:i}).formattedUrl;return(0,nl.ZP)(e?u:null,function(n){return ns.Yq.get(n,{}).then(function(n){return nc({rawData:n.data,locale:t})}).catch(function(n){var e,t;throw null===(e=window.NREUM)||void 0===e||null===(t=e.addPageAction)||void 0===t||t.call(e,"graceful degradation of cms banner, error fetching CMS data, nothing will be shown to the user",{msg:"graceful degradation of cms banner, error fetching CMS data, nothing will be shown to the user",message:n.message,stack:n.stack,referrerPath:window.location.pathname,referrerQuery:window.location.search}),n})},{})},nm=t(20865),nf={title:void 0,cta:void 0},nv=function(){var n,e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,b.useRouter)().pathname,o=(0,m.PE)().locale,i=(0,f.B)(),u=(0,nm.V9)().data,s=nd({slug:k.U0}),l=s.data,d=s.error;if(!A.RU.includes(r)&&u&&(null===(n=u.activeSubscriptions)||void 0===n?void 0:n.length)||d)return(0,c.jsx)(P.Z,{timeout:{appear:500,enter:300,exit:5e3},unmountOnExit:!0,children:(0,c.jsx)(N,{})});if(e=(t.title||t.cta)&&u?(0,a.Z)({},t):void 0===u?nf:l&&l.headerBanner?t.disableCmsContent?nf:l.headerBanner:nf,!i){if("en"===o){if((0,p.Rd)({pathname:r}))return(0,c.jsx)(_,{headerProps:e});if((0,p.xw)({pathname:r}))return(0,c.jsx)(H,{headerProps:e})}if((0,p.Oq)({pathname:r}))return(0,c.jsx)(V,(0,a.Z)({},e))}return(0,c.jsx)(N,(0,a.Z)({},e))};nv.defaultProps={title:"",cta:null,disableCmsContent:!1};var np=function(n){var e=n.banners,t=(0,f.B)(),r=(0,b.useRouter)().pathname;if(!(null==e?void 0:e.length))return null;var o=e.length>1&&t?e[1]:e[0];return(0,p.Oq)({pathname:r})?(0,c.jsx)(V,(0,a.Z)({},o)):(0,c.jsx)(N,(0,a.Z)({},o))};np.defaultProps={banners:null};var nh=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.banners,t=n.showHeaderBanner,r=(0,u.Z)(n,["banners","showHeaderBanner"]);return t?(0,c.jsx)(s.Z,{theme:y.q,children:(0,c.jsx)(w,{children:(null==e?void 0:e.length)?(0,c.jsx)(np,{banners:e}):(0,c.jsx)(nv,(0,a.Z)({},r))})}):(0,c.jsx)("div",{})};nh.defaultProps={title:"",cta:null,banners:null,showHeaderBanner:!1}},75053:function(n,e,t){t.d(e,{RU:function(){return u},ep:function(){return a},oQ:function(){return i}});var r=t(39232),o=t(18505),i=105,a=60,u=["/","/".concat(r.Y_),"/".concat(o.mo,"/[term]"),"/".concat(r.pX),"/".concat(r.pX,"/").concat(o.mo),"/".concat(r.pX,"/").concat(o.mo,"/[term]"),"/".concat(r.xF),"/".concat(r.xF,"/").concat(o.mo),"/".concat(r.xF,"/").concat(o.mo,"/[term]"),"/".concat(r.Qp),"/".concat(r.Qp,"/").concat(o.mo),"/".concat(r.Qp,"/").concat(o.mo,"/[term]")]},62021:function(n,e,t){t.d(e,{K:function(){return p}});var r=t(52322),o=t(23490),i=t(90581),a=t(27805),u=t(21218),c=t(70865),s=t(96670),l=t(31265),d=t(2784),m=null==window?void 0:window.NREUM,f=function(n){(0,u.Z)(t,n);var e=(0,l.Z)(t);function t(n){var r;return(0,i.Z)(this,t),(r=e.call(this,n)).state={error:null},r}return(0,a.Z)(t,[{key:"componentDidCatch",value:function(n){var e,t,r,o,i,a,u,l=this.props.experiment,d=(null==l?void 0:l.id)?"Experiment: ".concat(null==l?void 0:l.id,": error while rendering treatment: ").concat(null==l?void 0:null===(e=l.variant)||void 0===e?void 0:e.id):"Experiment: missing experiment object",f=n||Error(d),v=(0,s.Z)((0,c.Z)({},(null==window?void 0:window.location)||{}),{isExcluded:(null==l?void 0:null===(t=l.variant)||void 0===t?void 0:t.isExcluded)||!1,msg:d,navigator:(null==window?void 0:null===(r=window.navigator)||void 0===r?void 0:r.userAgent)||"unknown",referrerPath:(null==window?void 0:null===(o=window.location)||void 0===o?void 0:o.pathname)||"",referrerQuery:(null==window?void 0:null===(i=window.location)||void 0===i?void 0:i.search)||"",variantId:null==l?void 0:null===(a=l.variant)||void 0===a?void 0:a.id});null===(u=m.noticeError)||void 0===u||u.call(m,f,v)}},{key:"render",value:function(){var n=this.state.error,e=this.props.children;return n?null:e}}],[{key:"getDerivedStateFromError",value:function(n){return{error:!0}}}]),t}(d.Component),v=t(4122),p=function(n){var e=n.config,t=n.initialProps,i=n.Portal,a=n.SkeletonLoader,u=(0,v.a)(e),c=u.experiment,s=u.Treatment,l=(0,o.N)().isBot,d=function(){return(0,r.jsx)(r.Fragment,{})};return l||c.isInactiveForUser?d=i:c.isLoading?d=a:s&&(d=s),(0,r.jsx)(f,{experiment:c,children:(0,r.jsx)(d,{experiment:c,initialProps:t})})}},4122:function(n,e,t){t.d(e,{a:function(){return h}});var r=t(80875),o=t(84857),i=t(88849),a=t(27673),u=t(47842),c=t(11181),s=t(29510),l=t(9823),d=t(98779),m=t(43110),f=t(2784),v=t(8749),p=function(n){var e=n.eligibility,t=n.experimentPayload,r=(0,s.PE)().region,o=(0,l.D)().brand,a=(0,d.d)(),p=(0,m.B)(),h=void 0===p,g=t.reason,b=t.variation;return(0,f.useMemo)(function(){if(void 0!==b&&!h){var n,t,s,l=!(0,v.Z)(b),d=g===i.PX,m=!0,f=!0,Z=!0,x=!0,w=e.regions,y=e.brand,P=e.excludeMobile,k=e.loggedInStatus,E=e.regionMode;return m=(n={},(0,u.Z)(n,i.z3,!!w&&!w.includes(r)),(0,u.Z)(n,i.BO,!!w&&w.includes(r)),(0,u.Z)(n,i.YW,!0),n)[E||i.YW],f=(t={},(0,u.Z)(t,i.Fw,p),(0,u.Z)(t,i.E7,!p),(0,u.Z)(t,i.zp,!0),t)[k||i.zp],Z=(s={},(0,u.Z)(s,c.BRANDS.ENTERPRISE,o===c.BRANDS.ENTERPRISE),(0,u.Z)(s,c.BRANDS.SSTK,o===c.BRANDS.SSTK),(0,u.Z)(s,i.wW,!0),s)[y||i.wW],P&&(x=!a),!l&&!d&&m&&f&&Z&&x}},[o,e,p,a,g,r,h,b])},h=function(n){var e=n.eligibility,t=n.flagID,u=n.id,c=n.name,s=n.treatments,l=(0,r.I)(),d=l.experiments,m=l.error,f=l.isLoading,v=f?i.nI:(null==d?void 0:d[t])||i.dC,h=v.variation,g=v.reason,b=p({eligibility:e||{},experimentPayload:v}),Z=(0,o.wX)(g),x=e?b:Z,w=f||void 0===x,y=w||!x||m?i.NM:h,P=(0,a.z)({error:m,flagID:t,name:c,reason:g,variantKey:h}).recordImpression;return{experiment:{id:u,flagID:t,isInactiveForUser:!w&&!m&&!x,isLoading:w,recordImpression:P,variant:{key:h,treatmentID:y}},treatmentID:y,Treatment:w?void 0:s[y||i.NM]}}},88849:function(n,e,t){t.d(e,{BO:function(){return v},Dh:function(){return i},E7:function(){return f},Fw:function(){return m},M6:function(){return g},NM:function(){return a},PX:function(){return h},Q2:function(){return u},YW:function(){return l},ZC:function(){return Z},_Z:function(){return o},dC:function(){return w},gH:function(){return b},nI:function(){return x},o2:function(){return c},vG:function(){return r},wW:function(){return d},z3:function(){return p},zp:function(){return s}});var r="variantA",o="variantB",i="variantC",a="control",u="confound",c="launch-darkly",s="ALL",l="ALL",d="ALL",m="LOGGED_IN",f="LOGGED_OUT",v="INCLUDE",p="EXCLUDE",h="OFF",g="RULE_MATCH",b="QUERY_PARAM",Z=[r,o,i,"variantD","variantE",a],x={reason:void 0,variation:void 0},w={reason:h,variation:a}},27673:function(n,e,t){t.d(e,{z:function(){return v}});var r=t(47842),o=t(70865),i=t(96670),a=t(26297),u=t(87394),c=t(23490),s=t(776),l=t(70207),d=t(2784),m=t(88849),f=t(8749),v=function(n){var e=n.error,t=n.flagID,v=n.name,p=n.reason,h=n.variantKey,g=(0,u.Z)((0,l.i)(function(n){return n[t]}),2),b=g[0],Z=g[1],x=b||{},w=x.hasRecordImpressionBeenCalled,y=(0,a.Z)(x,["hasRecordImpressionBeenCalled"]),P=p!==m.gH,k=(0,s.yh)().analytics,E=(0,c.N)().isBot;return{recordImpression:(0,d.useCallback)(function(){if(!w&&P){var n=!!e||E||!(0,f.Z)(h);k.experiment({experiment_id:t,experiment_name:v,is_bot:E,is_error:!!e,source:m.o2,variation_id:n?m.Q2:h}),Z((0,r.Z)({},t,(0,i.Z)((0,o.Z)({},y),{hasRecordImpressionBeenCalled:!0})))}},[k,e,t,w,P,E,v,y,Z,h])}}},8749:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(88849),o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.ZC.includes(n)}},80875:function(n,e,t){t.d(e,{I:function(){return E}});var r=t(47842),o=t(70865),i=t(96670),a=t(87394),u=t(50930),c=t(81740),s=t(7297),l=t(23490),d=t(29510),m=t(89833),f=t(88849),v=t(9823),p=t(88436),h=t(35896),g=t(9009),b=t(84159),Z=t(84857),x=t(5632),w=t(2784),y=t(3255),P=/^(experiment)\[(([a-z]|[A-Z]))*[0-9]*-[0-9]+.*]$/,k=function(n){var e=Object.entries(n),t=e.reduce(function(n,e,t){var r=(0,a.Z)(e,1)[0];return P.test(r)?(0,u.Z)(n).concat([t]):n},[]);return 0===t.length?{}:t.reduce(function(n,t){var u=(0,a.Z)(e[t],2),c=u[0],s=u[1];if("string"==typeof s&&f.ZC.includes(s)){var l=c.slice(c.indexOf("[")+1,c.indexOf("]"));return(0,i.Z)((0,o.Z)({},n),(0,r.Z)({},l,{reason:f.gH,variation:s}))}return n},{})},E=function(){var n=(0,m.Wl)(),e=(0,p.r)(),t=(0,l.N)().isBot,i=(0,d.PE)(),a=i.locale,u=i.region,f=(0,x.useRouter)().query,P=(0,v.D)().brand,E=(0,b.bK)(),j=(0,c.Bs)().formattedUrl,C=!!n,I=(0,y.ZP)(C||!e||t?null:j,function(n){var t;return h.uS.get(n,{headers:(t={},(0,r.Z)(t,s.yx,e),(0,r.Z)(t,s.L5,a),(0,r.Z)(t,s.UQ,P),(0,r.Z)(t,s.cT,u),t)}).then(function(n){return(0,g.O)(n.data)})},{shouldRetryOnError:!1}),R=I.data,A=I.error,B=C?n:R,N=(0,w.useMemo)(function(){return E&&B?(0,o.Z)({},(0,Z.J1)(B),k(f)):B?(0,o.Z)({},B,k(f)):void 0},[B,E,f]);return{experiments:N,error:A,isLoading:!t&&void 0===N&&void 0===A}}},84857:function(n,e,t){t.d(e,{J1:function(){return i},wX:function(){return a}});var r=t(87394),o=t(88849),i=function(n){return Object.fromEntries(Object.entries(n).map(function(n){var e=(0,r.Z)(n,2);return[e[0],{reason:e[1].reason,variation:o.NM}]}))},a=function(n){return n===o.M6||n===o.gH}}}]);
//# sourceMappingURL=82240-c35118a343c0f07f.js.map
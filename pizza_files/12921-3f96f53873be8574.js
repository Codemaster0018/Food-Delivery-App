"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12921],{45848:function(e,n,t){t.d(n,{N:function(){return s}});var i=t(25237),r=t.n(i),o=t(46159),s=r()(function(){return Promise.all([t.e(61668),t.e(41273)]).then(t.bind(t,96367)).then(function(e){return e.AddToCartButton})},{loadableGenerated:{webpack:function(){return[96367]}},ssr:!1,loading:o.F})},58534:function(e,n,t){t.d(n,{N:function(){return s}});var i=t(25237),r=t.n(i),o=t(46159),s=r()(function(){return t.e(11201).then(t.bind(t,11201)).then(function(e){return e.BuyAndDownloadButton})},{loadableGenerated:{webpack:function(){return[11201]}},ssr:!1,loading:o.F})},49799:function(e,n,t){t.d(n,{e:function(){return v}});var i=t(70865),r=t(52322),o=t(45848),s=t(46159),a=t(58534),c=t(85652),d=t(55577),u=t(63731),l=t(86669),p=t(29292),f=t(44297),m=t(73377),v=function(e){var n=e.asset,t=e.eligibility,v=e.isLoadingData,y=e.onAddToCartSuccess,h=e.onAddToCartFailure,b=e.onLicensingSuccess,_=e.onRedownloadSuccess,w=e.RedownloadSecondaryButton,C=e.redownloadSecondaryButtonProps,g=e.selectedAssetSize,P=e.selectedPaymentPlan,S=e.selectedProductLicenseType,T=e.selectedShadowsOption,L=e.showAddToCartButton,Z=e.showBuyAndDownloadButton,x=e.showGetAnotherPlanButton,I=e.showLicenseButton,D=e.showRedownloadButton,N=e.showWarningMessage,A=e.clickAnalyticsLabels;if(v)return(0,r.jsx)(s.F,{});var k=t.licenses,M=(0,f.PD)(n),F={brandCategory:(0,p.f_)(n),productLine:(0,p.Rz)(n)};return L?(0,r.jsx)(o.N,(0,i.Z)({asset:n,itemsToAdd:[(0,l.zg)({asset:n,assetSize:g,license:null==S?void 0:S.license})],onAddToCartSuccess:y,onAddToCartFailure:h,selectedProductLicenseType:S,setAddToCartStatus:N,clickAnalyticsLabel:(0,m.U_)((void 0===A?{}:A).addToCartButton)},M&&F)):D?(0,r.jsx)(u.s,(0,i.Z)({asset:n,licenses:void 0===k?[]:k,onRedownloadSuccess:_,SecondaryButton:w,secondaryButtonProps:C,selectedAssetSize:g,selectedShadowsOption:T,showWarningMessage:N},M&&F)):I?(0,r.jsx)(d.f,{assetInfo:{asset:n,selectedAssetSize:g,paymentPlan:P,licenseName:null==S?void 0:S.license,selectedShadowsOption:T},isDisabled:null==P?void 0:P.isDisabled,onLicensingSuccess:b,setLicensingStatus:N}):Z?(0,r.jsx)(a.N,{asset:n,assetSize:g,product:S,selectedProductLicenseType:S,setCreateOrderStatus:N}):x?(0,r.jsx)(c.H,{}):null};v.defaultProps={eligibility:{},onAddToCartSuccess:function(){},onAddToCartFailure:function(){},onLicensingSuccess:function(){},onRedownloadSuccess:function(){},RedownloadSecondaryButton:null,redownloadSecondaryButtonProps:{},selectedPaymentPlan:{},selectedProductLicenseType:{},showAddToCartButton:!1,showBuyAndDownloadButton:!1,showLicenseButton:!1,showRedownloadButton:!1,showGetAnotherPlanButton:!1,showWarningMessage:function(){}}},85652:function(e,n,t){t.d(n,{H:function(){return s}});var i=t(25237),r=t.n(i),o=t(46159),s=r()(function(){return t.e(15646).then(t.bind(t,15646)).then(function(e){return e.GetAnotherPlanButton})},{loadableGenerated:{webpack:function(){return[15646]}},ssr:!1,loading:o.F})},25522:function(e,n,t){t.d(n,{c:function(){return u}});var i=t(70865),r=t(52322),o=t(67550),s=t(75891),a=t(52417),c=t(96495),d=t(41913),u=function(e){var n=e.allSizesAssetEligibility,t=e.products,u=e.selectedProductLicenseType,l=e.setSelectedProductLicenseType,p=e.isFlexProduct,f=e.isOffsetAsset,m=e.isRedownloadFlow,v=e.showPaymentPlanSelect,y=e.hasExistingLicenseForSelectedLicenseType,h=e.paymentPlansForCreditCostCalculation,b=(0,c.T)().labels,_=(0,d.X)({allSizesAssetEligibility:n,products:t,selectedProductLicenseType:u,setSelectedProductLicenseType:l,isFlexProduct:p,isOffsetAsset:f,isRedownloadFlow:m,showPaymentPlanSelect:v,hasExistingLicenseForSelectedLicenseType:y,paymentPlansForCreditCostCalculation:h,labels:b}),w=_.formattedProductLicenseTypes,C=_.licenseTypeDrawerStatusMessageProps;return(0,r.jsx)(r.Fragment,{children:!!w.length&&(0,r.jsx)(o.Z,{pb:5,children:(0,r.jsx)(a.H,(0,i.Z)({analyticsLabel:"licenseTypeSelected",title:b.licenseType,values:w,onValueChange:l,ItemComponent:s.vh,itemProps:{selectedItem:u}},C&&{drawerStatusMessageProps:C}))})})}},41913:function(e,n,t){t.d(n,{X:function(){return p}});var i=t(47842),r=t(70865),o=t(96670),s=t(44699),a=t(60591),c=t(87646),d=t(34293),u=t(87414),l=t(2784),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.allSizesAssetEligibility,t=e.products,p=e.selectedProductLicenseType,f=e.setSelectedProductLicenseType,m=e.isFlexProduct,v=e.isOffsetAsset,y=void 0!==v&&v,h=e.isRedownloadFlow,b=e.paymentPlansForCreditCostCalculation,_=e.showPaymentPlanSelect,w=e.hasExistingLicenseForSelectedLicenseType,C=e.labels,g=void 0===C?{}:C,P=(0,l.useMemo)(function(){return Array.isArray(t)?(y?a.$I:a.Ji).map(function(e){return null==t?void 0:t.find(function(n){return n.name===e})}):[]},[t,y]),S=(0,l.useMemo)(function(){return(0,c.V)({eligibility:n,licenseTypes:[a.ur,a.HS]})},[n]),T=S.ownsStandardLicense,L=S.ownsEnhancedLicense,Z=(0,l.useMemo)(function(){return{hasEligibleSubscriptionForEnhancedLicense:(0,d.i)({subscriptions:n.subscriptions,licenseName:a.HS}),hasEligibleSubscriptionForStandardLicense:(0,d.i)({subscriptions:n.subscriptions,licenseName:a.ur})}},[n]),x=Z.hasEligibleSubscriptionForEnhancedLicense,I=Z.hasEligibleSubscriptionForStandardLicense,D=(0,l.useMemo)(function(){var e;return m?(e={},(0,i.Z)(e,a.ur,(0,u.Kg)({paymentPlans:b,licenseType:a.ur})),(0,i.Z)(e,a.HS,(0,u.Kg)({paymentPlans:b,licenseType:a.HS})),e):{}},[b,m]),N=(0,l.useMemo)(function(){return P.map(function(e){var n=(null==e?void 0:e.license)===a.ur,t=(null==e?void 0:e.license)===a.HS;return(0,o.Z)((0,r.Z)({},e,n&&{displayIncluded:T||L&&y||I&&!m,displayPrice:y,isDisabled:L},t&&{displayIncluded:L||x&&!m,displayPrice:y,isDisabled:!1}),{creditCostsByLicenseType:D,analyticsLabel:(null==e?void 0:e.license)&&"typeSelected - ".concat(null==e?void 0:e.license,"License")})})},[D,x,I,L,T,P,m,y]),A=(0,l.useMemo)(function(){return h?w?{status:s.H_,message:g.alreadyLicensed}:_?{status:s.cM,message:g.alreadyLicensedInStandardButCanLicenseInEnhanced}:{status:s.cM,message:g.alreadyLicensedInStandard}:null},[w,h,g.alreadyLicensed,g.alreadyLicensedInStandard,g.alreadyLicensedInStandardButCanLicenseInEnhanced,_]);return(0,l.useEffect)(function(){var e,t=(null==p?void 0:p.id)===(null==P?void 0:null===(e=P[0])||void 0===e?void 0:e.id);if((!p||t&&L)&&(null==P?void 0:P[0])&&(null==n?void 0:n.subscriptions)){if(L||!T&&(0,d.i)({subscriptions:n.subscriptions,licenseName:a.HS})&&!(0,d.i)({subscriptions:n.subscriptions,licenseName:a.ur})){f(P[1]);return}f(P[0])}},[n.subscriptions,L,T,P,p,f]),{formattedProductLicenseTypes:N,licenseTypeDrawerStatusMessageProps:A}}},14625:function(e,n,t){t.d(n,{GN:function(){return _},K9:function(){return m},NP:function(){return l},PU:function(){return d},XC:function(){return u},Xh:function(){return b},Y4:function(){return w},l_:function(){return C},wZ:function(){return g}});var i,r,o=t(47842),s=t(70865),a=t(96670),c=t(27739),d="subscription",u="onDemand",l="enhanced",p={translations:{title:"choose_monthly_plan",caption:["activation-drawers:sub_product_disclaimer"]},items:[{name:c.tq,translations:{price:"activation-drawers:price_per_month",description:"flex_sub_details"}},{name:c.v8,translations:{price:"activation-drawers:price_per_month",description:"flex_sub_details"}},{name:c.dm,translations:{price:"activation-drawers:price_per_month",description:"flex_sub_details"}}]},f={translations:{title:"choose_monthly_plan",caption:["activation-drawers:sub_product_disclaimer","activation-drawers:sub_product_sub_disclaimer"]},items:[{name:c.tq,translations:{price:"activation-drawers:price_per_month",description:"flex_sub_details"}},{name:c.cz,translations:{price:"activation-drawers:price_per_month"}},{name:c.dF,translations:{price:"activation-drawers:price_per_month"}}]},m={translations:{title:"choose_a_plan",caption:["activation-drawers:sub_product_sub_disclaimer"]},items:[{name:c.EV,translations:{price:"activation-drawers:price_per_year",description:"flex_sub_details"}},{name:c.KB,translations:{price:"activation-drawers:price_per_year"}},{name:c.Dy,translations:{price:"activation-drawers:price_per_year"}}]},v={translations:{title:"on_demand_title",caption:"on_demand_caption"},items:[{name:c._x},{name:c.vC},{name:c.cL}]},y={translations:{title:"on_demand_title",caption:"on_demand_caption"},items:[{name:c.cd,translations:{price:"price_standard_license"}},{name:c.vC,translations:{price:"price_standard_license"}},{name:c._x,translations:{price:"price_standard_license"}},{name:c.cL,translations:{price:"price_standard_license"}}],initialItemIndex:1},h={translations:{title:"enhanced_legal_protections",caption:"on_demand_caption"},items:[{name:c.vI},{name:c.zW},{name:c.jh}]},b=(i={},(0,o.Z)(i,d,p),(0,o.Z)(i,u,y),(0,o.Z)(i,l,h),i),_=(r={},(0,o.Z)(r,d,p),(0,o.Z)(r,u,v),(0,o.Z)(r,l,h),r),w=(0,a.Z)((0,s.Z)({},b),(0,o.Z)({},d,f)),C=(0,a.Z)((0,s.Z)({},_),(0,o.Z)({},d,f)),g=[{translations:"subscriptions",analyticsLabel:"subscriptionTab"},{translations:"on_demand_packs",analyticsLabel:"onDemandTab"}]},26515:function(e,n,t){t.d(n,{y:function(){return o}});var i=t(47842),r=t(13011),o=(0,t(8740).ZL)()(function(e){var n=e.breakpoints;return{root:(0,i.Z)({},n.down("lg"),{minWidth:r.r0})}})},1104:function(e,n,t){t.d(n,{Gk:function(){return m},JU:function(){return v},aY:function(){return d},lk:function(){return l}});var i=t(47842),r=t(70865),o=t(96670),s=t(26297),a=t(35776),c=t(14625),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.productSelectorsMap,t=void 0===n?{}:n;return Object.keys(t).reduce(function(e,n){var s,a,c,d,u,l,p,f,m=(null===(s=t[n])||void 0===s?void 0:s.initialItemIndex)||0;return(0,o.Z)((0,r.Z)({},e),(0,i.Z)({},n,{name:null===(a=t[n])||void 0===a?void 0:null===(c=a.items)||void 0===c?void 0:null===(d=c[m])||void 0===d?void 0:d.name,id:null===(u=t[n])||void 0===u?void 0:null===(l=u.items)||void 0===l?void 0:null===(p=l[m])||void 0===p?void 0:null===(f=p.product)||void 0===f?void 0:f.id}))},{})},u=function(e){var n=e.productSelectorsMap,t=e.isIndiaRegion,s=n;return t&&(s=(0,o.Z)((0,r.Z)({},s),(0,i.Z)({},c.PU,c.K9))),s},l=function(e){var n=e.id;return e.products.find(function(e){return e.id===n})||{}},p=function(e){var n=e.name;return e.products.find(function(e){return e.name===n})||{}},f=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.item,i=void 0===t?{}:t,r=n.products,o=void 0===r?[]:r,s=n.t,a=void 0===s?function(e){return e}:s,c=i.discountPercentage,d=i.name,u=void 0===d?"":d,f=i.translations,m=void 0===f?{}:f,v=i.id,y=void 0===v?"":v,h=y?l({id:y,products:o}):p({name:u,products:o}),b=m.header?a(m.header):null;e=h.downloadCredits?1===h.downloadCredits?a("feature-collections:number_images_single"):a("common:image_count_plural",{NUM_ASSETS:h.downloadCredits}):a("credits_count",{NUM:h.allotmentCredits});var _=m.description?a(m.description,{NUM:h.allotmentCredits}):null;return{discountPercentage:c,name:u,labels:{header:b,title:e,description:_,productName:a("product-names:".concat(null==h?void 0:h.name)),perAsset:a("activation-drawers:per_image")},translations:{price:m.price||null},product:h}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.productSelectorsMap,t=e.products,s=void 0===t?[]:t,c=e.t,d=void 0===c?function(e){return e}:c,l=e.locale,p=e.isIndiaRegion,m=(void 0===l?{}:l).currencyData.currency,v=u({productSelectorsMap:void 0===n?{}:n,isIndiaRegion:void 0!==p&&p});return Object.keys(v).reduce(function(e,n){var t=v[n],c=t.items,u=t.translations,l=void 0===u?{}:u,p=l.caption,y=l.namespace,h=l.title,b=t.initialItemIndex;return(0,o.Z)((0,r.Z)({},e),(0,i.Z)({},n,{labels:{caption:Array.isArray(p)?p.map(function(e){return d(e)}):d(p,{CURRENCY_FULL_FORM:d("".concat(a.Fx_,"::common:currency_full_form_").concat(m.toLowerCase()))}),title:y?d(h,{ns:y}):d(h)},items:(void 0===c?[]:c).map(function(e){return f({item:e,products:s,t:d})}),initialItemIndex:void 0===b?0:b}))},{})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.tabs,t=e.t,i=void 0===t?function(e){return e}:t;return(void 0===n?[]:n).map(function(e){var n=e.translations,t=(0,s.Z)(e,["translations"]);return(0,o.Z)((0,r.Z)({},t),{label:i(n)})})}},75891:function(e,n,t){t.d(n,{vh:function(){return _}});var i=t(47842),r=t(87394),o=t(52322),s=t(61640),a=t(62197),c=t(12410),d=t(39232),u=t(29510),l=t(35776),p=t(25237),f=t.n(p),m=t(59877),v=t(2784),y=f()(function(){return t.e(80655).then(t.bind(t,80655)).then(function(e){return e.ProductPrice})},{loadableGenerated:{webpack:function(){return[80655]}}}),h=f()(function(){return t.e(5944).then(t.bind(t,5944)).then(function(e){return e.CreditCost})},{loadableGenerated:{webpack:function(){return[5944]}}}),b=function(e){var n,t=e.assetType,i=e.license,o=e.productDescriptionGetters,s=e.t,a=e.currency,c=i;return[d.xF,d.tn,d.pX].includes(t)&&(c=(0,r.Z)(i.split("_"),2)[1]),{included:s("included"),onDemandCaption:s("on_demand_caption",{CURRENCY_FULL_FORM:s("".concat(l.Fx_,"::common:currency_full_form_").concat(a.toLowerCase()))}),productName:s("workspaces:license_type_".concat(c,"_license")),productDescription:s(null==o?void 0:null===(n=o[t])||void 0===n?void 0:n.call(o,c))||s(null==o?void 0:o.default(c))}},_=function(e){var n,t,r=e.assetType,p=e.item,f=e.selectedItem,_=e.width,w=e.hideCredits,C=(0,u.PE)().currencyData.currency,g=(0,m.$G)([l.AH,l.Fx_]).t,P=(0,v.useMemo)(function(){var e;return e={},(0,i.Z)(e,d.pX,function(e){return"video_".concat(e,"_license_description_v2")}),(0,i.Z)(e,d.xF,function(e){return"music_".concat(e,"_license_description")}),(0,i.Z)(e,d.tn,function(e){return"music_".concat(e,"_license_description")}),(0,i.Z)(e,"default",function(e){return"".concat(e,"_license_description")}),e},[]),S=b({assetType:r,downloadCredits:null==p?void 0:p.downloadCredits,license:null==p?void 0:p.license,productDescriptionGetters:P,t:g,currency:C}),T=p.name===f.name,L=p.displayIncluded||(null===(n=p.creditCostsByLicenseType)||void 0===n?void 0:n[null==p?void 0:p.license])&&w,Z=(0,c.Q)({width:_,displayIncluded:L}),x=Z.classes,I=Z.cx;return(0,o.jsxs)("div",{className:x.row,children:[(0,o.jsx)("div",{className:x.radioButtonContainer,"data-automation":"divRadioButton-".concat(S.productName),children:(0,o.jsx)(s.Z,{checked:T,classes:{checked:x.selectedRadioButton,root:x.radioButton},disabled:p.isDisabled,inputProps:{"aria-label":S.productName}})}),(0,o.jsxs)("div",{className:x.textSection,children:[(0,o.jsxs)("div",{className:x.topRow,children:[(0,o.jsx)(a.Z,{className:I(x.bold,(0,i.Z)({},x.disabledText,p.isDisabled)),variant:"body2",children:S.productName}),L&&(0,o.jsx)(a.Z,{className:I(x.bold,(0,i.Z)({},x.disabledText,p.isDisabled)),variant:"body2","data-automation":"".concat(p.license,"-license-included"),children:S.included}),!p.displayIncluded&&p.displayPrice?(0,o.jsx)(y,{product:p,width:_}):(0,o.jsx)(o.Fragment,{children:!p.displayIncluded&&(null===(t=p.creditCostsByLicenseType)||void 0===t?void 0:t[null==p?void 0:p.license])&&!w&&(0,o.jsx)(h,{creditCost:p.creditCostsByLicenseType[null==p?void 0:p.license],width:_})})]}),S.productDescription&&(0,o.jsx)(a.Z,{className:I(x.productDescriptionText,(0,i.Z)({},x.disabledText,p.isDisabled)),variant:"body2",children:S.productDescription})]})]})};_.defaultProps={assetType:d.k4,item:{},selectedItem:{},width:"",hideCredits:!1}},55577:function(e,n,t){t.d(n,{f:function(){return s}});var i=t(25237),r=t.n(i),o=t(46159),s=r()(function(){return t.e(39499).then(t.bind(t,39499)).then(function(e){return e.LicensingButton})},{loadableGenerated:{webpack:function(){return[39499]}},ssr:!1,loading:o.F})},63731:function(e,n,t){t.d(n,{s:function(){return r}});var i=t(25237),r=t.n(i)()(function(){return t.e(80792).then(t.bind(t,80792)).then(function(e){return e.RedownloadButton})},{loadableGenerated:{webpack:function(){return[80792]}},ssr:!1})},84179:function(e,n,t){t.d(n,{F:function(){return l}});var i=t(52322),r=t(25237),o=t.n(r),s=o()(function(){return Promise.all([t.e(59004),t.e(90647)]).then(t.bind(t,35538)).then(function(e){return e.EditorialTerms})},{loadableGenerated:{webpack:function(){return[35538]}},ssr:!1}),a=o()(function(){return Promise.all([t.e(59004),t.e(79446)]).then(t.bind(t,80338)).then(function(e){return e.GeneratedAssetTerms})},{loadableGenerated:{webpack:function(){return[80338]}},ssr:!1}),c=t(44297),d=t(18174),u=t(2784),l=function(e){var n=e.asset,t=e.isTermsChecked,r=e.setTermsCheckbox,o=(0,d.pi)(n),l=(0,c.k7)(n);return((0,u.useEffect)(function(){o||l||r(!0)},[o,l,r]),o)?(0,i.jsx)(s,{asset:n,isTermsChecked:t,onCheckboxChange:r}):l?(0,i.jsx)(a,{isTermsChecked:t,onCheckboxChange:r}):null};l.defaultProps={isTermsChecked:!1}},56398:function(e,n,t){t.d(n,{B9:function(){return l},C5:function(){return _},D7:function(){return P},Eq:function(){return s},Hj:function(){return r},Lb:function(){return h},M2:function(){return o},QT:function(){return b},QY:function(){return p},T2:function(){return g},Vg:function(){return T},WL:function(){return d},Xp:function(){return f},YR:function(){return a},ZW:function(){return C},de:function(){return u},gK:function(){return w},l9:function(){return c},oD:function(){return m},px:function(){return v},wO:function(){return y},xf:function(){return S},xt:function(){return i}});var i="CARD_PAYMENT",r="tex-7621",o="credit_card",s="sepa_direct_debit",a="paypal",c="products",d="invoices",u="sfx",l="complimentary",p="shutterstock_bill_payment",f="NL",m="za_vat",v="vat",y="tw",h="ZAR",b="TWD",_="EUR",w="music",C="video",g="image",P="elements",S="sfx",T=28},39781:function(e,n,t){t.d(n,{Q:function(){return G}});var i,r=t(98788),o=t(47842),s=t(70865),a=t(96670),c=t(87394),d=t(5163),u=t(27739),l=t(44699),p=t(60591),f=t(29510),m=t(66970),v=t(81740),y=t(56398),h=t(39232),b=t(44297),_=t(35896),w=t(9009),C=function(e){switch(e.paymentMethod){case y.M2:return{paymentId:e.id,expirationMonth:e.creditCard.expMonth,expirationYear:e.creditCard.expYear,maskedNumber:e.creditCard.maskedNumber,cardType:e.creditCard.type,isDefault:e.isDefault,paymentMethod:e.paymentMethod,businessUnit:e.businessUnit};case y.Eq:return{paymentId:e.id,bic:e.sepaDirectDebit.bic,maskedIBAN:e.sepaDirectDebit.maskedIban,isDefault:e.isDefault,paymentMethod:e.paymentMethod,businessUnit:e.businessUnit};case y.YR:return{paymentId:e.id,isDefault:e.isDefault,paymentMethod:e.paymentMethod,businessUnit:e.businessUnit,email:e.email};default:return null}},g=function(e){var n=e.paymentProfiles,t=void 0===n?[]:n;return Array.isArray(t)&&0!==t.length?C(t.find(function(e){return!0===e.isDefault})||t[0]):null},P=function(e){var n=e.orderItems,t=e.license,i=e.country;return n.map(function(e){var n=e.product,r=void 0===n?{}:n,o=r.id,a=r.eligibleForRebilling,c=r.seatCount,d=e.productType,l=e.assets,f=e.paymentMethod,m={},v=[];return c&&(m.seat_count=c),(null==f?void 0:f.type)!==y.xt&&(m.subscription_id=null==f?void 0:f.id),(null==l?void 0:l.length)&&(v=l.map(function(e){var n=e.asset,i=e.selectedAssetSize,r=(0,b._L)(n);return(0,s.Z)({type:r,id:n.id,license:t},(null==i?void 0:i.size)&&{size:i.size},(null==i?void 0:i.format)&&{format:i.format},r===h.IK&&{headline:n.title})})),m.auto_renewal=a&&d===p.Cs&&!u.ik.includes(i)&&!u.yD.includes(e.product.name),(0,s.Z)({product:{id:o,type:d||p.cs}},v&&{media:v},Object.keys(m).length>0&&{meta:m})})},S=function(e){var n=e.currency,t=e.country,i=e.paymentProfileId,r=e.items,o=e.couponCode;return{data:{type:"orders",attributes:{currency:n,items:r,country:t,payment_profile_id:i,coupons:o?[{type:"coupon",name:"coupon",coupon_code:o}]:[],client_data:{},vat_override:e.vatNumber||void 0}}}},T=(i=(0,r.Z)(function(e){var n,t,i,r,o,s,a,c,u,l,f,m;return(0,d.__generator)(this,function(d){return n=e.country,t=e.couponCode,i=e.currency,r=e.orderItems,o=e.paymentProfileId,s=e.vatNumber,c=void 0===(a=e.configs)?{}:a,l=P({orderItems:r,license:void 0===(u=e.license)?p.ur:u,country:n}),f=(0,v.Tn)().formattedUrl,m=S({country:n,couponCode:t,currency:i,items:l,paymentProfileId:o,vatNumber:s}),[2,_.uS.post(f,m,c).then(function(e){return{headers:e.headers,data:(0,w.O)(e.data)}})]})}),function(e){return i.apply(this,arguments)}),L=t(87414),Z=function(e){var n=e.couponCode,t=e.productName,i=null;return t===u.Pv&&n===u.Xd?i=u.E6:t===u.fn&&n===u.Q9&&(i=u.Em),i},x=t(38419),I=t(55565),D=t(38367),N=t(88167),A=t(59979),k=t(70008),M=t(40233),F=t(43110),B=t(25936),R=t(24114),E=t(38204),j=t(21805),U=t(5632),z=t(2784),O=function(e){var n=e.couponCode,t=(0,U.useRouter)();return(0,z.useCallback)(function(e){var i,r=e.orderId,a=(0,x.DW)({language:t.locale,relativePath:(0,E.U2)({queryParams:(0,s.Z)({orderId:r},(null==t?void 0:t.query)||{},n?(i={},(0,o.Z)(i,p.d9,n),(0,o.Z)(i,p.Gp,n),i):{})})});t.push(a)},[n,t])},G=function(e){var n=e.products,t=e.asset,i=e.assetSize,o=e.couponCode,v=e.productId,y=e.productType,h=void 0===y?p.Cs:y,_=e.productOverride,w=e.seatCount,C=e.setCreateOrderStatus,P=void 0===C?function(){}:C,S=e.setIsInvalidCoupon,x=void 0===S?function(){}:S,E=e.vatNumber,G=e.license,H=e.isLicenseDrawer,q=void 0!==H&&H,W=(0,f.PE)().region,Y=(0,k.B)().isIndiaRegion,Q=(0,F.j)().data,X=(0,B.u)().data,K=(0,F.B)(),V=(0,c.Z)((0,z.useState)(!1),2),$=V[0],J=V[1],ee=(0,c.Z)((0,R.Q)(t)||[],2)[1],en=(0,z.useMemo)(function(){return null!=_?_:(0,s.Z)({},(0,L.$A)(n,v),w?{seatCount:w}:{})},[_,v,n,w]),et=null==en?void 0:en.id,ei=(0,N.st)({prices:null==en?void 0:en.prices}),er=(0,D.Z)({shouldFetch:!!K}).data,eo=o||en.couponCode,es=Z({couponCode:eo,productName:null==en?void 0:en.name}),ea=(0,A.Sl)({queryParams:{landing_page:(0,I.t)({couponCode:eo,productId:et,vatNumber:E,seatCount:null==en?void 0:en.seatCount,doNotRedirect:!0,asset:Y?t:void 0,existingUserRedirect:ee})},signUpView:es}),ec=(0,U.useRouter)().asPath,ed=(0,z.useCallback)(function(){if(window){var e,n;j.Z.set("referer_page",ec),null===(e=window.NREUM)||void 0===e||null===(n=e.addPageAction)||void 0===n||n.call(e,"UP3-1623 assign loggedOutHandler authRedirectPath to href",(0,a.Z)((0,s.Z)({},window.location||{}),{asPath:ec,authRedirectPath:ea})),window.location.href=ea}},[ec,ea]),eu=g({paymentProfiles:er}),el=(0,z.useCallback)(function(e){var n,t,i={createTime:null==Q?void 0:Q.createTime,impersonatorId:X.impersonatorId,msg:"UP1-2650 Order creation failed",organizationId:null==Q?void 0:Q.organizationId,referrerPath:window.location.pathname,referrerQuery:window.location.search,userId:null==Q?void 0:Q.id,username:null==Q?void 0:Q.username,isLicenseDrawer:q};null===(n=window.NREUM)||void 0===n||null===(t=n.noticeError)||void 0===t||t.call(n,e,i)},[X,Q,q]),ep=O({couponCode:eo}),ef=(0,M.d)(),em=(0,z.useCallback)((0,r.Z)(function(){var e,n,r,o;return(0,d.__generator)(this,function(c){switch(c.label){case 0:if(c.trys.push([0,3,,4]),P({status:"",error:void 0}),J(!0),Y&&u.Tj.includes(eo))throw Error("free trial offer not available in India");if(!er)return[3,2];return e=t?{assets:[{asset:t,selectedAssetSize:(0,m.DW)({assetType:(0,b.Tp)(t),assetSize:i})}]}:{},[4,T({country:W,currency:ei,paymentProfileId:null==eu?void 0:eu.paymentId,orderItems:[(0,a.Z)((0,s.Z)({},e),{product:en,productType:h})],vatNumber:E,couponCode:eo,license:G})];case 1:n=c.sent().data,P({status:l.MR,error:void 0}),J(!1),ep({orderId:n.id}),ef({actionName:"convert - order creation success",customAttributes:{productName:en.name,productType:h,country:W,currency:ei,assetType:(0,b.Tp)(t),assetSize:i,license:G,isLicenseDrawer:q}}),c.label=2;case 2:return[3,4];case 3:return r=c.sent(),P({status:l.cM,error:r}),J(!1),(null==r?void 0:null===(o=r.detail)||void 0===o?void 0:o.toLowerCase())===p.LQ&&x(!0),el(r),[3,4];case 4:return[2]}})}),[P,Y,eo,er,t,i,W,ei,null==eu?void 0:eu.paymentId,en,h,E,G,q,ep,el,x,ef]);return{createOrderHandler:K?em:ed,isCreateOrderInProgress:$,product:en}}},38367:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(81740),r=t(35896),o=t(9009),s=t(3255),a=function(e){var n=e.queryParams;return(0,i.cF)({queryParams:n}).formattedUrl},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.queryParams,t=e.shouldFetch;return(0,s.ZP)(void 0===t||t?a({queryParams:void 0===n?{}:n}):null,function(e){return r.uS.get(e).then(function(e){return(0,o.O)(e.data)})})}}}]);
//# sourceMappingURL=12921-3f96f53873be8574.js.map
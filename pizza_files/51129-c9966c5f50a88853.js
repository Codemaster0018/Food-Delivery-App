"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51129,65257,80710],{68245:function(e,t,n){n.d(t,{e:function(){return o}});var r=n(70865),i=n(38398),o=function(e){var t=e.urlParams,n=e.queryParams,o="/bundle/".concat((void 0===t?{}:t).filename),a=(0,r.Z)({},void 0===n?{}:n);return{url:o,defaultParams:a,formattedUrl:(0,i.format)({pathname:o,query:a})}}},80710:function(e,t,n){n.d(t,{VL:function(){return X}});var r,i=n(87394),o=n(52322),a=n(58435),s=n(7197),c=n(44297),u=n(59979),l=n(47875),d=n(52309),f=n(98788),v=n(47842),p=n(70865),m=n(5163),h=n(81740),g=n(44699),y=n(39232),w=n(32456),_=n(7297),C=n(29292),b=n(86795),S=n(15111),I=n(18027),k=n(12787),Z=n(9823),T=n(776),A=n(35896),x=n(9009),P=n(2784),U=n(3255),z=n(52494),D=function(e){var t=e.queryParams;return(0,h.nS)({queryParams:t}).formattedUrl},j=function(e){var t=e.assetId,n=e.asset,r=n.id,i=n.tier,o=n.src,a=n.aspect,s=n.width,c=n.height;return{metadata:{notes:{media_id:t,alpha_num_id:r,rex_id:r,media_type:y.gP,tier:void 0===i?10:i,media:{aspect:a,width:s,height:c,url:o}}}}},O=(r=(0,f.Z)(function(e){var t,n,r,i,o,a,s,u,l,d,f,v,p;return(0,m.__generator)(this,function(m){switch(m.label){case 0:if(t=e.isRexEditorial,n=e.collectionId,r=e.verificationCode,i=e.setAsCover,o=e.firstAsset,a=e.collectionType,(u=(0,c.A8)(o))!==y.VT)return[2];return l={id:n,verificationCode:r,collectionType:a},d=(0,h.Yz)({queryParams:l}).formattedUrl,[4,A.uS.get(d).then(function(e){return(0,x.O)(e.data)||{}})];case 1:if(null==(f=m.sent())?void 0:null===(s=f.coverItem)||void 0===s?void 0:s.id)return[3,3];return v=(0,c.OP)({asset:o,isRexEditorial:t}),p=(0,b.Q)({collectionId:n,mappedAssetType:u,assetId:v}),[4,i({collection:{id:n},mediaItem:{id:p}})];case 2:m.sent(),m.label=3;case 3:return[2]}})}),function(e){return r.apply(this,arguments)}),N=function(){var e,t=(0,i.Z)((0,P.useState)({status:"",error:void 0}),2),n=t[0],r=t[1],o=(0,i.Z)((0,P.useState)(""),2),a=o[0],s=o[1],u=(0,i.Z)((0,P.useState)(""),2),l=u[0],d=u[1],x=(0,k.J)(),N=(0,z.w)().setAsCover,R=(0,Z.D)().isBrandSstk,V=(0,T.yh)().analytics,E=(0,C.UM)(V),L=(0,U.kY)().mutate;return{add:(0,P.useCallback)((e=(0,f.Z)(function(e){var t,n,i,o,a,u,l,f,C,k,Z,T,P,U,z,V,M,q,F,B,J,H,X;return(0,m.__generator)(this,function(m){switch(m.label){case 0:t=e.assets,n=e.assetType,i=e.gridItems,o=e.groupedOptions,a=e.id,u=e.title,l=e.verificationCode,f=e.pageSection,C=e.listId,k=(0,S.wZ)({assetType:n,isBrandSstk:R}),m.label=1;case 1:if(m.trys.push([1,6,7,9]),r({status:g.MR,error:void 0}),Z=(0,c.Xo)(n),T=a,P=l,o&&o.length&&(U=o.find(function(e){return e.title===u}))&&(T=U.id,P=U.verificationCode),T)return[3,3];return z=(0,h.A6)().formattedUrl,V={data:{attributes:{title:u,collectionType:k,isPublic:!1},type:w.Ul}},[4,A.uS.post(z,V)];case 2:q=(M=m.sent().data).id,F=M.attributes.verificationCode,T=q,P=F,m.label=3;case 3:return B={data:t.map(function(e){var t=(0,c.OP)({asset:e,isRexEditorial:Z}),n=(0,c.A8)(e);return(0,p.Z)({type:w.A8,id:(0,b.Q)({collectionId:T,mappedAssetType:n,assetId:t})},n===y.VT&&j({assetId:t,asset:e}))})},J=(0,h.mp)({urlParams:{id:T},queryParams:{isRexEditorial:Z}}).formattedUrl,H=(0,I.y)(E),[4,A.uS.post(J,B,H?{headers:(0,v.Z)({},_.as,H)}:void 0)];case 4:return m.sent(),[4,O({isRexEditorial:Z,collectionId:T,verificationCode:P,setAsCover:N,firstAsset:t[0],collectionType:k})];case 5:return m.sent(),x({collectionId:T,collectionName:u,gridItems:i,assets:t,pageSection:f,listId:C}),s(T),d(P),[3,9];case 6:return X=m.sent(),r({status:g.cM,error:X}),[3,9];case 7:return[4,L(D({queryParams:{"filter[type]":k}}))];case 8:return m.sent(),[7];case 9:return[2]}})}),function(t){return e.apply(this,arguments)}),[R,E,N,x,L]),collectionId:a,setStatus:r,status:n,verificationCode:l}},R=n(43110),V=n(92405),E=n(25237),L=n.n(E),M=n(26297),q=L()(function(){return Promise.all([n.e(31373),n.e(27310),n.e(81503),n.e(88629),n.e(28903),n.e(24394),n.e(33315),n.e(32826),n.e(79637),n.e(63241),n.e(40695)]).then(n.bind(n,92805)).then(function(e){return e.CollectionModal})},{loadableGenerated:{webpack:function(){return[92805]}},ssr:!1}),F=function(e){var t=e.isOpen,n=(0,M.Z)(e,["isOpen"]);return(0,d.B)(t)&&(0,o.jsx)(q,(0,p.Z)({isOpen:t},n))},B=L()(function(){return n.e(25095).then(n.bind(n,25095)).then(function(e){return e.LazyAddToCollectionModal})},{loadableGenerated:{webpack:function(){return[25095]}},ssr:!1}),J=L()(function(){return n.e(8880).then(n.bind(n,8880)).then(function(e){return e.Snackbar})},{loadableGenerated:{webpack:function(){return[8880]}},ssr:!1}),H=function(e){var t=e.assets,n=e.assetType,r=e.collectionId,i=e.collectionTitle,s=e.gridItems,c=e.isDialogActive,u=e.isSnackBarOpen,l=e.onAddToCollections,f=e.onAlertSnackbarClose,v=e.onAddToCollectionsComplete,p=e.redirectToCDPAction,m=e.setIsDialogActive,h=e.showCopyToModalTitle,g=e.status,y=e.verificationCode,w=e.pageSection,_=(0,V.p)(a.vb),C=(0,V.p)(a.pG),b=(0,d.B)(t),S=(0,P.useCallback)(function(){return m(!1)},[m]);return b?_||C?(0,o.jsx)(B,{onClose:S,isOpen:c,items:t,onAddToCollectionsComplete:v,pageSection:w}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(F,{assets:t,assetType:n,collectionId:r,gridItems:s,isOpen:c,onAddToCollections:l,setIsDialogActive:m,showCopyToModalTitle:h,pageSection:w}),(0,o.jsx)(J,{assetType:n,collectionId:r,collectionTitle:i,isOpen:u,onAlertSnackbarClose:f,redirectToCDPAction:p,status:g,verificationCode:y})]}):null};H.defaultProps={assetType:"",assets:null,gridItems:null,onAddToCollectionsComplete:void 0,redirectToCDPAction:{}};var X=function(e){var t=e.initialAssetType,n=(0,i.Z)((0,P.useState)(!1),2),r=n[0],o=n[1],a=(0,i.Z)((0,P.useState)(!1),2),d=a[0],f=a[1],v=(0,i.Z)((0,P.useState)(!1),2),p=v[0],m=v[1],h=(0,i.Z)((0,P.useState)(""),2),g=h[0],y=h[1],w=(0,i.Z)((0,P.useState)(null),2),_=w[0],C=w[1],b=(0,i.Z)((0,P.useState)(t),2),S=b[0],I=b[1],k=(0,i.Z)((0,P.useState)(null),2),Z=k[0],T=k[1],A=(0,i.Z)((0,P.useState)(null),2),x=A[0],U=A[1],z=(0,i.Z)((0,P.useState)(null),2),D=z[0],j=z[1],O=(0,R.B)(),V=(0,u.cM)(),E=(0,l.L)(),L=(0,i.Z)((0,P.useState)({shouldHandleRedirect:!1,redirectToCollectionDetailsPage:E}),2),M=L[0],q=L[1],F=N(),B=F.add,J=F.status,X=F.collectionId,K=F.verificationCode;(0,P.useEffect)(function(){return function(){return C(null)}},[]),(0,P.useEffect)(function(){return function(){return I("")}},[]);var Y=(0,P.useCallback)(function(e){var t=e.formattedAssets,n=e.gridItems,r=e.isCopyToCollection,i=e.mappedAssetType,a=e.redirectToCollectionDetailsPage,s=e.pageSection,c=e.listId;I(i),C(t),U(s),j(c),r&&m(!0),n&&T(n),a&&q({shouldHandleRedirect:!0,redirectToCollectionDetailsPage:a}),o(!0)},[]);return(0,P.useEffect)(function(){(0,s.DZ)({showAddToCollectionModal:Y,isLoggedInUser:O})},[O,Y]),{addToCollectionViewsProps:(0,P.useMemo)(function(){return{assets:_,pageSection:x,assetType:S,collectionId:X,collectionTitle:g,gridItems:Z,isDialogActive:r,isSnackBarOpen:d,onAddToCollections:function(e){var t=e.id,n=e.title,r=e.verificationCode,i=e.groupedOptions,a=e.pageSection;return y(n),o(!1),f(!0),B({assetType:S,assets:_,gridItems:Z,groupedOptions:i,id:t,title:n,verificationCode:r,pageSection:a||x,listId:D})},onAlertSnackbarClose:function(){return f(!1)},redirectToCDPAction:M,setIsDialogActive:o,showCopyToModalTitle:p,status:J,verificationCode:K}},[_,Z,B,D,x,S,X,g,r,d,M,p,J,K]),addToCollectionViewsHandler:(0,P.useCallback)(function(e){var t=e.assets,n=e.gridItems,r=e.isCopyToCollection,i=e.redirectToCollectionDetailsPage,o=e.pageSection,a=e.listId;if(O){var u=[].concat(t);Y({formattedAssets:u,gridItems:n,isCopyToCollection:void 0!==r&&r,mappedAssetType:(0,c.A8)(u[0]),redirectToCollectionDetailsPage:i,pageSection:o,listId:a})}else(0,s.JO)({assets:t,gridItems:n,signUpPath:V})},[O,Y,V]),AddToCollectionViews:H}}},6096:function(e,t,n){n.d(t,{b:function(){return m}});var r=n(98788),i=n(5163),o=n(52322),a=n(67550),s=n(59312),c=n(59481),u=n(44699),l=n(42405),d=n(65257),f=n(34273),v=n.n(f),p=n(2784),m=function(e){var t=e.classesProps,n=e.clickAnalyticsLabel,f=e.errorMessage,m=e.successMessage,h=e.text,g=void 0===h?"":h,y=e.tooltip,w=(0,l.D)().enqueueSnackbar,_=(0,p.useCallback)((0,r.Z)(function(){var e;return(0,i.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,v()(g)];case 1:return t.sent(),w({message:m,alertSeverity:u.MR,isDismissible:!0}),[3,3];case 2:return(e=t.sent())&&w({message:f,alertSeverity:u.cM,error:e,isDismissible:!0}),[3,3];case 3:return[2]}})}),[w,f,m,g]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.Z,{display:"inline-flex",flexDirection:"column",justifyContent:"center",textAlign:"center",mx:1,children:(0,o.jsx)(s.l,{title:y,placement:"top",children:(0,o.jsx)("span",{children:(0,o.jsx)(c.h,{"aria-label":y,className:(void 0===t?{}:t).copyToClipboard,clickTrack:void 0===n?"":n,disabled:!g,onClick:function(){return _()},size:"small",children:(0,o.jsx)(d.Copy,{fontSize:"small"})})})})})})}},44417:function(e,t,n){n.d(t,{Y:function(){return d}});var r=n(87394),i=n(52322),o=n(44699),a=n(86406),s=n(25237),c=n.n(s),u=n(2784),l=c()(function(){return Promise.all([n.e(31373),n.e(27310),n.e(80246),n.e(60102)]).then(n.bind(n,83725)).then(function(e){return e.Snackbar})},{loadableGenerated:{webpack:function(){return[83725]}},ssr:!1}),d=function(e){var t=e.alertAction,n=e.alertSeverity,s=void 0===n?o.H_:n,c=e.error,d=e.handleSnackbarClose,f=void 0===d?a.Z:d,v=e.isOpen,p=e.message,m=void 0===p?"":p,h=e.onSnackbarExited,g=void 0===h?a.Z:h,y=e.isDismissible,w=(0,r.Z)((0,u.useState)(!1),2),_=w[0],C=w[1];return v||_?(0,i.jsx)(l,{alertAction:void 0===t?{}:t,alertSeverity:s,error:void 0===c?void 0:c,handleSnackbarClose:f,isOpen:v,message:m,onSnackbarExited:g,setEntered:C,isDismissible:void 0===y||y},m):null}},19522:function(e,t,n){n.d(t,{KQ:function(){return o},LX:function(){return s},Qs:function(){return i},_3:function(){return r},_Y:function(){return u},iH:function(){return c},yI:function(){return a}});var r="jpg",i="eps",o="JPEG",a="png",s="tiff",c="mp3",u="wav"},80353:function(e,t,n){n.d(t,{Dq:function(){return s},Hn:function(){return c},Uw:function(){return i},ad:function(){return a},qy:function(){return r},vP:function(){return o}});var r="organization_admin",i="editor",o="owner",a="viewer",s="Remove",c="none"},53044:function(e,t,n){n.d(t,{k:function(){return r}});var r=(0,n(2784).createContext)(null)},11164:function(e,t,n){n.d(t,{m:function(){return o}});var r=n(2784),i=n(53044),o=function(){return(0,r.useContext)(i.k)||{}}},7197:function(e,t,n){n.d(t,{DZ:function(){return s},JO:function(){return a}});var r=n(44297),i="add_to_collection_asset",o="add_to_collection_grid_items",a=function(e){var t=e.assets,n=e.gridItems,r=e.signUpPath;window&&(t&&window.sessionStorage.setItem(i,JSON.stringify(t)),n&&window.sessionStorage.setItem(o,JSON.stringify(n)),window.location=r)},s=function(e){var t=e.showAddToCollectionModal,n=e.isLoggedInUser;if(void 0!==n){if(n){var a=window.sessionStorage.getItem(i),s=window.sessionStorage.getItem(o),c=function(e){return e&&"undefined"!==e};if(c(a)&&c(s)){var u=JSON.parse(a),l=JSON.parse(s),d=[].concat(u);t({formattedAssets:d,gridItems:l,mappedAssetType:(0,r.A8)(d[0]),isCopyToCollection:!1,redirectToCollectionDetailsPage:!1})}}window.sessionStorage.removeItem(i),window.sessionStorage.removeItem(o)}}},15111:function(e,t,n){n.d(t,{w4:function(){return _},wZ:function(){return k},U0:function(){return S},Nb:function(){return m},fg:function(){return h},E4:function(){return I},Ak:function(){return g},$m:function(){return b},WP:function(){return C}});var r,i=n(70865),o=n(96670),a=n(87394),s=n(47842),c=n(39232),u=n(32456),l=(r={},(0,s.Z)(r,c.k4,u.Zk),(0,s.Z)(r,c.Y_,u.Zk),(0,s.Z)(r,c.xF,u.Zi),(0,s.Z)(r,c.pX,u.K2),(0,s.Z)(r,c.FM,u.K2),r),d=n(80353),f=n(29292),v=n(37546),p=n(44297),m=function(e){return"Untitled"===e},h=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).items;return e&&0===e.length},g=function(e){var t=!(null==e?void 0:e.role)&&!(null==e?void 0:e.isPublic);return(null==e?void 0:e.role)===d.ad||t},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=(0,a.Z)((void 0===t?"":t).split("-"),3),r=n[1];return{id:n[2],type:r===c.j0?c.xF:r,aspect:1,src:"",previewImageUrl:""}},w=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.metadata,o=void 0===r?{}:r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o.tracking){try{e=(0,f.Be)({trackingId:null===(t=JSON.parse(o.tracking))||void 0===t?void 0:t.search})}catch(t){e=(0,f.Be)({trackingId:o.tracking})}return(0,i.Z)({search_context:e},a)}return a},_=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return(null===(e=t.mediaItem)||void 0===e?void 0:e.id)?(0,v.Sw)(t.mediaItem):n&&y(t)},C=function(e,t){return e?e.reduce(function(e,n){var r=_(n,t);return e.collectionItems.push((0,o.Z)((0,i.Z)({},n),{mediaItem:(0,o.Z)((0,i.Z)({},r),{meta:w(n,null==n?void 0:n.meta)})})),r&&e.mediaItems.push((0,o.Z)((0,i.Z)({},r),{meta:w(n,null==r?void 0:r.meta)})),e},{collectionItems:[],mediaItems:[]}):{collectionItems:e}},b=function(e){var t=e.assetType,n=e.t,r=e.totalItemCount,i=t===c.gP,o=i?"ent:collection_editorial_total_single":"feature-collections:number_".concat(c.d_[t],"_single"),a=i?"ent:collection_editorial_total_plural":"feature-collections:number_".concat(c.d_[t],"_plural");return n(1===r?o:a,{NUM_TRACKS:r})},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return!!e.find(function(e){return e.type===u.A8})},I=function(e){var t=e.assets,n=void 0===t?[]:t;switch(e.assetType){case c.xF:case c.j0:return n.some(function(e){return(0,p.O)({track:e})});case c.k4:return n.some(function(e){return(0,p.PD)(e)});default:return!1}},k=function(e){var t=e.assetType;return e.isBrandSstk?l[t]:u.sE[t]}},83451:function(e,t,n){n.d(t,{Oo:function(){return z},rB:function(){return I}});var r,i,o,a,s=n(98788),c=n(70865),u=n(5163),l=n(81740),d=n(19522),f=n(77426),v=n(39232),p=n(85330),m=n(84833),h=n(94054),g=n(35896),y=n(9009),w=n(81232),_=n(37546),C=n(44297),b=n(18411),S=n(61765),I=function(e){var t,n,r=e.asset;return(null==r?void 0:null===(t=r.metadata)||void 0===t?void 0:null===(n=t.cart)||void 0===n?void 0:n.sizes)||r.sizes},k=(r=(0,s.Z)(function(e){var t,n,r,i;return(0,u.__generator)(this,function(o){switch(o.label){case 0:if(!((null==(t=e.asset)?void 0:null===(n=t.metadata)||void 0===n?void 0:n.cart)&&!t.metadata.cart.sizes))return[3,2];return r=(0,C.so)(t),i={id:t.id},r&&(i.channel=p.$S,i.content_provider=m._e),[4,g.uS.get((0,l.om)({queryParams:i}).formattedUrl).then(function(e){var t=e.data;return(0,y.O)(t)})];case 1:return[2,o.sent().sizes];case 2:return[2,I({asset:t})]}})}),function(e){return r.apply(this,arguments)}),Z=function(e){var t,n,r,i,o,a=e.selectedAssetSize,s=e.asset,c=I({asset:s}),u=(0,C.EK)(s);if(!c&&(null==s?void 0:null===(t=s.metadata)||void 0===t?void 0:null===(n=t.cart)||void 0===n?void 0:n.size)&&s.metadata.cart.format)return{content_size:u?f.vD:s.metadata.cart.size,content_format:s.metadata.cart.format};var l=Object.values(c);return o=s.licenseAsJpeg||(null===(r=s.metadata)||void 0===r?void 0:null===(i=r.cart)||void 0===i?void 0:i.licenseAsJpeg)?l.find(function(e){return e.format===d._3}):b.Bg[a]?(0,_.AR)({sizes:l,compSizeImage:a}):(0,_.Nf)(l),{content_size:u?f.vD:b.nd[(0,w.z)(o.name)].downloadName,content_format:o.format}},T=function(e){var t=e.map[e.licenseName];return t===f.T0?f.qY:t},A=function(e){var t=e.asset,n=e.licenseName,r=e.isVideoComp,i=e.selectedAssetSize,o=e.sizes,a=(0,C.EK)(t),s=(0,C.cL)(t),c=(0,C.$Q)({sizes:Object.values(o)});return!r&&c?T({map:b.Q1,licenseName:n}):r||n===h.f12||a||s?!i||a||s?(0,_.mF)(o):b.kR[i]:T({map:b.kR,licenseName:n})},x=(i=(0,s.Z)(function(e){var t,n,r,i,o,a,s,c;return(0,u.__generator)(this,function(u){switch(u.label){case 0:return t=e.asset,n=e.licenseName,r=e.isVideoComp,i=e.selectedAssetSize,[4,k({asset:t})];case 1:return a=A({asset:t,licenseName:n,isVideoComp:r,selectedAssetSize:i,sizes:o=u.sent()}),s=(0,C.EK)(t),c=Object.values(o).find(function(e){var t=e.resolution;return b.wb[null==t?void 0:t.toLowerCase()]===a}),[2,{content_size:s?f.vD:a,content_format:null==c?void 0:c.format}]}})}),function(e){return i.apply(this,arguments)}),P=function(e){var t,n=e.format;switch(e.selectedAssetSize){case"stereo":t=f.cs;break;case"5.1":t=f.gp;break;default:t=f.yy}return{content_size:t,content_format:n===d.iH?d.iH:d._Y}},U=(o=(0,s.Z)(function(e){var t,n,r,i,o,a;return(0,u.__generator)(this,function(s){switch(s.label){case 0:switch(t=e.asset,n=e.licenseName,r=e.isVideoComp,i=e.selectedAssetSize,o=e.format,a=(0,S.qw)({asset:t}),(0,C.so)(t)&&(a=v.A7),a){case v.pX:case v.A7:return[3,1];case v.j0:return[3,3];case v.tn:return[3,4]}return[3,5];case 1:return[4,x({asset:t,licenseName:n,isVideoComp:r,selectedAssetSize:i})];case 2:return[2,s.sent()];case 3:return[2,{content_size:f.Ng,content_format:v.j0}];case 4:return[2,P({selectedAssetSize:i,format:o})];case 5:return[2,Z({selectedAssetSize:i,asset:t})];case 6:return[2]}})}),function(e){return o.apply(this,arguments)}),z=(a=(0,s.Z)(function(e){var t,n,r,i,o,a,s,l;return(0,u.__generator)(this,function(u){switch(u.label){case 0:return t=e.licenseName,n=e.selectedAssetSize,r=e.asset,i=e.isVideoComp,o=e.format,a=(0,S.qw)({asset:r}),l=[{content_id:s=r.id.toString(),content_type:(0,S.JD)({assetType:a,assetId:s})}],[4,U({asset:r,licenseName:t,isVideoComp:i,selectedAssetSize:n,format:o})];case 1:return[2,c.Z.apply(void 0,l.concat([u.sent()]))]}})}),function(e){return a.apply(this,arguments)})},61765:function(e,t,n){n.d(t,{Fy:function(){return u},JD:function(){return a},Js:function(){return l},qw:function(){return s},rw:function(){return c}});var r=n(39232),i=n(94054),o=n(44297),a=function(e){var t=e.assetId,n=e.assetType;if((0,o.EK)({id:t}))return r.gP;switch(n){case r.k4:case r.Y_:case r.ox:case r.w5:return r.pV;case r.FM:return r.pX;case r.xF:case r.jr:return r.j0;case r.tn:return r.tn;default:return n}},s=function(e){var t,n=e.asset;if(null===(t=n.image)||void 0===t?void 0:t.isVector)return r.ox;if((0,o.EK)(n))return r.gP;var i=n.imageType||n.itemType||n.type;switch(i){case r.e3:case r.X2:case r.Y_:return r.k4;case r.FM:return r.pX;case r.jr:return r.j0;case r.tn:return r.tn;default:return i}},c=function(e){var t=e.asset;if((0,o.N3)(t))return r.gP;if((0,o.so)(t))return r.cF;var n=t.imageType||t.itemType||t.type;switch(n){case r.ox:case r.pV:case r.e3:case r.X2:case r.Y_:return r.k4;case r.FM:return r.pX;case r.jr:return r.j0;case r.tn:return r.tn;default:return n}},u=function(e){var t=e.asset;if((0,o.N3)(t))return r.nX;if((0,o.so)(t))return r.A7;var n=t.imageType||t.itemType||t.type;switch(n){case r.ox:case r.pV:case r.e3:case r.X2:case r.Y_:return r.k4;case r.FM:return r.pX;case r.jr:case r.xF:return r.j0;case r.tn:return r.tn;default:return n}},l=function(e){var t=u({asset:e.mediaItem});return e.licenseName===i._rW[t]}},63256:function(e,t,n){n.d(t,{KW:function(){return v},VC:function(){return p},fp:function(){return l},lR:function(){return d},ok:function(){return m},qG:function(){return f},r8:function(){return h},vG:function(){return u}});var r=n(87394),i=n(77426),o=n(39232),a=n(31683),s=n(44297),c=[o.pX],u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:480;if(!a.n5||"string"!=typeof e||e.includes("ip=x".concat(t)))return e;try{var n=new URL(e);return n.searchParams.set("ip","x".concat(t)),n.href}catch(t){return e}},l=function(e){var t,n,r;return(null==e?void 0:e.mediaItem)?{previewImageUrl:null===(n=e.mediaItem)||void 0===n?void 0:n.previewImageUrl,previewVideoUrls:null===(r=e.mediaItem)||void 0===r?void 0:r.previewVideoUrls}:{previewImageUrl:(null==e?void 0:e.thumbImageUrl)||(null==e?void 0:null===(t=e.image)||void 0===t?void 0:t.url)||(null==e?void 0:e.previewImageUrl),previewVideoUrls:null==e?void 0:e.previewVideoUrls}},d=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:480;return(0,s.Am)(t)?u(l(t).previewImageUrl,n):t.src||(null===(e=t.image)||void 0===e?void 0:e.url)},f=function(e){return e.assetType===o.pX?"mp4":null},v=function(e){var t=e.asset;return c.includes((0,s.Tp)(t))&&!(0,s.so)(t)},p=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,s.EK)(n);if((0,s.vh)(null==n?void 0:n.type))return(null==n?void 0:n.width)>1e3?"".concat(null==n?void 0:n.previewUrls[0],"?width=1000"):null==n?void 0:n.previewUrls[0];var o=r?i.bm:i.RA;return null==n?void 0:null===(e=n.displays)||void 0===e?void 0:null===(t=e[o])||void 0===t?void 0:t.src},m=function(){var e,t,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(0,s.Tp)(r);return a===o.k4||a===o.zo||a===o.Nk?(null==r?void 0:null===(e=r.displays)||void 0===e?void 0:null===(t=e[i.bm])||void 0===t?void 0:t.src)||(null==r?void 0:r.src):a===o.bz?null==r?void 0:null===(n=r.imageVariants)||void 0===n?void 0:n["1500"]:a===o.xF||a===o.tn?null==r?void 0:r.previewMp3:a===o.hv?null==r?void 0:r.previewUrls[0]:null},h=function(){var e,t,n,i,o,a,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length>1&&void 0!==arguments[1]&&arguments[1],l={width:null!==(i=null!==(n=c.width)&&void 0!==n?n:null===(e=c.mediaItem)||void 0===e?void 0:e.width)&&void 0!==i?i:0,height:null!==(a=null!==(o=c.height)&&void 0!==o?o:null===(t=c.mediaItem)||void 0===t?void 0:t.height)&&void 0!==a?a:0};if((0,s.Am)(c)&&(!l.width||!l.height)&&c.sizes){var d=Object.keys(c.sizes).find(function(e){return c.sizes[e]});l.width=d&&c.sizes[d].width||0,l.height=d&&c.sizes[d].height||0}if(u&&(!l.width||!l.height)&&c.aspectRatioCommon){var f=(0,r.Z)(c.aspectRatioCommon.split(":"),2),v=f[0],p=f[1];l.width=Number(v),l.height=Number(p)}return l}},18027:function(e,t,n){n.d(t,{y:function(){return r}});var r=function(e){return[e.subPage,e.pageType].join("-")}},12787:function(e,t,n){n.d(t,{J:function(){return s}});var r=n(29292),i=n(776),o=n(2784),a=n(68533),s=function(){var e=(0,i.yh)().analytics,t=(0,a.Y)().getSearchContext;return(0,o.useCallback)(function(n){var i=n.collectionId,o=n.collectionName,a=n.gridItems,s=n.assets,c=n.pageSection,u=n.listId;e.productAddedToWishlist({products:s.map(function(e){return(0,r.bR)({asset:e,getSearchContext:t,gridItems:a,pageSection:c})}),wishlist_id:i,wishlist_name:o,list_id:null!=u?u:""})},[e,t])}},42005:function(e,t,n){n.d(t,{w:function(){return d}});var r=n(70865),i=n(96670),o=n(29292),a=n(44297),s=n(776),c=n(5632),u=n(2784),l=n(68533),d=function(){var e=(0,s.yh)().analytics,t=(0,s.wU)(),n=(0,c.useRouter)().asPath,d=(0,l.Y)(),f=d.setSearchContext,v=d.getSearchContext;return(0,u.useCallback)(function(s){var c,u=s.asset,l=s.gridItems,d=s.eventLabel,p=s.listId,m=void 0===p?"":p;if(u.link!==n){f({trackingId:(0,o.lt)({asset:u}),term:null===(c=u.meta)||void 0===c?void 0:c.query});var h=(0,o.qI)(u);e.productClicked((0,i.Z)((0,r.Z)({asset_type:(0,a.ZZ)(u),category:(0,o.CP)(u),channels:(0,o.Ky)(u),name:(0,o.LJ)(u),product_id:h,sku:h},t?{pageSection:t,eventLabel:void 0===d?"":d}:{},l?(0,o.mq)({gridItems:l,item:u}):{},m?{list_id:m}:{}),{search_context:v(u)}))}},[e,n,v,t,f])}},30337:function(e,t,n){n.d(t,{U:function(){return u}});var r=n(70865),i=n(66358),o=n(29510),a=n(29292),s=n(776),c=n(2784),u=function(){var e=(0,s.yh)().analytics,t=(0,o.PE)().locale;return(0,c.useCallback)(function(n){var o=n.assets,s=void 0===o?[]:o,c=n.audioContext,u=n.eventLabel,l=n.licenseId,d=n.isRedownload,f=n.isQuickDownload,v=n.isPaid,p=n.isComp,m=n.pageSection,h=n.listId,g=u||p&&i.Vp1||void 0;e.productDownloaded((0,r.Z)({products:s.map(function(e){return(0,a.bR)({asset:e,shouldGetSearchContextFromAsset:!0,licenseId:l,pageSection:m})}),download_context:(0,a.OB)({asset:s[0],isComp:p,isPaid:v,isQuickDownload:f,isRedownload:d,language:t}),eventLabel:g,list_id:null!=h?h:""},c&&{audio_context:(0,r.Z)({},c)}))},[e,t])}},80578:function(e,t,n){n.d(t,{T:function(){return u}});var r=n(70865),i=n(29292),o=n(44297),a=n(776),s=n(2784),c=n(68533),u=function(){var e=(0,a.yh)().analytics,t=(0,c.Y)().getSearchContext;return(0,s.useCallback)(function(n){var a=n.asset,s=n.eventLabel,c=n.gridItems,u=n.isPreview,l=n.listId,d=n.pageSection,f=(0,i.qI)(a),v=(0,i.f_)(a),p=(0,i.Rz)(a);e.productViewed((0,r.Z)({eventLabel:s,list_id:null!=l?l:"",page_section:d,asset_type:(0,o.ZZ)(a),category:(0,i.CP)(a),channels:(0,i.Ky)(a),is_preview:u,name:(0,i.LJ)(a),product_id:f,search_context:t(a),sku:f},c&&(null==c?void 0:c.length)>1?(0,i.mq)({gridItems:c,item:a}):{},v&&{brand:v},p&&{product_line:p}))},[e,t])}},92470:function(e,t,n){n.d(t,{z:function(){return o}});var r=n(2784),i=n(80578),o=function(e){var t=e.asset,n=e.showErrorPageContent,o=(0,i.T)();(0,r.useEffect)(function(){!n&&t&&o({asset:t,isPreview:!1})},[t,o,n])}},68533:function(e,t,n){n.d(t,{Y:function(){return u}});var r=n(58272),i=n(29292),o=n(9823),a=n(3661),s=n(21805),c=n(2784),u=function(){var e=(0,o.D)().isBrandSstk;return{setSearchContext:(0,c.useCallback)(function(t){var n=t.trackingId,i=t.term;if(n){if((0,a.H7)()===n)return;(0,a.tc)(n),(0,a.Cl)(i),e&&s.Z.set(r.d6,n,{expires:r.Dy,sameSite:"strict"})}},[e]),getSearchContext:(0,c.useCallback)(function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.meta,r=(0,i.lt)({asset:t})||(0,a.H7)();return(0,i.Be)({trackingId:(null==r?void 0:r.uuid)||r,searchTerm:(null==n?void 0:n.query)||(null==n?void 0:null===(e=n.search_context)||void 0===e?void 0:e.search_term)||(0,a.He)()})},[]),getSearchContextFromAssets:(0,c.useCallback)(function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=(null==t?void 0:t[0])||t,r=n.meta,o=(0,i.lt)({asset:n})||(0,a.H7)();return(0,i.Be)({trackingId:o,searchTerm:(null==r?void 0:r.query)||(null==r?void 0:null===(e=r.search_context)||void 0===e?void 0:e.search_term)||(0,a.He)()})},[])}}},47875:function(e,t,n){n.d(t,{L:function(){return s}});var r=n(50930),i=n(68445),o=n(5632),a=n(2784),s=function(){var e=(0,o.useRouter)();return(0,a.useCallback)(function(t){var n=t.assetType,o=t.collectionId,a=t.verificationCode,s=(0,i.B)({assetType:n,id:o,verificationCode:a});e.push.apply(e,(0,r.Z)(s))},[e])}},56579:function(e,t,n){n.d(t,{N:function(){return C}});var r=n(98788),i=n(47842),o=n(87394),a=n(5163),s=n(81740),c=n(39232),u=n(29858),l=n(44297),d=n(63256),f=n(19819),v=n(35896),p=n(17411),m=RegExp("\\s","g"),h="preview",g=function(e){var t=e.id,n=e.title;return"".concat(t).concat("_").concat(n.replace(m,"-").toLowerCase()).concat("_").concat(h)},y=function(e,t){var n=e.id,r=e.title;return"".concat(n).concat("_").concat(r.replace(m,"-").toLowerCase()).concat("_").concat("short").concat(t).concat("_").concat(h)},w=n(31702),_=n(2784),C=function(){var e,t,n,m,h,C=(0,o.Z)((0,_.useState)(null),2),b=C[0],S=C[1],I=(0,o.Z)((0,_.useState)(!1),2),k=I[0],Z=I[1],T=(0,o.Z)((0,_.useState)(null),2),A=T[0],x=T[1],P=(0,_.useCallback)((e=(0,r.Z)(function(e){var t,n,r,i;return(0,a.__generator)(this,function(o){switch(o.label){case 0:t=e.asset,n=(0,l.Tp)(t),r={data:[{media_id:t.id,media_type:n,media_size:"preview",media_format:(0,d.qG)({assetType:n})}]},o.label=1;case 1:return o.trys.push([1,3,4,5]),Z(!0),[4,v.uS.post((0,s.u8)().formattedUrl,r)];case 2:return i=o.sent().data.data[0].attributes.url,[3,5];case 3:return S(o.sent()),[3,5];case 4:return Z(!1),[7];case 5:return[2,i]}})}),function(t){return e.apply(this,arguments)}),[]),U=(0,_.useCallback)((t=(0,r.Z)(function(e){var t;return(0,a.__generator)(this,function(n){switch(n.label){case 0:return[4,P({asset:e})];case 1:return(t=n.sent())&&(0,w.l_)(t),[2]}})}),function(e){return t.apply(this,arguments)}),[P]),z=(0,_.useCallback)((n=(0,r.Z)(function(e){var t;return(0,a.__generator)(this,function(n){switch(n.label){case 0:return t=g(e),Z(!0),[4,(0,p.S)((0,d.ok)(e),t)];case 1:return n.sent(),Z(!1),[2]}})}),function(e){return n.apply(this,arguments)}),[]),D=(0,_.useMemo)(function(){var e;return e={},(0,i.Z)(e,c.k4,function(e){return(0,p.S)((0,d.ok)(e))}),(0,i.Z)(e,c.xF,z),(0,i.Z)(e,c.Xy,function(e){return(0,f.A_)((0,d.ok)(e),{target:"_blank"})}),(0,i.Z)(e,c.pX,U),e},[z,U]);return{triggerDownloadPreview:(m=(0,r.Z)(function(e){var t,n;return(0,a.__generator)(this,function(r){return t=e.asset,[2,(0,l.EK)(t)?D[c.Xy](t):null===(n=D[(0,l.Tp)(t)])||void 0===n?void 0:n.call(D,t)]})}),function(e){return m.apply(this,arguments)}),triggerDownloadShortsPreview:(h=(0,r.Z)(function(e){var t,n,r,i,o,s,c,l;return(0,a.__generator)(this,function(a){switch(a.label){case 0:return t=e.asset,n=e.size,o=u.wZ.indexOf(n),c=(null!==(s=null==t?void 0:null===(r=t.trackAssets)||void 0===r?void 0:null===(i=r.shorts)||void 0===i?void 0:i[o])&&void 0!==s?s:{}).externalUrl,l=y(t,n),x(n),[4,(0,p.S)(c.replace("http://","https://"),l)];case 1:return a.sent(),x(null),[2]}})}),function(e){return h.apply(this,arguments)}),isDownloading:k,shortDownloading:A,error:b}}},52494:function(e,t,n){n.d(t,{w:function(){return d}});var r=n(98788),i=n(87394),o=n(5163),a=n(81740),s=n(44699),c=n(32456),u=n(35896),l=n(2784),d=function(){var e,t=(0,i.Z)((0,l.useState)({status:"",error:void 0}),2),n=t[0],d=t[1],f=(0,l.useCallback)((e=(0,r.Z)(function(e){var t,n,r,i,l;return(0,o.__generator)(this,function(o){switch(o.label){case 0:t=e.collection,n=e.mediaItem,r=(0,a.df)({urlParams:{id:t.id}}).formattedUrl,i={data:{id:t.id,relationships:{"cover-item":{data:{id:"".concat(n.id),type:c.A8}}},type:c.Ul}},o.label=1;case 1:return o.trys.push([1,3,,4]),d({status:s.MR,error:void 0}),[4,u.uS.patch(r,i)];case 2:return o.sent(),[3,4];case 3:return l=o.sent(),d({status:s.cM,error:l}),[3,4];case 4:return[2]}})}),function(t){return e.apply(this,arguments)}),[]);return{status:n,setStatus:d,setAsCover:f}}},19819:function(e,t,n){n.d(t,{A_:function(){return b},QH:function(){return k},VM:function(){return T},Zc:function(){return x},mJ:function(){return I},oe:function(){return A},uG:function(){return S}});var r,i,o,a=n(98788),s=n(70865),c=n(96670),u=n(50930),l=n(5163),d=n(68245),f=n(81740),v=n(39232),p=n(85330),m=n(94054),h=n(83451),g=n(37546),y=n(44297),w=n(37154),_=n(35896),C=n(84159),b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.name,r=t.target,i=document.createElement("a");i.setAttribute("data-automation","FeatureDownload_utils_link"),i.style.display="none",i.href=e,i.target=void 0===r?"_self":r,i.download=n||e,document.body.appendChild(i),i.click(),(0,C.bK)()||document.body.removeChild(i)},S=(r=(0,a.Z)(function(e){var t,n;return(0,l.__generator)(this,function(r){switch(r.label){case 0:return t=e.downloadBundlePayload,n=(0,d.e)({urlParams:{filename:t.bundleFilename}}).formattedUrl,[4,_.jl.post(n,t.content)];case 1:return[2,r.sent().data.public_url]}})}),function(e){return r.apply(this,arguments)}),I=function(e){var t=e.licensedContent,n=e.supplementalUrlType,r=t[0],i=r.downloadUrl,o=r.supplementalUrls;if((null==o?void 0:o.length)&&n){var a=(o.find(function(e){return e.type===n})||{}).url;return void 0===a?i:a}return i},k=(i=(0,a.Z)(function(e){var t,n,r,i,o;return(0,l.__generator)(this,function(a){switch(a.label){case 0:return t=e.downloadPayload,n=e.supplementalUrlType,r=e.licenseeIdentifier,i=(0,f.f$)({urlParams:{licenseeIdentifier:r}}).formattedUrl,[4,_.uS.post(i,t)];case 1:return[2,{downloadUrl:I({licensedContent:o=a.sent().data.meta.licensedContent,supplementalUrlType:n}),licensedContent:o}]}})}),function(e){return i.apply(this,arguments)}),Z=function(e){var t=e.existingAssetLicenses,n=e.contentType,r=e.licenseName,i=e.subscriptions;switch(n){case v.pX:var o,a,s=(0,w.I)({existingAssetLicenses:t,subscriptions:(0,u.Z)(null!==(o=null==i?void 0:i.videoSubscriptions)&&void 0!==o?o:[]).concat((0,u.Z)(null!==(a=null==i?void 0:i.videoCompSubscriptions)&&void 0!==a?a:[])),licenseName:r});return(null==s?void 0:s.redeemableFor)||r;case v.j0:return r||m.zUW;case v.tn:return r||m.i9D;case v.pV:default:return r}},T=(o=(0,a.Z)(function(e){var t,n,r,i,o;return(0,l.__generator)(this,function(u){switch(u.label){case 0:var d;return t=e.assets,n=e.existingAssetLicenses,r=e.format,i=e.selectedAssetSize,o=e.subscriptions,[4,Promise.all(t.map((d=(0,a.Z)(function(e){var t,a;return(0,l.__generator)(this,function(u){switch(u.label){case 0:return t=(0,g.SS)({asset:e}),[4,(0,h.Oo)({asset:e,licenseName:e.licenseId,selectedAssetSize:i})];case 1:return a=u.sent(),[2,(0,c.Z)((0,s.Z)({},a,t===v.tn&&{override_filename:"".concat(p.Oq,"_").concat(e.id,".").concat(r||a.content_format)}),{license_name:Z({existingAssetLicenses:n,contentType:t,licenseName:e.licenseId,subscriptions:o}),show_modal:!0})]}})}),function(e){return d.apply(this,arguments)})))];case 1:return[2,{required_cookies:"",content:u.sent()}]}})}),function(e){return o.apply(this,arguments)}),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e&&e.id&&(e.title||e.description)&&e.type&&window.localStorage.setItem("sstk_ent_asset_preview",JSON.stringify({id:e.id,title:e.title||e.description,thumb:e.src||e.previewImageUrl||"",video:e.previewVideoUrls,url:e.link,type:(0,y.Tp)(e),isRex:e.isRexEditorial}))},x=function(e){var t;return requestAnimationFrame?function(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];t&&cancelAnimationFrame(t),t=requestAnimationFrame(function(){e.apply(void 0,(0,u.Z)(r))})}:e}},65257:function(e,t,n){n.r(t),n.d(t,{Copy:function(){return a}});var r=n(70865),i=n(52322),o=(0,n(6620).Z)((0,i.jsx)("path",{d:"M24 11.333V14h2.667v13.333H13.334v-2.667h-2.667v5.333h18.667V11.332zm-2.667-8H2.666V22h18.667V3.333zm-2.666 16H5.334V6h13.333v13.333z"}),"Copy.svg"),a=function(e){return(0,i.jsx)(o,(0,r.Z)({viewBox:"0 0 32 32"},e))}},65359:function(e,t,n){n.d(t,{I:function(){return a}});var r=n(70865),i=n(52322),o=(0,n(6620).Z)((0,i.jsx)("path",{d:"M24.933 15.733l-1.867-1.867-5.733 5.733V3.332h-2.667v16.267l-5.733-5.733-1.867 1.867 8.933 8.933 8.933-8.933zM12 30h8v-2.667h-8V30zm-9.333 0h6.667v-2.667H2.667V30zm20-2.667V30h6.667v-2.667h-6.667z"}),"DownloadComp.svg"),a=function(e){return(0,i.jsx)(o,(0,r.Z)({viewBox:"0 0 32 32"},e))}},31702:function(e,t,n){n.d(t,{l_:function(){return i},lm:function(){return o},pr:function(){return a}});var r=n(84159),i=function(e){var t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=document.createElement("a");i.style.display="none",document.body.appendChild(i),i.setAttribute("download",t),i.href=n?encodeURI(e):e,(0,r.bK)()||i.click(),document.body.removeChild(i)},o=function(e){var t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=window.URL.createObjectURL(e);i(n,t),setTimeout(function(){return window.URL.revokeObjectURL(n)},100)},a=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return null===(e=t["content-disposition"])||void 0===e?void 0:e.split("filename=")[1]}},17411:function(e,t,n){n.d(t,{S:function(){return a}});var r,i=n(98788),o=n(5163),a=(r=(0,i.Z)(function(e,t){var r,i,a,s,c,u,l;return(0,o.__generator)(this,function(o){switch(o.label){case 0:return r=n.g.fetch,i=n.g.document,a=n.g.URL,[4,r(e,{cache:"no-cache",mode:"cors",credentials:"omit"})];case 1:return s=o.sent(),c=i.createElement("a"),u=a.createObjectURL,[4,s.blob()];case 2:return c.href=u.apply(a,[o.sent()]),c.download=null!==(l=null!=t?t:e.split("/").pop())&&void 0!==l?l:"download",i.body.appendChild(c),c.click(),c.remove(),[2,c]}})}),function(e,t){return r.apply(this,arguments)})}}]);
//# sourceMappingURL=51129-c9966c5f50a88853.js.map
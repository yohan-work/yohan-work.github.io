"use strict";(self["webpackChunkpp"]=self["webpackChunkpp"]||[]).push([[242],{8970:function(t,e,n){n.r(e),n.d(e,{default:function(){return Ft}});var o=n(3396),a=n(9242),i=n(652),l=n(1959),s=n(7103),r=n(836),u=n(3289),c=n(6145),d=n(8777),h=n(4193),v=n(240),m=n(165),p=n(1556),f=n(5863),_=n(2370),g=n(1819),y=n(4357),w=n(3185),E=n(4019),b=n(9637),x=n(8717),k=n(4906),W=n(4870),S=n(3766),C=n(131),T=n(1107),P=n(2385),R=n(9888);function A(t,e,n){if(null==e)return t;if(Array.isArray(e))throw new Error("Multiple matches is not implemented");return"number"===typeof e&&~e?(0,o.Wm)(o.HY,null,[(0,o.Wm)("span",{class:"v-autocomplete__unmask"},[t.substr(0,e)]),(0,o.Wm)("span",{class:"v-autocomplete__mask"},[t.substr(e,n)]),(0,o.Wm)("span",{class:"v-autocomplete__unmask"},[t.substr(e+n)])]):t}const D=(0,S.U)({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...(0,g.Up)({filterKeys:["title"]}),...(0,v.fL)(),...(0,C.CE)((0,m.w)({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...(0,k.X)({transition:!1})},"VAutocomplete"),I=(0,T.ev)()({name:"VAutocomplete",props:D(),emits:{"update:focused":t=>!0,"update:search":t=>!0,"update:modelValue":t=>!0,"update:menu":t=>!0},setup(t,e){let{slots:n}=e;const{t:a}=(0,b.bU)(),v=(0,W.iH)(),k=(0,W.XI)(!1),S=(0,W.XI)(!0),T=(0,W.XI)(!1),D=(0,W.iH)(),I=(0,W.iH)(),V=(0,x.z)(t,"menu"),M=(0,o.Fl)({get:()=>V.value,set:t=>{V.value&&!t&&D.value?.ΨopenChildren||(V.value=t)}}),O=(0,W.XI)(-1),U=(0,o.Fl)((()=>v.value?.color)),L=(0,o.Fl)((()=>M.value?t.closeText:t.openText)),{items:N,transformIn:F,transformOut:B}=(0,E.Ce)(t),{textColorClasses:z,textColorStyles:Y}=(0,_.rY)(U),$=(0,x.z)(t,"search",""),G=(0,x.z)(t,"modelValue",[],(t=>F(null===t?[null]:(0,C.FT)(t))),(e=>{const n=B(e);return t.multiple?n:n[0]??null})),H=(0,o.Fl)((()=>"function"===typeof t.counterValue?t.counterValue(G.value):"number"===typeof t.counterValue?t.counterValue:G.value.length)),j=(0,y.cI)(),{filteredItems:X,getMatches:K}=(0,g.L0)(t,N,(()=>S.value?"":$.value)),q=(0,o.Fl)((()=>t.hideSelected?X.value.filter((t=>!G.value.some((e=>e.value===t.value)))):X.value)),Z=(0,o.Fl)((()=>G.value.map((t=>t.props.value)))),J=(0,o.Fl)((()=>{const e=!0===t.autoSelectFirst||"exact"===t.autoSelectFirst&&$.value===q.value[0]?.title;return e&&q.value.length>0&&!S.value&&!T.value})),Q=(0,o.Fl)((()=>t.hideNoData&&!q.value.length||t.readonly||j?.isReadonly.value)),tt=(0,W.iH)(),{onListScroll:et,onListKeydown:nt}=(0,f.B)(tt,v);function ot(e){t.openOnClear&&(M.value=!0),$.value=""}function at(){Q.value||(M.value=!0)}function it(t){Q.value||(k.value&&(t.preventDefault(),t.stopPropagation()),M.value=!M.value)}function lt(e){if(t.readonly||j?.isReadonly.value)return;const n=v.value.selectionStart,o=G.value.length;if((O.value>-1||["Enter","ArrowDown","ArrowUp"].includes(e.key))&&e.preventDefault(),["Enter","ArrowDown"].includes(e.key)&&(M.value=!0),["Escape"].includes(e.key)&&(M.value=!1),J.value&&["Enter","Tab"].includes(e.key)&&vt(q.value[0]),"ArrowDown"===e.key&&J.value&&tt.value?.focus("next"),t.multiple){if(["Backspace","Delete"].includes(e.key)){if(O.value<0)return void("Backspace"!==e.key||$.value||(O.value=o-1));const t=O.value,n=G.value[O.value];n&&!n.props.disabled&&vt(n),O.value=t>=o-1?o-2:t}if("ArrowLeft"===e.key){if(O.value<0&&n>0)return;const t=O.value>-1?O.value-1:o-1;G.value[t]?O.value=t:(O.value=-1,v.value.setSelectionRange($.value?.length,$.value?.length))}if("ArrowRight"===e.key){if(O.value<0)return;const t=O.value+1;G.value[t]?O.value=t:(O.value=-1,v.value.setSelectionRange(0,0))}}}function st(t){if((0,C.Ku)(v.value,":autofill")||(0,C.Ku)(v.value,":-webkit-autofill")){const e=N.value.find((e=>e.title===t.target.value));e&&vt(e)}}function rt(){k.value&&(S.value=!0,v.value?.focus())}function ut(t){k.value=!0,setTimeout((()=>{T.value=!0}))}function ct(t){T.value=!1}function dt(e){(null==e||""===e&&!t.multiple)&&(G.value=[])}const ht=(0,W.XI)(!1);function vt(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e.props.disabled)if(t.multiple){const n=G.value.findIndex((n=>t.valueComparator(n.value,e.value)));if(-1===n)G.value=[...G.value,e];else{const t=[...G.value];t.splice(n,1),G.value=t}t.clearOnSelect&&($.value="")}else G.value=n?[e]:[],ht.value=!0,$.value=n?e.title:"",M.value=!1,S.value=!0,(0,o.Y3)((()=>ht.value=!1))}return(0,o.YP)(k,((e,n)=>{e!==n&&(e?(ht.value=!0,$.value=t.multiple?"":String(G.value.at(-1)?.props.title??""),S.value=!0,(0,o.Y3)((()=>ht.value=!1))):(t.multiple||null!=$.value?!J.value||T.value||G.value.some((t=>{let{value:e}=t;return e===q.value[0].value}))||vt(q.value[0]):G.value=[],M.value=!1,$.value="",O.value=-1))})),(0,o.YP)($,(t=>{k.value&&!ht.value&&(t&&(M.value=!0),S.value=!t)})),(0,o.YP)(M,(()=>{if(!t.hideSelected&&M.value&&G.value.length){const t=q.value.findIndex((t=>G.value.some((e=>t.value===e.value))));P.BR&&window.requestAnimationFrame((()=>{t>=0&&I.value?.scrollToIndex(t)}))}})),(0,o.YP)(q,((e,n)=>{k.value&&(!e.length&&t.hideNoData&&(M.value=!1),!n.length&&e.length&&(M.value=!0))})),(0,R.L)((()=>{const e=!(!t.chips&&!n.chip),f=!!(!t.hideNoData||q.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),_=G.value.length>0,g=m.h.filterProps(t);return(0,o.Wm)(m.h,(0,o.dG)({ref:v},g,{modelValue:$.value,"onUpdate:modelValue":[t=>$.value=t,dt],focused:k.value,"onUpdate:focused":t=>k.value=t,validationValue:G.externalValue,counterValue:H.value,dirty:_,onChange:st,class:["v-autocomplete","v-autocomplete--"+(t.multiple?"multiple":"single"),{"v-autocomplete--active-menu":M.value,"v-autocomplete--chips":!!t.chips,"v-autocomplete--selection-slot":!!n.selection,"v-autocomplete--selecting-index":O.value>-1},t.class],style:t.style,readonly:t.readonly,placeholder:_?void 0:t.placeholder,"onClick:clear":ot,"onMousedown:control":at,onKeydown:lt}),{...n,default:()=>(0,o.Wm)(o.HY,null,[(0,o.Wm)(h.T,(0,o.dG)({ref:D,modelValue:M.value,"onUpdate:modelValue":t=>M.value=t,activator:"parent",contentClass:"v-autocomplete__content",disabled:Q.value,eager:t.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:t.transition,onAfterLeave:rt},t.menuProps),{default:()=>[f&&(0,o.Wm)(c.i,(0,o.dG)({ref:tt,selected:Z.value,selectStrategy:t.multiple?"independent":"single-independent",onMousedown:t=>t.preventDefault(),onKeydown:nt,onFocusin:ut,onFocusout:ct,onScrollPassive:et,tabindex:"-1","aria-live":"polite",color:t.itemColor??t.color},t.listProps),{default:()=>[n["prepend-item"]?.(),!q.value.length&&!t.hideNoData&&(n["no-data"]?.()??(0,o.Wm)(d.l,{title:a(t.noDataText)},null)),(0,o.Wm)(p.t,{ref:I,renderless:!0,items:q.value},{default:e=>{let{item:a,index:s,itemRef:r}=e;const c=(0,o.dG)(a.props,{ref:r,key:s,active:!(!J.value||0!==s)||void 0,onClick:()=>vt(a)});return n.item?.({item:a,index:s,props:c})??(0,o.Wm)(d.l,c,{prepend:e=>{let{isSelected:n}=e;return(0,o.Wm)(o.HY,null,[t.multiple&&!t.hideSelected?(0,o.Wm)(l.p,{key:a.value,modelValue:n,ripple:!1,tabindex:"-1"},null):void 0,a.props.prependAvatar&&(0,o.Wm)(i.V,{image:a.props.prependAvatar},null),a.props.prependIcon&&(0,o.Wm)(u.t,{icon:a.props.prependIcon},null)])},title:()=>S.value?a.title:A(a.title,K(a)?.title,$.value?.length??0)})}}),n["append-item"]?.()]})]}),G.value.map(((a,i)=>{function l(t){t.stopPropagation(),t.preventDefault(),vt(a,!1)}const u={"onClick:close":l,onMousedown(t){t.preventDefault(),t.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},c=e?!!n.chip:!!n.selection,d=c?(0,C._g)(e?n.chip({item:a,index:i,props:u}):n.selection({item:a,index:i})):void 0;if(!c||d)return(0,o.Wm)("div",{key:a.value,class:["v-autocomplete__selection",i===O.value&&["v-autocomplete__selection--selected",z.value]],style:i===O.value?Y.value:{}},[e?n.chip?(0,o.Wm)(r.z,{key:"chip-defaults",defaults:{VChip:{closable:t.closableChips,size:"small",text:a.title}}},{default:()=>[d]}):(0,o.Wm)(s.v,(0,o.dG)({key:"chip",closable:t.closableChips,size:"small",text:a.title,disabled:a.props.disabled},u),null):d??(0,o.Wm)("span",{class:"v-autocomplete__selection-text"},[a.title,t.multiple&&i<G.value.length-1&&(0,o.Wm)("span",{class:"v-autocomplete__selection-comma"},[(0,o.Uk)(",")])])])}))]),"append-inner":function(){for(var e=arguments.length,i=new Array(e),l=0;l<e;l++)i[l]=arguments[l];return(0,o.Wm)(o.HY,null,[n["append-inner"]?.(...i),t.menuIcon?(0,o.Wm)(u.t,{class:"v-autocomplete__menu-icon",icon:t.menuIcon,onMousedown:it,onClick:C.ZT,"aria-label":a(L.value),title:a(L.value)},null):void 0])}})})),(0,w.F)({isFocused:k,isPristine:S,menu:M,search:$,filteredItems:X,select:vt},v)}});var V=n(6119),M=n(2718),O=n(9166),U=n(6107),L=n(9694),N=n(2465),F=n(1970),B=n(7396),z=n(4231),Y=n(1372),$=n(1138),G=n(5935);const H=(0,S.U)({bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:t=>!t||["horizontal","shift"].includes(t)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...(0,M.m)(),...(0,O.l)(),...(0,L.f)(),...(0,N.c)(),...(0,z.I)(),...(0,B.o8)({name:"bottom-navigation"}),...(0,$.Q)({tag:"header"}),...(0,F.k4)({modelValue:!0,selectedClass:"v-btn--selected"}),...(0,G.x$)()},"VBottomNavigation"),j=(0,T.ev)()({name:"VBottomNavigation",props:H(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{themeClasses:a}=(0,G.Fg)(),{borderClasses:i}=(0,M.P)(t),{backgroundColorClasses:l,backgroundColorStyles:s}=(0,_.Y5)((0,W.Vh)(t,"bgColor")),{densityClasses:r}=(0,L.t)(t),{elevationClasses:u}=(0,N.Y)(t),{roundedClasses:c}=(0,z.b)(t),{ssrBootStyles:d}=(0,Y.u)(),h=(0,o.Fl)((()=>Number(t.height)-("comfortable"===t.density?8:0)-("compact"===t.density?16:0))),v=(0,W.Vh)(t,"active"),{layoutItemStyles:m}=(0,B.eW)({id:t.name,order:(0,o.Fl)((()=>parseInt(t.order,10))),position:(0,o.Fl)((()=>"bottom")),layoutSize:(0,o.Fl)((()=>v.value?h.value:0)),elementSize:h,active:v,absolute:(0,W.Vh)(t,"absolute")});return(0,F._v)(t,V.iR),(0,U.AF)({VBtn:{color:(0,W.Vh)(t,"color"),density:(0,W.Vh)(t,"density"),stacked:(0,o.Fl)((()=>"horizontal"!==t.mode)),variant:"text"}},{scoped:!0}),(0,R.L)((()=>(0,o.Wm)(t.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":v.value,"v-bottom-navigation--grow":t.grow,"v-bottom-navigation--shift":"shift"===t.mode},a.value,l.value,i.value,r.value,u.value,c.value,t.class],style:[s.value,m.value,{height:(0,C.kb)(h.value),transform:`translateY(${(0,C.kb)(v.value?0:100,"%")})`},d.value,t.style]},{default:()=>[n.default&&(0,o.Wm)("div",{class:"v-bottom-navigation__content"},[n.default()])]}))),{}}});var X=n(5101),K=n(9752),q=n(1888),Z=n(1334),J=n(4075),Q=n(9234);const tt=(0,S.U)({...(0,O.l)(),...(0,B.GB)()},"VLayout"),et=(0,T.ev)()({name:"VLayout",props:tt(),setup(t,e){let{slots:n}=e;const{layoutClasses:a,layoutStyles:i,getLayoutItem:l,items:s,layoutRef:r}=(0,B.te)(t);return(0,R.L)((()=>(0,o.Wm)("div",{ref:r,class:[a.value,t.class],style:[i.value,t.style]},[n.default?.()]))),{getLayoutItem:l,items:s}}});var nt=n(3140),ot=n(9657),at=n(2285),it=n(5164),lt=n(7325),st=n(5180),rt=n(489),ut=n(5975),ct=n(5221);function dt(t){const e=(0,W.XI)(t);let n=-1;function a(){clearInterval(n)}function i(){a(),(0,o.Y3)((()=>e.value=t))}function l(o){const i=o?getComputedStyle(o):{transitionDuration:.2},l=1e3*parseFloat(i.transitionDuration)||200;if(a(),e.value<=0)return;const s=performance.now();n=window.setInterval((()=>{const n=performance.now()-s+l;e.value=Math.max(t-n,0),e.value<=0&&a()}),l)}return(0,W.EB)(a),{clear:a,time:e,start:l,reset:i}}const ht=(0,S.U)({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...(0,st.y)({location:"bottom"}),...(0,rt.F)(),...(0,z.I)(),...(0,ct.bk)(),...(0,G.x$)(),...(0,C.CE)((0,it.B)({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),vt=(0,T.ev)()({name:"VSnackbar",props:ht(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const a=(0,x.z)(t,"modelValue"),{locationStyles:i}=(0,st.T)(t),{positionClasses:l}=(0,rt.K)(t),{scopeId:s}=(0,ut.a)(),{themeClasses:u}=(0,G.ER)(t),{colorClasses:c,colorStyles:d,variantClasses:h}=(0,ct.c1)(t),{roundedClasses:v}=(0,z.b)(t),m=dt(Number(t.timeout)),p=(0,W.iH)(),f=(0,W.iH)(),_=(0,W.XI)(!1);(0,o.YP)(a,y),(0,o.YP)((()=>t.timeout),y),(0,o.bv)((()=>{a.value&&y()}));let g=-1;function y(){m.reset(),window.clearTimeout(g);const e=Number(t.timeout);if(!a.value||-1===e)return;const n=(0,C.vX)(f.value);m.start(n),g=window.setTimeout((()=>{a.value=!1}),e)}function E(){m.reset(),window.clearTimeout(g)}function b(){_.value=!0,E()}function k(){_.value=!1,y()}return(0,R.L)((()=>{const e=it.y.filterProps(t),g=!!(n.default||n.text||t.text);return(0,o.Wm)(it.y,(0,o.dG)({ref:p,class:["v-snackbar",{"v-snackbar--active":a.value,"v-snackbar--multi-line":t.multiLine&&!t.vertical,"v-snackbar--timer":!!t.timer,"v-snackbar--vertical":t.vertical},l.value,t.class],style:t.style},e,{modelValue:a.value,"onUpdate:modelValue":t=>a.value=t,contentProps:(0,o.dG)({class:["v-snackbar__wrapper",u.value,c.value,v.value,h.value],style:[i.value,d.value],onPointerenter:b,onPointerleave:k},e.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},s),{default:()=>[(0,ct.Ux)(!1,"v-snackbar"),t.timer&&(0,o.Wm)("div",{key:"timer",class:"v-snackbar__timer"},[(0,o.Wm)(lt.K,{ref:f,active:!_.value,color:"string"===typeof t.timer?t.timer:"info",max:t.timeout,"model-value":m.time.value},null)]),g&&(0,o.Wm)("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[n.text?.()??t.text,n.default?.()]),n.actions&&(0,o.Wm)(r.z,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[(0,o.Wm)("div",{class:"v-snackbar__actions"},[n.actions()])]})],activator:n.activator})})),(0,w.F)({},p)}});var mt=n(7471),pt=n(5030),ft=n(8952);const _t={class:"pl-5 pr-5"},gt=(0,o._)("h2",null,"Type01",-1),yt={class:"mx-auto my-4"},wt={class:"mt-5"},Et=(0,o._)("h2",null,"Type02",-1),bt={class:"mt-5"},xt=(0,o._)("h2",null,"Type03",-1),kt={class:"d-flex justify-center align-center h-100"},Wt={class:"mt-5"},St=(0,o._)("h2",null,"Type04",-1),Ct={class:"mt-5 mb-10"},Tt=(0,o._)("h2",null,"Type05",-1),Pt={class:"mt-5 mb-10"},Rt=(0,o._)("h2",null,"Type06",-1);function At(t,e,n,i,l,s){return(0,o.wg)(),(0,o.iD)("div",_t,[(0,o._)("div",null,[gt,(0,o.Wm)(et,{style:{height:"130px"},class:"border rounded mt-3"},{default:(0,o.w5)((()=>[(0,o._)("div",yt,[(0,o.Wm)(X.T,{color:"deep-purple",variant:"outlined",onClick:e[0]||(e[0]=t=>l.active=!l.active)},{default:(0,o.w5)((()=>[(0,o.Uk)("Toggle")])),_:1})]),(0,o.Wm)(j,{active:l.active,color:"indigo"},{default:(0,o.w5)((()=>[(0,o.Wm)(X.T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u.t,null,{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-history")])),_:1}),(0,o.Uk)(" tit01 ")])),_:1}),(0,o.Wm)(X.T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u.t,null,{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-heart")])),_:1}),(0,o.Uk)(" tit02 ")])),_:1}),(0,o.Wm)(X.T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u.t,null,{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-map-marker")])),_:1}),(0,o.Uk)(" tit03 ")])),_:1})])),_:1},8,["active"])])),_:1})]),(0,o._)("div",wt,[Et,(0,o.Wm)(K._,{class:"mt-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(et,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ot.V,{"expand-on-hover":"",rail:""},{default:(0,o.w5)((()=>[(0,o.Wm)(c.i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d.l,{"prepend-avatar":"https://dummyimage.com/300x300/000/fff",title:"name01",subtitle:"subtitle01"})])),_:1}),(0,o.Wm)(J.J),(0,o.Wm)(c.i,{density:"compact",nav:""},{default:(0,o.w5)((()=>[(0,o.Wm)(d.l,{"prepend-icon":"mdi-folder",title:"name001",value:"val001"}),(0,o.Wm)(d.l,{"prepend-icon":"mdi-account-multiple",title:"name002",value:"val002"}),(0,o.Wm)(d.l,{"prepend-icon":"mdi-star",title:"name003",value:"val003"})])),_:1})])),_:1}),(0,o.Wm)(nt.O,{style:{height:"250px"}})])),_:1})])),_:1})]),(0,o._)("div",bt,[xt,(0,o.Wm)(K._,{class:"mt-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(et,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ot.V,{modelValue:l.drawer,"onUpdate:modelValue":e[1]||(e[1]=t=>l.drawer=t),temporary:""},{default:(0,o.w5)((()=>[(0,o.Wm)(d.l,{"prepend-avatar":"https://dummyimage.com/300x300/000/fff",title:"name01"}),(0,o.Wm)(J.J),(0,o.Wm)(c.i,{density:"compact",nav:""},{default:(0,o.w5)((()=>[(0,o.Wm)(d.l,{"prepend-icon":"mdi-view-dashboard",title:"name001",value:"001"}),(0,o.Wm)(d.l,{"prepend-icon":"mdi-forum",title:"name002",value:"002"})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(nt.O,{style:{height:"250px"}},{default:(0,o.w5)((()=>[(0,o._)("div",kt,[(0,o.Wm)(X.T,{color:"primary",onClick:e[2]||(e[2]=(0,a.iM)((t=>l.drawer=!l.drawer),["stop"]))},{default:(0,o.w5)((()=>[(0,o.Uk)(" Toggle ")])),_:1})])])),_:1})])),_:1})])),_:1})]),(0,o._)("div",Wt,[St,(0,o.Wm)(at.k,{class:"mt-3",modelValue:l.page1,"onUpdate:modelValue":e[3]||(e[3]=t=>l.page1=t),length:4,rounded:"circle"},null,8,["modelValue"]),(0,o.Wm)(at.k,{modelValue:l.page2,"onUpdate:modelValue":e[4]||(e[4]=t=>l.page2=t),length:4,rounded:"0"},null,8,["modelValue"])]),(0,o._)("div",Ct,[Tt,(0,o.Wm)(K._,{class:"mt-3",color:"black","max-width":"500"},{default:(0,o.w5)((()=>[(0,o.Wm)(mt.i,{flat:"",color:"primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(X.T,{icon:"mdi-account"}),(0,o.Wm)(pt.q,{class:"font-weight-light"},{default:(0,o.w5)((()=>[(0,o.Uk)(" register ex ")])),_:1}),(0,o.Wm)(Q.C),(0,o.Wm)(X.T,{icon:"",onClick:e[5]||(e[5]=t=>l.isEditing=!l.isEditing)},{default:(0,o.w5)((()=>[(0,o.Wm)(ft.Z5,{"leave-absolute":""},{default:(0,o.w5)((()=>[l.isEditing?((0,o.wg)(),(0,o.j4)(u.t,{key:0},{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-close")])),_:1})):((0,o.wg)(),(0,o.j4)(u.t,{key:1},{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-pencil")])),_:1}))])),_:1})])),_:1})])),_:1}),(0,o.Wm)(q.Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m.h,{disabled:!l.isEditing,"base-color":"white",label:"Name"},null,8,["disabled"]),(0,o.Wm)(I,{disabled:!l.isEditing,items:l.states,"custom-filter":s.customFilter,"base-color":"white","item-title":"name","item-value":"abbr",label:"State"},null,8,["disabled","items","custom-filter"])])),_:1}),(0,o.Wm)(J.J),(0,o.Wm)(Z.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Q.C),(0,o.Wm)(X.T,{disabled:!l.isEditing,onClick:s.save},{default:(0,o.w5)((()=>[(0,o.Uk)(" Save ")])),_:1},8,["disabled","onClick"])])),_:1}),(0,o.Wm)(vt,{modelValue:l.hasSaved,"onUpdate:modelValue":e[6]||(e[6]=t=>l.hasSaved=t),timeout:2e3,attach:"",position:"absolute",location:"bottom left"},{default:(0,o.w5)((()=>[(0,o.Uk)(" update done ")])),_:1},8,["modelValue"])])),_:1})]),(0,o._)("div",Pt,[Rt,(0,o._)("canvas",{class:"mt-3",style:{border:"1px solid rgba(0, 0, 0, 0.2)"},ref:"signatureCanvas",onMousedown:e[7]||(e[7]=(...t)=>s.onBegin&&s.onBegin(...t)),onMouseup:e[8]||(e[8]=(...t)=>s.onEnd&&s.onEnd(...t))},null,544),(0,o._)("div",null,[(0,o.Wm)(X.T,{color:"danger",onClick:s.clearCanvas},{default:(0,o.w5)((()=>[(0,o.Uk)("삭제")])),_:1},8,["onClick"])])])])}n(3429),n(560);
/*!
 * Signature Pad v4.1.7 | https://github.com/szimek/signature_pad
 * (c) 2023 Szymon Nowak | Released under the MIT license
 */
class Dt{constructor(t,e,n,o){if(isNaN(t)||isNaN(e))throw new Error(`Point is invalid: (${t}, ${e})`);this.x=+t,this.y=+e,this.pressure=n||0,this.time=o||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.pressure===t.pressure&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class It{static fromPoints(t,e){const n=this.calculateControlPoints(t[0],t[1],t[2]).c2,o=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new It(t[1],n,o,t[2],e.start,e.end)}static calculateControlPoints(t,e,n){const o=t.x-e.x,a=t.y-e.y,i=e.x-n.x,l=e.y-n.y,s={x:(t.x+e.x)/2,y:(t.y+e.y)/2},r={x:(e.x+n.x)/2,y:(e.y+n.y)/2},u=Math.sqrt(o*o+a*a),c=Math.sqrt(i*i+l*l),d=s.x-r.x,h=s.y-r.y,v=c/(u+c),m={x:r.x+d*v,y:r.y+h*v},p=e.x-m.x,f=e.y-m.y;return{c1:new Dt(s.x+p,s.y+f),c2:new Dt(r.x+p,r.y+f)}}constructor(t,e,n,o,a,i){this.startPoint=t,this.control2=e,this.control1=n,this.endPoint=o,this.startWidth=a,this.endWidth=i}length(){const t=10;let e,n,o=0;for(let a=0;a<=t;a+=1){const i=a/t,l=this.point(i,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),s=this.point(i,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(a>0){const t=l-e,a=s-n;o+=Math.sqrt(t*t+a*a)}e=l,n=s}return o}point(t,e,n,o,a){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*o*(1-t)*t*t+a*t*t*t}}class Vt{constructor(){try{this._et=new EventTarget}catch(t){this._et=document}}addEventListener(t,e,n){this._et.addEventListener(t,e,n)}dispatchEvent(t){return this._et.dispatchEvent(t)}removeEventListener(t,e,n){this._et.removeEventListener(t,e,n)}}function Mt(t,e=250){let n,o,a,i=0,l=null;const s=()=>{i=Date.now(),l=null,n=t.apply(o,a),l||(o=null,a=[])};return function(...r){const u=Date.now(),c=e-(u-i);return o=this,a=r,c<=0||c>e?(l&&(clearTimeout(l),l=null),i=u,n=t.apply(o,a),l||(o=null,a=[])):l||(l=window.setTimeout(s,c)),n}}class Ot extends Vt{constructor(t,e={}){super(),this.canvas=t,this._drawingStroke=!1,this._isEmpty=!0,this._lastPoints=[],this._data=[],this._lastVelocity=0,this._lastWidth=0,this._handleMouseDown=t=>{1===t.buttons&&this._strokeBegin(t)},this._handleMouseMove=t=>{this._strokeMoveUpdate(t)},this._handleMouseUp=t=>{1===t.buttons&&this._strokeEnd(t)},this._handleTouchStart=t=>{if(t.cancelable&&t.preventDefault(),1===t.targetTouches.length){const e=t.changedTouches[0];this._strokeBegin(e)}},this._handleTouchMove=t=>{t.cancelable&&t.preventDefault();const e=t.targetTouches[0];this._strokeMoveUpdate(e)},this._handleTouchEnd=t=>{const e=t.target===this.canvas;if(e){t.cancelable&&t.preventDefault();const e=t.changedTouches[0];this._strokeEnd(e)}},this._handlePointerStart=t=>{t.preventDefault(),this._strokeBegin(t)},this._handlePointerMove=t=>{this._strokeMoveUpdate(t)},this._handlePointerEnd=t=>{this._drawingStroke&&(t.preventDefault(),this._strokeEnd(t))},this.velocityFilterWeight=e.velocityFilterWeight||.7,this.minWidth=e.minWidth||.5,this.maxWidth=e.maxWidth||2.5,this.throttle="throttle"in e?e.throttle:16,this.minDistance="minDistance"in e?e.minDistance:5,this.dotSize=e.dotSize||0,this.penColor=e.penColor||"black",this.backgroundColor=e.backgroundColor||"rgba(0,0,0,0)",this.compositeOperation=e.compositeOperation||"source-over",this._strokeMoveUpdate=this.throttle?Mt(Ot.prototype._strokeUpdate,this.throttle):Ot.prototype._strokeUpdate,this._ctx=t.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:t,canvas:e}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(this._getPointGroupOptions()),this._isEmpty=!0}fromDataURL(t,e={}){return new Promise(((n,o)=>{const a=new Image,i=e.ratio||window.devicePixelRatio||1,l=e.width||this.canvas.width/i,s=e.height||this.canvas.height/i,r=e.xOffset||0,u=e.yOffset||0;this._reset(this._getPointGroupOptions()),a.onload=()=>{this._ctx.drawImage(a,r,u,l,s),n()},a.onerror=t=>{o(t)},a.crossOrigin="anonymous",a.src=t,this._isEmpty=!1}))}toDataURL(t="image/png",e){switch(t){case"image/svg+xml":return"object"!==typeof e&&(e=void 0),`data:image/svg+xml;base64,${btoa(this.toSVG(e))}`;default:return"number"!==typeof e&&(e=void 0),this.canvas.toDataURL(t,e)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",this.canvas.style.userSelect="none";const t=/Macintosh/.test(navigator.userAgent)&&"ontouchstart"in document;window.PointerEvent&&!t?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.style.userSelect="auto",this.canvas.removeEventListener("pointerdown",this._handlePointerStart),this.canvas.removeEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.removeEventListener("pointerup",this._handlePointerEnd),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t,{clear:e=!0}={}){e&&this.clear(),this._fromData(t,this._drawCurve.bind(this),this._drawDot.bind(this)),this._data=this._data.concat(t)}toData(){return this._data}_getPointGroupOptions(t){return{penColor:t&&"penColor"in t?t.penColor:this.penColor,dotSize:t&&"dotSize"in t?t.dotSize:this.dotSize,minWidth:t&&"minWidth"in t?t.minWidth:this.minWidth,maxWidth:t&&"maxWidth"in t?t.maxWidth:this.maxWidth,velocityFilterWeight:t&&"velocityFilterWeight"in t?t.velocityFilterWeight:this.velocityFilterWeight,compositeOperation:t&&"compositeOperation"in t?t.compositeOperation:this.compositeOperation}}_strokeBegin(t){const e=!this.dispatchEvent(new CustomEvent("beginStroke",{detail:t,cancelable:!0}));if(e)return;this._drawingStroke=!0;const n=this._getPointGroupOptions(),o=Object.assign(Object.assign({},n),{points:[]});this._data.push(o),this._reset(n),this._strokeUpdate(t)}_strokeUpdate(t){if(!this._drawingStroke)return;if(0===this._data.length)return void this._strokeBegin(t);this.dispatchEvent(new CustomEvent("beforeUpdateStroke",{detail:t}));const e=t.clientX,n=t.clientY,o=void 0!==t.pressure?t.pressure:void 0!==t.force?t.force:0,a=this._createPoint(e,n,o),i=this._data[this._data.length-1],l=i.points,s=l.length>0&&l[l.length-1],r=!!s&&a.distanceTo(s)<=this.minDistance,u=this._getPointGroupOptions(i);if(!s||!s||!r){const t=this._addPoint(a,u);s?t&&this._drawCurve(t,u):this._drawDot(a,u),l.push({time:a.time,x:a.x,y:a.y,pressure:a.pressure})}this.dispatchEvent(new CustomEvent("afterUpdateStroke",{detail:t}))}_strokeEnd(t){this._drawingStroke&&(this._strokeUpdate(t),this._drawingStroke=!1,this.dispatchEvent(new CustomEvent("endStroke",{detail:t})))}_handlePointerEvents(){this._drawingStroke=!1,this.canvas.addEventListener("pointerdown",this._handlePointerStart),this.canvas.addEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.addEventListener("pointerup",this._handlePointerEnd)}_handleMouseEvents(){this._drawingStroke=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(t){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(t.minWidth+t.maxWidth)/2,this._ctx.fillStyle=t.penColor,this._ctx.globalCompositeOperation=t.compositeOperation}_createPoint(t,e,n){const o=this.canvas.getBoundingClientRect();return new Dt(t-o.left,e-o.top,n,(new Date).getTime())}_addPoint(t,e){const{_lastPoints:n}=this;if(n.push(t),n.length>2){3===n.length&&n.unshift(n[0]);const t=this._calculateCurveWidths(n[1],n[2],e),o=It.fromPoints(n,t);return n.shift(),o}return null}_calculateCurveWidths(t,e,n){const o=n.velocityFilterWeight*e.velocityFrom(t)+(1-n.velocityFilterWeight)*this._lastVelocity,a=this._strokeWidth(o,n),i={end:a,start:this._lastWidth};return this._lastVelocity=o,this._lastWidth=a,i}_strokeWidth(t,e){return Math.max(e.maxWidth/(t+1),e.minWidth)}_drawCurveSegment(t,e,n){const o=this._ctx;o.moveTo(t,e),o.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve(t,e){const n=this._ctx,o=t.endWidth-t.startWidth,a=2*Math.ceil(t.length());n.beginPath(),n.fillStyle=e.penColor;for(let i=0;i<a;i+=1){const n=i/a,l=n*n,s=l*n,r=1-n,u=r*r,c=u*r;let d=c*t.startPoint.x;d+=3*u*n*t.control1.x,d+=3*r*l*t.control2.x,d+=s*t.endPoint.x;let h=c*t.startPoint.y;h+=3*u*n*t.control1.y,h+=3*r*l*t.control2.y,h+=s*t.endPoint.y;const v=Math.min(t.startWidth+s*o,e.maxWidth);this._drawCurveSegment(d,h,v)}n.closePath(),n.fill()}_drawDot(t,e){const n=this._ctx,o=e.dotSize>0?e.dotSize:(e.minWidth+e.maxWidth)/2;n.beginPath(),this._drawCurveSegment(t.x,t.y,o),n.closePath(),n.fillStyle=e.penColor,n.fill()}_fromData(t,e,n){for(const o of t){const{points:t}=o,a=this._getPointGroupOptions(o);if(t.length>1)for(let n=0;n<t.length;n+=1){const o=t[n],i=new Dt(o.x,o.y,o.pressure,o.time);0===n&&this._reset(a);const l=this._addPoint(i,a);l&&e(l,a)}else this._reset(a),n(t[0],a)}}toSVG({includeBackgroundColor:t=!1}={}){const e=this._data,n=Math.max(window.devicePixelRatio||1,1),o=0,a=0,i=this.canvas.width/n,l=this.canvas.height/n,s=document.createElementNS("http://www.w3.org/2000/svg","svg");if(s.setAttribute("xmlns","http://www.w3.org/2000/svg"),s.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),s.setAttribute("viewBox",`${o} ${a} ${i} ${l}`),s.setAttribute("width",i.toString()),s.setAttribute("height",l.toString()),t&&this.backgroundColor){const t=document.createElement("rect");t.setAttribute("width","100%"),t.setAttribute("height","100%"),t.setAttribute("fill",this.backgroundColor),s.appendChild(t)}return this._fromData(e,((t,{penColor:e})=>{const n=document.createElement("path");if(!isNaN(t.control1.x)&&!isNaN(t.control1.y)&&!isNaN(t.control2.x)&&!isNaN(t.control2.y)){const o=`M ${t.startPoint.x.toFixed(3)},${t.startPoint.y.toFixed(3)} C ${t.control1.x.toFixed(3)},${t.control1.y.toFixed(3)} ${t.control2.x.toFixed(3)},${t.control2.y.toFixed(3)} ${t.endPoint.x.toFixed(3)},${t.endPoint.y.toFixed(3)}`;n.setAttribute("d",o),n.setAttribute("stroke-width",(2.25*t.endWidth).toFixed(3)),n.setAttribute("stroke",e),n.setAttribute("fill","none"),n.setAttribute("stroke-linecap","round"),s.appendChild(n)}}),((t,{penColor:e,dotSize:n,minWidth:o,maxWidth:a})=>{const i=document.createElement("circle"),l=n>0?n:(o+a)/2;i.setAttribute("r",l.toString()),i.setAttribute("cx",t.x.toString()),i.setAttribute("cy",t.y.toString()),i.setAttribute("fill",e),s.appendChild(i)})),s.outerHTML}}var Ut={data(){return{active:!0,drawer:null,page1:1,page2:1,hasSaved:!1,isEditing:null,signaturePad:null,states:[{name:"001",abbr:"fl",id:1},{name:"002",abbr:"fl2",id:2},{name:"003",abbr:"fl3",id:3},{name:"004",abbr:"fl4",id:4},{name:"005",abbr:"fl5",id:5}]}},mounted(){this.$nextTick((()=>{const t=this.$refs.signatureCanvas;this.signaturePad=new Ot(t)}))},methods:{customFilter(t,e,n){const o=n.raw.name.toLowerCase(),a=n.raw.abbr.toLowerCase(),i=e.toLowerCase();return o.indexOf(i)>-1||a.indexOf(i)>-1},save(){this.isEditing=!this.isEditing,this.hasSaved=!0},clearCanvas(){this.signaturePad.clear()},onBegin(){this.signaturePad.onBegin()},onEnd(){this.signaturePad.onEnd()}}},Lt=n(89);const Nt=(0,Lt.Z)(Ut,[["render",At]]);var Ft=Nt},3550:function(t,e,n){var o=n(598),a=String,i=TypeError;t.exports=function(t){if(o(t))return t;throw new i("Can't set "+a(t)+" as a prototype")}},767:function(t,e,n){var o=n(3622),a=TypeError;t.exports=function(t,e){if(o(e,t))return t;throw new a("Incorrect invocation")}},926:function(t,e,n){var o=n(3043),a=n(9985),i=n(6648),l=n(4201),s=l("toStringTag"),r=Object,u="Arguments"===i(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(n){}};t.exports=o?i:function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=r(t),s))?n:u?i(e):"Object"===(o=i(e))&&a(e.callee)?"Arguments":o}},7136:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6610:function(t,e,n){var o=n(8844),a=Error,i=o("".replace),l=function(t){return String(new a(t).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,r=s.test(l);t.exports=function(t,e){if(r&&"string"==typeof t&&!a.prepareStackTrace)while(e--)t=i(t,s,"");return t}},2743:function(t,e,n){var o=n(8844),a=n(509);t.exports=function(t,e,n){try{return o(a(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(i){}}},3457:function(t,e,n){var o=n(9985),a=n(8999),i=n(9385);t.exports=function(t,e,n){var l,s;return i&&o(l=e.constructor)&&l!==n&&a(s=l.prototype)&&s!==n.prototype&&i(t,s),t}},598:function(t,e,n){var o=n(8999);t.exports=function(t){return o(t)||null===t}},3841:function(t,e,n){var o=n(4327);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:o(t)}},9385:function(t,e,n){var o=n(2743),a=n(5027),i=n(3550);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=o(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(l){}return function(n,o){return a(n),i(o),e?t(n,o):n.__proto__=o,n}}():void 0)},3043:function(t,e,n){var o=n(4201),a=o("toStringTag"),i={};i[a]="z",t.exports="[object z]"===String(i)},4327:function(t,e,n){var o=n(926),a=String;t.exports=function(t){if("Symbol"===o(t))throw new TypeError("Cannot convert a Symbol value to a string");return a(t)}},3429:function(t,e,n){var o=n(9989),a=n(9037),i=n(6058),l=n(5684),s=n(2560).f,r=n(6812),u=n(767),c=n(3457),d=n(3841),h=n(7136),v=n(6610),m=n(7697),p=n(3931),f="DOMException",_=i("Error"),g=i(f),y=function(){u(this,w);var t=arguments.length,e=d(t<1?void 0:arguments[0]),n=d(t<2?void 0:arguments[1],"Error"),o=new g(e,n),a=new _(e);return a.name=f,s(o,"stack",l(1,v(a.stack,1))),c(o,this,y),o},w=y.prototype=g.prototype,E="stack"in new _(f),b="stack"in new g(1,2),x=g&&m&&Object.getOwnPropertyDescriptor(a,f),k=!!x&&!(x.writable&&x.configurable),W=E&&!k&&!b;o({global:!0,constructor:!0,forced:p||W},{DOMException:W?y:g});var S=i(f),C=S.prototype;if(C.constructor!==S)for(var T in p||s(C,"constructor",l(1,S)),h)if(r(h,T)){var P=h[T],R=P.s;r(S,R)||s(S,R,l(6,P.c))}},9234:function(t,e,n){n.d(e,{C:function(){return a}});n(8099);var o=n(1114);const a=(0,o.J)("v-spacer","div","VSpacer")}}]);
//# sourceMappingURL=242.60ba4981.js.map
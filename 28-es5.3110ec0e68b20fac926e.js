function _defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"0snN":function(n,e,t){"use strict";t.r(e),t.d(e,"UpdateclassroomPageModule",(function(){return m}));var o=t("ofXK"),i=t("3Pt+"),c=t("TEn/"),b=t("tyNb"),r=t("fXoL");function a(n,e){if(1&n){var t=r.Ob();r.Nb(0,"ion-buttons",8),r.Nb(1,"ion-button",9),r.Vb("click",(function(){r.hc(t);var n=r.Xb().index;return r.Xb().removeFields(n)})),r.Lb(2,"ion-icon",20),r.Mb(),r.Mb()}}function l(n,e){if(1&n){var t=r.Ob();r.Nb(0,"div"),r.Nb(1,"ion-row",13),r.Nb(2,"ion-col",14),r.Nb(3,"ion-item"),r.Nb(4,"ion-label",15),r.mc(5,"Subject"),r.Mb(),r.Nb(6,"ion-input",16),r.Vb("ngModelChange",(function(n){return r.hc(t),e.$implicit.Subject=n})),r.Mb(),r.Mb(),r.Mb(),r.Nb(7,"ion-col",17),r.Nb(8,"ion-item"),r.Nb(9,"ion-label",15),r.mc(10,"Teacher"),r.Mb(),r.Nb(11,"ion-input",16),r.Vb("ngModelChange",(function(n){return r.hc(t),e.$implicit.Teacher=n})),r.Mb(),r.Mb(),r.Mb(),r.Nb(12,"ion-col",18),r.lc(13,a,3,0,"ion-buttons",19),r.Mb(),r.Mb(),r.Mb()}if(2&n){var o=e.$implicit,i=e.index;r.Ab(6),r.ec("name","Subject",i,""),r.cc("ngModel",o.Subject),r.Ab(5),r.ec("name","Teacher",i,""),r.cc("ngModel",o.Teacher),r.Ab(2),r.cc("ngIf",0!==i)}}var s,u,d,f=function n(){_classCallCheck(this,n)},p=[{path:"",component:(s=function(){function n(e){_classCallCheck(this,n),this.formBuilder=e,this.Sub=new f,this.dataArray=[]}return _createClass(n,[{key:"ngOnInit",value:function(){this.dataArray.push(new f)}},{key:"addFields",value:function(){this.dataArray.push(new f)}},{key:"removeFields",value:function(n){this.dataArray.splice(n,1)}},{key:"addSubject",value:function(){console.log(this.dataArray.values)}}]),n}(),s.\u0275fac=function(n){return new(n||s)(r.Kb(i.a))},s.\u0275cmp=r.Eb({type:s,selectors:[["app-updateclassroom"]],decls:22,vars:1,consts:[["slot","start"],[3,"ngSubmit"],["fixed",""],[1,"ion-padding-bottom"],["size","8","offset","2","size-lg","4","offset-lg","4",1,"ion-text-center","ion-text-uppercase"],[4,"ngFor","ngForOf"],[1,"ion-padding-top"],["size","2","offset","1",1,"ion-text-center"],[2,"display","inline"],["color","blackwhite",3,"click"],["slot","icon-only","name","add-circle-outline"],["size","9",1,"ion-text-center"],["color","blackwhite","type","submit","expand","full","shape","round"],[1,"ion-no-padding"],["size","5","offset","1",1,"ion-text-center"],["position","floating"],["required","","type","text",3,"name","ngModel","ngModelChange"],["size","5",1,"ion-text-center"],["size","1",1,"ion-text-center"],["style","display: inline;",4,"ngIf"],["slot","icon-only","name","remove-circle-outline","color","danger"]],template:function(n,e){1&n&&(r.Nb(0,"ion-header"),r.Nb(1,"ion-toolbar"),r.Nb(2,"ion-buttons",0),r.Lb(3,"ion-back-button"),r.Mb(),r.Nb(4,"ion-title"),r.mc(5,"Update ClassRoom"),r.Mb(),r.Mb(),r.Mb(),r.Nb(6,"ion-content"),r.Nb(7,"form",1),r.Vb("ngSubmit",(function(){return e.addSubject()})),r.Nb(8,"ion-grid",2),r.Nb(9,"ion-row",3),r.Nb(10,"ion-col",4),r.Nb(11,"h6"),r.mc(12,"Add Subject"),r.Mb(),r.Mb(),r.Mb(),r.lc(13,l,14,5,"div",5),r.Nb(14,"ion-row",6),r.Nb(15,"ion-col",7),r.Nb(16,"ion-buttons",8),r.Nb(17,"ion-button",9),r.Vb("click",(function(){return e.addFields()})),r.Lb(18,"ion-icon",10),r.Mb(),r.Mb(),r.Mb(),r.Nb(19,"ion-col",11),r.Nb(20,"ion-button",12),r.mc(21," Add "),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb()),2&n&&(r.Ab(13),r.cc("ngForOf",e.dataArray))},directives:[c.r,c.Q,c.g,c.d,c.e,c.P,c.n,i.n,i.h,i.i,c.q,c.J,c.m,o.h,c.f,c.s,c.w,c.A,c.v,c.cb,i.l,i.g,i.j,o.i],styles:[""]}),s)}],h=((d=function n(){_classCallCheck(this,n)}).\u0275mod=r.Ib({type:d}),d.\u0275inj=r.Hb({factory:function(n){return new(n||d)},imports:[[b.k.forChild(p)],b.k]}),d),m=((u=function n(){_classCallCheck(this,n)}).\u0275mod=r.Ib({type:u}),u.\u0275inj=r.Hb({factory:function(n){return new(n||u)},imports:[[o.b,i.d,i.k,c.S,h]]}),u)}}]);
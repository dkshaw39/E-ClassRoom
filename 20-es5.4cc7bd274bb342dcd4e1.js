function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{mokw:function(e,t,o){"use strict";o.r(t),o.d(t,"ClassSubjectPageModule",(function(){return ie}));var n,i,s,c,r,a,b=o("ofXK"),l=o("3Pt+"),u=o("TEn/"),m=o("fXoL"),d=((s=function e(){_classCallCheck(this,e)}).\u0275mod=m.Ib({type:s}),s.\u0275inj=m.Hb({factory:function(e){return new(e||s)},imports:[[b.b,l.d,u.S]]}),s),h=((i=function e(){_classCallCheck(this,e)}).\u0275mod=m.Ib({type:i}),i.\u0275inj=m.Hb({factory:function(e){return new(e||i)},imports:[[b.b,l.d,l.k,u.S]]}),i),f=((n=function e(){_classCallCheck(this,e)}).\u0275mod=m.Ib({type:n}),n.\u0275inj=m.Hb({factory:function(e){return new(e||n)},imports:[[b.b,l.d,u.S]]}),n),p=o("k6Iy"),g=o("tyNb"),M=o("mrSG"),N=o("lJxs"),v=o("IzEk"),C=o("2Vo4"),y=((a=function(){function e(){_classCallCheck(this,e),this.exams=new C.a([{ID:"ABC1",name:"Trigonometry",classroomcode:"CLA-ABC",subject:"Math",status:"Completed",filepath:"Location"},{ID:"ABC2",name:"Algebra",classroomcode:"CLA-ABC",subject:"Math",status:"Pending",filepath:"Location"},{ID:"ABC3",name:"Road Engine",classroomcode:"CLA-ABC",subject:"English",status:"Completed",filepath:"Location"}])}return _createClass(e,[{key:"getAllExam",value:function(){return this.exams.asObservable()}},{key:"getExamForSubject",value:function(e,t){return this.getAllExam().pipe(Object(N.a)((function(o){return o.filter((function(o){return o.classroomcode===e&&o.subject===t}))})))}},{key:"add",value:function(e,t,o,n,i){var s=this,c={ID:e,name:t,classroomcode:o,subject:n,status:"Assigned",filepath:i};this.exams.pipe(Object(v.a)(1)).subscribe((function(e){s.exams.next(e.concat(c))}))}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275prov=m.Gb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),k=((r=function(){function e(t,o,n,i){_classCallCheck(this,e),this.modalController=t,this.formBuilder=o,this.examService=n,this.navParams=i,this.assignmentForm=this.formBuilder.group({id:["",[l.m.required]],name:["",[l.m.required,l.m.minLength(6)]],clsroomcode:["",[l.m.required]],sub:["",[l.m.required]],path:["",[l.m.required]]})}return _createClass(e,[{key:"ngOnInit",value:function(){this.classroomcode=this.navParams.get("classroomcode"),this.subject=this.navParams.get("subject")}},{key:"closeModal",value:function(){this.modalController.dismiss()}},{key:"onSubmit",value:function(){this.examService.add(this.id.value,this.name.value,this.classroomcode,this.subject,this.path.value),this.closeModal()}},{key:"id",get:function(){return this.assignmentForm.get("id")}},{key:"name",get:function(){return this.assignmentForm.get("name")}},{key:"path",get:function(){return this.assignmentForm.get("path")}}]),e}()).\u0275fac=function(e){return new(e||r)(m.Kb(u.V),m.Kb(l.a),m.Kb(y),m.Kb(u.X))},r.\u0275cmp=m.Eb({type:r,selectors:[["app-modal-scheduleexam"]],decls:44,vars:4,consts:[["slot","end"],["color","blackwhite",3,"click"],["slot","icon-only","name","close"],[3,"formGroup","ngSubmit"],["fixed",""],[1,"ion-padding-bottom"],["size","8","offset","2",1,"ion-text-center","ion-text-uppercase"],[1,"ion-no-padding"],["size","8","offset","2",1,"ion-text-center"],["position","floating"],["required","","formControlName","id","type","text"],["required","","formControlName","name","type","text"],["required","","formControlName","clsroomcode","type","text","disabled","",3,"ngModel","ngModelChange"],["required","","formControlName","sub","type","text","disabled","",3,"ngModel","ngModelChange"],["required","","formControlName","path","type","text"],[1,"ion-padding-top"],["color","blackwhite","type","submit","expand","block","shape","round",3,"disabled"]],template:function(e,t){1&e&&(m.Nb(0,"ion-toolbar"),m.Nb(1,"ion-buttons",0),m.Nb(2,"ion-button",1),m.Vb("click",(function(){return t.closeModal()})),m.Lb(3,"ion-icon",2),m.Mb(),m.Mb(),m.Mb(),m.Nb(4,"form",3),m.Vb("ngSubmit",(function(){return t.onSubmit()})),m.Nb(5,"ion-grid",4),m.Nb(6,"ion-row",5),m.Nb(7,"ion-col",6),m.Nb(8,"h6"),m.mc(9,"EXAM SCHEDULE"),m.Mb(),m.Mb(),m.Mb(),m.Nb(10,"ion-row",7),m.Nb(11,"ion-col",8),m.Nb(12,"ion-item"),m.Nb(13,"ion-label",9),m.mc(14,"ID"),m.Mb(),m.Lb(15,"ion-input",10),m.Mb(),m.Mb(),m.Mb(),m.Nb(16,"ion-row",7),m.Nb(17,"ion-col",8),m.Nb(18,"ion-item"),m.Nb(19,"ion-label",9),m.mc(20,"Name"),m.Mb(),m.Lb(21,"ion-input",11),m.Mb(),m.Mb(),m.Mb(),m.Nb(22,"ion-row",7),m.Nb(23,"ion-col",8),m.Nb(24,"ion-item"),m.Nb(25,"ion-label",9),m.mc(26,"ClassRoom Code"),m.Mb(),m.Nb(27,"ion-input",12),m.Vb("ngModelChange",(function(e){return t.classroomcode=e})),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Nb(28,"ion-row",7),m.Nb(29,"ion-col",8),m.Nb(30,"ion-item"),m.Nb(31,"ion-label",9),m.mc(32,"Subject"),m.Mb(),m.Nb(33,"ion-input",13),m.Vb("ngModelChange",(function(e){return t.subject=e})),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Nb(34,"ion-row",7),m.Nb(35,"ion-col",8),m.Nb(36,"ion-item"),m.Nb(37,"ion-label",9),m.mc(38,"File"),m.Mb(),m.Lb(39,"ion-input",14),m.Mb(),m.Mb(),m.Mb(),m.Nb(40,"ion-row",15),m.Nb(41,"ion-col",8),m.Nb(42,"ion-button",16),m.mc(43," Exam Schedule "),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Mb()),2&e&&(m.Ab(4),m.cc("formGroup",t.assignmentForm),m.Ab(23),m.cc("ngModel",t.classroomcode),m.Ab(6),m.cc("ngModel",t.subject),m.Ab(9),m.cc("disabled",t.assignmentForm.invalid))},directives:[u.Q,u.g,u.f,u.s,l.n,l.h,l.c,u.q,u.J,u.m,u.w,u.A,u.v,u.cb,l.l,l.g,l.b],styles:["form[_ngcontent-%COMP%]{margin:auto 0}h6[_ngcontent-%COMP%]{letter-spacing:.4rem}"]}),r),A=((c=function(){function e(){_classCallCheck(this,e),this.clsroomcode=new C.a(""),this.sub=new C.a(""),this.classroomcode=this.clsroomcode.asObservable(),this.subject=this.sub.asObservable()}return _createClass(e,[{key:"setData",value:function(e,t){this.clsroomcode.next(e),this.sub.next(t)}}]),e}()).\u0275fac=function(e){return new(e||c)},c.\u0275prov=m.Gb({token:c,factory:c.\u0275fac,providedIn:"root"}),c);function w(e,t){1&e&&(m.Nb(0,"ion-list"),m.Nb(1,"ion-item",4),m.Nb(2,"ion-label"),m.mc(3,"There is no record"),m.Mb(),m.Mb(),m.Mb())}function j(e,t){if(1&e&&(m.Nb(0,"ion-note",12),m.mc(1),m.Mb()),2&e){var o=m.Xb().$implicit;m.Ab(1),m.nc(o.status)}}function x(e,t){1&e&&(m.Nb(0,"ion-note",13),m.mc(1,"Time Left: 1 day"),m.Mb())}function I(e,t){if(1&e&&(m.Nb(0,"ion-item"),m.Lb(1,"ion-icon",9),m.lc(2,j,2,1,"ion-note",10),m.lc(3,x,2,0,"ion-note",11),m.Nb(4,"ion-label"),m.Nb(5,"h2"),m.mc(6),m.Mb(),m.Nb(7,"p"),m.mc(8,"Uploaded: 26th-Jun-20"),m.Mb(),m.Mb(),m.Mb()),2&e){var o=t.$implicit;m.Ab(2),m.cc("ngIf","Completed"===o.status),m.Ab(1),m.cc("ngIf","Completed"!==o.status),m.Ab(3),m.nc(o.name)}}function S(e,t){if(1&e&&(m.Nb(0,"div"),m.Nb(1,"ion-list-header"),m.Nb(2,"ion-label"),m.mc(3,"All"),m.Mb(),m.Nb(4,"ion-buttons"),m.Nb(5,"ion-button",5),m.Lb(6,"ion-icon",6),m.Mb(),m.Mb(),m.Mb(),m.Nb(7,"ion-virtual-scroll",7),m.lc(8,I,9,3,"ion-item",8),m.Mb(),m.Mb()),2&e){var o=m.Xb();m.Ab(7),m.cc("items",o.exams)}}var L,_,D,q=((D=function(){function e(t,o,n){_classCallCheck(this,e),this.sharedSubjectData=t,this.examService=o,this.modalController=n,this.subs=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.subs.push(this.sharedSubjectData.classroomcode.subscribe((function(t){return e.classroomcode=t}))),this.subs.push(this.sharedSubjectData.subject.subscribe((function(t){return e.subject=t}))),this.subs.push(this.examService.getExamForSubject(this.classroomcode,this.subject).subscribe((function(t){e.exams=t})))}},{key:"ngOnDestroy",value:function(){this.subs.forEach((function(e){e.unsubscribe()}))}},{key:"addItem",value:function(){return Object(M.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:k,componentProps:{classroomcode:this.classroomcode,subject:this.subject}});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}}]),e}()).\u0275fac=function(e){return new(e||D)(m.Kb(A),m.Kb(y),m.Kb(u.V))},D.\u0275cmp=m.Eb({type:D,selectors:[["app-examhistory"]],decls:6,vars:2,consts:[[4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","blackwhite",3,"click"],["name","add-outline"],["lines","none"],["color","blackwhite"],["slot","icon-only","name","filter-outline"],[3,"items"],[4,"virtualItem"],["slot","start","name","school-outline"],["slot","end","color","success",4,"ngIf"],["slot","end","color","danger",4,"ngIf"],["slot","end","color","success"],["slot","end","color","danger"]],template:function(e,t){1&e&&(m.Nb(0,"ion-content"),m.lc(1,w,4,0,"ion-list",0),m.lc(2,S,9,1,"div",0),m.Nb(3,"ion-fab",1),m.Nb(4,"ion-fab-button",2),m.Vb("click",(function(){return t.addItem()})),m.Lb(5,"ion-icon",3),m.Mb(),m.Mb(),m.Mb()),2&e&&(m.Ab(1),m.cc("ngIf",0===t.exams.length),m.Ab(1),m.cc("ngIf",0!==t.exams.length))},directives:[u.n,b.i,u.o,u.p,u.s,u.B,u.w,u.A,u.C,u.g,u.f,u.R,u.db,u.H],styles:[""]}),D),O=((_=function(){function e(){_classCallCheck(this,e),this.notes=new C.a([{ID:"ABC1",name:"Profit and Loss",classroomcode:"CLA-ABC",subject:"Math",status:"New",filepath:"Location"},{ID:"ABC2",name:"Compound Interest",classroomcode:"CLA-ABC",subject:"Math",status:"Coming",filepath:"Location"},{ID:"ABC3",name:"Akbar",classroomcode:"CLA-ABC",subject:"History",status:"Completed",filepath:"Location"}])}return _createClass(e,[{key:"getAllNotes",value:function(){return this.notes.asObservable()}},{key:"getExamForSubject",value:function(e,t){return this.getAllNotes().pipe(Object(N.a)((function(o){return o.filter((function(o){return o.classroomcode===e&&o.subject===t}))})))}},{key:"add",value:function(e,t,o,n,i){var s=this,c={ID:e,name:t,classroomcode:o,subject:n,status:"New",filepath:i};this.notes.pipe(Object(v.a)(1)).subscribe((function(e){s.notes.next(e.concat(c))}))}}]),e}()).\u0275fac=function(e){return new(e||_)},_.\u0275prov=m.Gb({token:_,factory:_.\u0275fac,providedIn:"root"}),_),P=((L=function(){function e(t,o,n,i){_classCallCheck(this,e),this.modalController=t,this.formBuilder=o,this.notesService=n,this.navParams=i,this.assignmentForm=this.formBuilder.group({id:["",[l.m.required]],name:["",[l.m.required,l.m.minLength(6)]],clsroomcode:["",[l.m.required]],sub:["",[l.m.required]],path:["",[l.m.required]]})}return _createClass(e,[{key:"ngOnInit",value:function(){this.classroomcode=this.navParams.get("classroomcode"),this.subject=this.navParams.get("subject")}},{key:"closeModal",value:function(){this.modalController.dismiss()}},{key:"onSubmit",value:function(){this.notesService.add(this.id.value,this.name.value,this.classroomcode,this.subject,this.path.value),this.closeModal()}},{key:"id",get:function(){return this.assignmentForm.get("id")}},{key:"name",get:function(){return this.assignmentForm.get("name")}},{key:"path",get:function(){return this.assignmentForm.get("path")}}]),e}()).\u0275fac=function(e){return new(e||L)(m.Kb(u.V),m.Kb(l.a),m.Kb(O),m.Kb(u.X))},L.\u0275cmp=m.Eb({type:L,selectors:[["app-modal-createnotes"]],decls:44,vars:4,consts:[["slot","end"],["color","blackwhite",3,"click"],["slot","icon-only","name","close"],[3,"formGroup","ngSubmit"],["fixed",""],[1,"ion-padding-bottom"],["size","8","offset","2",1,"ion-text-center","ion-text-uppercase"],[1,"ion-no-padding"],["size","8","offset","2",1,"ion-text-center"],["position","floating"],["required","","formControlName","id","type","text"],["required","","formControlName","name","type","text"],["required","","formControlName","clsroomcode","type","text","disabled","",3,"ngModel","ngModelChange"],["required","","formControlName","sub","type","text","disabled","",3,"ngModel","ngModelChange"],["required","","formControlName","path","type","text"],[1,"ion-padding-top"],["color","blackwhite","type","submit","expand","block","shape","round",3,"disabled"]],template:function(e,t){1&e&&(m.Nb(0,"ion-toolbar"),m.Nb(1,"ion-buttons",0),m.Nb(2,"ion-button",1),m.Vb("click",(function(){return t.closeModal()})),m.Lb(3,"ion-icon",2),m.Mb(),m.Mb(),m.Mb(),m.Nb(4,"form",3),m.Vb("ngSubmit",(function(){return t.onSubmit()})),m.Nb(5,"ion-grid",4),m.Nb(6,"ion-row",5),m.Nb(7,"ion-col",6),m.Nb(8,"h6"),m.mc(9,"ADD NOTES"),m.Mb(),m.Mb(),m.Mb(),m.Nb(10,"ion-row",7),m.Nb(11,"ion-col",8),m.Nb(12,"ion-item"),m.Nb(13,"ion-label",9),m.mc(14,"ID"),m.Mb(),m.Lb(15,"ion-input",10),m.Mb(),m.Mb(),m.Mb(),m.Nb(16,"ion-row",7),m.Nb(17,"ion-col",8),m.Nb(18,"ion-item"),m.Nb(19,"ion-label",9),m.mc(20,"Name"),m.Mb(),m.Lb(21,"ion-input",11),m.Mb(),m.Mb(),m.Mb(),m.Nb(22,"ion-row",7),m.Nb(23,"ion-col",8),m.Nb(24,"ion-item"),m.Nb(25,"ion-label",9),m.mc(26,"ClassRoom Code"),m.Mb(),m.Nb(27,"ion-input",12),m.Vb("ngModelChange",(function(e){return t.classroomcode=e})),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Nb(28,"ion-row",7),m.Nb(29,"ion-col",8),m.Nb(30,"ion-item"),m.Nb(31,"ion-label",9),m.mc(32,"Subject"),m.Mb(),m.Nb(33,"ion-input",13),m.Vb("ngModelChange",(function(e){return t.subject=e})),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Nb(34,"ion-row",7),m.Nb(35,"ion-col",8),m.Nb(36,"ion-item"),m.Nb(37,"ion-label",9),m.mc(38,"File"),m.Mb(),m.Lb(39,"ion-input",14),m.Mb(),m.Mb(),m.Mb(),m.Nb(40,"ion-row",15),m.Nb(41,"ion-col",8),m.Nb(42,"ion-button",16),m.mc(43," Add Notes "),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Mb()),2&e&&(m.Ab(4),m.cc("formGroup",t.assignmentForm),m.Ab(23),m.cc("ngModel",t.classroomcode),m.Ab(6),m.cc("ngModel",t.subject),m.Ab(9),m.cc("disabled",t.assignmentForm.invalid))},directives:[u.Q,u.g,u.f,u.s,l.n,l.h,l.c,u.q,u.J,u.m,u.w,u.A,u.v,u.cb,l.l,l.g,l.b],styles:["form[_ngcontent-%COMP%]{margin:auto 0}h6[_ngcontent-%COMP%]{letter-spacing:.4rem}"]}),L);function B(e,t){1&e&&(m.Nb(0,"ion-list"),m.Nb(1,"ion-item",4),m.Nb(2,"ion-label"),m.mc(3,"There is no record"),m.Mb(),m.Mb(),m.Mb())}function E(e,t){if(1&e&&(m.Nb(0,"ion-note",12),m.mc(1),m.Mb()),2&e){var o=m.Xb().$implicit;m.Ab(1),m.nc(o.status)}}function F(e,t){if(1&e&&(m.Nb(0,"ion-note",13),m.mc(1),m.Mb()),2&e){var o=m.Xb().$implicit;m.Ab(1),m.nc(o.status)}}function K(e,t){if(1&e&&(m.Nb(0,"ion-item"),m.Lb(1,"ion-icon",9),m.lc(2,E,2,1,"ion-note",10),m.lc(3,F,2,1,"ion-note",11),m.Nb(4,"ion-label"),m.Nb(5,"h2"),m.mc(6),m.Mb(),m.Nb(7,"p"),m.mc(8,"Uploaded: 26th-Jun-20"),m.Mb(),m.Mb(),m.Mb()),2&e){var o=t.$implicit;m.Ab(2),m.cc("ngIf","New"===o.status),m.Ab(1),m.cc("ngIf","New"!==o.status),m.Ab(3),m.nc(o.name)}}function V(e,t){if(1&e&&(m.Nb(0,"div"),m.Nb(1,"ion-list-header"),m.Nb(2,"ion-label"),m.mc(3,"All"),m.Mb(),m.Nb(4,"ion-buttons"),m.Nb(5,"ion-button",5),m.Lb(6,"ion-icon",6),m.Mb(),m.Mb(),m.Mb(),m.Nb(7,"ion-virtual-scroll",7),m.lc(8,K,9,3,"ion-item",8),m.Mb(),m.Mb()),2&e){var o=m.Xb();m.Ab(7),m.cc("items",o.notes)}}var R,G,X,H=((X=function(){function e(t,o,n){_classCallCheck(this,e),this.sharedSubjectData=t,this.notesService=o,this.modalController=n,this.subs=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.subs.push(this.sharedSubjectData.classroomcode.subscribe((function(t){return e.classroomcode=t}))),this.subs.push(this.sharedSubjectData.subject.subscribe((function(t){return e.subject=t}))),this.subs.push(this.notesService.getExamForSubject(this.classroomcode,this.subject).subscribe((function(t){e.notes=t})))}},{key:"ngOnDestroy",value:function(){this.subs.forEach((function(e){e.unsubscribe()}))}},{key:"addItem",value:function(){return Object(M.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:P,componentProps:{classroomcode:this.classroomcode,subject:this.subject}});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}}]),e}()).\u0275fac=function(e){return new(e||X)(m.Kb(A),m.Kb(O),m.Kb(u.V))},X.\u0275cmp=m.Eb({type:X,selectors:[["app-noteshistory"]],decls:6,vars:2,consts:[[4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","blackwhite",3,"click"],["name","add-outline"],["lines","none"],["color","blackwhite"],["slot","icon-only","name","filter-outline"],[3,"items"],[4,"virtualItem"],["slot","start","name","reader-outline"],["slot","end","color","success",4,"ngIf"],["slot","end","color","warning",4,"ngIf"],["slot","end","color","success"],["slot","end","color","warning"]],template:function(e,t){1&e&&(m.Nb(0,"ion-content"),m.lc(1,B,4,0,"ion-list",0),m.lc(2,V,9,1,"div",0),m.Nb(3,"ion-fab",1),m.Nb(4,"ion-fab-button",2),m.Vb("click",(function(){return t.addItem()})),m.Lb(5,"ion-icon",3),m.Mb(),m.Mb(),m.Mb()),2&e&&(m.Ab(1),m.cc("ngIf",0===t.notes.length),m.Ab(1),m.cc("ngIf",0!==t.notes.length))},directives:[u.n,b.i,u.o,u.p,u.s,u.B,u.w,u.A,u.C,u.g,u.f,u.R,u.db,u.H],styles:[""]}),X),T=((G=function(){function e(){_classCallCheck(this,e),this.assignments=new C.a([{ID:"ABC1",name:"Algebra",classroomcode:"CLA-ABC",subject:"Math",status:"Completed",filepath:"Location"},{ID:"ABC2",name:"Trigonometry",classroomcode:"CLA-ABC",subject:"Math",status:"Completed",filepath:"Location"},{ID:"ABC3",name:"Tulsi Das",classroomcode:"CLA-ABC",subject:"Hindi",status:"Completed",filepath:"Location"}])}return _createClass(e,[{key:"getAllAssignment",value:function(){return this.assignments.asObservable()}},{key:"getAssignmentForSubject",value:function(e,t){return this.getAllAssignment().pipe(Object(N.a)((function(o){return o.filter((function(o){return o.classroomcode===e&&o.subject===t}))})))}},{key:"add",value:function(e,t,o,n,i){var s=this,c={ID:e,name:t,classroomcode:o,subject:n,status:"Assigned",filepath:i};this.assignments.pipe(Object(v.a)(1)).subscribe((function(e){s.assignments.next(e.concat(c))}))}}]),e}()).\u0275fac=function(e){return new(e||G)},G.\u0275prov=m.Gb({token:G,factory:G.\u0275fac,providedIn:"root"}),G),z=((R=function(){function e(t,o,n,i){_classCallCheck(this,e),this.modalController=t,this.formBuilder=o,this.assignmentServer=n,this.navParams=i,this.assignmentForm=this.formBuilder.group({id:["",[l.m.required]],name:["",[l.m.required,l.m.minLength(6)]],clsroomcode:["",[l.m.required]],sub:["",[l.m.required]],path:["",[l.m.required]]})}return _createClass(e,[{key:"ngOnInit",value:function(){this.classroomcode=this.navParams.get("classroomcode"),this.subject=this.navParams.get("subject")}},{key:"closeModal",value:function(){this.modalController.dismiss()}},{key:"onSubmit",value:function(){this.assignmentServer.add(this.id.value,this.name.value,this.classroomcode,this.subject,this.path.value),this.closeModal()}},{key:"id",get:function(){return this.assignmentForm.get("id")}},{key:"name",get:function(){return this.assignmentForm.get("name")}},{key:"path",get:function(){return this.assignmentForm.get("path")}}]),e}()).\u0275fac=function(e){return new(e||R)(m.Kb(u.V),m.Kb(l.a),m.Kb(T),m.Kb(u.X))},R.\u0275cmp=m.Eb({type:R,selectors:[["app-modal-createassignment"]],decls:44,vars:4,consts:[["slot","end"],["color","blackwhite",3,"click"],["slot","icon-only","name","close"],[3,"formGroup","ngSubmit"],["fixed",""],[1,"ion-padding-bottom"],["size","8","offset","2",1,"ion-text-center","ion-text-uppercase"],[1,"ion-no-padding"],["size","8","offset","2",1,"ion-text-center"],["position","floating"],["required","","formControlName","id","type","text"],["required","","formControlName","name","type","text"],["required","","formControlName","clsroomcode","type","text","disabled","",3,"ngModel","ngModelChange"],["required","","formControlName","sub","type","text","disabled","",3,"ngModel","ngModelChange"],["required","","formControlName","path","type","text"],[1,"ion-padding-top"],["color","blackwhite","type","submit","expand","block","shape","round",3,"disabled"]],template:function(e,t){1&e&&(m.Nb(0,"ion-toolbar"),m.Nb(1,"ion-buttons",0),m.Nb(2,"ion-button",1),m.Vb("click",(function(){return t.closeModal()})),m.Lb(3,"ion-icon",2),m.Mb(),m.Mb(),m.Mb(),m.Nb(4,"form",3),m.Vb("ngSubmit",(function(){return t.onSubmit()})),m.Nb(5,"ion-grid",4),m.Nb(6,"ion-row",5),m.Nb(7,"ion-col",6),m.Nb(8,"h6"),m.mc(9,"ADD ASSIGNMENT"),m.Mb(),m.Mb(),m.Mb(),m.Nb(10,"ion-row",7),m.Nb(11,"ion-col",8),m.Nb(12,"ion-item"),m.Nb(13,"ion-label",9),m.mc(14,"ID"),m.Mb(),m.Lb(15,"ion-input",10),m.Mb(),m.Mb(),m.Mb(),m.Nb(16,"ion-row",7),m.Nb(17,"ion-col",8),m.Nb(18,"ion-item"),m.Nb(19,"ion-label",9),m.mc(20,"Name"),m.Mb(),m.Lb(21,"ion-input",11),m.Mb(),m.Mb(),m.Mb(),m.Nb(22,"ion-row",7),m.Nb(23,"ion-col",8),m.Nb(24,"ion-item"),m.Nb(25,"ion-label",9),m.mc(26,"ClassRoom Code"),m.Mb(),m.Nb(27,"ion-input",12),m.Vb("ngModelChange",(function(e){return t.classroomcode=e})),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Nb(28,"ion-row",7),m.Nb(29,"ion-col",8),m.Nb(30,"ion-item"),m.Nb(31,"ion-label",9),m.mc(32,"Subject"),m.Mb(),m.Nb(33,"ion-input",13),m.Vb("ngModelChange",(function(e){return t.subject=e})),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Nb(34,"ion-row",7),m.Nb(35,"ion-col",8),m.Nb(36,"ion-item"),m.Nb(37,"ion-label",9),m.mc(38,"File"),m.Mb(),m.Lb(39,"ion-input",14),m.Mb(),m.Mb(),m.Mb(),m.Nb(40,"ion-row",15),m.Nb(41,"ion-col",8),m.Nb(42,"ion-button",16),m.mc(43," Add Assignment "),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Mb()),2&e&&(m.Ab(4),m.cc("formGroup",t.assignmentForm),m.Ab(23),m.cc("ngModel",t.classroomcode),m.Ab(6),m.cc("ngModel",t.subject),m.Ab(9),m.cc("disabled",t.assignmentForm.invalid))},directives:[u.Q,u.g,u.f,u.s,l.n,l.h,l.c,u.q,u.J,u.m,u.w,u.A,u.v,u.cb,l.l,l.g,l.b],styles:["form[_ngcontent-%COMP%]{margin:auto 0}h6[_ngcontent-%COMP%]{letter-spacing:.4rem}"]}),R);function J(e,t){1&e&&(m.Nb(0,"ion-list"),m.Nb(1,"ion-item",4),m.Nb(2,"ion-label"),m.mc(3,"There is no record"),m.Mb(),m.Mb(),m.Mb())}function $(e,t){if(1&e&&(m.Nb(0,"ion-item"),m.Lb(1,"ion-icon",9),m.Nb(2,"ion-note",10),m.mc(3,"Last Date: 10-Jun-20"),m.Mb(),m.Nb(4,"ion-label"),m.Nb(5,"h2"),m.mc(6),m.Mb(),m.Nb(7,"p"),m.mc(8,"Uploaded: 26th-Jun-20"),m.Mb(),m.Mb(),m.Mb()),2&e){var o=t.$implicit;m.Ab(6),m.nc(o.name)}}function Q(e,t){if(1&e&&(m.Nb(0,"div"),m.Nb(1,"ion-list-header"),m.Nb(2,"ion-label"),m.mc(3,"All"),m.Mb(),m.Nb(4,"ion-buttons"),m.Nb(5,"ion-button",5),m.Lb(6,"ion-icon",6),m.Mb(),m.Mb(),m.Mb(),m.Nb(7,"ion-virtual-scroll",7),m.lc(8,$,9,1,"ion-item",8),m.Mb(),m.Mb()),2&e){var o=m.Xb();m.Ab(7),m.cc("items",o.assignments)}}var U,W,Y,Z,ee=((U=function(){function e(t,o,n){_classCallCheck(this,e),this.sharedSubjectData=t,this.assignmentService=o,this.modalController=n,this.subs=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.subs.push(this.sharedSubjectData.classroomcode.subscribe((function(t){return e.classroomcode=t}))),this.subs.push(this.sharedSubjectData.subject.subscribe((function(t){return e.subject=t}))),this.subs.push(this.assignmentService.getAssignmentForSubject(this.classroomcode,this.subject).subscribe((function(t){e.assignments=t})))}},{key:"ngOnDestroy",value:function(){this.subs.forEach((function(e){e.unsubscribe()}))}},{key:"addItem",value:function(){return Object(M.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:z,componentProps:{classroomcode:this.classroomcode,subject:this.subject}});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}}]),e}()).\u0275fac=function(e){return new(e||U)(m.Kb(A),m.Kb(T),m.Kb(u.V))},U.\u0275cmp=m.Eb({type:U,selectors:[["app-assignmenthistory"]],decls:6,vars:2,consts:[[4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","blackwhite",3,"click"],["name","add-outline"],["lines","none"],["color","blackwhite"],["slot","icon-only","name","filter-outline"],[3,"items"],[4,"virtualItem"],["slot","start","name","clipboard-outline"],["slot","end","color","danger"]],template:function(e,t){1&e&&(m.Nb(0,"ion-content"),m.lc(1,J,4,0,"ion-list",0),m.lc(2,Q,9,1,"div",0),m.Nb(3,"ion-fab",1),m.Nb(4,"ion-fab-button",2),m.Vb("click",(function(){return t.addItem()})),m.Lb(5,"ion-icon",3),m.Mb(),m.Mb(),m.Mb()),2&e&&(m.Ab(1),m.cc("ngIf",0===t.assignments.length),m.Ab(1),m.cc("ngIf",0!==t.assignments.length))},directives:[u.n,b.i,u.o,u.p,u.s,u.B,u.w,u.A,u.C,u.g,u.f,u.R,u.db,u.H],styles:[""]}),U),te=o("OmBq"),oe=[{path:"",component:(W=function(){function e(t,o,n,i){_classCallCheck(this,e),this.activatedRoute=t,this.router=o,this.classroomService=n,this.sharedSubjectData=i,this.assignmenthistory=ee,this.noteshistory=H,this.examhistory=q}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.activatedRoute.queryParams.subscribe((function(t){t.classroomcode&&t.subject?(e.sub=t.subject,e.classroomService.getClass(t.classroomcode).subscribe((function(t){e.cls=t})),console.log(t.classroomcode),console.log(t.subject),console.log(e.cls)):e.router.navigate([""]),e.sharedSubjectData.setData(e.cls.Id,e.sub)}))}}]),e}(),W.\u0275fac=function(e){return new(e||W)(m.Kb(g.a),m.Kb(g.g),m.Kb(te.a),m.Kb(A))},W.\u0275cmp=m.Eb({type:W,selectors:[["app-class-subject"]],decls:30,vars:5,consts:[[1,"ion-no-border"],["slot","start"],["slot","top"],["name","clipboard-outline"],["name","reader-outline"],["name","school-outline"],["animated","true","swipeGesture","true",3,"root"]],template:function(e,t){1&e&&(m.Nb(0,"ion-header",0),m.Nb(1,"ion-toolbar"),m.Nb(2,"ion-buttons",1),m.Lb(3,"ion-back-button"),m.Mb(),m.Nb(4,"ion-title"),m.mc(5),m.Mb(),m.Mb(),m.Mb(),m.Nb(6,"super-tabs"),m.Nb(7,"super-tabs-toolbar",2),m.Nb(8,"super-tab-button"),m.Lb(9,"ion-icon",3),m.Nb(10,"ion-label"),m.mc(11,"Assignments"),m.Mb(),m.Mb(),m.Nb(12,"super-tab-button"),m.Lb(13,"ion-icon",4),m.Nb(14,"ion-label"),m.mc(15,"Notes"),m.Mb(),m.Mb(),m.Nb(16,"super-tab-button"),m.Lb(17,"ion-icon",5),m.Nb(18,"ion-label"),m.mc(19,"Exams"),m.Mb(),m.Mb(),m.Mb(),m.Nb(20,"super-tabs-container"),m.Nb(21,"super-tab"),m.Nb(22,"ion-content"),m.Lb(23,"ion-nav",6),m.Mb(),m.Mb(),m.Nb(24,"super-tab"),m.Nb(25,"ion-content"),m.Lb(26,"ion-nav",6),m.Mb(),m.Mb(),m.Nb(27,"super-tab"),m.Nb(28,"ion-content"),m.Lb(29,"ion-nav",6),m.Mb(),m.Mb(),m.Mb(),m.Mb()),2&e&&(m.Ab(5),m.pc("",t.cls.Name," ",t.sub,""),m.Ab(18),m.cc("root",t.assignmenthistory),m.Ab(3),m.cc("root",t.noteshistory),m.Ab(3),m.cc("root",t.examhistory))},directives:[u.r,u.Q,u.g,u.d,u.e,u.P,p.c,p.f,p.b,u.s,u.A,p.d,p.a,u.n,u.G,u.W],styles:["*[_ngcontent-%COMP%]{--super-tabs-toolbar-background:var(--ion-color-blackwhite-contrast);--st-indicator-color:var(--ion-color-blackwhite);--st-base-color-inactive:var(--ion-color-blackwhite-tint);--st-base-color-active:var(--ion-color-blackwhite-shade)}super-tabs-toolbar[_ngcontent-%COMP%]{color:#fff}"]}),W)}],ne=((Z=function e(){_classCallCheck(this,e)}).\u0275mod=m.Ib({type:Z}),Z.\u0275inj=m.Hb({factory:function(e){return new(e||Z)},imports:[[g.k.forChild(oe)],g.k]}),Z),ie=((Y=function e(){_classCallCheck(this,e)}).\u0275mod=m.Ib({type:Y}),Y.\u0275inj=m.Hb({factory:function(e){return new(e||Y)},imports:[[b.b,l.d,u.S,ne,p.e,f,h,d]]}),Y)}}]);
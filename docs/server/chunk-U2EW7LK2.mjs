import './polyfills.server.mjs';
import{$ as N,A as m,B as E,I as q,K as w,L as O,M as k,N as T,O as J,P as Q,Q as X,R as Z,U as ee,Y as te,Z as ie,a as j,aa as ne,b as F,c as M,d as B,e as z,f as L,g as A,h as G,i as S,j as b,k as y,l as R,m as l,n as p,o as d,p as K,q as g,r,s as o,t as f,u as U,v as W,w as C,x as _,y as I,z as s}from"./chunk-ESWG22TQ.mjs";import{a as Y}from"./chunk-KRLCULJA.mjs";var x=class x{};x.HOST="v3.football.api-sports.io",x.BASE_API_URL=`https://${x.HOST}/`,x.API_KEY="6919685f178a943208f0b8c229975acc",x.CURRENT_SEASON=new Date().getFullYear();var u=x,re=[{country:"England",league_id:39,active:!0},{country:"Spain",league_id:140,active:!1},{country:"Germany",league_id:78,active:!1},{country:"France",league_id:61,active:!1},{country:"Italy",league_id:135,active:!1}];var V=function(e){return e[e.ENGLAND=39]="ENGLAND",e[e.SPAIN=140]="SPAIN",e[e.GERMANY=78]="GERMANY",e[e.FRANCE=61]="FRANCE",e[e.ITALY=135]="ITALY",e}(V||{});var D=(()=>{let t=class t{constructor(){this.cacheStore={},this.currentLeague=V.ENGLAND,this.isLoading=!1}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function he(e,t){if(e&1){let a=C();r(0,"tr")(1,"td"),s(2),o(),r(3,"td"),f(4,"img",2),o(),r(5,"td")(6,"a",3),_("click",function(){let c=b(a).$implicit,v=I();return y(v.onClickTeam(c.team.id))}),s(7),o()(),r(8,"td"),s(9),o(),r(10,"td"),s(11),o(),r(12,"td"),s(13),o(),r(14,"td"),s(15),o(),r(16,"td"),s(17),o(),r(18,"td"),s(19),o()()}if(e&2){let a=t.$implicit;l(2),m(a.rank),l(2),d("src",a.team.logo,R),l(3),m(a.team.name),l(2),m(a.all.played),l(2),m(a.all.win),l(2),m(a.all.lose),l(2),m(a.all.draw),l(2),m(a.goalsDiff),l(2),m(a.points)}}var se=(()=>{let t=class t{constructor(n,i){this.globalService=n,this.router=i,this.router.events.subscribe(()=>{let c=this.router.getCurrentNavigation();c&&c.extras.state&&(this.leagueStandingData=c.extras.state.data.response[0].league.standings[0],this.globalService.isLoading=!1)})}onClickTeam(n){this.globalService.isLoading=!0,this.router.navigate(["/teams",n])}};t.\u0275fac=function(i){return new(i||t)(p(D),p(N))},t.\u0275cmp=S({type:t,selectors:[["app-league-standing"]],standalone:!0,features:[E],decls:22,vars:1,consts:[[1,"px-4","pb-4"],[4,"ngFor","ngForOf"],["width","30","alt","team logo",3,"src"],["href","javascript:void(0)",1,"link-offset-2","link-offset-3-hover","link-underline","link-underline-opacity-0","link-underline-opacity-75-hover",3,"click"]],template:function(i,c){i&1&&(r(0,"div",0)(1,"table")(2,"tHead")(3,"tr"),f(4,"th")(5,"th"),r(6,"th"),s(7,"Name"),o(),r(8,"th"),s(9,"Games"),o(),r(10,"th"),s(11,"W"),o(),r(12,"th"),s(13,"L"),o(),r(14,"th"),s(15,"D"),o(),r(16,"th"),s(17,"Goal Difference"),o(),r(18,"th"),s(19,"Points"),o()()(),r(20,"tBody"),g(21,he,20,9,"tr",1),o()()()),i&2&&(l(21),d("ngForOf",c.leagueStandingData))},dependencies:[k,w],styles:["table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px;text-align:center}"]});let e=t;return e})();var H=(()=>{let t=class t{constructor(n){this.httpClient=n}get(n,i,c){let v=u.BASE_API_URL+i,h=new Headers;return h.append("x-rapidapi-key",u.API_KEY),h.append("x-rapidapi-host",u.HOST),this.httpClient.get(v,Y({params:n,headers:h},c))}};t.\u0275fac=function(i){return new(i||t)(G(J))},t.\u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function xe(e,t){if(e&1){let a=C();U(0),r(1,"a",5),_("click",function(){let c=b(a).$implicit,v=I();return y(v.onClickLeague(c))}),s(2),o(),W()}if(e&2){let a=t.$implicit;l(1),K("navbar-brand nav-link ",a.active?"active":"",""),d("id",a.country.toLowerCase()+"Select"),l(1),m(a.country)}}function Se(e,t){e&1&&(r(0,"div",6)(1,"div",7)(2,"span",8),s(3,"Loading..."),o()()())}var ce=(()=>{let t=class t{get isLoading(){return this.globalService.isLoading}constructor(n,i,c){this.globalService=n,this.httpService=i,this.router=c,this._onDestroy$=new j,this.navItems=structuredClone(re)}ngOnDestroy(){this._onDestroy$.next()}ngOnInit(){this.navItems.forEach(n=>{let i=new T().append("league",n.league_id).append("season",u.CURRENT_SEASON),c={redirect:"follow"};this.globalService.cacheStore[n.league_id]=this.httpService.get(i,"standings",c).pipe(z(1))}),this.navigateLeague(this.navItems[0])}onClickLeague(n){n.active||(this.navItems.map(i=>(i.league_id===n.league_id?(i.active=!0,this.globalService.currentLeague=i.league_id):i.active=!1,i)),this.navigateLeague(n))}navigateLeague(n){this.globalService.isLoading=!0,this.globalService.cacheStore[n.league_id].pipe(L(this._onDestroy$),M(i=>F(()=>console.log(i)))).subscribe(i=>{this.router.navigate(["/"],{state:{data:i}})})}};t.\u0275fac=function(i){return new(i||t)(p(D),p(H),p(N))},t.\u0275cmp=S({type:t,selectors:[["app-root"]],standalone:!0,features:[E],decls:6,vars:2,consts:[[1,"container","p-4","big-image"],[1,"navbar","bg-body-tertiary","rounded-pill","nav-underline"],[1,"container-fluid","justify-content-around"],[4,"ngFor","ngForOf"],["id","spinner","class","d-flex justify-content-center align-items-center","style","backdrop-filter: brightness(.5);",4,"ngIf"],["href","javascript:void(0)",3,"id","click"],["id","spinner",1,"d-flex","justify-content-center","align-items-center",2,"backdrop-filter","brightness(.5)"],["role","status",1,"spinner-border"],[1,"visually-hidden"]],template:function(i,c){i&1&&(r(0,"header",0)(1,"nav",1)(2,"div",2),g(3,xe,3,5,"ng-container",3),o()()(),g(4,Se,4,0,"div",4),f(5,"router-outlet")),i&2&&(l(3),d("ngForOf",c.navItems),l(1),d("ngIf",c.isLoading))},dependencies:[k,w,O,ie],styles:["#spinner[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;left:0}"]});let e=t;return e})();function be(e,t){if(e&1&&(r(0,"tr")(1,"td"),f(2,"img",4),o(),r(3,"td"),s(4),o(),r(5,"td"),s(6),o(),r(7,"td"),s(8,"-"),o(),r(9,"td"),s(10),o(),r(11,"td"),s(12),o(),r(13,"td"),f(14,"img",5),o()()),e&2){let a=t.$implicit;l(2),d("src",a.teams.away.logo,R),l(2),m(a.teams.away.name),l(2),m(a.goals.away),l(4),m(a.goals.home),l(2),m(a.teams.home.name),l(2),d("src",a.teams.home.logo,R)}}function ye(e,t){if(e&1){let a=C();r(0,"button",6),_("click",function(){b(a);let i=I();return y(i.onClickBack())}),s(1,"Back"),o()}}var me=(()=>{let t=class t{constructor(n,i,c,v){this.route=n,this.router=i,this.httpService=c,this.globalService=v,this._onDestroy$=new j,this.route.params.pipe(B(h=>{let ge=new T().append("team",h.id).append("season",u.CURRENT_SEASON),fe={redirect:"follow"};return this.httpService.get(ge,"fixtures",fe).pipe(L(this._onDestroy$),M(ve=>F(()=>console.log(ve))))})).subscribe(h=>{this.gameResults=h.response.slice(0,10),this.globalService.isLoading=!1})}onDestroy(){this._onDestroy$.next()}onClickBack(){this.globalService.isLoading=!0,this.globalService.cacheStore[this.globalService.currentLeague].pipe(L(this._onDestroy$),M(n=>F(()=>console.log(n)))).subscribe(n=>{this.router.navigate(["/"],{state:{data:n}})})}};t.\u0275fac=function(i){return new(i||t)(p(te),p(N),p(H),p(D))},t.\u0275cmp=S({type:t,selectors:[["app-team"]],standalone:!0,features:[E],decls:4,vars:2,consts:[[1,"px-4","pb-4"],[1,"w-100"],[4,"ngFor","ngForOf"],["type","button","class","btn btn-primary mt-4 w-25",3,"click",4,"ngIf"],["width","30","alt","away team logo",3,"src"],["width","30","alt","home team logo",3,"src"],["type","button",1,"btn","btn-primary","mt-4","w-25",3,"click"]],template:function(i,c){i&1&&(r(0,"div",0)(1,"table",1),g(2,be,15,6,"tr",2),o(),g(3,ye,2,0,"button",3),o()),i&2&&(l(2),d("ngForOf",c.gameResults),l(1),d("ngIf",c.gameResults))},dependencies:[k,w,O],styles:["table[_ngcontent-%COMP%]{border-collapse:collapse;border:1px solid #ddd}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:8px;text-align:center}"]});let e=t;return e})();var pe=[{path:"",component:se},{path:"teams/:id",component:me}];var de={providers:[ne(pe),Z(),Q()]};var Ce={providers:[ee()]},ue=q(de,Ce);var _e=()=>X(ce,ue),at=_e;export{at as a};

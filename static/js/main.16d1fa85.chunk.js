(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={Label:"Filter_Label__3FoRN",Input:"Filter_Input__20k7U"}},21:function(t,e,n){t.exports={Container:"Container_Container__3tQ9A"}},36:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(7),s=n.n(o),i=n(3),l=n(18),b=n(11),u=n(4),j=n(19),d=n.n(j),O=n(5),m=n(20),p=n.n(m),h=n(12),f=n(2),_=n(41),x=Object(u.b)("contacts/add",(function(t,e){return{payload:{id:Object(_.a)(),name:t,number:e}}})),C=Object(u.b)("contacts/delete"),v=Object(u.b)("contacts/filter"),N=Object(u.c)([],(a={},Object(h.a)(a,x,(function(t,e){var n=e.payload;return[].concat(Object(b.a)(t),[n])})),Object(h.a)(a,C,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),L=Object(u.c)("",Object(h.a)({},v,(function(t,e){return e.payload}))),g=Object(f.b)({items:N,filter:L}),I=[].concat(Object(b.a)(Object(u.d)({serializableCheck:{ignoredActions:[O.a,O.f,O.b,O.c,O.d,O.e]}})),[d.a]),y={key:"contacts",storage:p.a,blacklist:["filter"]},k=Object(u.a)({reducer:{contacts:Object(O.g)(y,g)},middleware:I,devTools:!1}),A=Object(O.h)(k),F=n(21),B=n.n(F),z=n(1);var w=function(t){var e=t.children;return Object(z.jsx)("div",{className:B.a.Container,children:e})},S=n(17),Z=n(6),T=n.n(Z);var J=function(){var t=Object(i.b)(),e=Object(c.useState)(""),n=Object(S.a)(e,2),a=n[0],r=n[1],o=Object(c.useState)(""),s=Object(S.a)(o,2),l=s[0],b=s[1],u=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":b(a);break;default:return}},j=function(){r(""),b("")};return Object(z.jsxs)("form",{className:T.a.Form,onSubmit:function(e){e.preventDefault(),t(x(a,l)),j()},children:[Object(z.jsxs)("label",{className:T.a.Label,children:["Name",Object(z.jsx)("input",{className:T.a.Input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:a,onChange:u,placeholder:"Ivan Ivanov"})]}),Object(z.jsxs)("label",{className:T.a.Label,children:["Number",Object(z.jsx)("input",{className:T.a.Input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:u,value:l,placeholder:"111-11-11"})]}),Object(z.jsx)("button",{className:T.a.Button,type:"submit",children:"Add contact"})]})},M=function(t){return t.contacts.items},q=function(t){return t.contacts.filter},Q=function(t){var e=M(t),n=q(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},R=n(16),P=n.n(R),Y=function(){var t=Object(i.b)(),e=Object(i.c)(q);return Object(i.c)(M).length?Object(z.jsxs)("label",{className:P.a.Label,children:["Find contacts by name",Object(z.jsx)("input",{type:"text",name:"filter",className:P.a.Input,value:e,onChange:function(e){return t(v(e.target.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}):Object(z.jsx)("p",{children:"Your phonebook is empty. Please add contact."})},$=n(8),D=n.n($),E=function(){var t=Object(i.b)(),e=Object(i.c)(Q);return Object(z.jsx)("ul",{className:D.a.List,children:e.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(z.jsxs)("li",{className:D.a.Item,children:[Object(z.jsxs)("p",{className:D.a.Text,children:[a,": ",Object(z.jsx)("span",{className:D.a.Span,children:c})]}),Object(z.jsx)("button",{className:D.a.Button,type:"button",onClick:function(){return t(C(n))}})]},n)}))})},G=n(22);n(35),n(36);var H=function(){return Object(z.jsxs)(w,{children:[Object(z.jsx)("h1",{children:"Phonebook"}),Object(z.jsx)(J,{}),Object(z.jsx)("h2",{children:"Contacts"}),Object(z.jsx)(Y,{}),Object(z.jsx)(E,{}),Object(z.jsx)(G.a,{autoClose:3700})]})};n(37),n(38);s.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(i.a,{store:k,children:Object(z.jsx)(l.a,{loading:null,persistor:A,children:Object(z.jsx)(H,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={Form:"ContactForm_Form__Vd_-O",Label:"ContactForm_Label___hNWO",Input:"ContactForm_Input__HKadG",Button:"ContactForm_Button__3_CQf"}},8:function(t,e,n){t.exports={List:"ContactList_List__20gyh",Item:"ContactList_Item__3bY-S",Text:"ContactList_Text__QTMR-",Span:"ContactList_Span__2irRB",Button:"ContactList_Button__otII1"}}},[[39,1,2]]]);
//# sourceMappingURL=main.16d1fa85.chunk.js.map
(this.webpackJsonpcoursera_react=this.webpackJsonpcoursera_react||[]).push([[0],{103:function(e,t,s){},104:function(e,t,s){},156:function(e,t,s){"use strict";s.r(t);var n=s(2),c=s.n(n),r=s(18),a=s.n(r),i=(s(100),s(101),s(102),s(103),s(24)),o=s(25),l=s(27),j=s(26),d=(s(104),s(10)),h=s(29),m=s(7),b=s(36),u=s(11),O="ADD_DISHES",x="DISHES_LOADING",f="DISHES_FAILED",p="ADD_COMMENT",g="ADD_COMMENTS",N="COMMENTS_FAILED",v="ADD_PROMOS",y="PROMOS_LOADING",w="PROMOS_FAILED",M="ADD_LEADERS",L="LEADERS_LOADING",k="LEADERS_FAILED",C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,errMess:null,dishes:t.payload});case x:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case f:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(m.a)(Object(m.a)({},e),{},{errMess:null,comments:t.payload});case N:return Object(m.a)(Object(m.a)({},e),{},{errMess:t.payload});case p:var s=t.payload;return s.id=e.comments.length,s.date=(new Date).toISOString(),Object(m.a)(Object(m.a)({},e),{},{comments:e.comments.concat(s)});default:return e}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,errMess:null,promotions:t.payload});case y:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case w:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,errMess:null,leaders:t.payload});case L:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case k:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},D=s(93),T=s(94),I=s.n(T),A={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},R=s(14),q=s(59),P=s(90),H=s(157),_=s(158),Y=s(159),U=s(160),B=s(161),W=s(162),G=s(30),K=s(0),z=function(){return Object(K.jsxs)("div",{className:"col-12",children:[Object(K.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(K.jsx)("p",{children:"Loading . . ."})]})},J="http://localhost:3001/api/";function Z(e){var t=e.item,s=e.isLoading,n=e.errMess;return s?Object(K.jsx)(z,{}):n?Object(K.jsx)("h4",{children:n}):Object(K.jsx)(G.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(K.jsxs)(H.a,{children:[Object(K.jsx)(_.a,{src:J+t.image,alt:t.name}),Object(K.jsxs)(Y.a,{children:[Object(K.jsx)(U.a,{children:t.name}),t.designation?Object(K.jsx)(B.a,{children:t.designation}):null,Object(K.jsx)(W.a,{children:t.description})]})]})})}var $=function(e){return Object(K.jsx)("div",{className:"container",children:Object(K.jsxs)("div",{className:"row align-items-start",children:[Object(K.jsx)("div",{className:"col-12 col-md m-1",children:Object(K.jsx)(Z,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})}),Object(K.jsx)("div",{className:"col-12 col-md m-1",children:Object(K.jsx)(Z,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})}),Object(K.jsx)("div",{className:"col-12 col-md m-1",children:Object(K.jsx)(Z,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess})})]})})},V=s(163),Q=s(164),X=s(165),ee=function(e){var t=e.dish;return Object(K.jsx)(H.a,{children:Object(K.jsxs)(d.b,{to:"/menu/".concat(t.id),children:[Object(K.jsx)(_.a,{width:"100%",src:J+t.image,alt:t.name}),Object(K.jsx)(V.a,{children:Object(K.jsx)(U.a,{tag:"h5",children:t.name})})]})})},te=function(e){var t=e.dishes.dishes.map((function(e){return Object(K.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(K.jsx)(ee,{dish:e})},e.id)}));return e.dishes.isLoading?Object(K.jsx)("div",{className:"container",children:Object(K.jsx)("div",{className:"row",children:Object(K.jsx)(z,{})})}):e.dishes.errMess?Object(K.jsx)("div",{className:"container",children:Object(K.jsx)("div",{className:"row",children:Object(K.jsx)("h4",{children:e.dishes.errMess})})}):Object(K.jsxs)("div",{className:"container",children:[Object(K.jsxs)("div",{className:"row",children:[Object(K.jsxs)(Q.a,{children:[Object(K.jsx)(X.a,{children:Object(K.jsx)(d.b,{to:"/home",children:"Home"})}),Object(K.jsx)(X.a,{active:!0,children:"Menu"})]}),Object(K.jsxs)("div",{className:"col-12",children:[Object(K.jsx)("h3",{children:"Menu"}),Object(K.jsx)("hr",{})]})]}),Object(K.jsx)("div",{className:"row",children:t})]})},se=s(19),ne=s(166),ce=s(167),re=s(168),ae=s(169),ie=function(e){return e&&e.length},oe=function(e){return function(t){return!t||t.length<=e}},le=function(e){return function(t){return t&&t.length>=e}},je=function(e){return!isNaN(Number(e))},de=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},he=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(se.a)(n)),n}return Object(o.a)(s,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),this.props.resetFeedbackForm()}},{key:"validate",value:function(e,t,s,n){var c={firstname:"",lastname:"",telnum:"",email:""};this.state.touched.firstname&&e.lendth<3?c.firstname="First Name should be >= 3 characters":this.state.touched.firstname&&e.length>10&&(c.firstname="First Name should be <= 10 characters"),this.state.touched.lastname&&t.length<3?c.lastname="Last Name should be >= 3 characters":this.state.touched.lastname&&t.length>10&&(c.lastname="Last Name should be <= 10 characters");return this.state.touched.telnum&&!/^\d+$/.test(s)&&(c.telnum="Tel. Number should contain only numbers"),this.state.touched.email&&1!==n.split("").filter((function(e){return"@"===e})).length&&(c.email="Email should contain a @"),c}},{key:"render",value:function(){var e=this;return Object(K.jsxs)("div",{className:"container",children:[Object(K.jsxs)("div",{className:"row",children:[Object(K.jsxs)(Q.a,{children:[Object(K.jsx)(X.a,{children:Object(K.jsx)(d.b,{to:"/home",children:"Home"})}),Object(K.jsx)(X.a,{active:!0,children:"Contact Us"})]}),Object(K.jsxs)("div",{className:"col-12",children:[Object(K.jsx)("h3",{children:"Contact Us"}),Object(K.jsx)("hr",{})]})]}),Object(K.jsxs)("div",{className:"row row-content",children:[Object(K.jsx)("div",{className:"col-12",children:Object(K.jsx)("h3",{children:"Location Information"})}),Object(K.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(K.jsx)("h5",{children:"Our Address"}),Object(K.jsxs)("address",{children:["121, Clear Water Bay Road",Object(K.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(K.jsx)("br",{}),"HONG KONG",Object(K.jsx)("br",{}),Object(K.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(K.jsx)("br",{}),Object(K.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(K.jsx)("br",{}),Object(K.jsx)("i",{className:"fa fa-envelope"}),": ",Object(K.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(K.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(K.jsx)("h5",{children:"Map of our Location"})}),Object(K.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(K.jsxs)("div",{className:"btn-group",role:"group",children:[Object(K.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(K.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(K.jsxs)("a",{role:"button",className:"btn btn-info",href:"#top",children:[Object(K.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(K.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(K.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(K.jsxs)("div",{className:"row row-content",children:[Object(K.jsx)("div",{className:"col-12",children:Object(K.jsx)("h3",{children:"Send us Your Feedback"})}),Object(K.jsx)("div",{className:"col12 col-md-9",children:Object(K.jsxs)(u.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(K.jsxs)(ne.a,{className:"form-group",children:[Object(K.jsx)(ce.a,{htmlFor:"firstname",md:2,children:"First Name"}),Object(K.jsxs)(re.a,{md:10,children:[Object(K.jsx)(u.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:ie,minLength:le(3),maxLength:oe(15)}}),Object(K.jsx)(u.Errors,{model:".firstname",show:"touched",className:"text-danger",messages:{required:"Required ",minLength:"Must be greater than 2 characters ",maxLength:"Must be 15 characters or less "}})]})]}),Object(K.jsxs)(ne.a,{className:"form-group",children:[Object(K.jsx)(ce.a,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(K.jsxs)(re.a,{md:10,children:[Object(K.jsx)(u.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:ie,minLength:le(3),maxLength:oe(15)}}),Object(K.jsx)(u.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters ",maxLength:"Must be 15 characters or less "}})]})]}),Object(K.jsxs)(ne.a,{className:"form-group",children:[Object(K.jsx)(ce.a,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(K.jsxs)(re.a,{md:10,children:[Object(K.jsx)(u.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. number",className:"form-control",validators:{required:ie,minLength:le(3),maxLength:oe(15),isNumber:je}}),Object(K.jsx)(u.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 numbers ",maxLength:"Must be 15 numbers or less ",isNumber:"Must be a number "}})]})]}),Object(K.jsxs)(ne.a,{className:"form-group",children:[Object(K.jsx)(ce.a,{htmlFor:"email",md:2,children:"Email"}),Object(K.jsxs)(re.a,{md:10,children:[Object(K.jsx)(u.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:ie,validEmail:de}}),Object(K.jsx)(u.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required ",validEmail:"Invalid Email Address "}})]})]}),Object(K.jsxs)(ne.a,{className:"form-group",children:[Object(K.jsx)(re.a,{md:{size:6,offset:2},children:Object(K.jsx)("div",{className:"form-check",children:Object(K.jsxs)(ce.a,{check:!0,children:[Object(K.jsx)(u.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",Object(K.jsx)("strong",{children:"May we contact you?"})]})})}),Object(K.jsx)(re.a,{md:{size:3,offset:1},children:Object(K.jsxs)(u.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(K.jsx)("option",{children:"Tel."}),Object(K.jsx)("option",{children:"Email"})]})})]}),Object(K.jsxs)(ne.a,{className:"form-group",children:[Object(K.jsx)(ce.a,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(K.jsx)(re.a,{md:10,children:Object(K.jsx)(u.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})})]}),Object(K.jsx)(ne.a,{className:"form-group",children:Object(K.jsx)(re.a,{md:{size:10,offset:2},children:Object(K.jsx)(ae.a,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})}}]),s}(n.Component),me=s(170),be=s(171),ue=s(172),Oe=s(173),xe=s(174),fe=s(175),pe=s(176),ge=s(184),Ne=s(177),ve=s(178),ye=s(179),we=s(180),Me=s(181),Le=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(se.a)(n)),n.toggleModal=n.toggleModal.bind(Object(se.a)(n)),n.handleLogin=n.handleLogin.bind(Object(se.a)(n)),n}return Object(o.a)(s,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember me:"+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(K.jsxs)(c.a.Fragment,{children:[Object(K.jsx)(me.a,{dark:!0,expand:"md",children:Object(K.jsxs)("div",{className:"container",children:[Object(K.jsx)(be.a,{onClick:this.toggleNav}),Object(K.jsx)(ue.a,{className:"mr-auto",href:"/",children:Object(K.jsx)("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})}),Object(K.jsxs)(Oe.a,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(K.jsxs)(xe.a,{navbar:!0,children:[Object(K.jsx)(fe.a,{children:Object(K.jsxs)(d.c,{className:"nav-link",to:"/home",children:[Object(K.jsx)("span",{className:"fa fa-home fa-lg"})," Home"]})}),Object(K.jsx)(fe.a,{children:Object(K.jsxs)(d.c,{className:"nav-link",to:"/aboutus",children:[Object(K.jsx)("span",{className:"fa fa-info fa-lg"})," About Us"]})}),Object(K.jsx)(fe.a,{children:Object(K.jsxs)(d.c,{className:"nav-link",to:"/menu",children:[Object(K.jsx)("span",{className:"fa fa-list fa-lg"})," Menu"]})}),Object(K.jsx)(fe.a,{children:Object(K.jsxs)(d.c,{className:"nav-link",to:"/contactus",children:[Object(K.jsx)("span",{className:"fa fa-address-card fa-lg"})," Contact Us"]})})]}),Object(K.jsx)(xe.a,{className:"ml-auto",navbar:!0,children:Object(K.jsx)(fe.a,{children:Object(K.jsxs)(ae.a,{outline:!0,onClick:this.toggleModal,children:[Object(K.jsx)("span",{className:"fa fa-sign-in fa-lg"})," Login"]})})})]})]})}),Object(K.jsx)(pe.a,{className:"jumbotron-fluid",children:Object(K.jsx)("div",{className:"container",children:Object(K.jsx)("div",{className:"row row-header",children:Object(K.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(K.jsx)("h1",{children:"Ristorante Con Fusion"}),Object(K.jsx)("p",{children:"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"})]})})})}),Object(K.jsxs)(ge.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(K.jsx)(Ne.a,{toggle:this.toggleModal,children:"Login"}),Object(K.jsx)(ve.a,{children:Object(K.jsxs)(ye.a,{onSubmit:this.handleLogin,children:[Object(K.jsxs)(we.a,{children:[Object(K.jsx)(ce.a,{htmlFor:"username",children:"Username"}),Object(K.jsx)(Me.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(K.jsxs)(we.a,{children:[Object(K.jsx)(ce.a,{htmlFor:"password",children:"Password"}),Object(K.jsx)(Me.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(K.jsx)(we.a,{check:!0,children:Object(K.jsxs)(ce.a,{check:!0,children:[Object(K.jsx)(Me.a,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember Me"]})}),Object(K.jsx)(ae.a,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]})]})}}]),s}(n.Component);var ke=function(e){return Object(K.jsx)("div",{className:"footer",children:Object(K.jsxs)("div",{className:"container",children:[Object(K.jsxs)("div",{className:"row justify-content-center",children:[Object(K.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(K.jsx)("h5",{children:"Links"}),Object(K.jsxs)("ul",{className:"list-unstyled",children:[Object(K.jsx)("li",{children:Object(K.jsx)(d.b,{to:"/home",children:"Home"})}),Object(K.jsx)("li",{children:Object(K.jsx)(d.b,{to:"/aboutus",children:"About Us"})}),Object(K.jsx)("li",{children:Object(K.jsx)(d.b,{to:"/menu",children:"Menu"})}),Object(K.jsx)("li",{children:Object(K.jsx)(d.b,{to:"/contactus",children:"Contact Us"})})]})]}),Object(K.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(K.jsx)("h5",{children:"Our Address"}),Object(K.jsxs)("address",{children:["121, Clear Water Bay Road",Object(K.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(K.jsx)("br",{}),"HONG KONG",Object(K.jsx)("br",{}),Object(K.jsx)("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",Object(K.jsx)("br",{}),Object(K.jsx)("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",Object(K.jsx)("br",{}),Object(K.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(K.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(K.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(K.jsxs)("div",{className:"text-center",children:[Object(K.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(K.jsx)("i",{className:"fa fa-google-plus"})}),Object(K.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(K.jsx)("i",{className:"fa fa-facebook"})}),Object(K.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(K.jsx)("i",{className:"fa fa-linkedin"})}),Object(K.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(K.jsx)("i",{className:"fa fa-twitter"})}),Object(K.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(K.jsx)("i",{className:"fa fa-youtube"})}),Object(K.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(K.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(K.jsx)("div",{className:"row justify-content-center",children:Object(K.jsx)("div",{className:"col-auto",children:Object(K.jsx)("p",{children:"\xa9 Copyright 2018 Ristorante Con Fusion"})})})]})})},Ce=function(e){return e&&e.length},Ee=function(e){return function(t){return!t||t.length<=e}},Fe=function(e){var t=e.dish;return Object(K.jsx)(G.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(K.jsxs)(H.a,{children:[Object(K.jsx)(_.a,{width:"100%",src:J+t.image,alt:t.name}),Object(K.jsxs)(Y.a,{children:[Object(K.jsx)(U.a,{tag:"h5",children:t.name}),Object(K.jsx)(W.a,{children:t.description})]})]})})},Se=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(se.a)(n)),n.handleSubmitComment=n.handleSubmitComment.bind(Object(se.a)(n)),n}return Object(o.a)(s,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmitComment",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishID,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,t=this;return Object(K.jsxs)(c.a.Fragment,{children:[Object(K.jsxs)(ae.a,{outline:!0,onClick:this.toggleModal,children:[Object(K.jsx)("span",{className:"fa fa-pencil fa-lg"})," Submit Comment"]}),Object(K.jsxs)(ge.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(K.jsx)(Ne.a,{toggle:this.toggleModal,children:"Submit Comment"}),Object(K.jsx)(ve.a,{children:Object(K.jsxs)(u.LocalForm,{onSubmit:function(e){return t.handleSubmitComment(e)},children:[Object(K.jsx)(ne.a,{children:Object(K.jsx)(ce.a,{htmlFor:"rating",xs:12,children:"Rating"})}),Object(K.jsx)(ne.a,{children:Object(K.jsx)(re.a,{xs:12,children:Object(K.jsxs)(u.Control.select,{model:".rating",name:"rating",className:"form-control",defaultValue:"5",children:[Object(K.jsx)("option",{children:"1"}),Object(K.jsx)("option",{children:"2"}),Object(K.jsx)("option",{children:"3"}),Object(K.jsx)("option",{children:"4"}),Object(K.jsx)("option",{children:"5"})]})})}),Object(K.jsx)(ne.a,{children:Object(K.jsx)(ce.a,{htmlFor:"author",xs:12,children:"Your Name"})}),Object(K.jsx)(ne.a,{children:Object(K.jsxs)(re.a,{xs:12,children:[Object(K.jsx)(u.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:Ce,minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:Ee(15)}}),Object(K.jsx)(u.Errors,{model:".author",show:"touched",className:"text-danger",messages:{required:"Required ",minLength:"Must be greater than 2 characters ",maxLength:"Must be 15 characters or less "}})]})}),Object(K.jsx)(ne.a,{children:Object(K.jsx)(ce.a,{htmlFor:"comment",xs:12,children:"Comment"})}),Object(K.jsx)(ne.a,{children:Object(K.jsx)(re.a,{xs:12,children:Object(K.jsx)(u.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"})})}),Object(K.jsx)(ne.a,{className:"mt-3",children:Object(K.jsx)(re.a,{xs:12,children:Object(K.jsx)(ae.a,{type:"submit",color:"primary",children:"Submit"})})})]})})]})]})}}]),s}(n.Component),De=function(e){var t=e.comments,s=e.postComment,n=e.dishID;if(null!=t){var c=t.map((function(e){return Object(K.jsx)(G.Fade,{in:!0,children:Object(K.jsxs)("li",{className:"list-unstyled",children:[Object(K.jsx)("p",{children:e.comment}),Object(K.jsxs)("p",{children:["-- ",e.author," , ",new Intl.DateTimeFormat("ru-RU",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))]})]})},e.id)}));return Object(K.jsxs)("div",{children:[Object(K.jsx)("h4",{children:"Comments"}),Object(K.jsx)("ul",{className:"px-0",children:Object(K.jsx)(G.Stagger,{in:!0,children:c})}),Object(K.jsx)(Se,{dishID:n,postComment:s})]})}return Object(K.jsxs)("div",{children:[Object(K.jsx)("h4",{children:"Comments"}),Object(K.jsx)(Se,{dishID:n,postComment:s})]})},Te=function(e){return e.isLoading?Object(K.jsx)("div",{className:"container",children:Object(K.jsx)("div",{className:"row",children:Object(K.jsx)(z,{})})}):e.errMess?Object(K.jsx)("div",{className:"container",children:Object(K.jsx)("div",{className:"row",children:Object(K.jsx)("h4",{children:e.errMess})})}):null!=e.dish?Object(K.jsxs)("div",{className:"container",children:[Object(K.jsxs)("div",{className:"row",children:[Object(K.jsxs)(Q.a,{children:[Object(K.jsx)(X.a,{children:Object(K.jsx)(d.b,{to:"/home",children:"Home"})}),Object(K.jsx)(X.a,{children:Object(K.jsx)(d.b,{to:"/menu",children:"Menu"})}),Object(K.jsx)(X.a,{active:!0,children:e.dish.name})]}),Object(K.jsxs)("div",{className:"col-12",children:[Object(K.jsx)("h3",{children:e.dish.name}),Object(K.jsx)("hr",{})]})]}),Object(K.jsxs)("div",{className:"row",children:[Object(K.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(K.jsx)(Fe,{dish:e.dish})}),Object(K.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(K.jsx)(De,{comments:e.comments,postComment:e.postComment,dishID:e.dish.id})})]})]}):Object(K.jsx)("div",{})},Ie=s(182),Ae=s(183),Re=function(e){var t=e.leader;return Object(K.jsxs)(Ie.a,{tag:"li",children:[Object(K.jsx)(Ie.a,{left:!0,middle:!0,children:Object(K.jsx)(Ie.a,{object:!0,src:J+t.image,alt:t.name})}),Object(K.jsxs)(Ie.a,{body:!0,className:"ml-5",children:[Object(K.jsx)(Ie.a,{heading:!0,children:t.name}),t.designation?Object(K.jsx)("p",{children:t.designation}):null,Object(K.jsx)("p",{children:t.description})]})]})};var qe=function(e){var t=e.leaders.leaders.map((function(e){return Object(K.jsx)(G.Fade,{in:!0,children:Object(K.jsx)("div",{className:"col-12 mt-5",children:Object(K.jsx)(Re,{leader:e})})},e.id)}));return e.leaders.isLoading?Object(K.jsx)("div",{className:"container",children:Object(K.jsx)("div",{className:"row",children:Object(K.jsx)(z,{})})}):e.leaders.errMess?Object(K.jsx)("div",{className:"container",children:Object(K.jsx)("div",{className:"row",children:Object(K.jsx)("h4",{children:e.leaders.errMess})})}):Object(K.jsxs)("div",{className:"container",children:[Object(K.jsxs)("div",{className:"row",children:[Object(K.jsxs)(Q.a,{children:[Object(K.jsx)(X.a,{children:Object(K.jsx)(d.b,{to:"/home",children:"Home"})}),Object(K.jsx)(X.a,{active:!0,children:"About Us"})]}),Object(K.jsxs)("div",{className:"col-12",children:[Object(K.jsx)("h3",{children:"About Us"}),Object(K.jsx)("hr",{})]})]}),Object(K.jsxs)("div",{className:"row row-content",children:[Object(K.jsxs)("div",{className:"col-12 col-md-6",children:[Object(K.jsx)("h2",{children:"Our History"}),Object(K.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(K.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(K.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(K.jsx)("div",{className:"col-12 col-md-5",children:Object(K.jsxs)(H.a,{children:[Object(K.jsx)(Ae.a,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(K.jsx)(Y.a,{children:Object(K.jsxs)("dl",{className:"row p-1",children:[Object(K.jsx)("dt",{className:"col-6",children:"Started"}),Object(K.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(K.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(K.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(K.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(K.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(K.jsx)("dt",{className:"col-6",children:"Employees"}),Object(K.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(K.jsx)("div",{className:"col-12",children:Object(K.jsx)(H.a,{children:Object(K.jsx)(Y.a,{className:"bg-faded",children:Object(K.jsxs)("blockquote",{className:"blockquote",children:[Object(K.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(K.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(K.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(K.jsxs)("div",{className:"row row-content",children:[Object(K.jsx)("div",{className:"col-12",children:Object(K.jsx)("h2",{children:"Corporate Leadership"})}),Object(K.jsx)("div",{className:"col-12",children:Object(K.jsx)(Ie.a,{list:!0,children:Object(K.jsx)(G.Stagger,{in:!0,children:t})})})]})]})},Pe=function(e,t,s,n){return function(c){var r={dishID:e,rating:t,author:s,comment:n};return r.date=(new Date).toISOString(),fetch(J+"comments",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return c(function(e){return{type:p,payload:e}}(e))})).catch((function(e){console.log("Your comment could not be posted\nError:",e.message)}))}},He=function(){return{type:x}},_e=function(e){return{type:f,payload:e}},Ye=function(e){return{type:O,payload:e}},Ue=function(e){return{type:N,payload:e}},Be=function(e){return{type:g,payload:e}},We=function(){return{type:y}},Ge=function(e){return{type:w,payload:e}},Ke=function(e){return{type:v,payload:e}},ze=function(){return{type:L}},Je=function(e){return{type:k,payload:e}},Ze=function(e){return{type:M,payload:e}},$e=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"onDishSelect",value:function(e){this.setState({selectedDish:e})}},{key:"render",value:function(){var e=this;return Object(K.jsxs)("div",{children:[Object(K.jsx)(Le,{}),Object(K.jsx)(q.a,{children:Object(K.jsx)(P.a,{classNames:"page",timeout:300,children:Object(K.jsxs)(R.d,{location:this.props.location,children:[Object(K.jsx)(R.b,{path:"/home",component:function(){return Object(K.jsx)($,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),Object(K.jsx)(R.b,{exact:!0,path:"/menu",component:function(){return Object(K.jsx)(te,{dishes:e.props.dishes})}}),Object(K.jsx)(R.b,{path:"/menu/:dishID",component:function(t){var s=t.match;return Object(K.jsx)(Te,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(s.params.dishID,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishID===parseInt(s.params.dishID,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),Object(K.jsx)(R.b,{exact:!0,path:"/contactus",component:function(){return Object(K.jsx)(he,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),Object(K.jsx)(R.b,{exact:!0,path:"/aboutus",component:function(){return Object(K.jsx)(qe,{leaders:e.props.leaders})}}),Object(K.jsx)(R.a,{to:"/home"})]})},this.props.location.key)}),Object(K.jsx)(ke,{})]})}}]),s}(n.Component),Ve=Object(R.g)(Object(h.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(t,s,n,c){return e(Pe(t,s,n,c))},postFeedback:function(t,s,n,c,r,a,i){return e(function(e,t,s,n,c,r,a){return function(i){var o={firstname:e,lastname:t,telnum:s,email:n,agree:c,contactType:r,message:a};return o.date=(new Date).toISOString(),fetch(J+"feedback",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return i(alert("Thank you for your feedback!\n"+JSON.stringify(e)))})).catch((function(e){console.log("Your feedback could not be posted\nError:",e.message)}))}}(t,s,n,c,r,a,i))},fetchDishes:function(){e((function(e){return e(He(!0)),fetch(J+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Ye(t))})).catch((function(t){return e(_e(t.message))}))}))},resetFeedbackForm:function(){e(u.actions.reset("feedback"))},fetchComments:function(){e((function(e){return fetch(J+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Be(t))})).catch((function(t){return e(Ue(t.message))}))}))},fetchPromos:function(){e((function(e){return e(We()),fetch(J+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Ke(t))})).catch((function(t){return e(Ge(t.message))}))}))},fetchLeaders:function(){e((function(e){return e(ze()),fetch(J+"leaders").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Ze(t))})).catch((function(t){return e(Je(t.message))}))}))}}}))($e)),Qe=Object(b.createStore)(Object(b.combineReducers)(Object(m.a)({dishes:C,comments:E,promotions:F,leaders:S},Object(u.createForms)({feedback:A}))),Object(b.applyMiddleware)(D.a,I.a)),Xe=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(K.jsx)(h.Provider,{store:Qe,children:Object(K.jsx)(d.a,{children:Object(K.jsx)("div",{children:Object(K.jsx)(Ve,{})})})})}}]),s}(n.Component),et=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,185)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),r(e),a(e)}))};a.a.render(Object(K.jsx)(Xe,{}),document.getElementById("root")),et()}},[[156,1,2]]]);
//# sourceMappingURL=main.e63abd5e.chunk.js.map
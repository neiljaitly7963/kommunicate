(this.webpackJsonpkommunicate=this.webpackJsonpkommunicate||[]).push([[0],[,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),l=a.n(o),s=(a(14),a(1)),c=a(2),i=a(4),u=a(3),m=a(8),d=a.n(m),p=(a(7),function(e){var t=e.content,a=e.modalRef,n=e.buttonRef,o=e.closeModal;return r.a.createElement("div",{className:"modal-area",ref:a},r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"details"},r.a.createElement("div",null,r.a.createElement("p",{className:"title"},"Id"),r.a.createElement("div",{className:"divider"})),r.a.createElement("div",null,r.a.createElement("p",{className:"detail"},t.id),r.a.createElement("div",{className:"divider"})),r.a.createElement("div",null,r.a.createElement("p",{className:"title"},"Name"),r.a.createElement("div",{className:"divider"})),r.a.createElement("div",null,r.a.createElement("p",{className:"detail"},"".concat(t.first_name," ").concat(t.last_name)),r.a.createElement("div",{className:"divider"})),r.a.createElement("div",null,r.a.createElement("p",{className:"title"},"Email"),r.a.createElement("div",{className:"divider"})),r.a.createElement("div",null,r.a.createElement("p",{className:"detail"},t.email),r.a.createElement("div",{className:"divider"}))),r.a.createElement("div",{className:"photo-btn"},r.a.createElement("img",{src:t.avatar,className:"modal-img"}),r.a.createElement("button",{ref:n,"aria-label":"Close Modal","aria-labelledby":"close-modal",className:"close",onClick:o},"Close"))))}),f=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createPortal(r.a.createElement(d.a,null,r.a.createElement("aside",{tag:"aside",role:"dialog",tabIndex:"-1","aria-modal":"true",className:"modal-cover",onClick:this.props.onClickOutside,onKeyDown:this.props.onKeyDown},r.a.createElement(p,{content:this.props.content,modalRef:this.props.modalRef,buttonRef:this.props.buttonRef,closeModal:this.props.closeModal}))),document.body)}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("button",{ref:this.props.buttonRef,onClick:this.props.showModal,className:"modal-button"},this.props.triggerText)}}]),a}(n.Component),h=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).showModal=function(){e.setState({isShown:!0},(function(){e.closeButton.focus()}))},e.closeModal=function(){e.setState({isShown:!1}),e.TriggerButton.focus()},e.onKeyDown=function(t){27===t.keyCode&&e.closeModal()},e.onClickOutside=function(t){e.modal&&e.modal.contains(t.target)||e.closeModal()},e.state={isShown:!1},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{showModal:this.showModal,buttonRef:function(t){return e.TriggerButton=t},triggerText:this.props.modalProps.triggerText}),this.state.isShown?r.a.createElement(f,{modalRef:function(t){return e.modal=t},buttonRef:function(t){return e.closeButton=t},closeModal:this.closeModal,content:this.props.modalContent,onKeyDown:this.onKeyDown,onClickOutside:this.onClickOutside}):r.a.createElement(r.a.Fragment,null))}}]),a}(n.Component),E=(a(21),function(e){var t=e.Users,a={triggerText:"More Details"};return r.a.createElement("table",null,r.a.createElement("caption",null,"Userlist.io"),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Avatar"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Action"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement("img",{src:e.avatar})),r.a.createElement("td",{className:"table-content"},e.first_name),r.a.createElement("td",null,r.a.createElement(h,{modalProps:a,modalContent:e})))}))))}),v=(a(22),function(e){var t=e.pageNumbers,a=e.getUserData,n=e.setCurrentPage,o=e.currentPage;return r.a.createElement("div",null,t.map((function(e,t){return o===t+1?r.a.createElement("button",{onClick:function(){a(e),n(e)},className:"page-btn highlight",key:t},e):r.a.createElement("button",{onClick:function(){a(e),n(e)},className:"page-btn ",key:t},e)})))}),b=(a(23),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getUserData=function(t){if(e.state.lastPageLoaded<t)for(var a=e.state.lastPageLoaded+1;a<=t;a++)fetch("https://reqres.in/api/users?page=".concat(a)).then((function(e){return e.json()})).then((function(a){e.setState({lastPageLoaded:t});var n=JSON.parse(JSON.stringify(e.state.totalUsers));console.log(n,"tempUserArray");var r=n.concat(a.data);console.log(r,"temp"),e.setState({totalUsers:r,total:a.total},(function(){return e.getCurrentPageUser(t)}))}));else fetch("https://reqres.in/api/users?page=".concat(t)).then((function(e){return e.json()})).then((function(a){e.setState({lastPageLoaded:t});var n=JSON.parse(JSON.stringify(e.state.totalUsers));console.log(n,"tempUserArray");var r=n.concat(a.data);console.log(r,"temp"),e.setState({totalUsers:r,total:a.total},(function(){return e.getCurrentPageUser(t)}))}))},e.getCurrentPageUser=function(t){var a=JSON.parse(JSON.stringify(e.state.totalUsers)).splice(3*(t-1),3);e.setState({currentPageUsers:a})},e.setCurrentPage=function(t){e.setState({currentPage:t},(function(){return console.log(e.state.currentPage)}))},e.state={totalUsers:[],currentPageUsers:[],total:null,currentPage:1,lastPageLoaded:0},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getUserData(1)}},{key:"render",value:function(){var e=[];if(null!==this.state.total)for(var t=1;t<=Math.ceil(this.state.total/3);t++)e.push(t);return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(E,{Users:this.state.currentPageUsers}),r.a.createElement(v,{pageNumbers:e,getUserData:this.getUserData,setCurrentPage:this.setCurrentPage,currentPage:this.state.currentPage})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.87075c2f.chunk.js.map
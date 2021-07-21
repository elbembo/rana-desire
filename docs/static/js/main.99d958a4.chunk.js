(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(18),s=a.n(r),c=a(9),l=a(4),i=a(5),h=a(7),u=a(6),m=a(8),b=a(0),d=a(14),p="https://reactnd-books-api.udacity.com",k=localStorage.token;k||(k=localStorage.token=Math.random().toString(36).substr(-8));var f={Accept:"application/json",Authorization:k},g=function(){return fetch("".concat(p,"/books"),{headers:f}).then(function(e){return e.json()}).then(function(e){return e.books})},v=function(e,t){return fetch("".concat(p,"/books/").concat(e.id),{method:"PUT",headers:Object(d.a)({},f,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},E=function(e){return fetch("".concat(p,"/search"),{method:"POST",headers:Object(d.a)({},f,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},w=(a(25),function(e){return o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{onChange:function(t){e.onChange&&e.onChange(e.book,t.target.value)},defaultValue:e.book.shelf?e.book.shelf:"none"},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))}),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).shelfStylr={currentlyReading:{lable:"Currently Reading",color:"#4caf50"},wantToRead:{lable:"Want To Read",color:"#ffeb3b"},read:{lable:"Read",color:"#ef3e3e"}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.book.imageLinks?this.props.book&&o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement(c.b,{to:"/info/".concat(this.props.book.id)},o.a.createElement("div",{className:"book-cover",style:{width:128,height:192,backgroundImage:"url(".concat(this.props.book.imageLinks.thumbnail.replace(/^http:\/\//i,"https://"),")")}}),o.a.createElement("div",{className:"book-cover-overlay"},o.a.createElement("span",null,"More\xa0info"))),this.props.book.shelf&&this.props.searchOn?o.a.createElement("span",{className:"shelf-lable",style:{background:this.shelfStylr[this.props.book.shelf].color}},this.shelfStylr[this.props.book.shelf].lable):"",o.a.createElement(w,{onChange:this.props.onChange,book:this.props.book})),o.a.createElement("div",{className:"book-title"},this.props.book.title),o.a.createElement("div",{className:"book-authors"},this.props.book.authors&&this.props.book.authors.map(function(e,t){return o.a.createElement("span",{key:t,style:{display:"block"}},o.a.createElement("i",null,e))})),o.a.createElement("a",{className:"read-now",target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com.eg/books/edition/_/".concat(this.props.book.id,"?hl=en&gbpv=1")},"Read now")):o.a.createElement("div",{className:"lds-dual-ring"})}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.handleSearchChange=function(e){console.log(e.target.value),""!==e.target.value?E(e.target.value).then(function(t){t.error?(a.setState({books:[]}),a.props.noti('No result for "'.concat(e.target.value,'" , try some thing else'))):a.setState({books:t})}):a.setState({books:[]}),a.props.sraechTermUpdate(e.target.value)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.currentTerm&&""!==this.props.currentTerm&&E(this.props.currentTerm).then(function(t){t.length>0&&e.setState({books:t})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(c.b,{to:"/"},o.a.createElement("button",{className:"close-search"},"Close")),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:this.props.currentTerm,onChange:this.handleSearchChange}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},this.state.books.map(function(t){return e.props.currentBooks.filter(function(e){return e.id===t.id?t.shelf=e.shelf:""}),o.a.createElement("li",{key:t.id},o.a.createElement(y,{book:t,onChange:e.props.onChange,searchOn:!0}))}))))}}]),t}(n.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.books&&this.props.books.filter(function(t){return t.shelf===e.props.shelf});return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},this.props.title),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},this.props.books&&t.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(y,{book:t,onChange:e.props.onChange}))}))))}}]),t}(n.Component);function S(e){if(!e.book.authors)return o.a.createElement("div",null,o.a.createElement("div",{className:"lds-dual-ring",style:{display:"block",margin:"0 auto"}}));return o.a.createElement("div",null,o.a.createElement("div",{id:"bookinfo"},o.a.createElement("h1",{className:"booktitle"},o.a.createElement("span",null,o.a.createElement("span",{dir:"ltr"},e.book.title)),o.a.createElement("span",{className:"subtitle"})),o.a.createElement("h3",{className:"booktitle"},o.a.createElement("span",null,o.a.createElement("span",{dir:"ltr"},e.book.subtitle)),o.a.createElement("span",{className:"subtitle"})),o.a.createElement("div",{className:"bookcover"},o.a.createElement("img",{src:e.book.imageLinks.thumbnail.replace(/^http:\/\//i,"https://"),alt:"Front Cover",title:"Front Cover",width:"128",border:"1",id:"summary-frontcover"})),o.a.createElement("div",{className:"bookinfo_sectionwrap"},o.a.createElement("div",null,e.book.categories&&e.book.authors.map(function(e,t){return o.a.createElement("a",{key:t,href:"https://www.google.com/search?tbo=p&tbm=bks&q=inauthor:%22".concat(e.split(" ").join("+"),"%22"),className:"secondary"},o.a.createElement("span",{dir:"ltr"},e),o.a.createElement("br",null))})),o.a.createElement("div",null,o.a.createElement("span",{dir:"ltr"},e.book.publisher),", ",o.a.createElement("span",{dir:"ltr"},e.book.publishedDate&&e.book.publishedDate)," -",e.book.categories&&e.book.categories.map(function(e,t){return o.a.createElement("a",{key:t,className:"secondary",href:"https://www.google.com.eg/search?tbo=p&tbm=bks&q=subject:%22".concat(e,"%22&source=gbs_ge_summary_r&cad=0")},o.a.createElement("span",{dir:"ltr"},e))}),"- ",o.a.createElement("span",{dir:"ltr"},e.book.pageCount," pages")),o.a.createElement("div",null,o.a.createElement("a",{href:"https://books.google.com.eg/books?id=".concat(e.book.id,"&dq=rowling&sitesec=reviews"),"aria-label":"Average user rating - 18820 stars"},function(){for(var t=[],a=e.book.averageRating,n=0;n<=4;n++)t[n]=n+1<=a?"on":"off";return t}().map(function(t,a){return 0===a?o.a.createElement("span",{key:a,className:"gb-star-".concat(t," goog-inline-block rating")},o.a.createElement("span",{className:"value-title",title:e.book.averageRating})):o.a.createElement("span",{key:a,className:"gb-star-".concat(t," goog-inline-block")}," ")})),o.a.createElement("span",{className:"num-ratings"},o.a.createElement("a",{href:"https://books.google.com.eg/books?id=".concat(e.book.id,"&dq=rowling&sitesec=reviews"),className:"sbs-count secondary"},o.a.createElement("span",{className:"count"},e.book.ratingsCount)," Reviews")))),o.a.createElement("div",{id:"synopsis"},o.a.createElement("div",{id:"synopsis-window"},o.a.createElement("div",{id:"synopsistext",dir:"ltr",className:"sa"},o.a.createElement("b",null,e.book.description)))),o.a.createElement("div",{className:"search_box_wrapper"},o.a.createElement("a",{className:"read-now",target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com.eg/books/edition/_/".concat(e.book.id,"?hl=en&gbpv=1")},"Read now"))))}var j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={book:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.match.params.id,fetch("".concat(p,"/books/").concat(e),{headers:f}).then(function(e){return e.json()}).then(function(e){return e.book})).then(function(e){t.setState({book:e})})}},{key:"render",value:function(){var e=this;return this.state.book&&o.a.createElement("div",null,o.a.createElement("div",{className:"info-books-bar"},o.a.createElement("button",{className:"close-search",onClick:function(){return e.props.history.goBack()}},"Close")),o.a.createElement(S,{book:this.state.book}))}}]),t}(o.a.Component),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isLoading:!1,myBooks:[],term:"",snackbar:{show:!1,msg:"d"}},a.refreshHome=function(){a.setState({isLoading:!0}),g().then(function(e){a.setState(function(){return{myBooks:e}}),a.setState({isLoading:!1})}).catch(function(e){a.setState({isLoading:!1}),a.showSnackbar("Somthing wrong , try again"),console.error("Error:",e)})},a.showSnackbar=function(e){a.setState({snackbar:{show:!0,msg:e}}),setTimeout(function(){a.setState({snackbar:{show:!1,msg:""}})},3e3)},a.searchTerm=function(e){a.setState({term:e})},a.bookShelfChanger=function(e,t){a.setState({isLoading:!0}),v(e,t).then(function(){a.refreshHome()}).then(function(){a.showSnackbar("Book shelf updated")})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.refreshHome()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/info/:id",component:j})),o.a.createElement(b.a,{path:"/search",render:function(){return o.a.createElement(N,{onChange:e.bookShelfChanger,sraechTermUpdate:e.searchTerm,currentTerm:e.state.term,noti:e.showSnackbar,currentBooks:e.state.myBooks})}}),o.a.createElement(b.a,{exact:!0,path:"/",render:function(){return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"Rana Desire ",o.a.createElement("span",null," for the one who i loved and makes me love to read"))),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(C,{shelf:"currentlyReading",books:e.state.myBooks,title:"Currently Reading",onChange:e.bookShelfChanger}),o.a.createElement(C,{shelf:"wantToRead",books:e.state.myBooks,title:"Want to Read",onChange:e.bookShelfChanger}),o.a.createElement(C,{shelf:"read",books:e.state.myBooks,title:"Read",onChange:e.bookShelfChanger}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(c.b,{to:"/search"},o.a.createElement("button",null,"Add a book"))))}}),o.a.createElement("div",{id:"snackbar",className:this.state.snackbar.show?"show":"hide"},this.state.snackbar.msg),o.a.createElement("div",{id:"loading",className:this.state.isLoading?"show":""},o.a.createElement("div",{className:"lds-dual-ring"})))}}]),t}(o.a.Component),R=(a(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function T(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var B=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,35)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),o(e),r(e),s(e)})};s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,null,o.a.createElement(O,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");R?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):T(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):T(t,e)})}}(),B()}},[[20,3,2]]]);
//# sourceMappingURL=main.99d958a4.chunk.js.map
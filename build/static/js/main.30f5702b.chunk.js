(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(20),s=a.n(r),c=a(11),l=a(6),i=a(7),m=a(9),h=a(8),u=a(10),b=a(0),p=a(17),k="https://reactnd-books-api.udacity.com",d=localStorage.token;d||(d=localStorage.token=Math.random().toString(36).substr(-8));var g={Accept:"application/json",Authorization:d},f=function(){return fetch("".concat(k,"/books"),{headers:g}).then(function(e){return e.json()}).then(function(e){return e.books})},E=function(e,t){return fetch("".concat(k,"/books/").concat(e.id),{method:"PUT",headers:Object(p.a)({},g,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},v=function(e){return fetch("".concat(k,"/search"),{method:"POST",headers:Object(p.a)({},g,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},y=(a(27),function(e){return o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{onChange:function(t){e.onChange&&e.onChange(e.book,t.target.value)},defaultValue:e.book.shelf?e.book.shelf:"none"},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))}),N=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.book.imageLinks?this.props.book&&o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement(c.b,{to:"/info/".concat(this.props.book.id)},o.a.createElement("div",{className:"book-cover",style:{width:128,height:192,backgroundImage:"url(".concat(this.props.book.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-cover-overlay"},o.a.createElement("span",null,"More\xa0info"))),o.a.createElement(y,{onChange:this.props.onChange,book:this.props.book})),o.a.createElement("div",{className:"book-title"},this.props.book.title),o.a.createElement("div",{className:"book-authors"},this.props.book.authors&&this.props.book.authors.map(function(e,t){return o.a.createElement("span",{key:t,style:{display:"block"}},o.a.createElement("i",null,e))})),o.a.createElement("a",{className:"read-now",target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com.eg/books/edition/_/".concat(this.props.book.id,"?hl=en&gbpv=1")},"Read now")):o.a.createElement("span",null,"Loading...")}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],snackbar:{show:!1,msg:"d"}},a.showSnackbar=function(e){a.setState({snackbar:{show:!0,msg:e}}),setTimeout(function(){a.setState({snackbar:{show:!1,msg:""}})},3e3)},a.handleSearchChange=function(e){""!==e.target.value&&v(e.target.value).then(function(t){t.length>0?a.setState({books:t}):a.showSnackbar('No result for "'.concat(e.target.value,'" , try some thing else'))}),a.props.sraechTermUpdate(e.target.value)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.currentTerm&&""!==this.props.currentTerm&&v(this.props.currentTerm).then(function(t){t.length>0&&e.setState({books:t})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(c.b,{to:"/"},o.a.createElement("button",{className:"close-search"},"Close")),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:this.props.currentTerm,onChange:this.handleSearchChange}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},this.state.books.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(N,{book:t,onChange:e.props.onChange}))}))),o.a.createElement("div",{id:"snackbar",className:this.state.snackbar.show?"show":"hide"},this.state.snackbar.msg))}}]),t}(n.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.books&&this.props.books.filter(function(t){return t.shelf===e.props.shelf});return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},this.props.title),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},this.props.books&&t.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(N,{book:t,onChange:e.props.onChange}))}))))}}]),t}(n.Component);function j(e){return e.book.authors?o.a.createElement("div",null,o.a.createElement("div",{id:"bookinfo"},o.a.createElement("h1",{className:"booktitle"},o.a.createElement("span",null,o.a.createElement("span",{dir:"ltr"},e.book.title)),o.a.createElement("span",{className:"subtitle"})),o.a.createElement("h3",{className:"booktitle"},o.a.createElement("span",null,o.a.createElement("span",{dir:"ltr"},e.book.subtitle)),o.a.createElement("span",{className:"subtitle"})),o.a.createElement("div",{className:"bookcover"},o.a.createElement("img",{src:e.book.imageLinks.thumbnail,alt:"Front Cover",title:"Front Cover",width:"128",border:"1",id:"summary-frontcover"})),o.a.createElement("div",{className:"bookinfo_sectionwrap"},o.a.createElement("div",null,e.book.categories&&e.book.authors.map(function(e,t){return o.a.createElement("a",{key:t,href:"https://www.google.com/search?tbo=p&tbm=bks&q=inauthor:%22".concat(e.split(" ").join("+"),"%22"),className:"secondary"},o.a.createElement("span",{dir:"ltr"},e),o.a.createElement("br",null))})),o.a.createElement("div",null,o.a.createElement("span",{dir:"ltr"},e.book.publisher),", ",o.a.createElement("span",{dir:"ltr"},e.book.publishedDate&&e.book.publishedDate)," -",e.book.categories&&e.book.categories.map(function(e,t){return o.a.createElement("a",{key:t,className:"secondary",href:"https://www.google.com.eg/search?tbo=p&tbm=bks&q=subject:%22".concat(e,"%22&source=gbs_ge_summary_r&cad=0")},o.a.createElement("span",{dir:"ltr"},e))}),"- ",o.a.createElement("span",{dir:"ltr"},e.book.pageCount," pages")),o.a.createElement("div",null,o.a.createElement("a",{href:"https://books.google.com.eg/books?id=".concat(e.book.id,"&dq=rowling&sitesec=reviews"),"aria-label":"Average user rating - 18820 stars"},o.a.createElement("span",{className:"gb-star-on goog-inline-block rating"},o.a.createElement("span",{className:"value-title",title:e.book.averageRating})),o.a.createElement("span",{className:"gb-star-on goog-inline-block"}),o.a.createElement("span",{className:"gb-star-on goog-inline-block"}),o.a.createElement("span",{className:"gb-star-half goog-inline-block"}),o.a.createElement("span",{className:"gb-star-off goog-inline-block"})),o.a.createElement("span",{className:"num-ratings"},o.a.createElement("a",{href:"https://books.google.com.eg/books?id=".concat(e.book.id,"&dq=rowling&sitesec=reviews"),className:"sbs-count secondary"},o.a.createElement("span",{className:"count"},e.book.ratingsCount)," Reviews")))),o.a.createElement("div",{id:"synopsis"},o.a.createElement("div",{id:"synopsis-window"},o.a.createElement("div",{id:"synopsistext",dir:"ltr",className:"sa"},o.a.createElement("b",null,e.book.description)))),o.a.createElement("div",{className:"search_box_wrapper"}))):o.a.createElement("span",null,"Loading...")}var O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={book:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.match.params.id,fetch("".concat(k,"/books/").concat(e),{headers:g}).then(function(e){return e.json()}).then(function(e){return e.book})).then(function(e){t.setState({book:e})})}},{key:"render",value:function(){var e=this;return this.state.book&&o.a.createElement("div",null,o.a.createElement("div",{className:"info-books-bar"},o.a.createElement("button",{className:"close-search",onClick:function(){return e.props.history.goBack()}},"Close")),o.a.createElement(j,{book:this.state.book}))}}]),t}(o.a.Component),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).showSnackbar=function(e){a.setState({snackbar:{show:!0,msg:e}}),setTimeout(function(){a.setState({snackbar:{show:!1,msg:""}})},3e3)},a.searchTerm=function(e){a.setState({term:e})},a.bookShelfChanger=function(e,t){E(e,t).then(function(e){f().then(function(e){a.setState(function(){return{myBooks:e}})}),a.showSnackbar("Book shelf updated")})},a.state={myBooks:[],term:"",snackbar:{show:!1,msg:"d"}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f().then(function(t){e.setState(function(){return{myBooks:t}})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/info/:id",component:O})),o.a.createElement(b.a,{path:"/search",render:function(){return o.a.createElement(w,{onChange:e.bookShelfChanger,sraechTermUpdate:e.searchTerm,currentTerm:e.state.term})}}),o.a.createElement(b.a,{exact:!0,path:"/",render:function(){return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(C,{shelf:"currentlyReading",books:e.state.myBooks,title:"Currently Reading",onChange:e.bookShelfChanger}),o.a.createElement(C,{shelf:"wantToRead",books:e.state.myBooks,title:"Want to Read",onChange:e.bookShelfChanger}),o.a.createElement(C,{shelf:"read",books:e.state.myBooks,title:"Read",onChange:e.bookShelfChanger}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(c.b,{to:"/search"},o.a.createElement("button",null,"Add a book"))),o.a.createElement("div",{id:"snackbar",className:e.state.snackbar.show?"show":"hide"},e.state.snackbar.msg))}}))}}]),t}(o.a.Component);a(37);s.a.render(o.a.createElement(c.a,null,o.a.createElement(S,null)),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.30f5702b.chunk.js.map
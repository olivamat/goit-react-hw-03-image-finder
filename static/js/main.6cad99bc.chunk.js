(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={gallery:"Gallery_gallery__2X23S",galleryItem:"Gallery_galleryItem__ANQtT"}},11:function(e,t,a){e.exports={backdrop:"Modal_backdrop__XLUJF",modal:"Modal_modal__2pkOq"}},2:function(e,t,a){e.exports={galleryItemImage:"GalleryItem_galleryItemImage__Wl3cm",stats:"GalleryItem_stats__2tFbv",statsItem:"GalleryItem_statsItem__3SS3O",fullscreenButton:"GalleryItem_fullscreenButton__tLCPH"}},21:function(e,t,a){e.exports={divbutton:"Button_divbutton__2easU",button:"Button_button__35ozz"}},23:function(e,t,a){e.exports=a(49)},29:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),l=a.n(o),s=(a(29),a(12)),c=a(3),i=a(4),m=a(6),u=a(5),d=a(7),g=a(22),p=a(9),h=a.n(p),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:""},a.handleChange=function(e){a.setState({query:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onSubmitForm(Object(g.a)({},a.state)),a.setState({query:""})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("form",{className:h.a.form,onSubmit:this.handleSubmit},r.a.createElement("input",{className:h.a.input,type:"text",autoComplete:"off",placeholder:"Search images ...",value:e,onChange:this.handleChange}))}}]),t}(n.Component),y=a(20),b=a.n(y),v=function(e,t){return b.a.get("".concat("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=").concat(e,"&page=").concat(t,"1&per_page=12&key=").concat("12605627-9f0f5d76a624f2feb022f83bd"))},E={fontSize:40},_=function(){return r.a.createElement("h1",{style:E},"Loading....")},I=function(e){var t=e.text;return r.a.createElement("h1",null," Whoops, something went wrong:",t)},O=a(2),w=a.n(O),k=function(e){var t=e.onOpenModal,a=e.onChangeLargeImageUrl,n=e.webformatURL,o=e.likes,l=e.views,s=e.comments,c=e.downloads;return r.a.createElement("div",null,r.a.createElement("img",{className:w.a.galleryItemImage,src:n,alt:"img"}),r.a.createElement("div",{className:w.a.stats},r.a.createElement("p",{className:w.a.statsItem},r.a.createElement("i",{className:"material-icons"},"thumb_up"),o),r.a.createElement("p",{className:w.a.statsItem},r.a.createElement("i",{className:"material-icons"},"visibility"),l),r.a.createElement("p",{className:w.a.statsItem},r.a.createElement("i",{className:"material-icons"},"comment"),s),r.a.createElement("p",{className:w.a.statsItem},r.a.createElement("i",{className:"material-icons"},"cloud_download"),c)),r.a.createElement("button",{onClick:t,onMouseUp:a,type:"button",className:w.a.fullscreenButton},r.a.createElement("i",{className:"material-icons"},"zoom_out_map")))},L=a(10),C=a.n(L),M=function(e){var t=e.onOpenModal,a=e.onChangeLargeImageUrl,n=e.images;return r.a.createElement("ul",{className:C.a.gallery},n.map(function(e){return r.a.createElement("li",{key:e.pageUrl,className:C.a.galleryItem},r.a.createElement(k,{webformatURL:e.webformatURL,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads,onOpenModal:t,onChangeLargeImageUrl:function(){return a(e.largeImageURL)}}))}))},S=a(21),N=a.n(S),j=function(e){var t=e.onLoadMore;return r.a.createElement("div",{className:N.a.divbutton},r.a.createElement("button",{type:"button",onClick:t},"Load more ..."))},U=a(11),R=a.n(U),q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).backdropRef=Object(n.createRef)(),a.handleKeyPress=function(e){"Escape"===e.code&&a.props.onCloseModal()},a.handleBackdropClick=function(e){var t=a.backdropRef.current;t&&e.target!==t||a.props.onCloseModal()},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:R.a.backdrop,ref:this.backdropRef,onClick:this.handleBackdropClick,onKeyPress:this.handleKeyPress,role:"presentation"},r.a.createElement("div",{className:R.a.modal},e))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={images:[],isLoading:!1,error:null,page:1,isModalOpen:!1,largeImageURL:null},a.fetchImage=function(e){var t=e.query;a.setState({isLoading:!0,query:t,page:1,error:null});var n=a.state.page;v(t,n).then(function(e){var t=e.data;a.setState({images:t.hits})}).catch(function(e){return a.setState({error:e})}).finally(function(){a.setState({isLoading:!1,query:t})})},a.loadMoreImages=function(){a.setState({isLoading:!0});var e=a.state.page,t=a.state.query;v(t,e).then(function(e){var t=e.data;a.setState(function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t.hits))}})}).catch(function(e){return a.setState({error:e})}).finally(function(){a.setState({isLoading:!1,page:e+1}),window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})})},a.handleOpenModal=function(){return a.setState({isModalOpen:!0})},a.handleCloseModal=function(){return a.setState({isModalOpen:!1})},a.handleChangeLargeImageUrl=function(e){a.setState({largeImageURL:e})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.error,o=e.isModalOpen,l=e.largeImageURL;return r.a.createElement("div",{className:"App"},r.a.createElement(f,{onSubmitForm:this.fetchImage}),a&&r.a.createElement(_,null),t.length>0&&r.a.createElement(M,{onOpenModal:this.handleOpenModal,images:t,onChangeLargeImageUrl:this.handleChangeLargeImageUrl}),t.length>0&&r.a.createElement(j,{onLoadMore:this.loadMoreImages}),n&&r.a.createElement(I,{text:n.message}),o&&r.a.createElement(q,{onCloseModal:this.handleCloseModal},r.a.createElement("img",{src:l,alt:"img"})))}}]),t}(n.Component);l.a.render(r.a.createElement(x,null),document.getElementById("root"))},9:function(e,t,a){}},[[23,1,2]]]);
//# sourceMappingURL=main.6cad99bc.chunk.js.map
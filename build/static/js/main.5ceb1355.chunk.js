(this.webpackJsonpprofile=this.webpackJsonpprofile||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t(28)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(9),o=t.n(i),s=(t(15),t(1)),c=t(2),m=t(4),l=t(3),u=(t(16),t(5)),p=(t(17),t(18),function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"banner-content"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-2 mt20 tc"},n.a.createElement("img",{className:"avatar-icon",src:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",alt:"Profile-Avatar"})),n.a.createElement("div",{className:"col-md-7"},n.a.createElement("h1",{className:"banner-heading"},"Mahek Jain",n.a.createElement("button",{type:"button",className:"btn_very_small__filled ml20"},"Follow")),n.a.createElement("p",{className:"banner-tag-line"},"New Delhi, India"),n.a.createElement("p",{className:"banner-tag-line"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."),n.a.createElement("ul",{className:"profile-status"},n.a.createElement("li",null,n.a.createElement("img",{alt:"Wishlist",className:"parofile-action-icon",src:"https://ik.imagekit.io/loconavcovid19/list_l9fniocdN1.svg"}),"Wishlist (10)"),n.a.createElement("li",null,n.a.createElement("img",{alt:"Buddy",className:"parofile-action-icon",src:"https://ik.imagekit.io/loconavcovid19/smile_qVIp2jLBpa.svg"}),"Buddy List (10)"),n.a.createElement("li",null,n.a.createElement("img",{alt:"Following",className:"parofile-action-icon",src:"https://ik.imagekit.io/loconavcovid19/team_H6gy6ZQxX.svg"}),"Following (20)"),n.a.createElement("li",null,n.a.createElement("img",{alt:"Followers",className:"parofile-action-icon",src:"https://ik.imagekit.io/loconavcovid19/team_H6gy6ZQxX.svg"}),"Followers (125)"))),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("h1",{className:"banner-heading mb10"},"Rank: #45"),n.a.createElement("div",{className:"progress-wrapper"},n.a.createElement("img",{className:"report-icon",src:"https://ik.imagekit.io/loconavcovid19/report_czEyZyo2oL.svg",alt:"report"}),n.a.createElement("div",{className:"meter"},n.a.createElement("span",{style:{width:"80%"}},n.a.createElement("span",{className:"progress"})))),n.a.createElement("div",{className:"social-icons-wrapper"},n.a.createElement("a",{href:"/"},n.a.createElement("img",{alt:"fb",className:"social-icon",src:"https://ik.imagekit.io/loconavcovid19/facebook_QDyDQmO2GZ.svg"})),n.a.createElement("a",{href:"/"},n.a.createElement("img",{alt:"tw",className:"social-icon",src:"https://ik.imagekit.io/loconavcovid19/twitter_4tkK1n50TG.svg"})))))))}}]),t}(r.Component)),d=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).state={bannerImg:"../images/truck-page-header.jpg"},r.resized=r.resized.bind(Object(u.a)(r)),r}return Object(c.a)(t,[{key:"resized",value:function(){window.innerWidth<768?this.setState({bannerImg:"../images/truck-header-mobile.jpg"}):this.setState({bannerImg:"../images/truck-page-header.jpg"})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resized)}},{key:"render",value:function(){return n.a.createElement("div",{className:"bannerWrapper"},n.a.createElement("div",{className:"bannerImgWrapper"},n.a.createElement("img",{src:this.state.bannerImg,className:"w100",alt:"Truck Banner"}),n.a.createElement(p,null)))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resized)}}]),t}(r.Component),h=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{className:"banner"},n.a.createElement(d,null))}}]),t}(r.Component),v=(t(19),t(20),function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.handleHamburger;return n.a.createElement("button",{type:"button",onClick:e,className:"navbar-toggle css-hamburger js-hamburger","data-target":"#exampleNavComponents"},n.a.createElement("span",{className:"bar1"}),n.a.createElement("span",{className:"bar2"}),n.a.createElement("span",{className:"bar3"}))}}]),t}(r.Component)),b=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).hamburger=function(){var e=document.querySelector(".js-hamburger"),a=document.getElementById("exampleNavComponents");e.classList.toggle("change"),a.classList.toggle("expandNavbar")},r.stickyNavbar=r.stickyNavbar.bind(Object(u.a)(r)),r.hamburger=r.hamburger.bind(Object(u.a)(r)),r}return Object(c.a)(t,[{key:"stickyNavbar",value:function(){var e=document.documentElement.scrollTop,a=document.getElementById("top-navbar"),t=document.getElementById("top-navbar").clientHeight;e>t&&!a.classList.contains("nav-on-scroll")?a.classList.add("nav-on-scroll"):e<t&&a.classList.remove("nav-on-scroll")}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.stickyNavbar)}},{key:"render",value:function(){return n.a.createElement("nav",{id:"top-navbar",className:"topNavbar"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"responsive-navbar"},n.a.createElement("a",{href:"/",className:"brand-logo"},"TravelSite.com"),n.a.createElement("div",{className:"navbar-search-wrapper"},n.a.createElement("input",{className:"navbar-search",type:"text",placeholder:"Search"}),n.a.createElement("img",{className:"nav-search-icon",alt:"nav-search",src:"https://ik.imagekit.io/loconavcovid19/search_xjdnQa3sy.svg"})),n.a.createElement(v,{handleHamburger:this.hamburger}),n.a.createElement("div",{className:"navbar-collapse",id:"exampleNavComponents"},n.a.createElement("ul",{className:"nav navbar-nav navbar-right menu-list"},n.a.createElement("li",null,n.a.createElement("a",{href:"/"},n.a.createElement("img",{alt:"Avatar",src:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png"}),"Sanjay Singh")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},n.a.createElement("img",{className:"feed-icon",src:"https://ik.imagekit.io/loconavcovid19/wave_X93dbETN2A.svg",alt:"feeds"}),"Feeds")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},n.a.createElement("img",{alt:"comment",className:"nav-icon",src:"https://ik.imagekit.io/loconavcovid19/maps-and-location_0APjNha3S.svg"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},n.a.createElement("img",{className:"notification-icon",alt:"bell",src:"https://ik.imagekit.io/loconavcovid19/subscription_HsmUjVFwin.svg"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},n.a.createElement("img",{className:"setting-icon",alt:"setting",src:"https://ik.imagekit.io/loconavcovid19/action_CFLHoCe_L.svg"}))))))))}}]),t}(r.Component),g=(t(21),t(22),function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).handleReadMore=function(){for(var e=document.querySelectorAll(".read-more"),a=0;a<e.length;a++)e[a].addEventListener("click",(function(){t(this)}),!1);function t(e){var a=e.getElementsByClassName("readMoreText")[0];void 0!==a&&(a.classList.contains("active")?(a.parentElement.parentElement.querySelector(".js-extend").classList.remove("fullNote"),a.innerText="Read More",a.classList.remove("active")):(a.parentElement.parentElement.querySelector(".js-extend").classList.add("fullNote"),a.innerText="Read Less",a.classList.add("active")))}},r.handleReadMore=r.handleReadMore.bind(Object(u.a)(r)),r}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.handleReadMore()}},{key:"render",value:function(){return n.a.createElement("span",{className:"read-more"},n.a.createElement("span",{className:"readMoreText"},"Read More"))}}]),t}(r.Component)),k=t(7),f=(t(25),t(26),function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).state={count:0},r}return Object(c.a)(t,[{key:"increment",value:function(){this.setState({count:this.state.count+1})}},{key:"decrement",value:function(){this.setState({count:this.state.count-1})}},{key:"reset",value:function(){this.setState({count:0})}},{key:"render",value:function(){var e=this,a=this.state.count;return n.a.createElement("div",{className:"mt20"},n.a.createElement("button",{className:"inc btn_very_small",onClick:function(a){return e.increment(a)}},"+"),n.a.createElement("button",{className:"dec btn_very_small",onClick:function(a){return e.decrement(a)}},"-"),n.a.createElement("button",{className:"reset btn_very_small",onClick:function(a){return e.reset(a)}},"x"),n.a.createElement("span",{className:"counter"},a," people found this review helpful"))}}]),t}(r.Component)),y=[{Title:"Journey",comment:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',src:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personName:"Mahek Jain",reviewerName:"Recong Peo",time:"2 months ago",src2:"https://ik.imagekit.io/babatrucks/mkt/car-gps-tracker/stolen-car__CINUkfG-M.png"},{Title:"Reviews",comment:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',src:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personName:"Mahek Jain",reviewerName:"Recong Peo",time:"2 months ago",src2:"https://ik.imagekit.io/babatrucks/mkt/car-gps-tracker/stolen-car__CINUkfG-M.png"},{Title:"Photos",comment:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',src:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personName:"Mahek Jain",reviewerName:"Recong Peo",time:"2 months ago",src2:"https://ik.imagekit.io/babatrucks/mkt/car-gps-tracker/stolen-car__CINUkfG-M.png"},{Title:"Trips",comment:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',src:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personName:"Mahek Jain",reviewerName:"Recong Peo",time:"2 months ago",src2:"https://ik.imagekit.io/babatrucks/mkt/car-gps-tracker/stolen-car__CINUkfG-M.png"},{Title:"Stats",comment:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',src:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personName:"Mahek Jain",reviewerName:"Recong Peo",time:"2 months ago",src2:"https://ik.imagekit.io/babatrucks/mkt/car-gps-tracker/stolen-car__CINUkfG-M.png"}],E=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(k.d,null,n.a.createElement(k.b,null,y.map((function(e,a){return n.a.createElement(k.a,{key:a},e.Title)}))),y.map((function(e,a){return n.a.createElement(k.c,{key:a},y.map((function(e,a){return n.a.createElement("div",{key:a,className:"comment-box-wrapper"},n.a.createElement("div",{className:"profile-user clearfix"},n.a.createElement("div",{className:"col-md-2 col-xs-4 tl"},n.a.createElement("img",{className:"profile-user-icon",src:e.src,alt:e.Title+a})),n.a.createElement("div",{className:"col-md-10 col-xs-8"},n.a.createElement("p",{className:"comment-person-name"},e.personName),n.a.createElement("p",{className:"comment-reviewer"},"Reviewd ",e.reviewerName))),n.a.createElement("p",{className:"comment-time pl15"},e.time),n.a.createElement("div",{className:"previous-images"},n.a.createElement("img",{className:"previous-images-icons",src:e.src2,alt:e.Title+a}),n.a.createElement("img",{className:"previous-images-icons",src:e.src2,alt:e.Title+a}),n.a.createElement("img",{className:"previous-images-icons",src:e.src2,alt:e.Title+a}),n.a.createElement("img",{className:"previous-images-icons",src:e.src2,alt:e.Title+a})),n.a.createElement("div",{className:"comment-box js-parentHandle"},n.a.createElement("p",{className:"js-extend shortNote"},e.comment),n.a.createElement(g,null),n.a.createElement(f,null)))})))})))}}]),t}(r.Component),N=[{url:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personname:"mahek jain",reviewername:"recongo peo",time:"2 months ago"},{url:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personname:"mahek jain",reviewername:"recongo peo",time:"2 months ago"},{url:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personname:"mahek jain",reviewername:"recongo peo",time:"2 months ago"},{url:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personname:"mahek jain",reviewername:"recongo peo",time:"2 months ago"},{url:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personname:"mahek jain",reviewername:"recongo peo",time:"2 months ago"},{url:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personname:"mahek jain",reviewername:"recongo peo",time:"2 months ago"},{url:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personname:"mahek jain",reviewername:"recongo peo",time:"2 months ago"},{url:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personname:"mahek jain",reviewername:"recongo peo",time:"2 months ago"}],w=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"review-wrapper sideBox"},n.a.createElement("div",{className:"review-title sideboxTitile"},"Popular reviews vy mahek jain"),n.a.createElement("div",{className:"review-details sideboxDetails"},N.map((function(e,a){return n.a.createElement("div",{key:a,className:"review-rows sideboxRows"},n.a.createElement("img",{className:"sideBox-avatar-icon",src:e.url,alt:e.personname+a}),n.a.createElement("div",{className:"sideboxAvatar"},n.a.createElement("p",{className:"mt0 mb0"},e.personname," reviewed by ",e.reviewername),n.a.createElement("p",{className:"mt0 mb0"},e.time)))}))))}}]),t}(r.Component),j=[{url:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personname:"mahek jain",reviewername:"recongo peo",time:"2 months ago"},{url:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personname:"mahek jain",reviewername:"recongo peo",time:"2 months ago"},{url:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personname:"mahek jain",reviewername:"recongo peo",time:"2 months ago"},{url:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personname:"mahek jain",reviewername:"recongo peo",time:"2 months ago"},{url:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personname:"mahek jain",reviewername:"recongo peo",time:"2 months ago"},{url:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personname:"mahek jain",reviewername:"recongo peo",time:"2 months ago"},{url:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personname:"mahek jain",reviewername:"recongo peo",time:"2 months ago"},{url:"https://ik.imagekit.io/babatrucks/mkt/shared/happy-driver_yFrVPBkbc.png",personname:"mahek jain",reviewername:"recongo peo",time:"2 months ago"}],L=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"trip-wrapper sideBox"},n.a.createElement("div",{className:"trip-title sideboxTitile"},"Popular trips by mahek jain"),n.a.createElement("div",{className:"trip-details sideboxDetails"},j.map((function(e,a){return n.a.createElement("div",{key:a,className:"review-rows sideboxRows"},n.a.createElement("img",{className:"sideBox-avatar-icon",src:e.url,alt:e.personname+a}),n.a.createElement("div",{className:"sideboxAvatar"},n.a.createElement("p",{className:"mt0 mb0"},e.personname," reviewed by ",e.reviewername),n.a.createElement("p",{className:"mt0 mb0"},e.time)))}))))}}]),t}(r.Component),C=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).handleTabSwitching=function(){for(var e=document.querySelectorAll("[data-id]"),a=0;a<e.length;a++)e[a].addEventListener("click",(function(e){for(var a=this.getAttribute("data-id"),t=document.querySelectorAll(".react-tabs__tab"),r=0;r<t.length;r++)t[r].getAttribute("id")===a&&t[r].click()}),!1)},r.handleActive=function(e){document.querySelectorAll(".tab-list li.activeTab").forEach((function(e){e.classList.remove("activeTab")})),e.target.classList.add("activeTab")},r.handleTabSwitching=r.handleTabSwitching.bind(Object(u.a)(r)),r.handleActive=r.handleActive.bind(Object(u.a)(r)),r}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.handleTabSwitching()}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"description-wrapper"},n.a.createElement("p",{className:"js-extend shortNote"},"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."),n.a.createElement(g,null)),n.a.createElement("div",{className:"tab-wrapper"},n.a.createElement(E,null))),n.a.createElement("div",{className:"col-md-4 sidebar-view"},n.a.createElement("div",{className:"tabList"},n.a.createElement("ul",{className:"tab-list",onClick:this.handleActive},n.a.createElement("li",{className:"activeTab","data-id":"react-tabs-0"},"Journey"),n.a.createElement("li",{"data-id":"react-tabs-2"},"Reviews"),n.a.createElement("li",{"data-id":"react-tabs-4"},"Photos"),n.a.createElement("li",{"data-id":"react-tabs-6"},"Trips"),n.a.createElement("li",{"data-id":"react-tabs-8"},"Stats"))),n.a.createElement(w,null),n.a.createElement(L,null))))}}]),t}(r.Component),_=(t(27),function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("p",{className:"copyRight"},"Copyright \xa9 2015 travelsite.com. All Rigts Reserved.",n.a.createElement("span",{className:"footer-links"},n.a.createElement("a",{href:"/"},"Disclaimer")," &",n.a.createElement("a",{href:"/"},"Privacy Policy")))))))}}]),t}(r.Component));var O=function(){return n.a.createElement("div",{className:"App relative"},n.a.createElement(b,null),n.a.createElement(h,null),n.a.createElement(C,null),n.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.5ceb1355.chunk.js.map
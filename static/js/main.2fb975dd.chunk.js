(this.webpackJsonpw22h1=this.webpackJsonpw22h1||[]).push([[0],{28:function(e,t,a){e.exports=a(62)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},44:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(25),r=a.n(i),c=(a(33),a(4)),s=a(5),l=a(7),u=a(6),m=a(8),p=(a(34),a(10)),h=a(9),d=(a(35),function(e){var t=e.to,a=e.text,n=e.exact;return o.a.createElement(h.a,{path:t,exact:n,children:function(e){var n=e.match;return o.a.createElement(p.b,{to:t},o.a.createElement("li",{className:n?"active":""},a))}})}),v=function(e){e.page,e.onClick;return o.a.createElement("nav",{className:"nav"},o.a.createElement("header",null,o.a.createElement("h1",null,"BlOG")),o.a.createElement(d,{to:"/",exact:!0,text:"\u9996\u9801"}),o.a.createElement(d,{to:"/posts",text:"\u6587\u7ae0\u5217\u8868"}),o.a.createElement(d,{to:"/about",text:"\u95dc\u65bc\u6211"}))},b=(a(44),{homepage:{fontSize:"40px",paddingTop:"10px"}}),E=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"home"},o.a.createElement("div",{style:b.homppage},"I am homepage"))}}]),t}(n.Component),f=a(12),O=a.n(f),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).post=function(e,t){return o.a.createElement("div",{className:"blog__post"},o.a.createElement("ul",{className:"blog__title"},e[t].title),o.a.createElement("hr",null),o.a.createElement("div",{className:"blog__article"},e[t].body))},a.state={data:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://qootest.com/posts").then((function(t){e.setState({data:t.data.filter((function(e){var t=e.title,a=e.author;return t&&a}))})}))}},{key:"render",value:function(){var e=this.state.data,t=this.props.history;return o.a.createElement("div",{className:"blog"},"\u90e8\u843d\u683c\u6587\u7ae0",o.a.createElement("div",{className:"blog__posts"},e.map((function(e){return o.a.createElement("ul",{className:"blog__title",key:e.id,onClick:function(){return t.push("/posts/"+e.id)}},e.title)}))))}}]),t}(n.Component),g=Object(h.e)(j),q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={post:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.postId;O.a.get("https://qootest.com/posts/"+t).then((function(t){e.setState({post:t.data})}))}},{key:"render",value:function(){var e=this.state.post;return o.a.createElement("div",null,o.a.createElement("h1",null,"POST"),o.a.createElement(p.b,{to:"/posts"},o.a.createElement("button",null," back")," "),o.a.createElement("div",null,o.a.createElement("h1",null,e.title?e.title:"Loading"),o.a.createElement("hr",null),o.a.createElement("p",{className:"blog__article"},e.body)))}}]),t}(n.Component);function _(){return o.a.createElement("div",{className:"about"},o.a.createElement("h1",{className:"about__title"},"maxime quas veniam"),o.a.createElement("div",{className:"about__content"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis alias harum voluptatem nostrum vero mollitia cum, voluptas neque praesentium provident quasi, obcaecati enim consequatur illo. Hic autem minus aperiam velit. Ducimus corrupti iusto officia aperiam eius ad neque sit minima ut nostrum aliquideaque qui maxime quas veniam doloremque quaerat repellendus esse, rem dolorum tempora perspiciatis impedit? Possimus omnis pariatur et quia eum molestiae, sint unde, reprehenderit recusandae consequuntur iusto eos quis ipsum veritatis, tempore deleniti totam sunt nisi a!"))}var y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(v,null),o.a.createElement(h.a,{exact:!0,path:"/",component:E}),o.a.createElement(h.a,{exact:!0,path:"/posts",component:g}),o.a.createElement(h.a,{path:"/about",component:_}),o.a.createElement(h.a,{path:"/posts/:postId",component:q})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.2fb975dd.chunk.js.map
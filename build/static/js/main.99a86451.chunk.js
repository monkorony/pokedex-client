(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,a,t){e.exports=t.p+"static/media/pokemonGroup.4d4737a8.png"},53:function(e,a,t){e.exports=t.p+"static/media/charmeleonLoad.ad568a2c.gif"},62:function(e,a,t){e.exports=t(96)},67:function(e,a,t){},94:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(50),c=t.n(l),o=(t(67),t(8)),s=t(9),m=t(11),i=t(10),d=t(12),u=(t(39),t(68),function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Pokedex"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/"},"The PokeDex")))))}),p=t(51),h=t(13),v=t.n(h),g=t(21),f=t(29),E=t(14),b=t.n(E),N=t(52),k=t.n(N),y=t(53),_=t.n(y);function w(e){return e.charAt(0).toUpperCase()+e.slice(1)}function x(e,a){return(new Array(a+1).join("0")+e).slice(-a)}var j={bug:"#729f3f",dragon:"#53a4cf",fairy:"#fdb9e9",fire:"#fd7c23",ghost:"#7b63a3",ground:"#ab9842",normal:"#a4acae",psychic:"#f366b9",steel:"grey",dark:"#707070",electric:"#efd536",fighting:"#d56723",flying:"#3dc7ef",grass:"#9ccc51",ice:"#51c4e7",poison:"#b97fc9",rock:"#a38c21",water:"#4492c4"},O=t(18),C=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",imageUrl:"",pokeIndex:"",type:[],imageLoading:!0,tooManyRequests:!1},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(v.a.mark(function e(){var a,t,n,r,l,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props,t=a.name,n=a.url,r=n.split("/")[n.split("/").length-2],l="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/".concat(x(r,3),".png"),e.next=5,b.a.get("https://pokeapi.co/api/v2/pokemon/".concat(r));case 5:c=e.sent,this.setState({name:t,imageUrl:l,pokeIndex:r,type:c.data.types});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"pad",value:function(e,a){for(var t=""+e;t.length<a;)t="0"+t;return t}},{key:"render",value:function(){var e=this,a=this.state,t=a.imageUrl,n=a.imageLoading;function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}return r.a.createElement("div",{className:"col-md-3 co-sm-6 mb-5"},r.a.createElement("div",{className:"card mb-4 box-shadow"},n?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:_.a,className:"card-img-top",style:{backgroundColor:"#84d6f7",borderRadius:"none"}})):null,r.a.createElement("img",{className:"card-img-top mx-auto",src:t,alt:"Pokemon",onLoad:function(){return e.setState({imageLoading:!1})},onError:function(){return e.setState({tooManyRequests:!0})},style:n?{display:"none"}:{backgroundColor:"#84d6f7",border:"0",display:"block"}}),r.a.createElement("div",{className:"card-body"},r.a.createElement(O.b,{to:"/pokemons/".concat(this.state.pokeIndex)},r.a.createElement("h5",null,l(this.props.name))),r.a.createElement("ul",null,this.state.type.map(function(e){return r.a.createElement("li",{style:{backgroundColor:"".concat(j[e.type.name])},key:Math.random()},r.a.createElement(O.b,{to:"/types/".concat(e.type.name),style:{color:"#fff"}},l(e.type.name)))})))))}}]),a}(n.Component),S=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=(e.searchString,e.handleSubmit,e.handleChange,e.pokemon),t=(e.handleInputChange,e.error);return r.a.createElement(r.a.Fragment,null,a&&!t?a.map(function(e){return r.a.createElement(C,{name:e.name,url:e.url,key:e.name})}):r.a.createElement("h1",null,"Pokemon cannot be found"))}}]),a}(n.Component),D=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.searchString,t=e.handleSubmit,n=e.handleChange;e.handleInputChange,e.dashboardState;return r.a.createElement("div",{className:"col-md-12 my-3"},r.a.createElement("form",{className:"",onSubmit:t},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group mb-2 col-auto"},r.a.createElement("input",{type:"text",className:"form-control text-capitalize",placeholder:"Search Pokemon by name or ID",value:a,onChange:n}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"submit",className:"input-group-text bg-primary text-white"},r.a.createElement("i",{className:"fas fa-search"})))))))}}]),a}(n.Component),M=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).handleChange=function(e){t.setState({searchString:e.target.value.toLowerCase()})},t.handleSubmit=function(e){e.preventDefault();var a=t.state,n=a.searchString,r=a.updateUrl;a.typeGround;t.setState(function(){return{url:"".concat(r).concat(n),searchString:""}},Object(g.a)(v.a.mark(function e(){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(t.state.url);case 3:a=e.sent,t.setState({pokemon:[{name:a.data.name,url:"https://pokeapi.co/api/v2/pokemon/".concat(a.data.id,"/"),index:a.data.id}],error:!1,searchString:""}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.setState({error:!0});case 10:case"end":return e.stop()}},e,null,[[0,7]])})))},t.state={updateUrl:"https://pokeapi.co/api/v2/pokemon/",url:"https://pokeapi.co/api/v2/pokemon/",pokemon:null,searchString:"",typeGround:!1,error:!1},t.handleInputChange=t.handleInputChange.bind(Object(f.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(v.a.mark(function e(){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(this.state.url);case 2:a=e.sent,this.setState({pokemon:a.data.results});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleInputChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(p.a)({},n,t))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light header-img"},r.a.createElement("div",{className:"col-md-5 p-lg-5 mx-auto my-5"},r.a.createElement("h1",{className:"display-4 font-weight-normal"},"The Pokedex"),r.a.createElement("p",{className:"lead font-weight-normal"},"Search for your favorite pokemon"),r.a.createElement(D,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,searchString:this.state.searchString,handleInputChange:this.handleInputChange})),r.a.createElement("div",{className:""},r.a.createElement("img",{style:{maxWidth:"100%"},src:k.a}))),r.a.createElement("div",{className:"py-5 album"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(S,{searchString:this.state.searchString,dashboardState:this.state,handleSubmit:this.handleSubmit,handleChange:this.handleChange,pokemon:this.state.pokemon,handleInputChange:this.handleInputChange,error:this.state.error})))))}}]),a}(n.Component),I=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",pokeIndex:"",imageUrl:"",types:[],description:"",stats:{hp:"",attack:"",defense:"",speed:"",specialAttack:"",specialDefense:""},height:"",weight:"",eggGroup:"",abilities:"",genderRatioMale:"",genderRatioFemale:"",evs:"",hatchSteps:""},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(v.a.mark(function e(){var a,t,n,r,l,c,o,s,m,i,d,u,p,h,g,f,E,N,k=this;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.pokemonIndex,t="https://pokeapi.co/api/v2/pokemon/".concat(a,"/"),n="https://pokeapi.co/api/v2/pokemon-species/".concat(a),e.next=5,b.a.get(t);case 5:return r=e.sent,l=r.data.name,c="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/".concat(x(a,3),".png"),o=r.data,"",s="".hp,m="".attack,i="".defense,d="".speed,u="".specialAttack,p="".specialDefense,o.stats.map(function(e){switch(e.stat.name){case"hp":s=e.base_stat;break;case"attack":m=e.base_stat;break;case"defense":i=e.base_stat;break;case"speed":d=e.base_stat;break;case"special-attack":u=e.base_stat;break;case"special-defense":p=e.base_stat}}),h=Math.round(100*(.328084*o.height+1e-4))/100,g=Math.round(100*(.220464*o.weight+1e-4))/100,f=o.types.map(function(e){return e.type.name}),E=o.abilities.map(function(e){return e.ability.name.split("-").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ")}),N=o.stats.filter(function(e){return e.effort>0}).map(function(e){return"".concat(e.effort," ").concat(e.stat.name.toLowerCase().split("-").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" "))}).join(", "),e.next=18,b.a.get(n).then(function(e){var a="";e.data.flavor_text_entries.some(function(e){"en"!=e.language.name||(a=e.flavor_text)});var t=e.data.gender_rate,n=12.5*t,r=12.5*(8-t),l=Math.round(100/255*e.data.capture_rate),c=e.data.egg_groups.map(function(e){return e.name.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ")}).join(", "),o=255*(e.data.hatch_counter+1);k.setState({description:a,genderRatioFemale:n,genderRatioMale:r,catchRate:l,eggGroups:c,hatchSteps:o})});case 18:this.setState({imageUrl:c,pokeIndex:a,name:l,types:f,stats:{hp:s,attack:m,defense:i,speed:d,specialAttack:u,specialDefense:p},height:h,weight:g,abilities:E,evs:N});case 19:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){this.props.match.params.pokemonIndex;var e=this.state,a=e.name,t=e.abilities,n=e.imageUrl,l=e.pokeIndex,c=e.types,o=e.stats,s=e.height,m=e.weight,i=e.evs,d=e.description,u=e.genderRatioFemale,p=e.genderRatioMale,h=e.catchRate,v=e.eggGroups,g=e.hatchSteps;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},r.a.createElement("h3",null,l)),r.a.createElement("div",{className:"col-7"},r.a.createElement("div",{className:"fl-1"},c.map(function(e){return r.a.createElement("span",{key:e,className:"badge badge-primary badge-pill mr-1"},w(e))}))))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("img",{src:n,alt:a})),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("h4",{className:"mx-auto"},w(a)),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-3"},"HP"),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(o.hp,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,o.hp))))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-3"},"Attack"),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(o.attack,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,o.attack))))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-3"},"Defense"),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(o.defense,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,o.defense))))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-3"},"Speed"),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(o.speed,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,o.speed))))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-3"},"Special Attack"),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(o.specialAttack,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,o.specialAttack))))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-3"},"Special Defense"),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(o.specialDefense,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,o.specialDefense)))))),r.a.createElement("div",{className:"row mt-1"},r.a.createElement("div",{className:"col"},r.a.createElement("p",{className:"p-2"},d))))),r.a.createElement("div",{className:"card-body prof-stats"},r.a.createElement("h5",{className:"card-title text-center"},"Profile"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"fl-1"},"Height:")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"float-left"},s," ft"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"fl-1"},"Weight:")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"float-left"},m," lbs"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"fl-1"},"Catch Rate:")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"float-left"},h,"%"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"fl-1"},"Gender Ratio:")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(u,"%"),backgroundColor:"pink"},"aria-valuenow":"15","aria-valuemin":"0","aria-valuemax":"0"},r.a.createElement("small",null,u)),r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(p,"%"),backgroundColor:"green"},"aria-valuenow":"15","aria-valuemin":"0","aria-valuemax":"0"},r.a.createElement("small",null,p)))))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"fl-1"},"Egg groups:")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"float-left"},v))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"fl-1"},"Hatch Steps:")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"float-left"},g))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"fl-1"},"Abilities:")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"float-left"},t))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"fl-1"},"EVs:")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"float-left"},i)))))))))))}}]),a}(n.Component),A=t(55),U=t(61),P=t(60);function R(){var e=Object(A.a)(["\n  query PokemonsQuery {\n    getAllPokemon {\n      results {\n        name\n        url\n      }\n    }\n  }\n"]);return R=function(){return e},e}var T=Object(U.a)(R()),B=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Pokemons"),r.a.createElement("ul",{className:"new"},r.a.createElement(P.a,{query:T},function(e){var a=e.loading,t=e.error,n=e.data;return a?r.a.createElement("p",null,"Loading..."):t?r.a.createElement("p",null,"Error :("):n.getAllPokemon.results.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("p",null,e.name))})})))}}]),a}(n.Component),F=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(m.a)(this,Object(i.a)(a).call(this))).state={id:"",double_damage_from:[],double_damage_to:[],half_damage_from:[],half_damage_to:[],no_damage_from:[],no_damage_to:[],moves:[],name:"",pokemon:[]},e}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(v.a.mark(function e(){var a,t,n,r,l,c,o,s,m,i,d,u,p;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.typeName,e.next=3,b.a.get("https://pokeapi.co/api/v2/type/".concat(a));case 3:t=e.sent,n=t.data,r=n.id,l=n.damage_relations.double_damage_from,c=n.damage_relations.double_damage_to,o=n.damage_relations.half_damage_from,s=n.damage_relations.half_damage_to,m=n.damage_relations.no_damage_from,i=n.damage_relations.no_damage_to,d=n.moves,u=n.name,p=n.pokemon,l=0!==l.length&&l,c=0!==c.length&&c,o=0!==o.length&&o,s=0!==s.length&&s,m=0!==m.length&&m,i=0!==i.length&&i,this.setState({id:r,double_damage_from:l,double_damage_to:c,half_damage_from:o,half_damage_to:s,no_damage_from:m,no_damage_to:i,moves:d,name:u,pokemon:p});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchTypeData",value:function(){var e=Object(g.a)(v.a.mark(function e(a){var t,n,r,l,c,o,s,m,i,d,u,p;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://pokeapi.co/api/v2/type/".concat(a));case 2:t=e.sent,n=t.data,r=n.id,l=n.damage_relations.double_damage_from,c=n.damage_relations.double_damage_to,o=n.damage_relations.half_damage_from,s=n.damage_relations.half_damage_to,m=n.damage_relations.no_damage_from,i=n.damage_relations.no_damage_to,d=n.moves,u=n.name,p=n.pokemon,this.setState({id:r,double_damage_from:l,double_damage_to:c,half_damage_from:o,half_damage_to:s,no_damage_from:m,no_damage_to:i,moves:d,name:u,pokemon:p});case 5:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){this.props.match.params.typeName!==e.match.params.typeName&&this.fetchTypeData(this.props.match.params.typeName)}},{key:"render",value:function(){var e=this.state,a=(e.id,e.double_damage_from),t=e.double_damage_to,n=e.half_damage_from,l=e.half_damage_to,c=e.no_damage_from,o=e.no_damage_to,s=e.moves,m=e.name,i=e.pokemon;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card cardType"},r.a.createElement("div",{style:{backgroundColor:"".concat(j[m])},className:"card-header"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",{style:{color:"#fff"}},w(m))))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",null,"Double Damage From:"),a?r.a.createElement("ul",null,a.map(function(e){return r.a.createElement("li",{style:{backgroundColor:"".concat(j[e.name]),color:"#fff"},key:Math.random()},r.a.createElement(O.b,{to:"/types/".concat(e.name),style:{color:"#fff"}},w(e.name)))})):r.a.createElement("div",null,"None")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",null,"Double Damage To:"),t?r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{style:{backgroundColor:"".concat(j[e.name]),color:"#fff"},key:Math.random()},r.a.createElement(O.b,{to:"/types/".concat(e.name),style:{color:"#fff"}},w(e.name)))})):r.a.createElement("div",null,"None"))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",null,"Half Damage From:"),n?r.a.createElement("ul",null,n.map(function(e){return r.a.createElement("li",{style:{backgroundColor:"".concat(j[e.name]),color:"#fff"},key:Math.random()},r.a.createElement(O.b,{to:"/types/".concat(e.name),style:{color:"#fff"}},w(e.name)))})):r.a.createElement("div",null,"None")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",null,"Half Damage To:"),l?r.a.createElement("ul",null,l.map(function(e){return r.a.createElement("li",{style:{backgroundColor:"".concat(j[e.name]),color:"#fff"},key:Math.random()},r.a.createElement(O.b,{to:"/types/".concat(e.name),style:{color:"#fff"}},w(e.name)))})):r.a.createElement("div",null,"None"))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",null,"No Damage From:"),c?r.a.createElement("ul",null,c.map(function(e){return r.a.createElement("li",{style:{backgroundColor:"".concat(j[e.name]),color:"#fff"},key:Math.random()},r.a.createElement(O.b,{to:"/types/".concat(e.name),style:{color:"#fff"}},w(e.name)))})):r.a.createElement("div",null,"None")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",null,"No Damage To:"),o?r.a.createElement("ul",null,o.map(function(e){return r.a.createElement("li",{style:{backgroundColor:"".concat(j[e.name]),color:"#fff"},key:Math.random()},r.a.createElement(O.b,{to:"/types/".concat(e.name),style:{color:"#fff"}},w(e.name)))})):r.a.createElement("div",null,"None"))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h2",null,"Moves:"),r.a.createElement("ul",null,s.map(function(e){return r.a.createElement("li",{key:Math.random(),style:{color:"#343a40",backgroundColor:"#eee",margin:"5px"}},w(e.name))}))))))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12",style:{marginBottom:"40px"}},r.a.createElement("h2",null,w(m)," Type Pokemon")),i.map(function(e){return r.a.createElement(C,{name:e.pokemon.name,url:e.pokemon.url,key:e.pokemon.name})})))}}]),a}(n.Component),L=t(24),G=(t(94),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(O.a,null,r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(L.c,null,r.a.createElement(L.a,{exact:!0,path:"/",component:M}),r.a.createElement(L.a,{exact:!0,path:"/types/:typeName/",component:F}),r.a.createElement(L.a,{exact:!0,path:"/pokemons/",component:B}),r.a.createElement(L.a,{exact:!0,path:"/pokemons/:pokemonIndex/",component:I}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[62,1,2]]]);
//# sourceMappingURL=main.99a86451.chunk.js.map
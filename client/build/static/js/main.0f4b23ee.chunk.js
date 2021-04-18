(this["webpackJsonpfull-stack-checkers"]=this["webpackJsonpfull-stack-checkers"]||[]).push([[0],{37:function(e,c,i){},38:function(e,c,i){},51:function(e,c,i){"use strict";i.r(c);var r=i(0),n=i.n(r),o=i(19),l=i.n(o),a=(i(37),i(32)),t=i(17),s=i(12),u=(i(38),i(1)),b=function(e){var c,i=e.id,r=(e.setBoard,e.pieceColor),n=e.pieceIsKing,o=e.styleInfo;return"black"===r&&(c="p1"),"red"===r&&(c="p2"),n&&(c+=" king"),"circle"===o.shape?c+=" piece-circle":"square"===o.shape&&(c+=" piece-square"),c+=" "+o.boardStyle,Object(u.jsx)("div",{className:"piece ".concat(c),id:i,draggable:"true",onDragStart:function(e){return function(e){e.dataTransfer.setData("text",i),e.dataTransfer.setData("color",r)}(e)},children:n&&Object(u.jsx)("svg",{className:"king-icon",width:"184.099px",height:"184.099px",viewBox:"0 0 184.099 184.099",children:Object(u.jsx)("path",{d:"M182.23,54.814c-1.675-1.258-3.982-1.245-5.633,0.027l-48.457,36.991L96.337,19.979c-1.504-3.386-7.055-3.386-8.564,0\r l-32.175,72.68L7.563,54.878c-1.659-1.297-3.979-1.333-5.669-0.088c-1.696,1.254-2.338,3.492-1.577,5.443l33.372,86.229\r c0.691,1.803,2.43,2.984,4.357,2.984h108.009c1.942,0,3.666-1.176,4.36-2.984l33.368-86.229\r C184.538,58.282,183.905,56.068,182.23,54.814z M142.852,140.099h-101.6L15.193,72.774l39.357,30.948\r c1.13,0.895,2.606,1.218,4.022,0.853c1.404-0.342,2.564-1.315,3.151-2.643l30.333-68.516l29.928,67.626\r c0.591,1.304,1.729,2.277,3.118,2.631c1.388,0.365,2.861,0.061,4.006-0.816l39.981-30.521L142.852,140.099z M150.244,161.983\r c0,2.582-2.095,4.677-4.677,4.677H38.526c-2.582,0-4.676-2.095-4.676-4.677s2.095-4.677,4.676-4.677h107.041\r C148.155,157.307,150.244,159.401,150.244,161.983z"})})})},p=function(e){var c=e.color,i=e.number,r=e.populated,n=e.setBoard,o=e.pieceColor,l=e.pieceIsKing,a=e.styleInfo;var t="black"===c?"#954535":"#d2a56d",s="black"===c?"white":"black";return"bw"===a.boardStyle&&(t=s),"green"===a.boardStyle&&(t="black"===c?"#32612D":"#5ca08e"),Object(u.jsx)("div",{id:"square"+i,draggable:"false",onDragOver:function(e){return i=e,void("black"===c&&i.preventDefault());var i},onDrop:function(e){return function(e){n(e.target.id.replace("square",""),e.dataTransfer.getData("text"),e.dataTransfer.getData("color"))}(e)},className:"square",onClick:function(){console.log(r)},style:{backgroundColor:t,color:s},children:r?Object(u.jsx)(b,{styleInfo:a,pieceIsKing:l,pieceColor:o,id:i,setBoard:n}):null})},h=function(e){var c=e.boardState,i=e.setBoard,r=e.styleInfo;return Object(u.jsx)("div",{className:"board ".concat(r.flipboard?"rotated":""),children:c.map((function(e,c){return Object(u.jsx)(p,{number:e.number,pieceColor:e.pieceColor,pieceIsKing:e.pieceIsKing,setBoard:i,color:e.color,populated:e.hasPiece,rowNum:Math.floor(e.number/8),styleInfo:r},c)}))})},d=i(16),j=i(6),m=function(e){var c=e.viewHistory;return Object(u.jsxs)("span",{className:"move-arrows grid-item",children:[Object(u.jsx)("span",{onClick:function(){return c("beginning")},className:"double-arrow-left",children:Object(u.jsx)("svg",{className:"double-arrow","aria-hidden":"true",focusable:"false","data-prefix":"fas",role:"img",viewBox:"0 0 512 512",children:Object(u.jsx)("path",{fill:"currentColor",d:"M34.5 239L228.9 44.7c9.4-9.4 24.6-9.4 33.9 0l22.7 22.7c9.4 9.4 9.4 24.5 0 33.9L131.5 256l154 154.7c9.3 9.4 9.3 24.5 0 33.9l-22.7 22.7c-9.4 9.4-24.6 9.4-33.9 0L34.5 273c-9.3-9.4-9.3-24.6 0-34zm192 34l194.3 194.3c9.4 9.4 24.6 9.4 33.9 0l22.7-22.7c9.4-9.4 9.4-24.5 0-33.9L323.5 256l154-154.7c9.3-9.4 9.3-24.5 0-33.9l-22.7-22.7c-9.4-9.4-24.6-9.4-33.9 0L226.5 239c-9.3 9.4-9.3 24.6 0 34z"})})}),Object(u.jsx)("span",{onClick:function(){return c("left")},className:"chevron left"}),Object(u.jsx)("span",{onClick:function(){return c("right")},className:"chevron right"}),Object(u.jsx)("span",{onClick:function(){return c("present")},className:"double-arrow-right",children:Object(u.jsx)("svg",{"aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 512 512",className:"double-arrow",children:Object(u.jsx)("path",{fill:"currentColor",d:"M477.5 273L283.1 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.5 0-33.9l154-154.7-154-154.7c-9.3-9.4-9.3-24.5 0-33.9l22.7-22.7c9.4-9.4 24.6-9.4 33.9 0L477.5 239c9.3 9.4 9.3 24.6 0 34zm-192-34L91.1 44.7c-9.4-9.4-24.6-9.4-33.9 0L34.5 67.4c-9.4 9.4-9.4 24.5 0 33.9l154 154.7-154 154.7c-9.3 9.4-9.3 24.5 0 33.9l22.7 22.7c9.4 9.4 24.6 9.4 33.9 0L285.5 273c9.3-9.4 9.3-24.6 0-34z"})})})]})},g=function(e){var c=e.gameOver,i=e.resetGame;return Object(u.jsx)("button",{onClick:i,className:"play-again",children:c?"Play Again":"Restart Game"})},O=function(e){var c=e.rotateBoard;return Object(u.jsxs)("span",{className:"board-flip",children:["flip board \xa0 \xa0",Object(u.jsx)("svg",{onClick:c,className:"board-flip-svg",viewBox:"0 0 489.645 489.645",children:Object(u.jsx)("path",{d:"M460.656,132.911c-58.7-122.1-212.2-166.5-331.8-104.1c-9.4,5.2-13.5,16.6-8.3,27c5.2,9.4,16.6,13.5,27,8.3\r c99.9-52,227.4-14.9,276.7,86.3c65.4,134.3-19,236.7-87.4,274.6c-93.1,51.7-211.2,17.4-267.6-70.7l69.3,14.5\r c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-122.8-25c-20.6-2-25,16.6-23.9,22.9l15.6,123.8\r c1,10.4,9.4,17.7,19.8,17.7c12.8,0,20.8-12.5,19.8-23.9l-6-50.5c57.4,70.8,170.3,131.2,307.4,68.2\r C414.856,432.511,548.256,314.811,460.656,132.911z"})})]})},f=function(e){var c=e.player,i=e.viewHistory,r=e.gameOver,n=e.resetGame,o=e.styleInfo,l=e.rotateBoard;return Object(u.jsxs)("div",{className:"dashboard",children:[Object(u.jsxs)("span",{className:"player-info grid-item",children:[r?"Game over! ":c?"Player one's turn":"Player two's turn"," ",Object(u.jsx)("span",{className:c?"p1 ex "+o.shape+" "+o.boardStyle:"p2 ex "+o.shape+" "+o.boardStyle})]}),Object(u.jsx)(m,{viewHistory:i}),Object(u.jsx)(g,{resetGame:n,gameOver:r}),Object(u.jsx)(O,{rotateBoard:l})]})},x=function(e,c,i,r){if(!i[c])return{valid:!1,jump:!1,jumpedSquare:null,multiJump:!1,multiJumpOptions:[],isKing:!1};var n,o,l,a,t=[1,3,5,7,8,23,24,39,40,55,56,58,60,62],s=[],u=[],b={valid:!1,jump:!1,jumpedSquare:null,multiJump:!1,multiJumpOptions:[],isKing:i[c].pieceIsKing},p=[];r?(n=-9,o=-7,l=-18,a=-14):(n=7,o=9,l=14,a=18);var h=function(e,c,r,n){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];!t.includes(e+c)&&e+c>=0&&e+c<64&&i[e+c].hasPiece&&(n&&"red"===i[e+c].pieceColor||!n&&"black"===i[e+c].pieceColor)&&!i[e+r].hasPiece&&(o?(b.multiJump=!0,b.multiJumpOptions.push(e+r)):(s.push(e+r),u.push(e+c)))};return c%8!==7&&p.push(c+o),c%8!==0&&p.push(c+n),b.isKing&&c%8!==7&&p.push(c-n),b.isKing&&c%8!==0&&p.push(c-o),h(c,n,l,r),h(c,o,a,r),b.isKing&&(h(c,-o,-a,r),h(c,-n,-l,r)),p.includes(e)?b.valid=!0:s.includes(e)&&(b.valid=!0,b.jumpedSquare=u[s.indexOf(e)],b.jump=!0,e%8!==0&&h(e,n,l,r,!0),e%8!==7&&h(e,o,a,r,!0),b.isKing&&e%8!==0&&h(e,-o,-a,r,!0),b.isKing&&e%8!==7&&h(e,-n,-l,r,!0)),b.valid&&[1,3,5,7,56,58,60,62].includes(e)&&(r&&e%2===1||!r&&e%2===0)&&(b.isKing=!0),b},v=function(e,c){var i={gameOver:!0,winner:c?"two":"one"},r=[1,3,5,7,8,23,24,39,40,55,56,58,60,62];return e.forEach((function(n){if(n.hasPiece&&(c&&"black"===n.pieceColor||!c&&"red"===n.pieceColor)&&function(i){var n=i.number,o=-9,l=-7,a=7,t=-9;return c||(o=7,l=9,t=-7,a=-9),n%8!==0&&n+o>=0&&n+o<=64&&!1===e[n+o].hasPiece||n%8!==7&&n+l>=0&&n+l<=64&&!1===e[n+l].hasPiece||!!(i.pieceIsKing&&n%8!==0&&n+a>=0&&n+a<=64&&!1===e[n+a].hasPiece)||!!(i.pieceIsKing&&n%8!==7&&n+t>=0&&n+t<=64&&!1===e[n+t].hasPiece)||!!(n%8!==0&&n+2*o>=0&&n+2*o<=64&&!r.includes(n+o)&&!0===e[n+o].hasPiece&&(c&&"red"===e[n+o].pieceColor||!c&&"black"===e[n+o].pieceColor)&&!1===e[n+2*o].hasPiece)||!!(n%8!==7&&n+2*l>=0&&n+2*l<=64&&!r.includes(n+l)&&!0===e[n+l].hasPiece&&(c&&"red"===e[n+l].pieceColor||!c&&"black"===e[n+l].pieceColor)&&!1===e[n+2*l].hasPiece)||!!(i.pieceIsKing&&n%8!==7&&n+2*t>=0&&n+2*t<=64&&!r.includes(n+t)&&!0===e[n+t].hasPiece&&(c&&"red"===e[n+t].pieceColor||!c&&"black"===e[n+t].pieceColor)&&!1===e[n+2*t].hasPiece)||!!(i.pieceIsKing&&n%8!==0&&n+2*a>=0&&n+2*a<=64&&!r.includes(n+a)&&!0===e[n+a].hasPiece&&(c&&"red"===e[n+a].pieceColor||!c&&"black"===e[n+a].pieceColor)&&!1===e[n+2*a].hasPiece)||void 0}(n))return i.gameOver=!1,i})),i},k=function(e){var c=e.gameOver,i=e.resetGame,r=c.gameOver?"flex":"none";return Object(u.jsxs)("div",{className:"end-modal",style:{display:r},children:[Object(u.jsx)("span",{onClick:function(){document.getElementsByClassName("end-modal")[0].style.visibility="hidden"},className:"close-modal",children:"X"}),Object(u.jsxs)("p",{children:["Player ",c.winner," has won!"]}),Object(u.jsx)(g,{resetGame:i,gameOver:c.gameOver})]})},C=[{number:0,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:1,hasPiece:!0,color:"black",pieceColor:"red",pieceIsKing:!1},{number:2,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:3,hasPiece:!0,color:"black",pieceColor:"red",pieceIsKing:!1},{number:4,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:5,hasPiece:!0,color:"black",pieceColor:"red",pieceIsKing:!1},{number:6,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:7,hasPiece:!0,color:"black",pieceColor:"red",pieceIsKing:!1},{number:8,hasPiece:!0,color:"black",pieceColor:"red",pieceIsKing:!1},{number:9,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:10,hasPiece:!0,color:"black",pieceColor:"red",pieceIsKing:!1},{number:11,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:12,hasPiece:!0,color:"black",pieceColor:"red",pieceIsKing:!1},{number:13,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:14,hasPiece:!0,color:"black",pieceColor:"red",pieceIsKing:!1},{number:15,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:16,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:17,hasPiece:!0,color:"black",pieceColor:"red",pieceIsKing:!1},{number:18,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:19,hasPiece:!0,color:"black",pieceColor:"red",pieceIsKing:!1},{number:20,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:21,hasPiece:!0,color:"black",pieceColor:"red",pieceIsKing:!1},{number:22,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:23,hasPiece:!0,color:"black",pieceColor:"red",pieceIsKing:!1},{number:24,hasPiece:!1,color:"black",pieceColor:null,pieceIsKing:!1},{number:25,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:26,hasPiece:!1,color:"black",pieceColor:null,pieceIsKing:!1},{number:27,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:28,hasPiece:!1,color:"black",pieceColor:null,pieceIsKing:!1},{number:29,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:30,hasPiece:!1,color:"black",pieceColor:null,pieceIsKing:!1},{number:31,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:32,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:33,hasPiece:!1,color:"black",pieceColor:null,pieceIsKing:!1},{number:34,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:35,hasPiece:!1,color:"black",pieceColor:null,pieceIsKing:!1},{number:36,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:37,hasPiece:!1,color:"black",pieceColor:null,pieceIsKing:!1},{number:38,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:39,hasPiece:!1,color:"black",pieceColor:null,pieceIsKing:!1},{number:40,hasPiece:!0,color:"black",pieceColor:"black",pieceIsKing:!1},{number:41,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:42,hasPiece:!0,color:"black",pieceColor:"black",pieceIsKing:!1},{number:43,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:44,hasPiece:!0,color:"black",pieceColor:"black",pieceIsKing:!1},{number:45,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:46,hasPiece:!0,color:"black",pieceColor:"black",pieceIsKing:!1},{number:47,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:48,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:49,hasPiece:!0,color:"black",pieceColor:"black",pieceIsKing:!1},{number:50,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:51,hasPiece:!0,color:"black",pieceColor:"black",pieceIsKing:!1},{number:52,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:53,hasPiece:!0,color:"black",pieceColor:"black",pieceIsKing:!1},{number:54,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:55,hasPiece:!0,color:"black",pieceColor:"black",pieceIsKing:!1},{number:56,hasPiece:!0,color:"black",pieceColor:"black",pieceIsKing:!1},{number:57,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:58,hasPiece:!0,color:"black",pieceColor:"black",pieceIsKing:!1},{number:59,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:60,hasPiece:!0,color:"black",pieceColor:"black",pieceIsKing:!1},{number:61,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1},{number:62,hasPiece:!0,color:"black",pieceColor:"black",pieceIsKing:!1},{number:63,hasPiece:!1,color:"white",pieceColor:null,pieceIsKing:!1}],I=function(){return Object(u.jsx)("footer",{children:Object(u.jsxs)("p",{children:[" \xa9 ",(new Date).getFullYear(),", ",Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://mattdwinell.github.io",children:"Matthew Dwinell"})]})})},w=function(){return Object(u.jsxs)("div",{className:"about",children:[Object(u.jsxs)("p",{children:[" \xa0\xa0\xa0\xa0I hope this version of checkers amused you\u2014 there are a lot of checkers apps out there, and I wanted to put my own spin on the ruleset. When I was a kid, I was told that you didn\u2019t have to jump a piece if you didn\u2019t want to, but if you did a single-jump, you were obligated to double (or triple) jump if it was possible. Sure, it ",Object(u.jsx)("strong",{children:"might"})," have been a forgiving way to play, but it also allows an opponent to set up traps where a king has to double jump and be subsequently taken. Happy playing!"]}),Object(u.jsxs)("p",{children:["\xa0\xa0\xa0\xa0This checkers app was created as a solo project by me, Matthew Dwinell. It was built in react using functional components, browser router, and a good chunk of spare time. For more information about projects I\u2019ve worked on, feel free to check out my ",Object(u.jsx)("a",{href:"https://mattdwinell.github.io",rel:"noreferrer",target:"_blank",children:"web portfolio"}),"."]})]})},y=i(56),P=i(54),K=i(57),S=i(55),N=i.p+"static/media/checkers_piece_icon.4d65ed96.PNG",q=function(){return Object(u.jsxs)(y.a,{bg:"light",expand:"sm",className:"style-nav-bar",children:[Object(u.jsx)(y.a.Brand,{children:Object(u.jsx)(d.b,{exact:!0,to:"/",children:Object(u.jsxs)("div",{className:"logo-holder",children:[" ",Object(u.jsx)("img",{src:N,alt:"checkers logo"})]})})}),Object(u.jsx)(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(y.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsx)(P.a,{children:Object(u.jsxs)(K.a,{defaultActiveKey:"/",className:"mr-auto",children:[Object(u.jsx)(S.a,{md:4,children:Object(u.jsx)(K.a.Item,{children:Object(u.jsxs)(K.a.Link,{children:[Object(u.jsx)(d.b,{className:"top-nav-link",exact:!0,to:"/",children:"Home"})," "]})})}),Object(u.jsx)(S.a,{md:4,children:Object(u.jsx)(K.a.Item,{children:Object(u.jsxs)(K.a.Link,{children:[Object(u.jsx)(d.b,{className:"top-nav-link",exact:!0,to:"/rules",children:"Rules"})," "]})})}),Object(u.jsx)(S.a,{md:4,children:Object(u.jsx)(K.a.Item,{children:Object(u.jsx)(K.a.Link,{children:Object(u.jsx)(d.b,{className:"top-nav-link",to:"/about",children:"About"})})})}),Object(u.jsx)(S.a,{md:4,children:Object(u.jsx)(K.a.Item,{children:Object(u.jsx)(K.a.Link,{children:Object(u.jsx)(d.b,{className:"top-nav-link",to:"/preferences",children:"Preferences"})})})})]})})})]})},B=function(e){var c=e.changeShape,i=e.style,r=e.changeBoardstyle;return Object(u.jsxs)("div",{className:"preferences-page",children:[Object(u.jsx)("h4",{children:"Customize Board"}),Object(u.jsxs)("div",{className:"radio-control",children:["Piece shape",Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{onChange:function(){return c(document.querySelector('input[name="shape"]:checked').value)},defaultChecked:"circle"===i.shape,type:"radio",value:"circle",name:"shape"}),Object(u.jsx)("label",{htmlFor:"circle",children:" \xa0Round"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{onChange:function(){return c(document.querySelector('input[name="shape"]:checked').value)},defaultChecked:"square"===i.shape,name:"shape",value:"square",type:"radio"}),Object(u.jsx)("label",{htmlFor:"square",children:" \xa0Square"})]})]}),Object(u.jsxs)("div",{className:"radio-control",children:["Board Color",Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{onChange:function(){return r(document.querySelector('input[name="boardstyle"]:checked').value)},defaultChecked:"brown"===i.boardStyle,type:"radio",value:"brown",name:"boardstyle"}),Object(u.jsx)("label",{htmlFor:"circle",children:" \xa0Brown and Tan"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{onChange:function(){return r(document.querySelector('input[name="boardstyle"]:checked').value)},name:"boardstyle",value:"bw",type:"radio",defaultChecked:"bw"===i.boardStyle}),Object(u.jsx)("label",{htmlFor:"square",children:" \xa0Black and White"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{onChange:function(){return r(document.querySelector('input[name="boardstyle"]:checked').value)},name:"boardstyle",value:"green",type:"radio",defaultChecked:"green"===i.boardStyle}),Object(u.jsx)("label",{htmlFor:"square",children:" \xa0Shades of Green"})]})]})]})},L=function(){return Object(u.jsxs)("div",{className:"rules",children:[Object(u.jsx)("h5",{children:"General rules"}),Object(u.jsx)("p",{children:"Your goal is to remove all of the opponent's pieces by capturing them or forcing them into a position where they cannot move."}),Object(u.jsx)("p",{children:"Any piece can move diagonally forward, only kings can move diagonally backwards."}),Object(u.jsx)("p",{children:"A simple checkers move would be moving your piece diagonally forward one square."}),Object(u.jsx)("p",{children:"Jumping requires that the nearest diagonal square be occupied by the opponent's piece, and that subsequent square after that piece is unoccupied."}),Object(u.jsx)("p",{children:"When you jump you capture the opponent's piece, removing it from the board."}),Object(u.jsx)("p",{children:" For single jumps, jumping is not required."}),Object(u.jsx)("p",{children:" If one of your pieces reaches the back-rank of the other side of the board, it becomes a king and can move backwards as well as forwards."}),Object(u.jsx)("h5",{children:"House rule"}),Object(u.jsx)("p",{children:"While single jumps are not mandatory, if you jump and have the option to double jump, you must take it."})]})};var D=function(){var e=Object(r.useState)(!0),c=Object(s.a)(e,2),i=c[0],n=c[1],o=Object(r.useState)(C),l=Object(s.a)(o,2),b=l[0],p=l[1],m=Object(r.useState)([{board:b,historyIndex:0}]),g=Object(s.a)(m,2),O=g[0],y=g[1],P=Object(r.useState)(0),K=Object(s.a)(P,2),S=K[0],N=K[1],D=Object(r.useState)([]),G=Object(s.a)(D,2),J=G[0],M=G[1],z=Object(r.useState)({gameOver:!1,winner:null}),F=Object(s.a)(z,2),H=F[0],T=F[1],A=Object(r.useState)("circle"),E=Object(s.a)(A,2),W=E[0],_=E[1],R=Object(r.useState)("brown"),Y=Object(s.a)(R,2),X=Y[0],Q=Y[1],U=Object(r.useState)(!1),V=Object(s.a)(U,2),Z=V[0],$=V[1],ee=function(e,c,r){if(e=parseInt(e,10),c=parseInt(c,10),e!==c&&e&&!("black"===r&&!1===i||"red"===r&&!0===i)&&!0!==b[e].hasPiece&&(!(J.length>0)||J.includes(parseInt(e,10)))&&!(S!==O.length-1&&O.length>0)){var o=x(parseInt(e,10),parseInt(c,10),b,i);if(o.valid){o.multiJump?M(o.multiJumpOptions):(n(!i),M([]));var l=b.map((function(i,r){return r==e?Object(t.a)(Object(t.a)({},i),{},{hasPiece:!0,pieceColor:b[c].pieceColor,pieceIsKing:o.isKing}):r==c||!0===o.jump&&r===o.jumpedSquare?Object(t.a)(Object(t.a)({},i),{},{hasPiece:!1,pieceColor:null,pieceIsKing:!1}):i}));p(l),y([].concat(Object(a.a)(O),[{board:l,historyIndex:S+1}])),N(S+1);var s=v(l,!i);!0===s.gameOver&&T(s)}}},ce=function(e){1!==O.length&&("left"===e&&S>0&&(p(O[S-1].board),N(S-1)),"present"===e&&(N(O.length-1),p(O[O.length-1].board)),"right"===e&&S<O.length-1&&(p(O[S+1].board),N(S+1)),"beginning"===e&&(p(O[0].board),N(0)))},ie=function(){n(!0),p(C),y([{board:C,historyIndex:0}]),N(0),M([]),T({gameOver:!1,winner:null}),document.getElementsByClassName("end-modal")[0].style.visibility="visible"},re=function(e){_(e)},ne=function(e){Q(e)},oe=function(){$(!Z)};return Object(u.jsx)(d.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(q,{}),Object(u.jsx)(j.a,{path:"/",exact:!0,render:function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{boardState:b,setBoard:ee,styleInfo:{shape:W,boardStyle:X,flipboard:Z}}),Object(u.jsx)(f,{styleInfo:{shape:W,boardStyle:X,flipboard:Z},resetGame:ie,player:i,gameOver:H.gameOver,viewHistory:ce,rotateBoard:oe}),Object(u.jsx)(k,{resetGame:ie,gameOver:H})]})}}),Object(u.jsx)(j.a,{path:"/about",component:w}),Object(u.jsx)(j.a,{path:"/preferences",render:function(e){return Object(u.jsx)(B,{changeBoardstyle:ne,changeShape:re,style:{shape:W,boardStyle:X}})}}),Object(u.jsx)(j.a,{path:"/rules",component:L}),Object(u.jsx)(I,{})]})})};l.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.0f4b23ee.chunk.js.map
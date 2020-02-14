(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56d429a8"],{"0063":function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));class r{constructor(t,e,s){this.width=0,this.height=0,this.context=t,this.width=e,this.height=s}draw(){this.context.fillStyle="#ffffff",this.context.fillRect(0,0,this.width,this.height)}}},"0b30":function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));class r{static div(t,e){return(t-t%e)/e}static randomIntByInterval(t,e){return Math.floor(t+Math.random()*(e+1-t))}static getDistance(t,e,s,r){return Math.sqrt(Math.pow(e-t,2)+Math.pow(r-s,2))}static createMatrix(t,e){const s=[];while(e--)s.push(new Array(t).fill(0));return s}static getMouseCoordinates(t){const e=t.target&&t.target.getBoundingClientRect(),s=t.clientX-e.left,r=t.clientY-e.top;return{x:s,y:r}}static loadImage(t){return new Promise((e,s)=>{const r=new Image;r.onload=()=>{e(r)},r.onerror=s,r.src=t})}static drawImageOnCanvas(t,e,s,r,i){this.loadImage("./tank.png").then(n=>{t.drawImage(n,e,s,r,i)}).catch(t=>{console.error("Error: in the method drawImageOnCanvas loading went wrong",t)})}static checkCollisionRectOfCircle(t,e){return t.x<e.x+e.getRadius&&t.x+t.getWidth>e.x-e.getRadius&&t.y<e.y+e.getRadius&&t.y+t.getHeight>e.y-e.getRadius}static checkCollisionRectOfRect(t,e){return t.x<e.x+e.getWidth&&t.x+t.getWidth>e.x&&t.y<e.y+e.getHeight&&t.y+t.getHeight>e.y}static applyMixins(t,e){e.forEach(e=>{Object.getOwnPropertyNames(e.prototype).forEach(s=>{t.prototype[s]=e.prototype[s]})})}}},"213c":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tanks"},[s("Scores",{attrs:{scores:t.getScores}}),s("canvas",{ref:"game"}),s("button",{staticClass:"btn-outline btn-outline--restart",attrs:{type:"button"},on:{click:function(e){return t.restart()}}},[t._v("Restart")])],1)},i=[],n=s("9ab4"),a=s("65d9"),o=s.n(a),c=s("50aa"),h=s("0063"),u=s("87fe"),l=s("0b30");class g{constructor(t){this.context=t}update(){}draw(){l["a"].drawImageOnCanvas(this.context,10,10,100,100)}}var d=s("7cc2"),v=s("b6ab");let f=class extends(Object(a["mixins"])(d["a"])){constructor(){super(),this.scores=[],this.loop=0,this.player=new u["a"]}start(){this.update(),this.isOver||(this.loop=requestAnimationFrame(this.start))}stop(){this.loop&&(cancelAnimationFrame(this.loop),this.globalState=c["j"].OVER,this.canvas.removeEventListener("mousemove",this.mousemoveListener))}run(){!1!==this._initInstance()&&this.start()}update(){this._checkState()}restart(){this._reset(),this.run()}mounted(){this.run()}get getScores(){return this.scores=[{message:"Previous score",value:this.previousScore},{message:"Current score",value:this.currentScore},{message:"Best result",value:this.bestScore}],this.scores}get previousScore(){return this.player.getPreviousScore}get currentScore(){return this.player.getScore}get bestScore(){return this.player.getBest}_reset(){this.clearContext(),this.stop()}_initInstance(){return(!1!==this.isInitCanvas||!1!==this._initCanvas(c["d"].WIDTH,c["d"].HEIGHT))&&(this.mousemoveListener=t=>{this._handleMouseMove(t)},this.canvas.addEventListener("mousemove",this.mousemoveListener),this.globalState=c["j"].PLAY,this.board=new h["a"](this.context,this.width,this.height),this.tank=new g(this.context),this.tank.draw(),!0)}_checkState(){}_handleMouseMove(t){const{x:e,y:s}=l["a"].getMouseCoordinates(t)}};f=Object(n["a"])([o()({components:{Scores:v["a"]}})],f);var I=f,p=I,S=s("2877"),m=Object(S["a"])(p,r,i,!1,null,null,null);e["default"]=m.exports},"50aa":function(t,e,s){"use strict";var r,i,n,a,o,c,h,u,l,g,d;s.d(e,"h",(function(){return r})),s.d(e,"j",(function(){return i})),s.d(e,"g",(function(){return n})),s.d(e,"b",(function(){return a})),s.d(e,"d",(function(){return o})),s.d(e,"a",(function(){return c})),s.d(e,"c",(function(){return h})),s.d(e,"f",(function(){return u})),s.d(e,"e",(function(){return l})),s.d(e,"i",(function(){return g})),s.d(e,"k",(function(){return d})),function(t){t[t["LEFT"]=37]="LEFT",t[t["RIGHT"]=39]="RIGHT",t[t["UP"]=38]="UP",t[t["DOWN"]=40]="DOWN"}(r||(r={})),function(t){t[t["START"]=0]="START",t[t["PLAY"]=1]="PLAY",t[t["OVER"]=2]="OVER"}(i||(i={})),function(t){t[t["RESTART"]=82]="RESTART",t[t["Q"]=81]="Q",t[t["W"]=87]="W",t[t["SPACE"]=32]="SPACE"}(n||(n={})),function(t){t[t["WIDTH"]=800]="WIDTH",t[t["HEIGHT"]=400]="HEIGHT"}(a||(a={})),function(t){t[t["WIDTH"]=640]="WIDTH",t[t["HEIGHT"]=640]="HEIGHT",t[t["SCALE_COEFFICIENT"]=20]="SCALE_COEFFICIENT"}(o||(o={})),function(t){t[t["WIDTH"]=800]="WIDTH",t[t["HEIGHT"]=720]="HEIGHT"}(c||(c={})),function(t){t[t["WIDTH"]=800]="WIDTH",t[t["HEIGHT"]=600]="HEIGHT"}(h||(h={})),function(t){t[t["WIDTH"]=450]="WIDTH",t[t["HEIGHT"]=450]="HEIGHT"}(u||(u={})),function(t){t[t["WIDTH"]=320]="WIDTH",t[t["HEIGHT"]=540]="HEIGHT",t[t["SCALE_COEFFICIENT"]=20]="SCALE_COEFFICIENT"}(l||(l={})),function(t){t[t["FIRST"]=0]="FIRST",t[t["SECOND"]=1]="SECOND",t[t["AI"]=2]="AI"}(g||(g={})),function(t){t[t["SLOW"]=8]="SLOW",t[t["MIDDLE"]=14]="MIDDLE",t[t["FAST"]=20]="FAST"}(d||(d={}))},"7cc2":function(t,e,s){"use strict";var r=s("9ab4"),i=s("60a3"),n=s("50aa");class a{constructor(t,e,s){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.canvas.width=e,this.canvas.height=s,this.canvas.setAttribute("tabindex","1"),this.canvas.focus()}addEventListener(t,e){this.canvas.addEventListener(t,e)}removeEventListener(t,e){this.canvas.removeEventListener(t,e)}get context(){return this.ctx}}let o=class extends i["c"]{constructor(){super(...arguments),this.canvas=null,this.width=0,this.height=0,this.globalState=n["j"].START,this.isInitCanvas=!1,this.message="",this.styleOfMessage=""}_initCanvas(t,e){return!!this.$refs.game&&(this.width=t,this.height=e,this.canvas=new a(this.$refs.game,t,e),this.context=this.canvas.context,this.isInitCanvas=!0,!0)}clearContext(){this.isInitCanvas&&(this.context.save(),this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.width,this.height),this.context.restore())}get isOver(){return this.globalState===n["j"].OVER}get getMessage(){return this.message}get getStyleOfMessage(){return this.styleOfMessage}get isMessage(){return this.isOver&&""!==this.message}_resetMessage(){this.message="",this.styleOfMessage=""}_setMessage(t,e){this.message=t,this.styleOfMessage=e}};o=Object(r["a"])([i["a"]],o);e["a"]=o},"87fe":function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var r=s("b049");class i{constructor(t="default name",e=3){this.name="",this.lives=0,this.score=new r["a"],this.name=t,this.lives=e}addLive(t){this.lives+=t}subtractLive(t){t<0&&(t=Math.abs(t)),this.lives-t<0||(this.lives-=t)}addScore(t){this.score.increase(t)}subtractScore(t){this.score.decrease(t)}scoreToZero(){this.score.reset()}get getLives(){return this.lives}get getName(){return this.name}get getScore(){return this.score.getScore}get getPreviousScore(){return this.score.getPreviousScore}get getBest(){return this.score.getBest}}},b049:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));class r{constructor(){this.previousScore=0,this.score=0,this.best=0}increase(t){t=Math.abs(t),this.score+=t,this._updatePreviousScore(),this._updateBest()}decrease(t){t<0&&(t=Math.abs(t)),this.score-t<0||(this.score-=t,this._updatePreviousScore())}reset(){this.score=0}get getScore(){return this.score}get getPreviousScore(){return this.previousScore}get getBest(){return this.best}_updatePreviousScore(){this.previousScore=this.score}_updateBest(){this.score>this.best&&(this.best=this.score)}}},b6ab:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"scores"},t._l(t.scores,(function(e,r){return s("p",{key:r,staticClass:"scores__p",class:t.colors[r]},[t._v("\n    "+t._s(e.message)+" - "+t._s(e.value)+"\n  ")])})),0)},i=[],n=s("9ab4"),a=s("60a3");let o=class extends a["c"]{constructor(){super(...arguments),this.colors=["scores--color-scarlet","scores--color-turquoise","scores--color-light-blue"]}};Object(n["a"])([Object(a["b"])({default:[]})],o.prototype,"scores",void 0),o=Object(n["a"])([a["a"]],o);var c=o,h=c,u=s("2877"),l=Object(u["a"])(h,r,i,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-56d429a8.2c1e9e0d.js.map
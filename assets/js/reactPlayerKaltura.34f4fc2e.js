(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6463],{97945:(e,t,r)=>{var s,a=Object.create,l=Object.defineProperty,o=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,i=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,p=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of n(t))u.call(e,a)||a===r||l(e,a,{get:()=>t[a],enumerable:!(s=o(t,a))||s.enumerable});return e},h=(e,t,r)=>(((e,t,r)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>f}),e.exports=(s=d,p(l({},"__esModule",{value:!0}),s));var c=((e,t,r)=>(r=null!=e?a(i(e)):{},p(!t&&e&&e.__esModule?r:l(r,"default",{value:e,enumerable:!0}),e)))(r(96540)),y=r(75635),m=r(50327);class f extends c.Component{constructor(){super(...arguments),h(this,"callPlayer",y.callPlayer),h(this,"duration",null),h(this,"currentTime",null),h(this,"secondsLoaded",null),h(this,"mute",(()=>{this.callPlayer("mute")})),h(this,"unmute",(()=>{this.callPlayer("unmute")})),h(this,"ref",(e=>{this.iframe=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,y.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then((e=>{this.iframe&&(this.player=new e.Player(this.iframe),this.player.on("ready",(()=>{setTimeout((()=>{this.player.isReady=!0,this.player.setLoop(this.props.loop),this.props.muted&&this.player.mute(),this.addListeners(this.player,this.props),this.props.onReady()}),500)})))}),this.props.onError)}addListeners(e,t){e.on("play",t.onPlay),e.on("pause",t.onPause),e.on("ended",t.onEnded),e.on("error",t.onError),e.on("timeupdate",(({duration:e,seconds:t})=>{this.duration=e,this.currentTime=t}))}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){return c.default.createElement("iframe",{ref:this.ref,src:this.props.url,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;",referrerPolicy:"no-referrer-when-downgrade"})}}h(f,"displayName","Kaltura"),h(f,"canPlay",m.canPlay.kaltura)}}]);
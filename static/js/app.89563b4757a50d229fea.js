webpackJsonp([1],{"1SaT":function(t,e,n){"use strict";function r(t){n("SFme")}var a=n("WaAR"),o=n("sjzN"),i=n("VU/8"),s=r,u=i(a.a,o.a,!1,s,null,null);e.a=u.exports},"1pk9":function(t,e,n){"use strict";var r=n("MPh8"),a=n("mucN");e.a={name:"wgu-layerlist-win",directives:{DraggableWin:r.a},components:{"wgu-layerlist":a.a},props:{color:{type:String,required:!1,default:"red darken-3"},icon:{type:String,required:!1,default:"layers"},title:{type:String,required:!1,default:"Layers"},draggable:{type:Boolean,required:!1,default:!0},initPos:{type:Object,required:!1}},data:function(){return{moduleName:"wgu-layerlist",show:!1,left:this.initPos?this.initPos.left+"px":"10px",top:this.initPos?this.initPos.top+"px":"70px"}}}},"29fi":function(t,e,n){"use strict";function r(t){n("GMzk")}var a=n("1pk9"),o=n("HWSy"),i=n("VU/8"),s=r,u=i(a.a,o.a,!1,s,null,null);e.a=u.exports},"2F6G":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{dark:""}},[n("v-btn",{attrs:{icon:""},on:{click:t.toggleUi}},[n("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n    "+t._s(t.text)+"\n  ")],1)],1)},a=[],o={render:r,staticRenderFns:a};e.a=o},"2SQl":function(t,e){},"4z3x":function(t,e,n){"use strict";var r=n("MPh8"),a=n("WFjz"),o=n("w/12"),i=n("cspx"),s=n("VT4C");e.a={name:"wgu-measuretool-win",directives:{DraggableWin:r.a},components:{"wgu-measure-type-chooser":o.a,"wgu-measure-result":i.a},mixins:[a.a],props:{color:{type:String,required:!1,default:"red darken-3"},icon:{type:String,required:!1,default:"photo_size_select_small"},title:{type:String,required:!1,default:"Measure"},draggable:{type:Boolean,required:!1,default:!0},initPos:{type:Object,required:!1}},data:function(){return{moduleName:"wgu-measuretool",measureGeom:null,measureType:"distance",show:!1,left:this.initPos?this.initPos.left+"px":"0",top:this.initPos?this.initPos.top+"px":"0"}},watch:{show:function(){var t=this;!0===t.show?t.olMapCtrl.addInteraction(t.measureType,t.onMeasureVertexSet):t.olMapCtrl.removeInteraction()},measureType:function(){var t=this;t.measureGeom={},t.olMapCtrl.addInteraction(t.measureType,t.onMeasureVertexSet)}},methods:{applyMeasureType:function(t,e){this.measureType=t},onMapBound:function(){var t=this,e=t.$appConfig.modules[t.moduleName]||{};this.olMapCtrl=new s.a(t.map,e),t.olMapCtrl.createMeasureLayer()},onMeasureVertexSet:function(t){this.measureGeom={geom:t}}}}},"6jvY":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{icon:"",dark:""},on:{click:t.onClick}},[n("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n    "+t._s(t.text)+"\n  ")],1)},a=[],o={render:r,staticRenderFns:a};e.a=o},"7Jjb":function(t,e){},"7OTJ":function(t,e,n){"use strict";e.a={props:{color:{type:String,required:!1,default:"red darken-3"},icon:{type:String,required:!1,default:"help"},title:{type:String,required:!1,default:"About"},headline:{type:String,required:!1,default:"About Wegue"},content:{type:String,required:!1,default:"<h3>WebGIS with OpenLayers and Vue.js</h3> Template and re-usable components for webmapping applications with OpenLayers and Vue.js"},infoLink:{type:String,required:!1,default:"https://github.com/meggsimum/wegue"},infoLinkText:{type:String,required:!1,default:"More info"}},data:function(){return{show:!1}},methods:{onWinXClose:function(){this.$emit("winxclose")}}}},"7zck":function(t,e){},AGmh:function(t,e){},"B/BW":function(t,e){},"B/F2":function(t,e){},"Bct/":function(t,e){},CD2r:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn-toggle",{attrs:{mandatory:""},model:{value:t.measureTypeData,callback:function(e){t.measureTypeData=e},expression:"measureTypeData"}},[n("v-btn",{attrs:{large:"",value:"distance"}},[t._v("\n     Distance\n   ")]),t._v(" "),n("v-btn",{attrs:{large:"",value:"area"}},[t._v("\n     Area\n   ")])],1)},a=[],o={render:r,staticRenderFns:a};e.a=o},DcW1:function(t,e,n){"use strict";var r=n("7+uW"),a=n("ZkkH");e.a={name:"wgu-infoclick-btn",props:{icon:{type:String,required:!1,default:"info"},text:{type:String,required:!1,default:""}},data:function(){return{moduleName:"wgu-infoclick"}},created:function(){var t=this;a.a.$on("app-mounted",function(){t.win=r.default.prototype.cmpLookup[t.moduleName+"-win"]})},methods:{toggleUi:function(){this.win.show=!this.win.show}}}},EJzH:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-card",{directives:[{name:"draggable-win",rawName:"v-draggable-win",value:t.draggable,expression:"draggable"}],staticClass:"wgu-measurewin",style:{left:t.left,top:t.top}},[n("v-toolbar",{attrs:{color:t.color,dark:""}},[n("v-toolbar-side-icon",[n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("v-toolbar-title",{staticClass:"wgu-win-title"},[t._v(t._s(t.title))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-side-icon",{on:{click:function(e){t.show=!1}}},[n("v-icon",[t._v("close")])],1)],1),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[n("wgu-measure-type-chooser",{attrs:{measureType:t.measureType},on:{"wgu-measuretype-change":t.applyMeasureType}})],1),t._v(" "),n("v-card-actions",[n("wgu-measure-result",{attrs:{measureGeom:t.measureGeom}})],1)],1):t._e()},a=[],o={render:r,staticRenderFns:a};e.a=o},EakL:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-card",{directives:[{name:"draggable-win",rawName:"v-draggable-win",value:t.draggable,expression:"draggable"}],staticClass:"wgu-infoclick-win",style:{left:t.left,top:t.top}},[n("v-toolbar",{attrs:{color:t.color,dark:""}},[n("v-toolbar-side-icon",[n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("v-toolbar-title",{staticClass:"wgu-win-title"},[t._v(t._s(t.title))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-side-icon",{on:{click:function(e){t.show=!1}}},[n("v-icon",[t._v("close")])],1)],1),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[this.attributeData||this.coordsData?t._e():n("div",{staticClass:"no-data"},[t._v("\n      Click on the map to get information for the clicked map position.\n    ")]),t._v(" "),n("wgu-property-table",{attrs:{properties:t.attributeData,color:t.color}}),t._v(" "),n("wgu-coords-table",{attrs:{coordsData:t.coordsData,color:t.color}})],1)],1):t._e()},a=[],o={render:r,staticRenderFns:a};e.a=o},"F+zM":function(t,e,n){"use strict";var r=n("grfP"),a=n("ZYQ1"),o=n("1avf");e.a={name:"wgu-measure-result",props:{measureGeom:{type:Object}},data:function(){return{area:" -- ",distance:" -- "}},watch:{measureGeom:function(){var t=this,e=t.measureGeom.geom,n=void 0;e instanceof a.a?(n=t.formatArea(e),t.area=n):e instanceof r.a?(n=t.formatLength(e),t.distance=n):(t.area=" -- ",t.distance=" -- ")}},methods:{formatLength:function(t){var e=n.i(o.c)(t);return e>100?Math.round(e/1e3*100)/100+" km":Math.round(100*e)/100+" m"},formatArea:function(t){var e=n.i(o.d)(t);return e>1e4?Math.round(e/1e6*100)/100+" km²":Math.round(100*e)/100+" m²"}}}},GEkf:function(t,e,n){"use strict";var r=n("fZjL"),a=n.n(r),o=n("BO1k"),i=n.n(o),s=n("7+uW"),u=n("UAgb"),l=n("1SaT"),c=n("uwYZ"),d=n("NkLf"),p=n("qqRY");e.a={name:"wgu-app-header",components:{"wgu-zoomtomaxextent-btn":p.a,"wgu-layerlist-btn":u.a,"wgu-helpwin-btn":l.a,"wgu-measuretool-btn":c.a,"wgu-infoclick-btn":d.a},props:{color:{type:String,required:!1,default:"red darken-3"}},data:function(){return{title:this.$appConfig.title,menuButtons:this.getModuleButtonData(),tbButtons:this.getToolbarButtons()}},methods:{getModuleButtonData:function(){var t=s.default.prototype.$appConfig,e=[],n=!0,r=!1,o=void 0;try{for(var u,l=i()(a()(t.modules));!(n=(u=l.next()).done);n=!0){var c=u.value,d=t.modules[c];"menu"===d.target&&e.push({type:c+"-btn",target:d.target})}}catch(t){r=!0,o=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw o}}return e},getToolbarButtons:function(){var t=s.default.prototype.$appConfig,e=[],n=!0,r=!1,o=void 0;try{for(var u,l=i()(a()(t.modules));!(n=(u=l.next()).done);n=!0){var c=u.value,d=t.modules[c];"toolbar"===d.target&&e.push({type:c+"-btn",target:d.target})}}catch(t){r=!0,o=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw o}}return e}}}},GJSh:function(t,e){},GMzk:function(t,e){},HWSy:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-card",{directives:[{name:"draggable-win",rawName:"v-draggable-win",value:t.draggable,expression:"draggable"}],staticClass:"wgu-layerlist",style:{left:t.left,top:t.top}},[n("v-toolbar",{attrs:{color:t.color,dark:""}},[n("v-toolbar-side-icon",[n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("v-toolbar-title",{staticClass:"wgu-win-title"},[t._v(t._s(t.title))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-side-icon",{on:{click:function(e){t.show=!1}}},[n("v-icon",[t._v("close")])],1)],1),t._v(" "),n("wgu-layerlist")],1):t._e()},a=[],o={render:r,staticRenderFns:a};e.a=o},Hjf8:function(t,e){},L1xf:function(t,e,n){"use strict";function r(t){return!!t&&!!t.match(/^(#|(rgb|hsl)a?\()/)}var a=n("d7EF"),o=n.n(a),i=n("IHMs"),s=n.n(i),u=n("yGLh"),l=n("IZoy");e.a={name:"wgu-coords-table",props:{color:{type:String,required:!1,default:"red darken-3"},coordsData:{type:Object},showMapPos:{type:Boolean,required:!1,default:!0},showWgsPos:{type:Boolean,required:!1,default:!0},showHdms:{type:Boolean,required:!1,default:!0}},data:function(){return{coordRows:null}},computed:{tableStyles:function(){var t=this.color;if(!r(this.color)){var e=this.color.toString().trim().split(" ",2),n=o()(e,2),a=n[0],i=n[1];t=s.a[a],i&&(i=i.replace("-",""),t=s.a[a][i])}return{border:"2px solid "+t}}},methods:{},watch:{coordsData:function(){var t=this,e=t.coordsData.coordinate,r=t.coordsData.projection,a=n.i(u.a)(e,r,"EPSG:4326"),o={};if(t.showMapPos&&(o["MAP PROJ"]=e[1].toFixed(2)+" "+e[0].toFixed(2)),t.showWgsPos){var i=n.i(u.a)(e,r,"EPSG:4326");o["WGS 84"]=i[1].toFixed(7)+"° "+i[0].toFixed(7)+"°"}if(t.showHdms){var s=n.i(l.a)(a);o.HDMS=s}t.coordRows=o}}}},MPh8:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("7+uW"),a={dragConfig:{draggableElementSelector:null,down:!1,height:0,width:0,initialX:0,initialY:0,constraintToWindow:!0,cursorPreviousX:0,cursorPreviousY:0,draggerOffsetLeft:0,draggerOffsetTop:0,overlay:null,draggableEl:null,initialZIndex:void 0},bind:function(t,e,n){function r(t,e,n){var r=document.createElement("div");return r.setAttribute("style","\n        width: 100vw;\n        height: 100vh;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 10000;\n      "),r.addEventListener("mouseup",function(t){return u(t,e,n)}),r.addEventListener("mousedown",function(t){return s(t,e,n)}),r.addEventListener("mousemove",function(t){return f(t,e,n)}),document.body.appendChild(r),r}function o(t,e){for(var n=0;n<e.length;n++){if(e[n].id===t)return!0;if(e[n].classList&&e[n].classList.contains(t))return!0}return!1}function i(t,e){t.style.zIndex=e}function s(t,e,n){if(!n.draggableElementSelector||o(n.draggableElementSelector,t.path)){n.overlay&&n.overlay.remove(),n.width=e.offsetWidth,n.height=e.offsetHeight,n.down=!0,n.initialX=t.clientX,n.initialY=t.clientY;var a=r(t,e,n);n.overlay=a,i(e,10001)}}function u(t,e,r){r.down=!1,r.overlay&&(r.overlay.removeEventListener("mouseup",u),r.overlay.removeEventListener("mousedown",s),r.overlay.removeEventListener("mousemove",f),r.overlay.remove(),i(e,r.initialZIndex),v(e,r),n.componentInstance.$parent.top=r.draggerOffsetTop+"px",n.componentInstance.$parent.left=r.draggerOffsetLeft+"px")}function l(t,e,n){return t.offsetLeft+e.width>=window.innerWidth&&!n}function c(t,e,n){return t.offsetLeft<=0&&!n}function d(t,e,n){return t.offsetTop<=0&&!n}function p(t,e,n){return t.offsetTop+e.height>=window.innerHeight&&!n}function f(t,e,n){if(n.down){var r=n.cursorPreviousX>t.clientX,a=n.cursorPreviousX<t.clientX,o=n.cursorPreviousY<t.clientY,i=n.cursorPreviousY>t.clientY;n.constraintToWindow&&(l(e,n,r)||c(e,n,a))||(e.style.left=n.draggerOffsetLeft+(t.clientX-n.initialX)+"px"),n.constraintToWindow&&(d(e,n,o)||p(e,n,i))||(e.style.top=n.draggerOffsetTop+(t.clientY-n.initialY)+"px")}n.cursorPreviousX=t.clientX,n.cursorPreviousY=t.clientY}function v(t,e){e.draggerOffsetLeft=t.offsetLeft,e.draggerOffsetTop=t.offsetTop}if(!1!==e.value){var m=t.querySelector("div.wgu-win-title");if(m){var g=a.dragConfig;g.draggableElementSelector=e.arg||"wgu-win-title",m.style.cursor="move",t.addEventListener("mouseup",function(e){return u(e,t,g)}),t.addEventListener("mousedown",function(e){return s(e,t,g)}),t.addEventListener("mousemove",function(e){return f(e,t,g)}),v(t,g),g.initialZIndex=t.style.zIndex}}}};r.default.directive("draggable-win",a)},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a=n("3EgV"),o=n.n(a),i=n("soLJ"),s=n("7zck");n.n(s);r.default.use(o.a),n("ktr9"),n("SPmS"),r.default.config.productionTip=!1;var u=document.querySelector("#app");r.default.prototype.$isEmbedded=u.hasAttribute("embedded"),fetch("static/app-conf.json").then(function(t){return t.json()}).then(function(t){r.default.prototype.$appConfig=t,new r.default({el:"#app",template:"<wgu-app/>",components:{WguApp:i.a}})})},NkLf:function(t,e,n){"use strict";function r(t){n("Bct/")}var a=n("DcW1"),o=n("rd+6"),i=n("VU/8"),s=r,u=i(a.a,o.a,!1,s,null,null);e.a=u.exports},Nkpt:function(t,e,n){"use strict";var r=n("ZkkH"),a=n("ZY9t"),o=n("R3+W");e.a={name:"wgu-infoclick-win",components:{"wgu-property-table":a.a,"wgu-coords-table":o.a},props:{color:{type:String,required:!1,default:"red darken-3"},icon:{type:String,required:!1,default:"info"},title:{type:String,required:!1,default:"Map Click Info"},draggable:{type:Boolean,required:!1,default:!0},initPos:{type:Object,required:!1}},data:function(){return{show:!1,left:this.initPos?this.initPos.left+"px":"0",top:this.initPos?this.initPos.top+"px":"0",attributeData:null,coordsData:null}},created:function(){var t=this;r.a.$on("ol-map-mounted",function(e){t.map=e})},methods:{toggleUi:function(){this.show=!this.show},registerMapClick:function(t){var e=this;!0===t?e.map.un("singleclick",e.onMapClick):e.map.on("singleclick",e.onMapClick)},onMapClick:function(t){var e=this,n=e.map.forEachFeatureAtPixel(t.pixel,function(t,e){return[t,e]});if(n){var r=n[0],a=r.getProperties();delete a.geometry,e.attributeData=a}else e.attributeData=null;e.coordsData={coordinate:t.coordinate,projection:e.map.getView().getProjection().getCode()}}},watch:{show:function(){var t=this;!0===this.show?t.registerMapClick():(t.attributeData=null,t.coordsData=null)}}}},OUzU:function(t,e,n){"use strict";n.d(e,"a",function(){return m});var r=n("Mdwg"),a=n("DwLH"),o=n("WiOa"),i=n("fZPI"),s=n("hGhA"),u=n("fGhu"),l=n("aUhy"),c=n("UjZP"),d=n("srNp"),p=n("Umvz"),f=n("WMwB"),v=n("zQ0b"),m={formatMapping:{MVT:u.a,GeoJSON:l.a,TopoJSON:c.a,KML:d.a},getInstance:function(t){if(!t.lid){var e=new Date;t.lid=e.getTime()}return"WMS"===t.type?this.createWmsLayer(t):"XYZ"===t.type?this.createXyzLayer(t):"OSM"===t.type?this.createOsmLayer(t):"VECTOR"===t.type?this.createVectorLayer(t):"VECTORTILE"===t.type?this.createVectorTileLayer(t):null},createWmsLayer:function(t){return new r.a({name:t.name,lid:t.lid,displayInLayerList:t.displayInLayerList,extent:t.extent,visible:t.visible,opacity:t.opacity,source:new a.a({url:t.url,params:{LAYERS:t.layers,TILED:t.tiled},serverType:t.serverType,attributions:t.attributions})})},createXyzLayer:function(t){return new r.a({displayInLayerList:t.displayInLayerList,extent:t.extent,source:new a.a({url:t.url,attributions:t.attributions})})},createOsmLayer:function(t){return new r.a({name:t.name,lid:t.lid,displayInLayerList:t.displayInLayerList,visible:t.visible,opacity:t.opacity,source:new o.a})},createVectorLayer:function(t){return new p.a({name:t.name,lid:t.lid,displayInLayerList:t.displayInLayerList,extent:t.extent,visible:t.visible,opacity:t.opacity,source:new f.a({url:t.url,format:new this.formatMapping[t.format](t.formatConfig),attributions:t.attributions}),style:v.a[t.styleRef]})},createVectorTileLayer:function(t){return new i.a({name:t.name,lid:t.lid,displayInLayerList:t.displayInLayerList,visible:t.visible,opacity:t.opacity,source:new s.a({url:t.url,format:new this.formatMapping[t.format],attributions:t.attributions}),style:v.a[t.styleRef]})}}},"P5f+":function(t,e,n){"use strict";e.a={name:"wgu-app-logo",data:function(){return{logoSrc:this.$appConfig.logo,logoSize:this.$appConfig.logoSize}}}},PCNP:function(t,e){},Pvv6:function(t,e,n){"use strict";var r=n("fZjL"),a=n.n(r),o=n("BO1k"),i=n.n(o),s=n("7+uW"),u=n("ZkkH"),l=n("i8bC"),c=n("VJFb"),d=n("qq5n"),p=n("lgWu"),f=n("29fi"),v=n("qUL7");e.a={name:"wgu-app",components:{"wgu-map":l.a,"wgu-app-header":c.a,"wgu-app-logo":d.a,"wgu-measuretool-win":p.a,"wgu-layerlist-win":f.a,"wgu-infoclick-win":v.a},data:function(){return{isEmbedded:!1,moduleWins:this.getModuleWinData(),footerText:s.default.prototype.$appConfig.footerText,showCopyrightYear:s.default.prototype.$appConfig.showCopyrightYear,baseColor:s.default.prototype.$appConfig.baseColor}},mounted:function(){this.isEmbedded=this.$isEmbedded;var t=this.$refs,e={},n=!0,r=!1,o=void 0;try{for(var l,c=i()(a()(t));!(n=(l=c.next()).done);n=!0){var d=l.value;e[d]=t[d][0]}}catch(t){r=!0,o=t}finally{try{!n&&c.return&&c.return()}finally{if(r)throw o}}s.default.prototype.cmpLookup=e,u.a.$emit("app-mounted")},methods:{getModuleWinData:function(){var t=s.default.prototype.$appConfig,e=[],n=!0,r=!1,o=void 0;try{for(var u,l=i()(a()(t.modules));!(n=(u=l.next()).done);n=!0){var c=u.value,d=t.modules[c];!0===d.win&&e.push({type:c+"-win",draggable:d.draggable,initPos:d.initPos})}}catch(t){r=!0,o=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw o}}return e}}}},"R3+W":function(t,e,n){"use strict";function r(t){n("2SQl")}var a=n("L1xf"),o=n("mjTM"),i=n("VU/8"),s=r,u=i(a.a,o.a,!1,s,null,null);e.a=u.exports},Rd3n:function(t,e){},SFme:function(t,e){},SPmS:function(t,e){},TooU:function(t,e,n){"use strict";e.a={name:"wgu-measure-type-chooser",props:{measureType:{type:String,default:"distance"}},data:function(){return{measureTypeData:this.measureType}},watch:{measureTypeData:function(t,e){this.$emit("wgu-measuretype-change",t,e)}}}},UAgb:function(t,e,n){"use strict";function r(t){n("B/BW")}var a=n("bv4e"),o=n("2F6G"),i=n("VU/8"),s=r,u=i(a.a,o.a,!1,s,null,null);e.a=u.exports},UC7k:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.logoSrc?n("v-avatar",{staticClass:"wgu-app-logo",attrs:{size:t.logoSize,tile:!0}},[n("img",{attrs:{src:t.logoSrc,alt:"App Logo"}})]):t._e()},a=[],o={render:r,staticRenderFns:a};e.a=o},UF2A:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"measure-result"},[t._v("\n    LENGTH: "+t._s(t.distance)+"\n  ")]),t._v(" "),n("div",{staticClass:"measure-result"},[t._v("\n    AREA: "+t._s(t.area)+"\n  ")])])},a=[],o={render:r,staticRenderFns:a};e.a=o},UdpQ:function(t,e,n){"use strict";function r(t){return!!t&&!!t.match(/^(#|(rgb|hsl)a?\()/)}var a=n("d7EF"),o=n.n(a),i=n("7+uW"),s=n("trid"),u=n("Lfyu"),l=n("bAyG"),c=n("Lmaf"),d=n("gsgi"),p=n("TDso"),f=n("lZ2e"),v=n("ZkkH"),m=n("OUzU");e.a={name:"wgu-map",props:{color:{type:String,required:!1,default:"red darken-3"},collapsibleAttribution:{type:Boolean,default:!1},rotateableMap:{type:Boolean,required:!1,default:!1}},data:function(){return{zoom:this.$appConfig.mapZoom,center:this.$appConfig.mapCenter}},mounted:function(){var t=this;i.default.prototype.$map=t.map,v.a.$emit("ol-map-mounted",t.map),window.setTimeout(function(){t.map.setTarget(document.getElementById("ol-map-container")),t.map.updateSize(),t.setOlButtonColor()},200)},created:function(){var t=this,e=n.i(p.a)({altShiftDragRotate:t.rotateableMap,pinchRotate:t.rotateableMap}),r=[new c.a,new l.a({collapsible:t.collapsibleAttribution})];t.rotateableMap&&r.push(new f.a),t.map=new s.a({layers:[],controls:r,interactions:e,view:new u.a({center:t.center||[0,0],zoom:t.zoom})});var a=t.createLayers();t.map.getLayers().extend(a)},methods:{createLayers:function(){var t=this,e=[];return this.$appConfig.mapLayers.reverse().forEach(function(n){var r=m.a.getInstance(n);if(e.push(r),n.selectable){var a=new d.a({layers:[r]});a.on("select",function(t){v.a.$emit("map-selectionchange",r.get("lid"),t.selected,t.deselected)}),t.map.addInteraction(a)}}),e},setOlButtonColor:function(){var t=this;if(r(t.color))document.querySelector(".ol-zoom")&&(document.querySelector(".ol-zoom .ol-zoom-in").style.backgroundColor=t.color,document.querySelector(".ol-zoom .ol-zoom-out").style.backgroundColor=t.color),document.querySelector(".ol-rotate")&&(document.querySelector(".ol-rotate .ol-rotate-reset").style.backgroundColor=t.color);else{var e=t.color.toString().trim().split(" ",2),n=o()(e,2),a=n[0],i=n[1];document.querySelector(".ol-zoom")&&(document.querySelector(".ol-zoom .ol-zoom-in").classList.add(a),document.querySelector(".ol-zoom .ol-zoom-in").classList.add(i),document.querySelector(".ol-zoom .ol-zoom-out").classList.add(a),document.querySelector(".ol-zoom .ol-zoom-out").classList.add(i)),document.querySelector(".ol-rotate")&&(document.querySelector(".ol-rotate .ol-rotate-reset").classList.add(a),document.querySelector(".ol-rotate .ol-rotate-reset").classList.add(i))}}}}},UkhJ:function(t,e,n){"use strict";function r(t){n("Rd3n")}var a=n("7OTJ"),o=n("oiyQ"),i=n("VU/8"),s=r,u=i(a.a,o.a,!1,s,null,null);e.a=u.exports},VJFb:function(t,e,n){"use strict";function r(t){n("XZd5")}var a=n("GEkf"),o=n("tKMz"),i=n("VU/8"),s=r,u=i(a.a,o.a,!1,s,null,null);e.a=u.exports},VLBH:function(t,e,n){"use strict";var r=n("WFjz"),a=n("fIFi");e.a={name:"wgu-layerlist",mixins:[r.a],props:{},data:function(){return{layerItems:[]}},methods:{onMapBound:function(){var t=this;t.createLayerItems(),t.map.getLayers().on("change:length",function(e){t.createLayerItems()})},createLayerItems:function(){var t=this.map.getLayers();t=t.getArray().slice(0).reverse();var e=[];t.forEach(function(t){!1!==t.get("displayInLayerList")&&e.push({title:t.get("name"),lid:t.get("lid"),visible:t.getVisible()})}),this.layerItems=e},onItemClick:function(t,e){e.visible=!e.visible,this.layerVizChanged()},layerVizChanged:function(){var t=this;t.layerItems.forEach(function(e,n){var r=a.a.getLayerByLid(e.lid,t.map);r&&r.setVisible(e.visible)})}}}},VT4C:function(t,e,n){"use strict";var r=n("Zrlr"),a=n.n(r),o=n("wxAW"),i=n.n(o),s=n("aUJj"),u=n("nxYM"),l=n("WMwB"),c=n("Umvz"),d=n("Mjwz"),p=n("00zS"),f=n("uli1"),v=n("lUmj"),m=function(){function t(e,n){a()(this,t),this.map=null,this.map=e,this.measureConf=n||{}}return i()(t,[{key:"createMeasureLayer",value:function(){var t=this,e=t.measureConf,n=new l.a,r=new c.a({name:"Measure Layer",displayInLayerList:!1,source:n,style:new d.a({fill:new v.a({color:e.fillColor||"rgba(255, 255, 255, 0.2)"}),stroke:new p.a({color:e.strokeColor||"rgba(0, 0, 0, 0.5)",width:2})})});t.map.addLayer(r),t.source=n}},{key:"addInteraction",value:function(t,e){var r=this,a=r.measureConf;r.draw&&r.removeInteraction();var o="area"===t?"Polygon":"LineString",i=new s.a({source:r.source,type:o,style:new d.a({fill:new v.a({color:a.sketchFillColor||"rgba(255, 255, 255, 0.2)"}),stroke:new p.a({color:a.sketchStrokeColor||"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new f.a({radius:5,stroke:new p.a({color:a.sketchVertexStrokeColor||"rgba(0, 0, 0, 0.7)"}),fill:new v.a({color:a.sketchVertexFillColor||"rgba(255, 255, 255, 0.2)"})})})});r.map.addInteraction(i);var l,c;i.on("drawstart",function(t){r.source.clear(),c=t.feature,l=r.map.on("click",function(t){var n=c.getGeometry();e(n)})},r),i.on("drawend",function(){c=null,n.i(u.a)(l)},r),r.draw=i}},{key:"removeInteraction",value:function(){var t=this;t.draw&&t.map.removeInteraction(t.draw),t.source&&t.source.clear()}}]),t}();e.a=m},WFjz:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("ZkkH"),a={created:function(){var t=this;this.$map?(this.map=this.$map,this.onMapBound&&this.onMapBound()):r.a.$on("ol-map-mounted",function(e){t.map=e,t.onMapBound&&t.onMapBound()})}}},WaAR:function(t,e,n){"use strict";var r=n("UkhJ");e.a={name:"wgu-helpwin-btn",components:{"wgu-helpwin":r.a},props:{color:{type:String,required:!1,default:"red darken-3"},icon:{type:String,required:!1,default:"help"},text:{type:String,required:!1},headline:{type:String,required:!1},content:{type:String,required:!1},infoLink:{type:String,required:!1},infoLinkText:{type:String,required:!1}},data:function(){return{show:!1}}}},X9zZ:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{class:{"wgu-app":!0,"wgu-app-embedded":t.isEmbedded},attrs:{id:"wgu-app","data-app":""}},[n("wgu-app-header",{attrs:{color:t.baseColor}}),t._v(" "),n("wgu-app-logo"),t._v(" "),n("v-content",[n("v-container",{staticStyle:{padding:"0"},attrs:{id:"ol-map-container",fluid:"","fill-height":""}},[n("wgu-map",{attrs:{color:t.baseColor}})],1)],1),t._v(" "),t._l(t.moduleWins,function(e,r){return[n(e.type,{key:r,ref:e.type,refInFor:!0,tag:"component",attrs:{color:t.baseColor,draggable:e.draggable,initPos:e.initPos}})]}),t._v(" "),n("v-footer",{staticClass:"white--text",attrs:{color:t.baseColor,app:""}},[n("v-spacer"),t._v(" "),n("span",{staticClass:"wgu-copyright"},[t._v(t._s(t.footerText)+" "),t.showCopyrightYear?n("span",[t._v("© "+t._s((new Date).getFullYear()))]):t._e()])],1)],2)},a=[],o={render:r,staticRenderFns:a};e.a=o},XZd5:function(t,e){},"ZR/a":function(t,e){},ZY9t:function(t,e,n){"use strict";function r(t){n("AGmh")}var a=n("v4OI"),o=n("guG3"),i=n("VU/8"),s=r,u=i(a.a,o.a,!1,s,null,null);e.a=u.exports},ZkkH:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("7+uW"),a=new r.default},aay1:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},a=[],o={render:r,staticRenderFns:a};e.a=o},bv4e:function(t,e,n){"use strict";var r=n("7+uW"),a=n("29fi"),o=n("ZkkH");e.a={name:"wgu-layerlist-btn",components:{"wgu-layerlist-win":a.a},props:{icon:{type:String,required:!1,default:"layers"},text:{type:String,required:!1,default:""}},data:function(){return{moduleName:"wgu-layerlist"}},created:function(){var t=this;o.a.$on("app-mounted",function(){t.win=r.default.prototype.cmpLookup[t.moduleName+"-win"]})},methods:{toggleUi:function(){this.win.show=!this.win.show}}}},cspx:function(t,e,n){"use strict";function r(t){n("PCNP")}var a=n("F+zM"),o=n("UF2A"),i=n("VU/8"),s=r,u=i(a.a,o.a,!1,s,null,null);e.a=u.exports},fIFi:function(t,e,n){"use strict";var r={getLayersBy:function(t,e,n){if(!n)return console.warn("No OL map passed to LayerUtil.getLayersBy - no layer detection possible!"),[];var r=[];return n.getLayers().forEach(function(n){n.get(t)===e&&r.push(n)}),r},getLayerByLid:function(t,e){return r.getLayersBy("lid",t,e)[0]}};e.a=r},g6hO:function(t,e){},guG3:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.properties?n("table",{staticClass:"wgu-proptable",style:t.tableStyles},[t._m(0),t._v(" "),n("tbody",{staticClass:"attr-tbody"},t._l(t.properties,function(e,r){return n("tr",[n("td",{staticClass:"key-td"},[t._v("\n        "+t._s(r)+"\n      ")]),t._v(" "),n("td",{staticClass:"val-td"},[t._v("\n        "+t._s(e)+"\n      ")])])}))]):t._e()},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr")])}],o={render:r,staticRenderFns:a};e.a=o},i8bC:function(t,e,n){"use strict";function r(t){n("yMa3")}var a=n("UdpQ"),o=n("aay1"),i=n("VU/8"),s=r,u=i(a.a,o.a,!1,s,null,null);e.a=u.exports},irkU:function(t,e,n){"use strict";var r=n("7+uW"),a=n("lgWu"),o=n("ZkkH");e.a={name:"wgu-measuretool-btn",components:{"wgu-measuretool-win":a.a},props:{icon:{type:String,required:!1,default:"photo_size_select_small"},text:{type:String,required:!1}},data:function(){return{moduleName:"wgu-measuretool"}},created:function(){var t=this;o.a.$on("app-mounted",function(){t.win=r.default.prototype.cmpLookup[t.moduleName+"-win"]})},methods:{toggleUi:function(){this.win.show=!this.win.show}}}},ktr9:function(t,e){},lgWu:function(t,e,n){"use strict";function r(t){n("B/F2")}var a=n("4z3x"),o=n("EJzH"),i=n("VU/8"),s=r,u=i(a.a,o.a,!1,s,null,null);e.a=u.exports},mjTM:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.coordRows?n("table",{staticClass:"wgu-coordstable",style:t.tableStyles},[t._m(0),t._v(" "),n("tbody",t._l(t.coordRows,function(e,r){return n("tr",[n("td",{staticClass:"key-td"},[t._v("\n        "+t._s(r)+"\n      ")]),t._v(" "),n("td",{staticClass:"val-td"},[t._v("\n        "+t._s(e)+"\n      ")])])}))]):t._e()},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr")])}],o={render:r,staticRenderFns:a};e.a=o},mucN:function(t,e,n){"use strict";function r(t){n("g6hO")}var a=n("VLBH"),o=n("sxSt"),i=n("VU/8"),s=r,u=i(a.a,o.a,!1,s,null,null);e.a=u.exports},oiyQ:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"wgu-helpwin"},[n("v-toolbar",{attrs:{color:t.color,dark:""}},[n("v-toolbar-side-icon",[n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-side-icon",{on:{click:t.onWinXClose}},[n("v-icon",[t._v("close")])],1)],1),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.headline))]),t._v(" "),n("div",{},[n("span",{domProps:{innerHTML:t._s(t.content)}})])])]),t._v(" "),n("v-card-actions",[n("a",{staticClass:"info-link red--text darken3",attrs:{href:t.infoLink,target:"_blank"}},[t._v(t._s(t.infoLinkText))])])],1)},a=[],o={render:r,staticRenderFns:a};e.a=o},qUL7:function(t,e,n){"use strict";function r(t){n("Hjf8")}var a=n("Nkpt"),o=n("EakL"),i=n("VU/8"),s=r,u=i(a.a,o.a,!1,s,null,null);e.a=u.exports},qq5n:function(t,e,n){"use strict";function r(t){n("r/Zj")}var a=n("P5f+"),o=n("UC7k"),i=n("VU/8"),s=r,u=i(a.a,o.a,!1,s,null,null);e.a=u.exports},qqRY:function(t,e,n){"use strict";function r(t){n("GJSh")}var a=n("ypcs"),o=n("6jvY"),i=n("VU/8"),s=r,u=i(a.a,o.a,!1,s,null,null);e.a=u.exports},"r/Zj":function(t,e){},"rd+6":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{icon:""},on:{click:t.toggleUi}},[n("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n  "+t._s(t.text)+"\n")],1)},a=[],o={render:r,staticRenderFns:a};e.a=o},sjzN:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"300","hide-overlay":!1},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-btn",{attrs:{slot:"activator",icon:"",dark:""},slot:"activator"},[n("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n    "+t._s(t.text)+"\n  ")],1),t._v(" "),n("wgu-helpwin",{ref:"helpwin",attrs:{color:t.color,icon:t.icon,title:t.text,headline:t.headline,content:t.content,infoLink:t.infoLink,infoLinkText:t.infoLinkText},on:{winxclose:function(e){t.show=!1}}})],1)},a=[],o={render:r,staticRenderFns:a};e.a=o},soLJ:function(t,e,n){"use strict";var r=n("Pvv6"),a=n("X9zZ"),o=n("VU/8"),i=o(r.a,a.a,!1,null,null,null);e.a=i.exports},sxSt:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",t._l(t.layerItems,function(e){return n("v-list-tile",{key:e.lid,staticClass:"wgu-layerlist-item",on:{click:function(n){t.onItemClick(n,e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.visible,expression:"layerItem.visible"}],key:e.lid,staticClass:"wgu-layer-viz-cb",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.visible)?t._i(e.visible,null)>-1:e.visible},on:{change:[function(n){var r=e.visible,a=n.target,o=!!a.checked;if(Array.isArray(r)){var i=t._i(r,null);a.checked?i<0&&t.$set(e,"visible",r.concat([null])):i>-1&&t.$set(e,"visible",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(e,"visible",o)},t.layerVizChanged]}}),t._v(" "),n("v-list-tile-content",{staticClass:"black--text"},[n("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}),1)},a=[],o={render:r,staticRenderFns:a};e.a=o},tKMz:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticClass:"wgu-app-toolbar white--text",attrs:{color:t.color,fixed:"",app:"","clipped-right":""}},[n("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),n("v-spacer"),t._v(" "),t._l(t.tbButtons,function(e,r){return[n(e.type,{key:r,tag:"component",attrs:{icon:e.icon,text:e.text,color:t.color}})]}),t._v(" "),n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{attrs:{slot:"activator",icon:"",dark:""},slot:"activator"},[n("v-icon",{attrs:{medium:""}},[t._v("menu")])],1),t._v(" "),n("v-list",[t._l(t.menuButtons,function(e,r){return[n("v-list-tile",[n(e.type,{key:r,tag:"component",attrs:{icon:e.icon,text:e.text,color:t.color}})],1)]})],2)],1)],2)},a=[],o={render:r,staticRenderFns:a};e.a=o},uXki:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{icon:""},on:{click:t.toggleUi}},[n("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n  "+t._s(t.text)+"\n")],1)},a=[],o={render:r,staticRenderFns:a};e.a=o},uwYZ:function(t,e,n){"use strict";function r(t){n("ZR/a")}var a=n("irkU"),o=n("uXki"),i=n("VU/8"),s=r,u=i(a.a,o.a,!1,s,null,null);e.a=u.exports},v4OI:function(t,e,n){"use strict";function r(t){return!!t&&!!t.match(/^(#|(rgb|hsl)a?\()/)}var a=n("d7EF"),o=n.n(a),i=n("IHMs"),s=n.n(i);e.a={name:"wgu-property-table",props:{color:{type:String,required:!1,default:"red darken-3"},properties:{type:Object}},computed:{tableStyles:function(){var t=this.color;if(!r(this.color)){var e=this.color.toString().trim().split(" ",2),n=o()(e,2),a=n[0],i=n[1];t=s.a[a],i&&(i=i.replace("-",""),t=s.a[a][i])}return{border:"2px solid "+t}}}}},"w/12":function(t,e,n){"use strict";function r(t){n("7Jjb")}var a=n("TooU"),o=n("CD2r"),i=n("VU/8"),s=r,u=i(a.a,o.a,!1,s,null,null);e.a=u.exports},yMa3:function(t,e){},ypcs:function(t,e,n){"use strict";var r=n("WFjz");e.a={name:"wgu-zoomtomaxextent-btn",mixins:[r.a],props:{icon:{type:String,required:!1,default:"zoom_out_map"},text:{type:String,required:!1,default:""}},methods:{onClick:function(){var t=this.$appConfig.mapCenter,e=this.$appConfig.mapZoom;this.map.getView().setCenter(t),this.map.getView().setZoom(e)}}}},zQ0b:function(t,e,n){"use strict";var r=n("Mjwz"),a=n("00zS"),o=n("lUmj");e.a={shopStyle:new r.a({stroke:new a.a({color:"red",width:3.25})}),neWorldMvt:new r.a({stroke:new a.a({color:"gray",width:1}),fill:new o.a({color:"rgba(20,20,20,0.1)"})})}}},["NHnr"]);
//# sourceMappingURL=app.89563b4757a50d229fea.js.map
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._3D01 = function() {
	this.initialize(img._3D01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1366,768);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.光1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.286)","rgba(245,245,245,0)"],[0,0.51,1],-49.2,-28.4,49.3,28.5).s().p("EggYAmWMAxYhVkIPZI5MgxYBVkg");
	this.shape.setTransform(-0.675,-0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.光1, new cjs.Rectangle(-208,-302.9,414.7,604.5999999999999), null);


(lib.光 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.補間動畫2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.光1();
	this.instance.setTransform(-16,-0.05,1,1,0,0,0,-0.7,-0.6);

	this.instance_1 = new lib.光("synched",0);
	this.instance_1.setTransform(-118.95,43);

	this.instance_2 = new lib.光("synched",0);
	this.instance_2.setTransform(202.15,93.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223.3,-302.3,414.70000000000005,604.5);


(lib.補間動畫1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.光1();
	this.instance.setTransform(-16,-0.05,1,1,0,0,0,-0.7,-0.6);

	this.instance_1 = new lib.光("synched",0);
	this.instance_1.setTransform(-118.95,43);

	this.instance_2 = new lib.光("synched",0);
	this.instance_2.setTransform(202.15,93.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223.3,-302.3,414.70000000000005,604.5);


// stage content:
(lib.light = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 遮 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(477.2849,284.2743);

	// 光
	this.instance = new lib.補間動畫1("synched",0);
	this.instance.setTransform(279,227.05);

	this.instance_1 = new lib.補間動畫2("synched",0);
	this.instance_1.setTransform(750.15,426.1);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:750.15,y:426.1},23,cjs.Ease.get(-1)).to({_off:false,x:279,y:227.05},21,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},23,cjs.Ease.get(-1)).to({_off:true,x:279,y:227.05},21,cjs.Ease.get(1)).wait(1));

	// 圖層_1
	this.instance_2 = new lib._3D01();
	this.instance_2.setTransform(-226,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(254,244,886,448);
// library properties:
lib.properties = {
	id: '4B144401809E184ABF4D181F90F91D45',
	width: 960,
	height: 640,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/_3D01.jpg?1666968722985", id:"_3D01"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4B144401809E184ABF4D181F90F91D45'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
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
// helper functions:

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


(lib.隱形按鈕 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AiDCEIAAkHIEHAAIAAEHg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,-13.2,26.5,26.5);


(lib.開始 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AkIFNQgwgcAAg3IAAnzQAAg4AwgcQAxgcAxAcIGvD6QAwAcAAA3QAAA5gwAbImvD5QgZAOgYAAQgZAAgYgOg");
	this.shape.setTransform(6.925,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkvLOQiLg6hshtQhshsg8iLQg9iSAAieQAAieA9iRQA8iLBshsQBshsCLg8QCRg9CeAAQCeAACSA9QCLA8BsBsQBtBsA6CLQA+CRAACeQAACeg+CSQg6CLhtBsQhsBtiLA6QiSA+ieAAQieAAiRg+gAnSnSQjBDCAAEQQAAERDBDCQDCDBEQAAQERAADCjBQDBjCAAkRQAAkQjBjCQjCjBkRAAQkQAAjCDBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.開始, new cjs.Rectangle(-78,-78,156,156), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDBF6A").s().p("AAIBbQgVgOAAg0QgTAIgUABQgpABgKgjQAFgOAMgKQAZgSAoAfQgPgXgGgWQgLgsAzAHIAGAAQAJABAFAGQASATgRA4IAngdQAngUAFAxIACAGQABAGgFAFQgNAQg7gMIATAmQAMAmgeAIIgHABQgHAAgHgEg");
	this.shape.setTransform(1.0341,25.8353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").p("ADjAAQAABehDBCQhCBDheAAQhdAAhChDQhDhCAAheQAAhdBDhCQBChCBdAAQBeAABCBCQBDBDAABcg");
	this.shape_1.setTransform(2.175,29.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B41B1E").s().p("AifCgQhDhCAAheQAAhdBDhCQBChDBdAAQBeAABCBDQBDBDAABcQAABehDBCQhCBCheAAQhdAAhChCg");
	this.shape_2.setTransform(2.175,29.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D29039").s().p("AAHBHQgQgLABgpQgOAHgPAAQgeACgHgcQADgLAJgIQASgOAeAYQgLgTgEgRQgJgiAmAFIAOAGQANAPgMAsIAcgXQAdgQADAnIgBANQgJANgsgJIAOAdQAJAfgWAGIgEABQgGAAgFgEg");
	this.shape_3.setTransform(-2.45,58.5013);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D69831").s().p("AAJBHIgUguQgCAzgfAHIgdgDQgVgeAbgeIAggYQgnghADgZIALgTQAZgSAWAjQALARAFAVQAdg1AVAAQAKAAAEALQAjAjgpARIgvALQA2AWADAaQABANgJAIQgPAYgPAAQgMAAgMgRg");
	this.shape_4.setTransform(32.5639,44.7506);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").p("ADjAAQAABehDBCQhCBDheAAQhdAAhChDQhDhCAAheQAAhcBDhDQBChCBdAAQBeAABCBCQBDBCAABdg");
	this.shape_5.setTransform(28.525,50);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B61D1F").s().p("AifCgQhDhCAAheQAAhcBDhDQBChCBdAAQBeAABCBCQBDBCAABdQAABehDBCQhCBCheAAQhdAAhChCg");
	this.shape_6.setTransform(28.525,50);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").p("AC6AAQAABNg2A3Qg3A2hNAAQhMAAg3g2Qg2g3AAhNQAAhMA2g3QA3g2BMAAQBNAAA3A2QA2A3AABMg");
	this.shape_7.setTransform(-1.875,59.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B61D1F").s().p("AiDCEQg2g3AAhNQAAhMA2g3QA3g2BMAAQBNAAA3A2QA2A3AABMQAABNg2A3Qg3A2hNAAQhMAAg3g2g");
	this.shape_8.setTransform(-1.875,59.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").p("AguA6QgCgdALgdQAXg5BDAA");
	this.shape_9.setTransform(-24.513,29.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").p("AAiA7QgpgOgQg3IgHg1");
	this.shape_10.setTransform(-26.0413,16.1173);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").p("Ag4hYIgDAKQgBAOAHASQAWA4BdBM");
	this.shape_11.setTransform(-42.3729,10.2579);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").p("AhpBFQAlgoA7gxQBDg6AwAM");
	this.shape_12.setTransform(-44.125,26.3392);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").p("AD7AiQichLi8AKQhfAFg/AU");
	this.shape_13.setTransform(-41.0915,21.8917);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").p("AFdAnQgWgRgdgeQg5hAgkhKIgPAHQgUAQgWAwQgigPgngfQhNg+gbhQIgYA1QgVA+AOAuQgmgBg2ARQhtAihRBbQBBgBBBAHQCCANgDAjIg0A5QgtA5AfABQA1gWA4gVQBwgoAVALQAOAHgDA/QgDA7AeAHQAZgkAhggQBCg/ApAZQgBgNAFgSQAKgkAggVg");
	this.shape_14.setTransform(-47.0816,20.967);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6A9B4A").s().p("ABjDKQADg/gOgHQgVgLhwAoQg4AVg0AWQgggBAug5IAzg5QAEgjiDgNQhBgHhBABQBRhbBtgiQA2gRAmABQgOguAWg+IAXg1QAbBQBNA+QAoAfAhAPQAWgwAUgQIAQgHQAjBKA6BAQAdAeAVARIgIAnQghAVgKAkQgFASACANQgpgZhCA/QgiAggZAkQgegHADg7g");
	this.shape_15.setTransform(-46.8,21.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").p("AiJgZIAegMQAlgMAjgBQBxgDA5Br");
	this.shape_16.setTransform(-15.1186,8.588);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").p("AhGBgQgLhNBNg+QAmgfApgQ");
	this.shape_17.setTransform(5.2166,-2.1131);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").p("ABdiYQgcgDglAlQhKBKguDK");
	this.shape_18.setTransform(1.275,-32.1053);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").p("AjHh4QBgAfCCA9QCXBFATBU");
	this.shape_19.setTransform(-26.7018,-24.1195);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").p("ACwGjQgIkuisknQhXiUhVhY");
	this.shape_20.setTransform(-19.0548,-21.4671);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").p("AEBHbQAFgrAVg/QAph/BLhqQgDgJgTgHQgogQhUAFQgHg7ALhMQAVicBbhhQgqgCg0AIQhoARg2A1Qgeg2hEg/QiJh+jEguQA3BcAsBfQBaC/g1AWQhAgTg7gLQh1gUAYAsICWB4QCXB/ACAmQABATgdASQgJAGg0AYQhXAnAQAwIAtAHQA2AJAtAPQCOAtgDBMIAvgSQA7gMA4Adg");
	this.shape_21.setTransform(-19.2511,-29.0546);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#487A33").s().p("AhrF0QgtgPg2gKIgtgGQgQgwBXgnQA0gYAJgHQAdgRgBgUQgCgliXh/IiWh4QgYgsB1AUQA7AKBAAUQA1gWhai/Qgshgg3hbQDEAuCJB+QBEA/AeA2QA2g2BogQQA0gJAqACQhbBigVCcQgLBMAHA7QBUgGAoARQATAHADAJQhLBpgpCAQgVA/gFAqIg/ASQg4gdg7ALIgvATQADhMiOgtg");
	this.shape_22.setTransform(-19.2785,-29.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").p("Ag8hnIAZALQAdAQAUAVQBEBCglBg");
	this.shape_23.setTransform(20.8255,13.9132);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").p("AhmAWQArgyBVALQArAGAiAP");
	this.shape_24.setTransform(40.05,18.2314);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").p("ACZgUQgOgTgtgBQhcgDidBV");
	this.shape_25.setTransform(60.8552,-5.4606);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").p("Agti9IAWA0QAaBDAWBGQAqCCgrA7");
	this.shape_26.setTransform(36.4385,-12.1744);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").p("AipFWQC/iwBckQQAuiIAIhm");
	this.shape_27.setTransform(38.1558,-5.8606);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").p("AivHDIBUgsQBpgvBwgOQAEgHgGgRQgNghg0gwIAYgXQAfgcAkgYQBxhLB0AAQgXgagjgbQhIg1hBgDQASgwABhNQADibhUiRQgcBVgkBRQhICjgsgUQgYgxgcgqQg2hTgPAoIAICfQAECjgXAWQgMAMgcgHQgJgDgugSQhLgegWAlIAVAfQAZAmARAjQA1BxgzApIAoATQApAcANAzg");
	this.shape_28.setTransform(43.5973,-13.9502);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5F953D").s().p("AjdGjQgNgygpgdIgngSQAygqg1hwQgQgkgZgmIgWgfQAWgkBLAeQAvASAIACQAdAIAMgMQAXgXgEiiIgJigQAQgoA2BUQAbApAYAyQAtATBHiiQAlhRAbhWQBUCRgCCbQgCBNgSAxQBCADBHA0QAkAbAWAaQhzABhyBLQgjAXggAcIgXAYQA0AwAMAhQAGAQgEAHQhwAOhpAvIhUAtg");
	this.shape_29.setTransform(43.35,-13.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-79.3,165.1,158.7);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDBF6A").s().p("AAIBbQgVgOAAg0QgTAIgUABQgpABgKgjQAFgOAMgKQAZgSAoAfQgPgXgGgWQgLgsAzAHIAGAAQAJABAFAGQASATgRA4IAngdQAngUAFAxIACAGQABAGgFAFQgNAQg7gMIATAmQAMAmgeAIIgHABQgHAAgHgEg");
	this.shape.setTransform(0.9841,25.8353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").p("ADjAAQAABehDBCQhCBDheAAQhdAAhChDQhDhCAAheQAAhdBDhCQBChCBdAAQBeAABCBCQBDBDAABcg");
	this.shape_1.setTransform(2.125,29.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B41B1E").s().p("AifCgQhDhCAAheQAAhdBDhCQBChDBdAAQBeAABCBDQBDBDAABcQAABehDBCQhCBCheAAQhdAAhChCg");
	this.shape_2.setTransform(2.125,29.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D29039").s().p("AAHBHQgQgLABgpQgOAHgPAAQgeACgHgcQADgLAJgIQASgOAeAYQgLgTgEgRQgJgiAmAFIAOAGQANAPgMAsIAcgXQAdgQADAnIgBANQgJANgsgJIAOAdQAJAfgWAGIgEABQgGAAgFgEg");
	this.shape_3.setTransform(-2.5,58.5013);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D69831").s().p("AAJBHIgUguQgCAzgfAHIgdgDQgVgeAbgeIAggYQgnghADgZIALgTQAZgSAWAjQALARAFAVQAdg1AVAAQAKAAAEALQAjAjgpARIgvALQA2AWADAaQABANgJAIQgPAYgPAAQgMAAgMgRg");
	this.shape_4.setTransform(32.5139,44.7506);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").p("ADjAAQAABehDBCQhCBDheAAQhdAAhChDQhDhCAAheQAAhcBDhDQBChCBdAAQBeAABCBCQBDBCAABdg");
	this.shape_5.setTransform(28.475,50);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B61D1F").s().p("AifCgQhDhCAAheQAAhcBDhDQBChCBdAAQBeAABCBCQBDBCAABdQAABehDBCQhCBCheAAQhdAAhChCg");
	this.shape_6.setTransform(28.475,50);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").p("AC6AAQAABNg2A3Qg3A2hNAAQhMAAg3g2Qg2g3AAhNQAAhMA2g3QA3g2BMAAQBNAAA3A2QA2A3AABMg");
	this.shape_7.setTransform(-1.925,59.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B61D1F").s().p("AiDCEQg2g3AAhNQAAhMA2g3QA3g2BMAAQBNAAA3A2QA2A3AABMQAABNg2A3Qg3A2hNAAQhMAAg3g2g");
	this.shape_8.setTransform(-1.925,59.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").p("AguA6QgCgdALgdQAXg5BDAA");
	this.shape_9.setTransform(-24.563,29.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").p("AAiA7QgpgOgQg3IgHg1");
	this.shape_10.setTransform(-26.0913,16.1173);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").p("Ag4hYIgDAKQgBAOAHASQAWA4BdBM");
	this.shape_11.setTransform(-42.4229,10.2579);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").p("AhpBFQAlgoA7gxQBDg6AwAM");
	this.shape_12.setTransform(-44.175,26.3392);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").p("AD7AiQichLi8AKQhfAFg/AU");
	this.shape_13.setTransform(-41.1415,21.8917);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").p("AFdAnQgWgRgdgeQg5hAgkhKIgPAHQgUAQgWAwQgigPgngfQhNg+gbhQIgYA1QgVA+AOAuQgmgBg2ARQhtAihRBbQBBgBBBAHQCCANgDAjIg0A5QgtA5AfABQA1gWA4gVQBwgoAVALQAOAHgDA/QgDA7AeAHQAZgkAhggQBCg/ApAZQgBgNAFgSQAKgkAggVg");
	this.shape_14.setTransform(-47.1316,20.967);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6A9B4A").s().p("ABjDKQADg/gOgHQgVgLhwAoQg4AVg0AWQgggBAug5IAzg5QAEgjiDgNQhBgHhBABQBRhbBtgiQA2gRAmABQgOguAWg+IAXg1QAbBQBNA+QAoAfAhAPQAWgwAUgQIAQgHQAjBKA6BAQAdAeAVARIgIAnQghAVgKAkQgFASACANQgpgZhCA/QgiAggZAkQgegHADg7g");
	this.shape_15.setTransform(-46.85,21.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").p("AiJgZIAegMQAlgMAjgBQBxgDA5Br");
	this.shape_16.setTransform(-15.1686,8.588);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").p("AhGBgQgLhNBNg+QAmgfApgQ");
	this.shape_17.setTransform(5.1666,-2.1131);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").p("ABdiYQgcgDglAlQhKBKguDK");
	this.shape_18.setTransform(1.225,-32.1053);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").p("AjHh4QBgAfCCA9QCXBFATBU");
	this.shape_19.setTransform(-26.7518,-24.1195);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").p("ACwGjQgIkuisknQhXiUhVhY");
	this.shape_20.setTransform(-19.1048,-21.4671);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").p("AEBHbQAFgrAVg/QAph/BLhqQgDgJgTgHQgogQhUAFQgHg7ALhMQAVicBbhhQgqgCg0AIQhoARg2A1Qgeg2hEg/QiJh+jEguQA3BcAsBfQBaC/g1AWQhAgTg7gLQh1gUAYAsICWB4QCXB/ACAmQABATgdASQgJAGg0AYQhXAnAQAwIAtAHQA2AJAtAPQCOAtgDBMIAvgSQA7gMA4Adg");
	this.shape_21.setTransform(-19.3011,-29.0546);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#487A33").s().p("AhrF0QgtgPg2gKIgtgGQgQgwBXgnQA0gYAJgHQAdgRgBgUQgCgliXh/IiWh4QgYgsB1AUQA7AKBAAUQA1gWhai/Qgshgg3hbQDEAuCJB+QBEA/AeA2QA2g2BogQQA0gJAqACQhbBigVCcQgLBMAHA7QBUgGAoARQATAHADAJQhLBpgpCAQgVA/gFAqIg/ASQg4gdg7ALIgvATQADhMiOgtg");
	this.shape_22.setTransform(-19.3285,-29.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").p("Ag8hnIAZALQAdAQAUAVQBEBCglBg");
	this.shape_23.setTransform(20.7755,13.9132);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").p("AhmAWQArgyBVALQArAGAiAP");
	this.shape_24.setTransform(40,18.2314);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").p("ACZgUQgOgTgtgBQhcgDidBV");
	this.shape_25.setTransform(60.8052,-5.4606);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").p("Agti9IAWA0QAaBDAWBGQAqCCgrA7");
	this.shape_26.setTransform(36.3885,-12.1744);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").p("AipFWQC/iwBckQQAuiIAIhm");
	this.shape_27.setTransform(38.1058,-5.8606);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").p("AivHDIBUgsQBpgvBwgOQAEgHgGgRQgNghg0gwIAYgXQAfgcAkgYQBxhLB0AAQgXgagjgbQhIg1hBgDQASgwABhNQADibhUiRQgcBVgkBRQhICjgsgUQgYgxgcgqQg2hTgPAoIAICfQAECjgXAWQgMAMgcgHQgJgDgugSQhLgegWAlIAVAfQAZAmARAjQA1BxgzApIAoATQApAcANAzg");
	this.shape_28.setTransform(43.5473,-13.9502);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5F953D").s().p("AjdGjQgNgygpgdIgngSQAygqg1hwQgQgkgZgmIgWgfQAWgkBLAeQAvASAIACQAdAIAMgMQAXgXgEiiIgJigQAQgoA2BUQAbApAYAyQAtATBHiiQAlhRAbhWQBUCRgCCbQgCBNgSAxQBCADBHA0QAkAbAWAaQhzABhyBLQgjAXggAcIgXAYQA0AwAMAhQAGAQgEAHQhwAOhpAvIhUAtg");
	this.shape_29.setTransform(43.3,-13.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-79.3,165,158.7);


(lib.暫停 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgQEfQgZAAgSgSQgRgSgBgZIAAnEQABgZARgSQASgRAZAAIAhAAQAZAAASARQARASABAZIAAHEQAAAZgSASQgSASgZAAg");
	this.shape.setTransform(13.3,0.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQEfQgZAAgSgSQgSgSAAgZIAAnEQAAgZASgSQASgRAZAAIAhAAQAZAAASARQASASAAAZIAAHEQAAAZgSASQgSASgZAAg");
	this.shape_1.setTransform(-13.375,0.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkuLOQiMg6hshtQhshsg8iLQg9iSAAieQAAieA9iRQA8iLBshsQBshsCMg8QCQg9CeAAQCeAACRA9QCMA8BtBsQBsBsA6CLQA+CRAACeQAACeg+CSQg6CLhsBsQhtBtiMA6QiRA+ieAAQieAAiQg+gAnSnSQjBDCAAEQQAAERDBDCQDCDBEQAAQERAADBjBQDCjCAAkRQAAkQjCjCQjBjBkRAAQkQAAjCDBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.暫停, new cjs.Rectangle(-78,-78,156,156), null);


(lib.文字 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {p3:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}
	this.frame_9 = function() {
		this.gotoAndPlay("p3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// 圖層_9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED1C24").s().p("Ag6EvIAAjWIjFmHIB/AAICBEXIAoheIBdi5IB6AAIjHGGIAADXg");
	this.shape.setTransform(-62.05,46.35,1.4694,1.3372,0,0,0,-0.1,30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").p("AA1i1IAHApQAHAzgCAtQgHCPhfAgIAzAAIgTAaQgbAbgnADIBVgDQBWgMAEgvQAKhcADg0QAFhhgSgkQgSgjgSgBg");
	this.shape_1.setTransform(54.1335,76.7047,1.2962,1.2962,14.9992);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D42125").s().p("AgcCeIAUgaIg0AAQBfggAHiPQACgtgHgzIgHgqIAPgGQASAAASAkQASAkgFBhQgDA0gKBcQgEAuhVANIhWADQAngEAbgag");
	this.shape_2.setTransform(56.9874,77.3548,1.2962,1.2962,14.9992);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").p("ABgDXIk4ktIgFh8IBzCKQCDCRBWAkIBjA/IhqgFg");
	this.shape_3.setTransform(93.05,80.25,1.2959,1.2959,14.9982,0,0,0,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D42125").s().p("AjShYIgFh8IBzCKQCDCRBXAkIBiA/IhqgFIgIAwg");
	this.shape_4.setTransform(92.0894,80.7366,1.2959,1.2959,14.9982);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").p("AB+htQgRgFgcAJQg6ATg8BIIh0B9IBTABQBZgFAfgfIAzgbQAygjADgjQAGgfAAgtQgLgLgXgBg");
	this.shape_5.setTransform(101.6732,39.5185,1.2959,1.2959,14.9982);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66171C").s().p("AicBvIB0h9QA8hIA6gTQAcgJARAFQAXABALALQAAAtgGAfQgDAjgyAjIgzAbQgfAfhZAFg");
	this.shape_6.setTransform(102.0646,39.6232,1.2959,1.2959,14.9982);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").p("AAIhKQgpAEgsAPQhYAegMAzIAnAeQAvAcAmgHQATACAcgIQA4gPAxguQBDg9AMgNQAJgJhLgDQhIgDggAFg");
	this.shape_7.setTransform(40.3043,53.1293,1.2959,1.2959,14.9982);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66171C").s().p("AiKA4IgogeQAMgzBZgeQAsgPApgEQAggFBIADQBKADgIAJIhPBKQgyAug4APQgcAIgSgCIgQACQggAAglgXg");
	this.shape_8.setTransform(40.3418,53.1393,1.2959,1.2959,14.9982);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").p("AgEgpQgOAEgOAIQgbAOADAOIAJAcQAPAbAcgNQAmgHAMgNQAIgIACgMQAGgYgagSQgZgGgPAGg");
	this.shape_9.setTransform(71.9781,50.0591,1.2959,1.2959,14.9982);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D42125").s().p("AgvAbIgJgcQgDgOAbgOQAOgIAOgEQAPgGAZAGQAaASgGAYQgCAMgIAIQgMANgmAHQgJAEgIAAQgQAAgKgSg");
	this.shape_10.setTransform(71.9781,50.0591,1.2959,1.2959,14.9982);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").p("AicCnQgKgzgIhAQgPh/ANhCIAKggQARgZAhAfIBWBXQAbAMA0gHIBHAHQBEAQgIAsQAHAYgLAgQgUBBhUAiQgUAMgkALQhGAVhNgIIgZACg");
	this.shape_11.setTransform(101.3097,29.8103,1.2959,1.2959,14.9982);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D42125").s().p("AiDC3IgZACIAAgSQgKgzgIhAQgPh/ANhCIAKggQARgZAhAfIBWBXQAbAMA0gHIBHAHQBEAQgIAsQAHAYgLAgQgUBBhUAiQgUAMgkALQgyAPg3AAQgVAAgVgCg");
	this.shape_12.setTransform(101.3132,29.7972,1.2959,1.2959,14.9982);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").p("ACpALQgyhBg5g7Qhyh2gmAhIgEAAQgFACgCALQgIAjATBtIgSAgQgaAlgnAhIgJAOQgKARgEAPQgLAyA5AWQAWATAnAGQBQAMBXhDIB2hxg");
	this.shape_13.setTransform(45.7846,37.3379,1.2959,1.2959,14.9982);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D42125").s().p("AhYDMQgngGgWgTQg5gWALgyQAEgPAKgRIAJgOQAnghAaglIASggQgThtAIgjQACgLAFgCIAEAAQAmghByB2QA5A7AyBBIAbAZIh2BxQhLA5hEAAQgMAAgMgCg");
	this.shape_14.setTransform(45.6388,37.2989,1.2959,1.2959,14.9982);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FDEBDD").s().p("AgwBdQgCiqAbh3QAJgmAKgbIAIgUIAeAAQgaBVAUD3QAKB8APBrIhegFIgHAFIAAAAQgIAAAIi9g");
	this.shape_15.setTransform(49.9473,93.5915,1.2962,1.2962,14.9992);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").p("Aisk1IAxgWQBrgiBsCHQA2BDAiBKIASAAQAUAeCLB4QgKAxh2BRQg7Apg5AfQiBBFiwAGQhXAEg+gLQAIgDAFhVIADhfQAIgHAHAGQAFADAAgCQgGgogMhyQgKhsAjhOQAbg9AwgfQAXgPAcgKg");
	this.shape_16.setTransform(82.0825,98.258,1.2959,1.2959,14.9982);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FCDFA7").s().p("AlcFLQAIgDAEhVIAEhfQAIgHAHAGQAFADAAgCQgHgogLhyQgLhsAjhOQAcg9AwgfQAWgPAcgKIAygWQBqgiBsCHQA3BDAhBKIATAAQAUAeCKB4QgJAxh2BRQg7Apg6AfQiABFixAGIgoABQg9AAgvgIg");
	this.shape_17.setTransform(82.9867,98.5003,1.2959,1.2959,14.9982);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").p("AAzAAQAAAVgPAPQgPAOgVAAQgUAAgPgOQgPgPAAgVQAAgUAPgOQAPgPAUAAQAVAAAPAPQAPAOAAAUg");
	this.shape_18.setTransform(108.3899,127.9355,1.2959,1.2959,14.9982);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EFCF60").s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgOAUAAQAVAAAPAOQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPg");
	this.shape_19.setTransform(108.3899,127.9355,1.2959,1.2959,14.9982);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ED1C24").s().p("ACZEvQgGAAgEgEQgEgEAAgGIgMl9QgBgMgMgBQgLgCgEALIhEDRQgDAJgLAAIgxAAQgKAAgEgKIg5jDQgEgLgMABQgMACAAAMIgLFwQAAAGgEAEQgEAEgGAAIhEAAQgGAAgEgFQgFgEABgGIAcpAQAAgGAEgEQAFgEAFAAIBpAAQALAAACAKIA/DQQACALALAAQAKAAADgKIBAjRQAEgKAKAAIBrAAQAGAAAEAEQAEAEAAAGIAdJAQAAAGgEAEQgEAFgGAAg");
	this.shape_20.setTransform(167.05,126.8,1.5428,1.3146,0,0,0,0,33);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ED1C24").s().p("Ag5BUIAAinIBzAAIAACng");
	this.shape_21.setTransform(-265.7854,24.0209,1.349,1.349);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#ED1C24").s().p("Ag5BLIAAiVIBzAAIAACVg");
	this.shape_22.setTransform(-265.7854,-10.1425,1.349,1.349);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#ED1C24").s().p("AivAwIAAhfICEAAIAAAAIDcAAIAABfg");
	this.shape_23.setTransform(-249.771,41.8614,1.349,1.349);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ED1C24").s().p("AivAwIAAhfIFgAAIAABfg");
	this.shape_24.setTransform(-249.771,-26.7689,1.349,1.349);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#ED1C24").s().p("AivAvIAAhdIFgAAIAABdg");
	this.shape_25.setTransform(-249.771,6.349,1.349,1.349);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#ED1C24").s().p("Ah9EzQgugFgqgNIAAhwIAtANIAuAMIAvAHQAYADAVABQAggBAWgFQAXgFAOgLQAOgJAHgNQAGgNABgSQAAgWgNgPQgMgOgVgNQgXgLgYgJIg3gUQgbgLgbgNQgagMgVgVQgVgSgNgdQgNgdABglQgBgjANghQAOggAbgYQAegYAqgOQAtgOA7AAIAmABIAmAFQATACASAEQAQACARAFIAABpQgOgGgTgFIgkgIIgmgGIgkgBQgcAAgWAFQgTAEgOAJQgOAJgGAMQgGANAAAPQAAATAMANQAOAPAVAKQARAJAdALIA2AVQAYAJAfAPQAdAPATATQAWAUAMAaQANAbAAAlQgBAzgRAkQgUAlggAXQgiAZgsAKQgsAMg2AAQgzAAgqgGg");
	this.shape_26.setTransform(326.7912,84.349,1.349,1.349);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#ED1C24").s().p("ACFEvIghh4IjTAAIgiB4IhxAAICzpdICfAAICzJdgAhUBaICeAAIhOkYg");
	this.shape_27.setTransform(253.7107,84.349,1.349,1.349);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#ED1C24").s().p("ABqEvIAAj7IgWAAQgeAAgUAOQgWAOgMAcIhVDDIiFAAIBgjLQAUgpARgTQATgUAWgFQgbgFgagKQgXgLgTgUQgRgSgKgaQgKgaAAgiQAAguAQggQAPgfAdgVQAdgTApgJQApgJAxAAICvAAIAAJdgAgci7QgcATAAAtQAAAVAIAQQAIAQAPAMQAQALAUAGQAYAFAZAAIAuAAIAAirIgyAAQg4AAgcAUg");
	this.shape_28.setTransform(-117.2915,6.3827,1.349,1.349,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#ED1C24").s().p("ABWEvIhWjDQgKgbgWgPQgVgOgeAAIgWAAIAAD7IhyAAIAApdICxAAQAwAAAqAJQApAJAcATQAeAVAOAfQAPAgAAAuQAAAigJAaQgJAagSASQgSAUgYALQgZAKgcAFQAXAFASAUQARATAUApIBhDLgAhpgkIAvAAQAYAAAXgFQAVgGAPgLQAQgMAIgQQAJgRAAgUQgBgtgcgTQgdgUg3AAIgyAAg");
	this.shape_29.setTransform(-181.5117,6.3827,1.349,1.349);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ED1C24").s().p("ACLHBIgPrFIhgG6IhHAAIhWm6IgNLFIhhAAIAeuBICAAAIA2D/IAZCQIBRmPICDAAIAeOBg");
	this.shape_30.setTransform(-324.85,43.6,1.349,0.9186,0,0,0,-1.2,41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{regY:0,scaleY:1.349,x:253.7107,y:84.349}},{t:this.shape_26,p:{rotation:0,x:326.7912,y:84.349}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{rotation:0,x:167.05,y:126.8}},{t:this.shape_19,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9982,x:108.3899,y:127.9355}},{t:this.shape_18,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9982,x:108.3899,y:127.9355}},{t:this.shape_17,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9982,x:82.9867,y:98.5003}},{t:this.shape_16,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9982,x:82.0825,y:98.258}},{t:this.shape_15,p:{scaleX:1.2962,scaleY:1.2962,rotation:14.9992,x:49.9473,y:93.5915}},{t:this.shape_14,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9982,x:45.6388,y:37.2989}},{t:this.shape_13,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9982,x:45.7846,y:37.3379}},{t:this.shape_12,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9982,x:101.3132,y:29.7972}},{t:this.shape_11,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9982,x:101.3097,y:29.8103}},{t:this.shape_10,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9982,x:71.9781,y:50.0591}},{t:this.shape_9,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9982,x:71.9781,y:50.0591}},{t:this.shape_8,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9982,x:40.3418,y:53.1393}},{t:this.shape_7,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9982,x:40.3043,y:53.1293}},{t:this.shape_6,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9982,x:102.0646,y:39.6232}},{t:this.shape_5,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9982,x:101.6732,y:39.5185}},{t:this.shape_4,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9982,x:92.0894,y:80.7366}},{t:this.shape_3,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9982,x:93.05,y:80.25}},{t:this.shape_2,p:{scaleX:1.2962,scaleY:1.2962,rotation:14.9992,x:56.9874,y:77.3548}},{t:this.shape_1,p:{scaleX:1.2962,scaleY:1.2962,rotation:14.9992,x:54.1335,y:76.7047}},{t:this.shape}]},5).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{regY:0,scaleY:1.349,x:253.7107,y:84.349}},{t:this.shape_26,p:{rotation:0,x:326.7912,y:84.349}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{rotation:14.9991,x:167,y:126.75}},{t:this.shape_19,p:{scaleX:1.2958,scaleY:1.2958,rotation:7.5357,x:114.7402,y:123.6811}},{t:this.shape_18,p:{scaleX:1.2958,scaleY:1.2958,rotation:7.5357,x:114.7402,y:123.6811}},{t:this.shape_17,p:{scaleX:1.2958,scaleY:1.2958,rotation:7.5357,x:85.7318,y:97.7969}},{t:this.shape_16,p:{scaleX:1.2958,scaleY:1.2958,rotation:7.5357,x:84.8039,y:97.6741}},{t:this.shape_15,p:{scaleX:1.2961,scaleY:1.2961,rotation:7.535,x:52.3396,y:97.2163}},{t:this.shape_14,p:{scaleX:1.2958,scaleY:1.2958,rotation:7.5357,x:40.7557,y:41.9697}},{t:this.shape_13,p:{scaleX:1.2958,scaleY:1.2958,rotation:7.5357,x:40.9052,y:41.9894}},{t:this.shape_12,p:{scaleX:1.2958,scaleY:1.2958,rotation:7.5357,x:94.9792,y:27.302}},{t:this.shape_11,p:{scaleX:1.2958,scaleY:1.2958,rotation:7.5357,x:94.9774,y:27.3154}},{t:this.shape_10,p:{scaleX:1.2958,scaleY:1.2958,rotation:7.5357,x:68.5266,y:51.2}},{t:this.shape_9,p:{scaleX:1.2958,scaleY:1.2958,rotation:7.5357,x:68.5266,y:51.2}},{t:this.shape_8,p:{scaleX:1.2958,scaleY:1.2958,rotation:7.5357,x:37.5612,y:58.3624}},{t:this.shape_7,p:{scaleX:1.2958,scaleY:1.2958,rotation:7.5357,x:37.5227,y:58.3573}},{t:this.shape_6,p:{scaleX:1.2958,scaleY:1.2958,rotation:7.5357,x:97.0002,y:36.9463}},{t:this.shape_5,p:{scaleX:1.2958,scaleY:1.2958,rotation:7.5357,x:96.5986,y:36.8933}},{t:this.shape_4,p:{scaleX:1.2958,scaleY:1.2958,rotation:7.5357,x:92.4497,y:79.0032}},{t:this.shape_3,p:{scaleX:1.2958,scaleY:1.2958,rotation:7.5357,x:93.35,y:78.4}},{t:this.shape_2,p:{scaleX:1.2961,scaleY:1.2961,rotation:7.535,x:57.2101,y:80.2048}},{t:this.shape_1,p:{scaleX:1.2961,scaleY:1.2961,rotation:7.535,x:54.2964,y:79.931}},{t:this.shape}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{regY:34.2,scaleY:0.8207,x:253.7,y:130.45}},{t:this.shape_26,p:{rotation:0,x:326.7912,y:84.349}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{rotation:0,x:167.05,y:126.8}},{t:this.shape_19,p:{scaleX:1.2958,scaleY:1.2958,rotation:29.9962,x:91.8738,y:135.7874}},{t:this.shape_18,p:{scaleX:1.2958,scaleY:1.2958,rotation:29.9962,x:91.8738,y:135.7874}},{t:this.shape_17,p:{scaleX:1.2958,scaleY:1.2958,rotation:29.9962,x:74.9547,y:100.7835}},{t:this.shape_16,p:{scaleX:1.2958,scaleY:1.2958,rotation:29.9962,x:74.144,y:100.3155}},{t:this.shape_15,p:{scaleX:1.2961,scaleY:1.2961,rotation:29.996,x:44.3154,y:87.4935}},{t:this.shape_14,p:{scaleX:1.2958,scaleY:1.2958,rotation:29.9962,x:54.7186,y:32.0071}},{t:this.shape_13,p:{scaleX:1.2958,scaleY:1.2958,rotation:29.9962,x:54.8492,y:32.0825}},{t:this.shape_12,p:{scaleX:1.2958,scaleY:1.2958,rotation:29.9962,x:110.4335,y:39.1681}},{t:this.shape_11,p:{scaleX:1.2958,scaleY:1.2958,rotation:29.9962,x:110.4267,y:39.1798}},{t:this.shape_10,p:{scaleX:1.2958,scaleY:1.2958,rotation:29.9962,x:76.8568,y:51.1473}},{t:this.shape_9,p:{scaleX:1.2958,scaleY:1.2958,rotation:29.9962,x:76.8568,y:51.1473}},{t:this.shape_8,p:{scaleX:1.2958,scaleY:1.2958,rotation:29.9962,x:45.5035,y:45.9361}},{t:this.shape_7,p:{scaleX:1.2958,scaleY:1.2958,rotation:29.9962,x:45.4698,y:45.9167}},{t:this.shape_6,p:{scaleX:1.2958,scaleY:1.2958,rotation:29.9962,x:108.6166,y:48.8531}},{t:this.shape_5,p:{scaleX:1.2958,scaleY:1.2958,rotation:29.9962,x:108.2657,y:48.6506}},{t:this.shape_4,p:{scaleX:1.2958,scaleY:1.2958,rotation:29.9962,x:88.3432,y:85.9817}},{t:this.shape_3,p:{scaleX:1.2958,scaleY:1.2958,rotation:29.9962,x:89.4,y:85.8}},{t:this.shape_2,p:{scaleX:1.2961,scaleY:1.2961,rotation:29.996,x:55.3164,y:73.6326}},{t:this.shape_1,p:{scaleX:1.2961,scaleY:1.2961,rotation:29.996,x:52.7282,y:72.2663}},{t:this.shape}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{regY:0,scaleY:1.349,x:253.7107,y:84.349}},{t:this.shape_26,p:{rotation:29.9991,x:326.8409,y:84.4149}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{rotation:-0.0007,x:167.1,y:127.8}},{t:this.shape_19,p:{scaleX:1.2957,scaleY:1.2957,rotation:7.5342,x:114.6865,y:123.7189}},{t:this.shape_18,p:{scaleX:1.2957,scaleY:1.2957,rotation:7.5342,x:114.6865,y:123.7189}},{t:this.shape_17,p:{scaleX:1.2957,scaleY:1.2957,rotation:7.5342,x:85.6797,y:97.8374}},{t:this.shape_16,p:{scaleX:1.2957,scaleY:1.2957,rotation:7.5342,x:84.7518,y:97.7147}},{t:this.shape_15,p:{scaleX:1.296,scaleY:1.296,rotation:7.5345,x:52.2897,y:97.2634}},{t:this.shape_14,p:{scaleX:1.2957,scaleY:1.2957,rotation:7.5342,x:40.7055,y:42.0155}},{t:this.shape_13,p:{scaleX:1.2957,scaleY:1.2957,rotation:7.5342,x:40.855,y:42.0352}},{t:this.shape_12,p:{scaleX:1.2957,scaleY:1.2957,rotation:7.5342,x:94.9246,y:27.3475}},{t:this.shape_11,p:{scaleX:1.2957,scaleY:1.2957,rotation:7.5342,x:94.9228,y:27.3609}},{t:this.shape_10,p:{scaleX:1.2957,scaleY:1.2957,rotation:7.5342,x:68.4745,y:51.2444}},{t:this.shape_9,p:{scaleX:1.2957,scaleY:1.2957,rotation:7.5342,x:68.4745,y:51.2444}},{t:this.shape_8,p:{scaleX:1.2957,scaleY:1.2957,rotation:7.5342,x:37.5116,y:58.407}},{t:this.shape_7,p:{scaleX:1.2957,scaleY:1.2957,rotation:7.5342,x:37.4731,y:58.402}},{t:this.shape_6,p:{scaleX:1.2957,scaleY:1.2957,rotation:7.5342,x:96.9457,y:36.991}},{t:this.shape_5,p:{scaleX:1.2957,scaleY:1.2957,rotation:7.5342,x:96.5441,y:36.938}},{t:this.shape_4,p:{scaleX:1.2957,scaleY:1.2957,rotation:7.5342,x:92.3966,y:79.0449}},{t:this.shape_3,p:{scaleX:1.2957,scaleY:1.2957,rotation:7.5342,x:93.3,y:78.45}},{t:this.shape_2,p:{scaleX:1.296,scaleY:1.296,rotation:7.5345,x:57.16,y:80.2523}},{t:this.shape_1,p:{scaleX:1.296,scaleY:1.296,rotation:7.5345,x:54.2463,y:79.9785}},{t:this.shape}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{regY:0,scaleY:1.349,x:253.7107,y:84.349}},{t:this.shape_26,p:{rotation:0,x:326.7912,y:84.349}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{rotation:0,x:167.05,y:126.8}},{t:this.shape_19,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9983,x:108.3861,y:127.9287}},{t:this.shape_18,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9983,x:108.3861,y:127.9287}},{t:this.shape_17,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9983,x:82.9841,y:98.4949}},{t:this.shape_16,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9983,x:82.08,y:98.2526}},{t:this.shape_15,p:{scaleX:1.2962,scaleY:1.2962,rotation:14.9992,x:49.9473,y:93.5915}},{t:this.shape_14,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9983,x:45.6381,y:37.2964}},{t:this.shape_13,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9983,x:45.7839,y:37.3354}},{t:this.shape_12,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9983,x:101.3098,y:29.7951}},{t:this.shape_11,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9983,x:101.3063,y:29.8082}},{t:this.shape_10,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9983,x:71.9761,y:50.056}},{t:this.shape_9,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9983,x:71.9761,y:50.056}},{t:this.shape_8,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9983,x:40.3414,y:53.136}},{t:this.shape_7,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9983,x:40.3039,y:53.126}},{t:this.shape_6,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9983,x:102.0611,y:39.6206}},{t:this.shape_5,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9983,x:101.6698,y:39.5159}},{t:this.shape_4,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9983,x:92.0864,y:80.7321}},{t:this.shape_3,p:{scaleX:1.2959,scaleY:1.2959,rotation:14.9983,x:93.05,y:80.25}},{t:this.shape_2,p:{scaleX:1.2962,scaleY:1.2962,rotation:14.9992,x:56.9874,y:77.3548}},{t:this.shape_1,p:{scaleX:1.2962,scaleY:1.2962,rotation:14.9992,x:54.1335,y:76.7047}},{t:this.shape}]},1).wait(1));

	// 圖層_1
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#ED1C24").s().p("Ag6EvIAAjWIjFmHIB/AAICBEXIAoheIBdi5IB6AAIjHGGIAADXg");
	this.shape_31.setTransform(-62.05,46.5,1.4694,1.7663,0,0,0,-0.1,30.2);
	this.shape_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(4).to({_off:false},0).to({_off:true},1).wait(5));

	// 圖層_5
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").p("AA1i1IAHApQAHAzgCAtQgHCPhfAgIAzAAIgTAaQgbAbgnADIBVgDQBWgMAEgvQAKhcADg0QAFhhgSgkQgSgjgSgBg");
	this.shape_32.setTransform(56.652,81.5465,1.2962,1.2962);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D42125").s().p("AgcCeIAUgaIg0AAQBfggAHiPQACgtgHgzIgHgqIAPgGQASAAASAkQASAkgFBhQgDA0gKBcQgEAuhVANIhWADQAngEAbgag");
	this.shape_33.setTransform(59.5769,81.4358,1.2962,1.2962);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").p("ABgDXIk4ktIgFh8IBzCKQCDCRBWAkIBjA/IhqgFg");
	this.shape_34.setTransform(95.15,74.9,1.2961,1.2961,0,0,0,0,-0.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D42125").s().p("AjShYIgFh8IBzCKQCDCRBXAkIBiA/IhqgFIgIAwg");
	this.shape_35.setTransform(94.364,75.6254,1.2961,1.2961);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").p("AB+htQgRgFgcAJQg6ATg8BIIh0B9IBTABQBZgFAfgfIAzgbQAygjADgjQAGgfAAgtQgLgLgXgBg");
	this.shape_36.setTransform(92.9545,33.3273,1.2961,1.2961);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#66171C").s().p("AicBvIB0h9QA8hIA6gTQAcgJARAFQAXABALALQAAAtgGAfQgDAjgyAjIgzAbQgfAfhZAFg");
	this.shape_37.setTransform(93.3596,33.3272,1.2961,1.2961);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").p("AAIhKQgpAEgsAPQhYAegMAzIAnAeQAvAcAmgHQATACAcgIQA4gPAxguQBDg9AMgNQAJgJhLgDQhIgDggAFg");
	this.shape_38.setTransform(37.1934,62.3587,1.2961,1.2961);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#66171C").s().p("AiKA4IgogeQAMgzBZgeQAsgPApgEQAggFBIADQBKADgIAJIhPBKQgyAug4APQgcAIgSgCIgQACQggAAglgXg");
	this.shape_39.setTransform(37.2322,62.3587,1.2961,1.2961);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").p("AgEgpQgOAEgOAIQgbAOADAOIAJAcQAPAbAcgNQAmgHAMgNQAIgIACgMQAGgYgagSQgZgGgPAGg");
	this.shape_40.setTransform(66.9964,51.1953,1.2961,1.2961);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D42125").s().p("AgvAbIgJgcQgDgOAbgOQAOgIAOgEQAPgGAZAGQAaASgGAYQgCAMgIAIQgMANgmAHQgJAEgIAAQgQAAgKgSg");
	this.shape_41.setTransform(66.9964,51.1953,1.2961,1.2961);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").p("AicCnQgKgzgIhAQgPh/ANhCIAKggQARgZAhAfIBWBXQAbAMA0gHIBHAHQBEAQgIAsQAHAYgLAgQgUBBhUAiQgUAMgkALQhGAVhNgIIgZACg");
	this.shape_42.setTransform(90.0907,24.0431,1.2961,1.2961);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D42125").s().p("AiDC3IgZACIAAgSQgKgzgIhAQgPh/ANhCIAKggQARgZAhAfIBWBXQAbAMA0gHIBHAHQBEAQgIAsQAHAYgLAgQgUBBhUAiQgUAMgkALQgyAPg3AAQgVAAgVgCg");
	this.shape_43.setTransform(90.0907,24.0295,1.2961,1.2961);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").p("ACpALQgyhBg5g7Qhyh2gmAhIgEAAQgFACgCALQgIAjATBtIgSAgQgaAlgnAhIgJAOQgKARgEAPQgLAyA5AWQAWATAnAGQBQAMBXhDIB2hxg");
	this.shape_44.setTransform(38.4004,45.6856,1.2961,1.2961);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D42125").s().p("AhYDMQgngGgWgTQg5gWALgyQAEgPAKgRIAJgOQAnghAaglIASggQgThtAIgjQACgLAFgCIAEAAQAmghByB2QA5A7AyBBIAbAZIh2BxQhLA5hEAAQgMAAgMgCg");
	this.shape_45.setTransform(38.2495,45.6856,1.2961,1.2961);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FDEBDD").s().p("AgwBdQgCiqAbh3QAJgmAKgbIAIgUIAeAAQgaBVAUD3QAKB8APBrIhegFIgHAFIAAAAQgIAAAIi9g");
	this.shape_46.setTransform(56.9788,98.9414,1.2962,1.2962);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").p("Aisk1IAxgWQBrgiBsCHQA2BDAiBKIASAAQAUAeCLB4QgKAxh2BRQg7Apg5AfQiBBFiwAGQhXAEg+gLQAIgDAFhVIADhfQAIgHAHAGQAFADAAgCQgGgogMhyQgKhsAjhOQAbg9AwgfQAXgPAcgKg");
	this.shape_47.setTransform(89.2319,95.1414,1.2961,1.2961);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FCDFA7").s().p("AlcFLQAIgDAEhVIAEhfQAIgHAHAGQAFADAAgCQgHgogLhyQgLhsAjhOQAcg9AwgfQAWgPAcgKIAygWQBqgiBsCHQA3BDAhBKIATAAQAUAeCKB4QgJAxh2BRQg7Apg6AfQiABFixAGIgoABQg9AAgvgIg");
	this.shape_48.setTransform(90.1681,95.1414,1.2961,1.2961);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").p("AAzAAQAAAVgPAPQgPAOgVAAQgUAAgPgOQgPgPAAgVQAAgUAPgOQAPgPAUAAQAVAAAPAPQAPAOAAAUg");
	this.shape_49.setTransform(122.3263,117.0018,1.2961,1.2961);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EFCF60").s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgOAUAAQAVAAAPAOQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPg");
	this.shape_50.setTransform(122.3263,117.0018,1.2961,1.2961);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#ED1C24").s().p("ACZEvQgGAAgEgEQgEgEAAgGIgMl9QgBgMgMgBQgLgCgEALIhEDRQgDAJgLAAIgxAAQgKAAgEgKIg5jDQgEgLgMABQgMACAAAMIgLFwQAAAGgEAEQgEAEgGAAIhEAAQgGAAgEgFQgFgEABgGIAcpAQAAgGAEgEQAFgEAFAAIBpAAQALAAACAKIA/DQQACALALAAQAKAAADgKIBAjRQAEgKAKAAIBrAAQAGAAAEAEQAEAEAAAGIAdJAQAAAGgEAEQgEAFgGAAg");
	this.shape_51.setTransform(167.05,126.8,1.5428,1.3146,0,0,0,0,33);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#ED1C24").s().p("Ag5BUIAAinIBzAAIAACng");
	this.shape_52.setTransform(-233.7854,24.0209,1.349,1.349);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#ED1C24").s().p("Ag5BLIAAiVIBzAAIAACVg");
	this.shape_53.setTransform(-233.7854,-10.1425,1.349,1.349);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#ED1C24").s().p("Ag6DFIAAgCIillHQgLgWANgVQANgVAZAAIAbAAQAMAAALAHQAMAHAFALIBNCiQAMAaAbgBQAdAAALgZIACgEIBRifQAFgLAKgGQALgHANAAIAWAAQAZAAANAVQANAVgLAWIinFGIAAADg");
	this.shape_54.setTransform(-63.1027,-7.924,1.3488,1.3488);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#ED1C24").s().p("AgFA0QgVAAgPgPQgQgQAAgVQAAgVAQgPQAPgPAVgBIALAAQAVABAPAPQAQAPAAAVQAAAVgQAQQgPAPgVAAg");
	this.shape_55.setTransform(-63.2038,40.1287,1.3488,1.3488);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#ED1C24").s().p("AivAwIAAhfICEAAIAAAAIDcAAIAABfg");
	this.shape_56.setTransform(-249.771,41.8614,1.349,1.349);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#ED1C24").s().p("AivAwIAAhfIFgAAIAABfg");
	this.shape_57.setTransform(-249.771,-26.7689,1.349,1.349);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#ED1C24").s().p("AivAvIAAhdIFgAAIAABdg");
	this.shape_58.setTransform(-249.771,6.349,1.349,1.349);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#ED1C24").s().p("Ah9EzQgugFgqgNIAAhwIAtANIAuAMIAvAHQAYADAVABQAggBAWgFQAXgFAOgLQAOgJAHgNQAGgNABgSQAAgWgNgPQgMgOgVgNQgXgLgYgJIg3gUQgbgLgbgNQgagMgVgVQgVgSgNgdQgNgdABglQgBgjANghQAOggAbgYQAegYAqgOQAtgOA7AAIAmABIAmAFQATACASAEQAQACARAFIAABpQgOgGgTgFIgkgIIgmgGIgkgBQgcAAgWAFQgTAEgOAJQgOAJgGAMQgGANAAAPQAAATAMANQAOAPAVAKQARAJAdALIA2AVQAYAJAfAPQAdAPATATQAWAUAMAaQANAbAAAlQgBAzgRAkQgUAlggAXQgiAZgsAKQgsAMg2AAQgzAAgqgGg");
	this.shape_59.setTransform(326.7912,84.349,1.349,1.349);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#ED1C24").s().p("ACFEvIghh4IjTAAIgiB4IhxAAICzpdICfAAICzJdgAhUBaICeAAIhOkYg");
	this.shape_60.setTransform(253.7107,84.349,1.349,1.349);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#ED1C24").s().p("ABqEvIAAj7IgWAAQgeAAgUAOQgWAOgMAcIhVDDIiFAAIBgjLQAUgpARgTQATgUAWgFQgbgFgagKQgXgLgTgUQgRgSgKgaQgKgaAAgiQAAguAQggQAPgfAdgVQAdgTApgJQApgJAxAAICvAAIAAJdgAgci7QgcATAAAtQAAAVAIAQQAIAQAPAMQAQALAUAGQAYAFAZAAIAuAAIAAirIgyAAQg4AAgcAUg");
	this.shape_61.setTransform(-135.3085,6.3827,1.349,1.349);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#ED1C24").s().p("ABWEvIhWjDQgKgbgWgPQgVgOgeAAIgWAAIAAD7IhyAAIAApdICxAAQAwAAAqAJQApAJAcATQAeAVAOAfQAPAgAAAuQAAAigJAaQgJAagSASQgSAUgYALQgZAKgcAFQAXAFASAUQARATAUApIBhDLgAhpgkIAvAAQAYAAAXgFQAVgGAPgLQAQgMAIgQQAJgRAAgUQgBgtgcgTQgdgUg3AAIgyAAg");
	this.shape_62.setTransform(-181.5117,6.3827,1.349,1.349);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#ED1C24").s().p("ACLHBIgPrFIhgG6IhHAAIhWm6IgNLFIhhAAIAeuBICAAAIA2D/IAZCQIBRmPICDAAIAeOBg");
	this.shape_63.setTransform(-324.85,43.6,1.349,0.9186,0,0,0,-1.2,41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63,p:{regY:41.2,scaleY:0.9186,y:43.6}},{t:this.shape_62,p:{scaleY:1.349,y:6.3827}},{t:this.shape_61,p:{scaleY:1.349,y:6.3827,skewY:0,x:-135.3085}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{scaleY:1.349,y:6.349}},{t:this.shape_57,p:{scaleY:1.349,y:-26.7689}},{t:this.shape_56,p:{scaleY:1.349,y:41.8614}},{t:this.shape_55,p:{scaleX:1.3488,scaleY:1.3488,x:-63.2038,y:40.1287}},{t:this.shape_54,p:{scaleX:1.3488,scaleY:1.3488,x:-63.1027,y:-7.924}},{t:this.shape_53,p:{scaleY:1.349,x:-233.7854,y:-10.1425}},{t:this.shape_52,p:{scaleY:1.349,x:-233.7854,y:24.0209}},{t:this.shape_51},{t:this.shape_50,p:{rotation:0,x:122.3263,y:117.0018,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_49,p:{rotation:0,x:122.3263,y:117.0018,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_48,p:{rotation:0,x:90.1681,y:95.1414,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_47,p:{rotation:0,x:89.2319,y:95.1414,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_46,p:{scaleX:1.2962,scaleY:1.2962,rotation:0,x:56.9788,y:98.9414}},{t:this.shape_45,p:{rotation:0,x:38.2495,y:45.6856,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_44,p:{rotation:0,x:38.4004,y:45.6856,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_43,p:{rotation:0,x:90.0907,y:24.0295,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_42,p:{rotation:0,x:90.0907,y:24.0431,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_41,p:{rotation:0,x:66.9964,y:51.1953,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_40,p:{rotation:0,x:66.9964,y:51.1953,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_39,p:{rotation:0,x:37.2322,y:62.3587,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_38,p:{rotation:0,x:37.1934,y:62.3587,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_37,p:{rotation:0,x:93.3596,y:33.3272,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_36,p:{rotation:0,x:92.9545,y:33.3273,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_35,p:{rotation:0,x:94.364,y:75.6254,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_34,p:{rotation:0,x:95.15,y:74.9,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_33,p:{scaleX:1.2962,scaleY:1.2962,rotation:0,x:59.5769,y:81.4358}},{t:this.shape_32,p:{scaleX:1.2962,scaleY:1.2962,rotation:0,x:56.652,y:81.5465}}]}).to({state:[{t:this.shape_63,p:{regY:41.1,scaleY:1.4068,y:43.6}},{t:this.shape_62,p:{scaleY:1.349,y:6.3827}},{t:this.shape_61,p:{scaleY:1.349,y:6.3827,skewY:0,x:-135.3085}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{scaleY:0.9026,y:20.258}},{t:this.shape_57,p:{scaleY:0.9026,y:-1.9012}},{t:this.shape_56,p:{scaleY:0.9026,y:44.0195}},{t:this.shape_55,p:{scaleX:1.3488,scaleY:1.3488,x:-63.2038,y:40.1287}},{t:this.shape_54,p:{scaleX:1.3488,scaleY:1.3488,x:-63.1027,y:-7.924}},{t:this.shape_53,p:{scaleY:0.9026,x:-265.8354,y:9.2235}},{t:this.shape_52,p:{scaleY:0.9026,x:-265.8354,y:32.0823}},{t:this.shape_51},{t:this.shape_50,p:{rotation:14.9988,x:108.3961,y:127.9505,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_49,p:{rotation:14.9988,x:108.3961,y:127.9505,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_48,p:{rotation:14.9988,x:82.9907,y:98.5121,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_47,p:{rotation:14.9988,x:82.0864,y:98.2698,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_46,p:{scaleX:1.2963,scaleY:1.2963,rotation:14.9991,x:49.9483,y:93.5967}},{t:this.shape_45,p:{rotation:14.9988,x:45.6397,y:37.3042,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_44,p:{rotation:14.9988,x:45.7854,y:37.3432,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_43,p:{rotation:14.9988,x:101.3197,y:29.8023,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_42,p:{rotation:14.9988,x:101.3162,y:29.8154,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_41,p:{rotation:14.9988,x:71.9815,y:50.0659,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_40,p:{rotation:14.9988,x:71.9815,y:50.0659,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_39,p:{rotation:14.9988,x:40.342,y:53.1461,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_38,p:{rotation:14.9988,x:40.3045,y:53.1361,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_37,p:{rotation:14.9988,x:102.071,y:39.6293,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_36,p:{rotation:14.9988,x:101.6797,y:39.5245,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_35,p:{rotation:14.9988,x:92.0945,y:80.7467,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_34,p:{rotation:14.9988,x:93.05,y:80.25,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_33,p:{scaleX:1.2963,scaleY:1.2963,rotation:14.9991,x:56.9886,y:77.3593}},{t:this.shape_32,p:{scaleX:1.2963,scaleY:1.2963,rotation:14.9991,x:54.1347,y:76.7091}}]},1).to({state:[{t:this.shape_63,p:{regY:41.1,scaleY:0.9056,y:43.5}},{t:this.shape_62,p:{scaleY:1.3327,y:7.0271}},{t:this.shape_61,p:{scaleY:1.3327,y:7.0271,skewY:0,x:-135.3085}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{scaleY:1.9276,y:-11.6337}},{t:this.shape_57,p:{scaleY:1.9276,y:-58.9555}},{t:this.shape_56,p:{scaleY:1.9276,y:39.1095}},{t:this.shape_55,p:{scaleX:1.3489,scaleY:1.3489,x:-63.1906,y:40.1338}},{t:this.shape_54,p:{scaleX:1.3489,scaleY:1.3489,x:-63.0894,y:-7.9211}},{t:this.shape_53,p:{scaleY:1.9276,x:-265.8354,y:-35.1982}},{t:this.shape_52,p:{scaleY:1.9276,x:-265.8354,y:13.6174}},{t:this.shape_51},{t:this.shape_50,p:{rotation:29.999,x:92.1217,y:134.8128,scaleX:1.296,scaleY:1.296}},{t:this.shape_49,p:{rotation:29.999,x:92.1217,y:134.8128,scaleX:1.296,scaleY:1.296}},{t:this.shape_48,p:{rotation:29.999,x:75.2017,y:99.8028,scaleX:1.296,scaleY:1.296}},{t:this.shape_47,p:{rotation:29.999,x:74.3909,y:99.3348,scaleX:1.296,scaleY:1.296}},{t:this.shape_46,p:{scaleX:1.2963,scaleY:1.2963,rotation:29.9993,x:44.5581,y:86.5053}},{t:this.shape_45,p:{rotation:29.999,x:54.9659,y:31.0151,scaleX:1.296,scaleY:1.296}},{t:this.shape_44,p:{rotation:29.999,x:55.0966,y:31.0905,scaleX:1.296,scaleY:1.296}},{t:this.shape_43,p:{rotation:29.999,x:110.6889,y:38.1799,scaleX:1.296,scaleY:1.296}},{t:this.shape_42,p:{rotation:29.999,x:110.6821,y:38.1916,scaleX:1.296,scaleY:1.296}},{t:this.shape_41,p:{rotation:29.999,x:77.1065,y:50.1593,scaleX:1.296,scaleY:1.296}},{t:this.shape_40,p:{rotation:29.999,x:77.1065,y:50.1593,scaleX:1.296,scaleY:1.296}},{t:this.shape_39,p:{rotation:29.999,x:45.7487,y:44.9457,scaleX:1.296,scaleY:1.296}},{t:this.shape_38,p:{rotation:29.999,x:45.7151,y:44.9263,scaleX:1.296,scaleY:1.296}},{t:this.shape_37,p:{rotation:29.999,x:108.8712,y:47.8662,scaleX:1.296,scaleY:1.296}},{t:this.shape_36,p:{rotation:29.999,x:108.5203,y:47.6638,scaleX:1.296,scaleY:1.296}},{t:this.shape_35,p:{rotation:29.999,x:88.593,y:84.9995,scaleX:1.296,scaleY:1.296}},{t:this.shape_34,p:{rotation:29.999,x:89.65,y:84.8,scaleX:1.296,scaleY:1.296}},{t:this.shape_33,p:{scaleX:1.2963,scaleY:1.2963,rotation:29.9993,x:55.5611,y:72.6434}},{t:this.shape_32,p:{scaleX:1.2963,scaleY:1.2963,rotation:29.9993,x:52.9726,y:71.2768}}]},1).to({state:[{t:this.shape_63,p:{regY:41.1,scaleY:0.9179,y:43.55}},{t:this.shape_62,p:{scaleY:1.7951,y:-7.083}},{t:this.shape_61,p:{scaleY:1.7951,y:-7.083,skewY:180,x:-120.2915}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{scaleY:1.382,y:5.379}},{t:this.shape_57,p:{scaleY:1.382,y:-28.5496}},{t:this.shape_56,p:{scaleY:1.382,y:41.7607}},{t:this.shape_55,p:{scaleX:1.3488,scaleY:1.3488,x:-63.2038,y:40.1287}},{t:this.shape_54,p:{scaleX:1.3488,scaleY:1.3488,x:-63.1027,y:-7.924}},{t:this.shape_53,p:{scaleY:1.382,x:-265.8354,y:-11.5162}},{t:this.shape_52,p:{scaleY:1.382,x:-265.8354,y:23.4835}},{t:this.shape_51},{t:this.shape_50,p:{rotation:14.9988,x:108.3961,y:127.9505,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_49,p:{rotation:14.9988,x:108.3961,y:127.9505,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_48,p:{rotation:14.9988,x:82.9907,y:98.5121,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_47,p:{rotation:14.9988,x:82.0864,y:98.2698,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_46,p:{scaleX:1.2963,scaleY:1.2963,rotation:14.9991,x:49.9483,y:93.5967}},{t:this.shape_45,p:{rotation:14.9988,x:45.6397,y:37.3042,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_44,p:{rotation:14.9988,x:45.7854,y:37.3432,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_43,p:{rotation:14.9988,x:101.3197,y:29.8023,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_42,p:{rotation:14.9988,x:101.3162,y:29.8154,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_41,p:{rotation:14.9988,x:71.9815,y:50.0659,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_40,p:{rotation:14.9988,x:71.9815,y:50.0659,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_39,p:{rotation:14.9988,x:40.342,y:53.1461,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_38,p:{rotation:14.9988,x:40.3045,y:53.1361,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_37,p:{rotation:14.9988,x:102.071,y:39.6293,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_36,p:{rotation:14.9988,x:101.6797,y:39.5245,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_35,p:{rotation:14.9988,x:92.0945,y:80.7467,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_34,p:{rotation:14.9988,x:93.05,y:80.25,scaleX:1.2961,scaleY:1.2961}},{t:this.shape_33,p:{scaleX:1.2963,scaleY:1.2963,rotation:14.9991,x:56.9886,y:77.3593}},{t:this.shape_32,p:{scaleX:1.2963,scaleY:1.2963,rotation:14.9991,x:54.1347,y:76.7091}}]},1).to({state:[{t:this.shape_63,p:{regY:41.2,scaleY:0.9186,y:43.6}},{t:this.shape_62,p:{scaleY:1.349,y:6.3827}},{t:this.shape_61,p:{scaleY:1.349,y:6.3827,skewY:180,x:-117.2915}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{scaleY:1.349,y:6.349}},{t:this.shape_57,p:{scaleY:1.349,y:-26.7689}},{t:this.shape_56,p:{scaleY:1.349,y:41.8614}},{t:this.shape_53,p:{scaleY:1.349,x:-265.7854,y:-10.1425}},{t:this.shape_52,p:{scaleY:1.349,x:-265.7854,y:24.0209}},{t:this.shape_51},{t:this.shape_50,p:{rotation:0,x:122.3198,y:116.9949,scaleX:1.296,scaleY:1.296}},{t:this.shape_49,p:{rotation:0,x:122.3198,y:116.9949,scaleX:1.296,scaleY:1.296}},{t:this.shape_48,p:{rotation:0,x:90.1635,y:95.1358,scaleX:1.296,scaleY:1.296}},{t:this.shape_47,p:{rotation:0,x:89.2273,y:95.1358,scaleX:1.296,scaleY:1.296}},{t:this.shape_46,p:{scaleX:1.2962,scaleY:1.2962,rotation:0,x:56.9772,y:98.9379}},{t:this.shape_45,p:{rotation:0,x:38.248,y:45.6828,scaleX:1.296,scaleY:1.296}},{t:this.shape_44,p:{rotation:0,x:38.3988,y:45.6828,scaleX:1.296,scaleY:1.296}},{t:this.shape_43,p:{rotation:0,x:90.0861,y:24.0281,scaleX:1.296,scaleY:1.296}},{t:this.shape_42,p:{rotation:0,x:90.0861,y:24.0416,scaleX:1.296,scaleY:1.296}},{t:this.shape_41,p:{rotation:0,x:66.9931,y:51.1922,scaleX:1.296,scaleY:1.296}},{t:this.shape_40,p:{rotation:0,x:66.9931,y:51.1922,scaleX:1.296,scaleY:1.296}},{t:this.shape_39,p:{rotation:0,x:37.2307,y:62.355,scaleX:1.296,scaleY:1.296}},{t:this.shape_38,p:{rotation:0,x:37.1919,y:62.355,scaleX:1.296,scaleY:1.296}},{t:this.shape_37,p:{rotation:0,x:93.3548,y:33.3252,scaleX:1.296,scaleY:1.296}},{t:this.shape_36,p:{rotation:0,x:92.9497,y:33.3253,scaleX:1.296,scaleY:1.296}},{t:this.shape_35,p:{rotation:0,x:94.3592,y:75.6209,scaleX:1.296,scaleY:1.296}},{t:this.shape_34,p:{rotation:0,x:95.15,y:74.9,scaleX:1.296,scaleY:1.296}},{t:this.shape_33,p:{scaleX:1.2962,scaleY:1.2962,rotation:0,x:59.5752,y:81.4329}},{t:this.shape_32,p:{scaleX:1.2962,scaleY:1.2962,rotation:0,x:56.6504,y:81.5436}}]},1).to({state:[]},1).wait(5));

	// 圖層_1
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("ABpEuIAAj6IgVAAQgdAAgWAOQgWAOgLAcIhVDCIiGAAIBhjKQATgnASgVQATgUAWgFQgcgFgZgKQgZgMgRgTQgRgRgKgbQgKgaAAghQAAgwAQgeQAPghAcgUQAegUAogIQAngIAzgBICxAAIAAJcgAgdi7QgcATAAAtQAAAVAIARQAKAQAPALQAPALAUAGQAUAFAcAAIAuAAIAAiqIgxAAQg4AAgdATg");
	this.shape_64.setTransform(-135.6289,6.4752,1.3635,1.3496);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AAjBVQgcAAgTgFQgVgGgPgLQgPgKgKgRQgIgQAAgVQAAgtAcgTQAdgTA4AAIAxAAIAACpg");
	this.shape_65.setTransform(-132.3564,-10.0236,1.3635,1.3496);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("ABWEuIhWjCQgKgbgWgPQgWgOgdAAIgVAAIAAD6IhzAAIAApcICxAAQA0ABAmAIQApAJAcATQAcAUAQAhQAQAgAAAuQAAAggKAbQgKAbgRARQgRASgZANQgZAKgcAFQAWAFATAUQARAUAUAoIBhDKg");
	this.shape_66.setTransform(-181.1706,6.4752,1.3635,1.3496);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]}).to({state:[]},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.6,-77.3,722,220.8);


// stage content:
(lib.聖誕字樣 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {p4:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,9];
	// timeline functions:
	this.frame_0 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		
		
		/* 滑鼠按鍵事件
		您可將函數增加至您自訂的程式碼，按一下特定元件實體，就會執行該函數。
		
		指示:
		1. 在下方含有「// 啟動您的自訂程式碼」的程式碼之後，將自訂的程式碼加入新行。
		按下元件實體時，就會執行程式碼。
		*/
		
		this.play_btn.addEventListener("click", playmv.bind(this));
		
		function playmv()
		{
			this.play();
			this.p2.gotoAndPlay();
			
		}
		
		this.stop_btn.addEventListener("click", stopmv.bind(this));
		
		function stopmv()
		{
			this.stop();
			this.p2.stop();
			
		}
	}
	this.frame_9 = function() {
		this.gotoAndPlay("p4");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// 隱形按鈕
	this.stop_btn = new lib.隱形按鈕();
	this.stop_btn.name = "stop_btn";
	this.stop_btn.setTransform(493.05,503.05,3.6425,3.5699);
	new cjs.ButtonHelper(this.stop_btn, 0, 1, 2, false, new lib.隱形按鈕(), 3);

	this.play_btn = new lib.隱形按鈕();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(317.15,501.35,3.4399,3.5699);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.隱形按鈕(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.play_btn},{t:this.stop_btn}]}).wait(10));

	// 按鈕
	this.instance = new lib.暫停();
	this.instance.setTransform(446.8,456.75,0.5891,0.5892,0,0,0,-77.9,-78);

	this.play_btn_1 = new lib.開始();
	this.play_btn_1.name = "play_btn_1";
	this.play_btn_1.setTransform(317.55,502.75,0.5891,0.5891,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.play_btn_1},{t:this.instance}]}).wait(10));

	// 圖層_1
	this.instance_1 = new lib.補間動畫1("synched",0);
	this.instance_1.setTransform(-109.9,96.75,1,1,-14.9992);

	this.instance_2 = new lib.補間動畫2("synched",0);
	this.instance_2.setTransform(879.05,265.9,1,1,44.9988,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,regX:0.1,regY:-0.1,rotation:44.9988,guide:{path:[-109.8,96,-99.3,88.9,-83.3,80.8,-51.3,64.6,-23.8,59.5,14.7,52.3,38.7,68.1,68.7,88,74.2,143,78.2,137.9,84.4,131.9,96.7,119.9,107.7,115.1,123,108.4,133.3,117.2,146.1,128.3,150.2,163,154.2,150.8,160.2,135.5,172.2,105,182.2,89.5,196.2,67.9,204.2,79.5,214.2,94,214.1,160,216.9,153.6,221.3,145.6,230.2,129.6,238.5,121.4,250.3,109.9,259.3,115.7,270.6,123,277.1,157,283.5,143.2,292.7,126.3,311.2,92.4,325.8,76.9,346.2,55,355.8,72.8,367.9,95.1,362.4,178.2,365.3,174.2,368.2,170.2,375.5,160.4,383.2,151.4,407.6,122.7,426.9,112.9,453.9,99.2,466.4,125.5,482.1,158.4,474.2,252.1,476.3,249.1,478.4,246.1,483.7,238.8,489.5,232.1,507.8,211,522.9,205.1,544.1,196.7,556,220,570.9,249.1,570.2,326.1,577.8,309.7,585.5,293.2,603.9,256.3,619.2,235.8,629.9,221.5,638.4,216.4,646.8,211.3,652.9,215.5,668.2,226,668.2,294.1,674.5,286,680.8,277.9,696,260,709.8,251,729.1,238.4,742.6,245.6,759.4,254.6,766.2,294.1,767.8,284.9,771.5,272.9,778.9,249.1,789.6,235.4,804.7,216.2,824.3,220.1,848.8,225,879,265.9], orient:'fixed'}},9).wait(1));

	// 圖層_1
	this.p2 = new lib.文字();
	this.p2.name = "p2";
	this.p2.setTransform(400,320.3,1,1,0,0,0,0,52.1);

	this.timeline.addTween(cjs.Tween.get(this.p2).wait(10));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(216.9,320.3,743.7,230.09999999999997);
// library properties:
lib.properties = {
	id: '6CFE0FFD9C4BBF44876FC90A4AB2F37B',
	width: 800,
	height: 600,
	fps: 6,
	color: "#33CC33",
	opacity: 1.00,
	manifest: [],
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
an.compositions['6CFE0FFD9C4BBF44876FC90A4AB2F37B'] = {
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
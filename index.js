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


(lib.黃色氣球元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgXA8QghgQgEgjQgEgiAdgZQAdgZAdAMIgDATQAPABAMANQALAMADARQACAQgHAQQgHAQgNAKQgOALgQAAQgNAAgQgIg");
	this.shape.setTransform(5.6544,12.1146);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiwEnQATg0A+heQBChjAehyQAMgvANhGIAWiEQAIguAVgQQA3goAhB2QAaBegEA/QgJCJhKCJQhEB/hmBeQgdAZgVAEQgMACgKAAQhHAAAhhbg");
	this.shape_1.setTransform(34.2374,-35.4459);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4A4238").ss(2).p("AArlyQg2B8gIAYQgdBVAIBLQAEAsATA+QAdBkACAGQAhCIgwBP");
	this.shape_2.setTransform(-18.495,81.5973);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4A4238").ss(1.6).p("AAyA2IhggFIA+hdg");
	this.shape_3.setTransform(-16.2,39.6,1,1,0,0,0,-0.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4A4238").ss(1.6).p("ApGBcQgXi7AdiMQBClDDciBQDbiBEmBsIBYAuQBlBABDBeQDZErjEHeQhKCyiYCKQijCTirAUQjhAbiTjqQh0i5gikQg");
	this.shape_4.setTransform(2.018,-41.4507);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCFF4B").s().p("AgxAuIBAhgIAjBlg");
	this.shape_5.setTransform(-15.525,40.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCFF4B").s().p("Am8IzQh4i+gjkYQgYi9AdiSQBElMDiiEQDiiEEvBvIBbAvQBoBDBFBgQDgE0jJHqQhMC3icCNQioCXiwAUQgXADgXAAQjJAAiJjYg");
	this.shape_6.setTransform(-0.2172,-40.2711);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.黃色氣球元件, new cjs.Rectangle(-61.3,-118.3,123.69999999999999,237.39999999999998), null);


(lib.黃色圓形2元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#4A4238").p("AB2AAQAAA2gjAlQgiAmgxAAQgvAAgjgmQgjgmAAg1QAAg0AjgmQAjgmAvAAQAxAAAiAmQAjAlAAA1g");
	this.shape.setTransform(-1.5,0.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFF4B").s().p("AhSBbQgjglABg2QgBg1AjglQAiglAwAAQAxAAAiAlQAjAlAAA1QAAA2gjAlQgiAmgxgBQgwABgigmg");
	this.shape_1.setTransform(1.5,-0.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.黃色圓形2元件, new cjs.Rectangle(-14.2,-13.7,27.5,28.4), null);


(lib.黃色圓形1元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#4A4238").p("AB2AAQAAA1gjAmQgjAmgwAAQgwAAgigmQgjgmAAg1QAAg0AjgmQAiglAwAAQAwAAAjAlQAjAmAAA0g");
	this.shape.setTransform(-1.45,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFF4B").s().p("AhSBbQgigmAAg1QAAg0AigmQAjgmAvAAQAwAAAjAmQAiAlABA1QgBA2giAlQgjAmgwgBQgvABgjgmg");
	this.shape_1.setTransform(1.5,-0.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.黃色圓形1元件, new cjs.Rectangle(-14.2,-13.7,27.5,28.5), null);


(lib.電腦元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#4A4238").ss(2,0,0,4).p("ABShOIu9AAIM5CdIO6AAQACAAABAAQAAgBgBAAg");
	this.shape.setTransform(53.2857,-111.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFF4B").s().p("AhBBPIs6idIO9AAIM4CcIABABIgDAAg");
	this.shape_1.setTransform(54.8063,-111.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4A4238").ss(2,0,0,4).p("AHfjQIgCDQQgRBZiHA8QiJA8i7AAQi7AAiLg8QiJg9gRhYIAAjQg");
	this.shape_2.setTransform(96.1548,-82.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCFF4B").s().p("AlECVQiKg9gQhYIAAjQIO9AAIgBDQQgRBZiIA8QiJA8i7AAQi7AAiKg8g");
	this.shape_3.setTransform(96.15,-82.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4A4238").ss(2,0,0,4).p("AnhAAIPCAA");
	this.shape_4.setTransform(-95.75,-103.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#4A4238").ss(2,0,0,4).p("AgThOIq1AAQg9AAgTAOQgUAOAwAKIJlB3IAEAAIOqAAQAFAAACgBQACgBgEgBIsriag");
	this.shape_5.setTransform(-127.3883,-111.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCFF4B").s().p("AiTBPIgEAAIplh3QgwgKAUgOQATgOA9AAIK1AAIAEAAIMrCaQABAAABAAQAAAAABABQAAAAAAAAQAAABgBAAQgCABgFAAg");
	this.shape_6.setTransform(-127.3883,-111.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#4A4238").ss(2,0,0,4).p("AA4hOIuuAAIMqCdIPDAAg");
	this.shape_7.setTransform(-39.9248,-111.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCFF4B").s().p("AhMBPIsqidIOuAAIM/Cdg");
	this.shape_8.setTransform(-39.925,-111.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#4A4238").ss(2,0,0,4).p("AAahOIuKAAIM/CdIO/AAQACAAgBAAIsQiVQgtgIg4AAg");
	this.shape_9.setTransform(149.5244,-111.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCFF4B").s().p("AhABPIs/idIOKAAQA4AAAtAIIMQCVQABAAgCAAg");
	this.shape_10.setTransform(151.045,-111.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#4A4238").ss(2,0,0,4).p("AHZjQIgCDQQgQBZiKA9QiMA+i5gDQi8gDiCg7QiCg7gQhYIAAjQg");
	this.shape_11.setTransform(-94.9202,-82.7181);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCFF4B").s().p("AgIDRQi8gDiCg7QiCg7gQhYIAAjQIOxAAIgCDQQgQBZiKA9QiFA7iwAAIgQAAg");
	this.shape_12.setTransform(-94.925,-82.7181);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#4A4238").ss(2,0,0,4).p("AHijQIgDDQQgQBYiKA9QiKA8i7AAQi8AAiKg8QiKg9gRhYIAAjQg");
	this.shape_13.setTransform(0.581,-82.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FCFF4B").s().p("AlGCVQiKg9gRhYIAAjQIPDAAIgDDQQgQBYiKA9QiKA8i7AAQi8AAiKg8g");
	this.shape_14.setTransform(0.575,-82.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#4A4238").ss(2,0,0,4).p("AHhjQIgDDQQgQBZiJA8QiJA8i8AAQi7AAiLg8QiJg9gRhYIAAjQg");
	this.shape_15.setTransform(192.581,-82.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FCFF4B").s().p("AlGCVQiJg9gRhYIAAjQIPBAAIgDDQQgQBZiJA8QiJA8i8AAQi7AAiLg8g");
	this.shape_16.setTransform(192.575,-82.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FCFF4B").s().p("AhBBPIs6idIO9AAIM4CcQABABABAAQAAAAAAAAQgBAAAAAAQgBAAgCAAg");
	this.shape_17.setTransform(51.33,-116.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FCFF4B").s().p("AlECVQiKg8gQhZIAAjQIO9AAIgCDQQgQBZiIA8QiIA9i8gBQi7ABiKg9g");
	this.shape_18.setTransform(92.65,-87.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FCFF4B").s().p("AiXBPIplh3QgwgJAUgPQATgOA9AAIK1AAIAEAAIMrCaQABAAABABQAAAAABAAQAAABAAAAQAAAAgBAAQgBABgGAAg");
	this.shape_19.setTransform(-130.8883,-116.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FCFF4B").s().p("AhMBPIsqidIOuAAIM/Cdg");
	this.shape_20.setTransform(-43.425,-116.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FCFF4B").s().p("AhABPIs/idIOKAAQA4AAAtAIIMQCVg");
	this.shape_21.setTransform(147.525,-116.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FCFF4B").s().p("AgIDRQi8gDiCg7QiCg7gQhYIAAjRIOxAAIgCDRQgQBZiKA9QiFA8iwAAIgQgBg");
	this.shape_22.setTransform(-98.425,-87.1431);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FCFF4B").s().p("AlGCVQiKg8gRhZIAAjQIPDAAIgDDQQgQBZiKA8QiKA9i7gBQi8ABiKg9g");
	this.shape_23.setTransform(-2.925,-87.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FCFF4B").s().p("AlGCVQiJg8gRhZIAAjQIPBAAIgDDQQgQBZiJA8QiJA9i8gBQi7ABiLg9g");
	this.shape_24.setTransform(189.075,-87.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#545775").ss(2).p("EghogA+MBDRAAAQANAAAFAMQAFAMgKAJIhoBcMhAfAAAIhlhdQgJgIAFgMQAFgMANAAg");
	this.shape_25.setTransform(-23.317,126.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FCFF4B").s().p("EggRAA/IhlhdQgJgIAFgMQAFgMANAAMBDRAAAQANAAAFAMQAFAMgKAJIhoBcg");
	this.shape_26.setTransform(-23.317,126.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#545775").ss(2).p("Ac0zSMg5nAAAQgfAAgWAYQgWAZAAAhMAAAAlTMA79AAAMAAAglTQAAghgWgZQgWgYgfAAgAdKSZMg6TAAAMAAAgkZQAAgKAGgHQAHgHAJAAMA5nAAAQAJAAAHAHQAGAHAAAKg");
	this.shape_27.setTransform(-23.275,-8.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FCFF4B").s().p("A9+TTMAAAglTQAAghAWgZQAWgYAfAAMA5nAAAQAfAAAWAYQAWAZAAAhMAAAAlTgA9DyRQgGAHAAAKMAAAAkZMA6TAAAMAAAgkZQAAgKgGgHQgHgHgJAAMg5nAAAQgJAAgHAHg");
	this.shape_28.setTransform(-23.275,-8.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#4A4238").p("AAkAMIAAgXIghAAIAAgKIgiAVIAhAVIAAgKg");
	this.shape_29.setTransform(-202.1476,-110.4931);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#4A4238").p("AgjgLIAAAXIAhAAIAAAKIAigWIghgUIAAAKg");
	this.shape_30.setTransform(-191.5524,-110.6569);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#4A4238").p("AASgLIgjAW");
	this.shape_31.setTransform(-182.4,-110.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#4A4238").p("AgOgLIAdAX");
	this.shape_32.setTransform(-182.675,-110.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4A4238").s().p("AkqAsQgJABgHgHQgHgHABgJIAAgrQgBgJAHgHQAHgGAJgBIJUAAQAKABAGAGQAIAHgBAJIAAArQABAJgIAHQgGAHgKgBg");
	this.shape_33.setTransform(44.25,-85.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4A4238").s().p("AprAsQgKABgGgHQgHgHAAgJIAAgrQAAgJAHgHQAGgGAKgBITXAAQAKABAGAGQAHAHAAAJIAAArQAAAJgHAHQgGAHgKgBg");
	this.shape_34.setTransform(-61.625,-85.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4A4238").s().p("Ao2AKQgFAAAAgFIAAgJQAAgFAFAAIRtAAQAFAAAAAFIAAAJQAAAFgFAAg");
	this.shape_35.setTransform(-77.575,-59.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4A4238").s().p("ApVAKQgFAAAAgFIAAgJQAAgFAFAAISrAAQAFAAAAAFIAAAJQAAAFgFAAg");
	this.shape_36.setTransform(-74.5,-63.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4A4238").s().p("ApVAKQgFAAAAgFIAAgJQAAgFAFAAISrAAQAFAAAAAFIAAAJQAAAFgFAAg");
	this.shape_37.setTransform(-74.5,-66.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4A4238").s().p("ApVAKQgFAAAAgGIAAgIQAAgFAFAAISrAAQAFAAAAAFIAAAIQAAAGgFAAg");
	this.shape_38.setTransform(-74.5,-69.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#4A4238").p("Ac9EzMg55AAAIAAplMA55AAAg");
	this.shape_39.setTransform(-21.925,-67.25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#4A4238").p("AIQi7IwfF3");
	this.shape_40.setTransform(-18.475,85.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#4A4238").p("AoHi2IQPFt");
	this.shape_41.setTransform(-28.95,85.525);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4A4238").s().p("A88AUIAAgnMA55AAAIAAAng");
	this.shape_42.setTransform(-21.925,106.725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#4A4238").p("AJGC3IyLAAIAAltISLAAg");
	this.shape_43.setTransform(-23.875,85.525);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4A4238").s().p("AiXAIQgDAAAAgEIAAgHQAAgEADAAIEuAAQAFAAgBAEIAAAHQABAEgFAAg");
	this.shape_44.setTransform(-150.45,45.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4A4238").s().p("AjWAIQgDAAAAgEIAAgHQAAgEADAAIGsAAQAFAAgBAEIAAAHQABAEgFAAg");
	this.shape_45.setTransform(-144.15,42.975);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4A4238").s().p("AjWAIQgDAAAAgEIAAgHQAAgEADAAIGsAAQAFAAgBAEIAAAHQABAEgFAAg");
	this.shape_46.setTransform(-144.15,40.075);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4A4238").s().p("AjWAIQgDAAAAgEIAAgHQAAgEADAAIGsAAQAFAAgBAEIAAAHQABAEgFAAg");
	this.shape_47.setTransform(-144.15,37.15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4A4238").s().p("AhrBCQgtgbAAgnQAAglAtgcQAtgbA+AAQA/AAAtAbQAtAcAAAlQAAAngtAbQgtAbg/AAQg+AAgtgbg");
	this.shape_48.setTransform(-184.775,41.85);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4A4238").s().p("AhxAIQgEAAAAgEIAAgHQAAgEAEAAIDjAAQAEAAAAAEIAAAHQAAAEgEAAg");
	this.shape_49.setTransform(-66.775,45.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4A4238").s().p("AjVAIQgFAAABgEIAAgHQgBgEAFAAIGrAAQAFAAgBAEIAAAHQABAEgFAAg");
	this.shape_50.setTransform(-56.75,42.975);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4A4238").s().p("AjVAIQgFAAABgEIAAgHQgBgEAFAAIGrAAQAFAAgBAEIAAAHQABAEgFAAg");
	this.shape_51.setTransform(-56.75,40.075);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4A4238").s().p("AjVAIQgFAAABgEIAAgHQgBgEAFAAIGrAAQAFAAgBAEIAAAHQABAEgFAAg");
	this.shape_52.setTransform(-56.75,37.15);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4A4238").s().p("AhrBCQgtgbAAgnQAAglAtgcQAtgbA+AAQBAAAAsAbQAtAbAAAmQAAAngtAbQgsAbhAAAQg+AAgtgbg");
	this.shape_53.setTransform(-97.375,41.85);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4A4238").s().p("AiXAIQgDAAgBgEIAAgHQABgEADAAIEuAAQAFAAAAAEIAAAHQAAAEgFAAg");
	this.shape_54.setTransform(-121.35,96.65);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4A4238").s().p("AilAIQgEAAAAgEIAAgHQAAgEAEAAIFLAAQAEAAAAAEIAAAHQAAAEgEAAg");
	this.shape_55.setTransform(-119.9,93.325);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4A4238").s().p("AilAIQgEAAAAgEIAAgHQAAgEAEAAIFLAAQAEAAAAAEIAAAHQAAAEgEAAg");
	this.shape_56.setTransform(-119.9,90.225);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4A4238").s().p("AiXAIQgDAAgBgEIAAgHQABgEADAAIEuAAQAFAAAAAEIAAAHQAAAEgFAAg");
	this.shape_57.setTransform(-121.35,81.625);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4A4238").s().p("AiXAIQgDAAgBgEIAAgHQABgEADAAIEuAAQAFAAAAAEIAAAHQAAAEgFAAg");
	this.shape_58.setTransform(-121.35,78.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#4A4238").s().p("AilAIQgEAAAAgEIAAgHQAAgEAEAAIFLAAQAEAAAAAEIAAAHQAAAEgEAAg");
	this.shape_59.setTransform(-119.9,75.225);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4A4238").s().p("AiXAIQgEAAABgEIAAgHQgBgEAEAAIEuAAQAFAAAAAEIAAAHQAAAEgFAAg");
	this.shape_60.setTransform(63.6,96.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4A4238").s().p("AilAIQgEAAAAgEIAAgHQAAgEAEAAIFLAAQAEAAAAAEIAAAHQAAAEgEAAg");
	this.shape_61.setTransform(65.05,93.575);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4A4238").s().p("AilAIQgEAAAAgEIAAgHQAAgEAEAAIFLAAQAEAAAAAEIAAAHQAAAEgEAAg");
	this.shape_62.setTransform(65.05,90.475);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4A4238").s().p("AiXAIQgEAAABgEIAAgHQgBgEAEAAIEuAAQAFAAAAAEIAAAHQAAAEgFAAg");
	this.shape_63.setTransform(63.6,81.875);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4A4238").s().p("AiXAIQgEAAABgEIAAgHQgBgEAEAAIEuAAQAFAAAAAEIAAAHQAAAEgFAAg");
	this.shape_64.setTransform(63.6,78.55);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4A4238").s().p("AilAIQgEAAAAgEIAAgHQAAgEAEAAIFLAAQAEAAAAAEIAAAHQAAAEgEAAg");
	this.shape_65.setTransform(65.05,75.45);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4A4238").s().p("AiWAIQgEAAAAgEIAAgHQAAgEAEAAIEtAAQAEAAAAAEIAAAHQAAAEgEAAg");
	this.shape_66.setTransform(27.675,45.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4A4238").s().p("AjVAIQgEAAAAgEIAAgHQAAgEAEAAIGrAAQAEAAAAAEIAAAHQAAAEgEAAg");
	this.shape_67.setTransform(33.975,42.975);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#4A4238").s().p("AjVAIQgEAAAAgEIAAgHQAAgEAEAAIGrAAQAEAAAAAEIAAAHQAAAEgEAAg");
	this.shape_68.setTransform(33.975,40.075);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#4A4238").s().p("AjVAIQgEAAAAgEIAAgHQAAgEAEAAIGrAAQAEAAAAAEIAAAHQAAAEgEAAg");
	this.shape_69.setTransform(33.975,37.15);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#4A4238").s().p("AhrBCQgtgbAAgnQAAglAtgcQAtgbA+AAQA/AAAtAbQAtAcAAAlQAAAngtAbQgtAbg/AAQg+AAgtgbg");
	this.shape_70.setTransform(-6.625,41.85);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#4A4238").s().p("AiWAIQgFAAABgEIAAgHQgBgEAFAAIEuAAQADAAAAAEIAAAHQAAAEgDAAg");
	this.shape_71.setTransform(121.7,45.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#4A4238").s().p("AjVAIQgFAAABgEIAAgHQgBgEAFAAIGsAAQADAAAAAEIAAAHQAAAEgDAAg");
	this.shape_72.setTransform(128,42.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#4A4238").s().p("AjVAIQgFAAABgEIAAgHQgBgEAFAAIGsAAQADAAAAAEIAAAHQAAAEgDAAg");
	this.shape_73.setTransform(128,40.075);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#4A4238").s().p("AjVAIQgFAAABgEIAAgHQgBgEAFAAIGsAAQADAAAAAEIAAAHQAAAEgDAAg");
	this.shape_74.setTransform(128,37.15);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#4A4238").s().p("AhrBCQgtgbAAgnQAAglAtgcQAtgbA+AAQBAAAAsAbQAtAcAAAlQAAAngtAbQgsAbhAAAQg+AAgtgbg");
	this.shape_75.setTransform(87.4,41.85);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#4A4238").p("A88CZMA55AAAIAAkxMg55AAAg");
	this.shape_76.setTransform(-21.925,43.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#4A4238").p("Ap3DyITwnj");
	this.shape_77.setTransform(-73.15,-4.125);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#4A4238").p("Ap3jxITwHj");
	this.shape_78.setTransform(-73.15,-4.125);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#4A4238").s().p("AjYAKQgFAAAAgFIAAgJQAAgFAFAAIGxAAQAFAAAAAFIAAAJQAAAFgFAAg");
	this.shape_79.setTransform(34.325,14.175);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4A4238").s().p("AlEAKQgEAAAAgFIAAgJQAAgFAEAAIKIAAQAGAAAAAFIAAAJQAAAFgGAAg");
	this.shape_80.setTransform(45.05,10.925);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#4A4238").s().p("AlEAKQgEAAAAgFIAAgJQAAgFAEAAIKIAAQAGAAAAAFIAAAJQAAAFgGAAg");
	this.shape_81.setTransform(45.05,8.075);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4A4238").s().p("AjYAKQgFAAAAgGIAAgIQAAgFAFAAIGxAAQAFAAAAAFIAAAIQAAAGgFAAg");
	this.shape_82.setTransform(34.325,-2.725);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4A4238").s().p("AlEAKQgEAAAAgFIAAgJQAAgFAEAAIKIAAQAGAAAAAFIAAAJQAAAFgGAAg");
	this.shape_83.setTransform(45.05,-6.025);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#4A4238").s().p("AlEAKQgEAAAAgFIAAgIQAAgGAEAAIKIAAQAGAAAAAGIAAAIQAAAFgGAAg");
	this.shape_84.setTransform(45.05,-8.875);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#4A4238").s().p("AjYAKQgFAAAAgFIAAgJQAAgFAFAAIGxAAQAFAAAAAFIAAAJQAAAFgFAAg");
	this.shape_85.setTransform(34.325,-17.475);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#4A4238").s().p("AlEAKQgEAAAAgFIAAgJQAAgFAEAAIKIAAQAGAAAAAFIAAAJQAAAFgGAAg");
	this.shape_86.setTransform(45.05,-20.725);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4A4238").s().p("AlEAKQgEAAAAgFIAAgJQAAgFAEAAIKIAAQAGAAAAAFIAAAJQAAAFgGAAg");
	this.shape_87.setTransform(45.05,-23.575);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#4A4238").p("AJ5DyIzwAAIAAnjITwAAg");
	this.shape_88.setTransform(-73.15,-4.125);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#4A4238").s().p("AluArIAAhVILdAAIAABVg");
	this.shape_89.setTransform(48.8,-48.825);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#4A4238").p("AFvArIrdAAIAAhVILdAAg");
	this.shape_90.setTransform(48.8,-59.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#4A4238").p("AFvArIrdAAIAAhVILdAAg");
	this.shape_91.setTransform(48.8,-69.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#4A4238").s().p("A88AhIAAhBMA55AAAIAABBg");
	this.shape_92.setTransform(-21.925,-101.225);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#4A4238").p("AA3AXIhtAAQgFAAgEgEQgDgDAAgFIAAgVQAAgFADgDQAEgEAFAAIBtAAQAFAAAEAEQADADAAAFIAAAVQAAAFgDADQgEAEgFAAg");
	this.shape_93.setTransform(152.675,-109.55);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#4A4238").p("AYIAOMgwPAAAIAAgbMAwPAAAg");
	this.shape_94.setTransform(-14.2,-109.45);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#4A4238").p("Ac9g/Mg55AAAIAAB/MA55AAAg");
	this.shape_95.setTransform(-21.925,-110.875);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#4A4238").p("Ac9RqMg55AAAMAAAgjTMA55AAAg");
	this.shape_96.setTransform(-21.925,-4.25);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("A9VTEQgJAAgHgGQgGgHAAgJMAAAgk/QAAgVAOgPQAPgOAVAAMA5qAAAQAYAAASARQARARAAAZMAAAAk2QAAAJgGAHQgHAGgJAAg");
	this.shape_97.setTransform(-23.525,-10.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.電腦元件, new cjs.Rectangle(-241.6,-133.3,483.29999999999995,266.70000000000005), null);


(lib.藍色線框元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#4A4238").p("EiCtgBAIAACBMEFbAAAIAAiBg");
	this.shape.setTransform(-1.55,383.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4A4238").p("ECCuAA5IAAhxMkFbAAAIAABxg");
	this.shape_1.setTransform(-1.55,-387.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7CAFC4").s().p("EiCtAA5IAAhxMEFbAAAIAABxg");
	this.shape_2.setTransform(1.575,-383.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7CAFC4").s().p("EiCtABBIAAiBMEFbAAAIAACBg");
	this.shape_3.setTransform(1.575,386.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.藍色線框元件, new cjs.Rectangle(-839.1,-393.9,1677.3000000000002,786.9), null);


(lib.左手3元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5.6).p("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");
	this.shape.setTransform(56.3357,145.1143);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#773328").s().p("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");
	this.shape_1.setTransform(59.255,145.1143);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4.5).p("A0gMHQkni+AWi9QAPiACVhOQCNhJCgATQCCAPBtBDQBBApCOBrQiulYhLjQQhwk4gBkJQAAk3ChkHQCukcEshyQDuhaEXAhQEMAgDhCGQDTB+CbDJQCQC6BSDmQBXD0A9FTQAkDFA6GKQAJA3AqCWQAwCqATBVQBFFFhpB2QhMBWiLA/QhZAoitA0QiJAom3CWQlkB6jjA0QhwAbjYjcQhDhEhahqQhjh2gHgHQi/jQhdhTQh+hxjIiAg");
	this.shape_2.setTransform(-264.1081,-491.2098);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9DBB2").s().p("Am3ZGQhDhEhahqIhqh9Qi/jQhdhTQh+hxjIiAQkni+AWi9QAPiACVhOQCNhJCgATQCCAPBtBDQBBApCOBrQiulYhLjQQhwk4gBkJQAAk3ChkHQCukcEshyQDuhaEXAhQEMAgDhCGQDTB+CbDJQCQC6BSDmQBXD0A9FTQAkDFA6GKQAJA3AqCWQAwCqATBVQBFFFhpB2QhMBWiLA/QhZAoitA0QiJAom3CWQlkB6jjA0QgMADgNAAQhvAAjAjEg");
	this.shape_3.setTransform(-264.1081,-491.2098);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左手3元件, new cjs.Rectangle(-427.5,-674.6,853.2,1348.8000000000002), null);


(lib.左手2元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5.6).p("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");
	this.shape.setTransform(59.4968,143.466);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#773328").s().p("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");
	this.shape_1.setTransform(59.4968,143.466);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4.5).p("A1AMkQgsghgxgoQhdhMgrhkQgwhwAmhgQAshuCOg1QB6guCCAPQCNARB1A2QBUAnCLBfQg3gohBilQhAi4gUgzQiumvAsmCQAznEFYj6QDfiiENgaQD5gYD/BfQD0BbDKC2QDLC2ByDqQB+EFBIGAQApDeA9G+QAJA3AqCWQAwCpATBWQBFFFhqB3QhMBViKA/QhYAoiuA1QiMAom0CVQllB6jiA0QhxAbjXjcQhEhFhZhpQhnh5gDgEQh9iIi/iCQjciNh3hZg");
	this.shape_2.setTransform(-263.2627,-490.7653);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9DBB2").s().p("AmqY/QhEhFhZhpIhqh9Qh9iIi/iCQjciNh3hZQgsghgxgoQhdhMgrhkQgwhwAmhgQAshuCOg1QB6guCCAPQCNARB1A2QBUAnCLBfQg3gohBilQhAi4gUgzQiumvAsmCQAznEFYj6QDfiiENgaQD5gYD/BfQD0BbDKC2QDLC2ByDqQB+EFBIGAQApDeA9G+QAJA3AqCWQAwCpATBWQBFFFhqB3QhMBViKA/QhYAoiuA1QiMAom0CVQllB6jiA0QgMADgOAAQhuAAjAjEg");
	this.shape_3.setTransform(-263.2627,-490.7653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左手2元件, new cjs.Rectangle(-425.5,-674,851.7,1347.1), null);


(lib.左手1元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5.6).p("EAOnglIQAjBSAGBRQAEA5gLBaQgNBtgBAqQgDBbAXBZQBLgeCagtQCBgwA+hXQBsCfgYEvQgIBkgbChQghDJgGAuQgUCTBoCUQBDBfCfCMQAwAnA3gFQA7gHAcg5QBhCogcEQQgKBggdCNQgRBPghCZQgaCTBlB1QBEBNCdBZQBUAyBdgIQBogIAxhUQBlDkghEpQgXDJhpFEQgYBMAnAoQAoAqBOgfQA4gXBFhnQBHh2AcgnQgGAJAPBYQASBhgBANQgDA0gQAyQgLAjgbA7QgrBegcB6QgJAkgkC/QA3AIAwgcQAygeAHgyQAABWhOCbQgrBUgKAWQgWA1ADAeQAABPBJA8QBEA3BoARQBmAdBpgnQBqgnA0hXQgsCbg7BsQhNCIhuBMQA8AeBKAEQBKAEBBgXQCYg1ACiUQBBDGgFDGQgFDVhZChQBGgJAuhOQAsheAcgnQARA+gCCKQgCB/AZBBIAkACQA8CZg1CLQg5CUiXARQhkAQiNAOQihAPhQAIQiPAOhgAPQiBAThsAeQikAmiPApQlNBfkNB8Qi8BJiKAnQi/BYjHgTQi2gRiuhoQihhhiGifQiBiahRi4QBSA7BqAQQBoAPBigeQj4i+iyi1Qhyh3hJheQhdh3g/h1QBRAsBZgEQBVgEBVguQBIguAehDQAjhQhEgvQgcgUgzgaQg9gegTgMQhXg0gNhQQgDg/AfhYQAnhkARgxQAdhVgEg5QgHhJg+g3QguguhRArQgqAZgTAJQghAPgTgGQhTgZgXhIQgSg7AVhkQAHgoApiQQAghxADg5QAAhshMg+Qg1grh5glQg+gVABg+QAAgxArhYQA3hqAbg2QAvhfAJg3QAPhTgchHQgdhHhEgtQgwgbhOAfQgwASgQAEQglAKghgGQgtgIgfgrQgfgsAHgtQAJgpAohHQA5hkAHgQQAehAgIgoQgJgyhCgcQghgOgkAMQgUAHgqAZQgpAZgXAHQgmALglgNQCHi6AliLQA2jOiSh3QhDg2hpgvQh7gzg9gaQhsgug/gsQhVg7gwhSQBNgWCAAOQCRAQA8gIQA/gOALhDQAKg9gig6Qgvg7hngpQg/gaiKgvQiAgrhCgcQjZhbiAiTQAjgIBwgQQBmgOAzgPQClgvgsh/Qg3ickVh8QhRgliXg2QiVg1gygXQg0gYgagTQgogdgNglQgQgwAcgyQAbgvAygYQAtgVBBgNQBCgMAOgHQAfgOgBgjQAAgogmhVQglhUhKhOQg6g9hchEQhEgzhng+Qh4hGg7gjQjZiChth4IAAAAQA6giAggSQA7ghAqgPQB6gsBNBAQgzihhEhtQhTiGh2hMQg3gjhVhVQhVhVg3gjQAjAABMAGQBAgCAZgsQA2hPggh0QgyiCgIhBQgMiHACg4QAFiNA6gVQHBioHCinQOElNAMAEQAQAxAdBoQAeBYAtAsQAxAwBpA5QA6AfBtA7QAKgeACgiQAFg4gTg3QgSg4gngpQCNAYBmBzQBmBxALCQQgWC8BkCuQBsC9CxAWQAnAAAdghQAdghgHgrQALA+A6B8QA+CDANA/QAjCmALAxQAbB4AYBdQA1gwAhhBQAfg9AIhCQgPCdAIC0QAJDhArBtQgShPAVgqQASgjA2gRQAbgIBagNQBWgNAzgSQgQA5AqE0QApE0AWgDQBRgJA6hBQA4hAAChNQAABEgGCAQgFB6ACA9QAGDHBXChQCSiUAegrQBOhugjhZQgBgDgBgDEAJ4gqqQAAACAAADEgAbg4zQAAAFgBAE");
	this.shape.setTransform(58.5836,145.1583);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#773328").s().p("EANABSLQi2gRiuhoQihhhiGifQiBiahQi4QBRA7BqAQQBoAPBigeQj4i+iyi1Qhyh3hJheQhdh3g/h1QBRAsBZgEQBVgEBVguQBIguAehDQAjhQhEgvQgbgUg0gaQg9gegTgMQhXg0gNhQQgDg/AfhYQAnhkARgxQAdhVgEg5QgHhJg+g3QguguhRArQgqAZgTAJQghAPgTgGQhTgZgXhIQgSg7AVhkQAHgoApiQQAghxADg5QAAhshMg+Qg1grh5glQg+gVABg+QAAgxArhYIBSigQAvhfAJg3QAPhTgchHQgdhHhEgtQgwgbhOAfQgwASgQAEQglAKghgGQgtgIgfgrQgfgsAHgtQAJgpAohHQA5hkAHgQQAehAgIgoQgJgyhCgcQghgOgkAMQgUAHgqAZQgpAZgXAHQgmALglgNQCHi6AliLQA2jOiSh3QhDg2hpgvIi4hNQhsgug/gsQhVg7gwhSQBNgWCAAOQCRAQA8gIQA/gOALhDQAKg9gig6Qgvg7hngpQg/gaiKgvQiAgrhCgcQjZhbiAiTQAjgIBwgQQBmgOAzgPQClgvgsh/Qg3ickVh8QhRgliXg2QiVg1gygXQg0gYgagTQgogdgNglQgQgwAcgyQAbgvAygYQAtgVBBgNQBCgMAOgHQAfgOgBgjQAAgogmhVQglhUhKhOQg6g9hchEQhEgzhng+IizhpQjZiChth4IAAAAIBag0QA7ghAqgPQB6gsBNBAQgzihhEhtQhTiGh2hMQg3gjhVhVQhVhVg3gjQAjAABMAGQBAgCAZgsQA2hPggh0QgyiCgIhBQgMiHACg4QAFiNA6gVIODlPQOElNAMAEQAQAxAdBoQAeBYAtAsQAxAwBpA5ICnBaQAKgeACgiQAFg4gTg3QgSg4gngpQCNAYBmBzQBmBxALCQQgWC8BkCuQBsC9CxAWQAnAAAdghQAdghgGgrQALA+A5B8QA+CDANA/IAuDXQAbB4AYBdQA1gwAhhBQAfg9AIhCQgOCdAHC0QAJDhAsBtQgThPAWgqQARgjA2gRQAbgIBagNQBWgNAzgSQgQA5AqE0QApE0AWgDQBRgJA6hBQA5hAABhNQAABEgGCAQgFB6ACA9QAGDHBXChQCSiUAegrQBOhugjhZQAjBSAGBRQAEA5gLBaQgNBtgBAqQgDBbAXBZQBLgeCagtQCBgwA+hXQBsCfgYEvQgIBkgbChQghDJgGAuQgUCTBoCUQBDBfCfCMQAwAnA3gFQA7gHAcg5QBhCogcEQQgKBggdCNIgyDoQgaCTBlB1QBEBNCdBZQBUAyBdgIQBogIAxhUQBlDkghEpQgXDJhpFEQgYBMAnAoQAoAqBOgfQA4gXBFhnQBHh2AcgnQgGAJAPBYQASBhgBANQgDA0gQAyQgLAjgbA7QgrBegcB6QgJAkgkC/QA3AIAwgcQAygeAHgyQAABWhOCbQgrBUgKAWQgWA1ADAeQAABPBJA8QBEA3BoARQBmAdBpgnQBqgnA0hXQgsCbg7BsQhNCIhuBMQA8AeBKAEQBKAEBBgXQCYg1ACiUQBBDGgFDGQgFDVhZChQBGgJAuhOQAsheAcgnQARA+gCCKQgCB/AZBBIAkACQA8CZg1CLQg5CUiXARQhkAQiNAOIjxAXQiPAOhgAPQiBAThsAeQikAmiPApQlNBfkNB8Qi8BJiKAnQidBJikAAQgiAAgjgEg");
	this.shape_1.setTransform(61.9609,145.1583);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4.5).p("A1OL0Qkoi+AWi9QAPiBCVhNQCNhJCgATQCJAQCVBMQBeAwCfBtQiulYhLjQQhwk4AAkJQgBk3ChkHQCukcEshyQDuhaEXAhQEMAgDgCGQDTB+CcDJQCQC6BRDmQBXD1A+FSQAkDFA6GKQAJA2AqCXQAwCpATBWQBFFFhqB2QhMBWiKA/QhYAniuA1QiMApm0CVQllB6jiA0QhwAajYjbQhEhFhZhqQhmh5gEgEQibioiviEQhphPkLirg");
	this.shape_2.setTransform(-263.3403,-491.1866);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9DBB2").s().p("AmJZGQhEhFhZhqIhqh9QibioiviEQhphPkLirQkoi+AWi9QAPiBCVhNQCNhJCgATQCJAQCVBMQBeAwCfBtQiulYhLjQQhwk4AAkJQgBk3ChkHQCukcEshyQDuhaEXAhQEMAgDgCGQDTB+CcDJQCQC6BRDmQBXD1A+FSQAkDFA6GKQAJA2AqCXQAwCpATBWQBFFFhqB2QhMBWiKA/QhYAniuA1QiMApm0CVQllB6jiA0QgMADgNAAQhuAAjBjEg");
	this.shape_3.setTransform(-263.3403,-491.1866);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左手1元件, new cjs.Rectangle(-430.9,-673.5,860.4,1350.4), null);


(lib.右手3元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5.6).p("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");
	this.shape.setTransform(56.3357,145.1143);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#773328").s().p("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");
	this.shape_1.setTransform(59.255,145.1143);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4.5).p("A0gMHQkni+AWi9QAPiACVhOQCNhJCgATQCCAPBtBDQBBApCOBrQiulYhLjQQhwk4gBkJQAAk3ChkHQCukcEshyQDuhaEXAhQEMAgDhCGQDTB+CbDJQCQC6BSDmQBXD0A9FTQAkDFA6GKQAJA3AqCWQAwCqATBVQBFFFhpB2QhMBWiLA/QhZAoitA0QiJAom3CWQlkB6jjA0QhwAbjYjcQhDhEhahqQhjh2gHgHQi/jQhdhTQh+hxjIiAg");
	this.shape_2.setTransform(-264.1081,-491.2098);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9DBB2").s().p("Am3ZGQhDhEhahqIhqh9Qi/jQhdhTQh+hxjIiAQkni+AWi9QAPiACVhOQCNhJCgATQCCAPBtBDQBBApCOBrQiulYhLjQQhwk4gBkJQAAk3ChkHQCukcEshyQDuhaEXAhQEMAgDhCGQDTB+CbDJQCQC6BSDmQBXD0A9FTQAkDFA6GKQAJA3AqCWQAwCqATBVQBFFFhpB2QhMBWiLA/QhZAoitA0QiJAom3CWQlkB6jjA0QgMADgNAAQhvAAjAjEg");
	this.shape_3.setTransform(-264.1081,-491.2098);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右手3元件, new cjs.Rectangle(-427.5,-674.6,853.2,1348.8000000000002), null);


(lib.右手2元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5.6).p("EArRAaqQgKASANA3QAIAfAMAvQAHA+gQBCQgMA0gfBFQgrBegdB6QgIAkgkC+QA+AJA5gRQBEgUAHgwQAABXhgCOQg1BPgLATQgcAyAEAdQAABQBJA7QBEA4BoARQA+AKAmgBQA1gBAvgTQApgQAsgmQAZgVAzgtQgJB6h2CsQgdArgqAwQgEAFgpAkQgeAbgIARQA9AfBNADQBLACBAgZQBBgZAngzQAng1ABhDQABAPAKAbQANAmACAFQAMA0AIAwQARBpgDBiQgCBcgYBlQgIAfgXA/QgWA8gHAgQAIgGATgKQASgJAIgHQAbgUAagfQAtg1AahLQAPAdAEAvQACATAAA9QAAAeAAA9QABA0AEAmQAGAkARAJQAHADAQADQAfALAFCDQADBPgaBEQgbBGg2ArQg1AqhKALQhlARiMAOQihAPhQAIQiQAOhgAOQiBAUhrAdQikAniQAoQlMBfkOB8Qi4BJiNAnQl6Culei7QichTh/iTQh8iPhQi3QBFAyBKgVQAVgGAygWQA0gXAigLQhfhJhihhQhxh2hDhDQhxh3hKheQhdh2g+h1QAHALAjALQAOAEAkAHQAzAKA2gGQBtgNBUhLQAhgeAPgjQASgogHgjQgIglgfgXQgZgRgwgXQg7gdgSgKQhXgygQhLQgPhKAmhlQAGgPAdhEQAVgyAKgiQAehlghhKQgTgqgogYQgqgagrAJQgSAEgXAMQgaAPgNAHQhSAsg2hFQgvg9AGhYQAKiOAziEQAahBABhBQABhKgfg3Qgfg3hAgjQgngUhWgbQg4gSgDhAQgDgxAag8QAPgjA3heQAvhQAQg1QAfhqgQhYQgThvhZgoQgygXhNAcQhWAggpgJQhigQAEhhQAChIAyhUQA9hnAKgxQAThbhYgmQgfgMgtASQgxAbgVAKQhPApgkgWQApgpAmhNQARgjAohhQAvh0gKhjQgNhyhZhJQhDg1hpgwQh8gzg8gZQhRgihEhJQhKhcgsg0QAZgDAcAGQAeAGAWgBQAagCAmAFQAVADArAFQBfAKAugPQBIgXAEhSQAEhCg9g2QgsgohMgeQg7gXiKgvQh/gshFgdQh2gxhIguQhhg+g5hQQAEAFB8gfICZgbQA5gJAmgaQAxggABgzQABgmgbgyQg/h2h4hEQiPhSh9glQgfgJg5gXQg8gYgdgJQg3gRgcgLQgtgRgggWQgxgggjgfQg5gxgEgfQgGgzBDghQAdgOBPgUQAfgIBXgQQBJgXAIg0QAGgogZg0QgGgOgqhGQgphDhAhAQg1g0hMg4QhFgzhng+Qh4hGg7gjQjZiDhth3QAPgqBYgZQBKgWBSgFQAdgBApABQA5ADAEAKQgzighEhuQhTiFh2hNQg3gjhNhMQhThTgsggQgFgDACgFQACgFAFAAQBSAHARgCQA1gFAXgpQA2hOggh1QgyiBgIhBQgMiIACg4QAFiMA6gWQABAAOClOQOFlNAMAEQAPAFAIAzQAEAbAFAnQAYBGA2BHQA8BPBWA1QByBJBGAGQAJgVAEglQAEg1gYg3Qggg+gQgkQAbABAsARQAhANAfATQA+AlAwA5QBjB1AKCbQADAoAFBOQAHBCASAwQAvCEBBBJQAlAqAvAcQAyAdA1AHQAQACAeAHQAZAEANgFQAlgMAAhcQAjBxAsBRQAUAkAOAzQAIAeAOA+IBPE/QAEAQAHAmQAHAjALAQQAZgKAWgiQAKgOAXgsQAgg8AJhBIAAgFQAAgCABgCEgAegucQgKgsAOgqQAQgyAsgTQAVgJAegGQAOgDAmgGQALgBBGgSQA1gOAbAEQgIAUACAhQABATAFAjQAEAvAHApQAIA3AMBnQANBtAHAwQADARAIBEQAMA8AaAJQAaAJAwgfQAlgZAYgcQAbgeAPglQAOgkABglEAJOgqwQAAADAAACQAAA4gGB+QgHB+ABBFQAFDnBdCDQCFiAAjgvQBXh3glhfQArBlgHCLQgCAbgJBiQgHBPAAA0QAAAZAGAmQABAHACAbQADAaAGAHQAJAKATgDQAKgCAXgIQCMgjB9hJQCkhfANE7QAIC9gkDTQgYCTgEBaQgFCEAgBnQAeBdBRBXQAZAaCGB1QAcAYAhAHQAkAJAfgMQATgHAQgQQAHgHAUgYQAaAaAQA6QAJAfAKA/QAMBLgBB1QgBByggCbQgTBZgoCxQgSBaAoBZQAjBQBLBBQBLBABUApQBmAyBQgHQAvgEAngZQARgLA1gwQARAVANAqQABADAQBBQARBEAHBMQAOCJgXCcQgSCBgtCeQgLApgiBbQgaBRAIA1QAHAvAuANQAnAKAtgSQA5gWBFhoQAlg3A8hiQAAgCABgBEgBGg4oQgUClAKCjQAKCpAoCbIABADQABADABADEAN7glTQACADABAD");
	this.shape.setTransform(59.4968,143.466);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#773328").s().p("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");
	this.shape_1.setTransform(59.4968,143.466);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4.5).p("A1AMkQgsghgxgoQhdhMgrhkQgwhwAmhgQAshuCOg1QB6guCCAPQCNARB1A2QBUAnCLBfQg3gohBilQhAi4gUgzQiumvAsmCQAznEFYj6QDfiiENgaQD5gYD/BfQD0BbDKC2QDLC2ByDqQB+EFBIGAQApDeA9G+QAJA3AqCWQAwCpATBWQBFFFhqB3QhMBViKA/QhYAoiuA1QiMAom0CVQllB6jiA0QhxAbjXjcQhEhFhZhpQhnh5gDgEQh9iIi/iCQjciNh3hZg");
	this.shape_2.setTransform(-263.2627,-490.7653);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9DBB2").s().p("AmqY/QhEhFhZhpIhqh9Qh9iIi/iCQjciNh3hZQgsghgxgoQhdhMgrhkQgwhwAmhgQAshuCOg1QB6guCCAPQCNARB1A2QBUAnCLBfQg3gohBilQhAi4gUgzQiumvAsmCQAznEFYj6QDfiiENgaQD5gYD/BfQD0BbDKC2QDLC2ByDqQB+EFBIGAQApDeA9G+QAJA3AqCWQAwCpATBWQBFFFhqB3QhMBViKA/QhYAoiuA1QiMAom0CVQllB6jiA0QgMADgOAAQhuAAjAjEg");
	this.shape_3.setTransform(-263.2627,-490.7653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右手2元件, new cjs.Rectangle(-425.5,-674,851.7,1347.1), null);


(lib.右手1元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5.6).p("EAOnglIQAjBSAGBRQAEA5gLBaQgNBtgBAqQgDBbAXBZQBLgeCagtQCBgwA+hXQBsCfgYEvQgIBkgbChQghDJgGAuQgUCTBoCUQBDBfCfCMQAwAnA3gFQA7gHAcg5QBhCogcEQQgKBggdCNQgRBPghCZQgaCTBlB1QBEBNCdBZQBUAyBdgIQBogIAxhUQBlDkghEpQgXDJhpFEQgYBMAnAoQAoAqBOgfQA4gXBFhnQBHh2AcgnQgGAJAPBYQASBhgBANQgDA0gQAyQgLAjgbA7QgrBegcB6QgJAkgkC/QA3AIAwgcQAygeAHgyQAABWhOCbQgrBUgKAWQgWA1ADAeQAABPBJA8QBEA3BoARQBmAdBpgnQBqgnA0hXQgsCbg7BsQhNCIhuBMQA8AeBKAEQBKAEBBgXQCYg1ACiUQBBDGgFDGQgFDVhZChQBGgJAuhOQAsheAcgnQARA+gCCKQgCB/AZBBIAkACQA8CZg1CLQg5CUiXARQhkAQiNAOQihAPhQAIQiPAOhgAPQiBAThsAeQikAmiPApQlNBfkNB8Qi8BJiKAnQi/BYjHgTQi2gRiuhoQihhhiGifQiBiahRi4QBSA7BqAQQBoAPBigeQj4i+iyi1Qhyh3hJheQhdh3g/h1QBRAsBZgEQBVgEBVguQBIguAehDQAjhQhEgvQgcgUgzgaQg9gegTgMQhXg0gNhQQgDg/AfhYQAnhkARgxQAdhVgEg5QgHhJg+g3QguguhRArQgqAZgTAJQghAPgTgGQhTgZgXhIQgSg7AVhkQAHgoApiQQAghxADg5QAAhshMg+Qg1grh5glQg+gVABg+QAAgxArhYQA3hqAbg2QAvhfAJg3QAPhTgchHQgdhHhEgtQgwgbhOAfQgwASgQAEQglAKghgGQgtgIgfgrQgfgsAHgtQAJgpAohHQA5hkAHgQQAehAgIgoQgJgyhCgcQghgOgkAMQgUAHgqAZQgpAZgXAHQgmALglgNQCHi6AliLQA2jOiSh3QhDg2hpgvQh7gzg9gaQhsgug/gsQhVg7gwhSQBNgWCAAOQCRAQA8gIQA/gOALhDQAKg9gig6Qgvg7hngpQg/gaiKgvQiAgrhCgcQjZhbiAiTQAjgIBwgQQBmgOAzgPQClgvgsh/Qg3ickVh8QhRgliXg2QiVg1gygXQg0gYgagTQgogdgNglQgQgwAcgyQAbgvAygYQAtgVBBgNQBCgMAOgHQAfgOgBgjQAAgogmhVQglhUhKhOQg6g9hchEQhEgzhng+Qh4hGg7gjQjZiChth4IAAAAQA6giAggSQA7ghAqgPQB6gsBNBAQgzihhEhtQhTiGh2hMQg3gjhVhVQhVhVg3gjQAjAABMAGQBAgCAZgsQA2hPggh0QgyiCgIhBQgMiHACg4QAFiNA6gVQHBioHCinQOElNAMAEQAQAxAdBoQAeBYAtAsQAxAwBpA5QA6AfBtA7QAKgeACgiQAFg4gTg3QgSg4gngpQCNAYBmBzQBmBxALCQQgWC8BkCuQBsC9CxAWQAnAAAdghQAdghgHgrQALA+A6B8QA+CDANA/QAjCmALAxQAbB4AYBdQA1gwAhhBQAfg9AIhCQgPCdAIC0QAJDhArBtQgShPAVgqQASgjA2gRQAbgIBagNQBWgNAzgSQgQA5AqE0QApE0AWgDQBRgJA6hBQA4hAAChNQAABEgGCAQgFB6ACA9QAGDHBXChQCSiUAegrQBOhugjhZQgBgDgBgDEAJ4gqqQAAACAAADEgAbg4zQAAAFgBAE");
	this.shape.setTransform(58.5836,145.1583);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#773328").s().p("EANABSLQi2gRiuhoQihhhiGifQiBiahQi4QBRA7BqAQQBoAPBigeQj4i+iyi1Qhyh3hJheQhdh3g/h1QBRAsBZgEQBVgEBVguQBIguAehDQAjhQhEgvQgbgUg0gaQg9gegTgMQhXg0gNhQQgDg/AfhYQAnhkARgxQAdhVgEg5QgHhJg+g3QguguhRArQgqAZgTAJQghAPgTgGQhTgZgXhIQgSg7AVhkQAHgoApiQQAghxADg5QAAhshMg+Qg1grh5glQg+gVABg+QAAgxArhYIBSigQAvhfAJg3QAPhTgchHQgdhHhEgtQgwgbhOAfQgwASgQAEQglAKghgGQgtgIgfgrQgfgsAHgtQAJgpAohHQA5hkAHgQQAehAgIgoQgJgyhCgcQghgOgkAMQgUAHgqAZQgpAZgXAHQgmALglgNQCHi6AliLQA2jOiSh3QhDg2hpgvIi4hNQhsgug/gsQhVg7gwhSQBNgWCAAOQCRAQA8gIQA/gOALhDQAKg9gig6Qgvg7hngpQg/gaiKgvQiAgrhCgcQjZhbiAiTQAjgIBwgQQBmgOAzgPQClgvgsh/Qg3ickVh8QhRgliXg2QiVg1gygXQg0gYgagTQgogdgNglQgQgwAcgyQAbgvAygYQAtgVBBgNQBCgMAOgHQAfgOgBgjQAAgogmhVQglhUhKhOQg6g9hchEQhEgzhng+IizhpQjZiChth4IAAAAIBag0QA7ghAqgPQB6gsBNBAQgzihhEhtQhTiGh2hMQg3gjhVhVQhVhVg3gjQAjAABMAGQBAgCAZgsQA2hPggh0QgyiCgIhBQgMiHACg4QAFiNA6gVIODlPQOElNAMAEQAQAxAdBoQAeBYAtAsQAxAwBpA5ICnBaQAKgeACgiQAFg4gTg3QgSg4gngpQCNAYBmBzQBmBxALCQQgWC8BkCuQBsC9CxAWQAnAAAdghQAdghgGgrQALA+A5B8QA+CDANA/IAuDXQAbB4AYBdQA1gwAhhBQAfg9AIhCQgOCdAHC0QAJDhAsBtQgThPAWgqQARgjA2gRQAbgIBagNQBWgNAzgSQgQA5AqE0QApE0AWgDQBRgJA6hBQA5hAABhNQAABEgGCAQgFB6ACA9QAGDHBXChQCSiUAegrQBOhugjhZQAjBSAGBRQAEA5gLBaQgNBtgBAqQgDBbAXBZQBLgeCagtQCBgwA+hXQBsCfgYEvQgIBkgbChQghDJgGAuQgUCTBoCUQBDBfCfCMQAwAnA3gFQA7gHAcg5QBhCogcEQQgKBggdCNIgyDoQgaCTBlB1QBEBNCdBZQBUAyBdgIQBogIAxhUQBlDkghEpQgXDJhpFEQgYBMAnAoQAoAqBOgfQA4gXBFhnQBHh2AcgnQgGAJAPBYQASBhgBANQgDA0gQAyQgLAjgbA7QgrBegcB6QgJAkgkC/QA3AIAwgcQAygeAHgyQAABWhOCbQgrBUgKAWQgWA1ADAeQAABPBJA8QBEA3BoARQBmAdBpgnQBqgnA0hXQgsCbg7BsQhNCIhuBMQA8AeBKAEQBKAEBBgXQCYg1ACiUQBBDGgFDGQgFDVhZChQBGgJAuhOQAsheAcgnQARA+gCCKQgCB/AZBBIAkACQA8CZg1CLQg5CUiXARQhkAQiNAOIjxAXQiPAOhgAPQiBAThsAeQikAmiPApQlNBfkNB8Qi8BJiKAnQidBJikAAQgiAAgjgEg");
	this.shape_1.setTransform(61.9609,145.1583);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4.5).p("A1OL0Qkoi+AWi9QAPiBCVhNQCNhJCgATQCJAQCVBMQBeAwCfBtQiulYhLjQQhwk4AAkJQgBk3ChkHQCukcEshyQDuhaEXAhQEMAgDgCGQDTB+CcDJQCQC6BRDmQBXD1A+FSQAkDFA6GKQAJA2AqCXQAwCpATBWQBFFFhqB2QhMBWiKA/QhYAniuA1QiMApm0CVQllB6jiA0QhwAajYjbQhEhFhZhqQhmh5gEgEQibioiviEQhphPkLirg");
	this.shape_2.setTransform(-263.3403,-491.1866);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9DBB2").s().p("AmJZGQhEhFhZhqIhqh9QibioiviEQhphPkLirQkoi+AWi9QAPiBCVhNQCNhJCgATQCJAQCVBMQBeAwCfBtQiulYhLjQQhwk4AAkJQgBk3ChkHQCukcEshyQDuhaEXAhQEMAgDgCGQDTB+CcDJQCQC6BRDmQBXD1A+FSQAkDFA6GKQAJA2AqCXQAwCpATBWQBFFFhqB2QhMBWiKA/QhYAniuA1QiMApm0CVQllB6jiA0QgMADgNAAQhuAAjBjEg");
	this.shape_3.setTransform(-263.3403,-491.1866);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右手1元件, new cjs.Rectangle(-430.9,-673.5,860.4,1350.4), null);


(lib.橘色氣球元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgjAbQgSgVACgZIgIgBQAXgZAjgBQAigCAaAWQAFAagQAWQgRAYgYABIgDABQgVAAgSgVg");
	this.shape.setTransform(12.0688,8.9501);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai4FRQgHgkAmhEQAthIAMgYQAzhhAihsQALgmALgtQANhLAHglQAPhBAcgmQAJgMAOgEQAPgEALAIQBaBEgnDPQgfCihEBwQg0BVhJBIQg6A5giAAQgfAAgLgwg");
	this.shape_1.setTransform(38.5998,-39.7079);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4A4238").ss(1.6).p("AAxA3IhagmIBWhDg");
	this.shape_2.setTransform(-37.6,29.85,1,1,0,0,0,0,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4A4238").ss(2).p("ACfmnQhvB+gQAWQhABYgSBaQgKA2gBBRQgCCAAAAJQgEBMgVA8QgZBHguAn");
	this.shape_3.setTransform(-52.2731,76.6946);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4A4238").ss(1.6).p("ApVhUQAgi5BFh8QCckbD3gwQD1gvD6DLIBGBJQBNBfAmBwQB3FklFGCQh6CQi5BPQjFBUipgnQjeg0hIkPQg6jXAvkMg");
	this.shape_4.setTransform(6.3726,-44.5071);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8B88B").s().p("AguAPIBZhEIAEBrg");
	this.shape_5.setTransform(-36.5,31.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8B88B").s().p("AksLlQjlg1hLkXQg6jcAvkUQAhi8BGiBQChkjD/gxQD8gwECDRIBIBLQBQBiAmBzQB8FulPGMQh9CUi/BRQiKA6h9AAQg7AAg3gNg");
	this.shape_6.setTransform(4.099,-43.3508);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.橘色氣球元件, new cjs.Rectangle(-69.2,-119.2,138.5,239), null);


(lib.橘色圓形2元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#4A4238").p("ACJAAQAAA5goAoQgoAog5AAQg3AAgpgoQgogoAAg5QAAg3AogpQApgoA3AAQA5AAAoAoQAoApAAA3g");
	this.shape.setTransform(1.95,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8B88B").s().p("AhgBhQgogoAAg5QAAg4AogoQAogoA4AAQA5AAAoAoQAoAoAAA4QAAA5goAoQgoAog5AAQg4AAgogog");
	this.shape_1.setTransform(-1.875,0.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.橘色圓形2元件, new cjs.Rectangle(-15.6,-15.6,32.3,30.2), null);


(lib.橘色圓形1元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#4A4238").p("ACJAAQAAA5goAoQgoAog5AAQg4AAgogoQgogoAAg5QAAg4AogoQAogoA4AAQA5AAAoAoQAoAoAAA4g");
	this.shape.setTransform(1.925,-0.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8B88B").s().p("AhgBhQgogpAAg4QAAg4AogoQAogoA4AAQA5AAAoAoQAoAoAAA4QAAA4goApQgoAog5AAQg4AAgogog");
	this.shape_1.setTransform(-1.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.橘色圓形1元件, new cjs.Rectangle(-15.6,-15.6,32.3,30.2), null);


(lib.PS元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABcB5QgbgCgIgXQgGgegGgOQgMgegjgYQgdgUgmgOIgmgJQgYgGgMgKQgEgEgBgDQgIgkA/gMQAsgHAsAFQBoAOAkBFQAUAlgIA5QgIA+grAAIgEAAg");
	this.shape.setTransform(28.2572,-32.8347);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4238").s().p("AhADEQgcgCgbgMQgOgHAAgQIAAgsQAAgMAKgHQAKgHALAEQA0ATAZgCIAcgCQAdgFADgQQADgHgGgJQgKgRgmgHQgSgIgUgLQgngWgJgOQgKgFgJgPQgPgfAKg4IAOggQAYgkAwgQIBaAAIARACQAQACAMADQAJACAGAHQAGAHgBAJIAAAoQAAAMgKAHQgKAGgLgEQgdgKgmADQgLgCgLADQgZAFgEAUIACAKQAIANAgAMQBQAngDgCIAUAPQAYAWADAWIACAiQgBAngRAYQgDAJgNAMQgZAXgsALQgHACgQABIgSABQgYAAgegEg");
	this.shape_1.setTransform(20.25,7.4536);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4238").s().p("AiSD7QgLAAgHgIQgIgHAAgLIAAnBQAAgLAHgHQAIgIAKAAICgAAQA4AAApAjQAVAQAJASQAoAugJBJQgEAkgNAaQgSA0g9AXIg4AMIhSADQgEAAgDADQgDADAAAEIAAB+QAAAKgHAIQgIAHgKAAgAhFiWQgHAHAAAKIAABuQAAAKAHAHQAHAGAKAAIA7AAIAbgKQAdgTAHghQAEgQgDgTQgGgmgjgOQgCgDgHgCQgNgFgRACIgqAAQgLAAgHAHg");
	this.shape_2.setTransform(-15.3432,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4A4238").p("ADNIkImZAAQiNAAhlhlQhlhlAAiNIAAmZQAAiNBlhlQBlhlCNAAIGZAAQCOAABkBlQBlBlAACNIAAGZQAACNhlBlQhkBliOAAg");
	this.shape_3.setTransform(0.5,1.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCFF4B").s().p("AjMIjQiOAAhkhkQhlhlAAiNIAAmZQAAiNBlhlQBkhkCOAAIGZAAQCOAABkBkQBlBlAACNIAAGZQAACNhlBlQhkBkiOAAg");
	this.shape_4.setTransform(-0.5,-1.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PS元件, new cjs.Rectangle(-55.2,-56.3,111.5,113.69999999999999), null);


(lib.LOGO元件v = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#4A4238").ss(2.3).p("AHfmBQgUgpgfgYQgegXgiAAIhsAAQgwAAgnAtQgmAtgNBIQgPBUg/DUQgihPgUgpQhQiYhngsQhGgehNAUQhKAUg6A6IgCADQgrAtAYBAQAYBBA7gEQAXgBAZAFQA0ALAwArQArAkAlA6QAcAsAgBFQATAnAjBOQApBVAmAoQA3A5BJABQAdAAAdgNIALABQATAAAXgFQA5gKArhTQAkhFApicQApiXAki0QAKgxgGg0QgFgzgUgqgAEZAuQgSA9gUAaQgYAegfADQgUACgRgJQgSgLgGgUIAAgBQgOg5AmhKQAFgLAaguQATgkAJgYQAKgaADgFQAKgTAOAEQAjAKAJBNIADAXQADAygQA1g");
	this.shape.setTransform(-2.8289,-1.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8B88B").s().p("ACOHbQhNAAg5g5QgogogrhVIg5h2QgihGgdgrQgmg6gtglQg0gqg2gLQgYgFgaABQg+AEgZhBQgahBAugtIACgCQA9g7BNgUQBSgUBIAeQBtAtBTCXQAWAqAjBOQBBjOARhaQANhIApgtQAoguAzAAIBxAAQAjAAAgAYQAgAYAVApQAWAqAFA0QAGAzgKAyQgoC7gpCRQgsCcglBFQgtBTg8AKQgYAFgUAAIgLgBQgfANgcAAIgCgBgAD4iXQgDAFgKAaQgJAYgTAkIgfA5QglBLANA4IAAABQAGAUASAKQASAKATgCQAegDAZgeQAUgaATg+QAPg1gDgxIgCgXQgKhOgjgJIgEAAQgLAAgJAPg");
	this.shape_1.setTransform(0.3762,1.1009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO元件v, new cjs.Rectangle(-55.9,-49.7,109.4,98.4), null);


(lib.LOGO元件r = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#4A4238").ss(2.3).p("AEkj6IgCgCQgtg3g7gZQg/gag6ASQgsANgpAnQgGgQgEgIQgfhAg6glQg4gjhAgBIgCAAQgwAAgPA5QgOA4AnAjQARARAMARQA1BNgHCEQgDAugLA/QgHAkgNBIQgNBQAGAyQAJBHAuAvQAhAjAuAGQBUALAjg4QAHgJgEgIQgBgCgFgDQg/glgHhNQgHhCAlhUQAhhNA1g9QA2g/AvgPQAHgDA/gHQAtgGATgUQAVgWACgiQACgjgTgYg");
	this.shape.setTransform(-2.8521,-1.1778);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhnAwQgBgRALgRQARgZArgZQAdgQAPgGQAcgLAXACQAgAEAHASQAHAPgOARQgNAQgZADQgeACgQAEQgcAGgWARIgRAUQgLAMgKABIgDAAQgVAAgBgUg");
	this.shape_1.setTransform(9.9625,-21.1931);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCFF4B").s().p("AhwHAQgtgGgigjQgugvgIhHQgHgzAOhPIAUhsQALg/ACguQAHiEg1hNQgLgRgSgRQgmgjAOg5QAOg4AxAAIACAAQBAABA4AjQA6AlAeBAIAKAYQApgnAsgNQA7gSA+AaQA8AYAtA4IABACQATAYgCAjQgCAigUAWQgTAUgtAFQg+AIgJADQguAPg2A/Qg2A9ghBNQgkBUAGBCQAHBNBAAlQAFADABACQADAHgGAKQgdAvg/AAQgNAAgPgCg");
	this.shape_2.setTransform(2.8612,1.2222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO元件r, new cjs.Rectangle(-34.8,-51.9,69.19999999999999,98.1), null);


(lib.LOGO元件o = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#4A4238").ss(2.3).p("AD8jvQgrhQhHgvQhGguhLgDQhggDhKBBQhAA4gdBcQgXBHgHBzQgVFDCvBJQAMAEAWAMQASAIAUAHQAOAFATABQBvAJA3geQB8hDApjXQAojQhOiOgABVBHQgNA/gjAUQgQAJgggDIgKgCIgVgJQgzgVAGhfQADgxAKgUQAKgSAVgPQAWgOAUgCIABACQAzAJAXArQAXApgMA9g");
	this.shape.setTransform(-2.8701,-1.2128);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8B88B").s().p("AgpGeQgOgBgTgFQgRgGgVgJIgigRQivhIAVlEQAIhzAWhGQAdhcBAg4QBLhBBfADQBMACBFAvQBHAwArBPQBOCOgoDQQgqDXh7BDQgrAXhNAAQgVAAgZgCgAgqhFQgWAOgKATQgKATgDAyQgGBfAzAVIAVAJIAKACQAgADAQgJQAkgUAMg/QAMg9gXgpQgXgrgzgJIgBgCQgUABgVAPg");
	this.shape_1.setTransform(2.8408,1.1623);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO元件o, new cjs.Rectangle(-34.3,-45.1,67.5,89.5), null);


(lib.LOGO元件n = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#4A4238").ss(2.3).p("AFbG4QAgg+g6kFQhNlFipgXQgrgGgtARQgrARgnAkIADgSQANhNgShDQgThDgvgwQgjgjgwgYQgGgDgGAGQgFAHAEAGQA4BWgUCEQgPBhg9COQhMCtAWCLQALBGAdAnQAjA5A4AeQA1AcA9gBQAOAAgDgKQgBgGgJgMQgqg3AIhNQAFg2AhhSQAWg4ArgsQAvgyAtADQA6ADAoBAQAYAoAdBYQBbEYAzhhg");
	this.shape.setTransform(-2.8325,-1.1707);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8B88B").s().p("AjeHeQg4gegjg5QgdgngLhGQgWiLBMitQA+iNAOhiQAViEg5hXQgEgFAGgHQAFgGAGADQAvAXAkAkQAvAwATBDQASBDgNBNIgDASQAngkArgRQAtgRArAGQCqAXBMFFQASBMALBLQASCDgVAoQgzBhhbkXQgchYgZgoQgohAg6gDQgtgDgvAyQgrAsgWA4QghBSgFA2QgIBNAqA3QAWAcgXAAIgEAAQg6AAg0gbg");
	this.shape_1.setTransform(2.86,1.2293);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO元件n, new cjs.Rectangle(-41.1,-53.1,79.80000000000001,106.6), null);


(lib.LOGO元件E = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AoDE1QgTgHgKgVQgJgVAGgVQAXhPCKgoQBCgTCSgSQCFgRApgIQCCgYBegwQCQhLA3huQAKgUAchCQAegvAmAqQAZAcgEArQgEAigVAmQgkBChIA8QhFA5hGAaQhaAhhkARQhEAMh9ALQhqAJhGAYQhhAgg6A/QgZAdgKAHQgQAMgPAAQgGAAgHgCg");
	this.shape.setTransform(5.9388,61.0382);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4A4238").ss(2.3).p("AoHKwQAKADAIgIQAHgIgBgMQgCg7Aag6QAZg3ApgmQAqgmA7gYQAtgTBCgOQA7gMCbgVQCIgSBOgUQD+hCB3i1QBQh6AQirQAPijgwicIgCgGQgSg4gogdQglgbgtADQgtAEgjAhQgmAjgNA6QgMA0gUAsQgtBihWBJQhLBAhlAmQhLAchxAWQiBAWhAANQiLAdhOA2QhtBKgqCUQgeBsAZB0QAYBtAlA8QArBFBIAYg");
	this.shape_1.setTransform(-2.0345,52.0458);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCFF4B").s().p("AoGKvQhIgXgshFQglg8gYhtQgahzAfhtQAqiUBthKQBOg2CLgdQBAgNCBgWQBxgWBLgdQBlglBMhAQBVhJAthiQAUgsAMg0QAOg6AmgjQAjghAsgEQAtgEAlAcQAoAdASA4IACAGQAwCcgPCjQgQCrhQB6Qh3C1j+BCQhOAUiIASQibAVg7AMQhBANguATQg7AYgqAnQgpAmgZA3QgZA6ACA7QAAAMgHAIQgFAFgHAAIgFgBg");
	this.shape_2.setTransform(1.9766,54.5779);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4A4238").ss(2.3).p("AHamTIgCgFQgMgogdgUQgagTgfADQggACgZAXQgaAZgKApQgIAlgPAfQgfBFg9AzQg2AuhGAaQg1AUhQAPQhaAQgtAJQhiAVg3AmQhNA0geBoQgWBMASBSQARBNAaAqQAfAxAzARQAGACAGgGQAFgFAAgJQgCgpASgpQASgmAdgcQAdgbAqgRQAggNAugKQArgJBsgOQBggNA3gOQCzguBUiAQA5hWALh4QAKhzghhug");
	this.shape_3.setTransform(-9.6098,-74.8837);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlkDmQgJgIAEgbQACgUAHgPQAXg6BLgmQBFgjCGgRQCRgSA7gYQAegMAVgNQAtgcAVgoQAJgPAHgeQAIghAFgNQAKgXASAGQAQAGALAYQAPAggIAqQgIAmgWAeQgxBDhtARIh2ARQhJAJgsAIQh7AXgWAIQhPAcgZBEQgHATgLAOQgLAOgIAAQgFAAgDgDg");
	this.shape_4.setTransform(-5.7078,-65.2327);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCFF4B").s().p("AltHlQgzgQgfgxQgagqgRhNQgShRAWhNQAehoBNg1QA3gmBigUQAtgKBagPQBRgQA0gUQBHgbA1gtQA9gzAfhFQAOgeAJglQAKgpAagZQAZgYAggCQAfgDAaATQAdAVAMAoIACAEQAhBugKBzQgLB5g5BVQhUCAizAvQg2AOhhAMQhrAPgrAJQgvAJggAOQgqARgdAbQgdAbgRAmQgTApACAqQAAAIgFAGQgEAEgFAAIgDgBg");
	this.shape_5.setTransform(-3.9098,-72.5129);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#4A4238").ss(2).p("Am4JBQAJADAIgHQAIgHgBgMQgBgwAWgwQAUgtAjggQAjggAxgUQAngQA3gMQAxgKCDgRQBygPBBgRQDVg4BliYQBEhnANiPQAMiJgoiDIgCgFQgPgwghgYQgggXglADQgmADgdAcQggAdgLAxQgKAsgSAlQglBShIA9QhAA2hUAgQg/AYhfASQhsATg2ALQh1AYhCAuQhcA+gjB8QgaBaAWBjQAUBaAeAyQAkA6A6AUg");
	this.shape_6.setTransform(-2.0378,-16.7781);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AmyDoQgPgKgEgQQgFgSAHgTQAGgSAOgPQAWgZAugRQA6gVBegFICdgLIAigFQB0gWBhg9QBNgzBMhfIAPgUQArg8AhAgQAXAVgEAqQgIBKhGA+Qg1AthcAlQiUA8iUANIhZAGQg1ADgjAHQhnASgyA7QgIAJgEADQgGADgHAAQgIAAgIgFg");
	this.shape_7.setTransform(3.6881,-8.8568);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8B88B").s().p("Am4JBQg6gUgkg6QgegygUhaQgWhjAahaQAjh8Bcg+QBCguB1gYQA2gLBsgTQBfgSA/gYQBUggBAg2QBIg9AmhSQARgmAKgrQALgxAggdQAdgcAmgDQAmgDAfAXQAiAYAPAwIABAFQAoCDgMCJQgNCPhEBmQhkCZjVA4QhCARhyAPQiCARgyAKQg3AMgmAQQgyAUgjAgQgjAggUAtQgVAwAAAwQABAMgIAHQgFAFgGAAIgGgBg");
	this.shape_8.setTransform(3.6622,-14.3898);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO元件E, new cjs.Rectangle(-75.3,-125.7,148.1,249.10000000000002), null);


(lib.LOGO元件d = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhVBNQgKgMAJgVQAJgUAXgLIArgRQAagPARgXIALgXQAIgQAJgDQAXgJAGAVQAFAQgGAUQgLAegjAjQgXAYgPALQgXASgXAEIgQACQgTAAgIgLg");
	this.shape.setTransform(13.826,45.8261);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4A4238").ss(2.3).p("AEjhYQgZh3AAhbQgBh0AlhUQAOghAagnQAQgYgNgcQgNgcgaAFQhaAPgzBCQhGBbANCzQAEA1AeBRQAnBnAHAbQATBKgSBDQgWBThFgUQhAgTgRhEQgRhGA0gyIAIgJQAUgfgTggQgQgdgdgJQgRgHgagCQhZgJhVA7QhVA7glBcQhGCwBZCnQBRCUCfBGQCfBHB3hAQCHhIAGjdQAChYgWh3QgeiJgOhEg");
	this.shape_1.setTransform(-2.8529,-1.2016);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCFF4B").s().p("AhBJiQifhGhQiUQhainBGiwQAlhcBVg7QBWg7BZAJQAVABAVAHQAeAKAQAcQASAhgUAfIgIAJQgzAzAQBFQASBEBAATQBFAUAWhTQARhDgThKQgGgbgnhnQgehRgEg1QgOizBGhbQAzhDBagOQAagFAOAcQANAbgQAYQgbAngOAiQgkBUAAB0QABBaAYB4IAsDNQAXB3gCBYQgGDdiHBIQg5AehBAAQhJAAhUglg");
	this.shape_2.setTransform(2.856,1.1979);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO元件d, new cjs.Rectangle(-39.5,-68.9,78.7,134.8), null);


(lib.LOGO元件1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#4A4238").ss(0.8).p("AhtjrIWPAAIzLHXI2KAAQgDAAgBgCQgBgBACgBg");
	this.shape.setTransform(-55.0904,-30.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4A4238").p("ArIk3IADE3QAZCDDKBaQDLBaEXAAQEWAADOhaQDMhaAZiDIAAk3g");
	this.shape_1.setTransform(-117.6524,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4A4238").p("ALAAAI1/AA");
	this.shape_2.setTransform(166.425,-7.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4A4238").ss(0.8).p("AAejrIQGAAQBaAAAdArQAdArhHAcIuPFkIgHABI1zAAQgIAAgCgEQgDgEAHgCIS1nMQACgBAFAAg");
	this.shape_3.setTransform(214.7108,-30.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4A4238").ss(0.8).p("AhSjrIV5AAIy1HXI2XAAg");
	this.shape_4.setTransform(84.6692,-30.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#4A4238").ss(0.8).p("AgbjrIVEAAIzTHXI2TAAQgDAAACgBISOm9QBBgZBUAAg");
	this.shape_5.setTransform(-198.1873,-30.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#4A4238").p("Aq/k3IAEE3QAZCEDMBbQDQBdEUgFQEXgEDChYQDAhYAZiDIAAk3g");
	this.shape_6.setTransform(166.4222,23.9104);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#4A4238").p("ArLk3IADE3QAZCDDNBaQDNBaEXAAQEXAADOhaQDMhaAZiDIAAk3g");
	this.shape_7.setTransform(24.4476,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#4A4238").p("ArKk3IADE3QAZCDDLBaQDNBaEWAAQEYAADOhaQDMhaAZiDIAAk3g");
	this.shape_8.setTransform(-261.0274,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4238").s().p("AhIhOIAEgCIB7B0IAAilIASgHIAADXIgEACIh6hyIAACjIgTAHg");
	this.shape_9.setTransform(327.975,-18.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A4238").s().p("AhLBpQgXgWAAgqQAAgfANgfQANgfAYgZQAWgYAdgLQAYgKAVACQAVACATAOIgOAVQgPgLgTgCQgUgCgQAHQgVAIgUAVQgVAWgKAYQgLAYAAAZQAAAYAMASQALARAUAFQAUAFAWgKQAegLATgbQAUgaADgfIg7AXIAAgUIBQggQAAAxgZAoQgaAogqAQQgUAIgSAAQgZAAgSgQg");
	this.shape_10.setTransform(307.175,-10.205);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4238").s().p("AgIhoIARgHIAADYIgRAHg");
	this.shape_11.setTransform(292.825,-4.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A4238").s().p("AgdBzQgOgFgKgUIAPgRQARAdAVgJQAJgDAJgJQAHgIAFgKQAEgKAAgKQAAgLgGgIQgJgLgWgLQgYgLgFgGQgKgMAAgSQAAgNAGgPQAHgPAJgJQALgLAMgFQAMgFAMADQAMADAMAPIgPATQgKgLgIgDQgHgCgJADQgLAFgGALQgIAKABAMQAAAIACAFQACAGAHAEQADADAUAKQAYALAKALQAIANABARQAAAWgQAZQgQAXgVAJQgJADgJAAQgGAAgHgCg");
	this.shape_12.setTransform(282.8,-0.4726);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A4238").s().p("Ag1hWIBqgqIAAAVIhXAjIAABEIBXgjIAAAVIhXAiIAABVIBXgiIAAAVIhqAqg");
	this.shape_13.setTransform(270.7,4.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4A4238").s().p("AhNhcIAmgPQApgQATAAQAbABAPAUQAPAWAAAlQAAAhgLAdQgOAegSASQgTAUgjAOIg6AXgAAKhjQgRABgoAPIgMAFIAACvIAVgJQAmgQAOgLQAWgRAMgYQAMgZgBgeQABgfgNgRQgMgQgWAAIgDAAg");
	this.shape_14.setTransform(253.9,12.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6F9DA8").s().p("A0oDsQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAITJnTIWPAAIzLHXg");
	this.shape_15.setTransform(-57.9393,-30.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7CAFC4").s().p("AnjDdQjJhZgZiEIgDk2IWRAAIAAE2QgZCEjMBZQjOBbkWAAQkXAAjMhbg");
	this.shape_16.setTransform(-119.4,24.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6F9DA8").s().p("AyYDsQgIAAgCgEQgDgEAHgCIS1nMIAHgBIQGAAQBaAAAdArQAdArhHAcIuPFkIgHABg");
	this.shape_17.setTransform(212.9608,-30.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6F9DA8").s().p("A0lDsITTnXIV5AAIy1HXg");
	this.shape_18.setTransform(82.95,-30.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6F9DA8").s().p("A0yDsQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAISOm9QBBgZBUAAIVEAAIzTHXg");
	this.shape_19.setTransform(-201.0444,-30.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7CAFC4").s().p("AnWDfQjMhbgZiEIgEk3IV/AAIAAE3QgZCDjABYQjCBYkXAEIgZABQkFAAjGhZg");
	this.shape_20.setTransform(164.675,24.2604);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7CAFC4").s().p("AniDdQjNhZgZiEIgDk2IWXAAIAAE2QgZCEjMBZQjOBbkXAAQkXAAjNhbg");
	this.shape_21.setTransform(22.7,24.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7CAFC4").s().p("AnjDdQjLhZgZiEIgDk2IWVAAIAAE2QgZCEjMBZQjOBbkYAAQkWAAjNhbg");
	this.shape_22.setTransform(-262.775,24.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO元件1, new cjs.Rectangle(-334.3,-55.3,669.6,111.4), null);


(lib.LOGO元件圓點 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#4A4238").ss(2.3).p("AgBhiQgRACgTALQgTANgIAOQgJAQgDAnQgFBMAsARIATAHIAIACQAcABAOgGQAfgQALgzQAKgwgUghQgTgigtgIQAAAAgBgCg");
	this.shape.setTransform(-2.8336,-1.2109);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFF4B").s().p("AgKBjIgSgFIgJgEQgtgRAFhMQADgnAJgRQAJgOATgMQATgLARgCIABACQAtAIAUAiQAUAigLAvQgKAyggARQgLAFgVAAIgKAAg");
	this.shape_1.setTransform(2.8557,1.1891);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO元件圓點, new cjs.Rectangle(-15.9,-13.1,26.6,27.299999999999997), null);


(lib.LOGO元件小e = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#4A4238").ss(2.3).p("AEaBUQBRhSAhhTQAZhBgChBQgEieh7hcQg4gqg/gJQhCgJg5AcQiJBFheEMQgiBhgIAeQgSA/gDBCIgDAfQAAAYACAXQgwATgeANQg3AXgWAQQgYARAHAhQAIAhAcABQAXABA6gFQAfgCAygFQAOAqAWAiQAvBIBLAcQBFAbBOgPQBDgMA6gbQBNgkAdgyQAbgugiAEQguAPgMADQhXAXg/gMQgmgGgjgXQgdgTgkgoIAAAAQC1g9CJiLgADAiQQgIA9hCBMQgxA1gTAQQg3ArgKg1QgDgSAIgdQAMgrAYgtQASgiAfgtQAVgdALgNQAVgXATgDQAWgEAMAVQALARABAdQAAAQgBAHg");
	this.shape.setTransform(-2.8336,-1.1509);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhTBQQgGgQAFgUQAIgdAhgoQAXgaANgMQAWgUAWgGQAfgHANANQALALgIAVQgIAVgWANQgcANgOAIQgZARgPAYIgKAYQgGAQgJAEQgIAEgGAAQgLAAgFgNg");
	this.shape_1.setTransform(6.7298,-31.7565);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCFF4B").s().p("Ag9HyQhLgdgvhIQgXgjgNgoQiFAMgdgBQgcgBgIghQgHghAYgRQAWgQA3gXIBOggQgCgXAAgYIADgfQADhCASg/QAIgdAihiQBfkMCIhFQA5gcBCAJQA/AJA4AqQB8BcADCeQACBCgZA/QghBUhRBSQiJCKi1A+IAAAAQAkAnAeAUQAiAWAmAHQA/AMBXgXIA6gSQAigEgbAuQgdAyhNAkQg5AbhEAMQgcAFgaAAQgwAAgtgRgACTjmQgTADgVAXQgMANgTAcQhBBdgVBLQgIAfADAPQAKA2A3grQAUgQAwg1QBChMAIg+QACgLgBgLQgBgdgLgRQgKgSgRAAIgHABg");
	this.shape_2.setTransform(2.8752,1.2377);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO元件小e, new cjs.Rectangle(-52.9,-56.7,97.69999999999999,109.5), null);


(lib.手機元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#4A4238").ss(2).p("Ag3hoIIQAQInRDBIoCgTQgEAAADgBg");
	this.shape.setTransform(6.4592,-220.6743);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4A4238").ss(2).p("Aj/iOIgGCJQAGA5BHArQBHArBlAEQBmAFBNglQBNglALg6IAGiKg");
	this.shape_1.setTransform(-18.8797,-197.7935);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4A4238").ss(2).p("AEUAKIongT");
	this.shape_2.setTransform(88.05,-207.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4A4238").ss(2).p("AAJhsIGVANQAkABALAUQALAUgcAMIlsCWIgDABIoYgUQgDAAgBgCQgBgCACgBIHVi/g");
	this.shape_3.setTransform(106.8639,-217.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4A4238").ss(2).p("AghhqIIXAQInVDFIoWgUg");
	this.shape_4.setTransform(57.1529,-218.8994);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#4A4238").ss(2).p("AgYhmIHlAPInIC+In1gSQgBAAAAgBIGkixQAXgKAeABg");
	this.shape_5.setTransform(-45.2375,-222.3756);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#4A4238").ss(2).p("AkNiSIgDCNQAHA8BNAsQBOAuBrACQBsADBMglQBMglAMg8IAEiOg");
	this.shape_6.setTransform(87.4129,-193.507);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#4A4238").ss(2).p("AkIiQIgFCLQAHA6BKArQBLAsBoAFQBoAEBQglQBOgmAMg7IAFiLg");
	this.shape_7.setTransform(33.4664,-195.6688);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#4A4238").ss(2).p("Aj3iMIgHCHQAFA4BFArQBFAqBjAFQBiAEBLgkQBLglAMg6IAHiIg");
	this.shape_8.setTransform(-70.176,-199.7931);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8B88B").s().p("AneBSQgFAAAFgCIG7izIIFAQInIC3g");
	this.shape_9.setTransform(5.8934,-222.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8B88B").s().p("AgLCHQhjgEhGgpQhFgpgGg2IAFiCIH6ATIgGCCQgLA4hMAiQhDAghYAAIgTgBg");
	this.shape_10.setTransform(-17.15,-200.3295);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8B88B").s().p("AnCBUQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIHLi2IGPAMQAjABALATQALATgcALIlkCPIgDAAg");
	this.shape_11.setTransform(106.0658,-218.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8B88B").s().p("AnrBTIHLi3IIMAPInLC6g");
	this.shape_12.setTransform(57.35,-220.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8B88B").s().p("AnVBRIAAgBIGbioQAZgKAbABIHcAOIm/C1g");
	this.shape_13.setTransform(-44.7375,-223.7098);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8B88B").s().p("AgCCMQhpgDhMgrQhMgrgHg4IADiGIISATIgDCHQgLA5hLAjQhGAhhhAAIgNAAg");
	this.shape_14.setTransform(87,-196.1917);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8B88B").s().p("AgJCJQhmgEhJgqQhJgpgGg3IAEiEIIMATIgFCFQgLA4hOAjQhFAghZAAIgWgBg");
	this.shape_15.setTransform(34.15,-198.2747);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8B88B").s().p("AgMCGQhggFhEgoQhDgogGg2IAHiAIHsARIgHCCQgLA2hKAjQhCAfhVAAIgTAAg");
	this.shape_16.setTransform(-67.425,-202.2292);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#4A4238").p("AEOjzIobHn");
	this.shape_17.setTransform(-124.875,168.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#4A4238").p("Ah3koIDvJR");
	this.shape_18.setTransform(-124.85,168.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4A4238").s().p("AC+BPImXg7QgMgBgFgNQgGgNAFgQIAFgSQAFgRAMgKQALgLANACIGWA5QANACAFANQAGAMgFARIgFASQgEARgMALQgLAJgLAAIgDAAg");
	this.shape_19.setTransform(-78.5678,194.994);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4A4238").s().p("AIiCLIxnibQgMgCgFgNQgFgNAEgRIALgoQAFgRAMgLQAMgKAMABIRnCYQANACAGANQAFANgEASIgMApQgEARgNALQgKAKgMAAIgDAAg");
	this.shape_20.setTransform(-37.075,180.2746);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4A4238").s().p("AIiCIIxniWQgMgBgFgNQgGgNAFgRIALgoQAFgRAMgLQALgKANABIRnCSQANACAGANQAGAOgFARIgLApQgFARgMALQgLAKgMAAIgDAAg");
	this.shape_21.setTransform(-31.3376,159.2746);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#4A4238").p("ABgEyIlcgyQgMgCgFgNQgGgNAFgQICGnhQAFgQAMgLQALgLAMACIFdAtQAMACAFANQAFANgEAQIiHHmQgFARgLAKQgMALgMgCg");
	this.shape_22.setTransform(-124.8375,168.7254);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#4A4238").p("AMEH0I7bkBQgMgCgFgMQgGgNAFgRIC5qWQAFgRALgKQAMgLAMACIbfDgQANACAFANQAGAOgFARIi7K0QgFARgNALQgMALgNgCg");
	this.shape_23.setTransform(-58.8054,178.056);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#4A4238").p("AiDksIEHJZ");
	this.shape_24.setTransform(29.525,97.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#4A4238").p("AEbj8Io1H5");
	this.shape_25.setTransform(29.525,96.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4A4238").s().p("AC6BJImPgxQgMgBgFgNQgFgMAEgQIAFgRQAFgRALgKQAMgLAMACIGPAvQAMACAGANQAFALgFARIgEARQgFARgMALQgKAJgLAAIgDAAg");
	this.shape_26.setTransform(-99.2822,101.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4A4238").s().p("AIXB8IxRiAQgMgBgFgNQgFgNAFgQIALgoQAEgQAMgLQAMgKAMABIRRB9QAMABAGANQAGANgFARIgLApQgFARgMALQgLAJgLAAIgDAAg");
	this.shape_27.setTransform(-58.4928,86.5297);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4A4238").s().p("AIYB5IxSh7QgMgBgFgNQgFgMAEgRIALgnQAFgQAMgLQALgLAMABIRSB5QANAAAFANQAGANgFARIgLApQgEARgNALQgKAKgLAAIgDgBg");
	this.shape_28.setTransform(-52.7876,65.9047);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#4A4238").p("AkIEJIFzAuQAMABANgLQAMgLAFgRICHnxQAFgSgGgNQgGgNgNgBIlzgoQgMgCgNALQgMALgFARIiGHsQgFARAGAOQAFANANABg");
	this.shape_29.setTransform(29.5578,97.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#4A4238").p("AvZEDIbgDcQANABAMgLQAMgLAFgRIC7qvQAEgRgGgNQgGgNgNgBI7ii8QgMgBgLAKQgMALgFAQIi3KSQgFAQAFANQAGANALABg");
	this.shape_30.setTransform(-34.6101,90.0746);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#4A4238").p("AEOj3IobHv");
	this.shape_31.setTransform(-76.925,-4.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#4A4238").p("Ah5kcIDzI5");
	this.shape_32.setTransform(-76.925,-3.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4A4238").s().p("AC/BFImYgpQgNgBgFgNQgFgNAEgPIAFgRQAEgRAMgLQAMgKAMABIGZAoQANABAFANQAGAMgFAQIgFASQgEAQgMALQgLAKgLAAIgDAAg");
	this.shape_33.setTransform(-30.3072,19.9547);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4A4238").s().p("AIlByIxshtQgMgBgFgLQgGgNAFgQIALgoQAFgRALgLQAMgKAMABIRsBpQANABAGAMQAGANgFARIgLApQgFARgMALQgLAKgLAAIgDAAg");
	this.shape_34.setTransform(11.2124,4.0047);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4A4238").s().p("AIlBvIxshnQgMgBgFgMQgGgMAFgRIALgnQAEgRAMgLQAMgKAMAAIRsBkQANABAGAMQAGANgFARIgLApQgEARgNALQgLALgMAAIgCgBg");
	this.shape_35.setTransform(16.8874,-16.697);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#4A4238").p("ABhEnIldgkQgMgBgFgMQgFgNAEgQICEnaQAFgQAMgLQALgLAMABIFeAfQAMABAGAMQAFANgEAQIiFHfQgFAQgMALQgLALgNgBg");
	this.shape_36.setTransform(-76.8803,-3.875);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#4A4238").p("AMJHKI7ii3QgMgBgFgMQgGgNAFgQIC2qNQAFgQALgLQAMgLAMABIbmCYQANABAFANQAGAMgEARIi5KqQgFARgMALQgNALgNgBg");
	this.shape_37.setTransform(-10.6048,2.6797);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#4A4238").p("AiFkfIELI/");
	this.shape_38.setTransform(77.65,-79.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#4A4238").p("AEbkAIo1IB");
	this.shape_39.setTransform(77.65,-79.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4A4238").s().p("AC7BAImQggQgNgBgEgMQgGgNAEgPIAFgRQAFgQAMgLQAMgKALAAIGRAfQANABAEANQAGAMgFAPIgEARQgEARgMALQgMAKgLAAIgCAAg");
	this.shape_40.setTransform(-51.6,-70.172);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4A4238").s().p("AIaBlIxVhUQgMgBgFgMQgGgLAFgQIAKgnQAFgRAMgLQALgKAMAAIRWBRQANABAFAMQAGAMgEARIgLAoQgFAQgMALQgLALgMAAIgCAAg");
	this.shape_41.setTransform(-10.7048,-86.5721);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4A4238").s().p("AIaBiIxWhPQgMAAgFgNQgFgLAEgQIALgnQAFgQAMgLQALgLAMABIRWBLQANABAGAMQAGAMgFAQIgLApQgFAQgMALQgLALgMAAIgCAAg");
	this.shape_42.setTransform(-5.1048,-106.8971);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#4A4238").p("AkHENIF0AeQANABAMgLQAMgLAFgRICFnqQAFgRgGgNQgGgMgNgBIl1gZQgMgBgNALQgMALgEARIiFHlQgFARAGAMQAGANANABg");
	this.shape_43.setTransform(77.675,-79.55);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#4A4238").p("AvaEjIbmCSQANABAMgLQAMgMAFgRIC4qkQAEgRgGgNQgGgMgNgBI7phzQgMgBgLALQgMALgEAQIi1KIQgFAQAGAMQAFANAMABg");
	this.shape_44.setTransform(13.2452,-84.047);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#4A4238").p("AEOj7IobH3");
	this.shape_45.setTransform(-29.65,-174.25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#4A4238").p("Ah7kQID2Ih");
	this.shape_46.setTransform(-29.65,-174);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4A4238").s().p("ADAA8ImagYQgMgBgGgMQgFgMAEgQIAFgQQAEgRAMgLQAMgLAMABIGbAXQAMABAGAMQAFAMgEAQIgFARQgEARgMALQgLAKgMAAIgCAAg");
	this.shape_47.setTransform(17.225,-152.5721);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4A4238").s().p("AInBaIxvg+QgNgBgFgMQgGgMAFgPIALgoQAEgQAMgLQAMgLAMABIRwA7QANABAGAMQAGANgFAPIgLApQgEAQgNAMQgLAKgMAAIgCAAg");
	this.shape_48.setTransform(58.8202,-169.7221);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4A4238").s().p("AIoBYIxwg6QgNAAgFgMQgGgMAFgQIALgnQAEgQAMgLQAMgLAMAAIRwA3QANABAGAMQAGAMgEAQIgLAoQgFAQgMAMQgMALgMAAIgBAAg");
	this.shape_49.setTransform(64.3952,-190.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#4A4238").p("ABjEcIlegWQgMAAgGgMQgFgMAEgQICDnUQAEgQAMgLQAMgKAMAAIFfARQAMAAAGAMQAFAMgEAQIiDHYQgFAQgMALQgLAMgNgBg");
	this.shape_50.setTransform(-29.625,-174.0221);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#4A4238").p("AMOGhI7qhvQgMAAgFgNQgFgMAEgQIC0qDQAFgQALgLQAMgLAMAAIbsBRQANAAAGAMQAGANgEAQIi3KgQgEARgNALQgMAMgNgBg");
	this.shape_51.setTransform(36.9202,-170.1721);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#4A4238").ss(2).p("EAFtAlSQgNAxgeAfQgeAggdgFI9SkaQgbgEgJgkQgJgkANguMATlhGGQAMgtAcgfQAcgeAaAAIGrAQIAAAAQgJAeAIAWQAHAWATABIOVAiQAUABAUgVQAVgWAIgeIAAgBIHJARQAdABAMAiQAMAhgNAvgEAZdgnzI9nhAQg1gCg3A+Qg4A+gZBaMgTkBF/QgaBcATBIQATBHA0AIIdSEgQA6AJA8g/QA8g/AahiMAT6hJoQAahdgYhEQgXhEg7gCg");
	this.shape_52.setTransform(-6.9376,-1.0522);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F8B88B").s().p("EADnAozI9SkgQg0gIgThHQgThIAahcMATkhF/QAZhaA4g+QA3g+A1ACIdnBAQA7ACAXBEQAYBEgaBdMgT6BJoQgaBig8A/Qg0A3g0AAIgOgBgEgFegmpQgcAfgMAtMgTlBGGQgNAuAJAkQAJAkAbAEIdSEaQAdAFAeggQAegfANgxMAT6hJhQANgvgMghQgMgigdgBInJgRIAAABQgIAegVAWQgUAVgUgBIuVgiQgTgBgHgWQgIgWAJgeIAAAAImrgQIAAAAQgbAAgbAeg");
	this.shape_53.setTransform(-6.9376,-1.0522);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#4A4238").ss(2).p("EAKBgobIA0ATQA+AbArAuQCMCThcERMgSFBGnQgUAqgqAmQhUBNhrgQIjtggIBGgGQBIgQAOgzMAVKhNOQAKgLgEgWQgHgrhDgxg");
	this.shape_54.setTransform(90.9623,3.999);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F8B88B").s().p("EgJdAoZIjsggIBFgGQBJgQAOgzMAVKhNOQAJgLgDgWQgIgrhDgxIA1ATQA9AbAsAuQCLCThcERMgSFBGnQgUAqgqAmQhEBAhVAAQgTAAgTgDg");
	this.shape_55.setTransform(95.0031,3.9706);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("EADoAozI9SkgQg1gIgThHQgThIAahdMAOggz1QANhQAnhpIERvQQAZhaA3g+QA3g+A1ACIdoBAQA6ACAXBEQAYBEgaBdMgT6BJoQgaBig8A/Qg0A3gzAAIgOgBg");
	this.shape_56.setTransform(-6.4376,-1.5526);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.手機元件, new cjs.Rectangle(-181.3,-264,361.5,527.8), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#78ABBA").s().p("EAG9AgSQr7gMqeikQr9i8p1mBQpil1nHouQndpHi0p8QD4G5F7GBQFxF3G3ENQJ1GBL9C8QKeCkL8AMQOmAOLfjhQNJkCIAooQGhnBCXqOQCYqbiwqUQDkGABcG3QBYGigqGrQgqGfihF1QihF2kDEYQoBIotIECQq0DTtlAAIhtAAg");
	this.shape.setTransform(410.467,206.641);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,821,413.3), null);


(lib.Path_2_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7CAFC4").s().p("EAHsAqgQr8gMqeikQr9i8p1mBQqymmniqHQn/qthsrQQg3lvBLlkQBJlcC6kXQC9kdEQikQEgitFUgOQEDgKFYBJQCkAjHEB9QGFBrDhAlQFPA2EGgnQELgpE8iBQC2hLFgihQE6iGD1gsQFEg7FRA/QHfBZHBEwQHAEwErG4QEKGHB1HKQBvGyghHBQggG1ijGJQijGKkQElQoBIptIEBQqzDUtiAAIhwgBg");
	this.shape.setTransform(415.1147,272.0797);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,830.3,544.2), null);


(lib.Path_2_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#DBA182").s().p("EgJzAgOQhtg6iDgvQhrgmiMgkQkkhGiQgpQj6hHiuheQkkieiOjYQh8i9gWj/QgQjCAqkxQA4lgAWi4QA4nfDkmjQDfmaFzlDQGPlcH8jNQkJEnigFcQikFkguGJQgVC4g5FhQgqExARDCQAVD/B8C8QCODYElCeQCtBeD6BHQCRApEiBGQCOAlBqAmQCDAuBsA6QMIGcLggwQEKgSEDhTQk9GCmwDqQm+DyngAfQhNAFhNAAQqXAAq2lxg");
	this.shape.setTransform(255.9774,243.0754);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0.1,0,511.79999999999995,486.2), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FCFF4B").s().p("EAGuAieQhagZhag7Qg+gphQhDIiHh4QipiSiAgvQh3gsi8AgIieAeQheARhCACQjZAIjYg1Qjqg6i/h3QnGkchWobQgMhJgDhtQgCg9ABh+QAAgoAXiFQAShtgMhAQgOhJgyhWQhOiEgGgMQhDiQAIjMQAIjBBHi7QA8ifB+i3QCWjLBHhmQBmiTCThgQCLhbCRgYQCHgWC0ASQBoALDNAdQAgAEBLAPQBEALApgMQApgLBHg1QBSg9AegOQDthzEOAWQDqAUD1B3QDcBrDNC+QBVBOBSCSQAvBUBbCyQBSCSDYBWQBGAcBzAhQCJAoAhALQD3BUCtC/QDWDqgDExQgCERiLEzQgxBthYCKQhkCZgxBQQgtBJg+CVQhECkgjBBQh2DWiWCuQiYCvirBzQjVCQjmAsQhiATheAAQh/AAh6gig");
	this.shape.setTransform(254.2536,224.0057);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,508.5,448.1), null);


(lib.Path_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7CAFC4").s().p("EAHsAqgQr8gMqeikQr9i8p1mBQqymmniqHQn/qthsrQQg3lvBLlkQBJlcC6kXQC9kdEQikQEgitFUgOQEDgKFYBJQCjAjHFB9QGFBrDhAlQFPA2EGgoQELgoE8iBQC2hLFgihQE6iGD1gsQFEg7FRA/QHfBYHBExQHAEwErG4QEKGHB1HKQBvGyghHBQggG1ijGJQijGKkQElQoAIotJECQq0DUtkAAIhtgBg");
	this.shape.setTransform(415.1147,272.0769);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,830.3,544.2), null);


(lib.Path_1_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F8B88B").s().p("EgOJAiEQhtg6iDgvQhpgliOgmQkkhGiQgpQj6hHiuhdQkkieiOjYQh8i9gWj/QgQjCApkxQA5lhAVi3QA5nfDkmjQDfmbFylCQFhk0G7jFQG7jGHXg9QHlg+HEBcQHfBiGJEHQFcDpEHFcQEAFSCQGXQCQGXANGkQAOG0iBGNQhuFTjTEtQjPEokaDkQkcDllJCHQlUCLlhAXQhMAFhNAAQqXAAq2lxg");
	this.shape.setTransform(283.7838,254.8607);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0.1,0,567.5,509.8), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FCFF4B").s().p("Egn6AlBQhqhhhQiLQhIh+guiZQgih1gTioQgSi9gOhhQgMhXg1iaQg6ipgOhLQgxj2AQj2QAPj5BQjfQBjkXC/jiQC9jhD9iNQBpg7CIgmQBbgZCBgWQBLgNCVgWQEUgtChhOQCWhHCgi3QAtgyBXhpQBPhcA/g5QDOi+D7iVQEQihEWhSQKUjDHuElQBDAoBWBHQAtAlBiBZQAeAbBQBuQBBBZA9AiQBFAmBzAPQCxAYAOADQCwAoCTCSQCKCJBJC8QA+CfAQDoQAJCFAIEHQAMC6hHC/QhDCzh8CMQhzCDi+CNQjfCdhtBPQhOAzgpAcQhLAzgfArQgfAqgeBhQgiBwgSAiQiREZkaDYQj0C7lKB/QkmBzlcAvQiPATi9gdQjbgrhzgRQi/gdkVB+QhaApiJBLQilBagoAVQkxCZk7ATQgnADglAAQlOAAjPi9g");
	this.shape.setTransform(311.7991,255.564);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,-0.2,623.6,511.59999999999997), null);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F8B88B").s().p("EgOJAiEQhtg6iDguQhqgmiOglQkjhGiRgpQj6hHitheQklieiOjYQh8i9gVj/QgRjCAqkxQA5lhAVi3QA5nfDjmjQDgmaFylDQFhk0G7jFQG6jGHXg9QHmg+HEBcQHfBiGJEHQFcDpEHFcQEAFSCQGXQCQGXANGkQAOG0iBGOQhuFSjTEtQjPEokaDkQkdDllICHQlUCLlhAXQhMAFhOAAQqVAAq3lxg");
	this.shape.setTransform(283.8063,254.8654);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0.1,0,567.5,509.8), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F9F94B").s().p("ABHY4QhXgYhcg8Qg/gphPhDIiIh4QipiRiAgwQh3gri8AfIieAeQheARhCACQjdAIjdg3Qjwg8jBh9QAcAAAhAFQBzASDbAqQC+AeCPgUQFbgwEnhxQFKiAD0i7QEZjYCRkYQASgjAihvQAdhgAfgrQAggrBKgzQApgcBOgyQBuhQDfidQC+iNBziDQB0iDBDipQBGiygCixQBqAfAhALQD2BUCuC/QDWDqgDExQgCERiLE0QgyBthXCJQhlCZgxBQQgsBJg+CWQhECjgkBBQh1DXiWCtQiZCvirBzQjUCQjnAsQhhAUhfAAQh/AAh5gjg");
	this.shape.setTransform(218.3515,162.652);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,436.7,325.3), null);


(lib.figma元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABKBTQgWgBgHgQQgEgVgFgJQgKgVgbgQQgXgOgfgJIgfgGQgTgEgJgHQgDgCgBgDQgGgZAygIQAkgFAiAEQBTAKAdAuQAQAagGAmQgGArgkAAIgCAAg");
	this.shape.setTransform(29.985,-34.9068);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4A4238").p("AC2HlIlrAAQh9AAhZhZQhZhZAAh9IAAlrQAAh9BZhZQBZhZB9AAIFrAAQB9AABZBZQBZBZAAB9IAAFrQAAB9hZBZQhZBZh9AAg");
	this.shape_1.setTransform(1.425,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4238").s().p("AjZFSQgpgpAAg6QAAgiARgfQAQgeAcgTQgggRgTgfQgUgfAAglIAAgIQAAgoAWggQAWghAkgPQgjgPgXggQgWghAAgoIAAgJQAAg1AmgmQAmgmA2AAIEVAAQA2AAAmAmQAmAmAAA1IAAAJQAAAngWAhQgWAggjAPQAhAUAVAgQAUAiAAAmQAAA8gqApQgpApg7AAQg+AAgpgsIAACeIgBAAQgIAygmAiQgnAig0ABQg5AAgpgpgAjCCsQgaAcAAAnQAAAqAdAeQAeAeAqAAQAmAAAdgZQAcgaAFglIAAhyIhvAAQgnAEgZAdgAAxhEQgdAegBAoIAAAEQABArAdAdQAeAeArAAQArAAAegfQAegeABgrQgBgpgegfQgegegrAAQgrAAgeAegAjLg/QgbAbAAAlIAAAIQAAAlAbAcQAbAbAmAAIB3AAIAAi/Ih3AAQgmAAgbAbgAATiUIB4AAQAmAAAagbQAbgaAAgmIAAgJQAAgmgbgaQgagbgmAAIh4AAgAjLk4QgbAaAAAmIAAAJQAAAmAbAaQAbAbAmAAIB3AAIAAi/Ih3AAQgmAAgbAbg");
	this.shape_2.setTransform(0.55,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCFF4B").s().p("Ai1HlQh9AAhZhZQhZhZAAh9IAAlrQAAh9BZhZQBZhZB9AAIFrAAQB9AABZBZQBZBZAAB9IAAFrQAAB9hZBZQhZBZh9AAg");
	this.shape_3.setTransform(-1.375,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.figma元件, new cjs.Rectangle(-49.9,-49.5,100.9,99.1), null);


(lib.ENTER元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAAAVQgJgBgHgGQgJgIACgLQABgKANgEQAIgDAIACQAKACAEAGQAFAHgCAIQgCAJgHAFQgGAFgHAAIgCgBg");
	this.shape.setTransform(70.9929,-14.3417);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAzAeIhZgCQgcgBgJgUQgKgTAdgKQAbgKAfADQAhACAYAOQANAHAEAIQADAFAAAGQAAAHgEAEQgGAHgOAAIgEgBg");
	this.shape_1.setTransform(56.3968,-22.4948);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4238").s().p("AA2CIIhhh+IgQAAIAAB+IgbAAIAAkPIA2AAQAqAAATADQAYAGAPASQAPATAAAaQAAAXgKARQgLARgTAHQgUAJghAAIBhB+gAg7gQIAvABQAaAAAOgGQANgFAHgLQAHgLAAgPQAAgNgHgMQgIgLgMgFQgNgFgaAAIgwAAg");
	this.shape_2.setTransform(42.025,-2.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4238").s().p("AhNCIIAAkPICbAAIAAAaIiAAAIAABWIB/AAIAAAaIh/AAIAABrIB/AAIAAAag");
	this.shape_3.setTransform(20.65,-2.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4238").s().p("AgNCIIAAj1Ig9AAIAAgaICVAAIAAAaIg9AAIAAD1g");
	this.shape_4.setTransform(1.425,-2.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4238").s().p("ABlCIIizjNIAADNIgcAAIAAkPIAGAAIC0DQIAAjQIAbAAIAAEPg");
	this.shape_5.setTransform(-20.7,-2.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4238").s().p("AhNCIIAAkPICbAAIAAAaIiAAAIAABWIB/AAIAAAaIh/AAIAABrIB/AAIAAAag");
	this.shape_6.setTransform(-43.95,-2.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#4A4238").p("AJIE9IyPAAQhbAAhBhBQhChBAAhcIAAi9QAAhcBChBQBBhBBbAAISPAAQBcAABBBBQBBBBAABcIAAC9QAABchBBBQhBBBhcAAg");
	this.shape_7.setTransform(-1.1,-2.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8B88B").s().p("ApGE9QhcAAhChBQhBhBAAhcIAAi9QAAhcBBhBQBChBBcAAISNAAQBdAABBBBQBBBBAABcIAAC9QAABchBBBQhBBBhdAAg");
	this.shape_8.setTransform(1.15,2.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.7,-34.8,164.5,68.69999999999999);


(lib.DW元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AA1BLIgVgWQgMgNgKgHQgRgMgogHQgogGgTgJQghgTgBgWQgBgTAfgQQANgIAWgFQAogJAnAIQAmAJAgAWQAgAYATAhQASAegCAZQgCAPgJANQgKAMgOADIgJABQgVAAgXgVg");
	this.shape.setTransform(28.8387,-34.101);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4238").s().p("ABGCuQgJAAgGgFQgHgGgCgIIgsjUQAAgBAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQgDAAgBADIgwDUQgDAJgGAFQgHAFgJAAIg2AAQgIAAgGgFQgHgFgCgIIhLkrQgCgLAHgKQAHgJAMAAIAcAAQAIAAAHAFQAGAGACAIIAwDXQABAEADAAQABAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBIA0jYQACgJAGgFQAHgFAJAAIArAAQAIAAAHAFQAGAFADAJIAxDWQABAEAEAAQAEAAABgEIA1jXQACgIAHgFQAGgFAJAAIAZAAQAMAAAIAJQAHAKgDAMIhUErQgCAIgHAEQgGAFgJAAg");
	this.shape_1.setTransform(17.5371,4.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4238").s().p("Ai2DnIAAnNICgAAQBJAFAxAkQAZARAKARQA3BGgIBjQgFAygPAkQgpBQhGAhQgWALgWAFIgRACgAhcCSIBKAAIANgDQAPgEAPgKQAugdALg+QAHgagCggQgFhBgtghQgGgGgMgGQgYgMghAAIg2AAg");
	this.shape_2.setTransform(-25.1242,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4A4238").p("ADCIEImCAAQiFAAhfhfQhfhfAAiFIAAmBQAAiGBfheQBfhfCFAAIGCAAQCFAABfBfQBeBeAACGIAAGBQAACFheBfQhfBfiFAAg");
	this.shape_3.setTransform(-1.425,-0.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8B88B").s().p("AjAIEQiFAAhfhfQhfhfAAiFIAAmCQAAiFBfhfQBfheCFAAIGBAAQCGAABfBeQBeBfAACFIAAGCQAACFheBfQhfBfiGAAg");
	this.shape_4.setTransform(1.425,1.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DW元件, new cjs.Rectangle(-54,-53.6,107.1,106.30000000000001), null);


(lib.AN元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABfBZQgJgEgKgHIgRgOQhQg/hmgKQgIAGgIgDQgIgDgEgKQgDgKAEgKQAEgKAIgHQALgKAagJQBTgeA9AUQBCAVAkBPQAJAVgBAUQgBAXgPAKQgKAFgKAAQgLAAgLgFg");
	this.shape.setTransform(24.3905,-31.8561);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4238").s().p("ABNCoQgLAAgIgIQgIgIAAgLIAAjDQAAgEgDgDQgKgNgPgGQgJgDgHAAIgBAAQgfgFgXAUQgFAEAAAGIAADHQAAALgIAIQgHAIgMAAIgkAAQgLAAgHgIQgIgIAAgLIAAkZQAAgJAGgGQAGgHAJAAIAyAAQAIAAADAJIAAABQACAGAGACQAHADAFgEQAggTAhgCQATgCANAEIACAAQAlAFAXAhQAOAUAFAVIABADIAGDeQABALgIAJQgIAIgMAAg");
	this.shape_1.setTransform(19.9765,3.1775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4238").s().p("AB7DQQgIAAgGgFQgGgEgCgHIgYhFQgFgQgRAAIh0AAQgQAAgGAPIgZBGQgCAHgGAEQgGAEgHABIglAAQgLAAgHgKQgHgJAEgMIB6lwQAFgQAQAAIBNAAQAPAAAGAPICGFxQAEALgHAKQgHAKgMAAgAgIhsIgnB4QgCAFADAEQAEAFAFgBIBDAAQAGAAAEgEQADgFgBgGIgih1QgCgHgGAAQgGAAgCAGg");
	this.shape_2.setTransform(-17.5821,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4A4238").p("AC2HlIlrAAQh9AAhZhZQhZhZAAh9IAAlrQAAh9BZhZQBZhZB9AAIFrAAQB9AABZBZQBZBZAAB9IAAFrQAAB9hZBZQhZBZh9AAg");
	this.shape_3.setTransform(-1.075,-0.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCFF4B").s().p("Ai1HlQh9AAhZhZQhZhZAAh9IAAlrQAAh9BZhZQBZhZB9AAIFrAAQB9AABZBZQBZBZAAB9IAAFrQAAB9hZBZQhZBZh9AAg");
	this.shape_4.setTransform(1.125,0.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AN元件, new cjs.Rectangle(-50.6,-50.3,100.30000000000001,99.69999999999999), null);


(lib.AI元件 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AA9BgQgKgdgIgNQgWgmg3gPQhJgTgQgLQgKgHgEgIQgFgHgCgJQgBgQAOgLQAFgEAYgLQAwgWBGASQBIASAfArQAZAiABA5QACBBgvAEIgGAAQgWAAgLgTg");
	this.shape.setTransform(30.4953,-29.9122);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4238").s().p("AgRCmQgMAAgIgJQgJgIAAgMIAAkRQAAgMAJgIQAIgJAMAAIAiAAQAMAAAJAJQAJAIgBAMIAAERQABAMgJAIQgJAJgMAAg");
	this.shape_1.setTransform(20.55,8.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4238").s().p("AgpAqQgRgRAAgZQAAgXARgSQARgRAYAAQAZAAAQARQASASAAAXQAAAZgSARQgQARgZAAQgYAAgRgRg");
	this.shape_2.setTransform(20.5,-16.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4238").s().p("ACBDaQgRAAgGgRIgZhIQgCgHgHgEQgGgFgIgBIh6AAQgRABgGAQIgaBIQgGARgRAAIgmAAQgMAAgHgKQgHgKADgLICAmEQACgHAHgFQAGgEAIAAIBQAAQARAAAGAPICMGEQAEAMgHAKQgHAKgMAAgAgJhxIgpB9QgCAGAEAEQADAFAGAAIBGAAQAHAAAEgFQAEgGgCgGIgkh7QgCgGgGAAQgHgBgCAHg");
	this.shape_3.setTransform(-9.0356,3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4A4238").p("AC/H+Il9AAQiDAAheheQheheAAiDIAAl9QAAiEBehdQBeheCDAAIF9AAQCEAABdBeQBeBeAACDIAAF9QAACDheBeQhdBeiEAAg");
	this.shape_4.setTransform(0.725,1.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8B88B").s().p("Ai+H+QiDAAheheQheheAAiDIAAl9QAAiEBehdQBeheCDAAIF9AAQCEAABdBeQBeBeAACDIAAF9QAACDheBeQhdBeiEAAg");
	this.shape_5.setTransform(-0.725,-1.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AI元件, new cjs.Rectangle(-51.7,-52.5,104.4,106), null);


(lib.黃色區塊元件 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path();
	this.instance.setTransform(127.7,103.45,1,1,0,0,0,218.3,162.7);
	this.instance.alpha = 0.6914;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(-38.45,-11.5,1,1,0,0,0,311.8,255.6);
	this.instance_1.alpha = 0.1992;

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(96.05,43.25,1,1,0,0,0,254.2,224);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.黃色區塊元件, new cjs.Rectangle(-350.3,-267.3,700.7,534.6), null);


(lib.黃色氣球動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.黃色氣球元件();
	this.instance.setTransform(0.4,0.5,1,1,0,0,0,0.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.3,scaleX:1.081,x:0.3},15).to({regX:0.4,scaleX:1,x:0.4},17).to({regX:0.3,scaleX:1.081,x:0.3},19).to({regX:0.4,scaleX:1,x:0.4},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.3,-118.3,133.5,237.5);


(lib.黃色圓形2動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.黃色圓形2元件();
	this.instance.setTransform(-0.2,0.2,1,1,0,0,0,-0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.8925,y:0.25},20).to({scaleY:1,y:0.2},20).to({scaleY:0.8925,y:0.25},18).to({scaleY:1,y:0.2},22).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,-13.7,27.5,28.5);


(lib.黃色圓形1動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.黃色圓形1元件();
	this.instance.setTransform(-0.2,0.2,1,1,0,0,0,-0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1185,scaleY:1.1185},9).to({scaleX:1,scaleY:1},10).to({scaleX:0.9534,scaleY:0.9534,x:-0.25,y:0.25},10).to({scaleX:1,scaleY:1,x:-0.2,y:0.2},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.3,30.3,31.6);


(lib.電腦動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.電腦元件();
	this.instance.setTransform(-0.05,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,scaleX:0.9709,scaleY:0.9709,x:-1.15,y:-2},19).to({regX:0,scaleX:1,scaleY:1,x:1.95,y:0},24).to({scaleX:1.0415,scaleY:1.0415,x:-1.05,y:1},23).to({scaleX:1,scaleY:1,x:-2.05,y:3},23).to({x:-0.05,y:0},18).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255,-142.5,505.7,282.4);


(lib.藍色線框動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.藍色線框元件();
	this.instance.setTransform(-0.2,-0.2,1,1,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.藍色線框動畫, new cjs.Rectangle(-838.6,-393.4,1676.8000000000002,786.4), null);


(lib.藍色區塊元件 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path_3();
	this.instance.setTransform(15.3,98.5,1,1,0,0,0,410.4,206.7);
	this.instance.alpha = 0.6016;

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(14.35,34.05,1,1,0,0,0,415.1,272.1);
	this.instance_1.alpha = 0.3789;

	this.instance_2 = new lib.Path_2_1();
	this.instance_2.setTransform(-14.3,-33.95,1,1,0,0,0,415.1,272.1);
	this.instance_2.alpha = 0.2891;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.藍色區塊元件, new cjs.Rectangle(-429.4,-306,858.9,612.1), null);


(lib.左手動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.左手1元件();
	this.instance.setTransform(0.8,1.7,1,1,0,0,180,-0.8,1.7);

	this.instance_1 = new lib.左手2元件();
	this.instance_1.setTransform(-0.3,-0.5,1,1,0,0,180,0.3,-0.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.左手3元件();
	this.instance_2.setTransform(1,-0.2,1,1,0,0,180,-1,-0.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0.3,regY:-0.5,x:-0.3,y:-0.5},7).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},7).to({_off:true,regX:-1,regY:-0.2,x:1,y:-0.2},7).to({_off:false,regX:0.3,regY:-0.5,x:-0.3,y:-0.5},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},7).to({_off:true,regX:0.3,regY:-0.5,x:-0.3,y:-0.5},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-430.4,-675.4,861.4,1352.3);


(lib.右手動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.右手1元件();
	this.instance.setTransform(-0.8,1.7,1,1,0,0,0,-0.8,1.7);

	this.instance_1 = new lib.右手2元件();
	this.instance_1.setTransform(0.3,-0.5,1,1,0,0,0,0.3,-0.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.右手3元件();
	this.instance_2.setTransform(-1,-0.2,1,1,0,0,0,-1,-0.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0.3,regY:-0.5,x:0.3,y:-0.5},5).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},5).to({_off:true,regX:-1,regY:-0.2,x:-1,y:-0.2},5).to({_off:false,regX:0.3,regY:-0.5,x:0.3,y:-0.5},5).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},5).to({_off:true,regX:0.3,regY:-0.5,x:0.3,y:-0.5},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-430.9,-675.2,861.3,1352.1);


(lib.橘色區塊元件 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path_1_0();
	this.instance.setTransform(-57.5,39.55,1,1,0,0,0,283.8,254.8);
	this.instance.alpha = 0.5391;

	this.instance_1 = new lib.Path_2_0();
	this.instance_1.setTransform(-85.3,50.75,1,1,0,0,0,256,243.1);
	this.instance_1.alpha = 0.5391;

	this.instance_2 = new lib.Path_0();
	this.instance_2.setTransform(57.5,-39.65,1,1,0,0,0,283.8,254.8);
	this.instance_2.alpha = 0.3086;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.橘色區塊元件, new cjs.Rectangle(-341.2,-294.4,682.5,588.9), null);


(lib.橘色氣球動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.橘色氣球元件();
	this.instance.setTransform(-0.1,0.2,1,1,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0439},20).to({scaleX:1},19).to({scaleX:1.0877},20).to({scaleX:1},19).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.3,-119.5,150.39999999999998,239.3);


(lib.橘色圓形2動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.橘色圓形2元件();
	this.instance.setTransform(0.2,-0.2,1,1,0,0,0,0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9199,scaleY:0.9199,x:0.25,y:-0.25},18).to({scaleX:1,scaleY:1,x:0.2,y:-0.2},22).to({scaleX:1.0442,scaleY:1.0442},21).to({scaleX:1,scaleY:1},22).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-16.2,33.7,31.5);


(lib.橘色圓形1動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.橘色圓形1元件();
	this.instance.setTransform(0.2,-0.2,1,1,0,0,0,0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.8498,y:-0.25},17).to({scaleY:1,y:-0.2},19).to({scaleY:0.8014},16).to({scaleY:1},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-15.5,32.3,30.1);


(lib.PS動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PS元件();
	this.instance.setTransform(0.2,0.2,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6.7325,x:-0.8,y:0.25},14).to({rotation:0,x:0.2,y:0.2},11).to({rotation:7.9498,x:1.2,y:0.25},10).to({rotation:0,x:0.2,y:0.2},13).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.4,-63.4,126.1,127.5);


(lib.LOGO動畫 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_50 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(1));

	// LOGO元件圓點
	this.instance = new lib.LOGO元件圓點();
	this.instance.setTransform(-320.9,-369.9,1,1,0,0,0,-2.6,0.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).to({guide:{path:[-320.9,-369.8,-334.4,-375.8,-347.9,-381.8,-327.8,-371.9,-297.3,-354.4,-236.5,-319.4,-185,-281.6,-113.1,-228.6,-70,-177.7,-16.2,-114,-11,-56.9,-6.7,-63.8,-2.4,-70.6,8.1,-85.3,17.9,-91,31.5,-99,41.7,-87.7,54.4,-73.6,61,-29.9,63.3,-36.8,65.6,-43.7,71.5,-59,78.2,-67,87.6,-78.3,97.3,-73.4,109.3,-67.2,121,-35.9,112.1,-45.3,103.8,-48.2,90.2,-52.9,89.8,-32.1]}},24).wait(1));

	// LOGO元件r
	this.instance_1 = new lib.LOGO元件r();
	this.instance_1.setTransform(249.4,23,1,1,0,0,0,-0.2,-2.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({alpha:1},4).wait(24));

	// LOGO元件o
	this.instance_2 = new lib.LOGO元件o();
	this.instance_2.setTransform(185.25,24,1,1,0,0,0,-0.6,-0.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({alpha:1},4).wait(24));

	// LOGO元件n
	this.instance_3 = new lib.LOGO元件n();
	this.instance_3.setTransform(41.7,16.4,1,1,0,0,0,-1.2,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).to({alpha:1},4).wait(24));

	// LOGO元件d
	this.instance_4 = new lib.LOGO元件d();
	this.instance_4.setTransform(115.55,2,1,1,0,0,0,-0.1,-1.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).to({alpha:1},4).wait(24));

	// LOGO元件小e
	this.instance_5 = new lib.LOGO元件小e();
	this.instance_5.setTransform(-38.5,14.3,1,1,0,0,0,-4,-2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},0).to({alpha:1},4).wait(24));

	// LOGO元件v
	this.instance_6 = new lib.LOGO元件v();
	this.instance_6.setTransform(-120.2,19.75,1,1,0,0,0,-1.2,-0.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({_off:false},0).to({alpha:1},4).wait(24));

	// LOGO元件E
	this._animationGuide_7 = new lib.LOGO元件E();
	this._animationGuide_7.name = "_animationGuide_7";
	this._animationGuide_7.setTransform(-399.35,-328.8,1,1,-29.9992,0,0,-1.2,-1.2);

	this._animationGuide_8 = new lib.LOGO元件E();
	this._animationGuide_8.name = "_animationGuide_8";
	this._animationGuide_8.setTransform(-382.65,-309.55,1,1,-27.8562,0,0,-1.2,-1.2);

	this._animationGuide_9 = new lib.LOGO元件E();
	this._animationGuide_9.name = "_animationGuide_9";
	this._animationGuide_9.setTransform(-366.6,-289.85,1,1,-25.7138,0,0,-1.3,-1.3);

	this._animationGuide_10 = new lib.LOGO元件E();
	this._animationGuide_10.name = "_animationGuide_10";
	this._animationGuide_10.setTransform(-350.95,-269.75,1,1,-23.571,0,0,-1.3,-1.2);

	this._animationGuide_11 = new lib.LOGO元件E();
	this._animationGuide_11.name = "_animationGuide_11";
	this._animationGuide_11.setTransform(-335.85,-249.2,1,1,-21.4283,0,0,-1.3,-1.2);

	this._animationGuide_12 = new lib.LOGO元件E();
	this._animationGuide_12.name = "_animationGuide_12";
	this._animationGuide_12.setTransform(-321.4,-228.3,1,1,-19.2854,0,0,-1.3,-1.2);

	this._animationGuide_13 = new lib.LOGO元件E();
	this._animationGuide_13.name = "_animationGuide_13";
	this._animationGuide_13.setTransform(-307.35,-207.2,1,1,-17.1426,0,0,-1.2,-1.2);

	this._animationGuide_14 = new lib.LOGO元件E();
	this._animationGuide_14.name = "_animationGuide_14";
	this._animationGuide_14.setTransform(-294.1,-185.65,1,1,-14.9996,0,0,-1.3,-1.2);

	this._animationGuide_15 = new lib.LOGO元件E();
	this._animationGuide_15.name = "_animationGuide_15";
	this._animationGuide_15.setTransform(-281.35,-163.75,1,1,-12.8567,0,0,-1.3,-1.2);

	this._animationGuide_16 = new lib.LOGO元件E();
	this._animationGuide_16.name = "_animationGuide_16";
	this._animationGuide_16.setTransform(-269.5,-141.4,1,1,-10.7139,0,0,-1.4,-1.2);

	this._animationGuide_17 = new lib.LOGO元件E();
	this._animationGuide_17.name = "_animationGuide_17";
	this._animationGuide_17.setTransform(-258.3,-118.55,1,1,-8.5711,0,0,-1.4,-1.2);

	this._animationGuide_18 = new lib.LOGO元件E();
	this._animationGuide_18.name = "_animationGuide_18";
	this._animationGuide_18.setTransform(-248.1,-95.15,1,1,-6.4274,0,0,-1.2,-1.2);

	this._animationGuide_19 = new lib.LOGO元件E();
	this._animationGuide_19.name = "_animationGuide_19";
	this._animationGuide_19.setTransform(-240.6,-70.8,1,1,-4.2845,0,0,-1.3,-1.2);

	this._animationGuide_20 = new lib.LOGO元件E();
	this._animationGuide_20.name = "_animationGuide_20";
	this._animationGuide_20.setTransform(-235.85,-45.7,1,1,-2.1425,0,0,-1.3,-1.2);

	this.instance_7 = new lib.LOGO元件E();
	this.instance_7.setTransform(-233.8,-20.3,1,1,0,0,0,-1.3,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this._animationGuide_7}]},7).to({state:[{t:this._animationGuide_8}]},1).to({state:[{t:this._animationGuide_9}]},1).to({state:[{t:this._animationGuide_10}]},1).to({state:[{t:this._animationGuide_11}]},1).to({state:[{t:this._animationGuide_12}]},1).to({state:[{t:this._animationGuide_13}]},1).to({state:[{t:this._animationGuide_14}]},1).to({state:[{t:this._animationGuide_15}]},1).to({state:[{t:this._animationGuide_16}]},1).to({state:[{t:this._animationGuide_17}]},1).to({state:[{t:this._animationGuide_18}]},1).to({state:[{t:this._animationGuide_19}]},1).to({state:[{t:this._animationGuide_20}]},1).to({state:[{t:this.instance_7}]},1).wait(30));

	// 圖層_1
	this.instance_8 = new lib.LOGO元件1();
	this.instance_8.setTransform(0,104.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4A4238").ss(0.8).p("AhtjrIWPAAIzLHXI2KAAQgDAAgBgCQgBgBACgBg");
	this.shape.setTransform(-55.5904,72.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4A4238").p("ArIk3IADE3QAZCDDKBaQDLBaEXAAQEWAADOhaQDMhaAZiDIAAk3g");
	this.shape_1.setTransform(-118.1524,127.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4A4238").p("ALAAAI1/AA");
	this.shape_2.setTransform(165.925,96.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4A4238").ss(0.8).p("AAejrIQGAAQBaAAAdArQAdAshHAbIuPFjIgHACI1zAAQgIAAgCgEQgDgEAHgCIS1nLQACgCAFAAg");
	this.shape_3.setTransform(214.2108,72.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4A4238").ss(0.8).p("AhSjrIV5AAIy1HXI2XAAg");
	this.shape_4.setTransform(84.1692,72.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#4A4238").ss(0.8).p("AgbjrIVEAAIzTHXI2TAAQgDAAACgCISOm8QBBgZBUAAg");
	this.shape_5.setTransform(-198.6873,72.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#4A4238").p("Aq/k3IAEE3QAZCEDMBbQDQBdEUgFQEXgEDChYQDAhYAZiDIAAk3g");
	this.shape_6.setTransform(165.9222,127.3604);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#4A4238").p("ArLk3IADE3QAZCDDNBaQDNBaEXAAQEXAADOhaQDMhaAZiDIAAk3g");
	this.shape_7.setTransform(23.9476,127.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#4A4238").p("ArKk3IADE3QAZCDDLBaQDNBaEWAAQEYAADOhaQDMhaAZiDIAAk3g");
	this.shape_8.setTransform(-261.5274,127.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_8}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_8}]},7).wait(44));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-514.7,-457.9,850,617.5999999999999);


(lib.手機動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.手機元件();
	this.instance.setTransform(-0.6,-0.1,1,1,0,0,0,-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9772,scaleY:0.9772,x:-1.65,y:-1.15},14).to({scaleX:1,scaleY:1,x:1.4,y:-0.1},15).to({scaleX:1.0228,scaleY:1.0228,x:1.3,y:-1.15},17).to({scaleX:1.0457,scaleY:1.0457,x:2.35,y:2.9},17).to({scaleX:1,scaleY:1,x:-2.6,y:7.9},21).wait(6).to({x:-0.6,y:-0.1},24).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.7,-273.3,378.2,552.1);


(lib.figma動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.figma元件();
	this.instance.setTransform(0.2,0,1,1,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-0.25},11).to({rotation:-2.741,x:0,y:0},14).to({rotation:0,x:0.2,y:0.25},11).to({regX:0.4,scaleX:1.0255,scaleY:1.0255,x:0.7,y:0},16).to({regX:0.2,scaleX:1,scaleY:1,x:0.2},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.3,-53.8,104.9,107.69999999999999);


(lib.DW動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.DW元件();
	this.instance.setTransform(0.3,0.3,1,1,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.2151,x:-0.25,y:-0.2},17).to({scaleX:0.9672,scaleY:0.9672,rotation:0,y:-0.25},16).to({scaleX:1,scaleY:1,rotation:-3.4379,x:-0.2},15).to({rotation:0,y:-0.2},16).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,-57.8,112.7,114.1);


(lib.AN動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.AN元件();
	this.instance.setTransform(-0.2,-0.2,1,1,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.998,scaleY:0.998,x:-0.75,y:-0.75},11).to({scaleX:1,scaleY:1,x:-0.2,y:-0.2},10).to({y:1.8},9).to({y:-0.2},11).to({x:0.8,y:0.3},13).to({x:-0.2,y:-0.2},13).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-50.8,101.7,102.19999999999999);


(lib.AI動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.AI元件();
	this.instance.setTransform(0.2,0.2,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.981,scaleY:0.981,x:0.25,y:-0.75},12).to({scaleX:1,scaleY:1,x:0.2,y:-0.8},16).to({y:1.2},13).to({y:0.2},14).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.7,-53.5,104.5,108);


(lib.黃色區塊動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.黃色區塊元件();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5,y:-6},22).to({regX:0.1,regY:-0.1,scaleX:0.9594,scaleY:0.9594,x:3.75,y:3.8},29).to({x:-6.25,y:8.8},27).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350.3,-273.3,705.7,540.6);


(lib.藍色區塊動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.藍色區塊元件();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9412,scaleY:0.9412,x:3,y:5},25).to({scaleX:0.9925,scaleY:0.9925,x:9,y:-1},34).to({scaleX:1,scaleY:1,x:0,y:0},32).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-429.4,-306.1,864.7,612.2);


(lib.橘色區塊動畫 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.橘色區塊元件();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-6,y:-4},29).to({scaleX:0.9864,scaleY:0.9864,x:-7,y:1},38).to({scaleX:1,scaleY:1,x:-12,y:6},31).to({x:0,y:0},28).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-353.2,-298.4,694.5,598.9);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [156,194];
	// timeline functions:
	this.frame_156 = function() {
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.enter_btn.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("rwd/rwd.html", "_top");
		}
	}
	this.frame_194 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(156).call(this.frame_156).wait(38).call(this.frame_194).wait(1));

	// 左手
	this.instance = new lib.左手動畫();
	this.instance.setTransform(273.15,1797.05,1,1,0,0,0,0.7,1.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122).to({_off:false},0).to({x:633.7,y:1168.15},8,cjs.Ease.get(1)).to({y:1172.15},3).to({y:1164.15},4).to({y:1172.15},3).to({x:305.45,y:1212.2},7).to({x:261.45},8).to({x:257.45,y:1168.2},7).to({y:1200.2},6).to({x:249.45,y:1208.2},6).to({x:427.45,y:1785.05},5).wait(16));

	// 右手
	this.instance_1 = new lib.右手動畫();
	this.instance_1.setTransform(379.15,1774.2,1,1,0,0,0,-0.8,1.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:613.3,y:925.85},3,cjs.Ease.get(1)).to({x:495.3,y:1017.9},2).to({x:411.25,y:1151.85},2).to({x:551.3,y:1021.8},3).to({x:653.3,y:957.8},2).to({x:752.65,y:1013.05},3).to({x:678.65,y:1101.1},4).to({x:608.6,y:1209.1},3).to({x:506.6,y:1275.1},2).to({x:1018.7,y:1382.05},6).to({rotation:8.9548,x:1677.65,y:815.1},8).to({rotation:14.7148,x:1696.95,y:899.25},5).to({regX:-0.7,scaleX:0.9999,scaleY:0.9999,rotation:12.3245,x:1710.9,y:1016.3},4).to({regX:-0.8,scaleX:1,scaleY:1,rotation:0,x:1679.6,y:1151.85},6).to({x:1823.6,y:1239.9},3).to({regX:-0.7,rotation:8.4533,x:1623.65,y:918.3},6).to({rotation:24.3562,x:1670.85,y:523.6},8).wait(5).to({regX:-0.6,regY:1.8,x:1710.9,y:907.75},8,cjs.Ease.get(1)).to({regX:0.1,regY:0,x:1712.3,y:906.4},5,cjs.Ease.get(1)).to({regX:-28.8,regY:53.8,rotation:0,x:1465.7,y:955.85},6).to({regX:-55.6,regY:115.1,rotation:-7.4954,x:1402.2,y:1027.3},3,cjs.Ease.get(1)).to({regX:-0.8,regY:1.7,rotation:0,x:1493.7,y:907.75},4,cjs.Ease.get(1)).to({x:1295.05,y:1196.2},3,cjs.Ease.get(1)).to({x:1667.6,y:1797.05},4,cjs.Ease.get(1)).to({x:1238.95,y:1168.15},8,cjs.Ease.get(1)).to({y:1172.15},3).to({y:1164.15},4).to({y:1172.15},3).to({x:1606.15,y:1260.25},7).to({x:1642.15,y:1264.25},8).wait(7).to({x:1690.15,y:1300.25},3).to({x:1698.15,y:1268.25},5).to({y:1300.25},4).to({x:1235.1,y:1409.05},5,cjs.Ease.get(1)).wait(5).to({x:1397.75,y:1770.2},10,cjs.Ease.get(1)).wait(1));

	// ENTER
	this.enter_btn = new lib.ENTER元件();
	this.enter_btn.name = "enter_btn";
	this.enter_btn.setTransform(959.75,927.1,0.2384,0.2384,0,0,0,-0.2,-0.2);
	this.enter_btn.alpha = 0;
	this.enter_btn._off = true;
	new cjs.ButtonHelper(this.enter_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.enter_btn).wait(161).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:720,x:959.8,y:927.15,alpha:1},9,cjs.Ease.get(-1)).wait(25));

	// 黃色氣球
	this.instance_2 = new lib.黃色氣球動畫();
	this.instance_2.setTransform(1287.8,-339.4,0.6594,0.6594,-60.0002,0,0,0.5,0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).to({regX:0.4,scaleX:1,scaleY:1,rotation:0,guide:{path:[1287.8,-339.2,1315.6,-333.3,1344,-324.8,1443.1,-294.8,1521.6,-241,1547.8,-223,1567.3,-202.1,1584.7,-183.5,1599.1,-159.9,1610.5,-141.4,1623.8,-113.1,1631.6,-96.6,1648.1,-60.4,1710.5,71.9,1689.3,248.9], orient:'fixed'}},13).wait(98));

	// 橘色氣球
	this.instance_3 = new lib.橘色氣球動畫();
	this.instance_3.setTransform(1460.65,-391.05,0.7356,0.7356,-74.9987,0,0,-0.1,0.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({_off:false},0).to({regY:0.2,scaleX:1,scaleY:1,rotation:0,guide:{path:[1460.5,-390.9,1470.3,-386.6,1480.3,-381.9,1573.8,-337.2,1643.2,-272.1,1740.4,-181.2,1775.6,-62.5,1817.3,78.2,1769.2,250.6], orient:'fixed'}},13).wait(98));

	// 手機遮 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_52 = new cjs.Graphics().p("AoGMBQhOgLhCgmQhCgmgwg+Qgxg+gUhJIgMgyQgHgegHgTQgLgdgYgoQgdgsgNgXQgrhNgNhYQgNhZAWhTQAWhWA5hFQA5hHBPgkQA8gcBlgPQCUgWATgEQA7gOBGgbQAtgSBPglQCRhDA6gaQBygzBcgiQBiglBMgTQBhgYBUAAQBggBBUAdQBbAgA+A/QBKBLAaBxQAYBrgaBtQgtC/i0CrQicCWkbCSQlDCciaBXIhsA8Qg+AfgzAOQgwAMgxAAQgcAAgbgEg");
	var mask_graphics_54 = new cjs.Graphics().p("AnLPqQh/gGhpgxQhxg1hJhkQhMhngGh2QgHiCBRhzQAVgeAYgZIgFgSIgMgyQgHgegHgTQgLgdgYgoQgdgsgNgXQgrhMgNhYQgNhaAWhTQAWhWA5hFQA5hHBPgkQA8gcBlgPQCUgWATgEQA7gOBGgbQAtgSBPglQCRhDA6gaQBygzBcgiQBiglBMgTQBhgYBUAAQBggBBUAdQBbAgA+A/QBKBLAaBxQAYBrgaBtQgeB/hZB3QAQBDgHBFQgKBlg8BYQgaAmghAeQgKBHgkA/QgXApgnAsQgYAcgxAxQhaBbgwAqQhfBUiDBWQhzBMhdAwQhzA7hsAdQhqAchmAAIgggBg");
	var mask_graphics_57 = new cjs.Graphics().p("A1sPqQh/gGhpgxQhxg1hJhkQhMhngGh2QgHiCBRhzQAVgeAYgZIgFgSIgMgyQgHgegHgTQgLgdgYgoQgdgsgNgXQgrhMgNhYQgNhaAWhTQAWhWA5hFQA5hHBPgkQA8gcBlgPQCUgWATgEQA7gOBGgbQAtgSBPglQCRhDA7gaQBygzBcgiQBiglBMgTQBhgYBUAAQBggBBUAdQBbAgA+A/IASAUIB9gYQA5gNBygdQBjgVBKAGQB0AJBiBLQBhBLAmBvQCGhFCagPQCZgOCRApQB7AkBjBIQBpBNA6BoQA9BugBB/QAAAfgEAdIASAVQA1BDAVBRQAXBUgQBSQgSBfhFBTQg/BNhdA1QhPAthrAgQhGAWh/AbQkiA/jQAdQkQAmjngEQg+gBiAgGQh7gHhBgBQiVgCgWgCQhhgHhEgaQhHAHhFgTQgWgGgVgIQg5ArhDAsQhzBMhdAwQh0A7hsAdQhqAchmAAIgggBg");
	var mask_graphics_61 = new cjs.Graphics().p("EAQXAgxQh9gOhtg2IgdgFIgvgJQgqANgvAHQhgANhrgSQiUgahvhRQh8haggiAIgDgOIglgJQiHgjhrhYQhvhcgzh7QgUgxgKgyQg0gvhPhbQhbhpgmgmQhHhFiEhfQikh2gvgnQhGg6hyhyQh9h+g4gxQhqhZgygvQhWhSgmhOQgphSAAheQhQgxg5hNQhNhogGh2QgGiCBRhzQAVgeAYgZIgGgSIgMgxQgHgfgGgSQgLgegZgoQgcgsgNgXQgrhNgNhYQgNhZAVhUQAXhWA4hFQA6hHBPgkQA8gbBlgPQCUgWASgFQA7gNBGgcQAtgSBQglQCRhDA6gZQBzgzBbgjQBjglBMgSQBggYBUgBQBggBBVAeQBbAgA+A/IASATIB+gXQA4gNBxgdQBkgWBJAGQB1AJBhBLQBiBMAmBuQCGhECagPQCZgPCRAqQB7AkBiBIQBpBMA6BpQA+BugBB/QgBAegEAdIASAWQA1BCAWBTQAWBUgPBRQgTBfhEBUQg/BMhdA1IghASQANBQgUBSQgVBVg1BDQDLA4BrA0QCjBQBOB4QAwBIAVBdQATBWgGBeQgFBcgcBOQgeBWg2A/QhSBfiTAxQhrAkiqATQg8AGg0ACQAFAogEAoQgBASgGAlQgEAhACAWQADAfAOAmIAPAnQAWAGAVAJQBIAcA2AyQA5A1AjBOQAgBJAJBUQAOCCgtBlQgpBeheBEQhVA/hvAcQhWAWhYAAQgpAAgogEg");
	var mask_graphics_64 = new cjs.Graphics().p("EgBvAjPQiagakkhPIneiCQiagqhNgcQh/guhYg8QhMg0hIhNQg7g/g/haQh0ikhejFQgyhqgYhRQgghpAChcQABhpAvhZQAyhfBVgtQgmi0AEh+QAFipBNhyQAegrAngiQgnhRAAhbQhQgyg5hNQhNhogGh2QgGiCBRhzQAVgdAYgZIgGgTIgMgxQgHgfgGgSQgLgegZgoQgcgsgNgXQgrhNgNhYQgNhZAVhUQAXhWA4hFQA6hHBPgkQA8gbBlgPQCUgWASgFQA7gNBGgcQAtgSBQglQCRhDA6gZQBzgzBbgjQBjglBMgSQBggYBUgBQBggBBVAeQBbAgA+A/IASATIB+gXQA4gNBxgdQBkgWBJAGQB1AJBhBLQBiBMAmBuQCGhECagPQCZgPCRAqQB7AkBiBIQBpBMA6BpQA+BugBB/QgBAfgEAdIASAVQA1BCAWBTQAWBUgPBRQgTBfhEBUQg/BMhdA1IghASQANBQgUBSQgVBVg1BDQDLA4BrA0QCjBQBOB5QAwBIAVBcQATBWgGBeQgFBcgcBOQgeBWg2A/QhSBfiTAxQhrAkiqATQg8AGg0ACQAFAogEAoQgBASgGAlQgEAhACAWQADAfAOAmIAPAnQAWAHAVAIQBIAcA2AyQA5A1AjBOQAgBJAJBUQAOCCgtBlQgpBeheBEQhVA/hvAcQh9AgiCgOQhggLhWgiQgSBDgbAzQhAB3iKBLQh6BCicAUQhOALhVAAQiHAAiZgag");
	var mask_graphics_67 = new cjs.Graphics().p("EggHAsSQh4gKhZgbQhtgjhJhAQhQhIgnhxQgkhoAFh1QAFhnAjh0QAbhaA1h3QBajJByi+QAvhOBXiGQBViGA1hDQCajEDXiEQBfg7BfglQgwhmgXhOQgghpAChcQABhpAvhZQAyheBVgtQgmi0AEh+QAFipBNhzQAegrAngjQgnhQAAhcQhQgxg5hNQhNhogGh2QgGiCBRhzQAVgeAYgZIgGgSIgMgxQgHgfgGgSQgLgegZgoQgcgsgNgXQgrhNgNhYQgNhZAVhUQAXhWA4hFQA6hHBPgkQA8gbBlgPQCUgWASgFQA7gNBGgcQAtgSBQglQCRhDA6gZQBzgzBbgjQBjglBMgSQBggYBTgBQBggBBVAeQBbAgA+A/IASATIB+gXQA5gNBxgdQBkgWBJAGQB1AJBhBLQBiBMAmBuQCGhECagPQCZgPCRAqQB7AkBiBIQBpBMA6BpQA+BugBB/QgBAegDAdIARAWQA1BCAWBTQAWBUgPBRQgTBfhEBUQg/BMhdA1IghASQANBQgUBSQgVBVg1BDQDLA4BrA0QCjBQBOB5QAwBIAVBdQATBWgGBeQgFBcgcBOQgeBWg2A/QhSBeiTAxQhrAkiqATQg7AGg1ACQAFAogEAoQgBASgGAlQgEAhACAWQADAfAOAmIAPAnQAWAGAVAJQBIAcA2AyQA5A1AjBOQAgBJAJBUQAOCCgtBlQgpBeheBEQhVA/hvAcQh9AgiCgOQhfgLhXgiQgSBDgbAzQhAB3iKBLQh6BCicAUQjJAbj7gqQgxgJg+gNQhDAxhGAUIgXAGQhQA8h/BaQisB5g7ArQkTDXiLBpQj1C5jBBeQjSBmjnArQijAfikAAQhEAAhFgFg");
	var mask_graphics_70 = new cjs.Graphics().p("EgAYAvfQhzgMhdg6Qh0A1iEgRQiNgThihbQg1gwghg/QgLABgMADQgRADgmAPQiNA5h6AKQiTANhvg6Qhmg0g+hrQgRgfgNgfQjkAqjlgSQh4gKhZgbQhtgjhJhAQhQhIgnhxQgkhoAFh1QAFhnAjh0QAbhaA1h3QBajJByi+QAvhOBXiGQBViGA1hDQCajEDXiEQBfg7BfglQgwhmgXhOQgghpAChcQABhoAvhZQAyhfBVgtQgmi0AEh+QAFipBNhzQAegrAngiQgnhRAAhbQhQgyg5hNQhNhogGh2QgGiCBRhzQAVgdAYgZIgGgTIgMgxQgHgfgGgSQgLgegZgoQgcgsgNgXQgrhNgNhYQgNhZAVhUQAXhWA4hFQA6hHBPgkQA8gbBlgPQCUgWASgFQA7gNBGgcQAtgSBQglQCRhDA6gZQBzgzBbgjQBjglBMgSQBggYBTgBQBggBBVAeQBbAgA+A/IASATIB+gXQA5gNBxgdQBkgWBJAGQB1AJBhBLQBiBMAmBuQCGhECagPQCZgPCRAqQB7AkBiBIQBpBMA6BpQA+BugBB/QgBAfgDAdIARAVQA1BCAWBTQAWBUgPBRQgTBfhEBUQg/BMhdA1IghASQANBQgUBSQgVBVg1BDQDLA4BrA0QCjBQBOB5QAwBIAVBdQATBWgGBeQgFBcgcBOQgeBWg2A/QhSBfiTAxQhrAkiqATQg7AGg1ACQAFAngEAoQgBASgGAlQgEAhACAWQADAfAOAmIAPAnQAWAHAVAIQBIAcA2AyQA5A1AjBOQAgBJAJBUQAOCCgtBlQgpBeheBEQhVA/hvAcQhQAVhTABQAAAngDAnQgOC/haCiQgZAugoA4QABBOgQBiQgVCKgnBrQgtB/hJBbQhzCSkGCAQiSBEhIAjQiAA9hSA3IiIBgQhRA5g+AaQhZAmhhAAQgaAAgZgDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(52).to({graphics:mask_graphics_52,x:1494.2119,y:346.6102}).wait(2).to({graphics:mask_graphics_54,x:1494.2119,y:369.6067}).wait(3).to({graphics:mask_graphics_57,x:1587.1212,y:369.6067}).wait(4).to({graphics:mask_graphics_61,x:1600.6771,y:479.3994}).wait(3).to({graphics:mask_graphics_64,x:1600.6771,y:497.361}).wait(3).to({graphics:mask_graphics_67,x:1548.3665,y:553.1972}).wait(3).to({graphics:mask_graphics_70,x:1548.3665,y:573.4547}).wait(125));

	// 手機
	this.instance_4 = new lib.手機動畫();
	this.instance_4.setTransform(1547.1,589.35,1,1,0,0,0,-0.6,-0.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(52).to({_off:false},0).wait(143));

	// 電腦遮 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_19 = new cjs.Graphics().p("ApHNlQhngHhGg2Qgwgkgcg4IgJgTQhRgZhAg4QhYhNgShmQgShlA0hoQAwheBahGIAhgZQARgQAIgQQAJgOAEgaQAEgdADgPQAMgzAug0QASgUBIhAQAbgYBHhHQA9g8AnggQB7hmB2gPIA/gEQAngCAXgFQAtgLA7gnQBVg6AMgGQBUguBiAEQBjAEBNA1IANAJIAXgvQAeg4A0goQA0gnA+gPQA+gOBAAOQBAAOAzAmQBAAxAyBjIACACQAvAxATA/QAZBUgXBnQgSBOgyBnQhcC7hpBwQgqAsg+A1QgkAehLA7IhyBeQhDA1g2AhQhNAviHA3QisBGgsAVIinBYQhlA2hHAXQhRAbhNAAIgdgBg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AtTcUQg/gRgxgnQgxgogeg8Qgdg6gFhBQgFg/ARhAQARg+Ajg3IAng5QAXgiAIgbQAIgYADgoQAFgzACgPQAFgaAKgXQghhQAShTIANgxQAGgdgBgVQgCgRgIgWIgPgnQgahIAGhVQAFhPAfhPQAbhEAwhKQAkg2A7hMQBDhUAXglIATghQhEgOg0goQgwgkgcg3IgJgTQhRgahAg4QhYhNgShmQgShkA0hoQAwhfBahFIAhgaQARgPAIgQQAJgQAEgaQAEgdADgOQAMg0AugzQASgUBIhBQAbgXBHhHQA9g8AnggQB7hnB2gOIA/gEQAngCAXgGQAtgLA7gnQBVg5AMgHQBUgtBiAEQBjADBNA1IANAJIAXguQAeg5A0gnQA0goA+gOQA+gOBAANQBAAOAzAnQBAAwAyBjIACACQAvAyATA/QAZBTgXBnQgSBPgyBmQhcC8hpBwQgqAtg+A0QgkAfhLA7IhyBeQhDA0g2AhQgiAVgvAXQAPARANASQBdCFgiDoQgHAsgfCMIgOBBIgBATQgDA4gKAuIgEAVQgCAnAAA4QABBYgBAcQgFCagwCUQgwCUhWB/QgxBIhZBpQgzA9giAhQgxAxgwAdQhAAohJANQgiAGghAAIgaAmQgoA4gnAnQhjBkhzAUQgYADgYAAQgnAAgngJg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AuScUQg/gRgxgnQgxgogeg8Qgdg6gGhBQgFg/ARhAQARg+Akg3IAng5QAWgiAJgbQAHgYAEgoQAEgzADgPQAEgaAKgXQghhQAThTIAMgxQAHgdgCgVQgBgRgIgWIgPgnQgahIAFhVQAGhPAfhPQAbhEAwhKQAjg2A8hMQBDhUAXglIATghQhFgOg0goQgvgkgdg3IgJgTQhQgahAg4QhYhNgShmQgShkA0hoQAwhfBahFIAggaQASgPAIgQQAIgQAFgaQADgdADgOQAMg0AvgzQASgUBIhBQAagXBIhHQA8g8AnggQB7hnB3gOIA/gEQAmgCAYgGQAsgLA7gnQBWg5ALgHQBUgtBiAEQBkADBNA1IAMAJIAXguQAeg5A0gnQA0goA+gOQA+gOBAANQBBAOAyAnQBAAwAzBjIACACQAuAyATA/QAaBTgYBnIgFAUQApAtAXAfQAgAsASApQAhBNgDBkQgDBRgcBlQgKAngXBNQgUBEgIAwQgGAhgHBBQgGBBgGAgQgbCghyC8QhCBuiUDTQhwCqgpAzQhhBzhtAnIgMAEIgBAEQgcBNhDA0IgZASIgJAdQgwCUhWB/QgxBIhZBpQgzA9ghAhQgyAxgwAdQg/AohKANQgiAGggAAIgaAmQgoA4goAnQhjBkhzAUQgYADgYAAQgnAAgmgJg");
	var mask_1_graphics_26 = new cjs.Graphics().p("A4icUQg/gRgxgnQgxgogeg8Qgdg6gFhBQgFg/ARhAQARg+Ajg3IAng5QAXgiAIgbQAIgYADgoQAFgzACgPQAFgaAKgXQghhQAShTIANgxQAGgdgBgVQgCgRgIgWIgPgnQgahIAGhVQAFhPAfhPQAbhEAwhKQAkg2A7hMQBDhUAXglIATghQhEgOg0goQgwgkgcg3IgJgTQhRgahAg4QhYhNgShmQgShkA0hoQAwhfBahFIAhgaQARgPAIgQQAJgQAEgaQAEgdADgOQAMg0AugzQASgUBIhBQAbgXBHhHQA9g8AnggQB7hnB2gOIA/gEQAngCAXgGQAtgLA7gnQBWg5AMgHQBUgtBiAEQBjADBNA1IANAJIAXguQAeg5A0gnQA0goA+gOQA9gOBAANQBAAOAzAnQBAAwAyBjIACACQAvAyATA/QAEAOADAPIBGgQQC5gmDhgMIBHgFQAogDAegIQAXgGAugSQAtgSAYgGQBQgUBRAcQBSAbAzA/IASAWQALAMAMAFQAKAFAQABIAcgBQA7gCA4AWQA4AXApApQAqAqAWA4QAWA4gCA7QgFCJiDCKQiPCWjsBkQigBFkcBIQhRAUgnAMQhCAUgyAXQgeAOhAAlQg8AigiAPQgbAMgbAIQgiCNhiChQhCBuiUDTQhuCqgqAzQhhBzhsAnIgMAEIgBAEQgcBNhEA0IgYASIgJAdQgwCUhWB/QgxBIhaBpQgzA9giAhQgxAxgwAdQhAAohJANQgiAGghAAIgaAmQgoA4gnAnQhjBkhzAUQgYADgYAAQgnAAgngJg");
	var mask_1_graphics_29 = new cjs.Graphics().p("EglaAcUQg/gRgxgnQgxgogeg8Qgdg6gFhBQgFg/ARhAQARg+Ajg3IAng5QAXgiAIgbQAIgYADgoQAFgzACgPQAFgaAKgXQgihQAThTIANgxQAGgdgBgVQgCgRgIgWIgPgnQgahIAGhVQAFhPAfhPQAbhEAwhKQAkg2A7hMQBDhUAXglIATghQhFgOgzgoQgwgkgcg3IgJgTQhRgahAg4QhYhNgShmQgShkA0hoQAwhfBahFIAhgaQARgPAIgQQAJgQAEgaQAEgdADgOQAMg0AugzQASgUBIhBQAbgXBHhHQA9g8AnggQB7hnB2gOIA/gEQAngCAXgGQAtgLA7gnQBWg5AMgHQBUgtBiAEQBjADBNA1IANAJIAXguQAeg5A0gnQA0goA+gOQA+gOBAANQBAAOAzAnQA/AwAzBjIACACQAvAyATA/QAEAOADAPIBGgQQC5gmDggMIBHgFQAogDAegIQAXgGAugSQAtgSAYgGQBQgUBRAcQBSAbAzA/IASAWQALAMAMAFQAKAFAQABIAcgBQA7gCA4AWQAbALAYAQQB2gpB8AFQBXADBFAdQBQAhAoA+IAXAlQAOAUARAGQAeAMAugZQApgWBCg6QBFg+AlgWQBYg1BsACQBsADBVA7QBVA6AqBkQAqBkgSBlQBjgOBfAtQBgAuAxBWQAyBYgOBpQgOBrhIBEQgvAthJAdQg3AWhUARQhtAVh0AMQgBARgDASQgLBBglAzQg3BNhrAqQhUAhh5AMQikARjNgKQh6gGj4gXQmFgmi8gUQivgTiQgSQhmgMg5gPQhWgYg5gtQgggZgXgiQgcAPgTAJQgbAMgbAIQgiCNhiChQhCBuiUDTQhvCqgqAzQhhBzhsAnIgMAEIgBAEQgcBNhEA0IgYASIgJAdQgwCUhWB/QgxBIhaBpQgzA9giAhQgxAxgwAdQhAAohJANQgiAGghAAIgaAmQgoA4gnAnQhjBkhzAUQgZADgYAAQgmAAgngJg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EglaAcUQg/gRgxgnQgxgogeg8Qgdg6gFhBQgFg/ARhAQARg+Ajg3IAng5QAXgiAIgbQAIgYADgoQAFgzACgPQAFgaAKgXQgihQAThTIANgxQAGgdgBgVQgCgRgIgWIgPgnQgahIAGhVQAFhPAfhPQAbhEAwhKQAkg2A7hMQBDhUAXglIATghQhFgOgzgoQgwgkgcg3IgJgTQhRgahAg4QhYhNgShmQgShkA0hoQAwhfBahFIAhgaQARgPAIgQQAJgQAEgaQAEgdADgOQAMg0AugzQASgUBIhBQAbgXBHhHQA9g8AnggQB7hnB2gOIA/gEQAngCAXgGQAtgLA7gnQBWg5AMgHQBUgtBiAEQBjADBNA1IANAJIAXguQAeg5A0gnQA0goA+gOQA+gOBAANQBAAOAzAnQA/AwAzBjIACACQAvAyATA/QAEAOADAPIBGgQQC5gmDggMIBHgFQAogDAegIQAXgGAugSQAtgSAYgGQBQgUBRAcQBSAbAzA/IASAWQALAMAMAFQAKAFAQABIAcgBQA7gCA4AWQAbALAYAQQB2gpB8AFQBXADBFAdQBQAhAoA+IAXAlQAOAUARAGQAeAMAugZQApgWBCg6QBFg+AlgWQBYg1BsACQBsADBVA7QBVA6AqBkQAqBkgSBlQBjgOBfAtQBgAuAxBWQAyBYgOBpQgOBrhIBEQgvAthJAdQg3AWhUARQhtAVh0AMQgBARgDASQgLBBglAzQg3BNhrAqIgGACIAEAEQAuArAZBJQARAxAPBYQAwEkAWDtQAaEbgID5QgCBcgNA6QgTBQgtAyQgyA2hZAZQg7AQhrAKQhqAJg5gEQhagGg/gkQhPguhAhzIgSglQhsgig+gWQiNgyhog7QgSgJh9hNQhWg1g9gaQhHgeiEggQiTgjg6gVQhKgbhsg5QiehTgWgKQhjgvizg/QjNhHhMggIg0gXQgYAhgPATQhhBzhsAnIgMAEIgBAEQgcBNhEA0IgYASIgJAdQgwCUhWB/QgxBIhaBpQgzA9giAhQgxAxgwAdQhAAohJANQgiAGghAAIgaAmQgoA4gnAnQhjBkhzAUQgZADgYAAQgmAAgngJg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EglaAcUQg/gRgxgnQgxgogeg8Qgdg6gFhBQgFg/ARhAQARg+Ajg3IAng5QAXgiAIgbQAIgYADgoQAFgzACgPQAFgaAKgXQgihQAThTIANgxQAGgdgBgVQgCgRgIgWIgPgnQgahIAGhVQAFhPAfhPQAbhEAwhKQAkg2A7hMQBDhUAXglIATghQhFgOgzgoQgwgkgcg3IgJgTQhRgahAg4QhYhNgShmQgShkA0hoQAwhfBahFIAhgaQARgPAIgQQAJgQAEgaQAEgdADgOQAMg0AugzQASgUBIhBQAbgXBHhHQA9g8AnggQB7hnB2gOIA/gEQAngCAXgGQAtgLA7gnQBWg5AMgHQBUgtBiAEQBjADBNA1IANAJIAXguQAeg5A0gnQA0goA+gOQA+gOBAANQBAAOAzAnQA/AwAzBjIACACQAvAyATA/QAEAOADAPIBGgQQC5gmDggMIBHgFQAogDAegIQAXgGAugSQAtgSAYgGQBQgUBRAcQBSAbAzA/IASAWQALAMAMAFQAKAFAQABIAcgBQA7gCA4AWQAbALAYAQQB2gpB8AFQBXADBFAdQBQAhAoA+IAXAlQAOAUARAGQAeAMAugZQApgWBCg6QBFg+AlgWQBYg1BsACQBsADBVA7QBVA6AqBkQAqBkgSBlQBjgOBfAtQBgAuAxBWQAyBYgOBpQgOBrhIBEQgvAthJAdQg3AWhUARQhtAVh0AMQgBARgDASQgLBBglAzQg3BNhrAqIgGACIAEAEQAuArAZBJQARAxAPBYQAwEkAWDtQAaEbgID5QgCBcgNA6QgTBQgtAyQgyA2hZAZQg7AQhrAKQhqAJg5gEQg9gEgwgSIgGASQgdBRhCAvQhMA3h3ACQhPABiGgZQndhYkggjQiugThXgMQiXgUhsgcQknhLimioQhvhxgfiCQgQhIAKhGQAMhKAng6Qg8gqghhGIgIgUQgpAbgpAPIgMAEIgBAEQgcBNhEA0IgYASIgJAdQgwCUhWB/QgxBIhaBpQgzA9giAhQgxAxgwAdQhAAohJANQgiAGghAAIgaAmQgoA4gnAnQhjBkhzAUQgZADgYAAQgmAAgngJg");
	var mask_1_graphics_38 = new cjs.Graphics().p("Ap0ctQhggwgmhdQg6gIhhAEQh2AEglgCQhXgEhDgdQhOgiglg/IgNgVQgJgLgKgDQgWgGgeAfQhkBjhnAlQg9AVg8AAQhBgBg2gaQhMgkgrhNQgiAtghAiQhjBkhzATQg/AKg/gQQg/gQgxgoQgxgogeg7Qgdg6gFhBQgFg/ARhAQARg+Ajg3IAng5QAXgiAIgbQAIgYADgpQAFgzACgPQAFgZAKgYQgihQAThTIANgxQAGgdgBgUQgCgRgIgXIgPgmQgahJAGhVQAFhOAfhPQAbhEAwhKQAkg3A7hMQBDhUAXglIATggQhFgOgzgoQgwgkgcg4IgJgTQhRgZhAg4QhYhNgShmQgShlA0hoQAwheBahGIAhgZQARgQAIgQQAJgPAEgaQAEgdADgPQAMgzAug0QASgUBIhAQAbgYBHhHQA9g8AnggQB7hmB2gPIA/gEQAngCAXgFQAtgLA7gnQBWg6AMgGQBUguBiAEQBjAEBNA1IANAJIAXgvQAeg4A0goQA0gnA+gPQA+gOBAAOQBAAOAzAmQA/AxAzBjIACACQAvAxATA/QAEAPADAPIBGgQQC5gnDggMIBHgEQAogEAegIQAXgGAugSQAtgRAYgGQBQgUBRAbQBSAbAzBAIASAWQALAMAMAFQAKAFAQAAIAcgBQA7gCA4AXQAbALAYAPQB2goB8AEQBXAEBFAcQBQAiAoA+IAXAkQAOAUARAHQAeAMAugZQApgXBCg6QBFg9AlgWQBYg2BsADQBsADBVA6QBVA6AqBkQAqBkgSBmQBjgOBfAtQBgAtAxBXQAyBXgOBqQgOBqhIBFQgvAthJAdQg3AVhUARQhtAWh0AMQgBARgDASQgLBAglA0Qg3BNhrAqIgGACIAEADQAuArAZBKQARAwAPBZQAwEjAWDtQAaEcgID4QgCBcgNA6QgTBRgtAxQgyA2hZAaQg7AQhrAJQhqAJg5gEQg9gEgwgRIgGARQgdBShCAvQhMA2h3ACQhPACiGgaQnEhTkagkQgNAXgQAVQg1BDhLAhQgsAUhUARQhcATglAOQgTAHg/AcQgyAXggAIQghAIggAAQhAAAhBghg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_1_graphics_19,x:216.6071,y:504.0166}).wait(2).to({graphics:mask_1_graphics_21,x:216.6071,y:599.1859}).wait(3).to({graphics:mask_1_graphics_24,x:222.9851,y:599.1859}).wait(2).to({graphics:mask_1_graphics_26,x:288.5061,y:599.1859}).wait(3).to({graphics:mask_1_graphics_29,x:370.9479,y:599.1859}).wait(4).to({graphics:mask_1_graphics_33,x:370.9479,y:599.1859}).wait(3).to({graphics:mask_1_graphics_36,x:370.9479,y:599.1859}).wait(2).to({graphics:mask_1_graphics_38,x:370.9479,y:604.0159}).wait(157));

	// 電腦
	this.instance_5 = new lib.電腦動畫();
	this.instance_5.setTransform(378.05,611.15);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).wait(176));

	// 橘色圓形2
	this.instance_6 = new lib.橘色圓形2動畫();
	this.instance_6.setTransform(1253.8,570.15,1,1,0,0,0,0.2,-0.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(146).to({_off:false},0).wait(49));

	// 橘色圓形1
	this.instance_7 = new lib.橘色圓形1動畫();
	this.instance_7.setTransform(770.45,717.9,1,1,0,0,0,0.2,-0.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(146).to({_off:false},0).wait(49));

	// 黃色圓形1
	this.instance_8 = new lib.黃色圓形1動畫();
	this.instance_8.setTransform(1029.5,464.45,1,1,0,0,0,-0.2,0.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(146).to({_off:false},0).wait(49));

	// 黃色圓形2
	this.instance_9 = new lib.黃色圓形2動畫();
	this.instance_9.setTransform(1056.4,767.7,1,1,0,0,0,-0.2,0.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(146).to({_off:false},0).wait(49));

	// PS
	this.instance_10 = new lib.PS動畫();
	this.instance_10.setTransform(960.2,576.2,1,1,0,0,0,0.2,0.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(135).to({_off:false},0).to({x:694.5,y:617.6,alpha:1},14).wait(46));

	// DW
	this.instance_11 = new lib.DW動畫();
	this.instance_11.setTransform(959.7,595.7,1,1,0,0,0,0.2,0.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(135).to({_off:false},0).to({x:1117.35,y:520.5},14).wait(46));

	// AI
	this.instance_12 = new lib.AI動畫();
	this.instance_12.setTransform(960.2,576.2,1,1,0,0,0,0.2,0.2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(135).to({_off:false},0).to({x:821.8,y:494.3,alpha:1},14).wait(46));

	// AN
	this.instance_13 = new lib.AN動畫();
	this.instance_13.setTransform(959.8,575.8,1,1,0,0,0,-0.2,-0.2);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(135).to({_off:false},0).to({x:953.7,y:639.75,alpha:1},14).wait(46));

	// FIGMA
	this.instance_14 = new lib.figma動畫();
	this.instance_14.setTransform(960.2,576,1,1,0,0,0,0.2,0);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(135).to({_off:false},0).to({x:1211.2,y:676.6,alpha:1},14).wait(46));

	// LOGO
	this.instance_15 = new lib.LOGO動畫();
	this.instance_15.setTransform(961.25,213.1,1,1,0,0,0,0,-1.1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(107).to({_off:false},0).to({alpha:1},4).wait(84));

	// 橘色區塊
	this.instance_16 = new lib.橘色區塊動畫();
	this.instance_16.setTransform(390.2,602.45);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(2).to({_off:false},0).to({alpha:1},4).wait(189));

	// 藍色區塊
	this.instance_17 = new lib.藍色區塊動畫();
	this.instance_17.setTransform(943.9,686.6);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(6).to({_off:false},0).to({alpha:1},4).wait(185));

	// 黃色區塊
	this.instance_18 = new lib.黃色區塊動畫();
	this.instance_18.setTransform(1530.5,723.95);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(10).to({_off:false},0).to({alpha:1},4).wait(181));

	// 藍色線框
	this.instance_19 = new lib.藍色線框動畫();
	this.instance_19.setTransform(-885.1,553.55,1,1,0,0,0,-0.2,-0.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(95).to({_off:false},0).to({x:969.6},6,cjs.Ease.get(1)).wait(94));

	// 背景
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBDEF0").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape.setTransform(961.25,541.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(195));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-763.5,77.1,3025.3,2395.2000000000003);
// library properties:
lib.properties = {
	id: '3B21A3A17CBA564EAE831E0243DD377B',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#BBDEF0",
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
an.compositions['3B21A3A17CBA564EAE831E0243DD377B'] = {
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
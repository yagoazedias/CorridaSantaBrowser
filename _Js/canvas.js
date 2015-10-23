var Graphics = (function()
{
	this.canvas = document.getElementById("myCanvas");
	this.ctx = this.canvas.getContext("2d");
	
	this.clear = (function() {
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
		this.ctx.fillStyle = "black";
	});
	
	this.drawRect = (function(x,y,w,h,color){
		this.ctx.fillStyle = color;
		this.ctx.fillRect(x,y,w,h);
	});
	
	this.drawStrokeRect = (function(x,y,w,h,color) {
		this.ctx.strokeStyle = color;
		this.ctx.strokeRect(x,y,w,h);
	});
	
	this.drawText = (function(x,y,text,color) {
		this.ctx.fillStyle = color;
		this.ctx.font = "40px Computerfont";
		this.ctx.fillText(text, x, y);		
	});
	
	this.drawShadowBegin = (function(x, y, blur, color) {
		graphics.ctx.save();
		graphics.ctx.shadowColor = color;
		graphics.ctx.shadowOffsetX = x;
		graphics.ctx.shadowOffsetY = y;
		graphics.ctx.shadowBlur = blur;
	});
	
	this.drawShadowEnd = (function() {
		graphics.ctx.restore();
	});
});
var graphics = new Graphics();

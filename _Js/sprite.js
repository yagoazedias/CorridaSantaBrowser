var Sprite = function(x,y,w,h,numFrames,animationSpeed,imageSource,imageExtension)
{
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
	this.start = (new Date()).getTime();
	this.currentFrame = 0.;
	this.numFrames = numFrames;
	this.images = [];
	this.animationSpeed = animationSpeed;
	
	for (var i = 0; i < this.numFrames; i++)
	{
	    this.images[i] = new Image();
		this.images[i].src = imageSource + (i+1) + "." + imageExtension;
	}
	
	this.deltaTime = function()
	{
		this.current = (new Date()).getTime();
		this.elapsed = this.current - this.start;
		this.start = this.current;
		this.delta = this.elapsed / 1000.;			
		return this.delta;
	}
	
	this.update = function()
	{
		this.delta = this.deltaTime();	
		this.currentFrame += this.delta * this.animationSpeed;
	}
	
	this.draw = function()
	{
		graphics.ctx.drawImage(this.images[Math.floor(this.currentFrame)%this.numFrames], this.x, this.y, this.w, this.h);
	}	
}
var spritePlayer = new Sprite(player.x,player.y,player.w,player.h,3,10.,"./_Images/Sprites/Templario","png");
var spriteFire = new Sprite(player.x,player.y,player.w,player.h,2,10.,"./_Images/Sprites/Fire","png");
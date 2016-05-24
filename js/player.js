var Player = (function()
{
    this.x = 100;
	this.y = 100;
	this.w = 163;
	this.h = 109;
    
    this.moveLeft = false;
    this.moveRight = false;
    this.moveUp = false;
    this.moveDown = false;
	
	this.start = (new Date()).getTime();
	this.currentFrame = 0.;
	this.numFrames = 3;
	this.images = [];
	this.animationSpeed = 5.;
    
    this.speed = 2.5;
    
    for (var i = 0; i < this.numFrames; i++)
	{
	    this.images[i] = new Image();
		this.images[i].src = "./img/spritessheets/templario" + (i+1) + ".png";
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
        
        if(player.moveLeft)
        {
            this.x -= this.speed;     
        }
        
        if(player.moveRight)
        {
            this.x += this.speed;     
        }
        
        if(player.moveUp)
        {
            this.y -= this.speed;     
        }
        
        if(player.moveDown)
        {
            this.y += this.speed;     
        }
	}
	
	this.draw = function()
	{
		canvas.ctx.drawImage(this.images[Math.floor(this.currentFrame)%this.numFrames], this.x, this.y, this.w, this.h);
	}	

});

var player = new Player();
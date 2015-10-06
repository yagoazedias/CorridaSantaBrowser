var FundGameplay = function()
{
	this.x = 0;
	this.y = 0;
	this.w = 4800;
	this.h = 600;
	
	this.speed = 15;
	
	this.radomNumber = Math.floor(Math.random() * 50);
	
	this.image = new Image();
	this.image.src = "./_Images/Maps/BackGroundGame.png";
	
	this.riverImage = new Image();
	this.riverImage.src = "./_Images/Maps/River.png";
	
		this.riverX = 0;
		this.riverY = 0;
	
	this.bridgeImage = new Image();
	this.bridgeImage.src = "./_Images/Maps/Bridge.png";
	
		this.bridgeX = 0;
	
	this.draw = function()
	{
		graphics.ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
		
		if(this.radomNumber > 95)
		{
			graphics.ctx.drawImage(this.riverImage, this.riverX, this.riverY, 519, 6000);
			graphics.ctx.drawImage(this.bridgeImage, this.bridgeX,125);
		}
	}
	
	this.riverMoviment = function ()
	{
	    if (player.effect === "Slow")
	    { this.riverY += 5; }
	    else { this.riverY += 5; }
	}

	this.update = function()
	{
	    this.x -= this.speed;
	    this.riverMoviment();
		this.riverX = this.x + 1000;
		this.bridgeX = this.x + 975;
		
			if(this.x < graphics.canvas.width - this.w && player.effect != "Fast")
			{this.x = 0; this.radomNumber = Math.floor(Math.random() * 50);}
			
			if(this.x < graphics.canvas.width - this.w && player.effect === "Fast")
			{this.x = 0; this.radomNumber = 94;}
			
			if(this.riverY >= 0)
			{this.riverY = -5200;}
	}
}
var fundGameplay = new FundGameplay();
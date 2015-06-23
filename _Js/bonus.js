var bonus = function()
{
	this.image = new Image();
	this.image.src = "./_Images/Bonus/BonusGold.png";
	
	this.radomImage = ["./_Images/Bonus/BonusRed.png","./_Images/Bonus/BonusBlue.png","./_Images/Bonus/BonusGold.png"]
	
	this.x = 3000;
	this.y = 200 + Math.floor(Math.random() * (graphics.canvas.height - 300));
	this.w = 53;
	this.h = 60; 
	
	this.update = function()
	{
		this.x -= 5;
		
		if(this.x < 0 - this.w)
		{ this.x = 3000; this.image.src = bonus.radomImage[Math.floor(Math.random() * (bonus.radomImage.length))];}
		
		if(this.x < 2000)
		{ player.effect = "Normal"; }
	}
	
	this.draw = function()
	{
		graphics.ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
	}
}
var bonus = new bonus();
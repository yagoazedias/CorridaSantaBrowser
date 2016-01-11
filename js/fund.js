var Fund = (function()
{
	this.x = 0;
	this.speed = 2.5;
	
	this.Image = new Image();
	this.Image.src = "./_Images/Maps/BackGroundMenu.png";
	
	this.update = (function()
    {
		this.x -= this.speed;
		
		if(this.x <= -4000)
		{ 
            this.x = 0; 
        }
	});
	
	this.draw = (function() 
    {
		graphics.ctx.drawImage(this.Image,this.x,0);
	});
});
var fund = new Fund()

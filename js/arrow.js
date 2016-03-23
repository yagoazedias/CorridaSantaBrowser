var Arrow = (function(x, name, speed)
{
	this.image = new Image();
	this.image.src = "./img/Bonus/Arrow.png";
	this.name = name;

	this.x = x;
	this.y = 200 + Math.floor(Math.random() * (graphics.canvas.height - 300));
	this.w = 100;
	this.h = 25;
	
	this.speed = speed;
	
	this.update = (function() {
		
		this.x -= this.speed;
		
		if(this.x < 0 - 160 && this.name != "arrow1")
		{
			this.y = 200 + Math.floor(Math.random() * (graphics.canvas.height - 300)) + 25;this.x = 1000;
		}
		
		if(this.x < 0 - 160 && this.name === "arrow1" ){this.y = player.y +25;this.x = 1000;}
	});
	
	this.draw = (function() {
		graphics.ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
	});
});
var arrow1 = new Arrow(1000, "arrow1",20);
var arrow2 = new Arrow(800, "arrow2",20);
var arrow3 = new Arrow(1300, "arrow3", 20);
var arrow4 = new Arrow(1500, "arrow4", 20);

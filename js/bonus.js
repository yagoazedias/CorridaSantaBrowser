var bonus = (function()
{
	this.image = new Image();
	this.image.src = "./img/Bonus/BonusRed.png";
	this.effect = "Slow";
	
	this.randomEffect = ["Fast","Slow","Normal"];
	this.radomImage = ["./_Images/Bonus/BonusRed.png","./_Images/Bonus/BonusBlue.png","./_Images/Bonus/BonusGold.png"]
	
	this.x = 3000;
	this.y = 200 + Math.floor(Math.random() * (graphics.canvas.height - 300));
	this.w = 53;
	this.h = 60; 
	
	this.changeEffect = (function() {
	    switch (this.effect)
	    {
	        case "Fast": this.image.src = "./_Images/Bonus/BonusRed.png"; break;
	        case "Slow": this.image.src = "./_Images/Bonus/BonusBlue.png"; break;
	        case "Normal": this.image.src = "./_Images/Bonus/BonusGold.png"; break;
	    }
	});

	this.move = (function()
	{
	    this.x -= 5;

	    if (this.x < 0 - this.w)
	    {
	        this.x = 3000;
	        this.effect = this.randomEffect[Math.floor(Math.random() * (bonus.randomEffect.length))];
	    }

	    if (this.x < 2000)
	    { 
            player.effect = "Normal";
        }
	});

	this.update = (function()
    {
	    this.Move();
	    this.ChangeEffect();
	});
	
	this.draw = (function()
    {
		graphics.ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
	});
});
var bonus = new bonus();

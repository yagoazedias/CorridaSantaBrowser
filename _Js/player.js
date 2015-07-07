var Player = function()
{
	this.x = 200;
	this.y = 200;
	this.w = 163;
	this.h = 109;
	
	this.life = 5;
	this.speed = 5;
	
	this.imageEffect = new Image();
	this.imageEffect.src = "./_Images/Bonus/BonusScreenRed.png";
	this.effect = "Normal";
	
	this.moveRight = false;
	this.moveLeft = false;
	this.moveUp = false;
	this.moveDown = false;
	
	this.updateSprite = function()
	{
		spritePlayer.x = this.x;
		spritePlayer.y = this.y;
		spritePlayer.w = this.w;
		spritePlayer.h = this.h;
		
		spriteFire.x = this.x - 160;
		spriteFire.y = this.y - 60;
		spriteFire.w = 450;
		spriteFire.h = 260;
	}
	
	this.update = function()
	{
		this.updateSprite();
		spritePlayer.update();
		
		if(this.effect === "Fast")
		{ spriteFire.update(); this.speed = 7.5; fundGameplay.speed = 200; this.imageEffect.src = "./_Images/Bonus/BonusScreenRed.png";}
		
		if (this.effect === "Slow")
		{ console.log("Player is Slow"); }

		if(this.effect === "Normal")
		{ this.speed = 5; fundGameplay.speed -= 2.0; if(fundGameplay.speed <= 15){fundGameplay.speed = 15;} this.imageEffect.src = "./_Images/Bonus/NoBonus.png";}
				
		if(this.moveRight){this.x += this.speed;}
		if(this.moveLeft){this.x -= this.speed;}
		if(this.moveUp){this.y -= this.speed;}
		if(this.moveDown){this.y += this.speed;}
		
		if(this.x < 0){this.x = 0;}
		if(this.x > graphics.canvas.width - this.w){this.x = graphics.canvas.width - this.w;}
		if(this.y < 50){this.y = 50;}
		if(this.y > graphics.canvas.height - this.h - 50){this.y = graphics.canvas.height - this.h - 50;}
	}
	
	this.draw = function()
	{
		spritePlayer.draw();
		
		if(this.effect === "Fast")
		{ spriteFire.draw();}
		
		graphics.ctx.drawImage(this.imageEffect,0,0);
	}
}
var player = new Player();
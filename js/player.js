var Player = (function() {
	
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
	
	this.updateSprite = (function ()
    {
		spritePlayer.x = this.x;
		spritePlayer.y = this.y;
		spritePlayer.w = this.w;
		spritePlayer.h = this.h;
		
		spriteFire.x = this.x - 160;
		spriteFire.y = this.y - 60;
		spriteFire.w = 450;
		spriteFire.h = 260;
	});
	
	this.updateFastEffect = (function ()
	{
	    this.imageEffect.src = "./_Images/Bonus/BonusScreenRed.png";
	    spriteFire.update(); this.speed = 7.5;
	    fundGameplay.speed = 200;
	    arrow1.x = 900;
	    arrow2.x = 900;
	    arrow3.x = 900;
	    arrow4.x = 900;
	});

	this.updateSlowEffect = (function () {
	    this.imageEffect.src = "./_Images/Bonus/BonusBlueScreen.png";
	    this.speed = 2.5;
	    fundGameplay.speed = 7.5;
	    arrow1.speed = 5;
	    arrow2.speed = 5;
	    arrow3.speed = 5;
	    arrow4.speed = 5;
	});

	this.updateDead = (function()
	{
	    if(this.life < 1)
	    {
	        fadeIn.transition = true;
	        fadeIn.meaning = "Scene_Dead";
	    }
	});

	this.updateNormalEffect = (function ()
	{
	    this.imageEffect.src = "./_Images/Bonus/NoBonus.png";

	    this.speed = 5;
	    fundGameplay.speed -= 2.0;

	    if (fundGameplay.speed <= 15)
	    { fundGameplay.speed = 15; }

	    arrow1.speed = 20;
	    arrow2.speed = 20;
	    arrow3.speed = 20;
	    arrow4.speed = 20;
    });

	this.updateMoving = (function()
	{
	    if (this.moveRight)
	    { this.x += this.speed; }

	    if (this.moveLeft)
	    { this.x -= this.speed; }

	    if (this.moveUp)
	    { this.y -= this.speed; }

	    if (this.moveDown)
	    { this.y += this.speed; }

	    if (this.x < 0)
	    { this.x = 0; }

	    if (this.x > graphics.canvas.width - this.w)
	    { this.x = graphics.canvas.width - this.w; }

	    if (this.y < 50)
	    { this.y = 50; }

	    if (this.y > graphics.canvas.height - this.h - 50)
	    { this.y = graphics.canvas.height - this.h - 50; }
	});

	this.update = (function()
	{
	    this.updateSprite();
	    this.updateDead();
	    this.updateMoving()
	
		spritePlayer.update();

		if(this.effect === "Fast")
		{ this.updateFastEffect(); }
		
		if (this.effect === "Slow")
		{ this.updateSlowEffect(); }

		if(this.effect === "Normal")
		{ this.updateNormalEffect(); }
				
	});
	
	this.draw = (function() {
		spritePlayer.draw();
		
		if(this.effect === "Fast")
		{ spriteFire.draw();}
		
		graphics.ctx.drawImage(this.imageEffect,0,0);
	});
});
var player = new Player();

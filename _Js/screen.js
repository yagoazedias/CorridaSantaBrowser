var ScreenGame = function()
{
	this.ImageFront = new Image();
	this.ImageFront.src = "./_Images/Screens/Logo.png";
	
	this.meaning = "Scene_Menu";
	this.GameScene = "Scene_Menu";
	
	this.restoreConfigs = function()
	{
	    player.life = 5;
	    arrow1.speed = 20;
	    arrow2.speed = 20;
	    arrow3.speed = 20;
	    arrow4.speed = 20;

	    arrow1.x = 1000;
	    arrow2.x = 1000;
	    arrow3.x = 1000;
	    arrow4.x = 1000;

	    score.number = 0;
	}

	this.update = function()
	{
		if(this.GameScene === "Scene_Menu")
		{
			this.ImageFront.src = "./_Images/Screens/Logo.png";
			button.update();
			fund.update();
			this.restoreConfigs();
		}
		
		if(this.GameScene === "Scene_Directions")
		{
			this.ImageFront.src = "./_Images/Screens/DirectionsScreen.png";
			button.updateButtonBack();
			fund.update();
		}
		
		if(this.GameScene === "Scene_Credits")
		{
			this.ImageFront.src = "./_Images/Screens/ScreenCredits.png";
			button.updateButtonBack();
		}

		if (this.GameScene === "Scene_Dead")
		{
		    this.ImageFront.src = "./_Images/Screens/GameOverScreen.png";
		    button.updateButtonBack();
		}
	}
	
	this.draw = function()
	{
		if(this.GameScene === "Scene_Menu")
		{
			fund.draw();
			graphics.ctx.drawImage(this.ImageFront,0,0);
			button.draw();
		}

		if(this.GameScene === "Scene_Directions")
		{
			fund.draw();
			graphics.ctx.drawImage(this.ImageFront,0,0);
			button.drawButtonBack();
		}

		if(this.GameScene === "Scene_Credits")
		{
			graphics.ctx.drawImage(this.ImageFront,0,0);
			button.drawButtonBack();
		}
        
		if (this.GameScene === "Scene_Dead")
		{
		    graphics.ctx.drawImage(this.ImageFront, 0, 0);
		    button.drawButtonBack();
		}

	}
}
var screenGame = new ScreenGame();
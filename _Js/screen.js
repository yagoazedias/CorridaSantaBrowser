var ScreenGame = function()
{
	this.ImageFront = new Image();
	this.ImageFront.src = "./_Images/Screens/Logo.png";
	
	this.meaning = "Scene_Menu";
	this.GameScene = "Scene_Menu";
	
	this.update = function()
	{
		if(this.GameScene === "Scene_Menu")
		{
			this.ImageFront.src = "./_Images/Screens/Logo.png";
			button.update();
			fund.update();
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
	}
}
var screenGame = new ScreenGame();
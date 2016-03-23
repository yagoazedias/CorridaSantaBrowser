var Gameplay = (function()
{
	this.pause = false;
	
	this.update = (function()
	{
		if(screenGame.GameScene === "Scene_Game" && !this.pause)
		{
			player.update();
			fundGameplay.update();
			time.update();
			arrow1.update();
			arrow2.update();
			arrow3.update();
			arrow4.update();
			colision.update();
			score.update();
			bonus.update();
		}
		
		if(screenGame.GameScene === "Scene_Game" && this.pause)
		{ pause.update(); time.update(); }
	});
	
	this.draw = (function() {
	
		if(screenGame.GameScene === "Scene_Game")
		{
			fundGameplay.draw();
			arrow1.draw();
			arrow2.draw();
			arrow3.draw();
			arrow4.draw();
			player.draw();
			bonus.draw();
			hud.draw();
		}
		
		if(screenGame.GameScene === "Scene_Game" && this.pause)
		{ pause.draw();}
	});
});
var gameplay = new Gameplay();

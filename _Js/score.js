var score = function()
{
	this.number = 0;
	this.count = 0.25;
	
	this.update = function()
	{
		if(screenGame.GameScene === "Scene_Game" && !gameplay.pause && player.life > 0)
		{this.number += this.count;}
	}	
}
var score = new score();
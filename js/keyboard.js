var keyboard = (function()
{
	this.keydown = (function(e)
	{
		switch(e.keyCode)
		{
			case 39: player.moveRight = true; break;
			case 37: player.moveLeft = true; break;
			case 38: player.moveUp = true; break;
			case 40: player.moveDown = true; break;
			case 80: if(screenGame.GameScene === "Scene_Game") {gameplay.pause = !gameplay.pause;} break;
		}
	});
	
	this.keyup = (function(e) {
	
		switch(e.keyCode)
		{
			case 39: player.moveRight = false; break;
			case 37: player.moveLeft = false; break;
			case 38: player.moveUp = false; break;
			case 40: player.moveDown = false; break;
		}
	});
});
var keyboard = new keyboard();

document.addEventListener('keydown', keyboard.keydown, true);
document.addEventListener('keyup', keyboard.keyup, true);

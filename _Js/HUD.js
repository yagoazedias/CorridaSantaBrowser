 var HUD = function()
 {	
	this.lifeBarWidth = player.life * 35;
	
	this.update = function()
	{
		
	}
		
	this.draw = function()
	{
		//life
		graphics.drawStrokeRect(19, 14, 177, 42, "#000000");
		graphics.drawRect(20, 15, this.lifeBarWidth, 40, "#0D4915");
		graphics.drawShadowBegin(1, 1,3, "rgba( 0, 0, 0, 1.0 )");
		graphics.drawText(45, 49, "Vida: " + player.life.toString() , "#CBA795");
		graphics.drawShadowEnd();
		
		//score
		graphics.drawStrokeRect(449, 14, 302, 42, "#000000");
		graphics.drawRect(450, 15, 300, 40, "#046275");
		graphics.drawShadowBegin(1, 1,3, "rgba( 0, 0, 0, 1.0 )");
		graphics.drawText(470, 49, "Score: " + Math.floor(score.number) , "#CBA795");
		graphics.drawShadowEnd();
	}
 }
 var hud = new HUD();
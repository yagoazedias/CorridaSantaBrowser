var Colision = function()
{
	this.hit = new Image();
	this.hit.src = "./_Images/bonus/HIT.png";
	
	this.update = function()
	{
		if(screenGame.GameScene === "Scene_Game")
		{
			if((player.x > arrow1.x - player.w + 50)&&(player.x < arrow1.x)&&((player.y < arrow1.y - 10)&&(player.y > arrow1.y - player.h + 30)))
			{arrow1.x = 1000; arrow1.y = player.y; graphics.ctx.drawImage(this.hit,0,0);} 
			
			if((player.x > arrow2.x - player.w + 50)&&(player.x < arrow2.x)&&((player.y < arrow2.y - 10)&&(player.y > arrow2.y - player.h + 30)))
			{arrow2.x = 1000; arrow2.y = 200 + Math.floor(Math.random() * (graphics.canvas.height - 300)); graphics.ctx.drawImage(this.hit,0,0);} 
			
			if((player.x > arrow3.x - player.w + 50)&&(player.x < arrow3.x)&&((player.y < arrow3.y - 10)&&(player.y > arrow3.y - player.h + 30)))
			{arrow3.x = 1000; arrow3.y = 200 + Math.floor(Math.random() * (graphics.canvas.height - 300)); graphics.ctx.drawImage(this.hit,0,0);} 
			
			//colisão com o player bonus
			if((player.x > bonus.x - player.w + 50)&&(player.x < bonus.x)&&((player.y < bonus.y - 10)&&(player.y > bonus.y - player.h + 30)))
			{
				bonus.x = 3000;
				bonus.y = 200 + Math.floor(Math.random() * (graphics.canvas.height - 300)); 
				bonus.image.src = bonus.radomImage[Math.floor(Math.random() * (bonus.radomImage.length))];
					
				if(bonus.image.src === "./_Images/Bonus/BonusRed.png")
				{
					player.effect = "Fast";
				}
			} 
		}
	}
}
var colision = new Colision();
var Colision = (function()
{
	this.hit = new Image();
	this.hit.src = "./_Images/bonus/HIT.png";
	
	this.updateEffect = (function() {
	   
	    if (bonus.effect === "Fast") 
	    { player.effect = "Fast"; player.life = 5; }

	    if (bonus.effect === "Slow") 
	    { player.effect = "Slow"; player.life = 5; }

	    if (bonus.effect === "Normal") 
	    { player.effect = "Normal"; player.life = 10; }

	    bonus.effect = bonus.randomEffect[Math.floor(Math.random() * (bonus.randomEffect.length))];
	});

	this.changeBonusPos = (function() {
	    bonus.x = 3000;
	    bonus.y = 200 + Math.floor(Math.random() * (graphics.canvas.height - 300));
	    bonus.effect = bonus.randomEffect[Math.floor(Math.random() * (bonus.randomEffect.length))];
	});
	
	this.updateColisionForScene = (function(){
		
		if(screenGame.GameScene === "Scene_Game")
		{
		    if ((player.x > arrow1.x - player.w + 50) && (player.x < arrow1.x) &&
                ((player.y < arrow1.y - 10) && (player.y > arrow1.y - player.h + 30)) && player.life >= 1)
		    { arrow1.x = 1000; arrow1.y = player.y; graphics.ctx.drawImage(this.hit, 0, 0); player.life--;}
			
		    if ((player.x > arrow2.x - player.w + 50) && (player.x < arrow2.x) &&
                ((player.y < arrow2.y - 10) && (player.y > arrow2.y - player.h + 30)) && player.life >= 1)
		    { arrow2.x = 1000; arrow2.y = 200 + Math.floor(Math.random() * (graphics.canvas.height - 300)); graphics.ctx.drawImage(this.hit, 0, 0); player.life--; }
			
		    if ((player.x > arrow3.x - player.w + 50) && (player.x < arrow3.x) &&
                ((player.y < arrow3.y - 10) && (player.y > arrow3.y - player.h + 30)) && player.life >= 1)
		    { arrow3.x = 1000; arrow3.y = 200 + Math.floor(Math.random() * (graphics.canvas.height - 300)); graphics.ctx.drawImage(this.hit, 0, 0); player.life--; }
			
		    if ((player.x > arrow4.x - player.w + 50) && (player.x < arrow4.x) &&
                ((player.y < arrow4.y - 10) && (player.y > arrow4.y - player.h + 30)) && player.life >= 1)
		    { arrow4.x = 1000; arrow4.y = 200 + Math.floor(Math.random() * (graphics.canvas.height - 300)); graphics.ctx.drawImage(this.hit, 0, 0); player.life--; }

		    if ((player.x > bonus.x - player.w + 50) && (player.x < bonus.x) &&
                ((player.y < bonus.y - 10) && (player.y > bonus.y - player.h + 30)))
		    {
		        this.updateEffect();
		        this.changeBonusPos();
			} 
		}	
	});
	
	
	this.update = (function() {
		this.updateColisionForScene();
	});
});
var colision = new Colision();

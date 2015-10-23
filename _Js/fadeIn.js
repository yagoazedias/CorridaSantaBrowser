var FadeIn = (function()
{
	this.up_y = -300;
	this.up_w = 800;
	this.up_h = 300;
	
	this.down_y = 600;
	this.down_w = 800;
	this.down_h = 300;
	
	this.transition = false;
	this.speed = 10;
	
	this.update = (function() {
		
		if(this.transition)
		{
			this.up_y += this.speed;
			this.down_y -= this.speed;
			
			if(this.up_y + this.up_h >= this.down_y)
			{ this.speed *= -1; }	
						
			if(this.up_y + this.up_h >= this.down_y && this.meaning === "Scene_Menu")
			{ screenGame.GameScene = "Scene_Menu"; }

			if (this.up_y + this.up_h >= this.down_y && this.meaning === "Scene_Dead")
			{ screenGame.GameScene = "Scene_Dead"; }
						
			if(this.up_y + this.up_h >= this.down_y && this.meaning === "Scene_Directions")
			{ screenGame.GameScene = "Scene_Directions"; }
						
			if(this.up_y + this.up_h >= this.down_y && this.meaning === "Scene_Game")
			{
				screenGame.GameScene = "Scene_Game";
				player.life = 5;
				gameplay.pause = false;
				fundGameplay.x = 0; 
				arrow1.x = 1000;
				arrow2.x = 800;
				arrow3.x = 1300;
				arrow4.x = 1500;
			}
					
			if(this.up_y + this.up_h >= this.down_y && this.meaning === "Scene_Credits")
			{ screenGame.GameScene = "Scene_Credits"; }
						
			if(this.up_y == graphics.canvas.height/2 * -1 && this.down_y == graphics.canvas.height)
			{
				this.up_y = graphics.canvas.height/2 * -1;
				this.down_y = graphics.canvas.height;
				this.speed *= -1;
				this.transition = false;
			}				
		}
	});
	
	this.draw = (function() {
		graphics.drawRect(0,this.up_y ,this.up_w,this.up_h,"black");
		graphics.drawRect(0,this.down_y,this.down_w,this.down_h,"black");
	});
});
var fadeIn = new FadeIn();

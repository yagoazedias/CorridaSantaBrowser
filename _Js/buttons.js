var Button = function()
{
	this.ImagePlay = new Image();
	this.ImagePlay.src = "./_Images/Buttons/ButtonPlay.png";
		
		this.Play_X = 315;
		this.Play_Y = 450;
		this.Play_W = 170;
		this.Play_H = 68;
		
	this.ImageDirections = new Image();
	this.ImageDirections.src = "./_Images/Buttons/ButtonDirections.png";
		
		this.Directions_X = 105;
		this.Directions_Y = 450;
		this.Directions_W = 170;
		this.Directions_H = 68;
		
	this.ImageCredits = new Image();
	this.ImageCredits.src = "./_Images/Buttons/ButtonCredits.png";
		
		this.Credits_X = 525;
		this.Credits_Y = 450;
		this.Credits_W = 170;
		this.Credits_H = 68;
		
	this.ImageBack = new Image();
	this.ImageBack.src = "./_Images/Buttons/ButtonBack.png";
		
		this.Back_X = 0;
		this.Back_Y = 0;
		this.Back_W = 170;
		this.Back_H = 68;
		
	
	this.update = function()
	{
		if(mouse.x > this.Play_X + 10 && mouse.x < this.Play_X + this.Play_W - 10 && mouse.y > this.Play_Y + 10 && mouse.y < this.Play_Y + this.Play_H - 10)
		{
			this.Play_X = 305;
			this.Play_Y = 440;
			this.Play_W = 190;
			this.Play_H = 88;
			
				if(mouse.click)
				{
					fadeIn.meaning = "Scene_Game";
					fadeIn.transition = true;
				}
		}
		else
		{
			this.Play_X = 315;
			this.Play_Y = 450;
			this.Play_W = 170;
			this.Play_H = 68;
		}
		
		if(mouse.x > this.Directions_X + 10 && mouse.x < this.Directions_X + this.Directions_W - 10 && mouse.y > this.Directions_Y + 10 && mouse.y < this.Directions_Y + this.Directions_H - 10)
		{
			this.Directions_X = 95;
			this.Directions_Y = 440;
			this.Directions_W = 190;
			this.Directions_H = 88;
			
			if(mouse.click)
			{
				fadeIn.meaning = "Scene_Directions";
				fadeIn.transition = true;
			}
		}
		else
		{
			this.Directions_X = 105;
			this.Directions_Y = 450;
			this.Directions_W = 170;
			this.Directions_H = 68;
		}
		
		if(mouse.x > this.Credits_X + 10 && mouse.x < this.Credits_X + this.Credits_W - 10 && mouse.y > this.Credits_Y + 10 && mouse.y < this.Credits_Y + this.Credits_H - 10)
		{
			this.Credits_X = 515;
			this.Credits_Y = 440;
			this.Credits_W = 190;
			this.Credits_H = 88;
			
			if(mouse.click)
			{
				fadeIn.meaning = "Scene_Credits";
				fadeIn.transition = true;
			}
		}
		else
		{
			this.Credits_X = 525;
			this.Credits_Y = 450;
			this.Credits_W = 170;
			this.Credits_H = 68;
		}
	}
	
	this.updateButtonBack = function()
	{
		if(screenGame.GameScene === "Scene_Credits")
		{
			if(mouse.x > this.Back_X + 10 && mouse.x < this.Back_X + this.Back_W - 10 && mouse.y > this.Back_Y + 10 && mouse.y < this.Back_Y + this.Back_H - 10)
			{
				this.Back_X = 590;
				this.Back_Y = 390;
				this.Back_W = 190;
				this.Back_H = 88;
				
				if(mouse.click)
				{
					fadeIn.meaning = "Scene_Menu";
					fadeIn.transition = true;
				}
			}
			else
			{
				this.Back_X = 600;
				this.Back_Y = 400;
				this.Back_W = 170;
				this.Back_H = 68;
			}
		}
		if(screenGame.GameScene === "Scene_Directions")
		{
			if(mouse.x > this.Back_X + 10 && mouse.x < this.Back_X + this.Back_W - 10 && mouse.y > this.Back_Y + 10 && mouse.y < this.Back_Y + this.Back_H - 10)
			{
				this.Back_X = 550;
				this.Back_Y = 480;
				this.Back_W = 190;
				this.Back_H = 88;
				
				if(mouse.click)
				{
					fadeIn.meaning = "Scene_Menu";
					fadeIn.transition = true;
				}
			}
			else
			{
				this.Back_X = 560;
				this.Back_Y = 490;
				this.Back_W = 170;
				this.Back_H = 68;
			}
		}
	}
	
	this.drawButtonBack = function()
	{
		graphics.ctx.drawImage(this.ImageBack,this.Back_X,this.Back_Y,this.Back_W,this.Back_H);
	}
	
	this.draw = function()
	{
		graphics.ctx.drawImage(this.ImagePlay,this.Play_X,this.Play_Y,this.Play_W,this.Play_H);
		graphics.ctx.drawImage(this.ImageDirections,this.Directions_X,this.Directions_Y,this.Directions_W,this.Directions_H);
		graphics.ctx.drawImage(this.ImageCredits,this.Credits_X,this.Credits_Y,this.Credits_W,this.Credits_H);
	}
}
var button = new Button();
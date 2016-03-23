var Button = (function()
{
	this.imagePlay = new Image();
	this.imagePlay.src = "./img/Buttons/ButtonPlay.png";
		
		this.play_x = 315;
		this.play_y = 450;
		this.play_w = 170;
		this.play_h = 68;
		
	this.imageDirections = new Image();
	this.imageDirections.src = "./img/Buttons/ButtonDirections.png";
		
		this.directions_X = 105;
		this.directions_Y = 450;
		this.directions_W = 170;
		this.directions_H = 68;
		
	this.imageCredits = new Image();
	this.imageCredits.src = "./img/Buttons/ButtonCredits.png";
		
		this.credits_x = 525;
		this.credits_y = 450;
		this.credits_w = 170;
		this.credits_h = 68;
		
	this.imageBack = new Image();
	this.imageBack.src = "./img/Buttons/ButtonBack.png";
		
		this.back_x = 0;
		this.back_y = 0;
		this.back_w = 170;
		this.back_h = 68;
		
		
	this.updateButtons = (function() 
    {
		if(mouse.x > this.play_x + 10 && mouse.x < this.play_x + this.play_w - 10 
           && mouse.y > this.play_y + 10 && mouse.y < this.play_y + this.play_h - 10)
		{
			this.play_x = 305;
			this.play_y = 440;
			this.play_w = 190;
			this.play_h = 88;
			
				if(mouse.click)
				{
					fadeIn.meaning = "Scene_Game";
					fadeIn.transition = true;
				}
		}
		else
		{
			this.play_x = 315;
			this.play_y = 450;
			this.play_w = 170;
			this.play_h = 68;
		}
		
		if(mouse.x > this.directions_x + 10 && mouse.x < this.directions_x + this.directions_w - 10 
           && mouse.y > this.directions_y + 10 && mouse.y < this.directions_y + this.directions_h - 10)
		{
			this.directions_x = 95;
			this.directions_y = 440;
			this.directions_w = 190;
			this.directions_h = 88;
			
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
		
		if(mouse.x > this.Credits_X + 10 && mouse.x < this.Credits_X + this.Credits_W - 10 
           && mouse.y > this.Credits_Y + 10 && mouse.y < this.Credits_Y + this.Credits_H - 10)
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
	});
	
	this.update = (function() {
		this.updateButtons();
	});
	
	this.updateButtonBack = (function() {
		if(screenGame.GameScene === "Scene_Credits")
		{
			if(mouse.x > this.Back_X + 10 && mouse.x < this.Back_X + this.Back_W - 10 
               && mouse.y > this.Back_Y + 10 && mouse.y < this.Back_Y + this.Back_H - 10)
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
			if(mouse.x > this.Back_X + 10 && mouse.x < this.Back_X + this.Back_W - 10
               && mouse.y > this.Back_Y + 10 && mouse.y < this.Back_Y + this.Back_H - 10)
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

		if (screenGame.GameScene === "Scene_Dead")
        {

		    if (mouse.x > this.Back_X + 10 &&
        	    mouse.x < this.Back_X + this.Back_W - 10 &&
                mouse.y > this.Back_Y + 10 &&
                mouse.y < this.Back_Y + this.Back_H - 10)
            {

		        this.Back_X = 550;
		        this.Back_Y = 480;
		        this.Back_W = 190;
		        this.Back_H = 88;

		        if (mouse.click) 
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
	});
	
	this.drawButtonBack = (function() 
    {
		graphics.ctx.drawImage(this.ImageBack,this.Back_X,this.Back_Y,this.Back_W,this.Back_H);
	});
	
	this.draw = (function() 
    {
		graphics.ctx.drawImage(this.ImagePlay,this.Play_X,this.Play_Y,this.Play_W,this.Play_H);
		graphics.ctx.drawImage(this.ImageDirections,this.Directions_X,this.Directions_Y,this.Directions_W,this.Directions_H);
		graphics.ctx.drawImage(this.ImageCredits,this.Credits_X,this.Credits_Y,this.Credits_W,this.Credits_H);
	});
});
var button = new Button();

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
			this.directions_x = 105;
			this.directions_y = 450;
			this.directions_w = 170;
			this.directions_h = 68;
		}
		
		if(mouse.x > this.credits_x + 10 && mouse.x < this.credits_x + this.credits_w - 10 
           && mouse.y > this.credits_y + 10 && mouse.y < this.credits_y + this.credits_h - 10)
		{
			this.credits_x = 515;
			this.credits_y = 440;
			this.credits_w = 190;
			this.credits_h = 88;
			
			if(mouse.click)
			{
				fadeIn.meaning = "Scene_Credits";
				fadeIn.transition = true;
			}
		}
		else
		{
			this.credits_x = 525;
			this.credits_y = 450;
			this.credits_w = 170;
			this.credits_h = 68;
		}	
	});
	
	this.update = (function()
    {
		this.updateButtons();
	});
	
	this.updateButtonBack = (function() 
    {
		if(screenGame.GameScene === "Scene_Credits")
		{
			if(mouse.x > this.back_x + 10 && mouse.x < this.back_X + this.back_w - 10 
               && mouse.y > this.back_y + 10 && mouse.y < this.back_y + this.back_h - 10)
			{
				this.back_x = 590;
				this.back_y = 390;
				this.back_w = 190;
				this.back_h = 88;
				
				if(mouse.click)
				{
					fadeIn.meaning = "Scene_Menu";
					fadeIn.transition = true;
				}
			}
			else
			{
				this.back_x = 600;
				this.back_y = 400;
				this.back_w = 170;
				this.back_h = 68;
			}
		}
		if(screenGame.GameScene === "Scene_Directions")
		{
			if(mouse.x > this.back_x + 10 && mouse.x < this.back_x + this.back_w - 10
               && mouse.y > this.back_y + 10 && mouse.y < this.back_y + this.back_h - 10)
			{
				this.back_x = 550;
				this.back_y = 480;
				this.back_w = 190;
				this.back_h = 88;
				
				if(mouse.click)
				{
					fadeIn.meaning = "Scene_Menu";
					fadeIn.transition = true;
				}
			}
			else
			{
				this.back_x = 560;
				this.back_y = 490;
				this.back_y = 170;
				this.back_h = 68;
			}
		}

		if (screenGame.GameScene === "Scene_Dead")
        {

		    if (mouse.x > this.back_x + 10 &&
        	    mouse.x < this.back_x + this.back_w - 10 &&
                mouse.y > this.back_y + 10 &&
                mouse.y < this.back_y + this.back_h - 10)
            {

		        this.back_x = 550;
		        this.back_y = 480;
		        this.back_w = 190;
		        this.back_h = 88;

		        if (mouse.click) 
                {
		            fadeIn.meaning = "Scene_Menu";
		            fadeIn.transition = true;
		        }
		    }
		    else
            {
		        this.back_x = 560;
		        this.back_y = 490;
		        this.back_w = 170;
		        this.back_h = 68;
		    }
		}
	});
	
	this.drawButtonBack = (function() 
    {
		graphics.ctx.drawImage(this.imageBack,this.back_x,this.back_y,this.back_w,this.back_h);
	});
	
	this.draw = (function() 
    {
		graphics.ctx.drawImage(this.imagePlay,this.play_X,this.play_y,this.play_w,this.play_h);
		graphics.ctx.drawImage(this.imageDirections,this.directions_x,this.directions_y,this.directions_w,this.directions_h);
		graphics.ctx.drawImage(this.imageCredits,this.credits_x,this.credits_y,this.credits_w,this.credits_h);
	});
});
var button = new Button();

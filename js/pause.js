var pause = (function()
{
	this.pauseImage = new Image()
	this.pauseImage.src = "./_Images/Screens/PauseScreen.png"
	
	this.buttonMenu = new Image()
	this.buttonMenu.src = "./_Images/Buttons/ButtonMenu.png"
	
		this.btMenu_x = 230;
		this.btMenu_y = 175;
		this.btMenu_w = 336;
		this.btMenu_h = 129;	
	
	this.buttonBack = new Image()
	this.buttonBack.src = "./_Images/Buttons/ButtonBack.png"
	
		this.btBack_x = 230;
		this.btBack_y = 350;
		this.btBack_w = 336;
		this.btBack_h = 129;

	this.updatePauseButton = (function(){
			if(mouse.x > this.btMenu_x + 10 && mouse.x < this.btMenu_x + this.btMenu_w - 10 && mouse.y > this.btMenu_y + 10 && mouse.y < this.btMenu_y + this.btMenu_h - 10)
		{
			this.btMenu_x = 220;
			this.btMenu_y = 165;
			this.btMenu_w = 356;
			this.btMenu_h = 149;	
			
			if(mouse.click)
			{
				fadeIn.meaning = "Scene_Menu";
				fadeIn.transition = true;
				console.log(fadeIn.transition);
			}
		}else
		{
			this.btMenu_x = 230;
			this.btMenu_y = 175;
			this.btMenu_w = 336;
			this.btMenu_h = 129;
		}
		
		if(mouse.x > this.btBack_x + 10 && mouse.x < this.btBack_x + this.btBack_w - 10 && mouse.y > this.btBack_y + 10 && mouse.y < this.btBack_y + this.btBack_h - 10)
		{
			this.btBack_x = 220;
			this.btBack_y = 340;
			this.btBack_w = 356;
			this.btBack_h = 149;
			
			if(mouse.click)
			{
				gameplay.pause = false;
			}
		}else
		{
			this.btBack_x = 230;
			this.btBack_y = 350;
			this.btBack_w = 336;
			this.btBack_h = 129;
		}
	});

	this.update = function()
	{
		this.updatePauseButton();
	}
	
	this.draw = (function() {
		graphics.ctx.drawImage(this.pauseImage,0,0);
		graphics.ctx.drawImage(this.buttonMenu,this.btMenu_x, this.btMenu_y,this.btMenu_w, this.btMenu_h);
		graphics.ctx.drawImage(this.buttonBack,this.btBack_x,this.btBack_y,this.btBack_w, this.btBack_h);
	});
});
var pause = new pause();

var Screen = (function()              
{
    // Manager properties.
    this.name = "menu";
    
    // Visual properties.
    this.image = new Image();
    this.image.src = "./img/screens/menu.png";
	
	// Buttons proprietes
	this.btnPosX = [50 , 320, 590];
    
    // This is the screen fist method to run.
    this.start = (function()
    {
        button[0].image.src = "./img/buttons/directions.png";
        button[1].image.src = "./img/buttons/play.png";
        button[2].image.src = "./img/buttons/credits.png";
        
        for(var i = 0; i < 3; i++)
        {
            switch(i)
            {
                case 0:  button[i].x = 50; this.x = 400; break;
                default: button[i].x = button[i - 1].x + button[i - 1].w + 100; break; 
            }
        }
    });
	
	this.buttonExpand = (function()
	{
		for(var i = 0; i < button.length; i++)
        {	
			if(((mouse.x >= button[i].x) && (mouse.x <= button[i].x + button[i].w)) 
			   && ((mouse.y >= button[i].y) && (mouse.y <= button[i].y + button[i].h)))
			{
				button[i].x = this.btnPosX[i] - 10;
				button[i].y = 425 - 10;
				button[i].w = 190;
				button[i].h = 88;
			}
			else
			{
				button[i].x = this.btnPosX[i];
				button[i].y = 425;
				button[i].w = 170;
				button[i].h = 68;
			}
		}
	});
    
    // This is the screen update, here all game will be update.
    this.update = (function()
    {
        if(this.name === "menu")
        {
            for(var i = 0; i < 3; i++)
        	{
				button[i].update();
				this.buttonExpand();
			}
        }
    });
    
    // This is the screen draw, here all game will be draw.
    this.draw = (function()
    {
        if(this.name === "menu")
        {
            canvas.ctx.drawImage(this.image, 0, 0);
            
            for(var i = 0; i < 3; i++)
            { button[i].draw(); }
        }
    });
});
var screen = new Screen();
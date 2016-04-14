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
        // Turning the buttons to their respective images.
        button[0].image.src = "./img/buttons/directions.png";
        button[1].image.src = "./img/buttons/play.png";
        button[2].image.src = "./img/buttons/credits.png";
        button[3].image.src = "./img/buttons/back.png";
        
        // Linking the button to your name.
        button[0].name = "directions";
        button[1].name = "play";
        button[2].name = "credits";
        button[3].name = "back";
        
        for(var i = 0; i < 4; i++)
        {
            switch(i)
            {
                // Each button has its position relative to it's previous in the array object.
                case 0:  button[i].x = 50; this.x = 400; break;
                case 4:  button[i].x = 0; button[i].y = 0; break;
                default: button[i].x = button[i - 1].x + button[i - 1].w + 100; break; 
            }
        }
    });
	
    // Method to on mouse over the button expand.
	this.buttonExpand = (function()
	{
		for(var i = 0; i < button.length; i++)
        {	
            // Collision with the mouse.
			if(((mouse.x >= button[i].x) && (mouse.x <= button[i].x + button[i].w)) 
			   && ((mouse.y >= button[i].y) && (mouse.y <= button[i].y + button[i].h)))
			{
                // With expansion.
				button[i].x = this.btnPosX[i] - 10;
				button[i].y = 425 - 10;
				button[i].w = 190;
				button[i].h = 88;
			}
			else
			{
                // Widout expansion.
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
            
            map.update();
            fade.update();
        }
        
        if(this.name === "game")
        {
            map.update();
            fade.update();
        }
        
        if(this.name === "credits")
        {
            map.update();
            fade.update();
            button[4].update();
            this.buttonExpand();
            this.image.src = "./img/screens/credits.png";
        }
        
        if(this.name === "directions")
        {
            map.update();
            button[4].update();
            this.buttonExpand();
            this.image.src = "./img/screens/directions.png";
            fade.update();
        }
    });
    
    // This is the screen draw, here all game will be draw.
    this.draw = (function()
    {
        if(this.name === "menu")
        {
            map.draw();
            canvas.ctx.drawImage(this.image, 0, 0);
            
            for(var i = 0; i < 3; i++)
            { button[i].draw(); }
            
            fade.draw();
        }
        
        if(this.name === "game")
        {
            map.draw();
            canvas.ctx.drawImage(this.image, 0, 0);
            fade.draw();
        }
        
        if(this.name === "credits")
        {
            canvas.ctx.drawImage(this.image, 0, 0);
            button[4].draw();
            fade.draw();
        }
        
        if(this.name === "directions")
        {
            map.draw();
            canvas.ctx.drawImage(this.image, 0, 0);
            button[4].draw();
            fade.draw();
        }    
    });
});
var screen = new Screen();
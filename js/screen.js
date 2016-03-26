var Screen = (function()              
{
    // Manager properties.
    this.name = "menu";
    
    // Visual properties.
    this.image = new Image();
    this.image.src = "./img/screens/menu.png";
    
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
    
    // This is the screen update, here all game will be update.
    this.update = (function()
    {
        if(this.name === "menu")
        {
            // Update menu settings. 
        }
    });
    
    // This is the screen draw, here all game will be draw.
    this.draw = (function()
    {
        if(this.name === "menu")
        {
            canvas.ctx.drawImage(this.image, 0, 0);
            
            for(var i = 0; i < 3; i++)
            { canvas.ctx.drawImage(button[i].image, button[i].x, button[i].y, button[i].w, button[i].h);}
        }
    });
});
var screen = new Screen();
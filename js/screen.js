var Screen = (function()              
{
    // Manager properties.
    this.name = "menu";
    
    // Visual properties.
    this.image = new Image();
    this.image.src = "./img/screens/menu.png";
    
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
        }
    });
});
var screen = new Screen();
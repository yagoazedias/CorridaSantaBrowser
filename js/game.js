var Game = (function()
{
    this.update = (function()
    {
        player.update();
        
        for(i = 0; i < 3; i ++)
        { 
            arrow[i].update(); 
        }
        
        pause.update();
    });
    
    this.draw = (function()
    {
        player.draw();
        
        for(i = 0; i < 3; i ++)
        { 
            arrow[i].draw(); 
        }
        
        pause.draw();
    });
});
var game = new Game();
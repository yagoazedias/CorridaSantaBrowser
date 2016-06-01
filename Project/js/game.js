var Game = (function()
{
    this.update = (function()
    {
        player.update();
        
        for(i = 0; i < 4; i ++)
        { 
            arrow[i].update(); 
        }
        
        this.playerHit();
        bonus.update();
        pause.update();
    });
    
    this.playerHit = (function()
    {
        for(i = 0; i< 4; i++)
        {
            if(((arrow[i].x > player.x) && (arrow[i].x < player.x + player.w)) 
            && ((arrow[i].y > player.y) && (arrow[i].y < player.y + player.h)))
            {
                arrow[i].x = canvas.element.width + Math.floor(Math.random() * 400);
                arrow[i].y = 200 + Math.floor(Math.random() * (canvas.element.height - 300)); 
                canvas.drawRect(0, 0, canvas.element.width, canvas.element.height, "red");
            }
        }
    });
    
    this.draw = (function()
    {   
        for(i = 0; i < 4; i ++)
        { 
            arrow[i].draw(); 
        }
        
        player.draw();
        bonus.draw();
        pause.draw();
    });
});
var game = new Game();
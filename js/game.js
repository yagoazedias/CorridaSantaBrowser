var Game = (function()
{
    this.update = (function()
    {
        player.update();
        pause.update();
    });
    
    this.draw = (function()
    {
        player.draw();
        pause.draw();
    });
});
var game = new Game();
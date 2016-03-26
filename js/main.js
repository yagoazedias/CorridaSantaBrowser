var Main = (function()
{
    // This is the fist method to be call.
    this.start = (function()
    {
        screen.start();
    });
    
    // This is the main update, here all game will be update.
    this.update = (function()
    {
        map.update();
        screen.update();
        // mouse.update();
    });
    
    // This is the main draw, here all game will be draw.
    this.draw = (function()
    {
        canvas.clear();
        map.draw();
        screen.draw();
    });
});
var main = new Main();
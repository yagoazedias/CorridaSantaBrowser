var Main = (function()
{
    this.screen = "menu";

    // This is the fist method to be call.
    this.start = (function()
    {
        for(var i = 0; i < 5; i++)
        { button[i].start(); }
        screen.start();
        fade.start();
    });

    // This is the main update, here all game will be update.
    this.update = (function()
    {
        screen.update();
        map.update();
        fade.update();
    });

    // This is the main draw, here all game will be draw.
    this.draw = (function()
    {
        canvas.clear();
        map.draw();
        screen.draw();
        fade.draw();
    });
});
var main = new Main();

var Map = (function()
{
    // Visual properties (background image, river image ...).
    this.image     = new Image();
    this.riverImg  = new Image();
    this.bridgeImg = new Image();
    
    this.image.src     = "./img/maps/gameplay.png";
    this.riverImg.src  = "./img/maps/river.png";
    this.bridgeImg.src = "./img/maps/bridge.png";
    
    // Dimension and space properties. (X axis, Y axis, Width size ...)
    this.x = 0;
    this.y = 0;
    this.w = 4800;
    this.h = 600;
    
    // Locomotion properties. (speed, acceleration ...)
    this.speed = 5;
    
    // This is the map object update, here all game will be update.
    this.update = (function()
    {
        // Move control
        this.x -= this.speed;
        
        // Condition for the map loop.
        if(this.x <= ((this.w) * -1) + canvas.element.width)
        {
            this.x = 0;        
        }
    });
    
    // This is the map object draw, here all game will be draw.
    this.draw = (function()
    {
        canvas.ctx.drawImage(this.image, this.x, this.y,  this.w, this.h);
        canvas.ctx.drawImage(this.riverImg, this.x + 2025,  this.y);
        canvas.ctx.drawImage(this.bridgeImg, this.x + 2000, this.y + 125);
    });
});
var map = new Map();
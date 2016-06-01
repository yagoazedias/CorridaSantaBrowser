var Arrow = (function()
{
    this.x = canvas.element.width + Math.floor(Math.random() * 400); 
    this.y = 200 + Math.floor(Math.random() * (canvas.element.height - 300)); 
    this.w = 100; 
    this.h = 25;
    
    this.speed = 5;
    
    this.image = new Image();
    this.image.src = "./img/bonus/arrow.png";
    
    this.move = (function()
    {
        this.x -= this.speed;
        
        if(this.x <= - this.w)
        {
            this.x = canvas.element.width + Math.floor(Math.random() * 400); 
            this.y = 200 + Math.floor(Math.random() * (canvas.element.height - 300));
        }
    });
    
    this.update = (function()
    {
         this.move();
    });
    
    
    this.draw = (function()
    {
        canvas.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    });
});
var arrow = new Array();
for(i = 0; i < 4; i ++)
{ arrow[i] = new Arrow(); }
var Bonus = (function()
{
    this.x = canvas.element.width + Math.floor(Math.random() * 10);
    this.y = 200 + Math.floor(Math.random() * (canvas.element.height - 300));
    this.w = 53;
    this.h = 60;
    
    this.speed = 3;
    
    this.status = "normal";
    
    this.images = ["./img/bonus/heath.png", "./img/bonus/slow.png", "./img/bonus/speed.png"];
    
    this.image = new Image();
    this.image.src = this.images[Math.floor(Math.random() * 2)];
    
    this.bonusEffectController = (function()
    {
        switch(this.image.src)
        {
            case "./img/bonus/heath.png": this.status = "normal"; break;
            case "./img/bonus/slow.png":  this.status = "slow";   break;
            case "./img/bonus/fast.png":  this.status = "fast";  break;
        }
    });
    
    this.colision = (function()
    {
        if(((this.x > player.x) && (this.x < player.x + player.w))     
        && ((this.y > player.y) && (this.y < player.y + player.h)))
        {
            player.status = this.status;
            this.image.src = this.images[Math.floor(Math.random() * 2)];
            this.x = canvas.element.width + Math.floor(Math.random() * 10);
            this.y = 200 + Math.floor(Math.random() * (canvas.element.height - 300));
        }
    });
    
    this.move = (function()
    {
        this.x -= this.speed;
        
        if(this.x <= - this.w)
        {
            this.x = canvas.element.width + Math.floor(Math.random() * 10); 
            this.y = 200 + Math.floor(Math.random() * (canvas.element.height - 300));
        }
    });
    
    this.update = (function()
    {
        this.move();
        this.bonusEffectController();
        this.colision();
    });
    
    this.draw = (function()
    {
        canvas.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);   
    });
});
var bonus = new Bonus();
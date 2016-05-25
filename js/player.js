var Player = (function()
{
    this.x = 100;
	this.y = 191;
	this.w = 163;
    this.h = 109;
    
    this.bonusImg = new Image();
    this.bonusImg.src = "./img/bonus/defaut.png";
    this.status = "normal";
    
    this.moveLeft = false;
    this.moveRight = false;
    this.moveUp = false;
    this.moveDown = false;
	
	this.start = (new Date()).getTime();
	this.currentFrame = 0.;
	this.numFrames = 3;
	this.images = [];
	this.animationSpeed = 5.;
    
    this.fireImgs = [];
    
    this.animSpeed = 1000.;
    
    this.speed = 2.5;
    
    for (var i = 0; i < this.numFrames; i++)
	{
	    this.images[i] = new Image();
		this.images[i].src = "./img/spritessheets/templario" + (i+1) + ".png";
        
        if(i != 2)
        {
            this.fireImgs[i] = new Image();
            this.fireImgs[i].src = "./img/spritessheets/fire" + (i+1) + ".png";
        }
	}
	
	this.deltaTime = function()
	{
		this.current = (new Date()).getTime();
		this.elapsed = this.current - this.start;
		this.start = this.current;
		this.delta = this.elapsed / this.animSpeed;			
		return this.delta;
	}
    
    this.update = function()
	{
		this.delta = this.deltaTime();	
		this.currentFrame += this.delta * this.animationSpeed;
        
        if(pause.isActive != true)
        {
            switch(this.status)
            {
                    case "normal": 
                        this.speed = 3.5; 
                        map.speed = 10;
                        this.animSpeed = 1000.;
                        this.bonusImg.src = "./img/bonus/defaut.png";
                    break;

                    case "fast": 
                        this.speed = 3.5;
                        map.speed = 20.5;
                        this.animSpeed = 500.;
                        this.bonusImg.src = "./img/bonus/defaut.png";
                    break;

                    case "slow": 
                        this.speed = 2.5;
                        map.speed = 1.5;
                        this.animSpeed = 2000.;
                        this.bonusImg.src = "./img/bonus/slowtime.png";
                    break;
            }
        }
        
        if(player.moveLeft)
        {
            this.x -= this.speed;     
        }
        
        if(player.moveRight)
        {
            this.x += this.speed;     
        }
        
        if(player.moveUp)
        {
            this.y -= this.speed;     
        }
        
        if(player.moveDown)
        {
            this.y += this.speed;     
        }
	}
	
	this.draw = function()
	{
		canvas.ctx.drawImage(this.images[Math.floor(this.currentFrame)%this.numFrames], this.x, this.y, this.w, this.h);
        
        if(this.status === "fast")
        {
		  canvas.ctx.drawImage(this.fireImgs[Math.floor(this.currentFrame)%2], this.x - 75, this.y - 50, 335, 235);
        }
        
        canvas.ctx.drawImage(this.bonusImg, 0, 0);
    }	

});

var player = new Player();
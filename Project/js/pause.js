var Pause = (function()
{
    this.buttonBack = new Button();
    this.buttonMenu = new Button();
    
    this.isActive = false;
    
    this.image = new Image();
    this.image.src = "./img/screens/pause.png"
    
    this.start = (function()
    {
        this.buttonsStart();
    });
    
    this.buttonsStart = (function()
    {
        this.buttonBack.image = new Image();
        this.buttonBack.image.src = "./img/buttons/back.png";
        
        this.buttonBack.x = 235;
        this.buttonBack.y = 175;
        this.buttonBack.w = 336
        this.buttonBack.h = 131;
        
        this.buttonBack.name = "back";
            
        this.buttonMenu.image = new Image();
        this.buttonMenu.image.src = "./img/buttons/menu.png";
        
        this.buttonMenu.x = 235;
        this.buttonMenu.y = 325;
        this.buttonMenu.w = 336;
        this.buttonMenu.h = 131;
        
        this.buttonMenu.name = "menu";
    });
    
    this.speedControl = (function()
    {
        for(i = 0; i < 4; i++)
        {
            if(this.isActive === true)   
            {
                player.speed = 0;
                map.speed = 0;
                player.animSpeed = 10 / 0;
                arrow[i].speed = 0;

            }
            else 
            {
                switch(player.status)
                {
                    case "normal" : player.speed = 3.5; map.speed = 10;   player.animSpeed = 1000.; arrow[i].speed = 5; break;
                    case "fast" :   player.speed = 3.5; map.speed = 20.5; player.animSpeed = 500.;  arrow[i].speed = 5; break;
                    case "slow" :   player.speed = 2.5; map.speed = 1.5;  player.animSpeed = 2000.; arrow[i].speed = 5; break;
                }
            }
        }
    });
    
    this.buttonControl = (function()
    {
        if(((mouse.x >= this.buttonBack.x) && (mouse.x <= this.buttonBack.x + this.buttonBack.w))
        && ((mouse.y >= this.buttonBack.y) && (mouse.y <= this.buttonBack.y + this.buttonBack.h)))
        {
            this.buttonBack.x = 225;
            this.buttonBack.y = 165;
            this.buttonBack.w = 356;
            this.buttonBack.h = 151;
            
            if(mouse.click)
            {
                this.isActive = false;
            }
        }
        else
        {
            this.buttonBack.x = 235;
            this.buttonBack.y = 175;
            this.buttonBack.w = 336;
            this.buttonBack.h = 131;    
        }
        
        if(((mouse.x >= this.buttonMenu.x) && (mouse.x <= this.buttonMenu.x + this.buttonMenu.w))
        && ((mouse.y >= this.buttonMenu.y) && (mouse.y <= this.buttonMenu.y + this.buttonMenu.h)))
        {
            this.buttonMenu.x = 225;
            this.buttonMenu.y = 315;
            this.buttonMenu.w = 356;
            this.buttonMenu.h = 151;
            
            if(mouse.click)
            {
                fade.fadeTo("menu");
            }
        }
        else
        {
            this.buttonMenu.x = 235;
            this.buttonMenu.y = 325;
            this.buttonMenu.w = 336;
            this.buttonMenu.h = 131;    
        }
        
    });
    
    this.update = (function()
    {
        this.speedControl();
        
        if(this.isActive)
        {
            this.buttonControl();
        }
    });
    
    this.draw = (function()
    {
        if(this.isActive === true)   
        {
            canvas.ctx.drawImage(this.image, 0, 0);
            canvas.ctx.drawImage(this.buttonBack.image, this.buttonBack.x, 
                                 this.buttonBack.y, this.buttonBack.w, this.buttonBack.h);
            canvas.ctx.drawImage(this.buttonMenu.image, this.buttonMenu.x, 
                                 this.buttonMenu.y, this.buttonMenu.w, this.buttonMenu.h);
        }
    });
    
});
var pause = new Pause();
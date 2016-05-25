var Pause = (function()
{
    this.isActive = false;
    
    this.update = (function()
    {
        if(this.isActive === true)   
        {
            player.speed = 0;
            map.speed = 0;
            player.animSpeed = 10 / 0;
        }
        else 
        {
            switch(player.status)
            {
                case "normal" :  
                    player.speed = 3.5; 
                    map.speed = 10;
                    player.animSpeed = 1000.; 
                break;
                    
                case "fast" : 
                    player.speed = 3.5;
                    map.speed = 20.5;
                    player.animSpeed = 500.;
                break;
                    
                case "slow" : 
                    player.speed = 2.5;
                    map.speed = 1.5;
                    player.animSpeed = 2000.;
                break;
            }
        }
    });
    
    this.draw = (function()
    {
        
    });
    
});
var pause = new Pause();
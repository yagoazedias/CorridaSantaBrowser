var Player = (function()
{
    this.image = new Image();
    this.image.src = "./img/spritessheets/templario1.png";
    
    this.animSpeed = 1;
    
    this.flame = 0;
    
    (function a()
     {
        if(this.flame >= 3)
        {
            this.flame = 1;
        }
        
        this.flame ++;
        
        console.log("o");
    })();

});

var player = new Player();
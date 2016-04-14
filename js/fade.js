var Fade = (function()
{
    this.rectUpX = 0; 
    this.rectUpY = -1 * ((canvas.element.height) /  2);
    this.rectUpW = (canvas.element.width); 
    this.rectUpH = (canvas.element.height) /  2;
    
    this.rectDownX = 0; 
    this.rectDownY = (canvas.element.height);
    this.rectDownW = (canvas.element.width); 
    this.rectDownH = (canvas.element.height) /  2; 

    this.speed = 10;
    
    this.transition = false;
    
    this.way = "menu";
    
    // This is the fist method to be call.
    this.start = (function()
    {
        // this.fadeTo("credits");
    });
    
    // This is the main update, here all game will be update.
    this.update = (function()
    {
        if(this.transition)
        {
            this.rectUpY   += this.speed;   
            this.rectDownY -= this.speed;

            if(this.rectUpY >= this.rectDownY - this.rectDownH)
            {
                screen.name = this.way;
                
                this.speed *= -1;
            }
            
            if((this.rectUpY <= -1 * (this.rectUpH)) || (this.rectDownY >= (canvas.element.height)))
            {
                this.speed = 0;
                this.transition = false;
            }
        }
        
        if(!this.transition)
        {
            this.rectUpX = 0; 
            this.rectUpY = -1 * ((canvas.element.height) /  2);
            this.rectUpW = (canvas.element.width); 
            this.rectUpH = (canvas.element.height) /  2;

            this.rectDownX = 0; 
            this.rectDownY = (canvas.element.height);
            this.rectDownW = (canvas.element.width); 
            this.rectDownH = (canvas.element.height) /  2; 
        }
    });
    
    this.fadeTo = (function(way)
    {
        this.way = way;
        this.transition = true;
    });

    // This is the main draw, here all game will be draw.
    this.draw = (function()
    {
        canvas.drawRect(this.rectUpX, this.rectUpY, this.rectUpW, this.rectUpH, "BLACK");
        canvas.drawRect(this.rectDownX, this.rectDownY, this.rectDownW, this.rectDownH, "BLACK");
    });
});
var fade = new Fade();

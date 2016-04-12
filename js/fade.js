var Fade = (function()
{
    this.rectUpX = 0; 
    this.rectUpY = (canvas.element.height) * -1;
    this.rectUpW = (canvas.element.width ); 
    this.rectUpH = (canvas.element.height) /  2;
    
    this.rectDownX = 0; 
    this.rectDownY = (canvas.element.height);
    this.rectDownW = (canvas.element.width ); 
    this.rectDownH = (canvas.element.height) /  2; 


    this.trasition = false;
    
    // This is the fist method to be call.
    this.start = (function()
    {

    });
    
    // This is the main update, here all game will be update.
    this.update = (function()
    {
        if( this.trasition)
        {
            this.rectUpY += 10;   

            if(this.rectUpX > 300)
            {
                this.trasition = false;
            }
        }
        
        console.log(this.trasition);
    });
    
    // This is the main draw, here all game will be draw.
    this.draw = (function()
    {
        canvas.drawRect(this.rectUpX, this.rectUpY, this.rectUpW, this.rectUpH, "BLACK");
    });
});
var fade = new Fade();

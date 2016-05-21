var Button = (function()
{
    // Dimension and space properties. (X axis, Y axis, Width size ...)
    this.x = 50;
    this.y = 425;
    this.w = 170;
    this.h = 68;

    this.name = "";

    // Visual proprerties.
    this.image = new Image();
    this.image.src = "./img/buttons/play.png";

    // This is the button update, here all button functions will enable.
    this.update = (function()
    {
    		// Mouse and button colision.
        if(((mouse.x >= this.x) && (mouse.x <= this.x + this.w))
    		   && ((mouse.y >= this.y) && (mouse.y <= this.y + this.h)))
    		{
        		if(mouse.click)
        		{
        		    switch(this.name)
                {
                    case "back": fade.fadeTo("menu"); break;
                    case "play": fade.fadeTo("menu"); break;
                    case "menu": fade.fadeTo("menu"); break;
                    case "directions": fade.fadeTo("directions"); break;
                    case "credits": fade.fadeTo("credits"); break;
                }
        		}
    		}
    });

    // This is the button draw, here all button visuals will be draw.
    this.draw = (function()
    {
        canvas.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    });
});

var button = [];

for(var i = 0; i < 5; i++)
{ button[i] = new Button(); }

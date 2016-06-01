var Menu = (function()
{
    // This is the screen fist method to run.
    this.start = (function()
    {
        this.image = new Image();
        this.image.src = "./img/screens/menu.png";

        // Buttons proprietes
        this.btnPosX = [50 , 320, 590];

        // Turning the buttons to their respective images.
        button[0].image.src = "./img/buttons/directions.png";
        button[1].image.src = "./img/buttons/play.png";
        button[2].image.src = "./img/buttons/credits.png";
        button[3].image.src = "./img/buttons/back.png";

        // Linking the button to your name.
        button[0].name = "directions";
        button[1].name = "play";
        button[2].name = "credits";
        button[3].name = "back";

        for(var i = 0; i < button.length; i++)
        {
            switch(i)
            {
                // Each button has its position relative to it's previous in the array object.
                case 0:  button[i].x = 50; this.x = 400;  break;
                case 3:  button[i].x = 550; button[i].y = 475; break;
                default: button[i].x = button[i - 1].x + button[i - 1].w + 100; break;
            }
        }
    });

    this.buttonDraw = (function()
    {
        switch(main.screen)
        {
            case "menu": button[0].draw(); button[1].draw(); button[2].draw(); break;
            case "directions": button[3].draw(); break;
            case "credits" :  button[3].draw(); break;
        }
    });
    
    this.buttonExpandEffect = (function()
    {
        // Buttons updates.
        for(var i = 0; i < button.length; i++)
        {
            if(i < 3)
            {
                // Collision with the mouse.
                if(((mouse.x >= button[i].x) && (mouse.x <= button[i].x + button[i].w))
                   && ((mouse.y >= button[i].y) && (mouse.y <= button[i].y + button[i].h)))
                {
                    // With expansion.
                    button[i].x = this.btnPosX[i] - 10;
                    button[i].y = 425 - 10;
                    button[i].w = 190;
                    button[i].h = 88;
                }
                else
                {
                     // Widout expansion.
                    button[i].x = this.btnPosX[i];
                    button[i].y = 425;
                    button[i].w = 170;
                    button[i].h = 68;
                }
            }
            else
            {
                 // Collision with the mouse.
                if(((mouse.x >= button[i].x) && (mouse.x <= button[i].x + button[i].w))
                   && ((mouse.y >= button[i].y) && (mouse.y <= button[i].y + button[i].h)))
                {
                    // With expansion.
                    button[i].x = 550 - 10;
                    button[i].y = 475 - 10;
                    button[i].w = 190;
                    button[i].h = 88;
                }
                else
                {
                     // Widout expansion.
                    button[i].x = 550;
                    button[i].y = 475;
                    button[i].w = 170;
                    button[i].h = 68;
                }
            }
        }
    });
    
    this.screenControl = (function()
    {
        switch(main.screen)
        {
            case "menu": this.image.src = "./img/screens/menu.png"; player.status = "normal"; player.life = 10; map.speed = 5; pause.isActive = false;
                
                    for(i = 0; i < 4; i++)
                    {
                        arrow[i].x = canvas.element.width + Math.floor(Math.random() * 400); 
                        arrow[i].y = 200 + Math.floor(Math.random() * (canvas.element.height - 300));
                    }
                break;
                
            case "pause": this.image.src = "./img/screens/pause.png"; break;
            case "directions" : this.image.src = "./img/screens/directions.png"; break;
            case "credits" : this.image.src = "./img/screens/credits.png"; break;
        }

        switch(main.screen)
        {
            case "menu": button[0].update(); button[1].update(); button[2].update(); break;
            case "pause": /* Pause buttons */ break;
            case "directions": button[3].update(); ;break;
            case "credits" :  button[3].update(); break;
            case "game": game.update(); break;
        }
    });

    this.update = (function()
    {
        this.buttonExpandEffect();
        this.screenControl();
    });

    this.draw = (function()
    {
        if(main.screen != "game")
        {
            canvas.ctx.drawImage(this.image, 0, 0);
        }
        else
        {
            game.draw();    
        }
        
        this.buttonDraw();
    });

});
var menu = new Menu();

var keyboard = function()
{
    // Handling Properties
	this.arrowRight = false;
	this.arrowLeft = false;
	this.arrowUp = false;
	this.arrowDown = false;

    // Method of keydown.
	this.keydown = function(e)
	{
        if(main.screen === "game")
        {
            if(e.keyCode === 65 || e.keyCode === 37)
            {
                player.moveLeft = true;
                this.arrowLeft = true;
            }

            if(e.keyCode === 39 || e.keyCode === 68)
            {
                player.moveRight = true;
                this.arrowRight = true;
            }

            if(e.keyCode === 38 || e.keyCode === 87)
            {
                player.moveUp = true;
                this.arrowUp = true;
            }

            if(e.keyCode === 40 || e.keyCode === 83)
            {
                player.moveDown = true;
                this.arrowDown = true;
            }

            if(e.keyCode === 80)
            {
                pause.isActive = !pause.isActive;
            }
        }
	}
    
    // Method of keyup.
	this.keyup = function(e)
	{
        if(main.screen === "game")
        {
            if(e.keyCode === 65 || e.keyCode === 37)
            {
                player.moveLeft = false;
                this.arrowLeft = false;
            }

            if(e.keyCode === 39 || e.keyCode === 68)
            {
                player.moveRight = false;
                this.arrowRight = false;
            }
            if(e.keyCode === 38 || e.keyCode === 87)
            {
                player.moveUp = false;
                this.arrowUp = false;   
            }
            if(e.keyCode === 40 || e.keyCode === 83)
            {
                player.moveDown = false;
                this.arrowDown = false;
            }
        }
	}
}

var keyboard = new keyboard();

document.addEventListener('keydown', keyboard.keydown, true);
document.addEventListener('keyup', keyboard.keyup, true);
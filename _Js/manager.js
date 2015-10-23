var Manager = (function()
{
	this.update = (function() {
		fadeIn.update();
		screenGame.update();
		gameplay.update();
		mouse.update();
	});
	
	this.draw = (function() {
		graphics.clear();
		screenGame.draw();
		gameplay.draw();
		fadeIn.draw();
	});
});

var manager = new Manager();

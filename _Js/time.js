var time = (function()
{
	var start = (new Date()).getTime();
		
	deltaTime = (function() {
		current = (new Date()).getTime();		
		elapsed = current - start;
		var delta = elapsed / 1000;			
		return delta;
			
	});
	
	this.update = (function() {
		var delta = deltaTime();
	});
});

var time = new time();

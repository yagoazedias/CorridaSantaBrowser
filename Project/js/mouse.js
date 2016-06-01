var Mouse = (function()
{
	// Position propietes.
	this.x = 0;
	this.y = 0;
	
	// Click propiete.
	this.click = false;
	
	// Mouse move function detect.
	var _mouseMove = (function(e)
	{
		mouse.x = e.x - canvas.element.offsetLeft;
		mouse.y = e.y - canvas.element.offsetTop;
	});
	
	// Mouse down function detect.
	var _mouseDown = (function(e)
	{
		mouse.click = true;
		mouse.x = e.x - canvas.element.offsetLeft;;
		mouse.y = e.y - canvas.element.offsetTop;
	});
	
	// Mouse up function detect.
	var _mouseUp = (function(e)
	{
		mouse.click = false;
		mouse.x = e.x - canvas.element.offsetLeft;;
		mouse.y = e.y - canvas.element.offsetTop;
	});
	
	// Linking the functions to your eventlistener.
	document.addEventListener("mousemove", _mouseMove, false);
	document.addEventListener("mousedown", _mouseDown, false);
	document.addEventListener("mouseup",   _mouseUp,   false);
});
var mouse = new Mouse();

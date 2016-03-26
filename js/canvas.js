var Canvas = (function()
{
    	this.element = document.getElementById("myCanvas");
    	this.ctx = this.element.getContext("2d");
	
		this.drawLine = (function(x , y , x2, y2)
		{
			this.ctx.beginPath();
			this.ctx.moveTo(x, y);
			this.ctx.lineTo(x2, y2);
			this.ctx.strokeStyle = "#999999"
			this.ctx.stroke();
		});
    
    	this.clear = (function() 
    	{
			this.ctx.clearRect(0,0, this.element.width,this.element.height);
			this.ctx.fillStyle = "black";
		});
    
    	this.drawCicle = (function(x, y, r, color)
    	{
			this.ctx.save();
			this.ctx.beginPath();
			this.ctx.arc(x, y, r, 0, 2 * Math.PI, false);
			this.ctx.fillStyle = color;
			this.ctx.fill();
        	this.ctx.globalCompositeOperation = 'lighter';  
			this.ctx.restore();
        });
});

var canvas = new Canvas();
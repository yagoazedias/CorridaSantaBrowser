var Gif = function( x , y , w ,h , row , column , image_w , image_h , image_src , animation_speed)
{

	this.start = (new Date()).getTime();
	this.current;	
	this.currentFrame = 0.;	
	this.animation_speed = animation_speed

	this.image_source = image_src;

	this.image = new Image();
	
	this.row = row;
	this.column = column;
	this.numFrames = this.row * this.column;	
	
	
	this.image.src = "./_Images/Buttons/" + this.image_source;
    
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this._w = image_w / this.column;
	this._h = image_h / this.row;

	this.deltaTime = (function()
	{
		this.current = (new Date()).getTime();
		this.elapsed = this.current - this.start;
		this.start = this.current;
		this.delta = this.elapsed / 1000.;			
		return this.delta;
	});

	this.update = (function()
	{

		this.delta = this.deltaTime();	
		this.currentFrame += this.delta * this.animation_speed;
		this.currentFrame %= this.numFrames;

		this.image.src = "Animations/"+ this.image_source;	
	});

	this.draw = (function() {
		ctx.drawImage(this.image,
				Math.floor(this.currentFrame % this.column) * this._w, 
					  Math.floor(this.currentFrame / this.column) * this._h, 
						  this._w, this._h,
							this.x, this.y, this.w, this.h);

	});
});

var gif = Gif( x , y , w ,h , row , column , image_w , image_h , image_src , animation_speed)

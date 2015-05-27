var Rotation = function()
{
	this.rotateRight = false;
	this.rotateLeft = false;

	this.convertToRadians = function(degree)
	{
		return degree*(Math.PI/180);
	}
	this.convertToDegree = function(radians)
	{
		return (radians*180)/Math.PI;
	}
}

var rotation = new Rotation();
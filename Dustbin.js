class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=150;
		this.dustbinHeight=100;
		this.wallThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
		
		this.image = loadImage("dustbin.png")

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;
			
			image(this.image,600,300)

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill("grey")
			stroke("grey")
			rotate(this.angle)
			rect(0,0,this.wallThickness-10, this.dustbinHeight-10);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke("grey")
			angleMode(RADIANS)
			fill("grey")
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness-10, this.dustbinHeight-10);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke("yellow")
			angleMode(RADIANS)
			fill("yellow")
			rect(0,0,this.dustbinWidth+50, this.wallThickness-3);
			pop()
			
	}

}
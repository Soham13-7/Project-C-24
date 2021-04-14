class bucket
{
    constructor(x,y,width,height)
    {
        var options = {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display()
    {
     var bpos = this.body.position;
     push();
     translate(bpos.x,bpos.y);
     rectMode(CENTER);
     fill("red");
     strokeWeight(4);
     rect(0,0,this.width,this.height);
     pop();
    }

}
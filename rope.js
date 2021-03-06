class Rope{
    constructor(bodyA,bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
      var options = {
          bodyA : bodyA,
          bodyB : bodyB,
          pointB:{x:this.offsetX, y:this.offsetY}
      }
      this.rope = Constraint.create(options);
      World.add(world,this.rope);
    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        var posAX = pointA.x;
        var posAY = pointA.y;

        var posBX = pointB.x + this.offsetX;
        var posBY = pointB.y + this.offsetY;

        strokeWeight(2.5);
        line(posAX,posAY,posBX,posBY);
       // image(this.image,posAX,posAY,posBX,posBY);
    }

    

    
}
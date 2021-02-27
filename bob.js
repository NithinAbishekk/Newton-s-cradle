class Bob{
    constructor(x, y){
       var option ={
            isStatic : true,
            restitution : 0.3,
            friction : 0.5,
            dencity : 1.2
       }
        this.body = Bodies.circle(x, y, 25, option);
        this.radius = 25;
        World.add(world,this.body);
    } 
       display(){
           var pos = this.body.position;
           ellipseMode(RADIUS);
           ellipse(pos.x, pos.y, this.radius, this.radius);
       }
}
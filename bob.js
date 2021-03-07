class Bob{
    constructor(x, y){
       var option ={
            isStatic : true,
            restitution : 0.3,
            friction : 0.5,
            density : 0.8
       }
        this.body = Bodies.circle(x, y, 50, option);
        this.radius = 50;
        this.image = loadImage("teddy.png");
        World.add(world,this.body);
    } 
       display(){
           var pos = this.body.position;
           imageMode(RADIUS);
           image(this.image,pos.x, pos.y, this.radius, this.radius);
       }
}
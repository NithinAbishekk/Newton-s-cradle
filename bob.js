class Bob{
    constructor(x, y){
       var option ={
            restitution : 1.3,
            friction : 0.5,
            density : 0.9
       }
        this.body = Bodies.circle(x, y, 25, option);
        this.radius = 25;
        this.image = loadImage("teddy.png");
        World.add(world,this.body);
    } 
       display(){
           var pos = this.body.position;
           imageMode(CENTER);
           image(this.image,pos.x, pos.y, this.radius*2, this.radius*2);
       }
}
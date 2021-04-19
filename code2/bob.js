class bob {
    constructor(x,y,radius) {
    var options = {
        isStatic: false,
        friction:0.4,
        density:3,
        restitution:1.2,
    }
    this.x= x;
    this.y= y;
    this.radius= radius;
    this.body = Bodies.circle(this.x,this.y,this.radius,options);
    World.add(world, this.body);
}

display(){
    fill("blue");
    var pos =this.body.position;
    ellipse(pos.x, pos.y, 70, 70);
}
}
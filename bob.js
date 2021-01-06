class Bob {
    constructor(x,y,radius) {
        var options = {
            'isStatic': true,
            'restitution': 1,
            'friction': 1.0,
            'density':1.2
        }
       this.body = Bodies.circle(x,y,radius,options);
       this.radius = radius;
       World.add(world,this.body);
    }
    display(){
     var pos =this.body.position;
     ellipseMode(RADIUS);
     fill("blue");
     ellipse(pos.x,pos.y,this.radius);
   }
 }
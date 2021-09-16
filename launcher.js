class Launcher{
    constructor(bodyA, pointB)
    {
        var options =
        {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.0005,
        length: 1
        }

 this.launcher = Constraint.create(options);
 this.pointB = pointB
 World.add(world, this.launcher);
  
}
fly(){
    this.launcher.bodyA = null
    
}
attach(bodyA){
    this.launcher.bodyA = bodyA
    
}

display(){
    if(this.launcher.bodyA){
    fill("black");
    var pointA = this.launcher.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4)
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}

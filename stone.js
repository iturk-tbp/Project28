class Stone {

  constructor(x,y,radius){
      this.body = Bodies.circle(x,y,radius,{
          restitution: 0,
          density: 1.2,
          friction: 1,
          isStatic: true
         
      })
      World.add(world,this.body);
     this.radius = radius;
    this.image = loadImage("stone.png")
  }
  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0,this.radius,this.radius);
    pop();
          
  }
  
  }
class Boy {
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
      World.add(world, this.body);
      this.image = loadImage("boy.png");
    }
    display(){
      var pos =this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0,this.width,this.height);
      pop();
            
    }
  }
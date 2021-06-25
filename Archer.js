class Player extends BaseClass {
    constructor(x, y, width, height,type){
      super(x,y,width,height);
      if (type===1){
        this.image = loadImage("sprites/Archer.png");
      }
      if(type === 2){
          this.image = loadImage("sprites/Shooting.png")
      }
    }
  
  };
  
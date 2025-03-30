export class CollectableItem extends Item {
    images=[];
    width=40;
    height=40;
    world=null;
    constructor(images) {
        super(images);
    }

    addWorld(world) {
        this.world=world;
        this.setRandomPosition();
    }

    setRandomPosition() {
        do {
            counter=0;
            rndx=new Math.floor(Math.Random(canvas.width/this.width));
            rndy=new Math.floor(Math.Random(canvas.height/this.height));
            this.x = rndx*this.width;
            this.y = rndx*this.height;    
        } while(!this.isColliding() && ++counter>1000);        
        
        return counter < 1000; 
    }

}
class Item {
    images=[];
    width=40;
    height=40;
    currentImageIndex=0;
    world=null;
    name="SnakeHead"
    score=0;


    constructor(images) {
        this.addImages(images);
        this.addAnimation();    
    }

    addWorld(world) {
        this.world=world;
    }

    addImages(imageFiles) {
        for(let file of imageFiles) {
            this.images.push(new Image(file))
        }
    }

    isCollectable() {
        return this.score>0;
    }
    
    isColliding(item) {
        let collision=!(
            this.item.x>item.x+item.width || 
            this.item.x+this.item.width<item.x ||
            this.item.y>item.y+item.height ||
            this.item.y+this.item.height<item.y
        );
        if (collision) {
            this.lastCollisionItem=item;
        }

        return collision;  
    }

    isCollidingAny() {
        for(let item of this.world.items) {
            if (this.isColliding(item)) {
                return true;
            }
        };
        return false;
    }

    get collisionItem() {
        return this.lastCollisionItem;
    } 

    nextImage() {
        this.currentImageIndex = (this.currentImageIndex+1)%this.images.length;
    }

    addAnimation() {
        setInterval(() => {
            this.nextImage();
        }, 500);
    }
}
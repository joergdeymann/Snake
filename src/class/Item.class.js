class Item {
    images=[];
    width=40;
    height=40;
    currentImageIndex=0;
    world=null;

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
    
    isColliding(item) {
        return !(
            this.item.x>item.x+item.width || 
            this.item.x+this.item.width<item.x ||
            this.item.y>item.y+item.height ||
            this.item.y+this.item.height<item.y
        );  
    }

    isCollidingAny() {
        for(let item of this.world.items) {
            if(!(
                this.item.x>item.x+item.width || 
                this.item.x+this.item.width<item.x ||
                this.item.y>item.y+item.height ||
                this.item.y+this.item.height<item.y
            )) return true;
        };
        return false;
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
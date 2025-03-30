// import { SnakeHead } from "./SnakeHead.class.js";

export class Item {
    IMAGES_DEFAULT=[];
    images=[];
    x=0;
    y=0;
    width=40;
    height=40;
    currentImageIndex=0;
    world=null;
    name="SnakeHead"
    score=0;
    


    constructor() {

    }

    get image() {
        return this.images[this.currentImageIndex];
    }
    
    setDefaultImages(images=this.IMAGES_DEFAULT) {
        this.addImages(images);
        this.addAnimation();    
    }

    addWorld(world) {
        this.world=world;
    }

    addImages(imageFiles) {
        if (imageFiles.length == 0) return;
        for(let file of imageFiles) {
            let img=new Image();
            img.src=file;
            this.images.push(img);
        }
    }

    isCollectable() {
        return this.score>0;
    }
    
    isColliding(item) {
        let collision=!(
            this.x>=item.x+item.width || 
            this.x+this.width<=item.x ||
            this.y>=item.y+item.height ||
            this.y+this.height<=item.y
        );
        if (collision) {
            this.lastCollisionItem=item;
        }

        return collision;  
    }

    isCollidingAny() {
        for(let item of this.world.gui.items) {
            //  if (item.name != "SnakeHead" && this.isColliding(item)) {
            if (item != this && this.isColliding(item)) {
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
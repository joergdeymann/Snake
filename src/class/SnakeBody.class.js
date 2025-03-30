import { Item } from "./Item.class.js";

export class SnakeBody extends Item {
    IMAGES_DEFAULT = [
        // "./img/body01.png", 
        // "./img/body02.png", 
        "../img/body01.svg"
    ];

    name="SnakeBody"
    x;
    y;
    dx=0;
    dy=0;
    target=0;
    
    constructor(x,y) {
        super();
        this.x=x;
        this.y=y;
        this.setDefaultImages();
    }
}
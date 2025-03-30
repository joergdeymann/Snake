import { Item } from "./Item.class.js";

export class Wall extends Item {
    IMAGES_DEFAULT = [
        "../img/wall.svg", 
    ];

    name="Wall";
    score=0;
    timer=0; // mninimum 10 Sec Timer (+-10sek)
    x=0;
    y=0;

    constructor(x,y) {
        super();
        this.setDefaultImages();
        this.x=x;
        this.y=y;

    }

}


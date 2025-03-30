import { Item } from "./Item.class.js";

export class SnakeHead extends Item {
    IMAGES_DEFAULT = [
        // "./img/head01.png", 
        // "./img/head02.png", 
        "../img/wall.svg"
    ];

    name="SnakeHead";

    startlen=4;


    constructor() {
        super();
        this.setDefaultImages();
        this.setRandomPosition();
    }


    setRandomPosition() {
        const canvas=document.getElementsByTagName("canvas")[0];
        const playground={
            x: 40,
            y: 40,
            width: canvas.width-80,
            height: canvas.height-80
        }
        const headarea = {
            x: playground.x,
            y: playground.y,
            width: playground.width,
            height: playground.height
        }


        this.x=Math.floor(Math.random()*headarea.width/this.width)*this.width+headarea.x;
        this.y=Math.floor(Math.random()*headarea.height/this.height)*this.height+headarea.y;
        
        const rnd=Math.floor(Math.random()*4);
        switch(rnd) {
            case 0:
                this.dx=1;
                this.dy=0;
                break;
            case 1:
                this.dx=-1;
                this.dy=0;
                break;
            case 2:
                this.dx=0;
                this.dy=1;
                break;
            case 3:
                this.dx=0;
                this.dy=-1;
                break;
        }

    }
}
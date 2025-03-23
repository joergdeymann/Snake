class SnakeBody extends Item {
    IMAGES_DEFAULT = [
        "./img/body01.png", 
        "./img/body02.png", 
        "./img/body03.png"
    ];

    name="SnakeBody"
    x;
    y;
    
    constructor(x,y) {
        super(this.IMAGES_DEFAULT);
        this.x=x;
        this.y=y;
    }
}
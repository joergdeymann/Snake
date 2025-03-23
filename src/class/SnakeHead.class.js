class SnakeItem extends Item {
    IMAGES_DEFAULT = [
        "./img/head01.png", 
        "./img/head02.png", 
        "./img/head03.png"
    ];

    name="SnakeHead";
    constructor() {
        super(this.IMAGES_DEFAULT);
    }

}
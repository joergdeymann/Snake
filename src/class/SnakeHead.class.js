class SnakeHead extends Item {
    IMAGES_DEFAULT = [
        "./img/head01.png", 
        "./img/head02.png", 
        "./img/head03.png"
    ];

    name="SnakeHead";

    constructor() {
        super(this.IMAGES_DEFAULT);
        this.setRandomPosition();
    }


    setRandomPosition() {
        const canvas=document.getElementsByTagName("canvas")[0];
        
        const rndx=Math.floor(Math.Random(canvas.width/this.ITEM_WIDTH-this.startLen*2))+this.startLen;
        const rndy=new Math.floor(Math.Random(canvas.height/this.ITEM_HEIGHT-this.startLen*2))+this.startLen;
        this.x = rndx*this.ITEM_WIDTH;
        this.y = rndy*this.ITEM_HEIGHT;
        const rnd=Math.floor(Math.random(4));
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
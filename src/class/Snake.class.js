class Snake {
    IMAGES_BODY = [
        "./img/body01.png", 
        "./img/body02.png", 
        "./img/body03.png"
    ];
    IMAGES_HEAD = [
        "./img/head01.png", 
        "./img/head02.png", 
        "./img/head03.png"
    ];
    ITEM_WIDTH=40;
    ITEM_HEIGHT=40;
    x;
    y;
    dx=0;
    dy=0;
    startLen=5;
    appendix=this.startLen;
    pause=false;
    
    movementListener=null;
    tail={x:0,y:0};
    head;





    constructor() {
        this.setRandomPosition();
        this.appendBody

        this.body = [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
        ];
        this.direction = 'right';
    }

    createSnake() {
        this.addHead();
        let x=this.head.x;
        let y=this.head.y;

        for(i=0;i<this.startLen;i++) {
            x-=this.head.dx*this.ITEM_WIDTH;
            y-=this.head.dy*this.ITEM_HEIGHT;
            this.addBody(x,y);
        }

    }

    addMovementListener() {
        if (!this.movementListener()) {
            this.movementListener=setInterval(() => this.move(),500);
        }
    }

    stopMovementListener() {
        clearInterval(this.movementListener);
        this.movementListener=null;
    }

    addHead() {
        this.setRandomPosition();
        this.head=new SnakeHead();
        this.head.addWorld(this.world);
        this.snake.push(this.head);
    }

    addBody(x=this.tail.x, y=this.tail.y) {
        const body=new SnakeBody(x,y);
        body.addWorld(this.world);
        this.snake.push(body);
        this.appendix-=1;
    }

    saveTailPosition() {
        let tail=this.snake[this.snake.length-1];
        this.tail={x:tail.x, y:tail.y}
    }


    score(score) {
        this.score+=score;
    }

    move() {
        if (this.pause()) return;

        this.head.x+=this.head.dx*this.ITEM_WIDTH;
        this.head.y+=this.head.dy*this.ITEM_HEIGHT;

        this.saveTailPosition();
        this.moveItems();
        let head=this.snake[0];
        if (head.isCollidingAny()) {
            if (head.collisionItem.isCollectable() ) {
                this.score(head.collisionItem.score);
                this.addBody();
            }  
            else return this.gameover();

        }
        if (Math.random(10)>1) this.appendix++;

        if (this.appendix>1) addBoddy();
    }

    moveItems() {
        for (i=this.snake.length-1; i>0; i--) {
            this.snake[i].x=this.snake[i-1].x;
            this.snake[i].y=this.snake[i-1].y;            
        }
    }

    
}
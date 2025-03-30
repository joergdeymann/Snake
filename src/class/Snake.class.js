import { SnakeBody } from "./SnakeBody.class.js";
import { SnakeHead } from "./SnakeHead.class.js";

export class Snake {
    ITEM_WIDTH=40;
    ITEM_HEIGHT=40;
    x;
    y;
    dx=0;
    dy=0;
    startLen=2;
    appendix=this.startLen;
    pause=false; // true; // false;
    
    movementListener=null;
    tail=null; // {x:0,y:0};
    head;
    body=[];
    snake=[];
    newBody=null;
    world
    score=0;
    step=2;






    constructor() {
        this.body = [];
        this.direction = 'right';
    }

    create() {
        this.addHead();
        this.addMovementListener();
            // let x=this.head.x;
        // let y=this.head.y;

        // for(i=0;i<this.startLen;i++) {
        //     x-=this.head.dx*this.ITEM_WIDTH;
        //     y-=this.head.dy*this.ITEM_HEIGHT;
        //     this.addBody(x,y);
        // }

    }

    addWorld(world) {
        this.world=world;
    }

    addMovementListener() {
        if (!this.movementListener) {
            this.movementListener=setInterval(() => this.move(),50);
        }
    }

    stopMovementListener() {
        clearInterval(this.movementListener);
        this.movementListener=null;
    }

    push(item) {
        item.addWorld(this.world);
        this.snake.push(item);
        // this.world.gui.addItem(item);
        // this.world.snake.snake.push(item);        
    }

    addHead() {
        this.head=new SnakeHead();
        this.push(this.head);
    }

    addBody() {
        if (!this.tail) return;

        if (!this.newBody) {
            console.log("Neuen Body angelegt ("+this.tail.x+","+ this.tail.y+")");
            this.newBody=new SnakeBody(this.tail.x,this.tail.y);
            this.newBody.addWorld(this.world);   
        }
        console.log("Vor Kollisionskontrolle");
        if (this.newBody.isCollidingAny()) return;

        console.log("Nach Kollisionskontrolle");

        this.tail=null;

        // console.log("Body neu = ("+this.newBody.x+","+ this.newBody.y+")");
        // console.log(this.snake);
        // debugger;

        this.appendix-=1;
        this.snake.push(this.newBody);        
        this.world.gui.addItem(this.newBody);
        this.newBody=null;
        console.log(this.snake);
    }

    XappendBody() {
        const body=new SnakeBody(x,y);
        body.addWorld(this.world);
        if (body.isCollidingAny()) return;
        this.tail=null;

        this.appendix-=1;
        this.snake.push(body);        
        this.world.gui.addItem(body);

    } 

    saveTailPosition() {
        if (this.tail) return;
        // let tail=this.snake[this.snake.length-1];
        // this.tail={x:tail.x, y:tail.y}
        this.tail=this.snake[this.snake.length-1];
    }


    addScore(score) {
        this.score+=score;
    }

    move() {
        if (this.pause) return;

        this.head.x+=this.head.dx*this.step; // this.ITEM_WIDTH;
        this.head.y+=this.head.dy*this.step; // this.ITEM_HEIGHT;

        this.saveTailPosition();
        this.moveItems();

        let head=this.head; // this.snake[0];
        if (head.isCollidingAny()) {
            if (head.collisionItem.isCollectable() ) {
                this.addScore(head.collisionItem.score);
                // this.addBody();
            }  else 
            if (head.collisionItem.name=="Wall") {
                return this.gameover();
            }
        }

        
        if (Math.random(10)>1) this.appendix++;
        if (this.appendix>1) this.addBody();
    }

    moveItems() {
        let dx;
        let dy;
        for (let i=this.snake.length-1; i>0; i--) {
            dx=0;
            dy=0;


            if (this.snake[i].target <= 0) {
                if (this.snake[i].x == this.snake[i-1].x) {
                    this.snake[i].dx=0;
                    this.snake[i].target=this.snake[i].height;

                    if (this.snake[i].y > this.snake[i-1].y) {
                        this.snake[i].dy=-this.step;
                    } else {
                        this.snake[i].dy=this.step;
                    }            
                }

                if (this.snake[i].y == this.snake[i-1].y) {
                    this.snake[i].dy=0;
                    this.snake[i].target=this.snake[i].width;

                    if (this.snake[i].x > this.snake[i-1].x) {
                        this.snake[i].dx=-this.step;
                    } else {
                        this.snake[i].dx=this.step;
                    }
                }
            }
            
            
            this.snake[i].x+=this.snake[i].dx;
            this.snake[i].y+=this.snake[i].dy;         
            this.snake[i].target-=this.step;
        }
    }

    gameover() {
        this.stopMovementListener();
        this.showEndScreen();
    } 

    showEndScreen() {
        document.getElementById("Endscore").innerText=this.score
        document.getElementById("Endscreen").classList.remove("d-none");
        document.getElementById("canvas-container").classList.add("d-none");
    }

    
}
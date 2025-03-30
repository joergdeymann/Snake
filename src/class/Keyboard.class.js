export class Keyboard {
    snake;

    control={
        "ArrowUp": {dx:0,dy:-1},
        "ArrowDown": {dx:0,dy:1},
        "ArrowLeft": {dx:-1,dy:0},
        "ArrowRight": {dx:1,dy:0}
    }
    
    constructor(snake) {
        this.snake=snake;
        // this.addKeyListener();
        document.addEventListener("keydown",(key) => this.keyListener(key)); 
    }

    keyListener(key) {
        console.log(key.key);
        if (!this.control[key.key]) return;
        let old={dx:this.snake.head.dx,dy:this.snake.head.dy};
        let now={dx:this.control[key.key].dx,dy:this.control[key.key].dy};
        if (old.dx && now.dx) return;
        if (old.dy && now.dy) return;
        this.snake.head.dx=now.dx;
        this.snake.head.dy=now.dy;            
    }
}
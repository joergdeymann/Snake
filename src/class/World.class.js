import { Gui } from "./Gui.class.js";
import { Wall } from "./Wall.class.js";
import { Snake } from "./Snake.class.js";
import { Keyboard } from "./Keyboard.class.js";

export class World {
    gui=new Gui();
    snake=new Snake();
    key=new Keyboard(this.snake);


    // collectableItems=[
    //     new Apple(),
    //     new Apple()
    // ];
    walls=[];

    constructor() {
        this.createWall();
        this.snake.addWorld(this);
        this.snake.create();
        this.addToGui();
    }

    createWall() {
        let x=0;
        let y=0;
    
        let wall=new Wall(x,y);
    
        let width=Math.floor(this.gui.width/wall.width)*wall.width;
        let height=Math.floor(this.gui.height/wall.height)*wall.height;
        
        while (x<(this.gui.width)) {
            wall=new Wall(x,0);
            this.walls.push(wall);
            wall=new Wall(x,height-wall.height);
            this.walls.push(wall);
            x+=wall.width;
        }

        while (y<this.gui.height) {
            wall=new Wall(0,y);
            this.walls.push(wall);
            wall=new Wall(width-wall.width,y);
            this.walls.push(wall);
            y+=wall.height;
        }

    }

    addToGui() {
        this.gui.addItems(this.walls);
        this.gui.addItems(this.snake.snake);

        // this.gui.addItems(this.collectableItems);
 
        this.gui.start();
    }


}
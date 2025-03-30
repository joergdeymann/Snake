export class Gui {
    canvas;
    ctx;
    items=[];

    constructor() {
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.ctx=this.canvas.getContext('2d');
        // this.canvas.width = window.innerWidth;
        // this.canvas.height = window.innerHeight;    
    }

    get width() {
        return this.canvas.width;
    }

    get height() {
        return this.canvas.height;
    }

    addItems(items) {
        for (let item of items) {
            this.addItem(item);
        }
    }

    addItem(item) {
        this.items.push(item);
    }
    
    clearItems() {
        this.items.length=0;
    }

    isLoading() {
        for (let item of this.items) {
            item.image.onerror = () => console.error("Fehler beim Laden:", item.image.src);
            if (!item.image.complete) return true;
        }
        return false;
    }

    start() {
        if (this.isLoading()) {
            console.log("...still Loading");
            setTimeout(() => this.start(),100);
        } else {
            console.log("Loading done")
            this.interval=true;
            this.draw();     
        }
        // this.interval.draw=setInterval(() => this.draw());
    }

    stop() {
        this.interval=false;
        // this.interval.draw=setInterval(() => this.draw());
    }

    
    draw() {
        this.ctx.clearRect(0,0,this.width,this.height);
        this.drawImages();
        if (this.interval) {
            requestAnimationFrame(() => this.draw());
        }
    }


    drawImages() {
        for(let item of this.items) {
            this.drawImage(item);       
        }
    }

    drawImage(item) {
        this.ctx.drawImage(item.image, item.x,item.y,item.width,item.height);

    }    

    XtestImageURL(url, callback) {
        let img = new Image();
        img.onload = () => callback(true);  // Bild existiert
        img.onerror = () => callback(false); // Bild existiert nicht
        img.src = url;
    }
    
    // Beispiel-Nutzung:
    

}
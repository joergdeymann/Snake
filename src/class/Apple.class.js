export class Apple extends Item {
    IMAGES_DEFAULT = [
        "./img/apple01.png", 
        "./img/apple02.png", 
        "./img/apple03.png"
    ];

    name="Apple";
    score=1;
    timer=10; // mninimum 10 Sec Timer (+-10sek)

    constructor() {
        super(IMAGES_DEFAULT);
    }

}
// Birne = 20 Sekunden Timer
// Pluzm = 30 Sekunden Timer
// Peach = 40 Sekunden Timer  
// Strawberry = 100 Sekunden Timer, Reset = 10 Sek


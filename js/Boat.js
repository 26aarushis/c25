class Boat {
    constructor(x, y, width, height, boatPos) {
        this.body = Bodies.rectangle(x, y, width, height);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.boatPosition = boatPos;
        World.add(world, this.body);

        this.image = loadImage("assets/boat.png"); 
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, this.boatPosition, this.width, this.height);
        pop();
    }
}
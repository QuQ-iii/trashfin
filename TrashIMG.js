class TrashIMG{
    constructor(){

        var options ={
            isStatic : true
        }
        // this.body = Bodies.rectangle(x,y,width,height,options)
        // this.width = width;
        // this.height = height;

        this.image = loadImage("dustbingreen.png");

        //World.add(world,this.body);
    }
    display(){
        //var pos = this.body.position;
        //rectMode(CENTER);
        //fill("red");

        imageMode(CENTER);
        image(this.image, 600, 320, 230, 155);

        //rect(pos.x, pos.y, this.width, this.height);
    }
}
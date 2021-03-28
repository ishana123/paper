class PaperBall{

constructor(x , y , r){
    super ( x , y , 50 , 50 )
    this.image = loadImage("paper.png");
    var option = {
        isStatic:false,
        restitution : 0.3,
        friction :0,
        density : 1.2 
    }
     
    this.x = x; 
    this.y = y;
    this.r = r ;
    this.body = Bodies.circle(this.x , this.y (this.r-20)/2 , option)
    World.add(world, this.body);

}

    display()
    {
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display();
        var p = this.body.position;
        push()
        translate(p.x , p.y);
        rectMode(CENTRE)
        strokeWeight(4);
        fill("white")
        pop()

    }
}
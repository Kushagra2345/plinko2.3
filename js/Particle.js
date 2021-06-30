class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

        this.gameState="Departure"

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);

        if (this.gameState==="Departure" && pos.y>500){
        if (pos.x<80 || pos.x>400){
            score=score+100
            this.gameState="Arrived1"
        }
        if ((pos.x>80 && pos.x<160)||(pos.x<400 && pos.x>320)){

            score=score+200
            this.gameState="Arrived2"
        }
        if (pos.x>160 && pos.x<320){
            score=score+300
            this.gameState="Arrived3"
        }

        if (countLeft===0){
            this.gameState="END"
        }
        }
        pop();

        textSize(20)
      
        console.log(this.gameState)

        text("Score : "+score,width-200,40)
        text("Attempts Left: "+countLeft,30,30)

    }


  

  
};
class Sand{
    constructor(x,y,r){
        var options={
            restitution:0.3,
            friction:6,
            density:0.5
        }

        this.x=x
        this.y=y
        this.r=r

        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world, this.body);


    }

    display(){
        var sandpos=this.body.position
        ellipseMode(CENTER)
        fill ("red")
        ellipse(sandpos.x,sandpos.y,this.r,this.r)




    }

}
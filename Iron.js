class Iron{
    constructor(x,y,w,h){
        var options={
            restitution:0.8,
            friction:3,
            density:30
        }

        this.x=x
        this.y=y
        this.width=w
        this.height=h


        this.body=Bodies.rectangle(x,y,w,h, options)

        World.add(world, this.body)


    }

    display(){

        var ironpos=this.body.position
        rectMode(CENTER)


        fill ("brown")
        rect(ironpos.x,ironpos.y,this.width,this.height)



    }

}